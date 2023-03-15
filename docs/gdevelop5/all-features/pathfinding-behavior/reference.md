---
title: Pathfinding behavior
---
# Pathfinding behavior

Pathfinding allows to compute an efficient path for objects, avoiding obstacles on the way. [Read more explanations about it.](https://wiki.gdevelop.io/gdevelop5/behaviors/pathfinding)



## Pathfinding 

Move objects to a target while avoiding all objects that are flagged as obstacles. 

### Behavior actions

**Acceleration**  
Change the acceleration when moving the object

**Diagonal movement**  
Allow or restrict diagonal movement on the path

**Rotation offset**  
Change the rotation offset applied when moving the object

**Angular maximum speed**  
Change the maximum angular speed when moving the object

**Height of the cells**  
Change the height of the cells of the virtual grid.

**Width of the cells**  
Change the width of the cells of the virtual grid.

**Extra border**  
Change the size of the extra border applied to the object when planning a path

**Maximum speed**  
Change the maximum speed when moving the object

**Grid X offset**  
Change X offset of the virtual grid.

**Grid Y offset**  
Change Y offset of the virtual grid.

**Rotate the object**  
Enable or disable rotation of the object on the path

**Move to a position**  
Move the object to a position

**Speed**  
Change the speed of the object on the path

### Behavior conditions

**Acceleration**  
Compare the acceleration when moving the object

**Rotation offset**  
Compare the rotation offset when moving the object

**Angular maximum speed**  
Compare the maximum angular speed when moving the object

**Height of the virtual grid**  
Compare the height of the cells of the virtual grid.

**Width of the virtual grid**  
Compare the width of the cells of the virtual grid.

**Destination reached**  
Check if the destination was reached.

**Diagonal movement**  
Check if the object is allowed to move diagonally on the path

**Extra border**  
Compare the size of the extra border applied to the object when planning a path

**Maximum speed**  
Compare the maximum speed when moving the object

**Object rotated**  
Check if the object is rotated when traveling on its path.

**Path found**  
Check if a path has been found.

**Grid X offset**  
Compare X offset of the virtual grid.

**Grid Y offset**  
Compare Y offset of the virtual grid.

**Angle of movement on its path**  
Compare the angle of movement of an object on its path.

**Speed on its path**  
Compare the speed of the object on its path.

### Behavior expressions

^ Expression ^ Description ^  ^
| `Object.Pathfinding::Acceleration()` | Acceleration of the object on the path ||
| `Object.Pathfinding::AngleOffset()` | Rotation offset applied the object on the path ||
| `Object.Pathfinding::AngularMaxSpeed()` | Angular maximum speed of the object on the path ||
| `Object.Pathfinding::CellHeight()` | Height of the virtual grid ||
| `Object.Pathfinding::CellWidth()` | Width of the virtual grid ||
| `Object.Pathfinding::DestinationX()` | Destination X position ||
| `Object.Pathfinding::DestinationY()` | Destination Y position ||
| `Object.Pathfinding::ExtraBorder()` | Extra border applied the object on the path ||
| `Object.Pathfinding::GetNodeX(number)` | Get next waypoint X position ||
|:::| _number_ | Node index (start at 0!) |
| `Object.Pathfinding::GetNodeY(number)` | Get next waypoint Y position ||
|:::| _number_ | Node index (start at 0!) |
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

**Should object be impassable?**  
Decide if the object is an impassable obstacle

### Behavior conditions

**Cost**  
Compare the cost of going through the object

**Is object impassable?**  
Check if the obstacle is impassable

### Behavior expressions

^ Expression ^ Description ^  ^
| `Object.PathfindingObstacle::Cost()` | Obstacle cost ||

---
*This page is an auto-generated reference page about the **Pathfinding behavior** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).