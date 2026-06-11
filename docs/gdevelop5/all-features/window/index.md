---
title: Window and game area
---
# Window and game area

The window of the game is the area in which the game is displayed. It DOES NOT refer to the system window that includes the toolbar, title bar on the top and a frame on the other three sides.

## Fullscreen
The "De/activate fullscreen" action allows you to toggle the game between fullscreen on/off. When the window is in fullscreen, it will take up as much area as possible. You can control the action using the "YES" and "NO" actions.

A second parameter, "Keep aspect ratio", only applies to HTML5 games (games running in a browser or exported for web). When set to yes (the default), black borders are added if needed so the game keeps its proportions instead of being stretched to fill the whole screen.

The "Fullscreen activated?" condition lets you check whether the game is currently displayed in fullscreen.

## Window margins
The margin of the window is the distance between the side of the window and the game window displayed. Shown below is the preview of a game with 100 px margins on all 4 sides.

![](/gdevelop5/all-features/annotation_2019-06-29_174027.png)

Notice the black borders on all for sides of the window. The width of the borders is 100px.

## Game resolution and window size

GDevelop distinguishes two different sizes:

* The **game resolution** is the number of pixels visible in the game area (the "Width" field is the horizontal direction, "Height" the vertical one). This is what your cameras and layouts are sized against.
* The **window size** is the size, in pixels, of the system window that displays the game.

The "Game resolution" action changes the resolution without touching the window: the game area is rendered at the new size and then scaled to fit the existing window.

![](/gdevelop5/all-features/annotation_2019-06-29_175454.png)

The "Game window size" action changes the size of the system window. It only works on Windows, macOS and Linux — games running in a browser or on mobile phones can not resize their window (the resolution can still be changed). Its last parameter, "Also update the game resolution", controls what happens to the rendered area:

* Choose **YES** to also set the resolution to the new window size. The game is rendered at the new pixel count and not stretched.
* Choose **NO** to keep the current resolution: the game is stretched or shrunk to fill the resized window.

![](/gdevelop5/all-features/annotation_2019-06-29_175540.png)

## Resolution resize mode

When the window or the screen is resized (for example when the player resizes the window or rotates their phone), the "Game resolution resize mode" action controls how the resolution reacts:

* **adaptWidth** updates the game width to fit the window or screen, keeping the height.
* **adaptHeight** updates the game height instead, keeping the width.
* Leave it **empty** to disable automatic resizing.

The "Automatically adapt the game resolution" action enables or disables this behavior at runtime. It only has an effect when the resize mode is set to adapt the width or the height.

## Center the game window

The "Center the game window on the screen" action moves the window to the center of the screen. This only works on Windows, macOS and Linux — not in a web browser or on iOS/Android.

## Window icon

The "Window's icon" action changes the icon shown for the game's window, using the name of an image resource from your project.

## Window title

The window title is the name of the window that is visible on the title bar (located at the top) of the window. The default title name is "Preview of ProjectName" during a preview.

By default, the game name is used for the executable name (on Windows, macOS and Linux), the app name (on Android and iOS) and the title bar (on Windows, macOS and Linux) (and the page title for HTML5 games). You can [learn more about it in game properties.](/gdevelop5/interface/project-manager/properties)

With the action to change the title, the title bar on Windows, macOS and Linux will be changed. Nothing will be visible on Android and iOS. For HTML5 games, the web page title will be changed.

## Reading sizes with expressions

A few expressions let you read sizes while the game runs:

* `SceneWindowWidth()` and `SceneWindowHeight()` return the size of the area in which the scene is displayed (the canvas for HTML5 games).
* `ScreenWidth()` and `ScreenHeight()` return the size of the whole screen (or the page, for HTML5 games running in a browser).

These are useful to position interface elements relative to the available area, or to compute scaling.

## Reference

All actions, conditions and expressions are listed in [the window reference page](/gdevelop5/all-features/window/reference/).