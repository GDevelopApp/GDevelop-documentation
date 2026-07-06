# 3D physics airplane

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/Line Hero Pack/Master/SVG/Vehicles and Transport/49e91b8e69b677706be23ab4f1ca25d6771c0312e5f77dc1d93f95e7afa396b0_Vehicles and Transport_airplane_air_plane_fly.svg" class="extension-icon"></img>
Simulate an airplane using the 3D physics.

**Authors and contributors** to this experimental extension: [D8H](https://gd.games/D8H).

!!! warning
    This is an extension made by a community member and it only got through a
    light review by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of fully reviewed extensions.

---

Simulate an airplane with simple physics. The airplane can go in any direction and spin back to level with the horizon when players release direction keys.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## 3D physics airplane 

Simulate an airplane using the 3D physics. 

### Behavior properties

- **Halfway time for force feedback spinning** (🔢 Number, Duration). Spin back to level with the horizon when direction inputs are released. Default value is `0.25`.
- **Forward acceleration** (🔢 Number, Acceleration). Default value is `10`.
- **Forward deceleration** (🔢 Number, Acceleration). Default value is `5`.
- **Forward max speed** (🔢 Number, Speed). Default value is `20`.
- **Forward min speed** (🔢 Number, Speed). Default value is `10`.
- **Horizontal max angular speed** (🔢 Number, Angular speed). Default value is `45`.
- **Halfway time for spinning** (🔢 Number, Duration). Default value is `0.5`.
- **Max spin** (🔢 Number, Angle). Default value is `60`.
- **Vertical max angular speed** (🔢 Number, Angular speed). Default value is `45`.

??? quote "See internal technical details"


    - **Halfway time for force feedback spinning** is stored as `ForceFeedbackSpinHalfwayDuration` (Number). Unit is Second. Default value is `0.25`.
    - **Forward acceleration** is stored as `ForwardAcceleration` (Number). Unit is PixelAcceleration. Default value is `10`.
    - **Forward deceleration** is stored as `ForwardDeceleration` (Number). Unit is PixelAcceleration. Default value is `5`.
    - **Forward max speed** is stored as `ForwardSpeedMax` (Number). Unit is PixelSpeed. Default value is `20`.
    - **Forward min speed** is stored as `ForwardSpeedMin` (Number). Unit is PixelSpeed. Default value is `10`.
    - **Horizontal max angular speed** is stored as `HorizontalAngularSpeedMax` (Number). Unit is AngularSpeed. Default value is `45`.
    > This behavior must be used on an object also having a behavior with type "Scene3D::Base3DBehavior". This is stored on property `Object3D`.

    > This behavior must be used on an object also having a behavior with type "Physics3D::Physics3DBehavior". This is stored on property `Physics3DBehavior`.

    - **Halfway time for spinning** is stored as `SpinHalfwayDuration` (Number). Unit is Second. Default value is `0.5`.
    - **Max spin** is stored as `SpinMax` (Number). Unit is DegreeAngle. Default value is `60`.
    - **Vertical max angular speed** is stored as `VerticalAngularSpeedMax` (Number). Unit is AngularSpeed. Default value is `45`.

### Behavior actions

**Current forward speed**  
Change the current forward speed of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsAirplane3D::PhysicsAirplane3D::SetCurrentForwardSpeed`.

**Current horizontal angular speed**  
Change the current horizontal angular speed of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsAirplane3D::PhysicsAirplane3D::SetCurrentHorizontalAngularSpeed`.

**Current vertical angular speed**  
Change the current vertical angular speed of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsAirplane3D::PhysicsAirplane3D::SetCurrentVerticalAngularSpeed`.

**Halfway time for force feedback spinning**  
Change the halfway time for force feedback spinning of the object. Spin back to level with the horizon when direction inputs are released. Can be set to 0 to disable it.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsAirplane3D::PhysicsAirplane3D::SetForceFeedbackSpinHalfwayDuration`.

**Forward acceleration**  
Change the forward acceleration of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsAirplane3D::PhysicsAirplane3D::SetForwardAcceleration`.

**Forward deceleration**  
Change the forward deceleration of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsAirplane3D::PhysicsAirplane3D::SetForwardDeceleration`.

**Forward max speed**  
Change the forward max speed of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsAirplane3D::PhysicsAirplane3D::SetForwardSpeedMax`.

**Forward min speed**  
Change the forward min speed of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsAirplane3D::PhysicsAirplane3D::SetForwardSpeedMin`.

**Horizontal max angular speed**  
Change the horizontal max angular speed of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsAirplane3D::PhysicsAirplane3D::SetHorizontalAngularSpeedMax`.

**Halfway time for spinning**  
Change the halfway time for spinning of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsAirplane3D::PhysicsAirplane3D::SetSpinHalfwayDuration`.

**Max spin**  
Change the max spin of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsAirplane3D::PhysicsAirplane3D::SetSpinMax`.

**Vertical max angular speed**  
Change the vertical max angular speed of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsAirplane3D::PhysicsAirplane3D::SetVerticalAngularSpeedMax`.

**Simulate accelerator key press**  
Simulate a press of the accelerator key.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsAirplane3D::PhysicsAirplane3D::SimulateAcceleratorKey`.

**Simulate accelerator stick control**  
Simulate an accelerator stick control.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Force (-1 to 1)

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsAirplane3D::PhysicsAirplane3D::SimulateAcceleratorStick`.

**Simulate turn down key press**  
Simulate a press of the move down key.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsAirplane3D::PhysicsAirplane3D::SimulateTurnDownKey`.

**Simulate turn horizontally stick control**  
Simulate turn horizontally stick control.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Force (-1 to 1)

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsAirplane3D::PhysicsAirplane3D::SimulateTurnHorizontallyStick`.

**Simulate turn left key press**  
Simulate a press of the turn left key.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsAirplane3D::PhysicsAirplane3D::SimulateTurnLeftKey`.

**Simulate turn right key press**  
Simulate a press of the turn right key.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsAirplane3D::PhysicsAirplane3D::SimulateTurnRightKey`.

**Simulate turn up key press**  
Simulate a press of the move up key.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsAirplane3D::PhysicsAirplane3D::SimulateTurnUpKey`.

**Simulate turn vertically stick control**  
Simulate turn vertically stick control.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Force (-1 to 1)

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsAirplane3D::PhysicsAirplane3D::SimulateTurnVerticallyStick`.


### Behavior conditions

**Current forward speed**  
Compare the current forward speed of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PhysicsAirplane3D::PhysicsAirplane3D::CurrentForwardSpeed`.

**Current horizontal angular speed**  
Compare the current horizontal angular speed of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PhysicsAirplane3D::PhysicsAirplane3D::CurrentHorizontalAngularSpeed`.

**Current spin**  
Compare the current spin of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PhysicsAirplane3D::PhysicsAirplane3D::CurrentSpin`.

**Current vertical angular speed**  
Compare the current vertical angular speed of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PhysicsAirplane3D::PhysicsAirplane3D::CurrentVerticalAngularSpeed`.

**Halfway time for force feedback spinning**  
Compare the halfway time for force feedback spinning of the object. Spin back to level with the horizon when direction inputs are released. Can be set to 0 to disable it.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PhysicsAirplane3D::PhysicsAirplane3D::ForceFeedbackSpinHalfwayDuration`.

**Forward acceleration**  
Compare the forward acceleration of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PhysicsAirplane3D::PhysicsAirplane3D::ForwardAcceleration`.

**Forward deceleration**  
Compare the forward deceleration of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PhysicsAirplane3D::PhysicsAirplane3D::ForwardDeceleration`.

**Forward max speed**  
Compare the forward max speed of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PhysicsAirplane3D::PhysicsAirplane3D::ForwardSpeedMax`.

**Forward min speed**  
Compare the forward min speed of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PhysicsAirplane3D::PhysicsAirplane3D::ForwardSpeedMin`.

**Horizontal max angular speed**  
Compare the horizontal max angular speed of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PhysicsAirplane3D::PhysicsAirplane3D::HorizontalAngularSpeedMax`.

**Halfway time for spinning**  
Compare the halfway time for spinning of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PhysicsAirplane3D::PhysicsAirplane3D::SpinHalfwayDuration`.

**Max spin**  
Compare the max spin of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PhysicsAirplane3D::PhysicsAirplane3D::SpinMax`.

**Vertical max angular speed**  
Compare the vertical max angular speed of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PhysicsAirplane3D::PhysicsAirplane3D::VerticalAngularSpeedMax`.


### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.PhysicsAirplane3D::CurrentForwardSpeed()` | Return the current forward speed of the object. ||
| `Object.PhysicsAirplane3D::CurrentHorizontalAngularSpeed()` | Return the current horizontal angular speed of the object. ||
| `Object.PhysicsAirplane3D::CurrentSpin()` | Return the current spin of the object. ||
| `Object.PhysicsAirplane3D::CurrentVerticalAngularSpeed()` | Return the current vertical angular speed of the object. ||
| `Object.PhysicsAirplane3D::ForceFeedbackSpinHalfwayDuration()` | Return the halfway time for force feedback spinning of the object. Spin back to level with the horizon when direction inputs are released. Can be set to 0 to disable it. ||
| `Object.PhysicsAirplane3D::ForwardAcceleration()` | Return the forward acceleration of the object. ||
| `Object.PhysicsAirplane3D::ForwardDeceleration()` | Return the forward deceleration of the object. ||
| `Object.PhysicsAirplane3D::ForwardSpeedMax()` | Return the forward max speed of the object. ||
| `Object.PhysicsAirplane3D::ForwardSpeedMin()` | Return the forward min speed of the object. ||
| `Object.PhysicsAirplane3D::HorizontalAngularSpeedMax()` | Return the horizontal max angular speed of the object. ||
| `Object.PhysicsAirplane3D::SpinHalfwayDuration()` | Return the halfway time for spinning of the object. ||
| `Object.PhysicsAirplane3D::SpinMax()` | Return the max spin of the object. ||
| `Object.PhysicsAirplane3D::VerticalAngularSpeedMax()` | Return the vertical max angular speed of the object. ||

## 3D airplane keyboard mapper 

Control a 3D physics airplane with a keyboard. 

### Behavior properties

- **Accelerator key** (KeyboardKey). Default value is `LShift`.
- **Turn down key** (KeyboardKey). Default value is `Up`.
- **Turn left key** (KeyboardKey). Default value is `Left`.
- **Turn right key** (KeyboardKey). Default value is `Right`.
- **Turn up key** (KeyboardKey). Default value is `Down`.

??? quote "See internal technical details"


    - **Accelerator key** is stored as `Accelerator` (KeyboardKey). Default value is `LShift`.
    > This behavior must be used on an object also having a behavior with type "PhysicsAirplane3D::PhysicsAirplane3D". This is stored on property `PhysicsAirplane3D`.

    - **Turn down key** is stored as `TurnDown` (KeyboardKey). Default value is `Up`.
    - **Turn left key** is stored as `TurnLeft` (KeyboardKey). Default value is `Left`.
    - **Turn right key** is stored as `TurnRight` (KeyboardKey). Default value is `Right`.
    - **Turn up key** is stored as `TurnUp` (KeyboardKey). Default value is `Down`.

### Behavior actions

**Accelerator key**  
Change the accelerator key of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (keyboardKey): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsAirplane3D::PhysicsAirplane3DKeyboardMapper::SetAccelerator`.

**Turn down key**  
Change the turn down key of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (keyboardKey): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsAirplane3D::PhysicsAirplane3DKeyboardMapper::SetTurnDown`.

**Turn left key**  
Change the turn left key of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (keyboardKey): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsAirplane3D::PhysicsAirplane3DKeyboardMapper::SetTurnLeft`.

**Turn right key**  
Change the turn right key of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (keyboardKey): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsAirplane3D::PhysicsAirplane3DKeyboardMapper::SetTurnRight`.

**Turn up key**  
Change the turn up key of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (keyboardKey): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsAirplane3D::PhysicsAirplane3DKeyboardMapper::SetTurnUp`.


### Behavior conditions

**Accelerator key**  
Compare the accelerator key of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (keyboardKey): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PhysicsAirplane3D::PhysicsAirplane3DKeyboardMapper::Accelerator`.

**Turn down key**  
Compare the turn down key of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (keyboardKey): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PhysicsAirplane3D::PhysicsAirplane3DKeyboardMapper::TurnDown`.

**Turn left key**  
Compare the turn left key of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (keyboardKey): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PhysicsAirplane3D::PhysicsAirplane3DKeyboardMapper::TurnLeft`.

**Turn right key**  
Compare the turn right key of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (keyboardKey): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PhysicsAirplane3D::PhysicsAirplane3DKeyboardMapper::TurnRight`.

**Turn up key**  
Compare the turn up key of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (keyboardKey): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PhysicsAirplane3D::PhysicsAirplane3DKeyboardMapper::TurnUp`.


### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.PhysicsAirplane3DKeyboardMapper::Accelerator()` | Return the accelerator key of the object. ||
| `Object.PhysicsAirplane3DKeyboardMapper::TurnDown()` | Return the turn down key of the object. ||
| `Object.PhysicsAirplane3DKeyboardMapper::TurnLeft()` | Return the turn left key of the object. ||
| `Object.PhysicsAirplane3DKeyboardMapper::TurnRight()` | Return the turn right key of the object. ||
| `Object.PhysicsAirplane3DKeyboardMapper::TurnUp()` | Return the turn up key of the object. ||


---

*This page is an auto-generated reference page about the **3D physics airplane** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).