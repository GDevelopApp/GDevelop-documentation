# 3D physics engine Reference

The 3D physics engine simulates realistic object physics, with gravity, forces, collisions, joints, etc. It's perfect for almost all 3D games.

Objects like floors or wall objects should usually be set to "Static" as type. Objects that should be moveable are usually "Dynamic" (default). "Kinematic" objects (typically, players or controlled characters) are only moved by their "linear velocity" and "angular velocity" - they can interact with other objects but only these other objects will move.

Forces (and impulses) are expressed in all conditions/expressions/actions of the 3D physics engine in Newtons (N). Typical values for a force are 10-200 N. One meter is 100 pixels by default in the game (check the world scale). Mass is expressed in kilograms (kg). [Read more explanations about it.](/gdevelop5/behaviors/physics3d)

## Conditions

**Collision**  
Check if two objects collide.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 👾 Object
    - Parameter 3: 🧩 Behavior

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics3D::Collision`.

**Collision started**  
Check if two objects just started colliding during this frame.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 👾 Object
    - Parameter 3: 🧩 Behavior

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics3D::CollisionStarted`.

**Collision stopped**  
Check if two objects just stopped colliding at this frame.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 👾 Object
    - Parameter 3: 🧩 Behavior

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics3D::CollisionStopped`.

**Character is on given platform**  
Check if a 3D physics character is on a given platform.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (👾 Object): Platforms
    - Parameter 3: 🧩 Behavior

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics3D::IsObjectOnGivenFloor`.




## 3D physics engine 

Simulate realistic 3D physics for this object including gravity, forces, collisions, etc. 

### Behavior properties

- **Angular Damping** (🔢 Number). Angular damping reduces an object's rotational speed over time, making its spins slow down smoothly. Default value is `0.1`.
- **Type** (Choice, one of: "Static", "Dynamic", "Kinematic"). A static object won't move (perfect for obstacles). Dynamic objects can move. Kinematic will move according to forces applied to it only (useful for characters or specific mechanisms). Default value is `Dynamic`.
- **Considered as a bullet** (🔘 Boolean). Useful for fast moving objects which requires a more accurate collision detection. Default value is `false`.
- **Density** (🔢 Number). Define the weight of the object, according to its size. The bigger the density, the heavier the object. Default value is `123`.
- **Fixed Rotation** (🔘 Boolean). If enabled, the object won't rotate and will stay at the same angle. Default value is `false`.
- **Friction** (🔢 Number). The friction applied when touching other objects. The higher the value, the more friction. Default value is `0.3`.
- **Gravity Scale** (🔢 Number). Gravity Scale multiplies the world's gravity for a specific body, making it experience stronger or weaker gravitational force than normal. Default value is `1`.
- **Linear Damping** (🔢 Number). Linear damping reduces an object's movement speed over time, making its motion slow down smoothly. Default value is `0.1`.
- **Mass override** (🔢 Number). Leave at 0 to use the density. Default value is `0`.
- **Restitution** (🔢 Number). The "bounciness" of the object. The higher the value, the more other objects will bounce against it. Default value is `0.1`.
- **Shape** (Choice, one of: "Box", "Capsule", "Cylinder", "Sphere"). Default value is `Box`.
- **Shape orientation** (Choice, one of: "Z", "Y", "X"). Default value is `Z`.

??? quote "See internal technical details"


    - **Angular Damping** is stored as `angularDamping` (Number). Default value is `0.1`.
    - **Type** is stored as `bodyType` (Choice). Default value is `Dynamic`.
    - **Considered as a bullet** is stored as `bullet` (Boolean). Default value is `false`.
    - **Density** is stored as `density` (Number). Default value is `123`.
    - **Fixed Rotation** is stored as `fixedRotation` (Boolean). Default value is `false`.
    - **Friction** is stored as `friction` (Number). Default value is `0.3`.
    - **Gravity Scale** is stored as `gravityScale` (Number). Default value is `1`.
    - **Linear Damping** is stored as `linearDamping` (Number). Default value is `0.1`.
    - **Mass override** is stored as `massOverride` (Number). Default value is `0`.
    > This behavior must be used on an object also having a behavior with type "Scene3D::Base3DBehavior". This is stored on property `object3D`.

    - **Restitution** is stored as `restitution` (Number). Default value is `0.1`.
    - **Shape** is stored as `shape` (Choice). Default value is `Box`.
    - **Shape orientation** is stored as `shapeOrientation` (Choice). Default value is `Z`.

### Behavior shared properties

- **gravityX** (🔢 Number, Force (in Newton)). Default value is `0`.
- **gravityY** (🔢 Number, Force (in Newton)). Default value is `456`.
- **gravityZ** (🔢 Number, Force (in Newton)). Default value is `-9.8`.
- **worldScale** (🔢 Number). Default value is `100`.

??? quote "See internal technical details"


    - **gravityX** is stored as `gravityX` (Number). Unit is Newton. Default value is `0`.
    - **gravityY** is stored as `gravityY` (Number). Unit is Newton. Default value is `456`.
    - **gravityZ** is stored as `gravityZ` (Number). Unit is Newton. Default value is `-9.8`.
    - **worldScale** is stored as `worldScale` (Number). Default value is `100`.

### Behavior actions

**Apply angular impulse (rotational impulse)**  
Apply an angular impulse (also called a "rotational impulse") to the object. It instantly changes the rotation speed, to give an initial speed for instance.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Angular impulse around X (N·m·s)
    - Parameter 3 (🔢 Number): Angular impulse around Y (N·m·s)
    - Parameter 4 (🔢 Number): Angular impulse around Z (N·m·s)
      An impulse is like a rotation speed addition but depends on the mass.

    > Technical note: this action internal type (in GDevelop JSON) is `Physics3D::Physics3DBehavior::ApplyAngularImpulse`.

