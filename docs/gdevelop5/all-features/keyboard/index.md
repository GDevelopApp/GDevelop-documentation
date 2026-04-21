---
title: Keyboard
---
# Keyboard

GDevelop gives access to all inputs made on the keyboard. This includes conditions to check if a key was pressed or released.

!!! tip

    For games that must also run on mobile devices, combine keyboard conditions with touch/gamepad conditions — there is no physical keyboard on phones and tablets.

## Key pressed vs Key just pressed

There is an important distinction between two "pressed" conditions:

- **Key pressed** — remains *true* for as long as the key is held down. Use this for continuous actions like moving a character.
- **Key just pressed** — is *true* only on the **single frame** the key was first pressed. Use this for one-shot actions like jumping or firing, so the action does not repeat while the key is held.

## Any key pressed

Becomes true if **any** key on the keyboard is currently held down. The **"Any key released"** condition is similarly available for detecting when any held key is let go.

## Key pressed and Key released (text expression)

The text-based variants let you specify the key name as an expression, which is useful when the key is stored in a variable (for example, a configurable controls system).

For example, to check for the left arrow key, enter `"Left"` in the field.

!!! danger

    Make sure the key name is surrounded by quotes when you type it directly.

![](/gdevelop5/all-features/annotation_2019-06-20_191229.png)

![](/gdevelop5/all-features/annotation_2019-06-20_191302.png)

### Key names

The following strings are accepted as key names:

| Category | Key names |
|---|---|
| Letters | `a` – `z` (lowercase) |
| Number row | `Num0` – `Num9` |
| Numpad | `Numpad0` – `Numpad9` |
| Arrow keys | `Left`, `Right`, `Up`, `Down` |
| Function keys | `F1` – `F12` |
| Modifiers | `LShift`, `RShift`, `LControl`, `RControl`, `LAlt`, `RAlt` |
| Navigation | `Home`, `End`, `PageUp`, `PageDown`, `Insert`, `Delete` |
| Other | `Space`, `Return`, `Escape`, `Tab`, `Back` (Backspace), `Pause`, `Menu` |
| Symbols | `SemiColon`, `Comma`, `Period`, `Quote`, `Slash`, `BackSlash`, `Equal`, `Dash`, `LBracket`, `RBracket`, `Tilde` |

## Last key pressed

The `LastPressedKey()` expression returns the name of the most recently pressed key as a string — for example `"Left"` when the left arrow was pressed. This is useful for building text input fields or displaying on-screen prompts that show the player's configured key.

## Reference

All actions, conditions and expressions are listed in [the keyboard reference page](/gdevelop5/all-features/keyboard/reference/).