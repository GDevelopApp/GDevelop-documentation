# Tile map Reference

The Tilemap object can be used to display tile-based objects. It's a good way to create maps for RPG, strategy games or create objects by assembling tiles, useful for platformer, retro-looking games, etc... External tilemaps are also supported - but it's recommended to use the built-in, simple Tilemap object for most use cases. [Read more explanations about it.](/gdevelop5/objects/tilemap)



## External Tilemap (Tiled/LDtk) collision mask 

Invisible object handling collisions with parts of a tilemap. 

### Object actions

**Tilemap JSON file**  
Set the JSON file containing the Tilemap data to display. This is usually the JSON file exported from Tiled.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Tile map collision mask
    - Parameter 1 (jsonResource): Tilemap JSON file

**Tileset JSON file**  
Set the JSON file with the tileset data (sometimes that is embedded in the Tilemap, so not needed)

??? quote "See parameters"

    - Parameter 0 (👾 Object): Tile map collision mask
    - Parameter 1 (jsonResource): Tileset JSON file

### Object conditions

**Tilemap JSON file**  
Check the Tilemap JSON file being used.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Tile map collision mask
    - Parameter 1 (jsonResource): Tilemap JSON file

**Tileset JSON file**  
Check the tileset JSON file being used.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Tile map collision mask
    - Parameter 1 (jsonResource): Tileset JSON file

_No expressions for this object._


## Tile map 

Displays a tile-based map. Recommended for most games that need to use static tiles. 

### Object actions

**Flip tile horizontally (on the grid)**  
Flip tile horizontally at grid coordinates.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Tile map
    - Parameter 1 (🔢 Number): Grid X
    - Parameter 2 (🔢 Number): Grid Y
    - Parameter 3 (❓ Yes or No): Flip horizontally

**Flip tile horizontally (at position)**  
Flip tile horizontally at scene coordinates.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Tile map
    - Parameter 1 (🔢 Number): Position X
    - Parameter 2 (🔢 Number): Position Y
    - Parameter 3 (❓ Yes or No): Flip horizontally

**Flip tile vertically (on the grid)**  
Flip tile vertically at grid coordinates.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Tile map
    - Parameter 1 (🔢 Number): Grid X
    - Parameter 2 (🔢 Number): Grid Y
    - Parameter 3 (❓ Yes or No): Flip vertically

**Flip tile vertically (at position)**  
Flip tile vertically at scene coordinates.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Tile map
    - Parameter 1 (🔢 Number): Position X
    - Parameter 2 (🔢 Number): Position Y
    - Parameter 3 (❓ Yes or No): Flip vertically

**Remove tile (on the grid)**  
Remove the tile at the grid coordinates.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Tile map
    - Parameter 1 (🔢 Number): Grid X
    - Parameter 2 (🔢 Number): Grid Y

**Remove tile (at position)**  
Remove the tile at the scene coordinates.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Tile map
    - Parameter 1 (🔢 Number): Position X
    - Parameter 2 (🔢 Number): Position Y

**Grid column count**  
Change the grid column count in the tile map.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Tile map
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

**Grid row count**  
Change the grid row count in the tile map.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Tile map
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

**Tile (on the grid)**  
Change the id of the tile at the grid coordinates.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Tile map
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value
    - Parameter 3 (🔢 Number): Grid X
    - Parameter 4 (🔢 Number): Grid Y

**Tile (at position)**  
Change the id of the tile at the scene coordinates.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Tile map
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value
    - Parameter 3 (🔢 Number): Position X
    - Parameter 4 (🔢 Number): Position Y

### Object conditions

**Tile flipped horizontally (on the grid)**  
Check if tile at grid coordinates is flipped horizontally.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Tile map
    - Parameter 1 (🔢 Number): Grid X
    - Parameter 2 (🔢 Number): Grid Y

**Tile flipped horizontally (at position)**  
Check if tile at scene coordinates is flipped horizontally.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Tile map
    - Parameter 1 (🔢 Number): Position X
    - Parameter 2 (🔢 Number): Position Y

**Tile flipped vertically (on the grid)**  
Check if tile at grid coordinates is flipped vertically.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Tile map
    - Parameter 1 (🔢 Number): Grid X
    - Parameter 2 (🔢 Number): Grid Y

**Tile flipped vertically (at position)**  
Check if tile at scene coordinates is flipped vertically.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Tile map
    - Parameter 1 (🔢 Number): Position X
    - Parameter 2 (🔢 Number): Position Y

**Grid column count**  
Compare the grid column count in the tile map.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Tile map
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

