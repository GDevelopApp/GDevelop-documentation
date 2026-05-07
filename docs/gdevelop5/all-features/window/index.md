---
title: Window and game area
---
# Window and game area

The window of the game is the area in which the game is displayed. It DOES NOT refer to the system window that includes the toolbar, title bar on the top and a frame on the other three sides.

## Fullscreen
The "De/activate fullscreen" action allows you to toggle the game between fullscreen on/off. When the window is in fullscreen, it will take up as much area as possible. You can control the action using the "YES" and "NO" actions.

For HTML5 games, the action has an optional "Keep aspect ratio" parameter. When set to "yes" (the default), black bars will be added so the game keeps its original proportions; when set to "no", the game will be stretched to fill the screen.

## Window margins
The margin of the window is the distance between the side of the window and the game window displayed. Shown below is the preview of a game with 100 px margins on all 4 sides.

![](/gdevelop5/all-features/annotation_2019-06-29_174027.png)

Notice the black borders on all for sides of the window. The width of the borders is 100px.

## Game resolution and window size

GDevelop makes a distinction between two different concepts:

- The **game resolution** is the size of the game area in pixels. It defines how much of the game world is visible and the unit used by all game coordinates. The default resolution is set in the project properties.
- The **window size** is the size of the system window the game runs in. On the web, mobile or fullscreen, the window size is imposed by the browser, the device or the screen — it can't be changed by the game. On Windows, macOS and Linux, it can be updated with the "Game window size" action.

The "**Game resolution**" action changes how much of the game world is visible without changing the size of the window. Reducing the resolution makes objects appear larger (zooming in); increasing it makes them appear smaller (zooming out).

The "**Game window size**" action only works on Windows, macOS and Linux. It has an option to also update the game resolution: if you say "no", the game will be stretched or reduced to fit the new window.

The "**Center the game window on the screen**" action centers the window on the screen (Windows, macOS and Linux only).

### Game resolution resize mode

When the system window or screen size changes (for example a player resizing a browser window or rotating their phone), the game resolution can be adapted automatically. Use the "**Game resolution resize mode**" action with one of:

- `adaptWidth`: the game width is updated to fit in the window or screen, keeping the height fixed.
- `adaptHeight`: the game height is updated to fit, keeping the width fixed.
- *(empty)*: disables resizing — the game is stretched or shown with black bars to fit the window.

The "**Automatically adapt the game resolution**" action enables or disables that adaptation while the game is running. It only takes effect when the resize mode above is `adaptWidth` or `adaptHeight`.

## Window title

The window title is the name of the window that is visible on the title bar (located at the top) of the window. The default title name is "Preview of ProjectName" during a preview.

By default, the game name is used for the executable name (on Windows, macOS and Linux), the app name (on Android and iOS) and the title bar (on Windows, macOS and Linux) (and the page title for HTML5 games). You can [learn more about it in game properties.](/gdevelop5/interface/project-manager/properties)

With the action to change the title, the title bar on Windows, macOS and Linux will be changed. Nothing will be visible on Android and iOS. For HTML5 games, the web page title will be changed.

## Window icon

The "**Window's icon**" action changes the icon shown in the window's title bar and the operating system task bar. It takes the name of an image resource of your project. This only applies to Windows, macOS and Linux: on mobile, the app icon is set when the game is built; on the web, the icon comes from the page's favicon.

## Reading screen and window dimensions

A few expressions help adapt the game to the player's screen or window:

- `SceneWindowWidth()` / `SceneWindowHeight()`: the size of the area where the scene is rendered (the canvas size for HTML5 games).
- `ScreenWidth()` / `ScreenHeight()`: the size of the player's screen (or the page for HTML5 games running in a browser).

## Reference

All actions, conditions and expressions are listed in [the window reference page](/gdevelop5/all-features/window/reference/).