# Platformer trajectory

<img src="https://resources.gdevelop-app.com/assets/Icons/chart-bell-curve.svg" class="extension-icon"></img>
Platformer character jump easy configuration and platformer AI tools.

**Authors and contributors** to this experimental extension: [D8H](https://gd.games/D8H).

---

For objects having the 2D platformer character behavior, this provides a behavior allowing to:

* Configure the height of a jump by automatically choosing the right jump speed ([open the project online](https://editor.gdevelop.io/?project=example://platformer-jump-evaluator)).
* Know when to jump to reach a platform (can be useful for AI).
* Draw jump trajectories to check a level design.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Platformer trajectory evaluator 

Configure the height of a jump and evaluate the jump trajectory. 

### Behavior properties

- **Jump height** (🔢 Number). Default value is `9.88131e-323`.

??? quote "See internal technical details"


    - **Jump height** is stored as `JumpHeight` (Number). Default value is `9.88131e-323`.
    > This behavior must be used on an object also having a behavior with type "PlatformBehavior::PlatformerObjectBehavior". This is stored on property `PlatformerCharacter`.


### Behavior actions

**Draw jump**  
Draw the jump trajectories from no sustain to full sustain.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (👾 Object): Shape painter

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PlatformerTrajectory::PlatformerEvaluator::DrawJump`.

**Jump height**  
Change the jump speed to reach a given height.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Jump height

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PlatformerTrajectory::PlatformerEvaluator::SetJumpHeight`.


### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.PlatformerEvaluator::JumpDownTime(number, number)` | The time from the start of the jump when it reaches a given Y displacement moving downward. ||
| | _🔢 Number_ | Y position |
| | _🔢 Number_ | Jump sustaining duration |
| `Object.PlatformerEvaluator::JumpPeakTime(number)` | The time from the start of the jump when it reaches the maximum Y displacement. ||
| | _🔢 Number_ | Jump sustaining duration |
| `Object.PlatformerEvaluator::JumpPeakY(number)` | The maximum Y displacement. ||
| | _🔢 Number_ | Jump sustaining duration |
| `Object.PlatformerEvaluator::JumpUpTime(number, number)` | The time from the start of the jump when it reaches a given Y displacement moving upward. ||
| | _🔢 Number_ | Y position |
| | _🔢 Number_ | Jump sustaining duration |
| `Object.PlatformerEvaluator::JumpY(number, number)` | The jump Y displacement at a given time from the start of the jump. ||
| | _🔢 Number_ | Time |
| | _🔢 Number_ | Jump sustaining duration |
| `Object.PlatformerEvaluator::MovingX(number)` | The X displacement at a given time from now if accelerating (always positive). ||
| | _🔢 Number_ | Time |
| `Object.PlatformerEvaluator::StopXDistance(number)` | The X displacement before the character stops (always positive). ||
| | _🔢 Number_ | Time |
| `Object.PlatformerEvaluator::StoppingX(number)` | The X displacement at a given time from now if decelerating (always positive). ||
| | _🔢 Number_ | Time |


---

*This page is an auto-generated reference page about the **Platformer trajectory** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).