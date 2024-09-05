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
| `Object.PlatformerEvaluator::JumpDownTime()` | The time from the start of the jump when it reaches a given Y displacement moving downward. ||
| `Object.PlatformerEvaluator::JumpPeakTime()` | The time from the start of the jump when it reaches the maximum Y displacement. ||
| `Object.PlatformerEvaluator::JumpPeakY()` | The maximum Y displacement. ||
| `Object.PlatformerEvaluator::JumpUpTime()` | The time from the start of the jump when it reaches a given Y displacement moving upward. ||
| `Object.PlatformerEvaluator::JumpY()` | The jump Y displacement at a given time from the start of the jump. ||
| `Object.PlatformerEvaluator::MovingX()` | The X displacement at a given time from now if accelerating (always positive). ||
| `Object.PlatformerEvaluator::StopXDistance()` | The X displacement before the character stops (always positive). ||
| `Object.PlatformerEvaluator::StoppingX()` | The X displacement at a given time from now if decelerating (always positive). ||

---

*This page is an auto-generated reference page about the **Platformer trajectory** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).