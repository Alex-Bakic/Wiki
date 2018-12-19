## Learning Re-Frame Chapter 3

In this next section we're going to be adding some comments to each idea we write down, and the ability to add some
keywords as well , to act as metadata (data about our data).

When we add an idea, we should then , underneath, present the user with the ability to add comments and keywords to it. 
One idea for this would be to have the "show-comments" section subscribe to `:ideas`, and when it changes an empty section 
with something like a `[+]` to add a comment. Same for the keyword. We need to supply the idea itself to the subsription, so that each comment is monitoring it's own data only. This is because if the user adds a new, separate idea that it would cause comments in other parts of the program to re-render unnecessarily.

So writing a subscription to monitor a particular idea for comments:

  ```Clojure
  ;; given the idea , return the comments vector
  (rf/reg-sub
    :comments
    (fn [db [_ idea]]
       (first (for [m db :let [i (:idea m) c (:comments m)] :when (= i idea)] c))))
  
  The db is structured as
  [{:idea "The idea" :comments ["One comment"] :keywords [:sketchy :one-liner]}]
  ;; thus is the subscription was fed this and "The idea" in the argument list we'd get back
  ;; ["One comment"]
  ```

So we take the data from the vector and use it as the basis for our sub. The code essentially says , for each map in the database, let's bind the idea and comment data to variables and when we have found an idea that matches the one we passed stop and return the comments from that map. When `for` evaluates it puts the result in a seq, so we call `first` to get it out. Now I thought it might be a bit unreadable and I tried a few other techniques for this , like :

  ```Clojure
  (-> (filterv #(= "Hello" (:idea %)) ideas) 
      (first) 
      (:comments))  
  ```
Now it definitely looks less intimidating but I thought they both were quite intuitive, so I ran them against the clock and interestingly the *first method was almost three times quicker*. 

```
 ;; my laptop is fairly slow, and of course you'll see different times
 ;; but the ratio is quite something.
 
 (time (for [...] ...)) ;; 123.00000 msecs
 (time (-> (...)) ...)  ;; 361.00000 msecs
  ```
So, judging by that I'll use the `for` method with the keywords subscription:

  ```Clojure
  ;; given the idea , return the keywords vector
  (rf/reg-sub
    :comments
    (fn [db [_ kw]]
       (first (for [m db :let [i (:idea m) k (:keywords m)] :when (= i kw)] k))))
  ;; keyword is defined in clojure so I'll make do with kw
  ```

So that's pretty much it for the subs, they are pretty dynamic so I don't need to specify anything else, now it's just a case of implementing the event handlers to add comments, keywords etc.

Because of the db structure I opted for, it isn't as straightforward as one would like to just find the correct map and insert the new comment in, because I have a vector which works on numerical indexes for keys and the `:idea` key doesn't yield the comments and keywords. 

It's left me with a hacky solution, no doubt I'll change it in a later iteration, but let's take a look:

  ```Clojure
  ;; first we need to find the index, using the idea we're passed as an indicator
  (defn finding-index [db idea]
  (.indexOf db 
           (first (filterv #(= (:idea %) idea) db))))
   
  ;; I'll pass it to the update-in fn so as to target the right map 
  (defn update-ideas [db idea k f v]
   "Takes the database of ideas, currently the vector, the idea we need to insert a comment or keyword into
   , with k signalling either :comment or :keyword. f will typically be conj for adding , and some a remove function
   for taking elements out , v is the value to be put in or grabbed out"
   (update-in db [(finding-index db idea) k] f v))

  ```
  
So , if we wished to add a comment to a given idea, we would :

  ```Clojure
  ;; given the db , idea and comment 
;; add to that particular vector
(rf/reg-event-db
  :add-comment
  [->storage]
  (fn [db [_ idea comment]]
    (update-ideas db idea :comments conj comment)))
  ```
  
Likewise, if we were going to remove a comment or a keyword, I would specify a remove function, as update-in feeds it the collection first not the function. 

  ```Clojure
  ;; also need to remember vec as we want the data to be added chronologically.
  (defn remove-comment [db comment]
    (vec (remove #(= % comment) db)))
  ;; the db is in the vector , and we cycle through the elements to find the one that 
  ;; matches and remove it.
  
  ;; using this in the update-ideas function for the comment and keyword event handlers
  
  ;; in the comment handler
  (update-ideas db idea :comments remove-comment comment)
  
  ;; in the keywords handler
  (update-ideas db idea :keywords conj kw)
  ```
  
So at this stage , we've got all the subscriptions and all the event handlers working and ready. But we still need to write a few more components. For each idea that gets rendered, we need to show the current comments, if any, then add a button that will allow the user to additional ones. The same goes for keywords. 



Now it's time for the fun part and to add some ui to this application. I've included [Bootstrap](https://getbootstrap.com) just to make things a lot simpler, but I'll add more bits and pieces to the [sketchy.css](https://github.com/Alex-Bakic/Sketchy/blob/master/resources/public/css/sketchy.css) as we go along. 
