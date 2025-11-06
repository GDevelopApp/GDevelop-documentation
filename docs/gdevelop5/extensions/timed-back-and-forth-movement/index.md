# Timed Back and Forth Movement

<img src="https://resources.gdevelop-app.com/assets/Icons/repeat.svg" class="extension-icon"></img>
This behavior moves objects back and forth for a chosen time or distance, vertically or horizontally.

**Authors and contributors** to this experimental extension: [Greench](https://gd.games/Greench).

---

This behavior moves an object (like an enemy) for a chosen time or distance, then flips it and starts over, moving the object back and forth, vertically or horizontally.

Note: animations must be facing **Right** (for horizontal) or **Down** (for vertical) direction.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Timed Back and Forth Movement 

Move an object (e.g. enemy) for a chosen time or distance, then flip it and start over. 

### Behavior properties

- **Moving distance (in pixels)** (🔢 Number). Default value is `200`.
- **Moving speed (in pixel/s)** (🔢 Number). Default value is `100`.
- **Moving maximum time (in seconds)** (🔢 Number). Default value is `2`.
- **Move the object vertically (instead of horizontally)** (🔘 Boolean). Default value is `false`.

??? quote "See internal technical details"


    - **Moving distance (in pixels)** is stored as `Distance` (Number). Default value is `200`.
    > This behavior must be used on an object also having a behavior with type "FlippableCapability::FlippableBehavior". This is stored on property `Flippable`.

    - **Moving speed (in pixel/s)** is stored as `Speed` (Number). Default value is `100`.
    - **Moving maximum time (in seconds)** is stored as `Timeout` (Number). Default value is `2`.
    - **Move the object vertically (instead of horizontally)** is stored as `Vertical` (Boolean). Default value is `false`.

_No expressions for this behavior._



---

*This page is an auto-generated reference page about the **Timed Back and Forth Movement** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).