## Learning Ring Chapter 1

In this section I will go over some of the nuances of the Ring library that we didn't cover in the intro section, alongside some of the extras that make everyday development easier.

The first major thing is that all the handlers and middleware that we have seen so far have been synchronous handlers. Which essentially means that when the handlers is called and the process ran, it blocks other process from running at that time until it is completed. Ring allows us to define asynchronous handlers, which in itself is non-blocking to other processes but it means there are added complications. 

Just to be clear I use the term process to mean anything that is sent from the server to the client. Syncronous handlers will block others while it travels to the client computer. Asyncronous handlers will not stop other processes from running but simply get in line. 

As we are not blocking other processes from running , our asyncronous process cannot be sure that it has been sent to the client successfully or if it is stil in fact waiting for sendoff. Moreover a typical asyncronous handler comes with more arguments than the just the request map.

We need to know when the handler is processed because it isn't necessarily immediate, which means we need to require something called a *callback*. This signals to the browser that the transmission was successfull and it can go back to doing other work. 

In case the message does not end up being sent off, like maybe there was an error or the data was corrupted we have to make sure we supply an *exception callback*. I imagine it's use similar to simple if-else logic, if our request goes through, move onto the next thing , else come back and alert us that there was an issue and provide an exception callback.

All in all, the same handler we used in the intro now looks like this:


  ```Clojure
    ;; again , courtesy of the ring wiki
    (defn what-is-my-ip [request respond raise]
    (respond {:status 200
              :headers {"Content-Type" "text/plain"}
              :body (:remote-addr request)})
  ```

Notice how the respond function is used instead of just returning data, as what needs to be done is intitiate a connection, respond also takes care of the exception callback so all we really have to remember is to wrap our response data in the respond function.

If we wanted to define a multi-arity handler you could do this:

  ```Clojure
  (defn what-is-my-ip
  ([request]
    {:status 200
     :headers {"Content-Type" "text/plain"}
     :body (:remote-addr request)})
  ([request respond raise]
    (respond {:status 200
              :headers {"Content-Type" "text/plain"}
              :body (:remote-addr request)})))
              
  ;; could also (respond what-is-my request) for simplicity
  ```

Now, in the grand scheme of things this isn't really necessary. Especially for small projects. The point of asyncronous web handlers is so that you can manage the load on your web servers more efficiently, but the argument to this is that if we are indeed seeing constrains on our web server the best solution would be to scale horizontally (e.g. more servers).Another answer to asyncronous handlers would be to use a faster web server. [Aleph](https://github.com/ztellman/aleph) aims to be one of the contenders here which actually implements the Ring spec. Meaning you don't need an adapter for Aleph if you choose the  standard options. 

Another , argubly, greater cause for concern is the constrains on database systems. One reason being it is an IO operation and it is blocking, but also it can be costly to move databases and to re-structure them. Moreover, it is of greater significance to structure the data and not the code.
