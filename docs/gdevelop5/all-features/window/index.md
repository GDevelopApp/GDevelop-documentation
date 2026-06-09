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

It's important to understand the difference between two related but distinct concepts:

* The **game resolution** is the size, in pixels, of the area that the game draws (the number of pixels visible in the game). This is what determines how much of the game world is shown.
* The **window size** is the size of the actual system window in which the game runs.

When the two don't match, the game is stretched or reduced to fit in the window.

The "Game resolution" action changes the resolution (the game area size) without changing the size of the window. The "Game window size" action changes the system window instead. Note that the window size can only be changed on desktop (Windows, macOS, Linux): games running in a browser or on mobile can not resize their window, but their game resolution can still be updated.

## Size of the window

Size of the window is the number of pixels visible in the game. The "Width" field refers to the number of pixels in the horizontal directions while the "Height" field refers to the number of pixels in the vertical direction.

While setting the size of the window, if you want to scale the current area to the set resolution, choose "NO". This will decrease the visual quality of the game if the size entered is lower than default and will increase the visual quality if the size entered is higher than the default size.

![](/gdevelop5/all-features/annotation_2019-06-29_175454.png)

If you want to scale the set resolution to the window area, choose "YES". This will crop the window and display only the number of pixels entered in the action. This does not affect the visual quality as long as the game is scaled up or down because of the size of the system window.

!!! note

    The game is cropped starting from the top-left corner of the game.

![](/gdevelop5/all-features/annotation_2019-06-29_175540.png)

## Adapting the resolution to the screen size

When the window or screen size changes (for example when the player resizes the window, or on different mobile screens), you can decide how the game resolution should react with the "Game resolution resize mode":

* **adaptWidth**: the game width is updated to fit the window or screen, keeping the height fixed.
* **adaptHeight**: the game height is updated to fit the window or screen, keeping the width fixed.
* Leave it empty to disable resizing entirely, so the game resolution stays the same and the game is stretched to fill the window.

The "Automatically adapt the game resolution" action controls whether the resolution is re-computed while the game is running when the window or screen size changes. This only has an effect when a resize mode (adaptWidth or adaptHeight) is set.

## Center the game window

The "Center the game window on the screen" action moves the game window to the center of the screen. This only works on Windows, macOS and Linux — it has no effect in a web browser or on iOS/Android.

## Window icon

The "Window's icon" action changes the icon of the game's window, using an image from the game's resources. This applies to the desktop window.

## Window title

The window title is the name of the window that is visible on the title bar (located at the top) of the window. The default title name is "Preview of ProjectName" during a preview.

By default, the game name is used for the executable name (on Windows, macOS and Linux), the app name (on Android and iOS) and the title bar (on Windows, macOS and Linux) (and the page title for HTML5 games). You can [learn more about it in game properties.](/gdevelop5/interface/project-manager/properties)

With the action to change the title, the title bar on Windows, macOS and Linux will be changed. Nothing will be visible on Android and iOS. For HTML5 games, the web page title will be changed.

## Reading the screen and window size

Several expressions let you read sizes at runtime, which is useful to position interface elements or to react to different screens:

* `SceneWindowWidth` and `SceneWindowHeight` return the size of the scene window (or the scene canvas for HTML5 games).
* `ScreenWidth` and `ScreenHeight` return the size of the whole screen (or the page for HTML5 games running in a browser).

## Reference

All actions, conditions and expressions are listed in [the window reference page](/gdevelop5/all-features/window/reference/).