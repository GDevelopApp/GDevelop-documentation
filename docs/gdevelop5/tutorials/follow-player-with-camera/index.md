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


## Follow a character smoothly

Add the **Smooth Camera** [behavior](https://wiki.gdevelop.io/gdevelop5/behaviors#adding_a_behavior_to_an_object) to the object *(remember to [install it first](https://wiki.gdevelop.io/gdevelop5/extensions/search/) from the Extension catalog)*. The **Smooth Camera's** parameters such as "catch up" and "speed" can be modified to personalize the smoothness of the camera.

!!! tip

    Make sure that the character, enemies and platforms on the project are placed on the "Base Layer" on the layer panel. If the issue persist, ask the community on the [forum](https://forum.gdevelop.io/t/camera-not-following-character/45356).



### Keep a character at the exact center of the camera

To configure the camera to center on an object, go to the [event sheet](https://wiki.gdevelop.io/gdevelop5/events) and **add an Action** *(no need to set a Condition)* called **"Center the camera on an object"**.

Select the object that will be followed by the camera and make sure that the layer where the object is placed is selected.

The **Action** should look like this:

![](pasted/20230316-155732.png)

!!! tip

    To get closer to the character with the camera (zoom-in), use the action **Move camera closer**.
    
### Follow several objects together

Games can contain a lot of objects. Using several layers is a way to keep a project organized, but also to manage camera movements. All layers (except for UI layers) should likely be moved the same way when a character is followed. *Read more on [how does cameras and layers](https://wiki.gdevelop.io/gdevelop5/interface/scene-editor/layers-and-cameras/#dimensions-and-angle-of-the-camera) work.*

To follow several objects at the same time, install the **[Copy camera settings](https://wiki.gdevelop.io/gdevelop5/extensions/copy-camera-settings/)** extension. It allows to copy the camera's position to another camera, including the camera that follows the player.


## Make a custom camera following (advanced)

To add camera inertia and a smoother transition watch [this video tutorial](https://youtu.be/yUNisggNh7s?t=84) to learn how to use the Camera Center positions on the X and Y axis, along with `lerp` expressions and formulas.

