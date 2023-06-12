---
title: How to follow the player (or an object) with the camera?
---
# How to follow the player (or an object) with the camera?

Following a character (also called an [object](https://wiki.gdevelop.io/gdevelop5/objects)) with a camera is a key aspect of video game design that creates an immersive experience for players.
This article includes instructions for implementing this functionality either with a simple extension like [Smooth Camera](https://wiki.gdevelop.io/gdevelop5/extensions/smooth-camera/reference) or a set of actions on the Event Sheet.

![](/gdevelop5/tutorials/follow-player-with-camera/follow_object_with_camera.gif)
{ .align-center }

!!! tip

    Learn more about [layers and cameras](https://wiki.gdevelop.io/gdevelop5/interface/scene-editor/layers-and-cameras/#cameras) and [how to keep UI objects on screen](/gdevelop5/tutorials/keep-ui-on-screen).

## Follow an object smoothly

Adding the **Smooth Camera** [behavior](https://wiki.gdevelop.io/gdevelop5/behaviors#adding_a_behavior_to_an_object) to the character make the camera follow it automatically. The **Move camera closer** action can still be used to avoid a 1-frame delay.

!!! tip

    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Move several layers together

Games can contain a lot of objects and using several layers is a good solution to organize a project. All layers (except for UI layers) should likely be moved the same way when a character is followed.

The [copy camera settings](https://wiki.gdevelop.io/gdevelop5/extensions/copy-camera-settings/) extension allows to copy a camera position to another one. The camera that follows the player can be copied to any other camera layers.

## Keep an object at the exact center of the screen

To configure the camera to follow an object, go to the [event sheet](https://wiki.gdevelop.io/gdevelop5/events) and **add an Action** *(no need to set a Condition)* called **"Center the camera on an object"**.

After that, select the character that will be followed by the camera and check that the layer of the character is selected.

The **Action** should look like this:

![](pasted/20230316-155732.png)

## Make a custom camera following

To add camera inertia and a smoother transition watch [this video tutorial](https://youtu.be/yUNisggNh7s?t=84) to learn how to use the Camera Center positions on the X and Y axis, along with `lerp` expressions and formulas.