# Flexbox

<img src="https://resources.gdevelop-app.com/assets/Icons/page-layout-body.svg" class="extension-icon"></img>
Allows using flexbox for positioning objects.

**Authors and contributors** to this experimental extension: [arthuro555](https://gd.games/arthuro555).

!!! warning
    This is an extension made by a community member and it only got through a
    light review by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of fully reviewed extensions.

---

A behavior to position objects using the CSS Flexible Box layout. Find more information at https://css-tricks.com/snippets/css/a-guide-to-flexbox/

Known bugs:


- This extension leaks memory at scene changes. It can result to heavy CPU usage and error messages.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Flex container 

A container for flex items. 

### Behavior actions

**Set flex direction**  
Sets the flexbox direction property.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 String): Flex direction (one of: "right", "left", "down", "right")

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Set flex wrap**  
Sets the flexbox wrap property.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 String): Flex wrap (one of: "nowrap", "wrap", "wrap-reverse")

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Set alignement of the lines**  
Sets the alignement method for the lines/rows of objects in the box.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 String): Alignement method (one of: "stretch", "flex-start", "flex-end", "center")

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Set alignement on the X axis**  
Sets the alignement method for items on the X axis.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 String): Alignement method (one of: "flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly")

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Set alignement on the Y axis**  
Sets the alignement method for items on the Y axis.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 String): Alignement method (one of: "stretch", "flex-start", "flex-end", "center")

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

_No expressions for this behavior._


## Flex Item 

An item in a flex container. 

### Behavior actions

**Set alignement of the object**  
Sets the alignement method for this object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 String): Alignement method (one of: "auto", "flex-start", "flex-end", "center", "stretch")

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Set growth of the object**  
Sets the growth for this object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Growth

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Set order of the object**  
Sets the order for this object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Order

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Set shrink of the object**  
Sets the shrink for this object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Shrink

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

_No expressions for this behavior._



---

*This page is an auto-generated reference page about the **Flexbox** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).