---
title: Screenshot extension
---
# Screenshot extension

This extension lets you save a screenshot of the running game to a file.

!!! warning

    Screenshots are **only supported on Windows, Linux, and macOS** (desktop/Electron builds). The action has no effect in web (HTML5) exports.

### Take screenshot

Use the **"Take screenshot"** action to save everything currently drawn on the game window as a PNG file.

**Save path** must be an absolute path on the file system (for example `C:\MyFolder\MyScreenshot.png` on Windows). Relative paths are not supported. If the path does not end in `.png`, the extension is added automatically.

!!! note

    Use expressions from the [Filesystem extension](/gdevelop5/all-features/filesystem) to build paths to standard folders (Pictures, Documents, Desktop) that work across operating systems.

There is no built-in condition to check whether the screenshot was saved successfully. If the save fails (for example due to a permission error), a message is printed to the developer console but the game continues normally.

## Example

``` <FileSystem::PicturesPath>() + <FileSystem::PathDelimiter>() + "my_screenshot.png" ```

This saves the screenshot to the *Pictures* folder on Windows, Linux, and macOS.

## Reference

All actions, conditions and expressions are listed in [the screenshot extension reference page](/gdevelop5/all-features/screenshot/reference/).