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

## Game resolution and window size

GDevelop distinguishes two different sizes:

* The **game resolution** is the number of pixels the game renders — in other words, how much of the game world is visible. The "Game resolution" action changes it (using the "Width" and "Height" fields) without resizing the actual window: the rendered area is then stretched or shrunk to fit the window.
* The **game window size** is the size, in pixels, of the system window the game runs in. The "Game window size" action changes it. This only works where the platform allows it — games running in a browser or on a mobile phone cannot resize their window.

The "Game window size" action has an option to **also update the game resolution**. If set to "NO", the game resolution stays the same and the rendering is stretched or reduced to fit the new window size.

![](/gdevelop5/all-features/annotation_2019-06-29_175454.png)

## Game resolution resize mode

When the window (or screen, in fullscreen) is resized, the "Game resolution resize mode" action controls whether the game resolution follows it:

* **adaptWidth**: the game width is updated to fit the window, keeping the height unchanged.
* **adaptHeight**: the game height is updated to fit the window, keeping the width unchanged.
* **Empty**: resizing is disabled — the game keeps its resolution and is stretched or letterboxed instead.

The "Automatically adapt the game resolution" action enables or disables updating the resolution *during* the game when the window or screen size changes. It only has an effect when the resize mode is set to adapt the width or the height.

## Centering the window

The "Center the game window on the screen" action moves the window to the center of the screen. This only works on Windows, macOS and Linux — not in a web browser or on iOS/Android.

## Window title

The window title is the name of the window that is visible on the title bar (located at the top) of the window. The default title name is "Preview of ProjectName" during a preview.

By default, the game name is used for the executable name (on Windows, macOS and Linux), the app name (on Android and iOS) and the title bar (on Windows, macOS and Linux) (and the page title for HTML5 games). You can [learn more about it in game properties.](/gdevelop5/interface/project-manager/properties)

With the action to change the title, the title bar on Windows, macOS and Linux will be changed. Nothing will be visible on Android and iOS. For HTML5 games, the web page title will be changed.

## Reference

All actions, conditions and expressions are listed in [the window reference page](/gdevelop5/all-features/window/reference/).