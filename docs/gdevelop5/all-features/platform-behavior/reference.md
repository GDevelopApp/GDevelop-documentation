# Platform behavior Reference

The platformer engine allows to create controllable objects that can run and jump on other objects that are marked as platforms. It supports various features commonly found in platformers: grabbing the edge of a platform, sustaining the jump while a key is held, customizable gravity... It can be used for the player, but also for other objects moving on platforms. In this case though, it's recommended to first check if there is a simpler behavior that could be used. Default controls for keyboards are included. For touch or gamepads, use the "Multitouch Joystick" objects and the associated "mapper" behaviors. [Read more explanations about it.](/gdevelop5/behaviors/platformer)

## Conditions

**Character is on given platform**  
Check if a platformer character is on a given platform.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (👾 Object): Platforms

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PlatformBehavior::IsObjectOnGivenFloor`.



## Platform 

Flag objects as being platforms which characters can run on. 

### Behavior actions

**Platform type**  
Change the platform type of the object: Platform, Jump-Through, or Ladder.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 String): Platform type (one of: "Platform", "Jumpthru", "Ladder")

    > Technical note: this action internal type (in GDevelop JSON) is `PlatformBehavior::ChangePlatformType`.

_No expressions for this behavior._


## Platformer character 

Jump and run on platforms. 

### Behavior actions

**Acceleration**  
Change the horizontal acceleration of an object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Acceleration (in pixels per second per second)

    > Technical note: this action internal type (in GDevelop JSON) is `PlatformBehavior::Acceleration`.

**Platform grabbing**  
Enable (or disable) the ability of the object to grab platforms when falling near to one.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): Can grab platforms

    > Technical note: this action internal type (in GDevelop JSON) is `PlatformBehavior::CanGrabPlatforms`.

**Deceleration**  
Change the horizontal deceleration of an object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Deceleration (in pixels per second per second)

    > Technical note: this action internal type (in GDevelop JSON) is `PlatformBehavior::Deceleration`.

**Gravity**  
Change the gravity applied on an object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Gravity (in pixels per second per second)

    > Technical note: this action internal type (in GDevelop JSON) is `PlatformBehavior::Gravity`.

**Ignore default controls**  
De/activate the use of default controls.  
If deactivated, use the simulated actions to move the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): Ignore controls

    > Technical note: this action internal type (in GDevelop JSON) is `PlatformBehavior::IgnoreDefaultControls`.

**Jump speed**  
Change the jump speed of an object. Its value is always positive.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Speed (in pixels per second)

    > Technical note: this action internal type (in GDevelop JSON) is `PlatformBehavior::JumpSpeed`.

**Jump sustain time**  
Change the jump sustain time of an object.This is the time during which keeping the jump button held allow the initial jump speed to be maintained.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Duration (in seconds)

    > Technical note: this action internal type (in GDevelop JSON) is `PlatformBehavior::JumpSustainTime`.

**Ladder climbing speed**  
Change the ladder climbing speed.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Speed (in pixels per second)

    > Technical note: this action internal type (in GDevelop JSON) is `PlatformBehavior::LadderClimbingSpeed`.

**Maximum falling speed**  
Change the maximum falling speed of an object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Max speed (in pixels per second)
    - Parameter 4 (❓ Yes or No): If jumping, try to preserve the current speed in the air

    > Technical note: this action internal type (in GDevelop JSON) is `PlatformBehavior::MaxFallingSpeed`.

**Maximum horizontal speed**  
Change the maximum horizontal speed of an object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Max speed (in pixels per second)

    > Technical note: this action internal type (in GDevelop JSON) is `PlatformBehavior::MaxSpeed`.

**Abort jump**  
Abort the current jump and stop the object vertically. This action doesn't have any effect when the character is not jumping.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this action internal type (in GDevelop JSON) is `PlatformBehavior::PlatformerObjectBehavior::AbortJump`.

**Forbid jumping again in the air**  
This revokes the effect of "Allow jumping again". The object is made unable to jump while in mid air. This has no effect if the object is not in the air.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this action internal type (in GDevelop JSON) is `PlatformBehavior::PlatformerObjectBehavior::SetCanNotAirJump`.

**Current falling speed**  
Change the current falling speed of the object. This action doesn't have any effect when the character is not falling or is in the first phase of a jump.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Speed (in pixels per second)

    > Technical note: this action internal type (in GDevelop JSON) is `PlatformBehavior::PlatformerObjectBehavior::SetCurrentFallSpeed`.

**Current horizontal speed**  
Change the current horizontal speed of the object. The object moves to the left with negative values and to the right with positive ones

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Speed (in pixels per second)

    > Technical note: this action internal type (in GDevelop JSON) is `PlatformBehavior::PlatformerObjectBehavior::SetCurrentSpeed`.

**Allow jumping again**  
When this action is executed, the object is able to jump again, even if it is in the air: this can be useful to allow a double jump for example. This is not a permanent effect: you must call again this action everytime you want to allow the object to jump (apart if it's on the floor).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this action internal type (in GDevelop JSON) is `PlatformBehavior::SetCanJump`.

**Simulate control**  
Simulate a press of a key.  
Valid keys are Left, Right, Jump, Ladder, Release Ladder, Up, Down.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 String): Key (one of: "Left", "Right", "Jump", "Ladder", "Release Ladder", "Up", "Down")

    > Technical note: this action internal type (in GDevelop JSON) is `PlatformBehavior::SimulateControl`.

**Simulate down key press**  
Simulate a press of the down key (used when on a ladder).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this action internal type (in GDevelop JSON) is `PlatformBehavior::SimulateDownKey`.

**Simulate jump key press**  
Simulate a press of the jump key.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this action internal type (in GDevelop JSON) is `PlatformBehavior::SimulateJumpKey`.

**Simulate ladder key press**  
Simulate a press of the ladder key (used to grab a ladder).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this action internal type (in GDevelop JSON) is `PlatformBehavior::SimulateLadderKey`.

**Simulate left key press**  
Simulate a press of the left key.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this action internal type (in GDevelop JSON) is `PlatformBehavior::SimulateLeftKey`.

**Simulate release ladder key press**  
Simulate a press of the Release Ladder key (used to get off a ladder).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this action internal type (in GDevelop JSON) is `PlatformBehavior::SimulateReleaseLadderKey`.

**Simulate release platform key press**  
Simulate a press of the release platform key (used when grabbing a platform ledge).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this action internal type (in GDevelop JSON) is `PlatformBehavior::SimulateReleasePlatformKey`.

**Simulate right key press**  
Simulate a press of the right key.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this action internal type (in GDevelop JSON) is `PlatformBehavior::SimulateRightKey`.

**Simulate up key press**  
Simulate a press of the up key (used when on a ladder).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this action internal type (in GDevelop JSON) is `PlatformBehavior::SimulateUpKey`.

### Behavior conditions

**Acceleration**  
Compare the horizontal acceleration of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Acceleration to compare to (in pixels per second per second)

    > Technical note: this condition internal type (in GDevelop JSON) is `PlatformBehavior::Acceleration`.

**Can grab platforms**  
Check if the object can grab the platforms.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this condition internal type (in GDevelop JSON) is `PlatformBehavior::CanGrabPlatforms`.

**Can jump**  
Check if the object can jump.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this condition internal type (in GDevelop JSON) is `PlatformBehavior::CanJump`.

**Current falling speed**  
Compare the current falling speed of the object. Its value is always positive.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Speed to compare to (in pixels per second)

    > Technical note: this condition internal type (in GDevelop JSON) is `PlatformBehavior::CurrentFallSpeed`.

**Current jump speed**  
Compare the current jump speed of the object. Its value is always positive.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Speed to compare to (in pixels per second)

    > Technical note: this condition internal type (in GDevelop JSON) is `PlatformBehavior::CurrentJumpSpeed`.

**Current horizontal speed**  
Compare the current horizontal speed of the object. The object moves to the left with negative values and to the right with positive ones

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Speed to compare to (in pixels per second)

    > Technical note: this condition internal type (in GDevelop JSON) is `PlatformBehavior::CurrentSpeed`.

**Deceleration**  
Compare the horizontal deceleration of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Deceleration to compare to (in pixels per second per second)

    > Technical note: this condition internal type (in GDevelop JSON) is `PlatformBehavior::Deceleration`.

**Gravity**  
Compare the gravity applied on the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Gravity to compare to (in pixels per second per second)

    > Technical note: this condition internal type (in GDevelop JSON) is `PlatformBehavior::Gravity`.

**Is falling**  
Check if the object is falling.  
Note that the object can be flagged as jumping and falling at the same time: at the end of a jump, the fall speed becomes higher than the jump speed.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this condition internal type (in GDevelop JSON) is `PlatformBehavior::IsFalling`.

**Is grabbing platform ledge**  
Check if the object is grabbing a platform ledge.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this condition internal type (in GDevelop JSON) is `PlatformBehavior::IsGrabbingPlatform`.

**Is jumping**  
Check if the object is jumping.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this condition internal type (in GDevelop JSON) is `PlatformBehavior::IsJumping`.

**Is on floor**  
Check if the object is on a platform.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this condition internal type (in GDevelop JSON) is `PlatformBehavior::IsOnFloor`.

**Is on ladder**  
Check if the object is on a ladder.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this condition internal type (in GDevelop JSON) is `PlatformBehavior::IsOnLadder`.

**Jump speed**  
Compare the jump speed of the object.Its value is always positive.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Speed to compare to (in pixels per second)

    > Technical note: this condition internal type (in GDevelop JSON) is `PlatformBehavior::JumpSpeed`.

**Jump sustain time**  
Compare the jump sustain time of the object.This is the time during which keeping the jump button held allow the initial jump speed to be maintained.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Duration to compare to (in seconds)

    > Technical note: this condition internal type (in GDevelop JSON) is `PlatformBehavior::JumpSustainTime`.

**Ladder climbing speed**  
Compare the ladder climbing speed (in pixels per second).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Speed to compare to (in pixels per second)

    > Technical note: this condition internal type (in GDevelop JSON) is `PlatformBehavior::LadderClimbingSpeed`.

**Maximum falling speed**  
Compare the maximum falling speed of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Max speed to compare to (in pixels per second)

    > Technical note: this condition internal type (in GDevelop JSON) is `PlatformBehavior::MaxFallingSpeed`.

**Maximum horizontal speed**  
Compare the maximum horizontal speed of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Max speed to compare to (in pixels per second)

    > Technical note: this condition internal type (in GDevelop JSON) is `PlatformBehavior::MaxSpeed`.

**Is moving**  
Check if the object is moving (whether it is on the floor or in the air).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this condition internal type (in GDevelop JSON) is `PlatformBehavior::PlatformerObjectBehavior::IsMovingEvenALittle`.

**Control pressed or simulated**  
A control was applied from a default control or simulated by an action.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 String): Key (one of: "Left", "Right", "Jump", "Ladder", "Release Ladder", "Up", "Down")

    > Technical note: this condition internal type (in GDevelop JSON) is `PlatformBehavior::PlatformerObjectBehavior::IsUsingControl`.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.PlatformerObject::Acceleration()` | Return the horizontal acceleration of the object (in pixels per second per second). ||
