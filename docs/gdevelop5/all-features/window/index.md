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

!!! note

    Changing the game window size only works on desktop platforms (Windows, macOS, Linux). Games running in a browser or on mobile cannot resize their window, but the game resolution can still be updated.

## Game resolution vs window size

These two concepts are distinct and often confused:

- The **game resolution** is the number of pixels the game internally renders. Use the action **"Game resolution"** to change it without resizing the window — useful for example to adapt the rendering to a low-end device.
- The **game window size** is the size of the visible area on screen. On desktop, you can change it independently from the resolution. On HTML5 and mobile, the window size is decided by the browser/device.

### Game resolution resize mode

Use the **"Game resolution resize mode"** action to control how the game resolution adapts to the window or screen size:

- `adaptWidth`: the game width is automatically updated to fill the window or screen.
- `adaptHeight`: the game height is automatically updated to fill the window or screen.
- Leave empty to disable automatic resizing (the game resolution stays fixed and is stretched to fit).

This is paired with the **"Automatically adapt the game resolution"** action, which decides if the resolution should be re-adapted at runtime (when the player resizes the window or rotates the device). If turned off, the resolution is only adjusted once when the game starts.

## Centering the window

The **"Center the game window on the screen"** action moves the game window to the center of the user's screen. This only works on Windows, macOS and Linux (it has no effect when the game runs in a browser or on iOS/Android).

## Window icon

Use the **"Window's icon"** action to change the icon shown in the title bar and taskbar. Pass the name of an image resource already included in your project. This applies to desktop builds; on mobile and HTML5 the icon is determined by the build/page settings instead.

## Reading screen and window dimensions

A few expressions let you query sizes at runtime:

- `SceneWindowWidth()` / `SceneWindowHeight()`: the current game resolution (the size of the rendering canvas).
- `ScreenWidth()` / `ScreenHeight()`: the size of the screen or, for HTML5 games in a browser, the size of the page.

Use the scene window expressions for in-game logic like positioning HUD elements, and the screen expressions when you need to know how large the user's display is.

## Window title

The window title is the name of the window that is visible on the title bar (located at the top) of the window. The default title name is "Preview of ProjectName" during a preview.

By default, the game name is used for the executable name (on Windows, macOS and Linux), the app name (on Android and iOS) and the title bar (on Windows, macOS and Linux) (and the page title for HTML5 games). You can [learn more about it in game properties.](/gdevelop5/interface/project-manager/properties)

With the action to change the title, the title bar on Windows, macOS and Linux will be changed. Nothing will be visible on Android and iOS. For HTML5 games, the web page title will be changed.

## Reference

All actions, conditions and expressions are listed in [the window reference page](/gdevelop5/all-features/window/reference/).