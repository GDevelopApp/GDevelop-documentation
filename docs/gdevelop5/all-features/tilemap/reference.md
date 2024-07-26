# Tile map Reference

The Tilemap object can be used to display tile-based objects. It's a good way to create maps for RPG, strategy games or create objects by assembling tiles, useful for platformer, retro-looking games, etc... [Read more explanations about it.](/gdevelop5/objects/tilemap)



## External Tilemap (Tiled/LDtk) collision mask 

Invisible object handling collisions with parts of a tilemap. 

### Object actions

**Tilemap JSON file**  
Set the JSON file containing the Tilemap data to display. This is usually the JSON file exported from Tiled.

**Tileset JSON file**  
Set the JSON file with the tileset data (sometimes that is embedded in the Tilemap, so not needed)

### Object conditions

**Tilemap JSON file**  
Check the Tilemap JSON file being used.

**Tileset JSON file**  
Check the tileset JSON file being used.

_No expressions for this object._


## Tile map 

Displays a tiled-based map. 

### Object actions

**Flip tile horizontally (on the grid)**  
Flip tile horizontally at grid coordinates.

**Flip tile horizontally (at position)**  
Flip tile horizontally at scene coordinates.

**Flip tile vertically (on the grid)**  
Flip tile vertically at grid coordinates.

**Flip tile vertically (at position)**  
Flip tile vertically at scene coordinates.

**Remove tile (on the grid)**  
Remove the tile at the grid coordinates.

**Remove tile (at position)**  
Remove the tile at the scene coordinates.

**Grid column count**  
Change the grid column count in the tile map.

**Grid row count**  
Change the grid row count in the tile map.

**Tile (on the grid)**  
Change the id of the tile at the grid coordinates.

**Tile (at position)**  
Change the id of the tile at the scene coordinates.

### Object conditions

**Tile flipped horizontally (on the grid)**  
Check if tile at grid coordinates is flipped horizontally.

**Tile flipped horizontally (at position)**  
Check if tile at scene coordinates is flipped horizontally.

**Tile flipped vertically (on the grid)**  
Check if tile at grid coordinates is flipped vertically.

**Tile flipped vertically (at position)**  
Check if tile at scene coordinates is flipped vertically.

**Grid column count**  
Compare the grid column count in the tile map.

**Grid row count**  
Compare the grid row count in the tile map.

**Tile (on the grid)**  
Compare the id of the tile at the grid coordinates.

**Tile (at position)**  
Compare the id of the tile at the scene coordinates.

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
| `Object.TilesetColumnCount()` | Get the number of column in the tileset. ||
| `Object.TilesetRowCount()` | Get the number of row in the tileset. ||

## External Tilemap (Tiled/LDtk) 

Displays a tiled-based map, made with the Tiled editor (https://www.mapeditor.org/) or the LDtk editor (https://ldtk.io/). 

### Object actions

**Animation speed (FPS)**  
Set the animation speed of the Tilemap.

**Animation speed scale**  
Set the animation speed scale of the Tilemap.

**Display mode**  
Set the display mode

**Layer index**  
Set the layer index of the Tilemap.

**Tilemap file (Tiled or LDtk)**  
Set the Tiled or LDtk file containing the Tilemap data to display. This is usually the main file exported from Tiled/LDtk.

**Tileset JSON file**  
Set the JSON file with the tileset data (sometimes that is embedded in the Tilemap, so not needed)

### Object conditions

**Animation speed (FPS)**  
Compare the animation speed.

**Animation speed scale**  
Compare the animation speed scale.

**Display mode**  
Compare the value of the display mode.

**Layer index**  
Compare the value of the layer index.

**Level index**  
Compare the level index being displayed..

**Tilemap file (Tiled or LDtk)**  
Check the tilemap file (Tiled or LDtk) being used.

**Tileset JSON file**  
Check the tileset JSON file being used.

### Object expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.AnimationFps()` | Get the animation speed (in frames per second) ||
| `Object.AnimationSpeedScale()` | Get the Animation speed scale ||
| `Object.LayerIndex()` | Get the layer index being displayed ||
| `Object.LevelIndex()` | Return the level index being displayed.. ||

---
*This page is an auto-generated reference page about the **Tile map** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).