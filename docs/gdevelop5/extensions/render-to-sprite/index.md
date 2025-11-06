# Sprite Snapshot

<img src="https://resources.gdevelop-app.com/assets/Icons/camera-enhance.svg" class="extension-icon"></img>
Renders an object, layer, scene or an area of a scene and puts the resulting image into a sprite.

**Authors and contributors** to this experimental extension: [arthuro555](https://gd.games/arthuro555), [TulenvakiProductions](https://gd.games/TulenvakiProductions).

---

Allows rendering (creating an image) of objects, layers and the scene to display in a sprite. 
This allows to make optimizations by transforming the resulting image of a shape painter into a faster sprite, or to make viewports/cameras.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Render a layer into a sprite**  
Renders a layer and puts the rendered image into a sprite object.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Layer name (String)): The layer to render
    - Parameter 2 (👾 Object): The sprite to render to

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `RenderToSprite::RenderLayer`.

**Render an object into a sprite**  
Renders an object and puts the rendered image into a sprite object.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): The object to render
    - Parameter 2 (👾 Object): The sprite to render to

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `RenderToSprite::RenderObject`.

**Render a scene into a sprite**  
Renders a scene and puts the rendered image into a sprite object.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): The sprite to render to

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `RenderToSprite::RenderScene`.

**Render an area of a scene into a sprite**  
Renders a defined area of a scene and puts the rendered image into a sprite object.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): The sprite to render to
    - Parameter 2 (🔢 Number): Origin X position of the render area
    - Parameter 3 (🔢 Number): Origin Y Position of the render area
    - Parameter 4 (🔢 Number): Width of the are to render
    - Parameter 5 (🔢 Number): Height of the area to render

    > Technical note: parameters 0, 6 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `RenderToSprite::RenderSceneArea`.





---

*This page is an auto-generated reference page about the **Sprite Snapshot** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).