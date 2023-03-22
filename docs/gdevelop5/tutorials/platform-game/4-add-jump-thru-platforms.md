---
title: Add a 'Jump through' platform
---
# Add a 'Jump through' platform

!!! warning

    This version of the tutorial is deprecated. Please refer to the [new platformer tutorial](/gdevelop5/tutorials/platformer) for the completely revised version of the tutorial. The equivalent information to the current tutorial can be found in [Part 3](/gdevelop5/tutorials/platformer/part-3).

For now, all of the platforms are rock solid: you can't jump on them when the player is below them. We can create new platforms that can be jumped on through them.

## Create the new object

Create a new `Sprite` object, add an animation and choose the image called `bridgeLogs`:

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-26_at_22.40.34.png)

You can rename the object so that it's called `SmallBridge`:

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-26_at_22.42.01.png)

## Make it a "jump-thru" platform

For now, the object is not considered as a platform. Open the object editor and switch to the `Behaviors` tab. Add the behavior called Platform. Finally, choose "Jumpthru platform" in the list when you click on the "Type" field:

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-26_at_22.44.30.png)

## Launch the preview!

You can now launch a preview and see that you can jump on the bridge!

![](/gdevelop5/tutorials/platform-game/jumpthru.gif)

Also, as usual, don't forget to save your game!

## Next step: add backgrounds objects

The level is still quite empty. Let's add some background objects to make it more pretty.
We'll then add coins to collect and enemies!

➡️ Read **[4 add backgrounds objects](/gdevelop5/tutorials/platform-game/4-add-backgrounds-objects)**!