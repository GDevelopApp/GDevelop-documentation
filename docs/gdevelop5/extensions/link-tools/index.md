# Linked Objects Tools

<img src="https://resources.gdevelop-app.com/assets/Icons/graph-outline.svg" class="extension-icon"></img>
Conditions to use Linked Objects as a graph and a path finding movement behavior.

**Authors and contributors** to this community extension: [D8H](https://gd.games/D8H).

---

This provides:

* "Can reach through links" conditions, useful to check if an object is linked to another through one or more other linked objects.
* a path finding movement behavior that uses objects links (instead of obstacles for the other behavior)

For instance, it can be helpful for grid-based games like:

* Match-3 ([open the project online](https://editor.gdevelop.io/?project=example://bim-bam))
* Tactical ([open the project online](https://editor.gdevelop.io/?project=example://tactical-game-grid-movement))
* City builders ([open the project online](https://editor.gdevelop.io/?project=example://city-builder))
* Point and click (bypass obstacles with a predetermined polygonal chain)

[Read more...](/gdevelop5/all-features/extensions/linked-objects-tools)

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Link to neighbors on a hexagonal grid**  
Link to neighbors on a hexagonal grid.

**Link to neighbors on an isometric grid**  
Link to neighbors on an isometric grid.

**Link to neighbors on a rectangular grid**  
Link to neighbors on a rectangular grid.

## Conditions

**Can reach**  
Can reach through links.

**Can reach with links limited by length**  
Can reach through a given number of links.

**Can reach with links limited by cost**  
Can reach through a given cost sum.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `LinkTools::CostSum(object)` | Cost sum. ||
| | _👾 Object_ | Object |

## Link path finding 

The object will move from one object instance to another according to how they are linked to one another to reach a targeted object. 

### Behavior actions

**Forget the path**  
Forget the path.

**Move to a position**  
Move the object to a position.

**Acceleration**  
Change the acceleration of the object.

**Angle offset**  
Change the rotation offset applied when moving the object.

**Rotate the object**  
Enable or disable rotation of the object on the path.

**Rotation speed**  
Change the rotation speed of the object.

**Maximum speed**  
Change the maximum speed of the object.

### Behavior conditions

**Acceleration**  
Compare the acceleration of the object.

**Angle offset**  
Compare the rotation offset applied when moving the object.

**Destination reached**  
Check if the destination was reached.

**Is at a node**  
Check if the object position is the on a path node.

**Is moving**  
Check if the object is moving.

**Path found**  
Check if a path has been found.

**Object rotated**  
Check if the object is rotated when traveling on its path.

**Rotation speed**  
Compare the rotation speed of the object.

**Maximum speed**  
Compare the maximum speed of the object.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.LinkPathFinding::Acceleration()` | Return the acceleration of the object. ||
| `Object.LinkPathFinding::AngleOffset()` | Return the rotation offset applied when moving the object. ||
| `Object.LinkPathFinding::DestinationX()` | Destination X position. ||
| `Object.LinkPathFinding::DestinationY()` | Destination Y position. ||
| `Object.LinkPathFinding::NextNodeIndex()` | Next waypoint index. ||
| `Object.LinkPathFinding::NextNodeX()` | Next waypoint X position. ||
| `Object.LinkPathFinding::NextNodeY()` | Next waypoint Y position. ||
| `Object.LinkPathFinding::NodeCount()` | Get the number of waypoints on the path. ||
| `Object.LinkPathFinding::NodeX(number)` | Waypoint X position. ||
| | _🔢 Number_ | Waypoint index |
| `Object.LinkPathFinding::NodeY(number)` | Waypoint X position. ||
| | _🔢 Number_ | Waypoint index |
| `Object.LinkPathFinding::RotationSpeed()` | Return the rotation speed of the object. ||
| `Object.LinkPathFinding::Speed()` | Speed of the object on the path. ||
| `Object.LinkPathFinding::SpeedMax()` | Return the maximum speed of the object. ||

---

*This page is an auto-generated reference page about the **Linked Objects Tools** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).