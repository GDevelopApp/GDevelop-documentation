---
title: Keyboard
---
# Keyboard

GDevelop gives access to all inputs made on the keyboard. This includes conditions to check if a key was pressed or released.

!!! warning

    Keyboard conditions do not work with the on-screen keyboard on touch devices. For mobile/touchscreen games, use the mouse/touch conditions instead.

## Any key pressed

For this condition, the corresponding action/s will be performed if any key on the keyboard is pressed.

## Any key released

For this condition, the corresponding action/s will be performed if any key on the keyboard is released.

## Key pressed

Whenever the key selected while setting this condition is pressed, the corresponding actions are performed. This stays true as long as the key is held down — use "Key just pressed" if you want the condition to be true only for the single frame when the key is first pressed.

## Key just pressed

Whenever the key selected while setting this condition was just pressed (during the current frame), the corresponding actions are performed. This is useful for actions that should only happen once per key press, like opening a menu or firing a single shot, even if the player keeps the key held.

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

## Last key pressed

"Last key pressed" expression returns the last key press in the form of a string. For example, if the last key press is the left arrow key, the expression will return "Left".

## Reference

All actions, conditions and expressions are listed in [the keyboard reference page](/gdevelop5/all-features/keyboard/reference/).