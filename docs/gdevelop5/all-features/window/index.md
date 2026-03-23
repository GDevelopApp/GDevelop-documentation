---
title: Window and game area
---
# Window and game area

The window of the game is the area in which the game is displayed. It DOES NOT refer to the system window that includes the toolbar, title bar on the top and a frame on the other three sides.

## Game resolution vs. window size

GDevelop distinguishes between two related but separate concepts:

- **Game resolution** — the logical canvas size of your game (e.g. 1280×720). This determines how much of the game world is visible.
- **Window size** — the physical size of the OS window (desktop only). Changing the window size without updating the game resolution will stretch or shrink the image to fit.

Use **Set game resolution** to change the logical canvas size without affecting the OS window. This works on all platforms including browsers and mobile. Use **Set game window size** when you specifically need to resize the OS window (desktop only).

The expressions `SceneWindowWidth()` and `SceneWindowHeight()` return the current game resolution dimensions. The expressions `ScreenWidth()` and `ScreenHeight()` return the size of the screen or browser page containing the game.

## Fullscreen

The **De/activate fullscreen** action toggles fullscreen on or off. The **Fullscreen activated?** condition lets you check the current state, which is useful for toggling a button between fullscreen and windowed mode.

On HTML5 games, an optional **keep aspect ratio** parameter (enabled by default) controls whether the game canvas keeps its aspect ratio when filling the screen. Disabling it will stretch the game to fill the entire screen.

## Adaptive resolution

For games that need to adapt to different screen sizes (mobile or responsive web), two actions work together:

- **Set game resolution resize mode** — controls how the game resolution adapts when the window or screen size changes. The modes are:
    - `adaptWidth` — the game width is adjusted so the game always fits in the screen vertically, showing more or less horizontal content.
    - `adaptHeight` — the game height is adjusted so the game always fits in the screen horizontally.
    - Empty string — disables automatic resizing.
- **Automatically adapt the game resolution** — enables or disables continuous adaptation as the window is resized at runtime. Only applies when a resize mode is set.

These settings can also be configured statically in the [project properties](/gdevelop5/interface/project-manager/properties) and changed at runtime if your game needs to switch between modes (for example, entering a cutscene at a fixed resolution).

## Window margins
The margin of the window is the distance between the side of the window and the game window displayed. Shown below is the preview of a game with 100 px margins on all 4 sides.

![](/gdevelop5/all-features/annotation_2019-06-29_174027.png)

Notice the black borders on all for sides of the window. The width of the borders is 100px.

## Size of the window

The **Set game window size** action changes the physical OS window dimensions. Changing the window size on browsers or mobile has no effect — use **Set game resolution** instead for those platforms.

While setting the size of the window, if you want to scale the current area to the set resolution, choose "NO". This will decrease the visual quality of the game if the size entered is lower than default and will increase the visual quality if the size entered is higher than the default size.

![](/gdevelop5/all-features/annotation_2019-06-29_175454.png)

If you want to scale the set resolution to the window area, choose "YES". This will crop the window and display only the number of pixels entered in the action. This does not affect the visual quality as long as the game is scaled up or down because of the size of the system window.

!!! note

    The game is cropped starting from the top-left corner of the game.

![](/gdevelop5/all-features/annotation_2019-06-29_175540.png)

## Center window

The **Center the game window on the screen** action repositions the OS window to the center of the screen. This only works on Windows, macOS and Linux — it has no effect in browsers or on mobile devices.

## Window title

The window title is the name of the window that is visible on the title bar (located at the top) of the window. The default title name is "Preview of ProjectName" during a preview.

By default, the game name is used for the executable name (on Windows, macOS and Linux), the app name (on Android and iOS) and the title bar (on Windows, macOS and Linux) (and the page title for HTML5 games). You can [learn more about it in game properties.](/gdevelop5/interface/project-manager/properties)

With the action to change the title, the title bar on Windows, macOS and Linux will be changed. Nothing will be visible on Android and iOS. For HTML5 games, the web page title will be changed.

The expression `WindowTitle()` returns the current title as a string, which can be useful if you need to restore it after a temporary change.

## Window icon

The **Window's icon** action changes the icon of the game window at runtime by specifying the name of an image resource loaded into the project. This works on desktop platforms.

## Reference

All actions, conditions and expressions are listed in [the window reference page](/gdevelop5/all-features/window/reference/).