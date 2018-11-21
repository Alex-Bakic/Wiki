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
  
The next thing we'll take a look at is files, namely uploading them and being able to operate on them. Now this process is unique since that it goes beyond just working with HTTP and converting the keywords into hashmaps and what not, Ring has to do the work of saving the file (either into a .tmp file or a function that we specify) and when we use that file in subsequent responses Ring will need to be able to convert it and pass it along. It certainly is more than the average job, and so we need two handlers from the ```ring.middleware``` library, namely ```wrap-params``` and ```wrap-multipart-params```. 

```wrap-params``` is pretty simple, it just adds the ```:params``` key to the request map and puts things from the query string into there.  

```wrap-multipart-params``` is the handler which deals with actually storing the file, as either a Java object or as a temp file. Temp files are stored under the ```:params``` key. 

When we wrap our handler with these two, they (again) come into contact with the request map before the handler does and adds the ```file``` key to the ```:params``` submap, making the request map look like:

  ```Clojure
  {...
  :params
   {"file" {:filename     "words.txt"
            :content-type "text/plain"
            :tempfile     #object[java.io.File ...]
            :size         51}}
  ...}
  ```

The handler itself could look like 

  ```Clojure
  (defn upload-some-file
    [{my-file :params}]
    ;; returns a map of the file and any other params
    {:status 200
     :headers {}
     :body (str "You have just added the file : " (get-in my-file ["file :filename"])) 
    })
    
  (def app
   (wrap-multipart-params (wrap-params upload-some-file)))

  (comment 
  
    ;; could instead of the above , do
    
    (def app
      (-> upload-some-file
          wrap-params
          wrap-multipart-params))
  
  )

  (run-jetty app {:port 3000})
  ```

And once the server is up we could run

  ```
  curl -XPOST  "http://localhost:3000" -F file=@words.txt
  ```
  
At the terminal and we should see our file name. 

With that it is time to move onto sessions. 

#### Sessions













  
  
