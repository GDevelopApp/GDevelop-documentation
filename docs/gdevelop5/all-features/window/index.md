---
title: Window and game area
---
# Window and game area

The window of the game is the area in which the game is displayed. It DOES NOT refer to the system window that includes the toolbar, title bar on the top and a frame on the other three sides.

## Game resolution vs window size

It is important to distinguish two concepts:

- **Game resolution**: the number of pixels the game is drawn at internally. This is the size of the scene "camera". Changing it affects what the player sees of the scene (more or less area) and the visual quality.
- **Window size**: the size of the system window (or the canvas, for games running in a browser) that displays the game. This area can be larger or smaller than the resolution — the engine will scale the rendered image accordingly.

Both can be changed independently with the available actions. On browsers and mobile devices, the window size cannot be changed by the game (it is controlled by the device or the page), but the game resolution always can.

## Fullscreen
The "De/activate fullscreen" action allows you to toggle the game between fullscreen on/off. When the window is in fullscreen, it will take up as much area as possible. You can control the action using the "YES" and "NO" actions.

The optional **"Keep aspect ratio"** parameter only applies to HTML5 games: when enabled, the game keeps its original aspect ratio and black bars are added if needed; when disabled, the game stretches to fill the entire screen.

## Window margins
The margin of the window is the distance between the side of the window and the game window displayed. Shown below is the preview of a game with 100 px margins on all 4 sides.

![](/gdevelop5/all-features/annotation_2019-06-29_174027.png)

Notice the black borders on all for sides of the window. The width of the borders is 100px.

## Size of the window

The **"Game window size"** action changes the size, in pixels, of the system window on desktop platforms. It does not work on browsers or mobile, where the available space is controlled by the device or page.

The action also has an **"Also update the game resolution"** option:

- Choose **YES** to also change the game resolution to the new size. The game will be drawn at exactly that pixel size with no scaling.
- Choose **NO** to keep the current game resolution and let the engine stretch or reduce it to fit the new window. This is the right choice if you want to keep a fixed art resolution while letting the player resize the window.

![](/gdevelop5/all-features/annotation_2019-06-29_175454.png)

![](/gdevelop5/all-features/annotation_2019-06-29_175540.png)

If you want to change the game area without touching the window, use the dedicated **"Game resolution"** action instead, which only changes the resolution.

## Adapting the resolution to the screen

When a game is played on screens with very different sizes (for example, different mobile devices or browser windows), you can let the game resolution follow the available area instead of staying fixed.

Use the **"Game resolution resize mode"** action to choose how the game adapts:

- **"adaptWidth"**: the game **width** follows the window or screen width. The height of the game area stays the same as the project setting.
- **"adaptHeight"**: the game **height** follows the window or screen height. The width of the game area stays the same.
- **Empty value**: no automatic adaptation — the game is stretched or letterboxed to fit the window.

By default, this only applies at game start. To keep the resolution updated continuously as the window or screen is resized (for example when the player rotates a phone or resizes a browser window), use the **"Automatically adapt the game resolution"** action and set it to YES.

## Center the game window

The **"Center the game window on the screen"** action moves the system window to the middle of the screen. This only has an effect on Windows, macOS and Linux — it does nothing for games running in a browser or on mobile.

## Window icon

The **"Window's icon"** action changes the icon shown in the title bar and the taskbar for desktop builds, using an image from your project resources. This is different from the [game icons set in the project properties](/gdevelop5/interface/project-manager/icons), which are used when packaging the game.

## Window title

The window title is the name of the window that is visible on the title bar (located at the top) of the window. The default title name is "Preview of ProjectName" during a preview.

By default, the game name is used for the executable name (on Windows, macOS and Linux), the app name (on Android and iOS) and the title bar (on Windows, macOS and Linux) (and the page title for HTML5 games). You can [learn more about it in game properties.](/gdevelop5/interface/project-manager/properties)

With the action to change the title, the title bar on Windows, macOS and Linux will be changed. Nothing will be visible on Android and iOS. For HTML5 games, the web page title will be changed.

## Reading window and screen dimensions

Several expressions let you read the current dimensions at runtime:

- **`SceneWindowWidth()`** / **`SceneWindowHeight()`**: the size of the area where the scene is being drawn (the canvas, for HTML5 games).
- **`ScreenWidth()`** / **`ScreenHeight()`**: the size of the whole screen (or the page, for HTML5 games in a browser).

These are useful for positioning UI elements based on the actual available space — for example, anchoring a button to the bottom-right corner regardless of the screen size.

## Reference

All actions, conditions and expressions are listed in [the window reference page](/gdevelop5/all-features/window/reference/).