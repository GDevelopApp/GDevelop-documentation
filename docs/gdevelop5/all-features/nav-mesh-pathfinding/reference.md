# Navmesh pathfinding Reference

Pathfinding allows to compute an efficient path for objects, including crowds, following walkable floors and avoiding obstacles on the way. [Read more explanations about it.](/gdevelop5/behaviors/nav-mesh-pathfinding)

## Actions

**Draw pathfinding walkable area**  
This activates the display of the walkable area (in blue).

??? quote "See parameters & details"

    - Parameter 1 (❓ Yes or No): Enable debug draw

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `NavMeshPathfinding::EnableDebugDraw`.




## Pathfinding character (navmesh based) 

Move objects to a target by following walkable floors and avoiding obstacles. Uses a flexible 2D/3D "navmesh"-based pathfinding. 

### Behavior properties

- **Acceleration** (🔢 Number, Acceleration). Default value is `400`.
- **Angle offset** (🔢 Number, Angle). Default value is `0`.
- **Rotation speed** (🔢 Number, Angular speed). Default value is `180`.
- **Avoidance sight range** (🔢 Number, Distance). Default value is `120`.
- **Max. speed** (🔢 Number, Speed). Default value is `200`.
- **Radius** (🔢 Number, Distance). Use the circle inside the object width and height when left to 0. Default value is `0`.
- **Rotate object** (🔘 Boolean). Default value is `true`.

??? quote "See internal technical details"


    - **Acceleration** is stored as `acceleration` (Number). Unit is PixelAcceleration. Default value is `400`.
    - **Angle offset** is stored as `angleOffset` (Number). Unit is DegreeAngle. Default value is `0`.
    - **Rotation speed** is stored as `angularMaxSpeed` (Number). Unit is AngularSpeed. Default value is `180`.
    - **Avoidance sight range** is stored as `avoidanceSightRange` (Number). Unit is Pixel. Default value is `120`.
    - **Max. speed** is stored as `maxSpeed` (Number). Unit is PixelSpeed. Default value is `200`.
    - **Radius** is stored as `radius` (Number). Unit is Pixel. Default value is `0`.
    - **Rotate object** is stored as `rotateObject` (Boolean). Default value is `true`.

### Behavior shared properties

- **Cell depth** (🔢 Number, Distance). Default value is `10`.
- **Cell size** (🔢 Number, Distance). Default value is `10`.
- **Slope max. angle** (🔢 Number, Angle). Default value is `50`.
- **Y speed scale** (🔢 Number). Allow a depth effect for 2D games. Usually set to 0.5 for isometry. Default value is `1`.
- **Max. stair height** (🔢 Number, Distance). Default value is `20`.
- **Walkable depth** (🔢 Number, Distance). Minimum floor to ceiling height that will still allow the floor area to be considered walkable. Default value is `150`.
- **Walkable radius** (🔢 Number, Distance). The biggest character radius is automatically used when left negative. Default value is `-1`.

??? quote "See internal technical details"


    - **Cell depth** is stored as `cellDepth` (Number). Unit is Pixel. Default value is `10`.
    - **Cell size** is stored as `cellSize` (Number). Unit is Pixel. Default value is `10`.
    - **Slope max. angle** is stored as `slopeMaxAngle` (Number). Unit is DegreeAngle. Default value is `50`.
    - **Y speed scale** is stored as `speedScaleY` (Number). Default value is `1`.
    - **Max. stair height** is stored as `stairHeightMax` (Number). Unit is Pixel. Default value is `20`.
    - **Walkable depth** is stored as `walkableDepth` (Number). Unit is Pixel. Default value is `150`.
    - **Walkable radius** is stored as `walkableRadius` (Number). Unit is Pixel. Default value is `-1`.

### Behavior actions

**Move to a position**  
Move the object to a position

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Destination X position
    - Parameter 3 (🔢 Number): Destination Y position
    - Parameter 4 (🔢 Number): Destination Z position

    > Technical note: this action internal type (in GDevelop JSON) is `NavMeshPathfinding::MoveTo`.

**Rotate the object**  
Enable or disable rotation of the object on the path

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): Rotate object?

    > Technical note: this action internal type (in GDevelop JSON) is `NavMeshPathfinding::NavMeshCharacterBehavior::RotateObject`.

**Acceleration**  
Change the acceleration when moving the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `NavMeshPathfinding::NavMeshCharacterBehavior::SetAcceleration`.

**Rotation offset**  
Change the rotation offset applied when moving the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Angle (in degrees)

    > Technical note: this action internal type (in GDevelop JSON) is `NavMeshPathfinding::NavMeshCharacterBehavior::SetAngleOffset`.

**Angular maximum speed**  
Change the maximum angular speed when moving the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Max angular speed (in degrees per second)

    > Technical note: this action internal type (in GDevelop JSON) is `NavMeshPathfinding::NavMeshCharacterBehavior::SetAngularMaxSpeed`.

**Maximum speed**  
Change the maximum speed when moving the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Max speed (in pixels per second)

    > Technical note: this action internal type (in GDevelop JSON) is `NavMeshPathfinding::NavMeshCharacterBehavior::SetMaxSpeed`.

