---
title: Window and game area
---
# Window and game area

The window of the game is the area in which the game is displayed. It DOES NOT refer to the system window that includes the toolbar, title bar on the top and a frame on the other three sides.

## Fullscreen

The **De/activate fullscreen** action toggles the game between fullscreen and windowed mode. When in fullscreen, the game takes up as much area as possible.

For HTML5 games, an optional **"Keep aspect ratio"** parameter controls whether the game maintains its aspect ratio when entering fullscreen (enabled by default).

Use the **"Fullscreen activated?"** condition to check whether the game is currently displayed in fullscreen — useful for toggling a fullscreen button's icon or adapting the UI.

## Window size vs. game resolution

There is an important distinction between the **game window size** (the OS window) and the **game resolution** (how many pixels the game renders):

- **Game window size** — Use the **"Game window size"** action to resize the OS window itself. This only works on desktop platforms (Windows, macOS, Linux); browsers and mobile devices ignore this action. You can choose whether the game resolution is also updated to match.
- **Game resolution** — Use the **"Game resolution"** action to change the internal rendering resolution independently from the window size. This works on all platforms. Changing only the resolution without the window size will stretch or shrink the rendered image to fit the window.

For example, to build a settings screen that lets players choose a display resolution, use the **"Game window size"** action (desktop) together with **"Game resolution"** so the content scales correctly.

## Adaptive resolution

GDevelop can automatically adapt the game resolution when the window or screen size changes, useful for responsive web games or resizable desktop windows.

- **"Game resolution resize mode"** — Controls which dimension adapts:
    - `adaptWidth`: the game width is adjusted to fit the window while keeping the height.
    - `adaptHeight`: the game height is adjusted to fit the window while keeping the width.
    - Empty string: no automatic adaptation.
- **"Automatically adapt the game resolution"** — Enables or disables the live adaptation as the window is resized. This only takes effect when a resize mode (`adaptWidth` or `adaptHeight`) is also set.

## Window margins
The margin of the window is the distance between the side of the window and the game window displayed. Shown below is the preview of a game with 100 px margins on all 4 sides.

![](/gdevelop5/all-features/annotation_2019-06-29_174027.png)

Notice the black borders on all four sides of the window. The width of the borders is 100px.

## Center the window

The **"Center the game window on the screen"** action repositions the OS window to the center of the screen. This only works on Windows, macOS, and Linux — it has no effect in browsers or on mobile.

## Window icon

The **"Window's icon"** action changes the icon displayed in the OS title bar and taskbar at runtime. Pass the name of an image resource already added to the project.

## Window title

The window title is the name of the window that is visible on the title bar (located at the top) of the window.

By default, the game name is used for the executable name (on Windows, macOS and Linux), the app name (on Android and iOS) and the title bar (on Windows, macOS and Linux) (and the page title for HTML5 games). You can [learn more about it in game properties.](/gdevelop5/interface/project-manager/properties)

With the **"Window's title"** action, the title bar on Windows, macOS and Linux will be changed. Nothing will be visible on Android and iOS. For HTML5 games, the web page title will be changed.

## Expressions

Several expressions let you read size and title information at runtime:

| Expression | Returns | Notes |
|---|---|---|
| `SceneWindowWidth()` | number | Width of the game's rendering canvas |
| `SceneWindowHeight()` | number | Height of the game's rendering canvas |
| `ScreenWidth()` | number | Width of the browser page or OS window |
| `ScreenHeight()` | number | Height of the browser page or OS window |
| `WindowTitle$()` | string | Current window title |
| `ColorDepth()` | number | Screen color depth in bits |

`SceneWindowWidth()`/`SceneWindowHeight()` reflect the game resolution, while `ScreenWidth()`/`ScreenHeight()` reflect the full browser or OS window dimensions.

## Reference

All actions, conditions and expressions are listed in [the window reference page](/gdevelop5/all-features/window/reference/).