---
title: Keyboard
---
# Keyboard

GDevelop gives access to all inputs made on the keyboard. This includes conditions to check if a key was pressed or released.

!!! warning

    Keyboard conditions do not react to the on-screen (virtual) keyboard of mobile or touchscreen devices. When making a game for mobile/touchscreen devices, use mouse/touch conditions or the [text input object](/gdevelop5/objects/text_input) instead.

## Key pressed vs Key just pressed

There are two ways to check if a player is pressing a key, with an important difference:

- **Key pressed**: stays true *as long as the key is held down*. The associated actions run on every frame while the key is held. Use this for continuous actions like moving a character.
- **Key just pressed**: is true *only on the single frame* during which the key was pressed. Use this for one-shot actions like jumping, shooting, opening a menu, etc. — this avoids needing a [Trigger once](/gdevelop5/all-features/advanced-conditions/trigger-once) condition.

## Any key pressed / Any key released

These conditions trigger when *any* key on the keyboard is pressed (or released). They are useful for "Press any key to continue" screens or to detect when the player starts interacting with the game.

## Key pressed (text expression)

To test a key press using this condition, you need to enter the key name in the form of text expression. For example, if you want to check condition for left arrow key press, you need to enter "Left" in the field.

!!! danger

    Make sure that the key name is surrounded by quotes.

![](/gdevelop5/all-features/annotation_2019-06-20_191229.png)

## Key released (text expression)

To test a key release using this condition, you need to enter the key name in the form of text expression. For example, if you want to check condition for left arrow key release, you need to enter "Left" in the field.

![](/gdevelop5/all-features/annotation_2019-06-20_191302.png)

## Last key pressed

"Last key pressed" expression returns the last key press in the form of a string. For example, if the last key press is the left arrow key, the expression will return "Left". This is handy for building key-rebinding screens, where you want to capture whichever key the player presses next.

## Left and right variants of modifier keys

Keys like **Shift**, **Control**, **Alt** and the **Meta/Win** key exist as two physical keys on most keyboards (one on each side). GDevelop distinguishes them: the key list includes separate entries such as **LShift** and **RShift**, **LControl** and **RControl**, etc. If you want to react to either side, add a condition for each variant.

## Reference

All actions, conditions and expressions are listed in [the keyboard reference page](/gdevelop5/all-features/keyboard/reference/).