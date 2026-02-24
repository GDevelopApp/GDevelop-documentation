# Object Masking

<img src="https://resources.gdevelop-app.com/assets/Icons/transition-masked.svg" class="extension-icon"></img>
Mask objects using a sprite or a Shape Painter.

**Authors and contributors** to this experimental extension: [arthuro555](https://gd.games/arthuro555).

---

When masked, the masked object is only visible through the mask.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Mask an object with a sprite**  
Define a sprite as a mask of an object.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Object to mask
    - Parameter 2 (👾 Object): Sprite object to use as a mask

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SpriteMasking::Mask`.

**Mask an object with a shape painter**  
Define a shape painter as a mask of an object.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Object to mask
    - Parameter 2 (👾 Object): Shape painter to use as a mask

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SpriteMasking::MaskWithShapePainter`.

**Remove the mask**  
Remove the mask of the specified object.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Object with a mask to remove

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SpriteMasking::Unmask`.





---

*This page is an auto-generated reference page about the **Object Masking** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).