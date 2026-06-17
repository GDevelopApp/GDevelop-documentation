---
title: Keyboard
---
# Keyboard

GDevelop gives access to all inputs made on the keyboard. This includes conditions to check if a key is pressed or released.

!!! warning

    Keyboard conditions do not work with the on-screen keyboard of touch devices. When making a game for mobile or touchscreen devices, use the mouse/touch conditions instead.

## Selecting a key

When setting a "Key pressed" or "Key released" condition, you choose the key to check from a drop-down list (for example `Left`, `Space`, `Return`, `LShift`...). If you need the key to be dynamic, click "Use an expression" to instead provide the key name as a text expression, which is useful for customizable controls (for example, reading the key name from a variable).

## Key pressed

This condition is true as long as the selected key is held down. Use it for continuous actions, such as moving a character while an arrow key stays pressed.

## Key just pressed

This condition is true only during the frame in which the key is pressed down. Use it for one-shot actions that should happen once per press, such as jumping or opening a menu, so that holding the key does not trigger the action repeatedly.

## Key released

This condition is true during the frame in which the selected key is released.

## Any key pressed

This condition is true if any key on the keyboard is pressed.

## Any key released

This condition is true if any key on the keyboard was just released.

## Last pressed key

The "Last pressed key" expression returns the name of the latest key pressed on the keyboard, as a string. For example, if the last key pressed is the left arrow key, the expression returns "Left". This is handy for building key-rebinding screens that capture the key a player presses.

## Reference

All actions, conditions and expressions are listed in [the keyboard reference page](/gdevelop5/all-features/keyboard/reference/).