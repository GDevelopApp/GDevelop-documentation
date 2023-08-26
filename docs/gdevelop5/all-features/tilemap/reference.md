# Tilemap

The Tilemap object can be used to display tile-based objects. It's a good way to create maps for RPG, strategy games or create objects by assembling tiles, useful for platformer, retro-looking games, etc... [Read more explanations about it.](https://wiki.gdevelop.io/gdevelop5/objects/tilemap)



## Tilemap collision mask 

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


## Tilemap 

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
*This page is an auto-generated reference page about the **Tilemap** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).