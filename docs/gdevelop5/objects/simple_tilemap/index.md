---
title: Tilemap
---

# Tilemap

The Tilemap object can be used to display tile-based objects. It's a good way to create **maps** for RPG, strategy games or create objects by **assembling tiles**, useful for platformer, retro-looking games, etc.

## Get started

Tilemap objects require little configuration.

### Atlas image

The atlas image is the image that will be sliced into smaller images (tiles).
A tilemap is a spatial arrangement of those tiles.

!!! tip
      An atlas image can have some empty spaces. Those spaces can be used later if tiles need to be added without changing the image dimensions.

### Tile size

!!! note
      Only square tiles are supported at the moment.

Select a tile size (in pixels). The atlas image dimensions have to be a multiple of the tile size.

For instance, with an image of dimensions 32x128, the tile size can be different values: 4, 8, 16 or 32 pixels.

If this check is not satisfied, an error message will be displayed.

### Tiles with hit box

Tiles can be configured to have a hit box.
To do so, when the atlas image is set, tiles can be selected by clicking on the image. The selected tiles with then have a hit box in game.

Those hit boxes can then be used with the platform behavior, the light obstacle behavior, raycasting and others.

!!! note
      At the moment, the hit box takes up the whole space in the tile.

!!! note
      The physics behavior will consider the tilemap as a whole object and not use the hitboxes to have different bodies.

## Paint on the editor

Once the tilemap object is configured, add an instance on the scene.

Select the instance, open the instance properties panel, select a tile and start modifying the instance on the scene by clicking on it.

## Tile manipulation

Tiles can be manipulated in-game through actions and conditions.

To do so, tiles have identifiers. The tile identifier (id) is automatically computed like this: if an atlas image is 32 pixels wide and 128 pixels high, with a tile size of 16 pixels, the resulting tile set with ids is:

```
0 │ 4
──┼──
1 │ 5
──┼──
2 │ 6
──┼──
3 │ 7
```

So if the image height and/or the tile size change, the tile identifiers also change.

## Reference

All actions, conditions and expressions are listed in [the tilemap reference page](/gdevelop5/all-features/tilemap/reference/).
