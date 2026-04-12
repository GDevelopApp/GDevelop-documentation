---
title: Window and game area
---
# Window and game area

The window of the game is the area in which the game is displayed. It DOES NOT refer to the system window that includes the toolbar, title bar on the top and a frame on the other three sides.

## Fullscreen

The **De/activate fullscreen** action toggles the game between fullscreen and windowed mode. When in fullscreen, the game takes up as much screen area as possible.

Use the **Is fullscreen?** condition to check whether the game is currently running in fullscreen mode — useful for toggling a fullscreen button or adjusting UI layout.

## Window margins
The margin of the window is the distance between the side of the window and the game window displayed. Shown below is the preview of a game with 100 px margins on all 4 sides.

![](/gdevelop5/all-features/annotation_2019-06-29_174027.png)

Notice the black borders on all four sides of the window. The width of the borders is 100px.

## Game resolution vs. window size

GDevelop separates two distinct concepts:

- **Game resolution** (also called "canvas size"): the logical number of pixels the game renders at. This controls how much of the scene is visible and the coordinate system used for objects.
- **Window size**: the physical size of the window on the screen. The game is stretched or letterboxed to fit the window.

### Changing the game resolution

Use the **Change the game resolution** action to resize the canvas at runtime — for example, to support different aspect ratios depending on the device. The expressions `SceneWindowWidth()` and `SceneWindowHeight()` return the current game resolution width and height.

### Changing the window size

The **Change the size of the window** action changes the physical window size. This is most useful in desktop (Windows, macOS, Linux) builds; on mobile and web the browser or OS controls the display size.

When changing window size, you can also choose whether to update the game resolution to match. If you set the window larger without updating the resolution, the game is simply scaled up (no extra content is revealed).

To center the window on screen, use the **Center the window on screen** action (desktop builds only).

### Auto-adapting the resolution

Use the **Change the game resolution resize mode** action to control how GDevelop automatically adapts the game resolution when the window or screen changes size:

- **Adapt the width**: keeps the height fixed and adjusts the width to fill the window.
- **Adapt the height**: keeps the width fixed and adjusts the height to fill the window.
- Leave the mode empty to disable automatic adaptation.

You can also enable or disable the adaptation at runtime with **Enable/disable adapting the game resolution to the window size**.

### Getting the screen and window dimensions

- `SceneWindowWidth()` / `SceneWindowHeight()` — current game resolution (canvas size).
- `ScreenWidth()` / `ScreenHeight()` — actual screen or browser window size in pixels.

These are useful for positioning UI elements or detecting device type at runtime.

## Window title

The window title is the name visible on the title bar of the window.

By default, the game name is used for the executable name (on Windows, macOS and Linux), the app name (on Android and iOS), and the page title for web games. You can [learn more in game properties.](/gdevelop5/interface/project-manager/properties)

The **Change the window title** action updates the title bar on Windows, macOS and Linux. For web games, it changes the browser tab title. The action has no visible effect on Android and iOS. Read back the current title at any time using the `WindowTitle()` expression.

## Reference

All actions, conditions and expressions are listed in [the window reference page](/gdevelop5/all-features/window/reference/).