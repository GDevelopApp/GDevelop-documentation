---
title: Keyboard
---
# Keyboard

GDevelop gives access to all inputs made on the keyboard. This includes conditions to check if a key was pressed or released.

!!! warning

    Keyboard conditions do not work with the on-screen keyboard of touch devices. When making a game for mobile or touchscreen devices, use the [mouse/touch](/gdevelop5/all-features/mouse-touch) conditions instead.

## Any key pressed

For this condition, the corresponding action/s will be performed if any key on the keyboard is pressed.

## Any key released

The corresponding actions are performed during the frame in which any key on the keyboard is released.

## Key pressed

Whenever the key selected while setting this condition is pressed, the corresponding actions are performed.

## Key released

Whenever the key selected while setting this condition is released, the corresponding actions are performed.

## Key pressed (text expression)

To test a key press using this condition, you need to enter the key name in the form of text expression. For example, if you want to check condition for left arrow key press, you need to enter "Left" in the field.

This condition stays true for as long as the key is **held down**. To run an action only once when the key starts being pressed (for example to make a character jump), use **Key just pressed** instead.

!!! danger

    Make sure that the key name is surrounded by quotes.

![](/gdevelop5/all-features/annotation_2019-06-20_191229.png)

## Key just pressed (text expression)

This condition is true only during the single frame in which the key starts being pressed. It is useful for one-shot actions (jumping, validating a menu, firing a single shot...) so that holding the key down does not repeat the action every frame.

## Key released (text expression)

To test a key release using this condition, you need to enter the key name in the form of text expression. For example, if you want to check condition for left arrow key release, you need to enter "Left" in the field.

![](/gdevelop5/all-features/annotation_2019-06-20_191302.png)

## Last key pressed

"Last key pressed" expression returns the last key press in the form of a string. For example, if the last key press is the left arrow key, the expression will return "Left".

## Key names

When a condition or expression asks for a key name as text, use one of these names (case sensitive):

- **Letters**: `a` to `z` (always lowercase, regardless of Shift or Caps Lock).
- **Numbers**: `Num0` to `Num9` (top row) and `Numpad0` to `Numpad9` (numeric keypad).
- **Arrow keys**: `Left`, `Up`, `Right`, `Down`.
- **Modifiers**: `LShift`, `RShift`, `LControl`, `RControl`, `LAlt`, `RAlt`, `LSystem`, `RSystem` (the left/right Windows or Command key).
- **Function keys**: `F1` to `F12`.
- **Editing & navigation**: `Space`, `Return`, `Back` (Backspace), `Tab`, `Delete`, `Insert`, `Escape`, `Home`, `End`, `PageUp`, `PageDown`, `Pause`, `Menu`.
- **Punctuation**: `SemiColon`, `Comma`, `Period`, `Quote`, `Slash`, `BackSlash`, `Equal`, `Dash`, `Tilde`, `LBracket`, `RBracket`.
- **Numpad operators**: `Add`, `Subtract`, `Multiply`, `Divide` (and their `Numpad`-prefixed variants).

The left and right variants of a key (such as `LShift`/`RShift`) are reported separately, so a key picker or the "Last pressed key" expression will return the specific side that was used.

## Reference

All actions, conditions and expressions are listed in [the keyboard reference page](/gdevelop5/all-features/keyboard/reference/).