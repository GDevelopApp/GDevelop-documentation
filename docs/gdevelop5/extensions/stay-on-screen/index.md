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

### Behavior properties

- **Bottom margin** (🔢 Number, Distance). Default value is `0`.
- **Left margin** (🔢 Number, Distance). Default value is `0`.
- **Right margin** (🔢 Number, Distance). Default value is `0`.
- **Top margin** (🔢 Number, Distance). Default value is `0`.

??? quote "See internal technical details"


    - **Bottom margin** is stored as `MarginBottom` (Number). Unit is Pixel. Default value is `0`.
    - **Left margin** is stored as `MarginLeft` (Number). Unit is Pixel. Default value is `0`.
    - **Right margin** is stored as `MarginRight` (Number). Unit is Pixel. Default value is `0`.
    - **Top margin** is stored as `MarginTop` (Number). Unit is Pixel. Default value is `0`.

### Behavior actions

**Screen bottom margin**  
Change the bottom margin (in pixels) to leave between the object and the screen border.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `StayOnScreen::StayOnScreen::SetMarginBottom`.

**Screen left margin**  
Change the left margin (in pixels) to leave between the object and the screen border.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `StayOnScreen::StayOnScreen::SetMarginLeft`.

**Screen right margin**  
Change the right margin (in pixels) to leave between the object and the screen border.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `StayOnScreen::StayOnScreen::SetMarginRight`.

**Screen top margin**  
Change the top margin (in pixels) to leave between the object and the screen border.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `StayOnScreen::StayOnScreen::SetMarginTop`.


### Behavior conditions

**Screen bottom margin**  
Compare the bottom margin (in pixels) to leave between the object and the screen border.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `StayOnScreen::StayOnScreen::MarginBottom`.

**Screen left margin**  
Compare the left margin (in pixels) to leave between the object and the screen border.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `StayOnScreen::StayOnScreen::MarginLeft`.

**Screen right margin**  
Compare the right margin (in pixels) to leave between the object and the screen border.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `StayOnScreen::StayOnScreen::MarginRight`.

**Screen top margin**  
Compare the top margin (in pixels) to leave between the object and the screen border.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `StayOnScreen::StayOnScreen::MarginTop`.


### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.StayOnScreen::MarginBottom()` | Return the bottom margin (in pixels) to leave between the object and the screen border. ||
| `Object.StayOnScreen::MarginLeft()` | Return the left margin (in pixels) to leave between the object and the screen border. ||
| `Object.StayOnScreen::MarginRight()` | Return the right margin (in pixels) to leave between the object and the screen border. ||
| `Object.StayOnScreen::MarginTop()` | Return the top margin (in pixels) to leave between the object and the screen border. ||


---

*This page is an auto-generated reference page about the **Stay On Screen (2D)** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).