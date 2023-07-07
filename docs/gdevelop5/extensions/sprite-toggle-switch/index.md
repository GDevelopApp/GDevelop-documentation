# Toggle switch

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/Line Hero Pack/Master/SVG/Interface Elements/8d0cd8cd0c9318f4f6efde6ee6b4c192bd19306467f80c9970387a259300f895_Interface Elements_interface_ui_toggle_switch_on_off.svg" class="extension-icon"></img>
Toggle switch that users can click or touch.

**Authors and contributors** to this community extension: [D8H](https://gd.games/D8H), [VictrisGames](https://gd.games/VictrisGames).

---

Toggle switch that users can click or touch. The switch can be customized with sprites.

There are ready-to-use toggle switches in the asset-store [settings UI pack](https://editor.gdevelop.io/?initial-dialog=asset-store&asset-pack=settings-ui-settings-ui).

[Read more...](https://wiki.gdevelop.io/gdevelop5/objects/toggle-switch)

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Toggle switch 

A toggle switch that users can click or touch. 

### Object actions

**De/activate interactions**  
De/activate interactions with the button.

**Flip the object horizontally**  
Flip the object horizontally

**Flip the object vertically**  
Flip the object vertically

**Height**  
Change the height of an object.

**Scale**  
Modify the scale of the specified object.

**Check (or uncheck)**  
Check (or uncheck) the toggle switch.

**Opacity**  
Change the opacity of an object, between 0 (fully transparent) to 255 (opaque).

**Is checked property**  
Update the property value for "is checked".

**PreviousIsChecked property**  
Update the property value for "previousIsChecked".

**Center of rotation**  
Change the center of rotation of an object relatively to the object origin.

**Scale on X axis**  
Change the width's scale of an object.

**Scale on Y axis**  
Change the height's scale of an object.

**Toggle Is checked property**  
Toggle the property value for is checked.  
If it was true, it will become false, and if it was false it will become true.

**Toggle PreviousIsChecked property**  
Toggle the property value for previousIsChecked.  
If it was true, it will become false, and if it was false it will become true.

**Update state animation**  
Update the state animation.

**Width**  
Change the width of an object.

### Object conditions

**Horizontally flipped**  
Check if the object is horizontally flipped

**Vertically flipped**  
Check if the object is vertically flipped

**Has just been checked**  
Check if the toggle switch was checked in the current frame.

**Has just been unchecked**  
Check if the toggle switch was unchecked in the current frame.

**Interactions activated**  
Check if interactions are activated on the button.

**Is checked**  
Check if the toggle switch is checked.

**Is clicked**  
Check if the button was just clicked.

**Is focused**  
Check if the button is either hovered or pressed but not hovered.

**Is hovered**  
Check if the cursor is hovered over the button.

**Is idle**  
Check if the button is not used.

**Is pressed**  
Check if the button is currently being pressed with mouse or touch.

**Opacity**  
Compare the opacity of an object, between 0 (fully transparent) to 255 (opaque).

**Is checked property**  
Check the property value for is checked.

**PreviousIsChecked property**  
Check the property value for previousIsChecked.

**Scale on X axis**  
Compare the width's scale of an object.

**Scale on Y axis**  
Compare the height's scale of an object.

### Object expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.Opacity()` | Return the opacity of an object, between 0 (fully transparent) to 255 (opaque). ||
| `Object.ScaleX()` | Return the width's scale of an object. ||
| `Object.ScaleY()` | Return the height's scale of an object. ||

## Button finite state machine 

The finite state machine used internally by the button object. 

### Behavior actions

**Reset state**  
Reset the state of the button.

**Index property**  
Change the property value for the index.

**Mouse is inside property**  
Update the property value for "mouse is inside".

**ShouldCheckHovering property**  
Update the property value for "shouldCheckHovering".

**State property**  
Change the property value for the state.

**Touch id property**  
Change the property value for the touch id.

**Touch is inside property**  
Update the property value for "touch is inside".

**Toggle Mouse is inside property**  
Toggle the property value for mouse is inside.  
If it was true, it will become false, and if it was false it will become true.

**Toggle ShouldCheckHovering property**  
Toggle the property value for shouldCheckHovering.  
If it was true, it will become false, and if it was false it will become true.

**Toggle Touch is inside property**  
Toggle the property value for touch is inside.  
If it was true, it will become false, and if it was false it will become true.

### Behavior conditions

**Is clicked**  
Check if the button was just clicked.

**Is focused**  
Check if the button is either hovered or pressed but not hovered.

**Is hovered**  
Check if the cursor is hovered over the button.

**Is idle**  
Check if the button is not used.

**Is pressed**  
Check if the button is currently being pressed with mouse or touch.

**Is held outside**  
Check if the button is currently being pressed outside with mouse or touch.

**Index property**  
Compare the property value for the index.

**Mouse is inside property**  
Check the property value for mouse is inside.

**ShouldCheckHovering property**  
Check the property value for shouldCheckHovering.

**State property**  
Compare the property value for the state.

**Touch id property**  
Compare the property value for the touch id.

**Touch is inside property**  
Check the property value for touch is inside.

**Touch id**  
Compare the touch id that is using the button or 0 if none.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.ButtonFSM::PropertyIndex()` | Return the property value for the index. ||
| `Object.ButtonFSM::PropertyState()` | Return the property value for the state. ||
| `Object.ButtonFSM::PropertyTouchId()` | Return the property value for the touch id. ||
| `Object.ButtonFSM::TouchId()` | Return the touch id that is using the button or 0 if none. ||

## Switch finite state machine 

The finite state machine used internally by the switch object. 

### Behavior actions

**Check (or uncheck)**  
Check (or uncheck) the toggle switch.

**Is checked property**  
Update the property value for "is checked".

**WasChecked property**  
Update the property value for "wasChecked".

**Toggle Is checked property**  
Toggle the property value for is checked.  
If it was true, it will become false, and if it was false it will become true.

**Toggle WasChecked property**  
Toggle the property value for wasChecked.  
If it was true, it will become false, and if it was false it will become true.

### Behavior conditions

**Has just been checked**  
Check if the toggle switch was checked in the current frame.

**Has just been unchecked**  
Check if the toggle switch was unchecked in the current frame.

**Is checked**  
Check if the toggle switch is checked.

**Is checked property**  
Check the property value for is checked.

**WasChecked property**  
Check the property value for wasChecked.

_No expressions for this behavior._


---

*This page is an auto-generated reference page about the **Toggle switch** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).