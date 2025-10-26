# Top-down movement Reference

Allows to move an object in either 4 or 8 directions, with the keyboard (default), a virtual stick (for this, also add the "Top-down multitouch controller mapper" behavior and a"Multitouch Joystick" object), gamepad or manually using events. [Read more explanations about it.](/gdevelop5/behaviors/topdown)



## Top-down movement (4 or 8 directions) 

Move objects left, up, right, and down (and, optionally, diagonally). 

### Behavior actions

**Acceleration**  
Change the acceleration of the object

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Acceleration (in pixels per second per second)

    > Technical note: this action internal type (in GDevelop JSON) is `TopDownMovementBehavior::Acceleration`.

**Diagonal movement**  
Allow or restrict diagonal movement

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): Allow?

    > Technical note: this action internal type (in GDevelop JSON) is `TopDownMovementBehavior::AllowDiagonals`.

**Rotation offset**  
Change the rotation offset applied when moving the object

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Angle (in degrees)

    > Technical note: this action internal type (in GDevelop JSON) is `TopDownMovementBehavior::AngleOffset`.

**Angular maximum speed**  
Change the maximum angular speed of the object

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Max angular speed (in degrees per second)

    > Technical note: this action internal type (in GDevelop JSON) is `TopDownMovementBehavior::AngularMaxSpeed`.

**Deceleration**  
Change the deceleration of the object

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Deceleration (in pixels per second per second)

    > Technical note: this action internal type (in GDevelop JSON) is `TopDownMovementBehavior::Deceleration`.

**Ignore default controls**  
De/activate the use of default controls.  
If deactivated, use the simulated actions to move the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): Ignore controls

    > Technical note: this action internal type (in GDevelop JSON) is `TopDownMovementBehavior::IgnoreDefaultControls`.

**Maximum speed**  
Change the maximum speed of the object

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Max speed (in pixels per second)

    > Technical note: this action internal type (in GDevelop JSON) is `TopDownMovementBehavior::MaxSpeed`.

**Rotate the object**  
Enable or disable rotation of the object

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): Rotate object?

    > Technical note: this action internal type (in GDevelop JSON) is `TopDownMovementBehavior::RotateObject`.

**Simulate control**  
Simulate a press of a key.  
Valid keys are Left, Right, Up, Down.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 String): Key (one of: "Left", "Right", "Up", "Down")

    > Technical note: this action internal type (in GDevelop JSON) is `TopDownMovementBehavior::SimulateControl`.

**Simulate down key press**  
Simulate a press of down key.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this action internal type (in GDevelop JSON) is `TopDownMovementBehavior::SimulateDownKey`.

**Simulate left key press**  
Simulate a press of left key.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this action internal type (in GDevelop JSON) is `TopDownMovementBehavior::SimulateLeftKey`.

**Simulate right key press**  
Simulate a press of right key.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this action internal type (in GDevelop JSON) is `TopDownMovementBehavior::SimulateRightKey`.

**Simulate stick control**  
Simulate a stick control.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Stick angle (in degrees)
    - Parameter 3 (🔢 Number): Stick force (between 0 and 1)

    > Technical note: this action internal type (in GDevelop JSON) is `TopDownMovementBehavior::SimulateStick`.

**Simulate up key press**  
Simulate a press of up key.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this action internal type (in GDevelop JSON) is `TopDownMovementBehavior::SimulateUpKey`.

**Movement angle offset**  
Change the movement angle offset.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Angle (in degrees)

    > Technical note: this action internal type (in GDevelop JSON) is `TopDownMovementBehavior::TopDownMovementBehavior::SetMovementAngleOffset`.

**Speed on the X axis**  
Change the speed on the X axis of the movement

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Speed (in pixels per second)

    > Technical note: this action internal type (in GDevelop JSON) is `TopDownMovementBehavior::TopDownMovementBehavior::SetVelocityX`.

**Speed on the Y axis**  
Change the speed on the Y axis of the movement

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Speed (in pixels per second)

    > Technical note: this action internal type (in GDevelop JSON) is `TopDownMovementBehavior::TopDownMovementBehavior::SetVelocityY`.

### Behavior conditions

