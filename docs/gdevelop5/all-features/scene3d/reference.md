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

An animated 3D model. 

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


---

The 3D extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **3D** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).