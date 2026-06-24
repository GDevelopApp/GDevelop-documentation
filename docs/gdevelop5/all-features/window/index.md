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

It's important to distinguish two related but different concepts:

* The **game resolution** is the number of pixels rendered by the game — in other words, the size of the game area. The "Width" field is the number of pixels in the horizontal direction, and the "Height" field the number in the vertical direction. This is what the **"Game resolution"** action changes.
* The **game window size** is the size of the actual system window in which the game is shown. This is what the **"Game window size"** action changes.

Changing the game window size only works on Windows, macOS and Linux. Games running in a browser or on mobile can't change their window size, but their game resolution can still be updated.

When you change the game window size, the "Also update the game resolution?" parameter controls what happens to the game area:

* Choose **"NO"** to keep the resolution unchanged and stretch (or shrink) the rendered game to fill the new window. The game keeps the same number of pixels, so this can blur or distort the image if the window's proportions differ from the resolution.
* Choose **"YES"** to also set the game resolution to the new window size. The game then renders exactly that many pixels, keeping the image sharp.

### Resize mode

When the player resizes the window (or the page, for HTML5 games), the **"Game resolution resize mode"** action decides how the game reacts:

* **Adapt width**: the game width is updated to fill the window, keeping the height fixed.
* **Adapt height**: the game height is updated to fill the window, keeping the width fixed.
* **No automatic resizing** (empty value): the game resolution stays as it is and the rendered game is scaled to fit the window.

The **"Automatically adapt the game resolution"** action turns this automatic adaptation on or off while the game runs. It only has an effect when the resize mode is set to adapt the width or the height.

## Window title

The window title is the name of the window that is visible on the title bar (located at the top) of the window. The default title name is "Preview of ProjectName" during a preview.

By default, the game name is used for the executable name (on Windows, macOS and Linux), the app name (on Android and iOS) and the title bar (on Windows, macOS and Linux) (and the page title for HTML5 games). You can [learn more about it in game properties.](/gdevelop5/interface/project-manager/properties)

With the action to change the title, the title bar on Windows, macOS and Linux will be changed. Nothing will be visible on Android and iOS. For HTML5 games, the web page title will be changed.

## Window position and icon

On Windows, macOS and Linux, the **"Center the game window on the screen"** action moves the window so it is centered on the player's screen. It has no effect in a web browser or on iOS/Android.

The **"Window's icon"** action changes the icon shown for the game's window, using one of the game's images.

## Reading the window and screen size

A few expressions let you read the current dimensions, which is useful to position or scale objects relative to the game area:

* `SceneWindowWidth()` and `SceneWindowHeight()`: the width and height of the game resolution (the game area).
* `ScreenWidth()` and `ScreenHeight()`: the width and height of the screen (or of the page for HTML5 games running in a browser).

## Reference

All actions, conditions and expressions are listed in [the window reference page](/gdevelop5/all-features/window/reference/).