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

What's nice about this is that you don't have to remember the closing brackets of the html tags, making it much more succint than a standard react component. The render function is quite straightforward too, it essentially says "What component are we rendering and what are we rendering on?". We can safely say we will be using the DOM for all of our renders.

The next thing that Reagent offers us are `reagent atoms`. Now you're probably thinking what makes them so special? Well when we make changes to the atom, the change is then signalled to all the watchers of the atom and the changes are then re-rendered for all the components using the atom, which is pretty sweet. If you clone the [Sketchy](https://github.com/Alex-Bakic/Sketchy) repo, and run `lein figwheel`, start messing with the core file and swap between the `r/atom` and `atom` to see the differences. It is interesting that the changes aren't rendered when we click the button. This is because the regular atom doesn't call the render function.

Now, what does re-frame bring to the table that Reagent doesn't?

-- to do, 

-the overall concepts of re-frame
-the parts which comprise a re-frame application
-a look at the very basic todomvc example with walkthrough
-using those parts start build own project showing adaptation
