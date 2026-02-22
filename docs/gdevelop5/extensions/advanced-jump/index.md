# Advanced platformer movements

<img src="https://resources.gdevelop-app.com/assets/Icons/Line Hero Pack/Master/SVG/Sports and Fitness/Sports and Fitness_training_running_run.svg" class="extension-icon"></img>
Platformer air jump, wall jump/slide, coyote time, horizontal dash, and dive dash.

**Authors and contributors** to this experimental extension: [D8H](https://gd.games/D8H), [shadow00dev](https://gd.games/shadow00dev), [Entropy](https://gd.games/Entropy), [CorianderGames](https://gd.games/CorianderGames).

---

This extension provides behaviors to:


* Jump in mid-air
* Jump and slide against walls
* Dash horizontally
* Dash toward the floor
* Do coyote time, also known as "ledge tolerance". It lets players jumping even after their character is no longer touching the ground for a given amount of time. It aims to give players a feeling of control and reduce frustration.

An example allows to check it out ([open the project online](https://editor.gdevelop.io/?project=example://platformer-moves)).

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Coyote time and air jump 

Let platformer characters jump shortly after leaving a platform and also jump in mid-air. 

### Behavior properties

- **Number of air jumps** (🔢 Number). Default value is `1`.
- **Floor jumps count as air jumps** (🔘 Boolean). Default value is `false`.
- **Coyote time duration** (🔢 Number, Duration). Default value is `0.25`.

??? quote "See internal technical details"


    - **Number of air jumps** is stored as `AirJumpCountMaximum` (Number). Default value is `1`.
    - **Floor jumps count as air jumps** is stored as `AreFloorJumpCountedAsAirJump` (Boolean). Default value is `false`.
    - **Coyote time duration** is stored as `CoyoteTimeFrameDuration` (Number). Unit is Second. Default value is `0.25`.
    > This behavior must be used on an object also having a behavior with type "PlatformBehavior::PlatformerObjectBehavior". This is stored on property `PlatformerBehavior`.


### Behavior actions

**Remove a remaining air jump**  
Remove one of the remaining air jumps of a character.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `AdvancedJump::AdvancedJump::RemoveOneRemainingAirJump`.

**Reset air jumps**  
Allow back all air jumps of a character.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `AdvancedJump::AdvancedJump::ResetAirJumpCounter`.

**Air jumps**  
Change the number of times the character can jump in mid-air.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Number of air jumps

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `AdvancedJump::AdvancedJump::SetAirJumpCountMaximum`.

**Coyote timeframe**  
Change the coyote time duration of an object (in seconds).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Duration
      Coyote time duration in seconds.

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `AdvancedJump::AdvancedJump::SetCoyoteTime`.


### Behavior conditions

**Floor jumps count as air jumps**  
Check if floor jumps are counted as air jumps for an object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `AdvancedJump::AdvancedJump::AreFloorJumpCountedAsAirJump`.

**Can coyote jump**  
Check if a coyote jump can currently happen.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `AdvancedJump::AdvancedJump::CanCoyoteJump`.


### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.AdvancedJump::AirJumpsMax()` | Number of jumps in mid-air that are allowed. ||
| `Object.AdvancedJump::RemainingAirJumps()` | Number of jumps in mid-air that are still allowed. ||

## Dive dash 

Make platformer characters dash toward the floor. 

### Behavior properties

- **Gravity** (🔢 Number, Acceleration). Default value is `8000`.
- **Initial falling speed** (🔢 Number, Speed). Default value is `1000`.
- **Maximum falling speed** (🔢 Number, Speed). Default value is `3000`.

??? quote "See internal technical details"


    - **Gravity** is stored as `DiveGravity` (Number). Unit is PixelAcceleration. Default value is `8000`.
    - **Initial falling speed** is stored as `DiveInitialFallingSpeed` (Number). Unit is PixelSpeed. Default value is `1000`.
    - **Maximum falling speed** is stored as `DiveMaxFallingSpeed` (Number). Unit is PixelSpeed. Default value is `3000`.
    > This behavior must be used on an object also having a behavior with type "PlatformBehavior::PlatformerObjectBehavior". This is stored on property `PlatformerCharacter`.

    > This behavior must be used on an object also having a behavior with type "AdvancedJump::PlatformerConfigurationStack". This is stored on property `PlatformerConfigurationStack`.


### Behavior actions

**Simulate dive key**  
Simulate a press of dive key to make the object dives to the floor if it can dive.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `AdvancedJump::DiveDash::SimulateDiveKey`.


### Behavior conditions

**Can dive**  
Check if the object can dive.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `AdvancedJump::DiveDash::CanDive`.

**Is diving**  
Check if the object is diving.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `AdvancedJump::DiveDash::IsDiving`.


_No expressions for this behavior._


## Horizontal dash 

Make platformer characters dash horizontally. 

### Behavior properties

- **Cool down duration** (🔢 Number). Default value is `0.25`.
- **Decceleration** (🔢 Number). Default value is `3000`.
- **DashGravity** (🔢 Number). Default value is `1000`.
- **Initial speed** (🔢 Number). Default value is `500`.
- **Sustain acceleration** (🔢 Number). Default value is `1500`.
- **Sustain maxiumum duration** (🔢 Number). Default value is `0.25`.
- **Sustain minimum duration** (🔢 Number). Default value is `0`.
- **Sustain gravity** (🔢 Number). Default value is `0`.
- **Sustain maxiumum speed** (🔢 Number). Default value is `750`.

??? quote "See internal technical details"


    - **Cool down duration** is stored as `CoolDownDuration` (Number). Default value is `0.25`.
    - **Decceleration** is stored as `DashDecceleration` (Number). Default value is `3000`.
    - **DashGravity** is stored as `DashGravity` (Number). Default value is `1000`.
    - **Initial speed** is stored as `DashInitialSpeed` (Number). Default value is `500`.
    - **Sustain acceleration** is stored as `DashSustainAcceleration` (Number). Default value is `1500`.
    - **Sustain maxiumum duration** is stored as `DashSustainDurationMax` (Number). Default value is `0.25`.
    - **Sustain minimum duration** is stored as `DashSustainDurationMin` (Number). Default value is `0`.
    - **Sustain gravity** is stored as `DashSustainGravity` (Number). Default value is `0`.
    - **Sustain maxiumum speed** is stored as `DashSustainSpeedMax` (Number). Default value is `750`.
    > This behavior must be used on an object also having a behavior with type "PlatformBehavior::PlatformerObjectBehavior". This is stored on property `PlatformerCharacter`.

    > This behavior must be used on an object also having a behavior with type "AdvancedJump::PlatformerConfigurationStack". This is stored on property `PlatformerConfigurationStack`.


### Behavior actions

**Abort dash**  
Abort the current dash and set the object to its usual horizontal speed.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `AdvancedJump::HorizontalDash::AbortDash`.

**Simulate dash key**  
Simulate a press of dash key.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `AdvancedJump::HorizontalDash::SimulateDashKey`.


### Behavior conditions

**Is dashing**  
Check if the object is dashing.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `AdvancedJump::HorizontalDash::IsDashing`.


_No expressions for this behavior._


## Platformer character configuration stack 

Resolve conflict between platformer character configuration changes. 

### Behavior actions

**Configure horizontal acceleration**  
Configure character acceleration for a given configuration layer and move this layer on top.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Acceleration
    - Parameter 3 (🔤 String): Configuration identifier

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `AdvancedJump::PlatformerConfigurationStack::ConfigureAcceleration`.

**Configure horizontal deceleration**  
Configure character deceleration for a given configuration layer and move this layer on top.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Acceleration
    - Parameter 3 (🔤 String): Configuration identifier

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `AdvancedJump::PlatformerConfigurationStack::ConfigureDeceleration`.

**Configure gravity**  
Configure character gravity for a given configuration layer and move this layer on top.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Gravity
    - Parameter 3 (🔤 String): Configuration identifier

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `AdvancedJump::PlatformerConfigurationStack::ConfigureGravity`.

**Configure maximum falling speed**  
Configure character maximum falling speed for a given configuration layer and move this layer on top.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Maximum falling speed
    - Parameter 3 (🔤 String): Configuration identifier

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `AdvancedJump::PlatformerConfigurationStack::ConfigureMaxFallSpeed`.

**Configure maximum horizontal speed**  
Configure character maximum speed for a given configuration layer and move this layer on top.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Maximum horizontal speed
    - Parameter 3 (🔤 String): Configuration identifier

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `AdvancedJump::PlatformerConfigurationStack::ConfigureMaxSpeed`.

**Revert configuration**  
Revert configuration changes for one identifier and update the character configuration to use the most recent ones.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 String): Configuration identifier

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `AdvancedJump::PlatformerConfigurationStack::RevertConfiguration`.


### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.PlatformerConfigurationStack::UsualMaxSpeed()` | Return the usual maximum horizontal speed when no configuration change applies on it. ||

## Wall jump 

Let platformer characters jump and slide against walls. 

### Behavior properties

- **Keep sliding without holding a key** (🔘 Boolean). Default value is `false`.
- **Jump detection time frame** (🔢 Number, Duration). Default value is `0.125`.
- **Side speed sustain time** (🔢 Number, Duration). Default value is `0.20000000000000001`.
- **Side acceleration** (🔢 Number, Acceleration). Default value is `1500`.
- **Side speed** (🔢 Number, Speed). Default value is `250`.
- **Minimal falling speed** (🔢 Number, Speed). Default value is `50`.
- **Gravity** (🔢 Number, Acceleration). Default value is `500`.
- **Maximum falling speed** (🔢 Number, Speed). Default value is `350`.
- **Impact speed absorption** (🔢 Number, Speed). Default value is `350`.

??? quote "See internal technical details"


    - **Keep sliding without holding a key** is stored as `AutomaticSliding` (Boolean). Default value is `false`.
    - **Jump detection time frame** is stored as `JumpTimeFrame` (Number). Unit is Second. Default value is `0.125`.
    > This behavior must be used on an object also having a behavior with type "PlatformBehavior::PlatformerObjectBehavior". This is stored on property `PlatformerCharacter`.

    > This behavior must be used on an object also having a behavior with type "AdvancedJump::PlatformerConfigurationStack". This is stored on property `PlatformerConfigurationStack`.

    - **Side speed sustain time** is stored as `SideSpeedSustainTime` (Number). Unit is Second. Default value is `0.20000000000000001`.
    - **Side acceleration** is stored as `WallJumpAccelerationX` (Number). Unit is PixelAcceleration. Default value is `1500`.
    - **Side speed** is stored as `WallJumpSpeedX` (Number). Unit is PixelSpeed. Default value is `250`.
    - **Minimal falling speed** is stored as `WallSlidingFallingSpeedMin` (Number). Unit is PixelSpeed. Default value is `50`.
    - **Gravity** is stored as `WallSlidingGravity` (Number). Unit is PixelAcceleration. Default value is `500`.
    - **Maximum falling speed** is stored as `WallSlidingMaxFallingSpeed` (Number). Unit is PixelSpeed. Default value is `350`.
    - **Impact speed absorption** is stored as `WallSlidingSpeedAbsorption` (Number). Unit is PixelSpeed. Default value is `350`.

### Behavior actions

**Jump time frame**  
Change the wall jump detection time frame of an object (in seconds).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Jump detection time frame (in seconds)

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `AdvancedJump::WallJump::SetJumpTimeFrame`.

**Side acceleration**  
Change the side acceleration of wall jumps of an object (in pixels per second per second).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Side acceleration

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `AdvancedJump::WallJump::SetWallJumpAccelerationX`.

**Side speed**  
Change the side speed of wall jumps of an object (in pixels per second).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Side speed

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `AdvancedJump::WallJump::SetWallJumpSpeedX`.

**Gravity**  
Change the wall sliding gravity of an object (in pixels per second per second).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Gravity

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `AdvancedJump::WallJump::SetWallSlidingGravity`.

**Maximum falling speed**  
Change the wall sliding maximum falling speed of an object (in pixels per second).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Maximum falling speed

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `AdvancedJump::WallJump::SetWallSlidingMaxFallingSpeed`.

**Impact speed absorption**  
Change the impact speed absorption of an object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Impact speed absorption

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `AdvancedJump::WallJump::SetWallSlidingSpeedAbsorption`.


### Behavior conditions

**Has just wall jumped**  
Check if the object has just wall jumped.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `AdvancedJump::WallJump::HasJustWallJumped`.

**Against a wall**  
Check if the object is against a wall.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `AdvancedJump::WallJump::IsAgaintWall`.

**Is wall jumping**  
Check if the object is wall jumping.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `AdvancedJump::WallJump::IsWallJumping`.


### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.WallJump::JumpTimeFrame()` | The wall jump detection time frame of an object (in seconds). ||
| `Object.WallJump::WallJumpAccelerationX()` | The side acceleration of wall jumps of an object (in pixels per second per second). ||
| `Object.WallJump::WallJumpSpeedX()` | The side speed of wall jumps of an object (in pixels per second). ||
| `Object.WallJump::WallSlidingGravity()` | The wall sliding gravity of an object (in pixels per second per second). ||
| `Object.WallJump::WallSlidingMaxFallingSpeed()` | The wall sliding maximum falling speed of an object (in pixels per second). ||
| `Object.WallJump::WallSlidingSpeedAbsorption()` | Change the impact speed absorption of an object. ||


---

*This page is an auto-generated reference page about the **Advanced platformer movements** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).