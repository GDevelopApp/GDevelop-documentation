# Curved movement

<img src="https://resources.gdevelop-app.com/assets/Icons/Line Hero Pack/Master/SVG/Graphic Design/Graphic Design_bezier_curve.svg" class="extension-icon"></img>
Move objects on curved paths.

**Authors and contributors** to this experimental extension: [pampogokiraly](https://gd.games/pampogokiraly), [D8H](https://gd.games/D8H).

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

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Path name
    - Parameter 2 (🔢 Number): First control point X
    - Parameter 3 (🔢 Number): First control point Y
    - Parameter 4 (🔢 Number): Second Control point X
    - Parameter 5 (🔢 Number): Second Control point Y
    - Parameter 6 (🔢 Number): Destination point X
    - Parameter 7 (🔢 Number): Destination point Y
    - Parameter 8 (❓ Yes or No): Relative

    > Technical note: parameters 0, 9 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `CurvedMovement::AddCubicCurve`.

**Append a line**  
Append a line at the end of the path.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Path name
    - Parameter 2 (🔢 Number): Destination point X
    - Parameter 3 (🔢 Number): Destination point Y
    - Parameter 4 (❓ Yes or No): Relative

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `CurvedMovement::AddLine`.

**Append a smooth curve**  
Append a cubic Bezier curve to the end of an object's path. The first control point is symmetrical to the last control point of the path.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Path name
    - Parameter 2 (🔢 Number): Second Control point X
    - Parameter 3 (🔢 Number): Second Control point Y
    - Parameter 4 (🔢 Number): Destination point X
    - Parameter 5 (🔢 Number): Destination point Y
    - Parameter 6 (❓ Yes or No): Relative

    > Technical note: parameters 0, 7 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `CurvedMovement::AddSmoothCubicCurve`.

**Append a path**  
Append a path to another path.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Name of the path to modify
    - Parameter 2 (🔤 Name (String)): Name of the path to add to the first one

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `CurvedMovement::AppendPath`.

**Append a rotated path**  
Append a path to another path. The appended path is rotated to have a smooth junction.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Name of the path to modify
    - Parameter 2 (🔤 Name (String)): Name of the path to add to the first one
    - Parameter 3 (❓ Yes or No): Flip the appended path

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `CurvedMovement::AppendRotatedPath`.

**Close a path**  
Append a line to close the path.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Path name

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `CurvedMovement::ClosePath`.

**Create a path from SVG**  
Create a path from SVG commands, for instance "M 0,0 C 55,0 100,45 100,100". Commands are: M = Move, C = Curve, S = Smooth, L = Line. Lower case is for relative positions. The preferred way to build the commands is to use an external SVG editor like Inkscape.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Path name
    - Parameter 2 (🔤 String): SVG commands

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `CurvedMovement::CreatePathFromSvg`.

**Delete a path**  
Delete a path from the memory.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Path name

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `CurvedMovement::DeletePath`.

**Duplicate a path**  
Duplicate a path.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Name of the path to create
    - Parameter 2 (🔤 Name (String)): Name of the source path

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `CurvedMovement::DuplicatedPath`.

**Invert a path**  
Invert a path, the end becomes the beginning.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Path name

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `CurvedMovement::InvertPath`.

**Rotate a path**  
Rotate a path.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Path name
    - Parameter 2 (🔢 Number): Rotation angle

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `CurvedMovement::RotatePath`.

**Scale a path**  
Scale a path.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Path name
    - Parameter 2 (🔢 Number): Scale on X axis
    - Parameter 3 (🔢 Number): Scale on Y axis

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `CurvedMovement::ScalePath`.

**Speed scale Y**  
Change the speed scale on Y axis. This allows to change the view point of a path (top-dwon or isometry).

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Path name
    - Parameter 2 (🔢 Number): Speed scale on Y axis (0.5 for pixel isometry)

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `CurvedMovement::SetSpeedScaleY`.


## Conditions

**Is  closed**  
Check if a path is closed.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Path name

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `CurvedMovement::IsClosed`.

**Path exists**  
Path exists.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Path name

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `CurvedMovement::PathExists`.


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

### Behavior properties

- **Rotate object** (🔘 Boolean). Default value is `true`.
- **Rotation offset** (🔢 Number, Angle). Default value is `0`.
- **Viewpoint** (Choice, one of: "Top-Down", "Isometry 2:1 (26.565°)"). Default value is `Top-Down`.

??? quote "See internal technical details"


    - **Rotate object** is stored as `Rotation` (Boolean). Default value is `true`.
    - **Rotation offset** is stored as `RotationOffset` (Number). Unit is DegreeAngle. Default value is `0`.
    - **Viewpoint** is stored as `Viewpoint` (Choice). Default value is `Top-Down`.

### Behavior actions

**Accelerate**  
Make an object accelerate until it reaches a given speed.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Targeted speed (in pixels per second)
    - Parameter 3 (🔢 Number): Acceleration (in pixels per second per second)

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `CurvedMovement::SpeedPathMovement::AccelarateAt`.

**Accelerate during**  
Make an object accelerate to reaches a speed in a given amount of time.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Targeted speed (in pixels per second)
    - Parameter 3 (🔢 Number): Duration (in seconds)

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `CurvedMovement::SpeedPathMovement::AccelarateDuring`.

**Draw the trajectory**  
Draw the object trajectory.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (👾 Object): Shape painter

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `CurvedMovement::SpeedPathMovement::DrawDebug`.

**Follow a path**  
Change the path followed by an object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 Name (String)): Path name
      The path can be define with the "Append curve" action.
    - Parameter 3 (🔢 Number): Number of repetitions
    - Parameter 4 (❓ Yes or No): Loop

    > Technical note: parameter 5 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `CurvedMovement::SpeedPathMovement::SetPath`.

