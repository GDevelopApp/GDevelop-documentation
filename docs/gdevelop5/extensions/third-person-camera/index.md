# Third person camera

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/Line Hero Pack/Master/SVG/Virtual Reality/94e95d2c318e1f3dc7151a351024e13c574e1e44669c6696aa107d60230073f6_Virtual Reality_3d_vision_eye_vr.svg" class="extension-icon"></img>
Move the camera  to look at an object from a given distance.

**Authors and contributors** to this experimental extension: [D8H](https://gd.games/D8H).

---

Move the camera  to look at an object from a given distance with a rotation and an elevation angles.

It can be useful for:

- 3D platformer games ([open the project online](https://editor.gdevelop.io/?project=example://3d-platformer))
- 3D racing games ([open the project online](https://editor.gdevelop.io/?project=example://3d-car-coin-hunt))
- Orbit camera controls ([open the project online](https://editor.gdevelop.io/?project=example://3d-tile-based-city-builder))
- Isometric-like point of view ([open the project online](https://editor.gdevelop.io/?project=example://3d-road-crosser))

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Look at an object from a distance**  
Move the camera to look at an object from a distance.

??? quote "See parameters & details"

    - Parameter 1: 👾 Object
    - Parameter 2 (🧩 Behavior): 3D capability
    - Parameter 3 (🔢 Number): Distance
    - Parameter 4 (🔢 Number): Rotation angle (around Z axis)
    - Parameter 5 (🔢 Number): Elevation angle (around Y axis)
    - Parameter 6: 🔤 Layer name (String)

    > Technical note: parameters 0, 7 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ThirdPersonCamera::LookFromDistanceAtObject3D`.

**Look at a position from a distance**  
Move the camera to look at a position from a distance.

??? quote "See parameters & details"

    - Parameter 1 (🔢 Number): Position on X axis
    - Parameter 2 (🔢 Number): Position on Y axis
    - Parameter 3 (🔢 Number): Position on Z axis
    - Parameter 4 (🔢 Number): Distance
    - Parameter 5 (🔢 Number): Rotation angle (around Z axis)
    - Parameter 6 (🔢 Number): Elevation angle (around Y axis)
    - Parameter 7: 🔤 Layer name (String)

    > Technical note: parameters 0, 8 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ThirdPersonCamera::LookFromDistanceAtPosition3D`.




## Third person camera 

Smoothly follow an object at a distance. 

### Behavior properties

- **Camera distance** (🔢 Number, Distance). Default value is `500`.
- **Elevation angle offset** (🔢 Number, Angle). Default value is `20`.
- **Halfway time for elevation rotation** (🔢 Number, Duration). Only used by Z and ZY rotation modes. Default value is `0`.
- **Follow free area top border on Z axis** (🔢 Number, Distance). Default value is `0`.
- **Follow free area bottom border on Z axis** (🔢 Number, Distance). Default value is `0`.
- **Automatically rotate the camera with the object (elevation)** (🔘 Boolean). Best left unchecked, use the rotation mode instead. Default value is `false`.
- **Automatically rotate the camera with the object** (🔘 Boolean). Default value is `true`.
- **Lateral distance offset** (🔢 Number, Distance). Default value is `0`.
- **Ahead distance offset** (🔢 Number, Distance). Default value is `0`.
- **Z offset** (🔢 Number, Distance). Default value is `0`.
- **Rotation angle offset** (🔢 Number, Angle). Default value is `0`.
- **Halfway time for rotation** (🔢 Number, Duration). Default value is `0.125`.
- **Rotation mode** (Choice, one of: "Z", "ZY", "ZYX"). Default value is `Z`.
- **Halfway time on Z axis** (🔢 Number, Duration). Only used by Z and ZY rotation modes. Default value is `0.125`.

??? quote "See internal technical details"


    - **Camera distance** is stored as `Distance` (Number). Unit is Pixel. Default value is `500`.
    - **Elevation angle offset** is stored as `ElevationAngleOffset` (Number). Unit is DegreeAngle. Default value is `20`.
    - **Halfway time for elevation rotation** is stored as `ElevationHalfwayDuration` (Number). Unit is Second. Default value is `0`.
    - **Follow free area top border on Z axis** is stored as `FollowFreeAreaZMax` (Number). Unit is Pixel. Default value is `0`.
    - **Follow free area bottom border on Z axis** is stored as `FollowFreeAreaZMin` (Number). Unit is Pixel. Default value is `0`.
    - **Automatically rotate the camera with the object (elevation)** is stored as `IsElevatingWithObject` (Boolean). Default value is `false`.
    - **Automatically rotate the camera with the object** is stored as `IsRotatingWithObject` (Boolean). Default value is `true`.
    > This behavior must be used on an object also having a behavior with type "Scene3D::Base3DBehavior". This is stored on property `Object3D`.

    - **Lateral distance offset** is stored as `OffsetX` (Number). Unit is Pixel. Default value is `0`.
    - **Ahead distance offset** is stored as `OffsetY` (Number). Unit is Pixel. Default value is `0`.
    - **Z offset** is stored as `OffsetZ` (Number). Unit is Pixel. Default value is `0`.
    - **Rotation angle offset** is stored as `RotationAngleOffset` (Number). Unit is DegreeAngle. Default value is `0`.
    - **Halfway time for rotation** is stored as `RotationHalfwayDuration` (Number). Unit is Second. Default value is `0.125`.
    - **Rotation mode** is stored as `RotationMode` (Choice). Default value is `Z`.
    - **Halfway time on Z axis** is stored as `TranslationZHalfwayDuration` (Number). Unit is Second. Default value is `0.125`.

### Behavior actions

**Rotate the camera all the way**  
Rotate the camera all the way to the targeted angle.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ThirdPersonCamera::ThirdPersonCamera::JumpToTargetedRotation`.

**Move the camera closer**  
Move the camera closer to the object. This action must be called after the object has moved for the frame.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ThirdPersonCamera::ThirdPersonCamera::MoveCameraCloser`.

**Camera rotation**  
Change the camera rotation.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ThirdPersonCamera::ThirdPersonCamera::SetCameraRotation`.

**Camera distance**  
Change the camera distance of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ThirdPersonCamera::ThirdPersonCamera::SetDistance`.

**Elevation angle offset**  
Change the elevation angle offset of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ThirdPersonCamera::ThirdPersonCamera::SetElevationAngleOffset`.

**Halfway  time for elevation rotation**  
Change the halfway  time for elevation rotation of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ThirdPersonCamera::ThirdPersonCamera::SetElevationHalfwayDuration`.

**Follow free area top border on Z axis**  
Change the follow free area top border on Z axis of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ThirdPersonCamera::ThirdPersonCamera::SetFollowFreeAreaZMax`.

**Follow free area bottom border on Z axis**  
Change the follow free area bottom border on Z axis of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ThirdPersonCamera::ThirdPersonCamera::SetFollowFreeAreaZMin`.

**Lateral distance offset**  
Change the lateral distance offset of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ThirdPersonCamera::ThirdPersonCamera::SetOffsetX`.

**Ahead distance offset**  
Change the ahead distance offset of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ThirdPersonCamera::ThirdPersonCamera::SetOffsetY`.

**Z offset**  
Change the z offset of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ThirdPersonCamera::ThirdPersonCamera::SetOffsetZ`.

**Rotation angle offset**  
Change the rotation angle offset of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ThirdPersonCamera::ThirdPersonCamera::SetRotationAngleOffset`.

**Halfway time for rotation**  
Change the halfway time for rotation of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ThirdPersonCamera::ThirdPersonCamera::SetRotationHalfwayDuration`.

**Targeted rotation angle**  
Change the targeted camera rotation angle of the object. When this angle is set, the camera follow this value instead of the object angle.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ThirdPersonCamera::ThirdPersonCamera::SetTargetedRotationAngle`.

**Halfway time on Z axis**  
Change the halfway time on Z axis of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ThirdPersonCamera::ThirdPersonCamera::SetTranslationZHalfwayDuration`.


### Behavior conditions

**Camera distance**  
Compare the camera distance of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ThirdPersonCamera::ThirdPersonCamera::Distance`.

**Elevation angle offset**  
Compare the elevation angle offset of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ThirdPersonCamera::ThirdPersonCamera::ElevationAngleOffset`.

**Halfway  time for elevation rotation**  
Compare the halfway  time for elevation rotation of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ThirdPersonCamera::ThirdPersonCamera::ElevationHalfwayDuration`.

**Follow free area top border on Z axis**  
Compare the follow free area top border on Z axis of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ThirdPersonCamera::ThirdPersonCamera::FollowFreeAreaZMax`.

**Follow free area bottom border on Z axis**  
Compare the follow free area bottom border on Z axis of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ThirdPersonCamera::ThirdPersonCamera::FollowFreeAreaZMin`.

**Lateral distance offset**  
Compare the lateral distance offset of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ThirdPersonCamera::ThirdPersonCamera::OffsetX`.

**Ahead distance offset**  
Compare the ahead distance offset of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ThirdPersonCamera::ThirdPersonCamera::OffsetY`.

**Z offset**  
Compare the z offset of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ThirdPersonCamera::ThirdPersonCamera::OffsetZ`.

**Rotation angle offset**  
Compare the rotation angle offset of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ThirdPersonCamera::ThirdPersonCamera::RotationAngleOffset`.

**Halfway time for rotation**  
Compare the halfway time for rotation of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ThirdPersonCamera::ThirdPersonCamera::RotationHalfwayDuration`.

**Targeted rotation angle**  
Compare the targeted camera rotation angle of the object. When this angle is set, the camera follow this value instead of the object angle.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ThirdPersonCamera::ThirdPersonCamera::TargetedRotationAngle`.

**Halfway time on Z axis**  
Compare the halfway time on Z axis of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ThirdPersonCamera::ThirdPersonCamera::TranslationZHalfwayDuration`.


### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.ThirdPersonCamera::Distance()` | Return the camera distance of the object. ||
| `Object.ThirdPersonCamera::ElevationAngleOffset()` | Return the elevation angle offset of the object. ||
| `Object.ThirdPersonCamera::ElevationHalfwayDuration()` | Return the halfway  time for elevation rotation of the object. ||
| `Object.ThirdPersonCamera::FollowFreeAreaZMax()` | Return the follow free area top border on Z axis of the object. ||
| `Object.ThirdPersonCamera::FollowFreeAreaZMin()` | Return the follow free area bottom border on Z axis of the object. ||
| `Object.ThirdPersonCamera::OffsetX()` | Return the lateral distance offset of the object. ||
| `Object.ThirdPersonCamera::OffsetY()` | Return the ahead distance offset of the object. ||
| `Object.ThirdPersonCamera::OffsetZ()` | Return the z offset of the object. ||
| `Object.ThirdPersonCamera::RotationAngleOffset()` | Return the rotation angle offset of the object. ||
| `Object.ThirdPersonCamera::RotationHalfwayDuration()` | Return the halfway time for rotation of the object. ||
| `Object.ThirdPersonCamera::TargetedRotationAngle()` | Return the targeted camera rotation angle of the object. When this angle is set, the camera follow this value instead of the object angle. ||
| `Object.ThirdPersonCamera::TranslationZHalfwayDuration()` | Return the halfway time on Z axis of the object. ||


---

*This page is an auto-generated reference page about the **Third person camera** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).