---
title: Window and game area
---
# Window and game area

The window of the game is the area in which the game is displayed. It DOES NOT refer to the system window that includes the toolbar, title bar on the top and a frame on the other three sides.

## Fullscreen
The "De/activate fullscreen" action allows you to toggle the game between fullscreen on/off. When the window is in fullscreen, it will take up as much area as possible.

For HTML5 games, a second parameter lets you choose whether to keep the aspect ratio (enabled by default). When kept, black borders are added if the screen ratio does not match the game; when disabled, the game is stretched to fill the whole screen.

You can also check if the game is currently in fullscreen with the "Fullscreen activated?" condition.

## Window margins
The margin of the window is the distance between the side of the window and the game window displayed. Shown below is the preview of a game with 100 px margins on all 4 sides.

![](/gdevelop5/all-features/annotation_2019-06-29_174027.png)

Notice the black borders on all for sides of the window. The width of the borders is 100px.

## Game resolution and window size

It's important to distinguish two different things:

* The **game resolution** is the number of pixels rendered by the game (the size of the game area). This is what you set in the game properties and what determines how much of your scene is visible.
* The **game window size** is the size, in pixels, of the system window in which the game is displayed. The game resolution is scaled up or down to fit inside the window.

### Game resolution

The "Game resolution" action changes the resolution of the game, effectively changing the size of the visible game area. This does not change the size of the window in which the game is running: the rendered area is scaled to fit the window.

### Game window size

The "Game window size" action changes the size of the system window. This only works on platforms that support it: games running in a browser or on mobile phones can not change their window size (the game resolution can still be changed).

This action has a parameter to choose whether the game resolution should also be updated:

* Choose **YES** to update the game resolution to match the new window size, so more (or less) of the scene becomes visible.
* Choose **NO** to keep the current resolution: the game is then stretched or reduced to fit inside the window.

### Resize mode

The "Game resolution resize mode" action controls how the game resolution reacts when the window or screen size changes:

* `adaptWidth` updates the game width to fit the window or screen (the height stays fixed).
* `adaptHeight` updates the game height to fit the window or screen (the width stays fixed).
* An empty value disables automatic resizing.

The "Automatically adapt the game resolution" action enables or disables updating the resolution while the game is running. This only has an effect when the resize mode is set to adapt the width or the height.

## Center the window

The "Center the game window on the screen" action centers the window. This only works on Windows, macOS and Linux (it has no effect in a web browser or on iOS/Android).

## Window title

The window title is the name of the window that is visible on the title bar (located at the top) of the window. The default title name is "Preview of ProjectName" during a preview.

By default, the game name is used for the executable name (on Windows, macOS and Linux), the app name (on Android and iOS) and the title bar (on Windows, macOS and Linux) (and the page title for HTML5 games). You can [learn more about it in game properties.](/gdevelop5/interface/project-manager/properties)

With the action to change the title, the title bar on Windows, macOS and Linux will be changed. Nothing will be visible on Android and iOS. For HTML5 games, the web page title will be changed.

## Window icon

The "Window's icon" action changes the icon displayed for the game's window, using an image from your project's resources. This applies to the desktop window (Windows, macOS and Linux).

## Reading the screen and window size

A few expressions let you read sizes at runtime, which is useful to position objects relative to the visible area or to adapt your interface:

* `SceneWindowWidth` and `SceneWindowHeight` return the size of the scene window (or the canvas for HTML5 games).
* `ScreenWidth` and `ScreenHeight` return the size of the whole screen (or the page for HTML5 games running in a browser).

## Reference

All actions, conditions and expressions are listed in [the window reference page](/gdevelop5/all-features/window/reference/).