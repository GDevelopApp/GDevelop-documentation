---
title: Window and game area
---
# Window and game area

The window of the game is the area in which the game is displayed. It DOES NOT refer to the system window that includes the toolbar, title bar on the top and a frame on the other three sides.

## Fullscreen
The "De/activate fullscreen" action allows you to toggle the game between fullscreen on/off. When the window is in fullscreen, it will take up as much area as possible. You can control the action using the "YES" and "NO" actions.

For HTML5 games, this action has a second parameter to **keep the aspect ratio** of the game (enabled by default). When enabled, the game will keep its original proportions inside the fullscreen window — black bars may appear on the sides or top/bottom to fill the empty space. Disable it to stretch the game over the entire screen.

The condition "Fullscreen activated?" returns whether the game is currently displayed in fullscreen.

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

## Window title

The window title is the name of the window that is visible on the title bar (located at the top) of the window. The default title name is "Preview of ProjectName" during a preview.

By default, the game name is used for the executable name (on Windows, macOS and Linux), the app name (on Android and iOS) and the title bar (on Windows, macOS and Linux) (and the page title for HTML5 games). You can [learn more about it in game properties.](/gdevelop5/interface/project-manager/properties)

With the action to change the title, the title bar on Windows, macOS and Linux will be changed. Nothing will be visible on Android and iOS. For HTML5 games, the web page title will be changed.

The expression `WindowTitle()` returns the current title of the window, which is useful to display or restore it later.

## Window icon

The "Window's icon" action lets you change the icon of the game window at runtime, using an image resource from your project. This only applies to desktop platforms (Windows, macOS, Linux) — on HTML5 games, the icon is set from the project's icons configuration and on mobile the launcher icon is used.

## Resize mode and adaptive resolution

Two actions control how the game adjusts when the player resizes the window (or rotates a phone):

- **Game resolution resize mode**: choose between `adaptWidth` (the game width is updated to fit the window), `adaptHeight` (the height is updated instead), or leave the option empty to keep the resolution fixed.
- **Automatically adapt the game resolution**: enables or disables continuous adaptation while the game is running. When disabled, the resolution is only set when the scene starts, and the game is stretched or letterboxed if the window changes afterwards.

These actions are useful for games that need to support arbitrary screen sizes (responsive UIs, mobile orientation changes) without committing to a single fixed resolution.

## Centering the game window

The "Center the game window on the screen" action repositions the system window in the middle of the user's screen. It only works on Windows, macOS and Linux (it has no effect in browsers or on iOS/Android).

## Screen and window expressions

Several expressions are available to read sizes:

- `SceneWindowWidth()` / `SceneWindowHeight()`: the size of the scene canvas in game pixels (the current game resolution).
- `ScreenWidth()` / `ScreenHeight()`: the inner size of the system window (or the browser page area for HTML5 games), in screen pixels.
- `ColorDepth()`: the color depth in bits per pixel.

## Reference

All actions, conditions and expressions are listed in [the window reference page](/gdevelop5/all-features/window/reference/).