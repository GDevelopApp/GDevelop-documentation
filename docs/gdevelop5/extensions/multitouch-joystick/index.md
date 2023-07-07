# Multitouch joystick and buttons (deprecated)

<img src="https://resources.gdevelop-app.com/assets/Icons/Line Hero Pack/Master/SVG/Videogames/Videogames_controller_joystick_arrows_direction.svg" class="extension-icon"></img>
Activate a joystick or buttons that can be controlled by interacting with a touchscreen.

**Authors and contributors** to this community extension: [VictrisGames](https://gd.games/VictrisGames), [AstroCookie](https://gd.games/AstroCookie), [xellix](https://gd.games/xellix).

---

Users can interact with the multitouch joystick to specify angle and force values.  These values can be used to control other objects in the scene such as movement and rotation, such as for twin-stick shooter games.

Mulitouch buttons can be used whenever a game allows the user to press multiple locations at once.

This extension is deprecated. Please install the new extension with the same name and remove this one after replacing the actions, conditions and expressions in your project.

How to use:


- Add the joystick behavior to a sprite that will be the joystick 
- Place the joystick object on the scene
- Run the "Activate joystick" action on every frame and specify the thumb object
- The joystick thumb object will automatically be created and moved

Tips:


- Use "Simulate a touch" functions to provide mouse and gamepad controls
- More than one joystick or button can be used at the same time
- Joystick and thumb objects should have all sides the same length
- Thumb object must be smaller than the joystick object

[Read more...](https://wiki.gdevelop.io/gdevelop5/extensions/multitouch-joystick/setup)

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Button state**  
Change a button state for a multitouch controller.

**Dead zone radius**  
Change the dead zone radius of a joystick. The deadzone is an area for which movement on sticks won't be taken into account (instead, the stick will be considered as not moved).

**Joystick angle**  
Change the angle the joystick is pointing towards (Range: -180 to 180).

**Joystick force**  
Change the percentage the thumb has been pulled away from the joystick center (Range: 0 to 1).

## Conditions

**Angle 4-way direction**  
Check if angle is in a given direction.

**Angle 8-way direction**  
Check if angle is in a given direction.

**Angle to 4-way index**  
Compare the direction index (left = 1, bottom = 1, right = 2, top = 3) for an angle (in degrees).

**Angle to 8-way index**  
Compare the direction index (left = 1, bottom-left = 1... top-left = 7) for an angle (in degrees).

**Joystick pushed in a direction (4-way)**  
Check if joystick is pushed in a given direction.

**Joystick pushed in a direction (8-way)**  
Check if joystick is pushed in a given direction.

**Multitouch controller button pressed**  
Check if a button is pressed on a gamepad.

**Multitouch controller button released**  
Check if a button is released on a gamepad.

**Joystick force**  
Compare the percentage the thumb has been pulled away from the joystick center (Range: 0 to 1).

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `MultitouchJoystick::AngleTo4Way(number)` | Return the direction index (left = 1, bottom = 1, right = 2, top = 3) for an angle (in degrees). ||
| | _number_ | Angle |
| `MultitouchJoystick::AngleTo8Way(number)` | Return the direction index (left = 1, bottom-left = 1... top-left = 7) for an angle (in degrees). ||
| | _number_ | Angle |
| `MultitouchJoystick::DeadZone(number, string)` | Return the dead zone radius of a joystick. The deadzone is an area for which movement on sticks won't be taken into account (instead, the stick will be considered as not moved). ||
| | _number_ | Multitouch controller identifier (1, 2, 3, 4...) |
| | _string_ | Joystick name |
| `MultitouchJoystick::JoystickAngle(number, string)` | Return the angle the joystick is pointing towards (Range: -180 to 180). ||
| | _number_ | Multitouch controller identifier (1, 2, 3, 4...) |
| | _string_ | Joystick name |
| `MultitouchJoystick::JoystickForce(number, string)` | Return the percentage the thumb has been pulled away from the joystick center (Range: 0 to 1). ||
| | _number_ | Multitouch controller identifier (1, 2, 3, 4...) |
| | _string_ | Joystick name |

## Multitouch button (deprecated) 

Detect button presses made from a touchscreen. 

### Behavior actions

**Button state**  
Button state

**Change button to pressed**  
Change button to pressed. This action is deprecated.

**Button identifier property**  
Change the property value for the button identifier.

**Multitouch controller identifier (1, 2, 3, 4...) property**  
Change the property value for the multitouch controller identifier (1, 2, 3, 4...).

**Button pressed property**  
Update the property value for "button pressed".

**Button released property**  
Update the property value for "button released".

**Touch counter property**  
Change the property value for the touch counter.

**Distance from joystick to touch property**  
Change the property value for the distance from joystick to touch.

**TouchID property**  
Change the property value for the touchID.

**Toggle Button pressed property**  
Toggle the property value for button pressed.  
If it was true, it will become false, and if it was false it will become true.

**Toggle Button released property**  
Toggle the property value for button released.  
If it was true, it will become false, and if it was false it will become true.

### Behavior conditions

**Button pressed**  
Check if button is pressed.

**Button released**  
Check if button is released.

**Button identifier property**  
Compare the property value for the button identifier.

**Multitouch controller identifier (1, 2, 3, 4...) property**  
Compare the property value for the multitouch controller identifier (1, 2, 3, 4...).

**Button pressed property**  
Check the property value for button pressed.

**Button released property**  
Check the property value for button released.

**Touch counter property**  
Compare the property value for the touch counter.

**Distance from joystick to touch property**  
Compare the property value for the distance from joystick to touch.

**TouchID property**  
Compare the property value for the touchID.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.MultitouchButton::PropertyButtonIdentifier()` | Return the property value for the button identifier. ||
| `Object.MultitouchButton::PropertyControllerIdentifier()` | Return the property value for the multitouch controller identifier (1, 2, 3, 4...). ||
| `Object.MultitouchButton::PropertyTouchCounter()` | Return the property value for the touch counter. ||
| `Object.MultitouchButton::PropertyTouchDistance()` | Return the property value for the distance from joystick to touch. ||
| `Object.MultitouchButton::PropertyTouchID()` | Return the property value for the touchID. ||

## Multitouch Joystick (deprecated) 

Activate a joystick that can be controlled by interacting with a touchscreen. 

### Behavior actions

**Animate multitouch joystick**  
Animate multitouch joystick.

**Enable (or disable) floating on a joystick**  
Enable (or disable) floating on a joystick.

**Change joystick to pressed**  
Change joystick to pressed.

**Button was just released property**  
Update the property value for "button was just released".

**Multitouch controller identifier (1, 2, 3, 4...) property**  
Change the property value for the multitouch controller identifier (1, 2, 3, 4...).

**Dead zone radius (range: 0 to 1) property**  
Change the property value for the dead zone radius (range: 0 to 1).

**Floating (allow joystick to be moved by dragging) property**  
Update the property value for "floating (allow joystick to be moved by dragging)".

**Is currently pressed property**  
Update the property value for "is currently pressed".

**Joystick angle (range: -180 to 180) property**  
Change the property value for the joystick angle (range: -180 to 180).

**Joystick force (range: 0 to 1) property**  
Change the property value for the joystick force (range: 0 to 1).

**Joystick name property**  
Change the property value for the joystick name.

**TouchCounter property**  
Change the property value for the touchCounter.

**Distance from joystick to touch property**  
Change the property value for the distance from joystick to touch.

**TouchID property**  
Change the property value for the touchID.

**Simulate a touch ended**  
Simulate a touch ended.

**Simulate a touch on joystick (based on angle and force)**  
Simulate a touch on joystick (based on angle and force).  Can be used for gamepad controls.

**Simulate a touch on joystick (based on position)**  
Simulate a touch on joystick (based on position).  Can be used for mouse controls.

**Toggle Button was just released property**  
Toggle the property value for button was just released.  
If it was true, it will become false, and if it was false it will become true.

**Toggle Floating (allow joystick to be moved by dragging) property**  
Toggle the property value for floating (allow joystick to be moved by dragging).  
If it was true, it will become false, and if it was false it will become true.

**Toggle Is currently pressed property**  
Toggle the property value for is currently pressed.  
If it was true, it will become false, and if it was false it will become true.

### Behavior conditions

**Joystick force**  
Check if joystick force is greater or equal to a value.

**Joystick pushed in a direction (4-way movement)**  
Check if joystick is pushed in a given direction.

**Joystick pushed in a direction (8-way movement)**  
Check if joystick is pushed in a given direction.

**Check if joystick is floating**  
Check if joystick is floating.

**Joystick pressed**  
Check if a joystick is pressed.

**Button was just released property**  
Check the property value for button was just released.

**Multitouch controller identifier (1, 2, 3, 4...) property**  
Compare the property value for the multitouch controller identifier (1, 2, 3, 4...).

**Dead zone radius (range: 0 to 1) property**  
Compare the property value for the dead zone radius (range: 0 to 1).

**Floating (allow joystick to be moved by dragging) property**  
Check the property value for floating (allow joystick to be moved by dragging).

**Is currently pressed property**  
Check the property value for is currently pressed.

**Joystick angle (range: -180 to 180) property**  
Compare the property value for the joystick angle (range: -180 to 180).

**Joystick force (range: 0 to 1) property**  
Compare the property value for the joystick force (range: 0 to 1).

**Joystick name property**  
Compare the property value for the joystick name.

**TouchCounter property**  
Compare the property value for the touchCounter.

**Distance from joystick to touch property**  
Compare the property value for the distance from joystick to touch.

**TouchID property**  
Compare the property value for the touchID.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.MultitouchJoystick::JoystickAngle()` | Angle the joystick is pointing towards (Range: -180 to 180). ||
| `Object.MultitouchJoystick::JoystickForce()` | Percentage the thumb has been pulled away from the joystick center (Range: 0 to 1). ||
| `Object.MultitouchJoystick::PropertyControllerIdentifier()` | Return the property value for the multitouch controller identifier (1, 2, 3, 4...). ||
| `Object.MultitouchJoystick::PropertyDeadZoneRadius()` | Return the property value for the dead zone radius (range: 0 to 1). ||
| `Object.MultitouchJoystick::PropertyJoystickAngle()` | Return the property value for the joystick angle (range: -180 to 180). ||
| `Object.MultitouchJoystick::PropertyJoystickForce()` | Return the property value for the joystick force (range: 0 to 1). ||
| `Object.MultitouchJoystick::PropertyJoystickIdentifier()` | Return the property value for the joystick name. ||
| `Object.MultitouchJoystick::PropertyTouchCounter()` | Return the property value for the touchCounter. ||
| `Object.MultitouchJoystick::PropertyTouchDistance()` | Return the property value for the distance from joystick to touch. ||
| `Object.MultitouchJoystick::PropertyTouchID()` | Return the property value for the touchID. ||

## Platformer multitouch controller mapper (deprecated) 

Control a platformer character with a multitouch controller. 

### Behavior actions

**Controller identifier (1, 2, 3, 4...) property**  
Change the property value for the controller identifier (1, 2, 3, 4...).

**Joystick name property**  
Change the property value for the joystick name.

**Jump button name property**  
Change the property value for the jump button name.

### Behavior conditions

**Controller identifier (1, 2, 3, 4...) property**  
Compare the property value for the controller identifier (1, 2, 3, 4...).

**Joystick name property**  
Compare the property value for the joystick name.

**Jump button name property**  
Compare the property value for the jump button name.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.PlatformerMultitouchMapper::PropertyControllerIdentifier()` | Return the property value for the controller identifier (1, 2, 3, 4...). ||
| `Object.PlatformerMultitouchMapper::PropertyJoystickIdentifier()` | Return the property value for the joystick name. ||
| `Object.PlatformerMultitouchMapper::PropertyJumpButton()` | Return the property value for the jump button name. ||

---

*This page is an auto-generated reference page about the **Multitouch joystick and buttons (deprecated)** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).