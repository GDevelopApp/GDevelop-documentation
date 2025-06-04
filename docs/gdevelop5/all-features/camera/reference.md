# Layers and cameras Reference

Each scene can be composed of multiple layers. These conditions and actions allow to manipulate them during the game. In particular, you can move the camera of a layer to center it on an object or a position. [Read more explanations about it.](/gdevelop5/interface/scene-editor/layers-and-cameras)

## Actions

**Center the camera on an object**  
Center the camera on the specified object.

**Layer time scale**  
Change the time scale applied to the objects of the layer.

**Enforce camera boundaries**  
Enforce camera boundaries by moving the camera back inside specified boundaries.

**Enable layer effect**  
Enable an effect on a layer

**Hide a layer**  
Hide a layer.

**Angle of a camera of a layer**  
Change the angle of rotation of a camera (in degrees).

**Camera center X position**  
Change the X position of the center of a camera.

**Camera center Y position**  
Change the Y position of the center of a camera.

**Ambient light color**  
Set the ambient light color of the lighting layer in format "R;G;B" string.

**Layer default Z order**  
Change the default Z order set to objects when they are created on a layer.

**Effect property (enable or disable)**  
Enable or disable a property of an effect.  
You can find the property names (and change the effect names) in the effects window.

**Effect property (number)**  
Change the value of a property of an effect.  
You can find the property names (and change the effect names) in the effects window.

**Effect property (string)**  
Change the value (string) of a property of an effect.  
You can find the property names (and change the effect names) in the effects window.

**Show a layer**  
Show a layer.

**Camera zoom**  
Change camera zoom.

## Conditions

**Angle of a camera of a layer**  
Compare the angle of rotation of a camera (in degrees).

**Camera bottom border position**  
Compare the position of the bottom border of a camera.

**Camera left border position**  
Compare the position of the left border of a camera.

**Camera right border position**  
Compare the position of the right border of a camera.

**Camera top border position**  
Compare the position of the top border of a camera.

**Camera center X position**  
Compare the X position of the center of a camera.

**Camera center Y position**  
Compare the Y position of the center of a camera.

**Height of a camera**  
Compare the height of a camera of a layer.

**Width of a camera**  
Compare the width of a camera of a layer.

**Camera zoom**  
Compare the zoom of a camera of a layer.

**Layer default Z order**  
Compare the default Z order set to objects when they are created on a layer.

**Layer effect is enabled**  
The effect on a layer is enabled

**Layer time scale**  
Compare the time scale applied to the objects of the layer.

**Visibility of a layer**  
Test if a layer is set as visible.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `CameraAngle(layer name, number)` | Return the angle of rotation of a camera (in degrees). ||
| | _🔤 Layer name (String)_ | Layer _Optional_. |
| | _🔢 Number_ | Camera number (default : 0) _Optional_. |
| `CameraBorderBottom(layer name, number)` | Return the position of the bottom border of a camera. ||
| | _🔤 Layer name (String)_ | Layer _Optional_. |
| | _🔢 Number_ | Camera number _Optional_. |
| `CameraBorderLeft(layer name, number)` | Return the position of the left border of a camera. ||
| | _🔤 Layer name (String)_ | Layer _Optional_. |
| | _🔢 Number_ | Camera number _Optional_. |
| `CameraBorderRight(layer name, number)` | Return the position of the right border of a camera. ||
| | _🔤 Layer name (String)_ | Layer _Optional_. |
| | _🔢 Number_ | Camera number _Optional_. |
| `CameraBorderTop(layer name, number)` | Return the position of the top border of a camera. ||
| | _🔤 Layer name (String)_ | Layer _Optional_. |
| | _🔢 Number_ | Camera number _Optional_. |
| `CameraCenterX(layer name, number)` | Return the X position of the center of a camera. ||
| | _🔤 Layer name (String)_ | Layer _Optional_. |
| | _🔢 Number_ | Camera number (default : 0) _Optional_. |
| `CameraCenterY(layer name, number)` | Return the Y position of the center of a camera. ||
| | _🔤 Layer name (String)_ | Layer _Optional_. |
| | _🔢 Number_ | Camera number (default : 0) _Optional_. |
| `CameraHeight(layer name, number)` | Return the height of a camera of a layer. ||
| | _🔤 Layer name (String)_ | Layer _Optional_. |
| | _🔢 Number_ | Camera number _Optional_. |
| `CameraWidth(layer name, number)` | Return the width of a camera of a layer. ||
| | _🔤 Layer name (String)_ | Layer _Optional_. |
| | _🔢 Number_ | Camera number _Optional_. |
| `CameraZoom(layer name, number)` | Zoom of a camera of a layer ||
| | _🔤 Layer name (String)_ | Layer _Optional_. |
| | _🔢 Number_ | Camera number (default : 0) _Optional_. |
| `LayerDefaultZOrder(layer name)` | Default Z Order for a layer ||
| | _🔤 Layer name (String)_ | Layer |
| `LayerTimeScale(layer name)` | Returns the time scale of the specified layer. ||
| | _🔤 Layer name (String)_ | Layer |
---

The Layers and cameras extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **Layers and cameras** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).