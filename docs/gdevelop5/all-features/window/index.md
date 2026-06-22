---
title: Window and game area
---
# Window and game area

The window of the game is the area in which the game is displayed. It DOES NOT refer to the system window that includes the toolbar, title bar on the top and a frame on the other three sides.

## Fullscreen
The "De/activate fullscreen" action allows you to toggle the game between fullscreen on/off. When the window is in fullscreen, it will take up as much area as possible.

For HTML5 games, the action has a second parameter to keep the aspect ratio of the game: when enabled (the default), black borders are added if needed so the game is not stretched.

## Window margins
The margin of the window is the distance between the side of the window and the game window displayed. Shown below is the preview of a game with 100 px margins on all 4 sides.

![](/gdevelop5/all-features/annotation_2019-06-29_174027.png)

Notice the black borders on all for sides of the window. The width of the borders is 100px.

## Game resolution and window size

It's important to distinguish two different things:

* The **game resolution** is the number of pixels visible in the game area (the "Width" and "Height" of the game). This is the size at which your game is rendered.
* The **window size** is the size, in pixels, of the system window in which the game is displayed.

The window is usually larger than the game resolution: the game is then scaled up to fill the window. This means a low game resolution stays sharp even on a large screen (and is the recommended way to support many screen sizes).

The "Game resolution" action changes the game area size without changing the window. The "Game window size" action changes the window itself — this only works on Windows, macOS and Linux, as games running in a browser or on mobile cannot resize their window. This action also lets you choose whether the game resolution should be updated to match: if not, the game is stretched or reduced to fit the new window.

## Adapting the game resolution to the screen

The "Game resolution resize mode" action controls how the game area reacts to a window or screen of a different shape than the game resolution:

* **Adapt width**: the game width is updated so the game fills the window or screen (the height stays fixed).
* **Adapt height**: the game height is updated instead (the width stays fixed).
* **Disabled** (empty value): the resolution is never changed; black borders are added or the game is stretched to fit.

The "Automatically adapt the game resolution" action enables or disables this update happening *live* when the window or screen size changes during the game. It only has an effect when a resize mode (adapt width or height) is set.

These options are also available, with default values, in the project properties.

## Centering and the window icon

On Windows, macOS and Linux, the "Center the game window on the screen" action repositions the window in the middle of the screen, and the "Window's icon" action changes the icon shown for the game's window. Neither has any effect in a browser or on iOS/Android.

## Window title

The window title is the name of the window that is visible on the title bar (located at the top) of the window. The default title name is "Preview of ProjectName" during a preview.

By default, the game name is used for the executable name (on Windows, macOS and Linux), the app name (on Android and iOS) and the title bar (on Windows, macOS and Linux) (and the page title for HTML5 games). You can [learn more about it in game properties.](/gdevelop5/interface/project-manager/properties)

With the action to change the title, the title bar on Windows, macOS and Linux will be changed. Nothing will be visible on Android and iOS. For HTML5 games, the web page title will be changed.

## Reading the dimensions

Expressions are available to read sizes at runtime. The *scene window* width and height return the size of the area in which the scene is rendered (the canvas for HTML5 games), while the *screen* width and height return the size of the whole screen (or the page for HTML5 games running in a browser). These are useful, for example, to position user interface objects relative to the visible area.

## Reference

All actions, conditions and expressions are listed in [the window reference page](/gdevelop5/all-features/window/reference/).