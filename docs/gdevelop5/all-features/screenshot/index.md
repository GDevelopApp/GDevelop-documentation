---
title: Screenshot extension
---
# Screenshot extension

This extension lets you save a screenshot of the running game to a file.

!!! note

    Screenshots can only be saved to a file on **Windows, Linux, and macOS**. This action has no effect on web or mobile exports. To capture a screenshot on other platforms, consider rendering to a texture or using a platform-specific solution.

### Take screenshot

Use the **"Take screenshot"** action to save everything currently drawn on the game window to a *PNG* file.

**Save path**: An absolute file path where the screenshot will be saved (e.g. `"C:\MyFolder\MyScreenshot.png"` on Windows). Relative paths are not supported.

!!! tip

    Use the expressions from the [File system extension](/gdevelop5/all-features/filesystem) to build cross-platform paths automatically, rather than hardcoding them.

## Example

```
FileSystem::PicturesPath() + FileSystem::PathDelimiter() + "my_screenshot.png"
```

This saves the screenshot to the *Pictures* folder on Windows, Linux, and macOS.

## Reference

All actions, conditions and expressions are listed in [the screenshot extension reference page](/gdevelop5/all-features/screenshot/reference/).