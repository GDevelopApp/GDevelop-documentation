---
title: Top-down movement
---
# Top-down movement

Allows to move objects in either 4 or 8 directions, with the keyboard or using events. [Read more explanations about it.](https://wiki.gdevelop.io/gdevelop5/behaviors/topdown)



## Top-down movement (4 or 8 directions) 

Move objects left, up, right, and down (and, optionally, diagonally). 

### Behavior actions

**Acceleration**  
Change the acceleration of the object

**Diagonal movement**  
Allow or restrict diagonal movemment

**Rotation offset**  
Change the rotation offset applied when moving the object

**Angular maximum speed**  
Change the maximum angular speed of the object

**Deceleration**  
Change the deceleration of the object

**Ignore default controls**  
De/activate the use of default controls.  
If deactivated, use the simulated actions to move the object.

**Maximum speed**  
Change the maximum speed of the object

**Rotate the object**  
Enable or disable rotation of the object

**Simulate control**  
Simulate a press of a key.  
Valid keys are Left, Right, Up, Down.

**Simulate down key press**  
Simulate a press of down key.

**Simulate left key press**  
Simulate a press of left key.

**Simulate right key press**  
Simulate a press of right key.

**Simulate stick control**  
Simulate a stick control.

**Simulate up key press**  
Simulate a press of up key.

**Movement angle offset**  
Change the movement angle offset.

**Speed on the X axis**  
Change the speed on the X axis of the movement

**Speed on the Y axis**  
Change the speed on the Y axis of the movement

### Behavior conditions

**Acceleration**  
Compare the acceleration of the object

**Rotation offset**  
Compare the rotation offset applied when moving the object

**Angular maximum speed**  
Compare the maximum angular speed of the object

**Deceleration**  
Compare the deceleration of the object

**Diagonal movement**  
Check if the object is allowed to move diagonally

**Is moving**  
Check if the object is moving.

**Maximum speed**  
Compare the maximum speed of the object

**Object rotated**  
Check if the object is rotated while traveling on its path.

**Speed**  
Compare the speed of the object

**Angle of movement**  
Compare the angle of the top-down movement of the object.

**Control pressed or simulated**  
A control was applied from a default control or simulated by an action.

**Movement angle offset**  
Compare the movement angle offset.

**Speed on X axis**  
Compare the velocity of the top-down movement of the object on the X axis.

**Speed on Y axis**  
Compare the velocity of the top-down movement of the object on the Y axis.

### Behavior expressions

^ Expression ^ Description ^  ^
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
*This page is an auto-generated reference page about the **Top-down movement** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).