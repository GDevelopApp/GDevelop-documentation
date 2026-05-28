---
title: Window and game area
---
# Window and game area

The window of the game is the area in which the game is displayed. It DOES NOT refer to the system window that includes the toolbar, title bar on the top and a frame on the other three sides.

## Fullscreen
The "De/activate fullscreen" action allows you to toggle the game between fullscreen on/off. When the window is in fullscreen, it will take up as much area as possible. You can control the action using the "YES" and "NO" actions.

The action also has a "Keep aspect ratio" option that only applies to HTML5 games (games running in a browser). When activated, black bars are added on the sides of the game so that its original aspect ratio is preserved. When deactivated, the game is stretched to fill the whole screen.

## Window margins
The margin of the window is the distance between the side of the window and the game window displayed. Shown below is the preview of a game with 100 px margins on all 4 sides.

![](/gdevelop5/all-features/annotation_2019-06-29_174027.png)

Notice the black borders on all for sides of the window. The width of the borders is 100px.

## Game window size and game resolution

GDevelop distinguishes between two different sizes:

- The **game window size** is the physical size of the window on the screen, in pixels.
- The **game resolution** is the number of pixels of the game area that is drawn (the logical viewport). If the resolution differs from the window size, the game image is stretched (or letterboxed) to fit.

The "Game window size" action changes the size of the window on Windows, macOS and Linux. It has no effect on games running in a browser or on mobile, since their window cannot be resized by the game. The action has a "Also update the game resolution" option:

- If "YES", the game resolution is updated to match the new window size. The game keeps its visual quality and more of the game world becomes visible (because more pixels are drawn).
- If "NO", the game resolution stays the same. The existing game area is stretched (or shrunk) to fit the new window size, which may make the image more pixelated or blurry.

![](/gdevelop5/all-features/annotation_2019-06-29_175454.png)

The "Game resolution" action changes only the resolution (the size of the rendered area), without changing the window size. This is useful for games that need a fixed logical viewport regardless of how the window is sized.

![](/gdevelop5/all-features/annotation_2019-06-29_175540.png)

## Game resolution resize mode

The "Game resolution resize mode" action controls how the game resolution adapts when the window or screen size changes (in particular, useful for HTML5 games where the page can be resized at any time):

- `adaptWidth`: the width of the game resolution is updated so the game fills the window horizontally. The aspect ratio is preserved.
- `adaptHeight`: the height of the game resolution is updated so the game fills the window vertically. The aspect ratio is preserved.
- (empty string): resizing is disabled. The game is stretched or letterboxed to fit the window, keeping the original resolution.

You can additionally use the "Automatically adapt the game resolution" action to enable or disable this automatic adaptation at runtime — it only has an effect if a resize mode (`adaptWidth` or `adaptHeight`) is set.

## Center the window

The "Center the game window on the screen" action moves the window to the center of the screen. This only works on Windows, macOS and Linux — it has no effect for games running in a browser, on Android or on iOS.

## Window title

The window title is the name of the window that is visible on the title bar (located at the top) of the window. The default title name is "Preview of ProjectName" during a preview.

By default, the game name is used for the executable name (on Windows, macOS and Linux), the app name (on Android and iOS) and the title bar (on Windows, macOS and Linux) (and the page title for HTML5 games). You can [learn more about it in game properties.](/gdevelop5/interface/project-manager/properties)

With the action to change the title, the title bar on Windows, macOS and Linux will be changed. Nothing will be visible on Android and iOS. For HTML5 games, the web page title will be changed.

## Reading window and screen sizes

A few expressions are available to read the current sizes:

- `SceneWindowWidth()` and `SceneWindowHeight()`: the current width and height of the **game resolution** (the logical drawing area). This is the size you most often want when positioning your UI or computing in-game coordinates.
- `ScreenWidth()` and `ScreenHeight()`: the width and height of the screen on native platforms, or of the containing page/canvas for HTML5 games running in a browser.

## Reference

All actions, conditions and expressions are listed in [the window reference page](/gdevelop5/all-features/window/reference/).