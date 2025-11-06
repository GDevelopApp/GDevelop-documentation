# Mouse and touch Reference

Conditions, actions and expressions to handle either the mouse or touches on a touchscreen. Notably: cursor position, mouse wheel, mouse buttons, touch positions, started/end touches, etc...

By default, conditions related to the mouse will also handle the touches - so that it's easier to handle both in your game. You can disable this behavior if you want to handle them separately in different events. [Read more explanations about it.](/gdevelop5/all-features/mouse-touch)

## Actions

**Hide the cursor**  
Hide the cursor.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `CacheSouris`.

**Show the cursor**  
Show the cursor.

??? quote "See parameters & details"

    There are no parameters to set for this action.

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `MontreSouris`.

**De/activate moving the mouse cursor with touches**  
When activated, any touch made on a touchscreen will also move the mouse cursor. When deactivated, mouse and touch positions will be completely independent.  
By default, this is activated so that you can simply use the mouse conditions to also support touchscreens. If you want to have multitouch and differentiate mouse movement and touches, just deactivate it with this action.

??? quote "See parameters & details"

    - Parameter 1 (❓ Yes or No): Activate (yes by default when game is launched)

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `TouchSimulateMouse`.


## Conditions

**Cursor X position**  
Compare the X position of the cursor or of a touch.

??? quote "See parameters & details"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare
    - Parameter 3: 🔤 Layer name (String)
    - Parameter 4 (🔢 Number): Camera number

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `CursorX`.

**Cursor Y position**  
Compare the Y position of the cursor or of a touch.

??? quote "See parameters & details"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare
    - Parameter 3: 🔤 Layer name (String)
    - Parameter 4 (🔢 Number): Camera number

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `CursorY`.

**A new touch has started**  
Check if a touch has just started or the mouse left button has been pressed on this frame. The touch identifiers can be accessed using StartedTouchOrMouseId() and StartedTouchOrMouseCount().

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `HasAnyTouchOrMouseStarted`.

**A touch has ended**  
Check if a touch has ended or a mouse left button has been released.

??? quote "See parameters & details"

    - Parameter 1 (🔢 Number): Touch identifier

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `HasTouchEnded`.

**Mouse cursor is inside the window**  
Check if the mouse cursor is inside the window.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `IsMouseInsideCanvas`.

**The mouse wheel is scrolling down**  
Check if the mouse wheel is scrolling down. Use MouseWheelDelta expression if you want to know the amount that was scrolled.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `IsMouseWheelScrollingDown`.

**The mouse wheel is scrolling up**  
Check if the mouse wheel is scrolling up. Use MouseWheelDelta expression if you want to know the amount that was scrolled.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `IsMouseWheelScrollingUp`.

**Mouse button pressed or touch held**  
Check if the specified mouse button is pressed or if a touch is in contact with the screen.

??? quote "See parameters & details"

    - Parameter 1 (mouseButton): Button to check

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `MouseButtonFromTextPressed`.

**Mouse button released**  
Check if the specified mouse button was released.

??? quote "See parameters & details"

    - Parameter 1 (mouseButton): Button to check

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `MouseButtonFromTextReleased`.

**Touch X position**  
Compare the X position of a specific touch.

??? quote "See parameters & details"

    - Parameter 1 (🔢 Number): Touch identifier
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare
    - Parameter 4: 🔤 Layer name (String)
    - Parameter 5 (🔢 Number): Camera number

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `TouchX`.

**Touch Y position**  
Compare the Y position of a specific touch.

??? quote "See parameters & details"

    - Parameter 1 (🔢 Number): Touch identifier
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare
    - Parameter 4: 🔤 Layer name (String)
    - Parameter 5 (🔢 Number): Camera number

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `TouchY`.


## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `CursorX(layer name, number)` | Return the X position of the cursor or of a touch. ||
| | _🔤 Layer name (String)_ | Layer _Optional_. |
| | _🔢 Number_ | Camera number (default : 0) _Optional_. |
| `CursorY(layer name, number)` | Return the Y position of the cursor or of a touch. ||
| | _🔤 Layer name (String)_ | Layer _Optional_. |
| | _🔢 Number_ | Camera number (default : 0) _Optional_. |
| `MouseWheelDelta()` | Mouse wheel displacement ||
| `StartedTouchOrMouseCount()` | The number of touches (including the mouse) that have just started on this frame. The touch identifiers can be accessed using StartedTouchOrMouseId(). ||
| `StartedTouchOrMouseId(number)` | The identifier of the touch or mouse that has just started on this frame. The number of touches can be accessed using StartedTouchOrMouseCount(). ||
| | _🔢 Number_ | Touch index |
| `TouchX(number, layer name, number)` | Return the X position of a specific touch. ||
| | _🔢 Number_ | Touch identifier |
| | _🔤 Layer name (String)_ | Layer _Optional_. |
| | _🔢 Number_ | Camera number (default : 0) _Optional_. |
| `TouchY(number, layer name, number)` | Return the Y position of a specific touch. ||
| | _🔢 Number_ | Touch identifier |
| | _🔤 Layer name (String)_ | Layer _Optional_. |
| | _🔢 Number_ | Camera number (default : 0) _Optional_. |



---

The Mouse and touch extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **Mouse and touch** feature of [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).