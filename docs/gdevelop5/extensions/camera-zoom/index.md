# Camera Zoom

<img src="https://resources.gdevelop-app.com/assets/Icons/Line Hero Pack/Master/SVG/UI Essentials/UI Essentials_zoom_in_plus.svg" class="extension-icon"></img>
Zoom camera smoothly at configurable speed with optional anchor point.

**Authors and contributors** to this experimental extension: [D8H](https://gd.games/D8H), [Elairyx](https://gd.games/Elairyx).

---

This extension allows to zoom a camera on a layer at a given speed. The zoom speed is configurable and allows a constant as well as a variable zoom speed. An anchor point can be defined, for instance, to keep what is under the cursor at the same place on screen.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Zoom with anchor**  
Change the camera zoom and keep an anchor point fixed on screen (instead of the center).

??? quote "See parameters & details"

    - Parameter 1 (🔢 Number): Zoom
      1: Initial zoom, 2: zoom in x2, 0.5: zoom out x2...
    - Parameter 2: 🔤 Layer name (String)
    - Parameter 3 (🔢 Number): Camera number
    - Parameter 4 (🔢 Number): Anchor X
    - Parameter 5 (🔢 Number): Anchor Y

    > Technical note: parameters 0, 6 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `CameraZoom::ZoomWithAnchor`.

**Zoom camera with speed**  
Change the camera zoom at a given speed (in factor per second).

??? quote "See parameters & details"

    - Parameter 1 (🔢 Number): Zoom speed
      Zoom by a factor per second. 1: no effect, 2: zoom in x2 every second, 0.5: zoom out x2 every second.
    - Parameter 2: 🔤 Layer name (String)
    - Parameter 3 (🔢 Number): Camera number

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `CameraZoom::ZoomWithSpeed`.

**Zoom camera with speed and anchor**  
Change the camera zoom at a given speed (in factor per second) and keep an anchor point fixed on screen (instead of the center).

??? quote "See parameters & details"

    - Parameter 1 (🔢 Number): Zoom speed
      Zoom by a factor per second. 1: no effect, 2: zoom in x2 every second, 0.5: zoom out x2 every second.
    - Parameter 2: 🔤 Layer name (String)
    - Parameter 3 (🔢 Number): Camera number
    - Parameter 4 (🔢 Number): Anchor X
    - Parameter 5 (🔢 Number): Anchor Y

    > Technical note: parameters 0, 6 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `CameraZoom::ZoomWithSpeedAndAnchor`.





---

*This page is an auto-generated reference page about the **Camera Zoom** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).