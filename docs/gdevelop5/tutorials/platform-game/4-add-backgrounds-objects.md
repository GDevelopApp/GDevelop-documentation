---
title: Add a background objects
---
# Add a background objects

!!! warning

    This version of the tutorial is deprecated. Please refer to the [new platformer tutorial](/gdevelop5/tutorials/platformer) for the completely revised version of the tutorial.

Right now the level is quite simple without the fancy stuff. Let's add some static objects in the background.

## Create objects

Adding objects in the background is really easy: just add some sprites with the images you wish and put them on the scene.

For example, create a `Sprite` object, add an animation and add the `bush` image:

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-27_at_22.45.14.png)

You can name this object `Bush`, and also add another object with the `cloud` image:

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-27_at_22.46.01.png)

## Put objects on the scene and change the z-order

If you add objects on the scene, you can see that the player is displayed behind them:

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-27_at_22.52.10.png)

Every instance on the scene has a property which is called **z-order**. It's a number and objects with a higher Z-order will be displayed in front of objects with a Z-order that is lower. Z-order can be any number, and it can be negative too.

Here, you can change the Z-order of bushes and clouds to set them negative, so that the player character (with a Z-order that should be 1) is displayed in front of them. To do this, select the instances on the scene. You can keep pressing SHIFT on your keyboard to select more than one object:

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-27_at_22.59.47.png)

Then, change the value of the field "Z-order" in the *Properties panel* on the left. For example, -2 (or any negative number) will ensure that these objects are behind the player:

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-27_at_23.00.40.png)

We now have the visual result that we wanted:

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-27_at_23.01.44.png)

Launch a preview to check that everything is working well!

## Next step: add coins and display how many have been collected

Let's add a goal for the player: to collect as many coins as possible! To do this, we're going to use events to remember the player score, play sounds and remove the collected coins!

➡️ Read **[the next part of the tutorial here](/gdevelop5/tutorials/platform-game/5-add-coins-and-number-of-collected-coins)**!