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

## Game window size vs. game resolution

GDevelop distinguishes two different concepts:

- The **game window size** is the size, in pixels, of the actual window in which the game is displayed (on desktop platforms only — browsers and mobile devices control the window themselves).
- The **game resolution** is the number of in-game pixels visible on screen. This is the value used by all coordinates in your events (object positions, camera, etc...). If your resolution is 800×600, an object placed at X=400 sits halfway across the visible area, regardless of the actual window size.

When the window and resolution differ, the game is stretched or scaled to fill the window. The resolution determines how detailed the rendering is, while the window size determines how large the game appears on the player's screen.

## Size of the window

The "Game window size" action changes the size of the system window on desktop. It has an additional option to also update the game resolution at the same time:

- If you choose "**NO**", the game keeps its current resolution and the rendering is stretched (or shrunk) to fill the new window. Useful when you want to keep the same gameplay area but show the game bigger or smaller.
- If you choose "**YES**", the game resolution is changed to match the window. This means more (or fewer) in-game pixels become visible, effectively showing more or less of the scene.

![](/gdevelop5/all-features/annotation_2019-06-29_175454.png)

!!! note

    When the resolution is changed but the camera stays the same, the game is cropped starting from the top-left corner of the game.

![](/gdevelop5/all-features/annotation_2019-06-29_175540.png)

The action "**Center the game window on the screen**" repositions the window in the middle of the player's screen. This only works on Windows, macOS and Linux.

## Adapting the game resolution to the window

When the player resizes the window (or rotates a mobile device), you can choose how the game responds. Use the action "**Game resolution resize mode**":

- **"adaptWidth"**: the resolution width is recomputed to match the window aspect ratio, while the height stays the same. The player will see more or less of the scene horizontally.
- **"adaptHeight"**: the height is recomputed instead. The player will see more or less vertically.
- Leave the resize mode **empty** to keep the resolution fixed — the game will be stretched or letterboxed to fit the window.

The action "**Automatically adapt the game resolution**" enables or disables this behavior while the game is running. It only has an effect if a resize mode (`adaptWidth` or `adaptHeight`) is set.

!!! tip

    These options can also be configured once for the whole game in the [project properties](/gdevelop5/interface/project-manager/properties), so you don't usually need to call these actions unless you want to change behavior dynamically (for example, switching to a fixed resolution during a cutscene).

## Window title

The window title is the name of the window that is visible on the title bar (located at the top) of the window. The default title name is "Preview of ProjectName" during a preview.

By default, the game name is used for the executable name (on Windows, macOS and Linux), the app name (on Android and iOS) and the title bar (on Windows, macOS and Linux) (and the page title for HTML5 games). You can [learn more about it in game properties.](/gdevelop5/interface/project-manager/properties)

With the action to change the title, the title bar on Windows, macOS and Linux will be changed. Nothing will be visible on Android and iOS. For HTML5 games, the web page title will be changed.

## Window icon

The "**Window's icon**" action replaces the icon shown in the window's title bar and in the taskbar. Pass the name of an image resource from your project. This only affects the running window on Windows, macOS and Linux — to change the executable icon used in the player's file explorer or the icon shipped with mobile/web exports, configure the [project icons](/gdevelop5/interface/project-manager/icons) instead.

## Reading window and screen sizes

A few expressions are available to read the current sizes from your events:

- `SceneWindowWidth()` / `SceneWindowHeight()`: the current **game resolution** (the size of the game canvas in in-game pixels). Use these to position UI elements relative to the visible area — for example, anchoring a HUD to the bottom-right corner.
- `ScreenWidth()` / `ScreenHeight()`: the size of the actual **system window** (or the size of the browser page for HTML5 games). Useful to detect if the player is on a small screen or to adapt rendering to the available space.
- `WindowTitle()`: the current title of the window.

## Reference

All actions, conditions and expressions are listed in [the window reference page](/gdevelop5/all-features/window/reference/).