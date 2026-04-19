---
title: Screenshot extension
---
# Screenshot extension

This extension saves a screenshot of the running game as a PNG file.

!!! warning
    Screenshots are only supported on **Windows, Linux, and macOS** (desktop builds). They are not available in web or mobile games.

Use the **Take screenshot** action to capture everything currently drawn in the game window and save it to disk.

The **Save path** must be an absolute path on the file system (for example `"C:\MyFolder\MyScreenshot.png"` on Windows). Relative paths are not supported.

To target a user-writable location that works across all desktop platforms, combine the file system path expressions:

```
FileSystem::PicturesPath() + FileSystem::PathDelimiter() + "my_screenshot.png"
```

This saves the screenshot to the *Pictures* folder on Windows, Linux, and macOS. For more folder path expressions, see [Filesystem](/gdevelop5/all-features/filesystem).

## Reference

All actions, conditions and expressions are listed in [the screenshot extension reference page](/gdevelop5/all-features/screenshot/reference/).