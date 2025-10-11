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

??? quote "See parameters"

    - Parameter 1: 👾 Object
    - Parameter 2 (🧩 Behavior): 3D capability
    - Parameter 3 (🔢 Number): Distance
    - Parameter 4 (🔢 Number): Rotation angle (around Z axis)
    - Parameter 5 (🔢 Number): Elevation angle (around Y axis)
    - Parameter 6: 🔤 Layer name (String)

    > Technical note: parameters 0, 7 are internal parameters handled by GDevelop.

**Look at a position from a distance**
Move the camera to look at a position from a distance.

??? quote "See parameters"

    - Parameter 1 (🔢 Number): Position on X axis
    - Parameter 2 (🔢 Number): Position on Y axis
    - Parameter 3 (🔢 Number): Position on Z axis
    - Parameter 4 (🔢 Number): Distance
    - Parameter 5 (🔢 Number): Rotation angle (around Z axis)
    - Parameter 6 (🔢 Number): Elevation angle (around Y axis)
    - Parameter 7: 🔤 Layer name (String)

    > Technical note: parameters 0, 8 are internal parameters handled by GDevelop.



## Third person camera 

Smoothly follow an object at a distance. 

### Behavior actions

**Rotate the camera all the way**
Rotate the camera all the way to the targeted angle.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

**Move the camera closer**
Move the camera closer to the object. This action must be called after the object has moved for the frame.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

**Camera rotation**
Change the camera rotation.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Camera distance**
Change the camera distance of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Elevation angle offset**
Change the elevation angle offset of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Halfway  time for elevation rotation**
Change the halfway  time for elevation rotation of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Follow free area top border on Z axis**
Change the follow free area top border on Z axis of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Follow free area bottom border on Z axis**
Change the follow free area bottom border on Z axis of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Lateral distance offset**
Change the lateral distance offset of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Ahead distance offset**
Change the ahead distance offset of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Z offset**
Change the z offset of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Rotation angle offset**
Change the rotation angle offset of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Halfway time for rotation**
Change the halfway time for rotation of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Targeted rotation angle**
Change the targeted camera rotation angle of the object. When this angle is set, the camera follow this value instead of the object angle.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Halfway time on Z axis**
Change the halfway time on Z axis of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

### Behavior conditions

**Camera distance**
Compare the camera distance of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Elevation angle offset**
Compare the elevation angle offset of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Halfway  time for elevation rotation**
Compare the halfway  time for elevation rotation of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Follow free area top border on Z axis**
Compare the follow free area top border on Z axis of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Follow free area bottom border on Z axis**
Compare the follow free area bottom border on Z axis of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Lateral distance offset**
Compare the lateral distance offset of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Ahead distance offset**
Compare the ahead distance offset of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Z offset**
Compare the z offset of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Rotation angle offset**
Compare the rotation angle offset of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Halfway time for rotation**
Compare the halfway time for rotation of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Targeted rotation angle**
Compare the targeted camera rotation angle of the object. When this angle is set, the camera follow this value instead of the object angle.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Halfway time on Z axis**
Compare the halfway time on Z axis of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

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

*This page is an auto-generated reference page about the **Third person camera** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).