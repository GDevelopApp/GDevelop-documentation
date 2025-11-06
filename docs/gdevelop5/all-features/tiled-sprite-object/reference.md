# Tiled Sprite Object Reference

Displays a 2D image in a repeating pattern over an area. Useful for making backgrounds, including background that are scrolling when the camera moves. This is more performant than using multiple Sprite objects. [Read more explanations about it.](/gdevelop5/objects/tiled_sprite)



## Tiled Sprite 

Displays an image repeated over an area. 

### Object properties

- **Height** (🔢 Number, Distance). Default value is `32`.
- **Texture** (🗂️ Resource).
- **Width** (🔢 Number, Distance). Default value is `32`.

??? quote "See internal technical details"


    - **Height** is stored as `height` (number). Unit is Pixel. Default value is `32`.
    - **Texture** is stored as `texture` (resource). Default value is ``.
    - **Width** is stored as `width` (number). Unit is Pixel. Default value is `32`.

### Object actions

**Tint color**  
Change the tint of a Tiled Sprite. The default color is white.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (🎨 Color): Tint

    > Technical note: this action internal type (in GDevelop JSON) is `TiledSpriteObject::SetColor`.

**Image X Offset**  
Modify the offset used on the X axis when displaying the image.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `TiledSpriteObject::XOffset`.

**Image Y Offset**  
Modify the offset used on the Y axis when displaying the image.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `TiledSpriteObject::YOffset`.


### Object conditions

**Image X Offset**  
Test the offset used on the X axis when displaying the image.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `TiledSpriteObject::XOffset`.

**Image Y Offset**  
Test the offset used on the Y axis when displaying the image.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `TiledSpriteObject::YOffset`.


### Object expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.XOffset()` | Return the offset used on the X axis when displaying the image. ||
| `Object.YOffset()` | Return the offset used on the Y axis when displaying the image. ||



---

The Tiled Sprite Object extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **Tiled Sprite Object** feature of [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).