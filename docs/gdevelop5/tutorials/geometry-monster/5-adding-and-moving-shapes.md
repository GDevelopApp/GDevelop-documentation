---
title: 5-adding-and-moving-shapes
---
⬅️ **[Previous part: 4. Desktop and mobile controls](/gdevelop5/tutorials/geometry-monster/4-desktop-and-mobile-controls)** ➡️ **[Next part: 6. Collision detection](/gdevelop5/tutorials/geometry-monster/6-collision-detection)**

# 5. Adding and moving shapes

After successfully [implementing the movement](/gdevelop5/tutorials/geometry-monster/4-desktop-and-mobile-controls) of the Monster it would be great to add the shapes that will be falling down, and move them down onto the scene.

!!! note

    Note that instead of having a fixed number of items placed on a scene, we will generate them in a way the game will be an actual **endless** type.

![](/gdevelop5/tutorials/geometry-monster/57.png)

Click on the "Add a new object" in the right panel to open a popup.

![](/gdevelop5/tutorials/geometry-monster/58.png)

Select a "Sprite", like we did with the Monster before.

![](/gdevelop5/tutorials/geometry-monster/59.png)

Name it "Shape1", and click on the "Add an animation" button.

![](/gdevelop5/tutorials/geometry-monster/60.png)

The animation of this object is called "NewObject1" - load an image of the triangle from the disk. The render time is not important as it's the only frame we have, same goes for looping or not. Click "Apply" to save it.

![](/gdevelop5/tutorials/geometry-monster/61.png)

Click on the "Add a new object" again.

![](/gdevelop5/tutorials/geometry-monster/62.png)

Do the same for the second shape: "Shape2" as the name, "NewObject2" as the animation, and a square image, then "Apply".

![](/gdevelop5/tutorials/geometry-monster/63.png)

Repeat for the circle.

![](/gdevelop5/tutorials/geometry-monster/64.png)

The last, fourth shape is a pentagon.

![](/gdevelop5/tutorials/geometry-monster/65.png)

Now all the four shapes are visible in the "Objects" list in the right panel. We will group them with the "Objects" groups editor - click on the fourth icon in the top right menu, the one that have three cubes on it.

![](/gdevelop5/tutorials/geometry-monster/66.png)

It will expand the current view and show an extra "Object Groups" panel on the right - click on "Group" to open a popup.

![](/gdevelop5/tutorials/geometry-monster/67.png)

Click on "Choose an object to add to the group", and then select all four shapes.

!!! note

    Remember to not add the Monster to that group, only the shapes.

![](/gdevelop5/tutorials/geometry-monster/69.png)

Keep adding the shapes until all are listed in the group, and then click "Apply".

![](/gdevelop5/tutorials/geometry-monster/70.png)

Now click on the three vertical dots next to the "Group" in the "Object Groups" panel to open a context menu and click "Rename".

![](/gdevelop5/tutorials/geometry-monster/71.png)

Rename the group to "Shapes", and confirm.

![](/gdevelop5/tutorials/geometry-monster/73.png)

Add a new comment to indicate this new section will be about the shapes.

![](/gdevelop5/tutorials/geometry-monster/74.png)

Then click on "Add a new event", and "Add condition" to open a popup.

![](/gdevelop5/tutorials/geometry-monster/76.png)

In the "Other conditions" tab, find "Timers and time", and click it.

