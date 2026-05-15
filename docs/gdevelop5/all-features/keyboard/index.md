---
title: Keyboard
---
# Keyboard

GDevelop gives access to all inputs made on the keyboard. This includes conditions to check if a key was pressed or released.

!!! note

    The keyboard conditions only react to physical keys. They do **not** trigger from the on-screen keyboard on mobile or touch devices. For mobile games, use the touch or [Text Input](/gdevelop5/objects/text_input/) conditions instead.

## Any key pressed

For this condition, the corresponding action/s will be performed if any key on the keyboard is pressed.

## Key pressed

This condition stays **true for as long as the key is held down**. Use it for continuous actions, like moving a character while a direction key is held.

If you only need to react once, the moment the key starts being pressed (for example, to fire a bullet or pause the game), use the **Key just pressed** condition instead.

## Key just pressed

This condition is only **true during the single frame the key starts being pressed**. It will not trigger again until the key has been released and pressed again.

## Key released

Whenever the key selected while setting this condition is released, the corresponding actions are performed (true only during the frame the key is released).

## Key pressed (text expression)

To test a key press using this condition, you need to enter the key name in the form of text expression. For example, if you want to check condition for left arrow key press, you need to enter "Left" in the field.

A "Key just pressed" variant is also available when you need to react only on the frame the key starts being pressed.

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