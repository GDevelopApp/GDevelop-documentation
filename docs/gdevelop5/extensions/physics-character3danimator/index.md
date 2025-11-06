# 3D physics character animator

<img src="https://resources.gdevelop-app.com/assets/Icons/Glyphster Pack/Master/SVG/Sports and Fitness/Sports and Fitness_training_running_run.svg" class="extension-icon"></img>
Change animations of a 3D physics character automatically.

**Authors and contributors** to this experimental extension: [D8H](https://gd.games/D8H).

---

Automatically change the animationsof a 3D physics character based on movement and interaction with platform objects.

The 3D platformer example uses this extension ([open the project online](https://editor.gdevelop.io/?project=example://3d-platformer)).

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## 3D physics character animator 

Change animations of a 3D physics character automatically. 

### Behavior properties

- **"Fall" animation name** (string). Default value is `Fall`.
- **"Idle" animation name ** (string). Default value is `Idle`.
- **"Jump" animation name** (string). Default value is `Jump`.
- **Rotation speed** (🔢 Number, Angular speed). Default value is `720`.
- **"Run" animation name** (string). Default value is `Run`.

??? quote "See internal technical details"


    > This behavior must be used on an object also having a behavior with type "AnimatableCapability::AnimatableBehavior". This is stored on property `Animation`.

    - **"Fall" animation name** is stored as `FallAnimationName` (String). Default value is `Fall`.
    - **"Idle" animation name ** is stored as `IdleAnimationName` (String). Default value is `Idle`.
    - **"Jump" animation name** is stored as `JumpAnimationName` (String). Default value is `Jump`.
    > This behavior must be used on an object also having a behavior with type "Physics3D::PhysicsCharacter3D". This is stored on property `PhysicsCharacter3D`.

    - **Rotation speed** is stored as `RotationSpeed` (Number). Unit is AngularSpeed. Default value is `720`.
    - **"Run" animation name** is stored as `RunAnimationName` (String). Default value is `Run`.

### Behavior actions

**Rotation speed**  
Change the rotation speed of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsCharacter3DAnimator::PhysicsCharacter3DAnimator::SetRotationSpeed`.


### Behavior conditions

**Rotation speed**  
Compare the rotation speed of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PhysicsCharacter3DAnimator::PhysicsCharacter3DAnimator::RotationSpeed`.


### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.PhysicsCharacter3DAnimator::RotationSpeed()` | Return the rotation speed of the object. ||


---

*This page is an auto-generated reference page about the **3D physics character animator** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).