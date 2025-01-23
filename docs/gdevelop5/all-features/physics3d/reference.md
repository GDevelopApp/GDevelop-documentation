# 3D physics engine Reference

The physics engine simulates realistic object physics, with gravity, forces, joints, etc. It's perfect for games that need to have realistic behaving objects and a gameplay centered around it. [Read more explanations about it.](/gdevelop5/behaviors/physics3d)

## Conditions

**Collision**  
Check if two objects collide.

**Collision started**  
Check if two objects just started colliding during this frame.

**Collision stopped**  
Check if two objects just stopped colliding at this frame.

**Character is on given platform**  
Check if a 3D physics character is on a given platform.



## 3D physics engine 

Simulate realistic object physics with gravity, forces, etc. 

### Behavior actions

**Apply angular impulse (rotational impulse)**  
Apply an angular impulse (also called a "rotational impulse") to the object. It instantly changes the rotation speed, to give an initial speed for instance.

**Apply force (at a point)**  
Apply a force to the object over time. It "accelerates" an object and must be used every frame during a time period.

**Apply force (at center)**  
Apply a force to the object over time. It "accelerates" an object and must be used every frame during a time period.

**Apply force toward position**  
Apply a force to the object over time to move it toward a position. It "accelerates" an object and must be used every frame during a time period.

**Apply impulse (at a point)**  
Apply an impulse to the object. It instantly changes the speed, to give an initial speed for instance.

**Apply impulse (at center)**  
Apply an impulse to the object. It instantly changes the speed, to give an initial speed for instance.

**Apply impulse toward position**  
Apply an impulse to the object to move it toward a position. It instantly changes the speed, to give an initial speed for instance.

**Apply torque (rotational force)**  
Apply a torque (also called "rotational force") to the object. It "accelerates" an object rotation and must be used every frame during a time period.

**Enable layer**  
Enable or disable a layer for an object. Two objects collide if any layer of the first object matches any mask of the second one and vice versa.

**Enable mask**  
Enable or disable a mask for an object. Two objects collide if any layer of the first object matches any mask of the second one and vice versa.

**Angular damping**  
Change the object angular damping. How much angular speed is lost across the time..

**Angular velocity X**  
Change the object angular velocity around X..

**Angular velocity Y**  
Change the object angular velocity around Y..

**Angular velocity Z**  
Change the object angular velocity around Z..

**Treat as bullet**  
Treat the object as a bullet. Better collision handling on high speeds at cost of some performance.

**Density**  
Change the object density. The body's density and volume determine its mass..

**Fixed rotation**  
Enable or disable an object fixed rotation. If enabled the object won't be able to rotate.

**Friction**  
Change the object friction. How much energy is lost from the movement of one object over another. The combined friction from two bodies is calculated as 'sqrt(bodyA.friction * bodyB.friction)'..

**Gravity scale**  
Change the object gravity scale. The gravity applied to an object is the world gravity multiplied by the object gravity scale..

**World gravity on X axis**  
Change the world gravity on X axis While an object is needed, this will apply to all objects using the behavior..

**World gravity on Y axis**  
Change the world gravity on Y axis While an object is needed, this will apply to all objects using the behavior..

**World gravity on Z axis**  
Change the world gravity on Z axis While an object is needed, this will apply to all objects using the behavior..

**Linear damping**  
Change the object linear damping. How much movement speed is lost across the time..

**Linear velocity X**  
Change the object linear velocity on X..

**Linear velocity Y**  
Change the object linear velocity on Y..

**Linear velocity Z**  
Change the object linear velocity on Z..

**Restitution**  
Change the object restitution. Energy conservation on collision. The combined restitution from two bodies is calculated as 'max(bodyA.restitution, bodyB.restitution)'..

**Shape scale**  
Modify an object shape scale. It affects custom shape dimensions, if custom dimensions are not set the body will be scaled automatically to the object size.

### Behavior conditions

**Angular damping**  
Compare the object angular damping. How much angular speed is lost across the time..

**Angular velocity X**  
Compare the object angular velocity around X..

**Angular velocity Y**  
Compare the object angular velocity around Y..

**Angular velocity Z**  
Compare the object angular velocity around Z..

**Density**  
Compare the object density. The body's density and volume determine its mass..

**Friction**  
Compare the object friction. How much energy is lost from the movement of one object over another. The combined friction from two bodies is calculated as 'sqrt(bodyA.friction * bodyB.friction)'..

