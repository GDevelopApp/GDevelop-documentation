---
title: Bounce (using forces)
---
# Bounce (using forces)

The "Bounce (using forces)" extension provides a behavior that adds a few actions to the objects having it - allowing them to easily bounce against other objects.

!!! note

    For this to work, you must ensure your object is moved using forces. If you use the Physics engine, it won't work (because the Physics engine will take care of simulating by itself any bounce).

The action you want to use most of the time is **"Bounce off another object"**. Call it after checking for the collision between the moving object(s) and the obstacle(s). This will compute the angle of the collision (called the "normal angle", or "normal vector", in orange on the drawing below), will stop the moving object and will add a new, permanent force to it so that it moves in the "reflected direction" (in green in the following drawing):

![](/gdevelop5/extensions/bounce/pasted/20210816-155105.png)

There also is an action that does the same but let you specify the "normal" angle. This is useful if you always want to bounce toward a direction. 
Finally, two actions exist to:

* Bounce always horizontally (i.e: with a "normal" angle of 0 degrees, or 180 which is equivalent). Useful for paddle in a pong game.
* Bounce vertically (i.e: with a "normal" angle of 90 degrees, or -90 which is equivalent). Useful for the top/bottom of the screen in a pong game.