**Apply force (at a point)**  
Apply a force to the object over time. It "accelerates" an object and must be used every frame during a time period.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): X component (N)
    - Parameter 3 (🔢 Number): Y component (N)
    - Parameter 4 (🔢 Number): Z component (N)
      A force is like an acceleration but depends on the mass.
    - Parameter 5 (🔢 Number): Application point on X axis
    - Parameter 6 (🔢 Number): Application point on Y axis
    - Parameter 7 (🔢 Number): Application point on Z axis
      Use `MassCenterX`, `MassCenterY` and `MassCenterZ` expressions to avoid any rotation.

    > Technical note: this action internal type (in GDevelop JSON) is `Physics3D::Physics3DBehavior::ApplyForce`.

**Apply force (at center)**  
Apply a force to the object over time. It "accelerates" an object and must be used every frame during a time period.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): X component (N)
    - Parameter 3 (🔢 Number): Y component (N)
    - Parameter 4 (🔢 Number): Z component (N)
      A force is like an acceleration but depends on the mass.

    > Technical note: this action internal type (in GDevelop JSON) is `Physics3D::Physics3DBehavior::ApplyForceAtCenter`.

**Apply force toward position**  
Apply a force to the object over time to move it toward a position. It "accelerates" an object and must be used every frame during a time period.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Length (N)
      A force is like an acceleration but depends on the mass.
    - Parameter 3 (🔢 Number): X position
    - Parameter 4 (🔢 Number): Y position
    - Parameter 5 (🔢 Number): Z position

    > Technical note: this action internal type (in GDevelop JSON) is `Physics3D::Physics3DBehavior::ApplyForceTowardPosition`.

**Apply impulse (at a point)**  
Apply an impulse to the object. It instantly changes the speed, to give an initial speed for instance.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): X component (N·s or kg·m·s⁻¹)
    - Parameter 3 (🔢 Number): Y component (N·s or kg·m·s⁻¹)
    - Parameter 4 (🔢 Number): Z component (N·s or kg·m·s⁻¹)
      An impulse is like a speed addition but depends on the mass.
    - Parameter 5 (🔢 Number): Application point on X axis
    - Parameter 6 (🔢 Number): Application point on Y axis
    - Parameter 7 (🔢 Number): Application point on Z axis
      Use `MassCenterX`, `MassCenterY` and `MassCenterZ` expressions to avoid any rotation.

    > Technical note: this action internal type (in GDevelop JSON) is `Physics3D::Physics3DBehavior::ApplyImpulse`.

**Apply impulse (at center)**  
Apply an impulse to the object. It instantly changes the speed, to give an initial speed for instance.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): X component (N·s or kg·m·s⁻¹)
    - Parameter 3 (🔢 Number): Y component (N·s or kg·m·s⁻¹)
    - Parameter 4 (🔢 Number): Z component (N·s or kg·m·s⁻¹)
      An impulse is like a speed addition but depends on the mass.

    > Technical note: this action internal type (in GDevelop JSON) is `Physics3D::Physics3DBehavior::ApplyImpulseAtCenter`.

**Apply impulse toward position**  
Apply an impulse to the object to move it toward a position. It instantly changes the speed, to give an initial speed for instance.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Length (N·s or kg·m·s⁻¹)
      An impulse is like a speed addition but depends on the mass.
    - Parameter 3 (🔢 Number): X position
    - Parameter 4 (🔢 Number): Y position
    - Parameter 5 (🔢 Number): Z position

    > Technical note: this action internal type (in GDevelop JSON) is `Physics3D::Physics3DBehavior::ApplyImpulseTowardPosition`.

**Apply torque (rotational force)**  
Apply a torque (also called "rotational force") to the object. It "accelerates" an object rotation and must be used every frame during a time period.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Torque around X (N·m)
    - Parameter 3 (🔢 Number): Torque around Y (N·m)
    - Parameter 4 (🔢 Number): Torque around Z (N·m)
      A torque is like a rotation acceleration but depends on the mass.

    > Technical note: this action internal type (in GDevelop JSON) is `Physics3D::Physics3DBehavior::ApplyTorque`.

**Enable layer**  
Enable or disable a layer for an object. Two objects collide if any layer of the first object matches any mask of the second one and vice versa.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Layer (1 - 8)
    - Parameter 3 (❓ Yes or No): Enable

    > Technical note: this action internal type (in GDevelop JSON) is `Physics3D::Physics3DBehavior::EnableLayer`.

**Enable mask**  
Enable or disable a mask for an object. Two objects collide if any layer of the first object matches any mask of the second one and vice versa.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Mask (1 - 8)
    - Parameter 3 (❓ Yes or No): Enable

    > Technical note: this action internal type (in GDevelop JSON) is `Physics3D::Physics3DBehavior::EnableMask`.

**Angular damping**  
Change the object angular damping. How much angular speed is lost across the time..

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `Physics3D::Physics3DBehavior::SetAngularDamping`.

**Angular velocity X**  
Change the object angular velocity around X.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Angular speed (in degrees per second)

    > Technical note: this action internal type (in GDevelop JSON) is `Physics3D::Physics3DBehavior::SetAngularVelocityX`.

**Angular velocity Y**  
Change the object angular velocity around Y.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Angular speed (in degrees per second)

    > Technical note: this action internal type (in GDevelop JSON) is `Physics3D::Physics3DBehavior::SetAngularVelocityY`.

**Angular velocity Z**  
Change the object angular velocity around Z.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Angular speed (in degrees per second)

    > Technical note: this action internal type (in GDevelop JSON) is `Physics3D::Physics3DBehavior::SetAngularVelocityZ`.

**Treat as bullet**  
Treat the object as a bullet. Better collision handling on high speeds at cost of some performance.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): Treat as bullet

    > Technical note: this action internal type (in GDevelop JSON) is `Physics3D::Physics3DBehavior::SetBullet`.

**Density**  
Change the object density. The body's density and volume determine its mass..

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `Physics3D::Physics3DBehavior::SetDensity`.