**Acceleration**  
Compare the acceleration of the object

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Acceleration to compare to (in pixels per second per second)

    > Technical note: this condition internal type (in GDevelop JSON) is `TopDownMovementBehavior::Acceleration`.

**Rotation offset**  
Compare the rotation offset applied when moving the object

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Angle to compare to (in degrees)

    > Technical note: this condition internal type (in GDevelop JSON) is `TopDownMovementBehavior::AngleOffset`.

**Angular maximum speed**  
Compare the maximum angular speed of the object

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Max angular speed to compare to (in degrees per second)

    > Technical note: this condition internal type (in GDevelop JSON) is `TopDownMovementBehavior::AngularMaxSpeed`.

**Deceleration**  
Compare the deceleration of the object

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Deceleration to compare to (in pixels per second per second)

    > Technical note: this condition internal type (in GDevelop JSON) is `TopDownMovementBehavior::Deceleration`.

**Diagonal movement**  
Check if the object is allowed to move diagonally

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this condition internal type (in GDevelop JSON) is `TopDownMovementBehavior::DiagonalsAllowed`.

**Is moving**  
Check if the object is moving.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this condition internal type (in GDevelop JSON) is `TopDownMovementBehavior::IsMoving`.

**Maximum speed**  
Compare the maximum speed of the object

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Max speed to compare to (in pixels per second)

    > Technical note: this condition internal type (in GDevelop JSON) is `TopDownMovementBehavior::MaxSpeed`.

**Object rotated**  
Check if the object is rotated while traveling on its path.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this condition internal type (in GDevelop JSON) is `TopDownMovementBehavior::ObjectRotated`.

**Speed**  
Compare the speed of the object

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Speed to compare to (in pixels per second)

    > Technical note: this condition internal type (in GDevelop JSON) is `TopDownMovementBehavior::Speed`.

**Angle of movement**  
Compare the angle of the top-down movement of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Angle (in degrees)
    - Parameter 3 (🔢 Number): Tolerance (in degrees)

    > Technical note: this condition internal type (in GDevelop JSON) is `TopDownMovementBehavior::TopDownMovementBehavior::IsMovementAngleAround`.

**Control pressed or simulated**  
A control was applied from a default control or simulated by an action.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 String): Key (one of: "Left", "Right", "Up", "Down", "Stick")

    > Technical note: this condition internal type (in GDevelop JSON) is `TopDownMovementBehavior::TopDownMovementBehavior::IsUsingControl`.

**Movement angle offset**  
Compare the movement angle offset.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Angle (in degrees)

    > Technical note: this condition internal type (in GDevelop JSON) is `TopDownMovementBehavior::TopDownMovementBehavior::MovementAngleOffset`.

**Speed on X axis**  
Compare the velocity of the top-down movement of the object on the X axis.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Speed to compare to (in pixels per second)

    > Technical note: this condition internal type (in GDevelop JSON) is `TopDownMovementBehavior::XVelocity`.

**Speed on Y axis**  
Compare the velocity of the top-down movement of the object on the Y axis.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Speed to compare to (in pixels per second)

    > Technical note: this condition internal type (in GDevelop JSON) is `TopDownMovementBehavior::YVelocity`.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.TopDownMovement::Acceleration()` | Acceleration of the object ||
| `Object.TopDownMovement::Angle()` | Angle, in degrees, of the movement ||
| `Object.TopDownMovement::AngleOffset()` | Rotation offset applied to the object ||
| `Object.TopDownMovement::AngularMaxSpeed()` | Angular maximum speed of the object ||
| `Object.TopDownMovement::Deceleration()` | Deceleration of the object ||
| `Object.TopDownMovement::MaxSpeed()` | Maximum speed of the object ||
| `Object.TopDownMovement::MovementAngleOffset()` | Return the movement angle offset. ||
| `Object.TopDownMovement::Speed()` | Speed of the object ||
| `Object.TopDownMovement::StickAngle()` | Return the angle of the simulated stick input (in degrees) ||
| `Object.TopDownMovement::XVelocity()` | Speed on the X axis of the movement ||
| `Object.TopDownMovement::YVelocity()` | Speed on the Y axis of the movement ||



---

The Top-down movement extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **Top-down movement** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).