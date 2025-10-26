# Top-down movement animator

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/Glyphster Pack/Master/SVG/Arrows/a6026156355ae5f03613b03971e4ddb50d0c95b8901e7a21edc57f33f0032e42_Arrows_thin_arrows_all_directions_cross.svg" class="extension-icon"></img>
Change the animation according to the movement direction.

**Authors and contributors** to this experimental extension: [D8H](https://gd.games/D8H).

---

Change the animation according to the movement direction.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Top-down movement animator 

Change the animation according to the movement direction. 

### Behavior actions

**Animation name**  
Change the animation name of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (string): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `TopDownMovementAnimator::TopDownMovementAnimator::SetAnimationName`.

**Pause animations when objects stop**  
Change whether animations are paused when objects stop.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): IsPausingAnimation

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `TopDownMovementAnimator::TopDownMovementAnimator::SetIsPausingAnimation`.

**Scale animations according to speed**  
Change whether animations are scaled according to speed or not.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): IsScalingAnimation

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `TopDownMovementAnimator::TopDownMovementAnimator::SetIsScalingAnimation`.

### Behavior conditions

**Animation name**  
Compare the animation name of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (string): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `TopDownMovementAnimator::TopDownMovementAnimator::AnimationName`.

**Pause animations when objects stop**  
Check if animations are paused when objects stop.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `TopDownMovementAnimator::TopDownMovementAnimator::IsPausingAnimation`.

**Scale animations according to speed**  
Check if animations are scaled according to speed.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `TopDownMovementAnimator::TopDownMovementAnimator::IsScalingAnimation`.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.TopDownMovementAnimator::AnimationName()` | Return the animation name of the object. ||


---

*This page is an auto-generated reference page about the **Top-down movement animator** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).