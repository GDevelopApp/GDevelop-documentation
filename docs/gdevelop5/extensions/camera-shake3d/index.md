# 3D camera shake

<img src="https://resources.gdevelop-app.com/assets/Icons/vector-difference-ab.svg" class="extension-icon"></img>
Shake 3D layer cameras.

**Authors and contributors** to this experimental extension: [D8H](https://gd.games/D8H).

!!! warning
    This is an extension made by a community member and it only got through a
    light review by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of fully reviewed extensions.

---

Shake layer cameras on 3 rotations.


- Short shaking can be used to give impact (explosion, hit)
- Shaking can go indefinitely to set an ambiance (engine vibration, earthquake, pulsing)
- Low frequency shaking allows to simulate slow moving objects (ship rocking back and forth)


!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Horizontal rotation amplitude**  
Change the horizontal rotation amplitude of the shaking (in degrees).

??? quote "See parameters & details"

    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value
    - Parameter 3: 🔤 Layer name (String)

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `CameraShake3D::SetHorizontalAmplitudeAngle`.

**Shakable layer**  
Mark a layer as shakable.

??? quote "See parameters & details"

    - Parameter 1 (❓ Yes or No): Shakable
    - Parameter 2: 🔤 Layer name (String)

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `CameraShake3D::SetLayerShakable`.

**Layer shaking frequency**  
Change the number of back and forth per seconds.

??? quote "See parameters & details"

    - Parameter 1 (🔢 Number): Frequency
    - Parameter 2: 🔤 Layer name (String)

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `CameraShake3D::SetLayerShakingFrequency`.

**Spinning shake amplitude**  
Change the spinning amplitude of the shaking (in degrees).

??? quote "See parameters & details"

    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value
    - Parameter 3: 🔤 Layer name (String)

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `CameraShake3D::SetSpineAmplitudeAngle`.

**Vertical rotation amplitude**  
Change the vertical rotation amplitude of the shaking (in degrees).

??? quote "See parameters & details"

    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value
    - Parameter 3: 🔤 Layer name (String)

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `CameraShake3D::SetVerticalAmplitudeAngle`.

**Shake camera**  
Shake the camera on layers chosen with configuration actions.

??? quote "See parameters & details"

    - Parameter 1 (🔢 Number): Duration (in seconds)
    - Parameter 2 (🔢 Number): Ease duration to start (in seconds)
    - Parameter 3 (🔢 Number): Ease duration to stop (in seconds)

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `CameraShake3D::ShakeCamera`.

**Start camera shaking**  
Start shaking the camera indefinitely.

??? quote "See parameters & details"

    - Parameter 1 (🔢 Number): Ease duration (in seconds)

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `CameraShake3D::StartShaking`.

**Stop camera shaking**  
Stop shaking the camera.

??? quote "See parameters & details"

    - Parameter 1 (🔢 Number): Ease duration (in seconds)

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `CameraShake3D::StopShaking`.


## Conditions

**Horizontal rotation amplitude**  
Compare the horizontal rotation amplitude of the shaking (in degrees).

??? quote "See parameters & details"

    - Parameter 1: relationaloperator
    - Parameter 2 (🔢 Number): Value to compare
    - Parameter 3: 🔤 Layer name (String)

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `CameraShake3D::HorizontalAmplitudeAngle`.

**Camera is shaking**  
Check if the camera is shaking.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `CameraShake3D::IsShaking`.

**Spinning shake amplitude**  
Compare the spinning amplitude of the shaking (in degrees).

??? quote "See parameters & details"

    - Parameter 1: relationaloperator
    - Parameter 2 (🔢 Number): Value to compare
    - Parameter 3: 🔤 Layer name (String)

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `CameraShake3D::SpineAmplitudeAngle`.

**Vertical rotation amplitude**  
Compare the vertical rotation amplitude of the shaking (in degrees).

??? quote "See parameters & details"

    - Parameter 1: relationaloperator
    - Parameter 2 (🔢 Number): Value to compare
    - Parameter 3: 🔤 Layer name (String)

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `CameraShake3D::VerticalAmplitudeAngle`.


## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `CameraShake3D::HorizontalAmplitudeAngle(layer name)` | Return the horizontal rotation amplitude of the shaking (in degrees). ||
| | _🔤 Layer name (String)_ | Layer |
| `CameraShake3D::SpineAmplitudeAngle(layer name)` | Return the spinning amplitude of the shaking (in degrees). ||
| | _🔤 Layer name (String)_ | Layer |
| `CameraShake3D::VerticalAmplitudeAngle(layer name)` | Return the vertical rotation amplitude of the shaking (in degrees). ||
| | _🔤 Layer name (String)_ | Layer |


---

*This page is an auto-generated reference page about the **3D camera shake** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).