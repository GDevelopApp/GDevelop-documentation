---
title: Screenshot extension
---
# Screenshot extension

This extension lets you save a screenshot of the running game as a PNG file.

!!! warning

    Taking screenshots is only supported in **desktop exports** (Windows, Linux, macOS). The action has no effect in HTML5/web builds and on mobile, because it needs access to the file system. Use the condition checking that you're on a desktop platform (or simply ignore the failure) before relying on it.

### Actions

#### Take screenshot

Use this action to save a screenshot of everything which is currently drawn on the game window into a PNG file. If the path you provide does not end with `.png`, the extension automatically appends it.

##### Parameters:

**Save path**: The file path where the screenshot should be saved.

The save path needs to be an absolute path on the file system (like `C:\MyFolder\MyScreenshot.png` on Windows). Relative paths are not supported.

!!! note

    In order to create a game that runs on all supported platforms you should use the special folders from the file system extension in combination with the path separator. These determine the path to common folders like *Pictures*, *Documents* or *Desktop* automatically. You can read more about it in [this article](/gdevelop5/all-features/filesystem).

## Example

This path:

``` <FileSystem::PicturesPath>() + <FileSystem::PathDelimiter>() + "my_screenshot.png" ```

This will save the screenshot to the *Pictures* folder on Windows, Linux and MacOS.

## Reference

All actions, conditions and expressions are listed in [the screenshot extension reference page](/gdevelop5/all-features/screenshot/reference/).