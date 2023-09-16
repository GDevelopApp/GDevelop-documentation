# Multitouch joystick and buttons (deprecated)

<img src="https://resources.gdevelop-app.com/assets/Icons/Line Hero Pack/Master/SVG/Videogames/Videogames_controller_joystick_arrows_direction.svg" class="extension-icon"></img>
Activate a joystick or buttons that can be controlled by interacting with a touchscreen.

**Authors and contributors** to this community extension: [VictrisGames](https://gd.games/VictrisGames), [MelonDev](https://gd.games/MelonDev), [xellix](https://gd.games/xellix).

!!! warning
    This is an extension made by a community member — but not reviewed
    by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of official extensions. In case of
    doubt, contact the author to know more about what the extension
    does or inspect its content before using it.

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

## Conditions

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
| `MultitouchJoystick::JoystickAngle(number, string)` | Return the angle the joystick is pointing towards (Range: -180 to 180). ||
| | _🔢 Number_ | Multitouch controller identifier (1, 2, 3, 4...) |
| | _string_ | Joystick name |
| `MultitouchJoystick::JoystickForce(number, string)` | Return the percentage the thumb has been pulled away from the joystick center (Range: 0 to 1). ||
| | _🔢 Number_ | Multitouch controller identifier (1, 2, 3, 4...) |
| | _string_ | Joystick name |

## Multitouch button (deprecated) 

Detect button presses made from a touchscreen. 

### Behavior conditions

**Button pressed**  
Check if button is pressed.

**Button released**  
Check if button is released.

_No expressions for this behavior._


## Multitouch Joystick (deprecated) 

Activate a joystick that can be controlled by interacting with a touchscreen. 

### Behavior actions

**Animate multitouch joystick**  
Animate multitouch joystick.

**Enable (or disable) floating on a joystick**  
Enable (or disable) floating on a joystick.

**Change joystick to pressed**  
Change joystick to pressed.

**Simulate a touch ended**  
Simulate a touch ended.

**Simulate a touch on joystick (based on angle and force)**  
Simulate a touch on joystick (based on angle and force).  Can be used for gamepad controls.

**Simulate a touch on joystick (based on position)**  
Simulate a touch on joystick (based on position).  Can be used for mouse controls.

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

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.MultitouchJoystick::JoystickAngle()` | Angle the joystick is pointing towards (Range: -180 to 180). ||
| `Object.MultitouchJoystick::JoystickForce()` | Percentage the thumb has been pulled away from the joystick center (Range: 0 to 1). ||

## Platformer multitouch controller mapper (deprecated) 

Control a platformer character with a multitouch controller. 

_No expressions for this behavior._


---

*This page is an auto-generated reference page about the **Multitouch joystick and buttons (deprecated)** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).