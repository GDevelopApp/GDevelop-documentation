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

GDevelop makes a distinction between two different sizes:

* The **game resolution** is the number of pixels that the game renders — in other words, how much of the game world is visible. The "Game resolution" action changes this area without changing the size of the system window.
* The **game window size** is the size, in pixels, of the actual system window the game runs in. The "Game window size" action changes it (when the action also updates the game resolution, the rendered area follows; otherwise the game is stretched or shrunk to fill the window).

Changing the window size only works on platforms that support it: games running in a browser or on a phone can not resize their window, but they can still update their game resolution.

![](/gdevelop5/all-features/annotation_2019-06-29_175454.png)

### Game resolution resize mode

The "Game resolution resize mode" action controls what happens to the game resolution when the window or screen size changes. Use `"adaptWidth"` to update the game width to fit the window, `"adaptHeight"` to update the game height, or an empty string to keep the resolution fixed. You can combine it with the "Automatically adapt the game resolution" action so that the visible area follows the window or screen size while the game is running — useful to support many screen ratios.

![](/gdevelop5/all-features/annotation_2019-06-29_175540.png)

## Center the game window

The "Center the game window on the screen" action positions the window in the middle of the screen. This only works on Windows, macOS and Linux, not for games running in a browser or on iOS/Android.

## Window title

The window title is the name of the window that is visible on the title bar (located at the top) of the window. The default title name is "Preview of ProjectName" during a preview.

By default, the game name is used for the executable name (on Windows, macOS and Linux), the app name (on Android and iOS) and the title bar (on Windows, macOS and Linux) (and the page title for HTML5 games). You can [learn more about it in game properties.](/gdevelop5/interface/project-manager/properties)

With the action to change the title, the title bar on Windows, macOS and Linux will be changed. Nothing will be visible on Android and iOS. For HTML5 games, the web page title will be changed.

## Reading the window and screen size

A few expressions let you read sizes at runtime, which is handy to position objects relative to the visible area or to compute a layout:

* `SceneWindowWidth()` and `SceneWindowHeight()` return the size of the scene window (the canvas for HTML5 games).
* `ScreenWidth()` and `ScreenHeight()` return the size of the whole screen (or the page for HTML5 games running in a browser).

## Advanced window management

For desktop games exported with Electron (Windows, macOS, Linux), the **Advanced window management** extension adds actions and conditions to focus, show or hide the window, maximize, minimize, set it always on top, change its opacity or position, and enable content protection. These actions have no effect on web and mobile games.

## Reference

All actions, conditions and expressions are listed in [the window reference page](/gdevelop5/all-features/window/reference/).