**Grid row count**  
Compare the grid row count in the tile map.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Tile map
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

**Tile (on the grid)**  
Compare the id of the tile at the grid coordinates.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Tile map
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare
    - Parameter 3 (🔢 Number): Grid X
    - Parameter 4 (🔢 Number): Grid Y

**Tile (at position)**  
Compare the id of the tile at the scene coordinates.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Tile map
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare
    - Parameter 3 (🔢 Number): Position X
    - Parameter 4 (🔢 Number): Position Y

### Object expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.GridColumnCount()` | Return the grid column count in the tile map. ||
| `Object.GridRowCount()` | Return the grid row count in the tile map. ||
| `Object.GridX(number, number)` | Get the grid column coordinates in the tile map corresponding to the scene coordinates. ||
| | _🔢 Number_ | Position X |
| | _🔢 Number_ | Position Y |
| `Object.GridY(number, number)` | Get the grid row coordinates in the tile map corresponding to the scene coordinates. ||
| | _🔢 Number_ | Position X |
| | _🔢 Number_ | Position Y |
| `Object.TileCenterX(number, number)` | Get the scene X position of the center of the tile. ||
| | _🔢 Number_ | Grid X |
| | _🔢 Number_ | Grid Y |
| `Object.TileCenterY(number, number)` | Get the scene Y position of the center of the tile. ||
| | _🔢 Number_ | Grid X |
| | _🔢 Number_ | Grid Y |
| `Object.TileIdAtGrid(number, number)` | Return the id of the tile at the grid coordinates. ||
| | _🔢 Number_ | Grid X |
| | _🔢 Number_ | Grid Y |
| `Object.TileIdAtPosition(number, number)` | Return the id of the tile at the scene coordinates. ||
| | _🔢 Number_ | Position X |
| | _🔢 Number_ | Position Y |
| `Object.TilesetColumnCount()` | Get the number of columns in the tileset. ||
| `Object.TilesetRowCount()` | Get the number of rows in the tileset. ||

## External Tilemap (Tiled/LDtk) 

Displays a tiled-based map, made with the Tiled editor (https://www.mapeditor.org/) or the LDtk editor (https://ldtk.io/). 

### Object actions

**Animation speed (FPS)**  
Set the animation speed of the Tilemap.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Tile map
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Animation speed (in frames per second)

**Animation speed scale**  
Set the animation speed scale of the Tilemap.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Tile map
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Speed scale (1 by default)

**Display mode**  
Set the display mode

??? quote "See parameters"

    - Parameter 0 (👾 Object): Tile map
    - Parameter 1 (🔤 String): Display mode (one of: "visible", "all", "index")

**Layer index**  
Set the layer index of the Tilemap.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Tile map
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

**Tilemap file (Tiled or LDtk)**  
Set the Tiled or LDtk file containing the Tilemap data to display. This is usually the main file exported from Tiled/LDtk.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Tile map
    - Parameter 1 (tilemapResource): Tilemap file (Tiled or LDtk)

**Tileset JSON file**  
Set the JSON file with the tileset data (sometimes that is embedded in the Tilemap, so not needed)

??? quote "See parameters"

    - Parameter 0 (👾 Object): Tile map
    - Parameter 1 (tilesetResource): Tileset JSON file

### Object conditions

**Animation speed (FPS)**  
Compare the animation speed.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Tile map
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Animation speed to compare to (in frames per second)

**Animation speed scale**  
Compare the animation speed scale.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Tile map
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Speed scale to compare to (1 by default)

**Display mode**  
Compare the value of the display mode.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Tile map
    - Parameter 1 (🔤 String): Display mode (one of: "visible", "all", "index")

**Layer index**  
Compare the value of the layer index.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Tile map
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

**Level index**  
Compare the level index being displayed..

??? quote "See parameters"

    - Parameter 0 (👾 Object): Tile map
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

**Tilemap file (Tiled or LDtk)**  
Check the tilemap file (Tiled or LDtk) being used.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Tile map
    - Parameter 1 (tilemapResource): Tilemap file (Tiled or LDtk)

**Tileset JSON file**  
Check the tileset JSON file being used.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Tile map
    - Parameter 1 (tilesetResource): Tileset JSON file

### Object expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.AnimationFps()` | Get the animation speed (in frames per second) ||
| `Object.AnimationSpeedScale()` | Get the Animation speed scale ||
| `Object.LayerIndex()` | Get the layer index being displayed ||
| `Object.LevelIndex()` | Return the level index being displayed.. ||



---

The Tile map extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **Tile map** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).