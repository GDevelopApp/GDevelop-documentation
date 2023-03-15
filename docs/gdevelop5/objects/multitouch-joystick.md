---
title: Multitouch Joystick
---
# Multitouch Joystick

## Add a multitouch joystick to a game

### Get a joystick from asset store

The [Multitouch Joysticks asset pack](https://gdevelop.io/asset-store/free/multitouch-joysticks-multitouch-joysticks) of the asset store contains free and read-to-use joysticks.

[![Multitouch Joysticks asset pack](/gdevelop5/objects/joystick-asset-store.png)](https://gdevelop.io/asset-store/free/multitouch-joysticks-multitouch-joysticks)

### Create a joystick from scratch

A joystick object can also be created from scratch. It needs an image for the border and another one for the part that follow the player finger.

![](/gdevelop5/objects/joystick-object-editor.png)

## Move a character

### Move a top-down character

The "Top-down multitouch controller mapper" behavior can be added to the character to make the character move according to player touches automatically. The default configuration will work without any change for single player games.

![](/gdevelop5/objects/joystick-top-down-mapper.png)

!!! note

    Learn more about the [Top-Down Movement behavior](/gdevelop5/behaviors/topdown).

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://top-down-rpg){ .md-button .md-button--primary }

[![](/gdevelop5/objects/top-down-rpg-multitouch-controls.png)](https://editor.gdevelop.io/?project=example://top-down-rpg)

### Move a platformer character

The "Platformer multitouch controller mapper" behavior can be added to the character to make the character move according to player touches automatically.

![](/gdevelop5/objects/joystick-platformer-mapper.png)

#### Add a button for the jump

A multitouch controller button can be created in a few steps:

- Create a sprite object - Attach a "Multitouch button" behavior to it

The multitouch button behavior allows to choose a button name. The same name must also be set in the mapper behavior for the jump.

![](/gdevelop5/objects/joystick-jump-button.png)

!!! note

     Learn more about the [Platform Character behavior](/gdevelop5/behaviors/platformer). 

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://platformer){ .md-button .md-button--primary }

[![](/gdevelop5/objects/platformer-example-multitouch-controls.png)](https://editor.gdevelop.io/?project=example://platformer)

### Move a character with custom movement

Joysticks and buttons can be used for any movement in a very similar way than real gamepads. Interactions of each player can be checked with the conditions on the following screenshot.

![](/gdevelop5/objects/joystick-extension-condition.png)

Similar conditions can also be used on the joystick object and button directly.

![](/gdevelop5/objects/joystick-object-condition.png)

!!! note

    The [Gamepad extension](/gdevelop5/all-features/gamepad) can be used with this extension to handle both touch screens and physical gamepads.

## Handle several players on the same device

One joystick object can be created for each player. This allows to choose a different player number and eventually a different color for the joystick to help players tell them apart.

![](/gdevelop5/objects/joystick-multiplayer-object-list.png)
