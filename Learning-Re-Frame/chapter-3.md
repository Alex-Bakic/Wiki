## Learning Re-Frame Chapter 3

In this section I am going to introduce the new architecture of sketchy, and thus the new event handlers and subscriptions. I'll be building off of the local-storage functionality described last-chapter to hopefully showcase a working application.

I chose to rework the design as it is flawed for a couple of reasons. Looping for every operation is very tedious and will be very costly when the number of ideas grows as we don't have the benefits of using the vector's indexing functionality for random access. This is because we need to create maps that hold all the data of the ideas, comments etc.To change the structure of the data I will need ids as a key to separate each idea, as the idea itself will be "on the same level" as the comments and keywords. This makes it simple for the user to add metadata as they just need the id. But then the user will also decide to delete in random places in the structure and it will mean the ideas are not consecutive.Meaning we cannot loop over the ids as it would return nil for all the missing ones when doing renders and things. The order of elements would also change under a normal map, affecting the order of ideas the user sees each time they log back in, so we need to utilise a sorted-map, making the id the key and meaning we can stop looping and leverage the power of random access.

All in all, our `:initialise` doesn't need to change as it just takes out what is in the local-storage. What we need to do is make sure we are injecting the sorted-map into the handler.

  ```Clojure
  ;; in the db.cljs file, the :local-store-ideas cofx
  
  ;;before
  (into [] ...)
  
  ;; after
   (into (sorted-map) ...)
  ```

Now we need to fix our handlers so that they work by using the `:id` and `:comments`/`:keywords` keys. 

  ```Clojure
  ;; adding an idea to the db
  (rf/reg-event-db
    :add-idea
    [->storage]
    (fn [db [_ id idea]]
      (assoc db id {:idea idea :comments [] :keywords []})))
  ```
 
`add-idea` will need both the id and the idea to create an ordered, easily accessible entry. Now we don't see the benefits of the new method just yet as this handler was always straightforward, but we shall when we get to the metadata.

Next is the `:remove-idea` handler:

  ```Clojure
  ;; remove an idea given the id 
  (rf/reg-event-db
   :remove-idea
   [->storage]
   (fn [db [_ id]]
     (dissoc db id)))
  ```
This is pretty nice, in the old version we had a helper function that would filter out the idea that was passed to it. It's much more readable and all it takes is the id to do its work.

  ```
  ;; add a comment to the db given the id and the data
  (rf/reg-event-db
    :add-comment
    [->storage]
    (fn [db [_ id comment]]
      (update-in db [id :comments] conj comment)))

  ;; add a keyword to the db given the id and the data
  (rf/reg-event-db
    :add-keyword
    [->storage]
    (fn [db [_ id kw]]
      (update-in db [id :keywords] conj kw)))
  ```

Now we're seeing the benefits of random access. In previous solutions to these handlers I was looping over to get the index of the idea we needed to add and then use `update-in` with that result. By making sub-maps it allows us to bypass all that weird logic and rely on keys for simple updates.

In fact, the only helper functions that I'll need is to sift through all the comments/keywords and filter the correct one out. But apart from that our event handlers are very simple.

  ```Clojure
  ;; find the comment out of the vector and remove it
  (defn delete-item
    [db meta-data]
    (filterv (complement #(= % meta-data)) db))

  ;; remove a comment from the db given the id and the data
  (rf/reg-event-db
    :remove-comment
    [->storage]
    (fn [db [_ id comment]]
      (update-in db [id :comments] delete-item comment)))


  ;; remove a keyword from the db given the id and the data
  (rf/reg-event-db
    :remove-keyword
    [->storage]
    (fn [db [_ id kw]]
      (update-in db [id :keywords] delete-item kw)))
  ```
  
And that's all for the `events.cljs` file. It is certainly simpler but as we take a look at the  `subscriptions.cljs` file it is a bit more interesting as I implement a new trick I've learnt. 

First off I thought it would be good for handlers to avoid having to make calculations for the last-id every time they want to add an idea, and what a subscription could do is have that number already stored by doing 

  ```Clojure
  (last (keys db))
  ```
 
