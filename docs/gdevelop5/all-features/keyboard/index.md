---
title: Keyboard
---
# Keyboard

GDevelop gives access to all inputs made on the keyboard. This includes conditions to check if a key was pressed or released.

!!! warning

    Keyboard conditions do not work with the on-screen keyboard of touch devices. When making a game for mobile or touchscreens, use the mouse/touch conditions instead.

## Any key pressed

This condition is true if any key on the keyboard is currently pressed.

## Any key released

This condition is true during the frame in which any key on the keyboard is released.

## Key pressed

This condition stays true for as long as the chosen key is held down. Use it for continuous actions, such as moving a character while a key remains pressed.

## Key just pressed

This condition is only true during the single frame in which the chosen key is pressed down. Use it when an action should happen once per press, such as jumping or firing, so that holding the key down does not repeat the action every frame.

## Key released

This condition is true during the frame in which the chosen key is released.

## Choosing the key to check

When setting up these conditions, you can either pick a key from the selector or enter the key name as a text expression (for example to check a key stored in a variable). When typing the name, make sure it is surrounded by quotes, for example `"Left"`.

!!! danger

    Make sure that the key name is surrounded by quotes.

The valid key names are:

* Letters: `a` to `z`
* Top-row digits: `Num0` to `Num9` — Numpad digits: `Numpad0` to `Numpad9`
* Arrows: `Left`, `Up`, `Right`, `Down` (and the numpad arrows `NumpadLeft`, `NumpadUp`, `NumpadRight`, `NumpadDown`)
* Modifiers: `LShift`, `RShift`, `LControl`, `RControl`, `LAlt`, `RAlt`, `LSystem`, `RSystem`
* Function keys: `F1` to `F12`
* Navigation: `Space`, `Return`, `Back` (Backspace), `Tab`, `Delete`, `Insert`, `Escape`, `PageUp`, `PageDown`, `End`, `Home`, `Pause`, `Menu`
* Symbols: `SemiColon`, `Comma`, `Period`, `Quote`, `Slash`, `BackSlash`, `Equal`, `Dash`, `LBracket`, `RBracket`, `Tilde`
* Numpad operators: `Add`, `Subtract`, `Multiply`, `Divide` (and `NumpadAdd`, `NumpadSubtract`, `NumpadMultiply`, `NumpadDivide`)

## Last key pressed

"Last key pressed" expression returns the last key press in the form of a string. For example, if the last key press is the left arrow key, the expression will return "Left".

## Reference

All actions, conditions and expressions are listed in [the keyboard reference page](/gdevelop5/all-features/keyboard/reference/).