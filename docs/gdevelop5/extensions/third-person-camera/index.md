# Third person camera

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/Line Hero Pack/Master/SVG/Virtual Reality/94e95d2c318e1f3dc7151a351024e13c574e1e44669c6696aa107d60230073f6_Virtual Reality_3d_vision_eye_vr.svg" class="extension-icon"></img>
Move the camera  to look at an object from a given distance.

**Authors and contributors** to this community extension: [D8H](https://gd.games/D8H).

---

Move the camera  to look at an object from a given distance with a rotation and an elevation angles.

It can be useful for:

- Third person camera
- Isometric-like point of view


!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Look at an object from a distance**  
Move the camera to look at an object from a distance.

**Look at a position from a distance**  
Move the camera to look at a position from a distance.



## Third person camera 

Smoothly follow an object at a distance. 

### Behavior actions

**Move the camera closer**  
Move the camera closer to the object. This action must be called after the object has moved for the frame.

**Camera rotation**  
Change the camera rotation.

**Camera distance**  
Change the camera distance of the object.

**Elevation angle offset**  
Change the elevation angle offset of the object.

**Follow free area top border on Z axis**  
Change the follow free area top border on Z axis of the object.

**Follow free area bottom border on Z axis**  
Change the follow free area bottom border on Z axis of the object.

**Lateral distance offset**  
Change the lateral distance offset of the object.

**Ahead distance offset**  
Change the ahead distance offset of the object.

**Z offset**  
Change the z offset of the object.

**Rotation angle offset**  
Change the rotation angle offset of the object.

**Halfway time for rotation**  
Change the halfway time for rotation of the object.

**Targeted rotation angle**  
Change the targeted camera rotation angle of the object. When this angle is set, the camera follow this value instead of the object angle.

**Halfway time on Z axis**  
Change the halfway time on Z axis of the object.

### Behavior conditions

**Camera distance**  
Compare the camera distance of the object.

**Elevation angle offset**  
Compare the elevation angle offset of the object.

**Follow free area top border on Z axis**  
Compare the follow free area top border on Z axis of the object.

**Follow free area bottom border on Z axis**  
Compare the follow free area bottom border on Z axis of the object.

**Lateral distance offset**  
Compare the lateral distance offset of the object.

**Ahead distance offset**  
Compare the ahead distance offset of the object.

**Z offset**  
Compare the z offset of the object.

**Rotation angle offset**  
Compare the rotation angle offset of the object.

**Halfway time for rotation**  
Compare the halfway time for rotation of the object.

**Targeted rotation angle**  
Compare the targeted camera rotation angle of the object. When this angle is set, the camera follow this value instead of the object angle.

**Halfway time on Z axis**  
Compare the halfway time on Z axis of the object.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.ThirdPersonCamera::Distance()` | Return the camera distance of the object. ||
| `Object.ThirdPersonCamera::ElevationAngleOffset()` | Return the elevation angle offset of the object. ||
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