## Learning Re-Frame Chapter 1

Let's not waste a minute! The first thing we need to do is define our application state, the in-memory database if you will, 

  ```Clojure
  (ns sketchy.core
    (:require [reagent.core :as r]
              [re-frame.core :as rf]))
  
  ;; remember we are making the "db" so we can ignore the first argument, 
  ;; nor are we using the argument vector so we can leave that out as well.
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
Onward to the subscriptions. Now I'll specify all the different database attributes the components can watch. Which is just the one at the moment :sweat_smile:.

  ```Clojure
  ;; monitors the ideas vector, for any insertions or deletions
  (rf/reg-sub
    :ideas
    (fn [db _]
      (:ideas db)))
  ```
We're just going to watch the array , for now there is no need to return a given element but we might separate the data by category, rating or something. 

So , to recap. We've defined the structure of our data , the operations on the data (the event handlers) and the requests for data (subscriptions). All that's left really is to define some views to use all this stuff...
  
The first thing we need to be able to do is add ideas to the db. A common technique used for input boxes is to define a reagent atom , which initially just has `""` as the value, but `:on-change` it is updated. So that when they're ready to add the idea it is all there. Of course we also need to describe a button, which when clicked on should dispatch the `:add-idea` event handler.

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
  
Ok now we need the ability to actually see what we've added, so I'll define the `show-idea` component to specify each idea , and next to them have a delete button so the user can remove it. It's simpler to extract this functionality, so that each idea could be styled , re-designed or even the button itself removed. It's nicer than just looping through all the ideas and putting each one in this layout as it's harder to test.
 
  ```Clojure
  (defn show-idea [i]
    [:p
     [:span i]
     [:button  {:on-click #(rf/dispatch [:remove-idea i])} 
      "Delete"]])
  ```
  
With this functionality, `for` every idea we'll call this function and pass it the idea.

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
Whilst there is anything *technically* wrong with this, and it will allow you to add and remove data it isn't very efficient. This is because , in the `start` function, the *entire* ui is subscribing to `:ideas`, meaning for every change there has to be a complete re-rendering. 

What makes re-frame so good is that we can make things so efficient, so easily. Just by breaking up components into the smallest possible bits, they can subscribe to data and only those bits change when they have to. In this case the functionality which needs the db is our little `for` macro code for generating all the ideas. If we just move this out,

  ```Clojure
  (defn show-all-ideas []
    (let [db (rf/subscribe [:ideas])]
      [:ul
        (for [i @db] [show-idea i])])) 
  ```
  
 Now we just reference this component in the ui and this is much more efficient. However, we now seem to get this error:
 
 ```Warning: Every element in a seq should have a unique :key```
 
Now this error comes from Reagent, when rendering, as it is concerned that we are generating code which have "identical" keys. What this means is as the list of items grows in size, it makes it difficult for the underlying system to optimise the rendering. The solution to this is to wrap it all in a `:div`, or `(into [:div] (for [i @db] ...))` which also works as the item are wrapper in a unique divider. It's not uncommon to see this as well though, for dynamically generated children nodes:

  ```Clojure
  (defn show-all-ideas []
    (let [db (rf/subscribe [:ideas])]
    [:ul
     (for [i @db]
       ^{:key i} [show-idea i])])) ;; this will make sure that there is a map containing a unique pair for every element
  ```
  
 Now then, with those switches, our `ui` looks like this:
 
  ```Clojure
  (defn new-idea []
    (let [val (r/atom "")]
      (fn []
        [:div#new-idea
         [:input {:type "text"
                  :placeholder "Enter some ideas you have"
                  :value @val
                  :on-change #(reset! val (-> % .-target .-value))}]
         [:button {:class "btn btn-default" 
                   :on-click #(rf/dispatch [:add-idea @val])}
          "Add"]])))

  (defn show-idea [i]
    [:p
     [:span i]
     [:button  {:class "btn btn default" :on-click #(rf/dispatch [:remove-idea i])} 
      "Delete"]])

  (defn show-all-ideas []
    (let [db (rf/subscribe [:ideas])]
      [:ul
        (into [:div#ideas-list] (for [i @db] [show-idea i]))]))

  (defn ui []
    [:div#ui
        [new-idea]
        [:h3 "All your ideas"]
        [show-all-ideas]]) 

  (defn ^:export start []
    (rf/dispatch-sync [:initialise])
    (r/render [ui] (.getElementById js/document "root")))
  ```
This app's about to get a lot more interesting. But to accomodate the complexity, we're going to have to split this core file up. Due to the fact we're going to be adding more handlers, more components which will completely convolute our core file. What we can do is put all the ui elements into a `components` folder, the event-handlers into an `events` file, the subscriptions in another etc. 

So, doing a before and after on the project structure:

  ```Clojure
  ;; before
  | -- src/
       | -- sketchy/
            | -- core.cljs ;; which houses everything
  
  ;; after
  | -- src/
       | -- sketchy/
            | -- core.cljs ;; only houses the one ui element, and the start fn now
            | -- components/ ;; stores all the app's views
                 | -- add_idea.cljs ;; remember the underscore instead of the dash...
                 | -- show_ideas.cljs 
            | -- subs.cljs ;; where all the subscriptions can be found
            | -- events.cljs ;; where all the event handlers can be found
  ```

If we take a peek into the `components` folder, specifically the `add_idea.cljs` file you'll see:

  ```Clojure
  (ns sketchy.components.add-idea
    (:require [reagent.core :as r]
              [re-frame.core :as rf]))

  (defn new-idea []
    (let [val (r/atom "")]
      (fn []
        [:div#new-idea
         [:input {:type "text"
                  :placeholder "Enter some ideas you have"
                  :value @val
                  :on-change #(reset! val (-> % .-target .-value))}]
         [:button {:class "btn btn-default" 
                   :on-click #(rf/dispatch [:add-idea @val])}
          "Add"]])))
  ```

We don't actually have to specify the event-handlers from the `events.cljs` file, this is because **it is all registered on re-frame** , it knows where everything is and where things are being dispatched from. It pulls together all the different elements of our application together, and we don't have to specify in every file that we are requiring the event or subscription we are making reference to. The only place we need to require everything is in the core file. That is the central point of our app, where all the parts come together, the individual parts points don't need to worry apart from anything but their own definitions.

Speaking of the `core.cljs` file, it now looks like this:

  ```Clojure
  (ns sketchy.core
    (:require [reagent.core :as r]
              [re-frame.core :as rf]
              [sketchy.components.add-idea :as ai]
              [sketchy.components.show-ideas :as si]
              [sketchy.events :as e]
              [sketchy.subs :as s]))

  (defn ui []
    [:div#ui
        [ai/new-idea]
        [:h3 "All your ideas"]
        [si/show-all-ideas]]) 

  (defn ^:export start []
    (rf/dispatch-sync [:initialise])
    (r/render [ui] (.getElementById js/document "root")))
  ```

Remember, everything covered here and more is the in the [Sketchy](https://github.com/Alex-Bakic/Sketchy/blob/master/src/sketchy/core.cljs) directory.In the next chapter, we're going to be looking at adding local-storage capability, to make this application a bit more practical.
