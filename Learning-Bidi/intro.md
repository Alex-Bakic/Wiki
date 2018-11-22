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
  (def route ["/index.html" (defn index-handler [request] (r/response "Welcome to index.html"))])
  
  ;; the pattern being the URI of the resource, and the result being the corresponding handler.
  ```

But as we said , if we were to match that route to a path, bidi doesn't handle the request, it returns a map

I like to think of bidi as being polite. It doesn't give us any more than we ask of it. If I was to ask bidi for the 
result of a certain route , bidi would give me the map that tells us how to get the handler. So, using the `match-route` 
function :

  ```Clojure
  (b/match-route route "/index.html")
  
  => {:handler #'user/index-handler}
  ;; returns a map , with the :handler key mapping to the location where our corresponding handler is.
  ```
  
 It is important to know that this is not the function itself, but the *location of the function*. But if we invoke it
 with a request map like ring does it works like normal.
 
  ```Clojure
  ((:handler (b/match-route route "/index.html")) {:status 200 :headers {} :body ""})
  => {:status 200, :headers {}, :body "Welcome to index.html"}

  ```

Whilst this works **it is not the way you should be doing it.** The reason bidi separates the route matching with the actual handling is so we can have some decoupling between the route code and our handler code. The abstraction is typically a keyword which can be used to lookup the handler in a map of handlers. I.e.

  ```Clojure
  (ns learning-bidi)
  
  (defn index-handler [request] 
    "Handler for the index.html resource"
    (r/response (hiccup-index-html-resource)))
    ;; calls the imaginary hiccup file with the html for index.html
  
  (def route ["/index.html" :index])
  ;; use a keyword as the placeholder for the handler. This acts as the link to the resource
  ;; It now makes it much easier to edit the handler itself without affecting the routes.
  
  ;; we use the :index keyword to link to the handler
  (def handlers {:index index-handler})
  
  ;; now when we call the match-route function
  (b/match-route route "/index.html")
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
  (def route ["/index.html" :index])
  
  (path-for route :index)
  ;; => "/index.html"
  ```
  
Now you might be thinking *"what's the point in that?"* Well the point of it so you don't have to hard-code you URIs, allowing for flexible routing and you can change them easily without breaking anything. It means in another page if you wanted to have the link to that resource in your view then you could just call the function. This is useful for resources that go in the `public` directory for example, where the webserver looks to serve assets and images.

-- to do , multiple routes
