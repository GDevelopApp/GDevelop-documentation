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

By changing the value of Rotation speed, we can change how fast our object is going to rotate or if it going to rotate at all. I'll explain more about rotation, below.

####  Change angle offset

By default, the facing angle of our sprite is 0 which is the right side of our sprite, but we can change the way that our object is facing by changing the value of Angle offset. Here is an image to help you understand the coordinates in GDevelop:

![](gdevelop_covaliantcuriosity.jpg)

!!! note

    Note that some expressions like `AngleBetweenPositions` can gives you a result between -180 and 180. This is equivalent to this schema. An angle of -45 degrees is equivalent to an angle of 270 degrees.

####  Viewpoint and isometric projection

The top-down movement behavior supports different viewpoints for your game:

- **Top-Down**: Standard top-down view (default)
- **Isometry 2:1 (26.565°)**: Pixel art isometric projection (also known as "Pixel Isometry")
- **True Isometry (30°)**: Mathematical isometric projection at 30 degrees
- **Custom Isometry**: Define your own isometry angle between 1 and 44 degrees

These viewpoint settings are in the behavior's advanced properties. When using an isometry viewpoint, you'll typically want to set the **Movement angle offset** to -45 degrees (this is recommended in the property description). This offset adjusts the input direction mapping to match the isometric perspective.

!!! tip

    The isometry viewpoint automatically transforms movement coordinates from world space to screen space, making it easier to create isometric games without manually calculating the projection.
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

####  Rotate object

![](top-down-movement-rotateobject-box.png)

By default, our object will rotate toward the direction of movement. The object will rotate at the speed we specify in the Rotation speed option. If we don't want the object to rotate, we need to disable this by unchecking the box.

####  Stick input for analog controls

In addition to keyboard controls, the top-down movement behavior supports analog stick input for gamepad or custom joystick controls. You can simulate stick input with events using the "Simulate stick movement" action, which takes:

- **Stick angle**: The direction of the stick in degrees (0 = right, 90 = down, 180 = left, 270 = up)
- **Stick force**: The intensity of the input from 0 (no input) to 1 (maximum input)

The stick force affects the character's speed, allowing for variable speed control. When "Allow diagonals" is disabled, stick angles are automatically snapped to the nearest cardinal direction (0°, 90°, 180°, or 270°).

!!! tip

    You can check if the character is currently using stick input with the "Is using control" condition and selecting "Stick" as the control type.

All theses values can also be changed at any time during the game using [events](/gdevelop5/events).



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