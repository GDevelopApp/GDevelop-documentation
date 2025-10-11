# 3D physics engine Reference

The 3D physics engine simulates realistic object physics, with gravity, forces, collisions, joints, etc. It's perfect for almost all 3D games.

Objects like floors or wall objects should usually be set to "Static" as type. Objects that should be moveable are usually "Dynamic" (default). "Kinematic" objects (typically, players or controlled characters) are only moved by their "linear velocity" and "angular velocity" - they can interact with other objects but only these other objects will move.

Forces (and impulses) are expressed in all conditions/expressions/actions of the 3D physics engine in Newtons (N). Typical values for a force are 10-200 N. One meter is 100 pixels by default in the game (check the world scale). Mass is expressed in kilograms (kg). [Read more explanations about it.](/gdevelop5/behaviors/physics3d)

## Conditions

**Collision**  
Check if two objects collide.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 👾 Object
    - Parameter 3: 🧩 Behavior

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Collision started**  
Check if two objects just started colliding during this frame.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 👾 Object
    - Parameter 3: 🧩 Behavior

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Collision stopped**  
Check if two objects just stopped colliding at this frame.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 👾 Object
    - Parameter 3: 🧩 Behavior

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Character is on given platform**  
Check if a 3D physics character is on a given platform.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (👾 Object): Platforms
    - Parameter 3: 🧩 Behavior

    > Technical note: parameter 4 are internal parameters handled by GDevelop.



## 3D physics engine 

Simulate realistic 3D physics for this object including gravity, forces, collisions, etc. 

### Behavior actions

**Apply angular impulse (rotational impulse)**  
Apply an angular impulse (also called a "rotational impulse") to the object. It instantly changes the rotation speed, to give an initial speed for instance.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Angular impulse around X (N·m·s)
    - Parameter 3 (🔢 Number): Angular impulse around Y (N·m·s)
    - Parameter 4 (🔢 Number): Angular impulse around Z (N·m·s)
      An impulse is like a rotation speed addition but depends on the mass.

**Apply force (at a point)**  
Apply a force to the object over time. It "accelerates" an object and must be used every frame during a time period.

??? quote "See parameters"

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

**Apply force (at center)**  
Apply a force to the object over time. It "accelerates" an object and must be used every frame during a time period.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): X component (N)
    - Parameter 3 (🔢 Number): Y component (N)
    - Parameter 4 (🔢 Number): Z component (N)
      A force is like an acceleration but depends on the mass.

**Apply force toward position**  
Apply a force to the object over time to move it toward a position. It "accelerates" an object and must be used every frame during a time period.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Length (N)
      A force is like an acceleration but depends on the mass.
    - Parameter 3 (🔢 Number): X position
    - Parameter 4 (🔢 Number): Y position
    - Parameter 5 (🔢 Number): Z position

**Apply impulse (at a point)**  
Apply an impulse to the object. It instantly changes the speed, to give an initial speed for instance.

??? quote "See parameters"

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

**Apply impulse (at center)**  
Apply an impulse to the object. It instantly changes the speed, to give an initial speed for instance.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): X component (N·s or kg·m·s⁻¹)
    - Parameter 3 (🔢 Number): Y component (N·s or kg·m·s⁻¹)
    - Parameter 4 (🔢 Number): Z component (N·s or kg·m·s⁻¹)
      An impulse is like a speed addition but depends on the mass.

**Apply impulse toward position**  
Apply an impulse to the object to move it toward a position. It instantly changes the speed, to give an initial speed for instance.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Length (N·s or kg·m·s⁻¹)
      An impulse is like a speed addition but depends on the mass.
    - Parameter 3 (🔢 Number): X position
    - Parameter 4 (🔢 Number): Y position
    - Parameter 5 (🔢 Number): Z position

**Apply torque (rotational force)**  
Apply a torque (also called "rotational force") to the object. It "accelerates" an object rotation and must be used every frame during a time period.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Torque around X (N·m)
    - Parameter 3 (🔢 Number): Torque around Y (N·m)
    - Parameter 4 (🔢 Number): Torque around Z (N·m)
      A torque is like a rotation acceleration but depends on the mass.

**Enable layer**  
Enable or disable a layer for an object. Two objects collide if any layer of the first object matches any mask of the second one and vice versa.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Layer (1 - 8)
    - Parameter 3 (❓ Yes or No): Enable

