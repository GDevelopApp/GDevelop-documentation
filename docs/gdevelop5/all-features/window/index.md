---
title: Window and game area
---
# Window and game area

The window of the game is the area in which the game is displayed. It DOES NOT refer to the system window that includes the toolbar, title bar on the top and a frame on the other three sides.

## Fullscreen
The "De/activate fullscreen" action allows you to toggle the game between fullscreen on/off. When the window is in fullscreen, it will take up as much area as possible. You can control the action using the "YES" and "NO" actions.

The action also has a "Keep aspect ratio" option (HTML5 games only). When enabled, black bars are added on the sides of the game so that the original aspect ratio is preserved when the screen ratio differs. When disabled, the game is stretched to fill the whole screen.

The "Fullscreen activated?" condition can be used to check the current state — useful to update the label of a "Toggle fullscreen" button.

## Window margins
The margin of the window is the distance between the side of the window and the game window displayed. Shown below is the preview of a game with 100 px margins on all 4 sides.

![](/gdevelop5/all-features/annotation_2019-06-29_174027.png)

Notice the black borders on all for sides of the window. The width of the borders is 100px.

## Game resolution vs game window size

It's important to distinguish two different concepts:

- The **game resolution** is the number of pixels rendered by the game (the size of the area cameras "see"). It can be changed with the "Game resolution" action.
- The **game window size** is the size, in screen pixels, of the actual system window in which the game is displayed. It can be changed with the "Game window size" action — only on Windows, macOS and Linux. Browsers and mobile platforms cannot resize their own window.

If the resolution and the window have different sizes, the game is scaled up or down to fit. Increasing the resolution beyond the window size makes more of the scene visible (or renders at a higher density); decreasing it makes the game look more pixelated when stretched up.

![](/gdevelop5/all-features/annotation_2019-06-29_175454.png)

The "Game window size" action also has an option to update the game resolution at the same time, so that the game is rendered at the native size of the window without any scaling.

![](/gdevelop5/all-features/annotation_2019-06-29_175540.png)

!!! note

    When the resolution is larger than the window and content is cropped, the game is cropped starting from the top-left corner.

### Resize mode

The "Game resolution resize mode" action controls how the game resolution reacts when the window or screen is resized:

- `adaptWidth`: the game width is updated to fit the window/screen, while the height is preserved.
- `adaptHeight`: the game height is updated to fit the window/screen, while the width is preserved.
- *Empty value*: disables resizing — the resolution stays the same and the game is stretched to fill the window.

The "Automatically adapt the game resolution" action enables/disables that automatic adaptation at runtime. It only takes effect if the resize mode is set to adapt the width or the height.

## Window title

The window title is the name of the window that is visible on the title bar (located at the top) of the window. The default title name is "Preview of ProjectName" during a preview.

By default, the game name is used for the executable name (on Windows, macOS and Linux), the app name (on Android and iOS) and the title bar (on Windows, macOS and Linux) (and the page title for HTML5 games). You can [learn more about it in game properties.](/gdevelop5/interface/project-manager/properties)

With the action to change the title, the title bar on Windows, macOS and Linux will be changed. Nothing will be visible on Android and iOS. For HTML5 games, the web page title will be changed.

The current title can be read back with the `WindowTitle()` expression.

## Window icon

The "Window's icon" action changes the icon shown for the game window. It takes the name of an image resource from the project. This affects desktop builds (Windows, macOS, Linux) — it has no effect in browsers or on mobile, where the platform manages app icons separately.

## Center the window

The "Center the game window on the screen" action repositions the system window at the center of the player's screen. It only works on Windows, macOS and Linux — it has no effect when the game runs in a browser or on iOS/Android.

## Reading the current sizes

A few expressions are available to query sizes at runtime:

- `SceneWindowWidth()` / `SceneWindowHeight()`: the size of the area where the scene is currently rendered (the game canvas for HTML5 games).
- `ScreenWidth()` / `ScreenHeight()`: the size of the player's full screen (or the page for HTML5 games running in a browser).

These are useful to make UI adapt to different devices, for example to position elements relative to the right or bottom of the screen.

## Reference

All actions, conditions and expressions are listed in [the window reference page](/gdevelop5/all-features/window/reference/).