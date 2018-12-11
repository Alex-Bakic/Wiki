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
  
The first thing we need to be able to do is add ideas to the db. A common technique used for input boxes is to define an atom , which initially just has `""` as the value, but `:on-change` it is updated. So that when they're ready to add the idea it is all there. Of course then we also need to describe a button, which when clicked on should dispatch the `:add-idea` event handler.

  ```Clojure
  (defn new-idea []
    ;; this is the atom which will be constantly updated.
    (let [val (r/atom "")]
      (fn []
        ;; the "#" indicates the id of this div
        [:div#new-idea
         [:input {:type "text"
                  :placeholder "Enter some ideas you have"
                  :value @val
                  :on-change #(reset! val (-> % .-target .-value))}]
                  ;; this resets val to the data inside the input box, which is inside the 
                  ;; event.target.value js property. This is covered in the intro.md file
         [:button {:on-click #(rf/dispatch [:add-idea @val])}
          "Add"]])))
  ```
  
Ok now we need the ability to actually see what we've added, so I'll define the `show-idea` component to specify each idea , and next to them have a delete button so the user can remove it. It simpler for us to extract out this functionality, so that each idea could be styled , moved or even the button itself removed. It's nicer than just looping through all the ideas and putting each one in this layout. 
 
  ```Clojure
  (defn show-idea [i]
    [:p
     [:span i]
     [:button  {:class "btn btn default" :on-click #(rf/dispatch [:remove-idea i])} 
      "Delete"]])
  ```
  
With this functionality `for` every idea, we'll call this function and pass it the idea.

  ```Clojure
   [:ul
    (for [i @db]
      [show-idea i])])
  ```

This is what's great about using re-frame, and clojure for that matter. It's all data, so we can pass the `for` macro as long as it returns an appropriate value. Now we'll need the db to be passed in, so in our final ui component (the wrapper for the app) we'll have to take the db as an argument. 

  ```Clojure
  
  (defn ui [db]
    [:div#ideas-list
     [:h3 "All of your ideas"]
     [new-idea]
     [:ul
      (for [i @db]
        [show-idea i])]]) 
        
  ;; end of views
  
  (defn ^:export start []
    ;; remember to get our db setup before we start to render anything
    (rf/dispatch-sync [:initialise])
    ;; make sure we are subscribed to keep up to date with all the ideas.
    (r/render [ui (rf/subscribe [:ideas])] (.getElementById js/document "root")))

  ```
