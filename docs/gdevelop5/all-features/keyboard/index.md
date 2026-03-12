---
title: Keyboard
---
# Keyboard

GDevelop gives access to all inputs made on the keyboard. This includes conditions to check if a key was pressed, just pressed, or released, and an expression to get the last key pressed.

!!! note

    Keyboard conditions do **not** work with the on-screen keyboard on touch devices. Use [mouse/touch conditions](/gdevelop5/all-features/mouse-touch) instead when targeting mobile or touchscreen devices.

## Key pressed

Checks if a key is **currently held down**. This condition stays true for every frame the key remains pressed — from the first frame it's pressed until the frame it's released. It is ideal for continuous actions like movement.

## Key just pressed

Checks if a key was pressed **during the current frame only**. This condition is true for exactly one frame: the frame the key first goes down. Use this when you want an action to fire once per key press, such as jumping, firing a bullet, or toggling a menu.

!!! tip

    Use **Key pressed** for smooth continuous movement (e.g. holding a direction key), and **Key just pressed** when you need to react to a single press (e.g. jumping, interacting with an object).

## Key released

Checks if a key was **just released** during the current frame. Like "Key just pressed", this is only true for one frame.

## Any key pressed

True if **any** key on the keyboard is currently held down.

## Any key released

True if **any** key on the keyboard was just released this frame. This is useful for letting the player press any key to continue past a loading screen or title card.

## Key pressed (text expression)

The same as **Key pressed**, but the key name is entered as a **text expression** rather than chosen from a list. This is useful when the key name is stored in a variable or computed at runtime.

For example, entering `"Left"` checks if the left arrow key is held. The key name must be surrounded by quotes.

![](/gdevelop5/all-features/annotation_2019-06-20_191229.png)

## Key released (text expression)

The same as **Key released**, but the key name is given as a text expression.

![](/gdevelop5/all-features/annotation_2019-06-20_191302.png)

## Last key pressed

The expression `LastPressedKey()` returns the name of the most recent key pressed, as a string (e.g. `"Space"`, `"Left"`, `"a"`). This is useful for remapping controls or displaying the last input.

## Key names

Key names used in the text-expression conditions:

| Key | Name |
|---|---|
| Arrow keys | `Left`, `Up`, `Right`, `Down` |
| Letters | `a`–`z` (lowercase) |
| Top-row numbers | `Num0`–`Num9` |
| Numpad numbers | `Numpad0`–`Numpad9` |
| Function keys | `F1`–`F12` |
| Space | `Space` |
| Enter / Return | `Return` |
| Backspace | `Back` |
| Escape | `Escape` |
| Tab | `Tab` |
| Delete | `Delete` |
| Insert | `Insert` |
| Left/Right Shift | `LShift`, `RShift` |
| Left/Right Control | `LControl`, `RControl` |
| Left/Right Alt | `LAlt`, `RAlt` |

## Reference

All actions, conditions and expressions are listed in [the keyboard reference page](/gdevelop5/all-features/keyboard/reference/).
