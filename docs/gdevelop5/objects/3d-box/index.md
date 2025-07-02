---
title: 3D box
---
# 3D box

A 3D box displays a box in 3D, with up to 6 faces each showing an image.

If you need to show more detail 3D objects, check the [3D model object](../3d-model).

!!! note

    This object is new and subject to changes. Check the release notes when GDevelop is updated and read regularly this page to ensure you follow the best practices when using 3D boxes in your game.

    Notably, this object does not support yet animations for each face.

    Your help to [improve these features in the GDevelop game engine is welcome](https://github.com/4ian/GDevelop).

## Lighting

Lighting can be set up through [layers effects](../../interface/scene-editor/layer-effects). Ambient and directional light effects allow to configure basic lighting for 3D layers.

3D boxes can be set up to react to lighting in different ways:

- Either it does not react to light, meaning that it's always shown with the colors of the texture that was set (like a 2D object)
- Or it does react to light. In this case, don't forget to set up a light in the layer effects.

## Shadows

3D boxes can cast and receive shadows when proper lighting is configured. Shadows are rendered using Three.js shadow maps and provide realistic depth and spatial relationships in your 3D scenes.

### Requirements for shadows

To enable shadows for 3D boxes, you need:

- **A Directional Light** set up on your scene layer. New games and new layers automatically include both a Directional Light and an Ambient Light by default.
- **Standard material type** in the 3D box configuration (not "Basic" material, which doesn't react to light).
- **Shadow casting enabled** - allows the box to cast shadows on other objects.
- **Shadow receiving enabled** - allows the box to receive shadows from other objects.

!!! tip

    For new objects created or imported from the Asset Store, shadow casting and shadow receiving are enabled by default.

### Configuring shadows

Shadow quality, light intensity, and the size of the shadow rendering area can be customized by editing the **Effects** of the layer in the scene editor. This allows you to:

- Adjust shadow quality for better visual results or performance
- Control the intensity of the directional light (which affects shadow strength)
- Modify the size of the area where shadows are rendered

Shadows are automatically rendered around the camera in an area that's large enough for most games while maintaining good quality results. This means they should work out of the box for most games, including those with large maps.

## About transparency

Support for transparency (faces with transparent or semi opaque colors) can be enabled by checking the checkbox **"Enable texture transparency"** when editing a 3D box object.

This can be produce strange results if you expect other faces of the box to be shown behind. This is due to how 3D rendering works. It's also more costly to render for the 3D engine.

## Performance considerations

A lot of 3D boxes can impact your game as they require multiple faces to be rendered, even if these faces are partially or totally hidden behind other 3D or 2D objects.

If your object is only shown from a certain point of view, you can disable the visibility of certain faces of the cube.

Be sure to reduce the number of 3D objects you use as much as you can, especially for good performance on low-end devices. Rather than using multiple objects, you can also enable tiling and resize the object (like you would do with a [tiled sprite](../tiled_sprite) instead of using multiple [sprites](../sprite)).