**Speed**  
Change Change the speed of the object on the path.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Speed (in pixels per second)

    > Technical note: this action internal type (in GDevelop JSON) is `NavMeshPathfinding::NavMeshCharacterBehavior::SetSpeed`.


### Behavior conditions

**Destination reached**  
Check if the destination was reached.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this condition internal type (in GDevelop JSON) is `NavMeshPathfinding::DestinationReached`.

**Acceleration**  
Compare the acceleration when moving the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `NavMeshPathfinding::NavMeshCharacterBehavior::Acceleration`.

**Rotation offset**  
Compare the rotation offset applied when moving the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Angle (in degrees)

    > Technical note: this condition internal type (in GDevelop JSON) is `NavMeshPathfinding::NavMeshCharacterBehavior::AngleOffset`.

**Angular maximum speed**  
Compare the maximum angular speed when moving the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Max angular speed (in degrees per second)

    > Technical note: this condition internal type (in GDevelop JSON) is `NavMeshPathfinding::NavMeshCharacterBehavior::AngularMaxSpeed`.

**Maximum speed**  
Compare the maximum speed when moving the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Max speed (in pixels per second)

    > Technical note: this condition internal type (in GDevelop JSON) is `NavMeshPathfinding::NavMeshCharacterBehavior::MaxSpeed`.

**Angle of movement on its path**  
Compare the angle of movement of an object on its path.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Angle, in degrees
    - Parameter 3 (🔢 Number): Tolerance, in degrees

    > Technical note: this condition internal type (in GDevelop JSON) is `NavMeshPathfinding::NavMeshCharacterBehavior::MovementAngleIsAround`.

**Object rotated**  
Check if the object is rotated when traveling on its path.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this condition internal type (in GDevelop JSON) is `NavMeshPathfinding::NavMeshCharacterBehavior::ObjectRotated`.

**Speed**  
Compare Change the speed of the object on the path.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Speed (in pixels per second)

    > Technical note: this condition internal type (in GDevelop JSON) is `NavMeshPathfinding::NavMeshCharacterBehavior::Speed`.

**Path found**  
Check if a path has been found.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this condition internal type (in GDevelop JSON) is `NavMeshPathfinding::PathFound`.


### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.NavMeshCharacter::Acceleration()` | Return the acceleration when moving the object. ||
| `Object.NavMeshCharacter::AngleOffset()` | Return the rotation offset applied when moving the object. ||
| `Object.NavMeshCharacter::AngularMaxSpeed()` | Return the maximum angular speed when moving the object. ||
| `Object.NavMeshCharacter::DestinationX()` | Destination X position of the path ||
| `Object.NavMeshCharacter::DestinationY()` | Destination Y position of the path ||
| `Object.NavMeshCharacter::DestinationZ()` | Destination Z position of the path ||
| `Object.NavMeshCharacter::GetNodeX(number)` | Get a waypoint X position ||
| | _🔢 Number_ | Node index (start at 0!) |
| `Object.NavMeshCharacter::GetNodeY(number)` | Get a waypoint Y position ||
| | _🔢 Number_ | Node index (start at 0!) |
| `Object.NavMeshCharacter::GetNodeZ(number)` | Get a waypoint Z position ||
| | _🔢 Number_ | Node index (start at 0!) |
| `Object.NavMeshCharacter::MaxSpeed()` | Return the maximum speed when moving the object. ||
| `Object.NavMeshCharacter::MovementAngle()` | Angle of movement on its path ||
| `Object.NavMeshCharacter::NextNodeIndex()` | Get the index of the next waypoint to reach ||
| `Object.NavMeshCharacter::NextNodeX()` | Get next waypoint X position ||
| `Object.NavMeshCharacter::NextNodeY()` | Get next waypoint Y position ||
| `Object.NavMeshCharacter::NextNodeZ()` | Get next waypoint Z position ||
| `Object.NavMeshCharacter::NodeCount()` | Get the number of waypoints on the path ||
| `Object.NavMeshCharacter::PreviousNodeX()` | Previous waypoint X position ||
| `Object.NavMeshCharacter::PreviousNodeY()` | Previous waypoint Y position ||
| `Object.NavMeshCharacter::PreviousNodeZ()` | Previous waypoint Z position ||
| `Object.NavMeshCharacter::Speed()` | Return Change the speed of the object on the path. ||

## Floor/obstacle for pathfinding (navmesh based) 

Flag objects as being walkable floors and/or obstacles for navmesh pathfinding. 

### Behavior properties

- **Simplified 3D model** (🗂️ Resource). Leave empty to use object's one.
- **Shape** (Choice, one of: "Box", "Mesh"). Default value is `Box`.

??? quote "See internal technical details"


    - **Simplified 3D model** is stored as `meshShapeResourceName` (resource). Default value is ``.
    - **Shape** is stored as `shape` (Choice). Default value is `Box`.

_No expressions for this behavior._




---

The Navmesh pathfinding extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **Navmesh pathfinding** feature of [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).