---
title: Keyboard
---
# Keyboard

GDevelop gives access to all inputs made on the keyboard. This includes conditions to check if a key was pressed or released.

!!! warning

    These conditions do not react to the on-screen keyboard of touch devices. For games targeting mobile or touchscreens, use the [mouse and touch conditions](/gdevelop5/all-features/mouse-touch/) instead.

## Any key pressed

For this condition, the corresponding action/s will be performed if any key on the keyboard is pressed.

## Any key released

The corresponding actions are performed when any key was just released during the frame.

## Key pressed

Whenever the key selected while setting this condition is pressed, the corresponding actions are performed. This condition stays true for as long as the key is held down.

## Key just pressed

This condition is **only true for the single frame** in which the key started being pressed. Use it (instead of "Key pressed") when you want an action to trigger exactly once per press — for example to fire a bullet, toggle a menu or move one step in a turn-based game — without having to combine "Key pressed" with a [Trigger once](/gdevelop5/all-features/advanced-conditions/trigger-once) condition.

## Key released

Whenever the key selected while setting this condition is released, the corresponding actions are performed.

## Key pressed / Key released (text expression)

These variants of the conditions accept the key name as a text expression instead of a fixed value from a list. This is useful when the key to check is read from a variable — for example to support customizable controls.

For example, to check the left arrow key, enter `"Left"` in the field.

!!! danger

    Make sure that the key name is surrounded by quotes.

![](/gdevelop5/all-features/annotation_2019-06-20_191229.png)

### Valid key names

Letters use their lowercase name (`"a"` to `"z"`). Top-row digits use `"Num0"` to `"Num9"`, while numeric keypad digits use `"Numpad0"` to `"Numpad9"`. Other commonly used names include:

- Arrow keys: `"Left"`, `"Right"`, `"Up"`, `"Down"` (and their numpad equivalents `"NumpadLeft"`, `"NumpadRight"`, `"NumpadUp"`, `"NumpadDown"`)
- Modifiers: `"LShift"`, `"RShift"`, `"LControl"`, `"RControl"`, `"LAlt"`, `"RAlt"`, `"LSystem"`, `"RSystem"`
- Whitespace and edition: `"Space"`, `"Return"`, `"Tab"`, `"Back"` (Backspace), `"Delete"`, `"Insert"`, `"Escape"`
- Navigation: `"PageUp"`, `"PageDown"`, `"Home"`, `"End"`
- Punctuation: `"SemiColon"`, `"Comma"`, `"Period"`, `"Quote"`, `"Slash"`, `"BackSlash"`, `"Equal"`, `"Dash"`, `"LBracket"`, `"RBracket"`, `"Tilde"`, `"Menu"`
- Function keys: `"F1"` through `"F12"`, `"Pause"`
- Numpad operators: `"Add"`, `"Subtract"`, `"Multiply"`, `"Divide"`

!!! note

    Key names are case sensitive. Names distinguish the left and right modifier keys (e.g. `"LShift"` and `"RShift"`) as well as the main keyboard and numeric keypad versions of digits, arrow keys and operators.

## Last key pressed

The `LastPressedKey()` expression returns the name of the last key that was pressed in the form of a string (using the same names as listed above). For example, if the last key pressed was the left arrow key, the expression will return `"Left"`. This is convenient when implementing a key-remapping screen: store the value of this expression into a variable when the player presses the key they want to assign.

## Reference

All actions, conditions and expressions are listed in [the keyboard reference page](/gdevelop5/all-features/keyboard/reference/).