**Fixed rotation**  
Enable or disable an object fixed rotation. If enabled the object won't be able to rotate. This action has no effect on characters.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): Fixed rotation

    > Technical note: this action internal type (in GDevelop JSON) is `Physics3D::Physics3DBehavior::SetFixedRotation`.

**Friction**  
Change the object friction. How much energy is lost from the movement of one object over another. The combined friction from two bodies is calculated as 'sqrt(bodyA.friction * bodyB.friction)'..

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `Physics3D::Physics3DBehavior::SetFriction`.

**Gravity scale**  
Change the object gravity scale. The gravity applied to an object is the world gravity multiplied by the object gravity scale..

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Scale (1 by default)

    > Technical note: this action internal type (in GDevelop JSON) is `Physics3D::Physics3DBehavior::SetGravityScale`.

**World gravity on X axis**  
Change the world gravity on X axis While an object is needed, this will apply to all objects using the behavior..

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Gravity (in Newton)

    > Technical note: this action internal type (in GDevelop JSON) is `Physics3D::Physics3DBehavior::SetGravityX`.

**World gravity on Y axis**  
Change the world gravity on Y axis While an object is needed, this will apply to all objects using the behavior..

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Gravity (in Newton)

    > Technical note: this action internal type (in GDevelop JSON) is `Physics3D::Physics3DBehavior::SetGravityY`.

**World gravity on Z axis**  
Change the world gravity on Z axis While an object is needed, this will apply to all objects using the behavior..

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Gravity (in Newton)

    > Technical note: this action internal type (in GDevelop JSON) is `Physics3D::Physics3DBehavior::SetGravityZ`.

**Linear damping**  
Change the object linear damping. How much movement speed is lost across the time..

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `Physics3D::Physics3DBehavior::SetLinearDamping`.

**Linear velocity X**  
Change the object linear velocity on X.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Speed (in pixels per second)

    > Technical note: this action internal type (in GDevelop JSON) is `Physics3D::Physics3DBehavior::SetLinearVelocityX`.

**Linear velocity Y**  
Change the object linear velocity on Y.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Speed (in pixels per second)

    > Technical note: this action internal type (in GDevelop JSON) is `Physics3D::Physics3DBehavior::SetLinearVelocityY`.

**Linear velocity Z**  
Change the object linear velocity on Z.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Speed (in pixels per second)

    > Technical note: this action internal type (in GDevelop JSON) is `Physics3D::Physics3DBehavior::SetLinearVelocityZ`.

**Restitution**  
Change the object restitution. Energy conservation on collision. The combined restitution from two bodies is calculated as 'max(bodyA.restitution, bodyB.restitution)'..

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `Physics3D::Physics3DBehavior::SetRestitution`.

**Shape offset X**  
Change the object shape offset on X..

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `Physics3D::Physics3DBehavior::SetShapeOffsetX`.

**Shape offset Y**  
Change the object shape offset on Y..

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `Physics3D::Physics3DBehavior::SetShapeOffsetY`.

**Shape offset Z**  
Change the object shape offset on Z..

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `Physics3D::Physics3DBehavior::SetShapeOffsetZ`.

**Shape scale**  
Modify an object shape scale. It affects custom shape dimensions, if custom dimensions are not set the body will be scaled automatically to the object size.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Scale (1 by default)

    > Technical note: this action internal type (in GDevelop JSON) is `Physics3D::Physics3DBehavior::ShapeScale`.


### Behavior conditions

**Angular damping**  
Compare the object angular damping. How much angular speed is lost across the time..

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics3D::Physics3DBehavior::AngularDamping`.

**Angular velocity X**  
Compare the object angular velocity around X.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Angular speed (in degrees per second)

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics3D::Physics3DBehavior::AngularVelocityX`.

**Angular velocity Y**  
Compare the object angular velocity around Y.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Angular speed (in degrees per second)

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics3D::Physics3DBehavior::AngularVelocityY`.

**Angular velocity Z**  
Compare the object angular velocity around Z.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Angular speed (in degrees per second)

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics3D::Physics3DBehavior::AngularVelocityZ`.

**Density**  
Compare the object density. The body's density and volume determine its mass..

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics3D::Physics3DBehavior::Density`.

**Friction**  
Compare the object friction. How much energy is lost from the movement of one object over another. The combined friction from two bodies is calculated as 'sqrt(bodyA.friction * bodyB.friction)'..

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics3D::Physics3DBehavior::Friction`.

**Gravity scale**  
Compare the object gravity scale. The gravity applied to an object is the world gravity multiplied by the object gravity scale..

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Scale (1 by default)

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics3D::Physics3DBehavior::GravityScale`.

**World gravity on X axis**  
Compare the world gravity on X axis While an object is needed, this will apply to all objects using the behavior..

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Gravity (in Newton)

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics3D::Physics3DBehavior::GravityX`.

**World gravity on Y axis**  
Compare the world gravity on Y axis While an object is needed, this will apply to all objects using the behavior..

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Gravity (in Newton)

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics3D::Physics3DBehavior::GravityY`.

**World gravity on Z axis**  
Compare the world gravity on Z axis While an object is needed, this will apply to all objects using the behavior..

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Gravity (in Newton)

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics3D::Physics3DBehavior::GravityZ`.

**Has fixed rotation**  
Check if an object has fixed rotation.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics3D::Physics3DBehavior::HasFixedRotation`.

**Is treated as a bullet**  
Check if the object is being treated as a bullet.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics3D::Physics3DBehavior::IsBullet`.

**Is dynamic**  
Check if an object is dynamic.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics3D::Physics3DBehavior::IsDynamic`.

**Is kinematic**  
Check if an object is kinematic.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics3D::Physics3DBehavior::IsKinematic`.

