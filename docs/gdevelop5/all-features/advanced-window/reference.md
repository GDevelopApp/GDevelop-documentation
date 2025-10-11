# Advanced window management Reference

Provides advanced features related to the game window positioning and interaction with the operating system. 

## Actions

**Enable content protection**
Enables or disables the content protection mode. This should prevent screenshots of the game from being taken.

??? quote "See parameters"

    - Parameter 0 (❓ Yes or No): Enable content protection?

    > Technical note: parameter 1 are internal parameters handled by GDevelop.

**Enable the window**
Enables or disables the window.

??? quote "See parameters"

    - Parameter 0 (❓ Yes or No): Enable window?

    > Technical note: parameter 1 are internal parameters handled by GDevelop.

**Flash the window**
Make the window flash or end flashing.

??? quote "See parameters"

    - Parameter 0 (❓ Yes or No): Flash the window?

    > Technical note: parameter 1 are internal parameters handled by GDevelop.

**Window focus**
Make the window gain or lose focus.

??? quote "See parameters"

    - Parameter 0 (❓ Yes or No): Focus the window?

    > Technical note: parameter 1 are internal parameters handled by GDevelop.

**Maximize the window**
Maximize or unmaximize the window.

??? quote "See parameters"

    - Parameter 0 (❓ Yes or No): Maximize window?

    > Technical note: parameter 1 are internal parameters handled by GDevelop.

**Minimize the window**
Minimize or unminimize the window.

??? quote "See parameters"

    - Parameter 0 (❓ Yes or No): Minimize window?

    > Technical note: parameter 1 are internal parameters handled by GDevelop.

**Make the window always on top**
Puts the window constantly above all other windows.

??? quote "See parameters"

    - Parameter 0 (❓ Yes or No): Enable always on top?
    - Parameter 1 (🔤 String): Level
      The level is like a layer in GDevelop but for the OS. The further down the list, the higher it will be. When disabling always on top, the level will be set to normal. From "floating" to "status" included, the window is placed below the Dock on macOS and below the taskbar on Windows. Starting from "pop-up-menu", it is shown above the Dock on macOS and above the taskbar on Windows. This parameter is ignored on linux. (one of: "normal", "floating", "torn-off-menu", "modal-panel", "main-menu", "status", "pop-up-menu", "screen-saver")

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

**Allow closing**
Enables or disables closing of the window by the user.

??? quote "See parameters"

    - Parameter 0 (❓ Yes or No): Allow closing?

    > Technical note: parameter 1 are internal parameters handled by GDevelop.

**Allow focusing**
Allow or disallow the user to focus the window.

??? quote "See parameters"

    - Parameter 0 (❓ Yes or No): Allow focus?

    > Technical note: parameter 1 are internal parameters handled by GDevelop.

**Allow full-screening**
Enables or disables full-screening of the window by the user.

??? quote "See parameters"

    - Parameter 0 (❓ Yes or No): Allow full-screening?

    > Technical note: parameter 1 are internal parameters handled by GDevelop.

**Enable window shadow**
Enables or disables the window shadow.

??? quote "See parameters"

    - Parameter 0 (❓ Yes or No): Enable shadow?

    > Technical note: parameter 1 are internal parameters handled by GDevelop.

**Enable kiosk mode**
Puts the window in kiosk mode. This prevents the user from exiting fullscreen.

??? quote "See parameters"

    - Parameter 0 (❓ Yes or No): Enable kiosk mode?

    > Technical note: parameter 1 are internal parameters handled by GDevelop.

**Allow maximizing**
Enables or disables maximizing of the window by the user.

??? quote "See parameters"

    - Parameter 0 (❓ Yes or No): Allow maximizing?

    > Technical note: parameter 1 are internal parameters handled by GDevelop.

**Allow minimizing**
Enables or disables minimizing of the window by the user.

??? quote "See parameters"

    - Parameter 0 (❓ Yes or No): Allow minimizing?

    > Technical note: parameter 1 are internal parameters handled by GDevelop.

**Allow moving**
Enables or disables moving of the window by the user.

??? quote "See parameters"

    - Parameter 0 (❓ Yes or No): Allow moving?

    > Technical note: parameter 1 are internal parameters handled by GDevelop.

**Window opacity**
Changes the window opacity.

??? quote "See parameters"

    - Parameter 0 (🔢 Number): New opacity
      A number between 0 (fully transparent) and 1 (fully opaque).

    > Technical note: parameter 1 are internal parameters handled by GDevelop.

**Allow resizing**
Enables or disables resizing of the window by the user.

??? quote "See parameters"

    - Parameter 0 (❓ Yes or No): Allow resizing?

    > Technical note: parameter 1 are internal parameters handled by GDevelop.

**Window position**
Changes the window position.

??? quote "See parameters"

    - Parameter 0 (🔢 Number): X position
    - Parameter 1 (🔢 Number): Y position

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

**Window visibility**
Make the window visible or invisible.

??? quote "See parameters"

    - Parameter 0 (❓ Yes or No): Show window?

    > Technical note: parameter 1 are internal parameters handled by GDevelop.

## Conditions

**Shadow enabled**
Checks if the window currently has it's shadow enabled.

??? quote "See parameters"



    > Technical note: parameter 0 are internal parameters handled by GDevelop.

**Window always on top**
Checks if the window is always on top.

??? quote "See parameters"



    > Technical note: parameter 0 are internal parameters handled by GDevelop.

**Window closable**
Checks if the window can be closed.

??? quote "See parameters"



    > Technical note: parameter 0 are internal parameters handled by GDevelop.

**Window focused**
Checks if the window is focused.

??? quote "See parameters"



    > Technical note: parameter 0 are internal parameters handled by GDevelop.

**Window full-screenable**
Checks if the window can be full-screened.

??? quote "See parameters"



    > Technical note: parameter 0 are internal parameters handled by GDevelop.

**Kiosk mode**
Checks if the window is currently in kiosk mode.

??? quote "See parameters"



    > Technical note: parameter 0 are internal parameters handled by GDevelop.

**Window maximizable**
Checks if the window can be maximized.

??? quote "See parameters"



    > Technical note: parameter 0 are internal parameters handled by GDevelop.

**Window maximized**
Checks if the window is maximized.

??? quote "See parameters"



    > Technical note: parameter 0 are internal parameters handled by GDevelop.

**Window minimizable**
Checks if the window can be minimized.

??? quote "See parameters"



    > Technical note: parameter 0 are internal parameters handled by GDevelop.

**Window minimized**
Checks if the window is minimized.

??? quote "See parameters"



    > Technical note: parameter 0 are internal parameters handled by GDevelop.

**Window movable**
Checks if the window can be moved.

??? quote "See parameters"



    > Technical note: parameter 0 are internal parameters handled by GDevelop.

**Window resizable**
Checks if the window can be resized.

??? quote "See parameters"



    > Technical note: parameter 0 are internal parameters handled by GDevelop.

**Window visible**
Checks if the window is visible.

??? quote "See parameters"



    > Technical note: parameter 0 are internal parameters handled by GDevelop.

**Window enabled**
Checks if the window is enabled.

??? quote "See parameters"



    > Technical note: parameter 0 are internal parameters handled by GDevelop.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `AdvancedWindow::WindowOpacity()` | Returns the current window opacity (a number from 0 to 1, 1 being fully opaque). ||
| `AdvancedWindow::WindowX()` | Returns the current window X position. ||
| `AdvancedWindow::WindowY()` | Returns the current window Y position. ||



---

The Advanced window management extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **Advanced window management** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).