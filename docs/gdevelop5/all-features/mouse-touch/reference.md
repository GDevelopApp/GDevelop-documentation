# Mouse and touch

Conditions and actions to handle either the mouse or touches on touchscreen. By default, conditions related to the mouse will also handle the touches - so that it's easier to handle both in your game. You can disable this behavior if you want to handle them separately in different events. [Read more explanations about it.](https://wiki.gdevelop.io/gdevelop5/all-features/mouse-touch)

## Actions

**Hide the cursor**  
Hide the cursor.

**Show the cursor**  
Show the cursor.

**De/activate moving the mouse cursor with touches**  
When activated, any touch made on a touchscreen will also move the mouse cursor. When deactivated, mouse and touch positions will be completely independent.  
By default, this is activated so that you can simply use the mouse conditions to also support touchscreens. If you want to have multitouch and differentiate mouse movement and touches, just deactivate it with this action.

## Conditions

**Cursor X position**  
Compare the X position of the cursor or of a touch.

**Cursor Y position**  
Compare the Y position of the cursor or of a touch.

**A new touch has started**  
Check if a touch has just started or the mouse left button has been pressed on this frame. The touch identifiers can be accessed using StartedTouchOrMouseId() and StartedTouchOrMouseCount().

**A touch has ended**  
Check if a touch has ended or a mouse left button has been released.

**Mouse cursor is inside the window**  
Check if the mouse cursor is inside the window.

**The mouse wheel is scrolling down**  
Check if the mouse wheel is scrolling down. Use MouseWheelDelta expression if you want to know the amount that was scrolled.

**The mouse wheel is scrolling up**  
Check if the mouse wheel is scrolling up. Use MouseWheelDelta expression if you want to know the amount that was scrolled.

**Mouse button pressed or touch held (text expression)**  
Check if a mouse button, retrieved from the result of the expression, is pressed.

**Mouse button released (text expression)**  
Check if a mouse button, retrieved from the result of the expression, was just released.

**Mouse button pressed or touch held**  
Check if the specified mouse button is pressed or if a touch is in contact with the screen.

**Mouse button released**  
Check if the specified mouse button was released.

**Touch X position**  
Compare the X position of a specific touch.

**Touch Y position**  
Compare the Y position of a specific touch.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `CursorX(layer, number)` | Return the X position of the cursor or of a touch. ||
| | _layer_ | Layer (base layer if empty) _Optional_. |
| | _number_ | Camera number (default : 0) _Optional_. |
| `CursorY(layer, number)` | Return the Y position of the cursor or of a touch. ||
| | _layer_ | Layer (base layer if empty) _Optional_. |
| | _number_ | Camera number (default : 0) _Optional_. |
| `MouseWheelDelta()` | Mouse wheel displacement ||
| `StartedTouchOrMouseCount()` | The number of touches (including the mouse) that have just started on this frame. The touch identifiers can be accessed using StartedTouchOrMouseId(). ||
| `StartedTouchOrMouseId(number)` | The identifier of the touch or mouse that has just started on this frame. The number of touches can be accessed using StartedTouchOrMouseCount(). ||
| | _number_ | Touch index |
| `TouchX(number, layer, number)` | Return the X position of a specific touch. ||
| | _number_ | Touch identifier |
| | _layer_ | Layer (base layer if empty) _Optional_. |
| | _number_ | Camera number (default : 0) _Optional_. |
| `TouchY(number, layer, number)` | Return the Y position of a specific touch. ||
| | _number_ | Touch identifier |
| | _layer_ | Layer (base layer if empty) _Optional_. |
| | _number_ | Camera number (default : 0) _Optional_. |

---
*This page is an auto-generated reference page about the **Mouse and touch** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).