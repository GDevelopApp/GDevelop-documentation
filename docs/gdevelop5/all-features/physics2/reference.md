# 2D Physics Engine Reference

The 2D physics engine simulates realistic object physics, with gravity, forces, collisions, joints, etc. It's perfect for 2D games that need to have realistic behaving objects and a gameplay centered around it.

Objects like floors or wall objects should usually be set to "Static" as type. Objects that should be moveable are usually "Dynamic" (default). "Kinematic" objects (typically, players or controlled characters) are only moved by their "linear velocity" and "angular velocity" - they can interact with other objects but only these other objects will move.

Forces (and impulses) are expressed in all conditions/expressions/actions of the 2D physics engine in Newtons (N). Typical values for a force are 10-200 N. One meter is 100 pixels by default in the game (check the world scale). Mass is expressed in kilograms (kg). [Read more explanations about it.](/gdevelop5/behaviors/physics2)

## Actions

**World time scale**  
Modify the world time scale. While an object is needed, this will apply to all objects using the behavior.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Time scale (1 by default)

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::TimeScale`.

## Conditions

**Collision**  
Check if two objects collide.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 👾 Object

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics2::Collision`.

**Collision started**  
Check if two objects just started colliding during this frame.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 👾 Object

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics2::CollisionStarted`.

**Collision stopped**  
Check if two objects just stopped colliding at this frame.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 👾 Object

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics2::CollisionStopped`.



## 2D Physics Engine 

Simulate realistic 2D physics for the object including gravity, forces, collisions, and joints. 

### Behavior actions

**Add distance joint**  
Add a distance joint between two objects. The length is converted to meters using the world scale on X. The frequency and damping ratio are related to the joint speed of oscillation and how fast it stops.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): First object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Anchor X on first body
    - Parameter 3 (🔢 Number): Anchor Y on first body
    - Parameter 4 (👾 Object): Second object
    - Parameter 5 (🔢 Number): Anchor X on second body
    - Parameter 6 (🔢 Number): Anchor Y on second body
    - Parameter 7 (🔢 Number): Length (-1 to use current objects distance) (default: -1)
    - Parameter 8 (🔢 Number): Frequency (Hz) (non-negative) (default: 0)
    - Parameter 9 (🔢 Number): Damping ratio (non-negative) (default: 1)
    - Parameter 10 (❓ Yes or No): Allow collision between connected bodies? (default: no)
    - Parameter 11 (🗄️ Scene variable): Variable where to store the joint ID (default: none)

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::AddDistanceJoint`.

**Add friction joint**  
Add a friction joint between two objects.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): First object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Anchor X on first body
    - Parameter 3 (🔢 Number): Anchor Y on first body
    - Parameter 4 (👾 Object): Second object
    - Parameter 5 (🔢 Number): Anchor X on second body
    - Parameter 6 (🔢 Number): Anchor Y on second body
    - Parameter 7 (🔢 Number): Maximum force (non-negative)
    - Parameter 8 (🔢 Number): Maximum torque (non-negative)
    - Parameter 9 (❓ Yes or No): Allow collision between connected bodies? (default: no)
    - Parameter 10 (🗄️ Scene variable): Variable where to store the joint ID (default: none)

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::AddFrictionJoint`.

**Add gear joint**  
Add a gear joint between two joints. Attention: Gear joints require the joints to be revolute or prismatic, and both of them to be attached to a static body as first object.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): First object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): First joint ID
    - Parameter 3 (🔢 Number): Second joint ID
    - Parameter 4 (🔢 Number): Ratio (non-zero) (default: 1)
    - Parameter 5 (❓ Yes or No): Allow collision between connected bodies? (default: no)
    - Parameter 6 (🗄️ Scene variable): Variable where to store the joint ID (default: none)

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::AddGearJoint`.

**Add motor joint**  
Add a motor joint between two objects. The position and angle offsets are relative to the first object.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): First object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (👾 Object): Second object
    - Parameter 3 (🔢 Number): Offset X position
    - Parameter 4 (🔢 Number): Offset Y position
    - Parameter 5 (🔢 Number): Offset Angle
    - Parameter 6 (🔢 Number): Maximum force (non-negative)
    - Parameter 7 (🔢 Number): Maximum torque (non-negative)
    - Parameter 8 (🔢 Number): Correction factor (default: 1)
    - Parameter 9 (❓ Yes or No): Allow collision between connected bodies? (default: no)
    - Parameter 10 (🗄️ Scene variable): Variable where to store the joint ID (default: none)

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::AddMotorJoint`.

