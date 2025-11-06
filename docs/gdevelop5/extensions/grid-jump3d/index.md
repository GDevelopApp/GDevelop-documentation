# 3D grid jump

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/ddec4ab4b06e61ce74c078d206fe51e13de336850eb99761d036c818d10818be_arrow-up-bold-box-outline.svg" class="extension-icon"></img>
Move objects by jumping on a grid like a frog.

**Authors and contributors** to this experimental extension: [Jurfix](https://gd.games/Jurfix).

!!! warning
    This is an extension made by a community member and it only got through a
    light review by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of fully reviewed extensions.

---

It can be used for board games.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## 3D grid jump 

Move objects by jumping on a grid like a frog. 

### Behavior properties

- **Grid cell size** (🔢 Number, Distance). Default value is `100`.
- **Downward jump duration** (🔢 Number, Duration). Default value is `0.08`.
- **Jump height** (🔢 Number, Distance). Default value is `70`.
- **Upward jump duration** (🔢 Number, Duration). Default value is `0.12`.
- **Rotate duration** (🔢 Number, Duration). Default value is `0.1`.

??? quote "See internal technical details"


    - **Grid cell size** is stored as `GridСellSize` (Number). Unit is Pixel. Default value is `100`.
    - **Downward jump duration** is stored as `JumpDownDuration` (Number). Unit is Second. Default value is `0.08`.
    - **Jump height** is stored as `JumpHeight` (Number). Unit is Pixel. Default value is `70`.
    - **Upward jump duration** is stored as `JumpUpDuration` (Number). Unit is Second. Default value is `0.12`.
    > This behavior must be used on an object also having a behavior with type "Scene3D::Base3DBehavior". This is stored on property `Object3D`.

    - **Rotate duration** is stored as `RotateDuration` (Number). Unit is Second. Default value is `0.1`.
    > This behavior must be used on an object also having a behavior with type "Tween::TweenBehavior". This is stored on property `TweenBehavior`.


### Behavior actions

**Simulate jump key press at angle**  
Simulate a press of the jump key in a direction.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Angle

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `GridJump3D::GridJump3D::JumpAtSnappedAngle`.

**Rotate toward**  
Rotate the object in a direction.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Angle

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `GridJump3D::GridJump3D::Rotate`.


_No expressions for this behavior._



---

*This page is an auto-generated reference page about the **3D grid jump** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).