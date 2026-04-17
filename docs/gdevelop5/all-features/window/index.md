---
title: Window and game area
---
# Window and game area

The window of the game is the area in which the game is displayed. It DOES NOT refer to the system window that includes the toolbar, title bar on the top and a frame on the other three sides.

## Fullscreen

The **De/activate fullscreen** action toggles the game into or out of fullscreen. An **Is fullscreen?** condition lets you check the current state, for example to update a settings button icon.

On HTML5 games you can choose whether to keep the aspect ratio when entering fullscreen (the default is yes, which adds letterboxing rather than stretching).

## Reading the window and screen size

Two pairs of expressions are available for reading dimensions at runtime:

- `SceneWindowWidth()` / `SceneWindowHeight()` — the size of the game canvas in pixels. This reflects the current **game resolution**, which may differ from the actual screen if the window has been resized or if a resize mode is active.
- `ScreenWidth()` / `ScreenHeight()` — the size of the full screen (or browser page for HTML5 games). Use these to detect the player's display size and adapt UI layouts accordingly.

## Game resolution and resize mode

**Game resolution** is the number of game-world pixels the game renders. Changing it with the **Set game resolution** action affects how much of the game world is visible without changing the physical size of the window.

The **Game resolution resize mode** action controls what happens when the window or screen size changes:

- **adaptWidth** — the game resolution width is adjusted so the full height is always visible.
- **adaptHeight** — the game resolution height is adjusted so the full width is always visible.
- Leaving this empty disables automatic adaptation.

Pair this with the **Automatically adapt the game resolution** action (set to Yes) to apply the resize mode continuously as the browser window is resized — useful for responsive web games.

## Window size (desktop only)

The **Set game window size** action resizes the system window. This only works on desktop (Windows, macOS, Linux); it has no effect in browsers or on mobile. You can also use the **Center the game window** action to center the window on the screen.

## Window margins
The margin of the window is the distance between the side of the window and the game canvas. Setting margins adds black borders around the game area.

## Window title

Changing the title updates the title bar on desktop (Windows, macOS, Linux) and the browser tab title for HTML5 games. On Android and iOS, no title bar is visible.

By default the game name set in [project properties](/gdevelop5/interface/project-manager/properties) is used as the title. The `WindowTitle()` string expression lets you read the current title at runtime.

## Reference

All actions, conditions and expressions are listed in [the window reference page](/gdevelop5/all-features/window/reference/).