---
title: Screenshot extension
---
# Screenshot extension

This extension lets you save a screenshot of the running game as a PNG file.

!!! note

    Screenshots are only supported on **Windows, Linux, and macOS**. Web and mobile exports do not support this feature.

## Take a screenshot

Use the **Take screenshot** action to save everything currently drawn on the game window into a PNG file. The action requires an absolute file path as the save destination.

Use the [File System](/gdevelop5/all-features/filesystem) expressions to build cross-platform paths automatically, rather than hard-coding platform-specific paths.

## Example

To save a screenshot to the user's Pictures folder:

```
FileSystem::PicturesPath() + FileSystem::PathDelimiter() + "my_screenshot.png"
```

This works on Windows, Linux, and macOS.

## Reference

All actions, conditions and expressions are listed in [the screenshot extension reference page](/gdevelop5/all-features/screenshot/reference/).