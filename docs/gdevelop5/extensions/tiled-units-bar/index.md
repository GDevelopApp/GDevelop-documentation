# Resource bar (separated units)

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/063e9152cf65bc0f3be2a828afd950c3ecf1b1fc72feefdc2467252fe987dc0f_dots-horizontal.svg" class="extension-icon"></img>
A bar that represents a resource in the game (health, mana, ammo, etc).

**Authors and contributors** to this experimental extension: [D8H](https://gd.games/D8H), [VictrisGames](https://gd.games/VictrisGames), [Entropy](https://gd.games/Entropy).

---

A bar that represents a resource in the game (health, mana, ammo, etc).

There are ready-to-use resource bars in the asset-store [resource bars pack](https://editor.gdevelop.io/?initial-dialog=asset-store&asset-pack=resource-bars-resource-bars).

[Read more...](/gdevelop5/objects/resource-bar)

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Resource bar (separated units) 

A bar that represents a resource in the game (health, mana, ammo, etc). 

### Object actions

**Maximum value**  
Change the maximum value of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `TiledUnitsBar::TiledUnitsBar::SetMaxValue`.

**Value**  
Change the value of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `TiledUnitsBar::TiledUnitsBar::SetValue`.

### Object conditions

**Empty**  
Check if the bar is empty.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object

    > Technical note: parameter 1 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `TiledUnitsBar::TiledUnitsBar::IsEmpty`.

**Full**  
Check if the bar is full.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object

    > Technical note: parameter 1 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `TiledUnitsBar::TiledUnitsBar::IsFull`.

**Maximum value**  
Compare the maximum value of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `TiledUnitsBar::TiledUnitsBar::MaxValue`.

**Value**  
Compare the value of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `TiledUnitsBar::TiledUnitsBar::Value`.

### Object expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.MaxValue()` | Return the maximum value of the object. ||
| `Object.Value()` | Return the value of the object. ||


---

*This page is an auto-generated reference page about the **Resource bar (separated units)** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).