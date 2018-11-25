## The Bidi Library 

Bidi is a library that aims to be a data-driven substitute to Compojure. Bidi focuses on **Bi-Di**rectional URI dispatch
and formation. One of the main objectives of Bidi is to not have your URIs hardcoded but to use *patterns* to define the
routes, which match to an appropriate handler function. In short, it aims to stop the coupling of your routes and code.

Moreover, Bidi separates the logic used for matching routes to a handler from the logic to handling requests themselves. 
This is because we might not want to match to a handler directly, but a keyword to look up a handler. In turn, it gives us
more flexibility on how manage incoming resource requests.

Let's jump into the repl to see how this all works:

To define a route, we just define a tuple, with a pattern and a result.

  ```Clojure
  (require '[bidi.bidi :as b
             ring.util.response :as r])
  
  ;; just routing for the home page, index.html
  (def my-route ["/index.html" (defn index-handler [request] (r/response "Welcome to index.html"))])
  
  ;; the pattern being the URI of the resource, and the result being the corresponding handler.
  ```

But as we said , if we were to match that route to a path, bidi doesn't handle the request, it returns a map

I like to think of bidi as being polite. It doesn't give us any more than we ask of it. If I was to ask bidi for the 
result of a certain route , bidi would give me the map that tells us how to get the handler. So, using the `match-route` 
function :

  ```Clojure
  (b/match-route my-route "/index.html")
  
  => {:handler #'user/index-handler}
  ;; returns a map , with the :handler key mapping to the location where our corresponding handler is.
  ```
  
 It is important to know that this is not the function itself, but the *location of the function*. But if we invoke it
 with a request map like ring does it works like normal.
 
  ```Clojure
  ((:handler (b/match-route my-route "/index.html")) {:status 200 :headers {} :body ""})
  => {:status 200, :headers {}, :body "Welcome to index.html"}

  ```

Whilst this works **it is not the way you should be doing it.** The reason bidi separates the route matching with the actual handling is so we can have some decoupling between the route code and our handler code. The abstraction is typically a keyword which can be used to lookup the handler in a map of handlers. I.e.

  ```Clojure
  (defn index-handler [request] 
    "Handler for the index.html resource"
    (r/response (hiccup-index-html-resource)))
    ;; calls the imaginary hiccup file with the html for index.html
  
  (def my-route ["/index.html" :index])
  ;; use a keyword as the placeholder for the handler. This acts as the link to the resource
  ;; It now makes it much easier to edit the handler itself without affecting the routes.
  
  ;; we use the :index keyword to link to the handler
  (def handlers {:index index-handler})
  
  ;; now when we call the match-route function
  (b/match-route my-route "/index.html")
  ;; => {:handler :index} , where :handler is the key and :index is the value
  ;; if we were to supply a resource which is not defined in the route we would get nil.
  ```

So to recap, we define a ring-compatible handler which returns the response for when someone asks for the `/index.html` resource, either due to some functionality that we specify or they just type it themselves into the url bar. We then must define the route, which is responsible for making sure that specific handler is matched for that particular request. So in this case we use the `:index` keyword to link the "/index.html" path to the handler. 

I've made a map of handlers called `handlers` so that when the site expands we have a system of calling them. As for right now, this is what we could do to start the app.
  
  ```Clojure
  (require '[ring.adapter.jetty :as j])
  
  (def app (:index handlers))
  
  (j/run-jetty app {:port 3000})
  ```
  
Now let's look at how we can define routes *going the other way*. What I mean is that this time we give bidi a result, typically a keyword, and we get back a pattern using the `path-for` function. It finds the *path-for* a given keyword.

  ```Clojure
  (def my-route ["/index.html" :index])
  
  (path-for my-route :index)
  ;; => "/index.html"
  ```
  
Now you might be thinking *"what's the point in that?"* Well the point of it so you don't have to hard-code you URIs, allowing for flexible routing and you can change them easily without breaking anything. It means in another page if you wanted to have the link to that resource in your view then you could just call the function. Say we have some hiccup data we can just replace the path we would put in `href` or the `path-for` function.

  ```Clojure
  [:ul
      [:li [:a {:href (bidi/path-for app-routes :contact)} "Link to contact page"]]
      [:li [:a {:href (bidi/path-for app-routes :index)} "Link to other home page"]]
      [:li [:a {:href (bidi/path-for app-routes :blog)} "Link to my blog page"]]]
  ```

Alright, now let's move onto multiple routes, as it's likely we'll want to define more than one :grin:

Now the pattern that is the first part of the route will match two or more routes, but only *partially*. The result is split *further* now in the form of a map, the first element being the sub-section of the path and the result being the keyword as normal. 

