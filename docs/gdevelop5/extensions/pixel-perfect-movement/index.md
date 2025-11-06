# Pixel perfect movement

<img src="https://resources.gdevelop-app.com/assets/Icons/Line Hero Pack/Master/SVG/Graphic Design/Graphic Design_grid.svg" class="extension-icon"></img>
Grid-based or pixel perfect platformer and top-down movements.

**Authors and contributors** to this experimental extension: [D8H](https://gd.games/D8H), [MikeSheldon](https://gd.games/MikeSheldon), [Mistafixxa069](https://gd.games/Mistafixxa069).

---

Games with pixel art usually use pixels bigger than actual pixels of the screen. This can lead to big pixels partially overlapping each other which doesn't look good.

This extension allows to seamlessly keep big pixels aligned when the object is stopped and still beneficiate from the high resolution of the screen to have smooth movements.

It can be used for:

* Pixel-perfect platformers ([open the project online](https://editor.gdevelop.io/?project=example://platformer-with-tilemap))
* Align top-down characters on a grid ([open the project online](https://editor.gdevelop.io/?project=example://top-down-grid-movement))

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Pixel perfect platformer character 

Seamlessly align big pixels using a 2D platformer character movement. 

### Behavior properties

- **Pixel grid offset X** (🔢 Number). Default value is `0`.
- **Pixel grid offset Y** (🔢 Number). Default value is `0`.
- **Pixel size** (🔢 Number). Default value is `1`.

??? quote "See internal technical details"


    - **Pixel grid offset X** is stored as `OffsetX` (Number). Default value is `0`.
    - **Pixel grid offset Y** is stored as `OffsetY` (Number). Default value is `0`.
    - **Pixel size** is stored as `PixelSize` (Number). Default value is `1`.
    > This behavior must be used on an object also having a behavior with type "PlatformBehavior::PlatformerObjectBehavior". This is stored on property `PlatformerCharacter`.


_No expressions for this behavior._


## Pixel perfect top-down movement 

Seamlessly align big pixels using a top-down movement. 

### Behavior properties

- **Pixel grid offset X** (🔢 Number). Default value is `0`.
- **Pixel grid offset Y** (🔢 Number). Default value is `0`.
- **Pixel size** (🔢 Number). Default value is `1`.

??? quote "See internal technical details"


    - **Pixel grid offset X** is stored as `OffsetX` (Number). Default value is `0`.
    - **Pixel grid offset Y** is stored as `OffsetY` (Number). Default value is `0`.
    - **Pixel size** is stored as `PixelSize` (Number). Default value is `1`.
    > This behavior must be used on an object also having a behavior with type "TopDownMovementBehavior::TopDownMovementBehavior". This is stored on property `TopDownMovement`.


_No expressions for this behavior._



---

*This page is an auto-generated reference page about the **Pixel perfect movement** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).