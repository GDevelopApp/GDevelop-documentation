---
title: Top-Down Movement behavior
---
## Top-Down Movement behavior

!!! tip

        **See it in action!** 🎮
    [I would rather see the Top Down Movement behavior examples! Please take me there now.](/#Examples)

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/zUV-lUtXpO4" frameborder="0" allowfullscreen></iframe>
</div>

####  Add "Top-Down Movement" behavior

The "Top-Down Movement" [behavior](/gdevelop5/behaviors) allows the additional functionality of moving an [object](/gdevelop5/objects) in either 4 or 8 directions.

![](top-down-movement-behav-inlist.png)

After selecting the behavior, we should immediately see the available options:

![](topdown-movement-options.png)

####  Change the speed of movement and rotation

By changing the value of Acceleration, Deceleration and Max speed, we can change how fast our object is going to move.

  * **Acceleration**: How quickly the object speeds up when a movement key is pressed (in pixels per second per second). Default: 400
  * **Deceleration**: How quickly the object slows down when no keys are pressed (in pixels per second per second). Default: 800
  * **Max speed**: The maximum movement speed the object can reach (in pixels per second). Default: 200

By changing the value of Rotation speed, we can change how fast our object is going to rotate or if it going to rotate at all. I'll explain more about rotation, below.

  * **Rotation speed**: Also called "Angular maximum speed", this controls how fast the object rotates toward the movement direction (in degrees per second). Default: 180 (half rotation per second)

!!! note

    All speed values are measured in pixels per second, and acceleration/deceleration values are in pixels per second per second. Higher acceleration values make the object feel more responsive, while higher deceleration values make it stop quickly when you release the controls.

####  Change angle offset

By default, the facing angle of our sprite is 0 which is the right side of our sprite, but we can change the way that our object is facing by changing the value of Angle offset. Here is an image to help you understand the coordinates in GDevelop:

![](gdevelop_covaliantcuriosity.jpg)

!!! note

    Note that some expressions like `AngleBetweenPositions` can gives you a result between -180 and 180. This is equivalent to this schema. An angle of -45 degrees is equivalent to an angle of 270 degrees.
####  Allows diagonals

![](allow-diagonals-box.png)

This option is enabled by default. We allow our object to move diagonally in 8 directions. By disabling this option, we don't allow diagonal movement. When disabled, we can move only in 4 directions: left, right, up and down. Diagonal movement is no longer allowed.

####  Controls

####  Move characters with keyboards

![](top-down-movement-default-controls-box.png)

The "top-down movement" behavior comes with default keys set to control the character. The default controls are the four keyboard arrow keys. If you don't want to use the default controls, you need to turn off the default controls by unticking/unchecking the "Default controls" box and use [keyboard conditions](/gdevelop5/all-features/keyboard) instead.

![](top-down-movement-events.png)

####  Move characters with gamepads

The "top-down gamepad mapper" behavior from the [gamepad extension](/gdevelop5/all-features/gamepad) can be added to character to make them move according to players inputs automatically.

####  Move characters with multi-touch controls

The "top-down multitouch controller mapper" behavior from the [multi-touch joystick extension](/gdevelop5/objects/multitouch-joystick) can be added to characters to make them move according to players touches automatically.

####  Simulate controls with events

You can programmatically control movement using events with the "Simulate" actions:

  * **Simulate key press**: Simulate pressing Left, Right, Up, or Down keys - useful for AI-controlled characters or tutorial sequences
  * **Simulate stick control**: Simulate an analog stick input with a specific angle (in degrees) and force (0 to 1) - perfect for custom touch controls or gamepad-like movement

These simulation actions work whether default controls are enabled or disabled, making them ideal for creating AI behavior, replays, or custom input systems.

!!! tip

    Use "Simulate stick control" to create smooth, analog-style movement. The force parameter (between 0 and 1) controls the movement speed, with 1 being full speed and 0.5 being half speed.

####  Rotate object

![](top-down-movement-rotateobject-box.png)

By default, our object will rotate toward the direction of movement. The object will rotate at the speed we specify in the Rotation speed option. If we don't want the object to rotate, we need to disable this by unchecking the box.

####  Viewpoint and isometric games

In the advanced settings, you can change the **Viewpoint** option to support different perspectives:

  * **Top-Down** (default): Standard top-down view where up/down/left/right correspond directly to screen directions
  * **Isometry 2:1 (26.565°)**: Also known as "Pixel Isometry", this creates the classic pixel-art isometric look commonly seen in retro games
  * **True Isometry (30°)**: Mathematical true isometry with a 30-degree angle, providing a more realistic 3D perspective
  * **Custom Isometry**: Allows you to specify any isometry angle between 1 and 44 degrees to match your game's art style

When using isometric viewpoints, the behavior automatically adjusts the movement to match the visual perspective, so moving "up" will move the object in the diagonal direction that appears as "up" in the isometric view.

!!! tip

    When using an isometric viewpoint, set the **Movement angle offset** to -45 degrees. This ensures that keyboard directions (up/down/left/right) align properly with the isometric grid. GDevelop will suggest this adjustment when you change the viewpoint.

For more information on creating isometric games, see the [Isometric Game example](#examples).

####  Current speed and movement angle

The behavior tracks the object's current speed and direction of movement. You can use these values in events to:

  * Check if the object is moving with the "Is moving" condition
  * Get the current speed in pixels per second
  * Get the movement angle to display directional animations
  * Compare speed to trigger effects (like dust particles when running fast)

All these values can also be changed at any time during the game using [events](/gdevelop5/events).



# Examples

!!! tip

        **See it in action!** 🎮
    Open these examples online.

**Space Shooter**

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://space-shooter){ .md-button .md-button--primary }

[![](spaceshooter.png){ width="320" }](https://editor.gdevelop.io/?project=example://space-shooter)



**Isometric Game** (creates an illusion of 3D graphics within a 2D graphics game)

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://isometric-game){ .md-button .md-button--primary }

[![](isometricgame.png){ width="320" }](https://editor.gdevelop.io/?project=example://isometric-game)

## Reference

All actions, conditions and expressions are listed in [the top-down movement reference page](/gdevelop5/all-features/top-down-movement-behavior/reference/).