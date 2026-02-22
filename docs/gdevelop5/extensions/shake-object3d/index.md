# 3D object shake

<img src="https://resources.gdevelop-app.com/assets/Icons/vector-difference-ab.svg" class="extension-icon"></img>
Shake 3D objects with configurable intensity for impact or feedback effects.

**Authors and contributors** to this experimental extension: [D8H](https://gd.games/D8H).

---

Shake 3D objects with translation and rotation.

The 3D racing game example uses this extension ([open the project online](https://editor.gdevelop.io/?project=example://3d-racing-game)).

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## 3D shake 

Shake 3D objects with translation and rotation. 

### Behavior properties

- **Frequency** (🔢 Number). Default value is `5.0000000000036398`.
- **Start to shake at the object creation** (🔘 Boolean). Default value is `false`.
- **Rotation amplitude around X axis** (🔢 Number, Angle). Default value is `5`.
- **Rotation amplitude around Y axis** (🔢 Number, Angle). Default value is `5`.
- **Rotation amplitude around Z axis** (🔢 Number, Angle). Default value is `5`.
- **Translation amplitude on X axis** (🔢 Number, Distance). Default value is `0`.
- **Translation amplitude on Y axis** (🔢 Number, Distance). Default value is `0`.
- **Translation amplitude on Z axis** (🔢 Number, Distance). Default value is `0`.

??? quote "See internal technical details"


    - **Frequency** is stored as `Frequency` (Number). Default value is `5.0000000000036398`.
    - **Start to shake at the object creation** is stored as `IsStartingAtCreation` (Boolean). Default value is `false`.
    > This behavior must be used on an object also having a behavior with type "Scene3D::Base3DBehavior". This is stored on property `Object3D`.

    - **Rotation amplitude around X axis** is stored as `RotationAmplitudeX` (Number). Unit is DegreeAngle. Default value is `5`.
    - **Rotation amplitude around Y axis** is stored as `RotationAmplitudeY` (Number). Unit is DegreeAngle. Default value is `5`.
    - **Rotation amplitude around Z axis** is stored as `RotationAmplitudeZ` (Number). Unit is DegreeAngle. Default value is `5`.
    - **Translation amplitude on X axis** is stored as `TranslationAmplitudeX` (Number). Unit is Pixel. Default value is `0`.
    - **Translation amplitude on Y axis** is stored as `TranslationAmplitudeY` (Number). Unit is Pixel. Default value is `0`.
    - **Translation amplitude on Z axis** is stored as `TranslationAmplitudeZ` (Number). Unit is Pixel. Default value is `0`.

### Behavior actions

**Shaking frequency**  
Change the shaking frequency of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ShakeObject3D::ShakeModel3D::SetFrequency`.

**Shake**  
Shake the object with a linear easing at the start and the end.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Duration (in seconds)
    - Parameter 3 (🔢 Number): Ease duration to start (in seconds)
    - Parameter 4 (🔢 Number): Ease duration to stop (in seconds)

    > Technical note: parameter 5 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ShakeObject3D::ShakeModel3D::Shake`.

**Start shaking**  
Shake the object with a linear easing at the start and keep shaking until the stop action is used.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Ease duration (in seconds)

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ShakeObject3D::ShakeModel3D::StartShaking`.

**Stop shaking**  
Stop shaking the object with a linear easing.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Ease duration (in seconds)

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ShakeObject3D::ShakeModel3D::StopShaking`.


### Behavior conditions

**Shaking frequency**  
Compare the shaking frequency of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ShakeObject3D::ShakeModel3D::Frequency`.

**Is shaking**  
Check if the object is shaking.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ShakeObject3D::ShakeModel3D::IsShaking`.

**Is stopping to shake**  
Check if the object is stopping to shake.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ShakeObject3D::ShakeModel3D::IsStopping`.


### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.ShakeModel3D::Frequency()` | Return the shaking frequency of the object. ||


---

*This page is an auto-generated reference page about the **3D object shake** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).