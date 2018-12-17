## Learning Re-Frame Chapter 3

In this next section we're going to be adding some comments to each idea we write down, and the ability to add some
keywords as well , to act as metadata (data about our data).

When we add an idea, we should then , underneath, present the user with the ability to add comments and keywords to it. 
One idea for this would be to have the "show-comments" section subscribe to `:ideas`, and when it changes an empty section 
with something like a `[+]` to add a comment. Same for the keyword. But then I might have to have them subscribe to that as 
well as the comments/keywords section. Another issue could be that if the user adds a new, separate idea that it would cause
comments in other parts of the program to re-render...

