# Physics Engine 2.0 Reference

The physics engine simulates realistic object physics, with gravity, forces, joints, etc. It's perfect for games that need to have realistic behaving objects and a gameplay centered around it. [Read more explanations about it.](/gdevelop5/behaviors/physics2)

## Actions

**World time scale**  
Modify the world time scale. While an object is needed, this will apply to all objects using the behavior.

## Conditions

**Collision**  
Check if two objects collide.

**Collision started**  
Check if two objects just started colliding during this frame.

**Collision stopped**  
Check if two objects just stopped colliding at this frame.



## Physics Engine 2.0 

Simulate realistic object physics with gravity, forces, joints, etc. 

### Behavior actions

**Add distance joint**  
Add a distance joint between two objects. The length is converted to meters using the world scale on X. The frequency and damping ratio are related to the joint speed of oscillation and how fast it stops.

**Add friction joint**  
Add a friction joint between two objects.

**Add gear joint**  
Add a gear joint between two joints. Attention: Gear joints require the joints to be revolute or prismatic, and both of them to be attached to a static body as first object.

**Add motor joint**  
Add a motor joint between two objects. The position and angle offsets are relative to the first object.

**Add mouse joint**  
Add a mouse joint to an object (makes the object move towards a specific point).

**Add prismatic joint**  
Add a prismatic joint between two objects. The translation limits are converted to meters using the world scale on X.

**Add pulley joint**  
Add a pulley joint between two objects. Lengths are converted to meters using the world scale on X.

**Add revolute joint**  
Add a revolute joint to an object at a fixed point. The object is attached as the second object in the joint, so you can use this for gear joints.

**Add revolute joint between two bodies**  
Add a revolute joint between two objects. The reference angle determines what is considered as the base angle at the initial state.

**Add rope joint**  
Add a rope joint between two objects. The maximum length is converted to meters using the world scale on X.

**Add weld joint**  
Add a weld joint between two objects.

**Add wheel joint**  
Add a wheel joint between two objects. Higher frequencies means higher suspensions. Damping determines oscillations, critical damping of 1 means no oscillations.

**Angular damping**  
Modify an object angular damping. How much angular speed is lost across the time.

**Angular velocity**  
Modify an object angular velocity.

**Apply angular impulse (rotational impulse)**  
Apply an angular impulse (also called a "rotational impulse") to the object. It instantly changes the rotation speed, to give an initial speed for instance.

**Apply force**  
Apply a force to the object over time. It "accelerates" an object and must be used every frame during a time period.

**Apply force toward position**  
Apply a force to the object over time to move it toward a position. It "accelerates" an object and must be used every frame during a time period.

**Apply impulse**  
Apply an impulse to the object. It instantly changes the speed, to give an initial speed for instance.

**Apply impulse toward position**  
Apply an impulse to the object to move it toward a position. It instantly changes the speed, to give an initial speed for instance.

**Apply force (angle)**  
Apply a force to the object over time using polar coordinates. It "accelerates" an object and must be used every frame during a time period.

**Apply impulse (angle)**  
Apply an impulse to the object using polar coordinates. It instantly changes the speed, to give an initial speed for instance.

**Apply torque (rotational force)**  
Apply a torque (also called "rotational force") to the object. It "accelerates" an object rotation and must be used every frame during a time period.

**Density**  
Modify an object density. The body's density and volume determine its mass.

**Distance joint damping ratio**  
Modify a distance joint damping ratio.

**Distance joint frequency**  
Modify a distance joint frequency.

**Distance joint length**  
Modify a distance joint length.

**Enable layer**  
Enable or disable a layer for an object. Two objects collide if any layer of the first object matches any mask of the second one and vice versa.

**Enable mask**  
Enable or disable a mask for an object. Two objects collide if any layer of the first object matches any mask of the second one and vice versa.

**Enable prismatic joint limits**  
Enable or disable a prismatic joint limits.

**Enable prismatic joint motor**  
Enable or disable a prismatic joint motor.

**Enable revolute joint limits**  
Enable or disable a revolute joint angle limits.

**Enable revolute joint motor**  
Enable or disable a revolute joint motor.

**Enable wheel joint motor**  
Enable or disable a wheel joint motor.

**Friction**  
Modify an object friction. How much energy is lost from the movement of one object over another. The combined friction from two bodies is calculated as 'sqrt(bodyA.friction * bodyB.friction)'.

**Friction joint max force**  
Modify a friction joint maximum force.

**Friction joint max torque**  
Modify a friction joint maximum torque.

**Gear joint ratio**  
Modify a Gear joint ratio.

**World gravity**  
Modify the world gravity. While an object is needed, this will apply to all objects using the behavior.

**Gravity scale**  
Modify an object gravity scale. The gravity applied to an object is the world gravity multiplied by the object gravity scale.

**Linear damping**  
Modify an object linear damping. How much movement speed is lost across the time.

