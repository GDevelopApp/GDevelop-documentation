---
title: Screenshot extension
---
# Screenshot extension

This extension lets you save a screenshot of the running game in a specified folder.

Note: As of GDevelop 5.0.0-beta92 the screenshot action is no longer an extension. Just add an action and search for `screenshot` or go to `Other Actions`/`Screenshot`/`Take screenshot`.

!!! warning

    Saving a screenshot to a file only works in games exported for **Windows, Linux and macOS**. It does not work in web games (running in a browser) or in mobile games (Android/iOS), because these platforms don't allow writing files directly to the player's disk.

### Actions

#### Take screenshot

Use this action to save a screenshot of everything which is currently drawn on the game window into a *png* file.

##### Parameters:

**Save path**: The file path where the screenshot should be saved.

The save path needs to be an absolute path on the file system (Like "C:\MyFolder\MyScreenshot.png" on Windows)'

Relative paths are not supported.

If the path does not already end with `.png`, GDevelop automatically appends the `.png` extension for you.

!!! note

    The screenshot is written to disk in the background, so the action does not freeze the game. This also means the file may not exist for a brief moment right after the action runs — don't try to read it back in the same frame.

!!! note

    In order to create a game that runs on all supported platforms you should use the special folders from the file system extension in combination with the path separator. These determine the path to common folders like *Pictures*, *Documents* or *Desktop* automatically. You can read more about it in [this article](/gdevelop5/all-features/filesystem).

## Example

This path:

``` <FileSystem::PicturesPath>() + <FileSystem::PathDelimiter>() + "my_screenshot.png" ```

This will save the screenshot to the *Pictures* folder on Windows, Linux and MacOS.

## Reference

All actions, conditions and expressions are listed in [the screenshot extension reference page](/gdevelop5/all-features/screenshot/reference/).