---
title: Screenshot extension
---
# Screenshot extension

The **Take screenshot** action saves everything currently drawn on the game window to a PNG file on disk.

!!! warning

    This action is only supported on **Windows, macOS, and Linux** desktop builds. It has no effect in a browser or on mobile.

## Taking a screenshot

The action requires an absolute file path as the save location. Relative paths are not supported.

To build a path that works across operating systems, combine expressions from the [Filesystem extension](/gdevelop5/all-features/filesystem) with the image file name:

```
FileSystem::PicturesPath() + FileSystem::PathDelimiter() + "my_screenshot.png"
```

This saves the screenshot to the system Pictures folder on Windows, Linux, and macOS.

You can also target other common folders (`FileSystem::DocumentsPath()`, `FileSystem::DesktopPath()`, etc.) or construct a fully custom path. The folder must already exist — the action will fail silently if it does not.

!!! tip

    The screenshot captures the full game canvas at the moment the action runs. To give a specific filename per capture, use a variable that you increment or stamp with the current time.

## Reference

All actions, conditions and expressions are listed in [the screenshot extension reference page](/gdevelop5/all-features/screenshot/reference/).