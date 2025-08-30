# Draggable (for physics objects)

<img src="https://resources.gdevelop-app.com/assets/Icons/Glyphster Pack/Master/SVG/Virtual Reality/Virtual Reality_hand_vr_ar_360.svg" class="extension-icon"></img>
Drag a physics object with the mouse (or touch).

**Authors and contributors** to this community extension: [VictrisGames](https://gd.games/VictrisGames).

---

Enables players to click and drag on physics objects to move them.  The object retains velocity when the click is released, allowing players to fling objects across the screen.

Note:

- The default "draggable" behavior will not work on objects with the physics behavior. This extension should be used instead.
- This extension will only work on objects that have the physics behavior.
- Kinematic physics mode is incompatible with this extension. The object will be changed to dynamic mode.

The Parking Jam example uses this extension ([open the project online](https://editor.gdevelop.io/?project=example://parking-jam)).

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Draggable (for physics objects) 

Drag a physics object with the mouse (or touch). 

### Behavior actions

**Release dragged object**  
Release dragged object.

**Damping ratio**  
Change the joint damping ratio (range: 0 to 1) of the object. 

**Enable (or disable) automatic dragging**  
Enable (or disable) automatic dragging with the mouse or touch.

**Frequency**  
Change the joint frequency (per second) of the object.

**Maximum force**  
Change the maximum joint force (in Newtons) of the object.

**Mouse button**  
Change the mouse button used to move the object.

**Start dragging object**  
Start dragging object.

### Behavior conditions

**Damping ratio**  
Compare the joint damping ratio (range: 0 to 1) of the object. .

**Frequency**  
Compare the joint frequency (per second) of the object.

**Automatic dragging**  
Check if automatic dragging is enabled.

**Is being dragged**  
Check if object is being dragged.

**Maximum force**  
Compare the maximum joint force (in Newtons) of the object.

**Mouse button**  
Compare the mouse button used to move the object.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.DraggablePhysics::Damping()` | Return the joint damping ratio (range: 0 to 1) of the object. . ||
| `Object.DraggablePhysics::Frequency()` | Return the joint frequency (per second) of the object. ||
| `Object.DraggablePhysics::MaxForce()` | Return the maximum joint force (in Newtons) of the object. ||
| `Object.DraggablePhysics::MouseButton()` | Return the mouse button used to move the object. ||


---

*This page is an auto-generated reference page about the **Draggable (for physics objects)** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).