**Enable mask**  
Enable or disable a mask for an object. Two objects collide if any layer of the first object matches any mask of the second one and vice versa.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Mask (1 - 8)
    - Parameter 3 (❓ Yes or No): Enable

**Angular damping**  
Change the object angular damping. How much angular speed is lost across the time..

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

**Angular velocity X**  
Change the object angular velocity around X.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Angular speed (in degrees per second)

**Angular velocity Y**  
Change the object angular velocity around Y.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Angular speed (in degrees per second)

**Angular velocity Z**  
Change the object angular velocity around Z.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Angular speed (in degrees per second)

**Treat as bullet**  
Treat the object as a bullet. Better collision handling on high speeds at cost of some performance.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): Treat as bullet

**Density**  
Change the object density. The body's density and volume determine its mass..

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

**Fixed rotation**  
Enable or disable an object fixed rotation. If enabled the object won't be able to rotate. This action has no effect on characters.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): Fixed rotation

**Friction**  
Change the object friction. How much energy is lost from the movement of one object over another. The combined friction from two bodies is calculated as 'sqrt(bodyA.friction * bodyB.friction)'..

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

**Gravity scale**  
Change the object gravity scale. The gravity applied to an object is the world gravity multiplied by the object gravity scale..

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Scale (1 by default)

**World gravity on X axis**  
Change the world gravity on X axis While an object is needed, this will apply to all objects using the behavior..

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Gravity (in Newton)

**World gravity on Y axis**  
Change the world gravity on Y axis While an object is needed, this will apply to all objects using the behavior..

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Gravity (in Newton)

**World gravity on Z axis**  
Change the world gravity on Z axis While an object is needed, this will apply to all objects using the behavior..

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Gravity (in Newton)

**Linear damping**  
Change the object linear damping. How much movement speed is lost across the time..

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

**Linear velocity X**  
Change the object linear velocity on X.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Speed (in pixels per second)

**Linear velocity Y**  
Change the object linear velocity on Y.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Speed (in pixels per second)

**Linear velocity Z**  
Change the object linear velocity on Z.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Speed (in pixels per second)

**Restitution**  
Change the object restitution. Energy conservation on collision. The combined restitution from two bodies is calculated as 'max(bodyA.restitution, bodyB.restitution)'..

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

**Shape offset X**  
Change the object shape offset on X..

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

**Shape offset Y**  
Change the object shape offset on Y..

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

**Shape offset Z**  
Change the object shape offset on Z..

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

**Shape scale**  
Modify an object shape scale. It affects custom shape dimensions, if custom dimensions are not set the body will be scaled automatically to the object size.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Scale (1 by default)

### Behavior conditions

**Angular damping**  
Compare the object angular damping. How much angular speed is lost across the time..

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

**Angular velocity X**  
Compare the object angular velocity around X.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Angular speed (in degrees per second)

**Angular velocity Y**  
Compare the object angular velocity around Y.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Angular speed (in degrees per second)

**Angular velocity Z**  
Compare the object angular velocity around Z.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Angular speed (in degrees per second)

**Density**  
Compare the object density. The body's density and volume determine its mass..

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

**Friction**  
Compare the object friction. How much energy is lost from the movement of one object over another. The combined friction from two bodies is calculated as 'sqrt(bodyA.friction * bodyB.friction)'..

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

**Gravity scale**  
Compare the object gravity scale. The gravity applied to an object is the world gravity multiplied by the object gravity scale..

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Scale (1 by default)

**World gravity on X axis**  
Compare the world gravity on X axis While an object is needed, this will apply to all objects using the behavior..

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Gravity (in Newton)

**World gravity on Y axis**  
Compare the world gravity on Y axis While an object is needed, this will apply to all objects using the behavior..

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Gravity (in Newton)

**World gravity on Z axis**  
Compare the world gravity on Z axis While an object is needed, this will apply to all objects using the behavior..

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Gravity (in Newton)

**Has fixed rotation**  
Check if an object has fixed rotation.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

**Is treated as a bullet**  
Check if the object is being treated as a bullet.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

**Is dynamic**  
Check if an object is dynamic.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

**Is kinematic**  
Check if an object is kinematic.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

