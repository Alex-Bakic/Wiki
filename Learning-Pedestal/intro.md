# The Pedestal Library

While I say library, pedestal is encompassing many libraries , which allow us to build services and applications. Pedestal is for server-side web application development, meaning it can serve up some HTML pages or handle and/or issue API requests. 

Now Pedestal itself is very composable, allowing us to practically plug and play with different libraries. For example, there is a routing scheme that comes default. But if we wanted to work with something like Bidi, reitit etc we could. Typically, with such freedom we find that security is an afterthought and we tend to leave gaps in our composable wonder. However, that compromise is curbed here as Pedestal has focused on security by default : securing headers, CSRF-protection are among some of the implemented measures. 

What I plan to use Pedestal for is a relatively simple web application encompassing Clojure, ClojureScript, a proper database and some sort of routing logic. This is a step up for me, as my previous project was a relatively straightforward Re-Frame SPA with no backend and an in-memory db. 

But first, let's explore the [Hello-World sample](https://github.com/pedestal/pedestal/tree/master/samples/hello-world):
