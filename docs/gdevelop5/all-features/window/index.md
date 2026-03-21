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

## Window title

The window title is the name of the window that is visible on the title bar (located at the top) of the window. The default title name is "Preview of ProjectName" during a preview.

By default, the game name is used for the executable name (on Windows, macOS and Linux), the app name (on Android and iOS) and the title bar (on Windows, macOS and Linux) (and the page title for HTML5 games). You can [learn more about it in game properties.](/gdevelop5/interface/project-manager/properties)

With the action to change the title, the title bar on Windows, macOS and Linux will be changed. Nothing will be visible on Android and iOS. For HTML5 games, the web page title will be changed.

## Getting window and screen dimensions

Several expressions let you read the current size of the game area:

- `SceneWindowWidth()` / `SceneWindowHeight()` — the size (in pixels) of the game canvas currently displayed.
- `ScreenWidth()` / `ScreenHeight()` — the size of the browser page or the desktop window that contains the game. On a web build this returns the browser viewport size; on a desktop build it returns the application window size.

These are useful to position UI elements that must stay anchored to the edges of the screen, or to adapt the game to different screen sizes at runtime.

## Advanced Window features (desktop only)

The **Advanced Window** extension provides additional control over the application window on **Windows, macOS and Linux** desktop builds. It has no effect on web or mobile builds.

Some useful things you can do with it:

- **Resize and position the window** — move the window to specific screen coordinates or read its current position with the `WindowX()` / `WindowY()` expressions.
- **Control window state** — maximize, minimize, or restore the window; enable or disable the ability for the player to resize, move, minimize or close the window.
- **Window appearance** — set the window opacity (0 to 1), toggle the window shadow, or enable content protection to prevent the OS from including the window in screenshots and screen recordings.
- **Always on top** — keep the window floating above all other windows, for example for a mini game HUD or an overlay tool.
- **Kiosk mode** — lock the game in fullscreen and prevent the player from exiting, which is useful for public installations or kiosk terminals.
- **Flash / alert** — make the window flash in the taskbar to notify the player.

## Reference

All actions, conditions and expressions are listed in [the window reference page](/gdevelop5/all-features/window/reference/).