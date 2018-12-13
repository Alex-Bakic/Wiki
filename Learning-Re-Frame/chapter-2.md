## Learning Re-Frame Chapter 2

In this section we're going to be looking at adding local storage to persists the data, along with the ability to add 
comments and ratings. It's going to require a few handlers , a lot more subscriptions (up to now we've only had 1!) and a 
lot more components rendering all this new data. Speaking of which, our db needs a serious remodelling.

We are no longer accomodating just the ideas the user enters, we're going to track the comments as well. We're also going to allow the user to add keywords, sort of like hashtags, that tell themselves (or other people) what type of idea it is: a sketch, a one-liner or a story etc. We'll need a vector to keep some order, as ideas should be presented chronologically, which normal sets and maps don't do. Each element in the vector will be a map, which contains all the data for each idea , using the `:idea`, `:comments` and `:keywords` keys for each value. 

As I'll be using local-storage, we'll need to specify an atom and the key for accessing the database. The `local-storage` function returns the atom itself when we reference the db so I'll need to modify my handlers accordingly.

  ```Clojure
  ;; before
  (rf/reg-event-db
    :initialise
    (fn [_ _]
      {:ideas []}))
      
  ;; after    
  (rf/reg-event-db
    :initialise
    (fn [_ _]
      (local-storage (atom []) :db)))
      
  ;; each entry in the vector will be a map of the form:
  ;; {:idea "something..."  :comments []  :keywords []}    
  ```
`local-storage` returns an atom , and that is what will be passed around, when we dereference the atom it will give us back the vector so it works just like a normal atom. Now with that in mind, we need to define our handlers:

The `add-idea` handler is probably the simplest one, we just `swap!` in a map which is for the most part empty into the vector and we're done.

  ```Clojure
  ;; add idea with no comments and no keywords initially
  (rf/reg-event-db
    :add-idea
    ;; takes the db, as the co-effect and we destructure the dispatch vector like always
    (fn [db [_ idea]]
      (swap! db conj {:idea idea :comments [] :keywords []})))
  ```
Now let's start thinking about being able to remove those ideas. To remove an idea means to get rid of the map in the vector which has the same value in the `:idea` key as the argument we were passed. 

Building upon existing functionality,

  ```Clojure
  ;; before
  (defn remove-idea
    [is i]
    (filterv (complement #(= % i)) is))
  
  ;; after
  (defn remove-idea
    [is i]
    (filterv (complement #(= (:idea %) i)) is))
    ;; if filterv comes across an element which doesn't contain the idea, leave it in.
  ```

And once again using `swap!` to update the atom.

  ```Clojure
  (rf/reg-event-db
    :remove-idea
    (fn [db [_ idea]]
      (swap! db remove-idea idea)))
  ```

Now onto the new and exciting stuff, the handlers which we have no ground to work off of, so to start I'll define a helper function for adding comments into the appropriate map:
