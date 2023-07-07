# Multitouch joystick and buttons (sprite)

<img src="https://resources.gdevelop-app.com/assets/Icons/Line Hero Pack/Master/SVG/Videogames/Videogames_controller_joystick_arrows_direction.svg" class="extension-icon"></img>
Joysticks or buttons for touchscreens.

**Authors and contributors** to this community extension: [VictrisGames](https://gd.games/VictrisGames), [AstroCookie](https://gd.games/AstroCookie), [xellix](https://gd.games/xellix), [D8H](https://gd.games/D8H).

---

Multitouch joysticks can be used the same way as physical gamepads:

- 4 or 8 directions
- Analogus pads
- Player selection
- Controls mapping for top-down movement and platformer characters

There are ready-to-use joysticks in the asset-store [multitouch joysticks pack](https://editor.gdevelop.io/?initial-dialog=asset-store&asset-pack=multitouch-joysticks-multitouch-joysticks).

[Read more...](https://wiki.gdevelop.io/gdevelop5/objects/multitouch-joystick)

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

**Angle to 4-way index**  
Compare the direction index (left = 1, bottom = 1, right = 2, top = 3) for an angle (in degrees).

**Angle to 8-way index**  
Compare the direction index (left = 1, bottom-left = 1... top-left = 7) for an angle (in degrees).

**Angle 4-way direction**  
Check if angle is in a given direction.

**Angle 8-way direction**  
Check if angle is in a given direction.

**Multitouch controller button pressed**  
Check if a button is pressed on a gamepad.

**Multitouch controller button released**  
Check if a button is released on a gamepad.

**Joystick pushed in a direction (4-way)**  
Check if joystick is pushed in a given direction.

**Joystick pushed in a direction (8-way)**  
Check if joystick is pushed in a given direction.

**Joystick force (deprecated)**  
Compare the percentage the thumb has been pulled away from the joystick center (Range: 0 to 1).

**Stick force**  
Compare the force of multitouch contoller stick (from 0 to 1).

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `SpriteMultitouchJoystick::AngleTo4Way(number)` | Return the direction index (left = 1, bottom = 1, right = 2, top = 3) for an angle (in degrees). ||
| | _number_ | Angle |
| `SpriteMultitouchJoystick::AngleTo8Way(number)` | Return the direction index (left = 1, bottom-left = 1... top-left = 7) for an angle (in degrees). ||
| | _number_ | Angle |
| `SpriteMultitouchJoystick::DeadZone(number, string)` | Return the dead zone radius of a joystick. The deadzone is an area for which movement on sticks won't be taken into account (instead, the stick will be considered as not moved). ||
| | _number_ | Multitouch controller identifier (1, 2, 3, 4...) |
| | _string_ | Joystick name |
| `SpriteMultitouchJoystick::JoystickAngle(number, string)` | Return the angle the joystick is pointing towards (Range: -180 to 180). ||
| | _number_ | Multitouch controller identifier (1, 2, 3, 4...) |
| | _string_ | Joystick name |
| `SpriteMultitouchJoystick::JoystickForce(number, string)` | Return the percentage the thumb has been pulled away from the joystick center (Range: 0 to 1). ||
| | _number_ | Multitouch controller identifier (1, 2, 3, 4...) |
| | _string_ | Joystick name |
| `SpriteMultitouchJoystick::StickAngle(number, string)` | Return the angle the multitouch controller stick is pointing towards (Range: -180 to 180). ||
| | _number_ | Multitouch controller identifier (1, 2, 3, 4...) |
| | _string_ | Joystick name |
| `SpriteMultitouchJoystick::StickForce(number, string)` | Return the force of multitouch contoller stick (from 0 to 1). ||
| | _number_ | Multitouch controller identifier (1, 2, 3, 4...) |
| | _string_ | Stick name |
| `SpriteMultitouchJoystick::StickForceX(number, string)` | Return the multitouch contoller stick force on X axis (from -1 at the left to 1 at the right). ||
| | _number_ | Multitouch controller identifier (1, 2, 3, 4...) |
| | _string_ | Joystick name |
| `SpriteMultitouchJoystick::StickForceY(number, string)` | Return the multitouch contoller stick force on Y axis (from -1 at the top to 1 at the bottom). ||
| | _number_ | Multitouch controller identifier (1, 2, 3, 4...) |
| | _string_ | Joystick name |

## Multitouch Joystick 

Joystick for touchscreens. 

### Object actions

**De/activate control**  
De/activate control of the joystick.

**Flip the object horizontally**  
Flip the object horizontally

**Flip the object vertically**  
Flip the object vertically

**Height**  
Change the height of an object.

**Scale**  
Modify the scale of the specified object.

**Multitouch controller identifier**  
Change the multitouch controller identifier (1, 2, 3, 4...).

**Dead zone radius**  
Change the dead zone radius of the joystick (range: 0 to 1). The deadzone is an area for which movement on sticks won't be taken into account (instead, the stick will be considered as not moved).

**Joystick name**  
Change the joystick name of the object.

**Opacity**  
Change the opacity of an object, between 0 (fully transparent) to 255 (opaque).

**Multitouch controller identifier (1, 2, 3, 4...) property**  
Change the property value for the multitouch controller identifier (1, 2, 3, 4...).

**Dead zone radius (range: 0 to 1) property**  
Change the property value for the dead zone radius (range: 0 to 1).

**Joystick name property**  
Change the property value for the joystick name.

**ParentOrigin property**  
Change the property value for the parentOrigin.

**ThumbAnchorOrigin property**  
Change the property value for the thumbAnchorOrigin.

**ThumbAnchorTarget property**  
Change the property value for the thumbAnchorTarget.

**ThumbIsScaledProportionally property**  
Update the property value for "thumbIsScaledProportionally".

**Center of rotation**  
Change the center of rotation of an object relatively to the object origin.

**Scale on X axis**  
Change the width's scale of an object.

**Scale on Y axis**  
Change the height's scale of an object.

**Toggle ThumbIsScaledProportionally property**  
Toggle the property value for thumbIsScaledProportionally.  
If it was true, it will become false, and if it was false it will become true.

**Update configuration**  
Pass the object property values to the behavior.

**Width**  
Change the width of an object.

### Object conditions

**Multitouch controller identifier**  
Compare the multitouch controller identifier (1, 2, 3, 4...).

**Dead zone radius**  
Compare the dead zone radius of the joystick (range: 0 to 1). The deadzone is an area for which movement on sticks won't be taken into account (instead, the stick will be considered as not moved).

**Horizontally flipped**  
Check if the object is horizontally flipped

**Vertically flipped**  
Check if the object is vertically flipped

**Joystick pushed in a direction (4-way movement)**  
Check if joystick is pushed in a given direction.

**Joystick pushed in a direction (8-way movement)**  
Check if joystick is pushed in a given direction.

**Stick pressed**  
Check if a stick is pressed.

**Joystick force (deprecated)**  
Compare the joystick force (from 0 to 1).

**Joystick name**  
Compare the joystick name of the object.

**Opacity**  
Compare the opacity of an object, between 0 (fully transparent) to 255 (opaque).

**Multitouch controller identifier (1, 2, 3, 4...) property**  
Compare the property value for the multitouch controller identifier (1, 2, 3, 4...).

**Dead zone radius (range: 0 to 1) property**  
Compare the property value for the dead zone radius (range: 0 to 1).

**Joystick name property**  
Compare the property value for the joystick name.

**ParentOrigin property**  
Compare the property value for the parentOrigin.

**ThumbAnchorOrigin property**  
Compare the property value for the thumbAnchorOrigin.

**ThumbAnchorTarget property**  
Compare the property value for the thumbAnchorTarget.

**ThumbIsScaledProportionally property**  
Check the property value for thumbIsScaledProportionally.

**Scale on X axis**  
Compare the width's scale of an object.

**Scale on Y axis**  
Compare the height's scale of an object.

**Stick force**  
Compare the strick force (from 0 to 1).

**Stick X force**  
Compare the stick force on X axis (from -1 at the left to 1 at the right).

**Stick Y force**  
Compare the stick force on Y axis (from -1 at the top to 1 at the bottom).

### Object expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.ControllerIdentifier()` | Return the multitouch controller identifier (1, 2, 3, 4...). ||
| `Object.DeadZoneRadius()` | Return the dead zone radius of the joystick (range: 0 to 1). The deadzone is an area for which movement on sticks won't be taken into account (instead, the stick will be considered as not moved). ||
| `Object.JoystickAngle()` | Return the angle the joystick is pointing towards (from -180 to 180). ||
| `Object.JoystickForce()` | Return the joystick force (from 0 to 1). ||
| `Object.JoystickIdentifier()` | Return the joystick name of the object. ||
| `Object.Opacity()` | Return the opacity of an object, between 0 (fully transparent) to 255 (opaque). ||
| `Object.PropertyControllerIdentifier()` | Return the property value for the multitouch controller identifier (1, 2, 3, 4...). ||
| `Object.PropertyDeadZoneRadius()` | Return the property value for the dead zone radius (range: 0 to 1). ||
| `Object.PropertyJoystickIdentifier()` | Return the property value for the joystick name. ||
| `Object.PropertyParentOrigin()` | Return the property value for the parentOrigin. ||
| `Object.PropertyThumbAnchorOrigin()` | Return the property value for the thumbAnchorOrigin. ||
| `Object.PropertyThumbAnchorTarget()` | Return the property value for the thumbAnchorTarget. ||
| `Object.ScaleX()` | Return the width's scale of an object. ||
| `Object.ScaleY()` | Return the height's scale of an object. ||
| `Object.StickAngle()` | Return the angle the stick is pointing towards (from -180 to 180). ||
| `Object.StickForce()` | Return the strick force (from 0 to 1). ||
| `Object.StickForceX()` | Return the stick force on X axis (from -1 at the left to 1 at the right). ||
| `Object.StickForceY()` | Return the stick force on Y axis (from -1 at the top to 1 at the bottom). ||

## Multitouch button 

Detect button presses made on a touchscreen. 

### Behavior actions

**Button state**  
Button state

**Button identifier property**  
Change the property value for the button identifier.

**Multitouch controller identifier (1, 2, 3, 4...) property**  
Change the property value for the multitouch controller identifier (1, 2, 3, 4...).

**Button released property**  
Update the property value for "button released".

**TouchID property**  
Change the property value for the touchID.

**TouchIndex property**  
Change the property value for the touchIndex.

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

**Button released property**  
Check the property value for button released.

**TouchID property**  
Compare the property value for the touchID.

**TouchIndex property**  
Compare the property value for the touchIndex.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.MultitouchButton::PropertyButtonIdentifier()` | Return the property value for the button identifier. ||
| `Object.MultitouchButton::PropertyControllerIdentifier()` | Return the property value for the multitouch controller identifier (1, 2, 3, 4...). ||
| `Object.MultitouchButton::PropertyTouchId()` | Return the property value for the touchID. ||
| `Object.MultitouchButton::PropertyTouchIndex()` | Return the property value for the touchIndex. ||

## Multitouch Joystick 

Joystick that can be controlled by interacting with a touchscreen. 

### Behavior actions

**Reset**  
Reset the joystick values (except for angle, which stays the same)

**Multitouch controller identifier**  
Change the multitouch controller identifier.

**Dead zone radius**  
Change the dead zone radius (range: 0 to 1) of the joystick. The deadzone is an area for which movement on sticks won't be taken into account (instead, the stick will be considered as not moved).

**Joystick angle**  
Change the angle the joystick is pointing towards (Range: -180 to 180).

**Joystick force**  
Change the joystick force (from 0 to 1).

**Joystick name**  
Change the joystick name.

**Multitouch controller identifier (1, 2, 3, 4...) property**  
Change the property value for the multitouch controller identifier (1, 2, 3, 4...).

**Dead zone radius (range: 0 to 1) property**  
Change the property value for the dead zone radius (range: 0 to 1).

**Joystick angle (range: -180 to 180) property**  
Change the property value for the joystick angle (range: -180 to 180).

**Joystick force (range: 0 to 1) property**  
Change the property value for the joystick force (range: 0 to 1).

**Joystick name property**  
Change the property value for the joystick name.

**TouchId property**  
Change the property value for the touchId.

**TouchIndex property**  
Change the property value for the touchIndex.

### Behavior conditions

**Multitouch controller identifier**  
Compare the multitouch controller identifier.

**Dead zone radius**  
Compare the dead zone radius (range: 0 to 1) of the joystick. The deadzone is an area for which movement on sticks won't be taken into account (instead, the stick will be considered as not moved).

**Joystick pushed in a direction (4-way movement)**  
Check if joystick is pushed in a given direction.

**Joystick pushed in a direction (8-way movement)**  
Check if joystick is pushed in a given direction.

**Joystick pressed**  
Check if a joystick is pressed.

**Joystick force**  
Compare the joystick force (from 0 to 1).

**Joystick name**  
Compare the joystick name.

**Multitouch controller identifier (1, 2, 3, 4...) property**  
Compare the property value for the multitouch controller identifier (1, 2, 3, 4...).

**Dead zone radius (range: 0 to 1) property**  
Compare the property value for the dead zone radius (range: 0 to 1).

**Joystick angle (range: -180 to 180) property**  
Compare the property value for the joystick angle (range: -180 to 180).

**Joystick force (range: 0 to 1) property**  
Compare the property value for the joystick force (range: 0 to 1).

**Joystick name property**  
Compare the property value for the joystick name.

**TouchId property**  
Compare the property value for the touchId.

**TouchIndex property**  
Compare the property value for the touchIndex.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.MultitouchJoystick::ControllerIdentifier()` | Return the multitouch controller identifier. ||
| `Object.MultitouchJoystick::DeadZoneRadius()` | Return the dead zone radius (range: 0 to 1) of the joystick. The deadzone is an area for which movement on sticks won't be taken into account (instead, the stick will be considered as not moved). ||
| `Object.MultitouchJoystick::JoystickAngle()` | Return the angle the joystick is pointing towards (Range: -180 to 180). ||
| `Object.MultitouchJoystick::JoystickForce()` | Return the joystick force (from 0 to 1). ||
| `Object.MultitouchJoystick::JoystickIdentifier()` | Return the joystick name. ||
| `Object.MultitouchJoystick::PropertyControllerIdentifier()` | Return the property value for the multitouch controller identifier (1, 2, 3, 4...). ||
| `Object.MultitouchJoystick::PropertyDeadZoneRadius()` | Return the property value for the dead zone radius (range: 0 to 1). ||
| `Object.MultitouchJoystick::PropertyJoystickAngle()` | Return the property value for the joystick angle (range: -180 to 180). ||
| `Object.MultitouchJoystick::PropertyJoystickForce()` | Return the property value for the joystick force (range: 0 to 1). ||
| `Object.MultitouchJoystick::PropertyJoystickIdentifier()` | Return the property value for the joystick name. ||
| `Object.MultitouchJoystick::PropertyTouchId()` | Return the property value for the touchId. ||
| `Object.MultitouchJoystick::PropertyTouchIndex()` | Return the property value for the touchIndex. ||
| `Object.MultitouchJoystick::StickForceX()` | Return the stick force on X axis (from -1 at the left to 1 at the right). ||
| `Object.MultitouchJoystick::StickForceY()` | Return the stick force on Y axis (from -1 at the top to 1 at the bottom). ||

## Platformer multitouch controller mapper 

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

## Top-down multitouch controller mapper 

Control a top-down character with a multitouch controller. 

### Behavior actions

**Controller identifier (1, 2, 3, 4...) property**  
Change the property value for the controller identifier (1, 2, 3, 4...).

**Joystick name property**  
Change the property value for the joystick name.

**Stick mode property**  
Change the property value for the stick mode.

### Behavior conditions

**Controller identifier (1, 2, 3, 4...) property**  
Compare the property value for the controller identifier (1, 2, 3, 4...).

**Joystick name property**  
Compare the property value for the joystick name.

**Stick mode property**  
Compare the property value for the stick mode.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.TopDownMultitouchMapper::PropertyControllerIdentifier()` | Return the property value for the controller identifier (1, 2, 3, 4...). ||
| `Object.TopDownMultitouchMapper::PropertyJoystickIdentifier()` | Return the property value for the joystick name. ||
| `Object.TopDownMultitouchMapper::PropertyStickMode()` | Return the property value for the stick mode. ||

---

*This page is an auto-generated reference page about the **Multitouch joystick and buttons (sprite)** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).