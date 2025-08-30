# Hedgehog platformer

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/Glyphster Pack/Master/SVG/Space/9ea467d2404c1736b87d763c884e9b9dfb13a401360f69c6a17afc8f5d583d58_Space_warp_galaxy.svg" class="extension-icon"></img>
Jump and run on platforms at 360°.

**Authors and contributors** to this community extension: [Kennoir](https://gd.games/Kennoir), [UnknownUney](https://gd.games/UnknownUney), [D8H](https://gd.games/D8H).

!!! warning
    This is an extension made by a community member — but not reviewed
    by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of official extensions. In case of
    doubt, contact the author to know more about what the extension
    does or inspect its content before using it.

---

A platformer engine for Sonic-like games.

A small demo shows how to use this extension ([open the project online](https://editor.gdevelop.io/?project=example://360°-platformer)).

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Conditions

**Character is on given platform**  
Check if a platformer character is on a given platform.

**Character is pushing platform**  
Check if a platformer character is pushing against a platform.



## Hedgehog platformer character 

Jump and run on platforms at 360°. 

### Behavior actions

**Follow current platform**  
Follow the current platform.

**Movement angle**  
Check if the movement angle is around a given direction.

**Air drag**  
Change the air drag of the object. The air drag reduce the speed on X axis.

**Air drag min speed Y**  
Change the air drag min speed Y of the object.

**Airborne acceleration**  
Change the acceleration when the object is in the air.

**Allow jumping again**  
When this action is executed, the object is able to jump again, even if it is in the air: this can be useful to allow a double jump for example. This is not a permanent effect: you must call again this action every time you want to allow the object to jump (apart if it's on the floor).

**Forbid jumping again in the air**  
This revokes the effect of "Allow jumping again". The object is made unable to jump while in mid air. This has no effect if the object is not in the air.

**Collision layer**  
Change the collision layer of the object, only interacts with hedgehog platforms of the same layer. 

**Deceleration**  
Change the deceleration of the object when changing of direction on the ground.

**Downwards slope factor**  
Change the acceleration when running down a slope. The actual deceleration applied to the character depends on how steep the slope is.

**Friction**  
Change the friction of the object. The friction is a deceleration when there is no input.

**Gravity**  
Change the gravity of the object.

**Grounded acceleration**  
Change the acceleration when the object is on the ground.

**Jump height reducer**  
Change the Jump height reducer factor of the object.

**Jump speed**  
Change the jump speed of the object.

**Max speed**  
Change the max speed of the object while grounded.

**Running lock remaining duration**  
Change the duration during which the character can't run left or right.

**Rotate the object**  
Enable or disable rotation of the character when moving on the ground of falling from the ceilling.

**Speed**  
Change the current speed of the object. The speed can be negative when the object is on the ground.

**Horizontal speed**  
Change the current horizontal speed of the object. The object is automatically set in airborne state.

**Vertical speed**  
Change the current vertical speed of the object. The object is automatically set in airborne state.

**Stand max angle**  
Change the stand max angle of the object. Allow characters to fully stop on not too steep floors.

**Upwards slope factor**  
Change the deceleration factor when running up a slope. The actual deceleration applied to the character depends on how steep the slope is.

**Simulate jump key press**  
Simulate a press of the jump key.

**Simulate left key press**  
Simulate a press of the left key.

**Simulate right key press**  
Simulate a press of the right key.

### Behavior conditions

**Air drag**  
Compare the air drag of the object. The air drag reduce the speed on X axis.

**Air drag min speed Y**  
Compare the air drag min speed Y of the object.

**Airborne acceleration**  
Compare the acceleration when the object is in the air.

**Can jump**  
Check if the object can jump.

**Collision layer**  
Compare the collision layer of the object, only interacts with hedgehog platforms of the same layer. .

**Deceleration**  
Compare the deceleration of the object when changing of direction on the ground.

**Downwards slope factor**  
Compare the acceleration when running down a slope. The actual deceleration applied to the character depends on how steep the slope is.

**Friction**  
Compare the friction of the object. The friction is a deceleration when there is no input.

**Gravity**  
Compare the gravity of the object.

**Grounded acceleration**  
Compare the acceleration when the object is on the ground.

**Is facing forward**  
Check if the character is facing forward.

**Is jumping**  
Check if the object is in the air because of a jump.

**Is moving**  
Checks if the object is moving.

**Is on floor**  
Check if the object is on a platform.

**Is on left ledge**  
Check if the object is on the left ledge of a platform.

**Is on right ledge**  
Check if the object is on the right ledge of a platform.

**Is pushing**  
Check if the object is pushing againgst a wall.

**Is slipping**  
Check if the object is slipping.

**Control pressed or simulated**  
A control was applied from a default control or simulated by an action.

**Jump height reducer**  
Compare the Jump height reducer factor of the object.

**Jump speed**  
Compare the jump speed of the object.

**Max speed**  
Compare the max speed of the object while grounded.

**Running lock remaining duration**  
Compare the duration during which the character can't run left or right.

**Rotate the object**  
Check if the character is rotated while moving on the ground of falling from the ceilling.

**Speed**  
Compare the current speed of the object. The speed can be negative when the object is on the ground.

**Horizontal speed**  
Compare the current horizontal speed of the object. The object is automatically set in airborne state.

**Vertical speed**  
Compare the current vertical speed of the object. The object is automatically set in airborne state.

**Stand max angle**  
Compare the stand max angle of the object. Allow characters to fully stop on not too steep floors.

**Upwards slope factor**  
Compare the deceleration factor when running up a slope. The actual deceleration applied to the character depends on how steep the slope is.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.HedgehogCharacter::AirDrag()` | Return the air drag of the object. The air drag reduce the speed on X axis. ||
| `Object.HedgehogCharacter::AirDragMinSpeedY()` | Return the air drag min speed Y of the object. ||
| `Object.HedgehogCharacter::AirborneAcceleration()` | Return the acceleration when the object is in the air. ||
| `Object.HedgehogCharacter::CollisionLayer()` | Return the collision layer of the object, only interacts with hedgehog platforms of the same layer. . ||
| `Object.HedgehogCharacter::Deceleration()` | Return the deceleration of the object when changing of direction on the ground. ||
| `Object.HedgehogCharacter::DownSlopeFactor()` | Return the acceleration when running down a slope. The actual deceleration applied to the character depends on how steep the slope is. ||
| `Object.HedgehogCharacter::Friction()` | Return the friction of the object. The friction is a deceleration when there is no input. ||
| `Object.HedgehogCharacter::Gravity()` | Return the gravity of the object. ||
| `Object.HedgehogCharacter::GroundedAcceleration()` | Return the acceleration when the object is on the ground. ||
| `Object.HedgehogCharacter::JumpReducer()` | Return the Jump height reducer factor of the object. ||
| `Object.HedgehogCharacter::JumpSpeed()` | Return the jump speed of the object. ||
| `Object.HedgehogCharacter::MaxSpeed()` | Return the max speed of the object while grounded. ||
| `Object.HedgehogCharacter::MovementAngle()` | Return the angle (in degrees) in which the object is moving at. ||
| `Object.HedgehogCharacter::RunningLockRemainingDuration()` | Return the duration during which the character can't run left or right. ||
| `Object.HedgehogCharacter::Speed()` | Return the current speed of the object. The speed can be negative when the object is on the ground. ||
| `Object.HedgehogCharacter::SpeedX()` | Return the current horizontal speed of the object. The object is automatically set in airborne state. ||
| `Object.HedgehogCharacter::SpeedY()` | Return the current vertical speed of the object. The object is automatically set in airborne state. ||
| `Object.HedgehogCharacter::StandMaxAngle()` | Return the stand max angle of the object. Allow characters to fully stop on not too steep floors. ||
| `Object.HedgehogCharacter::UpSlopeFactor()` | Return the deceleration factor when running up a slope. The actual deceleration applied to the character depends on how steep the slope is. ||

## Hedgehog character animator 

Change animations and horizontal flipping of hedgehog characters automatically. 

_No expressions for this behavior._


## Hedgehog character rolling 

Toggle rolling mode. 

### Behavior actions

**Simulate roll key press**  
Simulate a press of the Roll key. When characters stand still, they chouch instead of rolling.

**Simulate spindash key press**  
Simulate a press of the spindash key.

**Simulate spindash or jump key press**  
Simulate a press of the Spindash key when the character is crouching or the jump key otherwise.

### Behavior conditions

**Started a spindash**  
Check if the character has just started a spindash.

**Is charging a spindash**  
Check if the character is charging a spindash.

**Is crouching**  
Check if the character is crouching.

**Is rolling**  
Check if the character is rolling.

_No expressions for this behavior._


## Hedgehog platform 

Flag objects as being platforms which characters can run on. 

_No expressions for this behavior._


## Hedgehog spring 

Push hedgehog characters. 

### Behavior actions

**Push character**  
Make the spring push the character.

### Behavior conditions

**Can push**  
Check if the spring can push the character.

_No expressions for this behavior._



---

*This page is an auto-generated reference page about the **Hedgehog platformer** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).