---
title: Handle mouse and touch events
---
# Handle mouse and touch events

Some [objects](/gdevelop5/objects) and [behaviors](/gdevelop5/behaviors) make mouse and multitouch easier to handle for specific cases:

- [Button](/gdevelop5/objects/button)
- [Multi-touch joystick](/gdevelop5/objects/multitouch-joystick)
- [Slider](/gdevelop5/objects/slider)
- [Toggle switch](/gdevelop5/objects/toggle-switch)
- [Draggable behavior](/gdevelop5/behaviors/draggable)
- [Swipe gesture](/gdevelop5/extensions/swipe-gesture/reference)
- [Pinch gesture](/gdevelop5/extensions/pinch-gesture/reference)

For more specific cases, mouse and touches events can be accessed directly.

## Handle clicks and taps on objects

"**The cursor/touch is on an object**" condition checks if the mouse cursor or a screen touch is over an object.

![](/gdevelop5/all-features/cursor-is-on-condition.png)

This condition can be used with "**Mouse button pressed**" or **"Mouse button released**" to check if the object is clicked or taped.

The expressions `CursorX` and `CursorY` give the cursor position in the scene. Both accept an optional layer name and camera number so the returned coordinates are relative to that layer's camera — useful when layers scroll independently. For instance, it can be used to create an explosion effect exactly at the cursor or touch location.

![](/gdevelop5/all-features/cursor-is-on-event.png)

!!! tip

        **See it in action!** 🎮

    [Open this example online](https://editor.gdevelop.io?project=example://balloon-smasher)

## Mouse buttons

GDevelop supports multiple mouse buttons. When using the "**Mouse button pressed**" or "**Mouse button released**" conditions you can choose which button to test:

- **Left** — the primary click button
- **Right** — commonly used for secondary actions (context menus, aiming, etc.)
- **Middle** — clicking the scroll wheel
- **Back / Forward** — side buttons found on some mice

Right-click can be especially useful for games where the player needs two distinct interactions without using the keyboard.

## Mouse wheel

The mouse wheel is useful for zooming cameras, scrolling menus, or cycling through weapons and items:

- The "**Mouse wheel scrolling up**" and "**Mouse wheel scrolling down**" conditions detect the scroll direction each frame.
- The `MouseWheelDelta()` expression returns the exact scroll amount (positive when scrolling up, negative when scrolling down), which can be multiplied to control zoom speed or scroll distance.

## Handle manually multi-touch gestures (advanced)

When only one touch is done at the same times, the mouse events can be used to keep things simple. Indeed, by default touch events are mirrored by mouse events. This can be disabled with the action “De/activate moving the mouse cursor with touches” when handling both multi-touch and mouse events to avoid echo.

Multiple touches can happen at the same time. The touch identifier must be used to tell them apart. It can be done by following these steps:

* At the start of a touch, the touch identifier can be retrieved with the `StartedTouchOrMouseId(Number)` expression (the index `0` gives the first touch that started this frame, `1` the second, and so on). The total count of touches that started this frame is available via `StartedTouchOrMouseCount()`.

![](/gdevelop5/all-features/touchstart.png)

* When the touch moves, the touch identifier is needed to make sure to follow the right touch. A variable can be used to ensure this.

![](/gdevelop5/all-features/touchmoveandend.png)

!!! tip

        **See it in action!** 🎮

    [Open this example online](https://editor.gdevelop.io?project=example://multitouch)

## Reference

All actions, conditions and expressions are listed in [mouse and touch reference page](/gdevelop5/all-features/mouse-touch/reference/).