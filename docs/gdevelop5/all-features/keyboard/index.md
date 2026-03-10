---
title: Keyboard
---
# Keyboard

GDevelop gives access to all inputs made on the keyboard. This includes conditions to check if a key is held down, just pressed, or released.

!!! warning

    Keyboard conditions do **not** work with on-screen virtual keyboards on touch devices. For mobile or touchscreen games, use [mouse/touch conditions](/gdevelop5/all-features/mouse-touch) instead.

## Any key pressed

This condition is true as long as **any** key on the keyboard is held down.

## Any key released

This condition is true for one frame when **any** key is released.

## Key pressed

This condition is true as long as the selected key is **held down**. Use this for continuous input such as moving a character while a direction key is held.

## Key just pressed

This condition is true for **one frame only** — the frame when the key is first pressed. Use this for single-trigger actions such as jumping, firing, or opening a menu, where you want the action to happen once per key press and not repeat while the key is held.

## Key released

This condition is true for one frame when the selected key is **released**.

## Key pressed (text expression)

To test a key press using this condition, enter the key name as a text expression. For example, to check if the left arrow key is pressed, enter `"Left"` in the field.

!!! danger

    Make sure that the key name is surrounded by quotes.

![](/gdevelop5/all-features/annotation_2019-06-20_191229.png)

## Key released (text expression)

To test a key release using this condition, enter the key name as a text expression. For example, to check if the left arrow key is released, enter `"Left"` in the field.

![](/gdevelop5/all-features/annotation_2019-06-20_191302.png)

## Last key pressed

The "Last key pressed" expression returns the name of the most recently pressed key as a string. For example, if the left arrow key was last pressed, the expression returns `"Left"`.

## Key names reference

The following key names can be used in the text-expression versions of keyboard conditions:

| Category | Key names |
|---|---|
| Letters | `a` – `z` (lowercase) |
| Number row | `Num0` – `Num9` |
| Numpad digits | `Numpad0` – `Numpad9` |
| Arrow keys | `Left`, `Right`, `Up`, `Down` |
| Numpad arrows | `NumpadLeft`, `NumpadRight`, `NumpadUp`, `NumpadDown` |
| Function keys | `F1` – `F12` |
| Modifiers | `LShift`, `RShift`, `LControl`, `RControl`, `LAlt`, `RAlt` |
| Special | `Space`, `Return`, `Escape`, `Tab`, `Back`, `Delete`, `Insert` |
| Navigation | `Home`, `End`, `PageUp`, `PageDown` |
| Numpad navigation | `NumpadHome`, `NumpadEnd`, `NumpadPageUp`, `NumpadPageDown`, `NumpadReturn` |
| Numpad operators | `Add`, `Subtract`, `Multiply`, `Divide`, `NumpadAdd`, `NumpadSubtract`, `NumpadMultiply`, `NumpadDivide` |
| Punctuation | `SemiColon`, `Comma`, `Period`, `Quote`, `Slash`, `BackSlash`, `Equal`, `Dash`, `LBracket`, `RBracket`, `Tilde` |
| Other | `Pause`, `Menu`, `LSystem`, `RSystem` |

## Reference

All actions, conditions and expressions are listed in [the keyboard reference page](/gdevelop5/all-features/keyboard/reference/).
