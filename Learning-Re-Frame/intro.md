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

What's nice about this is that you don't have to remember the closing brackets of the html tags, making it much more succint than a standard javascript component. The render function is quite straightforward too, it essentially says "What component are we rendering and what are we rendering on?". We can safely say we will be using the DOM for all of our renders.

The next thing that Reagent offers us are `reagent atoms`. Now you're probably thinking what makes them so special? Well when we make changes to the atom, the change is then signalled to all the referencers of the atom and the changes are then re-rendered for all the components using the atom, which is pretty sweet. Now then, what does re-frame bring to the table that Reagent doesn't?

Re-frame brings structure. Although many user events are fairly simple, like hovering over an item of a nav bar or clicking on the home button, some events can be very complicated. For example, clicking on a buy button or rendering the user's details last time they conducted a session with our site. What re-frame does is separate, categorise and manage these interactions for us, at each stage , keeping us as far away as possible from the realm of side-effects. 

Let's take a look at this simple component:

  ```Clojure
  ;; button to update a counter
  (defn add-count-btn []
    [:div
     [:button {:on-click #(update-counter)} 
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

The idea with dispatch is that you can focus your component's effort on rendering HTML. That is very much the ethos of re-frame. To make components as unaware of the procedures as possible. Now this makes re-frame quite opinionated, it's got it's own methodology of making components simple, but it's certainly worth it for the result being decoupled, straightforward applications. Components don't have to know about the database, how to construct an entry. **It should be a view which holds the correct handler which does the work for it**.

So, this is how we could register the `:update-counter` event handler in re-frame:

  ```Clojure
  (rf/reg-event-fx    ;; register an event handler
    :update-counter   ;; the keyword will be used as the key to the actual handler
    (fn [{:keys [db]} [_ _]]  
      {:db (update db :count inc)}))
 
  ```
The first argument to our handler is the co-effects, or the application state, that re-frame manages for us. This highlights one aspect of re-frame's design, it will pass the application state, as one map , to every event handler which is then able to *return their own map with the updated values*. We need to destructure this though as we are only concerned with referencing our built-in database, and not any other type of co-effect like making ajax calls. 
 
We destructure and grab the `:db` out of the map which is they key to our in-memory db. The second argument is the same vector which `dispatch` was given, but we omit it as we don't need our own name given back to us, nor is there are data in that vector. 

Event handlers are meant to be *pure functions* in re-frame. They are fed the db which has whatever contents at that time, and manipulates the contents. The map that is returned is the new state of the db which is then updated for other event handlers to use.Re-frame's philosophy is to push the effects into the corner of the application and have their reach minimised. This makes testing the event handlers themselves easier, as you just have to check the data and the components checks are even simpler.All we have to do with event handlers is explain what we want our data to look like after we have been dispatched. What we  would like is that our `:count` (they key holding the value of the counter) to be incremented. Re-frame takes care of getting that map and then making the changes, so we don't have to really get involved with much of the "low level" detail. In fact, updating the `:db` key is such a common operation, that re-frame has a simpler way of registering events that are just for working with the db (hence they are only working with the one co-effect) , which can be registered with the `rf/reg-event-db` function :

  ```Clojure
  ;; using the general registration for all event handlers
  (rf/reg-event-fx 
    :update-counter
    (fn [{:keys [db]} [_ _]]
      {:db (update db :count inc)}))

  ;; using the specific registration for event handlers working with the db
  (rf/reg-event-db
    :update-counter
    (fn [db [_ _]]
      (update db :count inc)))

  ;; we are passed the in memory db itself , meaning we can just specify the changes we would like to see
  ;; and re-frame takes care of the rest.
  ```
  
But how do we define the database and where is it? 

Much like we use the `reg-event-db` to update the database, we can also set default values when our application starts up. We can register an event which will provide our starting point like this:

  ```Clojure
  (rf/reg-event-db
    :initialise
    (fn [_ _]
      {:count 0}))
  ```

Now we only need to run this event *once*, when the application is being loaded , as we won't want need , nor want, the state to be wiped our reset as we would specify events that would do this if it needed to be a feature. In our `start` , or `run` function we can invoke it by doing :

  ```Clojure
  (defn ^:export start []
    ;; dispatch sync meaning to block all other processes and let this one complete uninterrupted.
    (rf/dispatch-sync [:initialise])
    ;; mount our ui into <div id="root"></div>
    (r/render [ui] (.getElementById js/document "root")))

  ```

So far, our simple counter application is looking like this

  ```Clojure
  (ns sketchy.core
  (:require [reagent.core :as r]
            [re-frame.core :as rf]))

  ;; give the application some state to start off
  (rf/reg-event-db
    :initialise
    (fn [_ _]
       {:count 0}))
  
  ;; the handler which will increment the counter
  (rf/reg-event-db
    :update-counter
    (fn [db [_ _]]
      (update db :count inc)))
      
  (defn ^:export start []
   (rf/dispatch-sync [:initialise])
   (r/render [ui] (.getElementById js/document "root")))
    
  ```
So far we've established a database and the function that handles updating the counter. Next, we'll define some ui to actually render on screen and look at how we can not only write to the db  with `events` but also read, with `subscriptions`.

Subscriptions are links we make to the database that "subscribe" to a particular attribute. When the value of that attribute changes, then re-frame does the job of recalling our subscription to get the updated value. So in our simple counter example, we could have a subscription that monitors the `:count` key in our db :

  ```Clojure
  (rf/reg-sub        ;; registers a subscription
    :count           ;; usually named the attribute we are subbed to
    (fn [db _]       ;; takes the db, we don't need the second arg as it is just our own keyword passed back
      (:count db)))  ;; the value that is checked by re-frame for any changes.
  ```
So now we have a nice, decoupled method for the component to access the database, but whenever the value changes due to an event handler, the subscription of to the value is updated, and so is our component. For a component to get the readings of the subscription (to become a subscriber) we use the `rf/subscribe` function.

  ```Clojure
