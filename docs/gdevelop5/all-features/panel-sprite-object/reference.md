# Panel Sprite (9-patch) Object Reference

Panel Sprite, also called 9-patch, is an object showing an image that can be resized by stretching or repeating the edges and corners as well as the filling. [Read more explanations about it.](/gdevelop5/objects/panel_sprite)



## Panel Sprite ("9-patch") 

An image with edges and corners that are stretched separately from the full image. 

### Object properties

- **Bottom** (🔢 Number, Distance). Default value is `0`.
- **Height** (🔢 Number, Distance). Default value is `32`.
- **Left** (🔢 Number, Distance). Default value is `0`.
- **Right** (🔢 Number, Distance). Default value is `0`.
- **Texture** (🗂️ Resource).
- **Repeat borders and center textures (instead of stretching them)** (🔘 Boolean). Default value is `false`.
- **Top** (🔢 Number, Distance). Default value is `0`.
- **Width** (🔢 Number, Distance). Default value is `32`.

??? quote "See internal technical details"


    - **Bottom** is stored as `bottomMargin` (number). Unit is Pixel. Default value is `0`.
    - **Height** is stored as `height` (number). Unit is Pixel. Default value is `32`.
    - **Left** is stored as `leftMargin` (number). Unit is Pixel. Default value is `0`.
    - **Right** is stored as `rightMargin` (number). Unit is Pixel. Default value is `0`.
    - **Texture** is stored as `texture` (resource). Default value is ``.
    - **Repeat borders and center textures (instead of stretching them)** is stored as `tiled` (boolean). Default value is `false`.
    - **Top** is stored as `topMargin` (number). Unit is Pixel. Default value is `0`.
    - **Width** is stored as `width` (number). Unit is Pixel. Default value is `32`.

### Object actions

**Tint color**  
Change the tint of a Panel Sprite. The default color is white.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (🎨 Color): Tint

    > Technical note: this action internal type (in GDevelop JSON) is `PanelSpriteObject::SetColor`.

**Image name**  
Change the image of a Panel Sprite.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (imageResource): Image file (or image resource name)

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PanelSpriteObject::SetImageFromResource`.


_No expressions for this object._




---

The Panel Sprite (9-patch) Object extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **Panel Sprite (9-patch) Object** feature of [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).