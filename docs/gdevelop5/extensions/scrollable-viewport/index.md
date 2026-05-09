# Scrollable viewport

<img src="https://resources.gdevelop-app.com/assets/Icons/drag-variant.svg" class="extension-icon"></img>
Move a camera by dragging or with the scroll wheel.

**Authors and contributors** to this experimental extension: [D8H](https://gd.games/D8H), [ddabrahim](https://gd.games/ddabrahim), [VictrisGames](https://gd.games/VictrisGames).

---

Move a camera by dragging or with the scroll wheel.

It can be used for

- Making a scroll view ([open the project online](https://editor.gdevelop.io/?project=example://scrollbar))
- Dragging the camera on a top-down game

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Scrollable viewport 

Move a camera by dragging or with the scroll wheel. 

### Behavior properties

- **Direction** (Choice, one of: "Vertical", "Horizontal", "Both").
- **InertiaDeceleration** (🔢 Number, Acceleration). Default value is `800`.
- **Dragged layer** (🔤 String). The dragged layer must be different from this object layer.
- **Wheel scrolling duration** (🔢 Number, Duration). Default value is `0.25`.
- **Step size** (🔢 Number, Distance). Default value is `120`.

??? quote "See internal technical details"


    - **Direction** is stored as `Direction` (Choice). Default value is ``.
    - **InertiaDeceleration** is stored as `InertiaDeceleration` (Number). Unit is PixelAcceleration. Default value is `800`.
    - **Dragged layer** is stored as `Layer` (String). Default value is ``.
    - **Wheel scrolling duration** is stored as `WheelScrollingDuration` (Number). Unit is Second. Default value is `0.25`.
    - **Step size** is stored as `WheelStepSize` (Number). Unit is Pixel. Default value is `120`.

### Behavior conditions

**Camera is being dragged**  
Check if camera is being dragged from this object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ScrollableViewport::ScrollableViewport::IsDragged`.


_No expressions for this behavior._



---

*This page is an auto-generated reference page about the **Scrollable viewport** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).