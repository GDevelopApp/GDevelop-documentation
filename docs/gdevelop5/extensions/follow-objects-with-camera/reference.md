---
title: Follow multiple objects with camera
---
# Follow multiple objects with camera

![](https://resources.gdevelop-app.com/assets/Icons/camera-switch-outline.svg)
Change the zoom and position of the camera to keep all instances of an object (or object group) on the screen.

**Authors and contributors** to this community extension: [VictrisGames](https://gd.games/VictrisGames), [MrMen](https://gd.games/MrMen).

---

Use the "Follow multiple objects with camera" action on every frame that you want the camera to move.  
If you want to select which object instances are tracked by the camera, add conditions to that event.


- Use an object group to track multiple objects.
- Only run on one layer at a time.  If multiple layers need to move the same way, create events that copy CameraX, CameraY, and CameraZoom values (or use the "Copy camera settings" extension)
- This action can also be used on a single object instance to move the camera smoothly.

Release Notes: 

- Version 1.0.0 removed the "MinZoom", "Layer", and "Camera" parameters. Layer is now selected automatically from one of the objects being followed. Events that were created with previous versions of this extension will continue working without modification. 

---

!!! tip

    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

*This page is an auto-generated reference page about the **Follow multiple objects with camera** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).