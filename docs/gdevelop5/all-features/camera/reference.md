# Layers and cameras Reference

Each scene can be composed of multiple layers. These conditions and actions allow to manipulate them during the game. In particular, you can move the camera of a layer to center it on an object or a position. The zoom of a layer camera (in 2D) or its position in the 3D space (for 3D games) can be changed.

Each layer can be hidden or shown (but layers do not have opacity). Actions/conditions are available to enable/disable 2D/3D effects on layers. Parameters of each effect can be modified with actions.
 [Read more explanations about it.](/gdevelop5/interface/scene-editor/layers-and-cameras)

## Actions

**Center the camera on an object**  
Center the camera on the specified object.

??? quote "See parameters & details"

    - Parameter 1: 👾 Object
    - Parameter 2 (❓ Yes or No): Anticipate the movement of the object (yes by default)
    - Parameter 3: 🔤 Layer name (String)
    - Parameter 4 (🔢 Number): Camera number

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `CentreCamera`.

**Layer time scale**  
Change the time scale applied to the objects of the layer.

??? quote "See parameters & details"

    - Parameter 1: 🔤 Layer name (String)
    - Parameter 2 (🔢 Number): Scale (1: Default, 2: 2x faster, 0.5: 2x slower...)

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ChangeLayerTimeScale`.

**Enforce camera boundaries**  
Enforce camera boundaries by moving the camera back inside specified boundaries.

??? quote "See parameters & details"

    - Parameter 1 (🔢 Number): Left bound X Position
    - Parameter 2 (🔢 Number): Top bound Y Position
    - Parameter 3 (🔢 Number): Right bound X Position
    - Parameter 4 (🔢 Number): Bottom bound Y Position
    - Parameter 5: 🔤 Layer name (String)
    - Parameter 6 (🔢 Number): Camera number

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ClampCamera`.

**Enable layer effect**  
Enable an effect on a layer

??? quote "See parameters & details"

    - Parameter 1: 🔤 Layer name (String)
    - Parameter 2: 🔤 Layer Effect Name (String)
    - Parameter 3 (❓ Yes or No): Enable

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `EnableLayerEffect`.

**Hide a layer**  
Hide a layer.

??? quote "See parameters & details"

    - Parameter 1: 🔤 Layer name (String)

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `HideLayer`.

**Angle of a camera of a layer**  
Change the angle of rotation of a camera (in degrees).

??? quote "See parameters & details"

    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value
    - Parameter 3: 🔤 Layer name (String)
    - Parameter 4 (🔢 Number): Camera number

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SetCameraAngle`.

**Camera center X position**  
Change the X position of the center of a camera.

??? quote "See parameters & details"

    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value
    - Parameter 3: 🔤 Layer name (String)
    - Parameter 4 (🔢 Number): Camera number

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SetCameraCenterX`.

**Camera center Y position**  
Change the Y position of the center of a camera.

??? quote "See parameters & details"

    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value
    - Parameter 3: 🔤 Layer name (String)
    - Parameter 4 (🔢 Number): Camera number

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SetCameraCenterY`.

**Ambient light color**  
Set the ambient light color of the lighting layer in format "R;G;B" string.

??? quote "See parameters & details"

    - Parameter 1: 🔤 Layer name (String)
    - Parameter 2: color

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SetLayerAmbientLightColor`.

**Layer default Z order**  
Change the default Z order set to objects when they are created on a layer.

??? quote "See parameters & details"

    - Parameter 1: 🔤 Layer name (String)
    - Parameter 2 (🔢 Number): New default Z order

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SetLayerDefaultZOrder`.

**Effect property (enable or disable)**  
Enable or disable a property of an effect.  
You can find the property names (and change the effect names) in the effects window.

??? quote "See parameters & details"

    - Parameter 1: 🔤 Layer name (String)
    - Parameter 2: 🔤 Layer Effect Name (String)
    - Parameter 3: 🔤 Layer Effect Property Name (String)
    - Parameter 4 (❓ Yes or No): Enable this property

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SetLayerEffectBooleanParameter`.

**Effect property (number)**  
Change the value of a property of an effect.  
You can find the property names (and change the effect names) in the effects window.

??? quote "See parameters & details"

    - Parameter 1: 🔤 Layer name (String)
    - Parameter 2: 🔤 Layer Effect Name (String)
    - Parameter 3: 🔤 Layer Effect Property Name (String)
    - Parameter 4 (🔢 Number): New value

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SetLayerEffectParameter`.

**Effect property (string)**  
Change the value (string) of a property of an effect.  
You can find the property names (and change the effect names) in the effects window.

??? quote "See parameters & details"

    - Parameter 1: 🔤 Layer name (String)
    - Parameter 2: 🔤 Layer Effect Name (String)
    - Parameter 3: 🔤 Layer Effect Property Name (String)
    - Parameter 4 (string): New value

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SetLayerEffectStringParameter`.

