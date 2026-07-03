---
title: Keyboard
---
# Keyboard

GDevelop gives access to all inputs made on the keyboard. This includes conditions to check if a key was pressed or released.

!!! warning

    Keyboard conditions do **not** work with the on-screen keyboard shown on touchscreen devices. When making a game for mobile or touchscreen, use the [mouse/touch conditions](/gdevelop5/all-features/mouse-touch) instead, or add on-screen buttons.

## Any key pressed

For this condition, the corresponding action/s will be performed if any key on the keyboard is pressed.

## Any key released

The corresponding actions are performed on the frame any key on the keyboard is released.

## Key pressed

Whenever the key selected while setting this condition is pressed, the corresponding actions are performed. This condition stays true for as long as the key is held down, so its actions run on every frame while the key remains pressed.

## Key just pressed

This condition is true only on the single frame the key goes down, no matter how long the key is then held. Use it for one-shot actions — opening a menu, firing a shot, jumping — where "Key pressed" would otherwise repeat the action every frame.

## Key released

Whenever the key selected while setting this condition is released, the corresponding actions are performed.

## Key pressed (text expression)

To test a key press using this condition, you need to enter the key name in the form of text expression. For example, if you want to check condition for left arrow key press, you need to enter "Left" in the field. This is useful when the key to check is not fixed but comes from a variable (for example a rebindable control stored in a variable).

!!! danger

    Make sure that the key name is surrounded by quotes.

Key names follow GDevelop's own spelling, which is not always the label printed on the key. Some common examples:

* Letters are lowercase: `"a"`, `"b"`, … `"z"`.
* Arrow keys: `"Left"`, `"Right"`, `"Up"`, `"Down"`.
* `"Space"`, `"Return"` (Enter), `"Escape"`, `"Tab"`, `"Back"` (Backspace), `"Delete"`, `"Shift"` modifiers are `"LShift"`/`"RShift"`, control is `"LControl"`/`"RControl"`, and alt is `"LAlt"`/`"RAlt"`.
* Number row keys are `"Num0"` … `"Num9"`, while the numeric keypad uses `"Numpad0"` … `"Numpad9"`.

When picking a key from the dropdown of the standard "Key pressed" condition, GDevelop fills in the right name for you.

![](/gdevelop5/all-features/annotation_2019-06-20_191229.png)

## Key released (text expression)

To test a key release using this condition, you need to enter the key name in the form of text expression. For example, if you want to check condition for left arrow key release, you need to enter "Left" in the field.

![](/gdevelop5/all-features/annotation_2019-06-20_191302.png)

## Last key pressed

"Last key pressed" expression returns the last key press in the form of a string. For example, if the last key press is the left arrow key, the expression will return "Left".

## Reference

All actions, conditions and expressions are listed in [the keyboard reference page](/gdevelop5/all-features/keyboard/reference/).