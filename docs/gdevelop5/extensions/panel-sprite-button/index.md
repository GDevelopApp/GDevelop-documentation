# Panel sprite button

<img src="https://resources.gdevelop-app.com/assets/Icons/Line Hero Pack/Master/SVG/Interface Elements/Interface Elements_interface_ui_button_ok_cta_clock_tap.svg" class="extension-icon"></img>
A button that can be customized.

**Authors and contributors** to this community extension: [D8H](https://gd.games/D8H).

---

The button can be customized with a background for each state and a label. It handles user interactions and a simple condition can be used to check if it is clicked.

There are ready-to-use buttons in the asset-store [menu buttons pack](https://editor.gdevelop.io/?initial-dialog=asset-store&asset-pack=menu-buttons-menu-buttons).

[Read more...](https://wiki.gdevelop.io/gdevelop5/objects/button)

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Button (panel sprite) 

A button that can be customized. 

### Object actions

**De/activate interactions**  
De/activate interactions with the button.

**CenterLabel**  
Center the label according to the button configuration. This is used in doStepPostEvents when the button is resized.

**Flip the object horizontally**  
Flip the object horizontally

**Flip the object vertically**  
Flip the object vertically

**Height**  
Change the height of an object.

**Scale**  
Modify the scale of the specified object.

**Label text**  
Change the text of the button label.

**Opacity**  
Change the opacity of an object, between 0 (fully transparent) to 255 (opaque).

**Bottom padding property**  
Change the property value for the bottom padding.

**Hovered fade out duration (in seconds) property**  
Change the property value for the hovered fade out duration (in seconds).

**Left padding property**  
Change the property value for the left padding.

**Label offset on Y axis when pressed property**  
Change the property value for the label offset on Y axis when pressed.

**Right padding property**  
Change the property value for the right padding.

**Top padding property**  
Change the property value for the top padding.

**Center of rotation**  
Change the center of rotation of an object relatively to the object origin.

**Scale on X axis**  
Change the width's scale of an object.

**Scale on Y axis**  
Change the height's scale of an object.

**Width**  
Change the width of an object.

### Object conditions

**Horizontally flipped**  
Check if the object is horizontally flipped

**Vertically flipped**  
Check if the object is vertically flipped

**Interactions activated**  
Check if interactions are activated on the button.

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

**Bottom padding property**  
Compare the property value for the bottom padding.

**Hovered fade out duration (in seconds) property**  
Compare the property value for the hovered fade out duration (in seconds).

**Left padding property**  
Compare the property value for the left padding.

**Label offset on Y axis when pressed property**  
Compare the property value for the label offset on Y axis when pressed.

**Right padding property**  
Compare the property value for the right padding.

**Top padding property**  
Compare the property value for the top padding.

**Scale on X axis**  
Compare the width's scale of an object.

**Scale on Y axis**  
Compare the height's scale of an object.

### Object expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.CenterWithPaddingY()` | Return the label center Y according to the button configuration. This expression is used in doStepPostEvents when the button is pressed or released. ||
| `Object.LabelText()` | Return the label text. ||
| `Object.Opacity()` | Return the opacity of an object, between 0 (fully transparent) to 255 (opaque). ||
| `Object.PropertyBottomPadding()` | Return the property value for the bottom padding. ||
| `Object.PropertyHoveredFadeOutDuration()` | Return the property value for the hovered fade out duration (in seconds). ||
| `Object.PropertyLeftPadding()` | Return the property value for the left padding. ||
| `Object.PropertyPressedLabelOffsetY()` | Return the property value for the label offset on Y axis when pressed. ||
| `Object.PropertyRightPadding()` | Return the property value for the right padding. ||
| `Object.PropertyTopPadding()` | Return the property value for the top padding. ||
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

---

*This page is an auto-generated reference page about the **Panel sprite button** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).