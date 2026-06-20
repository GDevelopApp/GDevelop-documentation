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

It's important to distinguish two different concepts:

* The **game resolution** is the number of pixels that the game renders (its internal "game area"). The "Width" field refers to the number of pixels in the horizontal direction while the "Height" field refers to the number of pixels in the vertical direction. Changing it with the "Game resolution" action does not change the size of the system window: the rendered image is stretched or reduced to fit the window.
* The **window size** is the size, in pixels, of the system window on the screen. The "Game window size" action only works on Windows, macOS and Linux: games running in browsers or on mobile phones can not change their window size.

When you set the game window size, you can also choose whether the game resolution should be updated to match it. If you do not update the resolution, the game is stretched or reduced to fit the new window size.

![](/gdevelop5/all-features/annotation_2019-06-29_175454.png)

![](/gdevelop5/all-features/annotation_2019-06-29_175540.png)

## Adapting the resolution to the screen

By default, when the window or screen size changes, the game keeps its resolution and the rendered image is scaled to fit. You can instead ask GDevelop to update the game resolution automatically so that the game area matches the available space:

* Use the **"Game resolution resize mode"** action with `adaptWidth` to update the game width to fit the window or screen (the height stays the same), or `adaptHeight` to do the opposite. An empty value disables this automatic resizing.
* Use the **"Automatically adapt the game resolution"** action to enable or disable the resolution update while the game is running. This only has an effect when a resize mode (adapt width or height) is set.

This is useful to display more or less of the game world depending on the player's screen, rather than simply scaling a fixed image.

## Window icon and centering

On Windows, macOS and Linux, the **"Window's icon"** action changes the icon of the game's window using an image of your project. The **"Center the game window on the screen"** action repositions the window in the middle of the screen. Neither has any effect when the game runs in a web browser or on iOS/Android.

## Window title

The window title is the name of the window that is visible on the title bar (located at the top) of the window. The default title name is "Preview of ProjectName" during a preview.

By default, the game name is used for the executable name (on Windows, macOS and Linux), the app name (on Android and iOS) and the title bar (on Windows, macOS and Linux) (and the page title for HTML5 games). You can [learn more about it in game properties.](/gdevelop5/interface/project-manager/properties)

With the action to change the title, the title bar on Windows, macOS and Linux will be changed. Nothing will be visible on Android and iOS. For HTML5 games, the web page title will be changed.

## Reading the screen and window size

Expressions are available to read sizes at runtime:

* `SceneWindowWidth()` and `SceneWindowHeight()` give the size of the area in which the scene is displayed (the canvas for HTML5 games).
* `ScreenWidth()` and `ScreenHeight()` give the size of the screen, or the size of the page for HTML5 games running in a browser.

These are useful to position UI elements relative to the actual display, or to detect when the player is on a small or large screen.

## Reference

All actions, conditions and expressions are listed in [the window reference page](/gdevelop5/all-features/window/reference/).