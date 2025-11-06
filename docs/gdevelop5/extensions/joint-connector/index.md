# Joint connector

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/8834e0c63a962c74f1dab4c8f918c171261597341c4ca6574b300ab35855274b_human.svg" class="extension-icon"></img>
Create and manage physics joints between two objects.

**Authors and contributors** to this experimental extension: [D8H](https://gd.games/D8H), [VictrisGames](https://gd.games/VictrisGames), [planktonfun](https://gd.games/planktonfun).

!!! warning
    This is an extension made by a community member and it only got through a
    light review by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of fully reviewed extensions.

---

Weld joint

- Glue two objects together
- Joint is created at the center of the Joint Connector object

Revolute joint

- Two objects are connected but can rotate on the joint
- Angles can be restricted and joints can have motors that spin the objects
- Joint is created at the center of the Joint Connector object

Distance joint

- Two objects are forced to stay at set distance from each other
- Adjust the frequency property to change the stiffness of the spring
- Center of both objects must be inside the Joint Connector collision mask

Rope joint

- Two objects can get closer to each other but they cannot exceed their starting distance
- Center of both objects must be inside the Joint Connector collision mask

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Connect objects with a distance joint**  
Connect physics objects with a distance joint if the joint connector covers the center point of both objects.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Object to connect
    - Parameter 2 (🧩 Behavior): Physics Behavior
    - Parameter 3 (👾 Object): Joint connector (center of this object is used to create the joint)
    - Parameter 4 (🧩 Behavior): Distance joint connector

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `JointConnector::CreateDistanceJoints`.

**Connect overlapping objects with a revolute joint**  
Connect overlapping physics objects with a revolute joint.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Object to connect
    - Parameter 2 (🧩 Behavior): Physics Behavior
    - Parameter 3 (👾 Object): Joint connector (center of this object is used to create the joint)
    - Parameter 4 (🧩 Behavior): Revolute joint connector

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `JointConnector::CreateRevoluteJoints`.

**Connect objects with a rope joint**  
Connect physics objects with a rope joint if the joint connector covers the center point of both objects.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Object to connect
    - Parameter 2 (🧩 Behavior): Physics Behavior
    - Parameter 3 (👾 Object): Joint connector (center of this object is used to create the joint)
    - Parameter 4 (🧩 Behavior): Rope joint connector

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `JointConnector::CreateRopeJoints`.

**Connect overlapping objects with a weld joint**  
Connect overlapping physics objects with a weld joint.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Object to connect
    - Parameter 2 (🧩 Behavior): Physics Behavior
    - Parameter 3 (👾 Object): Joint connector (center of this object is used to create the joint)
    - Parameter 4 (🧩 Behavior): Weld joint connector

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `JointConnector::CreateWeldJoints`.




## Distance joint connector 

Create and manage distance joints between two objects. 
Acts like a spring because the objects try to stay the same distance apart. 

### Behavior properties

- **Breaking force** (🔢 Number, Force (in Newton)). Force required to break joint apart. Default value is `0`.
- **Damping ratio** (🔢 Number). Set a number between 0 and 1. Default value is `1`.
- **Frequency** (🔢 Number). Set a number between 0 and 60. Higher numbers represent a stiffer spring. Default value is `20`.

??? quote "See internal technical details"


    - **Breaking force** is stored as `BreakingForce` (Number). Unit is Newton. Default value is `0`.
    - **Damping ratio** is stored as `DampingRatio` (Number). Default value is `1`.
    - **Frequency** is stored as `Frequency` (Number). Default value is `20`.

### Behavior actions

**Break distance joint if it exceeds breaking force**  
Break distance joint if it exceeds breaking force.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (👾 Object): Object with joint
    - Parameter 3 (🧩 Behavior): Physics behavior

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `JointConnector::DistanceJoint::BreakJointIfNeeded`.

**Set the breaking force of a joint**  
Set the breaking force of a joint.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Breaking force

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `JointConnector::DistanceJoint::SetBreakingForce`.

**Set damping ratio of joint**  
Set dampting ratio of joint.  Range: 0 to 1.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Damping ratio

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `JointConnector::DistanceJoint::SetDampingRatio`.

**Set frequency of joint**  
Set frequency of joint.  Range: 0 to 60 (or the maximum FPS of game).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Frequency

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `JointConnector::DistanceJoint::SetFrequency`.


_No expressions for this behavior._


## Revolute joint connector 

Create and manage revolute joints between two objects.
Also known as a hinge joint because the objects act like they are connected with a hinge that pivots. 

### Behavior properties

- **Enable (or disable) angle limits on joint** (🔘 Boolean). Default value is `false`.
- **Breaking force** (🔢 Number). Force required to break joint apart. Default value is `0`.
- **Angle movement allowed in clockwise direction (degrees)** (🔢 Number). Default value is `0`.
- **Angle movement allowed in counter-clockwise direction (degrees)** (🔢 Number). Default value is `0`.
- **Motor enabled (or disabled) on joint** (🔘 Boolean). Default value is `false`.
- **Motor rotation speed of joint** (🔢 Number). Use negative values to rotate in the opposite direction. Default value is `0`.
- **Motor strength (torque) of joint** (🔢 Number). If motor speed is 0, then the motor will try to prevent rotation based on motor torque. Default value is `0`.

??? quote "See internal technical details"


    - **Enable (or disable) angle limits on joint** is stored as `AngleLimitsEnabled` (Boolean). Default value is `false`.
    - **Breaking force** is stored as `BreakingForce` (Number). Default value is `0`.
    - **Angle movement allowed in clockwise direction (degrees)** is stored as `ClockwiseAngleLimit` (Number). Default value is `0`.
    - **Angle movement allowed in counter-clockwise direction (degrees)** is stored as `CounterClockwiseAngleLimit` (Number). Default value is `0`.
    - **Motor enabled (or disabled) on joint** is stored as `MotorEnabled` (Boolean). Default value is `false`.
    - **Motor rotation speed of joint** is stored as `MotorSpeed` (Number). Default value is `0`.
    - **Motor strength (torque) of joint** is stored as `MotorTorque` (Number). Default value is `0`.

### Behavior actions

**Break revolute joint if it exceeds breaking force**  
Break revolute joint if it exceeds breaking force.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (👾 Object): Object with joint
    - Parameter 3 (🧩 Behavior): Physics behavior

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `JointConnector::RevoluteJoint::BreakJointIfNeeded`.

**Set the breaking force of a joint**  
Set the breaking force of a joint.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Breaking force

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `JointConnector::RevoluteJoint::SetBreakingForce`.

**Set clockwise angle limit of joint**  
Set clockwise angle limit of joint.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Clockwise angle limit (degrees)

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `JointConnector::RevoluteJoint::SetClockwiseAngleLimit`.

**Set counter-clockwise angle limit of joint**  
Set counter-clockwise angle limit of joint.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Couter-clockwise angle limit (degrees)

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `JointConnector::RevoluteJoint::SetCounterClockwiseAngleLimit`.

**Enable (or disable) angle limits on joint**  
Enable (or disable) angle limits on joint.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): Enable angle limits

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `JointConnector::RevoluteJoint::SetEnableAngleLimits`.