(defn current-count []
  ;; Subscribe returns an atom with the state inside, so we need to dereference it.
  ;; if we dereference it in the let form, instead of in the :span , then we are just 
  ;; binding the value to counter, which doesn't change. subscribe doesn't return new values
  ;; it returns new atoms with the updated state. So if you use subscribe in a let form
  ;; don't deref it too!
  (let [counter (rf/subscribe [:count])]
    (fn []
      [:div 
        [:span @counter]])))
       
  ;; if you weren't doing any other manipulations, just do
  
  (defn current-count []
    (fn []
      [:div 
        [:span @(rf/subscribe [:count])]]))
  ;; it is never bound , so it allows the atom to change.
  ```

Alright, now let's define the next component, which will be the button for the user to increment the counter. When the user clicks the button , we will want re-frame to add the `:update-counter` to the queue, which we can do with `dispatch`. When that handler is executed it will modify the db, meaning our subscription fires off and we should be left with a working application :smiley:

  ```Clojure
  (defn add-count-btn []
    (fn [] 
      [:div
        ;; :update-counter doesn't take any arguments, so just supply the correct handler
        [:button {:on-click #(rf/dispatch [:update-counter])}
          "increment"]]))
  ```
Ok, we don't quite have an application. We just need to wrap this all in a component for reagent to render, then we're ready to play around with it.

  ```Clojure
  
(defn ui []
   (fn [] 
     [:div
       [current-count]
       [add-count-btn]]))

;; make sure you have the start function specified in your project.clj , boot.clj file etc.
(defn ^:export start []
  ;; run the function which sets up the db state when the app is being ran
  (rf/dispatch-sync [:initialise])
  ;; render our components onto the div with id "root"
  (r/render [ui] (.getElementById js/document "root")))
  
  ```
All this code , and the prerequisites to run it , can be found in the `counter` folder. If you clone this repo you can mess around with the [Counter](https://github.com/Alex-Bakic/Sketchy) project. `cd` into it and run `lein figwheel` to start messing around with it. 

The next chapter of this section is going to focus back on my `Sketchy` mini project, which will be a bit more complex and act as a better spokesperson for using re-frame. You probably wouldn't need all this just for a counter and some text, but it is good as an introduction to it's philosophy and structure. Now it's time for the next chapter!
