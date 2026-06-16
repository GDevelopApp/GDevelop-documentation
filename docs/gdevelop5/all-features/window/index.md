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

It's important to distinguish two different things:

* The **game resolution** is the size of the game area, in pixels. It defines how much of your game world is visible at once. Changing it with the "Game resolution" action does not resize the system window: the game is stretched or shrunk to keep filling the window.
* The **game window size** is the size of the system window on the player's desktop. The "Game window size" action only works on Windows, macOS and Linux — games running in a browser or on mobile can't resize their window.

When changing the window size, you can also choose to update the game resolution to match. If you don't, the game keeps its current resolution and is stretched or reduced to fit the new window.

![](/gdevelop5/all-features/annotation_2019-06-29_175454.png)

## Adapting to the screen size

The **resize mode** controls how the game resolution reacts when the window or screen size changes:

* `adaptWidth` keeps the game height fixed and adjusts the width to fill the window or screen.
* `adaptHeight` keeps the height adjusting instead, fixing the width.
* Leaving it empty disables resizing, so the game is stretched or reduced to fit the window.

This is useful to support many screen ratios (for example on mobile) without leaving black borders. By default the game resolution is decided at startup; use the "Automatically adapt the game resolution" action so it keeps updating as the window or screen size changes.

## Centering and the window icon

On Windows, macOS and Linux you can center the game window on the screen, and change the icon used by the game's window. These actions have no effect in a browser or on mobile.

## Window title

The window title is the name of the window that is visible on the title bar (located at the top) of the window. The default title name is "Preview of ProjectName" during a preview.

By default, the game name is used for the executable name (on Windows, macOS and Linux), the app name (on Android and iOS) and the title bar (on Windows, macOS and Linux) (and the page title for HTML5 games). You can [learn more about it in game properties.](/gdevelop5/interface/project-manager/properties)

With the action to change the title, the title bar on Windows, macOS and Linux will be changed. Nothing will be visible on Android and iOS. For HTML5 games, the web page title will be changed.

## Reading the screen and window size

Several expressions let you read sizes at runtime, which is handy to position interface elements relative to the visible area:

* `SceneWindowWidth` and `SceneWindowHeight` return the size of the scene window (the game canvas for HTML5 games).
* `ScreenWidth` and `ScreenHeight` return the size of the screen, or of the page for HTML5 games running in a browser.

## Reference

All actions, conditions and expressions are listed in [the window reference page](/gdevelop5/all-features/window/reference/).