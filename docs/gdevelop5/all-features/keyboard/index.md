---
title: Keyboard
---
# Keyboard

GDevelop gives access to all inputs made on the keyboard. This includes conditions to check if a key was pressed or released.

## Any key pressed

For this condition, the corresponding action/s will be performed if any key on the keyboard is pressed.

## Key pressed

Whenever the key selected while setting this condition is pressed, the corresponding actions are performed.

## Key released

Whenever the key selected while setting this condition is released, the corresponding actions are performed.

## Key pressed (text expression)

To test a key press using this condition, you need to enter the key name in the form of text expression. For example, if you want to check condition for left arrow key press, you need to enter "Left" in the field.

!!! danger

    Make sure that the key name is surrounded by quotes.

![](/gdevelop5/all-features/annotation_2019-06-20_191229.png)

## Key released (text expression)

To test a key release using this condition, you need to enter the key name in the form of text expression. For example, if you want to check condition for left arrow key release, you need to enter "Left" in the field.

![](/gdevelop5/all-features/annotation_2019-06-20_191302.png)

## Last key pressed

"Last key pressed" expression returns the last key press in the form of a string. For example, if the last key press is the left arrow key, the expression will return "Left". If the last key pressed has no name known to GDevelop, the expression returns an empty string.

## Key names

The "Key pressed/released (text expression)" conditions and the "Last key pressed" expression use the key names below. These names are **case sensitive** — in particular letter keys are **lowercase** (`"a"`, not `"A"`).

- **Letters**: `a` to `z`
- **Top-row numbers**: `Num0` to `Num9`
- **Numpad numbers**: `Numpad0` to `Numpad9`
- **Numpad operations**: `Add`, `Subtract`, `Multiply`, `Divide` (and the location-specific `NumpadAdd`, `NumpadSubtract`, `NumpadMultiply`, `NumpadDivide`, `NumpadReturn`)
- **Arrows**: `Left`, `Up`, `Right`, `Down` (numpad variants: `NumpadLeft`, `NumpadUp`, `NumpadRight`, `NumpadDown`)
- **Modifiers**: `LShift`, `RShift`, `LControl`, `RControl`, `LAlt`, `RAlt`, `LSystem`, `RSystem` (the Windows/Command key), `Menu`
- **Navigation**: `PageUp`, `PageDown`, `End`, `Home`, `Insert`, `Delete` (numpad variants: `NumpadPageUp`, `NumpadPageDown`, `NumpadEnd`, `NumpadHome`)
- **Editing/whitespace**: `Space`, `Back` (Backspace), `Tab`, `Return` (Enter), `Escape`
- **Punctuation**: `SemiColon`, `Comma`, `Period`, `Quote`, `Slash`, `BackSlash`, `Equal`, `Dash`, `LBracket`, `RBracket`, `Tilde`
- **Function keys**: `F1` to `F12`
- **Other**: `Pause`

!!! tip

    The left/right modifier keys (like `LShift`/`RShift`) are distinguished by their physical position. If you don't care which side was pressed, you need to check for both.

## Reference

All actions, conditions and expressions are listed in [the keyboard reference page](/gdevelop5/all-features/keyboard/reference/).