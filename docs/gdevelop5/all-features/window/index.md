---
title: Window and game area
---
# Window and game area

The window of the game is the area in which the game is displayed. It DOES NOT refer to the system window that includes the toolbar, title bar on the top and a frame on the other three sides.

## Game resolution vs. window size

It is important to understand the difference between two concepts:

- **Game resolution** (logical size): the number of pixels the game internally uses. Objects are positioned and drawn within this coordinate space.
- **Window/screen size** (physical size): the actual size of the browser tab, app window or device screen in pixels.

By default GDevelop scales the game to fill the available window area. You can control this behaviour with the **Game resolution resize mode** action:

- **adaptWidth** – keeps the game height fixed and adjusts the game width so that it fills the window without cropping.
- **adaptHeight** – keeps the game width fixed and adjusts the game height.
- Leave it empty (no resize mode) to keep the game resolution fixed regardless of window size.

The **Automatically adapt the game resolution** action (Yes/No) enables or disables live adaptation: when set to Yes the game resolution is updated every time the window or screen size changes (useful for responsive games that run in a browser).

Use the **Game resolution** action if you need to change the game's logical resolution at runtime (for example when switching between landscape and portrait).

## Fullscreen

The **De/activate fullscreen** action toggles the game between fullscreen and windowed mode.

- A second parameter, **Keep aspect ratio** (HTML5 games only, enabled by default), controls whether the game is letterboxed to preserve proportions or stretched to fill the screen.
- The companion condition **Fullscreen activated?** lets you check whether the game is currently running in fullscreen.

## Window size

The **Game window size** action resizes the operating-system window. Note that this only works on desktop (Windows, macOS and Linux); it has no effect in a browser or on mobile. The third parameter controls whether the game resolution should also be updated to match the new window size (Yes), or whether the existing content should be scaled to fit (No).

The **Center the game window** action moves the window to the center of the screen. This also only works on desktop.

## Window margins

The margin of the window is the distance between the side of the window and the game window displayed. Shown below is the preview of a game with 100 px margins on all 4 sides.

![](/gdevelop5/all-features/annotation_2019-06-29_174027.png)

Notice the black borders on all for sides of the window. The width of the borders is 100px.

## Window title and icon

The window title is the name of the window that is visible on the title bar (located at the top) of the window. The default title name is "Preview of ProjectName" during a preview.

By default, the game name is used for the executable name (on Windows, macOS and Linux), the app name (on Android and iOS) and the title bar (on Windows, macOS and Linux) (and the page title for HTML5 games). You can [learn more about it in game properties.](/gdevelop5/interface/project-manager/properties)

With the action to change the title, the title bar on Windows, macOS and Linux will be changed. Nothing will be visible on Android and iOS. For HTML5 games, the web page title will be changed.

The **Window's icon** action lets you change the game window icon at runtime by providing the name of an image resource.

## Useful expressions

| Expression | Returns |
|---|---|
| `SceneWindowWidth()` | Game resolution width (logical pixels) |
| `SceneWindowHeight()` | Game resolution height (logical pixels) |
| `ScreenWidth()` | Actual window/screen width (physical pixels) |
| `ScreenHeight()` | Actual window/screen height (physical pixels) |
| `WindowTitle$()` | Current window title as a string |

`ScreenWidth()` and `ScreenHeight()` return the size of the browser tab or the device screen — useful to adapt your UI layout to different screen sizes.

## Reference

All actions, conditions and expressions are listed in [the window reference page](/gdevelop5/all-features/window/reference/).