**Follow a path to a position**  
Change the path followed by an object to reach a position.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 Name (String)): Path name
      The path can be define with the "Append curve" action.
    - Parameter 3 (🔢 Number): Number of repetitions
    - Parameter 4 (❓ Yes or No): Loop
    - Parameter 5 (🔢 Number): Destination X
    - Parameter 6 (🔢 Number): Destination Y

    > Technical note: parameter 7 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `CurvedMovement::SpeedPathMovement::SetPathTo`.

**Position on the path**  
Change the length between the trajectory origin and the current position counting the loops.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `CurvedMovement::SpeedPathMovement::SetPositionOnPath`.

**Speed**  
Change the speed of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `CurvedMovement::SpeedPathMovement::SetSpeed`.


### Behavior conditions

**Can move further**  
Check if the object can still move in the current direction.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `CurvedMovement::SpeedPathMovement::CanMoveFurther`.

**Reach an end**  
Check if the object has reached one of the 2 ends of the path.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `CurvedMovement::SpeedPathMovement::HasReachedAnEnd`.

**Reached path origin**  
Check if the object has reached the origin position of the path.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `CurvedMovement::SpeedPathMovement::HasReachedOrigin`.

**Reached path target**  
Check if the object has reached the target position of the path.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `CurvedMovement::SpeedPathMovement::HasReachedTarget`.

**Current loop**  
Compare the number time the object loop the trajectory.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `CurvedMovement::SpeedPathMovement::Loop`.

**Position on the loop**  
Compare the length between the trajectory origin and the current position without counting the loops.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `CurvedMovement::SpeedPathMovement::PositionOnLoop`.

**Position on the path**  
Compare the length between the trajectory origin and the current position counting the loops.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `CurvedMovement::SpeedPathMovement::PositionOnPath`.

**Speed**  
Compare the speed of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `CurvedMovement::SpeedPathMovement::Speed`.


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

### Behavior properties

- **Flip on X to go back** (🔘 Boolean). Default value is `false`.
- **Flip on Y to go back** (🔘 Boolean). Default value is `false`.
- **Rotate object** (🔘 Boolean). Default value is `true`.
- **Rotation offset** (🔢 Number, Angle). Default value is `0`.
- **Viewpoint** (Choice, one of: "Top-Down", "Isometry 2:1 (26.565°)"). Default value is `Top-Down`.

??? quote "See internal technical details"


    - **Flip on X to go back** is stored as `FlipXToGoBack` (Boolean). Default value is `false`.
    - **Flip on Y to go back** is stored as `FlipYToGoBack` (Boolean). Default value is `false`.
    > This behavior must be used on an object also having a behavior with type "FlippableCapability::FlippableBehavior". This is stored on property `Flippable`.

    - **Rotate object** is stored as `Rotation` (Boolean). Default value is `true`.
    - **Rotation offset** is stored as `RotationOffset` (Number). Unit is DegreeAngle. Default value is `0`.
    - **Viewpoint** is stored as `Viewpoint` (Choice). Default value is `Top-Down`.

### Behavior actions

**Draw the trajectory**  
Draw the object trajectory.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (👾 Object): Shape painter

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `CurvedMovement::TweenPathMovement::DrawDebug`.

**Move on path**  
Move the object by following a path.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 Name (String)): Path name
      The path can be define with the "Append curve" action.
    - Parameter 3 (🔢 Number): Number of repetitions
    - Parameter 4 (🔢 Number): Duration in seconds
    - Parameter 5 (🔤 String): Easing (one of: "linear", "easeInQuad", "easeOutQuad", "easeInOutQuad", "easeInCubic", "easeOutCubic", "easeInOutCubic", "easeInQuart", "easeOutQuart", "easeInOutQuart", "easeInQuint", "easeOutQuint", "easeInOutQuint", "easeInOutSine", "easeInExpo", "easeOutExpo", "easeInOutExpo", "easeInCirc", "easeOutCirc", "easeInOutCirc", "easeOutBounce", "easeInBack", "easeOutBack", "easeInOutBack", "elastic", "swingFromTo", "swingFrom", "swingTo", "bounce", "bouncePast", "easeFromTo", "easeFrom", "easeTo")

    > Technical note: parameter 6 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `CurvedMovement::TweenPathMovement::Move`.

