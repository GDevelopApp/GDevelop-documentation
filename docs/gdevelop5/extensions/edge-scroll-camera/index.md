# Edge scroll camera

<img src="https://resources.gdevelop-app.com/assets/Icons/camera-metering-matrix.svg" class="extension-icon"></img>
Scroll camera when cursor is near edge of screen.

**Authors and contributors** to this experimental extension: [VictrisGames](https://gd.games/VictrisGames), [D8H](https://gd.games/D8H).

---

Edge scroll camera allows the player to move around the scene simply by moving the cursor near the edge they want the camera to move towards.  This is common in RTS games.

How to use:

- Run the action "Enable (or disable) edge camera scrolling" at the beginning of scene
- Run the action "Configure edge camera scrolling" at the beginning of scene

Tips:

- "Progressive speed" makes the camera scroll faster the closer the cursor gets to the edge of screen
- Use the action "Enable (or disable) edge camera scrolling" to turn the scrolling ON or OFF
- Use the action "Enforce camera boundaries" to restrict what the player can see
- Use the extension "Copy camera settings" if you want multiple layers to move


!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Configure camera edge scrolling**
Configure camera edge scrolling that moves when mouse is near an edge of the screen.

??? quote "See parameters"

    - Parameter 1 (🔢 Number): Screen margin (pixels)
    - Parameter 2 (🔢 Number): Scroll speed (in pixels per second)
    - Parameter 3: 🔤 Layer name (String)
    - Parameter 4 (🔢 Number): Camera
    - Parameter 5 (🔤 String): Scroll style (one of: "Progressive speed", "Constant speed")

    > Technical note: parameters 0, 6 are internal parameters handled by GDevelop.

**Draw edge scrolling screen margin**
Draw a rectangle that shows where edge scrolling will be triggered.

??? quote "See parameters"

    - Parameter 1 (👾 Object): Shape painter

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

**Enable (or disable) camera edge scrolling**
Enable (or disable) camera edge scrolling .  Use "Configure camera edge scrolling" to adjust settings.

??? quote "See parameters"

    - Parameter 1 (❓ Yes or No): Enable camera edge scrolling

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

## Conditions

**Camera is scrolling**
Check if the camera is scrolling.

??? quote "See parameters"



    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

**Camera is scrolling down**
Check if the camera is scrolling down.

??? quote "See parameters"



    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

**Camera is scrolling left**
Check if the camera is scrolling left.

??? quote "See parameters"



    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

**Camera is scrolling right**
Check if the camera is scrolling right.

??? quote "See parameters"



    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

**Camera is scrolling up**
Check if the camera is scrolling up.

??? quote "See parameters"



    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `EdgeScrollCamera::SpeedX()` | Return the speed the camera is currently scrolling in horizontal direction (in pixels per second). ||
| `EdgeScrollCamera::SpeedY()` | Return the speed the camera is currently scrolling in vertical direction (in pixels per second). ||


---

*This page is an auto-generated reference page about the **Edge scroll camera** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).