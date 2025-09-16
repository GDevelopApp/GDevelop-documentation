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

**Reset air jumps**  
Allow back all air jumps of a character.

**Air jumps**  
Change the number of times the character can jump in mid-air.

**Coyote timeframe**  
Change the coyote time duration of an object (in seconds).

### Behavior conditions

**Floor jumps count as air jumps**  
Check if floor jumps are counted as air jumps for an object.

**Can coyote jump**  
Check if a coyote jump can currently happen.

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

### Behavior conditions

**Can dive**  
Check if the object can dive.

**Is diving**  
Check if the object is diving.

_No expressions for this behavior._


## Horizontal dash 

Make platformer characters dash horizontally. 

### Behavior actions

**Abort dash**  
Abort the current dash and set the object to its usual horizontal speed.

**Simulate dash key**  
Simulate a press of dash key.

### Behavior conditions

**Is dashing**  
Check if the object is dashing.

_No expressions for this behavior._


## Platformer character configuration stack 

Resolve conflict between platformer character configuration changes. 

### Behavior actions

**Configure horizontal acceleration**  
Configure character acceleration for a given configuration layer and move this layer on top.

**Configure horizontal deceleration**  
Configure character deceleration for a given configuration layer and move this layer on top.

**Configure gravity**  
Configure character gravity for a given configuration layer and move this layer on top.

**Configure maximum falling speed**  
Configure character maximum falling speed for a given configuration layer and move this layer on top.

**Configure maximum horizontal speed**  
Configure character maximum speed for a given configuration layer and move this layer on top.

**Revert configuration**  
Revert configuration changes for one identifier and update the character configuration to use the most recent ones.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.PlatformerConfigurationStack::UsualMaxSpeed()` | Return the usual maximum horizontal speed when no configuration change applies on it. ||

## Wall jump 

Let platformer characters jump and slide against walls. 

### Behavior actions

**Jump time frame**  
Change the wall jump detection time frame of an object (in seconds).

**Side acceleration**  
Change the side acceleration of wall jumps of an object (in pixels per second per second).

**Side speed**  
Change the side speed of wall jumps of an object (in pixels per second).

**Gravity**  
Change the wall sliding gravity of an object (in pixels per second per second).

**Maximum falling speed**  
Change the wall sliding maximum falling speed of an object (in pixels per second).

**Impact speed absorption**  
Change the impact speed absorption of an object.

### Behavior conditions

**Has just wall jumped**  
Check if the object has just wall jumped.

**Against a wall**  
Check if the object is against a wall.

**Is wall jumping**  
Check if the object is wall jumping.

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