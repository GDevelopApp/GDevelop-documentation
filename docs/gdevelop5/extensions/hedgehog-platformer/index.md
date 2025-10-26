# Hedgehog platformer

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/Glyphster Pack/Master/SVG/Space/9ea467d2404c1736b87d763c884e9b9dfb13a401360f69c6a17afc8f5d583d58_Space_warp_galaxy.svg" class="extension-icon"></img>
Jump and run on platforms at 360°.

**Authors and contributors** to this experimental extension: [Kennoir](https://gd.games/Kennoir), [UnknownUney](https://gd.games/UnknownUney), [D8H](https://gd.games/D8H).

!!! warning
    This is an extension made by a community member and it only got through a
    light review by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of fully reviewed extensions.

---

A platformer engine for Sonic-like games.

A small demo shows how to use this extension ([open the project online](https://editor.gdevelop.io/?project=example://360°-platformer)).

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Conditions

**Character is on given platform**  
Check if a platformer character is on a given platform.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Character
    - Parameter 2 (🧩 Behavior): Hedgehog platformer character
    - Parameter 3 (👾 Object): Platform
    - Parameter 4 (🧩 Behavior): Hedgehog platform

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `HedgehogPlatformer::IsCharacterOnPlatform`.

**Character is pushing platform**  
Check if a platformer character is pushing against a platform.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Character
    - Parameter 2 (🧩 Behavior): Hedgehog platformer character
    - Parameter 3 (👾 Object): Platform
    - Parameter 4 (🧩 Behavior): Hedgehog platform

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `HedgehogPlatformer::IsCharacterPushingPlatform`.



## Hedgehog platformer character 

Jump and run on platforms at 360°. 

### Behavior actions

**Follow current platform**  
Follow the current platform.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `HedgehogPlatformer::HedgehogCharacter::FollowCurrentPlatform`.

**Movement angle**  
Check if the movement angle is around a given direction.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Angle (in degrees)
    - Parameter 3 (🔢 Number): Tolerance (in degrees)

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `HedgehogPlatformer::HedgehogCharacter::IsMovementAngleAround`.

**Air drag**  
Change the air drag of the object. The air drag reduce the speed on X axis.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `HedgehogPlatformer::HedgehogCharacter::SetAirDrag`.

**Air drag min speed Y**  
Change the air drag min speed Y of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `HedgehogPlatformer::HedgehogCharacter::SetAirDragMinSpeedY`.

**Airborne acceleration**  
Change the acceleration when the object is in the air.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `HedgehogPlatformer::HedgehogCharacter::SetAirborneAcceleration`.

**Allow jumping again**  
When this action is executed, the object is able to jump again, even if it is in the air: this can be useful to allow a double jump for example. This is not a permanent effect: you must call again this action every time you want to allow the object to jump (apart if it's on the floor).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `HedgehogPlatformer::HedgehogCharacter::SetCanJump`.

**Forbid jumping again in the air**  
This revokes the effect of "Allow jumping again". The object is made unable to jump while in mid air. This has no effect if the object is not in the air.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `HedgehogPlatformer::HedgehogCharacter::SetCanNotAirJump`.

**Collision layer**  
Change the collision layer of the object, only interacts with hedgehog platforms of the same layer. 

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `HedgehogPlatformer::HedgehogCharacter::SetCollisionLayer`.

**Deceleration**  
Change the deceleration of the object when changing of direction on the ground.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `HedgehogPlatformer::HedgehogCharacter::SetDeceleration`.

**Downwards slope factor**  
Change the acceleration when running down a slope. The actual deceleration applied to the character depends on how steep the slope is.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `HedgehogPlatformer::HedgehogCharacter::SetDownSlopeFactor`.

**Friction**  
Change the friction of the object. The friction is a deceleration when there is no input.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `HedgehogPlatformer::HedgehogCharacter::SetFriction`.

**Gravity**  
Change the gravity of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `HedgehogPlatformer::HedgehogCharacter::SetGravity`.

**Grounded acceleration**  
Change the acceleration when the object is on the ground.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `HedgehogPlatformer::HedgehogCharacter::SetGroundedAcceleration`.

**Jump height reducer**  
Change the Jump height reducer factor of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `HedgehogPlatformer::HedgehogCharacter::SetJumpReducer`.

**Jump speed**  
Change the jump speed of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `HedgehogPlatformer::HedgehogCharacter::SetJumpSpeed`.

**Max speed**  
Change the max speed of the object while grounded.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `HedgehogPlatformer::HedgehogCharacter::SetMaxSpeed`.

**Running lock remaining duration**  
Change the duration during which the character can't run left or right.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `HedgehogPlatformer::HedgehogCharacter::SetRunningLockRemainingDuration`.

**Rotate the object**  
Enable or disable rotation of the character when moving on the ground of falling from the ceilling.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): ShouldRotate

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `HedgehogPlatformer::HedgehogCharacter::SetShouldRotate`.

**Speed**  
Change the current speed of the object. The speed can be negative when the object is on the ground.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `HedgehogPlatformer::HedgehogCharacter::SetSpeed`.

**Horizontal speed**  
Change the current horizontal speed of the object. The object is automatically set in airborne state.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `HedgehogPlatformer::HedgehogCharacter::SetSpeedX`.

**Vertical speed**  
Change the current vertical speed of the object. The object is automatically set in airborne state.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `HedgehogPlatformer::HedgehogCharacter::SetSpeedY`.

**Stand max angle**  
Change the stand max angle of the object. Allow characters to fully stop on not too steep floors.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `HedgehogPlatformer::HedgehogCharacter::SetStandMaxAngle`.

**Upwards slope factor**  
Change the deceleration factor when running up a slope. The actual deceleration applied to the character depends on how steep the slope is.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `HedgehogPlatformer::HedgehogCharacter::SetUpSlopeFactor`.

**Simulate jump key press**  
Simulate a press of the jump key.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `HedgehogPlatformer::HedgehogCharacter::SimulateJumpKey`.

**Simulate left key press**  
Simulate a press of the left key.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `HedgehogPlatformer::HedgehogCharacter::SimulateLeftKey`.

**Simulate right key press**  
Simulate a press of the right key.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `HedgehogPlatformer::HedgehogCharacter::SimulateRightKey`.

### Behavior conditions

**Air drag**  
Compare the air drag of the object. The air drag reduce the speed on X axis.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `HedgehogPlatformer::HedgehogCharacter::AirDrag`.

**Air drag min speed Y**  
Compare the air drag min speed Y of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `HedgehogPlatformer::HedgehogCharacter::AirDragMinSpeedY`.

**Airborne acceleration**  
Compare the acceleration when the object is in the air.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `HedgehogPlatformer::HedgehogCharacter::AirborneAcceleration`.

**Can jump**  
Check if the object can jump.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `HedgehogPlatformer::HedgehogCharacter::CanJump`.

**Collision layer**  
Compare the collision layer of the object, only interacts with hedgehog platforms of the same layer. .

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `HedgehogPlatformer::HedgehogCharacter::CollisionLayer`.

**Deceleration**  
Compare the deceleration of the object when changing of direction on the ground.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `HedgehogPlatformer::HedgehogCharacter::Deceleration`.

**Downwards slope factor**  
Compare the acceleration when running down a slope. The actual deceleration applied to the character depends on how steep the slope is.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `HedgehogPlatformer::HedgehogCharacter::DownSlopeFactor`.

**Friction**  
Compare the friction of the object. The friction is a deceleration when there is no input.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `HedgehogPlatformer::HedgehogCharacter::Friction`.

**Gravity**  
Compare the gravity of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `HedgehogPlatformer::HedgehogCharacter::Gravity`.

**Grounded acceleration**  
Compare the acceleration when the object is on the ground.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `HedgehogPlatformer::HedgehogCharacter::GroundedAcceleration`.

**Is facing forward**  
Check if the character is facing forward.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `HedgehogPlatformer::HedgehogCharacter::IsFacingForward`.

**Is jumping**  
Check if the object is in the air because of a jump.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `HedgehogPlatformer::HedgehogCharacter::IsJumping`.

**Is moving**  
Checks if the object is moving.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `HedgehogPlatformer::HedgehogCharacter::IsMoving`.

**Is on floor**  
Check if the object is on a platform.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `HedgehogPlatformer::HedgehogCharacter::IsOnFloor`.

**Is on left ledge**  
Check if the object is on the left ledge of a platform.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `HedgehogPlatformer::HedgehogCharacter::IsOnLeftLedge`.

**Is on right ledge**  
Check if the object is on the right ledge of a platform.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `HedgehogPlatformer::HedgehogCharacter::IsOnRightLedge`.

**Is pushing**  
Check if the object is pushing againgst a wall.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `HedgehogPlatformer::HedgehogCharacter::IsPushing`.

**Is slipping**  
Check if the object is slipping.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `HedgehogPlatformer::HedgehogCharacter::IsSlipping`.

**Control pressed or simulated**  
A control was applied from a default control or simulated by an action.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 String): Key to check (one of: "Left", "Right", "Jump")

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `HedgehogPlatformer::HedgehogCharacter::IsUsingControl`.

**Jump height reducer**  
Compare the Jump height reducer factor of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `HedgehogPlatformer::HedgehogCharacter::JumpReducer`.

**Jump speed**  
Compare the jump speed of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `HedgehogPlatformer::HedgehogCharacter::JumpSpeed`.

**Max speed**  
Compare the max speed of the object while grounded.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `HedgehogPlatformer::HedgehogCharacter::MaxSpeed`.

**Running lock remaining duration**  
Compare the duration during which the character can't run left or right.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `HedgehogPlatformer::HedgehogCharacter::RunningLockRemainingDuration`.

**Rotate the object**  
Check if the character is rotated while moving on the ground of falling from the ceilling.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `HedgehogPlatformer::HedgehogCharacter::ShouldRotate`.

**Speed**  
Compare the current speed of the object. The speed can be negative when the object is on the ground.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `HedgehogPlatformer::HedgehogCharacter::Speed`.

**Horizontal speed**  
Compare the current horizontal speed of the object. The object is automatically set in airborne state.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `HedgehogPlatformer::HedgehogCharacter::SpeedX`.

**Vertical speed**  
Compare the current vertical speed of the object. The object is automatically set in airborne state.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `HedgehogPlatformer::HedgehogCharacter::SpeedY`.

**Stand max angle**  
Compare the stand max angle of the object. Allow characters to fully stop on not too steep floors.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `HedgehogPlatformer::HedgehogCharacter::StandMaxAngle`.

**Upwards slope factor**  
Compare the deceleration factor when running up a slope. The actual deceleration applied to the character depends on how steep the slope is.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `HedgehogPlatformer::HedgehogCharacter::UpSlopeFactor`.

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

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `HedgehogPlatformer::HedgehogCharacterRolling::SimulateRollKey`.

**Simulate spindash key press**  
Simulate a press of the spindash key.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `HedgehogPlatformer::HedgehogCharacterRolling::SimulateSpindashKey`.

**Simulate spindash or jump key press**  
Simulate a press of the Spindash key when the character is crouching or the jump key otherwise.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `HedgehogPlatformer::HedgehogCharacterRolling::SimulateSpindashOrJumpKey`.

### Behavior conditions

**Started a spindash**  
Check if the character has just started a spindash.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `HedgehogPlatformer::HedgehogCharacterRolling::HasJustStartedSpinDash`.

**Is charging a spindash**  
Check if the character is charging a spindash.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `HedgehogPlatformer::HedgehogCharacterRolling::IsCharging`.

**Is crouching**  
Check if the character is crouching.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `HedgehogPlatformer::HedgehogCharacterRolling::IsCrouching`.

**Is rolling**  
Check if the character is rolling.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `HedgehogPlatformer::HedgehogCharacterRolling::IsRolling`.

_No expressions for this behavior._


## Hedgehog platform 

Flag objects as being platforms which characters can run on. 

_No expressions for this behavior._


## Hedgehog spring 

Push hedgehog characters. 

### Behavior actions

**Push character**  
Make the spring push the character.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (👾 Object): Character
    - Parameter 3 (🧩 Behavior): Hedgehog platformer character

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `HedgehogPlatformer::Spring::Push`.

### Behavior conditions

**Can push**  
Check if the spring can push the character.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (👾 Object): Character
    - Parameter 3 (🧩 Behavior): Hedgehog platformer character

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `HedgehogPlatformer::Spring::CanPush`.

_No expressions for this behavior._



---

*This page is an auto-generated reference page about the **Hedgehog platformer** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).