**Add mouse joint**  
Add a mouse joint to an object (makes the object move towards a specific point).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Target X
    - Parameter 3 (🔢 Number): Target Y
    - Parameter 4 (🔢 Number): Maximum force (N) (non-negative) (default: 500)
    - Parameter 5 (🔢 Number): Frequency (Hz) (positive) (default: 10)
    - Parameter 6 (🔢 Number): Damping ratio (non-negative) (default: 1)
    - Parameter 7 (🗄️ Scene variable): Variable where to store the joint ID (default: none)

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::AddMouseJoint`.

**Add prismatic joint**  
Add a prismatic joint between two objects. The translation limits are converted to meters using the world scale on X.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): First object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Anchor X on first body
    - Parameter 3 (🔢 Number): Anchor Y on first body
    - Parameter 4 (👾 Object): Second object
    - Parameter 5 (🔢 Number): Anchor X on second body
    - Parameter 6 (🔢 Number): Anchor Y on second body
    - Parameter 7 (🔢 Number): Axis angle
    - Parameter 8 (🔢 Number): Reference angle (default: 0)
    - Parameter 9 (❓ Yes or No): Enable limits? (default: no)
    - Parameter 10 (🔢 Number): Minimum translation (default: 0)
    - Parameter 11 (🔢 Number): Maximum translation (default: 0)
    - Parameter 12 (❓ Yes or No): Enable motor? (default: no)
    - Parameter 13 (🔢 Number): Motor speed (default: 0)
    - Parameter 14 (🔢 Number): Motor maximum force (default: 0)
    - Parameter 15 (❓ Yes or No): Allow collision between connected bodies? (default: no)
    - Parameter 16 (🗄️ Scene variable): Variable where to store the joint ID (default: none)

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::AddPrismaticJoint`.

**Add pulley joint**  
Add a pulley joint between two objects. Lengths are converted to meters using the world scale on X.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): First object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Anchor X on first body
    - Parameter 3 (🔢 Number): Anchor Y on first body
    - Parameter 4 (👾 Object): Second object
    - Parameter 5 (🔢 Number): Anchor X on second body
    - Parameter 6 (🔢 Number): Anchor Y on second body
    - Parameter 7 (🔢 Number): Ground anchor X for first object
    - Parameter 8 (🔢 Number): Ground anchor Y for first object
    - Parameter 9 (🔢 Number): Ground anchor X for second object
    - Parameter 10 (🔢 Number): Ground anchor Y for second object
    - Parameter 11 (🔢 Number): Length for first object (-1 to use anchor positions) (default: -1)
    - Parameter 12 (🔢 Number): Length for second object (-1 to use anchor positions) (default: -1)
    - Parameter 13 (🔢 Number): Ratio (non-negative) (default: 1
    - Parameter 14 (❓ Yes or No): Allow collision between connected bodies? (default: no)
    - Parameter 15 (🗄️ Scene variable): Variable where to store the joint ID (default: none)

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::AddPulleyJoint`.

**Add revolute joint**  
Add a revolute joint to an object at a fixed point. The object is attached as the second object in the joint, so you can use this for gear joints.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): X anchor
    - Parameter 3 (🔢 Number): Y anchor
    - Parameter 4 (❓ Yes or No): Enable angle limits? (default: no)
    - Parameter 5 (🔢 Number): Reference angle (default: 0)
    - Parameter 6 (🔢 Number): Minimum angle (default: 0)
    - Parameter 7 (🔢 Number): Maximum angle (default: 0)
    - Parameter 8 (❓ Yes or No): Enable motor? (default: no)
    - Parameter 9 (🔢 Number): Motor speed (default: 0)
    - Parameter 10 (🔢 Number): Motor maximum torque (default: 0)
    - Parameter 11 (🗄️ Scene variable): Variable where to store the joint ID (default: none)

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::AddRevoluteJoint`.

**Add revolute joint between two bodies**  
Add a revolute joint between two objects. The reference angle determines what is considered as the base angle at the initial state.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): First object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Anchor X on first body
    - Parameter 3 (🔢 Number): Anchor Y on first body
    - Parameter 4 (👾 Object): Second object
    - Parameter 5 (🔢 Number): Anchor X on second body
    - Parameter 6 (🔢 Number): Anchor Y on second body
    - Parameter 7 (❓ Yes or No): Enable angle limits? (default: no)
    - Parameter 8 (🔢 Number): Reference angle (default: 0)
    - Parameter 9 (🔢 Number): Minimum angle (default: 0)
    - Parameter 10 (🔢 Number): Maximum angle (default: 0)
    - Parameter 11 (❓ Yes or No): Enable motor? (default: no)
    - Parameter 12 (🔢 Number): Motor speed (default: 0)
    - Parameter 13 (🔢 Number): Motor maximum torque (default: 0)
    - Parameter 14 (❓ Yes or No): Allow collision between connected bodies? (default: no)
    - Parameter 15 (🗄️ Scene variable): Variable where to store the joint ID (default: none)

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::AddRevoluteJointBetweenTwoBodies`.

**Add rope joint**  
Add a rope joint between two objects. The maximum length is converted to meters using the world scale on X.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): First object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Anchor X on first body
    - Parameter 3 (🔢 Number): Anchor Y on first body
    - Parameter 4 (👾 Object): Second object
    - Parameter 5 (🔢 Number): Anchor X on second body
    - Parameter 6 (🔢 Number): Anchor Y on second body
    - Parameter 7 (🔢 Number): Maximum length (-1 to use current objects distance) (default: -1)
    - Parameter 8 (❓ Yes or No): Allow collision between connected bodies? (default: no)
    - Parameter 9 (🗄️ Scene variable): Variable where to store the joint ID (default: none)

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::AddRopeJoint`.

