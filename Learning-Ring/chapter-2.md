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

Now we're onto the topic of session management, as always we have to wrap the request map first before we can pick things out and put them in our response so we'll be making good use of the ```wrap-session``` middleware from ```ring.middleware.session```. Session data is kept in the ```:session``` key and if we use it in our response it will signal to ring we want to update some of the data. Maybe we want to kill or restart a session.

  ```Clojure
  (defn handler [{session :session}]
    (let [count   (:count session 0)
        session (assoc session :count (inc count))]
        ;; session takes all the data from the previous session but instead associates the :count key with the value 1
      (-> (response (str "You accessed this page " count " times."))
        (assoc :session session))))
   
   
     ;; adds the session variable that is defined in let into the response message.
  
  (def app (wrap-session handler {:cookie-attrs {:secure true}}))
  ;; this is a best practice as it means that our session cookie is not leaked through HTTP and wrapped with HTTPS.
  ```

Now if we actually want to grab some of the data from the session we need to get it from what's called a ```session store```. There are two means of storing sessions, one being ```ring.middleware.session.memory/memory-store``` and the other being ```ring.middleware.session.cookie./cookie-store```.Now by default Ring stores session data in the browser memory, but this can be overriden to store all the session data like usernames,passwords,emails etc into an encrypted cookie. 

We need to specify this when we wrap our handler, as we can provide additional options, so the corresponding changes are done to the request map.

  ```Clojure
  (use 'ring.middleware.session.cookie)

  (def app
    (wrap-session handler {:store (cookie-store {:key "a 16-byte secret"})})
  ;; note that if a key is supplied it does have to be exactly 16 bytes.
  ```

And that is it for this chapter, but we have only scratched the surface of all the middleware that is available. To view all the functionality at your fingertips [click here for the documentation](https://ring-clojure.github.io/ring/ring.middleware.content-type.html).








  
  
