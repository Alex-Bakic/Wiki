## Learning Re-Frame Chapter 1

Let's not waste a minute! The first thing we need to do is define our application state, the in-memory database if you will, 

  ```Clojure
  (ns sketchy.core
    (:require [reagent.core :as r]
              [re-frame.core :as rf]))
  
  ;; remember we are making the "db" so we can ignore the first argument, 
  ;; nor do we expect any arguments so we can leave that out as well.
  (rf/reg-event-db
    :initialise
    (fn [_ _]
      {:ideas []}))
            
  ```
Now we're starting off quite simple, so the only event handlers we'll need for now are the ability to add and remove ideas from our vector. 

  ```Clojure
  ;; adding an idea shouldn't be too complicated, we just need to conj it the end. 
  ;; the component will pass us the text from the input box so we'll include it in the handler fn
  (rf/reg-event-db
    :add-idea
    (fn [db [_ idea]]
      (update-in db [:ideas] conj idea)))
      
  ;; now the removal is a bit lengthier, as we need to search the vector of ideas for the one that 
  ;; the user would like to remove. This functionality I'll put in a separate function
  (defn remove-idea
    [is i]
    (filterv (complement #(= % i)) is))
    ;; using filterv so that new ideas are added to the back, as we are working with vectors.
  ```
What filter will do is take out all the elements which return *true* so for example, `(filter odd? [1 2 3 4 5])` would give us back the odd numbers `(1 3 5)` but if we did that here, all that's left is the idea we wanted removed! The opposite of what we wanted. What we can do is use `complement` on the predicate which means the *only* idea that doesn't match will be the targeted one. 

So we can use this function with `update-in` to remove the given idea:

  ```Clojure
  (rf/reg-event-db
    :remove-idea
    (fn [db [_ idea]]
      (update-in db [:ideas] remove-idea idea)))
  ```
Alright , now I'll specify all the different database attributes the components can watch. Which is just the one at the moment :sweat_smile:.

  ```Clojure
  ;; monitors the ideas array, for any insertions or deletions
  (rf/reg-sub
    :ideas
    (fn [db _]
      (:ideas db)))
  ```
We're just going to watch the array , for now there is no need to return a given element but we might separate the data by category, rating or something. 

So , to recap. We've defined all the data , the operations on the data (the writes) and the requests for data (subscriptions). All that's left really is to define some views to use all this stuff...
  
