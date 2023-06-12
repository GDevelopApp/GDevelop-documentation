---
title: Animate the Playable Character
---
# Animate the Playable Character

This part of the tutorial explains how to animate the playable character.

You'll learn how to:

- Add animations to an object.
- Use events to trigger animations.

## Series

You are reading **Part 4** of the [Platformer Tutorial](/gdevelop5/tutorials/platformer).

1. [Part 1: Getting started](/gdevelop5/tutorials/platformer)
2. [Part 2: Create a Playable Character](/gdevelop5/tutorials/platformer/part-2)
3. [Part 3: Create Platforms](/gdevelop5/tutorials/platformer/part-3)
4. Part 4: Animate the Playable Character
5. [Part 5: Add Collectible Coins to the Game](/gdevelop5/tutorials/platformer/part-5)
6. [Part 6: Add Enemies to the Game](/gdevelop5/tutorials/platformer/part-6)
7. [Part 7: Make Enemies Kill the Player (and the Player Kill the Enemies)](/gdevelop5/tutorials/platformer/part-7)
8. [Part 8: Add Checkpoints to the Game](/gdevelop5/tutorials/platformer/part-8)

## Step 1: Add a jumping animation to the player

In GDevelop, you can add animations to an object and trigger those animations when something happens (such as when a player jumps).

### Add the "Jumping" animation to the "Player" object

To add a jumping animation to the "Player" object:

1. In the **Objects** panel, right click the "Player" object.
2. Select **Edit object**.
3. Click **Add an animation**.
4. Assign a name of "Jumping" to the animation.
5. Click **Add**.
6. From the file chooser, select the "p1_jump.png" asset.

![](/gdevelop5/tutorials/platformer/part-4-01.jpg)

But while the animation is attached to the object, it won't play unless something triggers it.

### Trigger the "Jumping" animation

To trigger the "Jumping" animation:

1. Switch to the Events editor.
2. Create a new event.
3. Add the **Is jumping** condition to the "Player" object.
4. Add the **Change the animation (by name)** action to the event.
5. In the **Animation name** field, enter the name of the "Jumping" animation. You must wrap this name in double quotes (i.e. `"Jumping"`).
6. Click **OK**.

![](/gdevelop5/tutorials/platformer/part-4-02.jpg)

Based on these changes, jumping triggers the animation.

![](/gdevelop5/tutorials/platformer/part-4-03.gif)

## Step 2: Add an idle animation to the player

There's a problem with the jumping animation: it doesn't reset when the player has finished jumping. To fix this, trigger the "Idle" animation when the player returns to the platform.

### Detect when the player is on the floor

GDevelop refers to the surface of a platform as the _floor_.

To detect when an object is on the floor:

1. Create a new event.
2. Add the **Is on floor** condition to the "Player" object.

![](/gdevelop5/tutorials/platformer/part-4-04.jpg)

### Detect when the player is not moving

It only makes sense to trigger the "Idle" animation when the player is still, since moving the player should trigger the "Running" animation (explained in the next step).

To detect when the player isn't moving:

1. Add the **Is moving** condition to the "Player" object.
2. Toggle the **Invert condition** option to the _on_ position.

The **Invert condition** option inverts the way a condition works. This means the **Is moving** condition becomes the **Is not moving** condition.

![](/gdevelop5/tutorials/platformer/part-4-05.jpg)

### Trigger the "Idle" animation

When both of the previous conditions are met, trigger the object's "Idle" animation:

1. Add the **Change the animation (by name)** action.
2. In the **Animation name** field, enter the name of the "Idle" animation. You must wrap this name in double quotes (i.e. `"Idle"`).

![](/gdevelop5/tutorials/platformer/part-4-06.jpg)

If you preview the game, the "Player" object resets to the "Idle" animation after jumping.

![](/gdevelop5/tutorials/platformer/part-4-jumping-with-idle-animation.gif)

## Step 3: Add a running animation to the player

### Add the "Running" animation to the "Player" object

1. Add an animation named "Running" to the "Player" object.
2. From the file chooser, select all of the following assets:
    - p1_walk03.png
    - p1_walk04.png
    - p1_walk05.png
    - p1_walk06.png
    - p1_walk07.png
3. Enable the **Loop** option. When enabled, the animation continually plays for as long as it's active (rather than playing once and stopping).
4. Click **Apply**.

![](/gdevelop5/tutorials/platformer/part-4-07.jpg)

### Trigger the "Running" animation

1. Create a new event.
2. Add the **Is on floor** condition to the "Player" object.
3. Add the **Is moving** condition to the "Player" object.
4. Add the **Change the animation (by name)** action to the event.
5. In the **Animation name** field, enter the name of the "Running" animation. You must wrap this name in double quotes (i.e. `"Running"`).
6. Click **OK**.

![](/gdevelop5/tutorials/platformer/part-4-08.jpg)

If you preview the game, the "Running" animation plays as the player moves.

![](/gdevelop5/tutorials/platformer/part-4-running-animation.gif)

## Next steps

Read [Part 5: Add Collectible Coins to the Game](/gdevelop5/tutorials/platformer/part-5).