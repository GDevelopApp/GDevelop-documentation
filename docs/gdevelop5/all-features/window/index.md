---
title: Window and game area
---
# Window and game area

The window of the game is the area in which the game is displayed. It DOES NOT refer to the system window that includes the toolbar, title bar on the top and a frame on the other three sides.

## Fullscreen
The "De/activate fullscreen" action allows you to toggle the game between fullscreen on/off. When the window is in fullscreen, it will take up as much area as possible. You can control the action using the "YES" and "NO" actions.

For HTML5 games, a second parameter lets you choose whether the aspect ratio should be kept when switching to fullscreen (kept by default). The "Fullscreen activated?" condition lets you check if the game is currently in fullscreen.

## Window margins
The margin of the window is the distance between the side of the window and the game window displayed. Shown below is the preview of a game with 100 px margins on all 4 sides.

![](/gdevelop5/all-features/annotation_2019-06-29_174027.png)

Notice the black borders on all for sides of the window. The width of the borders is 100px.

## Game resolution and window size

GDevelop makes a distinction between two related but separate concepts:

* The **game resolution** is the size of the game area, in pixels — the number of pixels that the game draws (its virtual width and height).
* The **window size** is the size, in pixels, of the actual window in which the game is displayed on the system.

The "Game resolution" action changes the resolution (the game area size) without changing the size of the window in which the game runs. The "Game window size" action changes the window size; it has an extra option to also update the game resolution at the same time. If you change the window size without updating the resolution, the game is stretched or reduced to fit in the window.

!!! note

    Changing the window size only works on platforms that support it (Windows, macOS and Linux). Games running in a web browser or on Android/iOS can not update their window size, but the game resolution can still be updated.

![](/gdevelop5/all-features/annotation_2019-06-29_175454.png)

## Game resolution resize mode

The "Game resolution resize mode" action sets how the resolution reacts when the window or screen size changes:

* `adaptWidth` updates the game width to fit the window or screen.
* `adaptHeight` does the same for the game height.
* An empty value disables automatic resizing.

The "Automatically adapt the game resolution" action turns this automatic adaptation on or off during the game. It only has an effect when the resize mode is configured to adapt the width or the height.

## Center the game window

The "Center the game window on the screen" action moves the window to the center of the screen. This only works on Windows, macOS and Linux (not in a web browser or on Android/iOS).

## Window title

The window title is the name of the window that is visible on the title bar (located at the top) of the window. The default title name is "Preview of ProjectName" during a preview.

By default, the game name is used for the executable name (on Windows, macOS and Linux), the app name (on Android and iOS) and the title bar (on Windows, macOS and Linux) (and the page title for HTML5 games). You can [learn more about it in game properties.](/gdevelop5/interface/project-manager/properties)

With the action to change the title, the title bar on Windows, macOS and Linux will be changed. Nothing will be visible on Android and iOS. For HTML5 games, the web page title will be changed.

## Window's icon

The "Window's icon" action changes the icon shown for the game's window, using an image from the project's resources. As with the title, this is only relevant on Windows, macOS and Linux.

## Reading the screen and window size

A few expressions let you read sizes at runtime, which is useful to position UI relative to the screen or to detect the available space:

* `SceneWindowWidth()` and `SceneWindowHeight()` return the width and height of the scene window (the scene canvas for HTML5 games).
* `ScreenWidth()` and `ScreenHeight()` return the width and height of the screen (or the page for HTML5 games running in a browser).

## Reference

All actions, conditions and expressions are listed in [the window reference page](/gdevelop5/all-features/window/reference/).