**Linear velocity towards an angle**  
Set the linear velocity towards an angle.

**Linear velocity X**  
Modify an object linear velocity on X.

**Linear velocity Y**  
Modify an object linear velocity on Y.

**Motor joint angular offset**  
Modify a motor joint angular offset.

**Motor joint correction factor**  
Modify a motor joint correction factor.

**Motor joint max force**  
Modify a motor joint maximum force.

**Motor joint max torque**  
Modify a motor joint maximum torque.

**Motor joint offset**  
Modify a motor joint offset.

**Mouse joint damping ratio**  
Set a mouse joint damping ratio.

**Mouse joint frequency**  
Set a mouse joint frequency.

**Mouse joint max force**  
Set a mouse joint maximum force.

**Mouse joint target**  
Set a mouse joint target.

**Prismatic joint limits**  
Modify a prismatic joint limits.

**Prismatic joint max motor force**  
Modify a prismatic joint maximum motor force.

**Prismatic joint motor speed**  
Modify a prismatic joint motor speed.

**Remove joint**  
Remove a joint from the scene.

**Restitution**  
Modify an object restitution. Energy conservation on collision. The combined restitution from two bodies is calculated as 'max(bodyA.restitution, bodyB.restitution)'.

**Revolute joint limits**  
Modify a revolute joint angle limits.

**Revolute joint max motor torque**  
Modify a revolute joint maximum motor torque.

**Revolute joint motor speed**  
Modify a revolute joint motor speed.

**Rope joint max length**  
Modify a rope joint maximum length.

**Treat as bullet**  
Treat the object as a bullet. Better collision handling on high speeds at cost of some performance.

**Set as dynamic**  
Set an object as dynamic. Is affected by gravity, forces and velocities.

**Fixed rotation**  
Enable or disable an object fixed rotation. If enabled the object won't be able to rotate.

**Set as kinematic**  
Set an object as kinematic. Is like a static body but can be moved through its velocity.

**Sleeping allowed**  
Allow or not an object to sleep. If enabled the object will be able to sleep, improving performance for non-currently-moving objects.

**Set as static**  
Set an object as static. Is not affected by gravity, and can't be moved by forces or velocities at all.

**Shape scale**  
Modify an object shape scale. It affects custom shape dimensions and shape offset, if custom dimensions are not set the body will be scaled automatically to the object size.

**Weld joint damping ratio**  
Modify a weld joint damping ratio.

**Weld joint frequency**  
Modify a weld joint frequency.

**Wheel joint damping ratio**  
Modify a wheel joint damping ratio.

**Wheel joint frequency**  
Modify a wheel joint frequency.

**Wheel joint max motor torque**  
Modify a wheel joint maximum motor torque.

**Wheel joint motor speed**  
Modify a wheel joint motor speed.

### Behavior conditions

**Angular damping**  
Test an object angular damping.

**Angular velocity**  
Test an object angular velocity.

**Density**  
Test an object density.

**Friction**  
Test an object friction.

**Gravity scale**  
Test an object gravity scale.

**World gravity on X axis**  
Compare the world gravity on X axis.

**World gravity on Y axis**  
Compare the world gravity on Y axis.

**Has fixed rotation**  
Test if an object has fixed rotation.

**Is treat as bullet**  
Test if an object is being treat as a bullet.

**Is dynamic**  
Test if an object is dynamic.

**Is kinematic**  
Test if an object is kinematic.

**Is sleeping**  
Test if an object is sleeping.

**Is sleeping allowed**  
Test if an object can sleep.

**Is static**  
Test if an object is static.

**Joint first object**  
Test if an object is the first object on a joint.

**Joint reaction force**  
Test a joint reaction force.

**Joint reaction torque**  
Test a joint reaction torque.

**Joint second object**  
Test if an object is the second object on a joint.

**Layer enabled**  
Test if an object has a specific layer enabled.

**Linear damping**  
Test an object linear damping.

**Linear velocity**  
Test an object linear velocity length.

**Linear velocity X**  
Test an object linear velocity on X.

**Linear velocity Y**  
Test an object linear velocity on Y.

**Mask enabled**  
Test if an object has a specific mask enabled.

**Linear velocity angle**  
Compare the linear velocity angle of the object.

**Prismatic joint limits enabled**  
Test if a prismatic joint limits are enabled.

**Prismatic joint motor enabled**  
Test if a prismatic joint motor is enabled.

**Restitution**  
Test an object restitution.

**Revolute joint limits enabled**  
Test if a revolute joint limits are enabled.

**Revolute joint motor enabled**  
Test if a revolute joint motor is enabled.

**World time scale**  
Compare the world time scale.

**Wheel joint motor enabled**  
Test if a wheel joint motor is enabled.

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
| `Object.Physics2::Inertia()` | Return the rotational inertia of the object (in kilograms * meters * meters) ||
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

---
*This page is an auto-generated reference page about the **Physics Engine 2.0** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).