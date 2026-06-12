---
title: Window and game area
---
# Window and game area

The window of the game is the area in which the game is displayed. It DOES NOT refer to the system window that includes the toolbar, title bar on the top and a frame on the other three sides.

## Fullscreen
The "De/activate fullscreen" action allows you to toggle the game between fullscreen on/off. When the window is in fullscreen, it will take up as much area as possible. You can control the action using the "YES" and "NO" actions.

For HTML5 games, a second parameter lets you choose whether to keep the game's aspect ratio (on by default). If you turn it off, the game is stretched to fill the whole screen, which may distort it.

The "Fullscreen activated?" condition lets you check whether the game is currently displayed in fullscreen.

## Window margins
The margin of the window is the distance between the side of the window and the game window displayed. Shown below is the preview of a game with 100 px margins on all 4 sides.

![](/gdevelop5/all-features/annotation_2019-06-29_174027.png)

Notice the black borders on all for sides of the window. The width of the borders is 100px.

## Game resolution and window size

It's important to understand the difference between two related concepts:

* The **game resolution** is the number of pixels visible in the game (the size of the game area itself). The "Game resolution" action changes it without touching the system window: the game is then scaled up or down to fit in the window.
* The **game window size** is the size of the system window on the screen. The "Game window size" action only works on Windows, macOS and Linux — games running in a browser or on mobile cannot resize their window. This action also offers an option to update the game resolution at the same time. If you leave it off, the game keeps its resolution and is simply stretched or reduced to fit the new window size.

![](/gdevelop5/all-features/annotation_2019-06-29_175454.png)

![](/gdevelop5/all-features/annotation_2019-06-29_175540.png)

## Resize mode

By default, when the window or the screen size changes, the game resolution is kept and the game is scaled to fit. The "Game resolution resize mode" action lets you change this behavior:

* **Adapt width**: the game width is updated to match the window or screen, keeping the height fixed.
* **Adapt height**: the game height is updated to match the window or screen, keeping the width fixed.
* **Empty (no resizing)**: disables automatic resizing of the resolution.

The "Automatically adapt the game resolution" action controls whether this adaptation keeps happening while the game runs (and not only once when the game starts). It only has an effect when the resize mode is set to adapt the width or the height.

## Centering the window

The "Center the game window on the screen" action moves the window to the center of the screen. Like the window size action, it only works on Windows, macOS and Linux, not in a browser or on iOS/Android.

## Window icon

The "Window's icon" action changes the icon shown for the game's window, using one of the images of your project.

## Window title

The window title is the name of the window that is visible on the title bar (located at the top) of the window. The default title name is "Preview of ProjectName" during a preview.

By default, the game name is used for the executable name (on Windows, macOS and Linux), the app name (on Android and iOS) and the title bar (on Windows, macOS and Linux) (and the page title for HTML5 games). You can [learn more about it in game properties.](/gdevelop5/interface/project-manager/properties)

With the action to change the title, the title bar on Windows, macOS and Linux will be changed. Nothing will be visible on Android and iOS. For HTML5 games, the web page title will be changed.

## Reading sizes

Two pairs of expressions let you read sizes at runtime, and it's important not to confuse them:

* `SceneWindowWidth()` and `SceneWindowHeight()` return the size of the game area (the canvas for HTML5 games).
* `ScreenWidth()` and `ScreenHeight()` return the size of the whole screen (or the page for HTML5 games running in a browser).

## Reference

All actions, conditions and expressions are listed in [the window reference page](/gdevelop5/all-features/window/reference/).