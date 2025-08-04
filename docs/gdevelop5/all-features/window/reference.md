# Game window and resolution Reference

Actions and conditions to manipulate the game window or change how the game is resized according to the screen size. Depending on the platform on which the game is running, not all of these features can be applied.
Also contains expressions to read the screen size. [Read more explanations about it.](/gdevelop5/all-features/window)

## Actions

**Center the game window on the screen**  
This action centers the game window on the screen. This only works on Windows, macOS and Linux (not when the game is executed in a web-browser or on iOS/Android).

**Automatically adapt the game resolution**  
Set if the game resolution should be automatically adapted when the game window or screen size change. This will only be the case if the game resolution resize mode is configured to adapt the width or the height of the game.

**De/activate fullscreen**  
This action activates or deactivates fullscreen.

**Game resolution resize mode**  
Set if the width or the height of the game resolution should be changed to fit the game window - or if the game resolution should not be updated automatically.

**Game resolution**  
Changes the resolution of the game, effectively changing the game area size. This won't change the size of the window in which the game is running.

**Window's margins**  
This action changes the margins, in pixels, between the game frame and the window borders.

**Game window size**  
Changes the size of the game window. Note that this will only work on platform supporting this operation: games running in browsers or on mobile phones can not update their window size. Game resolution can still be updated.

**Window's title**  
This action changes the title of the game's window.

## Conditions

**Fullscreen activated?**  
Check if the game is currently in fullscreen.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `SceneWindowHeight()` | Height of the scene window (or scene canvas for HTML5 games) ||
| `SceneWindowWidth()` | Width of the scene window (or scene canvas for HTML5 games) ||
| `ScreenHeight()` | Height of the screen (or the page for HTML5 games in browser) ||
| `ScreenWidth()` | Width of the screen (or the page for HTML5 games in browser) ||
| `WindowTitle()` | Window's title ||


---

The Game window and resolution extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **Game window and resolution** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).