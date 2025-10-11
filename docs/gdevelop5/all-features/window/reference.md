# Game window and resolution Reference

Actions and conditions to manipulate the game window or change how the game is resized according to the screen size. Depending on the platform on which the game is running, not all of these features can be applied.
Also contains expressions to read the screen size. [Read more explanations about it.](/gdevelop5/all-features/window)

## Actions

**Center the game window on the screen**  
This action centers the game window on the screen. This only works on Windows, macOS and Linux (not when the game is executed in a web-browser or on iOS/Android).

??? quote "See parameters"



    > Technical note: parameter 0 are internal parameters handled by GDevelop.

**Automatically adapt the game resolution**  
Set if the game resolution should be automatically adapted when the game window or screen size change. This will only be the case if the game resolution resize mode is configured to adapt the width or the height of the game.

??? quote "See parameters"

    - Parameter 1 (❓ Yes or No): Update resolution during the game to fit the screen or window size?

    > Technical note: parameter 0 are internal parameters handled by GDevelop.

**De/activate fullscreen**  
This action activates or deactivates fullscreen.

??? quote "See parameters"

    - Parameter 1 (❓ Yes or No): Activate fullscreen
    - Parameter 2 (❓ Yes or No): Keep aspect ratio (HTML5 games only, yes by default)

    > Technical note: parameter 0 are internal parameters handled by GDevelop.

**Game resolution resize mode**  
Set if the width or the height of the game resolution should be changed to fit the game window - or if the game resolution should not be updated automatically.

??? quote "See parameters"

    - Parameter 1 (🔤 String): Resize mode
      Empty to disable resizing. "adaptWidth" will update the game width to fit in the window or screen. "adaptHeight" will do the same but with the game height. (one of: "adaptWidth", "adaptHeight", "")

    > Technical note: parameter 0 are internal parameters handled by GDevelop.

**Game resolution**  
Changes the resolution of the game, effectively changing the game area size. This won't change the size of the window in which the game is running.

??? quote "See parameters"

    - Parameter 1 (🔢 Number): Width
    - Parameter 2 (🔢 Number): Height

    > Technical note: parameter 0 are internal parameters handled by GDevelop.

**Window's margins**  
This action changes the margins, in pixels, between the game frame and the window borders.

??? quote "See parameters"

    - Parameter 1 (🔢 Number): Top
    - Parameter 2 (🔢 Number): Right
    - Parameter 3 (🔢 Number): Bottom
    - Parameter 4 (🔢 Number): Left

    > Technical note: parameter 0 are internal parameters handled by GDevelop.

**Game window size**  
Changes the size of the game window. Note that this will only work on platform supporting this operation: games running in browsers or on mobile phones can not update their window size. Game resolution can still be updated.

??? quote "See parameters"

    - Parameter 1 (🔢 Number): Width
    - Parameter 2 (🔢 Number): Height
    - Parameter 3 (❓ Yes or No): Also update the game resolution? If not, the game will be stretched or reduced to fit in the window.

    > Technical note: parameter 0 are internal parameters handled by GDevelop.

**Window's title**  
This action changes the title of the game's window.

??? quote "See parameters"

    - Parameter 1 (string): New title

    > Technical note: parameter 0 are internal parameters handled by GDevelop.

## Conditions

**Fullscreen activated?**  
Check if the game is currently in fullscreen.

??? quote "See parameters"



    > Technical note: parameter 0 are internal parameters handled by GDevelop.

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