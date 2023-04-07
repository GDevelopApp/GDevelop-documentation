---
title: How to follow the player (or an object) with the camera?
---
# How to follow the player (or an object) with the camera?

Following a character (also called an [object](https://wiki.gdevelop.io/gdevelop5/objects)) with a camera is a key aspect of video game design that creates an immersive experience for players.
This article includes instructions for implementing this functionality either with a simple extension like [Smooth Camera](https://wiki.gdevelop.io/gdevelop5/extensions/smooth-camera/reference) or a set of actions on the Event Sheet.

![](/gdevelop5/tutorials/follow-player-with-camera/follow_object_with_camera.gif)
{ .align-center }

!!! tip

    GDevelop [assigns a single camera per layer](https://wiki.gdevelop.io/gdevelop5/interface/scene-editor/layers-and-cameras/#cameras). It is recomended to start by placing the main objects o the "Base Layer", and add other layers after. 


## Follow an object (character) smoothly

Add the **Smooth Camera** [behavior](https://wiki.gdevelop.io/gdevelop5/behaviors#adding_a_behavior_to_an_object) to the object that will be followed.
The extension's parameters such as "catch up" and "speed" can be modified to personalize the smoothness of the camera.

!!! tip

    Learn [how to install](https://gdevelop-wiki-git-fork-lunimoon-patch-2-gdevelop.vercel.app/gdevelop5/extensions/search/) new extensions by following a step-by-step guide.


### Keep a character at the exact center of the camera

To configure the camera to center on an object, go to the [event sheet](https://wiki.gdevelop.io/gdevelop5/events) and **add an Action** *(no need to set a Condition)* called **"Center the camera on an object"**.

Select the object that will be followed by the camera and make sure that the layer where the object is placed is selected.

The **Action** should look like this:

![](pasted/20230316-155732.png)

!!! tip

    To get closer to the character with the camera (zoom-in), use the action **Move camera closer**.
    
### Follow an object with several cameras

Games can contain a lot of objects. Using several layers is a way to keep a project organized, but also to manage camera movements. All layers (except for UI layers) should likely be moved the same way when a character is followed. *Read more on [how cameras and layers](https://wiki.gdevelop.io/gdevelop5/interface/scene-editor/layers-and-cameras/#dimensions-and-angle-of-the-camera) work.*

To follow a single object with different layers (each layer has a single camera), install the **[Copy camera settings](https://wiki.gdevelop.io/gdevelop5/extensions/copy-camera-settings/)** extension. It allows to copy the main camera's position to a secondary camera.


## Make a custom camera following (advanced)

To add camera inertia and a smoother transition watch [this video tutorial](https://youtu.be/yUNisggNh7s?t=84) to learn how to use the Camera Center positions on the X and Y axis, along with `lerp` expressions and formulas.


## You might be interested in:
- How to [keep UI objects on screen](/gdevelop5/tutorials/keep-ui-on-screen).
