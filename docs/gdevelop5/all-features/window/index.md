---
title: Window and game area
---
# Window and game area

The window of the game is the area in which the game is displayed. It DOES NOT refer to the system window that includes the toolbar, title bar on the top and a frame on the other three sides.

## Fullscreen
The "De/activate fullscreen" action allows you to toggle the game between fullscreen on/off. When the window is in fullscreen, it will take up as much area as possible. You can control the action using the "YES" and "NO" actions.

For HTML5 (web and mobile) games, this action has a second parameter to keep the aspect ratio of the game (enabled by default). When kept, black borders are added around the game so it is not stretched; when disabled, the game is stretched to fill the whole screen.

The "Fullscreen activated?" condition lets you check whether the game is currently displayed in fullscreen.

## Window margins
The margin of the window is the distance between the side of the window and the game window displayed. Shown below is the preview of a game with 100 px margins on all 4 sides.

![](/gdevelop5/all-features/annotation_2019-06-29_174027.png)

Notice the black borders on all for sides of the window. The width of the borders is 100px.

## Game resolution and window size

It's important to distinguish two different things:

* The **game resolution** is the number of pixels rendered in the game area (the "virtual" size of your game). This is what the "Game resolution" action changes. Changing it does **not** change the size of the system window.
* The **window size** is the size, in pixels, of the actual system window on screen. This is what the "Game window size" action changes. Note that this only works on Windows, macOS and Linux: games running in a browser or on mobile can't change their window size (but they can still change their resolution).

## Size of the window

Size of the window is the number of pixels visible in the game. The "Width" field refers to the number of pixels in the horizontal directions while the "Height" field refers to the number of pixels in the vertical direction.

While setting the size of the window, if you want to scale the current area to the set resolution, choose "NO". This will decrease the visual quality of the game if the size entered is lower than default and will increase the visual quality if the size entered is higher than the default size.

![](/gdevelop5/all-features/annotation_2019-06-29_175454.png)

If you want to scale the set resolution to the window area, choose "YES". This will crop the window and display only the number of pixels entered in the action. This does not affect the visual quality as long as the game is scaled up or down because of the size of the system window.

!!! note

    The game is cropped starting from the top-left corner of the game.

![](/gdevelop5/all-features/annotation_2019-06-29_175540.png)

## Window title

The window title is the name of the window that is visible on the title bar (located at the top) of the window. The default title name is "Preview of ProjectName" during a preview.

By default, the game name is used for the executable name (on Windows, macOS and Linux), the app name (on Android and iOS) and the title bar (on Windows, macOS and Linux) (and the page title for HTML5 games). You can [learn more about it in game properties.](/gdevelop5/interface/project-manager/properties)

With the action to change the title, the title bar on Windows, macOS and Linux will be changed. Nothing will be visible on Android and iOS. For HTML5 games, the web page title will be changed.

## Resolution resize mode

The "Game resolution resize mode" action controls what happens to the game resolution when the window or screen size changes:

* `adaptWidth` updates the game width to fit the window or screen (keeping the height).
* `adaptHeight` updates the game height to fit the window or screen (keeping the width).
* An empty value disables automatic resizing.

The "Automatically adapt the game resolution" action enables or disables this adaptation while the game is running (it only has an effect when the resize mode is set to adapt the width or height).

## Center the game window

The "Center the game window on the screen" action moves the window to the center of the screen. This only works on Windows, macOS and Linux (not in a web browser or on iOS/Android).

## Window's icon

The "Window's icon" action changes the icon of the game's window at runtime, using an image from your project's resources.

## Useful expressions

A few expressions are available to read sizes at runtime:

* `SceneWindowWidth()` and `SceneWindowHeight()` return the size of the game canvas (the area in which the scene is rendered).
* `ScreenWidth()` and `ScreenHeight()` return the size of the screen (or the browser page for HTML5 games).
* `WindowTitle()` returns the current window title.

## Reference

All actions, conditions and expressions are listed in [the window reference page](/gdevelop5/all-features/window/reference/).