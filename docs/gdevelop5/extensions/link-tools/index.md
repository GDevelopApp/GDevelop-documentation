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

[Read more...](https://wiki.gdevelop.io/gdevelop5/all-features/extensions/linked-objects-tools)

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
| | _object_ | Object |

## Link path finding 

The object will move from one object instance to another according to how they are linked to one another to reach a targeted object. 

### Behavior actions

**Forget the path**  
Forget the path.

**Move to a position**  
Move the object to a position.

### Behavior conditions

**Destination reached**  
Check if the destination was reached.

**Is at a node**  
Check if the object position is the on a path node.

**Is moving**  
Check if the object is moving.

**Path found**  
Check if a path has been found.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.LinkPathFinding::DestinationX()` | Destination X position. ||
| `Object.LinkPathFinding::DestinationY()` | Destination Y position. ||
| `Object.LinkPathFinding::NextNodeIndex()` | Next waypoint index. ||
| `Object.LinkPathFinding::NextNodeX()` | Next waypoint X position. ||
| `Object.LinkPathFinding::NextNodeY()` | Next waypoint Y position. ||
| `Object.LinkPathFinding::NodeCount()` | Get the number of waypoints on the path. ||
| `Object.LinkPathFinding::NodeX(number)` | Waypoint X position. ||
| | _number_ | Waypoint index |
| `Object.LinkPathFinding::NodeY(number)` | Waypoint X position. ||
| | _number_ | Waypoint index |
| `Object.LinkPathFinding::Speed()` | Speed of the object on the path. ||

---

*This page is an auto-generated reference page about the **Linked Objects Tools** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).