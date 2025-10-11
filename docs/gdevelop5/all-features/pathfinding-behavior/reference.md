# Pathfinding behavior Reference

Pathfinding allows to compute an efficient path for objects, avoiding obstacles on the way. [Read more explanations about it.](/gdevelop5/behaviors/pathfinding)



## Pathfinding 

Move objects to a target while avoiding all objects that are flagged as obstacles. 

### Behavior actions

**Acceleration**
Change the acceleration when moving the object

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

**Diagonal movement**
Allow or restrict diagonal movement on the path

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): Allow?

**Rotation offset**
Change the rotation offset applied when moving the object

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Angle (in degrees)

**Angular maximum speed**
Change the maximum angular speed when moving the object

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Max angular speed (in degrees per second)

**Height of the cells**
Change the height of the cells of the virtual grid.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

**Width of the cells**
Change the width of the cells of the virtual grid.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

**Extra border**
Change the size of the extra border applied to the object when planning a path

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

**Maximum speed**
Change the maximum speed when moving the object

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Max speed (in pixels per second)

**Grid X offset**
Change X offset of the virtual grid.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

**Grid Y offset**
Change Y offset of the virtual grid.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

**Rotate the object**
Enable or disable rotation of the object on the path

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): Rotate object?

**Move to a position**
Move the object to a position

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 3 (🔢 Number): Destination X position
    - Parameter 4 (🔢 Number): Destination Y position

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

**Speed**
Change the speed of the object on the path

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Speed (in pixels per second)

### Behavior conditions

**Acceleration**
Compare the acceleration when moving the object

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

**Rotation offset**
Compare the rotation offset when moving the object

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Angle to compare to (in degrees)

**Angular maximum speed**
Compare the maximum angular speed when moving the object

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Max angular speed to compare to (in degrees per second)

**Height of the virtual grid**
Compare the height of the cells of the virtual grid.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

**Width of the virtual grid**
Compare the width of the cells of the virtual grid.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

**Destination reached**
Check if the destination was reached.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

**Diagonal movement**
Check if the object is allowed to move diagonally on the path

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

**Extra border**
Compare the size of the extra border applied to the object when planning a path

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

**Maximum speed**
Compare the maximum speed when moving the object

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Max speed to compare to (in pixels per second)

**Object rotated**
Check if the object is rotated when traveling on its path.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

**Path found**
Check if a path has been found.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

**Grid X offset**
Compare X offset of the virtual grid.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

**Grid Y offset**
Compare Y offset of the virtual grid.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

**Angle of movement on its path**
Compare the angle of movement of an object on its path.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Angle, in degrees
    - Parameter 3 (🔢 Number): Tolerance, in degrees

**Speed on its path**
Compare the speed of the object on its path.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Speed to compare to (in pixels per second)

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

### Behavior actions

**Cost**
Change the cost of going through the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

**Should object be impassable**
Decide if the object is an impassable obstacle.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): Impassable

### Behavior conditions

**Cost**
Compare the cost of going through the object

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

**Impassable obstacle**
Check if the obstacle is impassable.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.PathfindingObstacle::Cost()` | Obstacle cost ||



---

The Pathfinding behavior extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **Pathfinding behavior** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).