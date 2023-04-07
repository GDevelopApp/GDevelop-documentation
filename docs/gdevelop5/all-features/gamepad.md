---
title: Gamepad
---
# Gamepad

Gamepad, joystick and game controllers can be used in your game.
**Xbox**, **Playstation** and **generic** controllers are supported.

This feature can be activated by adding the **Gamepad extension** to your project. You will then be able to use conditions and expressions to check if a gamepad is connected, if a button is pressed, released or if a stick is pushed.

!!! tip

    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Move a character

### Move a top-down character

The "Top-down gamepad mapper" behavior can be added to the character to make the character move according to player inputs automatically. The default configuration will work without any change for single player games.

![](/gdevelop5/all-features/gamepad-top-down-mapper.png)

!!! tip

    Learn more about the [Top-Down Movement behavior](/gdevelop5/behaviors/topdown).

### Move a platformer character

The "Platformer gamepad mapper" behavior can be added to the character to make the character move according to player inputs automatically.

![](/gdevelop5/all-features/gamepad-platformer-mapper.png)

!!! tip


    Learn more about the [Platform Character behavior](/gdevelop5/behaviors/platformer).


[Open example in GDevelop](https://editor.gdevelop.io/?project=example://platformer){ .md-button .md-button--primary }

[![](/gdevelop5/behaviors/platformer-example.png)](https://editor.gdevelop.io/?project=example://platformer)

### Move a character with custom movement

#### Handle pressed buttons

Detecting pressed buttons can be done with the **Gamepad button pressed** (or **released**) condition. Playstation and Xbox controllers have different button names,  but checking for `A` or `Cross` is the same.

![](/gdevelop5/all-features/gamepad-condition-released.png)

#### Handle sticks

Sticks can be pushed in different directions, usually to move the player. Using the [expression](/gdevelop5/all-features/expressions) `Gamepads::AxisValue`, you can get a number representing "how much" the stick is pushed in a direction.

You can then use it to set a force on an object (or anything else that you want to impact in your game):

![](/gdevelop5/all-features/gamepad/pasted/20201204-124545.png)


## Handle several players on the same device

### Detect connected gamepads

Each gamepad connected to the computer or phone is numbered from 1 to 4:

* If your game is single player, you'll usually always use condition for the Gamepad 1.
* If your game is multi player, it's a good idea to use the **Gamepad connected** condition to check which gamepads are connected. You could store in a variable the gamepad number associated to a player. You can also force the first player to use the Gamepad 1, and the other player to use Gamepad 2.

![](/gdevelop5/all-features/gamepad-condition-connected.png)

## Vibrate a gamepad

Use the action **Gamepad vibration** to make a gamepad vibrate.

**Advanced Gamepad vibration** allows to setup vibration magnitudes for low and high frequency rumble motors.
Each player can have different rumble values.
