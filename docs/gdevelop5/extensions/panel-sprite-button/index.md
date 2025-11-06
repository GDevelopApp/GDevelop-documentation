# Panel sprite button

<img src="https://resources.gdevelop-app.com/assets/Icons/Line Hero Pack/Master/SVG/Interface Elements/Interface Elements_interface_ui_button_ok_cta_clock_tap.svg" class="extension-icon"></img>
A button that can be customized.

**Authors and contributors** to this experimental extension: [D8H](https://gd.games/D8H).

---

A button that can be used for menus and most labelled buttons of a game. The button can be customized with a background for each state and a label. It handles user interactions and a simple condition can be used to check if it is clicked.

There are ready-to-use buttons in the asset-store [menu buttons pack](https://editor.gdevelop.io/?initial-dialog=asset-store&asset-pack=menu-buttons-menu-buttons).

[Read more...](/gdevelop5/objects/button)

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Button (panel sprite) 

A button that can be customized. 

### Object properties

- **Label** (🔤 Multiline text (String)).
- **Hovered fade out duration** (🔢 Number, Duration). Default value is `0.25`.
- **Label offset on Y axis when pressed** (🔢 Number, Distance). Default value is `0`.

??? quote "See internal technical details"


    - **Label** is stored as `LabelText` (MultilineString). Default value is ``.
    - **Hovered fade out duration** is stored as `HoveredFadeOutDuration` (Number). Unit is Second. Default value is `0.25`.
    - **Label offset on Y axis when pressed** is stored as `PressedLabelOffsetY` (Number). Unit is Pixel. Default value is `0`.

### Object actions

**De/activate interactions**  
De/activate interactions with the button.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (❓ Yes or No): Activate

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PanelSpriteButton::PanelSpriteButton::Activate`.

**Label text**  
Change the label text.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (string): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PanelSpriteButton::PanelSpriteButton::SetLabelTextOp`.


### Object conditions

**Interactions activated**  
Check if interactions are activated on the button.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object

    > Technical note: parameter 1 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PanelSpriteButton::PanelSpriteButton::IsActivated`.

**Is clicked**  
Check if the button was just clicked.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object

    > Technical note: parameter 1 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PanelSpriteButton::PanelSpriteButton::IsClicked`.

**Is focused**  
Check if the button is either hovered or pressed but not hovered.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object

    > Technical note: parameter 1 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PanelSpriteButton::PanelSpriteButton::IsFocused`.

**Is hovered**  
Check if the cursor is hovered over the button.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object

    > Technical note: parameter 1 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PanelSpriteButton::PanelSpriteButton::IsHovered`.

**Is idle**  
Check if the button is not used.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object

    > Technical note: parameter 1 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PanelSpriteButton::PanelSpriteButton::IsIdle`.

**Is pressed**  
Check if the button is currently being pressed with mouse or touch.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object

    > Technical note: parameter 1 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PanelSpriteButton::PanelSpriteButton::IsPressed`.

**Label text**  
Compare the label text.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: relationaloperator
    - Parameter 2 (string): Value to compare

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PanelSpriteButton::PanelSpriteButton::LabelText`.


### Object expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.LabelText()` | Return the label text. ||


---

*This page is an auto-generated reference page about the **Panel sprite button** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).