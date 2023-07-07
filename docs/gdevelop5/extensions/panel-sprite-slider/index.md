# Slider

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/Line Hero Pack/Master/SVG/UI Essentials/1678c39a3b2bd3df4f82a8a293770db4986a6bcfd3f78e738ddfc86e39176423_UI Essentials_sliders_options.svg" class="extension-icon"></img>
A draggable slider that users can move to select a numerical value.

**Authors and contributors** to this community extension: [D8H](https://gd.games/D8H), [VictrisGames](https://gd.games/VictrisGames).

---

A draggable slider that users can move to select a numerical value. The slider can be customized with sprites.

There are ready-to-use sliders in the asset-store [settings UI pack](https://editor.gdevelop.io/?initial-dialog=asset-store&asset-pack=settings-ui-settings-ui).

[Read more...](https://wiki.gdevelop.io/gdevelop5/objects/slider)

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Slider 

Let users select a numerical value by dragging a slider. 

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

**Show label**  
Show (or hide) the label on the bar.

**Maximum value**  
Change the maximum value of the slider.

**Minimum value**  
Change the minimum value of the slider.

**Opacity**  
Change the opacity of an object, between 0 (fully transparent) to 255 (opaque).

**Bar bottom margin property**  
Change the property value for the bar bottom margin.

**Bar left margin property**  
Change the property value for the bar left margin.

**Bar right margin property**  
Change the property value for the bar right margin.

**Bar top margin property**  
Change the property value for the bar top margin.

**Initial value property**  
Change the property value for the initial value.

**Label margin property**  
Change the property value for the label margin.

**Maximum value property**  
Change the property value for the maximum value.

**Minimum value property**  
Change the property value for the minimum value.

**PreviousInitialValue property**  
Change the property value for the previousInitialValue.

**ShowLabel property**  
Update the property value for "showLabel".

**Show the label when the value is changed property**  
Update the property value for "show the label when the value is changed".

**Step size property**  
Change the property value for the step size.

**ThumbAnchorOrigin property**  
Change the property value for the thumbAnchorOrigin.

**ThumbAnchorTarget property**  
Change the property value for the thumbAnchorTarget.

**Center of rotation**  
Change the center of rotation of an object relatively to the object origin.

**Scale on X axis**  
Change the width's scale of an object.

**Scale on Y axis**  
Change the height's scale of an object.

**Step size**  
Change the step size of the slider.

**Value**  
Change the value of the slider.

**Toggle ShowLabel property**  
Toggle the property value for showLabel.  
If it was true, it will become false, and if it was false it will become true.

**Toggle Show the label when the value is changed property**  
Toggle the property value for show the label when the value is changed.  
If it was true, it will become false, and if it was false it will become true.

**Update layout**  
Center the bar according to the button configuration. This is used in doStepPostEvents when the button is resized.

**Update slider configuration**  
Update the slider configuration.

**Update thumb position**  
Update the thumb position according to the slider value.

**Width**  
Change the width of an object.

### Object conditions

**Horizontally flipped**  
Check if the object is horizontally flipped

**Vertically flipped**  
Check if the object is vertically flipped

**Interactions activated**  
Check if the slider allows interactions.

**Being dragged**  
Check if the slider is being dragged.

**Label is shown**  
Check if the label is shown.

**Maximum value**  
Compare the maximum value of the slider.

**Minimum value**  
Compare the minimum value of the slider.

**Opacity**  
Compare the opacity of an object, between 0 (fully transparent) to 255 (opaque).

**Bar bottom margin property**  
Compare the property value for the bar bottom margin.

**Bar left margin property**  
Compare the property value for the bar left margin.

**Bar right margin property**  
Compare the property value for the bar right margin.

**Bar top margin property**  
Compare the property value for the bar top margin.

**Initial value property**  
Compare the property value for the initial value.

**Label margin property**  
Compare the property value for the label margin.

**Maximum value property**  
Compare the property value for the maximum value.

**Minimum value property**  
Compare the property value for the minimum value.

**PreviousInitialValue property**  
Compare the property value for the previousInitialValue.

**ShowLabel property**  
Check the property value for showLabel.

**Show the label when the value is changed property**  
Check the property value for show the label when the value is changed.

**Step size property**  
Compare the property value for the step size.

**ThumbAnchorOrigin property**  
Compare the property value for the thumbAnchorOrigin.

**ThumbAnchorTarget property**  
Compare the property value for the thumbAnchorTarget.

**Scale on X axis**  
Compare the width's scale of an object.

**Scale on Y axis**  
Compare the height's scale of an object.

**Step size**  
Compare the step size of the slider.

**Value**  
Compare the value of the slider.

### Object expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.FullBarLeft()` |  ||
| `Object.FullBarRight()` |  ||
| `Object.FullBarWidth()` |  ||
| `Object.MaxValue()` | Return the maximum value of the slider. ||
| `Object.MinValue()` | Return the minimum value of the slider. ||
| `Object.Opacity()` | Return the opacity of an object, between 0 (fully transparent) to 255 (opaque). ||
| `Object.PropertyBarBottomPadding()` | Return the property value for the bar bottom margin. ||
| `Object.PropertyBarLeftPadding()` | Return the property value for the bar left margin. ||
| `Object.PropertyBarRightPadding()` | Return the property value for the bar right margin. ||
| `Object.PropertyBarTopPadding()` | Return the property value for the bar top margin. ||
| `Object.PropertyInitialValue()` | Return the property value for the initial value. ||
| `Object.PropertyLabelMargin()` | Return the property value for the label margin. ||
| `Object.PropertyMaxValue()` | Return the property value for the maximum value. ||
| `Object.PropertyMinValue()` | Return the property value for the minimum value. ||
| `Object.PropertyPreviousInitialValue()` | Return the property value for the previousInitialValue. ||
| `Object.PropertyStepSize()` | Return the property value for the step size. ||
| `Object.PropertyThumbAnchorOrigin()` | Return the property value for the thumbAnchorOrigin. ||
| `Object.PropertyThumbAnchorTarget()` | Return the property value for the thumbAnchorTarget. ||
| `Object.ScaleX()` | Return the width's scale of an object. ||
| `Object.ScaleY()` | Return the height's scale of an object. ||
| `Object.StepSize()` | Return the step size of the slider. ||
| `Object.Value()` | Return the value of the slider. ||

## Button finite state machine 

The finite state machine used internally by the button object. 

### Behavior actions

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

## Slider 

Represent a value on a slider. 

### Behavior actions

**Maximum value**  
Change the maximum value of the object.

**Minimum value**  
Change the minimum value of the object.

**Maximum value property**  
Change the property value for the maximum value.

**Minimum value property**  
Change the property value for the minimum value.

**Step size property**  
Change the property value for the step size.

**Value property**  
Change the property value for the value.

**Step size**  
Change the step size of the object.

**Value**  
Change the value of the object.

### Behavior conditions

**Maximum value**  
Compare the maximum value of the object.

**Minimum value**  
Compare the minimum value of the object.

**Maximum value property**  
Compare the property value for the maximum value.

**Minimum value property**  
Compare the property value for the minimum value.

**Step size property**  
Compare the property value for the step size.

**Value property**  
Compare the property value for the value.

**Size**  
Compare the bar value bounds size.

**Step size**  
Compare the step size of the object.

**Value**  
Compare the value of the object.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.Slider::MaxValue()` | Return the maximum value of the object. ||
| `Object.Slider::MinValue()` | Return the minimum value of the object. ||
| `Object.Slider::PropertyMaxValue()` | Return the property value for the maximum value. ||
| `Object.Slider::PropertyMinValue()` | Return the property value for the minimum value. ||
| `Object.Slider::PropertyStepSize()` | Return the property value for the step size. ||
| `Object.Slider::PropertyValue()` | Return the property value for the value. ||
| `Object.Slider::Size()` | Return the bar value bounds size. ||
| `Object.Slider::StepSize()` | Return the step size of the object. ||
| `Object.Slider::Value()` | Return the value of the object. ||

---

*This page is an auto-generated reference page about the **Slider** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).