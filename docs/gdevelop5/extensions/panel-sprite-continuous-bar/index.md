# Resource bar (continuous)

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/Glyphster Pack/Master/SVG/Interface Elements/ea06363a57846caab544f536b78a952234b68d4941d41c1577852a1d61aefec3_Interface Elements_interface_ui_loading_progress_bar.svg" class="extension-icon"></img>
Continuous resource bar (9-patch) for health/mana/ammo with smooth fill animation.

**Authors and contributors** to this experimental extension: [D8H](https://gd.games/D8H), [VictrisGames](https://gd.games/VictrisGames), [Entropy](https://gd.games/Entropy).

---

A bar that represents a resource in the game (health, mana, ammo, etc).

There are ready-to-use resource bars in the asset-store [resource bars pack](https://editor.gdevelop.io/?initial-dialog=asset-store&asset-pack=resource-bars-resource-bars).

[Read more...](/gdevelop5/objects/resource-bar)

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Resource bar (continuous) 

A bar that represents a resource in the game (health, mana, ammo, etc). 

### Object properties

- **Maximum value** (🔢 Number). Default value is `3`.
- **Initial value** (🔢 Number). Default value is `3`.
- **Previous high value conservation duration (in seconds)** (🔢 Number, Duration). Default value is `1`.
- **Easing duration** (🔢 Number, Duration). Default value is `0.25`.
- **Show the label** (🔘 Boolean). Default value is `true`.

??? quote "See internal technical details"


    - **Maximum value** is stored as `MaxValue` (Number). Default value is `3`.
    - **Initial value** is stored as `InitialValue` (Number). Default value is `3`.
    - **Previous high value conservation duration (in seconds)** is stored as `PreviousHighValueDuration` (Number). Unit is Second. Default value is `1`.
    - **Easing duration** is stored as `EasingDuration` (Number). Unit is Second. Default value is `0.25`.
    - **Show the label** is stored as `ShowLabel` (Boolean). Default value is `true`.

### Object actions

**Show label**  
Show (or hide) the label on the bar.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (❓ Yes or No): Show the label

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PanelSpriteContinuousBar::PanelSpriteContinuousBar::SetLabelShown`.

**Maximum value**  
Change the maximum value of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PanelSpriteContinuousBar::PanelSpriteContinuousBar::SetMaxValue`.

**Previous value conservation duration**  
Change the previous value conservation duration (in seconds) of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PanelSpriteContinuousBar::PanelSpriteContinuousBar::SetPreviousValueDuration`.

**Value**  
Change the value of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PanelSpriteContinuousBar::PanelSpriteContinuousBar::SetValue`.


### Object conditions

**Empty**  
Check if the bar is empty.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object

    > Technical note: parameter 1 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PanelSpriteContinuousBar::PanelSpriteContinuousBar::IsEmpty`.

**Full**  
Check if the bar is full.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object

    > Technical note: parameter 1 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PanelSpriteContinuousBar::PanelSpriteContinuousBar::IsFull`.

**Label is shown**  
Check if the label is shown.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object

    > Technical note: parameter 1 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PanelSpriteContinuousBar::PanelSpriteContinuousBar::IsLabelShown`.

**Maximum value**  
Compare the maximum value of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PanelSpriteContinuousBar::PanelSpriteContinuousBar::MaxValue`.

**Previous value conservation duration**  
Compare the previous value conservation duration (in seconds) of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PanelSpriteContinuousBar::PanelSpriteContinuousBar::PreviousValueDuration`.

**Value**  
Compare the value of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PanelSpriteContinuousBar::PanelSpriteContinuousBar::Value`.


### Object expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.MaxValue()` | Return the maximum value of the object. ||
| `Object.PreviousValueDuration()` | Return the previous value conservation duration (in seconds) of the object. ||
| `Object.Value()` | Return the value of the object. ||


---

*This page is an auto-generated reference page about the **Resource bar (continuous)** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).