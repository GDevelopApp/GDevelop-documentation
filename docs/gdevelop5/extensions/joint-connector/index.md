# Joint Connector

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/8834e0c63a962c74f1dab4c8f918c171261597341c4ca6574b300ab35855274b_human.svg" class="extension-icon"></img>
Create and manage physics joints between two objects.

**Authors and contributors** to this community extension: [D8H](https://gd.games/D8H), [VictrisGames](https://gd.games/VictrisGames), [planktonfun](https://gd.games/planktonfun).

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

**Connect overlapping objects with a revolute joint**  
Connect overlapping physics objects with a revolute joint.

**Connect objects with a rope joint**  
Connect physics objects with a rope joint if the joint connector covers the center point of both objects.

**Connect overlapping objects with a weld joint**  
Connect overlapping physics objects with a weld joint.



## Distance joint connector 

Create and manage distance joints between two objects. 
Acts like a spring because the objects try to stay the same distance apart. 

### Behavior actions

**Break distance joint if it exceeds breaking force**  
Break distance joint if it exceeds breaking force.

**Set the breaking force of a joint**  
Set the breaking force of a joint.

**Set damping ratio of joint**  
Set dampting ratio of joint.  Range: 0 to 1.

**Set frequency of joint**  
Set frequency of joint.  Range: 0 to 60 (or the maximum FPS of game).

**Breaking force property**  
Change the property value for the breaking force.

**Damping ratio property**  
Change the property value for the damping ratio.

**Distance between objects property**  
Change the property value for the distance between objects.

**Frequency property**  
Change the property value for the frequency.

### Behavior conditions

**Breaking force property**  
Compare the property value for the breaking force.

**Damping ratio property**  
Compare the property value for the damping ratio.

**Distance between objects property**  
Compare the property value for the distance between objects.

**Frequency property**  
Compare the property value for the frequency.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.DistanceJoint::PropertyBreakingForce()` | Return the property value for the breaking force. ||
| `Object.DistanceJoint::PropertyDampingRatio()` | Return the property value for the damping ratio. ||
| `Object.DistanceJoint::PropertyDistance()` | Return the property value for the distance between objects. ||
| `Object.DistanceJoint::PropertyFrequency()` | Return the property value for the frequency. ||

## Revolute joint connector 

Create and manage revolute joints between two objects.
Also known as a hinge joint because the objects act like they are connected with a hinge that pivots. 

### Behavior actions

**Break revolute joint if it exceeds breaking force**  
Break revolute joint if it exceeds breaking force.

**Set the breaking force of a joint**  
Set the breaking force of a joint.

**Set clockwise angle limit of joint**  
Set clockwise angle limit of joint.

**Set counter-clockwise angle limit of joint**  
Set counter-clockwise angle limit of joint.

**Enable (or disable) angle limits on joint**  
Enable (or disable) angle limits on joint.

**Enable (or disable) motor of joint**  
Enable (or disable) motor of joint.

**Motor enabled (or disabled) on joint**  
Change if motor enabled (or disabled) on joint.

**Set motor rotation speed of joint**  
Set motor rotation speed of joint.

**Set motor strength of joint**  
Set motor strength (torque) of joint.

**Enable (or disable) angle limits on joint property**  
Update the property value for "enable (or disable) angle limits on joint".

**Breaking force property**  
Change the property value for the breaking force.

**Angle movement allowed in clockwise direction (degrees) property**  
Change the property value for the angle movement allowed in clockwise direction (degrees).

**Angle movement allowed in counter-clockwise direction (degrees) property**  
Change the property value for the angle movement allowed in counter-clockwise direction (degrees).

**JointID property**  
Change the property value for the jointID.

**Motor enabled (or disabled) on joint property**  
Update the property value for "motor enabled (or disabled) on joint".

**Motor rotation speed of joint property**  
Change the property value for the motor rotation speed of joint.

**Motor strength (torque) of joint property**  
Change the property value for the motor strength (torque) of joint.

**Toggle Enable (or disable) angle limits on joint property**  
Toggle the property value for enable (or disable) angle limits on joint.  
If it was true, it will become false, and if it was false it will become true.

**Toggle Motor enabled (or disabled) on joint property**  
Toggle the property value for motor enabled (or disabled) on joint.  
If it was true, it will become false, and if it was false it will become true.

### Behavior conditions

**Motor enabled (or disabled) on joint**  
Check if motor enabled (or disabled) on joint.

**Enable (or disable) angle limits on joint property**  
Check the property value for enable (or disable) angle limits on joint.

**Breaking force property**  
Compare the property value for the breaking force.

**Angle movement allowed in clockwise direction (degrees) property**  
Compare the property value for the angle movement allowed in clockwise direction (degrees).

**Angle movement allowed in counter-clockwise direction (degrees) property**  
Compare the property value for the angle movement allowed in counter-clockwise direction (degrees).

**JointID property**  
Compare the property value for the jointID.

**Motor enabled (or disabled) on joint property**  
Check the property value for motor enabled (or disabled) on joint.

**Motor rotation speed of joint property**  
Compare the property value for the motor rotation speed of joint.

**Motor strength (torque) of joint property**  
Compare the property value for the motor strength (torque) of joint.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.RevoluteJoint::PropertyBreakingForce()` | Return the property value for the breaking force. ||
| `Object.RevoluteJoint::PropertyClockwiseAngleLimit()` | Return the property value for the angle movement allowed in clockwise direction (degrees). ||
| `Object.RevoluteJoint::PropertyCounterClockwiseAngleLimit()` | Return the property value for the angle movement allowed in counter-clockwise direction (degrees). ||
| `Object.RevoluteJoint::PropertyJointID()` | Return the property value for the jointID. ||
| `Object.RevoluteJoint::PropertyMotorSpeed()` | Return the property value for the motor rotation speed of joint. ||
| `Object.RevoluteJoint::PropertyMotorTorque()` | Return the property value for the motor strength (torque) of joint. ||

## Rope joint connector 

Create and manage rope joints between two objects. 
Objects can get closer, but they cannot exceed the starting distance from each other.
 

### Behavior actions

**Break rope joint if it exceeds breaking force**  
Break rope joint if it exceeds breaking force.

**Breaking force**  
Change the force required to break joint apart.

**Damping ratio**  
Change the damping ratio of the object. Set a number between 0 and 1.

**Frequency**  
Change the frequency of the object. Set a number between 0 and 60. Higher numbers represent a stiffer spring.

**Max distance between objects**  
Change the max distance between objects.

**Breaking force property**  
Change the property value for the breaking force.

**Damping ratio property**  
Change the property value for the damping ratio.

**Frequency property**  
Change the property value for the frequency.

**Max distance between objects property**  
Change the property value for the max distance between objects.

### Behavior conditions

**Breaking force**  
Compare the force required to break joint apart.

**Damping ratio**  
Compare the damping ratio of the object. Set a number between 0 and 1.

**Frequency**  
Compare the frequency of the object. Set a number between 0 and 60. Higher numbers represent a stiffer spring.

**Max distance between objects**  
Compare the max distance between objects.

**Breaking force property**  
Compare the property value for the breaking force.

**Damping ratio property**  
Compare the property value for the damping ratio.

**Frequency property**  
Compare the property value for the frequency.

**Max distance between objects property**  
Compare the property value for the max distance between objects.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.RopeJoint::BreakingForce()` | Return the force required to break joint apart. ||
| `Object.RopeJoint::DampingRatio()` | Return the damping ratio of the object. Set a number between 0 and 1. ||
| `Object.RopeJoint::Frequency()` | Return the frequency of the object. Set a number between 0 and 60. Higher numbers represent a stiffer spring. ||
| `Object.RopeJoint::MaxDistance()` | Return the max distance between objects. ||
| `Object.RopeJoint::PropertyBreakingForce()` | Return the property value for the breaking force. ||
| `Object.RopeJoint::PropertyDampingRatio()` | Return the property value for the damping ratio. ||
| `Object.RopeJoint::PropertyFrequency()` | Return the property value for the frequency. ||
| `Object.RopeJoint::PropertyMaxDistance()` | Return the property value for the max distance between objects. ||

## Weld joint connector 

Create and manage weld joints between two objects.
Also known as a static joint because the objects stay glued in the same relative position to each other. 

### Behavior actions

**Break weld joint if it exceeds breaking force**  
Break weld joint if it exceeds breaking force.

**Set the breaking force of a joint**  
Set the breaking force of a joint.

**Set frequency of joint**  
Set frequency of joint.  Range: 0 to 60 (or the maximum FPS of game).

**Breaking force property**  
Change the property value for the breaking force.

**Damping ratio property**  
Change the property value for the damping ratio.

**Frequency property**  
Change the property value for the frequency.

### Behavior conditions

**Breaking force property**  
Compare the property value for the breaking force.

**Damping ratio property**  
Compare the property value for the damping ratio.

**Frequency property**  
Compare the property value for the frequency.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.WeldJoint::PropertyBreakingForce()` | Return the property value for the breaking force. ||
| `Object.WeldJoint::PropertyDampingRatio()` | Return the property value for the damping ratio. ||
| `Object.WeldJoint::PropertyFrequency()` | Return the property value for the frequency. ||

---

*This page is an auto-generated reference page about the **Joint Connector** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).