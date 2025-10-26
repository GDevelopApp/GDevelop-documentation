# Navigation mesh pathfinding (experimental)

<img src="https://resources.gdevelop-app.com/assets/Icons/Line Hero Pack/Master/SVG/Maps and Navigation/Maps and Navigation_map_find_search.svg" class="extension-icon"></img>
Pathfinding allows to compute an efficient path for objects, avoiding obstacles on the way.

**Authors and contributors** to this experimental extension: [D8H](https://gd.games/D8H).

!!! warning
    This is an extension made by a community member and it only got through a
    light review by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of fully reviewed extensions.

---

In comparison to the built-in pathfinding behavior, this one aims to:

- better respect obstacle shapes
- find paths faster if obstacles don't move

The isometric example shows how to use this extension to move a character to a destination ([open the project online](https://editor.gdevelop.io/?project=example://isometric-game)).

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Navigation mesh pathfinding animator 

Change the animation according to the movement direction. 

### Behavior actions

**Animation name**  
Change the animation name of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (string): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `NavMeshPathfinding::NavMeshPathfindingAnimator::SetAnimationName`.

**Scale animation according to speed**  
Change whether the animation is scaled according to speed or not.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): IsScalingAnimation

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `NavMeshPathfinding::NavMeshPathfindingAnimator::SetIsScalingAnimation`.

### Behavior conditions

**Animation name**  
Compare the animation name of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (string): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `NavMeshPathfinding::NavMeshPathfindingAnimator::AnimationName`.

**Scale animation according to speed**  
Check if the animation is scaled according to speed.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `NavMeshPathfinding::NavMeshPathfindingAnimator::IsScalingAnimation`.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.NavMeshPathfindingAnimator::AnimationName()` | Return the animation name of the object. ||

## Navigation mesh pathfinding (experimental) 

Move objects to a target in straight lines while avoiding all objects that are flagged as obstacles. 

### Behavior actions

**Draw navigation mesh**  
Draw the navigation mesh used for the object.  
This action must be used after "Move to a position".

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (👾 Object): Shape painter

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `NavMeshPathfinding::NavMeshPathfindingBehavior::DrawNavMesh`.

**Acceleration**  
Change the acceleration of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `NavMeshPathfinding::NavMeshPathfindingBehavior::SetAcceleration`.

**Angle offset**  
Change the angle offset of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `NavMeshPathfinding::NavMeshPathfindingBehavior::SetAngleOffset`.

**Rotation speed**  
Change the rotation speed of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `NavMeshPathfinding::NavMeshPathfindingBehavior::SetAngularMaxSpeed`.

**Collision shape**  
Change the collision shape of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔤 String): Value (one of: "Bounding disk", "Dot at center")

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `NavMeshPathfinding::NavMeshPathfindingBehavior::SetCollisionShape`.

**Move to a position**  
Move the object to a position.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Destination X position
    - Parameter 3 (🔢 Number): Destination Y position

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `NavMeshPathfinding::NavMeshPathfindingBehavior::SetDestination`.

**Extra border size**  
Change the extra border size of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `NavMeshPathfinding::NavMeshPathfindingBehavior::SetExtraBorder`.

**Maximum speed**  
Change the maximum speed of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `NavMeshPathfinding::NavMeshPathfindingBehavior::SetMaxSpeed`.

**Rotate object**  
Enable or disable the rotation of the object when following its path.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): Rotate object

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `NavMeshPathfinding::NavMeshPathfindingBehavior::SetRotateObject`.

### Behavior conditions

**Acceleration**  
Compare the acceleration of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `NavMeshPathfinding::NavMeshPathfindingBehavior::Acceleration`.

**Angle offset**  
Compare the angle offset of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `NavMeshPathfinding::NavMeshPathfindingBehavior::AngleOffset`.

**Rotation speed**  
Compare the rotation speed of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `NavMeshPathfinding::NavMeshPathfindingBehavior::AngularMaxSpeed`.

**Collision shape**  
Compare the collision shape of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔤 String): Value to compare (one of: "Bounding disk", "Dot at center")

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `NavMeshPathfinding::NavMeshPathfindingBehavior::CollisionShape`.

**Destination reached**  
Check if the destination was reached.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `NavMeshPathfinding::NavMeshPathfindingBehavior::DestinationReached`.

**Extra border size**  
Compare the extra border size of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `NavMeshPathfinding::NavMeshPathfindingBehavior::ExtraBorder`.

**Is moving**  
Check if the object is moving on a path.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `NavMeshPathfinding::NavMeshPathfindingBehavior::IsMoving`.

**Maximum speed**  
Compare the maximum speed of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `NavMeshPathfinding::NavMeshPathfindingBehavior::MaxSpeed`.

**Angle of movement on its path**  
Compare the angle of movement of an object on its path.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Angle (in degrees)
    - Parameter 3 (🔢 Number): Tolerance (in degrees)

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `NavMeshPathfinding::NavMeshPathfindingBehavior::MovementAngleIsAround`.

**Path found**  
Check if a path has been found.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `NavMeshPathfinding::NavMeshPathfindingBehavior::PathFound`.

**Rotate object**  
Check if the object should rotate when following its path.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `NavMeshPathfinding::NavMeshPathfindingBehavior::RotateObject`.

**Speed on the path**  
Compare the number of waypoints on the path.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `NavMeshPathfinding::NavMeshPathfindingBehavior::Speed`.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.NavMeshPathfindingBehavior::Acceleration()` | Return the acceleration of the object. ||
| `Object.NavMeshPathfindingBehavior::AngleOffset()` | Return the angle offset of the object. ||
| `Object.NavMeshPathfindingBehavior::AngularMaxSpeed()` | Return the rotation speed of the object. ||
| `Object.NavMeshPathfindingBehavior::CollisionShape()` | Return the collision shape of the object. ||
| `Object.NavMeshPathfindingBehavior::DestinationX()` | Return the destination X position. ||
| `Object.NavMeshPathfindingBehavior::DestinationY()` | Return the destination Y position. ||
| `Object.NavMeshPathfindingBehavior::ExtraBorder()` | Return the extra border size of the object. ||
| `Object.NavMeshPathfindingBehavior::MaxSpeed()` | Return the maximum speed of the object. ||
| `Object.NavMeshPathfindingBehavior::MovementAngle()` | Return the angle of movement of an object on its path. ||
| `Object.NavMeshPathfindingBehavior::NextNodeIndex()` | Return the index of the next waypoint to reach. ||
| `Object.NavMeshPathfindingBehavior::NextNodeX()` | Return the next waypoint X position. ||
| `Object.NavMeshPathfindingBehavior::NextNodeY()` | Return the next waypoint Y position. ||
| `Object.NavMeshPathfindingBehavior::NodeCount()` | Get the number of waypoints on the path. ||
| `Object.NavMeshPathfindingBehavior::NodeX(number)` | Return a waypoint X position. ||
| | _🔢 Number_ | Node index (start at 0) |
| `Object.NavMeshPathfindingBehavior::NodeY(number)` | Return a waypoint Y position. ||
| | _🔢 Number_ | Node index (start at 0) |
| `Object.NavMeshPathfindingBehavior::PreviousNodeX()` | Return the previous waypoint X position. ||
| `Object.NavMeshPathfindingBehavior::PreviousNodeY()` | Return the previous waypoint Y position. ||
| `Object.NavMeshPathfindingBehavior::Speed()` | Return the number of waypoints on the path. ||

## Obstacle for navigation mesh pathfinding (experimental) 

Flag objects as being an obstacle for pathfinding. 

### Behavior conditions

**Area bottom bound**  
Compare the area bottom bound. The bottom bound of the area where objects can go in the scene (default to the game resolution). While an object is needed, this will apply to all objects using the behavior.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `NavMeshPathfinding::NavMeshPathfindingObstacleBehavior::AreaBottomBound`.

**Area left bound**  
Compare the area left bound. The left bound of the area where objects can go in the scene. While an object is needed, this will apply to all objects using the behavior.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `NavMeshPathfinding::NavMeshPathfindingObstacleBehavior::AreaLeftBound`.

**Area right bound**  
Compare the area right bound. The right bound of the area where objects can go in the scene (default to the game resolution). While an object is needed, this will apply to all objects using the behavior.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `NavMeshPathfinding::NavMeshPathfindingObstacleBehavior::AreaRightBound`.

**Area top bound**  
Compare the area top bound. The top bound of the area where objects can go in the scene. While an object is needed, this will apply to all objects using the behavior.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `NavMeshPathfinding::NavMeshPathfindingObstacleBehavior::AreaTopBound`.

**Cell size**  
Compare the cell size for obstacle collision mask rasterization. While an object is needed, this will apply to all objects using the behavior.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `NavMeshPathfinding::NavMeshPathfindingObstacleBehavior::CellSize`.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.NavMeshPathfindingObstacleBehavior::AreaBottomBound()` | Return the area bottom bound. The bottom bound of the area where objects can go in the scene (default to the game resolution). While an object is needed, this will apply to all objects using the behavior. ||
| `Object.NavMeshPathfindingObstacleBehavior::AreaLeftBound()` | Return the area left bound. The left bound of the area where objects can go in the scene. While an object is needed, this will apply to all objects using the behavior. ||
| `Object.NavMeshPathfindingObstacleBehavior::AreaRightBound()` | Return the area right bound. The right bound of the area where objects can go in the scene (default to the game resolution). While an object is needed, this will apply to all objects using the behavior. ||
| `Object.NavMeshPathfindingObstacleBehavior::AreaTopBound()` | Return the area top bound. The top bound of the area where objects can go in the scene. While an object is needed, this will apply to all objects using the behavior. ||
| `Object.NavMeshPathfindingObstacleBehavior::CellSize()` | Return the cell size for obstacle collision mask rasterization. While an object is needed, this will apply to all objects using the behavior. ||


---

*This page is an auto-generated reference page about the **Navigation mesh pathfinding (experimental)** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).