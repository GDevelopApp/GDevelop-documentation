---
title: Screenshot extension
---
# Screenshot extension

This extension lets you save a screenshot of the running game as a PNG file.

!!! warning

    Screenshots are only supported when running on **Windows, Linux, or macOS** (desktop builds). They will not work in web builds or on mobile.

## Take a screenshot

Use the **Take screenshot** action to save everything currently drawn on the game window to a PNG file.

The action takes a single parameter: the **save path** where the screenshot will be written.

- The path must be an **absolute** path on the file system (for example, `"C:\MyFolder\MyScreenshot.png"` on Windows).
- Relative paths are not supported.
- If the path does not end in `.png`, the extension is added automatically.

!!! tip

    Use expressions from the [Filesystem extension](/gdevelop5/all-features/filesystem) to build paths that work across platforms. These give you the path to common system folders like *Pictures*, *Documents*, or *Desktop*.

## Example

```
FileSystem::PicturesPath() + FileSystem::PathDelimiter() + "my_screenshot.png"
```

This saves the screenshot to the *Pictures* folder on Windows, Linux, and macOS.

## Reference

All actions, conditions and expressions are listed in [the screenshot extension reference page](/gdevelop5/all-features/screenshot/reference/).