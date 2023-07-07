# Timed Back and Forth Movement

<img src="https://resources.gdevelop-app.com/assets/Icons/repeat.svg" class="extension-icon"></img>
This behavior moves objects back and forth for a chosen time or distance, vertically or horizontally.

**Authors and contributors** to this community extension: [Greench](https://gd.games/Greench).

---

This behavior moves an object (like an enemy) for a chosen time or distance, then flips it and starts over, moving the object back and forth, vertically or horizontally.

Note: animations must be facing **Right** (for horizontal) or **Down** (for vertical) direction.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Timed Back and Forth Movement 

Move an object (e.g. enemy) for a chosen time or distance, then flip it and start over. 
Note: animations should be facing LEFT. 

### Behavior actions

**Moving distance (in pixels) property**  
Change the property value for the moving distance (in pixels).

**position of the sprite at the previous frame property**  
Change the property value for the position of the sprite at the previous frame.

**Moving speed (in pixel/s) property**  
Change the property value for the moving speed (in pixel/s).

**Distance start point property**  
Change the property value for the distance start point.

**check that time has elapsed property**  
Change the property value for the check that time has elapsed.

**Moving maximum time (in seconds) property**  
Change the property value for the moving maximum time (in seconds).

**Move the object vertically (instead of horizontally) property**  
Update the property value for "move the object vertically (instead of horizontally)".

**Toggle Move the object vertically (instead of horizontally) property**  
Toggle the property value for move the object vertically (instead of horizontally).  
If it was true, it will become false, and if it was false it will become true.

### Behavior conditions

**Moving distance (in pixels) property**  
Compare the property value for the moving distance (in pixels).

**position of the sprite at the previous frame property**  
Compare the property value for the position of the sprite at the previous frame.

**Moving speed (in pixel/s) property**  
Compare the property value for the moving speed (in pixel/s).

**Distance start point property**  
Compare the property value for the distance start point.

**check that time has elapsed property**  
Compare the property value for the check that time has elapsed.

**Moving maximum time (in seconds) property**  
Compare the property value for the moving maximum time (in seconds).

**Move the object vertically (instead of horizontally) property**  
Check the property value for move the object vertically (instead of horizontally).

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.TimedBackAndForthMirroredMovement::PropertyDistance()` | Return the property value for the moving distance (in pixels). ||
| `Object.TimedBackAndForthMirroredMovement::PropertyLastPosition()` | Return the property value for the position of the sprite at the previous frame. ||
| `Object.TimedBackAndForthMirroredMovement::PropertySpeed()` | Return the property value for the moving speed (in pixel/s). ||
| `Object.TimedBackAndForthMirroredMovement::PropertyStartPosition()` | Return the property value for the distance start point. ||
| `Object.TimedBackAndForthMirroredMovement::PropertyTimecheck()` | Return the property value for the check that time has elapsed. ||
| `Object.TimedBackAndForthMirroredMovement::PropertyTimeout()` | Return the property value for the moving maximum time (in seconds). ||

---

*This page is an auto-generated reference page about the **Timed Back and Forth Movement** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).