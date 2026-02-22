# Linked Objects Tools

<img src="https://resources.gdevelop-app.com/assets/Icons/graph-outline.svg" class="extension-icon"></img>
Use linked objects as graph nodes. Pathfinding and neighbor traversal on links.

**Authors and contributors** to this experimental extension: [D8H](https://gd.games/D8H).

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

??? quote "See parameters & details"

    - Parameter 1: 👾 Object
    - Parameter 2 (👾 Object): Neighbor
      The 2 objects can't be the same.
    - Parameter 3 (🔢 Number): Cell width
    - Parameter 4 (🔢 Number): Cell height

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `LinkTools::LinkHexagonalNeighbors`.

**Link to neighbors on an isometric grid**  
Link to neighbors on an isometric grid.

??? quote "See parameters & details"

    - Parameter 1: 👾 Object
    - Parameter 2 (👾 Object): Neighbor
      The 2 objects can't be the same.
    - Parameter 3 (🔢 Number): Cell width
    - Parameter 4 (🔢 Number): Cell height
    - Parameter 5 (❓ Yes or No): Allows diagonals

    > Technical note: parameters 0, 6 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `LinkTools::LinkIsometricRectangularNeighbors`.

**Link to neighbors on a rectangular grid**  
Link to neighbors on a rectangular grid.

??? quote "See parameters & details"

    - Parameter 1: 👾 Object
    - Parameter 2 (👾 Object): Neighbor
      The 2 objects can't be the same.
    - Parameter 3 (🔢 Number): Cell width
    - Parameter 4 (🔢 Number): Cell height
    - Parameter 5 (❓ Yes or No): Allows diagonals

    > Technical note: parameters 0, 6 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `LinkTools::LinkRectangularNeighbors`.


## Conditions

**Can reach**  
Can reach through links.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Pick these objects...
    - Parameter 2 (👾 Object): if they can reach this object

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `LinkTools::CanReach`.

**Can reach with links limited by length**  
Can reach through a given number of links.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Pick these objects...
    - Parameter 2 (👾 Object): if they can reach this object
    - Parameter 3 (🔢 Number): Maximum link length
    - Parameter 4 (🔤 String): Cost class
      Leave empty to make everything crossable with cost = 1. It looks in the variable children of linktools_Cost. No child means not crossable, the cost can be 0 or 1.

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `LinkTools::CanReachWithMaxLength`.

**Can reach with links limited by cost**  
Can reach through a given cost sum.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Pick these objects...
    - Parameter 2 (👾 Object): if they can reach this object
    - Parameter 3 (🔤 String): Initial length variable
      Start to 0 if left empty
    - Parameter 4 (🔢 Number): Maximum cost
    - Parameter 5 (🔤 String): Cost class
      Leave empty to make everything crossable with cost = 1. It looks in the variable children of linktools_Cost. No child means not crossable, the cost must be positive.
    - Parameter 6 (🔢 Number): Maximum depth
    - Parameter 7 (❓ Yes or No): Ignore first node cost

    > Technical note: parameters 0, 8 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `LinkTools::CanReachWithMaxWeight`.


## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `LinkTools::CostSum(object)` | Cost sum. ||
| | _👾 Object_ | Object |

## Link path finding 

The object will move from one object instance to another according to how they are linked to one another to reach a targeted object. 

### Behavior properties

- **Acceleration** (🔢 Number, Acceleration). Default value is `400`.
- **Angle offset** (🔢 Number, Angle). Default value is `0`.
- **Rotate object** (🔘 Boolean). Default value is `true`.
- **Rotation speed** (🔢 Number, Angular speed). Default value is `180`.
- **Maximum speed** (🔢 Number, Speed). Default value is `200`.

??? quote "See internal technical details"


    - **Acceleration** is stored as `Acceleration` (Number). Unit is PixelAcceleration. Default value is `400`.
    - **Angle offset** is stored as `AngleOffset` (Number). Unit is DegreeAngle. Default value is `0`.
    - **Rotate object** is stored as `Rotate` (Boolean). Default value is `true`.
    - **Rotation speed** is stored as `RotationSpeed` (Number). Unit is AngularSpeed. Default value is `180`.
    - **Maximum speed** is stored as `SpeedMax` (Number). Unit is PixelSpeed. Default value is `200`.

### Behavior actions

**Forget the path**  
Forget the path.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `LinkTools::LinkPathFinding::ForgetPath`.

**Move to a position**  
Move the object to a position.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (👾 Object): Crossable objects
    - Parameter 3 (👾 Object): Destination objects
    - Parameter 4 (🔤 String): Cost class

    > Technical note: parameter 5 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `LinkTools::LinkPathFinding::MoveTo`.

**Acceleration**  
Change the acceleration of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `LinkTools::LinkPathFinding::SetAcceleration`.

**Angle offset**  
Change the rotation offset applied when moving the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `LinkTools::LinkPathFinding::SetAngleOffset`.

**Rotate the object**  
Enable or disable rotation of the object on the path.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): Rotate

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `LinkTools::LinkPathFinding::SetRotate`.

**Rotation speed**  
Change the rotation speed of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `LinkTools::LinkPathFinding::SetRotationSpeed`.

**Maximum speed**  
Change the maximum speed of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `LinkTools::LinkPathFinding::SetSpeedMax`.


### Behavior conditions

**Acceleration**  
Compare the acceleration of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `LinkTools::LinkPathFinding::Acceleration`.

**Angle offset**  
Compare the rotation offset applied when moving the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `LinkTools::LinkPathFinding::AngleOffset`.

**Destination reached**  
Check if the destination was reached.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `LinkTools::LinkPathFinding::HasReachedDestination`.

**Is at a node**  
Check if the object position is the on a path node.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `LinkTools::LinkPathFinding::HasReachedNode`.

**Is moving**  
Check if the object is moving.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `LinkTools::LinkPathFinding::IsMoving`.

**Path found**  
Check if a path has been found.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `LinkTools::LinkPathFinding::PathFound`.

**Object rotated**  
Check if the object is rotated when traveling on its path.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `LinkTools::LinkPathFinding::Rotate`.

**Rotation speed**  
Compare the rotation speed of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `LinkTools::LinkPathFinding::RotationSpeed`.

**Maximum speed**  
Compare the maximum speed of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `LinkTools::LinkPathFinding::SpeedMax`.


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

*This page is an auto-generated reference page about the **Linked Objects Tools** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).