**Add weld joint**  
Add a weld joint between two objects.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): First object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Anchor X on first body
    - Parameter 3 (🔢 Number): Anchor Y on first body
    - Parameter 4 (👾 Object): Second object
    - Parameter 5 (🔢 Number): Anchor X on second body
    - Parameter 6 (🔢 Number): Anchor Y on second body
    - Parameter 7 (🔢 Number): Reference angle (default: 0)
    - Parameter 8 (🔢 Number): Frequency (Hz) (non-negative) (default: 10)
    - Parameter 9 (🔢 Number): Damping ratio (non-negative) (default: 1)
    - Parameter 10 (❓ Yes or No): Allow collision between connected bodies? (default: no)
    - Parameter 11 (🗄️ Scene variable): Variable where to store the joint ID (default: none)

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::AddWeldJoint`.

**Add wheel joint**  
Add a wheel joint between two objects. Higher frequencies means higher suspensions. Damping determines oscillations, critical damping of 1 means no oscillations.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): First object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Anchor X on first body
    - Parameter 3 (🔢 Number): Anchor Y on first body
    - Parameter 4 (👾 Object): Second object
    - Parameter 5 (🔢 Number): Anchor X on second body
    - Parameter 6 (🔢 Number): Anchor Y on second body
    - Parameter 7 (🔢 Number): Axis angle
    - Parameter 8 (🔢 Number): Frequency (Hz) (non-negative) (default: 10)
    - Parameter 9 (🔢 Number): Damping ratio (non-negative) (default: 1)
    - Parameter 10 (❓ Yes or No): Enable motor? (default: no)
    - Parameter 11 (🔢 Number): Motor speed (default: 0)
    - Parameter 12 (🔢 Number): Motor maximum torque (default: 0)
    - Parameter 13 (❓ Yes or No): Allow collision between connected bodies? (default: no)
    - Parameter 14 (🗄️ Scene variable): Variable where to store the joint ID (default: none)

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::AddWheelJoint`.

**Angular damping**  
Modify an object angular damping. How much angular speed is lost across the time.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::AngularDamping`.

**Angular velocity**  
Modify an object angular velocity.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Angular speed (in degrees per second)

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::AngularVelocity`.

**Apply angular impulse (rotational impulse)**  
Apply an angular impulse (also called a "rotational impulse") to the object. It instantly changes the rotation speed, to give an initial speed for instance.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Angular impulse (N·m·s)
      An impulse is like a rotation speed addition but depends on the mass.

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::ApplyAngularImpulse`.

**Apply force**  
Apply a force to the object over time. It "accelerates" an object and must be used every frame during a time period.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): X component (N)
    - Parameter 3 (🔢 Number): Y component (N)
      A force is like an acceleration but depends on the mass.
    - Parameter 4 (🔢 Number): Application point on X axis
    - Parameter 5 (🔢 Number): Application point on Y axis
      Use `MassCenterX` and `MassCenterY` expressions to avoid any rotation.

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::ApplyForce`.

