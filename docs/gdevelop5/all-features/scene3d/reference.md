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

**Flip the object horizontally**  
Flip the object horizontally

**Flip the object vertically**  
Flip the object vertically

**Flip the object on Z**  
Flip the object on Z axis

**Scale**  
Modify the scale of the specified object.

**Depth (size on Z axis)**  
Change the depth (size on Z axis).

**Face image**  
Change the image of the face.

**Face visibility**  
Set (or unset) if a face should be visible.

**Height**  
Change the height of an object.

**Rotation on X axis**  
Change the rotation on X axis.

**Rotation on Y axis**  
Change the rotation on Y axis.

**Scale on X axis**  
Change the width's scale of an object.

**Scale on Y axis**  
Change the height's scale of an object.

**Scale on Z axis**  
Change the depth's scale of an object.

**Width**  
Change the width of an object.

**Z (elevation)**  
Change the Z position (the "elevation").

**Turn around X axis**  
Turn the object around X axis. This axis doesn't move with the object rotation.

**Turn around Y axis**  
Turn the object around Y axis. This axis doesn't move with the object rotation.

**Turn around Z axis**  
Turn the object around Z axis. This axis doesn't move with the object rotation.

### Object conditions

**Depth (size on Z axis)**  
Compare the depth (size on Z axis).

**Face visibility**  
Check if a face should be visible.

**Horizontally flipped**  
Check if the object is horizontally flipped

**Vertically flipped**  
Check if the object is vertically flipped

**Flipped on Z**  
Check if the object is flipped on Z axis

**Height**  
Compare the height of an object.

**Rotation on X axis**  
Compare the rotation on X axis.

**Rotation on Y axis**  
Compare the rotation on Y axis.

**Scale on X axis**  
Compare the width's scale of an object.

**Scale on Y axis**  
Compare the height's scale of an object.

**Scale on Z axis**  
Compare the depth's scale of an object.

**Width**  
Compare the width of an object.

**Z (elevation)**  
Compare the Z position (the "elevation").

### Object expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.Depth()` | Return the depth (size on Z axis). ||
| `Object.RotationX()` | Return the rotation on X axis. ||
| `Object.RotationY()` | Return the rotation on Y axis. ||
| `Object.ScaleX()` | Return the width's scale of an object. ||
| `Object.ScaleY()` | Return the height's scale of an object. ||
| `Object.ScaleZ()` | Return the depth's scale of an object. ||
| `Object.Z()` | Return the Z position (the "elevation"). ||

## 3D Model 

A 3D model. 

### Object actions

**Flip the object horizontally**  
Flip the object horizontally

**Flip the object vertically**  
Flip the object vertically

**Flip the object on Z**  
Flip the object on Z axis

**Scale**  
Modify the scale of the specified object.

**Animation (by number)**  
Change the number of the animation played by the object (the number from the animations list)..

**Animation (by name)**  
Change the animation played by the object.

**Animation speed scale**  
Change the animation speed scale (1 = the default speed, >1 = faster and <1 = slower)..

**Depth (size on Z axis)**  
Change the depth (size on Z axis).

**Height**  
Change the height.

**Rotation on X axis**  
Change the rotation on X axis.

**Rotation on Y axis**  
Change the rotation on Y axis.

**Scale on X axis**  
Change the width's scale of an object.

**Scale on Y axis**  
Change the height's scale of an object.

**Scale on Z axis**  
Change the depth's scale of an object.

**Width**  
Change the width of an object.

**Z (elevation)**  
Change the Z position (the "elevation").

**Turn around X axis**  
Turn the object around X axis. This axis doesn't move with the object rotation.

**Turn around Y axis**  
Turn the object around Y axis. This axis doesn't move with the object rotation.

**Turn around Z axis**  
Turn the object around Z axis. This axis doesn't move with the object rotation.

**Pause the animation**  
Pause the animation of the object

**Resume the animation**  
Resume the animation of the object

### Object conditions

**Animation finished**  
Check if the animation being played by the Sprite object is finished.

**Animation paused**  
Check if the animation of an object is paused.

**Animation (by number)**  
Compare the number of the animation played by the object (the number from the animations list)..

**Animation (by name)**  
Compare the animation played by the object.

**Animation speed scale**  
Compare the animation speed scale (1 = the default speed, >1 = faster and <1 = slower)..

**Depth (size on Z axis)**  
Compare the depth (size on Z axis).

**Horizontally flipped**  
Check if the object is horizontally flipped

**Vertically flipped**  
Check if the object is vertically flipped

**Flipped on Z**  
Check if the object is flipped on Z axis

**Height**  
Compare the height.

**Rotation on X axis**  
Compare the rotation on X axis.

**Rotation on Y axis**  
Compare the rotation on Y axis.

**Scale on X axis**  
Compare the width's scale of an object.

**Scale on Y axis**  
Compare the height's scale of an object.

**Scale on Z axis**  
Compare the depth's scale of an object.

**Width**  
Compare the width of an object.

**Z (elevation)**  
Compare the Z position (the "elevation").

### Object expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.Animation()` | Return the number of the animation played by the object (the number from the animations list).. ||
| `Object.AnimationName()` | Return the animation played by the object. ||
| `Object.AnimationSpeedScale()` | Return the animation speed scale (1 = the default speed, >1 = faster and <1 = slower).. ||
| `Object.Depth()` | Return the depth (size on Z axis). ||
| `Object.Height()` | Return the height. ||
| `Object.RotationX()` | Return the rotation on X axis. ||
| `Object.RotationY()` | Return the rotation on Y axis. ||
| `Object.ScaleX()` | Return the width's scale of an object. ||
| `Object.ScaleY()` | Return the height's scale of an object. ||
| `Object.ScaleZ()` | Return the depth's scale of an object. ||
| `Object.Z()` | Return the Z position (the "elevation"). ||

---
*This page is an auto-generated reference page about the **3D** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).