# 3D Reference

Support for 3D in GDevelop: this provides 3D objects and the common features for all 3D objects. 

## Actions

**Camera far plane**  
Change the camera far plane distance.

**Camera field of view (fov)**  
Change the camera field of view.

**Camera near plane**  
Change the camera near plane distance.

**Camera X rotation**  
Change the camera rotation on X axis.

**Camera Y rotation**  
Change the camera rotation on Y axis.

**Camera Z position**  
Change the camera position on Z axis.

**Look at an object**  
Change the camera rotation to look at an object. The camera top always face the screen.

**Look at a position**  
Change the camera rotation to look at a position. The camera top always face the screen.

## Conditions

**Camera far plane**  
Compare the camera far plane distance.

**Camera field of view (fov)**  
Compare the camera field of view.

**Camera near plane**  
Compare the camera near plane distance.

**Camera X rotation**  
Compare the camera rotation on X axis.

**Camera Y rotation**  
Compare the camera rotation on Y axis.

**Camera Z position**  
Compare the camera position on Z axis.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `Scene3D::CameraFarPlane(layer name, number)` | Return the camera far plane distance. ||
| | _🔤 Layer name (String)_ | Layer _Optional_. |
| | _🔢 Number_ | Camera number (default : 0) _Optional_. |
| `Scene3D::CameraFov(layer name, number)` | Return the camera field of view. ||
| | _🔤 Layer name (String)_ | Layer _Optional_. |
| | _🔢 Number_ | Camera number (default : 0) _Optional_. |
| `Scene3D::CameraNearPlane(layer name, number)` | Return the camera near plane distance. ||
| | _🔤 Layer name (String)_ | Layer _Optional_. |
| | _🔢 Number_ | Camera number (default : 0) _Optional_. |
| `Scene3D::CameraRotationX(layer name, number)` | Return the camera rotation on X axis. ||
| | _🔤 Layer name (String)_ | Layer _Optional_. |
| | _🔢 Number_ | Camera number (default : 0) _Optional_. |
| `Scene3D::CameraRotationY(layer name, number)` | Return the camera rotation on Y axis. ||
| | _🔤 Layer name (String)_ | Layer _Optional_. |
| | _🔢 Number_ | Camera number (default : 0) _Optional_. |
| `Scene3D::CameraZ(layer name, number)` | Return the camera position on Z axis. ||
| | _🔤 Layer name (String)_ | Layer _Optional_. |
| | _🔢 Number_ | Camera number (default : 0) _Optional_. |

## 3D Box 

A box with images for each face 

### Object actions

**Face image**  
Change the image of the face.

**Face visibility**  
Set (or unset) if a face should be visible.

**Tint color**  
Change the tint of the cube.

### Object conditions

**Face visibility**  
Check if a face should be visible.

_No expressions for this object._


## 3D Model 

An animated 3D model, useful for most elements of a 3D game. 

### Object actions

**Set crossfade duration**  
Set the crossfade duration when switching to a new animation.

_No expressions for this object._


## 3D capability 

Common features for all 3D objects: position in 3D space (including the Z axis, in addition to X and Y), size (including depth, in addition to width and height), rotation (on X and Y axis, in addition to the Z axis), scale (including Z axis, in addition to X and Y), flipping (on Z axis, in addition to horizontal (Y)/vertical (X) flipping). 

### Behavior actions

**Flip the object on Z**  
Flip the object on Z axis

**Center Z position**  
Change the Z position of the center of rotation.

**Depth (size on Z axis)**  
Change the depth (size on Z axis).

**Rotation on X axis**  
Change the rotation on X axis.

**Rotation on Y axis**  
Change the rotation on Y axis.

**Scale on Z axis**  
Change the scale on Z axis of an object (default scale is 1).

**Z (elevation)**  
Change the Z position (the "elevation").

**Turn around X axis**  
Turn the object around X axis. This axis doesn't move with the object rotation.

**Turn around Y axis**  
Turn the object around Y axis. This axis doesn't move with the object rotation.

**Turn around Z axis**  
Turn the object around Z axis. This axis doesn't move with the object rotation.

### Behavior conditions

**Center Z position**  
Compare the Z position of the center of rotation.

**Depth (size on Z axis)**  
Compare the depth (size on Z axis).

**Flipped on Z**  
Check if the object is flipped on Z axis

**Rotation on X axis**  
Compare the rotation on X axis.

**Rotation on Y axis**  
Compare the rotation on Y axis.

**Scale on Z axis**  
Compare the scale on Z axis of an object (default scale is 1).

