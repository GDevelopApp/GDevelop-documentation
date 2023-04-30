---
title: 13-juice-it
---
⬅️ **[Previous part: 12. Main menu](/gdevelop5/tutorials/geometry-monster/12-main-menu)** ⬅️ **[Return to index](/gdevelop5/tutorials/geometry-monster)**

# 13. Juice it!

In this last piece we're introducing little bits that can make the game really stand out: progressively increasing the difficulty level, and spawning particle effects when Monster is collecting the shapes.

![](/gdevelop5/tutorials/geometry-monster/291.png)

We'll start with the first one. Add a comment "Progressively increase game speed".

![](/gdevelop5/tutorials/geometry-monster/293.png)

Add an action "Value of a scene variable", call it "GameSpeed", set the modifications's sign to `+ (add)` and the value to `7*TimeDelta()`.

![](/gdevelop5/tutorials/geometry-monster/294.png)

Add another comment, but higher up on the list of events, right below the Shapes: "Move shape according to the game speed". The difficulty level increase will make the shapes fall faster.

![](/gdevelop5/tutorials/geometry-monster/295.png)

Edit the action and replace `100 pixels` with `Variable(GameSpeed)`.

![](/gdevelop5/tutorials/geometry-monster/296.png)

This will be repeated for the bomb obstacle - add a comment "Move obstacle according to the game speed"...

![](/gdevelop5/tutorials/geometry-monster/297.png)

...and then replace `100 pixels` with `1.5*Variable(GameSpeed)`, so the bombs will fall even faster than the shapes.

![](/gdevelop5/tutorials/geometry-monster/298.png)

Test it out and play the game for a bit to see if this really works as expected.

!!! note

    You can make the game easier or harder by changing the GameSpeed variable yourself.

![](/gdevelop5/tutorials/geometry-monster/299.png)

Now onto the particles. Click on "Add a new object" in the right panel...

![](/gdevelop5/tutorials/geometry-monster/300.png)

...and select "Particles emitter".

![](/gdevelop5/tutorials/geometry-monster/301.png)

Those emitters will spawn small shapes as particles after the Monster collects it. Object's name will be "Shape1Explosion", kind of particles: "Textured", then select the geometry1.png image, and enter the respective values: start with `20` particles, their height will be `20` pixels, start and end opacity will be `255`, so they will be fully visible.

![](/gdevelop5/tutorials/geometry-monster/302.png)

Scroll down to enter more values. Be sure to select "Delete when out of particles", to the emitter will spawn all the particles assigned to it and then will be removed as not needed anymore. Set the maximum number of particles to `10`, number of particles in tank to `5`, flow to `45` particles per second, minimum emitter force applied on particles to also `45`, maximum to `85`, spray cone angle to `360` (so the emitter spawns the particles in every direction), and radius of the emitter to `10`.

![](/gdevelop5/tutorials/geometry-monster/303.png)

Scroll down even more. Set the gravity on particles on both X and Y axes to `0` (we don't need gravity in our game), friction on particles to `2`, particle minimum lifetime to `0,5` seconds and the maximum one to `1,5` seconds, particle start size to `100` and end size to `80` (so they get a little smaller after they are spawned), minimum rotation speed to `0` and maximum to `40` degrees per second (so some of them can rotate a bit).

Confirm all that by clicking "Apply".

![](/gdevelop5/tutorials/geometry-monster/304.png)

Repeat the steps for the other three shapes: geometry2, geometry3, and geometry4.

![](/gdevelop5/tutorials/geometry-monster/305.png)

Create the sub-comment for spawning the particles, and then add a new condition.

![20220603-221000.png](/gdevelop5/tutorials/geometry-monster/13-juice-it/pasted/20220603-221000.png)

Select Shape1 from the list of objects, look for "Number of objects instances currently picked", and then "≠ (not equal to)" and `0` in the right panel.

![20220603-221508.png](/gdevelop5/tutorials/geometry-monster/13-juice-it/pasted/20220603-221508.png)

Add a new action: "Shape1Explosion" in the list of objects, look for "Create and object", and then X position to `Shape1.PointX("Center")` and Y position to `Shape1.PointY("Center")`, so they spawn in the middle of the shape they are going to replace.

![](/gdevelop5/tutorials/geometry-monster/311.png)

Add another action: "Shape1Explosion" again, "Size, parameter 1" and then "= (set to)" with the value `Shape1.Width()`.

![20220603-221135.png](/gdevelop5/tutorials/geometry-monster/13-juice-it/pasted/20220603-221135.png)

Repeat the steps for the other three shapes.

![](/gdevelop5/tutorials/geometry-monster/313.png)

Now we're gonna add the sub-comment for the section about deleting the shape when it's being eaten, and we're going to move the part responsible for increasing the score.

![](/gdevelop5/tutorials/geometry-monster/314.png)

Drag the "Delete object Shapes" part below it...

![](/gdevelop5/tutorials/geometry-monster/315.png)

...so it looks like this.

![](/gdevelop5/tutorials/geometry-monster/316.png)

That's it! All the thirteen steps are now completed, and you've built **Geometry Monster** game from scratch, **congratulations**!

The game features infinite amount of shapes to collect, bombs to make collecting them a little bit harder, lives to counter that and ease on making mistakes, keeping the score, game over when Monster runs out of lives, switching between main menu and gameplay scenes, increasing difficulty level, particle effects, and much more!

Feel free to use it as your base and expand on top of it - add features, change the existing ones, and play with it to learn as much as possible.

⬅️ **[Previous part: 12. Main menu](/gdevelop5/tutorials/geometry-monster/12-main-menu)** ⬅️ **[Return to index](/gdevelop5/tutorials/geometry-monster)**
