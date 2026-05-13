---
title: Keyboard
---
# Keyboard

GDevelop gives access to all inputs made on the keyboard. This includes conditions to check if a key is pressed, was just pressed, or was released.

!!! warning

    Keyboard conditions do not react to the on-screen keyboard on touch devices. When making a game for mobile/touchscreen devices, use the mouse/touch conditions instead.

## Any key pressed / Any key released

The "Any key pressed" condition is true as long as at least one key on the keyboard is held down. The "Any key released" condition becomes true on the frame a key is released. These are useful for "Press any key to start" screens or to detect generic input.

## Key pressed

This condition stays true for as long as the chosen key is held down. To detect only the moment the key changes state (so the action runs once per key press), use **Key just pressed** instead.

## Key just pressed

This condition is true only on the frame when the chosen key was pressed. It's the right choice for one-shot events like jumping, firing, opening a menu, or advancing dialogue — where holding the key should not retrigger the action.

## Key released

This condition is true on the frame the chosen key was released.

## Entering key names as a text expression

Most keyboard conditions and expressions take the key name as a text expression. Make sure the key name is surrounded by quotes.

For example, to react to the left arrow key, enter `"Left"`.

![](/gdevelop5/all-features/annotation_2019-06-20_191229.png)

Common key name examples:

- Letters: `"a"` to `"z"` (lowercase)
- Number row: `"Num0"` to `"Num9"`
- Numpad: `"Numpad0"` to `"Numpad9"`, `"NumpadAdd"`, `"NumpadSubtract"`, `"NumpadMultiply"`, `"NumpadDivide"`, `"NumpadReturn"`
- Modifiers: `"LShift"`, `"RShift"`, `"LControl"`, `"RControl"`, `"LAlt"`, `"RAlt"`
- Arrows: `"Left"`, `"Up"`, `"Right"`, `"Down"`
- Special: `"Space"`, `"Return"`, `"Escape"`, `"Tab"`, `"Back"` (Backspace), `"Delete"`, `"Insert"`, `"Home"`, `"End"`, `"PageUp"`, `"PageDown"`
- Function keys: `"F1"` to `"F12"`
- Punctuation: `"Comma"`, `"Period"`, `"SemiColon"`, `"Quote"`, `"Slash"`, `"BackSlash"`, `"Equal"`, `"Dash"`, `"LBracket"`, `"RBracket"`, `"Tilde"`

!!! tip

    When configuring the condition, picking the key from the dropdown is the easiest way to get the exact name expected by GDevelop.

## Last key pressed

The "Last key pressed" expression returns the name of the most recently pressed key as a string (using the same names as above). Combined with conditions like "Any key pressed", it's perfect for letting the player rebind controls — simply store the returned name in a variable and use it as the parameter of "Key pressed".

## Reference

All actions, conditions and expressions are listed in [the keyboard reference page](/gdevelop5/all-features/keyboard/reference/).