**Apply force toward position**  
Apply a force to the object over time to move it toward a position. It "accelerates" an object and must be used every frame during a time period.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Length (N)
      A force is like an acceleration but depends on the mass.
    - Parameter 3 (🔢 Number): X position
    - Parameter 4 (🔢 Number): Y position
    - Parameter 5 (🔢 Number): Application point on X axis
    - Parameter 6 (🔢 Number): Application point on Y axis
      Use `MassCenterX` and `MassCenterY` expressions to avoid any rotation.

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::ApplyForceTowardPosition`.

**Apply impulse**  
Apply an impulse to the object. It instantly changes the speed, to give an initial speed for instance.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): X component (N·s or kg·m·s⁻¹)
    - Parameter 3 (🔢 Number): Y component (N·s or kg·m·s⁻¹)
      An impulse is like a speed addition but depends on the mass.
    - Parameter 4 (🔢 Number): Application point on X axis
    - Parameter 5 (🔢 Number): Application point on Y axis
      Use `MassCenterX` and `MassCenterY` expressions to avoid any rotation.

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::ApplyImpulse`.

**Apply impulse toward position**  
Apply an impulse to the object to move it toward a position. It instantly changes the speed, to give an initial speed for instance.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Length (N·s or kg·m·s⁻¹)
      An impulse is like a speed addition but depends on the mass.
    - Parameter 3 (🔢 Number): X position
    - Parameter 4 (🔢 Number): Y position
    - Parameter 5 (🔢 Number): Application point on X axis
    - Parameter 6 (🔢 Number): Application point on Y axis
      Use `MassCenterX` and `MassCenterY` expressions to avoid any rotation.

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::ApplyImpulseTowardPosition`.

**Apply force (angle)**  
Apply a force to the object over time using polar coordinates. It "accelerates" an object and must be used every frame during a time period.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Angle
    - Parameter 3 (🔢 Number): Length (N)
      A force is like an acceleration but depends on the mass.
    - Parameter 4 (🔢 Number): Application point on X axis
    - Parameter 5 (🔢 Number): Application point on Y axis
      Use `MassCenterX` and `MassCenterY` expressions to avoid any rotation.

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::ApplyPolarForce`.

**Apply impulse (angle)**  
Apply an impulse to the object using polar coordinates. It instantly changes the speed, to give an initial speed for instance.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Angle
    - Parameter 3 (🔢 Number): Length (N·s or kg·m·s⁻¹)
      An impulse is like a speed addition but depends on the mass.
    - Parameter 4 (🔢 Number): Application point on X axis
    - Parameter 5 (🔢 Number): Application point on Y axis
      Use `MassCenterX` and `MassCenterY` expressions to avoid any rotation.

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::ApplyPolarImpulse`.

**Apply torque (rotational force)**  
Apply a torque (also called "rotational force") to the object. It "accelerates" an object rotation and must be used every frame during a time period.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Torque (N·m)
      A torque is like a rotation acceleration but depends on the mass.

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::ApplyTorque`.

**Density**  
Modify an object density. The body's density and volume determine its mass.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::Density`.

**Distance joint damping ratio**  
Modify a distance joint damping ratio.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Joint ID
    - Parameter 3: 🟰 Operator
    - Parameter 4 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::DistanceJointDampingRatio`.

**Distance joint frequency**  
Modify a distance joint frequency.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Joint ID
    - Parameter 3: 🟰 Operator
    - Parameter 4 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::DistanceJointFrequency`.

**Distance joint length**  
Modify a distance joint length.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Joint ID
    - Parameter 3: 🟰 Operator
    - Parameter 4 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::DistanceJointLength`.

**Enable layer**  
Enable or disable a layer for an object. Two objects collide if any layer of the first object matches any mask of the second one and vice versa.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Layer (1 - 16)
    - Parameter 3 (❓ Yes or No): Enable

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::EnableLayer`.

**Enable mask**  
Enable or disable a mask for an object. Two objects collide if any layer of the first object matches any mask of the second one and vice versa.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Mask (1 - 16)
    - Parameter 3 (❓ Yes or No): Enable

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::EnableMask`.

**Enable prismatic joint limits**  
Enable or disable a prismatic joint limits.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Joint ID
    - Parameter 3 (❓ Yes or No): Enable

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::EnablePrismaticJointLimits`.

**Enable prismatic joint motor**  
Enable or disable a prismatic joint motor.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Joint ID
    - Parameter 3 (❓ Yes or No): Enable

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::EnablePrismaticJointMotor`.

**Enable revolute joint limits**  
Enable or disable a revolute joint angle limits.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Joint ID
    - Parameter 3 (❓ Yes or No): Enable

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::EnableRevoluteJointLimits`.