**Is static**  
Check if an object is static.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics3D::Physics3DBehavior::IsStatic`.

**Layer enabled**  
Check if an object has a specific layer enabled.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Layer (1 - 8)

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics3D::Physics3DBehavior::LayerEnabled`.

**Linear damping**  
Compare the object linear damping. How much movement speed is lost across the time..

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics3D::Physics3DBehavior::LinearDamping`.

**Linear velocity**  
Compare the object linear velocity length.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Speed to compare to (in pixels per second)

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics3D::Physics3DBehavior::LinearVelocityLength`.

**Linear velocity X**  
Compare the object linear velocity on X.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Speed (in pixels per second)

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics3D::Physics3DBehavior::LinearVelocityX`.

**Linear velocity Y**  
Compare the object linear velocity on Y.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Speed (in pixels per second)

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics3D::Physics3DBehavior::LinearVelocityY`.

**Linear velocity Z**  
Compare the object linear velocity on Z.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Speed (in pixels per second)

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics3D::Physics3DBehavior::LinearVelocityZ`.

**Mask enabled**  
Check if an object has a specific mask enabled.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Mask (1 - 8)

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics3D::Physics3DBehavior::MaskEnabled`.

**Restitution**  
Compare the object restitution. Energy conservation on collision. The combined restitution from two bodies is calculated as 'max(bodyA.restitution, bodyB.restitution)'..

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics3D::Physics3DBehavior::Restitution`.

**Shape offset X**  
Compare the object shape offset on X..

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics3D::Physics3DBehavior::ShapeOffsetX`.

**Shape offset Y**  
Compare the object shape offset on Y..

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics3D::Physics3DBehavior::ShapeOffsetY`.

**Shape offset Z**  
Compare the object shape offset on Z..

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics3D::Physics3DBehavior::ShapeOffsetZ`.


### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.Physics3D::AngularDamping()` | Return the object angular damping. How much angular speed is lost across the time.. ||
| `Object.Physics3D::AngularVelocityX()` | Return the object angular velocity around X. ||
| `Object.Physics3D::AngularVelocityY()` | Return the object angular velocity around Y. ||
| `Object.Physics3D::AngularVelocityZ()` | Return the object angular velocity around Z. ||
| `Object.Physics3D::Density()` | Return the object density. The body's density and volume determine its mass.. ||
| `Object.Physics3D::Friction()` | Return the object friction. How much energy is lost from the movement of one object over another. The combined friction from two bodies is calculated as 'sqrt(bodyA.friction * bodyB.friction)'.. ||
| `Object.Physics3D::GravityScale()` | Return the object gravity scale. The gravity applied to an object is the world gravity multiplied by the object gravity scale.. ||
| `Object.Physics3D::GravityX()` | Return the world gravity on X axis While an object is needed, this will apply to all objects using the behavior.. ||
| `Object.Physics3D::GravityY()` | Return the world gravity on Y axis While an object is needed, this will apply to all objects using the behavior.. ||
| `Object.Physics3D::GravityZ()` | Return the world gravity on Z axis While an object is needed, this will apply to all objects using the behavior.. ||
| `Object.Physics3D::InertiaAroundX()` | Return the inertia around X axis of the object (in kilograms · meters²) when for its default rotation is (0°; 0°; 0°) ||
| `Object.Physics3D::InertiaAroundY()` | Return the inertia around Y axis of the object (in kilograms · meters²) when for its default rotation is (0°; 0°; 0°) ||
| `Object.Physics3D::InertiaAroundZ()` | Return the inertia around Z axis of the object (in kilograms · meters²) when for its default rotation is (0°; 0°; 0°) ||
| `Object.Physics3D::LinearDamping()` | Return the object linear damping. How much movement speed is lost across the time.. ||
| `Object.Physics3D::LinearVelocityLength()` | Return the object linear velocity length. ||
| `Object.Physics3D::LinearVelocityX()` | Return the object linear velocity on X. ||
| `Object.Physics3D::LinearVelocityY()` | Return the object linear velocity on Y. ||
| `Object.Physics3D::LinearVelocityZ()` | Return the object linear velocity on Z. ||
| `Object.Physics3D::Mass()` | Return the mass of the object (in kilograms) ||
| `Object.Physics3D::MassCenterX()` | Mass center X ||
| `Object.Physics3D::MassCenterY()` | Mass center Y ||
| `Object.Physics3D::MassCenterZ()` | Mass center Z ||
| `Object.Physics3D::Restitution()` | Return the object restitution. Energy conservation on collision. The combined restitution from two bodies is calculated as 'max(bodyA.restitution, bodyB.restitution)'.. ||
| `Object.Physics3D::ShapeOffsetX()` | Return the object shape offset on X.. ||
| `Object.Physics3D::ShapeOffsetY()` | Return the object shape offset on Y.. ||
| `Object.Physics3D::ShapeOffsetZ()` | Return the object shape offset on Z.. ||
| `Object.Physics3D::WorldScale()` | Return the world scale. ||

## 3D physics car 