This way it saves doing the re-calculation. But for a subscription to use this it has to then subscribe to it themselves. For a subscription to do this we need to specify what is called a `signal` function. How I think of it is like an interceptor in that it will supply the subscriptions to the first argument of our actual subscription fn, and allow us to use them directly.

  ```Clojure
  ;; simple sub, no signal fn
  (reg-sub 
    :last-id
    (fn [db [_ _]]
      (last (keys db))))
  
  ;; I define this sub as the signal fn effectively supplies all the data
  ;; that the subscription fn will have access to, we of course want it to have
  ;; access to the actual db.
  (reg-sub
    :db
    (fn [db _]
       db))
  
  ;; to use :last-id, need to use signal fn
  (reg-sub
    :ideas
     ;; this is the signal fn. As we have multiple things we want to watch, we put them all in 
     ;; a vector to return.
     (fn [query-v _]
       [(subscribe [:db])
        (subscribe [:last-id])])
      ;; destructure the data out and use for simpler calculations.
      (fn [[db last-id] _]
      ;; as range is start inclusive end exclusive
        (for [id (range 0 (inc last-id))] (get-in db [id :idea]))))
  ```

So what this allows us to is sift through all the ids and return a list of them for the view to render. Now as for the other subscriptions it is fairly simple as all the `:comments`/`:keywords` need is the `id` and they subscribe to the relevant metadata.

  ```Clojure
  (reg-sub
    :comments 
    (fn [db [_ id]]
      (get-in db [id :comments])))

  (reg-sub
    :keywords
    (fn [db [_ id]]
      (get-in db [id :keywords])))
  ```

