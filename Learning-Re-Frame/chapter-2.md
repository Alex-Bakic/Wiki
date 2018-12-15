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
Now, it shows the `:ideas` subscription expects an atom, which would make sense as that is what our state is defined to be. But when does the subscription change? When the db is altered by the affect of an event handler. Moreover, we can deduce the event handler is the culprit! Inside our `add-idea` handler, when we `swap!` we *did not return an atom, but the vector, showing the state changes*. So when we dereference the vector it brings up our error. Now, you might try and hack a solution together by wrapping `(atom (swap! ...))` on every event handler, but we know that when we start doing that there is a mistake in our architecture. In fact, re-frame is aware of this danger and has a tool we can use to keep our event handlers clean, welcome to the stage **Interceptors**.

A nice analogy for interceptors , for anyone who has watched tennis , would be Rafael Nadal. Now for anyone unfamiliar with the sport , Nadal is one of the best in the world. It's what **he does before and after each round** that makes him quite unique. Before serving , every time without fail ,  he will straighten his shirt , curl hair behind one ear then wipe the side of his nose and curl hair behind the other before serving. And after most rounds he will request a towel.

Now imagine that one round is like one of our event handlers working hard at a particular task, our interceptors are the setups which occur **before** the event handler was called and **after** the event handler has finished work. 

So in our case, we might use an interceptor before one of our event handlers run , to grab everything out of the local-storage and feed it into the event handler to either add to , or remove an element. Then we could have an interceptor, after the event handler is done and take the return value and put it into local-storage. 

That's the plan. Now , as interceptors work closely with the db it's nicer to specify all that stuff in a separate file called `db.cljs` which will make things a bit clearer. 

Currently, it looks like this:

  ```Clojure
  (ns sketchy.db 
    (:require [re-frame.core :as rf]))

  ;; app state
  ;; each entry in the vector will be a map of the form:
  ;; {:idea "something..." :comments [] :rating 0}
  (def db (atom []))

  (rf/reg-event-db
    :initialise
    (fn [_ _]
      db))
  ```
  
Ok and the moment I'm sure you've been waiting for. How do we actually define interceptors and how do we use them?

Now interceptors define reusable functionality that event handlers may need before or after execution. They can be thought of as another layer in our re-frame pipeline, but they are here for good reason. For making problems like ours, and many others , much simpler. There's a great tutorial [on interceptors](https://purelyfunctional.tv/guide/re-frame-building-blocks/#interceptors) , which helped me to get to grips with this concept.

Now, we need to specify the behaviour of an interceptor to add things to the local-store after an idea has been added.

We want an interceptor to wrap around our `:initialise` event handler, and pull the values from local-store *before* and hand the map to the handler before it returns just an empty collection. Events like `add-idea` or `remove-idea` should now be working just with vectors and maps unaware that the concept of local-storage exists. For each of these handlers we need an interceptor that runs *after* each handler is run and adds the return value into the local-store. 

Keep in mind it does not redirect the return value to the interceptor, it just makes use of the value to invoke some side-effects. This way our application works with native data structures the whole way through and we can keep our handlers simple. So , let's start from the `db.cljs` again and redefine our app state...

  ```Clojure
  (ns sketchy.db 
    (:require [re-frame.core :as rf]
              [alandipert.storage-atom :refer [local-storage]]))
  
  ;;specifying the local-storage
  (def db (local-storage (atom []) :db))

  ;; now we need to specify the functionality which the interceptor will use to 
  ;; add items to local-storage
  (defn ideas->storage
    [ideas]
    (swap! db conj ideas))
  ;; interceptor will call this after our add-idea event handler has run
  
  ;; functionality for removing ideas out of storage
  ;; I know it's identical to the handler's behaviour but stick with me.
  (defn f
    [is i]
    (filterv (complement #(= i (:idea %))) is))

  (defn storage->trash
    [idea]
    (swap! db f idea))
  ```

Now we've specified the code that we want to run after our handlers do there work, but what about before? What re-frame wants us to do is register an `effect handler` which will inject the effects, the state from local-storage, into the argument list of an event handler of our choosing. Now we only want to inject the local-storage state into the `:initialise` event handler as we want to state off each application session with any data from the last. So initialise would return a vector and the handlers can work with that. So let's inject the local-store data into our handler:

  ```Clojure
  ;; register a coeffect handler
  (rf/reg-cofx
  :local-store-ideas
  (fn [cofx _]
    ;; put all the ideas into the cofx map under the key
    ;; :local-store-ideas
    (assoc cofx :local-store-ideas @db))) 
  ```

So cofx is the first argument that is passed to every map, we are going to be adding the `:local-store-ideas` key to those affects. So now, in our `events.cljs` file when we specify the `:initialise` we are going to inject the data from that key into the first argument of the map. 

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
  
The next step is to define some interceptors for the `:add-idea` and `remove-idea` handlers so that we retain the shape of the data that return. 

  ```Clojure
  ;; for the add-idea
  ;; after specifies that we want to do this after our event handler is run
  (def ->local-storage (rf/after d/ideas->storage))
  
  ;; for the remove idea
  (def ->trash (rf/after d/storage->trash))

  ;; so now we not only to the in-memory db , but we add to storage
  (rf/reg-event-db
  :add-idea
  [->local-storage]
  (fn [db [_ idea]]
    (conj db {:idea (any-idea? idea) :comments [] :keywords []})))

  ;; so now we not only remove from the in-memory db , we remove from storage
  (rf/reg-event-db
  :remove-idea
  [->trash]
  (fn [db [_ idea]]
    (remove-idea db idea)))
  ```
 
And there we go, that should it right? 
