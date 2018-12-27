## Learning Re-Frame Chapter 2

In this section we're going to be looking at adding local storage to persist the data, along with the ability to add 
comments and keywords. It's going to require a few handlers , a lot more subscriptions (up to now we've only had 1!) and a lot more components rendering all this new data. Speaking of which, our db needs a serious remodelling.

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

Now let's see if the following works. Running `lein figwheel` from the inside the `Sketchy` directory, we sadly get the following stream of errors:

  ```
  - Error rendering component (in sketchy.core.ui >  > sketchy.components.show_ideas.show_all_ideas)
  - The above error occurred in the <sketchy.components.show_ideas.show_all_ideas> component:
  - Error: No protocol method IDeref.-deref defined for type cljs.core/PersistentVector: [{:idea "does this work?", :comments [], :keywords []}]
  ```
So what gives? Essentially it's saying our `show-ideas` component is dereferencing a vector , meaning it expected an atom. Looking inside the view it contains:

  ```Clojure
(defn show-all-ideas []
  (let [db (rf/subscribe [:ideas])] 
   [:ul (into [:div#ideas-list] 
              (for [i @db] (show-idea i)))]))
  ```
Now there's nothing wrong with *this*, `subscribe` does return an atom, a reagent atom, that allows changes to the view to be made when changes to the data are made. When we dereference the subscribe atom, we are expecting to have a vector of ideas we can work with. So it must be an issue with the subscription itself. Looking at our database and subscription:

  ```Clojure
  (def db (local-storage (atom []) :db))

  (rf/reg-event-db
    :initialise
    (fn [_ _]
      db))

  ;; sub , grabs the :idea out of every map.
    (rf/reg-sub
    :ideas
    (fn [db _]
      (mapv :idea @db)))
  ```
Now, it shows the `:ideas` subscription expects an atom, which would make sense as that's what we defined inside the atom. 

But when does the subscription change? 

When the db is altered by the affect of an event handler. Moreover, we can deduce the event handler is the culprit! Inside our `add-idea` handler, when we `swap!` we *did not return an atom, but the vector, showing the state changes*. So when we dereference the vector it brings up our error. Now, you might try and hack a solution together by wrapping `(atom (swap! ...))` on every event handler, but we know that when we start doing that there is a mistake in our design. In fact, re-frame is helps us avoid this danger and has a tool we can use to keep our event handlers clean, welcome to the stage **Interceptors**.

One way of understanding the raison d'etre of interceptors is to look at a factory's innerworkings. One machine will expect a product fed to it every second or so, to package into a box and seal it. Now the company may decide to change the design , the brand or the logo that's going to be stamped on the box. But this shouldn't concern the machine one bit. It should be focused on packaging , and someone else can style it however they like **before or after it's done**. 

Now imagine that one machine is like on of our event handlers, working hard at a particular task. Our interceptors are the procedures that happen before or after we start the work to simplify the problem of doing the task itself. They help setup event handlers before they run, or after they've run and use the data they output.

So in our case, we might use an interceptor before one of our event handlers run , to grab everything out of the local-storage and feed it into our `:initialise` event handler. To pick up where last session left off. Then we could have an interceptor, after the event handler is done and take the return value and put it into local-storage. Events like `add-idea` or `remove-idea` should now be working just with vectors and maps unaware that the concept of local-storage exists. For each of these handlers we need an interceptor that runs *after* each handler is run and adds the return value into the local-store. 

That's the plan. Now , as interceptors work closely with the db it's nicer to specify all that stuff in a separate file called `db.cljs` which will make things a bit clearer. 

