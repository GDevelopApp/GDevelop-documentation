# 3D-like Flip for 2D Sprites

<img src="https://resources.gdevelop-app.com/assets/Icons/flip-horizontal.svg" class="extension-icon"></img>
Flip sprites with a 3D rotation visual effect (card flip style).

**Authors and contributors** to this experimental extension: [VegeTato](https://gd.games/VegeTato), [D8H](https://gd.games/D8H).

---

Flip sprites with a 3D-like rotation effect.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## 3D Flip 

Flip a Sprite with a 3D effect. 

### Behavior properties

- **Back animation name** (🔤 String). Default value is `Back`.
- **Flipping method** (Choice, one of: "Mirror", "Animation"). Default value is `Mirror`.
- **Front animation name** (🔤 String). Default value is `Front`.

??? quote "See internal technical details"


    > This behavior must be used on an object also having a behavior with type "AnimatableCapability::AnimatableBehavior". This is stored on property `Animation`.

    - **Back animation name** is stored as `BackAnimation` (String). Default value is `Back`.
    > This behavior must be used on an object also having a behavior with type "FlippableCapability::FlippableBehavior". This is stored on property `Flippable`.

    - **Flipping method** is stored as `FlippingMethod` (Choice). Default value is `Mirror`.
    - **Front animation name** is stored as `FrontAnimation` (String). Default value is `Front`.
    > This behavior must be used on an object also having a behavior with type "ResizableCapability::ResizableBehavior". This is stored on property `Resizable`.


### Behavior actions

**Flip the object**  
Start a flipping animation on the object. The X origin point must be set at the object center.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Duration (in seconds)

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ThreeDFlip::ThreeDFlip::FlipSecond`.

**Flip to a side**  
Flips the object to one specific side. The X origin point must be set at the object center.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): Reverse side
    - Parameter 3 (🔢 Number): Duration (in seconds)

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ThreeDFlip::ThreeDFlip::FlipToSecond`.

**Jump to flipping end**  
Jump to the end of the flipping animation.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ThreeDFlip::ThreeDFlip::StopFlip`.


### Behavior conditions

**Is flipped**  
Checks if the object is flipped or will be flipped.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ThreeDFlip::ThreeDFlip::IsFlipped`.

**Flipping is playing**  
Checks if a flipping animation is currently playing.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ThreeDFlip::ThreeDFlip::IsFlipping`.


_No expressions for this behavior._



---

*This page is an auto-generated reference page about the **3D-like Flip for 2D Sprites** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).