# Button States

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/753a9a794bd885058159b7509f06f5a8f67f72decfccb9a1b0efee26f41c3c4c_gesture-tap-button.svg" class="extension-icon"></img>
Use any object as a button.

**Authors and contributors** to this community extension: [D8H](https://gd.games/D8H).

---

Tracks player interaction with an object, including:

- hovered
- pressed
- clicked

[Read more...](https://wiki.gdevelop.io/gdevelop5/objects/button)

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Button states 

Use objects as buttons. 

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

*This page is an auto-generated reference page about the **Button States** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).