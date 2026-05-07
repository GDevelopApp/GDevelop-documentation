---
title: Keyboard
---
# Keyboard

GDevelop gives access to all inputs made on the keyboard. This includes conditions to check if a key was pressed or released.

!!! note

    Keyboard conditions do not detect the on-screen keyboard on touch devices. When making a game for mobile or touchscreens, prefer the [mouse and touch conditions](/gdevelop5/all-features/mouse-touch).

## Any key pressed

For this condition, the corresponding action/s will be performed if any key on the keyboard is pressed.

## Any key released

The actions are performed during the frame in which any key has just been released.

## Key pressed

Whenever the key selected while setting this condition is pressed, the corresponding actions are performed. This condition stays true as long as the key is held down.

## Key just pressed

This condition is only true during the single frame when the key is first pressed down — useful for triggering an action exactly once on a key press (jumping, firing, opening a menu) without it repeating every frame the key stays held.

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