# Magnetic Effect

<img src="https://resources.gdevelop-app.com/assets/Icons/magnet.svg" class="extension-icon"></img>
Attract an object to another object, with customisable speed and distance.

**Authors and contributors** to this experimental extension: [Entropy](https://gd.games/Entropy).

!!! warning
    This is an extension made by a community member and it only got through a
    light review by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of fully reviewed extensions.

---

With this behavior, you can attract an object to another object, such as coins attracted to a player.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Magnetic Effect 

Attraction to another object, with customisable speed and distance. 

### Behavior actions

**Attraction to a target object**  
Attraction to a target object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (👾 Object): Target Object
    - Parameter 3 (🔢 Number): Distance (Default: 128)
    - Parameter 4 (🔢 Number): Speed (Default: 48)
    - Parameter 5 (❓ Yes or No): Permanent

    > Technical note: parameter 6 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `MagneticEffect::MagneticEffect::Attraction`.

**Stop attraction**  
Stop the attraction to the target object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `MagneticEffect::MagneticEffect::StopAttraction`.


### Behavior conditions

**Is attracted to the target object**  
Check if the object is attracted to the target object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `MagneticEffect::MagneticEffect::IsAttracted`.


_No expressions for this behavior._



---

*This page is an auto-generated reference page about the **Magnetic Effect** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).