**Enable revolute joint motor**  
Enable or disable a revolute joint motor.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Joint ID
    - Parameter 3 (❓ Yes or No): Enable

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::EnableRevoluteJointMotor`.

**Enable wheel joint motor**  
Enable or disable a wheel joint motor.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Joint ID
    - Parameter 3 (❓ Yes or No): Enable

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::EnableWheelJointMotor`.

**Friction**  
Modify an object friction. How much energy is lost from the movement of one object over another. The combined friction from two bodies is calculated as 'sqrt(bodyA.friction * bodyB.friction)'.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::Friction`.

**Friction joint max force**  
Modify a friction joint maximum force.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Joint ID
    - Parameter 3: 🟰 Operator
    - Parameter 4 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::FrictionJointMaxForce`.

**Friction joint max torque**  
Modify a friction joint maximum torque.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Joint ID
    - Parameter 3: 🟰 Operator
    - Parameter 4 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::FrictionJointMaxTorque`.

**Gear joint ratio**  
Modify a Gear joint ratio.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Joint ID
    - Parameter 3: 🟰 Operator
    - Parameter 4 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::GearJointRatio`.

**World gravity**  
Modify the world gravity. While an object is needed, this will apply to all objects using the behavior.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Gravity X
    - Parameter 3 (🔢 Number): Gravity Y

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::Gravity`.

**Gravity scale**  
Modify an object gravity scale. The gravity applied to an object is the world gravity multiplied by the object gravity scale.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Scale (1 by default)

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::GravityScale`.

**Linear damping**  
Modify an object linear damping. How much movement speed is lost across the time.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::LinearDamping`.

**Linear velocity towards an angle**  
Set the linear velocity towards an angle.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Angle
    - Parameter 3 (🔢 Number): Speed (in pixels per second)

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::LinearVelocityAngle`.

**Linear velocity X**  
Modify an object linear velocity on X.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Speed (in pixels per second)

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::LinearVelocityX`.

**Linear velocity Y**  
Modify an object linear velocity on Y.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Speed (in pixels per second)

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::LinearVelocityY`.

**Motor joint angular offset**  
Modify a motor joint angular offset.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Joint ID
    - Parameter 3: 🟰 Operator
    - Parameter 4 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::MotorJointAngularOffset`.

**Motor joint correction factor**  
Modify a motor joint correction factor.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Joint ID
    - Parameter 3: 🟰 Operator
    - Parameter 4 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::MotorJointCorrectionFactor`.

**Motor joint max force**  
Modify a motor joint maximum force.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Joint ID
    - Parameter 3: 🟰 Operator
    - Parameter 4 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::MotorJointMaxForce`.

**Motor joint max torque**  
Modify a motor joint maximum torque.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Joint ID
    - Parameter 3: 🟰 Operator
    - Parameter 4 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::MotorJointMaxTorque`.

**Motor joint offset**  
Modify a motor joint offset.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Joint ID
    - Parameter 3 (🔢 Number): Offset X
    - Parameter 4 (🔢 Number): Offset Y

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::MotorJointOffset`.

**Mouse joint damping ratio**  
Set a mouse joint damping ratio.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Joint ID
    - Parameter 3: 🟰 Operator
    - Parameter 4 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::MouseJointDampingRatio`.

**Mouse joint frequency**  
Set a mouse joint frequency.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Joint ID
    - Parameter 3: 🟰 Operator
    - Parameter 4 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::MouseJointFrequency`.

**Mouse joint max force**  
Set a mouse joint maximum force.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Joint ID
    - Parameter 3: 🟰 Operator
    - Parameter 4 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::MouseJointMaxForce`.

**Mouse joint target**  
Set a mouse joint target.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Joint ID
    - Parameter 3 (🔢 Number): Target X
    - Parameter 4 (🔢 Number): Target Y

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::MouseJointTarget`.

**Prismatic joint limits**  
Modify a prismatic joint limits.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Joint ID
    - Parameter 3 (🔢 Number): Minimum translation
    - Parameter 4 (🔢 Number): Maximum translation

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::PrismaticJointLimits`.

**Prismatic joint max motor force**  
Modify a prismatic joint maximum motor force.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Joint ID
    - Parameter 3: 🟰 Operator
    - Parameter 4 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::PrismaticJointMaxMotorForce`.

**Prismatic joint motor speed**  
Modify a prismatic joint motor speed.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Joint ID
    - Parameter 3: 🟰 Operator
    - Parameter 4 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::PrismaticJointMotorSpeed`.

