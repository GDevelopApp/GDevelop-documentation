---
title: How to follow the player (or an object) with the camera?
---
# How to follow the player (or an object) with the camera?

You can use the action to **center the camera** on an object. When you use it, make sure to choose the layer on which the player is. Usually this is the base layer, but, if your object is on another layer, you should move the camera of the layer of the object.

!!! tip

    Each layer has its own camera. This is useful to do parallax effects or to allow the camera of the base layer to follow the player for example, while the layer showing the interface of your game on top of it is not moving.

Consider also using an extension like [Smooth Camera](/gdevelop5/extensions/smooth-camera/reference) to have the camera follow the player in a much nicer, smoother way.