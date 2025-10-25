# Toggle switch (for Shape Painter)

<img src="https://resources.gdevelop-app.com/assets/Icons/Glyphster Pack/Master/SVG/Interface Elements/Interface Elements_interface_ui_toggle_switch.svg" class="extension-icon"></img>
Toggle switch that users can click or touch.

**Authors and contributors** to this experimental extension: [VictrisGames](https://gd.games/VictrisGames).

---

Add this behavior to a shape painter object.

When the toggle switch is in the *left* position, the condition `Checked` is "false". If it is in the *right* position, the condition `Checked` is true.
A halo appears when the mouse hovers near the toggle switch.

Toggle switch cannot be toggled by users if any of these are true:

- Toggle switch is hidden
- Toggle switch's layer is hidden
- Toggle switch is disabled

Toggle switch can always be changed by an action.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Toggle switch 

Use a shape-painter object to draw a toggle switch that users can click or touch. 

### Behavior actions

**Thumb color (when checked)**  
Change the thumb color (when checked).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (color): Thumb color

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ToggleSwitch::ToggleSwitch::SetActiveThumbColor`.

**Active track color**  
Change the active track color (the part on the thumb left).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (color): Color of active track

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ToggleSwitch::ToggleSwitch::SetActiveTrackColor`.

**Active track opacity**  
Change the active track opacity.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Active track opacity

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ToggleSwitch::ToggleSwitch::SetActiveTrackOpacity`.

**Check (or uncheck) the toggle switch**  
Check (or uncheck) the toggle switch.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): Checked

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ToggleSwitch::ToggleSwitch::SetChecked`.

**Disable (or enable) the toggle switch**  
Disable (or enable) the toggle switch.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): Disabled

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ToggleSwitch::ToggleSwitch::SetDisabled`.

**Halo opacity (hover)**  
Change opacity of the halo when the thumb is hovered.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Halo opacity (hover)

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ToggleSwitch::ToggleSwitch::SetHaloOpacityHover`.

**Halo opacity (pressed)**  
Change the halo opacity when the thumb is pressed.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Halo opacity (pressed)

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ToggleSwitch::ToggleSwitch::SetHaloOpacityPressed`.

**Halo radius**  
Change the halo radius.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Halo radius 

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ToggleSwitch::ToggleSwitch::SetHaloRadius`.

**Thumb color (when unchecked)**  
Change the thumb color (when unchecked).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (color): Thumb color

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ToggleSwitch::ToggleSwitch::SetInactiveThumbColor`.

**Inactive track color**  
Change the inactive track color (the part on the thumb right).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (color): Color of inactive track

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ToggleSwitch::ToggleSwitch::SetInactiveTrackColor`.

**Inactive track opacity**  
Change the inactive track opacity.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Inactive track opacity

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ToggleSwitch::ToggleSwitch::SetInactiveTrackOpacity`.

**Thumb opacity**  
Change the thumb opacity.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Thumb opacity

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ToggleSwitch::ToggleSwitch::SetThumbOpacity`.

**Thumb radius**  
Change the thumb radius.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Thumb radius

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ToggleSwitch::ToggleSwitch::SetThumbRadius`.

**Thumb shadow offset on X axis**  
Change the offset on X axis of the thumb shadow.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): X offset (pixels)

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ToggleSwitch::ToggleSwitch::SetThumbShadowOffsetX`.

**Thumb shadow offset on Y axis**  
Change the offset on Y axis of the thumb shadow.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Y offset (pixels)

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ToggleSwitch::ToggleSwitch::SetThumbShadowOffsetY`.

**Thumb shadow opacity**  
Change the thumb shadow opacity.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Opacity of shadow on thumb

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ToggleSwitch::ToggleSwitch::SetThumbShadowOpacity`.

**Track height**  
Change the track height.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Track height

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ToggleSwitch::ToggleSwitch::SetTrackHeight`.

**Track width**  
Change the track width.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Track width

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ToggleSwitch::ToggleSwitch::SetTrackWidth`.

**Toggle the switch**  
If checked, change to unchecked. If unchecked, change to checked.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ToggleSwitch::ToggleSwitch::ToggleChecked`.

### Behavior conditions

**Is checked**  
Check if the toggle switch is checked.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ToggleSwitch::ToggleSwitch::IsChecked`.

**Is disabled**  
Check if the toggle switch is disabled.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ToggleSwitch::ToggleSwitch::IsDisabled`.

**Is mouse hovered over toggle switch?**  
Check if mouse is hovering over toggle switch.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ToggleSwitch::ToggleSwitch::IsHoveredOver`.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.ToggleSwitch::ActiveThumbColor()` | Active thumb color. ||
| `Object.ToggleSwitch::ActiveTrackColor()` | Active track color. ||
| `Object.ToggleSwitch::ActiveTrackOpacity()` | Active track opacity. ||
| `Object.ToggleSwitch::HaloOpacityHover()` | Halo opacity (hover). ||
| `Object.ToggleSwitch::HaloOpacityPressed()` | Halo opacity (pressed). ||
| `Object.ToggleSwitch::HaloRadius()` | Halo radius (pixels). ||
| `Object.ToggleSwitch::InactiveThumbColor()` | Inactive thumb color. ||
| `Object.ToggleSwitch::InactiveTrackColor()` | Inactive track color. ||
| `Object.ToggleSwitch::InactiveTrackOpacity()` | Inactive track opacity. ||
| `Object.ToggleSwitch::ThumbOpacity()` | Thumb opacity. ||
| `Object.ToggleSwitch::ThumbShadowOffsetX()` | Offset (X) of shadow on thumb. ||
| `Object.ToggleSwitch::ThumbShadowOffsetY()` | Offset (Y) of shadow on thumb. ||
| `Object.ToggleSwitch::ThumbShadowOpacity()` | Opacity of shadow on thumb. ||
| `Object.ToggleSwitch::TrackHeight()` | Track height. ||
| `Object.ToggleSwitch::TrackWidth()` | Track width. ||


---

*This page is an auto-generated reference page about the **Toggle switch (for Shape Painter)** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).