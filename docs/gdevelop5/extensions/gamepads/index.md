# Gamepads (controllers)

<img src="https://resources.gdevelop-app.com/assets/Icons/gamepad-variant-outline.svg" class="extension-icon"></img>
Add support for gamepads (or other controllers) to your game, giving access to information such as button presses, axis positions, trigger pressure, etc...

**Authors and contributors** to this experimental extension: [Bouh](https://gd.games/Bouh), [lhphr](https://gd.games/lhphr), [ZachjuKamashi](https://gd.games/ZachjuKamashi), [D8H](https://gd.games/D8H).

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

??? quote "See parameters"

    - Parameter 1 (🔢 Number): The gamepad identifier: 1, 2, 3 or 4
    - Parameter 2 (🔢 Number): Time of the vibration, in seconds (optional, default value is 1)
    - Parameter 3 (🔢 Number): Strong rumble magnitude (from 0 to 1)
    - Parameter 4 (🔢 Number): Weak rumble magnitude (from 0 to 1)

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

**Change gamepad active vibration**  
Change a vibration on the specified controller. Incompatible with Firefox.

??? quote "See parameters"

    - Parameter 1 (🔢 Number): The gamepad identifier: 1, 2, 3 or 4
    - Parameter 2 (🔢 Number): Strong rumble magnitude (from 0 to 1)
    - Parameter 3 (🔢 Number): Weak rumble magnitude (from 0 to 1)

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

**Set gamepad deadzone for sticks**  
Set the deadzone for sticks of the gamepad. The deadzone is an area for which movement on sticks won't be taken into account (instead, the stick will be considered as not moved). Deadzone is between 0 and 1, and is by default 0.2.

??? quote "See parameters"

    - Parameter 1 (🔢 Number): The gamepad identifier: 1, 2, 3 or 4
    - Parameter 2 (🔢 Number): Deadzone for sticks, 0.2 by default (0 to 1)

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

**Gamepad vibration**  
Generate a vibration on the specified controller. Might only work if the game is running in a recent web browser.

??? quote "See parameters"

    - Parameter 1 (🔢 Number): The gamepad identifier: 1, 2, 3 or 4
    - Parameter 2 (🔢 Number): Time of the vibration, in seconds (optional, default value is 1)

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

## Conditions

**Any gamepad button pressed**  
Check if any button is pressed on a gamepad.

??? quote "See parameters"

    - Parameter 1 (🔢 Number): The gamepad identifier: 1, 2, 3 or 4

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

**Gamepad stick pushed (axis)**  
Check if a stick of a gamepad is pushed in a given direction.

??? quote "See parameters"

    - Parameter 1 (🔢 Number): The gamepad identifier: 1, 2, 3 or 4
    - Parameter 2 (🔤 String): Stick: "Left" or "Right" (one of: "Left", "Right")
    - Parameter 3 (🔤 String): Direction (one of: "Up", "Down", "Left", "Right", "Any")

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

**Gamepad button pressed**  
Check if a button is pressed on a gamepad.   
Buttons can be:
* Xbox: "A", "B", "X", "Y", "LB", "RB", "LT", "RT", "BACK", "START",
* PS4: "CROSS", "SQUARE", "CIRCLE", "TRIANGLE", "L1", "L2", "R1", "R2", "SHARE", "OPTIONS", "PS_BUTTON", "CLICK_TOUCHPAD",
* Other: "UP", "DOWN", "LEFT", "RIGHT", "CLICK_STICK_LEFT", "CLICK_STICK_RIGHT".

??? quote "See parameters"

    - Parameter 1 (🔢 Number): The gamepad identifier: 1, 2, 3 or 4
    - Parameter 2 (🔤 String): Name of the button (one of: "A", "Cross", "B", "Circle", "X", "Square", "Y", "Triangle", "LB", "L1", "RB", "R1", "LT", "L2", "RT", "R2", "Up", "Down", "Left", "Right", "Back", "Share", "Start", "Options", "Click_Stick_Left", "Click_Stick_Right", "PS_Button", "Click_Touchpad")

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

**Gamepad button released**  
Test if a button is released on a gamepad. Buttons can be:  
* Xbox: "A", "B", "X", "Y", "LB", "RB", "LT", "RT", "BACK", "START",
* PS4: "CROSS", "SQUARE", "CIRCLE", "TRIANGLE", "L1", "L2", "R1", "R2", "SHARE", "OPTIONS", "PS_BUTTON", "CLICK_TOUCHPAD",
* Other: "UP", "DOWN", "LEFT", "RIGHT", "CLICK_STICK_LEFT", "CLICK_STICK_RIGHT".

??? quote "See parameters"

    - Parameter 1 (🔢 Number): The gamepad identifier: 1, 2, 3 or 4
    - Parameter 2 (🔤 String): Name of the button (one of: "A", "Cross", "B", "Circle", "X", "Square", "Y", "Triangle", "LB", "L1", "RB", "R1", "LT", "L2", "RT", "R2", "Up", "Down", "Left", "Right", "Back", "Share", "Start", "Options", "Click_Stick_Left", "Click_Stick_Right", "PS_Button", "Click_Touchpad")

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

**Gamepad connected**  
Check if a gamepad is connected.

??? quote "See parameters"

    - Parameter 1 (🔢 Number): The gamepad identifier: 1, 2, 3 or 4

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

**Gamepad type**  
Check if the specified gamepad has the specified information in its description. Useful to know if the gamepad is a Xbox or PS4 controller.

??? quote "See parameters"

    - Parameter 1 (🔢 Number): The gamepad identifier: 1, 2, 3 or 4
    - Parameter 2 (string): Type: "Xbox", "PS4", "Steam" or "PS3" (among other)

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

**Any gamepad button released**  
Check if any button is released on a gamepad.

??? quote "See parameters"

    - Parameter 1 (🔢 Number): The gamepad identifier: 1, 2, 3 or 4

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

**Gamepad button just pressed**  
Check if a button was just pressed on a gamepad. Buttons can be:  
* Xbox: "A", "B", "X", "Y", "LB", "RB", "LT", "RT", "BACK", "START",
* PS4: "CROSS", "SQUARE", "CIRCLE", "TRIANGLE", "L1", "L2", "R1", "R2", "SHARE", "OPTIONS", "PS_BUTTON", "CLICK_TOUCHPAD",
* Other: "UP", "DOWN", "LEFT", "RIGHT", "CLICK_STICK_LEFT", "CLICK_STICK_RIGHT".

??? quote "See parameters"

    - Parameter 1 (🔢 Number): The gamepad identifier: 1, 2, 3 or 4
    - Parameter 2 (🔤 String): Name of the button (one of: "A", "Cross", "B", "Circle", "X", "Square", "Y", "Triangle", "LB", "L1", "RB", "R1", "LT", "L2", "RT", "R2", "Up", "Down", "Left", "Right", "Back", "Share", "Start", "Options", "Click_Stick_Left", "Click_Stick_Right", "PS_Button", "Click_Touchpad")

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

**Stick force**  
Compare the force of gamepad stick (from 0 to 1).

??? quote "See parameters"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare
    - Parameter 3 (🔢 Number): The gamepad identifier: 1, 2, 3 or 4
    - Parameter 4 (🔤 String): Stick: "Left" or "Right" (one of: "Left", "Right")

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

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

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Horizontal rotation deceleration**  
Change the horizontal rotation deceleration of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Maximum horizontal rotation speed**  
Change the maximum horizontal rotation speed of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Z position offset**  
Change the z position offset of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Maximum vertical camera angle**  
Change the maximum vertical camera angle of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Minimum vertical camera angle**  
Change the minimum vertical camera angle of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Vertical rotation acceleration**  
Change the vertical rotation acceleration of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Vertical rotation deceleration**  
Change the vertical rotation deceleration of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Maximum vertical rotation speed**  
Change the maximum vertical rotation speed of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

### Behavior conditions

**Horizontal rotation acceleration**  
Compare the horizontal rotation acceleration of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Horizontal rotation deceleration**  
Compare the horizontal rotation deceleration of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Maximum horizontal rotation speed**  
Compare the maximum horizontal rotation speed of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Z position offset**  
Compare the z position offset of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Maximum vertical camera angle**  
Compare the maximum vertical camera angle of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Minimum vertical camera angle**  
Compare the minimum vertical camera angle of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Vertical rotation acceleration**  
Compare the vertical rotation acceleration of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Vertical rotation deceleration**  
Compare the vertical rotation deceleration of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Maximum vertical rotation speed**  
Compare the maximum vertical rotation speed of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

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