# Gamepads (controllers)

<img src="https://resources.gdevelop-app.com/assets/Icons/gamepad-variant-outline.svg" class="extension-icon"></img>
Add support for gamepads (or other controllers) to your game, giving access to information such as button presses, axis positions, trigger pressure, etc...

**Authors and contributors** to this community extension: [Bouh](https://gd.games/Bouh), [lhphr](https://gd.games/lhphr), [ZachjuKamashi](https://gd.games/ZachjuKamashi).

---

Add support for gamepads (or other controllers).

It gives access to:

- button presses
- axis positions and force
- trigger pressure
- configurable deadzone
- vibration
- automatic mappers for platformer characters and top-down movement

The Bomberman-like example handles 4 players with gamepads ([open the project online](https://editor.gdevelop.io/?project=example://goose-bomberman)).

[Read more...](https://wiki.gdevelop.io/gdevelop5/all-features/gamepad)

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
| `Gamepads::AxisValue(number, string, string)` | Get the value of axis of a gamepad stick. ||
| | _number_ | The gamepad identifier: 1, 2, 3 or 4 |
| | _string_ | Stick: "Left" or "Right" |
| | _string_ | Direction |
| `Gamepads::ConnectedGamepadsCount()` | Return the number of connected gamepads. ||
| `Gamepads::Deadzone(number)` | Return the value of the deadzone applied to a gamepad sticks, between 0 and 1. ||
| | _number_ | The gamepad identifier: 1, 2, 3 or 4 |
| `Gamepads::GamepadCount()` | Return the number of gamepads. ||
| `Gamepads::GamepadType(number)` | Return a string containing informations about the specified gamepad. ||
| | _number_ | The gamepad identifier: 1, 2, 3 or 4 |
| `Gamepads::LastButtonID(number)` | Return the index of the last pressed button of a gamepad. ||
| | _number_ | The gamepad identifier: 1, 2, 3 or 4 |
| `Gamepads::LastButtonString(number, string)` | Return the last button pressed. Buttons for Xbox and PS4 can be:* Xbox: "A", "B", "X", "Y", "LB", "RB", "LT", "RT", "BACK", "START",* PS4: "CROSS", "SQUARE", "CIRCLE", "TRIANGLE", "L1", "L2", "R1", "R2", "SHARE", "OPTIONS", "PS_BUTTON", "CLICK_TOUCHPAD",* Both: "UP", "DOWN", "LEFT", "RIGHT", "CLICK_STICK_LEFT", "CLICK_STICK_RIGHT". ||
| | _number_ | The gamepad identifier: 1, 2, 3 or 4 |
| | _string_ | Controller type |
| `Gamepads::StickAngle(number, string)` | Return the angle of a gamepad stick.If the deadzone value is high, the angle value is rounded to main axes, left, left, up, down.An zero deadzone value give a total freedom on the angle value. ||
| | _number_ | The gamepad identifier: 1, 2, 3 or 4 |
| | _string_ | Stick: "Left" or "Right" |
| `Gamepads::StickForce(number, string)` | Return the force of gamepad stick (from 0 to 1). ||
| | _number_ | The gamepad identifier: 1, 2, 3 or 4 |
| | _string_ | Stick: "Left" or "Right" |
| `Gamepads::StickForceX(number, string)` | Return the gamepad stick force on X axis (from -1 at the left to 1 at the right). ||
| | _number_ | The gamepad identifier: 1, 2, 3 or 4 |
| | _string_ | Stick: "Left" or "Right" |
| `Gamepads::StickForceY(number, string)` | Return the gamepad stick force on Y axis (from -1 at the top to 1 at the bottom). ||
| | _number_ | The gamepad identifier: 1, 2, 3 or 4 |
| | _string_ | Stick: "Left" or "Right" |
| `Gamepads::StickRotationValue(number, string)` | Get the rotation value of a gamepad stick.If the deadzone value is high, the angle value is rounded to main axes, left, left, up, down.An zero deadzone value give a total freedom on the angle value. ||
| | _number_ | The gamepad identifier: 1, 2, 3 or 4 |
| | _string_ | Stick: "Left" or "Right" |
| `Gamepads::StrongVibrationMagnitude(number)` | Return the strength of the strong vibration motor on the gamepad of a player. ||
| | _number_ | The gamepad identifier: 1, 2, 3 or 4 |
| `Gamepads::TriggerPressure(number, string)` | Get the value of the pressure on a gamepad trigger. ||
| | _number_ | The gamepad identifier: 1, 2, 3 or 4 |
| | _string_ | Trigger button |
| `Gamepads::WeakVibrationMagnitude(number)` | Return the strength of the weak vibration motor on the gamepad of a player. ||
| | _number_ | The gamepad identifier: 1, 2, 3 or 4 |

## Platformer gamepad mapper 

Control a platformer character with a gamepad. 

### Behavior actions

**Gamepad identifier (1, 2, 3 or 4) property**  
Change the property value for the gamepad identifier (1, 2, 3 or 4).

**Jump button property**  
Change the property value for the jump button.

**Use directional pad property**  
Update the property value for "use directional pad".

**Use left stick property**  
Update the property value for "use left stick".

**Use right stick property**  
Update the property value for "use right stick".

**Toggle Use directional pad property**  
Toggle the property value for use directional pad.  
If it was true, it will become false, and if it was false it will become true.

**Toggle Use left stick property**  
Toggle the property value for use left stick.  
If it was true, it will become false, and if it was false it will become true.

**Toggle Use right stick property**  
Toggle the property value for use right stick.  
If it was true, it will become false, and if it was false it will become true.

### Behavior conditions

**Gamepad identifier (1, 2, 3 or 4) property**  
Compare the property value for the gamepad identifier (1, 2, 3 or 4).

**Jump button property**  
Compare the property value for the jump button.

**Use directional pad property**  
Check the property value for use directional pad.

**Use left stick property**  
Check the property value for use left stick.

**Use right stick property**  
Check the property value for use right stick.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.PlatformerGamepadMapper::PropertyGamepadIdentifier()` | Return the property value for the gamepad identifier (1, 2, 3 or 4). ||
| `Object.PlatformerGamepadMapper::PropertyJumpButton()` | Return the property value for the jump button. ||

## Top-down gamepad mapper 

Control a top-down character with a gamepad. 

### Behavior actions

**Gamepad identifier (1, 2, 3 or 4) property**  
Change the property value for the gamepad identifier (1, 2, 3 or 4).

**Stick mode property**  
Change the property value for the stick mode.

**Use directional pad property**  
Update the property value for "use directional pad".

**Use left stick property**  
Update the property value for "use left stick".

**Use right stick property**  
Update the property value for "use right stick".

**Toggle Use directional pad property**  
Toggle the property value for use directional pad.  
If it was true, it will become false, and if it was false it will become true.

**Toggle Use left stick property**  
Toggle the property value for use left stick.  
If it was true, it will become false, and if it was false it will become true.

**Toggle Use right stick property**  
Toggle the property value for use right stick.  
If it was true, it will become false, and if it was false it will become true.

### Behavior conditions

**Gamepad identifier (1, 2, 3 or 4) property**  
Compare the property value for the gamepad identifier (1, 2, 3 or 4).

**Stick mode property**  
Compare the property value for the stick mode.

**Use directional pad property**  
Check the property value for use directional pad.

**Use left stick property**  
Check the property value for use left stick.

**Use right stick property**  
Check the property value for use right stick.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.TopDownGamepadMapper::PropertyGamepadIdentifier()` | Return the property value for the gamepad identifier (1, 2, 3 or 4). ||
| `Object.TopDownGamepadMapper::PropertyStickMode()` | Return the property value for the stick mode. ||

---

*This page is an auto-generated reference page about the **Gamepads (controllers)** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).