**Is static**  
Check if an object is static.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

**Layer enabled**  
Check if an object has a specific layer enabled.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Layer (1 - 8)

**Linear damping**  
Compare the object linear damping. How much movement speed is lost across the time..

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

**Linear velocity**  
Compare the object linear velocity length.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Speed to compare to (in pixels per second)

**Linear velocity X**  
Compare the object linear velocity on X.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Speed (in pixels per second)

**Linear velocity Y**  
Compare the object linear velocity on Y.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Speed (in pixels per second)

**Linear velocity Z**  
Compare the object linear velocity on Z.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Speed (in pixels per second)

**Mask enabled**  
Check if an object has a specific mask enabled.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Mask (1 - 8)

**Restitution**  
Compare the object restitution. Energy conservation on collision. The combined restitution from two bodies is calculated as 'max(bodyA.restitution, bodyB.restitution)'..

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

**Shape offset X**  
Compare the object shape offset on X..

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

**Shape offset Y**  
Compare the object shape offset on Y..

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

**Shape offset Z**  
Compare the object shape offset on Z..

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

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

### Behavior actions

**Engine inertia**  
Change the engine inertia (kg·m²). It slows down car acceleration.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Engine inertia (kg·m²)

**Engine max speed**  
Change the engine max speed (RPM).

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Engine max speed (RPM)

**Engine max torque**  
Change the engine max torque (N·m). It allows cars to climb steep slopes and push heavy obstacles.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Engine max torque (N·m)

**Simulate accelerator stick control**  
Simulate an accelerator stick control.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Stick force (between -1 and 1)

**Simulate move backward key press**  
Simulate a press of the move backward key.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

**Simulate move forward key press**  
Simulate a press of the move forward key.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

**Simulate hand brake key press**  
Simulate a press of the hand brake key.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

**Simulate move left key press**  
Simulate a press of the move left key.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

**Simulate move right key press**  
Simulate a press of the move right key.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

**Simulate steering stick control**  
Simulate a steering stick control.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Stick force (between -1 and 1)

### Behavior conditions

**Current gear**  
Compare the current gear (-1 = reverse, 0 = neutral, 1 = 1st gear).

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Current gear

**Engine inertia**  
Compare the engine inertia (kg·m²). It slows down car acceleration.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Engine inertia (kg·m²)

**Engine speed**  
Compare the current engine speed (RPM).

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Engine speed (RPM)

**Engine max speed**  
Compare the engine max speed (RPM).

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Engine max speed (RPM)

**Engine max torque**  
Compare the engine max torque (N·m). It allows cars to climb steep slopes and push heavy obstacles.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Engine max torque (N·m)

**Is on floor**  
Check if any wheel is in contact with the ground.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

**Steer angle**  
Compare the current steer angle (in degree). The value is negative when cars turn left.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Steer angle (in degree)

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

### Behavior actions

**Abort jump**  
Abort the current jump and stop the object vertically. This action doesn't have any effect when the character is not jumping.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

**Maximum falling speed**  
Change the maximum falling speed of an object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Max speed (in pixels per second)
    - Parameter 4 (❓ Yes or No): If jumping, try to preserve the current speed in the air

**Allow jumping again**  
When this action is executed, the object is able to jump again, even if it is in the air: this can be useful to allow a double jump for example. This is not a permanent effect: you must call again this action every time you want to allow the object to jump (apart if it's on the floor).

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

**Forbid jumping again in the air**  
This revokes the effect of "Allow jumping again". The object is made unable to jump while in mid air. This has no effect if the object is not in the air.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

**Current falling speed**  
Change Compare the current falling speed of the object. Its value is always positive..

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Speed to compare to (in pixels per second)

**Current forward speed**  
Change the current forward speed of the object. The object moves backward with negative values and forward with positive ones.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Speed (in pixels per second)

**Current jump speed**  
Change Compare the current jump speed of the object. Its value is always positive..

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Speed to compare to (in pixels per second)

**Current sideways speed**  
Change the current sideways speed of the object. The object moves to the left with negative values and to the right with positive ones.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Speed (in pixels per second)

**Forward acceleration**  
Change the forward acceleration of an object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Acceleration (in pixels per second per second)

**Forward angle**  
Change the angle used by the character to go forward.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Angle (in degrees)

**Forward deceleration**  
Change the forward deceleration of an object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Deceleration (in pixels per second per second)

**Forward max speed**  
Change the forward max speed of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Speed (in pixels per second)

**Gravity**  
Change the gravity applied on an object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Gravity (in pixels per second per second)

**Jump speed**  
Change the jump speed of an object. Its value is always positive.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Speed (in pixels per second)

**Jump sustain time**  
Change the jump sustain time of an object. This is the time during which keeping the jump button held allow the initial jump speed to be maintained.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Duration (in seconds)

**Should bind object and forward angle**  
Enable or disable keeping the object angle and forward angle the same.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): Keep object angle and forward direction the same

