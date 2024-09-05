# Maze Generator

<img src="https://resources.gdevelop-app.com/assets/Icons/Line Hero Pack/Master/SVG/Graphic Design/Graphic Design_grid.svg" class="extension-icon"></img>
Create a maze made of a grid of rectangular cells. Walls are created randomly so that every cell is reachable through a random path through the maze. 

**Authors and contributors** to this community extension: [Luxon5](https://gd.games/Luxon5).

!!! warning
    This is an extension made by a community member — but not reviewed
    by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of official extensions. In case of
    doubt, contact the author to know more about what the extension
    does or inspect its content before using it.

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

**Create Maze Corner Objects**  
For a previously created maze, create maze corner objects at the intersection point of maze cells.

**Create Maze Floor Objects**  
For a previously created maze, create maze floor objects that will tile the cells of the maze.

**Create Maze Wall Objects**  
For a previously created maze, create maze wall objects along the edges of the cells of the maze.

**Find Maze Path**  
Finds a path through a maze between two cells, storing the result in a scene variable array.

**Generate a maze**  
Specify the overall size of a maze, and the size of the tile "cells" inside the maze. Walls are randomly generated to form the maze. The maze is stored in memory, and can be referenced using a name called MazeID that is chosen here. The maze generator extension comes with other actions that reference this mazeID, which can be used to create actual wall and floor objects to place the maze into the scene. 

**Remove a maze wall**  
Remove a wall in a particular direction for a maze cell.

## Conditions

**Cell within a maze has a wall**  
Chosen cell within a maze has a wall in a particular direction.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `MazeGenerator::MazeCellDepth()` | Returns how many cells away from a cell with at least three exits. ||
| `MazeGenerator::MazeCellHeight()` | Height of maze cells. ||
| `MazeGenerator::MazeCellWidth()` | Width of maze cells. ||
| `MazeGenerator::MazeHeight()` | Height of whole maze. ||
| `MazeGenerator::MazeNumCells()` | The number of cells (floor tiles) inside of a maze. ||
| `MazeGenerator::MazeNumColumns()` | The number of columns in a maze. ||
| `MazeGenerator::MazeNumRows()` | The number of rows in a maze. ||
| `MazeGenerator::MazeNumWalls()` | The number of directions with walls. ||
| `MazeGenerator::MazeWidth()` | Width of whole maze. ||
| `MazeGenerator::MazeX()` | X position of maze. ||
| `MazeGenerator::MazeY()` | Y position of maze. ||

## Maze Object 

This behavior adds some helper functions to be used with Maze Generator extension, that can be used in the event sheet. Search for "Maze" in the events editor to find them after attaching this to an object. Objects with this behavior need to be used with the "CreateMazeFloorObject", "CreateMazeWallObjects" or "CreateCornerObjects" functions of the maze generator in order to benefit from the helper functions. For example, "CheckMazeObjecetLocation" condition filters objects from a row number and column number of a maze. 

### Behavior actions

**Delete Maze Object**  
Delete the Maze Object, also updating the corresponding maze scene variables.

### Behavior conditions

**Maze object has particular row and column numbers**  
Maze object is in a certain row and column of a maze.

**Check mazeID of object**  
Check if maze object belongs to a certain maze, by the MazeID.

**Check Wall Direction of Maze Object**  
Check if maze object is a wall in a particular direction.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.MazeObject::MazeObjectColumn()` | Return the row number of the maze object as a number. ||
| `Object.MazeObject::MazeObjectMazeID()` | Return the maze ID of the maze object as a string. ||
| `Object.MazeObject::MazeObjectRow()` | Return the row number of the maze object as a number. ||
| `Object.MazeObject::MazeObjectWallDirection()` | Return the wall direction of the maze object as a string (only exists for wall objects). ||

---

*This page is an auto-generated reference page about the **Maze Generator** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).