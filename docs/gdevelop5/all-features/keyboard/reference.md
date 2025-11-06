# Keyboard Reference

Conditions to check keys pressed on a keyboard. Note that this does not work with on-screen keyboard on touch devices: use instead mouse/touch conditions when making a game for mobile/touchscreen devices or when making a new game from scratch. [Read more explanations about it.](/gdevelop5/all-features/keyboard)

## Conditions

**Any key pressed**  
Check if any key is pressed

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `AnyKeyPressed`.

**Any key released**  
Check if any key is released

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `AnyKeyReleased`.

**Key just pressed**  
Check if a key was just pressed.

??? quote "See parameters & details"

    - Parameter 1 (keyboardKey): Key to check

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `KeyFromTextJustPressed`.

**Key pressed**  
Check if a key is pressed. This stays true as long as the key is held down. To check if a key was pressed during the frame, use "Key just pressed" instead.

??? quote "See parameters & details"

    - Parameter 1 (keyboardKey): Key to check

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `KeyFromTextPressed`.

**Key released**  
Check if a key was just released.

??? quote "See parameters & details"

    - Parameter 1 (keyboardKey): Key to check

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `KeyFromTextReleased`.


## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `LastPressedKey()` | Get the name of the latest key pressed on the keyboard ||



---

The Keyboard extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **Keyboard** feature of [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).