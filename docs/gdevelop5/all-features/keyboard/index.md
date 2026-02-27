---
title: Keyboard
---
# Keyboard

GDevelop gives access to all inputs made on the keyboard. This includes conditions to check if a key was pressed, held, or released.

!!! warning

    Keyboard conditions work only with **physical keyboards**. They do **not** work with on-screen (virtual) keyboards on touchscreen and mobile devices. If your game targets mobile or touchscreen platforms, use [mouse/touch conditions](/gdevelop5/all-features/mouse-touch) instead.

## Key pressed vs. key just pressed

There are two distinct conditions for detecting a key being pressed:

- **Key pressed** — Returns true continuously for **as long as the key is held down**. Use this for movement or actions that should repeat while the key is held (e.g., moving a character while an arrow key is held).
- **Key just pressed** — Returns true only **during the single frame when the key is first pressed**. Use this for one-shot actions such as jumping, shooting, or opening a menu.

Choosing the wrong one is a common mistake: using "Key pressed" for a jump action causes the action to fire on every frame the key is held, whereas "Key just pressed" fires exactly once per key press.

## Any key pressed

Returns true if **any** key on the keyboard is currently pressed. Useful for "press any key to continue" screens.

## Key released

Returns true during the single frame when a key is **released**.

## Key pressed (text expression)

Lets you specify the key name as a text expression, which is useful when the key is stored in a variable or configured by the player at runtime. Enter the key name surrounded by double quotes, for example `"Left"` for the left arrow key.

Common key names:

- Arrow keys: `"Left"`, `"Right"`, `"Up"`, `"Down"`
- Letters: `"a"` through `"z"` (lowercase)
- Digit row: `"Num0"` through `"Num9"`
- Numpad digits: `"Numpad0"` through `"Numpad9"`
- Function keys: `"F1"` through `"F12"`
- Common keys: `"Space"`, `"Return"`, `"Escape"`, `"Back"` (Backspace), `"Tab"`, `"Delete"`, `"Insert"`
- Modifiers: `"LShift"`, `"RShift"`, `"LControl"`, `"RControl"`, `"LAlt"`, `"RAlt"`

!!! danger

    Make sure that the key name is surrounded by quotes — for example `"Space"`, not `Space`.

![](/gdevelop5/all-features/annotation_2019-06-20_191229.png)

## Key released (text expression)

Works the same as "Key pressed (text expression)" but triggers when the specified key is **released**.

![](/gdevelop5/all-features/annotation_2019-06-20_191302.png)

## Last key pressed

The `LastPressedKey()` expression returns the name of the most recently pressed key as a string. For example, if the player last pressed the left arrow key, the expression returns `"Left"`.

This is useful for displaying the last key pressed on screen or for implementing custom key-rebinding.

## Reference

All actions, conditions and expressions are listed in [the keyboard reference page](/gdevelop5/all-features/keyboard/reference/).