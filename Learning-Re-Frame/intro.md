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
 
 Now we want to connect our functions to the actual components rendering the db. 
 
-------------------------------------------------------------------------------------

Now, what does re-frame bring to the table that Reagent doesn't?

Re-frame brings structure.The frontend is all about handling user events. So when a user clicks something, hovers over a nav bar or starts typing, some event is invoked by their action. Events handlers are invoked, and in Reagent we have no way of *structuring* these handlers in any order, or configuration. What re-frame offers us is an **event queue**. So when a user clicks on a "buy button" or whatever this handler can be added to the queue for invokation. How this works is, inside our component , when we describe the `:on-click` or `:on-change` behaviour that is when we can reference the correct re-frame event-handler and add it to the queue via the `re-frame.core/dispatch` function:

  ```Clojure
  (require '[re-frame.core :as rf])
  
  (defn idea-button [idea]
    [:button
      {:on-click (fn [e] (.preventDefault e) (rf/dispatch [:add-idea! idea]))} "Add idea"])
  ```
The idea with dispatch is that you can focus your component's effort on rendering HTML. It doesn't have to know about the database, how to construct an entry. It should be a view which holds the correct handler which does the work for it.

Events are vectors. The first being the name of the handler, `:add-idea!` and the remaining elements being any arguments that the handler requires, in this case the idea itself. As we called `dispatch` the handler is then added to the event queue for processing, where they are resolved one at a time. 



-- to do, 

-the overall concepts of re-frame
-the parts which comprise a re-frame application
-a look at the very basic todomvc example with walkthrough
-using those parts start build own project showing adaptation
