# Parallax for Tiled Sprite

<img src="https://resources.gdevelop-app.com/assets/Icons/image-move.svg" class="extension-icon"></img>
Parallax scrolling for Tiled Sprite backgrounds.

**Authors and contributors** to this experimental extension: [4ian](https://gd.games/4ian), [D8H](https://gd.games/D8H).

---

Behaviors to animate Tiled Sprite objects in the background, following the camera with a parallax effect.


!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Horizontal Parallax for a Tiled Sprite 

Move the image of a Tiled Sprite to follow the camera horizontally with a parallax effect. After adding this to an object, put the object on a layer that is not moving, behind the layer that is followed (for example, a layer called "Background"). 

### Behavior properties

- **Layer to be followed (leave empty for the base layer)** (🔤 String).
- **Parallax factor (speed for the parallax, usually between 0 and 1)** (🔢 Number). Default value is `0.5`.

??? quote "See internal technical details"


    - **Layer to be followed (leave empty for the base layer)** is stored as `FollowedLayer` (String). Default value is ``.
    - **Parallax factor (speed for the parallax, usually between 0 and 1)** is stored as `ParallaxFactor` (Number). Default value is `0.5`.

_No expressions for this behavior._


## Vertical Parallax for a Tiled Sprite 

Move the image of a Tiled Sprite to follow the camera vertically with a parallax effect. After adding this to an object, put the object on a layer that is not moving, behind the layer that is followed (for example, a layer called "Background"). 

### Behavior properties

- **Layer to be followed (leave empty for the base layer)** (🔤 String).
- **Offset on Y axis** (🔢 Number, Distance). Default value is `0`.
- **Parallax factor (speed for the parallax, usually between 0 and 1)** (🔢 Number). Default value is `0.5`.

??? quote "See internal technical details"


    - **Layer to be followed (leave empty for the base layer)** is stored as `FollowedLayer` (String). Default value is ``.
    - **Offset on Y axis** is stored as `OffsetY` (Number). Unit is Pixel. Default value is `0`.
    - **Parallax factor (speed for the parallax, usually between 0 and 1)** is stored as `ParallaxFactor` (Number). Default value is `0.5`.

_No expressions for this behavior._



---

*This page is an auto-generated reference page about the **Parallax for Tiled Sprite** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).