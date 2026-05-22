---
title: Window and game area
---
# Window and game area

The window of the game is the area in which the game is displayed. It DOES NOT refer to the system window that includes the toolbar, title bar on the top and a frame on the other three sides.

## Fullscreen
The "De/activate fullscreen" action allows you to toggle the game between fullscreen on/off. When the window is in fullscreen, it will take up as much area as possible. You can control the action using the "YES" and "NO" actions.

## Window margins
The margin of the window is the distance between the side of the window and the game window displayed. Shown below is the preview of a game with 100 px margins on all 4 sides.

![](/gdevelop5/all-features/annotation_2019-06-29_174027.png)

Notice the black borders on all for sides of the window. The width of the borders is 100px.

## Game resolution vs game window size

GDevelop distinguishes two related but separate concepts:

- The **game resolution** is the size of the *internal drawing area* — the number of pixels the game renders. This is what your `SceneWindowWidth()` and `SceneWindowHeight()` expressions return.
- The **game window size** is the size of the actual window on the user's screen, in screen pixels.

The renderer fits the game resolution into the window, scaling it up or down. A 320×240 game resolution displayed in an 800×600 window is upscaled; the player sees larger pixels, but the playable area in game coordinates stays at 320×240.

### Game resolution

Use the **Game resolution** action to change the internal rendering size. This is what changes the area visible to the player in game coordinates without affecting the actual window.

### Game window size

Use the **Game window size** action to resize the window itself. Its parameter "Also update the game resolution?" decides what happens to the game area:

- If **yes**, the game resolution is updated to match the new window — the player will see more (or less) of the scene.
- If **no**, the existing resolution is stretched or shrunk to fit the new window, possibly distorting the image.

!!! note

    Resizing the window only works on desktop targets (Windows, macOS, Linux). Browsers and mobile devices control their own window size, so this action has no effect there — but changing the game resolution still works everywhere.

### Resize mode and automatic adaptation

When the player resizes the window (or rotates a mobile device), GDevelop can automatically adapt the game resolution. The **Game resolution resize mode** action takes one of three values:

- `"adaptWidth"`: the game width follows the window width; the height stays fixed.
- `"adaptHeight"`: the game height follows the window height; the width stays fixed.
- Empty string: resizing is disabled — the resolution stays as set in the game properties and the rendered image is scaled.

Combine this with the **Automatically adapt the game resolution** action to enable or disable the automatic re-adaptation that happens whenever the screen or window size changes during the game.

### Centering the window

The **Center the game window on the screen** action moves the window to the center of the user's screen. It only works on desktop targets (Windows, macOS, Linux).

## Window title

The window title is the name of the window that is visible on the title bar (located at the top) of the window. The default title name is "Preview of ProjectName" during a preview.

By default, the game name is used for the executable name (on Windows, macOS and Linux), the app name (on Android and iOS) and the title bar (on Windows, macOS and Linux) (and the page title for HTML5 games). You can [learn more about it in game properties.](/gdevelop5/interface/project-manager/properties)

With the action to change the title, the title bar on Windows, macOS and Linux will be changed. Nothing will be visible on Android and iOS. For HTML5 games, the web page title will be changed.

## Reading window and screen size

A few expressions let you read sizes at runtime:

- `SceneWindowWidth()` / `SceneWindowHeight()` return the current game resolution (or canvas size in browsers) — what you usually want when positioning UI relative to the visible play area.
- `ScreenWidth()` / `ScreenHeight()` return the size of the user's screen (or of the web page for HTML5 games).
- `WindowTitle()` returns the current window title string.

## Reference

All actions, conditions and expressions are listed in [the window reference page](/gdevelop5/all-features/window/reference/).