So now we've established our db, a way to manipulate the db and a way for the views to see the changes. Now it's time for the fun part and to add some ui to this application. I've included [Bootstrap](https://getbootstrap.com) just to make things a lot simpler, but I'll add more bits and pieces to the [sketchy.css](https://github.com/Alex-Bakic/Sketchy/blob/master/resources/public/css/sketchy.css) as we go along. 

First we need to go into `resources/public/index.html` and make sure we've specified our scripts, our stylesheets and that we've called our `sketchy.core.start` function. Now we can use [figwheel](https://github.com/bhauman/lein-figwheel) to test and manage our ui components, which is a major plus.

  ```html
  <!doctype html>
  <html>
    <head>
      <title>Sketchy</title>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
      <link rel="stylesheet" href="css/sketchy.css">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
    </head>
    <body>
      <h1>Welcome to Sketchy, share an idea today</h1>
      <div id="root"></div>
      <script src="js/client.js"></script>
      <script>sketchy.core.start()</script>
    </body>
  </html>
  ```

The reason we have two scripts instead of just calling the function when we source our code is that the first script *just* sources it and doesn't evaulate references we make to that file. To do that we would make a call after, as when it has evaluated it'll move onto the next tag, which is our last script and invoke it to start the application.

As for what's being started up, let's look in the `core.cljs` file

  ```Clojure
  (ns sketchy.core
    (:require [reagent.core :as r]
              [re-frame.core :as rf]
              [sketchy.components.show-ideas :refer [show-all-ideas]]
              [sketchy.components.add-ideas :refer [add-idea]]
              [sketchy.db :as d]
              [sketchy.events :as e]
              [sketchy.subs :as s]))

  (defn ui []
    [:div {:class "ui"}
     [:div {:class "ui-input"} 
      [add-idea]]
     [:div {:class "ui-header"}
      [:h1 "All your ideas"]]
     [:div {:class "ui-content"} 
      [show-all-ideas]]])

  (defn ^:export start []
    (rf/dispatch-sync [:initialise])
    (r/render [ui] (.getElementById js/document "root")))
  ```

Now the crux of the application is taking ideas as input, so let's define our `add-idea` component:

  ```Clojure
  (defn add-idea []
    (let [val (r/atom "")
        ;; the subscription shouldn't be referenced as well here, as
        id (rf/subscribe [:last-id])]
      ;; if you're using let forms to define data, you need to return a render fn
      ;; just using the let and no function we wouldn't be able to type anything
      ;; into the input. As the val defined would not be properly referenced.
      (fn []
        ;; using bootstrap to style the input to look less awful
        [:div {:class "row"}
          [:div {:class "col-lg-6"} 
           [:div {:class "input-group input-group-lg input-container "}
             [:input {:type "text"
                      :class "form-control add-idea"
                      :placeholder "save something!"
                      :value @val
                      :on-change #(reset! val (-> % .-target .-value))}]
             [:button {:class "btn btn-default" 
                       :on-click #(rf/dispatch [:add-idea (inc @id) @val])}
               ;; use of the font awesome icons too
               [:i {:class "far fa-lightbulb"}]]]]])))
  ```

Try it, swap between the render fn [(a level 2 component)](https://github.com/reagent-project/reagent/blob/master/doc/CreatingReagentComponents.md#form-2--a-function-returning-a-function) and just returning the data [(a level 1 component)](https://github.com/reagent-project/reagent/blob/master/doc/CreatingReagentComponents.md#form-1-a-simple-function). The thing to remember is that if there is reference to subscriptions, atoms or any dynamic data you need a render function. Otherwise the changes won't be re-rendered as there isn't a function to re-call. In our case for each `on-change` the function would not re-render and we wouldn't see the input change.

So now that's taken care of we now need to focus on showing ideas.

The way I'm going to show the ideas is using [cards](https://getbootstrap.com/docs/4.0/components/card/). The idea will the `card-title`, the keywords will be little buttons in the `card-subtitle` and the comments are going to be a list of items in the `card-body`. We will have to reference the corresponding views for showing comments and such in the `show-idea` , as some of these views need the idea that gets passed along to render specific data. 

  ```Clojure
  ;; for each individual card
  (defn show-idea [id idea]
    [:div {:class "col-sm-6"}
                   [:div {:class "card"}
                    [:div {:class "card-body"}
                     [:h3 {:class "card-title"} 
                      ;; gap is just so the button doesn't stick. Simpler than specifiying a 
                      ;; class just to give a bit of margin-left
                      (str idea "  ")
                      [:button  {:class "btn btn-default" :on-click #(rf/dispatch [:remove-idea id])}
                       [:i {:class "fas fa-minus"}]]]

                     ;; part for the add - and - show keywords views
                     [show-all-keywords id]
                     [add-keyword id idea]

                     ;; part for the add - and - show comments views
                     ;; add-comment is included as the first list item in 
                     ;; show-all-comments
                     [show-all-comments id]]]])
  ```
  
Now all that's left is to allow the user to add keywords and comments and that's it.
  
For adding keywords it'll be a simple, small input box in the card's subtitle area, and the keywords themselves should be buttons that remove themselves when clicked on.

  ```Clojure
  (defn add-keyword [id idea]
    (let [val  (r/atom "")
          clear #(reset! val "")
          save #(rf/dispatch [:add-keyword id @val]
                 (clear))]
      (fn [id idea]
        [:div {:class "input-group input-group-sm mb-3"} 
          [:input {:type "text"
                   :class "form-control"
                   :placeholder "Keywords here"
                   :value       @val
                   :auto-focus  true
                   :on-change   #(reset! val (-> % .-target .-value))
                   :on-key-down #(case (.-which %)
                                        13 (save)
                                        nil)}]])))
  ```

I wanted to have the input for the keyword succint and the button makes it look cluttered, so I added the ability for the user to just press enter when they're done typing. I'll add it to the comments input for the same reason, but I like the button for the idea input as it's meant to be a big moment when you add it, as the idea is important. It removes the implusivity of adding any old idea that comes to mind.

Moving on, we now need to show all the keywords. Meaning we need to be subscribed to the current set, given an idea, and insert the buttons into the `card-subtitle`.

  ```Clojure
  ;; for one keyword
  (defn show-keyword [id kw]
    ;; kw-btn is just a few tweaks to the button, found in sketchy.css
    [:button {:class "btn btn-info kw-btn"
              :on-click #(dispatch [:remove-keyword id kw])}
      [:span [:h6 (str kw)]]])

  ;; for every keyword
  (defn show-all-keywords [id]
    (let [kws (subscribe [:keywords id])]
      ;; remember that this is how
      (into [:div {:class "card-subtitle"}] 
            (for [kw @kws] 
              [show-keyword id kw]))))
  ```

And lastly, for the comments
  
