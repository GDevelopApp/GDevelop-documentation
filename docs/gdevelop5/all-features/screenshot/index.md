---
title: Screenshot extension
---
# Screenshot extension

This extension lets you save a screenshot of the running game to a file.

!!! warning

    Screenshots are only supported on **desktop builds** (Windows, Linux, macOS). The action has no effect in web or mobile exports.

## Take screenshot

Use the **"Take screenshot"** action to save everything currently drawn on the game window as a PNG file.

The action requires an **absolute file path** — relative paths are not supported. Use the [filesystem expressions](/gdevelop5/all-features/filesystem) to build a portable path that works on every desktop platform:

```
FileSystem::PicturesPath() + FileSystem::PathDelimiter() + "my_screenshot.png"
```

This saves the file to the user's Pictures folder on Windows, Linux, and macOS. You can also use `FileSystem::DesktopPath()`, `FileSystem::DocumentsPath()`, or `FileSystem::TempPath()` depending on where you want the file to land.

## Reference

All actions, conditions and expressions are listed in [the screenshot extension reference page](/gdevelop5/all-features/screenshot/reference/).