As the number of interceptors we are going to define aren't many , just one, and it is quite straightforward to just make references to the underlying `js/localStorage` we will only need a few wrappers for getting and setting data. Moreover, I'm going to move away from using the [external library](https://github.com/alandipert/storage-atom) as its overkill for this little project.

Here is interceptor that will be a wrapper for all our event handlers, and take whatever data they return and use it and perform a *side effect* (not disturbing the natural pipeline) , in this case going off and writing the data structure into an EDN map for local storage.

  ```Clojure
  (def ls-key "db")                 
  ;; localstore key

  (defn ideas->storage
    [ideas]
    (.setItem js/localStorage ls-key (str ideas))) 
    ;; this is the functionality that the "after" interceptor will use to take the return value of a handler
    ;; and update the local-storage with that data.

  ```
Now we've specified the code that we want to run after our handlers do there work, but what about before? What re-frame lets us do is register an `effect handler` which will inject the effects, the state from local-storage, into the argument list of an event handler of our choosing. Now we only want to inject the local-storage state into the `:initialise` event handler as we want to state off each application session with any data from the last. 
  
  ```Clojure
  (rf/reg-cofx
    :local-store-ideas
    (fn [cofx _]
        ;; put the localstore ideas into the coeffect map 
        ;; with they key :local-store-ideas
        (assoc cofx :local-store-ideas
               ;; read in the data from localstore
               ;; and put it all into the vector.
               (into []
                     (some->> (.getItem js/localStorage ls-key)
                              (cljs.reader/read-string))))))
  ;; this is the coeffect handler that will be used before "initalise" is ran to update it.
  ```
A subtle intricacy of the `cofx` we registered is the `(into [] ...)` bit. Because what we are getting out of there *is* the vector that other handlers have tweaked and modified. We're not reading every map one by one into a vector, we are just evaluating the one vector which holds all the maps in there. So you'd think we'd end up with a collection like `[[{:idea "..."}]]` but in fact `into` is smart enough to just return the vector itself which means our handlers can work like normal. Also if there is nothing in local-storage, then into will return the empty vector.

So cofx is the first argument that is passed to every handler, we are going to be adding the `:local-store-ideas` key to the prescribed affects. So now, in our `events.cljs` file when we specify the `:initialise` event handler we are going to inject the data from the interceptor into the first argument. 

  ```Clojure
  ;; in our events.cljs file
  
  ;; before
  (rf/reg-event-db
  :initialise
  (fn [_ _]
    {:ideas []}))
  
  ;; after
  (rf/reg-event-fx
  :initialise

  ;; injecting the local-storage , put into the :cofx arg
  ;; this is the vector where all the interceptors go
  [(rf/inject-cofx :local-store-ideas)]
  ;; adds the key and data to the first argument
  ;; which we can destructure out
  (fn [{:keys [db local-store-ideas]} _]
    {:db local-store-ideas}))
  ```
  
The next step is to define an interceptor that will allow any event handler to write it's changes to local storage.

  ```Clojure
  ;; use the functionality we define in db.cljs to be used **after** each event handler has been run
  (def ->storage (rf/after d/ideas->storage))
  
  ;; so now we not only do we modify the in-memory db, but also the local storage
  (rf/reg-event-db
  :add-idea
  [->storage]
  (fn [db [_ idea]]
    (conj db {:idea (any-idea? idea) :comments [] :keywords []})))

  ;; setItem can be used to show that items are being removed too, so we don't need to
  ;; write a separate handler for remove.
  (rf/reg-event-db
  :remove-idea
  [->storage]
  (fn [db [_ idea]]
    (remove-idea db idea)))
  ```
We can see that a vector is used, before the event handler functionality is run , which holds all the interceptors that need to be run. It is up to the job of the interceptor , using the `before` or `after` functions to say at what point in the pipeline they need to be ran. In this case we've only got the one but it is very important , one that will be used on pretty much every handler we will define.

To conclude this chapter, we've simplified our local-storage database to just the two wrapper functions, we've implemented an interceptor to help us with the task of persisting our data. Now our event handlers can once again be simple and focus just on the data, which will come in very handy in the next chapter where we will add some more event handlers for events and keywords and subsequently their view functions. 
