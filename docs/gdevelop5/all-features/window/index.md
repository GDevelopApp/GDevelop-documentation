---
title: Window and game area
---
# Window and game area

The window of the game is the area in which the game is displayed. It DOES NOT refer to the system window that includes the toolbar, title bar on the top and a frame on the other three sides.

## Game resolution and window size

It's important to distinguish two different things:

* The **game resolution** (also called the *game area*) is the number of pixels that the game renders. This is what your cameras and layers are drawn into. Changing it with the "Game resolution" action changes how much of the game world is visible (or how detailed the rendering is), but it does *not* change the size of the system window.
* The **game window size** is the size, in screen pixels, of the actual window on the desktop. The "Game window size" action only works on Windows, macOS and Linux: games running in a browser or on a mobile phone can't resize their window.

When the window size and the game resolution don't match, the game resolution is stretched (or shrunk) to fill the window, unless you have configured a resize mode (see below).

## Fullscreen
The "De/activate fullscreen" action allows you to toggle the game between fullscreen on/off. When the window is in fullscreen, it will take up as much area as possible. You can control the action using the "YES" and "NO" actions.

For HTML5 games, a second parameter lets you choose whether to **keep the aspect ratio** of the game (enabled by default). When disabled, the game is stretched to fill the whole screen, which can distort the image.

## Window margins
The margin of the window is the distance between the side of the window and the game window displayed. Shown below is the preview of a game with 100 px margins on all 4 sides.

![](/gdevelop5/all-features/annotation_2019-06-29_174027.png)

Notice the black borders on all for sides of the window. The width of the borders is 100px.

## Changing the game resolution

The "Game resolution" action sets the number of pixels rendered in the game. The "Width" field is the number of pixels in the horizontal direction, and the "Height" field is the number in the vertical direction.

![](/gdevelop5/all-features/annotation_2019-06-29_175454.png)

The "Game window size" action changes the size of the system window (on Windows, macOS and Linux only). When using it, the *"Also update the game resolution?"* parameter decides what happens to the rendering:

* Choose **YES** to also set the game resolution to the new window size. The image keeps its sharpness, but more or less of the game world becomes visible.
* Choose **NO** to keep the current game resolution and stretch it to fit the new window. The game world stays the same, but the image may look scaled.

![](/gdevelop5/all-features/annotation_2019-06-29_175540.png)

## Automatically adapting the resolution to the window

By default, when the window or screen is resized, the game resolution is stretched to keep the original aspect ratio (which can add black bars on the sides). If you instead want the game to show *more* of the world as the window grows, use the "Game resolution resize mode" action:

* **Adapt width** keeps the height fixed and updates the game width to match the window.
* **Adapt height** keeps the width fixed and updates the game height to match the window.
* An *empty* value disables automatic resizing.

The "Automatically adapt the game resolution" action turns this behavior on or off while the game is running.

## Window title

The window title is the name of the window that is visible on the title bar (located at the top) of the window. The default title name is "Preview of ProjectName" during a preview.

By default, the game name is used for the executable name (on Windows, macOS and Linux), the app name (on Android and iOS) and the title bar (on Windows, macOS and Linux) (and the page title for HTML5 games). You can [learn more about it in game properties.](/gdevelop5/interface/project-manager/properties)

With the action to change the title, the title bar on Windows, macOS and Linux will be changed. Nothing will be visible on Android and iOS. For HTML5 games, the web page title will be changed.

## Centering the window

The "Center the game window on the screen" action repositions the window in the middle of the screen. This only works on Windows, macOS and Linux — it has no effect when the game runs in a web browser or on iOS/Android.

## Reading the window and screen size

A few expressions let you adapt your game to the current display:

* `SceneWindowWidth()` and `SceneWindowHeight()` return the size of the game window (or the canvas for HTML5 games).
* `ScreenWidth()` and `ScreenHeight()` return the size of the whole screen (or the page for HTML5 games running in a browser).

These are useful, for example, to position UI elements relative to the edges of the display.

## Reference

All actions, conditions and expressions are listed in [the window reference page](/gdevelop5/all-features/window/reference/).