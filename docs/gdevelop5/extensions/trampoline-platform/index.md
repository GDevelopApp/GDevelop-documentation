# Trampoline Platform

<img src="https://resources.gdevelop-app.com/assets/Icons/Line Hero Pack/Master/SVG/Sports and Fitness/Sports and Fitness_skipping_training_jump_rope.svg" class="extension-icon"></img>
Convert object to trampoline platform.

**Authors and contributors** to this experimental extension: [VegeTato](https://gd.games/VegeTato).

!!! warning
    This is an extension made by a community member and it only got through a
    light review by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of fully reviewed extensions.

---

# User can

- Use the extension action multi times on multi objects.
- Set the trampoline force.
- Set multi forces for each trampoline.
- Set which object can jump on that trampoline.
- Set group of objects to jump on the trampoline.
- Set the boolean (On/Off) to trigger the trampoline:
    1. On: Trigger if player is on top of it.
    2. Off: Trigger if player collided with it.

- Check if a trampoline has been triggered (for animations).

# Actions

- Extension action.

# Conditions

- Check if a trampoline has been triggered.

# Example
![](https://i.imgur.com/XIYBQB9.png)

- *Recommended to use platform behavior (Jump through) on the trampoline.*  
- *Extension action must run in every frame.*

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Trampoline Platform**  
Convert object to trampoline platform.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Platformer character object (player)
    - Parameter 2 (🧩 Behavior): Platformer character behavior
    - Parameter 3 (👾 Object): Trampoline object
    - Parameter 4 (🔢 Number): Trampoline force (in pixels per second)
    - Parameter 5 (❓ Yes or No): Player must be on top of the trampoline in order to start the force
      **Yes:** Insert platform behavior (jump through) on trampoline object.  
      **No:** No need for platform behavior.

    > Technical note: parameters 0, 6 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `TrampolinePlatform::Trampoline`.

## Conditions

**Trampoline has been triggered**  
Check if a trampoline has been triggered.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Trampoline object

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `TrampolinePlatform::Jumped`.




---

*This page is an auto-generated reference page about the **Trampoline Platform** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).