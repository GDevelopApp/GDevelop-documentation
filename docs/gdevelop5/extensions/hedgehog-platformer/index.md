# Hedgehog platformer

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/Glyphster Pack/Master/SVG/Space/9ea467d2404c1736b87d763c884e9b9dfb13a401360f69c6a17afc8f5d583d58_Space_warp_galaxy.svg" class="extension-icon"></img>
Jump and run on platforms at 360°.

**Authors and contributors** to this experimental extension: [Kennoir](https://gd.games/Kennoir), [SilliFloof](https://gd.games/SilliFloof), [D8H](https://gd.games/D8H).

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

### Behavior properties

- **Air acceleration** (🔢 Number, Acceleration). Default value is `1012`.
- **Air drag** (🔢 Number, Dimensionless). The air drag reduce the speed on X axis. Default value is `0`.
- **Air drag min speed Y** (🔢 Number, Speed). Default value is `-720`.
- **Ceil bounce factor (-1 to 1)** (🔢 Number). 0: set the vertical speed to 0, 1: keep the speed, -1: bounce. Default value is `0`.
- **Deceleration** (🔢 Number, Acceleration). When changing of direction on the ground. Default value is `5400`.
- **Downwards slope factor** (🔢 Number, Acceleration). Speed gain when moving downwards. Default value is `1350`.
- **Rotation speed when falling** (🔢 Number, Angular speed). Default value is `168.75`.
- **Max floor magnet distance (in character height per seconds)** (🔢 Number). At high speeds. Default value is `13`.
- **Min floor magnet distance (in character height per seconds)** (🔢 Number). At low speeds. Default value is `3`.
- **Friction** (🔢 Number, Acceleration). When there is no input. Default value is `506.25`.
- **Gravity** (🔢 Number, Acceleration). Default value is `2362.5`.
- **Ground acceleration** (🔢 Number, Acceleration). Default value is `506.25`.
- **Default controls** (🔘 Boolean). Default value is `true`.
- **Jump height reducer (0 to 1)** (🔢 Number). Vertical speed is multiplied by this value when the jump key is released during a jump. Default value is `0.615`.
- **Jump speed** (🔢 Number, Speed). Default value is `1170`.
- **Max falling speed** (🔢 Number, Speed). Default value is `2880`.
- **Max speed** (🔢 Number, Speed). The maximum speed obtained with input. Default value is `720`.
- **Rotate** (🔘 Boolean). Default value is `true`.
- **Slip duration** (🔢 Number, Duration). Time needed for the platformer to regain control after slipping down a slope. Default value is `0.5`.
- **Min angle for ground slipping** (🔢 Number, Angle). Default value is `35`.
- **Stand max angle** (🔢 Number, Angle). Allow characters to fully stop on not too steep floors. Default value is `24`.
- **Max sub-step number** (🔢 Number, Dimensionless). Default value is `3`.
- **Sub-step max time delta** (🔢 Number, Duration). Default value is `0.02`.
- **Min angle for ground unattaching** (🔢 Number, Angle). Default value is `68`.
- **Min speed for ground unattach** (🔢 Number, Distance). Default value is `450`.
- **Upwards slope factor** (🔢 Number, Acceleration). Speed loss when moving upwards. Default value is `1350`.

??? quote "See internal technical details"


    - **Air acceleration** is stored as `AirAcceleration` (Number). Unit is PixelAcceleration. Default value is `1012`.
    - **Air drag** is stored as `AirDrag` (Number). Unit is Dimensionless. Default value is `0`.
    - **Air drag min speed Y** is stored as `AirDragMinSpeedY` (Number). Unit is PixelSpeed. Default value is `-720`.
    - **Ceil bounce factor (-1 to 1)** is stored as `CeilBounceFactor` (Number). Default value is `0`.
    - **Deceleration** is stored as `Deceleration` (Number). Unit is PixelAcceleration. Default value is `5400`.
    - **Downwards slope factor** is stored as `DownSlopeFactor` (Number). Unit is PixelAcceleration. Default value is `1350`.
    - **Rotation speed when falling** is stored as `FallingRotationSpeed` (Number). Unit is AngularSpeed. Default value is `168.75`.
    - **Max floor magnet distance (in character height per seconds)** is stored as `FloorMagnetDistanceMax` (Number). Default value is `13`.
    - **Min floor magnet distance (in character height per seconds)** is stored as `FloorMagnetDistanceMin` (Number). Default value is `3`.
    - **Friction** is stored as `Friction` (Number). Unit is PixelAcceleration. Default value is `506.25`.
    - **Gravity** is stored as `Gravity` (Number). Unit is PixelAcceleration. Default value is `2362.5`.
    - **Ground acceleration** is stored as `GroundAcceleration` (Number). Unit is PixelAcceleration. Default value is `506.25`.
    - **Default controls** is stored as `IsDefaultControlsEnabled` (Boolean). Default value is `true`.
    - **Jump height reducer (0 to 1)** is stored as `JumpHeightReducer` (Number). Default value is `0.615`.
    - **Jump speed** is stored as `JumpSpeed` (Number). Unit is PixelSpeed. Default value is `1170`.
    - **Max falling speed** is stored as `MaxFallingSpeed` (Number). Unit is PixelSpeed. Default value is `2880`.
    - **Max speed** is stored as `MaxSpeed` (Number). Unit is PixelSpeed. Default value is `720`.
    - **Rotate** is stored as `ShouldRotate` (Boolean). Default value is `true`.
    - **Slip duration** is stored as `SlipDuration` (Number). Unit is Second. Default value is `0.5`.
    - **Min angle for ground slipping** is stored as `SlipMinAngle` (Number). Unit is DegreeAngle. Default value is `35`.
    - **Stand max angle** is stored as `StandMaxAngle` (Number). Unit is DegreeAngle. Default value is `24`.
    - **Max sub-step number** is stored as `SubstepCountMax` (Number). Unit is Dimensionless. Default value is `3`.
    - **Sub-step max time delta** is stored as `SubstepTimeDeltaMax` (Number). Unit is Second. Default value is `0.02`.
    - **Min angle for ground unattaching** is stored as `UnattachMinAngle` (Number). Unit is DegreeAngle. Default value is `68`.
    - **Min speed for ground unattach** is stored as `UnattachMinSpeed` (Number). Unit is Pixel. Default value is `450`.
    - **Upwards slope factor** is stored as `UpSlopeFactor` (Number). Unit is PixelAcceleration. Default value is `1350`.

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

### Behavior properties

- **Balance on ledge** (🔤 String). Default value is `BalanceOnLedge`.
- **Brake** (🔤 String). Default value is `Brake`.
- **Brake animation min speed** (🔢 Number, Speed). Default value is `720`.
- **Fall** (🔤 String). Default value is `Fall`.
- **Idle** (🔤 String). Default value is `Idle`.
- **Jump** (🔤 String). Default value is `Jump`.
- **Jump rotation speed** (🔢 Number, Angular speed). Default value is `360`.
- **Push** (🔤 String). Default value is `Push`.
- **Run** (🔤 String). Default value is `Run`.
- **Run animation min speed** (🔢 Number, Speed). Default value is `1080`.
- **Walk** (🔤 String). Default value is `Walk`.

??? quote "See internal technical details"


    > This behavior must be used on an object also having a behavior with type "AnimatableCapability::AnimatableBehavior". This is stored on property `Animation`.

    - **Balance on ledge** is stored as `BalanceOnLedgeAnimationName` (String). Default value is `BalanceOnLedge`.
    - **Brake** is stored as `BrakeAnimationName` (String). Default value is `Brake`.
    - **Brake animation min speed** is stored as `BrakeMinSpeed` (Number). Unit is PixelSpeed. Default value is `720`.
    - **Fall** is stored as `FallAnimationName` (String). Default value is `Fall`.
    > This behavior must be used on an object also having a behavior with type "FlippableCapability::FlippableBehavior". This is stored on property `Flippable`.

    > This behavior must be used on an object also having a behavior with type "HedgehogPlatformer::HedgehogCharacter". This is stored on property `HedgehogCharacter`.

    - **Idle** is stored as `IdleAnimationName` (String). Default value is `Idle`.
    - **Jump** is stored as `JumpAnimationName` (String). Default value is `Jump`.
    - **Jump rotation speed** is stored as `JumpRotationSpeed` (Number). Unit is AngularSpeed. Default value is `360`.
    - **Push** is stored as `PushAnimationName` (String). Default value is `Push`.
    - **Run** is stored as `RunAnimationName` (String). Default value is `Run`.
    - **Run animation min speed** is stored as `RunMinSpeed` (Number). Unit is PixelSpeed. Default value is `1080`.
    - **Walk** is stored as `WalkAnimationName` (String). Default value is `Walk`.

_No expressions for this behavior._


## Hedgehog character rolling 

Toggle rolling mode. 

### Behavior properties

- **Deceleration** (🔢 Number, Acceleration). When changing of direction on the ground. Default value is `1350`.
- **Downwards slope factor** (🔢 Number, Acceleration). Speed gain when moving downwards. Default value is `843.75`.
- **Friction** (🔢 Number, Acceleration). When there is no input. Default value is `253.125`.
- **Max speed** (🔢 Number, Speed). Default value is `2880`.
- **Min speed** (🔢 Number, Speed). The minimal speed to be able to start rolling. Default value is `180`.
- **Spindash speed** (🔢 Number, Speed). Default value is `1440`.
- **Upwards slope factor** (🔢 Number, Acceleration). Speed loss when moving upwards. Default value is `3375`.

??? quote "See internal technical details"


    - **Deceleration** is stored as `Deceleration` (Number). Unit is PixelAcceleration. Default value is `1350`.
    - **Downwards slope factor** is stored as `DownSlopeFactor` (Number). Unit is PixelAcceleration. Default value is `843.75`.
    - **Friction** is stored as `Friction` (Number). Unit is PixelAcceleration. Default value is `253.125`.
    > This behavior must be used on an object also having a behavior with type "HedgehogPlatformer::HedgehogCharacter". This is stored on property `HedgehogCharacter`.

    - **Max speed** is stored as `MaxSpeed` (Number). Unit is PixelSpeed. Default value is `2880`.
    - **Min speed** is stored as `MinSpeed` (Number). Unit is PixelSpeed. Default value is `180`.
    - **Spindash speed** is stored as `SpinDashSpeed` (Number). Unit is PixelSpeed. Default value is `1440`.
    - **Upwards slope factor** is stored as `UpSlopeFactor` (Number). Unit is PixelAcceleration. Default value is `3375`.

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

### Behavior properties

- **Collision layer** (🔢 Number, Dimensionless). Only interacts with characters of the same layer. Default value is `0`.
- **Only for grounded characters** (🔘 Boolean). Default value is `false`.
- **Type** (Choice, one of: "Platform", "Jumpthru", "Angle lock marker", "Left-right layer toggle marker", "Top-bottom layer toggle marker"). Default value is `Platform`.
- **Rotate characters** (🔘 Boolean). Default value is `true`.
- **Snap horizontally** (🔘 Boolean). Snap movement angle to 0° or 180°. Default value is `true`.
- **Snap vertically** (🔘 Boolean). Snap movement angle to 90° or 270°. Default value is `true`.
- **Targeted layer** (🔢 Number, Dimensionless). The layer given to player on the right or bottom. The marker layer is used for the other side. Default value is `1`.

??? quote "See internal technical details"


    - **Collision layer** is stored as `CollisionLayer` (Number). Unit is Dimensionless. Default value is `0`.
    - **Only for grounded characters** is stored as `IsRequiringGrounded` (Boolean). Default value is `false`.
    - **Type** is stored as `PlatformType` (Choice). Default value is `Platform`.
    - **Rotate characters** is stored as `ShouldRotateCharacters` (Boolean). Default value is `true`.
    - **Snap horizontally** is stored as `ShouldSnapAngleHorizontally` (Boolean). Default value is `true`.
    - **Snap vertically** is stored as `ShouldSnapAngleVertically` (Boolean). Default value is `true`.
    - **Targeted layer** is stored as `TargetedCollisionLayer` (Number). Unit is Dimensionless. Default value is `1`.

_No expressions for this behavior._


## Hedgehog spring 

Push hedgehog characters. 

### Behavior properties

- **Character running lock duration** (🔢 Number, Duration). Default value is `0.267`.
- **Push speed** (🔢 Number, Speed). Default value is `1800`.

??? quote "See internal technical details"


    - **Character running lock duration** is stored as `CharacterRunningLockDuration` (Number). Unit is Second. Default value is `0.267`.
    > This behavior must be used on an object also having a behavior with type "FlippableCapability::FlippableBehavior". This is stored on property `Flip`.

    > This behavior must be used on an object also having a behavior with type "HedgehogPlatformer::HedgehogPlatform". This is stored on property `HedgehogPlatform`.

    - **Push speed** is stored as `PushSpeed` (Number). Unit is PixelSpeed. Default value is `1800`.

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

*This page is an auto-generated reference page about the **Hedgehog platformer** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).