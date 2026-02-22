# Toggle switch (for Shape Painter)

<img src="https://resources.gdevelop-app.com/assets/Icons/Glyphster Pack/Master/SVG/Interface Elements/Interface Elements_interface_ui_toggle_switch.svg" class="extension-icon"></img>
Shape Painter toggle switch. Click/touch to toggle on/off with hover halo.

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

### Behavior properties

- **Active thumb color string. Example:  24;119;211** (🔤 String). Default value is `24;119;211`.
- **Color string for the track that is LEFT of the thumb. Example:  24;119;211 (Leave blank to use thumb color)** (🔤 String).
- **Opacity of the track that is LEFT of the thumb.  Example: 128** (🔢 Number). Default value is `128`.
- **Checked** (🔘 Boolean). Default value is `false`.
- **Disabled** (🔘 Boolean). Default value is `false`.
- **Opacity of halo when the mouse hovers on the thumb. Example: 32** (🔢 Number). Default value is `32`.
- **Opacity of the halo that appears when the toggle switch is pressed. Example: 64** (🔢 Number). Default value is `64`.
- **Size of halo when the mouse hovers and clicks on the thumb. Example: 24** (🔢 Number). Default value is `24`.
- **Inactive thumb color string. Example:  255;255;255** (🔤 String). Default value is `255;255;255`.
- **Color string for the track that is RIGHT of the thumb. Example:  150;150;150  (Leave blank to use thumb color)** (🔤 String). Default value is `150;150;150`.
- **Opacity of the track that is RIGHT of the thumb.  Example: 255** (🔢 Number). Default value is `255`.
- **Opacity of the thumb. Example: 255** (🔢 Number). Default value is `255`.
- **Radius of the thumb (px) Example: 10** (🔢 Number). Default value is `10`.
- **Offset (X) of shadow on thumb.  Positive numbers move shadow right, negative numbers move shadow left. Example: 0** (🔢 Number). Default value is `0`.
- **Offset (Y) of shadow on thumb.  Positive numbers move shadow down, negative numbers move shadow up. Example: 4** (🔢 Number). Default value is `4`.
- **Opacity of shadow on thumb. Example: 32** (🔢 Number). Default value is `32`.
- **Height of the track (pixels) Example: 14** (🔢 Number). Default value is `14`.
- **Width of the track (pixels) Example: 20** (🔢 Number). Default value is `20`.

??? quote "See internal technical details"


    - **Active thumb color string. Example:  24;119;211** is stored as `ActiveThumbColor` (String). Default value is `24;119;211`.
    - **Color string for the track that is LEFT of the thumb. Example:  24;119;211 (Leave blank to use thumb color)** is stored as `ActiveTrackColor` (String). Default value is ``.
    - **Opacity of the track that is LEFT of the thumb.  Example: 128** is stored as `ActiveTrackOpacity` (Number). Default value is `128`.
    - **Checked** is stored as `Checked` (Boolean). Default value is `false`.
    - **Disabled** is stored as `Disabled` (Boolean). Default value is `false`.
    - **Opacity of halo when the mouse hovers on the thumb. Example: 32** is stored as `HaloOpacityHover` (Number). Default value is `32`.
    - **Opacity of the halo that appears when the toggle switch is pressed. Example: 64** is stored as `HaloOpacityPressed` (Number). Default value is `64`.
    - **Size of halo when the mouse hovers and clicks on the thumb. Example: 24** is stored as `HaloRadius` (Number). Default value is `24`.
    - **Inactive thumb color string. Example:  255;255;255** is stored as `InactiveThumbColor` (String). Default value is `255;255;255`.
    - **Color string for the track that is RIGHT of the thumb. Example:  150;150;150  (Leave blank to use thumb color)** is stored as `InactiveTrackColor` (String). Default value is `150;150;150`.
    - **Opacity of the track that is RIGHT of the thumb.  Example: 255** is stored as `InactiveTrackOpacity` (Number). Default value is `255`.
    - **Opacity of the thumb. Example: 255** is stored as `ThumbOpacity` (Number). Default value is `255`.
    - **Radius of the thumb (px) Example: 10** is stored as `ThumbRadius` (Number). Default value is `10`.
    - **Offset (X) of shadow on thumb.  Positive numbers move shadow right, negative numbers move shadow left. Example: 0** is stored as `ThumbShadowOffsetX` (Number). Default value is `0`.
    - **Offset (Y) of shadow on thumb.  Positive numbers move shadow down, negative numbers move shadow up. Example: 4** is stored as `ThumbShadowOffsetY` (Number). Default value is `4`.
    - **Opacity of shadow on thumb. Example: 32** is stored as `ThumbShadowOpacity` (Number). Default value is `32`.
    - **Height of the track (pixels) Example: 14** is stored as `TrackHeight` (Number). Default value is `14`.
    - **Width of the track (pixels) Example: 20** is stored as `TrackWidth` (Number). Default value is `20`.

### Behavior actions

**Thumb color (when checked)**  
Change the thumb color (when checked).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🎨 Color): Thumb color

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ToggleSwitch::ToggleSwitch::SetActiveThumbColor`.

**Active track color**  
Change the active track color (the part on the thumb left).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🎨 Color): Color of active track

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
    - Parameter 2 (🎨 Color): Thumb color

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ToggleSwitch::ToggleSwitch::SetInactiveThumbColor`.

**Inactive track color**  
Change the inactive track color (the part on the thumb right).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🎨 Color): Color of inactive track

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

*This page is an auto-generated reference page about the **Toggle switch (for Shape Painter)** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).