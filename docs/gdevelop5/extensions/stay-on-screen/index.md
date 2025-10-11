# Stay On Screen (2D)

<img src="https://resources.gdevelop-app.com/assets/Icons/monitor-screenshot.svg" class="extension-icon"></img>
Move the object to keep it visible on the screen.

**Authors and contributors** to this experimental extension: [4ian](https://gd.games/4ian), [Bouh](https://gd.games/Bouh), [D8H](https://gd.games/D8H).

---

Force the object to stay visible on the screen by setting back its 2D position (X and Y coordinates) inside the viewport of the camera.

The shoot'em up example uses this extension ([open the project online](https://editor.gdevelop.io/?project=example://space-shooter)).

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Stay on Screen 

Force the object to stay visible on the screen by setting back its 2D position inside the viewport of the camera. 

### Behavior actions

**Screen bottom margin**
Change the bottom margin (in pixels) to leave between the object and the screen border.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Screen left margin**
Change the left margin (in pixels) to leave between the object and the screen border.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Screen right margin**
Change the right margin (in pixels) to leave between the object and the screen border.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Screen top margin**
Change the top margin (in pixels) to leave between the object and the screen border.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

### Behavior conditions

**Screen bottom margin**
Compare the bottom margin (in pixels) to leave between the object and the screen border.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Screen left margin**
Compare the left margin (in pixels) to leave between the object and the screen border.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Screen right margin**
Compare the right margin (in pixels) to leave between the object and the screen border.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Screen top margin**
Compare the top margin (in pixels) to leave between the object and the screen border.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.StayOnScreen::MarginBottom()` | Return the bottom margin (in pixels) to leave between the object and the screen border. ||
| `Object.StayOnScreen::MarginLeft()` | Return the left margin (in pixels) to leave between the object and the screen border. ||
| `Object.StayOnScreen::MarginRight()` | Return the right margin (in pixels) to leave between the object and the screen border. ||
| `Object.StayOnScreen::MarginTop()` | Return the top margin (in pixels) to leave between the object and the screen border. ||


---

*This page is an auto-generated reference page about the **Stay On Screen (2D)** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).