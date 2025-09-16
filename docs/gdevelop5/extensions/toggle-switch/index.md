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

**Active track color**  
Change the active track color (the part on the thumb left).

**Active track opacity**  
Change the active track opacity.

**Check (or uncheck) the toggle switch**  
Check (or uncheck) the toggle switch.

**Disable (or enable) the toggle switch**  
Disable (or enable) the toggle switch.

**Halo opacity (hover)**  
Change opacity of the halo when the thumb is hovered.

**Halo opacity (pressed)**  
Change the halo opacity when the thumb is pressed.

**Halo radius**  
Change the halo radius.

**Thumb color (when unchecked)**  
Change the thumb color (when unchecked).

**Inactive track color**  
Change the inactive track color (the part on the thumb right).

**Inactive track opacity**  
Change the inactive track opacity.

**Thumb opacity**  
Change the thumb opacity.

**Thumb radius**  
Change the thumb radius.

**Thumb shadow offset on X axis**  
Change the offset on X axis of the thumb shadow.

**Thumb shadow offset on Y axis**  
Change the offset on Y axis of the thumb shadow.

**Thumb shadow opacity**  
Change the thumb shadow opacity.

**Track height**  
Change the track height.

**Track width**  
Change the track width.

**Toggle the switch**  
If checked, change to unchecked. If unchecked, change to checked.

### Behavior conditions

**Is checked**  
Check if the toggle switch is checked.

**Is disabled**  
Check if the toggle switch is disabled.

**Is mouse hovered over toggle switch?**  
Check if mouse is hovering over toggle switch.

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