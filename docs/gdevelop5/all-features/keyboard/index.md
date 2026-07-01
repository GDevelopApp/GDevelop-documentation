---
title: Keyboard
---
# Keyboard

GDevelop gives access to all inputs made on the keyboard. This includes conditions to check if a key was pressed or released.

## Any key pressed

For this condition, the corresponding action/s will be performed if any key on the keyboard is pressed.

## Any key released

The corresponding actions are performed on the frame where any key on the keyboard is released.

## Key pressed

Whenever the key selected while setting this condition is pressed, the corresponding actions are performed. This condition **stays true for as long as the key is held down**, so the actions run on every frame until the key is released. This is what you usually want for continuous movement.

## Key just pressed

The corresponding actions are performed only on the single frame where the key goes from released to pressed. Use this instead of "Key pressed" when an action should happen once per key press (for example jumping, firing a weapon, or toggling a menu), regardless of how long the key is held.

## Key released

Whenever the key selected while setting this condition is released, the corresponding actions are performed.

## Key pressed (text expression)

To test a key press using this condition, you need to enter the key name in the form of text expression. For example, if you want to check condition for left arrow key press, you need to enter "Left" in the field.

This is useful when the key to check is not fixed, for instance when the player can remap their controls and the key name is stored in a variable.

!!! danger

    Make sure that the key name is surrounded by quotes.

Some commonly used key names are: `Space`, `Return` (the Enter key), `Escape`, `Left`, `Right`, `Up`, `Down`, `Shift` keys as `LShift`/`RShift`, `Control` keys as `LControl`/`RControl`, letters in lowercase (`a` to `z`), number row keys as `Num0` to `Num9` and numpad keys as `Numpad0` to `Numpad9`. When configuring the non-text-expression conditions, the dropdown list shows every key name that GDevelop recognises.

![](/gdevelop5/all-features/annotation_2019-06-20_191229.png)

## Key released (text expression)

To test a key release using this condition, you need to enter the key name in the form of text expression. For example, if you want to check condition for left arrow key release, you need to enter "Left" in the field.

![](/gdevelop5/all-features/annotation_2019-06-20_191302.png)

## Last pressed key

The "Last pressed key" expression returns the name of the latest key pressed on the keyboard, as a string. For example, if the last key press is the left arrow key, the expression will return "Left". This is handy for building a "press any key to rebind" screen: read this expression to capture whichever key the player pressed.

## Reference

All actions, conditions and expressions are listed in [the keyboard reference page](/gdevelop5/all-features/keyboard/reference/).