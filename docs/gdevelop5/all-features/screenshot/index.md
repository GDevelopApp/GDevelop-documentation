---
title: Screenshot extension
---
# Screenshot extension

This extension lets you save a screenshot of the running game in a specified folder.

!!! warning

    The Take screenshot action is only supported when the game runs on Windows, Linux or macOS (desktop builds). It is not available in web or mobile exports, where the game cannot write directly to the file system.

Note: As of GDevelop 5.0.0-beta92 the screenshot action is no longer an extension. Just add an action and search for `screenshot` or go to `Other Actions`/`Screenshot`/`Take screenshot`.

### Actions

#### Take screenshot

Use this action to save a screenshot of everything which is currently drawn on the game window into a *png* file.

##### Parameters:

**Save path**: The file path where the screenshot should be saved.

The save path needs to be an absolute path on the file system (Like "C:\MyFolder\MyScreenshot.png" on Windows)'

Relative paths are not supported.

If the save path does not end with `.png`, the extension is appended automatically.

!!! note

    In order to create a game that runs on all supported platforms you should use the special folders from the file system extension in combination with the path separator. These determine the path to common folders like *Pictures*, *Documents* or *Desktop* automatically. You can read more about it in [this article](/gdevelop5/all-features/filesystem).

## Example

This path:

``` <FileSystem::PicturesPath>() + <FileSystem::PathDelimiter>() + "my_screenshot.png" ```

This will save the screenshot to the *Pictures* folder on Windows, Linux and MacOS.

## Reference

All actions, conditions and expressions are listed in [the screenshot extension reference page](/gdevelop5/all-features/screenshot/reference/).