**Show a layer**  
Show a layer.

??? quote "See parameters & details"

    - Parameter 1: 🔤 Layer name (String)

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ShowLayer`.

**Camera zoom**  
Change camera zoom.

??? quote "See parameters & details"

    - Parameter 1 (🔢 Number): Value (1:Initial zoom, 2:Zoom x2, 0.5:Unzoom x2...)
    - Parameter 2: 🔤 Layer name (String)
    - Parameter 3 (🔢 Number): Camera number

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ZoomCamera`.

## Conditions

**Angle of a camera of a layer**  
Compare the angle of rotation of a camera (in degrees).

??? quote "See parameters & details"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare
    - Parameter 3: 🔤 Layer name (String)
    - Parameter 4 (🔢 Number): Camera number

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `CameraAngle`.

**Camera bottom border position**  
Compare the position of the bottom border of a camera.

??? quote "See parameters & details"

    - Parameter 1: 🔤 Layer name (String)
    - Parameter 2 (🔢 Number): Camera number
    - Parameter 3: 🟰 Relational operator
    - Parameter 4 (🔢 Number): Value to compare

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `CameraBorderBottom`.

**Camera left border position**  
Compare the position of the left border of a camera.

??? quote "See parameters & details"

    - Parameter 1: 🔤 Layer name (String)
    - Parameter 2 (🔢 Number): Camera number
    - Parameter 3: 🟰 Relational operator
    - Parameter 4 (🔢 Number): Value to compare

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `CameraBorderLeft`.

**Camera right border position**  
Compare the position of the right border of a camera.

??? quote "See parameters & details"

    - Parameter 1: 🔤 Layer name (String)
    - Parameter 2 (🔢 Number): Camera number
    - Parameter 3: 🟰 Relational operator
    - Parameter 4 (🔢 Number): Value to compare

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `CameraBorderRight`.

**Camera top border position**  
Compare the position of the top border of a camera.

??? quote "See parameters & details"

    - Parameter 1: 🔤 Layer name (String)
    - Parameter 2 (🔢 Number): Camera number
    - Parameter 3: 🟰 Relational operator
    - Parameter 4 (🔢 Number): Value to compare

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `CameraBorderTop`.

**Camera center X position**  
Compare the X position of the center of a camera.

??? quote "See parameters & details"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare
    - Parameter 3: 🔤 Layer name (String)
    - Parameter 4 (🔢 Number): Camera number

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `CameraCenterX`.

**Camera center Y position**  
Compare the Y position of the center of a camera.

??? quote "See parameters & details"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare
    - Parameter 3: 🔤 Layer name (String)
    - Parameter 4 (🔢 Number): Camera number

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `CameraCenterY`.

**Height of a camera**  
Compare the height of a camera of a layer.

??? quote "See parameters & details"

    - Parameter 1: 🔤 Layer name (String)
    - Parameter 2 (🔢 Number): Camera number
    - Parameter 3: 🟰 Relational operator
    - Parameter 4 (🔢 Number): Value to compare

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `CameraHeight`.

**Width of a camera**  
Compare the width of a camera of a layer.

??? quote "See parameters & details"

    - Parameter 1: 🔤 Layer name (String)
    - Parameter 2 (🔢 Number): Camera number
    - Parameter 3: 🟰 Relational operator
    - Parameter 4 (🔢 Number): Value to compare

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `CameraWidth`.

**Camera zoom**  
Compare the zoom of a camera of a layer.

??? quote "See parameters & details"

    - Parameter 1: 🔤 Layer name (String)
    - Parameter 2 (🔢 Number): Camera number
    - Parameter 3: 🟰 Relational operator
    - Parameter 4 (🔢 Number): Zoom

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `CameraZoom`.

**Layer default Z order**  
Compare the default Z order set to objects when they are created on a layer.

??? quote "See parameters & details"

    - Parameter 1: 🔤 Layer name (String)
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `LayerDefaultZOrder`.

**Layer effect is enabled**  
The effect on a layer is enabled

??? quote "See parameters & details"

    - Parameter 1: 🔤 Layer name (String)
    - Parameter 2: 🔤 Layer Effect Name (String)

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `LayerEffectEnabled`.

**Layer time scale**  
Compare the time scale applied to the objects of the layer.

??? quote "See parameters & details"

    - Parameter 1: 🔤 Layer name (String)
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Time scale (1 by default)

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `LayerTimeScale`.

**Visibility of a layer**  
Test if a layer is set as visible.

??? quote "See parameters & details"

    - Parameter 1: 🔤 Layer name (String)

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `LayerVisible`.

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