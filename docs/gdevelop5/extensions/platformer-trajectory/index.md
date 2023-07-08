# Platformer trajectory

<img src="https://resources.gdevelop-app.com/assets/Icons/chart-bell-curve.svg" class="extension-icon"></img>
Platformer character jump easy configuration and platformer AI tools.

**Authors and contributors** to this community extension: [D8H](https://gd.games/D8H).

---

This extension allows to:

* Configure the height of a jump by automatically choosing the right jump speed ([open the project online](https://editor.gdevelop.io/?project=example://platformer-jump-evaluator)).
* Know when to jump to reach a platform (can be useful for AI).
* Draw jump trajectories to check a level design.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Platformer trajectory evaluator 

Configure the height of a jump and evaluate the jump trajectory. 

### Behavior actions

**Draw jump**  
Draw the jump trajectories from no sustain to full sustain.

**Jump height**  
Change the jump speed to reach a given height.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.PlatformerEvaluator::JumpDownTime(number, number)` | The time from the start of the jump when it reaches a given Y displacement moving downward. ||
| | _number_ | Y position |
| | _number_ | Jump sustaining duration |
| `Object.PlatformerEvaluator::JumpPeakTime(number)` | The time from the start of the jump when it reaches the maximum Y displacement. ||
| | _number_ | Jump sustaining duration |
| `Object.PlatformerEvaluator::JumpPeakY(number)` | The maximum Y displacement. ||
| | _number_ | Jump sustaining duration |
| `Object.PlatformerEvaluator::JumpUpTime(number, number)` | The time from the start of the jump when it reaches a given Y displacement moving upward. ||
| | _number_ | Y position |
| | _number_ | Jump sustaining duration |
| `Object.PlatformerEvaluator::JumpY(number, number)` | The jump Y displacement at a given time from the start of the jump. ||
| | _number_ | Time |
| | _number_ | Jump sustaining duration |
| `Object.PlatformerEvaluator::MovingX(number)` | The X displacement at a given time from now if accelerating (always positive). ||
| | _number_ | Time |
| `Object.PlatformerEvaluator::StopXDistance(number)` | The X displacement before the character stops (always positive). ||
| | _number_ | Time |
| `Object.PlatformerEvaluator::StoppingX(number)` | The X displacement at a given time from now if decelerating (always positive). ||
| | _number_ | Time |

---

*This page is an auto-generated reference page about the **Platformer trajectory** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).