!!! note

    Don't have the "Other conditions" tab? Don't panic! Go to GDevelop preferences (Click on the "File" (or "GDevelop 5" on macOS) menu, then "Preferences". Activate "Use the new action/condition editor". You can then go back to the tutorial. ![](/gdevelop5/tutorials/geometry-monster/activate_new_editor.png) 

![20220129-141256.png](/gdevelop5/tutorials/geometry-monster/5-adding-and-moving-shapes/pasted/20220129-141256.png)

Then from the dropdown, select "Value of a scene timer" and enter two values. First is `1.3` in the "Time in seconds" field which will represent the number of seconds - every 1.3 seconds we will drop new shape onto the scene.

Second is the "Timer's name" - set that to "ShapeCreation", and click "Ok" when you finished entering both values.

![](/gdevelop5/tutorials/geometry-monster/79.png)

Now when the condition is in place, let's add the action.

![](/gdevelop5/tutorials/geometry-monster/80.png)

Click on the "Other actions".

![](/gdevelop5/tutorials/geometry-monster/81.png)

Then search for the "Create an object from its name" that will be listed in the "Non-objects and other actions".

![](/gdevelop5/tutorials/geometry-monster/82.png)

In the right panel, look for the "Shapes" group and click it.

![](/gdevelop5/tutorials/geometry-monster/83.png)

The three values we will enter are: "Text representing the name of the object to create", "X position", and "Y position". Name it `"Shape" + ToString(RandomInRange(1,4))`, so that whenever a new object is created, it will be one of the four available shapes.

The X position is `RandomInRange(80, 640-80)` - this means we will pick a random position between `80` and `560` pixels. Why those specific values? To make sure the shapes are rendered fully on the scene and are not partially cut out if they'd render on any of the edges of the screen.

The Y position is `-100`, so the new shape appear above the visible area, and will then move down. It will look more natural than spawning it right onto the gameplay area.

!!! note

    Confused about the positions on screen? If you move your cursor in the scene editor, you'll see in the bottom-left the X and Y position of the cursor. Useful to get an idea of where a position is while working with events like these.

![](/gdevelop5/tutorials/geometry-monster/84.png)

Let's add another action to that.

![](/gdevelop5/tutorials/geometry-monster/85.png)

Be sure the "Shapes" are selected, then look for the "Angle" in the next panel - this will change the angle of rotation of an object. In "Modification's sign" select `= (set to)` and the value `RandomInRange(0, 360)`.

Now whenever a new shape is created and dropped onto the gameplay area, it will be rotated by a random value from between `0` and `360` degrees. This will add some variety to how the shapes are presented in the game.

![](/gdevelop5/tutorials/geometry-monster/86.png)

Let's go even further with the customizations - click on the "Add action" once again.

![](/gdevelop5/tutorials/geometry-monster/87.png)

Click on "Shapes", then look for "Scale", select `= (set to)` and enter `RandomFloatInRange(0.8, 1.6)`. This will customize our shapes even more by introducing random scaling - some of them will be a little bit smaller than the original (80% of the original), and some will be bigger (160%).

!!! note

    Rotation and scaling is a great way to make the game more fun even though we still have only four basic shapes in play.

![](/gdevelop5/tutorials/geometry-monster/89.png)

Now go into the "Other actions" to look for "Timers and time", and select "Start (or reset) a scene timer".

![](/gdevelop5/tutorials/geometry-monster/90.png)

The timer's name is "ShapeCreation", so whenever a new shape is created, the timer is reset and we wait for 1.3 seconds before a new shape is created again, and again, indefinitely.

![20220129-141922.png](/gdevelop5/tutorials/geometry-monster/5-adding-and-moving-shapes/pasted/20220129-141922.png)

Next create a new event above the shapes event and give it the condition "at beginning of the scene", and copy/paste the earlier create "Start (or reset) a scene timer" action for "ShapeCreation" to this new event. This will start the timer at the beginning of the game in so the shapes event will trigger the first time.

![](/gdevelop5/tutorials/geometry-monster/91.png)

We're almost done with the shapes. Create a comment called "Move shapes", then click on "Add a new empty event", then "Add action".

![](/gdevelop5/tutorials/geometry-monster/92.png)

Add an action: select "Shapes", then "Add a force (angle)", and set the "Angle" to `90`, and "Speed in pixels per second)" to `100`.

![](/gdevelop5/tutorials/geometry-monster/92_2.png)

Add another action: "Shapes", then "Rotate", and set the "Angular speed (in degrees per second)" to `90`.

That's it! Not only our shapes are spawned randomly and indefinitely, and have random rotation and scaling at the beginning, but they also rotate while falling down.

![](/gdevelop5/tutorials/geometry-monster/94.png)

Launch the game to see all that in action - shapes should fall down the scene. It feels like something is missing, right? They go through the Monster, so we need to introduce [collision detection](/gdevelop5/tutorials/geometry-monster/6-collision-detection) to be able to collect them.

⬅️ **[Previous part: 4. Desktop and mobile controls](/gdevelop5/tutorials/geometry-monster/4-desktop-and-mobile-controls)** ➡️ **[Next part: 6. Collision detection](/gdevelop5/tutorials/geometry-monster/6-collision-detection)**
