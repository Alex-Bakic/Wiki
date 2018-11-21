## Learning Ring Chapter 2

In this section we will be looking more into middleware, and the standard middleware that Ring provides for working with
cookies, files and sessions.

Depending on the type of interaction, we may have to alter the request map, the response map or both. If we needed to alter the former before working on it, the middleware would be given the request map by ring first, add whatever headers or perform whatever checks/changes to it and then call the handler with the new request map.

#### Cookies

This sort of thing is exactly what we need to do if we wish to include cookies into our service. Say we have a handler which looks like this:

  ```Clojure
  (defn identifying-user
    [request]
     {:status 200
      :headers {}
      :cookies {"session_id" {:value "session-id-hash"}}
      ;; session_id and session-id-hash can be anything you want.
      :body (str "Hello user. You have been assigned a cookie.")})
  ```
Now, if we were to just use this as-is the :cookies header would not come up in the request map as it is not in there by default. So when we send a response map for ring to convert it will ignore the ```:cookies``` header. We need to wrap the request map as it comes in for ring to include our defined cookies in the response map. We can do this by:

  ```Clojure
  (use 'ring.middleware.cookies)
  (use 'ring.adapter.jetty)
  
  (def app (wrap-cookies identifying-user))
  
  ;; then to run this
  (run-jetty app {:port 3000})
  ```

You can see the difference between the two tries if you run it once without wrapping and then with, by going to http://localhost:3000 and clicking on inspect element, then viewing the storage. Under cookies you should now see some data regarding the name,path,session,expiration etc.

Looking back on our handler, we could add some additional security features like HTTPS and expiration times. To do this, we make the additions to the ```:cookies``` map.

  ```Clojure
  {...
  :cookies {"much_better" {:value "some-hash", :secure true, :max-age 600}} ;; only available for 600 seconds (10 mins)! 
   ...}
  ```
  
  #### Files
  
  The next thing we'll take a look at is uploaded files to a website and subsequently operating on them.
  
  
