---
title: Keyboard
---
# Keyboard

GDevelop gives access to all inputs made on the keyboard. This includes conditions to check if a key was pressed, held, or released, and an expression to retrieve the last key pressed.

!!! warning

    Keyboard conditions do **not** work with on-screen touch keyboards on mobile devices. When targeting mobile or touch-screen platforms, use mouse/touch conditions instead (or gamepad conditions with a virtual joystick).

## Key pressed

This condition is true as long as the key is **held down**. It is useful for continuous actions such as moving a character — the action runs every frame while the key is down.

## Key just pressed

This condition is true only for the **single frame when the key is first pressed down**. Use this for one-shot actions like jumping or firing a weapon, where you want the action to trigger once per key press rather than every frame.

!!! tip

    If a player complains that holding down the jump key makes them jump repeatedly, switch from **Key pressed** to **Key just pressed**.

## Key released

This condition is true only for the **single frame when the key is released**. Useful for actions that should trigger at the moment the player lifts their finger.

## Any key pressed / Any key released

These conditions are true when **any** keyboard key is pressed or released, regardless of which one. Handy for "press any key to continue" prompts.

Use the **Last key pressed** expression to find out which key it was — for example, to display it in a text object or store it in a variable.

## Key names

Keys are identified by name strings. Some common names:

| Key | Name string |
|---|---|
| Arrow keys | `Left`, `Right`, `Up`, `Down` |
| Letter keys | `a`–`z` (lowercase) |
| Number row | `Num0`–`Num9` |
| Numpad digits | `Numpad0`–`Numpad9` |
| Function keys | `F1`–`F12` |
| Modifier keys | `LShift`, `RShift`, `LControl`, `RControl`, `LAlt`, `RAlt` |
| Space / Enter | `Space`, `Return` |
| Other | `Escape`, `Tab`, `Back` (Backspace), `Delete`, `Insert`, `Pause` |

The GDevelop event editor provides a key picker, so you rarely need to type names manually. The **Key pressed (text expression)** and **Key released (text expression)** variants accept the name as a text expression, which is useful when the key to check is stored in a variable.

## Last key pressed

The `LastPressedKey()` expression returns the name of the most recently pressed key as a string. For example, if the player presses the left arrow key, the expression returns `"Left"`.

## Reference

All actions, conditions and expressions are listed in [the keyboard reference page](/gdevelop5/all-features/keyboard/reference/).
