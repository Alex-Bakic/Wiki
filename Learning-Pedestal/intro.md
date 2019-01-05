# The Pedestal Library

While I say library, pedestal is encompassing many libraries , which allow us to build services and applications. Pedestal is for server-side web application development, meaning it can serve up some HTML pages or handle and/or issue API requests. 

Now Pedestal itself is very composable, allowing us to practically plug and play with different libraries. For example, there is a routing scheme that comes default. But if we wanted to work with something like Bidi, reitit etc we could. Typically, with such freedom we find that security is an afterthought and we tend to leave gaps in our composable wonder. However, that compromise is curbed here as Pedestal has focused on security by default : securing headers, CSRF-protection are among some of the implemented measures. 

What I plan to use Pedestal for is a relatively simple web application encompassing Clojure, ClojureScript, a proper database and some sort of routing logic. This is a step up for me, as my previous project was a relatively straightforward Re-Frame SPA with no backend and an in-memory db. 

But first, let's explore the [Hello-World sample](https://github.com/pedestal/pedestal/tree/master/samples/hello-world):

Our simple site is made up of three parts:

  - The Web Server: which is the medium for the client to send requests and our handlers to provide a response
  - Some routing logic, which will match the URL the client has entered to an appropriate response handler.
  - The response handler itself, which could return HTML messages, or call on another handler to respond.
  
It's simpler to work bottom-up, so that's what we'll do. All we want our web application to do is say `"Hello, World!` to a user who comes to our domain and includes the `/greet` route. We'll add a custom naming scheme later, but for now we'll be establishing the structure. 

Let's start by defining our response to a client that requests the resource at `http://127.0.0.1:8080/greet`. 

Responses are usually *just data*.

Such responses are very straighforward, of which I mean synchronous. Meaning that when they're executed they don't allow other handlers to service the client; whereas asyncronous handlers will allow other handlers to run while it's being serviced. However don't be fooled that this means it is parallel processing, parts of the handler are serviced and the handler itself isn't run immediately, it could be delayed for any amount of time waiting to be executed. The server can interchange between executing one handler, stopping and doing another but most handlers can and should be syncronous unless there is a need for fast performing services.

So, to define a simple handler we can do:

  ```Clojure
  (ns hello ;; in src/hello.clj                                       
  (:require [io.pedestal.http :as http] ;; we need the http library, which will setup the server          
            [io.pedestal.http.route :as route])) ;; this will define the site's routing
            
  ;; our handler           
  (defn greeting [request]
    {:status 200 :body "Hello, world!"})
  ```

When we stick our handler on the server, ready for use it will be given a request map when called. The request map is fairly self-explanatory. When the client made a request, it passed along any and all data, content-types, ip addresses and cookies. As this is such a simple handler and we don't need to do anything like authenticate the user , the session or the data, we just return a map of our own. The keys represent the different headers we can define, all of which are specified [here](http://pedestal.io/reference/response-map):

So essentially, no matter who you are or where you come from we will serve you! Albeit a very simple message.

Now we need to hook this handler up to a routing table so that when a client enters `/greet` we have this as the response, but to test that it works as expected we can test it in the repl.

As the response is a plain clojure map, it is simple to test behaviour before adding it to our website.

  ```Clojure
  ;; in our project.clj
  (defproject hello "0.0.1"
    :dependencies [[org.clojure/clojure "1.8.0"]
                   [io.pedestal/pedestal.service "0.5.1"]
                   [io.pedestal/pedestal.jetty "0.5.1"]]
    :resource-paths ["config", "resources"]
    :profiles {:dev {:aliases {"run-dev" ["trampoline" "run" "-m" "hello-world.server/run-dev"]}
                     :dependencies [[io.pedestal/pedestal.service-tools "0.5.1"]]}}
    :main hello-world.server)
  
  ;; now do lein repl, in the hello directory
  ```
  
Now in the repl we can import the `hello.clj` file and call the handler function to see it's contents:

  ```Clojure
  ;; require the handler we want to call
  (require '[hello :refer [greeting]])

  ;; then require will return nil, and we can call it
  ;; with an empty client request map
  (greeting {})
  ;; --> {:status 200 :body "Hello, World!"}
```
Now we're not exactly reaping all the rewards of doing it in this way yet, but imagine if we could supply example maps: with one being a valid user with the correct token and another being an invalid user you could test whether the handler only serves the valid client. 
