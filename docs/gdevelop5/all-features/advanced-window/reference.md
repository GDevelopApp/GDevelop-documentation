# Advanced window management Reference

Provides advanced features related to the game window positioning and interaction with the operating system. 

## Actions

**Enable content protection**  
Enables or disables the content protection mode. This should prevent screenshots of the game from being taken.

??? quote "See parameters & details"

    - Parameter 0 (❓ Yes or No): Enable content protection?

    > Technical note: parameter 1 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `AdvancedWindow::EnableContentProtection`.

**Enable the window**  
Enables or disables the window.

??? quote "See parameters & details"

    - Parameter 0 (❓ Yes or No): Enable window?

    > Technical note: parameter 1 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `AdvancedWindow::EnableWindow`.

**Flash the window**  
Make the window flash or end flashing.

??? quote "See parameters & details"

    - Parameter 0 (❓ Yes or No): Flash the window?

    > Technical note: parameter 1 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `AdvancedWindow::Flash`.

**Window focus**  
Make the window gain or lose focus.

??? quote "See parameters & details"

    - Parameter 0 (❓ Yes or No): Focus the window?

    > Technical note: parameter 1 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `AdvancedWindow::Focus`.

**Maximize the window**  
Maximize or unmaximize the window.

??? quote "See parameters & details"

    - Parameter 0 (❓ Yes or No): Maximize window?

    > Technical note: parameter 1 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `AdvancedWindow::Maximize`.

**Minimize the window**  
Minimize or unminimize the window.

??? quote "See parameters & details"

    - Parameter 0 (❓ Yes or No): Minimize window?

    > Technical note: parameter 1 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `AdvancedWindow::Minimize`.

**Make the window always on top**  
Puts the window constantly above all other windows.

??? quote "See parameters & details"

    - Parameter 0 (❓ Yes or No): Enable always on top?
    - Parameter 1 (🔤 String): Level
      The level is like a layer in GDevelop but for the OS. The further down the list, the higher it will be. When disabling always on top, the level will be set to normal. From "floating" to "status" included, the window is placed below the Dock on macOS and below the taskbar on Windows. Starting from "pop-up-menu", it is shown above the Dock on macOS and above the taskbar on Windows. This parameter is ignored on linux. (one of: "normal", "floating", "torn-off-menu", "modal-panel", "main-menu", "status", "pop-up-menu", "screen-saver")

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `AdvancedWindow::SetAlwaysOnTop`.

**Allow closing**  
Enables or disables closing of the window by the user.

??? quote "See parameters & details"

    - Parameter 0 (❓ Yes or No): Allow closing?

    > Technical note: parameter 1 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `AdvancedWindow::SetClosable`.

**Allow focusing**  
Allow or disallow the user to focus the window.

??? quote "See parameters & details"

    - Parameter 0 (❓ Yes or No): Allow focus?

    > Technical note: parameter 1 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `AdvancedWindow::SetFocusable`.

**Allow full-screening**  
Enables or disables full-screening of the window by the user.

??? quote "See parameters & details"

    - Parameter 0 (❓ Yes or No): Allow full-screening?

    > Technical note: parameter 1 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `AdvancedWindow::SetFullScreenable`.

**Enable window shadow**  
Enables or disables the window shadow.

??? quote "See parameters & details"

    - Parameter 0 (❓ Yes or No): Enable shadow?

    > Technical note: parameter 1 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `AdvancedWindow::SetHasShadow`.

**Enable kiosk mode**  
Puts the window in kiosk mode. This prevents the user from exiting fullscreen.

??? quote "See parameters & details"

    - Parameter 0 (❓ Yes or No): Enable kiosk mode?

    > Technical note: parameter 1 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `AdvancedWindow::SetKiosk`.

**Allow maximizing**  
Enables or disables maximizing of the window by the user.

??? quote "See parameters & details"

    - Parameter 0 (❓ Yes or No): Allow maximizing?

    > Technical note: parameter 1 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `AdvancedWindow::SetMaximizable`.

**Allow minimizing**  
Enables or disables minimizing of the window by the user.

??? quote "See parameters & details"

    - Parameter 0 (❓ Yes or No): Allow minimizing?

    > Technical note: parameter 1 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `AdvancedWindow::SetMinimizable`.

**Allow moving**  
Enables or disables moving of the window by the user.

??? quote "See parameters & details"

    - Parameter 0 (❓ Yes or No): Allow moving?

    > Technical note: parameter 1 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `AdvancedWindow::SetMovable`.

**Window opacity**  
Changes the window opacity.

??? quote "See parameters & details"

    - Parameter 0 (🔢 Number): New opacity
      A number between 0 (fully transparent) and 1 (fully opaque).

    > Technical note: parameter 1 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `AdvancedWindow::SetOpacity`.

**Allow resizing**  
Enables or disables resizing of the window by the user.

??? quote "See parameters & details"

    - Parameter 0 (❓ Yes or No): Allow resizing?

    > Technical note: parameter 1 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `AdvancedWindow::SetResizable`.

**Window position**  
Changes the window position.

??? quote "See parameters & details"

    - Parameter 0 (🔢 Number): X position
    - Parameter 1 (🔢 Number): Y position

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `AdvancedWindow::SetWindowPosition`.

**Window visibility**  
Make the window visible or invisible.

??? quote "See parameters & details"

    - Parameter 0 (❓ Yes or No): Show window?

    > Technical note: parameter 1 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `AdvancedWindow::Show`.


## Conditions

**Shadow enabled**  
Checks if the window currently has it's shadow enabled.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `AdvancedWindow::HasShadow`.

**Window always on top**  
Checks if the window is always on top.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `AdvancedWindow::IsAlwaysOnTop`.

**Window closable**  
Checks if the window can be closed.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `AdvancedWindow::IsClosable`.

**Window focused**  
Checks if the window is focused.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `AdvancedWindow::IsFocused`.

**Window full-screenable**  
Checks if the window can be full-screened.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `AdvancedWindow::IsFullScreenable`.

**Kiosk mode**  
Checks if the window is currently in kiosk mode.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `AdvancedWindow::IsKiosk`.

**Window maximizable**  
Checks if the window can be maximized.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `AdvancedWindow::IsMaximizable`.

**Window maximized**  
Checks if the window is maximized.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `AdvancedWindow::IsMaximized`.

**Window minimizable**  
Checks if the window can be minimized.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `AdvancedWindow::IsMinimizable`.

**Window minimized**  
Checks if the window is minimized.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `AdvancedWindow::IsMinimized`.

**Window movable**  
Checks if the window can be moved.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `AdvancedWindow::IsMovable`.

**Window resizable**  
Checks if the window can be resized.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `AdvancedWindow::IsResizable`.

**Window visible**  
Checks if the window is visible.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `AdvancedWindow::IsVisible`.

**Window enabled**  
Checks if the window is enabled.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `AdvancedWindow::IsWindowEnabled`.


## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `AdvancedWindow::WindowOpacity()` | Returns the current window opacity (a number from 0 to 1, 1 being fully opaque). ||
| `AdvancedWindow::WindowX()` | Returns the current window X position. ||
| `AdvancedWindow::WindowY()` | Returns the current window Y position. ||



---

The Advanced window management extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **Advanced window management** feature of [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).