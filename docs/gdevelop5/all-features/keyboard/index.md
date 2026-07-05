---
title: Keyboard
---
# Keyboard

GDevelop gives access to all inputs made on the keyboard. This includes conditions to check if a key was pressed or released.

!!! warning

    Keyboard conditions do not work with the on-screen keyboard of touch devices. When making a game for mobile or touchscreen devices, use the [mouse and touch](/gdevelop5/all-features/mouse-touch) conditions instead, or the [Text input](/gdevelop5/objects/text_input) object to capture typed text.

## Any key pressed

For this condition, the corresponding action/s will be performed if any key on the keyboard is pressed.

## Any key released

For this condition, the corresponding action/s will be performed if any key on the keyboard is released.

## Key pressed

Whenever the key selected while setting this condition is pressed, the corresponding actions are performed. This condition stays true for as long as the key is held down, so the actions run on every frame while the key is kept pressed.

## Key just pressed

This condition is true only during the single frame when the key is pressed down. Use it when an action should happen exactly once per key press (for example, jumping, firing, or toggling a menu), even if the player keeps the key held. To repeat actions while the key is held instead, use "Key pressed".

## Key released

Whenever the key selected while setting this condition is released, the corresponding actions are performed.

## Key pressed (text expression)

To test a key press using this condition, you need to enter the key name in the form of text expression. For example, if you want to check condition for left arrow key press, you need to enter "Left" in the field. This is useful when the key to check is computed from a variable (for example, to let the player remap controls).

!!! danger

    Make sure that the key name is surrounded by quotes.

Key names are case sensitive. A few common ones: letters are lowercase (`a` to `z`), the top-row number keys are `Num0` to `Num9` and the numeric keypad keys are `Numpad0` to `Numpad9`. Arrow keys are `Left`, `Right`, `Up` and `Down`. The left and right modifier keys are distinguished as `LShift`/`RShift`, `LControl`/`RControl` and `LAlt`/`RAlt`. Other examples include `Space`, `Return`, `Escape`, `Tab`, `Delete` and `F1` to `F12`.

![](/gdevelop5/all-features/annotation_2019-06-20_191229.png)

## Key released (text expression)

To test a key release using this condition, you need to enter the key name in the form of text expression. For example, if you want to check condition for left arrow key release, you need to enter "Left" in the field.

![](/gdevelop5/all-features/annotation_2019-06-20_191302.png)

## Last key pressed

"Last key pressed" expression returns the last key press in the form of a string. For example, if the last key press is the left arrow key, the expression will return "Left".

## Reference

All actions, conditions and expressions are listed in [the keyboard reference page](/gdevelop5/all-features/keyboard/reference/).