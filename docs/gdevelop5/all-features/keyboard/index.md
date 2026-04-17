---
title: Keyboard
---
# Keyboard

GDevelop gives access to all inputs made on the keyboard. This includes conditions to check if a key is held, just pressed, or released.

## Key pressed vs. key released

**Key pressed** fires every frame for as long as the key is held down — this is ideal for continuous movement (e.g., moving a character while the arrow key is held).

**Key released** fires on the single frame when the key is lifted — use this for one-shot actions like confirming a menu selection or toggling a state.

## Any key pressed

This condition is true whenever any key on the keyboard is held down. It is useful for "press any key to continue" screens or for detecting the start of input.

## Key pressed / Key released (text expression)

The text-expression variants let you specify the key name as a string expression. This is useful when you want to check keys dynamically — for example, by reading the key name from a variable (to support configurable controls).

Key names follow this convention:

- **Letters**: lowercase single characters — `"a"`, `"b"`, ..., `"z"`
- **Number row**: `"Num0"` through `"Num9"`
- **Numpad**: `"Numpad0"` through `"Numpad9"`
- **Arrow keys**: `"Left"`, `"Right"`, `"Up"`, `"Down"`
- **Common keys**: `"Space"`, `"Return"`, `"Escape"`, `"Tab"`, `"Back"` (Backspace), `"Delete"`, `"Insert"`
- **Modifier keys**: `"LShift"`, `"RShift"`, `"LControl"`, `"RControl"`, `"LAlt"`, `"RAlt"`
- **Function keys**: `"F1"` through `"F12"`

!!! danger

    Key names are case-sensitive. For example, use `"Space"` not `"space"`, and `"Return"` not `"return"`. Letters, however, are all lowercase: use `"a"` not `"A"`.

![](/gdevelop5/all-features/annotation_2019-06-20_191229.png)

## Last key pressed

The `LastKeyPressed()` expression returns the name of the most recently pressed key as a text string — using the same naming convention as above. For example, if the player pressed the left arrow key, it returns `"Left"`.

This is useful for key-rebinding systems: store the result in a variable when the player presses a key during a configuration screen, then use the text-expression conditions to check that stored key name during gameplay.

## Reference

All actions, conditions and expressions are listed in [the keyboard reference page](/gdevelop5/all-features/keyboard/reference/).