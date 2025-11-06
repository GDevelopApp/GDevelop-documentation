# Follow multiple 2D objects with the camera

<img src="https://resources.gdevelop-app.com/assets/Icons/camera-switch-outline.svg" class="extension-icon"></img>
Change the zoom and position of the camera to keep all instances of an object (or object group) on the screen.

**Authors and contributors** to this experimental extension: [VictrisGames](https://gd.games/VictrisGames), [MrMen](https://gd.games/MrMen).

---

Use the "Follow multiple 2D objects with the camera" action on every frame that you want the camera to move.  
If you want to select which object instances are tracked by the camera, add conditions to that event.


- Use an object group to track multiple objects.
- Only run on one layer at a time.  If multiple layers need to move the same way, create events that copy CameraX, CameraY, and CameraZoom values (or use the "Copy camera settings" extension)
- This action can also be used on a single object instance to move the camera smoothly - though other extensions might be more adapted.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Follow multiple objects with camera**  
Change the zoom and position of the camera to keep all instances of an object (or object group) on the screen.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Object (or Object group)
    - Parameter 2 (🔢 Number): Extra space on sides of screen
      Each side will include this buffer
    - Parameter 3 (🔢 Number): Extra space on top and bottom of screen
      Each side will include this buffer
    - Parameter 4 (🔢 Number): Maximum zoom level (Default: 1)
      Limit how far the camera will zoom in
    - Parameter 5 (🔢 Number): Camera move speed (Range: 0 to 1) (Default: 0.05)
      Percent of distance to destination that will be travelled each frame (used by lerp function)

    > Technical note: parameters 0, 6 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `FollowObjectsWithCamera::FollowMultipleObjectsWithCamera`.





---

*This page is an auto-generated reference page about the **Follow multiple 2D objects with the camera** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).