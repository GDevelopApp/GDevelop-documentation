# 3D Billboard

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/b46f9cf1fc6b0ef59a461c7831003d1fb091137cbedbae876774f40f8b7dea97_pine-tree.svg" class="extension-icon"></img>
Rotate 3D objects to appear like 2D sprites.

**Authors and contributors** to this experimental extension: [D8H](https://gd.games/D8H).

---

Rotate 3D objects to make them face the camera and appear like 2D sprite.

The 3D racing game example uses this extension ([open the project online](https://editor.gdevelop.io/?project=example://3d-racing-game)).

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Billboard 

Rotate to always face the camera (only the front face of the cube should be enabled). 

### Behavior properties

- **Offset position** (Choice, one of: "No change", "Standing on Z axis"). Default value is `No change`.

??? quote "See internal technical details"


    > This behavior must be used on an object also having a behavior with type "Scene3D::Base3DBehavior". This is stored on property `Object3D`.

    - **Offset position** is stored as `OffsetPositionMode` (Choice). Default value is `No change`.

### Behavior actions

**Rotate to face the camera**  
Rotate the object to the camera. This is also done automatically at the end of the scene events.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Billboard::Billboard::FaceCamera`.

**Should rotate on X axis**  
Change if the object should rotate on X axis.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): ShouldRotateX

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Billboard::Billboard::SetShouldRotateX`.

**Should rotate on Y axis**  
Change if the object should rotate on Y axis.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): ShouldRotateY

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Billboard::Billboard::SetShouldRotateY`.

**Should rotate on Z axis**  
Change if the object should rotate on Z axis.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): ShouldRotateZ

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Billboard::Billboard::SetShouldRotateZ`.


### Behavior conditions

**Should rotate on X axis**  
Check if the object should rotate on X axis.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Billboard::Billboard::ShouldRotateX`.

**Should rotate on Y axis**  
Check if the object should rotate on Y axis.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Billboard::Billboard::ShouldRotateY`.

**Should rotate on Z axis**  
Check if the object should rotate on Z axis.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Billboard::Billboard::ShouldRotateZ`.


_No expressions for this behavior._



---

*This page is an auto-generated reference page about the **3D Billboard** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).