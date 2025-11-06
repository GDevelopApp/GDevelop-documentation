# Pathfinding behavior Reference

Pathfinding allows to compute an efficient path for objects, avoiding obstacles on the way. [Read more explanations about it.](/gdevelop5/behaviors/pathfinding)



## Pathfinding 

Move objects to a target while avoiding all objects that are flagged as obstacles. 

### Behavior properties

- **Acceleration** (🔢 Number, Acceleration). Default value is `400`.
- **Allows diagonals** (🔘 Boolean). Default value is `true`.
- **Angle offset** (🔢 Number, Angle). Default value is `0`.
- **Rotation speed** (🔢 Number, Angular speed). Default value is `180`.
- **Cell height** (🔢 Number, Distance). Default value is `20`.
- **Cell width** (🔢 Number, Distance). Default value is `20`.
- **ExtraBorder** (🔢 Number, Distance). Extra border size. Default value is `0`.
- **X offset** (🔢 Number, Distance). Default value is `0`.
- **Y offset** (🔢 Number, Distance). Default value is `0`.
- **Max. speed** (🔢 Number, Speed). Default value is `200`.
- **Rotate object** (🔘 Boolean). Default value is `true`.
- **Smoothing max cell gap** (). It's recommended to leave a max gap of 1 cell. Setting it to 0 disable the smoothing. Default value is `1`.

??? quote "See internal technical details"


    - **Acceleration** is stored as `Acceleration` (Number). Unit is PixelAcceleration. Default value is `400`.
    - **Allows diagonals** is stored as `AllowDiagonals` (Boolean). Default value is `true`.
    - **Angle offset** is stored as `AngleOffset` (Number). Unit is DegreeAngle. Default value is `0`.
    - **Rotation speed** is stored as `AngularMaxSpeed` (Number). Unit is AngularSpeed. Default value is `180`.
    - **Cell height** is stored as `CellHeight` (Number). Unit is Pixel. Default value is `20`.
    - **Cell width** is stored as `CellWidth` (Number). Unit is Pixel. Default value is `20`.
    - **ExtraBorder** is stored as `ExtraBorder` (Number). Unit is Pixel. Default value is `0`.
    - **X offset** is stored as `GridOffsetX` (Number). Unit is Pixel. Default value is `0`.
    - **Y offset** is stored as `GridOffsetY` (Number). Unit is Pixel. Default value is `0`.
    - **Max. speed** is stored as `MaxSpeed` (Number). Unit is PixelSpeed. Default value is `200`.
    - **Rotate object** is stored as `RotateObject` (Boolean). Default value is `true`.
    - **Smoothing max cell gap** is stored as `SmoothingMaxCellGap` (). Default value is `1`.

### Behavior actions

**Acceleration**  
Change the acceleration when moving the object

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `PathfindingBehavior::Acceleration`.

**Diagonal movement**  
Allow or restrict diagonal movement on the path

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): Allow?

    > Technical note: this action internal type (in GDevelop JSON) is `PathfindingBehavior::AllowDiagonals`.

**Rotation offset**  
Change the rotation offset applied when moving the object

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Angle (in degrees)

    > Technical note: this action internal type (in GDevelop JSON) is `PathfindingBehavior::AngleOffset`.

**Angular maximum speed**  
Change the maximum angular speed when moving the object

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Max angular speed (in degrees per second)

    > Technical note: this action internal type (in GDevelop JSON) is `PathfindingBehavior::AngularMaxSpeed`.

**Height of the cells**  
Change the height of the cells of the virtual grid.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `PathfindingBehavior::CellHeight`.

**Width of the cells**  
Change the width of the cells of the virtual grid.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `PathfindingBehavior::CellWidth`.

**Extra border**  
Change the size of the extra border applied to the object when planning a path

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `PathfindingBehavior::ExtraBorder`.

**Maximum speed**  
Change the maximum speed when moving the object

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Max speed (in pixels per second)

    > Technical note: this action internal type (in GDevelop JSON) is `PathfindingBehavior::MaxSpeed`.

**Grid X offset**  
Change X offset of the virtual grid.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `PathfindingBehavior::PathfindingBehavior::SetGridOffsetX`.

**Grid Y offset**  
Change Y offset of the virtual grid.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `PathfindingBehavior::PathfindingBehavior::SetGridOffsetY`.

**Rotate the object**  
Enable or disable rotation of the object on the path

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): Rotate object?

    > Technical note: this action internal type (in GDevelop JSON) is `PathfindingBehavior::RotateObject`.

