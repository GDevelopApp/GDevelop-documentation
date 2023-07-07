# Advanced platformer movements

<img src="https://resources.gdevelop-app.com/assets/Icons/Line Hero Pack/Master/SVG/Sports and Fitness/Sports and Fitness_training_running_run.svg" class="extension-icon"></img>
Let platformer characters: air jump, wall jump wall sliding, coyote time and dashing.

**Authors and contributors** to this community extension: [D8H](https://gd.games/D8H), [shadow00dev](https://gd.games/shadow00dev), [Entropy](https://gd.games/Entropy), [CorianderGames](https://gd.games/CorianderGames).

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

**AirJumpCount property**  
Change the property value for the airJumpCount.

**Number of air jumps property**  
Change the property value for the number of air jumps.

**Floor jumps count as air jumps property**  
Update the property value for "floor jumps count as air jumps".

**Can coyote jump property**  
Update the property value for "can coyote jump".

**Coyote time duration property**  
Change the property value for the coyote time duration.

**Was in the air property**  
Update the property value for "was in the air".

**WasJumpKeyReleased property**  
Update the property value for "wasJumpKeyReleased".

**Toggle Floor jumps count as air jumps property**  
Toggle the property value for floor jumps count as air jumps.  
If it was true, it will become false, and if it was false it will become true.

**Toggle Can coyote jump property**  
Toggle the property value for can coyote jump.  
If it was true, it will become false, and if it was false it will become true.

**Toggle Was in the air property**  
Toggle the property value for was in the air.  
If it was true, it will become false, and if it was false it will become true.

**Toggle WasJumpKeyReleased property**  
Toggle the property value for wasJumpKeyReleased.  
If it was true, it will become false, and if it was false it will become true.

**Update WasInTheAir**  
Update WasInTheAir

### Behavior conditions

**Floor jumps count as air jumps**  
Check if floor jumps are counted as air jumps for an object.

**Can coyote jump**  
Check if a coyote jump can currently happen.

**AirJumpCount property**  
Compare the property value for the airJumpCount.

**Number of air jumps property**  
Compare the property value for the number of air jumps.

**Floor jumps count as air jumps property**  
Check the property value for floor jumps count as air jumps.

**Can coyote jump property**  
Check the property value for can coyote jump.

**Coyote time duration property**  
Compare the property value for the coyote time duration.

**Was in the air property**  
Check the property value for was in the air.

**WasJumpKeyReleased property**  
Check the property value for wasJumpKeyReleased.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.AdvancedJump::AirJumpsMax()` | Number of jumps in mid-air that are allowed. ||
| `Object.AdvancedJump::PropertyAirJumpCount()` | Return the property value for the airJumpCount. ||
| `Object.AdvancedJump::PropertyAirJumpCountMaximum()` | Return the property value for the number of air jumps. ||
| `Object.AdvancedJump::PropertyCoyoteTimeFrameDuration()` | Return the property value for the coyote time duration. ||
| `Object.AdvancedJump::RemainingAirJumps()` | Number of jumps in mid-air that are still allowed. ||

## Dive dash 

Make platformer characters dash toward the floor. 

### Behavior actions

**Gravity property**  
Change the property value for the gravity.

**Initial falling speed property**  
Change the property value for the initial falling speed.

**Maximum falling speed property**  
Change the property value for the maximum falling speed.

**IsDiving property**  
Update the property value for "isDiving".

**Simulate dive key**  
Simulate a press of dive key to make the object dives to the floor if it can dive.

**Toggle IsDiving property**  
Toggle the property value for isDiving.  
If it was true, it will become false, and if it was false it will become true.

### Behavior conditions

**Can dive**  
Check if the object can dive.

**Is diving**  
Check if the object is diving.

**Gravity property**  
Compare the property value for the gravity.

**Initial falling speed property**  
Compare the property value for the initial falling speed.

**Maximum falling speed property**  
Compare the property value for the maximum falling speed.

**IsDiving property**  
Check the property value for isDiving.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.DiveDash::PropertyDiveGravity()` | Return the property value for the gravity. ||
| `Object.DiveDash::PropertyDiveInitialFallingSpeed()` | Return the property value for the initial falling speed. ||
| `Object.DiveDash::PropertyDiveMaxFallingSpeed()` | Return the property value for the maximum falling speed. ||

## Horizontal dash 

Make platformer characters dash horizontally. 

### Behavior actions

**Abort dash**  
Abort the current dash and set the object to its usual horizontal speed.

**CanDash property**  
Update the property value for "canDash".

**Cool down duration property**  
Change the property value for the cool down duration.

**Decceleration property**  
Change the property value for the decceleration.

**DashGravity property**  
Change the property value for the dashGravity.

**Initial speed property**  
Change the property value for the initial speed.

**DashKeyIsPressed property**  
Update the property value for "dashKeyIsPressed".

**Sustain acceleration property**  
Change the property value for the sustain acceleration.

**Sustain maxiumum duration property**  
Change the property value for the sustain maxiumum duration.

**Sustain minimum duration property**  
Change the property value for the sustain minimum duration.

**Sustain gravity property**  
Change the property value for the sustain gravity.

**Sustain maxiumum speed property**  
Change the property value for the sustain maxiumum speed.

**IsSustainning property**  
Update the property value for "isSustainning".

**LastDirectionIsLeft property**  
Update the property value for "lastDirectionIsLeft".

**Simulate dash key**  
Simulate a press of dash key.

**Toggle CanDash property**  
Toggle the property value for canDash.  
If it was true, it will become false, and if it was false it will become true.

**Toggle DashKeyIsPressed property**  
Toggle the property value for dashKeyIsPressed.  
If it was true, it will become false, and if it was false it will become true.

**Toggle IsSustainning property**  
Toggle the property value for isSustainning.  
If it was true, it will become false, and if it was false it will become true.

**Toggle LastDirectionIsLeft property**  
Toggle the property value for lastDirectionIsLeft.  
If it was true, it will become false, and if it was false it will become true.

### Behavior conditions

**Is dashing**  
Check if the object is dashing.

**CanDash property**  
Check the property value for canDash.

**Cool down duration property**  
Compare the property value for the cool down duration.

**Decceleration property**  
Compare the property value for the decceleration.

**DashGravity property**  
Compare the property value for the dashGravity.

**Initial speed property**  
Compare the property value for the initial speed.

**DashKeyIsPressed property**  
Check the property value for dashKeyIsPressed.

**Sustain acceleration property**  
Compare the property value for the sustain acceleration.

**Sustain maxiumum duration property**  
Compare the property value for the sustain maxiumum duration.

**Sustain minimum duration property**  
Compare the property value for the sustain minimum duration.

**Sustain gravity property**  
Compare the property value for the sustain gravity.

**Sustain maxiumum speed property**  
Compare the property value for the sustain maxiumum speed.

**IsSustainning property**  
Check the property value for isSustainning.

**LastDirectionIsLeft property**  
Check the property value for lastDirectionIsLeft.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.HorizontalDash::PropertyCoolDownDuration()` | Return the property value for the cool down duration. ||
| `Object.HorizontalDash::PropertyDashDecceleration()` | Return the property value for the decceleration. ||
| `Object.HorizontalDash::PropertyDashGravity()` | Return the property value for the dashGravity. ||
| `Object.HorizontalDash::PropertyDashInitialSpeed()` | Return the property value for the initial speed. ||
| `Object.HorizontalDash::PropertyDashSustainAcceleration()` | Return the property value for the sustain acceleration. ||
| `Object.HorizontalDash::PropertyDashSustainDurationMax()` | Return the property value for the sustain maxiumum duration. ||
| `Object.HorizontalDash::PropertyDashSustainDurationMin()` | Return the property value for the sustain minimum duration. ||
| `Object.HorizontalDash::PropertyDashSustainGravity()` | Return the property value for the sustain gravity. ||
| `Object.HorizontalDash::PropertyDashSustainSpeedMax()` | Return the property value for the sustain maxiumum speed. ||

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

**Configure setting**  
Configure a character property for a given configuration layer and move this layer on top.

**Revert configuration**  
Revert configuration changes for one identifier and update the character configuration to use the most recent ones.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.PlatformerConfigurationStack::UsualMaxSpeed()` | Return the usual maximum horizontal speed when no configuration change applies on it. ||
| `Object.PlatformerConfigurationStack::UsualSetting(string)` | Return the character property value when no change applies on it. ||
| | _string_ |  |

## Wall jump 

Let platformer characters jump and slide against walls. 

### Behavior actions

**Absorb falling speed**  
Absorb falling speed of an object.

**Forget is against wall**  
Forget that the character was against a wall.

**Forget key pressed**  
Forget that the jump key was pressed.

**Remember is against wall**  
Remember that the character was against a wall.

**Remember key pressed**  
Remember that the jump key was pressed.

**Jump time frame**  
Change the wall jump detection time frame of an object (in seconds).

**Keep sliding without holding a key property**  
Update the property value for "keep sliding without holding a key".

**HasJustWallJump property**  
Update the property value for "hasJustWallJump".

**IsAgainstWall property**  
Update the property value for "isAgainstWall".

**IsJumpingLeft property**  
Update the property value for "isJumpingLeft".

**IsWallJumping property**  
Update the property value for "isWallJumping".

**Jump detection time frame property**  
Change the property value for the jump detection time frame.

**MovedAwayFromTheWall property**  
Update the property value for "movedAwayFromTheWall".

**PreviousX property**  
Change the property value for the previousX.

**Side speed sustain time property**  
Change the property value for the side speed sustain time.

**Side acceleration property**  
Change the property value for the side acceleration.

**Side speed property**  
Change the property value for the side speed.

**Minimal falling speed property**  
Change the property value for the minimal falling speed.

**Gravity property**  
Change the property value for the gravity.

**Maximum falling speed property**  
Change the property value for the maximum falling speed.

**Impact speed absorption property**  
Change the property value for the impact speed absorption.

**WasInTheAir property**  
Update the property value for "wasInTheAir".

**WasLeftOrRightPressed property**  
Update the property value for "wasLeftOrRightPressed".

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

**Slide on wall**  
Enable wall sliding.

**Toggle Keep sliding without holding a key property**  
Toggle the property value for keep sliding without holding a key.  
If it was true, it will become false, and if it was false it will become true.

**Toggle HasJustWallJump property**  
Toggle the property value for hasJustWallJump.  
If it was true, it will become false, and if it was false it will become true.

**Toggle IsAgainstWall property**  
Toggle the property value for isAgainstWall.  
If it was true, it will become false, and if it was false it will become true.

**Toggle IsJumpingLeft property**  
Toggle the property value for isJumpingLeft.  
If it was true, it will become false, and if it was false it will become true.

**Toggle IsWallJumping property**  
Toggle the property value for isWallJumping.  
If it was true, it will become false, and if it was false it will become true.

**Toggle MovedAwayFromTheWall property**  
Toggle the property value for movedAwayFromTheWall.  
If it was true, it will become false, and if it was false it will become true.

**Toggle WasInTheAir property**  
Toggle the property value for wasInTheAir.  
If it was true, it will become false, and if it was false it will become true.

**Toggle WasLeftOrRightPressed property**  
Toggle the property value for wasLeftOrRightPressed.  
If it was true, it will become false, and if it was false it will become true.

**Toggle side speed**  
Enable side speed.

### Behavior conditions

**Has just wall jumped**  
Check if the object has just wall jumped.

**Against a wall**  
Check if the object is against a wall.

**Is wall jumping**  
Check if the object is wall jumping.

**Keep sliding without holding a key property**  
Check the property value for keep sliding without holding a key.

**HasJustWallJump property**  
Check the property value for hasJustWallJump.

**IsAgainstWall property**  
Check the property value for isAgainstWall.

**IsJumpingLeft property**  
Check the property value for isJumpingLeft.

**IsWallJumping property**  
Check the property value for isWallJumping.

**Jump detection time frame property**  
Compare the property value for the jump detection time frame.

**MovedAwayFromTheWall property**  
Check the property value for movedAwayFromTheWall.

**PreviousX property**  
Compare the property value for the previousX.

**Side speed sustain time property**  
Compare the property value for the side speed sustain time.

**Side acceleration property**  
Compare the property value for the side acceleration.

**Side speed property**  
Compare the property value for the side speed.

**Minimal falling speed property**  
Compare the property value for the minimal falling speed.

**Gravity property**  
Compare the property value for the gravity.

**Maximum falling speed property**  
Compare the property value for the maximum falling speed.

**Impact speed absorption property**  
Compare the property value for the impact speed absorption.

**WasInTheAir property**  
Check the property value for wasInTheAir.

**WasLeftOrRightPressed property**  
Check the property value for wasLeftOrRightPressed.

**Was against wall**  
Remember that the character was against a wall within the time frame.

**Remember key pressed**  
Check if the key was pressed within the time frame.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.WallJump::JumpTimeFrame()` | The wall jump detection time frame of an object (in seconds). ||
| `Object.WallJump::PropertyJumpTimeFrame()` | Return the property value for the jump detection time frame. ||
| `Object.WallJump::PropertyPreviousX()` | Return the property value for the previousX. ||
| `Object.WallJump::PropertySideSpeedSustainTime()` | Return the property value for the side speed sustain time. ||
| `Object.WallJump::PropertyWallJumpAccelerationX()` | Return the property value for the side acceleration. ||
| `Object.WallJump::PropertyWallJumpSpeedX()` | Return the property value for the side speed. ||
| `Object.WallJump::PropertyWallSlidingFallingSpeedMin()` | Return the property value for the minimal falling speed. ||
| `Object.WallJump::PropertyWallSlidingGravity()` | Return the property value for the gravity. ||
| `Object.WallJump::PropertyWallSlidingMaxFallingSpeed()` | Return the property value for the maximum falling speed. ||
| `Object.WallJump::PropertyWallSlidingSpeedAbsorption()` | Return the property value for the impact speed absorption. ||
| `Object.WallJump::WallJumpAccelerationX()` | The side acceleration of wall jumps of an object (in pixels per second per second). ||
| `Object.WallJump::WallJumpSpeedX()` | The side speed of wall jumps of an object (in pixels per second). ||
| `Object.WallJump::WallSlidingGravity()` | The wall sliding gravity of an object (in pixels per second per second). ||
| `Object.WallJump::WallSlidingMaxFallingSpeed()` | The wall sliding maximum falling speed of an object (in pixels per second). ||
| `Object.WallJump::WallSlidingSpeedAbsorption()` | Change the impact speed absorption of an object. ||

---

*This page is an auto-generated reference page about the **Advanced platformer movements** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).