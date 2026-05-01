---
title: Window and game area
---
# Window and game area

The window of the game is the area in which the game is displayed. It DOES NOT refer to the system window that includes the toolbar, title bar on the top and a frame on the other three sides.

## Fullscreen
The "De/activate fullscreen" action allows you to toggle the game between fullscreen on/off. When the window is in fullscreen, it will take up as much area as possible. An optional parameter lets you control whether the aspect ratio is preserved (applies to HTML5 games).

Use the **"Fullscreen activated?"** condition to check whether the game is currently in fullscreen — for example, to show or hide a fullscreen toggle button in your UI.

## Window margins
The margin of the window is the distance between the side of the window and the game window displayed. Shown below is the preview of a game with 100 px margins on all 4 sides.

![](/gdevelop5/all-features/annotation_2019-06-29_174027.png)

Notice the black borders on all for sides of the window. The width of the borders is 100px.

## Window size and game resolution

GDevelop distinguishes between two related but separate concepts:

- **Window size** — the size of the system window on the screen (only changeable on desktop platforms; browsers and mobile devices ignore this).
- **Game resolution** — the number of logical pixels used to render the game. This controls what the player actually sees and can be updated on any platform.

The **"Game window size"** action resizes the system window and optionally updates the game resolution to match. If you choose not to update the resolution, the game is stretched or shrunk to fill the new window.

The **"Game resolution"** action changes the resolution independently of the window, which is useful for effects like zooming in or implementing different quality settings without resizing the window.

![](/gdevelop5/all-features/annotation_2019-06-29_175454.png)

!!! note

    The game is cropped starting from the top-left corner of the game.

![](/gdevelop5/all-features/annotation_2019-06-29_175540.png)

### Adapting the resolution automatically

For games that should adapt to different screen sizes (responsive design), use the **"Game resolution resize mode"** action to set one of three modes:

- **`adaptWidth`** — the game width expands or contracts to fill the window while the height stays fixed. Useful for portrait-oriented games on different screen widths.
- **`adaptHeight`** — the game height adapts while width stays fixed. Useful for landscape games.
- **Empty (disabled)** — the resolution never changes automatically, and the game is scaled to fit the window.

Pair this with **"Automatically adapt the game resolution"** to have GDevelop re-apply the resize mode whenever the window or browser page size changes at runtime. This is particularly useful for web games where the browser window can be resized freely.

## Reading screen and window dimensions

Several expressions let you read the current dimensions at runtime:

- `SceneWindowWidth()` / `SceneWindowHeight()` — the current game canvas size in pixels. Use these when you want to position objects relative to the edges of the game area.
- `ScreenWidth()` / `ScreenHeight()` — the full screen resolution (or page size for HTML5 games in a browser). Useful for detecting the device's display size.

## Other window actions

The **"Center the game window"** action repositions the window to the center of the screen. This only works on Windows, macOS, and Linux — it has no effect in a browser or on mobile.

You can also set the **window icon** at runtime using the "Window's icon" action, passing the name of an image resource from your project.

## Window title

The window title is the name of the window that is visible on the title bar (located at the top) of the window. The default title name is "Preview of ProjectName" during a preview.

By default, the game name is used for the executable name (on Windows, macOS and Linux), the app name (on Android and iOS) and the title bar (on Windows, macOS and Linux) (and the page title for HTML5 games). You can [learn more about it in game properties.](/gdevelop5/interface/project-manager/properties)

With the action to change the title, the title bar on Windows, macOS and Linux will be changed. Nothing will be visible on Android and iOS. For HTML5 games, the web page title will be changed. The `WindowTitle()` expression returns the current title string so you can read it back if needed.

## Advanced window management (desktop)

For desktop games (Windows, macOS, Linux), the **Advanced Window** extension provides additional control over the system window — such as making it always-on-top, setting its opacity, controlling whether it can be resized or moved, minimizing or maximizing it programmatically, enabling kiosk mode, and more. Search for "Advanced Window" in the extension manager to add it to your project.

## Reference

All actions, conditions and expressions are listed in [the window reference page](/gdevelop5/all-features/window/reference/).