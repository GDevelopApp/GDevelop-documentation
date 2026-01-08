# 2D Top-Down Physics Car

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/b4a3bb68575adbecb4418e0397ef8c05913e1f0757dfd111de7e6a4ff31eb149_car-back.svg" class="extension-icon"></img>
Simulate top-down car motion with drifting.

**Authors and contributors** to this experimental extension: [D8H](https://gd.games/D8H).

---

Simulate car motion, from a top-down view, with the 2D Physics Engine behavior.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Physics car 

Simulate 2D car motion, from a top-down view. 

### Behavior properties

- **Acceleration** (🔢 Number, Acceleration). Default value is `500`.
- **Front wheels position** (🔢 Number). 0 means at the center, 1 means at the front. Default value is `0.80000000000000004`.
- **Rear wheels position** (🔢 Number, Dimensionless). 0 means at the center, 1 means at the back. Default value is `0.80000000000000004`.
- **Maximum speed** (🔢 Number, Speed). Default value is `800`.
- **Maximum steering angle** (🔢 Number, Angle). Default value is `30`.
- **Sterring speed when turning back** (🔢 Number, Angular speed). Default value is `240`.
- **Steering speed** (🔢 Number, Angular speed). Default value is `50`.
- **Wheel grip ratio (from 0 to 1)** (🔢 Number, Dimensionless). A ratio of 0 is like driving on ice. Default value is `0.5`.

??? quote "See internal technical details"


    - **Acceleration** is stored as `Acceleration` (Number). Unit is PixelAcceleration. Default value is `500`.
    - **Front wheels position** is stored as `FrontWheelsPosition` (Number). Default value is `0.80000000000000004`.
    > This behavior must be used on an object also having a behavior with type "Physics2::Physics2Behavior". This is stored on property `Physics2`.

    - **Rear wheels position** is stored as `RearWheelsPosition` (Number). Unit is Dimensionless. Default value is `0.80000000000000004`.
    - **Maximum speed** is stored as `SpeedMax` (Number). Unit is PixelSpeed. Default value is `800`.
    - **Maximum steering angle** is stored as `SteeringAngleMax` (Number). Unit is DegreeAngle. Default value is `30`.
    - **Sterring speed when turning back** is stored as `SteeringBackSpeed` (Number). Unit is AngularSpeed. Default value is `240`.
    - **Steering speed** is stored as `SteeringSpeed` (Number). Unit is AngularSpeed. Default value is `50`.
    - **Wheel grip ratio (from 0 to 1)** is stored as `WheelGripRatio` (Number). Unit is Dimensionless. Default value is `0.5`.

### Behavior actions

**Draw forces for debug**  
Draw forces applying on the car for debug purpose.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (👾 Object): Shape painter

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsCar::PhysicsCar::DrawDebug`.

**Acceleration**  
Change the acceleration of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsCar::PhysicsCar::SetAcceleration`.

**Maximum speed**  
Change the maximum speed of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsCar::PhysicsCar::SetSpeedMax`.

**Steering angle**  
Change the steering angle of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsCar::PhysicsCar::SetSteeringAngle`.

**Maximum steering angle**  
Change the maximum steering angle of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsCar::PhysicsCar::SetSteeringAngleMax`.

**Sterring back speed**  
Change the sterring speed when turning back of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsCar::PhysicsCar::SetSteeringBackSpeed`.

**Steering speed**  
Change the steering speed of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsCar::PhysicsCar::SetSteeringSpeed`.

**Wheel grip ratio**  
Change the wheel grip ratio of the object (from 0 to 1). A ratio of 0 is like driving on ice.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsCar::PhysicsCar::SetWheelGripRatio`.

**Simulate acceleration stick**  
Simulate an acceleration stick for a given axis force.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Stick force

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsCar::PhysicsCar::SimulateAccelerationStick`.

**Simulate down key press**  
Simulate a press of the down key.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsCar::PhysicsCar::SimulateDownKey`.

**Simulate left key press**  
Simulate a press of the left key.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsCar::PhysicsCar::SimulateLeftKey`.

**Simulate right key press**  
Simulate a press of the right key.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsCar::PhysicsCar::SimulateRightKey`.

**Simulate steering stick**  
Simulate a steering stick for a given axis force.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Stick force

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsCar::PhysicsCar::SimulateSteeringStick`.

**Simulate up key press**  
Simulate a press of the up key.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsCar::PhysicsCar::SimulateUpKey`.


### Behavior conditions

**Acceleration**  
Compare the acceleration of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PhysicsCar::PhysicsCar::Acceleration`.

**Maximum speed**  
Compare the maximum speed of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PhysicsCar::PhysicsCar::SpeedMax`.

**Steering angle**  
Compare the steering angle of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PhysicsCar::PhysicsCar::SteeringAngle`.

**Maximum steering angle**  
Compare the maximum steering angle of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PhysicsCar::PhysicsCar::SteeringAngleMax`.

**Sterring back speed**  
Compare the sterring speed when turning back of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PhysicsCar::PhysicsCar::SteeringBackSpeed`.

**Steering speed**  
Compare the steering speed of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PhysicsCar::PhysicsCar::SteeringSpeed`.

**Wheel grip ratio**  
Compare the wheel grip ratio of the object (from 0 to 1). A ratio of 0 is like driving on ice.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PhysicsCar::PhysicsCar::WheelGripRatio`.


### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.PhysicsCar::Acceleration()` | Return the acceleration of the object. ||
| `Object.PhysicsCar::SpeedMax()` | Return the maximum speed of the object. ||
| `Object.PhysicsCar::SteeringAngle()` | Return the steering angle of the object. ||
| `Object.PhysicsCar::SteeringAngleMax()` | Return the maximum steering angle of the object. ||
| `Object.PhysicsCar::SteeringBackSpeed()` | Return the sterring speed when turning back of the object. ||
| `Object.PhysicsCar::SteeringSpeed()` | Return the steering speed of the object. ||
| `Object.PhysicsCar::WheelGripRatio()` | Return the wheel grip ratio of the object (from 0 to 1). A ratio of 0 is like driving on ice. ||


---

*This page is an auto-generated reference page about the **2D Top-Down Physics Car** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).