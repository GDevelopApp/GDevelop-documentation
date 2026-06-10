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

Notice the black borders on all four sides of the window. The width of the borders is 100px.

## Game resolution and game window size

GDevelop makes a distinction between two different sizes:

* The **game resolution** is the number of pixels visible inside the game — the size of the game area itself. The "Width" field is the number of pixels in the horizontal direction, the "Height" field the number of pixels in the vertical direction.
* The **game window size** is the size of the actual system window in which the game is displayed.

The "Game resolution" action changes the game area size without touching the window. Lowering the resolution makes everything appear larger (fewer, bigger pixels stretched to fill the window); raising it makes everything appear smaller and sharper.

The "Game window size" action changes the size of the system window. It only works on platforms that support it (Windows, macOS and Linux): a game running in a browser or on a phone cannot resize its window. This action has an option to also update the game resolution to match the new window — if you leave it off, the game is stretched or shrunk to fit the window instead.

![](/gdevelop5/all-features/annotation_2019-06-29_175454.png)

### Adapting the resolution to the window

When the window or screen is resized (for example when the player resizes the window or rotates their phone), you can control how the game resolution reacts:

* The "Game resolution resize mode" action chooses whether the game **width** should be adapted, the **height** should be adapted, or whether the resolution should stay fixed (no automatic resizing).
* The "Automatically adapt the game resolution" action turns this automatic adaptation on or off. It only has an effect when a resize mode (width or height) is selected.

You can read the current sizes with expressions: `SceneWindowWidth()` and `SceneWindowHeight()` give the game area size (the canvas for HTML5 games), while `ScreenWidth()` and `ScreenHeight()` give the full screen size (or the page size for HTML5 games in a browser). These are useful to reposition UI objects so they stay on screen on any resolution.

## Center the window

The "Center the game window on the screen" action moves the window to the middle of the screen. Like resizing the window, this only works on Windows, macOS and Linux — it has no effect in a browser or on iOS/Android.

## Window icon

The "Window's icon" action replaces the icon of the game's window with one of the game's images, given by its resource name. This affects the desktop window (Windows, macOS, Linux).

## Window title

The window title is the name of the window that is visible on the title bar (located at the top) of the window. The default title name is "Preview of ProjectName" during a preview.

By default, the game name is used for the executable name (on Windows, macOS and Linux), the app name (on Android and iOS) and the title bar (on Windows, macOS and Linux) (and the page title for HTML5 games). You can [learn more about it in game properties.](/gdevelop5/interface/project-manager/properties)

With the action to change the title, the title bar on Windows, macOS and Linux will be changed. Nothing will be visible on Android and iOS. For HTML5 games, the web page title will be changed.

## Reference

All actions, conditions and expressions are listed in [the window reference page](/gdevelop5/all-features/window/reference/).