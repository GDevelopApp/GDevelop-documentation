# 3D

Support for 3D in GDevelop. 

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
| `Scene3D::CameraFarPlane(layer, number)` | Return the camera far plane distance. ||
| | _layer_ | Layer _Optional_. |
| | _number_ | Camera number (default : 0) _Optional_. |
| `Scene3D::CameraFov(layer, number)` | Return the camera field of view. ||
| | _layer_ | Layer _Optional_. |
| | _number_ | Camera number (default : 0) _Optional_. |
| `Scene3D::CameraNearPlane(layer, number)` | Return the camera near plane distance. ||
| | _layer_ | Layer _Optional_. |
| | _number_ | Camera number (default : 0) _Optional_. |
| `Scene3D::CameraRotationX(layer, number)` | Return the camera rotation on X axis. ||
| | _layer_ | Layer _Optional_. |
| | _number_ | Camera number (default : 0) _Optional_. |
| `Scene3D::CameraRotationY(layer, number)` | Return the camera rotation on Y axis. ||
| | _layer_ | Layer _Optional_. |
| | _number_ | Camera number (default : 0) _Optional_. |
| `Scene3D::CameraZ(layer, number)` | Return the camera position on Z axis. ||
| | _layer_ | Layer _Optional_. |
| | _number_ | Camera number (default : 0) _Optional_. |

## 3D Box 

A 3D box. 

### Object actions

**Face image**  
Change the image of the face.

**Face visibility**  
Set (or unset) if a face should be visible.

### Object conditions

**Face visibility**  
Check if a face should be visible.

_No expressions for this object._


## 3D Model 

A 3D model. 

_No expressions for this object._


## 3D capability 

Move the object in 3D space. 

### Behavior actions

**Flip the object on Z**  
Flip the object on Z axis

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
| `Object.Object3D::Depth()` | Return the depth (size on Z axis). ||
| `Object.Object3D::RotationX()` | Return the rotation on X axis. ||
| `Object.Object3D::RotationY()` | Return the rotation on Y axis. ||
| `Object.Object3D::ScaleZ()` | Return the scale on Z axis of an object (default scale is 1). ||
| `Object.Object3D::Z()` | Return the Z position (the "elevation"). ||

---
*This page is an auto-generated reference page about the **3D** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).