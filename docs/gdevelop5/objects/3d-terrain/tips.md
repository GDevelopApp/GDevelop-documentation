---
title: 3D terrain tips and best practices
---
# 3D terrain tips and best practices

## A good workflow

1. **Start from a shape**: choose a relief (hills, mountains, island) and try a few seeds, or import a heightmap. It's faster than sculpting everything from a flat ground.
1. **Sculpt the big shapes first**, with a big brush and a low strength: hills, valleys, the coast of an island. Then add the details with smaller brushes.
1. **Prepare the places for buildings and roads**: flatten the ground under buildings, and flatten the bed of roads before painting them.
1. **Paint the layers**: roads and paths with their own layer, sand on beaches, dirt under trees. Grass and trees only grow on the layers you choose, so painting also decides where they grow.
1. **Add grass, forests and rocks**, then erase them where they are not wanted (around houses, on the paths of the player).
1. **Place the other objects last**: objects placed on the terrain don't follow the ground when you sculpt under them.

!!! tip

    Surround the playable area with high mountains, cliffs or water. It hides the end of the terrain, and it's easier than making a world without borders.

## Size and resolution

The **resolution** of a terrain is the number of cells on each side. The size of a cell is the size of the terrain divided by the resolution: it's the size of the smallest details that can be sculpted (a narrow path, a ditch, the edge of a hole).

- Small cells (16 to 32 pixels) for terrains where the player walks and drives closely: roads, paths and holes have sharp edges.
- Bigger cells for backgrounds, mountains seen from far, or the sea floor.
- A higher resolution takes more memory and more time to load, and makes changes during the game slower. Use the lowest resolution that keeps the details you need.

The resolution can be changed after sculpting: the changes made with the brushes are kept, with more or less details.

For very big worlds, put several terrains side by side rather than one huge terrain with a high resolution. Grass and scattered models can cover several terrains with a single object.

## Performance and mobile games

Terrains are made for big worlds: the parts out of the screen are not drawn, and the far away parts are simplified. To keep a game smooth, especially on phones:

- Use a terrain resolution that fits the size of the world (see above).
- Grass: put it only where the player can see it closely, lower its **fade distance** and its **density**. See [Grass](grass.md#performance).
- Scattered models: lower the **draw distance** of small plants and rocks, and disable the shadows of small things. See [Forests, rocks and bushes](scattered-models.md#performance).
- Shadows are one of the most expensive parts of a 3D scene: lower the **Shadow quality** or the **Shadow distance** of the directional light, or disable shadows on the objects that don't need them.
- Layer effects like ambient occlusion, depth of field or bloom look great but are expensive: try your game on a phone and keep the ones that matter.
- Holes make the terrain a bit slower to draw: only the terrains with holes pay this cost.

See also [how to improve the performance of a game](/gdevelop5/tutorials/how-to-debug-poor-performance).

## Characters, cars and physics

- Add the [3D physics behavior](/gdevelop5/behaviors/physics3d) to the terrain, with a 3D physics character behavior on the player: it walks on slopes, and is stopped by slopes too steep to climb.
- Cars (with the 3D physics car behavior) follow the ground exactly: smooth the roads to avoid bumps, and keep their slopes reasonable.
- Objects created during the game can be put on the ground with the **Put objects on the ground** action, or with their Z position set to the **ground Z position** expression.
- When the ground changes during the game (a crater, a hole), the collisions are updated and objects on the ground fall or roll accordingly.

## Common problems

**The terrain objects are not in the new object dialog.**
They are in an extension made by the community. Click the menu at the right of the search bar of the "New object from scratch" tab, and choose to show experimental objects.

**I can't select a tree or another object: clicks paint the terrain.**
A brush of the terrain is still in use. Click again on the tool in the toolbar to stop using it, then click on the object.

**Objects float above the ground or are buried after sculpting.**
Objects placed in the scene don't follow the ground. Move them, or use the **Put objects on the ground** action at the beginning of the scene for the objects that must stand on the ground.

**Grass or trees grow on a road.**
Paint the road with a layer that is not the "Grows on terrain layer" of the grass and of the scattered models. Erase the remaining trees with the "Erase copies" brush.

**The player walks through the trees.**
Enable **Trunk collisions** on the scattered models, and add the 3D physics behavior to them, with the "Static" type. See [Collisions](scattered-models.md#collisions-trees-that-stop-the-player).

**The textures of the ground look blurry or repetitive.**
Lower the **Texture size** for sharper textures, raise the **Texture variation** to hide the repetition, and add normal maps to the layers.

**The outside of a tunnel or the sky is seen through the edge of a hole.**
Make the hole smaller than the inside of the tunnel, and make the ends of the tunnel model bigger. Look at the entrances from all the angles the camera can take in the game. See [Make a tunnel](holes-and-tunnels.md#make-a-tunnel).

**An object falls into a hole a bit before reaching its edge.**
Collisions are removed for whole cells of the terrain: a higher resolution makes the difference smaller. Make the 3D model under the hole go a bit further than the hole.

**Changes made with actions are lost when the game restarts.**
Actions only change the terrain during the game. Use the brushes of the scene editor, or the **Edits** property, to change the terrain of the project.
