# Curved movement

<img src="https://resources.gdevelop-app.com/assets/Icons/Line Hero Pack/Master/SVG/Graphic Design/Graphic Design_bezier_curve.svg" class="extension-icon"></img>
Move objects on curved paths.

**Authors and contributors** to this community extension: [pampogokiraly](https://gd.games/pampogokiraly), [D8H](https://gd.games/D8H).

---

This extension allows to move objects on Bézier curve paths.

- Paths can be built dynamically or from predetermined paths in SVG format.
- A behavior moves objects in a given duration a bit like the Tween extension does.
- Another behavior moves objects using a speed and an acceleration.
- Expressions give access to the path trajectory values for more complex movements.

This extension can be used to:

- Move enemies that follow a pattern
- Animate decorations

A collection of [small examples](https://editor.gdevelop.io/?project=example://curved-movement) shows how to use this extension.

2 examples use it:

- a 3D racing game ([open the project online](https://editor.gdevelop.io/?project=example://3d-racing-game))
- a Zuma-like ([open the project online](https://editor.gdevelop.io/?project=example://smoothy))

[Read more...](/gdevelop5/extensions/curved-movement/details/)

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

**Duplicate a path**  
Duplicate a path.

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
| `CurvedMovement::ElementCount(string)` | Return the number of lines or curves that make the path. ||
| | _🔤 Name (String)_ | Path name |
| `CurvedMovement::FirstControlX(string, number)` | Return the first control point position on X axis of a curve. ||
| | _🔤 Name (String)_ | Path name |
| | _🔢 Number_ | Curve index |
| `CurvedMovement::FirstControlY(string, number)` | Return the first control point position on Y axis of a curve. ||
| | _🔤 Name (String)_ | Path name |
| | _🔢 Number_ | Curve index |
| `CurvedMovement::OriginX(string, number)` | Return the origin position on X axis of a curve. ||
| | _🔤 Name (String)_ | Path name |
| | _🔢 Number_ | Curve index |
| `CurvedMovement::OriginY(string, number)` | Return the origin position on Y axis of a curve. ||
| | _🔤 Name (String)_ | Path name |
| | _🔢 Number_ | Curve index |
| `CurvedMovement::PathAngle(string, number)` | Return the direction angle of the path for a given length (in degree). ||
| | _🔤 Name (String)_ | Path name |
| | _🔢 Number_ | Length on the path |
| `CurvedMovement::PathEndX(string)` | Return the displacement on X axis of the path end. ||
| | _🔤 Name (String)_ | Path name |
| `CurvedMovement::PathEndY(string)` | Return the displacement on Y axis of the path end. ||
| | _🔤 Name (String)_ | Path name |
| `CurvedMovement::PathLength(string)` | Return the length of the path. ||
| | _🔤 Name (String)_ | Path name |
| `CurvedMovement::PathX(string, number)` | Return the position on X axis of the path for a given length. ||
| | _🔤 Name (String)_ | Path name |
| | _🔢 Number_ | Length on the path |
| `CurvedMovement::PathY(string, number)` | Return the position on Y axis of the path for a given length. ||
| | _🔤 Name (String)_ | Path name |
| | _🔢 Number_ | Length on the path |
| `CurvedMovement::SecondControlX(string, number)` | Return the second control point position on X axis of a curve. ||
| | _🔤 Name (String)_ | Path name |
| | _🔢 Number_ | Curve index |
| `CurvedMovement::SecondControlY(string, number)` | Return the second control point position on Y axis of a curve. ||
| | _🔤 Name (String)_ | Path name |
| | _🔢 Number_ | Curve index |
| `CurvedMovement::SpeedScaleY(string)` | Return the speed scale on Y axis. This is used to change the view point of a path (top-dwon or isometry). ||
| | _🔤 Name (String)_ | Path name |
| `CurvedMovement::TargetX(string, number)` | Return the target position on X axis of a curve. ||
| | _🔤 Name (String)_ | Path name |
| | _🔢 Number_ | Curve index |
| `CurvedMovement::TargetY(string, number)` | Return the target position on Y axis of a curve. ||
| | _🔤 Name (String)_ | Path name |
| | _🔢 Number_ | Curve index |
| `CurvedMovement::ToSvg(string)` | Return the SVG commands of a path. ||
| | _🔤 Name (String)_ | Path name |

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
Change the length between the trajectory origin and the current position counting the loops.

**Speed**  
Change the speed of the object.

### Behavior conditions

**Can move further**  
Check if the object can still move in the current direction.

**Reach an end**  
Check if the object has reached one of the 2 ends of the path.

**Reached path origin**  
Check if the object has reached the origin position of the path.

**Reached path target**  
Check if the object has reached the target position of the path.

**Current loop**  
Compare the number time the object loop the trajectory.

**Position on the loop**  
Compare the length between the trajectory origin and the current position without counting the loops.

**Position on the path**  
Compare the length between the trajectory origin and the current position counting the loops.

**Speed**  
Compare the speed of the object.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.SpeedPathMovement::Loop()` | Return the number time the object loop the trajectory. ||
| `Object.SpeedPathMovement::MovementAngle()` | Return the angle of movement on its path. ||
| `Object.SpeedPathMovement::PathOriginX()` | Return the path origin on X axis of the object. ||
| `Object.SpeedPathMovement::PathOriginY()` | Return the path origin on Y axis of the object. ||
| `Object.SpeedPathMovement::PositionOnLoop()` | Return the length between the trajectory origin and the current position without counting the loops. ||
| `Object.SpeedPathMovement::PositionOnPath()` | Return the length between the trajectory origin and the current position counting the loops. ||
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