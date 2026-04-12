---
title: Screenshot extension
---
# Screenshot extension

This extension lets you save a screenshot of the running game as a PNG file.

!!! warning

    Screenshots are only supported on **desktop builds** (Windows, Linux, and macOS). The action does nothing on web (HTML5) or mobile (Android, iOS) exports.

## Take a screenshot

Use the **Take screenshot** action and provide a file path where the PNG file should be saved.

- The output is always a **PNG file**. If the path you provide does not end in `.png`, the extension is added automatically.
- Use an **absolute path** or build one dynamically using [FileSystem expressions](/gdevelop5/all-features/filesystem) so the path works correctly on all desktop operating systems.

!!! tip

    Use `FileSystem::PicturesPath() + FileSystem::PathDelimiter() + "screenshot.png"` to save to the user's **Pictures** folder on Windows, Linux, and macOS automatically.

If saving fails (for example, because the folder does not exist or permissions are denied), an error is written to the console but the game continues running. There is no built-in condition to detect whether the save succeeded.

## Reference

All actions, conditions and expressions are listed in [the screenshot extension reference page](/gdevelop5/all-features/screenshot/reference/).