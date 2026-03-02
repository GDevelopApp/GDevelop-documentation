---
title: Keyboard
---
# Keyboard

GDevelop gives access to all inputs made on the keyboard. This includes conditions to check if a key is currently held down, was just pressed, or was just released.

!!! warning

    Keyboard conditions do **not** work with on-screen keyboards on touch devices. For mobile or touchscreen games, use [mouse/touch conditions](/gdevelop5/all-features/mouse-touch) instead.

## Key pressed vs Key just pressed

This is one of the most important distinctions when using keyboard input:

- **Key pressed** — true every frame the key is held down. Use this for continuous actions like moving a character while the key is held.
- **Key just pressed** — true only for the single frame when the key is first pressed. Use this for one-shot actions like jumping, shooting, or opening a menu.

For example, to move a character to the right, use **Key pressed** with `Right`, so movement happens as long as the key is held. To fire a bullet, use **Key just pressed** so only one bullet is fired per key press, even if the player holds the key.

## Any key pressed / Any key released

Use **Any key pressed** to detect when the player presses any keyboard key at all — useful for "press any key to continue" screens.

**Any key released** is true for the single frame in which any key is released.

## Key released

**Key released** is true for the single frame in which a specific key is released.

## Last key pressed

The **LastPressedKey** expression returns the name of the most recently pressed key as a string (for example, `"Left"` or `"Space"`). This is useful for remapping controls or displaying key hints.

## Key names

When using a key condition with a text expression, enter the key name surrounded by quotes. Common key names are:

| Key | Name to use |
|---|---|
| Arrow keys | `"Left"`, `"Right"`, `"Up"`, `"Down"` |
| Space | `"Space"` |
| Enter / Return | `"Return"` |
| Escape | `"Escape"` |
| Backspace | `"Back"` |
| Tab | `"Tab"` |
| Delete | `"Delete"` |
| Insert | `"Insert"` |
| Shift (either) | `"LShift"` or `"RShift"` |
| Control (either) | `"LControl"` or `"RControl"` |
| Alt (either) | `"LAlt"` or `"RAlt"` |
| Letter keys | `"a"` through `"z"` (lowercase) |
| Number row | `"Num0"` through `"Num9"` |
| Numpad digits | `"Numpad0"` through `"Numpad9"` |
| Function keys | `"F1"` through `"F12"` |
| Page Up / Down | `"PageUp"`, `"PageDown"` |
| Home / End | `"Home"`, `"End"` |
| Pause | `"Pause"` |

!!! note

    Left and right variants of modifier keys are supported separately: `"LShift"` detects only the left Shift key, while `"RShift"` detects only the right one. Use `"LShift"` in most cases when you don't need to distinguish.

## Reference

All actions, conditions and expressions are listed in [the keyboard reference page](/gdevelop5/all-features/keyboard/reference/).
