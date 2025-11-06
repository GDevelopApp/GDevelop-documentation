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

### Behavior properties

- **Angle offset** (🔢 Number, Angle). Set to 90°, "Walk0" becomes the animation for down. Default value is `0`.
- **Animation name** (🔤 String). Animations must be called "Walk0", "Walk1"... for left, down... Default value is `Walk`.
- **Number of directions** (🔢 Number, Dimensionless). Leave to 0 to automatically use 8 when diagonals are allowed and 4 otherwise. Default value is `0`.
- **Pause animations when objects stop** (🔘 Boolean). Default value is `true`.
- **Scale animations according to speed** (🔘 Boolean). Default value is `true`.

??? quote "See internal technical details"


    - **Angle offset** is stored as `AngleOffset` (Number). Unit is DegreeAngle. Default value is `0`.
    > This behavior must be used on an object also having a behavior with type "AnimatableCapability::AnimatableBehavior". This is stored on property `Animation`.

    - **Animation name** is stored as `AnimationName` (String). Default value is `Walk`.
    - **Number of directions** is stored as `DirectionCount` (Number). Unit is Dimensionless. Default value is `0`.
    - **Pause animations when objects stop** is stored as `IsPausingAnimation` (Boolean). Default value is `true`.
    - **Scale animations according to speed** is stored as `IsScalingAnimation` (Boolean). Default value is `true`.
    > This behavior must be used on an object also having a behavior with type "TopDownMovementBehavior::TopDownMovementBehavior". This is stored on property `TopDownMovement`.


### Behavior actions

**Animation name**  
Change the animation name of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔤 String): Value

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
    - Parameter 3 (🔤 String): Value to compare

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

*This page is an auto-generated reference page about the **Top-down movement animator** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).