**Enable (or disable) motor of joint**  
Enable (or disable) motor of joint.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): Enable motor

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `JointConnector::RevoluteJoint::SetEnableMotor`.

**Motor enabled (or disabled) on joint**  
Change if motor enabled (or disabled) on joint.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): MotorEnabled

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `JointConnector::RevoluteJoint::SetMotorEnabled`.

**Set motor rotation speed of joint**  
Set motor rotation speed of joint.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Motor rotation speed

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `JointConnector::RevoluteJoint::SetMotorSpeed`.

**Set motor strength of joint**  
Set motor strength (torque) of joint.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Motor strength

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `JointConnector::RevoluteJoint::SetMotorStrength`.


### Behavior conditions

**Motor enabled (or disabled) on joint**  
Check if motor enabled (or disabled) on joint.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `JointConnector::RevoluteJoint::MotorEnabled`.


_No expressions for this behavior._


## Rope joint connector 

Create and manage rope joints between two objects. 
Objects can get closer, but they cannot exceed the starting distance from each other.
 

### Behavior properties

- **Breaking force** (🔢 Number, Force (in Newton)). Force required to break joint apart. Default value is `0`.
- **Damping ratio** (🔢 Number). Set a number between 0 and 1. Default value is `1`.
- **Frequency** (🔢 Number). Set a number between 0 and 60. Higher numbers represent a stiffer spring. Default value is `20`.

