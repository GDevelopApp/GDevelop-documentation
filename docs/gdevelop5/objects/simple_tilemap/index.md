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

## Reference

All actions, conditions and expressions are listed in [the tilemap reference page](/gdevelop5/all-features/tilemap/reference/#tile-map).