**Z (elevation)**  
Compare the Z position (the "elevation").

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.Object3D::CenterZ()` | Return the Z position of the center of rotation. ||
| `Object.Object3D::Depth()` | Return the depth (size on Z axis). ||
| `Object.Object3D::RotationX()` | Return the rotation on X axis. ||
| `Object.Object3D::RotationY()` | Return the rotation on Y axis. ||
| `Object.Object3D::ScaleZ()` | Return the scale on Z axis of an object (default scale is 1). ||
| `Object.Object3D::Z()` | Return the Z position (the "elevation"). ||
### Effect "Ambient light":

A light that illuminates all objects from every direction. Often used along with a Directional light (though a Hemisphere light can be used instead of an Ambient light).

This effect is for 3D layers only.

Properties of this effect are:

- **Light color**. Default value is `255;255;255`. For events, write: `"color"`.
- **Intensity**. Default value is `0.75`. For events, write: `"intensity"`.

### Effect "Bloom":

Apply a bloom effect.

This effect is for 3D layers only.

Properties of this effect are:

- **Radius (between 0 and 1)**. Default value is `0`. For events, write: `"radius"`.
- **Strength (between 0 and 3)**. Default value is `1`. For events, write: `"strength"`.
- **Threshold (between 0 and 1)**. Default value is `0`. For events, write: `"threshold"`.

### Effect "Brightness and contrast.":

Adjust brightness and contrast.

This effect is for 3D layers only.

Properties of this effect are:

- **Brightness (between -1 and 1)**. Default value is `0`. For events, write: `"brightness"`.
- **Contrast (between -1 and 1)**. Default value is `0`. For events, write: `"contrast"`.

### Effect "Directional light":

A very far light source like the sun. This is the light to use for casting shadows for 3D objects (other lights won't emit shadows). Often used along with a Hemisphere light.

This effect is for 3D layers only.

Properties of this effect are:

- **Light color**. Default value is `255;255;255`. For events, write: `"color"`.
- **Distance from layer's camera**. Default value is `1500`. For events, write: `"distanceFromCamera"`.
- **Elevation (in degrees)**: Maximal elevation is reached at 90°.. Default value is `45`. For events, write: `"elevation"`.
- **Shadow frustum size**. Default value is `4000`. For events, write: `"frustumSize"`.
- **Intensity**. Default value is `0.5`. For events, write: `"intensity"`.
- **Shadow casting**. Default value is `false`. For events, write: `"isCastingShadow"`.
- **Shadow bias**: Use this to avoid "shadow acne" due to depth buffer precision. Choose a value small enough like 0.001 to avoid creating distance between shadows and objects but not too small to avoid shadow glitches on low/medium quality. This value is used for high quality, and multiplied by 1.25 for medium quality and 2 for low quality.. Default value is `0`. For events, write: `"minimumShadowBias"`.
- **Rotation (in degrees)**. Default value is `0`. For events, write: `"rotation"`.
- **Shadow quality**. Default value is `medium`. For events, write: `"shadowQuality"`.
- **3D world top**. Default value is `Z+`. For events, write: `"top"`.

### Effect "Fog (exponential)":

Exponential fog for 3D objects.

This effect is for 3D layers only.

Properties of this effect are:

- **Fog color**. Default value is `255;255;255`. For events, write: `"color"`.
- **Density**. Default value is `0.0012`. For events, write: `"density"`.

### Effect "Exposure":

Adjust exposure.

This effect is for 3D layers only.

Properties of this effect are:

- **Exposure (positive value)**. Default value is `1`. For events, write: `"exposure"`.

### Effect "Hemisphere light":

A light that illuminates objects from every direction with a gradient. Often used along with a Directional light.

This effect is for 3D layers only.

Properties of this effect are:

- **Elevation (in degrees)**: Maximal elevation is reached at 90°.. Default value is `90`. For events, write: `"elevation"`.
- **Ground color**. Default value is `127;127;127`. For events, write: `"groundColor"`.
- **Intensity**. Default value is `0.5`. For events, write: `"intensity"`.
- **Rotation (in degrees)**. Default value is `0`. For events, write: `"rotation"`.
- **Sky color**. Default value is `255;255;255`. For events, write: `"skyColor"`.
- **3D world top**. Default value is `Z+`. For events, write: `"top"`.

### Effect "Hue and saturation":

Adjust hue and saturation.

This effect is for 3D layers only.

Properties of this effect are:

- **Hue in degrees (between -180 and 180)**. Default value is `0`. For events, write: `"hue"`.
- **Saturation (between -1 and 1)**. Default value is `0`. For events, write: `"saturation"`.

### Effect "Fog (linear)":

Linear fog for 3D objects.

This effect is for 3D layers only.

Properties of this effect are:

- **Fog color**. Default value is `255;255;255`. For events, write: `"color"`.
- **Distance where the fog is fully opaque**. Default value is `2000`. For events, write: `"far"`.
- **Distance where the fog starts**. Default value is `200`. For events, write: `"near"`.



---

The 3D extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **3D** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).