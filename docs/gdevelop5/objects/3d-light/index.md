---
title: 3D Light
---
# 3D Light

## Choose the right light

Light objects illuminate some part of the scene whereas light effects illuminate the whole scene.

### Light objects

Light objects can be moved. They emit light from their center. They can cast shadows for 3D objects. 

- [Spot light](/gdevelop5/extensions/light3d/#3d-spot-light) lights up a cone like a flashlight.
- [Point light](/gdevelop5/extensions/light3d/#3d-point-light) lights up in all directions like a fire.

### Light layer effects

Light effects don't have a position in the scene, but you can change the direction of the light with 2 angles. Light effects can be set up through [layers effects](/gdevelop5/interface/scene-editor/layer-effects).

- [Directional light](/gdevelop5/all-features/scene3d/reference/#effect-directional-light) is a very far light source like the sun. It can cast shadows for 3D objects. When it's used alone, the part of the object in the darkness is pitch black. This is why it's often used along with a hemisphere light.
- [Ambient light](/gdevelop5/all-features/scene3d/reference/#effect-ambient-light) illuminates objects from every direction. It doesn't give any shade to the objects which tend to look flat. This is why the hemisphere light is usually preferred.
- [Hemisphere light](/gdevelop5/all-features/scene3d/reference/#effect-hemisphere-light) illuminates objects from every direction with a gradient of 2 colors. It is often used along with a directional light.

## Avoid shadow artefacts

When [3D model objects](/gdevelop5/objects/3d-model/) are both casting and receiving shadows, you might see some darkened patterns on them. The **Shadow bias** property of lights can be used to avoid this "shadow acne". Choose a value small enough like `0.001` to avoid creating distance between shadows and objects but not too small to avoid shadow glitches on low/medium quality.

## Display more light objects

Light objects can be heavy on the GPU especially when they cast shadows. In order to allow game creators to add many lights in the scene, the engine automatically hide lights the furthest away from the camera. By default, the limits are:

- 20 visible light objects
- 4 light objects casting shadows

These limits can be changed with **Max lights count** and **Max lights with shadow count** actions. Be aware that setting too high values can make games crash because of WebGL own limit.
