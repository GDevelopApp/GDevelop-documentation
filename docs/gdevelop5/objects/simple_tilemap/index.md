---
title: Tilemap
---

# Tilemap

The Tilemap object can be used to display tile-based objects. It's a good way to create **maps** for RPG, strategy games or create objects by **assembling tiles**, useful for platformer, retro-looking games, etc.

They are performant and useful to render large levels. While the Tilemap is quick and easy to use, you may want to design maps in an external editor like LDtk or Tiled. In this case, take a look at the [External Tilemap object](/gdevelop5/objects/tilemap).

<div class="video-container">
  <video muted="true" autoplay="true" loop="true">
    <source src="edit-tilemap.mp4" type="video/mp4">
  </video>
</div>

## Get started

Setting up a Tilemap is straightforward. You need a **Tileset**, also called **Atlas**, which is an image that contains all the tiles of the map.

### Set up the tileset image (also called "Atlas")

The atlas image is the image that will be sliced into smaller images (tiles).
A tilemap is a spatial arrangement of those tiles.

!!! tip
      An atlas image can have some empty spaces. Those spaces can be used later if tiles need to be added without changing the image dimensions.

### Choose the tile size

!!! note
      Only square tiles are supported at the moment.

Select a tile size (in pixels). The atlas image dimensions have to be a multiple of the tile size.

For instance, with an image of dimensions 32x128, the tile size can be different values: 4, 8, 16 or 32 pixels.

If this check is not satisfied, an error message will be displayed.

### Set up solid tiles (hitboxes)

Tiles can be configured to have a hitbox.
When the atlas image is set, tiles can be selected by clicking on the image. The selected tiles with then have a hit box in game.

Those hit boxes can then be used with the platform behavior, the light obstacle behavior, raycasting and others.

!!! note
      The physics behavior will consider the tilemap as a whole object and not use the hitboxes to have different bodies.

## Paint a map in the scene editor

Once the tilemap object is configured, add an instance on the scene.

Select the instance, open the instance properties panel, select a tile and start modifying the instance on the scene by clicking on it.

### Painting tools

The tilemap editor provides several tools for painting tiles on the scene:

- **Freehand brush**: Paint tiles by dragging the mouse across the scene. Useful for organic shapes and freeform drawing.
- **Rectangle paint**: Paint tiles in rectangular areas. Click and drag to paint a rectangle of tiles.
- **Fill bucket**: Fill connected areas with the same tile. Click on a tile to replace it and all adjacent matching tiles with the selected tile.
- **Tile picker**: Pick a tile from the scene to use it as the current selection. After picking a tile, the previous tool is automatically restored.
- **Erase**: Remove tiles from the scene.

You can also flip tiles horizontally or vertically using the flip buttons in the toolbar.

## Tile manipulation

Tiles can be manipulated in-game through actions and conditions.

To do so, tiles have identifiers. The tile identifier (id) is automatically computed like this: if an atlas image is 32 pixels wide and 128 pixels high, with a tile size of 16 pixels, the resulting tile set with ids is:

```
0 │ 1
──┼──
2 │ 3
──┼──
4 │ 5
──┼──
6 │ 7
```

If the image width and/or the tile size change, the tile identifiers will also change. To expand the atlas image, to have more tiles, without impacting the tile maps based on it, the atlas should be expanded towards the bottom.

### Two coordinate systems

Tile manipulation actions and conditions come in two variants, letting you address a tile either by **scene coordinates** (useful when you know where the player clicked or where an object is) or by **grid coordinates** (column/row index inside the map):

- **At position** — pass the X/Y scene coordinates (e.g. the mouse position, or an object's X/Y). GDevelop converts them to the correct grid cell automatically.
- **On the grid** — pass the column index (grid X) and row index (grid Y) directly.

Expressions are also available to convert between the two systems: you can turn a scene position into a grid coordinate (useful for detecting which cell was clicked), or get the scene position of the center of any cell (useful for spawning objects exactly in the middle of a tile or for a cursor that snaps to the grid).

### Reading and writing tiles

Use the **Tile (at position)** and **Tile (on the grid)** expression/condition/action to read or change the tile ID at a given cell. Setting a tile ID of `-1` is equivalent to removing the tile (leaving the cell empty).

You can also use the dedicated **Remove tile** action (available in both "at position" and "on the grid" variants) to explicitly clear a cell.

### Flipping tiles

Individual tiles can be flipped horizontally or vertically at runtime without changing their ID. Use the **Flip tile horizontally** or **Flip tile vertically** actions (both "at position" and "on the grid" variants). Corresponding conditions let you check whether a tile is currently flipped.

!!! tip

    Flipping tiles is purely visual — it does not change the tile's hitbox.

### Resizing the grid at runtime

The grid dimensions can be changed at runtime with the **Grid row count** and **Grid column count** expression/condition/action. Reducing the size removes the tiles at the edges; increasing it adds empty cells.

## Reference

All actions, conditions and expressions are listed in [the tilemap reference page](/gdevelop5/all-features/tilemap/reference/#tile-map).
