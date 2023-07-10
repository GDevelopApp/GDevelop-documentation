# Curved movement

<img src="https://resources.gdevelop-app.com/assets/Icons/Line Hero Pack/Master/SVG/Graphic Design/Graphic Design_bezier_curve.svg" class="extension-icon"></img>
Move objects on curved paths.

**Authors and contributors** to this community extension: [pampogokiraly](https://gd.games/pampogokiraly), [D8H](https://gd.games/D8H).

!!! warning
    This is an extension made by a community member — but not reviewed
    by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of official extensions. In case of
    doubt, contact the author to know more about what the extension
    does or inspect its content before using it.

---

This extension allows to move objects on Bézier curve paths.

- Paths can be built dynamically or from predetermined paths in SVG format.
- A behavior moves objects in a given duration a bit like the Tween extension does.
- Another behavior moves objects using a speed and an acceleration.
- Expressions give access to the path trajectory values for more complex movements.

This extension can be used to:

- Move enemies that follow a pattern
- Animate decorations

A collection of [small examples](https://editor.gdevelop.io/?project=example://curved-movement) show how to use this extension.

[Read more...](https://wiki.gdevelop.io/gdevelop5/extensions/curved-movement/details/)

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Append a curve**  
Append a cubic Bezier curve at the end of the path.

**Append a line**  
Append a line at the end of the path.

**Append a smooth curve**  
Append a cubic Bezier curve to the end of an object's path. The first control point is symmetrical to the last control point of the path.

**Append a path**  
Append a path to another path.

**Append a rotated path**  
Append a path to another path. The appended path is rotated to have a smooth junction.

**Close a path**  
Append a line to close the path.

**Create a path from SVG**  
Create a path from SVG commands, for instance "M 0,0 C 55,0 100,45 100,100". Commands are: M = Move, C = Curve, S = Smooth, L = Line. Lower case is for relative positions. The preferred way to build the commands is to use an external SVG editor like Inkscape.

**Delete a path**  
Delete a path from the memory.

**Invert a path**  
Invert a path, the end becomes the beginning.

**Rotate a path**  
Rotate a path.

**Scale a path**  
Scale a path.

**Speed scale Y**  
Change the speed scale on Y axis. This allows to change the view point of a path (top-dwon or isometry).

## Conditions

**Is  closed**  
Check if a path is closed.

**Path exists**  
Path exists.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `CurvedMovement::ElementCount(identifier)` | Return the number of lines or curves that make the path. ||
| | _identifier_ | Path name |
| `CurvedMovement::FirstControlX(identifier, number)` | Return the first control point position on X axis of a curve. ||
| | _identifier_ | Path name |
| | _number_ | Curve index |
| `CurvedMovement::FirstControlY(identifier, number)` | Return the first control point position on Y axis of a curve. ||
| | _identifier_ | Path name |
| | _number_ | Curve index |
| `CurvedMovement::OriginX(identifier, number)` | Return the origin position on X axis of a curve. ||
| | _identifier_ | Path name |
| | _number_ | Curve index |
| `CurvedMovement::OriginY(identifier, number)` | Return the origin position on Y axis of a curve. ||
| | _identifier_ | Path name |
| | _number_ | Curve index |
| `CurvedMovement::PathAngle(identifier, number)` | Return the direction angle of the path for a given length (in degree). ||
| | _identifier_ | Path name |
| | _number_ | Length on the path |
| `CurvedMovement::PathEndX(identifier)` | Return the displacement on X axis of the path end. ||
| | _identifier_ | Path name |
| `CurvedMovement::PathEndY(identifier)` | Return the displacement on Y axis of the path end. ||
| | _identifier_ | Path name |
| `CurvedMovement::PathLength(identifier)` | Return the length of the path. ||
| | _identifier_ | Path name |
| `CurvedMovement::PathX(identifier, number)` | Return the position on X axis of the path for a given length. ||
| | _identifier_ | Path name |
| | _number_ | Length on the path |
| `CurvedMovement::PathY(identifier, number)` | Return the position on Y axis of the path for a given length. ||
| | _identifier_ | Path name |
| | _number_ | Length on the path |
| `CurvedMovement::SecondControlX(identifier, number)` | Return the second control point position on X axis of a curve. ||
| | _identifier_ | Path name |
| | _number_ | Curve index |
| `CurvedMovement::SecondControlY(identifier, number)` | Return the second control point position on Y axis of a curve. ||
| | _identifier_ | Path name |
| | _number_ | Curve index |
| `CurvedMovement::SpeedScaleY(identifier)` | Return the speed scale on Y axis. This is used to change the view point of a path (top-dwon or isometry). ||
| | _identifier_ | Path name |
| `CurvedMovement::TargetX(identifier, number)` | Return the target position on X axis of a curve. ||
| | _identifier_ | Path name |
| | _number_ | Curve index |
| `CurvedMovement::TargetY(identifier, number)` | Return the target position on Y axis of a curve. ||
| | _identifier_ | Path name |
| | _number_ | Curve index |
| `CurvedMovement::ToSvg(identifier)` | Return the SVG commands of a path. ||
| | _identifier_ | Path name |

## Movement on a curve (speed-based) 

Move objects on curved paths at a given speed. 

### Behavior actions

**Accelerate**  
Make an object accelerate until it reaches a given speed.

**Accelerate during**  
Make an object accelerate to reaches a speed in a given amount of time.

**Draw the trajectory**  
Draw the object trajectory.

**Follow a path**  
Change the path followed by an object.

**Follow a path to a position**  
Change the path followed by an object to reach a position.

**Position on the path**  
Change the length between the trajectory origin and the current position.

**Speed**  
Change the speed of the object.

### Behavior conditions

**Can move further**  
Check if the object can still move in the current direction.

**Current length**  
Check if the length from the trajectory origin is lesser than a value.

**Reach an end**  
Check if the object has reached one of the 2 ends of the path.

**Reached path origin**  
Check if the object has reached the origin position of the path.

**Reached path target**  
Check if the object has reached the target position of the path.

**Position on the path**  
Compare the length between the trajectory origin and the current position.

**Speed**  
Compare the speed of the object.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.SpeedPathMovement::MovementAngle()` | Return the angle of movement on its path. ||
| `Object.SpeedPathMovement::PositionOnPath()` | Return the length between the trajectory origin and the current position. ||
| `Object.SpeedPathMovement::Speed()` | Return the speed of the object. ||

## Movement on a curve (duration-based) 

Move objects on curved paths in a given duration and tween easing function. 

### Behavior actions

**Draw the trajectory**  
Draw the object trajectory.

**Move on path**  
Move the object by following a path.

**Move back and forth**  
Move the object by following a path and go back.

**Move on path to a position**  
Move the object to a position by following a path.

**Move back and forth to a position**  
Move the object to a position by following a path and go back.

### Behavior conditions

**Finished to move**  
Check if the object has finished to move on the path.

**Reached an end**  
Check if the object has reached one of the 2 ends of the path.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.TweenPathMovement::MovementAngle()` | Return the angle of movement on its path. ||

---

*This page is an auto-generated reference page about the **Curved movement** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).