**Remove joint**  
Remove a joint from the scene.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Joint ID

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::Remove joint`.

**Restitution**  
Modify an object restitution. Energy conservation on collision. The combined restitution from two bodies is calculated as 'max(bodyA.restitution, bodyB.restitution)'.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::Restitution`.

**Revolute joint limits**  
Modify a revolute joint angle limits.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Joint ID
    - Parameter 3 (🔢 Number): Minimum angle
    - Parameter 4 (🔢 Number): Maximum angle

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::RevoluteJointLimits`.

**Revolute joint max motor torque**  
Modify a revolute joint maximum motor torque.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Joint ID
    - Parameter 3: 🟰 Operator
    - Parameter 4 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::RevoluteJointMaxMotorTorque`.

**Revolute joint motor speed**  
Modify a revolute joint motor speed.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Joint ID
    - Parameter 3: 🟰 Operator
    - Parameter 4 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::RevoluteJointMotorSpeed`.

**Rope joint max length**  
Modify a rope joint maximum length.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Joint ID
    - Parameter 3: 🟰 Operator
    - Parameter 4 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::RopeJointMaxLength`.

**Treat as bullet**  
Treat the object as a bullet. Better collision handling on high speeds at cost of some performance.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): Treat as bullet

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::SetBullet`.

**Set as dynamic**  
Set an object as dynamic. Is affected by gravity, forces and velocities.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::SetDynamic`.

**Fixed rotation**  
Enable or disable an object fixed rotation. If enabled the object won't be able to rotate.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): Fixed rotation

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::SetFixedRotation`.

**Set as kinematic**  
Set an object as kinematic. Is like a static body but can be moved through its velocity.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::SetKinematic`.

**Sleeping allowed**  
Allow or not an object to sleep. If enabled the object will be able to sleep, improving performance for non-currently-moving objects.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): Can sleep

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::SetSleepingAllowed`.

**Set as static**  
Set an object as static. Is not affected by gravity, and can't be moved by forces or velocities at all.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::SetStatic`.

**Shape scale**  
Modify an object shape scale. It affects custom shape dimensions and shape offset, if custom dimensions are not set the body will be scaled automatically to the object size.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Scale (1 by default)

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::ShapeScale`.

**Weld joint damping ratio**  
Modify a weld joint damping ratio.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Joint ID
    - Parameter 3: 🟰 Operator
    - Parameter 4 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::WeldJointDampingRatio`.

**Weld joint frequency**  
Modify a weld joint frequency.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Joint ID
    - Parameter 3: 🟰 Operator
    - Parameter 4 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::WeldJointFrequency`.

**Wheel joint damping ratio**  
Modify a wheel joint damping ratio.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Joint ID
    - Parameter 3: 🟰 Operator
    - Parameter 4 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::WheelJointDampingRatio`.

**Wheel joint frequency**  
Modify a wheel joint frequency.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Joint ID
    - Parameter 3: 🟰 Operator
    - Parameter 4 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::WheelJointFrequency`.

**Wheel joint max motor torque**  
Modify a wheel joint maximum motor torque.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Joint ID
    - Parameter 3: 🟰 Operator
    - Parameter 4 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::WheelJointMaxMotorTorque`.

**Wheel joint motor speed**  
Modify a wheel joint motor speed.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Joint ID
    - Parameter 3: 🟰 Operator
    - Parameter 4 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `Physics2::WheelJointMotorSpeed`.

### Behavior conditions

**Angular damping**  
Test an object angular damping.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics2::AngularDamping`.

**Angular velocity**  
Test an object angular velocity.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Angular speed to compare to (in degrees per second)

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics2::AngularVelocity`.

**Density**  
Test an object density.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics2::Density`.

**Friction**  
Test an object friction.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics2::Friction`.

**Gravity scale**  
Test an object gravity scale.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Scale to compare to (1 by default)

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics2::GravityScale`.

**World gravity on X axis**  
Compare the world gravity on X axis.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Gravity to compare to (in pixels per second per second)

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics2::GravityX`.

**World gravity on Y axis**  
Compare the world gravity on Y axis.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Gravity to compare to (in pixels per second per second)

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics2::GravityY`.

**Has fixed rotation**  
Check if an object has fixed rotation.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics2::HasFixedRotation`.

**Is treated as a bullet**  
Check if the object is being treated as a bullet.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics2::IsBullet`.

**Is dynamic**  
Check if an object is dynamic.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics2::IsDynamic`.

