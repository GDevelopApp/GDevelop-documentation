# Room-based camera movement

<img src="https://resources.gdevelop-app.com/assets/Icons/Glyphster Pack/Master/SVG/Applications and Programming/Applications and Programming_app_apps_applications_tiles.svg" class="extension-icon"></img>
Move and zoom camera to the room object that contains the trigger object (usually the player).

**Authors and contributors** to this experimental extension: [VictrisGames](https://gd.games/VictrisGames), [Silver-Streak](https://gd.games/Silver-Streak), [Jurfix](https://gd.games/Jurfix).

---

Move camera to the room that contains the trigger object (usually the player).  If desired, change zoom to show the entire room or keep zoom static.

How to use:

- Place room objects on scene
- Select camera zoom limits, how fast the camera should move, and the visible buffer around each room
- Run the "Move and zoom camera" action on every frame
- Move the trigger object (player) between rooms and the camera will center on the room that contains the trigger object.

Tips:

- Use these conditions for custom logic when changing rooms : "Camera moving", "Camera zooming", and "Room changed"
- Set "Lerp Speed" to "1" to change the camera instantly

[Read more...](https://victrisgames.itch.io/room-based-camera-movement)

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Move and zoom camera to the room object that contains the trigger object (player)**  
Move and zoom camera to the room object that contains the trigger object (usually the player).

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Room object
      Room objects are used to mark areas that should be seen by the camera.
    - Parameter 2 (👾 Object): Trigger object (player)
      When the Trigger Object touches a new Room Object, the camera will move to the new room
    - Parameter 3: 🔤 Layer name (String)
    - Parameter 4 (🔢 Number): Lerp speed
      Range: 0 to 1
    - Parameter 5 (🔢 Number): Maximum zoom
    - Parameter 6 (🔢 Number): Minimum zoom
    - Parameter 7 (🔢 Number): Outside buffer (pixels)
      Minimum extra space displayed around each side the room
    - Parameter 8 (🔢 Number): Camera

    > Technical note: parameters 0, 9 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `RoomBasedCameraMovement::MoveCameraToActiveRoom`.

## Conditions

**Check if trigger object (player) has entered a new room**  
Check if trigger object (usually the player) has entered a new room on this frame.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Trigger object (player)

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `RoomBasedCameraMovement::ActiveRoomChanged`.

**Check if camera is moving**  
Check if camera is moving (requires the use of "Move and zoom camera" action in this extension).

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `RoomBasedCameraMovement::IsCameraMoving`.

**Check if camera is zooming**  
Check if camera is zooming (requires the use of "Move and zoom camera" action in this extension).

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `RoomBasedCameraMovement::IsCameraZooming`.




---

*This page is an auto-generated reference page about the **Room-based camera movement** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).