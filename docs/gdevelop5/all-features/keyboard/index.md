---
title: Keyboard
---
# Keyboard

GDevelop gives access to all inputs made on the keyboard. This includes conditions to check if a key is pressed or released.

!!! warning

    Keyboard conditions do not work with the on-screen keyboard on touch devices. When making a game for mobile or touchscreen devices, use the [mouse/touch conditions](/gdevelop5/all-features/mouse-touch) instead.

## Any key pressed

For this condition, the corresponding action/s will be performed if any key on the keyboard is pressed. There is also an "Any key released" condition that triggers when any key is released, which is handy to detect "press any key to continue" interactions.

## Key pressed

Whenever the key selected while setting this condition is pressed, the corresponding actions are performed.

## Key released

Whenever the key selected while setting this condition is released, the corresponding actions are performed.

## Key just pressed

Whereas "Key pressed" stays true the whole time a key is held down, "Key just pressed" is only true during the single frame when the key goes down. Use it for actions that should happen once per key press (jumping, firing a shot, validating a menu choice) rather than repeating every frame while the key is held.

## Key pressed (text expression)

To test a key press using this condition, you need to enter the key name in the form of a text expression. For example, if you want to check the condition for the left arrow key press, you need to enter "Left" in the field.

!!! danger

    Make sure that the key name is surrounded by quotes.

Left and right modifier keys are distinguished, so use "LShift"/"RShift", "LControl"/"RControl" and "LAlt"/"RAlt". Other common names include "Space", "Return", the arrow keys ("Left", "Right", "Up", "Down"), the number row ("Num0" to "Num9") and the numeric keypad ("Numpad0" to "Numpad9"). The autocomplete in the key field lists every valid name.

![](/gdevelop5/all-features/annotation_2019-06-20_191229.png)

## Key released (text expression)

To test a key release using this condition, you need to enter the key name in the form of text expression. For example, if you want to check condition for left arrow key release, you need to enter "Left" in the field.

![](/gdevelop5/all-features/annotation_2019-06-20_191302.png)

## Last key pressed

"Last key pressed" expression returns the last key press in the form of a string. For example, if the last key press is the left arrow key, the expression will return "Left".

## Reference

All actions, conditions and expressions are listed in [the keyboard reference page](/gdevelop5/all-features/keyboard/reference/).