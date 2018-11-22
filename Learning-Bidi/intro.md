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
