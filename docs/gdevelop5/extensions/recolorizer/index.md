# Object recolorizer (experimental)

<img src="https://resources.gdevelop-app.com/assets/Icons/Line Hero Pack/Master/SVG/Graphic Design/Graphic Design_color_colour_palette_paint_brush.svg" class="extension-icon"></img>
Independently change the colors of a sprite, a tiled sprite or a panel sprite.

**Authors and contributors** to this experimental extension: [D8H](https://gd.games/D8H).

!!! warning
    This is an extension made by a community member and it only got through a
    light review by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of fully reviewed extensions.

---

This extension allows to restyle a sprite, a tiled sprite or a panel sprite.

It can be used to:

- Change the color of player short according to its team color.
- Add small color variation to trees of a forest.
- Restyle objects to match other assets.

An example shows how to change the 2 main colors of an object ([open the project online](https://editor.gdevelop.io/?project=example://recolorizer)).

This extension is experimental and might no longer work in future version of GDevelop.
The [color map effect](https://wiki.gdevelop.io/gdevelop5/interface/scene-editor/layer-effects/#color-map) is the prefered way to recolorize 2D objects.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Panel sprite recolorizer 

Independently change the colors of a panel sprite. 

### Behavior actions

**Recolorize**  
Replace a given color of an object with another one. The scope allows to change similar colors at once.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🎨 Color): Origin color
    - Parameter 3 (🎨 Color): Target color
    - Parameter 4 (🔢 Number): Hue scope (from 0° to 180°)
    - Parameter 5 (🔢 Number): Saturation scope (in percent)
    - Parameter 6 (🔢 Number): Lightness scope (in percent)

    > Technical note: parameter 7 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Recolorizer::PanelSpriteRecolorizer::Recolorize`.

**Reset color**  
Set back the original colors of an object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Recolorizer::PanelSpriteRecolorizer::ResetColor`.


_No expressions for this behavior._


## Sprite recolorizer 

Independently change the colors of a sprite. 

### Behavior actions

**Recolorize**  
Replace a given color of an object with another one. The scope allows to change similar colors at once.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🎨 Color): Origin color
    - Parameter 3 (🎨 Color): Target color
    - Parameter 4 (🔢 Number): Hue scope (from 0° to 180°)
    - Parameter 5 (🔢 Number): Saturation scope (in percent)
    - Parameter 6 (🔢 Number): Lightness scope (in percent)

    > Technical note: parameter 7 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Recolorizer::SpriteRecolorizer::Recolorize`.

**Reset color**  
Set back the original colors of an object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Recolorizer::SpriteRecolorizer::ResetColor`.


_No expressions for this behavior._


## Tiled sprite recolorizer 

Independently change the colors of a tiled sprite. 

### Behavior actions

**Recolorize**  
Replace a given color of an object with another one. The scope allows to change similar colors at once.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🎨 Color): Origin color
    - Parameter 3 (🎨 Color): Target color
    - Parameter 4 (🔢 Number): Hue scope (from 0° to 180°)
    - Parameter 5 (🔢 Number): Saturation scope (in percent)
    - Parameter 6 (🔢 Number): Lightness scope (in percent)

    > Technical note: parameter 7 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Recolorizer::TiledSpriteRecolorizer::Recolorize`.

**Reset color**  
Set back the original colors of an object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Recolorizer::TiledSpriteRecolorizer::ResetColor`.


_No expressions for this behavior._



---

*This page is an auto-generated reference page about the **Object recolorizer (experimental)** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).