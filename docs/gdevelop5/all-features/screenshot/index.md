---
title: Screenshot extension
---
# Screenshot extension

This extension lets you save a screenshot of the running game in a specified folder.

To use it, add an action and search for `screenshot` or go to `Other Actions`/`Screenshot`/`Take screenshot`.

!!! warning

    Taking a screenshot is **only supported when the game runs on Windows, Linux or macOS** (desktop exports and previews). It has no effect on web games (browser) or on mobile (Android/iOS), because those platforms don't allow writing files directly to the file system.

### Actions

#### Take screenshot

Use this action to save a screenshot of everything which is currently drawn on the game window into a *png* file.

##### Parameters:

**Save path**: The file path where the screenshot should be saved.

The save path needs to be an absolute path on the file system (Like "C:\MyFolder\MyScreenshot.png" on Windows)'

Relative paths are not supported.

If the path doesn't already end with `.png`, this extension will automatically append it, so the screenshot is always saved as a PNG image.

!!! note

    In order to create a game that runs on all supported platforms you should use the special folders from the file system extension in combination with the path separator. These determine the path to common folders like *Pictures*, *Documents* or *Desktop* automatically. You can read more about it in [this article](/gdevelop5/all-features/filesystem).

## Example

This path:

``` <FileSystem::PicturesPath>() + <FileSystem::PathDelimiter>() + "my_screenshot.png" ```

This will save the screenshot to the *Pictures* folder on Windows, Linux and MacOS.

## Reference

All actions, conditions and expressions are listed in [the screenshot extension reference page](/gdevelop5/all-features/screenshot/reference/).