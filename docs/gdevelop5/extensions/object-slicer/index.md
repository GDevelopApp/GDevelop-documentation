# Slice a 2D object into pieces

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/2ea979b9db9294f26b40687e214f26d7926682457113ccc6dca4174bce6033aa_knife.svg" class="extension-icon"></img>
Slice an object into smaller pieces that match the color of original object.

**Authors and contributors** to this experimental extension: [VictrisGames](https://gd.games/VictrisGames).

---

Useful for creating death animations such as explosions, crumbling, dissolve, or teleportation effects.
Object used for pieces should be a solid white color (otherwise the color will not match the original object color).

Tips:

- Adjust the collision mask to control where pieces will be created,
- Pieces are linked to the original object which can be used in other events (i.e. explode away from the original object)

This example shows how to slice objects: [open the project online](https://editor.gdevelop.io/?project=example://object-slicer.json).

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Slice object into smaller pieces**  
Slice an object into smaller pieces that match color of the original object. The new object should be a solid white color.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Object to be sliced
    - Parameter 2 (👾 Object): Object used for sliced pieces
      Recommended: Use a sprite that is a single white pixel
    - Parameter 3 (🔢 Number): Vertical slices
    - Parameter 4 (🔢 Number): Horizontal slices
    - Parameter 5 (❓ Yes or No): Delete original object

    > Technical note: parameters 0, 6 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ObjectSlicer::SliceObjectIntoPieces`.





---

*This page is an auto-generated reference page about the **Slice a 2D object into pieces** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).