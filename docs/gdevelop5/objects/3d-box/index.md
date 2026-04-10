---
title: 3D box
---
# 3D box

A 3D box displays a box in 3D, with up to 6 faces each showing an image.

If you need to show more detailed 3D objects, check the [3D model object](../3d-model).

## Face textures

Each of the six faces of the box (front, back, left, right, top, bottom) can display a different image. Leave a face's image empty to make that face show no texture (it will still be rendered, just without an image). You can change any face's image at runtime using the **Change the image of a face** action.

### Tiling

Each face has a **Tile** checkbox in the object properties. When enabled, the texture repeats across the face instead of being stretched to fit, which is useful for walls, floors, and ceilings where you want to keep the texture at its natural scale as the box is resized.

### Tint color

A **Tint** color can be applied to the entire box to colorize all faces uniformly. This is useful for indicating states (damage flash, selection highlight, etc.) without needing separate textures. Use the **Change the tint** action to modify it at runtime.

### Face orientation

The **Faces orientation** property (Y or Z) controls how images are oriented on the faces:

- **Y** – the top of each texture image touches the top face of the box.
- **Z** – the top of each texture image touches the front face of the box.

The **Back face orientation** advanced property controls the orientation of the back face image specifically: whether the top of the image touches the top face or the bottom face of the box.

## Lighting

Lighting can be set up through [layer effects](../../interface/scene-editor/layer-effects). Ambient and directional light effects allow configuring basic lighting for 3D layers.

The **material type** property controls whether the box reacts to lighting:

- **Standard** (default) – the box reacts to ambient and directional lights in the layer, and can cast and receive shadows.
- **Basic** – the box is always shown with the full colors of its textures, unaffected by any lighting. Use this for objects that should never be darkened (UI elements, glowing items, etc.).

## Shadows

3D boxes can cast and receive shadows. To see them:

- Add a **Directional Light** effect to the layer (new layers already include one and an Ambient Light).
- Ensure the box uses the **Standard** material.
- Enable **Shadow casting** and **Shadow receiving** in the object's properties (these are enabled for new objects by default).

Shadows are rendered around the camera. You can tweak their range, quality and the light intensity by editing the Directional Light effect in the layer.

## About transparency

Support for transparency (faces with transparent or semi opaque colors) can be enabled by checking the checkbox **"Enable texture transparency"** when editing a 3D box object.

This can produce strange results if you expect other faces of the box to be shown behind. This is due to how 3D rendering works. It's also more costly to render for the 3D engine.

## Performance considerations

A lot of 3D boxes can impact your game as they require multiple faces to be rendered, even if these faces are partially or totally hidden behind other 3D or 2D objects.

Each face's visibility can be toggled independently — both in the object properties and at runtime using the **Face visibility** action. If your box is only ever seen from one side (e.g., a floor tile), hiding the unseen faces reduces the number of triangles the GPU must process each frame.

Be sure to reduce the number of 3D objects you use as much as you can, especially for good performance on low-end devices. Rather than placing many individual boxes side by side, enable **tiling** and resize a single box (the same principle as using a [tiled sprite](../tiled_sprite) instead of many [sprites](../sprite)).
