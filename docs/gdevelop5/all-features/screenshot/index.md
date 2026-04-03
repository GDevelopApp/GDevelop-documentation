---
title: Screenshot extension
---
# Screenshot extension

This extension lets you save a screenshot of the running game as a PNG file.

!!! note

    Screenshots are only supported on Windows, Linux, and macOS (desktop exports). Web and mobile exports do not have access to the file system and cannot save screenshots.

### Take screenshot

Use this action to save a screenshot of everything currently drawn on the game window into a PNG file. If the save path does not end with `.png`, the extension is added automatically.

**Save path**: The absolute file path where the screenshot should be saved (for example `C:\MyFolder\MyScreenshot.png` on Windows). Relative paths are not supported.

!!! note

    Use the special folder expressions from the [File system extension](/gdevelop5/all-features/filesystem) to build cross-platform paths that work on all supported operating systems.

## Example

```
FileSystem::PicturesPath() + FileSystem::PathDelimiter() + "my_screenshot.png"
```

This saves the screenshot to the *Pictures* folder on Windows, Linux, and macOS.

## Reference

All actions, conditions and expressions are listed in [the screenshot extension reference page](/gdevelop5/all-features/screenshot/reference/).