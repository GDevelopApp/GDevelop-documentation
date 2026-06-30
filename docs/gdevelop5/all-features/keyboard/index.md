---
title: Keyboard
---
# Keyboard

GDevelop gives access to all inputs made on the keyboard. This includes conditions to check if a key was pressed or released.

## Any key pressed

For this condition, the corresponding action/s will be performed if any key on the keyboard is pressed.

## Any key released

The corresponding actions are performed if any key on the keyboard was just released.

## Key pressed

Whenever the key selected while setting this condition is held down, the corresponding actions are performed. This condition stays true for **every frame the key is held**, so it's the right choice for continuous movement (for example, moving a character left while the left arrow is pressed).

## Key just pressed

This condition is true only on the **single frame** the key goes down, even if the player keeps holding it. Use it for one-off reactions such as jumping, shooting or toggling a menu, where holding the key should not repeat the action.

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

## Key names

Whether you select a key from the list or type it as a text expression, GDevelop uses fixed key names that follow a few conventions:

* Letters are **lowercase**: `"a"`, `"b"`, ... `"z"`.
* Number row keys are `"Num0"` to `"Num9"`, while the numeric keypad keys are `"Numpad0"` to `"Numpad9"`.
* Arrow keys are `"Left"`, `"Up"`, `"Right"` and `"Down"`.
* Modifier keys distinguish left and right: `"LShift"`/`"RShift"`, `"LControl"`/`"RControl"`, `"LAlt"`/`"RAlt"`.
* Other common keys include `"Space"`, `"Return"` (Enter), `"Escape"`, `"Tab"`, `"Back"` (Backspace), `"Delete"` and the function keys `"F1"` to `"F12"`.

When using a text expression, picking a key from the list first is the easiest way to see its exact name.

## Last key pressed

"Last key pressed" expression returns the last key press in the form of a string. For example, if the last key press is the left arrow key, the expression will return "Left".

## Reference

All actions, conditions and expressions are listed in [the keyboard reference page](/gdevelop5/all-features/keyboard/reference/).