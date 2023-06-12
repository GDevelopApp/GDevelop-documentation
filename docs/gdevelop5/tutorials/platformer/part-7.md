---
title: Make Enemies Kill the Player (and the Player Kill the Enemies)
---
# Make Enemies Kill the Player (and the Player Kill the Enemies)

This part of the tutorial explains how the player can kill -- and be killed by -- the game's enemies.

## Series

You are reading **Part 7** of the [Platformer Tutorial](/gdevelop5/tutorials/platformer).

1. [Part 1: Getting started](/gdevelop5/tutorials/platformer)
2. [Part 2: Create a Playable Character](/gdevelop5/tutorials/platformer/part-2)
3. [Part 3: Create Platforms](/gdevelop5/tutorials/platformer/part-3)
4. [Part 4: Animate the Playable Character](/gdevelop5/tutorials/platformer/part-4)
5. [Part 5: Add Collectible Coins to the Game](/gdevelop5/tutorials/platformer/part-5)
6. [Part 6: Add Enemies to the Game](/gdevelop5/tutorials/platformer/part-6)
7. Part 7: Make Enemies Kill the Player (and the Player Kill the Enemies)
8. [Part 8: Add Checkpoints to the Game](/gdevelop5/tutorials/platformer/part-8)

## Step 1: Kill the player

When the player collides with an enemy, the player should die. An easy way to "kill" the player is to delete the "Player" object if it collides with an enemy.

To delete the "Player" object if it collides with an enemy:

1. Create a new event.
2. Add a **Collision** condition that checks if the "Player" object is colliding with the "Slime" object.
3. Add the **Is on floor** condition to the "Player" object. This ensures that the player only dies if they're on the platform (i.e. not jumping).
4. Add the **Delete an object** action to the event that deletes the "Player" object.

![](/gdevelop5/tutorials/platformer/07-01-kill-player.jpg)

If you preview the game, running into the enemy will kill you.

![](/gdevelop5/tutorials/platformer/07-02-killing-player-preview.gif)

## Step 2: Kill the enemy

If a player jumps on an enemy, the enemy should die. Similar to the previous step, "death" in this case means deleting the "Slime" object.

To delete the "Slime" object when a player jumps on it:

1. Create a new event.
2. Add a **Collision** condition that checks if the "Player" object is colliding with the "Slime" object.
3. Add the **Is falling** condition to the "Player" object. This ensures that the enemy only dies if the player is jumping (i.e. not on the platform).
4. Add the **Delete an object** action to the event that deletes the "Slime" object.

![](/gdevelop5/tutorials/platformer/07-03-kill-enemy.jpg)

If you preview the game, you can jump on the enemy to kill them.

![](/gdevelop5/tutorials/platformer/07-04-killing-enemy-preview.gif)

## (Optional) Step 3: Bounce on the enemy's head

In a lot of platforming games, when the player jumps on an enemy, the player bounces on the enemy's head. This is makes killing an enemy feel more fluid.

To make the player bounce on the enemy's head:

1. Add the **Allow again jumping** action to the "Player" object.
2. Add the **Simulate jump key press** action to the "Player" object.

![](/gdevelop5/tutorials/platformer/07-05-bounce-kill.jpg)

If you preview the game, you'll bounce on the enemy's head when killing them.

![](/gdevelop5/tutorials/platformer/07-06-killing-enemy-bounce-preview.gif)

## Next step

Read [Part 8: Add Checkpoints to the Game](/gdevelop5/tutorials/platformer/part-8).