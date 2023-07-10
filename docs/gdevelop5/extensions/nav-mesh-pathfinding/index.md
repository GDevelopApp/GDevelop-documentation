# Navigation mesh pathfinding (experimental)

<img src="https://resources.gdevelop-app.com/assets/Icons/Line Hero Pack/Master/SVG/Maps and Navigation/Maps and Navigation_map_find_search.svg" class="extension-icon"></img>
Pathfinding allows to compute an efficient path for objects, avoiding obstacles on the way.

**Authors and contributors** to this community extension: [D8H](https://gd.games/D8H).

!!! warning
    This is an extension made by a community member — but not reviewed
    by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of official extensions. In case of
    doubt, contact the author to know more about what the extension
    does or inspect its content before using it.

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

**Scale animation according to speed**  
Change whether the animation is scaled according to speed or not.

### Behavior conditions

**Animation name**  
Compare the animation name of the object.

**Scale animation according to speed**  
Check if the animation is scaled according to speed.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.NavMeshPathfindingAnimator::AnimationName()` | Return the animation name of the object. ||

## Navigation mesh pathfinding (experimental) 

Move objects to a target in straight lines while avoiding all objects that are flagged as obstacles. 

### Behavior actions

**Draw navigation mesh**  
Draw the navigation mesh used for the object.

**Acceleration**  
Change the acceleration of the object.

**Angle offset**  
Change the angle offset of the object.

**Rotation speed**  
Change the rotation speed of the object.

**Collision shape**  
Change the collision shape of the object.

**Move to a position**  
Move the object to a position.

**Extra border size**  
Change the extra border size of the object.

**Maximum speed**  
Change the maximum speed of the object.

**Rotate object**  
Enable or disable the rotation of the object when following its path.

### Behavior conditions

**Acceleration**  
Compare the acceleration of the object.

**Angle offset**  
Compare the angle offset of the object.

**Rotation speed**  
Compare the rotation speed of the object.

**Collision shape**  
Compare the collision shape of the object.

**Destination reached**  
Check if the destination was reached.

**Extra border size**  
Compare the extra border size of the object.

**Is moving**  
Check if the object is moving on a path.

**Maximum speed**  
Compare the maximum speed of the object.

**Angle of movement on its path**  
Compare the angle of movement of an object on its path.

**Path found**  
Check if a path has been found.

**Rotate object**  
Check if the object should rotate when following its path.

**Speed on the path**  
Compare the number of waypoints on the path.

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
| | _number_ | Node index (start at 0) |
| `Object.NavMeshPathfindingBehavior::NodeY(number)` | Return a waypoint Y position. ||
| | _number_ | Node index (start at 0) |
| `Object.NavMeshPathfindingBehavior::PreviousNodeX()` | Return the previous waypoint X position. ||
| `Object.NavMeshPathfindingBehavior::PreviousNodeY()` | Return the previous waypoint Y position. ||
| `Object.NavMeshPathfindingBehavior::Speed()` | Return the number of waypoints on the path. ||

## Obstacle for navigation mesh pathfinding (experimental) 

Flag objects as being an obstacle for pathfinding. 

### Behavior actions

**Area bottom bound**  
Change the area bottom bound. The bottom bound of the area where objects can go in the scene (default to the game resolution). While an object is needed, this will apply to all objects using the behavior.

**Area left bound**  
Change the area left bound. The left bound of the area where objects can go in the scene. While an object is needed, this will apply to all objects using the behavior.

**Area right bound**  
Change the area right bound. The right bound of the area where objects can go in the scene (default to the game resolution). While an object is needed, this will apply to all objects using the behavior.

**Area top bound**  
Change the area top bound. The top bound of the area where objects can go in the scene. While an object is needed, this will apply to all objects using the behavior.

**Cell size**  
Change the cell size for obstacle collision mask rasterization. While an object is needed, this will apply to all objects using the behavior.

### Behavior conditions

**Area bottom bound**  
Compare the area bottom bound. The bottom bound of the area where objects can go in the scene (default to the game resolution). While an object is needed, this will apply to all objects using the behavior.

**Area left bound**  
Compare the area left bound. The left bound of the area where objects can go in the scene. While an object is needed, this will apply to all objects using the behavior.

**Area right bound**  
Compare the area right bound. The right bound of the area where objects can go in the scene (default to the game resolution). While an object is needed, this will apply to all objects using the behavior.

**Area top bound**  
Compare the area top bound. The top bound of the area where objects can go in the scene. While an object is needed, this will apply to all objects using the behavior.

**Cell size**  
Compare the cell size for obstacle collision mask rasterization. While an object is needed, this will apply to all objects using the behavior.

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