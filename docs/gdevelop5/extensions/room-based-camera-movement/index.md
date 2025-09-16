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

## Conditions

**Check if trigger object (player) has entered a new room**  
Check if trigger object (usually the player) has entered a new room on this frame.

**Check if camera is moving**  
Check if camera is moving (requires the use of "Move and zoom camera" action in this extension).

**Check if camera is zooming**  
Check if camera is zooming (requires the use of "Move and zoom camera" action in this extension).




---

*This page is an auto-generated reference page about the **Room-based camera movement** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).