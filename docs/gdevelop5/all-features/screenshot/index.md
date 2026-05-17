---
title: Screenshot extension
---
# Screenshot extension

This extension lets you save a screenshot of the running game in a specified folder.

!!! note

    Taking a screenshot only works when the game is exported for Windows, macOS or Linux. It is not supported on mobile or in web (browser) exports.

Add the action and search for `screenshot` or go to `Other Actions`/`Screenshot`/`Take screenshot`.

### Actions

#### Take screenshot

Use this action to save a screenshot of everything which is currently drawn on the game window into a *png* file.

##### Parameters:

**Save path**: The file path where the screenshot should be saved.

The save path needs to be an absolute path on the file system (like `C:\MyFolder\MyScreenshot.png` on Windows). Relative paths are not supported. If the path does not end with `.png`, the extension is automatically appended.

!!! note

    In order to create a game that runs on all supported platforms you should use the special folders from the file system extension in combination with the path separator. These determine the path to common folders like *Pictures*, *Documents* or *Desktop* automatically. You can read more about it in [this article](/gdevelop5/all-features/filesystem).

## Example

This path:

```
FileSystem::PicturesPath() + FileSystem::PathDelimiter() + "my_screenshot.png"
```

This will save the screenshot to the *Pictures* folder on Windows, Linux and macOS.

## Reference

All actions, conditions and expressions are listed in [the screenshot extension reference page](/gdevelop5/all-features/screenshot/reference/).