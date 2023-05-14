---
title: 3D model
---
# 3D model

A 3D model displays an object modeled in a 3D modeling software. Like a [sprite for 2D games](../sprite.md) (or for interfaces in 3D games), it's a very common object that can be used for players, enemies, backgrounds, projectiles.

If you need to create walls, plane grounds or other rectangular/cubic 3D objects, consider using the [3D box object](../3d-box).

!!! note

    This object is new and subject to changes. Check the release notes when GDevelop is updated and read regularly this page to ensure you follow the best practices when using 3D models in your game.

## File format

GDevelop supports 3D models saved in the **GLB (.glb) format** (also called **GLTF**). It is a standardized file format used to share 3D data.

## Performance considerations

Large 3D models can impact your game as they will have:

- A larger size, making your game bigger and slower to download (especially on mobile phones or without broadband),
- A larger impact on the loading time (which will be slower, especially on low end devices),
- A negative impact on game performance, as the player device graphics card will need to spend more time rendering all the triangles composing the 3D model.

!!! tip

    We recommend you start building a game using *"low-poly"* 3D models.

## How to find or create 3D models?

!!! tip

    The GDevelop asset store will soon contain 3D models, so that it's fast and simple to build your games. If you want to sell your assets (2D images, 3D models, audio or ready-to-use objects/extensions), [read more here](../../community/sell-asset-pack-store).

This section will be enhanced with various solutions to build your 3D models.

You can find free or premium 3D models suitable for your games on some website like:

- [Kenney.nl](https://www.kenney.nl/assets/category:3D).
