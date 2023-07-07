# Ellipse movement

<img src="https://resources.gdevelop-app.com/assets/Icons/sine-wave.svg" class="extension-icon"></img>
Move objects on ellipses or smoothly back and forth in one direction.

**Authors and contributors** to this community extension: [4ian](https://gd.games/4ian), [VictrisGames](https://gd.games/VictrisGames), [D8H](https://gd.games/D8H).

---

It allows objects to move:

- on an ellipsis or arcs
- smoothly vertically or horizontally (by setting one radius to 0)
- on a sine wave (by adding a force)

It can be used for:

- Making objects float, such as powerups or coins
- Moving platforms
- Enemy movement patterns
- Making a player constantly turn right or left ([open the project online](https://editor.gdevelop.io/?project=example://star-seeker))

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Ellipse movement 

Move objects on ellipses or smoothly back and forth in one direction. 

### Behavior actions

**Loop duration**  
Change the loop duration.

**Teleport at an angle**  
Change the movement angle. The object is teleported according to the angle.

**CenterX property**  
Change the property value for the centerX.

**CenterY property**  
Change the property value for the centerY.

**Initial direction property**  
Change the property value for the initial direction.

**Turn left property**  
Update the property value for "turn left".

**Loop duration property**  
Change the property value for the loop duration.

**MovementAngle property**  
Change the property value for the movementAngle.

**OldX property**  
Change the property value for the oldX.

**OldY property**  
Change the property value for the oldY.

**Radius of the movement on X axis property**  
Change the property value for the radius of the movement on X axis.

**Radius of the movement on Y axis property**  
Change the property value for the radius of the movement on Y axis.

**Rotation offset property**  
Change the property value for the rotation offset.

**Rotate property**  
Update the property value for "rotate".

**Radius X**  
Change the radius on X axis of the movement.

**Radius Y**  
Change the radius on Y axis of the movement.

**Turn left or right**  
Change the in which side the object is turning (left or right).

**Toggle Turn left property**  
Toggle the property value for turn left.  
If it was true, it will become false, and if it was false it will become true.

**Toggle Rotate property**  
Toggle the property value for rotate.  
If it was true, it will become false, and if it was false it will become true.

**Turn the other way**  
Change the turning direction (left or right).

### Behavior conditions

**Is turning left**  
Check if the object is turning left.

**CenterX property**  
Compare the property value for the centerX.

**CenterY property**  
Compare the property value for the centerY.

**Initial direction property**  
Compare the property value for the initial direction.

**Turn left property**  
Check the property value for turn left.

**Loop duration property**  
Compare the property value for the loop duration.

**MovementAngle property**  
Compare the property value for the movementAngle.

**OldX property**  
Compare the property value for the oldX.

**OldY property**  
Compare the property value for the oldY.

**Radius of the movement on X axis property**  
Compare the property value for the radius of the movement on X axis.

**Radius of the movement on Y axis property**  
Compare the property value for the radius of the movement on Y axis.

**Rotation offset property**  
Compare the property value for the rotation offset.

**Rotate property**  
Check the property value for rotate.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.EllipseMovement::CenterX()` | Return the movement center position on X axis. ||
| `Object.EllipseMovement::CenterY()` | Return the movement center position on Y axis. ||
| `Object.EllipseMovement::DeltaX()` | Delta X ||
| `Object.EllipseMovement::DeltaY()` | Delta Y ||
| `Object.EllipseMovement::DirectionAngle()` | Direction angle ||
| `Object.EllipseMovement::LoopDuration()` | Return the loop duration (in seconds). ||
| `Object.EllipseMovement::MovementAngle()` | Return the movement angle of the object. ||
| `Object.EllipseMovement::PropertyCenterX()` | Return the property value for the centerX. ||
| `Object.EllipseMovement::PropertyCenterY()` | Return the property value for the centerY. ||
| `Object.EllipseMovement::PropertyInitialDirectionAngle()` | Return the property value for the initial direction. ||
| `Object.EllipseMovement::PropertyLoopDuration()` | Return the property value for the loop duration. ||
| `Object.EllipseMovement::PropertyMovementAngle()` | Return the property value for the movementAngle. ||
| `Object.EllipseMovement::PropertyOldX()` | Return the property value for the oldX. ||
| `Object.EllipseMovement::PropertyOldY()` | Return the property value for the oldY. ||
| `Object.EllipseMovement::PropertyRadiusX()` | Return the property value for the radius of the movement on X axis. ||
| `Object.EllipseMovement::PropertyRadiusY()` | Return the property value for the radius of the movement on Y axis. ||
| `Object.EllipseMovement::PropertyRotationOffset()` | Return the property value for the rotation offset. ||
| `Object.EllipseMovement::RadiusX()` | Return the ellipse radius on X axis. ||
| `Object.EllipseMovement::RadiusY()` | Return the ellipse radius on X axis. ||

---

*This page is an auto-generated reference page about the **Ellipse movement** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).