| `Object.PlatformerObject::CurrentFallSpeed()` | Return the current fall speed of the object (in pixels per second). Its value is always positive. ||
| `Object.PlatformerObject::CurrentJumpSpeed()` | Return the current jump speed of the object (in pixels per second). Its value is always positive. ||
| `Object.PlatformerObject::CurrentSpeed()` | Return the current horizontal speed of the object (in pixels per second). The object moves to the left with negative values and to the right with positive ones ||
| `Object.PlatformerObject::Deceleration()` | Return the horizontal deceleration of the object (in pixels per second per second). ||
| `Object.PlatformerObject::Gravity()` | Return the gravity applied on the object (in pixels per second per second). ||
| `Object.PlatformerObject::JumpSpeed()` | Return the jump speed of the object (in pixels per second). Its value is always positive. ||
| `Object.PlatformerObject::JumpSustainTime()` | Return the jump sustain time of the object (in seconds).This is the time during which keeping the jump button held allow the initial jump speed to be maintained. ||
| `Object.PlatformerObject::LadderClimbingSpeed()` | Return the ladder climbing speed of the object (in pixels per second). ||
| `Object.PlatformerObject::MaxFallingSpeed()` | Return the maximum falling speed of the object (in pixels per second). ||
| `Object.PlatformerObject::MaxSpeed()` | Return the maximum horizontal speed of the object (in pixels per second). ||



---

The Platform behavior extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **Platform behavior** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).