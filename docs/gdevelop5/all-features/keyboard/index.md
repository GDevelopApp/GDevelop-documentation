---
title: Keyboard
---
# Keyboard

GDevelop gives access to all inputs made on the keyboard. This includes conditions to check if a key was pressed or released.

!!! warning

    Keyboard conditions do not work with the on-screen keyboard on touch devices. When making a game for mobile or touchscreen, use the mouse/touch conditions instead (see [Handle mouse and touch events](/gdevelop5/all-features/mouse-touch)).

## Any key pressed

For this condition, the corresponding action/s will be performed if any key on the keyboard is pressed.

## Key pressed

Whenever the key selected while setting this condition is pressed, the corresponding actions are performed. This condition stays true for as long as the key is held down, so its actions run on every frame the key remains pressed.

## Key just pressed

This condition is only true during the single frame in which the key goes from released to pressed. Use it when an action should happen once per press (like jumping, firing a shot, or toggling a menu) instead of repeatedly while the key is held.

## Key released

Whenever the key selected while setting this condition is released, the corresponding actions are performed.

## Key pressed (text expression)

To test a key press using this condition, you need to enter the key name in the form of text expression. For example, if you want to check condition for left arrow key press, you need to enter "Left" in the field.

!!! danger

    Make sure that the key name is surrounded by quotes.

The key name must be one of the names recognised by GDevelop. This is the same name returned by the "Last pressed key" expression, which makes it possible to store a key in a variable and later test it with these conditions (useful for remappable controls). The valid key names are:

* **Letters**: `a` to `z` (always lowercase).
* **Digits (top row)**: `Num0` to `Num9`.
* **Numpad digits**: `Numpad0` to `Numpad9`.
* **Arrow keys**: `Left`, `Up`, `Right`, `Down` (and the numpad equivalents `NumpadLeft`, `NumpadUp`, `NumpadRight`, `NumpadDown`).
* **Modifiers**: `LShift`, `RShift`, `LControl`, `RControl`, `LAlt`, `RAlt`, `LSystem`, `RSystem` (the left/right *System* keys are the Windows/Command keys).
* **Editing & navigation**: `Space`, `Return`, `Back` (Backspace), `Tab`, `Delete`, `Insert`, `Escape`, `Home`, `End`, `PageUp`, `PageDown` (and the numpad versions `NumpadReturn`, `NumpadHome`, `NumpadEnd`, `NumpadPageUp`, `NumpadPageDown`), `Pause`, `Menu`.
* **Punctuation & symbols**: `SemiColon`, `Comma`, `Period`, `Quote`, `Slash`, `BackSlash`, `Equal`, `Dash`, `LBracket`, `RBracket`, `Tilde`.
* **Numpad operators**: `Add`, `Subtract`, `Multiply`, `Divide` (and the numpad-specific `NumpadAdd`, `NumpadSubtract`, `NumpadMultiply`, `NumpadDivide`).
* **Function keys**: `F1` to `F12`.

Left/right variants (like `LShift` and `RShift`) and numpad variants are distinct keys, so a condition on `LShift` will not be true when the right Shift is pressed.

![](/gdevelop5/all-features/annotation_2019-06-20_191229.png)

## Key released (text expression)

To test a key release using this condition, you need to enter the key name in the form of text expression. For example, if you want to check condition for left arrow key release, you need to enter "Left" in the field.

![](/gdevelop5/all-features/annotation_2019-06-20_191302.png)

## Last key pressed

"Last key pressed" expression returns the last key press in the form of a string. For example, if the last key press is the left arrow key, the expression will return "Left".

## Reference

All actions, conditions and expressions are listed in [the keyboard reference page](/gdevelop5/all-features/keyboard/reference/).