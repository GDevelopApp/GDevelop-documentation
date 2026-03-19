---
title: Keyboard
---
# Keyboard

GDevelop gives access to all inputs made on the keyboard. This includes conditions to check if a key was pressed or released.

## Any key pressed

For this condition, the corresponding action/s will be performed if any key on the keyboard is pressed. A companion condition **Any key released** is also available, which is true for one frame when any key is released.

## Key pressed

Whenever the key selected while setting this condition is **pressed or held down**, the corresponding actions are performed. This condition remains true every frame while the key is held.

## Key released

Whenever the key selected while setting this condition is released, the corresponding actions are performed. This condition is true for one frame only, the frame the key is let go.

## Key pressed (text expression)

To test a key press using this condition, you need to enter the key name in the form of text expression. For example, if you want to check condition for left arrow key press, you need to enter "Left" in the field.

!!! danger

    Make sure that the key name is surrounded by quotes.

![](/gdevelop5/all-features/annotation_2019-06-20_191229.png)

A related condition **Key just pressed (text expression)** is true only on the **first frame** the key starts being pressed — useful for actions that should fire once per key press rather than every frame while the key is held down.

## Key released (text expression)

To test a key release using this condition, you need to enter the key name in the form of text expression. For example, if you want to check condition for left arrow key release, you need to enter "Left" in the field.

![](/gdevelop5/all-features/annotation_2019-06-20_191302.png)

## Valid key names

The following key names can be used in the text-based key conditions:

| Key | Name to use |
|---|---|
| Letters A–Z | `a`, `b`, … `z` |
| Digits 0–9 (top row) | `Num0` – `Num9` |
| Numpad 0–9 | `Numpad0` – `Numpad9` |
| Arrow keys | `Left`, `Right`, `Up`, `Down` |
| Function keys | `F1` – `F12` |
| Enter / Return | `Return` |
| Space | `Space` |
| Backspace | `Back` |
| Tab | `Tab` |
| Escape | `Escape` |
| Delete | `Delete` |
| Insert | `Insert` |
| Left/Right Shift | `LShift`, `RShift` |
| Left/Right Control | `LControl`, `RControl` |
| Left/Right Alt | `LAlt`, `RAlt` |
| Page Up / Page Down | `PageUp`, `PageDown` |
| Home / End | `Home`, `End` |
| Numpad operators | `Add`, `Subtract`, `Multiply`, `Divide` |
| Punctuation | `SemiColon`, `Comma`, `Period`, `Quote`, `Slash`, `BackSlash`, `Equal`, `Dash`, `LBracket`, `RBracket`, `Tilde` |
| Pause | `Pause` |

## Last key pressed

"Last key pressed" expression returns the last key press in the form of a string. For example, if the last key press is the left arrow key, the expression will return `"Left"`. It returns an empty string if no key has been pressed yet since the game started.

## Reference

All actions, conditions and expressions are listed in [the keyboard reference page](/gdevelop5/all-features/keyboard/reference/).