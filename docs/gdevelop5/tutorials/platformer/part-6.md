---
title: Add Enemies to the Game
---
# Add Enemies to the Game

This part of the tutorial explains how to add enemies to the game that can move back and forth along a set route. The next part of the tutorial explains how the player can kill -- and be killed by -- these enemies.

## Series

You are reading **Part 6** of the [Platformer Tutorial](/gdevelop5/tutorials/platformer).

1. [Part 1: Getting started](/gdevelop5/tutorials/platformer)
2. [Part 2: Create a Playable Character](/gdevelop5/tutorials/platformer/part-2)
3. [Part 3: Create Platforms](/gdevelop5/tutorials/platformer/part-3)
4. [Part 4: Animate the Playable Character](/gdevelop5/tutorials/platformer/part-4)
5. [Part 5: Add Collectible Coins to the Game](/gdevelop5/tutorials/platformer/part-5)
6. Part 6: Add Enemies to the Game
7. [Part 7: Make Enemies Kill the Player (and the Player Kill the Enemies)](/gdevelop5/tutorials/platformer/part-7)
8. [Part 8: Add Checkpoints to the Game](/gdevelop5/tutorials/platformer/part-8)

## Step 1: Create an object for the enemy

1. Create a Sprite object named "Slime".
2. Add an animation to the object that uses the following assets:
    - slimeWalk1.png
    - slimeWalk2.png
3. Enable the **Loop** option.
4. Drag an instance of the object into the scene.

![](/gdevelop5/tutorials/platformer/06-01.jpg)

If you preview the game, an animated enemy appears on screen.

![](/gdevelop5/tutorials/platformer/06-02.gif)

## Step 2: Move the enemy to the right

The previous part of this tutorial mentioned that there were three types of variables:

  - Object
  - Scene
  - Global

An _object_ variable is tied to a specific object. This means the variable holds a value that is only available to -- and only relevant to -- the associated object.

To add an object variable to the "Slime" object:

1. Right click the "Slime" object.
2. Select **Edit object variables**.
3. Add a variable named "direction" with a value of "right". This is the default value of the variable.
4. Click **Apply**.

This "direction" variable keeps track of the enemy's current direction. In a later step, you'll be able to change the direction of the enemy by changing the value of the variable.

![](/gdevelop5/tutorials/platformer/06-03.jpg)

To move the enemy to the right, create an event:

1. Open the Events editor.
2. Create a new event.
3. Add the **Text of an object's variable** condition to the "Slime" object.
4. In the **Variable** field, type "direction".
5. In the **Sign of the test** field, select **= (equal to)**.
6. In the **Value to compare** field, type "right" (including the quotation marks).
7. Click **OK**.

![](/gdevelop5/tutorials/platformer/06-04.jpg)

Then add an action to the event:

1. Add the **Add a force (angle)** action to the event.
2. In the **Object** field, select "Slime".
3. In the **Angle** field, type "0".
4. In the **Speed** field, type "100".
5. Enable the **Instant** option.
6. Click **OK**.

![](/gdevelop5/tutorials/platformer/06-05.jpg)

This is what the complete event looks like:

![](/gdevelop5/tutorials/platformer/06-06.jpg)

Based on this event, while the value of the "direction" variable is "right", the "Slime" object moves right. Because the object never changes direction though, it inevitably falls off the edge of the platform.

![](/gdevelop5/tutorials/platformer/06-07.gif)

## Step 3: Change the enemy's direction

To make the enemy change direction, add two invisible objects to the scene -- one called "Left" and one called "Right" -- and place them on other side of the enemy.

Then, when the enemy collides with one of the objects, you can flip them around and move them in the other direction. This creates the illusion of the enemy following a set route.

This step focuses on creating the "Left" object. When the enemy collides with this object, they'll change direction from left to right. (The step that follows focuses on the "Right" object.)

### Create the "Right" object

1. Create a Sprite object named "Left".
2. As the default sprite, use the "left.png" asset.
3. Drag an instance of object into the scene (to the right of the enemy).

![](/gdevelop5/tutorials/platformer/06-08.jpg)

### Detect when the enemy collides with the "Left" object

1. Create a new event.
2. Add a **Collision** condition that checks if the "Slime" object is colliding with the "Left" object.

![](/gdevelop5/tutorials/platformer/06-09.jpg)

### Change the value of the "direction" variable

1. Add the **Modify the text of a variable of an object** action to the event.
2. In the **Variable** field, type "direction".
3. From the **Modification's sign** dropdown, select **= (set to)**.
4. In the **Value** field, type "left" (with quotation marks).

![](/gdevelop5/tutorials/platformer/06-10.jpg)

### Flip the "Slime" object

1. Add the **Flip the object horizontally** action to the event.
2. Set the **Activate flipping** option as **Yes**.

This ensures that the "Slime" object changes _and_ faces a different direction, rather than just changing directions.

### Change the enemy's direction

1. Add the **Add a force (angle)** action to the event.
2. In the **Object** field, select "Slime".
3. In the **Angle** field, type "180".
4. In the **Speed** field, type "100".
5. Enable the **Instant** option.
6. Click **OK**.

If you preview the game, the enemy changes direction when they collide with the "Left" object.

![](/gdevelop5/tutorials/platformer/06-12.gif)

### Hide the "Left" object

1. Create a new event.
2. Add the **At the beginning of the scene** condition to the event.
3. Add the **Hide** action to the "Left" object.

![](/gdevelop5/tutorials/platformer/06-11.jpg)

If you preview the game, the enemy appears to change direction by their own "choice".

![](/gdevelop5/tutorials/platformer/06-13.gif)

## Step 4: Change the enemy's direction (again)

After the enemy collides with the "Left" object, they start moving right and never stop moving right. To ensure they change direction again, create an object named "RIght". This object should be the same as the "Left" object, except for the following details:

  - Use the "right.png" asset.
  - When the "Player" object collides with the "Slime" object, set the "direction" variable to "right".
  - For the **Flip the object horizontally** action, set **Activate flipping** to **No**.

Then drag an instance of the "Right" object into the scene, to the left of the enemy.

![](/gdevelop5/tutorials/platformer/06-14.jpg)

If you preview the game, the enemy moves back and forth between the invisible markers.

![](/gdevelop5/tutorials/platformer/06-15.gif)

## Next step

Read [Part 7: Make Enemies Kill the Player (and the Player Kill the Enemies)](/gdevelop5/tutorials/platformer/part-7).