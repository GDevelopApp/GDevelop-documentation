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

### Behavior properties

- **The alignement of the lines (row/columns)** (choice, one of: "normal", "flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly", "stretch"). Default value is `normal`.
- **The alignement of the items on the Y axis** (choice, one of: "stretch", "flex-start", "flex-end", "center"). Default value is `stretch`.
- **The direction of the items** (choice, one of: "right", "left", "up", "down"). Default value is `right`.
- **Minimal gap between each item in pixels** (🔢 Number). Default value is `0`.
- **The ID of the container** (string). Default value is `Default`.
- **The alignement of the items on the X axis** (choice, one of: "flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"). Default value is `flex-start`.
- **Warpping (adding lines to fit everything inside the Flexbox)** (choice, one of: "wrap", "nowrap", "wrap-reverse"). Default value is `nowrap`.

??? quote "See internal technical details"


    - **The alignement of the lines (row/columns)** is stored as `AlignContent` (Choice). Default value is `normal`.
    - **The alignement of the items on the Y axis** is stored as `AlignItems` (Choice). Default value is `stretch`.
    - **The direction of the items** is stored as `Direction` (Choice). Default value is `right`.
    - **Minimal gap between each item in pixels** is stored as `Gap` (Number). Default value is `0`.
    - **The ID of the container** is stored as `ID` (String). Default value is `Default`.
    - **The alignement of the items on the X axis** is stored as `JustifyContent` (Choice). Default value is `flex-start`.
    - **Warpping (adding lines to fit everything inside the Flexbox)** is stored as `Wrap` (Choice). Default value is `nowrap`.

### Behavior actions

**Set flex direction**  
Sets the flexbox direction property.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (stringwithselector): Flex direction (one of: "right", "left", "down", "right")

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `FlexBox::FlexContainer::SetFlexDirection`.

**Set flex wrap**  
Sets the flexbox wrap property.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (stringwithselector): Flex wrap (one of: "nowrap", "wrap", "wrap-reverse")

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `FlexBox::FlexContainer::SetFlexWrap`.

**Set alignement of the lines**  
Sets the alignement method for the lines/rows of objects in the box.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (stringwithselector): Alignement method (one of: "stretch", "flex-start", "flex-end", "center")

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `FlexBox::FlexContainer::SetLineAlign`.

**Set alignement on the X axis**  
Sets the alignement method for items on the X axis.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (stringwithselector): Alignement method (one of: "flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly")

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `FlexBox::FlexContainer::SetXAlign`.

**Set alignement on the Y axis**  
Sets the alignement method for items on the Y axis.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (stringwithselector): Alignement method (one of: "stretch", "flex-start", "flex-end", "center")

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `FlexBox::FlexContainer::SetYAlign`.


_No expressions for this behavior._


## Flex Item 

An item in a flex container. 

### Behavior properties

- **Override the alignement for that object** (choice, one of: "auto", "flex-start", "flex-end", "center", "stretch").
- **The ID of the container** (string). Default value is `Default`.
- **Occupy the maximum height possible** (🔘 Boolean). Default value is `false`.
- **Occupy the maximum width possible** (🔘 Boolean). Default value is `false`.
- **Ability to grow (flex-grow)** (🔢 Number). Default value is `1`.
- **The order of the object in the container** (🔢 Number). Default value is `0`.
- **Ability to shrink (flex-shrink)** (🔢 Number). Default value is `1`.

??? quote "See internal technical details"


    - **Override the alignement for that object** is stored as `AlignSelf` (Choice). Default value is ``.
    - **The ID of the container** is stored as `ContainerID` (String). Default value is `Default`.
    - **Occupy the maximum height possible** is stored as `FullHeight` (Boolean). Default value is `false`.
    - **Occupy the maximum width possible** is stored as `FullWidth` (Boolean). Default value is `false`.
    - **Ability to grow (flex-grow)** is stored as `Growth` (Number). Default value is `1`.
    - **The order of the object in the container** is stored as `Order` (Number). Default value is `0`.
    - **Ability to shrink (flex-shrink)** is stored as `Shrink` (Number). Default value is `1`.

### Behavior actions

**Set alignement of the object**  
Sets the alignement method for this object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (stringwithselector): Alignement method (one of: "auto", "flex-start", "flex-end", "center", "stretch")

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `FlexBox::FlexItem::SetAlign`.

**Set growth of the object**  
Sets the growth for this object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Growth

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `FlexBox::FlexItem::SetGrowth`.

**Set order of the object**  
Sets the order for this object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Order

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `FlexBox::FlexItem::SetOrder`.

**Set shrink of the object**  
Sets the shrink for this object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Shrink

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `FlexBox::FlexItem::SetShrink`.


_No expressions for this behavior._



---

*This page is an auto-generated reference page about the **Flexbox** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).