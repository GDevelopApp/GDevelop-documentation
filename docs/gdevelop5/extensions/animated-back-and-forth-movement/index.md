# Animated Back and Forth Movement

<img src="https://resources.gdevelop-app.com/assets/Icons/repeat.svg" class="extension-icon"></img>
Horizontal back-and-forth movement with automatic flip. Requires GoLeft/TurnLeft animations.

**Authors and contributors** to this experimental extension: [4ian](https://gd.games/4ian).

---

Make the object go on the left, then when some distance is reached, flip and go back to the right. **Make sure** that your object has **two animations called "GoLeft" and "TurnLeft"**.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Animated Back and Forth (mirrored) Movement 

Make the object go on the left, then when some distance is reached, flip and go back to the right. Make sure that your object has two animations called "GoLeft" and "TurnLeft". 

### Behavior properties

- **Distance traveled on X axis, in pixels** (🔢 Number, Distance). Default value is `300`.
- **Speed on X axis, in pixels per second** (🔢 Number, Speed). Default value is `200`.

??? quote "See internal technical details"


    > This behavior must be used on an object also having a behavior with type "AnimatableCapability::AnimatableBehavior". This is stored on property `Animation`.

    - **Distance traveled on X axis, in pixels** is stored as `DistanceX` (Number). Unit is Pixel. Default value is `300`.
    > This behavior must be used on an object also having a behavior with type "FlippableCapability::FlippableBehavior". This is stored on property `Flippable`.

    - **Speed on X axis, in pixels per second** is stored as `SpeedX` (Number). Unit is PixelSpeed. Default value is `200`.

_No expressions for this behavior._



---

*This page is an auto-generated reference page about the **Animated Back and Forth Movement** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).