Simulate a realistic car using the 3D physics engine. This is mostly useful for the car controlled by the player (it's usually too complex for other cars in a game).

This behavior is usually used with one or more "mapper" behavior to let the player move it. 

### Behavior properties

- **Back wheel offset X** (🔢 Number, Distance). Positive values move wheels outside. Default value is `0`.
- **Beginning steer speed** (🔢 Number, Angular speed). Default value is `140`.
- **Brake max torque** (🔢 Number). Default value is `1500`.
- **End steer speed** (🔢 Number, Angular speed). Default value is `10`.
- **Engine inertia** (🔢 Number). Slow down car acceleration. Default value is `0.5`.
- **Max engine speed** (🔢 Number). Default value is `6000`.
- **Max engine torque** (🔢 Number). Allow cars to climb steep slopes and push heavy obstacles. Default value is `4500`.
- **Front wheel offset X** (🔢 Number, Distance). Positive values move wheels outside. Default value is `0`.
- **1st gear ratio** (🔢 Number). Default value is `2.66`.
- **2nd gear ratio** (🔢 Number). Default value is `1.78`.
- **3rd gear ratio** (🔢 Number). Default value is `1.3`.
- **4th gear ratio** (🔢 Number). Default value is `1`.
- **5th gear ratio** (🔢 Number). Default value is `0.74`.
- **6th gear ratio** (🔢 Number). Default value is `0`.
- **Hand brake max torque** (🔢 Number). Default value is `4000`.
- **Back wheel drive** (🔘 Boolean). Default value is `false`.
- **Front wheel drive** (🔘 Boolean). Default value is `true`.
- **Pitch and roll max angle** (🔢 Number, Angle). Default value is `90`.
- **Reverse gear ratio** (🔢 Number). Default value is `-2.9`.
- **Max steer angle** (🔢 Number, Angle). Default value is `70`.
- **Wheel offset Y** (🔢 Number, Distance). Positive values move wheels outside. Default value is `0`.
- **Wheel offset Z** (🔢 Number, Distance). Positive values move wheels outside. Default value is `0`.
- **Wheel radius** (🔢 Number, Distance). Default value is `10`.
- **Wheel width** (🔢 Number, Distance). Default value is `5`.

??? quote "See internal technical details"


    - **Back wheel offset X** is stored as `backWheelOffsetX` (Number). Unit is Pixel. Default value is `0`.
    - **Beginning steer speed** is stored as `beginningSteerSpeed` (Number). Unit is AngularSpeed. Default value is `140`.
    - **Brake max torque** is stored as `brakeTorqueMax` (Number). Default value is `1500`.
    - **End steer speed** is stored as `endSteerSpeed` (Number). Unit is AngularSpeed. Default value is `10`.
    - **Engine inertia** is stored as `engineInertia` (Number). Default value is `0.5`.
    - **Max engine speed** is stored as `engineSpeedMax` (Number). Default value is `6000`.
    - **Max engine torque** is stored as `engineTorqueMax` (Number). Default value is `4500`.
    - **Front wheel offset X** is stored as `frontWheelOffsetX` (Number). Unit is Pixel. Default value is `0`.
    - **1st gear ratio** is stored as `gearRatio1` (Number). Default value is `2.66`.
    - **2nd gear ratio** is stored as `gearRatio2` (Number). Default value is `1.78`.
    - **3rd gear ratio** is stored as `gearRatio3` (Number). Default value is `1.3`.
    - **4th gear ratio** is stored as `gearRatio4` (Number). Default value is `1`.
    - **5th gear ratio** is stored as `gearRatio5` (Number). Default value is `0.74`.
    - **6th gear ratio** is stored as `gearRatio6` (Number). Default value is `0`.
    - **Hand brake max torque** is stored as `handBrakeTorqueMax` (Number). Default value is `4000`.
    - **Back wheel drive** is stored as `hasBackWheelDrive` (Boolean). Default value is `false`.
    - **Front wheel drive** is stored as `hasFrontWheelDrive` (Boolean). Default value is `true`.
    > This behavior must be used on an object also having a behavior with type "Physics3D::Physics3DBehavior". This is stored on property `physics3D`.

    - **Pitch and roll max angle** is stored as `pitchRollAngleMax` (Number). Unit is DegreeAngle. Default value is `90`.
    - **Reverse gear ratio** is stored as `reverseGearRatio1` (Number). Default value is `-2.9`.
    - **Max steer angle** is stored as `steerAngleMax` (Number). Unit is DegreeAngle. Default value is `70`.
    - **Wheel offset Y** is stored as `wheelOffsetY` (Number). Unit is Pixel. Default value is `0`.
    - **Wheel offset Z** is stored as `wheelOffsetZ` (Number). Unit is Pixel. Default value is `0`.
    - **Wheel radius** is stored as `wheelRadius` (Number). Unit is Pixel. Default value is `10`.
    - **Wheel width** is stored as `wheelWidth` (Number). Unit is Pixel. Default value is `5`.

### Behavior actions

**Engine inertia**  
Change the engine inertia (kg·m²). It slows down car acceleration.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Engine inertia (kg·m²)

    > Technical note: this action internal type (in GDevelop JSON) is `Physics3D::PhysicsCar3D::SetEngineInertia`.

**Engine max speed**  
Change the engine max speed (RPM).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Engine max speed (RPM)

    > Technical note: this action internal type (in GDevelop JSON) is `Physics3D::PhysicsCar3D::SetEngineSpeedMax`.

**Engine max torque**  
Change the engine max torque (N·m). It allows cars to climb steep slopes and push heavy obstacles.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Engine max torque (N·m)

    > Technical note: this action internal type (in GDevelop JSON) is `Physics3D::PhysicsCar3D::SetEngineTorqueMax`.

**Simulate accelerator stick control**  
Simulate an accelerator stick control.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Stick force (between -1 and 1)

    > Technical note: this action internal type (in GDevelop JSON) is `Physics3D::PhysicsCar3D::SimulateAcceleratorStick`.

**Simulate move backward key press**  
Simulate a press of the move backward key.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this action internal type (in GDevelop JSON) is `Physics3D::PhysicsCar3D::SimulateBackwardKey`.

**Simulate move forward key press**  
Simulate a press of the move forward key.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this action internal type (in GDevelop JSON) is `Physics3D::PhysicsCar3D::SimulateForwardKey`.

**Simulate hand brake key press**  
Simulate a press of the hand brake key.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this action internal type (in GDevelop JSON) is `Physics3D::PhysicsCar3D::SimulateHandBrakeKey`.

**Simulate move left key press**  
Simulate a press of the move left key.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this action internal type (in GDevelop JSON) is `Physics3D::PhysicsCar3D::SimulateLeftKey`.

**Simulate move right key press**  
Simulate a press of the move right key.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this action internal type (in GDevelop JSON) is `Physics3D::PhysicsCar3D::SimulateRightKey`.

**Simulate steering stick control**  
Simulate a steering stick control.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Stick force (between -1 and 1)

    > Technical note: this action internal type (in GDevelop JSON) is `Physics3D::PhysicsCar3D::SimulateSteeringStick`.


### Behavior conditions

**Current gear**  
Compare the current gear (-1 = reverse, 0 = neutral, 1 = 1st gear).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Current gear

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics3D::PhysicsCar3D::CurrentGear`.

**Engine inertia**  
Compare the engine inertia (kg·m²). It slows down car acceleration.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Engine inertia (kg·m²)

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics3D::PhysicsCar3D::EngineInertia`.

**Engine speed**  
Compare the current engine speed (RPM).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Engine speed (RPM)

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics3D::PhysicsCar3D::EngineSpeed`.

**Engine max speed**  
Compare the engine max speed (RPM).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Engine max speed (RPM)

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics3D::PhysicsCar3D::EngineSpeedMax`.

**Engine max torque**  
Compare the engine max torque (N·m). It allows cars to climb steep slopes and push heavy obstacles.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Engine max torque (N·m)

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics3D::PhysicsCar3D::EngineTorqueMax`.

**Is on floor**  
Check if any wheel is in contact with the ground.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics3D::PhysicsCar3D::IsOnFloor`.

**Steer angle**  
Compare the current steer angle (in degree). The value is negative when cars turn left.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Steer angle (in degree)

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics3D::PhysicsCar3D::SteerAngle`.


### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.PhysicsCar3D::CurrentGear()` | Return the current gear (-1 = reverse, 0 = neutral, 1 = 1st gear). ||
| `Object.PhysicsCar3D::EngineInertia()` | Return the engine inertia (kg·m²). It slows down car acceleration. ||
| `Object.PhysicsCar3D::EngineSpeed()` | Return the current engine speed (RPM). ||
| `Object.PhysicsCar3D::EngineSpeedMax()` | Return the engine max speed (RPM). ||
| `Object.PhysicsCar3D::EngineTorqueMax()` | Return the engine max torque (N·m). It allows cars to climb steep slopes and push heavy obstacles. ||
| `Object.PhysicsCar3D::SteerAngle()` | Return the current steer angle (in degree). The value is negative when cars turn left. ||

## 3D physics character 

Allow an object to jump and run on platforms that have the 3D physics behavior(and which are generally set to "Static" as type, unless the platform is animated/moved in events).

This behavior is usually used with one or more "mapper" behavior to let the player move it. 

### Behavior properties

- **Can be pushed by other characters** (🔘 Boolean). Default value is `true`.
- **Max. falling speed** (🔢 Number, Speed). Default value is `700`.
- **Forward acceleration** (🔢 Number, Acceleration). Default value is `1200`.
- **Forward deceleration** (🔢 Number, Acceleration). Default value is `1200`.
- **Max. forward speed** (🔢 Number, Speed). Default value is `600`.
- **Gravity** (🔢 Number, Acceleration). Default value is `1000`.
- **Jump height** (🔢 Number, Distance). Default value is `200`.
- **Jump sustain time** (🔢 Number, Duration). Maximum time (in seconds) during which the jump strength is sustained if the jump key is held - allowing variable height jumps. Default value is `0.2`.
- **Keep object angle and forward direction the same** (🔘 Boolean). Default value is `true`.
- **Sideways acceleration** (🔢 Number, Acceleration). Default value is `800`.
- **Sideways deceleration** (🔢 Number, Acceleration). Default value is `800`.
- **Max. sideways speed** (🔢 Number, Speed). Default value is `400`.
- **Slope max. angle** (🔢 Number, Angle). Default value is `50`.
- **Max. stair height** (🔢 Number, Distance). Default value is `20`.

??? quote "See internal technical details"


    - **Can be pushed by other characters** is stored as `canBePushed` (Boolean). Default value is `true`.
    - **Max. falling speed** is stored as `fallingSpeedMax` (Number). Unit is PixelSpeed. Default value is `700`.
    - **Forward acceleration** is stored as `forwardAcceleration` (Number). Unit is PixelAcceleration. Default value is `1200`.
    - **Forward deceleration** is stored as `forwardDeceleration` (Number). Unit is PixelAcceleration. Default value is `1200`.
    - **Max. forward speed** is stored as `forwardSpeedMax` (Number). Unit is PixelSpeed. Default value is `600`.
    - **Gravity** is stored as `gravity` (Number). Unit is PixelAcceleration. Default value is `1000`.
    - **Jump height** is stored as `jumpHeight` (Number). Unit is Pixel. Default value is `200`.
    - **Jump sustain time** is stored as `jumpSustainTime` (Number). Unit is Second. Default value is `0.2`.
    > This behavior must be used on an object also having a behavior with type "Physics3D::Physics3DBehavior". This is stored on property `physics3D`.

    - **Keep object angle and forward direction the same** is stored as `shouldBindObjectAndForwardAngle` (Boolean). Default value is `true`.
    - **Sideways acceleration** is stored as `sidewaysAcceleration` (Number). Unit is PixelAcceleration. Default value is `800`.
    - **Sideways deceleration** is stored as `sidewaysDeceleration` (Number). Unit is PixelAcceleration. Default value is `800`.
    - **Max. sideways speed** is stored as `sidewaysSpeedMax` (Number). Unit is PixelSpeed. Default value is `400`.
    - **Slope max. angle** is stored as `slopeMaxAngle` (Number). Unit is DegreeAngle. Default value is `50`.
    - **Max. stair height** is stored as `stairHeightMax` (Number). Unit is Pixel. Default value is `20`.

### Behavior actions

**Abort jump**  
Abort the current jump and stop the object vertically. This action doesn't have any effect when the character is not jumping.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this action internal type (in GDevelop JSON) is `Physics3D::PhysicsCharacter3D::AbortJump`.

**Maximum falling speed**  
Change the maximum falling speed of an object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Max speed (in pixels per second)
    - Parameter 4 (❓ Yes or No): If jumping, try to preserve the current speed in the air

    > Technical note: this action internal type (in GDevelop JSON) is `Physics3D::PhysicsCharacter3D::FallingSpeedMax`.

**Allow jumping again**  
When this action is executed, the object is able to jump again, even if it is in the air: this can be useful to allow a double jump for example. This is not a permanent effect: you must call again this action every time you want to allow the object to jump (apart if it's on the floor).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this action internal type (in GDevelop JSON) is `Physics3D::PhysicsCharacter3D::SetCanJump`.

**Forbid jumping again in the air**  
This revokes the effect of "Allow jumping again". The object is made unable to jump while in mid air. This has no effect if the object is not in the air.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this action internal type (in GDevelop JSON) is `Physics3D::PhysicsCharacter3D::SetCanNotAirJump`.

**Current falling speed**  
Change the current falling speed of the object. Its value is always positive..

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Speed to compare to (in pixels per second)

    > Technical note: this action internal type (in GDevelop JSON) is `Physics3D::PhysicsCharacter3D::SetCurrentFallSpeed`.

**Current forward speed**  
Change the current forward speed of the object. The object moves backward with negative values and forward with positive ones.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Speed (in pixels per second)

    > Technical note: this action internal type (in GDevelop JSON) is `Physics3D::PhysicsCharacter3D::SetCurrentForwardSpeed`.

**Current jump speed**  
Change the current jump speed of the object. Its value is always positive..

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Speed to compare to (in pixels per second)

    > Technical note: this action internal type (in GDevelop JSON) is `Physics3D::PhysicsCharacter3D::SetCurrentJumpSpeed`.

**Current sideways speed**  
Change the current sideways speed of the object. The object moves to the left with negative values and to the right with positive ones.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Speed (in pixels per second)

    > Technical note: this action internal type (in GDevelop JSON) is `Physics3D::PhysicsCharacter3D::SetCurrentSidewaysSpeed`.

**Forward acceleration**  
Change the forward acceleration of an object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Acceleration (in pixels per second per second)

    > Technical note: this action internal type (in GDevelop JSON) is `Physics3D::PhysicsCharacter3D::SetForwardAcceleration`.

**Forward angle**  
Change the angle used by the character to go forward.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Angle (in degrees)

    > Technical note: this action internal type (in GDevelop JSON) is `Physics3D::PhysicsCharacter3D::SetForwardAngle`.

**Forward deceleration**  
Change the forward deceleration of an object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Deceleration (in pixels per second per second)

    > Technical note: this action internal type (in GDevelop JSON) is `Physics3D::PhysicsCharacter3D::SetForwardDeceleration`.

**Forward max speed**  
Change the forward max speed of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Speed (in pixels per second)

    > Technical note: this action internal type (in GDevelop JSON) is `Physics3D::PhysicsCharacter3D::SetForwardSpeedMax`.

**Gravity**  
Change the gravity applied on an object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Gravity (in pixels per second per second)

    > Technical note: this action internal type (in GDevelop JSON) is `Physics3D::PhysicsCharacter3D::SetGravity`.

**Jump speed**  
Change the jump speed of an object. Its value is always positive.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Speed (in pixels per second)

    > Technical note: this action internal type (in GDevelop JSON) is `Physics3D::PhysicsCharacter3D::SetJumpSpeed`.

**Jump sustain time**  
Change the jump sustain time of an object. This is the time during which keeping the jump button held allow the initial jump speed to be maintained.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Duration (in seconds)

    > Technical note: this action internal type (in GDevelop JSON) is `Physics3D::PhysicsCharacter3D::SetJumpSustainTime`.

**Should bind object and forward angle**  
Enable or disable keeping the object angle and forward angle the same.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): Keep object angle and forward direction the same

    > Technical note: this action internal type (in GDevelop JSON) is `Physics3D::PhysicsCharacter3D::SetShouldBindObjectAndForwardAngle`.

**Sideways acceleration**  
Change the sideways acceleration of an object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Acceleration (in pixels per second per second)

    > Technical note: this action internal type (in GDevelop JSON) is `Physics3D::PhysicsCharacter3D::SetSidewaysAcceleration`.

**Sideways deceleration**  
Change the sideways deceleration of an object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Deceleration (in pixels per second per second)

    > Technical note: this action internal type (in GDevelop JSON) is `Physics3D::PhysicsCharacter3D::SetSidewaysDeceleration`.

**Sideways max speed**  
Change the sideways max speed of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Speed (in pixels per second)

    > Technical note: this action internal type (in GDevelop JSON) is `Physics3D::PhysicsCharacter3D::SetSidewaysSpeedMax`.

**Simulate move backward key press**  
Simulate a press of the move backward key.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this action internal type (in GDevelop JSON) is `Physics3D::PhysicsCharacter3D::SimulateBackwardKey`.

**Simulate move forward key press**  
Simulate a press of the move forward key.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this action internal type (in GDevelop JSON) is `Physics3D::PhysicsCharacter3D::SimulateForwardKey`.

**Simulate jump key press**  
Simulate a press of the jump key.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this action internal type (in GDevelop JSON) is `Physics3D::PhysicsCharacter3D::SimulateJumpKey`.

**Simulate move left key press**  
Simulate a press of the move left key.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this action internal type (in GDevelop JSON) is `Physics3D::PhysicsCharacter3D::SimulateLeftKey`.

**Simulate move right key press**  
Simulate a press of the move right key.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this action internal type (in GDevelop JSON) is `Physics3D::PhysicsCharacter3D::SimulateRightKey`.

**Simulate stick control**  
Simulate a stick control.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Stick angle (in degrees)
    - Parameter 3 (🔢 Number): Stick force (between 0 and 1)

    > Technical note: this action internal type (in GDevelop JSON) is `Physics3D::PhysicsCharacter3D::SimulateStick`.


### Behavior conditions

**Can jump**  
Check if the object can jump.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics3D::PhysicsCharacter3D::CanJump`.

**Current falling speed**  
Compare the current falling speed of the object. Its value is always positive..

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Speed to compare to (in pixels per second)

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics3D::PhysicsCharacter3D::CurrentFallSpeed`.

**Current forward speed**  
Compare the current forward speed of the object. The object moves backward with negative values and forward with positive ones.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Speed (in pixels per second)

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics3D::PhysicsCharacter3D::CurrentForwardSpeed`.

**Current jump speed**  
Compare the current jump speed of the object. Its value is always positive..

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Speed to compare to (in pixels per second)

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics3D::PhysicsCharacter3D::CurrentJumpSpeed`.

**Current sideways speed**  
Compare the current sideways speed of the object. The object moves to the left with negative values and to the right with positive ones.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Speed (in pixels per second)

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics3D::PhysicsCharacter3D::CurrentSidewaysSpeed`.

**Maximum falling speed**  
Compare the maximum falling speed of an object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Max speed (in pixels per second)

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics3D::PhysicsCharacter3D::FallingSpeedMax`.

**Forward acceleration**  
Compare the forward acceleration of an object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Acceleration (in pixels per second per second)

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics3D::PhysicsCharacter3D::ForwardAcceleration`.

**Forward deceleration**  
Compare the forward deceleration of an object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Deceleration (in pixels per second per second)

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics3D::PhysicsCharacter3D::ForwardDeceleration`.

**Forward max speed**  
Compare the forward max speed of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Speed (in pixels per second)

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics3D::PhysicsCharacter3D::ForwardSpeedMax`.

**Gravity**  
Compare the gravity applied on an object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Gravity (in pixels per second per second)

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics3D::PhysicsCharacter3D::Gravity`.

**Is falling**  
Check if the object is falling.  
Note that the object can be flagged as jumping and falling at the same time: at the end of a jump, the fall speed becomes higher than the jump speed.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics3D::PhysicsCharacter3D::IsFalling`.

**Forward angle**  
Compare the angle used by the character to go forward.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Angle (in degrees)
    - Parameter 3 (🔢 Number): Tolerance (in degrees)

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics3D::PhysicsCharacter3D::IsForwardAngleAround`.

**Is jumping**  
Check if the object is jumping.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics3D::PhysicsCharacter3D::IsJumping`.

**Is moving**  
Check if the object is moving (whether it is on the floor or in the air).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics3D::PhysicsCharacter3D::IsMovingEvenALittle`.

**Is on floor**  
Check if the object is on a platform.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics3D::PhysicsCharacter3D::IsOnFloor`.

**Jump speed**  
Compare the jump speed of an object. Its value is always positive.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Speed (in pixels per second)

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics3D::PhysicsCharacter3D::JumpSpeed`.

**Jump sustain time**  
Compare the jump sustain time of an object. This is the time during which keeping the jump button held allow the initial jump speed to be maintained.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Duration (in seconds)

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics3D::PhysicsCharacter3D::JumpSustainTime`.

**Should bind object and forward angle**  
Check if the object angle and forward angle should be kept the same.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics3D::PhysicsCharacter3D::ShouldBindObjectAndForwardAngle`.

**Sideways acceleration**  
Compare the sideways acceleration of an object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Acceleration (in pixels per second per second)

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics3D::PhysicsCharacter3D::SidewaysAcceleration`.

**Sideways deceleration**  
Compare the sideways deceleration of an object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Deceleration (in pixels per second per second)

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics3D::PhysicsCharacter3D::SidewaysDeceleration`.

**Sideways max speed**  
Compare the sideways max speed of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Speed (in pixels per second)

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics3D::PhysicsCharacter3D::SidewaysSpeedMax`.


### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.PhysicsCharacter3D::CurrentFallSpeed()` | Return the current falling speed of the object. Its value is always positive.. ||
| `Object.PhysicsCharacter3D::CurrentForwardSpeed()` | Return the current forward speed of the object. The object moves backward with negative values and forward with positive ones. ||
| `Object.PhysicsCharacter3D::CurrentJumpSpeed()` | Return the current jump speed of the object. Its value is always positive.. ||
| `Object.PhysicsCharacter3D::CurrentSidewaysSpeed()` | Return the current sideways speed of the object. The object moves to the left with negative values and to the right with positive ones. ||
| `Object.PhysicsCharacter3D::FallingSpeedMax()` | Return the maximum falling speed of an object. ||
| `Object.PhysicsCharacter3D::ForwardAcceleration()` | Return the forward acceleration of an object. ||
| `Object.PhysicsCharacter3D::ForwardAngle()` | Return the angle used by the character to go forward. ||
| `Object.PhysicsCharacter3D::ForwardDeceleration()` | Return the forward deceleration of an object. ||
| `Object.PhysicsCharacter3D::ForwardSpeedMax()` | Return the forward max speed of the object. ||
| `Object.PhysicsCharacter3D::Gravity()` | Return the gravity applied on an object. ||
| `Object.PhysicsCharacter3D::JumpSpeed()` | Return the jump speed of an object. Its value is always positive. ||
| `Object.PhysicsCharacter3D::JumpSustainTime()` | Return the jump sustain time of an object. This is the time during which keeping the jump button held allow the initial jump speed to be maintained. ||
| `Object.PhysicsCharacter3D::SidewaysAcceleration()` | Return the sideways acceleration of an object. ||
| `Object.PhysicsCharacter3D::SidewaysDeceleration()` | Return the sideways deceleration of an object. ||
| `Object.PhysicsCharacter3D::SidewaysSpeedMax()` | Return the sideways max speed of the object. ||



---

The 3D physics engine extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **3D physics engine** feature of [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).