**Sideways acceleration**  
Change the sideways acceleration of an object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Acceleration (in pixels per second per second)

**Sideways deceleration**  
Change the sideways deceleration of an object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Deceleration (in pixels per second per second)

**Sideways max speed**  
Change the sideways max speed of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Speed (in pixels per second)

**Simulate move backward key press**  
Simulate a press of the move backward key.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

**Simulate move forward key press**  
Simulate a press of the move forward key.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

**Simulate jump key press**  
Simulate a press of the jump key.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

**Simulate move left key press**  
Simulate a press of the move left key.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

**Simulate move right key press**  
Simulate a press of the move right key.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

**Simulate stick control**  
Simulate a stick control.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Stick angle (in degrees)
    - Parameter 3 (🔢 Number): Stick force (between 0 and 1)

### Behavior conditions

**Can jump**  
Check if the object can jump.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

**Current falling speed**  
Compare Compare the current falling speed of the object. Its value is always positive..

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Speed to compare to (in pixels per second)

**Current forward speed**  
Compare the current forward speed of the object. The object moves backward with negative values and forward with positive ones.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Speed (in pixels per second)

**Current jump speed**  
Compare Compare the current jump speed of the object. Its value is always positive..

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Speed to compare to (in pixels per second)

**Current sideways speed**  
Compare the current sideways speed of the object. The object moves to the left with negative values and to the right with positive ones.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Speed (in pixels per second)

**Maximum falling speed**  
Compare the maximum falling speed of an object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Max speed (in pixels per second)

**Forward acceleration**  
Compare the forward acceleration of an object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Acceleration (in pixels per second per second)

**Forward deceleration**  
Compare the forward deceleration of an object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Deceleration (in pixels per second per second)

**Forward max speed**  
Compare the forward max speed of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Speed (in pixels per second)

**Gravity**  
Compare the gravity applied on an object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Gravity (in pixels per second per second)

**Is falling**  
Check if the object is falling.  
Note that the object can be flagged as jumping and falling at the same time: at the end of a jump, the fall speed becomes higher than the jump speed.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

**Forward angle**  
Compare the angle used by the character to go forward.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Angle (in degrees)
    - Parameter 3 (🔢 Number): Tolerance (in degrees)

**Is jumping**  
Check if the object is jumping.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

**Is moving**  
Check if the object is moving (whether it is on the floor or in the air).

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

**Is on floor**  
Check if the object is on a platform.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

**Jump speed**  
Compare the jump speed of an object. Its value is always positive.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Speed (in pixels per second)

**Jump sustain time**  
Compare the jump sustain time of an object. This is the time during which keeping the jump button held allow the initial jump speed to be maintained.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Duration (in seconds)

**Should bind object and forward angle**  
Check if the object angle and forward angle should be kept the same.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

**Sideways acceleration**  
Compare the sideways acceleration of an object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Acceleration (in pixels per second per second)

**Sideways deceleration**  
Compare the sideways deceleration of an object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Deceleration (in pixels per second per second)

**Sideways max speed**  
Compare the sideways max speed of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Speed (in pixels per second)

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.PhysicsCharacter3D::CurrentFallSpeed()` | Return Compare the current falling speed of the object. Its value is always positive.. ||
| `Object.PhysicsCharacter3D::CurrentForwardSpeed()` | Return the current forward speed of the object. The object moves backward with negative values and forward with positive ones. ||
| `Object.PhysicsCharacter3D::CurrentJumpSpeed()` | Return Compare the current jump speed of the object. Its value is always positive.. ||
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

*This page is an auto-generated reference page about the **3D physics engine** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).