---
title: Example of replacing external events by a function
---
# Example of replacing external events by a function

External events can be a good way of sharing/reusing events in your game. [Functions](/gdevelop5/events/functions) are going one step further as they are able to receive parameters, for example objects.

## Example using external events

Let's say we have this event to position objects on a virtual grid:

![](/gdevelop5/events/functions/external-events-snap-grid.png)

You could use them then by including them in your scene:

![](/gdevelop5/events/functions/external-events-include-snap-grid.png)

The only problem is that they are not really reusable: the only objects that will have their position aligned with the virtual grid are objects called "Tile". What if instead you had a function that you could call with the object that you want to snap to the grid?

## Example with a function

Instead, we can declare a function with a parameter, the object to snap:

![](/gdevelop5/events/functions/function-snap-grid.png)

We called the object "Tile", but we could have changed the name for anything more generic!

It's then super simple to call the function in your events. It's available as a new action!

![](/gdevelop5/events/functions/call-function-snap-grid.png)

The advantage is that you can now use this new action to snap any object to the grid. You could even extract it and reuse it in another game!

!!! tip

    Turns out that this was already done, there is a [useful extension](/gdevelop5/extensions/search) "Snap Objects to a virtual grid" providing a similar action.

[Learn more about functions here](/gdevelop5/events/functions).