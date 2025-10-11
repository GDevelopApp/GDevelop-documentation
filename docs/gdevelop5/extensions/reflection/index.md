# Reflection

<img src="https://resources.gdevelop-app.com/assets/Icons/reflect-vertical.svg" class="extension-icon"></img>
Add a reflection to a selected object.

**Authors and contributors** to this experimental extension: [VegeTato](https://gd.games/VegeTato).

!!! warning
    This is an extension made by a community member and it only got through a
    light review by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of fully reviewed extensions.

---

Reflection extension is useful when it comes to reflecting objects, like a player walking on water/glass/beach.
An action let you set the reflection for specific objects with a lot of options:


- The reflection opacity
- Reflective surface object
- Z order of the reflection
- An option to turn ON/OFF to delete the reflection when it touch the original object
- Touch distance to delete the reflection
- Layer to create the reflection on

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Add reflection to object**
Reflect your object.

??? quote "See parameters"

    - Parameter 1 (👾 Object): Reflection object
      A different object than the original object
    - Parameter 2 (👾 Object): Original object
    - Parameter 3 (🔢 Number): (Optional) Distance offset
      Distance in pixel, default: 0px
    - Parameter 4 (🔢 Number): (Optional) Reflection opacity
      Between 0 transparent to 255 opaque
    - Parameter 5 (👾 Object): Reflective surface object
    - Parameter 6 (🔢 Number): Reflection object Z order
    - Parameter 7 (🔤 Layer name (String)): Layer to create the reflection (Base layer by default)
    - Parameter 8 (❓ Yes or No): Delete reflection when it collides with the original object (default: no)
    - Parameter 9 (🔢 Number): Distance before removing the reflection
      Distance between the reflection and the original object before deleting the reflection (0 by default for immediate delete when touch)
    - Parameter 10 (🔢 Number): (Optional) Between 0 transparent to 255 opaque

    > Technical note: parameters 0, 11 are internal parameters handled by GDevelop.




---

*This page is an auto-generated reference page about the **Reflection** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).