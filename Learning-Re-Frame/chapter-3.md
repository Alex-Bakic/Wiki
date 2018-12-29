## Learning Re-Frame Chapter 3

In this section I am going to introduce the new architecture of sketchy, and thus the new event handlers and subscriptions. I'll be building off of the local-storage functionality described last-chapter to hopefully showcase a working application.

I chose to rework the design as it is flawed for a couple of reasons. Our application has ideas, but we will want to add metadata to them. We want keywords to describe the type of idea it is. Maybe a sketch, a one-liner joke or a story. Likewise with comments, they will contain additional details that will relevant to a particular idea. A vector isn't this expressive on it's own and it only has indexes to categorise and order data. We will need ids as a key to separate each idea, as the idea itself will be "on the same level" as the comments and keywords. This makes it simple for the user to add metadata as they just need the id. But then the user will also decide to delete in random places in the structure and it will mean the ideas are not consecutive so we cannot loop over the ids as it would return nil for all the missing ones when doing renders and things. So we could utilise a sorted-map, making the id the key and meaning we can stop looping and leverage the power of random access.

All in all, our `:initialise` doesn't need to change as it just takes out what is in the local-storage. What we need to do is make sure we are injecting the sorted-map into the handler. So, 

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
 
---

Now it's time for the fun part and to add some ui to this application. I've included [Bootstrap](https://getbootstrap.com) just to make things a lot simpler, but I'll add more bits and pieces to the [sketchy.css](https://github.com/Alex-Bakic/Sketchy/blob/master/resources/public/css/sketchy.css) as we go along. 
