---
title: Window and game area
---
# Window and game area

The window of the game is the area in which the game is displayed. It DOES NOT refer to the system window that includes the toolbar, title bar on the top and a frame on the other three sides.

## Fullscreen

The **De/activate fullscreen** action toggles the game between fullscreen and windowed mode. On HTML5 games, a second parameter lets you choose whether to preserve the aspect ratio when entering fullscreen.

Use the **Fullscreen activated?** condition to check whether the game is currently running in fullscreen.

## Window margins

The margin of the window is the distance between the side of the window and the game window displayed. Shown below is the preview of a game with 100 px margins on all 4 sides.

![](/gdevelop5/all-features/annotation_2019-06-29_174027.png)

Notice the black borders on all four sides of the window. The width of the borders is 100px.

## Game resolution and window size

GDevelop distinguishes between two related but separate concepts:

- **Game resolution** — the internal size (in pixels) of the game area that is rendered. Changing this with the **Game resolution** action resizes the rendering canvas without affecting the OS window.
- **Window size** — the actual size of the OS window on screen. Changing this with the **Game window size** action resizes the visible window. On browsers and mobile this has no effect; only the game resolution can be updated.

When you call **Game window size** you can optionally synchronise the game resolution to match, or leave them independent (which will stretch or shrink the rendered image to fill the window).

![](/gdevelop5/all-features/annotation_2019-06-29_175454.png)

### Game resolution resize mode

The **Game resolution resize mode** action controls what happens automatically when the OS window or screen changes size at runtime:

- **`"adaptWidth"`** — the game width is recalculated so the full height always fits.
- **`"adaptHeight"`** — the game height is recalculated so the full width always fits.
- **`""`** (empty) — the game resolution is never changed automatically.

Use the **Automatically adapt the game resolution** action to enable or disable this automatic adaptation at runtime.

## Centering the window

The **Center the game window on the screen** action repositions the OS window to the centre of the display. This only works on Windows, macOS and Linux — it has no effect in a browser or on iOS/Android.

## Window title

The window title is the name of the window that is visible on the title bar (located at the top) of the window.

With the **Window's title** action you can change the title at runtime. On Windows, macOS and Linux this updates the title bar. For HTML5 games, the web page title changes instead. Nothing is visible on Android and iOS.

Use the `WindowTitle()` expression to read the current window title.

By default, the game name is used for the executable name, the app name, and the title bar. You can [learn more about it in game properties.](/gdevelop5/interface/project-manager/properties)

## Reading window and screen dimensions

Several expressions are available to query the current dimensions at runtime:

| Expression | Description |
|---|---|
| `SceneWindowWidth()` | Width of the game canvas (game resolution width) |
| `SceneWindowHeight()` | Height of the game canvas (game resolution height) |
| `ScreenWidth()` | Width of the browser page or screen on desktop |
| `ScreenHeight()` | Height of the browser page or screen on desktop |

`SceneWindowWidth`/`SceneWindowHeight` reflect the current game resolution, while `ScreenWidth`/`ScreenHeight` reflect the outer container (browser window or monitor).

## Reference

All actions, conditions and expressions are listed in [the window reference page](/gdevelop5/all-features/window/reference/).
