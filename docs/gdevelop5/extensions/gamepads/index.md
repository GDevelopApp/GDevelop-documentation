# Gamepads (controllers)

<img src="https://resources.gdevelop-app.com/assets/Icons/gamepad-variant-outline.svg" class="extension-icon"></img>
Add support for gamepads (or other controllers) to your game, giving access to information such as button presses, axis positions, trigger pressure, etc...

**Authors and contributors** to this experimental extension: [Bouh](https://gd.games/Bouh), [lhphr](https://gd.games/lhphr), [ZachjuKamashi](https://gd.games/ZachjuKamashi).

---

Add support for gamepads (or other physical controllers).

It gives access to:

- button presses,
- axis positions and force,
- trigger pressure,
- configurable deadzone,
- vibration,
- automatic "gamepad mapper" behaviors for 2D and 3D movement behaviors (platformer characters, top-down movement, 3D character etc...). Add one of these to the object with the movement behavior (i.e: the player most of the time) and the behavior will then be controlled automatically by the gamepad (it works by reading the gamepad state and simulating controls). No need for additional events to make it work once the behaviors are set up.

The Bomberman-like example handles 4 players with gamepads ([open the project online](https://editor.gdevelop.io/?project=example://goose-bomberman)).

[Read more...](/gdevelop5/all-features/gamepad)

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Advanced gamepad vibration**  
Generate an advanced vibration on the specified controller. Incompatible with Firefox.

**Change gamepad active vibration**  
Change a vibration on the specified controller. Incompatible with Firefox.

**Set gamepad deadzone for sticks**  
Set the deadzone for sticks of the gamepad. The deadzone is an area for which movement on sticks won't be taken into account (instead, the stick will be considered as not moved). Deadzone is between 0 and 1, and is by default 0.2.

**Gamepad vibration**  
Generate a vibration on the specified controller. Might only work if the game is running in a recent web browser.

## Conditions

**Any gamepad button pressed**  
Check if any button is pressed on a gamepad.

**Gamepad stick pushed (axis)**  
Check if a stick of a gamepad is pushed in a given direction.

**Gamepad button pressed**  
Check if a button is pressed on a gamepad.   
Buttons can be:
* Xbox: "A", "B", "X", "Y", "LB", "RB", "LT", "RT", "BACK", "START",
* PS4: "CROSS", "SQUARE", "CIRCLE", "TRIANGLE", "L1", "L2", "R1", "R2", "SHARE", "OPTIONS", "PS_BUTTON", "CLICK_TOUCHPAD",
* Other: "UP", "DOWN", "LEFT", "RIGHT", "CLICK_STICK_LEFT", "CLICK_STICK_RIGHT".

**Gamepad button released**  
Test if a button is released on a gamepad. Buttons can be:  
* Xbox: "A", "B", "X", "Y", "LB", "RB", "LT", "RT", "BACK", "START",
* PS4: "CROSS", "SQUARE", "CIRCLE", "TRIANGLE", "L1", "L2", "R1", "R2", "SHARE", "OPTIONS", "PS_BUTTON", "CLICK_TOUCHPAD",
* Other: "UP", "DOWN", "LEFT", "RIGHT", "CLICK_STICK_LEFT", "CLICK_STICK_RIGHT".

**Gamepad connected**  
Check if a gamepad is connected.

**Gamepad type**  
Check if the specified gamepad has the specified information in its description. Useful to know if the gamepad is a Xbox or PS4 controller.

**Any gamepad button released**  
Check if any button is released on a gamepad.

**Stick force**  
Compare the force of gamepad stick (from 0 to 1).

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `Gamepads::ConnectedGamepadsCount()` | Return the number of connected gamepads. ||
| `Gamepads::Deadzone(number)` | Return the value of the deadzone applied to a gamepad sticks, between 0 and 1. ||
| | _🔢 Number_ | The gamepad identifier: 1, 2, 3 or 4 |
| `Gamepads::GamepadCount()` | Return the number of gamepads. ||
| `Gamepads::GamepadType(number)` | Return a string containing informations about the specified gamepad. ||
| | _🔢 Number_ | The gamepad identifier: 1, 2, 3 or 4 |
| `Gamepads::LastButtonID(number)` | Return the index of the last pressed button of a gamepad. ||
| | _🔢 Number_ | The gamepad identifier: 1, 2, 3 or 4 |
| `Gamepads::LastButtonString(number, string)` | Return the last button pressed. Buttons for Xbox and PS4 can be:* Xbox: "A", "B", "X", "Y", "LB", "RB", "LT", "RT", "BACK", "START",* PS4: "CROSS", "SQUARE", "CIRCLE", "TRIANGLE", "L1", "L2", "R1", "R2", "SHARE", "OPTIONS", "PS_BUTTON", "CLICK_TOUCHPAD",* Both: "UP", "DOWN", "LEFT", "RIGHT", "CLICK_STICK_LEFT", "CLICK_STICK_RIGHT". ||
| | _🔢 Number_ | The gamepad identifier: 1, 2, 3 or 4 |
| | _🔤 String_ | Controller type |
| `Gamepads::StickAngle(number, string)` | Return the angle of a gamepad stick.If the deadzone value is high, the angle value is rounded to main axes, left, left, up, down.An zero deadzone value give a total freedom on the angle value. ||
| | _🔢 Number_ | The gamepad identifier: 1, 2, 3 or 4 |
| | _🔤 String_ | Stick: "Left" or "Right" |
| `Gamepads::StickForce(number, string)` | Return the force of gamepad stick (from 0 to 1). ||
| | _🔢 Number_ | The gamepad identifier: 1, 2, 3 or 4 |
| | _🔤 String_ | Stick: "Left" or "Right" |
| `Gamepads::StickForceX(number, string)` | Return the gamepad stick force on X axis (from -1 at the left to 1 at the right). ||
| | _🔢 Number_ | The gamepad identifier: 1, 2, 3 or 4 |
| | _🔤 String_ | Stick: "Left" or "Right" |
| `Gamepads::StickForceY(number, string)` | Return the gamepad stick force on Y axis (from -1 at the top to 1 at the bottom). ||
| | _🔢 Number_ | The gamepad identifier: 1, 2, 3 or 4 |
| | _🔤 String_ | Stick: "Left" or "Right" |
| `Gamepads::StrongVibrationMagnitude(number)` | Return the strength of the strong vibration motor on the gamepad of a player. ||
| | _🔢 Number_ | The gamepad identifier: 1, 2, 3 or 4 |
| `Gamepads::TriggerPressure(number, string)` | Get the value of the pressure on a gamepad trigger. ||
| | _🔢 Number_ | The gamepad identifier: 1, 2, 3 or 4 |
| | _🔤 String_ | Trigger button |
| `Gamepads::WeakVibrationMagnitude(number)` | Return the strength of the weak vibration motor on the gamepad of a player. ||
| | _🔢 Number_ | The gamepad identifier: 1, 2, 3 or 4 |

## First person camera gamepad mapper 

Control camera rotations with a gamepad. 

### Behavior actions

**Horizontal rotation acceleration**  
Change the horizontal rotation acceleration of the object.

**Horizontal rotation deceleration**  
Change the horizontal rotation deceleration of the object.

**Maximum horizontal rotation speed**  
Change the maximum horizontal rotation speed of the object.

**Z position offset**  
Change the z position offset of the object.

**Maximum vertical camera angle**  
Change the maximum vertical camera angle of the object.

**Minimum vertical camera angle**  
Change the minimum vertical camera angle of the object.

**Vertical rotation acceleration**  
Change the vertical rotation acceleration of the object.

**Vertical rotation deceleration**  
Change the vertical rotation deceleration of the object.

**Maximum vertical rotation speed**  
Change the maximum vertical rotation speed of the object.

### Behavior conditions

**Horizontal rotation acceleration**  
Compare the horizontal rotation acceleration of the object.

**Horizontal rotation deceleration**  
Compare the horizontal rotation deceleration of the object.

**Maximum horizontal rotation speed**  
Compare the maximum horizontal rotation speed of the object.

**Z position offset**  
Compare the z position offset of the object.

**Maximum vertical camera angle**  
Compare the maximum vertical camera angle of the object.

**Minimum vertical camera angle**  
Compare the minimum vertical camera angle of the object.

**Vertical rotation acceleration**  
Compare the vertical rotation acceleration of the object.

**Vertical rotation deceleration**  
Compare the vertical rotation deceleration of the object.

**Maximum vertical rotation speed**  
Compare the maximum vertical rotation speed of the object.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.FirstPersonGamepadMapper::HorizontalRotationAcceleration()` | Return the horizontal rotation acceleration of the object. ||
| `Object.FirstPersonGamepadMapper::HorizontalRotationDeceleration()` | Return the horizontal rotation deceleration of the object. ||
| `Object.FirstPersonGamepadMapper::HorizontalRotationSpeedMax()` | Return the maximum horizontal rotation speed of the object. ||
| `Object.FirstPersonGamepadMapper::OffsetZ()` | Return the z position offset of the object. ||
| `Object.FirstPersonGamepadMapper::VerticalAngleMax()` | Return the maximum vertical camera angle of the object. ||
| `Object.FirstPersonGamepadMapper::VerticalAngleMin()` | Return the minimum vertical camera angle of the object. ||
| `Object.FirstPersonGamepadMapper::VerticalRotationAcceleration()` | Return the vertical rotation acceleration of the object. ||
| `Object.FirstPersonGamepadMapper::VerticalRotationDeceleration()` | Return the vertical rotation deceleration of the object. ||
| `Object.FirstPersonGamepadMapper::VerticalRotationSpeedMax()` | Return the maximum vertical rotation speed of the object. ||

## 3D car gamepad mapper 

Control a 3D physics car with a gamepad. 

_No expressions for this behavior._


## 3D platformer gamepad mapper 

Control a 3D physics character with a gamepad. 

_No expressions for this behavior._


## Platformer gamepad mapper 

Control a platformer character with a gamepad. 

_No expressions for this behavior._


## 3D shooter gamepad mapper 

Control a 3D physics character with a gamepad. 

_No expressions for this behavior._


## Top-down gamepad mapper 

Control a top-down character with a gamepad. 

_No expressions for this behavior._



---

*This page is an auto-generated reference page about the **Gamepads (controllers)** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).