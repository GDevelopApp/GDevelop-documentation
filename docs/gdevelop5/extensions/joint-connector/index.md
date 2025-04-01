# Joint connector

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/8834e0c63a962c74f1dab4c8f918c171261597341c4ca6574b300ab35855274b_human.svg" class="extension-icon"></img>
Create and manage physics joints between two objects.

**Authors and contributors** to this community extension: [D8H](https://gd.games/D8H), [VictrisGames](https://gd.games/VictrisGames), [planktonfun](https://gd.games/planktonfun).

!!! warning
    This is an extension made by a community member — but not reviewed
    by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of official extensions. In case of
    doubt, contact the author to know more about what the extension
    does or inspect its content before using it.

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

_No expressions for this behavior._


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

### Behavior conditions

**Motor enabled (or disabled) on joint**  
Check if motor enabled (or disabled) on joint.

_No expressions for this behavior._


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

### Behavior conditions

**Breaking force**  
Compare the force required to break joint apart.

**Damping ratio**  
Compare the damping ratio of the object. Set a number between 0 and 1.

**Frequency**  
Compare the frequency of the object. Set a number between 0 and 60. Higher numbers represent a stiffer spring.

**Max distance between objects**  
Compare the max distance between objects.

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

### Behavior actions

**Break weld joint if it exceeds breaking force**  
Break weld joint if it exceeds breaking force.

**Set the breaking force of a joint**  
Set the breaking force of a joint.

**Set frequency of joint**  
Set frequency of joint.  Range: 0 to 60 (or the maximum FPS of game).

_No expressions for this behavior._


---

*This page is an auto-generated reference page about the **Joint connector** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).