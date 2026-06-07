---
title: Keyboard
---
# Keyboard

GDevelop gives access to all inputs made on the keyboard. This includes conditions to check if a key is pressed or released.

!!! warning

    Keyboard conditions do not work with the on-screen keyboard on touch devices. When making a game for mobile or touchscreen devices, use the mouse/touch conditions instead.

## Any key pressed

The corresponding actions will be performed if any key on the keyboard is pressed.

## Any key released

The corresponding actions will be performed when any key on the keyboard is released.

## Key pressed

Whenever the selected key is held down, the corresponding actions are performed. This condition stays true for as long as the key is held down, so the actions run on every frame until the key is released.

## Key just pressed

The corresponding actions are performed only on the single frame where the key goes from released to pressed. Use this when you want an action to happen once per key press (for example, jumping or firing) rather than continuously while the key is held.

## Key released

Whenever the selected key is released, the corresponding actions are performed.

## Key pressed (text expression)

To test a key press using this condition, you need to enter the key name in the form of text expression. For example, if you want to check condition for left arrow key press, you need to enter "Left" in the field.

!!! danger

    Make sure that the key name is surrounded by quotes.

![](/gdevelop5/all-features/annotation_2019-06-20_191229.png)

## Key released (text expression)

To test a key release using this condition, you need to enter the key name in the form of text expression. For example, if you want to check condition for left arrow key release, you need to enter "Left" in the field.

![](/gdevelop5/all-features/annotation_2019-06-20_191302.png)

## Last key pressed

The "Last pressed key" expression returns the name of the latest key pressed on the keyboard, as text. For example, if the last key press is the left arrow key, the expression will return "Left". This is useful for building features like remappable controls, where you let the player press a key and store its name.

## Key names

When a condition or expression asks for a key name as text, use one of these values (case-sensitive):

* **Letters:** `a` to `z`
* **Digits (top row):** `Num0` to `Num9`
* **Numpad digits:** `Numpad0` to `Numpad9`
* **Arrows:** `Left`, `Up`, `Right`, `Down`
* **Modifiers:** `LShift`, `RShift`, `LControl`, `RControl`, `LAlt`, `RAlt`, `LSystem`, `RSystem` (the left/right Windows or Command key)
* **Function keys:** `F1` to `F12`
* **Editing keys:** `Space`, `Return`, `Back` (Backspace), `Tab`, `Delete`, `Insert`, `Escape`, `Home`, `End`, `PageUp`, `PageDown`, `Pause`, `Menu`
* **Punctuation:** `SemiColon`, `Comma`, `Period`, `Quote`, `Slash`, `BackSlash`, `Equal`, `Dash`, `LBracket`, `RBracket`, `Tilde`
* **Numpad keys:** `Add`, `Subtract`, `Multiply`, `Divide`, `NumpadReturn`, `NumpadHome`, `NumpadEnd`, `NumpadPageUp`, `NumpadPageDown`, `NumpadLeft`, `NumpadUp`, `NumpadRight`, `NumpadDown`

## Reference

All actions, conditions and expressions are listed in [the keyboard reference page](/gdevelop5/all-features/keyboard/reference/).