So in the example below the *common* prefix is `/` , which is the root of the webserver. Now we want to define a handler for `/index.html` and another for `/article.html`.

  ```Clojure
  (def my-routes ["/" {"index.html" :index
                       "article.html" :article}])
                    
  ;; "/" is the inital pattern, which then looks in the map for the next pattern, either index or article .html.
  ```

A little thing to remember that might trip you up when first doing this is include the `/` when matching routes. If we were to ask for `article.html` , we can't ask for it directly as it is under `/` which we need to include.

  ```Clojure
  user=> (match-route my-routes "article.html")
  nil
  user=> (match-route my-routes "/article.html")
  {:handler :article}
  ```

Now then, as our website grows we'll also have more pages, namely articles. To include them is no problem, what we can do is create the `articles/` sub-pattern and then have another map full of the different articles. 

  ```Clojure
  (def my-routes ["/" {"index.html :index
                       "articles/" {"index.html" :article-index
                                     "article.html" :article}}])
                                     
  (match-route my-routes "/index.html")
  ;; => {:handler :index}
  (match-route my-routes "/article.html")
  ;; => nil
  (match-route my-routes "/articles/article.html")
  {:handler :article}
  
  ;; and in reverse too...
  (path-for my-routes :article-index)
  ;; => "/article/index.html"
  ```
  
Now let's move onto introducing some variables in our paths. It would be pretty painful for us to write our like a hundred different paths under the `articles/` pattern. What if we could include a little variable like /articles/123/article.html so that we only have to write out article.html *once* but keep the *many* different articles that are actually on the site.

What we need to do, under the `articles/` pattern, where we want to include an `:id` we need to put it inside of a vector. This is because the pattern has grown into multiple parts and we need to organise them. This is what I'm getting at ->

  ```Clojure
  (def my-routes ["/" {"index.html" :index
                       "articles/" {"index.html" :article-index
                                     [:id "/article.html"] :article}}])
                                     
  ;; as we wanted the URI to be /article/:id/article we should have :id be in the middle, 
  ;; so we put it in between the articles/ directory pattern and the article.html file pattern      
  
  ;; now when we match routes 
  
  (match-route my-routes "/articles/1/article.html")
  ;; => {:handler :article, :route-params {:id "1"}}
  ```
The `:id` is extracted out of the handler and into a new :route-params key. In addition to this the same semantic is used to separate the id from the pattern when we use the `path-for` function.

  ```Clojure
  (path-for my-routes :article)
  ;; => ExceptionInfo Cannot form URI without a value given for :id parameter
  
  (path-for my-routes :article :id 1)
  ;; => "/articles/1/article.html"
  ```
  
By including a variable like `:id` it makes our URIs much more flexible and as it is extracted, functions that might communicate to the database and fetch articles with certain ids. A complete example of everything we have learned so far can be seen below:

  ```Clojure
  (comment "
    
    so I'll use the clojure.java.jdbc library for this example. When Ring comes to us with a 
    request map, we grab the URI out for parsing.  We have a handler defined for when a user 
    requests an article , which references our db.
   
  ")
  
  ;; to do , include ns and edits 
  (require '[ring.middleware.response :as rr
             ring.adapter.jetty :as rj
             bidi.bidi :as b
             clojure.java.jdbc :as j]))

  (def ^:private mysql-db {:dbtype "mysql"
                           :dbname "project-db"
                           :user "admin"
                           :password "admin"})
                           
  (defn pull-from-uri
    "Example:

     :uri is /articles/123/article.html
     so we use this with route-map to find a match
     with the current routes setup , with this as the uri we would
     be returning {:handler :article :route-params {:id 123}}
    "
    [route-map {uri :uri}]
    (b/match-route route-map uri))                           
                           
  (defn index-handler
    [request]
    (rr/response "<body>Some more html...<body>"))

  (defn article-handler
    "request is the ring response map. \n
     routes is the result of the pull-from-uri function"
    [db-map request]
    (let [uri (pull-from-uri request)
          {{id :id} :route-params} uri
          result (j/query db-map ["select article from articles where id = ?" id])]
      (r/response result)))                            
  
  (def handlers {:index index-handler
                 :article (partial article-handler mysql-db)})  
                 
  ;; will discuss this and working with ring further in the next chapter.
  (def app-routes (b/make-handler ["/" {"index.html" (:index handlers)
                                        "articles/" {[:id "/article.html"] (:article handlers)}}])
                                        
                                        
  (def app (rj/run-jetty app-routes {:port 3000}))
  ```
  
And that's where we'll leave it for now. In the next chapter, we'll look at how bidi can integrate with Ring to make a proper project.
