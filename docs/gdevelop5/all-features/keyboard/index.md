---
title: Keyboard
---
# Keyboard

GDevelop gives access to all inputs made on the keyboard. This includes conditions to check if a key is pressed or released.

!!! warning

    These conditions do not work with the on-screen keyboard shown on touch devices. When making a game for mobile/touchscreen devices, use the [mouse/touch](/gdevelop5/all-features/mouse-touch) conditions instead, or the [Text Input](/gdevelop5/objects/text_input) object to capture typed text.

## Key pressed vs Key just pressed

There are two similar conditions, and choosing the right one matters:

* **Key pressed** stays true for *every frame* during which the key is held down. Use it for continuous actions, like moving a character as long as an arrow key is held.
* **Key just pressed** is only true for the *single frame* on which the key was first pressed. Use it for one-time actions that should not repeat while the key stays down, such as making a character jump or toggling a menu.

## Any key pressed / Any key released

These conditions are true when any key on the keyboard is pressed (or just released). They are handy to dismiss a screen or start a game with "press any key".

## Key released

Whenever the key selected while setting this condition is released, the corresponding actions are performed.

## Choosing the key

When setting up a key condition you pick the key from a list. The condition can also be configured to take the key name as a **text expression**, which is useful when the key to check is stored in a variable (for example, for customizable controls). For example, to check the left arrow key, enter "Left" in the field.

!!! danger

    Make sure that the key name is surrounded by quotes.

![](/gdevelop5/all-features/annotation_2019-06-20_191229.png)

![](/gdevelop5/all-features/annotation_2019-06-20_191302.png)

## Last pressed key

The "Last pressed key" expression returns the name of the most recently pressed key as a string. For example, if the last key pressed is the left arrow key, the expression returns "Left". This is convenient to let the player remap their controls by capturing whichever key they press next.

## Reference

All actions, conditions and expressions are listed in [the keyboard reference page](/gdevelop5/all-features/keyboard/reference/).