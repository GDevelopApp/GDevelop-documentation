# Advanced platformer movements

<img src="https://resources.gdevelop-app.com/assets/Icons/Line Hero Pack/Master/SVG/Sports and Fitness/Sports and Fitness_training_running_run.svg" class="extension-icon"></img>
Let platformer characters: air jump, wall jump wall sliding, coyote time and dashing.

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

### Behavior actions

**Remove a remaining air jump**
Remove one of the remaining air jumps of a character.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

**Reset air jumps**
Allow back all air jumps of a character.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

**Air jumps**
Change the number of times the character can jump in mid-air.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Number of air jumps

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Coyote timeframe**
Change the coyote time duration of an object (in seconds).

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Duration
      Coyote time duration in seconds.

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

### Behavior conditions

**Floor jumps count as air jumps**
Check if floor jumps are counted as air jumps for an object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

**Can coyote jump**
Check if a coyote jump can currently happen.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.AdvancedJump::AirJumpsMax()` | Number of jumps in mid-air that are allowed. ||
| `Object.AdvancedJump::RemainingAirJumps()` | Number of jumps in mid-air that are still allowed. ||

## Dive dash 

Make platformer characters dash toward the floor. 

### Behavior actions

**Simulate dive key**
Simulate a press of dive key to make the object dives to the floor if it can dive.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

### Behavior conditions

**Can dive**
Check if the object can dive.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

**Is diving**
Check if the object is diving.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

_No expressions for this behavior._


## Horizontal dash 

Make platformer characters dash horizontally. 

### Behavior actions

**Abort dash**
Abort the current dash and set the object to its usual horizontal speed.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

**Simulate dash key**
Simulate a press of dash key.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

### Behavior conditions

**Is dashing**
Check if the object is dashing.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

_No expressions for this behavior._


## Platformer character configuration stack 

Resolve conflict between platformer character configuration changes. 

### Behavior actions

**Configure horizontal acceleration**
Configure character acceleration for a given configuration layer and move this layer on top.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Acceleration
    - Parameter 3 (string): Configuration identifier

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Configure horizontal deceleration**
Configure character deceleration for a given configuration layer and move this layer on top.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Acceleration
    - Parameter 3 (string): Configuration identifier

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Configure gravity**
Configure character gravity for a given configuration layer and move this layer on top.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Gravity
    - Parameter 3 (string): Configuration identifier

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Configure maximum falling speed**
Configure character maximum falling speed for a given configuration layer and move this layer on top.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Maximum falling speed
    - Parameter 3 (string): Configuration identifier

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Configure maximum horizontal speed**
Configure character maximum speed for a given configuration layer and move this layer on top.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Maximum horizontal speed
    - Parameter 3 (string): Configuration identifier

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Revert configuration**
Revert configuration changes for one identifier and update the character configuration to use the most recent ones.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (string): Configuration identifier

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.PlatformerConfigurationStack::UsualMaxSpeed()` | Return the usual maximum horizontal speed when no configuration change applies on it. ||

## Wall jump 

Let platformer characters jump and slide against walls. 

### Behavior actions

**Jump time frame**
Change the wall jump detection time frame of an object (in seconds).

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Jump detection time frame (in seconds)

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Side acceleration**
Change the side acceleration of wall jumps of an object (in pixels per second per second).

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Side acceleration

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Side speed**
Change the side speed of wall jumps of an object (in pixels per second).

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Side speed

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Gravity**
Change the wall sliding gravity of an object (in pixels per second per second).

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Gravity

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Maximum falling speed**
Change the wall sliding maximum falling speed of an object (in pixels per second).

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Maximum falling speed

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Impact speed absorption**
Change the impact speed absorption of an object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Impact speed absorption

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

### Behavior conditions

**Has just wall jumped**
Check if the object has just wall jumped.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

**Against a wall**
Check if the object is against a wall.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

**Is wall jumping**
Check if the object is wall jumping.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

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

*This page is an auto-generated reference page about the **Advanced platformer movements** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).