## The Re-Frame Framework 

Re-Frame is a library that is built upon [Reagent](https://github.com/reagent-project/reagent), an interface for
Clojurescript to React.js, which will allow us to build robust SPAs (Single Page Applications).

I'm going to change the way I do this section of the "Learning-\**tool here\**" series, by making a small project on the side that I will be attempting to build as I go along. The aim will be to structure the knowledge both you and I will get from this into a small project. The project in mind is a spin on a classic [todomvc](http://todomvc.com/) app, but it is geared more towards storing comedy sketches and ideas, which can be found [here](https://github.com/Alex-Bakic/Sketchy):

To start off, let's take a look at Reagent. 

It essentially gives us two things. One , that I'll show below, are the mechanisms to write components, which are just sections of our website written in a [Hiccup](https://github.com/weavejester/hiccup)-like syntax. The second is an atom, but with additional functionality to aid us in managing the state on the front-end.

  ```Clojure
  ;; here is an example of a very simple component that we can define with reagent (& subsquently re-frame).
  
  ;; in sketchy/core.cljs
  (ns sketchy.core
    (:require [reagent.core :as r]))
  
  (defn welcome
    [name]
    [:div
      "Hello there" name " ,Welcome to Sketchy"])
      
   ;; and to make sure this component is rendered.
   (defn render-welcome []
     (r/render [welcome]
     (.-body js/document)))
  ```

What's nice about this is that you don't have to remember the closing brackets of the html tags, making it much more succint than a standard react component. The render function is quite straightforward too, it essentially says "What component are we rendering and what are we rendering on?". We can safely say we will be using the DOM for all of our renders.

The next thing that Reagent offers us are `reagent atoms`. Now you're probably thinking what makes them so special? Well when we make changes to the atom, the change is then signalled to all the watchers of the atom and the changes are then re-rendered for all the components using the atom, which is pretty sweet. If you clone the [Sketchy](https://github.com/Alex-Bakic/Sketchy) repo, and run `lein figwheel`, start messing with the core file and swap between the `r/atom` and `atom` to see the differences. It is interesting that the changes aren't rendered when we click the button. This is because the regular atom doesn't call the render function.

Before we dive into Re-Frame I think it would be worthwhile to have a look at the layer below it in a little more detail with a simple mini-project. Reagent allows us to make simple projects and I describe simple to be using atoms as our db , and with little need for re-frame's structure. 

To get started let's define our in memory database with an atom

  ```Clojure
  (require '[reagent.core :as r])
  
  ;; the :ideas key is paired to a vector which is contains all the separate strings (sketch ideas)
  (def app-state (r/atom {:ideas []}))
  ```

So now we have specified our data, we need some functions to operate and manipulate it. Namely, we will want functions that can add and remove ideas to and from the database. Let's define a generic function which will "update" the atom in whatever way we specify. 

  ```Clojure
  (defn update-ideas! 
    [f & args]
    ;; swap! takes a coll, f and args. 
    ;; we supply update-in as f and it needs the ks, function and arguments to manipulate our atom.
    ;; we don't need to supply the app-state to update-in too as it get's called by swap with the app-state.
    (apply swap! app-state update-in [:ideas] f args))
  ```
 Now that is covered we can specify the two specialised functions :
 
  ```Clojure
  (defn add-idea! 
    [i]
    ;; so our update is just to add another idea to the end of the vector.
    (update-ideas! conj i))

  (defn remove-idea! 
    [i]  
    ;; our update here is to search through through the vector until we find the item 
    ;; we wanted remove and hence remove it. remove will then return the result as a seq, 
    ;; but to keep with the design of the db we want it to be kept as a vector.
    ;; this allows us to see all new ideas added to the back instead of the front.
    (update-ideas! (fn [is] (vec (remove #(= % i) is)))
                    i))

  ```
 Now we want to connect our functions to the actual components rendering the db's state. 
 
  ```Clojure
  (defn show-idea [i]
    [:li
    [:span i]
    [:button {:on-click #(remove-idea! i)} 
      "Delete"]])
  ```
 
So this is the first component, it is essentially what we want rendered for each idea. The idea itself and a corresponding button to delete it. The key thing would probably be the  `:on-click` map. We can supply a function which then calls the relevant event handler. Now if you were to just call the function directly it will not work, so I assume something is done with the anonymous function before it, but in all honesty I don't know why it can't be called directly :sweat_smile:.
 
Besides from showing existing ideas, we want the ability to add new ones. So let's write up a component that will let us do this :

  ```Clojure
  (defn new-idea []
    (let [val (r/atom "")]
      (fn []
        [:div
         [:input {:type "text"
                  :placeholder "Enter some ideas you have"
                  :value @val
                  :on-change #(reset! val (-> % .-target .-value))}]
         [:button {:on-click #(add-idea! @val)}
          "Add"]])))

  ```
The reason that we define an `r/atom` is because our input is going to change. We won't always be typing the exact same idea. Each time we type in a different idea the value of val will change and `:on-change` it will be reset. `reset!` takes the atom and the new value. `(-> % .-target .-value)` is essentially the same as `(.-value (.-target %))` which is how we reference the underlying [javascript properties](https://www.w3schools.com/js/js_object_properties.asp), in this case the `event.target.value` property. We are setting the value of this property to the value `:on-change` got passed so it can be rendered on the dom. 

And lastly, we need a final component to show all the ideas we have added. We will use the first component we defined to be rendered for every idea and we will also incorporate the `new-idea` component so that we have a complete view.

  ```Clojure
  (defn ideas-list []
    [:div
     [:h1 "All of your ideas"]
     [:ul
      (for [i (:ideas @app-state)]
        [show-idea i])]
     [new-idea]])
  ```
This is another good example of why reagent is so powerful, as we can seemlessly, integrate normal clojure macro's and functions into the view **as it is all just data**. The `[new-idea]` snippet is how we can reference other components and combine them together. All in all we have a complete, albeit very minimalistic application. 

The next steps will be to add some features, like local storage.

Let's look at integrating local storage into the app. It's purpose is to preserve all the ideas we add to the app. That way we can come back and see what we have written. The simplest way to do this is to use the [storage-atom](https://github.com/alandipert/storage-atom) library. It gives us a simple interface for adding and removing things from the store. Here's how we could get it set-up

  ```Clojure
  ;; add this to your project.clj dependencies
  [alandipert/storage-atom "2.0.1"]
  ```
Now use it in our `core.cljs` file

  ```Clojure
  (ns sketchy.core
    (:require [reagent.core :as r]
              [alandipert.storage-atom :refer [local-storage]]))
  
  ;; before
  (def app-state (r/atom {:ideas []}))

  
  ;; now
  (def app-state (local-storage (r/atom {}) :ideas))
  ```

So `local-storage` takes an atom, still our means of recording state, and it takes and atom and a key that maps to the atom, as we may wish to add more atoms to local storage. When we do `@app-state` , or `reset!`, `swap!` they work the exact same! But this time the local storage is written to as well, as well as the reagent renderings. Now when we close the tab, even shutdown the webserver the data on there will persist! It's a really nice and quick way making projects a bit more usable and convenient.

So I think I'll leave it there for our introduction to Reagent. Of course this isn't much of a tutorial as we've just gone over how to make components, but it's enough to move us on to incorporating it with re-frame. The [Sketchy readme](https://www.github.com/Alex-Bakic/Sketchy/README.md) is the place where I'll cover the mini-project in more detail.

------------------------------------------------------------------------------------------------------------------------

Now then, what does re-frame bring to the table that Reagent doesn't?

Re-frame brings structure.The frontend is all about handling user events. So when a user clicks something, hovers over a nav bar or starts typing, some event is invoked by their action. Like this for example : 

  ```Clojure
  ;; button to update a counter
  (defn add-count-btn [i]
    [:div
     [:button {:on-click #(update-counter i)} 
       "increment"]])
     ;; so we would say that update-counter is our event handler.  
  ```

Now while it is simple to invoke event handlers and for them to work, in Reagent we have no way of *structuring* these handlers in any order or configuration. When a project grows in complexity we will have multiple handlers firing off, for authentication , for communicating with another API or DB. Bigger applications need to be streamlined, one of the things re-frame offers us is an **event queue**. 

So when a user clicks on "increment" or whatever this handler could be added to the queue for invokation. How this works is pretty much the same inside our component , when we describe the `:on-click` or `:on-change` behaviour that is where we can reference the re-frame event-handler we want and add it to the queue using the `re-frame.core/dispatch` function:

  ```Clojure
  (require '[re-frame.core :as rf])
      
  (defn add-count-btn []
    (fn [] 
      [:div
        [:button {:on-click #(rf/dispatch [:update-counter])}
          "Increment Counter"]]))   
  ```
The `dispatch` function expects a vector, with the first element being the name of the event handler itself. The reason we use a keyword will become evident later on, but it seems that we are really just **supplying a key to some sort of map which holds all of our event handlers**. The remaining elements supplied to `dispatch` are any arguments that the handler requires, in this case none so we leave it at that. 

As we called `dispatch` the handler is then added to the event queue for processing, where they are resolved one at a time. 

The idea with dispatch is that you can focus your component's effort on rendering HTML. That is very much the ethos of re-frame. To make components as unaware of the procedures as possible. Now this makes re-frame quite opinionated, it's got it's own methodology of making components simple with not much flexibility in it's architecture , but it's certainly worth it for the result being decoupled, straightforward applications. Components don't have to know about the database, how to construct an entry. **It should be a view which holds the correct handler which does the work for it**.

So, this is how we could register the `:update-counter` event handler in re-frame:

  ```Clojure
  (rf/reg-event-fx    ;; register an event handler
    :update-counter   ;; the keyword will be used as the key to the actual handler
    (fn [{:keys [db]} [_ _]]  
      {:db (update db :count inc)}))
 
  ```
The first argument to our handler is the co-effects, or the application state, that re-frame manages for us. This highlights one aspect of re-frame's design, it will pass the application state, as one map , to every event handler which is then able to *return their own map with the updated values*. We need to destructure this though as we are only concerned with referencing our built-in database, and not any other type of co-effect like making ajax calls. 
 
We destructure and grab the `:db` out of the map which is they key to our in-memory db. The second argument is the same vector which `dispatch` was given, but we omit it as we don't need our own name given back to us, nor is there are data in that vector. 

Event handlers are meant to be *pure functions* in re-frame. They are fed the db which has whatever contents at that time, and manipulates the contents. The map that is returned is the new state of the db which is then updated for other event handlers to use.Re-frame's philosophy is to push the effects into the corner of the application and have their reach minimised. This makes testing the event handlers themselves easier, as you just have to check the data and the components checks are even simpler.All we have to do with event handlers is explain what we want our data to look like after we have been dispatched. What we  would like is that our `:count` (they key holding the value of the counter) to be incremented. Re-frame takes care of actually invoking the effect and changing our database. 

Now let's take a look at how we define our app state :




  