**Gravity scale**  
Compare the object gravity scale. The gravity applied to an object is the world gravity multiplied by the object gravity scale..

**World gravity on X axis**  
Compare the world gravity on X axis While an object is needed, this will apply to all objects using the behavior..

**World gravity on Y axis**  
Compare the world gravity on Y axis While an object is needed, this will apply to all objects using the behavior..

**World gravity on Z axis**  
Compare the world gravity on Z axis While an object is needed, this will apply to all objects using the behavior..

**Has fixed rotation**  
Check if an object has fixed rotation.

**Is treated as a bullet**  
Check if the object is being treated as a bullet.

**Is dynamic**  
Check if an object is dynamic.

**Is kinematic**  
Check if an object is kinematic.

**Is static**  
Check if an object is static.

**Layer enabled**  
Check if an object has a specific layer enabled.

**Linear damping**  
Compare the object linear damping. How much movement speed is lost across the time..

**Linear velocity**  
Compare the object linear velocity length..

**Linear velocity X**  
Compare the object linear velocity on X..

**Linear velocity Y**  
Compare the object linear velocity on Y..

**Linear velocity Z**  
Compare the object linear velocity on Z..

**Mask enabled**  
Check if an object has a specific mask enabled.

**Restitution**  
Compare the object restitution. Energy conservation on collision. The combined restitution from two bodies is calculated as 'max(bodyA.restitution, bodyB.restitution)'..

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.Physics3D::AngularDamping()` | Return the object angular damping. How much angular speed is lost across the time.. ||
| `Object.Physics3D::AngularVelocityX()` | Return the object angular velocity around X.. ||
| `Object.Physics3D::AngularVelocityY()` | Return the object angular velocity around Y.. ||
| `Object.Physics3D::AngularVelocityZ()` | Return the object angular velocity around Z.. ||
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
| `Object.Physics3D::LinearVelocityLength()` | Return the object linear velocity length.. ||
| `Object.Physics3D::LinearVelocityX()` | Return the object linear velocity on X.. ||
| `Object.Physics3D::LinearVelocityY()` | Return the object linear velocity on Y.. ||
| `Object.Physics3D::LinearVelocityZ()` | Return the object linear velocity on Z.. ||
| `Object.Physics3D::Mass()` | Return the mass of the object (in kilograms) ||
| `Object.Physics3D::MassCenterX()` | Mass center X ||
| `Object.Physics3D::MassCenterY()` | Mass center Y ||
| `Object.Physics3D::Restitution()` | Return the object restitution. Energy conservation on collision. The combined restitution from two bodies is calculated as 'max(bodyA.restitution, bodyB.restitution)'.. ||
| `Object.Physics3D::WorldScale()` | Return the world scale. ||

## 3D physics character 

Jump and run on platforms. 

### Behavior actions

**Abort jump**  
Abort the current jump and stop the object vertically. This action doesn't have any effect when the character is not jumping.

**Maximum falling speed**  
Change the maximum falling speed of an object.

**Allow jumping again**  
When this action is executed, the object is able to jump again, even if it is in the air: this can be useful to allow a double jump for example. This is not a permanent effect: you must call again this action every time you want to allow the object to jump (apart if it's on the floor).

**Forbid jumping again in the air**  
This revokes the effect of "Allow jumping again". The object is made unable to jump while in mid air. This has no effect if the object is not in the air.

**Current falling speed**  
Change Compare the current falling speed of the object. Its value is always positive..

**Current forward speed**  
Change the current forward speed of the object. The object moves backward with negative values and forward with positive ones.

**Current jump speed**  
Change Compare the current jump speed of the object. Its value is always positive..

**Current sideways speed**  
Change the current sideways speed of the object. The object moves to the left with negative values and to the right with positive ones.

**Forward acceleration**  
Change the forward acceleration of an object..

**Forward angle**  
Change the angle used by the character to go forward.

**Forward deceleration**  
Change the forward deceleration of an object..

**Forward max speed**  
Change the forward max speed of the object..

**Gravity**  
Change the gravity applied on an object..

**Jump speed**  
Change the jump speed of an object. Its value is always positive..

**Jump sustain time**  
Change the jump sustain time of an object. This is the time during which keeping the jump button held allow the initial jump speed to be maintained..

**Should bind object and forward angle**  
Enable or disable keeping the object angle and forward angle the same.

**Sideways acceleration**  
Change the sideways acceleration of an object..

**Sideways deceleration**  
Change the sideways deceleration of an object..

**Sideways max speed**  
Change the sideways max speed of the object..

**Simulate move backward key press**  
Simulate a press of the move backward key.

**Simulate move forward key press**  
Simulate a press of the move forward key.

**Simulate jump key press**  
Simulate a press of the jump key.

**Simulate move left key press**  
Simulate a press of the move left key.

**Simulate move right key press**  
Simulate a press of the move right key.

**Simulate stick control**  
Simulate a stick control.

### Behavior conditions

**Can jump**  
Check if the object can jump.

**Current falling speed**  
Compare Compare the current falling speed of the object. Its value is always positive..

**Current forward speed**  
Compare the current forward speed of the object. The object moves backward with negative values and forward with positive ones.

**Current jump speed**  
Compare Compare the current jump speed of the object. Its value is always positive..

**Current sideways speed**  
Compare the current sideways speed of the object. The object moves to the left with negative values and to the right with positive ones.

**Maximum falling speed**  
Compare the maximum falling speed of an object..

**Forward acceleration**  
Compare the forward acceleration of an object..

**Forward deceleration**  
Compare the forward deceleration of an object..

**Forward max speed**  
Compare the forward max speed of the object..

**Gravity**  
Compare the gravity applied on an object..

**Is falling**  
Check if the object is falling.  
Note that the object can be flagged as jumping and falling at the same time: at the end of a jump, the fall speed becomes higher than the jump speed.

**Forward angle**  
Compare the angle used by the character to go forward.

**Is jumping**  
Check if the object is jumping.

**Is moving**  
Check if the object is moving (whether it is on the floor or in the air).

**Is on floor**  
Check if the object is on a platform.

**Jump speed**  
Compare the jump speed of an object. Its value is always positive..

**Jump sustain time**  
Compare the jump sustain time of an object. This is the time during which keeping the jump button held allow the initial jump speed to be maintained..

**Should bind object and forward angle**  
Check if the object angle and forward angle should be kept the same.

**Sideways acceleration**  
Compare the sideways acceleration of an object..

**Sideways deceleration**  
Compare the sideways deceleration of an object..

**Sideways max speed**  
Compare the sideways max speed of the object..

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.PhysicsCharacter3D::CurrentFallSpeed()` | Return Compare the current falling speed of the object. Its value is always positive.. ||
| `Object.PhysicsCharacter3D::CurrentForwardSpeed()` | Return the current forward speed of the object. The object moves backward with negative values and forward with positive ones. ||
| `Object.PhysicsCharacter3D::CurrentJumpSpeed()` | Return Compare the current jump speed of the object. Its value is always positive.. ||
| `Object.PhysicsCharacter3D::CurrentSidewaysSpeed()` | Return the current sideways speed of the object. The object moves to the left with negative values and to the right with positive ones. ||
| `Object.PhysicsCharacter3D::FallingSpeedMax()` | Return the maximum falling speed of an object.. ||
| `Object.PhysicsCharacter3D::ForwardAcceleration()` | Return the forward acceleration of an object.. ||
| `Object.PhysicsCharacter3D::ForwardAngle()` | Return the angle used by the character to go forward. ||
| `Object.PhysicsCharacter3D::ForwardDeceleration()` | Return the forward deceleration of an object.. ||
| `Object.PhysicsCharacter3D::ForwardSpeedMax()` | Return the forward max speed of the object.. ||
| `Object.PhysicsCharacter3D::Gravity()` | Return the gravity applied on an object.. ||
| `Object.PhysicsCharacter3D::JumpSpeed()` | Return the jump speed of an object. Its value is always positive.. ||
| `Object.PhysicsCharacter3D::JumpSustainTime()` | Return the jump sustain time of an object. This is the time during which keeping the jump button held allow the initial jump speed to be maintained.. ||
| `Object.PhysicsCharacter3D::SidewaysAcceleration()` | Return the sideways acceleration of an object.. ||
| `Object.PhysicsCharacter3D::SidewaysDeceleration()` | Return the sideways deceleration of an object.. ||
| `Object.PhysicsCharacter3D::SidewaysSpeedMax()` | Return the sideways max speed of the object.. ||

---
*This page is an auto-generated reference page about the **3D physics engine** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).