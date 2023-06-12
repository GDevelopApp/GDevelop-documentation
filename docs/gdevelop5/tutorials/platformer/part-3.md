---
title: Create Platforms
---
# Create Platforms

This part of the tutorial explains how to add platforms to the game. This provides the player with some solid ground to move across and jump between.

You'll learn how to:

* Create Tiled Sprite objects.
* Make a platform behave like a platform.

## Series

You are reading **Part 3** of the [Platformer Tutorial](/gdevelop5/tutorials/platformer).

1. [Part 1: Getting started](/gdevelop5/tutorials/platformer)
2. [Part 2: Create a Playable Character](/gdevelop5/tutorials/platformer/part-2)
3. Part 3: Create Platforms
4. [Part 4: Animate the Playable Character](/gdevelop5/tutorials/platformer/part-4)
5. [Part 5: Add Collectible Coins to the Game](/gdevelop5/tutorials/platformer/part-5)
6. [Part 6: Add Enemies to the Game](/gdevelop5/tutorials/platformer/part-6)
7. [Part 7: Make Enemies Kill the Player (and the Player Kill the Enemies)](/gdevelop5/tutorials/platformer/part-7)
8. [Part 8: Add Checkpoints to the Game](/gdevelop5/tutorials/platformer/part-8)

## Step 1: Create an object

The first step is to create an object for the platform. If you followed the first and second parts of this tutorial, this is a similar -- but not identical -- process.

The main difference is that this object needs to be a Tiled Sprite object. This type of object "displays an image repeated over an area." It's ideal for something like platforms, which are typically constructed out of small, square images (also known as *tiles*).

To create an object for the platform:

1. In the **Objects** panel, click **Add a new object**.
2. Select **Tiled Sprite**.
3. In the **Object name** field, type "GrassPlatform".
4. Click **Select an image**.
5. Click **Choose a new image**.
6. When the file chooser opens, select the "grassHalfMid" asset.
7. Click **Apply**.

Then drag some instances of the object into the scene and vary the width of these instances to create platforms of different lengths.

![](/gdevelop5/tutorials/platformer/grass-platform-resize.gif)

## Step 2: Add a behavior to the object

Just adding a platform to the scene isn't enough. You also need to add a behavior to the object to make it something the playable character can walk on. Conveniently, GDevelop provides a behavior named **Platform** behavior that does this for you.

![](/gdevelop5/tutorials/platformer/platform-behavior.jpg)

To add **Platform** behavior to the object:

1. Open the **Behaviors** tab for the "GrassPlatform" object.
2. Select **Platform behavior**.
3. Click **Apply**.

![](/gdevelop5/tutorials/platformer/grass-platform-add-behavior.jpg)

If you preview the game, the player can move across the surface of the platform.

![](/gdevelop5/tutorials/platformer/grass-platform-behavior.gif)

## Step 3: Create a different type of platform

GDevelop also provides the **Jumpthru platform** behavior. This behavior creates a platform that the player can jump onto from beneath it. This adds more variety to the level.

To create a platform with the **Jumpthru platform** behavior:

1. Create a **Tiled sprite** object named "SmallBridge".
2. Use the "bridgeLogs.png" asset as the object's image.
3. Open the **Behaviors** tab.
4. Select **Platform behavior**.
5. From the **Type** dropdown, select **Jumpthru platform**.
6. Click **Apply**.

Then drag some instances of the object into the scene.

![](/gdevelop5/tutorials/platformer/jump-thru-platform-preview.gif)

## Next steps

Read [Part 4: Animate the Playable Character](/gdevelop5/tutorials/platformer/part-4).