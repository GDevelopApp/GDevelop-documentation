---
title: Keyboard
---
# Keyboard

GDevelop gives access to all inputs made on the keyboard. This includes conditions to check if a key was pressed or released.

## Any key pressed

For this condition, the corresponding action/s will be performed if any key on the keyboard is pressed.

## Any key released

Similar to "Any key pressed", but true on the frame where any key is released.

## Key pressed

Whenever the key selected while setting this condition is pressed, the corresponding actions are performed. This condition **stays true as long as the key is held down**, so it triggers on every frame the key remains pressed.

## Key just pressed

Similar to "Key pressed", but true **only on the single frame the key goes down**. Use this when an action must happen once per press (for example, opening a menu or firing a single shot), even if the player keeps holding the key.

## Key released

Whenever the key selected while setting this condition is released, the corresponding actions are performed.

## Key pressed (text expression)

To test a key press using this condition, you need to enter the key name in the form of text expression. For example, if you want to check condition for left arrow key press, you need to enter "Left" in the field.

Like the selector version above, this stays true while the key is held down. There is also a **"Key just pressed"** variant that only triggers on the frame the key goes down.

!!! danger

    Make sure that the key name is surrounded by quotes.

![](/gdevelop5/all-features/annotation_2019-06-20_191229.png)

Valid key names include:

- Letters: `a` to `z` (always lowercase).
- Digits: `Num0` to `Num9` (top row) and `Numpad0` to `Numpad9` (numeric keypad).
- Arrows: `Left`, `Up`, `Right`, `Down`.
- Modifiers: `LShift`, `RShift`, `LControl`, `RControl`, `LAlt`, `RAlt`, `LSystem`, `RSystem`.
- Common keys: `Space`, `Return`, `Escape`, `Tab`, `Back` (Backspace), `Delete`, `Insert`, `Home`, `End`, `PageUp`, `PageDown`.
- Function keys: `F1` to `F12`.
- Punctuation and symbols: `SemiColon`, `Comma`, `Period`, `Quote`, `Slash`, `BackSlash`, `Equal`, `Dash`, `LBracket`, `RBracket`, `Tilde`, `Menu`, `Pause`.
- Keypad operators: `Add`, `Subtract`, `Multiply`, `Divide`.

## Key released (text expression)

To test a key release using this condition, you need to enter the key name in the form of text expression. For example, if you want to check condition for left arrow key release, you need to enter "Left" in the field.

![](/gdevelop5/all-features/annotation_2019-06-20_191302.png)

## Last key pressed

"Last key pressed" expression returns the last key press in the form of a string. For example, if the last key press is the left arrow key, the expression will return "Left".

## Reference

All actions, conditions and expressions are listed in [the keyboard reference page](/gdevelop5/all-features/keyboard/reference/).