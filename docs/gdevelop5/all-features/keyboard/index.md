---
title: Keyboard
---
# Keyboard

GDevelop gives access to all inputs made on the keyboard. This includes conditions to check if a key was pressed or released.

!!! warning

    Keyboard conditions do **not** work with on-screen keyboards on touch devices. If you are making a game for mobile or touchscreen devices, use the mouse/touch conditions instead, or add an on-screen control like a virtual joystick.

## Any key pressed / Any key released

The "Any key pressed" condition is true while at least one key on the keyboard is held down. "Any key released" becomes true the moment any key is released. They are commonly used on a "Press any key to continue" screen.

## Key pressed

Whenever the key selected while setting this condition is pressed, the corresponding actions are performed. This stays true as long as the key is held down — so the actions will run on every frame while the player keeps the key pressed.

## Key just pressed

Becomes true only on the single frame during which the key was first pressed. Use this condition (instead of "Key pressed") when an action should happen exactly once per key press — for example to swap a weapon, open a menu, or jump in a platformer.

## Key released

Whenever the key selected while setting this condition is released, the corresponding actions are performed.

## Key pressed (text expression)

To test a key press using this condition, you need to enter the key name in the form of text expression. For example, if you want to check condition for left arrow key press, you need to enter "Left" in the field.

This variant is useful when the key to check is dynamic — for example a key the player has remapped and stored in a variable.

!!! danger

    Make sure that the key name is surrounded by quotes.

![](/gdevelop5/all-features/annotation_2019-06-20_191229.png)

## Key released (text expression)

To test a key release using this condition, you need to enter the key name in the form of text expression. For example, if you want to check condition for left arrow key release, you need to enter "Left" in the field.

![](/gdevelop5/all-features/annotation_2019-06-20_191302.png)

## Last key pressed

"Last key pressed" expression returns the last key press in the form of a string. For example, if the last key press is the left arrow key, the expression will return "Left".

## Reference

All actions, conditions and expressions are listed in [the keyboard reference page](/gdevelop5/all-features/keyboard/reference/).