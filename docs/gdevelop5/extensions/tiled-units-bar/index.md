# Resource bar (separated units)

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/063e9152cf65bc0f3be2a828afd950c3ecf1b1fc72feefdc2467252fe987dc0f_dots-horizontal.svg" class="extension-icon"></img>
A bar that represents a resource in the game (health, mana, ammo, etc).

**Authors and contributors** to this community extension: [D8H](https://gd.games/D8H), [VictrisGames](https://gd.games/VictrisGames), [Entropy](https://gd.games/Entropy).

---

A bar that represents a resource in the game (health, mana, ammo, etc).

There are ready-to-use resource bars in the asset-store [resource bars pack](https://editor.gdevelop.io/?initial-dialog=asset-store&asset-pack=resource-bars-resource-bars).

[Read more...](https://wiki.gdevelop.io/gdevelop5/objects/resource-bar)

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Resource bar (separated units) 

A bar that represents a resource in the game (health, mana, ammo, etc). 

### Object actions

**CenterBar**  
Center the bar according to the button configuration. This is used in doStepPostEvents when the button is resized.

**Flip the object horizontally**  
Flip the object horizontally

**Flip the object vertically**  
Flip the object vertically

**Height**  
Change the height of an object.

**Scale**  
Modify the scale of the specified object.

**Maximum value**  
Change the maximum value of the object.

**Opacity**  
Change the opacity of an object, between 0 (fully transparent) to 255 (opaque).

**Bar left margin property**  
Change the property value for the bar left margin.

**Bar right margin property**  
Change the property value for the bar right margin.

**BarVerticalAnchorOrigin property**  
Change the property value for the barVerticalAnchorOrigin.

**BarVerticalAnchorTarget property**  
Change the property value for the barVerticalAnchorTarget.

**Initial value property**  
Change the property value for the initial value.

**Maximum value property**  
Change the property value for the maximum value.

**PreviousInitialValue property**  
Change the property value for the previousInitialValue.

**Show the background property**  
Update the property value for "show the background".

**Unit width property**  
Change the property value for the unit width.

**Center of rotation**  
Change the center of rotation of an object relatively to the object origin.

**Scale on X axis**  
Change the width's scale of an object.

**Scale on Y axis**  
Change the height's scale of an object.

**Value**  
Change the value of the object.

**Toggle Show the background property**  
Toggle the property value for show the background.  
If it was true, it will become false, and if it was false it will become true.

**Width**  
Change the width of an object.

### Object conditions

**Horizontally flipped**  
Check if the object is horizontally flipped

**Vertically flipped**  
Check if the object is vertically flipped

**Empty**  
Check if the bar is empty.

**Full**  
Check if the bar is full.

**Maximum value**  
Compare the maximum value of the object.

**Opacity**  
Compare the opacity of an object, between 0 (fully transparent) to 255 (opaque).

**Bar left margin property**  
Compare the property value for the bar left margin.

**Bar right margin property**  
Compare the property value for the bar right margin.

**BarVerticalAnchorOrigin property**  
Compare the property value for the barVerticalAnchorOrigin.

**BarVerticalAnchorTarget property**  
Compare the property value for the barVerticalAnchorTarget.

**Initial value property**  
Compare the property value for the initial value.

**Maximum value property**  
Compare the property value for the maximum value.

**PreviousInitialValue property**  
Compare the property value for the previousInitialValue.

**Show the background property**  
Check the property value for show the background.

**Unit width property**  
Compare the property value for the unit width.

**Scale on X axis**  
Compare the width's scale of an object.

**Scale on Y axis**  
Compare the height's scale of an object.

**Value**  
Compare the value of the object.

### Object expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.MaxValue()` | Return the maximum value of the object. ||
| `Object.Opacity()` | Return the opacity of an object, between 0 (fully transparent) to 255 (opaque). ||
| `Object.PropertyBarLeftPadding()` | Return the property value for the bar left margin. ||
| `Object.PropertyBarRightPadding()` | Return the property value for the bar right margin. ||
| `Object.PropertyBarVerticalAnchorOrigin()` | Return the property value for the barVerticalAnchorOrigin. ||
| `Object.PropertyBarVerticalAnchorTarget()` | Return the property value for the barVerticalAnchorTarget. ||
| `Object.PropertyInitialValue()` | Return the property value for the initial value. ||
| `Object.PropertyMaxValue()` | Return the property value for the maximum value. ||
| `Object.PropertyPreviousInitialValue()` | Return the property value for the previousInitialValue. ||
| `Object.PropertyUnitWidth()` | Return the property value for the unit width. ||
| `Object.ScaleX()` | Return the width's scale of an object. ||
| `Object.ScaleY()` | Return the height's scale of an object. ||
| `Object.Value()` | Return the value of the object. ||

## Resource bar 

A bar that represents a resource in the game (health, mana, ammo, etc). 

### Behavior actions

**Maximum value**  
Change the maximum value of the object.

**Previous high value conservation duration**  
Change the previous high value conservation duration (in seconds) of the object.

**Maximum value property**  
Change the property value for the maximum value.

**Previous high value property**  
Change the property value for the previous high value.

**Previous high value conservation duration (in seconds) property**  
Change the property value for the previous high value conservation duration (in seconds).

**Value property**  
Change the property value for the value.

**Value**  
Change the value of the object.

**Update previous value**  
Force the previous resource value to update to the current one.

### Behavior conditions

**Value is changing**  
Check if the resource value is changing.

**Empty**  
Check if the bar is empty.

**Full**  
Check if the bar is full.

**Maximum value**  
Compare the maximum value of the object.

**Previous high value**  
Compare the previous high value of the resource bar before the current change.

**Previous high value conservation duration**  
Compare the previous high value conservation duration (in seconds) of the object.

**Maximum value property**  
Compare the property value for the maximum value.

**Previous high value property**  
Compare the property value for the previous high value.

**Previous high value conservation duration (in seconds) property**  
Compare the property value for the previous high value conservation duration (in seconds).

**Value property**  
Compare the property value for the value.

**Value**  
Compare the value of the object.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.ResourceBar::MaxValue()` | Return the maximum value of the object. ||
| `Object.ResourceBar::PreviousHighValue()` | Return the previous high value of the resource bar before the current change. ||
| `Object.ResourceBar::PreviousHighValueDuration()` | Return the previous high value conservation duration (in seconds) of the object. ||
| `Object.ResourceBar::PropertyMaxValue()` | Return the property value for the maximum value. ||
| `Object.ResourceBar::PropertyPreviousHighValue()` | Return the property value for the previous high value. ||
| `Object.ResourceBar::PropertyPreviousHighValueDuration()` | Return the property value for the previous high value conservation duration (in seconds). ||
| `Object.ResourceBar::PropertyValue()` | Return the property value for the value. ||
| `Object.ResourceBar::Value()` | Return the value of the object. ||

---

*This page is an auto-generated reference page about the **Resource bar (separated units)** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).