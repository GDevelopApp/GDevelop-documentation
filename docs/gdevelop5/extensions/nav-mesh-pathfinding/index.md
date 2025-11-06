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

### Behavior properties

- **Angle offset** (🔢 Number, Angle). Set to 90°, "Walk0" becomes the animation for down. Default value is `0`.
- **Animation name** (string). Animations must be called "Walk0", "Walk1"... for left, down... Default value is `Walk`.
- **Number of directions** (🔢 Number, Dimensionless). Default value is `8`.
- **Scale animation according to speed** (🔘 Boolean). Default value is `true`.

??? quote "See internal technical details"


    - **Angle offset** is stored as `AngleOffset` (Number). Unit is DegreeAngle. Default value is `0`.
    > This behavior must be used on an object also having a behavior with type "AnimatableCapability::AnimatableBehavior". This is stored on property `Animation`.

    - **Animation name** is stored as `AnimationName` (String). Default value is `Walk`.
    - **Number of directions** is stored as `DirectionCount` (Number). Unit is Dimensionless. Default value is `8`.
    - **Scale animation according to speed** is stored as `IsScalingAnimation` (Boolean). Default value is `true`.
    > This behavior must be used on an object also having a behavior with type "NavMeshPathfinding::NavMeshPathfindingBehavior". This is stored on property `NavMeshPathfinding`.


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
    - Parameter 2: relationaloperator
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

### Behavior properties

- **Acceleration** (🔢 Number, Acceleration). Default value is `400`.
- **Angle offset** (🔢 Number, Angle). Default value is `0`.
- **Rotation speed** (🔢 Number, Angular speed). Default value is `180`.
- **Collision shape** (choice, one of: "Bounding disk", "Dot at center"). Default value is `Bounding disk`.
- **Extra border size** (🔢 Number, Distance). Default value is `0`.
- **Maximum speed** (🔢 Number, Speed). Default value is `200`.
- **Rotate object** (🔘 Boolean). Default value is `false`.

??? quote "See internal technical details"


    - **Acceleration** is stored as `Acceleration` (Number). Unit is PixelAcceleration. Default value is `400`.
    - **Angle offset** is stored as `AngleOffset` (Number). Unit is DegreeAngle. Default value is `0`.
    - **Rotation speed** is stored as `AngularMaxSpeed` (Number). Unit is AngularSpeed. Default value is `180`.
    - **Collision shape** is stored as `CollisionShape` (Choice). Default value is `Bounding disk`.
    - **Extra border size** is stored as `ExtraBorder` (Number). Unit is Pixel. Default value is `0`.
    - **Maximum speed** is stored as `MaxSpeed` (Number). Unit is PixelSpeed. Default value is `200`.
    - **Rotate object** is stored as `RotateObject` (Boolean). Default value is `false`.

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
    - Parameter 3 (stringwithselector): Value (one of: "Bounding disk", "Dot at center")

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
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `NavMeshPathfinding::NavMeshPathfindingBehavior::Acceleration`.

**Angle offset**  
Compare the angle offset of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `NavMeshPathfinding::NavMeshPathfindingBehavior::AngleOffset`.

**Rotation speed**  
Compare the rotation speed of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `NavMeshPathfinding::NavMeshPathfindingBehavior::AngularMaxSpeed`.

**Collision shape**  
Compare the collision shape of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (stringwithselector): Value to compare (one of: "Bounding disk", "Dot at center")

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
    - Parameter 2: relationaloperator
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
    - Parameter 2: relationaloperator
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
    - Parameter 2: relationaloperator
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

### Behavior shared properties

- **Area bottom bound** (🔢 Number, Distance). The bottom bound of the area where objects can go in the scene (default to the game resolution). Default value is `0`.
- **Area left bound** (🔢 Number, Distance). The left bound of the area where objects can go in the scene. Default value is `0`.
- **Area right bound** (🔢 Number, Distance). The right bound of the area where objects can go in the scene (default to the game resolution). Default value is `0`.
- **Area top bound** (🔢 Number, Distance). The top bound of the area where objects can go in the scene. Default value is `0`.
- **Cell size** (🔢 Number, Distance). Cell size for obstacle collision mask rasterization. Default value is `10`.
- **Viewpoint** (choice, one of: "Top-Down", "Isometry 2:1 (26.565°)", "True Isometry (30°)"). Default value is `Top-Down`.

??? quote "See internal technical details"


    - **Area bottom bound** is stored as `AreaBottomBound` (Number). Unit is Pixel. Default value is `0`.
    - **Area left bound** is stored as `AreaLeftBound` (Number). Unit is Pixel. Default value is `0`.
    - **Area right bound** is stored as `AreaRightBound` (Number). Unit is Pixel. Default value is `0`.
    - **Area top bound** is stored as `AreaTopBound` (Number). Unit is Pixel. Default value is `0`.
    - **Cell size** is stored as `CellSize` (Number). Unit is Pixel. Default value is `10`.
    - **Viewpoint** is stored as `Viewpoint` (Choice). Default value is `Top-Down`.

### Behavior conditions

**Area bottom bound**  
Compare the area bottom bound. The bottom bound of the area where objects can go in the scene (default to the game resolution). While an object is needed, this will apply to all objects using the behavior.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `NavMeshPathfinding::NavMeshPathfindingObstacleBehavior::AreaBottomBound`.

**Area left bound**  
Compare the area left bound. The left bound of the area where objects can go in the scene. While an object is needed, this will apply to all objects using the behavior.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `NavMeshPathfinding::NavMeshPathfindingObstacleBehavior::AreaLeftBound`.

**Area right bound**  
Compare the area right bound. The right bound of the area where objects can go in the scene (default to the game resolution). While an object is needed, this will apply to all objects using the behavior.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `NavMeshPathfinding::NavMeshPathfindingObstacleBehavior::AreaRightBound`.

**Area top bound**  
Compare the area top bound. The top bound of the area where objects can go in the scene. While an object is needed, this will apply to all objects using the behavior.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `NavMeshPathfinding::NavMeshPathfindingObstacleBehavior::AreaTopBound`.

**Cell size**  
Compare the cell size for obstacle collision mask rasterization. While an object is needed, this will apply to all objects using the behavior.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
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

*This page is an auto-generated reference page about the **Navigation mesh pathfinding (experimental)** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).