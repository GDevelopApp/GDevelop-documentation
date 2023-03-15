# Platform behavior

The platformer engine allows to create controllable objects that can run and jump on other objects that are marked as platforms. It supports various features commonly found in platformers: grabbing the edge of a platform, sustaining the jump while a key is held, customizable gravity... It can be used for the player, but also for other objects moving on platforms. In this case though, it's recommended to first check if there is a simpler behavior that could be used. [Read more explanations about it.](https://wiki.gdevelop.io/gdevelop5/behaviors/platformer)

## Conditions

**Is object on given floor**  
Test if an object is on a given floor.



## Platform 

Flag objects as being platforms which characters can run on. 

### Behavior actions

**Platform type**  
Change the platform type of the object: Platform, Jump-Through, or Ladder.

_No expressions for this behavior._


## Platformer character 

Jump and run on platforms. 

### Behavior actions

**Acceleration**  
Change the horizontal acceleration of an object.

**Platform grabbing**  
Enable (or disable) the ability of the object to grab platforms when falling near to one.

**Deceleration**  
Change the horizontal deceleration of an object.

**Gravity**  
Change the gravity applied on an object.

**Ignore default controls**  
De/activate the use of default controls.  
If deactivated, use the simulated actions to move the object.

**Jump speed**  
Change the jump speed of an object. Its value is always positive.

**Jump sustain time**  
Change the jump sustain time of an object.This is the time during which keeping the jump button held allow the initial jump speed to be maintained.

**Ladder climbing speed**  
Change the ladder climbing speed.

**Maximum falling speed**  
Change the maximum falling speed of an object.

**Maximum horizontal speed**  
Change the maximum horizontal speed of an object.

**Abort jump**  
Abort the current jump and stop the object vertically. This action doesn't have any effect when the character is not jumping.

**Forbid jumping again in the air**  
This revokes the effect of "Allow jumping again". The object is made unable to jump while in mid air. This has no effect if the object is not in the air.

**Current falling speed**  
Change the current falling speed of the object. This action doesn't have any effect when the character is not falling or is in the first phase of a jump.

**Current horizontal speed**  
Change the current horizontal speed of the object. The object moves to the left with negative values and to the right with positive ones

**Allow jumping again**  
When this action is executed, the object is able to jump again, even if it is in the air: this can be useful to allow a double jump for example. This is not a permanent effect: you must call again this action everytime you want to allow the object to jump (apart if it's on the floor).

**Simulate control**  
Simulate a press of a key.  
Valid keys are Left, Right, Jump, Ladder, Release Ladder, Up, Down.

**Simulate down key press**  
Simulate a press of the down key (used when on a ladder).

**Simulate jump key press**  
Simulate a press of the jump key.

**Simulate ladder key press**  
Simulate a press of the ladder key (used to grab a ladder).

**Simulate left key press**  
Simulate a press of the left key.

**Simulate release ladder key press**  
Simulate a press of the Release Ladder key (used to get off a ladder).

**Simulate release platform key press**  
Simulate a press of the release platform key (used when grabbing a platform ledge).

**Simulate right key press**  
Simulate a press of the right key.

**Simulate up key press**  
Simulate a press of the up key (used when on a ladder).

### Behavior conditions

**Acceleration**  
Compare the horizontal acceleration of the object.

**Can grab platforms**  
Check if the object can grab the platforms.

**Can jump**  
Check if the object can jump.

**Current falling speed**  
Compare the current falling speed of the object. Its value is always positive.

**Current jump speed**  
Compare the current jump speed of the object. Its value is always positive.

**Current horizontal speed**  
Compare the current horizontal speed of the object. The object moves to the left with negative values and to the right with positive ones

**Deceleration**  
Compare the horizontal deceleration of the object.

**Gravity**  
Compare the gravity applied on the object.

**Is falling**  
Check if the object is falling.  
Note that the object can be flagged as jumping and falling at the same time: at the end of a jump, the fall speed becomes higher than the jump speed.

**Is grabbing platform ledge**  
Check if the object is grabbing a platform ledge.

**Is jumping**  
Check if the object is jumping.

**Is on floor**  
Check if the object is on a platform.

**Is on ladder**  
Check if the object is on a ladder.

**Jump speed**  
Compare the jump speed of the object.Its value is always positive.

**Jump sustain time**  
Compare the jump sustain time of the object.This is the time during which keeping the jump button held allow the initial jump speed to be maintained.

**Ladder climbing speed**  
Compare the ladder climbing speed (in pixels per second).

**Maximum falling speed**  
Compare the maximum falling speed of the object.

**Maximum horizontal speed**  
Compare the maximum horizontal speed of the object.

**Is moving**  
Check if the object is moving (whether it is on the floor or in the air).

**Control pressed or simulated**  
A control was applied from a default control or simulated by an action.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|

| `Object.PlatformerObject::Acceleration()` | Return the horizontal acceleration of the object (in pixels per second per second). ||
| `Object.PlatformerObject::CurrentFallSpeed()` | Return the current fall speed of the object (in pixels per second). Its value is always positive. ||
| `Object.PlatformerObject::CurrentJumpSpeed()` | Current jump speed ||
| `Object.PlatformerObject::CurrentSpeed()` | Return the current horizontal speed of the object (in pixels per second). The object moves to the left with negative values and to the right with positive ones ||
| `Object.PlatformerObject::Deceleration()` | Return the horizontal deceleration of the object (in pixels per second per second). ||
| `Object.PlatformerObject::Gravity()` | Return the gravity applied on the object (in pixels per second per second). ||
| `Object.PlatformerObject::JumpSpeed()` | Return the jump speed of the object (in pixels per second). Its value is always positive. ||
| `Object.PlatformerObject::JumpSustainTime()` | Return the jump sustain time of the object (in seconds).This is the time during which keeping the jump button held allow the initial jump speed to be maintained. ||
| `Object.PlatformerObject::LadderClimbingSpeed()` | Return the ladder climbing speed of the object (in pixels per second). ||
| `Object.PlatformerObject::MaxFallingSpeed()` | Return the maximum falling speed of the object (in pixels per second). ||
| `Object.PlatformerObject::MaxSpeed()` | Return the maximum horizontal speed of the object (in pixels per second). ||

---
*This page is an auto-generated reference page about the **Platform behavior** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).