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

## Size of the window

Size of the window is the number of pixels visible in the game. The "Width" field refers to the number of pixels in the horizontal directions while the "Height" field refers to the number of pixels in the vertical direction.

While setting the size of the window, if you want to scale the current area to the set resolution, choose "NO". This will decrease the visual quality of the game if the size entered is lower than default and will increase the visual quality if the size entered is higher than the default size.

![](/gdevelop5/all-features/annotation_2019-06-29_175454.png)

If you want to scale the set resolution to the window area, choose "YES". This will crop the window and display only the number of pixels entered in the action. This does not affect the visual quality as long as the game is scaled up or down because of the size of the system window.

!!! note

    The game is cropped starting from the top-left corner of the game.

![](/gdevelop5/all-features/annotation_2019-06-29_175540.png)

## Game resolution and window size

It's useful to distinguish two related concepts:

* The **game resolution** is the number of pixels the game draws (the game area). This is what the "Game resolution" action changes. Changing it does not change the size of the window — the game is simply stretched or scaled to fit.
* The **game window size** is the size, in pixels, of the actual window on screen. The "Game window size" action changes it, but this only works on Windows, macOS and Linux: games running in a browser or on a phone cannot resize their window. When changing the window size you can choose whether the game resolution should also be updated, or whether the game should be stretched/reduced to fit the new window.

## Resize mode

By default the game keeps a fixed resolution. The "Game resolution resize mode" action lets you adapt the resolution to the window:

* **Adapt width** updates the game width to fill the window or screen (the height stays fixed).
* **Adapt height** updates the game height instead (the width stays fixed).
* Leaving the mode empty disables resizing.

The "Automatically adapt the game resolution" action controls whether this adaptation happens continuously while the window or screen size changes (it only has an effect when a resize mode is set).

## Center the window

The "Center the game window on the screen" action moves the window to the middle of the screen. This only works on Windows, macOS and Linux — it has no effect in a browser or on iOS/Android.

## Window icon

The "Window's icon" action changes the icon shown for the game's window, using an image from the project's resources.

## Window title

The window title is the name of the window that is visible on the title bar (located at the top) of the window. The default title name is "Preview of ProjectName" during a preview.

By default, the game name is used for the executable name (on Windows, macOS and Linux), the app name (on Android and iOS) and the title bar (on Windows, macOS and Linux) (and the page title for HTML5 games). You can [learn more about it in game properties.](/gdevelop5/interface/project-manager/properties)

With the action to change the title, the title bar on Windows, macOS and Linux will be changed. Nothing will be visible on Android and iOS. For HTML5 games, the web page title will be changed.

## Reading sizes

A few expressions let you read the current dimensions, which is handy to position objects relative to the visible area or to react to different screens:

* `SceneWindowWidth()` and `SceneWindowHeight()` return the size of the scene window (the canvas for HTML5 games).
* `ScreenWidth()` and `ScreenHeight()` return the size of the whole screen (or the page for HTML5 games running in a browser).

## Reference

All actions, conditions and expressions are listed in [the window reference page](/gdevelop5/all-features/window/reference/).