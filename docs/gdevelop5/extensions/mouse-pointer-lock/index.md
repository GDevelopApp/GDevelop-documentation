# Mouse Pointer Lock

<img src="https://resources.gdevelop-app.com/assets/Icons/Line Hero Pack/Master/SVG/Virtual Reality/Virtual Reality_360_rotate_vr_movement.svg" class="extension-icon"></img>
Lock and hide mouse pointer for unlimited movement (e.g., FPS mouse look).

**Authors and contributors** to this experimental extension: [PANDAKO](https://gd.games/PANDAKO), [D8H](https://gd.games/D8H).

---

This behavior removes the limit on the distance the mouse can move and hides the cursor.

For example, a user can rotate or continue to manipulate an object by moving the mouse endlessly ([open the project online](https://editor.gdevelop.io/?project=example://mouse-pointer-lock)).
Without the pointer lock, the rotation or operation will stop the moment the pointer reaches the edge of the browser or screen.

Game players don't have to worry about leaving the gameplay area or accidentally clicking on another application that moves the mouse focus away from the game.

Locking the pointer locks `CursorX()` and `CursorY()` expressions.
Use `MovementX()` and `MovementY()` instead.


!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Exit pointer lock**  
Unlocks the mouse pointer and show it.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `MousePointerLock::ExitPointerLock`.

**Request Pointer Lock**  
Lock the mouse pointer to hide it.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `MousePointerLock::RequestPointerLock`.

**Speed factor for touch movement**  
Change the speed factor for touch movement.

??? quote "See parameters & details"

    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `MousePointerLock::SetTouchSpeedFactor`.


## Conditions

**Locked pointer is moving**  
Check if the locked pointer is moving.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `MousePointerLock::IsMoving`.

**Pointer X movement**  
Compare the movement of the locked pointer on the X axis.

??? quote "See parameters & details"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `MousePointerLock::MovementX`.

**Pointer Y movement**  
Compare the movement of the pointer on the Y axis.

??? quote "See parameters & details"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `MousePointerLock::MovementY`.

**Speed factor for touch movement**  
Compare the speed factor for touch movement.

??? quote "See parameters & details"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `MousePointerLock::TouchSpeedFactor`.

**Pointer is locked**  
Check if the mouse pointer is locked.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `MousePointerLock::isPointerLocked`.


## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `MousePointerLock::MovementX()` | Return the movement of the locked pointer on the X axis. ||
| `MousePointerLock::MovementY()` | Return the movement of the pointer on the Y axis. ||
| `MousePointerLock::TouchSpeedFactor()` | Return the speed factor for touch movement. ||

## First person camera mouse mapper 

Control camera rotations with a mouse. 

### Behavior properties

- **Horizontal rotation speed factor** (🔢 Number, Dimensionless). Default value is `200`.
- **Z position offset** (🔢 Number, Distance). Default value is `0`.
- **Lock the pointer on click** (🔘 Boolean). Default value is `true`.
- **Maximum vertical camera angle** (🔢 Number, Angle). Default value is `90`.
- **Minimum vertical camera angle** (🔢 Number, Angle). Default value is `-90`.
- **Vertical rotation speed factor** (🔢 Number, Dimensionless). Default value is `100`.

??? quote "See internal technical details"


    - **Horizontal rotation speed factor** is stored as `HorizontalSpeed` (Number). Unit is Dimensionless. Default value is `200`.
    > This behavior must be used on an object also having a behavior with type "Scene3D::Base3DBehavior". This is stored on property `Object3D`.

    - **Z position offset** is stored as `OffsetZ` (Number). Unit is Pixel. Default value is `0`.
    - **Lock the pointer on click** is stored as `ShouldLock` (Boolean). Default value is `true`.
    - **Maximum vertical camera angle** is stored as `VerticalAngleMax` (Number). Unit is DegreeAngle. Default value is `90`.
    - **Minimum vertical camera angle** is stored as `VerticalAngleMin` (Number). Unit is DegreeAngle. Default value is `-90`.
    - **Vertical rotation speed factor** is stored as `VerticalSpeed` (Number). Unit is Dimensionless. Default value is `100`.

### Behavior actions

**Horizontal rotation speed factor**  
Change the horizontal rotation speed factor of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `MousePointerLock::FirstPersonPointerMapper::SetHorizontalSpeed`.

**Z position offset**  
Change the z position offset of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `MousePointerLock::FirstPersonPointerMapper::SetOffsetZ`.

**Maximum vertical camera angle**  
Change the maximum vertical camera angle of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `MousePointerLock::FirstPersonPointerMapper::SetVerticalAngleMax`.

**Minimum vertical camera angle**  
Change the minimum vertical camera angle of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `MousePointerLock::FirstPersonPointerMapper::SetVerticalAngleMin`.

**Vertical rotation speed factor**  
Change the vertical rotation speed factor of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `MousePointerLock::FirstPersonPointerMapper::SetVerticalSpeed`.


### Behavior conditions

**Horizontal rotation speed factor**  
Compare the horizontal rotation speed factor of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `MousePointerLock::FirstPersonPointerMapper::HorizontalSpeed`.

**Z position offset**  
Compare the z position offset of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `MousePointerLock::FirstPersonPointerMapper::OffsetZ`.

**Maximum vertical camera angle**  
Compare the maximum vertical camera angle of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `MousePointerLock::FirstPersonPointerMapper::VerticalAngleMax`.

**Minimum vertical camera angle**  
Compare the minimum vertical camera angle of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `MousePointerLock::FirstPersonPointerMapper::VerticalAngleMin`.

**Vertical rotation speed factor**  
Compare the vertical rotation speed factor of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `MousePointerLock::FirstPersonPointerMapper::VerticalSpeed`.


### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.FirstPersonPointerMapper::HorizontalSpeed()` | Return the horizontal rotation speed factor of the object. ||
| `Object.FirstPersonPointerMapper::OffsetZ()` | Return the z position offset of the object. ||
| `Object.FirstPersonPointerMapper::VerticalAngleMax()` | Return the maximum vertical camera angle of the object. ||
| `Object.FirstPersonPointerMapper::VerticalAngleMin()` | Return the minimum vertical camera angle of the object. ||
| `Object.FirstPersonPointerMapper::VerticalSpeed()` | Return the vertical rotation speed factor of the object. ||


---

*This page is an auto-generated reference page about the **Mouse Pointer Lock** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).