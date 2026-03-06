---
title: Screenshot extension
---
# Screenshot extension

This extension lets you save a screenshot of the running game to a file.

!!! warning

    Screenshots are saved to the **local file system**, so this only works in **desktop (Windows/macOS/Linux) exports** built with Electron. The action has no effect in web/browser or mobile builds.

## Take screenshot

Use the **Take screenshot** action to save everything currently drawn on the game window as a PNG file.

**Save path**: The absolute path where the file should be saved, including the `.png` extension. If the extension is omitted it is added automatically.

!!! tip

    Use the special folder expressions from the [File System extension](/gdevelop5/all-features/filesystem) to build a portable path that works across operating systems:

    ```
    FileSystem::PicturesPath() + FileSystem::PathDelimiter() + "my_screenshot.png"
    ```

    This saves the screenshot to the *Pictures* folder on Windows, macOS and Linux.

!!! note

    Relative paths are not supported. Always use an absolute path or one built from a `FileSystem::` expression.

## Reference

All actions, conditions and expressions are listed in [the screenshot extension reference page](/gdevelop5/all-features/screenshot/reference/).