**Move back and forth**  
Move the object by following a path and go back.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 Name (String)): Path name
      The path can be define with the "Append curve" action.
    - Parameter 3 (🔢 Number): Number of repetitions
    - Parameter 4 (🔢 Number): Duration in seconds
    - Parameter 5 (🔤 String): Easing (one of: "linear", "easeInQuad", "easeOutQuad", "easeInOutQuad", "easeInCubic", "easeOutCubic", "easeInOutCubic", "easeInQuart", "easeOutQuart", "easeInOutQuart", "easeInQuint", "easeOutQuint", "easeInOutQuint", "easeInOutSine", "easeInExpo", "easeOutExpo", "easeInOutExpo", "easeInCirc", "easeOutCirc", "easeInOutCirc", "easeOutBounce", "easeInBack", "easeOutBack", "easeInOutBack", "elastic", "swingFromTo", "swingFrom", "swingTo", "bounce", "bouncePast", "easeFromTo", "easeFrom", "easeTo")
    - Parameter 6 (🔢 Number): Duration to wait before going back
    - Parameter 7 (❓ Yes or No): Loop

    > Technical note: parameter 8 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `CurvedMovement::TweenPathMovement::MoveAndGoBack`.

**Move on path to a position**  
Move the object to a position by following a path.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 Name (String)): Path name
      The path can be define with the "Append curve" action.
    - Parameter 3 (🔢 Number): Number of repetitions
    - Parameter 4 (🔢 Number): Duration in seconds
    - Parameter 5 (🔤 String): Easing (one of: "linear", "easeInQuad", "easeOutQuad", "easeInOutQuad", "easeInCubic", "easeOutCubic", "easeInOutCubic", "easeInQuart", "easeOutQuart", "easeInOutQuart", "easeInQuint", "easeOutQuint", "easeInOutQuint", "easeInOutSine", "easeInExpo", "easeOutExpo", "easeInOutExpo", "easeInCirc", "easeOutCirc", "easeInOutCirc", "easeOutBounce", "easeInBack", "easeOutBack", "easeInOutBack", "elastic", "swingFromTo", "swingFrom", "swingTo", "bounce", "bouncePast", "easeFromTo", "easeFrom", "easeTo")
    - Parameter 6 (🔢 Number): Destination X
    - Parameter 7 (🔢 Number): Destination Y

    > Technical note: parameter 8 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `CurvedMovement::TweenPathMovement::MoveTo`.

**Move back and forth to a position**  
Move the object to a position by following a path and go back.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 Name (String)): Path name
      The path can be define with the "Append curve" action.
    - Parameter 3 (🔢 Number): Number of repetitions
    - Parameter 4 (🔢 Number): Duration in seconds
    - Parameter 5 (🔤 String): Easing (one of: "linear", "easeInQuad", "easeOutQuad", "easeInOutQuad", "easeInCubic", "easeOutCubic", "easeInOutCubic", "easeInQuart", "easeOutQuart", "easeInOutQuart", "easeInQuint", "easeOutQuint", "easeInOutQuint", "easeInOutSine", "easeInExpo", "easeOutExpo", "easeInOutExpo", "easeInCirc", "easeOutCirc", "easeInOutCirc", "easeOutBounce", "easeInBack", "easeOutBack", "easeInOutBack", "elastic", "swingFromTo", "swingFrom", "swingTo", "bounce", "bouncePast", "easeFromTo", "easeFrom", "easeTo")
    - Parameter 6 (🔢 Number): Destination X
    - Parameter 7 (🔢 Number): Destination Y
    - Parameter 8 (🔢 Number): Duration to wait before going back
    - Parameter 9 (❓ Yes or No): Loop

    > Technical note: parameter 10 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `CurvedMovement::TweenPathMovement::MoveToAndGoBack`.


### Behavior conditions

**Finished to move**  
Check if the object has finished to move on the path.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `CurvedMovement::TweenPathMovement::HasFinishedToMove`.

**Reached an end**  
Check if the object has reached one of the 2 ends of the path.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `CurvedMovement::TweenPathMovement::HasReachedAnEnd`.


### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.TweenPathMovement::MovementAngle()` | Return the angle of movement on its path. ||


---

*This page is an auto-generated reference page about the **Curved movement** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).