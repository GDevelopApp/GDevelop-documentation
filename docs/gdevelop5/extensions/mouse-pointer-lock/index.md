# Mouse Pointer Lock

<img src="https://resources.gdevelop-app.com/assets/Icons/Line Hero Pack/Master/SVG/Virtual Reality/Virtual Reality_360_rotate_vr_movement.svg" class="extension-icon"></img>
This behavior removes the limit on the distance the mouse can move and hides the cursor.

**Authors and contributors** to this community extension: [PANDAKO](https://gd.games/PANDAKO).

---

This behavior removes the limit on the distance the mouse can move and hides the cursor.

For example, a user can rotate or continue to manipulate an object by moving the mouse endlessly ([open the project online](https://editor.gdevelop.io/?project=example://mouse-pointer-lock)).
Without the pointer lock, the rotation or operation will stop the moment the pointer reaches the edge of the browser or screen.

Game players don't have to worry about leaving the gameplay area or accidentally clicking on another application that moves the mouse focus away from the game.

Locking the pointer locks `CursorX()` and `CursorY()` expressions.
Use `MovementX()` and `MovementY()` instead.


!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Exit pointer lock**  
Unlocks the mouse pointer and show it.

**Request Pointer Lock**  
Lock the mouse pointer to hide it.

## Conditions

**Pointer is locked**  
Check if the mouse pointer is locked.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `MousePointerLock::MovementX()` | Get the movement of the pointer on the X-axis. ||
| `MousePointerLock::MovementY()` | Get the movement of the pointer on the Y-axis. ||

---

*This page is an auto-generated reference page about the **Mouse Pointer Lock** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).