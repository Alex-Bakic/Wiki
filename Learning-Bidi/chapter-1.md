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
              
  (def handler (make-handler ["/" {"index.html" index-handler
                                   ["articles/" :id "/article.html"] article-handler}]))
  
  (def app
    (-> handler
        wrap-session
        wrap-flash))
                                      
  ```
 
Remember to be careful though, as the `handler` variable is an interface to all the handlers underneath it. You need to make sure that all the handlers that you wrapped are correct for all the specified handlers. An issue that may come up would be that some parts of your site work with json , hence you may use the `wrap-json-response` middleware. The middleware will wrap any response with a collection as a body into json. This may be what you desire, but other handlers that have been included in your map work with plain text! So aim to separate your handlers by concerns. 
 
In our example, we use the pattern ```["articles/" :id "/article.html"] ``` to separate the `:id` keyword into something that can be accessed by other functions. By default, bidi only captures numbers and simple identifiers in order to defend against [injection attacks](https://lispcast.com/clojure-web-security/). What we can do however , instead of just supplying the keyword, is to include another pair.This being a vector of two elements, the first being the pattern and the second being the result. The pattern being whatever regular expression that you want. Whenever a request is sent that matches it, the data is kept in the `:id` keyword. So, to specify that `:id` can only take article numbers we could do :

  ```Clojure
  ;; before
  (def handler (make-handler ["/" {"index.html" index-handler
                                   ["articles/" :id "/article.html"] article-handler}]))
  
  ;; after
  (def handler (make-handler ["/" {"index.html" index-handler
                                   ["articles/" [#"\d+" :id] "/article.html"] article-handler}]))
                                   ;; "if the input is a digit, then have the keyword bound to the value"
                                   
  ```
 
 -- to do show how to define selected input methods like :get :post etc.
 
The next thing we're going to look at are `guards`. Now whilst not essential to building projects in bidi, I find that that writing routes with guards helps to make them more robust. What they do is wrap around a route, adding some *constraints* to them  

  ```Clojure
  ;;ordinary route, pattern and result
  ["/" {"index.html" index-handler}]
  
  ;; guard map. Adds the request method constraint :get
  ["/" {:get {:"/index.html" index-handler}}]
  ```
I like to think of the guard as the gatekeeper to the route. If the pattern is matched, then the route is handed over.

Guards are specified by maps.We specify things like the request method, like `:get` or `:post`. With these guards it allows us to control what characteristics the routes have.Typically, routes ignore the request method which may work fine if the handler can deal with it but it can be argued the handler shouldn't need to focus on the procedure but the data. 

In the guard maps we can specify different types of data, from just a single value to to a collection of values and predicates to test the values.If we wanted to define more than one guard to our route we can extract it out into it's *own* map that sits the above the route that it protects. 

  ```Clojure
  ["/" {"article" 
          {:get {"/index.html" index-handler}}
        {:request-method :post :content-type "text/html"}
          {"/article.html" article-handler}}]
  ```
-- to do, explain the structure of the route table

-- show that all the methods and things we can specify to guard are specified by the ring request map. Which can be seen [here](https://github.com/Alex-Bakic/Wiki/blob/master/Learning-Ring/intro.md).
