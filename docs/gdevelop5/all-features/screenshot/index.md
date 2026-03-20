---
title: Screenshot extension
---
# Screenshot extension

This extension lets you save a screenshot of the running game as a PNG file.

!!! warning

    The screenshot action only works in **desktop builds** (Windows, macOS, Linux). It is not available on web (browser) or mobile (Android/iOS) builds, because those platforms do not provide direct file system write access.

## Taking a screenshot

Use the **"Take screenshot"** action to capture everything currently drawn on the game canvas and save it to a PNG file. Provide an absolute file path as the save path (for example `C:\Users\Me\Pictures\shot.png` on Windows).

Relative paths are not supported.

!!! tip

    Use the expressions from the [File system](/gdevelop5/all-features/filesystem) extension to build a portable path that works across operating systems. For example:

    ```
    FileSystem::PicturesPath() + FileSystem::PathDelimiter() + "my_screenshot.png"
    ```

    This saves the screenshot to the *Pictures* folder on Windows, Linux and macOS.

## Reference

All actions, conditions and expressions are listed in [the screenshot extension reference page](/gdevelop5/all-features/screenshot/reference/).