# Toggle switch (for Shape Painter)

<img src="https://resources.gdevelop-app.com/assets/Icons/Glyphster Pack/Master/SVG/Interface Elements/Interface Elements_interface_ui_toggle_switch.svg" class="extension-icon"></img>
Toggle switch that users can click or touch.

**Authors and contributors** to this community extension: [VictrisGames](https://gd.games/VictrisGames).

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

**Active thumb color string. Example:  24;119;211 property**  
Change the property value for the active thumb color string. Example:  24;119;211.

**Color string for the track that is LEFT of the thumb. Example:  24;119;211 (Leave blank to use thumb color) property**  
Change the property value for the color string for the track that is LEFT of the thumb. Example:  24;119;211 (Leave blank to use thumb color).

**Opacity of the track that is LEFT of the thumb.  Example: 128 property**  
Change the property value for the opacity of the track that is LEFT of the thumb.  Example: 128.

**Checked property**  
Update the property value for "checked".

**Disabled property**  
Update the property value for "disabled".

**Opacity of halo when the mouse hovers on the thumb. Example: 32 property**  
Change the property value for the opacity of halo when the mouse hovers on the thumb. Example: 32.

**Opacity of the halo that appears when the toggle switch is pressed. Example: 64 property**  
Change the property value for the opacity of the halo that appears when the toggle switch is pressed. Example: 64.

**Size of halo when the mouse hovers and clicks on the thumb. Example: 24 property**  
Change the property value for the size of halo when the mouse hovers and clicks on the thumb. Example: 24.

**Inactive thumb color string. Example:  255;255;255 property**  
Change the property value for the inactive thumb color string. Example:  255;255;255.

**Color string for the track that is RIGHT of the thumb. Example:  150;150;150  (Leave blank to use thumb color) property**  
Change the property value for the color string for the track that is RIGHT of the thumb. Example:  150;150;150  (Leave blank to use thumb color).

**Opacity of the track that is RIGHT of the thumb.  Example: 255 property**  
Change the property value for the opacity of the track that is RIGHT of the thumb.  Example: 255.

**Is hovered property**  
Update the property value for "is hovered".

**Click or press has started on toggle switch property**  
Update the property value for "click or press has started on toggle switch".

**Need redraw property**  
Update the property value for "need redraw".

**Number of pixels the thumb is from the left side of the track. property**  
Change the property value for the number of pixels the thumb is from the left side of the track..

**Opacity of the thumb. Example: 255 property**  
Change the property value for the opacity of the thumb. Example: 255.

**Radius of the thumb (px) Example: 10 property**  
Change the property value for the radius of the thumb (px) Example: 10.

**Offset (X) of shadow on thumb.  Positive numbers move shadow right, negative numbers move shadow left. Example: 0 property**  
Change the property value for the offset (X) of shadow on thumb.  Positive numbers move shadow right, negative numbers move shadow left. Example: 0.

**Offset (Y) of shadow on thumb.  Positive numbers move shadow down, negative numbers move shadow up. Example: 4 property**  
Change the property value for the offset (Y) of shadow on thumb.  Positive numbers move shadow down, negative numbers move shadow up. Example: 4.

**Opacity of shadow on thumb. Example: 32 property**  
Change the property value for the opacity of shadow on thumb. Example: 32.

**State has been changed (used in ToggleChecked function) property**  
Update the property value for "state has been changed (used in ToggleChecked function)".

**Height of the track (pixels) Example: 14 property**  
Change the property value for the height of the track (pixels) Example: 14.

**Width of the track (pixels) Example: 20 property**  
Change the property value for the width of the track (pixels) Example: 20.

**Was hovered property**  
Update the property value for "was hovered".

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

**Toggle Checked property**  
Toggle the property value for checked.  
If it was true, it will become false, and if it was false it will become true.

**Toggle Disabled property**  
Toggle the property value for disabled.  
If it was true, it will become false, and if it was false it will become true.

**Toggle Is hovered property**  
Toggle the property value for is hovered.  
If it was true, it will become false, and if it was false it will become true.

**Toggle Click or press has started on toggle switch property**  
Toggle the property value for click or press has started on toggle switch.  
If it was true, it will become false, and if it was false it will become true.

**Toggle Need redraw property**  
Toggle the property value for need redraw.  
If it was true, it will become false, and if it was false it will become true.

**Toggle State has been changed (used in ToggleChecked function) property**  
Toggle the property value for state has been changed (used in ToggleChecked function).  
If it was true, it will become false, and if it was false it will become true.

**Toggle Was hovered property**  
Toggle the property value for was hovered.  
If it was true, it will become false, and if it was false it will become true.

### Behavior conditions

**Is checked**  
Check if the toggle switch is checked.

**Is disabled**  
Check if the toggle switch is disabled.

**Is mouse hovered over toggle switch?**  
Check if mouse is hovering over toggle switch.

**Active thumb color string. Example:  24;119;211 property**  
Compare the property value for the active thumb color string. Example:  24;119;211.

**Color string for the track that is LEFT of the thumb. Example:  24;119;211 (Leave blank to use thumb color) property**  
Compare the property value for the color string for the track that is LEFT of the thumb. Example:  24;119;211 (Leave blank to use thumb color).

**Opacity of the track that is LEFT of the thumb.  Example: 128 property**  
Compare the property value for the opacity of the track that is LEFT of the thumb.  Example: 128.

**Checked property**  
Check the property value for checked.

**Disabled property**  
Check the property value for disabled.

**Opacity of halo when the mouse hovers on the thumb. Example: 32 property**  
Compare the property value for the opacity of halo when the mouse hovers on the thumb. Example: 32.

**Opacity of the halo that appears when the toggle switch is pressed. Example: 64 property**  
Compare the property value for the opacity of the halo that appears when the toggle switch is pressed. Example: 64.

**Size of halo when the mouse hovers and clicks on the thumb. Example: 24 property**  
Compare the property value for the size of halo when the mouse hovers and clicks on the thumb. Example: 24.

**Inactive thumb color string. Example:  255;255;255 property**  
Compare the property value for the inactive thumb color string. Example:  255;255;255.

**Color string for the track that is RIGHT of the thumb. Example:  150;150;150  (Leave blank to use thumb color) property**  
Compare the property value for the color string for the track that is RIGHT of the thumb. Example:  150;150;150  (Leave blank to use thumb color).

**Opacity of the track that is RIGHT of the thumb.  Example: 255 property**  
Compare the property value for the opacity of the track that is RIGHT of the thumb.  Example: 255.

**Is hovered property**  
Check the property value for is hovered.

**Click or press has started on toggle switch property**  
Check the property value for click or press has started on toggle switch.

**Need redraw property**  
Check the property value for need redraw.

**Number of pixels the thumb is from the left side of the track. property**  
Compare the property value for the number of pixels the thumb is from the left side of the track..

**Opacity of the thumb. Example: 255 property**  
Compare the property value for the opacity of the thumb. Example: 255.

**Radius of the thumb (px) Example: 10 property**  
Compare the property value for the radius of the thumb (px) Example: 10.

**Offset (X) of shadow on thumb.  Positive numbers move shadow right, negative numbers move shadow left. Example: 0 property**  
Compare the property value for the offset (X) of shadow on thumb.  Positive numbers move shadow right, negative numbers move shadow left. Example: 0.

**Offset (Y) of shadow on thumb.  Positive numbers move shadow down, negative numbers move shadow up. Example: 4 property**  
Compare the property value for the offset (Y) of shadow on thumb.  Positive numbers move shadow down, negative numbers move shadow up. Example: 4.

**Opacity of shadow on thumb. Example: 32 property**  
Compare the property value for the opacity of shadow on thumb. Example: 32.

**State has been changed (used in ToggleChecked function) property**  
Check the property value for state has been changed (used in ToggleChecked function).

**Height of the track (pixels) Example: 14 property**  
Compare the property value for the height of the track (pixels) Example: 14.

**Width of the track (pixels) Example: 20 property**  
Compare the property value for the width of the track (pixels) Example: 20.

**Was hovered property**  
Check the property value for was hovered.

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
| `Object.ToggleSwitch::PropertyActiveThumbColor()` | Return the property value for the active thumb color string. Example:  24;119;211. ||
| `Object.ToggleSwitch::PropertyActiveTrackColor()` | Return the property value for the color string for the track that is LEFT of the thumb. Example:  24;119;211 (Leave blank to use thumb color). ||
| `Object.ToggleSwitch::PropertyActiveTrackOpacity()` | Return the property value for the opacity of the track that is LEFT of the thumb.  Example: 128. ||
| `Object.ToggleSwitch::PropertyHaloOpacityHover()` | Return the property value for the opacity of halo when the mouse hovers on the thumb. Example: 32. ||
| `Object.ToggleSwitch::PropertyHaloOpacityPressed()` | Return the property value for the opacity of the halo that appears when the toggle switch is pressed. Example: 64. ||
| `Object.ToggleSwitch::PropertyHaloRadius()` | Return the property value for the size of halo when the mouse hovers and clicks on the thumb. Example: 24. ||
| `Object.ToggleSwitch::PropertyInactiveThumbColor()` | Return the property value for the inactive thumb color string. Example:  255;255;255. ||
| `Object.ToggleSwitch::PropertyInactiveTrackColor()` | Return the property value for the color string for the track that is RIGHT of the thumb. Example:  150;150;150  (Leave blank to use thumb color). ||
| `Object.ToggleSwitch::PropertyInactiveTrackOpacity()` | Return the property value for the opacity of the track that is RIGHT of the thumb.  Example: 255. ||
| `Object.ToggleSwitch::PropertyThumbOffset()` | Return the property value for the number of pixels the thumb is from the left side of the track.. ||
| `Object.ToggleSwitch::PropertyThumbOpacity()` | Return the property value for the opacity of the thumb. Example: 255. ||
| `Object.ToggleSwitch::PropertyThumbRadius()` | Return the property value for the radius of the thumb (px) Example: 10. ||
| `Object.ToggleSwitch::PropertyThumbShadowOffsetX()` | Return the property value for the offset (X) of shadow on thumb.  Positive numbers move shadow right, negative numbers move shadow left. Example: 0. ||
| `Object.ToggleSwitch::PropertyThumbShadowOffsetY()` | Return the property value for the offset (Y) of shadow on thumb.  Positive numbers move shadow down, negative numbers move shadow up. Example: 4. ||
| `Object.ToggleSwitch::PropertyThumbShadowOpacity()` | Return the property value for the opacity of shadow on thumb. Example: 32. ||
| `Object.ToggleSwitch::PropertyTrackHeight()` | Return the property value for the height of the track (pixels) Example: 14. ||
| `Object.ToggleSwitch::PropertyTrackWidth()` | Return the property value for the width of the track (pixels) Example: 20. ||
| `Object.ToggleSwitch::ThumbOpacity()` | Thumb opacity. ||
| `Object.ToggleSwitch::ThumbShadowOffsetX()` | Offset (X) of shadow on thumb. ||
| `Object.ToggleSwitch::ThumbShadowOffsetY()` | Offset (Y) of shadow on thumb. ||
| `Object.ToggleSwitch::ThumbShadowOpacity()` | Opacity of shadow on thumb. ||
| `Object.ToggleSwitch::TrackHeight()` | Track height. ||
| `Object.ToggleSwitch::TrackWidth()` | Track width. ||

---

*This page is an auto-generated reference page about the **Toggle switch (for Shape Painter)** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).