**Move to a position**  
Move the object to a position

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 3 (🔢 Number): Destination X position
    - Parameter 4 (🔢 Number): Destination Y position

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PathfindingBehavior::SetDestination`.

**Speed**  
Change the speed of the object on the path

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Speed (in pixels per second)

    > Technical note: this action internal type (in GDevelop JSON) is `PathfindingBehavior::Speed`.


### Behavior conditions

**Acceleration**  
Compare the acceleration when moving the object

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `PathfindingBehavior::Acceleration`.

**Rotation offset**  
Compare the rotation offset when moving the object

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Angle to compare to (in degrees)

    > Technical note: this condition internal type (in GDevelop JSON) is `PathfindingBehavior::AngleOffset`.

**Angular maximum speed**  
Compare the maximum angular speed when moving the object

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Max angular speed to compare to (in degrees per second)

    > Technical note: this condition internal type (in GDevelop JSON) is `PathfindingBehavior::AngularMaxSpeed`.

**Height of the virtual grid**  
Compare the height of the cells of the virtual grid.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `PathfindingBehavior::CellHeight`.

**Width of the virtual grid**  
Compare the width of the cells of the virtual grid.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `PathfindingBehavior::CellWidth`.

**Destination reached**  
Check if the destination was reached.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this condition internal type (in GDevelop JSON) is `PathfindingBehavior::DestinationReached`.

**Diagonal movement**  
Check if the object is allowed to move diagonally on the path

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this condition internal type (in GDevelop JSON) is `PathfindingBehavior::DiagonalsAllowed`.

**Extra border**  
Compare the size of the extra border applied to the object when planning a path

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `PathfindingBehavior::ExtraBorder`.

**Maximum speed**  
Compare the maximum speed when moving the object

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Max speed to compare to (in pixels per second)

    > Technical note: this condition internal type (in GDevelop JSON) is `PathfindingBehavior::MaxSpeed`.

**Object rotated**  
Check if the object is rotated when traveling on its path.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this condition internal type (in GDevelop JSON) is `PathfindingBehavior::ObjectRotated`.

**Path found**  
Check if a path has been found.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this condition internal type (in GDevelop JSON) is `PathfindingBehavior::PathFound`.

**Grid X offset**  
Compare X offset of the virtual grid.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `PathfindingBehavior::PathfindingBehavior::GridOffsetX`.

**Grid Y offset**  
Compare Y offset of the virtual grid.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `PathfindingBehavior::PathfindingBehavior::GridOffsetY`.

**Angle of movement on its path**  
Compare the angle of movement of an object on its path.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Angle, in degrees
    - Parameter 3 (🔢 Number): Tolerance, in degrees

    > Technical note: this condition internal type (in GDevelop JSON) is `PathfindingBehavior::PathfindingBehavior::MovementAngleIsAround`.

**Speed on its path**  
Compare the speed of the object on its path.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Speed to compare to (in pixels per second)

    > Technical note: this condition internal type (in GDevelop JSON) is `PathfindingBehavior::Speed`.


### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.Pathfinding::Acceleration()` | Acceleration of the object on the path ||
| `Object.Pathfinding::AngleOffset()` | Rotation offset applied the object on the path ||
| `Object.Pathfinding::AngularMaxSpeed()` | Angular maximum speed of the object on the path ||
| `Object.Pathfinding::CellHeight()` | Height of the virtual grid ||
| `Object.Pathfinding::CellWidth()` | Width of the virtual grid ||
| `Object.Pathfinding::DestinationX()` | Destination X position ||
| `Object.Pathfinding::DestinationY()` | Destination Y position ||
| `Object.Pathfinding::ExtraBorder()` | Extra border applied the object on the path ||
| `Object.Pathfinding::GetNodeX(number)` | Get next waypoint X position ||
| | _🔢 Number_ | Node index (start at 0!) |
| `Object.Pathfinding::GetNodeY(number)` | Get next waypoint Y position ||
| | _🔢 Number_ | Node index (start at 0!) |
| `Object.Pathfinding::GridOffsetX()` | Return X offset of the virtual grid. ||
| `Object.Pathfinding::GridOffsetY()` | Return Y offset of the virtual grid. ||
| `Object.Pathfinding::LastNodeX()` | Last waypoint X position ||
| `Object.Pathfinding::LastNodeY()` | Last waypoint Y position ||
| `Object.Pathfinding::MaxSpeed()` | Maximum speed of the object on the path ||
| `Object.Pathfinding::MovementAngle()` | Angle of movement on its path ||
| `Object.Pathfinding::NextNodeIndex()` | Get the index of the next waypoint to reach ||
| `Object.Pathfinding::NextNodeX()` | Get next waypoint X position ||
| `Object.Pathfinding::NextNodeY()` | Get next waypoint Y position ||
| `Object.Pathfinding::NodeCount()` | Get the number of waypoints on the path ||
| `Object.Pathfinding::Speed()` | Speed of the object on the path ||

## Obstacle for pathfinding 

Flag objects as being obstacles for pathfinding. 

### Behavior properties

- **Cost (if not impassable)** (). Default value is `2`.
- **Impassable obstacle** (🔘 Boolean). Default value is `true`.

??? quote "See internal technical details"


    - **Cost (if not impassable)** is stored as `Cost` (). Default value is `2`.
    - **Impassable obstacle** is stored as `Impassable` (Boolean). Default value is `true`.

### Behavior actions

**Cost**  
Change the cost of going through the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `PathfindingBehavior::Cost`.

**Should object be impassable**  
Decide if the object is an impassable obstacle.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): Impassable

    > Technical note: this action internal type (in GDevelop JSON) is `PathfindingBehavior::SetImpassable`.


### Behavior conditions

**Cost**  
Compare the cost of going through the object

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `PathfindingBehavior::Cost`.

**Impassable obstacle**  
Check if the obstacle is impassable.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this condition internal type (in GDevelop JSON) is `PathfindingBehavior::IsImpassable`.


### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.PathfindingObstacle::Cost()` | Obstacle cost ||



---

The Pathfinding behavior extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **Pathfinding behavior** feature of [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).