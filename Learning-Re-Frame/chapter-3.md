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
  
And that's all for the `events.cljs` file. It is much more readable and maintainable, the `subscriptions.cljs` is a bit interesting as I implement a new trick I've learnt. 
 
--- 

Now it's time for the fun part and to add some ui to this application. I've included [Bootstrap](https://getbootstrap.com) just to make things a lot simpler, but I'll add more bits and pieces to the [sketchy.css](https://github.com/Alex-Bakic/Sketchy/blob/master/resources/public/css/sketchy.css) as we go along. 
