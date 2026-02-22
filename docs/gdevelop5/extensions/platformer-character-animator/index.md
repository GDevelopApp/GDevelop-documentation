# Platformer character animator

<img src="https://resources.gdevelop-app.com/assets/Icons/Glyphster Pack/Master/SVG/Sports and Fitness/Sports and Fitness_training_running_run.svg" class="extension-icon"></img>
Auto-animate platformer characters: idle, run, jump, fall with horizontal flip.

**Authors and contributors** to this experimental extension: [VictrisGames](https://gd.games/VictrisGames).

---

Automatically change the animations and horizontal flipping of an object having the 2D platformer character behavior based on movement and interaction with platform objects.

The platformer example uses this extension ([open the project online](https://editor.gdevelop.io/?project=example://platformer)).

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Platformer character animator 

Change animations and horizontal flipping of a platformer character automatically. 

### Behavior properties

- **"Climb" animation name** (🔤 String). Default value is `Climb`.
- **Enable animation changes** (🔘 Boolean). Default value is `true`.
- **Enable horizontal flipping** (🔘 Boolean). Default value is `true`.
- **"Fall" animation name** (🔤 String). Default value is `Fall`.
- **"Idle" animation name ** (🔤 String). Default value is `Idle`.
- **"Jump" animation name** (🔤 String). Default value is `Jump`.
- **"Run" animation name** (🔤 String). Default value is `Run`.

??? quote "See internal technical details"


    > This behavior must be used on an object also having a behavior with type "AnimatableCapability::AnimatableBehavior". This is stored on property `Animation`.

    - **"Climb" animation name** is stored as `ClimbAnimationName` (String). Default value is `Climb`.
    - **Enable animation changes** is stored as `EnableAnimationChanges` (Boolean). Default value is `true`.
    - **Enable horizontal flipping** is stored as `EnableHorizontalFlipping` (Boolean). Default value is `true`.
    - **"Fall" animation name** is stored as `FallAnimationName` (String). Default value is `Fall`.
    > This behavior must be used on an object also having a behavior with type "FlippableCapability::FlippableBehavior". This is stored on property `Flippable`.

    - **"Idle" animation name ** is stored as `IdleAnimationName` (String). Default value is `Idle`.
    - **"Jump" animation name** is stored as `JumpAnimationName` (String). Default value is `Jump`.
    > This behavior must be used on an object also having a behavior with type "PlatformBehavior::PlatformerObjectBehavior". This is stored on property `PlatformerBehavior`.

    - **"Run" animation name** is stored as `RunAnimationName` (String). Default value is `Run`.

### Behavior actions

**Enable (or disable) automated animation changes**  
Enable (or disable) automated animation changes a platformer character. Disabling animation changes is useful to play custom animations.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): Change animations automatically

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PlatformerCharacterAnimator::PlatformerCharacterAnimator::EnableChangingAnimations`.

**Enable (or disable) automated horizontal flipping**  
Enable (or disable) automated horizontal flipping of a platform character.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): Enable horizontal flipping

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PlatformerCharacterAnimator::PlatformerCharacterAnimator::EnableHorizontalFlipping`.

**"Climb" animation name**  
Set the "Climb" animation name. Do not use quotation marks.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 String): Animation name

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PlatformerCharacterAnimator::PlatformerCharacterAnimator::SetClimbAnimationName`.

**"Fall" animation name**  
Set the "Fall" animation name. Do not use quotation marks.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 String): Animation name

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PlatformerCharacterAnimator::PlatformerCharacterAnimator::SetFallAnimationName`.

**"Idle" animation name**  
Set the "Idle" animation name. Do not use quotation marks.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 String): Animation name

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PlatformerCharacterAnimator::PlatformerCharacterAnimator::SetIdleAnimationName`.

**"Jump" animation name**  
Set the "Jump" animation name. Do not use quotation marks.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 String): Animation name

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PlatformerCharacterAnimator::PlatformerCharacterAnimator::SetJumpAnimationName`.

**"Move" animation name**  
Set the "Move" animation name. Do not use quotation marks.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 String): Animation name

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PlatformerCharacterAnimator::PlatformerCharacterAnimator::SetMoveAnimationName`.


_No expressions for this behavior._



---

*This page is an auto-generated reference page about the **Platformer character animator** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).