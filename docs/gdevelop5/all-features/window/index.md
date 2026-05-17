---
title: Window and game area
---
# Window and game area

The window of the game is the area in which the game is displayed. It DOES NOT refer to the system window that includes the toolbar, title bar on the top and a frame on the other three sides.

## Fullscreen
The "De/activate fullscreen" action allows you to toggle the game between fullscreen on/off. When the window is in fullscreen, it will take up as much area as possible. You can control the action using the "YES" and "NO" actions.

A second parameter "Keep aspect ratio" is available for HTML5 games: when enabled, black bars are added around the game (letterboxing/pillarboxing) to preserve the original aspect ratio when going fullscreen.

## Window margins
The margin of the window is the distance between the side of the window and the game window displayed. Shown below is the preview of a game with 100 px margins on all 4 sides.

![](/gdevelop5/all-features/annotation_2019-06-29_174027.png)

Notice the black borders on all for sides of the window. The width of the borders is 100px.

## Size of the window

GDevelop distinguishes between two different sizes:

- **Game window size**: the size, in pixels, of the system window in which the game is displayed (Windows, macOS, Linux). On mobile and in the browser, the window size is controlled by the operating system or the page — it cannot be changed by the game.
- **Game resolution**: the number of pixels visible inside the game area (the "virtual" canvas the game is drawn on). Changing the resolution does not change the window size: instead, the game area is either stretched or scaled to fit the window.

Use the **Game window size** action to resize the system window on desktop. The action has an additional "Also update the game resolution?" option:

- **YES**: the game resolution is updated to match the new window size — every pixel of the game is drawn 1:1 with a screen pixel.
- **NO**: only the window changes, and the game is stretched or shrunk to fit. Use this if you want a fixed-resolution game (for pixel art for example) and only want the window to grow.

Use the **Game resolution** action to change only the resolution. This is useful to switch between resolution presets without resizing the player's window.

![](/gdevelop5/all-features/annotation_2019-06-29_175454.png)

![](/gdevelop5/all-features/annotation_2019-06-29_175540.png)

### Adapting the resolution to the window

Two related actions control whether GDevelop automatically updates the game resolution as the window or screen size changes:

- **Game resolution resize mode**: choose `"adaptWidth"` to update the game width so that the game fills the window horizontally (with no black bars on the sides), `"adaptHeight"` to do the same on the vertical axis, or leave it empty to keep a fixed resolution.
- **Automatically adapt the game resolution**: enable this to keep the game resolution in sync with window/screen size changes during the game (e.g. when the player resizes the window or rotates their phone). When disabled, the resolution is only set when explicitly changed by an action.

### Center the window on the screen

The **Center the game window on the screen** action centers the game window. It only works on Windows, macOS and Linux — not in browser or on mobile.

### Window icon

Use the **Window's icon** action to change the icon shown by the operating system for the game window. Pass the resource name of an image. Note that the icon shown on the player's desktop shortcut, taskbar, or app store listing is set during export and not affected by this action.

## Window title

The window title is the name of the window that is visible on the title bar (located at the top) of the window. The default title name is "Preview of ProjectName" during a preview.

By default, the game name is used for the executable name (on Windows, macOS and Linux), the app name (on Android and iOS) and the title bar (on Windows, macOS and Linux) (and the page title for HTML5 games). You can [learn more about it in game properties.](/gdevelop5/interface/project-manager/properties)

With the action to change the title, the title bar on Windows, macOS and Linux will be changed. Nothing will be visible on Android and iOS. For HTML5 games, the web page title will be changed.

You can read back the current title with the `WindowTitle()` expression.

## Reading screen and window dimensions

A few expressions are provided to read the current sizes:

- `SceneWindowWidth()` / `SceneWindowHeight()`: size, in pixels, of the area where the game scene is drawn (the canvas for HTML5 games).
- `ScreenWidth()` / `ScreenHeight()`: size of the player's screen (or page, for browser games).
- `ColorDepth()`: color depth, in bits, of the screen.

These are commonly used together with the "Game resolution" action to react to the player's screen, or to position UI elements relative to the game area regardless of the current resolution.

## Reference

All actions, conditions and expressions are listed in [the window reference page](/gdevelop5/all-features/window/reference/).