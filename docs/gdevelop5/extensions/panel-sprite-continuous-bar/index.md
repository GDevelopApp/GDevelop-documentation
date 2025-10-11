# Resource bar (continuous)

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/Glyphster Pack/Master/SVG/Interface Elements/ea06363a57846caab544f536b78a952234b68d4941d41c1577852a1d61aefec3_Interface Elements_interface_ui_loading_progress_bar.svg" class="extension-icon"></img>
A bar that represents a resource in the game (health, mana, ammo, etc).

**Authors and contributors** to this experimental extension: [D8H](https://gd.games/D8H), [VictrisGames](https://gd.games/VictrisGames), [Entropy](https://gd.games/Entropy).

---

A bar that represents a resource in the game (health, mana, ammo, etc).

There are ready-to-use resource bars in the asset-store [resource bars pack](https://editor.gdevelop.io/?initial-dialog=asset-store&asset-pack=resource-bars-resource-bars).

[Read more...](/gdevelop5/objects/resource-bar)

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Resource bar (continuous) 

A bar that represents a resource in the game (health, mana, ammo, etc). 

### Object actions

**Show label**  
Show (or hide) the label on the bar.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1 (❓ Yes or No): Show the label

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

**Maximum value**  
Change the maximum value of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Previous value conservation duration**  
Change the previous value conservation duration (in seconds) of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Value**  
Change the value of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

### Object conditions

**Empty**  
Check if the bar is empty.

??? quote "See parameters"

    - Parameter 0: 👾 Object

    > Technical note: parameter 1 are internal parameters handled by GDevelop.

**Full**  
Check if the bar is full.

??? quote "See parameters"

    - Parameter 0: 👾 Object

    > Technical note: parameter 1 are internal parameters handled by GDevelop.

**Label is shown**  
Check if the label is shown.

??? quote "See parameters"

    - Parameter 0: 👾 Object

    > Technical note: parameter 1 are internal parameters handled by GDevelop.

**Maximum value**  
Compare the maximum value of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Previous value conservation duration**  
Compare the previous value conservation duration (in seconds) of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Value**  
Compare the value of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

### Object expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.MaxValue()` | Return the maximum value of the object. ||
| `Object.PreviousValueDuration()` | Return the previous value conservation duration (in seconds) of the object. ||
| `Object.Value()` | Return the value of the object. ||


---

*This page is an auto-generated reference page about the **Resource bar (continuous)** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).