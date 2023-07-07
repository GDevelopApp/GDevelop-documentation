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

**Damping ratio (Range: 0 to 1) property**  
Change the property value for the damping ratio (Range: 0 to 1).

**Enable automatic dragging property**  
Update the property value for "enable automatic dragging".

**Frequency (Hz)  property**  
Change the property value for the frequency (Hz) .

**Maximum force property**  
Change the property value for the maximum force.

**Mouse button property**  
Change the property value for the mouse button.

**MouseJointID property**  
Change the property value for the mouseJointID.

**Start dragging object**  
Start dragging object.

**Toggle Enable automatic dragging property**  
Toggle the property value for enable automatic dragging.  
If it was true, it will become false, and if it was false it will become true.

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

**Damping ratio (Range: 0 to 1) property**  
Compare the property value for the damping ratio (Range: 0 to 1).

**Enable automatic dragging property**  
Check the property value for enable automatic dragging.

**Frequency (Hz)  property**  
Compare the property value for the frequency (Hz) .

**Maximum force property**  
Compare the property value for the maximum force.

**Mouse button property**  
Compare the property value for the mouse button.

**MouseJointID property**  
Compare the property value for the mouseJointID.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.DraggablePhysics::Damping()` | Return the joint damping ratio (range: 0 to 1) of the object. . ||
| `Object.DraggablePhysics::Frequency()` | Return the joint frequency (per second) of the object. ||
| `Object.DraggablePhysics::MaxForce()` | Return the maximum joint force (in Newtons) of the object. ||
| `Object.DraggablePhysics::MouseButton()` | Return the mouse button used to move the object. ||
| `Object.DraggablePhysics::PropertyDamping()` | Return the property value for the damping ratio (Range: 0 to 1). ||
| `Object.DraggablePhysics::PropertyFrequency()` | Return the property value for the frequency (Hz) . ||
| `Object.DraggablePhysics::PropertyMaxForce()` | Return the property value for the maximum force. ||
| `Object.DraggablePhysics::PropertyMouseButton()` | Return the property value for the mouse button. ||
| `Object.DraggablePhysics::PropertyMouseJointID()` | Return the property value for the mouseJointID. ||

---

*This page is an auto-generated reference page about the **Draggable (for physics objects)** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).