**Is kinematic**  
Check if an object is kinematic.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics2::IsKinematic`.

**Is sleeping**  
Check if an object is sleeping.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics2::IsSleeping`.

**Is sleeping allowed**  
Check if an object can sleep.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics2::IsSleepingAllowed`.

**Is static**  
Check if an object is static.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics2::IsStatic`.

**Joint first object**  
Check if an object is the first object on a joint.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Joint ID

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics2::JointFirstObject`.

**Joint reaction force**  
Test a joint reaction force.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Joint ID
    - Parameter 3: 🟰 Relational operator
    - Parameter 4 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics2::JointReactionForce`.

**Joint reaction torque**  
Test a joint reaction torque.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Joint ID
    - Parameter 3: 🟰 Relational operator
    - Parameter 4 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics2::JointReactionTorque`.

**Joint second object**  
Check if an object is the second object on a joint.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Joint ID

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics2::JointSecondObject`.

**Layer enabled**  
Check if an object has a specific layer enabled.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Layer (1 - 16)

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics2::LayerEnabled`.

**Linear damping**  
Test an object linear damping.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics2::LinearDamping`.

**Linear velocity**  
Test an object linear velocity length.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Speed to compare to (in pixels per second)

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics2::LinearVelocityLength`.

**Linear velocity X**  
Test an object linear velocity on X.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Speed to compare to (in pixels per second)

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics2::LinearVelocityX`.

**Linear velocity Y**  
Test an object linear velocity on Y.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Speed to compare to (in pixels per second)

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics2::LinearVelocityY`.

**Mask enabled**  
Check if an object has a specific mask enabled.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Mask (1 - 16)

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics2::MaskEnabled`.

**Linear velocity angle**  
Compare the linear velocity angle of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Angle (in degrees)
    - Parameter 3 (🔢 Number): Tolerance (in degrees)

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics2::Physics2Behavior::IsLinearVelocityAngleAround`.

**Prismatic joint limits enabled**  
Check if a prismatic joint limits are enabled.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Joint ID

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics2::PrismaticJointLimitsEnabled`.

**Prismatic joint motor enabled**  
Check if a prismatic joint motor is enabled.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Joint ID

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics2::PrismaticJointMotorEnabled`.

**Restitution**  
Test an object restitution.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics2::Restitution`.

**Revolute joint limits enabled**  
Check if a revolute joint limits are enabled.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Joint ID

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics2::RevoluteJointLimitsEnabled`.

**Revolute joint motor enabled**  
Check if a revolute joint motor is enabled.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Joint ID

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics2::RevoluteJointMotorEnabled`.

**World time scale**  
Compare the world time scale.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Time scale to compare to (1 by default)

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics2::TimeScale`.

**Wheel joint motor enabled**  
Check if a wheel joint motor is enabled.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Joint ID

    > Technical note: this condition internal type (in GDevelop JSON) is `Physics2::WheelJointMotorEnabled`.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.Physics2::AngularDamping()` | Get the angular damping of an object. ||
