---
title: 9-adding-bombs
---
⬅️ **[Previous part: 8. Tracking the score](/gdevelop5/tutorials/geometry-monster/8-tracking-score)** ➡️ **[Next part: 10. More lives](/gdevelop5/tutorials/geometry-monster/10-more-lives)**

# 9. Adding bombs

It's great to have the core mechanic of collecting the shapes in place, but it gets boring quite quickly, and it's way too easy. What if we could increase the difficulty level by introducing objects that you shouldn't collect? Behold: **bombs**!

![](/gdevelop5/tutorials/geometry-monster/122.png)

Click to "Add a new object"...

![](/gdevelop5/tutorials/geometry-monster/123.png)

...and select the "Sprite".

![](/gdevelop5/tutorials/geometry-monster/124.png)

"Object's name" will be "Obstacle", same goes for the name of the animation. We have two frames of the animation to show, and it will last for `0,1` seconds, looped.

![](/gdevelop5/tutorials/geometry-monster/125.png)

Add another comment, and call it "Obstacle".

![](/gdevelop5/tutorials/geometry-monster/127.png)

Add new condition, search the "Other conditions".

![20220129-143434.png](/gdevelop5/tutorials/geometry-monster/9-adding-bombs/pasted/20220129-143434.png)

Within "Timers and time", select "Value of a scene timer". In the right panel, enter "Time in seconds" which will be `5`, select "greater than", and enter "Timer's name" as "ObstacleCreation".

This will create a new timer that will spawn a bomb independently from spawning the shapes, and it will appear once every 5 seconds.

!!! note

    Feel free to change this value to make the game harder. We'll see in a next chapter how to speed up bombs as the time is passing - to make the game more challenging. You could also use a variable instead of a number, so that you can change during the game the time between the creation of bombs!

![](/gdevelop5/tutorials/geometry-monster/129.png)

Now the action - select the "Obstacle", search for "Create an object", and set the "X position" to `RandomInRange(80, 640-80)`, and "Y position" to `-100`. It's the exact same approach as with shapes.

![](/gdevelop5/tutorials/geometry-monster/131.png)

The second action to add is "Start (or reset) a scene timer" in "Timers and time", and then "ObstacleCreation" as the name.

![20220129-144239.png](/gdevelop5/tutorials/geometry-monster/9-adding-bombs/pasted/20220129-144239.png)

Next create a new event above the obstacle event and give it the condition “at beginning of the scene”, and copy/paste the earlier create “Start (or reset) a scene timer” action for “ObstacleCreation” to this new event. This will start the timer at the beginning of the game in so the obstacle event will trigger the first time.

![20220129-144332.png](/gdevelop5/tutorials/geometry-monster/9-adding-bombs/pasted/20220129-144332.png)

It should look like this above after you successfully complete the steps. If it is, add another action.

![](/gdevelop5/tutorials/geometry-monster/133.png)

Remember about having the "Obstacle" selected, then look for "Add a force (angle)", enter `90` into the "Angle" field, and `100` into the "Speed".

![](/gdevelop5/tutorials/geometry-monster/134.png)

We'll make sure the bomb is in front of the shapes, and not behind them - to do that, we're gonna use *Z order*. It's a way to tell the game how we want the objects to be rendered. "Obstacle", then "Z order", then `= (set to)` and `4`.

![](/gdevelop5/tutorials/geometry-monster/135.png)

Launch the game and see the shapes falling down the screen, with bombs appearing once every few shapes and falling independently. Colleting shapes give you points, while bombs do nothing yet.

Bombs are challenging, so let's make the gameplay a little bit easier by introducing [lives](/gdevelop5/tutorials/geometry-monster/10-more-lives).

⬅️ **[Previous part: 8. Tracking the score](/gdevelop5/tutorials/geometry-monster/8-tracking-score)** ➡️ **[Next part: 10. More lives](/gdevelop5/tutorials/geometry-monster/10-more-lives)**
