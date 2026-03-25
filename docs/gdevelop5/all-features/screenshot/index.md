---
title: Screenshot extension
---
# Screenshot extension

This extension lets you save a screenshot of the running game as a PNG file.

!!! warning

    Screenshots are only supported in **desktop (Windows/macOS/Linux) builds**. On web and mobile, the action has no effect because file-system access is not available.

## Take screenshot

Use the **Take screenshot** action to save everything currently drawn on the game window as a PNG file to the specified path.

**Save path**: An absolute path on the file system where the screenshot will be written (for example `C:\MyScreenshots\shot.png` on Windows). Relative paths are not supported. If the path does not end with `.png`, the extension is added automatically.

!!! tip

    Use expressions from the [File System](/gdevelop5/all-features/filesystem) extension to build paths that work on all desktop platforms — for example `FileSystem::PicturesPath() + FileSystem::PathDelimiter() + "my_screenshot.png"` saves the file to the user's *Pictures* folder on Windows, macOS, and Linux.

## Example

```
FileSystem::PicturesPath() + FileSystem::PathDelimiter() + "my_screenshot.png"
```

This saves the screenshot to the *Pictures* folder on Windows, Linux, and macOS.

## Reference

All actions, conditions and expressions are listed in [the screenshot extension reference page](/gdevelop5/all-features/screenshot/reference/).