---
title: Keyboard
---
# Keyboard

GDevelop gives access to all inputs made on the keyboard. This includes conditions to check if a key is held, just pressed, or released.

!!! note

    Keyboard conditions only work with physical keyboards. For mobile or touch-based games, use [mouse and touch conditions](/gdevelop5/all-features/mouse-touch) instead.

## Conditions

### Any key pressed

True as long as **any** key on the keyboard is held down. Use this to detect whether the player is actively using the keyboard.

### Any key released

True for **one frame** when any key is released.

### Key pressed

True as long as the specified key is **held down**. Use this for continuous actions like moving a character — the condition remains true every frame the key is held.

### Key just pressed

True for **one frame only**, on the frame the specified key is first pressed. Use this for single-shot actions like jumping or firing a weapon, where you want the action to happen exactly once per key press rather than repeatedly.

!!! tip

    Prefer **Key just pressed** over **Key pressed** for actions that should only happen once per key press (shooting, jumping, toggling a state). Use **Key pressed** for continuous movement.

### Key released

True for **one frame** when the specified key is released.

### Key pressed / Key released (text expression)

These conditions accept a **text expression** as the key name instead of a fixed key from the picker. This is useful when the key to check is stored in a variable or computed at runtime — for example, when letting the player remap controls.

!!! danger

    The key name must be a string. When entering a literal key name, surround it with quotes (e.g., `"Space"`, `"Left"`).

## Expressions

### LastPressedKey()

Returns the name of the most recent key pressed on the keyboard as a string (e.g., `"Space"`, `"a"`, `"Left"`). Returns an empty string if no key has been pressed yet. Useful for key-rebinding systems or displaying which key was last used.

## Key names

The table below lists all valid key names for use with the text expression conditions and with `LastPressedKey()`.

| Category | Key names |
|---|---|
| Letters | `a` `b` `c` `d` `e` `f` `g` `h` `i` `j` `k` `l` `m` `n` `o` `p` `q` `r` `s` `t` `u` `v` `w` `x` `y` `z` |
| Number row | `Num0` `Num1` `Num2` `Num3` `Num4` `Num5` `Num6` `Num7` `Num8` `Num9` |
| Numpad digits | `Numpad0` `Numpad1` `Numpad2` `Numpad3` `Numpad4` `Numpad5` `Numpad6` `Numpad7` `Numpad8` `Numpad9` |
| Numpad operators | `NumpadAdd` `NumpadSubtract` `NumpadMultiply` `NumpadDivide` `NumpadReturn` |
| Numpad arrows | `NumpadLeft` `NumpadUp` `NumpadRight` `NumpadDown` `NumpadHome` `NumpadEnd` `NumpadPageUp` `NumpadPageDown` |
| Arrow keys | `Left` `Up` `Right` `Down` |
| Function keys | `F1` `F2` `F3` `F4` `F5` `F6` `F7` `F8` `F9` `F10` `F11` `F12` |
| Modifier keys | `LShift` `RShift` `LControl` `RControl` `LAlt` `RAlt` `LSystem` `RSystem` |
| Navigation | `Home` `End` `PageUp` `PageDown` `Insert` `Delete` |
| Editing | `Back` (Backspace) `Tab` `Return` (Enter) `Space` `Escape` |
| Operators | `Add` `Subtract` `Multiply` `Divide` |
| Punctuation | `SemiColon` `Comma` `Period` `Quote` `Slash` `BackSlash` `Equal` `Dash` `LBracket` `RBracket` `Tilde` `Menu` |
| Other | `Pause` |

!!! note

    Modifier keys distinguish left and right variants (`LShift` vs `RShift`, `LControl` vs `RControl`, etc.). Use the specific variant if your game needs to tell them apart, or check both if you want either modifier key to work.

## Reference

All actions, conditions and expressions are listed in [the keyboard reference page](/gdevelop5/all-features/keyboard/reference/).
