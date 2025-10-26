# Maze Generator

<img src="https://resources.gdevelop-app.com/assets/Icons/Line Hero Pack/Master/SVG/Graphic Design/Graphic Design_grid.svg" class="extension-icon"></img>
Create a maze made of a grid of rectangular cells. Walls are created randomly so that every cell is reachable through a random path through the maze. 

**Authors and contributors** to this experimental extension: [Luxon5](https://gd.games/Luxon5).

!!! warning
    This is an extension made by a community member and it only got through a
    light review by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of fully reviewed extensions.

---

Provides functions for generating mazes. 

Use **GenerateMaze** action to set up a maze with a particular size and give it a name (MazeID). The maze is stored in scene variables, to be used with other functions by specifying the MazeID. 

There are three other actions that create sprite objects you can use to place the maze into the scene:

**CreateMazeFloorObjects** : create tiles for each cell in the maze
**CreateMazeWallObjects**: create objects between each cell. Useful for walls
**CreateMazeCornerObjects**: create objects on the point between 4 cell corners. Can be useful to improve maze visuals

There are plenty of other helper functions for getting/setting maze properites or get helpful information. In particular:

**CheckMazeWall**: a condition to use in event sheet to test which walls exist for a cell
**FindMazePath**: creates a scene variable array containing a sequence of directions to go from one cell to another cell

Finally, there is a **MazeObject** behavior that can be attached to wall or floor objects to provide some additional helper conditions, expressions, and actions. See the example gdevelop file in the help URL for examples of its use. 


[Read more...](https://luxon5.itch.io/gdevelop-maze-extension-demo)

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Add a maze wall**  
Add a wall in a particular direction for a maze cell.

??? quote "See parameters & details"

    - Parameter 1 (string): Maze ID
    - Parameter 2 (🔢 Number): Row Number
    - Parameter 3 (🔢 Number): Column Number
    - Parameter 4 (🔤 String): Wall Direction (one of: "LeftWall", "RightWall", "UpWall", "DownWall")

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `MazeGenerator::AddMazeWall`.

**Create Maze Corner Objects**  
For a previously created maze, create maze corner objects at the intersection point of maze cells.

??? quote "See parameters & details"

    - Parameter 1 (string): MazeID chosen during maze creation
    - Parameter 2 (👾 Object): Corner Object
    - Parameter 3 (string): Layer
    - Parameter 4 (🔢 Number): Z Order
    - Parameter 5 (🔢 Number): Resize Width of Corner (Optional)
    - Parameter 6 (🔢 Number): Resize Height of Corner (Optional)

    > Technical note: parameters 0, 7 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `MazeGenerator::CreateMazeCornerObjects`.

**Create Maze Floor Objects**  
For a previously created maze, create maze floor objects that will tile the cells of the maze.

??? quote "See parameters & details"

    - Parameter 1 (string): MazeID chosen during maze creation
    - Parameter 2 (👾 Object): Floor Object
    - Parameter 3 (string): Layer
    - Parameter 4 (🔢 Number): Z Order
    - Parameter 5 (🔢 Number): Resize Width (optional)
    - Parameter 6 (🔢 Number): Resize Height (optional)

    > Technical note: parameters 0, 7 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `MazeGenerator::CreateMazeFloorObjects`.

**Create Maze Wall Objects**  
For a previously created maze, create maze wall objects along the edges of the cells of the maze.

??? quote "See parameters & details"

    - Parameter 1 (string): MazeID chosen during maze creation
    - Parameter 2 (👾 Object): Horizontal Wall Object
    - Parameter 3 (👾 Object): Vertical Wall Object
    - Parameter 4 (string): Layer
    - Parameter 5 (🔢 Number): Z Order
    - Parameter 6 (🔢 Number): Resize Width of Horizontal Wall (Optional)
    - Parameter 7 (🔢 Number): Resize Height of Horizontal Wall (Optional)
    - Parameter 8 (🔢 Number): Resize Width of Vertical Wall (Optional)
    - Parameter 9 (🔢 Number): Resize Height of Vertical Wall (Optional)

    > Technical note: parameters 0, 10 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `MazeGenerator::CreateMazeWallObjects`.

**Find Maze Path**  
Finds a path through a maze between two cells, storing the result in a scene variable array.

??? quote "See parameters & details"

    - Parameter 1 (string): MazeID
    - Parameter 2 (🔢 Number): Start Row
    - Parameter 3 (🔢 Number): Start Column
    - Parameter 4 (🔢 Number): End Row
    - Parameter 5 (🔢 Number): End Column
    - Parameter 6 (string): Path Name
      This will be the name of the child array stored in the __MazeGeneratorPath scene structure variable

    > Technical note: parameters 0, 7 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `MazeGenerator::FindMazePath`.

**Generate a maze**  
Specify the overall size of a maze, and the size of the tile "cells" inside the maze. Walls are randomly generated to form the maze. The maze is stored in memory, and can be referenced using a name called MazeID that is chosen here. The maze generator extension comes with other actions that reference this mazeID, which can be used to create actual wall and floor objects to place the maze into the scene. 

??? quote "See parameters & details"

    - Parameter 1 (🔢 Number): Top-left point, X coordinate of maze in scene
    - Parameter 2 (🔢 Number): Top-left point, Y coordinate of maze in scene
    - Parameter 3 (🔢 Number): Width of whole maze (in pixels)
    - Parameter 4 (🔢 Number): Height of whole maze (in pixels)
    - Parameter 5 (🔢 Number): Cell Width (in pixels)
    - Parameter 6 (🔢 Number): Cell Height (in pixels)
    - Parameter 7 (string): Custom name for new maze (MazeID)

    > Technical note: parameters 0, 8 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `MazeGenerator::GenerateMaze`.

**Remove a maze wall**  
Remove a wall in a particular direction for a maze cell.

??? quote "See parameters & details"

    - Parameter 1 (string): Maze ID
    - Parameter 2 (🔢 Number): Row Number
    - Parameter 3 (🔢 Number): Column Number
    - Parameter 4 (string): Wall Direction

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `MazeGenerator::RemoveMazeWall`.

## Conditions

**Cell within a maze has a wall**  
Chosen cell within a maze has a wall in a particular direction.

??? quote "See parameters & details"

    - Parameter 1 (string): Maze ID
    - Parameter 2 (🔢 Number): Row Number
    - Parameter 3 (🔢 Number): Column Number
    - Parameter 4 (🔤 String): Wall Direction (one of: "LeftWall", "RightWall", "UpWall", "DownWall")

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `MazeGenerator::CheckMazeWall`.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `MazeGenerator::MazeCellDepth(string, number, number)` | Returns how many cells away from a cell with at least three exits. ||
| | _string_ | MazeID |
| | _🔢 Number_ | Row Number |
| | _🔢 Number_ | Column Number |
| `MazeGenerator::MazeCellHeight(string)` | Height of maze cells. ||
| | _string_ | Maze ID |
| `MazeGenerator::MazeCellWidth(string)` | Width of maze cells. ||
| | _string_ | Maze ID |
| `MazeGenerator::MazeHeight(string)` | Height of whole maze. ||
| | _string_ | Maze ID |
| `MazeGenerator::MazeNumCells(string)` | The number of cells (floor tiles) inside of a maze. ||
| | _string_ | Maze ID |
| `MazeGenerator::MazeNumColumns(string)` | The number of columns in a maze. ||
| | _string_ | Maze ID |
| `MazeGenerator::MazeNumRows(string)` | The number of rows in a maze. ||
| | _string_ | Maze ID |
| `MazeGenerator::MazeNumWalls(string, number, number)` | The number of directions with walls. ||
| | _string_ | MazeID chosen during maze creation |
| | _🔢 Number_ | Row Number |
| | _🔢 Number_ | Column Number |
| `MazeGenerator::MazeWidth(string)` | Width of whole maze. ||
| | _string_ | Maze ID |
| `MazeGenerator::MazeX(string)` | X position of maze. ||
| | _string_ | Maze ID |
| `MazeGenerator::MazeY(string)` | Y position of maze. ||
| | _string_ | Maze ID |

## Maze Object 

This behavior adds some helper functions to be used with Maze Generator extension, that can be used in the event sheet. Search for "Maze" in the events editor to find them after attaching this to an object. Objects with this behavior need to be used with the "CreateMazeFloorObject", "CreateMazeWallObjects" or "CreateCornerObjects" functions of the maze generator in order to benefit from the helper functions. For example, "CheckMazeObjecetLocation" condition filters objects from a row number and column number of a maze. 

### Behavior actions

**Delete Maze Object**  
Delete the Maze Object, also updating the corresponding maze scene variables.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `MazeGenerator::MazeObject::DeleteMazeObject`.

### Behavior conditions

**Maze object has particular row and column numbers**  
Maze object is in a certain row and column of a maze.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Row Number
    - Parameter 3 (🔢 Number): Column Number

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `MazeGenerator::MazeObject::CheckMazeObjectLocation`.

**Check mazeID of object**  
Check if maze object belongs to a certain maze, by the MazeID.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (string): MazeID of maze, set during maze creation

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `MazeGenerator::MazeObject::CheckMazeObjectMazeID`.

**Check Wall Direction of Maze Object**  
Check if maze object is a wall in a particular direction.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 String): Wall Direction of Maze Object (one of: "LeftWall", "RightWall", "UpWall", "DownWall")

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `MazeGenerator::MazeObject::CheckMazeObjectWallDirection`.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.MazeObject::MazeObjectColumn()` | Return the row number of the maze object as a number. ||
| `Object.MazeObject::MazeObjectMazeID()` | Return the maze ID of the maze object as a string. ||
| `Object.MazeObject::MazeObjectRow()` | Return the row number of the maze object as a number. ||
| `Object.MazeObject::MazeObjectWallDirection()` | Return the wall direction of the maze object as a string (only exists for wall objects). ||


---

*This page is an auto-generated reference page about the **Maze Generator** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).