??? quote "See internal technical details"


    - **Breaking force** is stored as `BreakingForce` (Number). Unit is Newton. Default value is `0`.
    - **Damping ratio** is stored as `DampingRatio` (Number). Default value is `1`.
    - **Frequency** is stored as `Frequency` (Number). Default value is `20`.

### Behavior actions

**Break rope joint if it exceeds breaking force**  
Break rope joint if it exceeds breaking force.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (👾 Object): Object with joint
    - Parameter 3 (🧩 Behavior): Physics behavior

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `JointConnector::RopeJoint::BreakJointIfNeeded`.

**Breaking force**  
Change the force required to break joint apart.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `JointConnector::RopeJoint::SetBreakingForce`.

**Damping ratio**  
Change the damping ratio of the object. Set a number between 0 and 1.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `JointConnector::RopeJoint::SetDampingRatio`.

**Frequency**  
Change the frequency of the object. Set a number between 0 and 60. Higher numbers represent a stiffer spring.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `JointConnector::RopeJoint::SetFrequency`.

**Max distance between objects**  
Change the max distance between objects.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `JointConnector::RopeJoint::SetMaxDistance`.


### Behavior conditions

**Breaking force**  
Compare the force required to break joint apart.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `JointConnector::RopeJoint::BreakingForce`.

**Damping ratio**  
Compare the damping ratio of the object. Set a number between 0 and 1.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `JointConnector::RopeJoint::DampingRatio`.

**Frequency**  
Compare the frequency of the object. Set a number between 0 and 60. Higher numbers represent a stiffer spring.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `JointConnector::RopeJoint::Frequency`.

**Max distance between objects**  
Compare the max distance between objects.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `JointConnector::RopeJoint::MaxDistance`.


### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.RopeJoint::BreakingForce()` | Return the force required to break joint apart. ||
| `Object.RopeJoint::DampingRatio()` | Return the damping ratio of the object. Set a number between 0 and 1. ||
| `Object.RopeJoint::Frequency()` | Return the frequency of the object. Set a number between 0 and 60. Higher numbers represent a stiffer spring. ||
| `Object.RopeJoint::MaxDistance()` | Return the max distance between objects. ||

## Weld joint connector 

Create and manage weld joints between two objects.
Also known as a static joint because the objects stay glued in the same relative position to each other. 

### Behavior properties

- **Breaking force** (🔢 Number, Force (in Newton)). Force required to break joint apart. Default value is `0`.
- **Damping ratio** (🔢 Number). Set a number between 0 and 1. Default value is `1`.
- **Frequency** (🔢 Number). Set a number between 0 and 60. Higher numbers represent a stronger bond. Default value is `30`.

??? quote "See internal technical details"


    - **Breaking force** is stored as `BreakingForce` (Number). Unit is Newton. Default value is `0`.
    - **Damping ratio** is stored as `DampingRatio` (Number). Default value is `1`.
    - **Frequency** is stored as `Frequency` (Number). Default value is `30`.

### Behavior actions

**Break weld joint if it exceeds breaking force**  
Break weld joint if it exceeds breaking force.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (👾 Object): Object with joint
    - Parameter 3 (🧩 Behavior): Physics behavior

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `JointConnector::WeldJoint::BreakJointIfNeeded`.

**Set the breaking force of a joint**  
Set the breaking force of a joint.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Breaking force

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `JointConnector::WeldJoint::SetBreakingForce`.

**Set frequency of joint**  
Set frequency of joint.  Range: 0 to 60 (or the maximum FPS of game).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Frequency

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `JointConnector::WeldJoint::SetFrequency`.


_No expressions for this behavior._



---

*This page is an auto-generated reference page about the **Joint connector** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).