| `Object.Physics2::AngularVelocity()` | Get the angular velocity of an object. ||
| `Object.Physics2::Density()` | Get the density of an object. ||
| `Object.Physics2::DistanceJointDampingRatio(number)` | Distance joint damping ratio ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::DistanceJointFrequency(number)` | Distance joint frequency ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::DistanceJointLength(number)` | Distance joint length ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::Friction()` | Get the friction of an object. ||
| `Object.Physics2::FrictionJointMaxForce(number)` | Friction joint maximum force ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::FrictionJointMaxTorque(number)` | Friction joint maximum torque ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::GearJointFirstJoint(number)` | Gear joint first joint ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::GearJointRatio(number)` | Gear joint ratio ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::GearJointSecondJoint(number)` | Gear joint second joint ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::GravityScale()` | Get the gravity scale of an object. ||
| `Object.Physics2::GravityX()` | World gravity on X axis ||
| `Object.Physics2::GravityY()` | World gravity on Y axis ||
| `Object.Physics2::Inertia()` | Return the rotational inertia of the object (in kilograms · meters²) ||
| `Object.Physics2::JointFirstAnchorX(number)` | Joint first anchor X ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::JointFirstAnchorY(number)` | Joint first anchor Y ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::JointReactionForce(number)` | Joint reaction force ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::JointReactionTorque(number)` | Joint reaction torque ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::JointSecondAnchorX(number)` | Joint second anchor X ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::JointSecondAnchorY(number)` | Joint second anchor Y ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::LinearDamping()` | Get the linear damping of an object. ||
| `Object.Physics2::LinearVelocity()` | Get the linear velocity of an object. ||
| `Object.Physics2::LinearVelocityAngle()` | Get the linear velocity angle of an object. ||
| `Object.Physics2::LinearVelocityX()` | Get the linear velocity of an object on X axis. ||
| `Object.Physics2::LinearVelocityY()` | Get the linear velocity of an object on Y axis. ||
| `Object.Physics2::Mass()` | Return the mass of the object (in kilograms) ||
| `Object.Physics2::MassCenterX()` | Mass center X ||
| `Object.Physics2::MassCenterY()` | Mass center Y ||
| `Object.Physics2::MotorJointAngularOffset(number)` | Motor joint angular offset ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::MotorJointCorrectionFactor(number)` | Motor joint correction factor ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::MotorJointMaxForce(number)` | Motor joint maximum force ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::MotorJointMaxTorque(number)` | Motor joint maximum torque ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::MotorJointOffsetX(number)` | Motor joint offset X ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::MotorJointOffsetY(number)` | Motor joint offset Y ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::MouseJointDampingRatio(number)` | Mouse joint damping ratio ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::MouseJointFrequency(number)` | Mouse joint frequency ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::MouseJointMaxForce(number)` | Mouse joint maximum force ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::MouseJointTargetX(number)` | Mouse joint target X ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::MouseJointTargetY(number)` | Mouse joint target Y ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::PrismaticJointAxisAngle(number)` | Prismatic joint axis angle ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::PrismaticJointMaxMotorForce(number)` | Prismatic joint maximum motor force ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::PrismaticJointMaxTranslation(number)` | Prismatic joint maximum translation ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::PrismaticJointMinTranslation(number)` | Prismatic joint minimum translation ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::PrismaticJointMotorForce(number)` | Prismatic joint motor force ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::PrismaticJointMotorSpeed(number)` | Prismatic joint motor speed ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::PrismaticJointReferenceAngle(number)` | Prismatic joint reference angle ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::PrismaticJointSpeed(number)` | Prismatic joint speed ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::PrismaticJointTranslation(number)` | Prismatic joint current translation ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::PulleyJointFirstGroundAnchorX(number)` | Pulley joint first ground anchor X ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::PulleyJointFirstGroundAnchorY(number)` | Pulley joint first ground anchor Y ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::PulleyJointFirstLength(number)` | Pulley joint first length ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::PulleyJointRatio(number)` | Pulley joint ratio ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::PulleyJointSecondGroundAnchorX(number)` | Pulley joint second ground anchor X ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::PulleyJointSecondGroundAnchorY(number)` | Pulley joint second ground anchor Y ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::PulleyJointSecondLength(number)` | Pulley joint second length ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::Restitution()` | Get the restitution of an object. ||
| `Object.Physics2::RevoluteJointAngle(number)` | Revolute joint current angle ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::RevoluteJointMaxAngle(number)` | Revolute joint maximum angle ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::RevoluteJointMaxMotorTorque(number)` | Revolute joint maximum motor torque ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::RevoluteJointMinAngle(number)` | Revolute joint minimum angle ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::RevoluteJointMotorSpeed(number)` | Revolute joint motor speed ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::RevoluteJointMotorTorque(number)` | Revolute joint motor torque ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::RevoluteJointReferenceAngle(number)` | Revolute joint reference angle ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::RevoluteJointSpeed(number)` | Revolute joint angular speed ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::RopeJointMaxLength(number)` | Rope joint maximum length ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::TimeScale()` | World time scale ||
| `Object.Physics2::WeldJointDampingRatio(number)` | Weld joint damping ratio ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::WeldJointFrequency(number)` | Weld joint frequency ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::WeldJointReferenceAngle(number)` | Weld joint reference angle ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::WheelJointAxisAngle(number)` | Wheel joint axis angle ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::WheelJointDampingRatio(number)` | Wheel joint damping ratio ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::WheelJointFrequency(number)` | Wheel joint frequency ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::WheelJointMaxMotorTorque(number)` | Wheel joint maximum motor torque ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::WheelJointMotorSpeed(number)` | Wheel joint motor speed ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::WheelJointMotorTorque(number)` | Wheel joint motor torque ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::WheelJointSpeed(number)` | Wheel joint speed ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::WheelJointTranslation(number)` | Wheel joint current translation ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::WorldScale()` | Return the world scale. ||



---

The 2D Physics Engine extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **2D Physics Engine** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).