---
title: 3D box
---
# 3D box

A 3D box displays a box in 3D, with up to 6 faces each showing an image.

If you need to show more detail 3D objects, check the [3D model object](../3d-model).

!!! note

    This object is new and subject to changes. Check the release notes when GDevelop is updated and read regularly this page to ensure you follow the best practices when using 3D boxes in your game.

    Notably, this object does not support yet:

    - Animations for each face
    - Lights

    Your help to [improve these features in the GDevelop game engine is welcome](https://github.com/4ian/GDevelop).

## About transparency

Support for transparency (faces with transparent or semi opaque colors) can be enabled by checking the checkbox **"Enable texture transparency"** when editing a 3D box object.

This can be produce strange results if you expect other faces of the box to be shown behind. This is due to how 3D rendering works. It's also more costly to render for the 3D engine.

## Performance considerations

A lot of 3D boxes can impact your game as they require multiple faces to be rendered, even if these faces are partially or totally hidden behind other 3D or 2D objects.

If your object is only shown from a certain point of view, you can disable the visibility of certain faces of the cube.

Be sure to reduce the number of 3D objects you use as much as you can, especially for good performance on low-end devices. Rather than using multiple objects, you can also enable tiling and resize the object (like you would do with a [tiled sprite](../tiled_sprite) instead of using multiple [sprites](../sprite)).
