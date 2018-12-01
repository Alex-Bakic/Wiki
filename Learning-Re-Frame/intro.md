## The Re-Frame Framework 

Re-Frame is a library that is built upon [Reagent](https://github.com/reagent-project/reagent), an interface for
Clojurescript to React.js, which will allow us to build robust SPAs (Single Page Applications).

I'm going to change the way I do this section of the "Learning-\**tool here\**" series, by making a project on the side that I will be attempting to build as I go along. The aim will be to structure the knowledge both you and I will get from this into a small project. The project in mind is simple but constructive, it is an app that will allow us to keep some ideas that pop into our head, like a basic [todomvc](http://todomvc.com/) which can be found [here](https://github.com/Alex-Bakic/Sketchy):

But I'm going to steer it towards comedy, and the inputs being geared towards comedy sketches and ideas. After I get the basics down I would love to add the ability for the user to upload files to the site of which are the scripts for the idea.

Now then, let's see what we can do with Re-Frame!

To start off, it is important to understand the flow of re-frame, and what separates it from Reagent. Reagent essentially gives us two things. One , that I'll show below, is the mechanisms to write components, which are just sections of our website written in a [Hiccup](https://github.com/weavejester/hiccup)-like syntax. The second is an atom, but with additional functionality to aid us in managing the state on the front-end.

  ```Clojure
  ;; here is an example of a very simple component that we can define with reagent (& subsquently re-frame).
  
  ;; in sketchy/core.cljs
  (ns sketchy.core
    (:require [reagent.core :as r]))
  
  (defn welcome
    [name]
    [:div
      "Hello there" name " ,Welcome to Sketchy"])
      
   ;; and to make sure this component is rendered.
   (defn render-welcome []
     (r/render [welcome]
     (.-body js/document)))
  ```

What's nice about this is that you don't have to remember the closing brackets of the html tags, making it much more succint than a standard react component.

-- to do, 

the overall concepts of re-frame
the parts which comprise a re-frame application
a look at the very basic todomvc example with walkthrough
using those parts start build own project showing adaptation
