---
title: Keyboard
---
# Keyboard

GDevelop gives access to all inputs made on the keyboard. This includes conditions to check if a key was pressed or released.

## Any key pressed / Any key released

These conditions are true if any key on the keyboard is pressed (or released). This is useful, for example, to detect a "Press any key to start" screen.

## Key pressed

This condition is true **as long as the chosen key is held down**, so the actions inside it run on every frame while the key stays pressed. Use it for continuous movement, like moving a character while an arrow key is held.

You can pick the key from a dropdown list, or switch the parameter to a text expression and type the key name yourself (see the list of key names below). Typing the name is handy when the key is decided dynamically, for example from a variable used as a remappable control.

## Key just pressed

Unlike "Key pressed", this condition is only true **for the single frame the key goes down**. It will not stay true while the key is held. Use it for one-shot actions like jumping, confirming a menu, or firing a single shot per press.

## Key released

This condition is true for the single frame the chosen key is released.

## Key names

When entering a key name as a text expression, the name must be surrounded by quotes (for example `"Left"`). The names are **case-sensitive**, and letter keys use a single lowercase letter (`"a"` to `"z"`). Some commonly used names:

- **Letters and digits**: `"a"`–`"z"`, `"Num0"`–`"Num9"` (top row), `"Numpad0"`–`"Numpad9"`
- **Arrows**: `"Left"`, `"Up"`, `"Right"`, `"Down"`
- **Modifiers**: `"LShift"`, `"RShift"`, `"LControl"`, `"RControl"`, `"LAlt"`, `"RAlt"`, `"LSystem"`, `"RSystem"` (the left/right Windows or Command key)
- **Editing and navigation**: `"Space"`, `"Return"`, `"Tab"`, `"Back"` (Backspace), `"Delete"`, `"Insert"`, `"Escape"`, `"Home"`, `"End"`, `"PageUp"`, `"PageDown"`
- **Function keys**: `"F1"` to `"F12"`
- **Punctuation**: `"Comma"`, `"Period"`, `"SemiColon"`, `"Slash"`, `"BackSlash"`, `"Quote"`, `"Equal"`, `"Dash"`, `"LBracket"`, `"RBracket"`, `"Tilde"`

The dropdown of the condition lists every supported key name.

## Last pressed key

The "Last pressed key" expression returns the name of the most recently pressed key as text, using the same names as above. For example, if the last key pressed was the left arrow, the expression returns `"Left"`. This is the easiest way to build a "press a key to bind it" controls menu.

## Reference

All actions, conditions and expressions are listed in [the keyboard reference page](/gdevelop5/all-features/keyboard/reference/).