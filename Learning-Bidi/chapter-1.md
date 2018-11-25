## Learning Bidi Chapter 1

In this chapter we're going to be looking at integrating Ring and bidi together to form a nice mini project. As bidi is 
very data oriented it makes it very simple to inspect, traverse and manipulate the routes any way you like. 

Using the `make-handler` function to define our routes in ring response maps,in the intro we saw this function defined in the last example. What it does is take a ring request map, like a normal handler, and pulls the `:uri` out of it. Then, by looking at the `:uri` value, it matches it against the patterns we supplied to the function. Finally the response map is returned which calls the appropriate handler for the requested resource. The job is essentially what compojure's `defroutes` do but more explicitly. The benefit is that it is quite simple to wrap middleware around, as it's just a normal clojure function.  

  ```Clojure
  ;; courtesy of the bidi readme
  (ns my.app
    (:require [my.handler :refer [handler]]
              [ring.middleware.session :refer [wrap-session]
              [ring.middleware.flash :refer [wrap-flash]))
  (def app
    (-> handler
        wrap-session
        wrap-flash))
                                      
  ```
 
 -- to do , define own middleware and show how to define selected input methods like :get :post etc.
 
  
