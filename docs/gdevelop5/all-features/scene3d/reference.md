# 3D Reference

Support for 3D in GDevelop: this provides 3D objects and the common features for all 3D objects. 

## Actions

**Camera far plane**  
Change the camera far plane distance.

??? quote "See parameters & details"

    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Distance (> 0)
    - Parameter 3: 🔤 Layer name (String)
    - Parameter 4 (🔢 Number): Camera number

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Scene3D::SetCameraFarPlane`.

**Camera field of view (fov)**  
Change the camera field of view.

??? quote "See parameters & details"

    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Field of view in degrees (between 0° and 180°)
    - Parameter 3: 🔤 Layer name (String)
    - Parameter 4 (🔢 Number): Camera number

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Scene3D::SetCameraFov`.

**Camera near plane**  
Change the camera near plane distance.

??? quote "See parameters & details"

    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Distance (> 0)
    - Parameter 3: 🔤 Layer name (String)
    - Parameter 4 (🔢 Number): Camera number

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Scene3D::SetCameraNearPlane`.

**Camera X rotation**  
Change the camera rotation on X axis.

??? quote "See parameters & details"

    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Angle (in degrees)
    - Parameter 3: 🔤 Layer name (String)
    - Parameter 4 (🔢 Number): Camera number

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Scene3D::SetCameraRotationX`.

**Camera Y rotation**  
Change the camera rotation on Y axis.

??? quote "See parameters & details"

    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Angle (in degrees)
    - Parameter 3: 🔤 Layer name (String)
    - Parameter 4 (🔢 Number): Camera number

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Scene3D::SetCameraRotationY`.

**Camera Z position**  
Change the camera position on Z axis.

??? quote "See parameters & details"

    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value
    - Parameter 3: 🔤 Layer name (String)
    - Parameter 4 (🔢 Number): Camera number

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Scene3D::SetCameraZ`.

**Look at an object**  
Change the camera rotation to look at an object. The camera top always face the screen.

??? quote "See parameters & details"

    - Parameter 1: 👾 Object
    - Parameter 2: 🔤 Layer name (String)
    - Parameter 3 (🔢 Number): Camera number
    - Parameter 4 (❓ Yes or No): Stand on Y instead of Z

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Scene3D::TurnCameraTowardObject`.

**Look at a position**  
Change the camera rotation to look at a position. The camera top always face the screen.

??? quote "See parameters & details"

    - Parameter 1 (🔢 Number): X position
    - Parameter 2 (🔢 Number): Y position
    - Parameter 3 (🔢 Number): Z position
    - Parameter 4: 🔤 Layer name (String)
    - Parameter 5 (🔢 Number): Camera number
    - Parameter 6 (❓ Yes or No): Stand on Y instead of Z

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Scene3D::TurnCameraTowardPosition`.


## Conditions

**Camera far plane**  
Compare the camera far plane distance.

??? quote "See parameters & details"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Distance (> 0)
    - Parameter 3: 🔤 Layer name (String)
    - Parameter 4 (🔢 Number): Camera number

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Scene3D::CameraFarPlane`.

**Camera field of view (fov)**  
Compare the camera field of view.

??? quote "See parameters & details"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Field of view in degrees (between 0° and 180°)
    - Parameter 3: 🔤 Layer name (String)
    - Parameter 4 (🔢 Number): Camera number

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Scene3D::CameraFov`.

**Camera near plane**  
Compare the camera near plane distance.

??? quote "See parameters & details"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Distance (> 0)
    - Parameter 3: 🔤 Layer name (String)
    - Parameter 4 (🔢 Number): Camera number

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Scene3D::CameraNearPlane`.

**Camera X rotation**  
Compare the camera rotation on X axis.

??? quote "See parameters & details"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Angle (in degrees)
    - Parameter 3: 🔤 Layer name (String)
    - Parameter 4 (🔢 Number): Camera number

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Scene3D::CameraRotationX`.

**Camera Y rotation**  
Compare the camera rotation on Y axis.

??? quote "See parameters & details"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Angle (in degrees)
    - Parameter 3: 🔤 Layer name (String)
    - Parameter 4 (🔢 Number): Camera number

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Scene3D::CameraRotationY`.

**Camera Z position**  
Compare the camera position on Z axis.

??? quote "See parameters & details"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare
    - Parameter 3: 🔤 Layer name (String)
    - Parameter 4 (🔢 Number): Camera number

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Scene3D::CameraZ`.


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

### Object properties

- **Back face** (🗂️ Resource).
- **Tile** (🔘 Boolean). Default value is `false`.
- **Back face orientation** (choice, one of: "X", "Y"). The top of the image can touch the **top face** (Y) or the **bottom face** (X). Default value is `X`.
- **Back face** (🔘 Boolean). Default value is `true`.
- **Bottom face** (🗂️ Resource).
- **Tile** (🔘 Boolean). Default value is `false`.
- **Bottom face** (🔘 Boolean). Default value is `true`.
- **Depth** (🔢 Number, Distance). Default value is `100`.
- **Enable texture transparency** (🔘 Boolean). Enabling texture transparency has an impact on rendering performance. Default value is `false`.
- **Faces orientation** (choice, one of: "Y", "Z"). The top of each image can touch the **top face** (Y) or the **front face** (Z). Default value is `Y`.
- **Front face** (🗂️ Resource).
- **Tile** (🔘 Boolean). Default value is `false`.
- **Front face** (🔘 Boolean). Default value is `true`.
- **Height** (🔢 Number, Distance). Default value is `100`.
- **Shadow casting** (🔘 Boolean). Default value is `true`.
- **Shadow receiving** (🔘 Boolean). Default value is `true`.
- **Left face** (🗂️ Resource).
- **Tile** (🔘 Boolean). Default value is `false`.
- **Left face** (🔘 Boolean). Default value is `true`.
- **Material type** (choice, one of: "Basic", "StandardWithoutMetalness"). Default value is `StandardWithoutMetalness`.
- **Right face** (🗂️ Resource).
- **Tile** (🔘 Boolean). Default value is `false`.
- **Right face** (🔘 Boolean). Default value is `true`.
- **Tint** (🎨 Color). Default value is `255;255;255`.
- **Top face** (🗂️ Resource).
- **Tile** (🔘 Boolean). Default value is `false`.
- **Top face** (🔘 Boolean). Default value is `true`.
- **Width** (🔢 Number, Distance). Default value is `100`.

??? quote "See internal technical details"


    - **Back face** is stored as `backFaceResourceName` (resource). Default value is ``.
    - **Tile** is stored as `backFaceResourceRepeat` (boolean). Default value is `false`.
    - **Back face orientation** is stored as `backFaceUpThroughWhichAxisRotation` (choice). Default value is `X`.
    - **Back face** is stored as `backFaceVisible` (boolean). Default value is `true`.
    - **Bottom face** is stored as `bottomFaceResourceName` (resource). Default value is ``.
    - **Tile** is stored as `bottomFaceResourceRepeat` (boolean). Default value is `false`.
    - **Bottom face** is stored as `bottomFaceVisible` (boolean). Default value is `true`.
    - **Depth** is stored as `depth` (number). Unit is Pixel. Default value is `100`.
    - **Enable texture transparency** is stored as `enableTextureTransparency` (boolean). Default value is `false`.
    - **Faces orientation** is stored as `facesOrientation` (choice). Default value is `Y`.
    - **Front face** is stored as `frontFaceResourceName` (resource). Default value is ``.
    - **Tile** is stored as `frontFaceResourceRepeat` (boolean). Default value is `false`.
    - **Front face** is stored as `frontFaceVisible` (boolean). Default value is `true`.
    - **Height** is stored as `height` (number). Unit is Pixel. Default value is `100`.
    - **Shadow casting** is stored as `isCastingShadow` (boolean). Default value is `true`.
    - **Shadow receiving** is stored as `isReceivingShadow` (boolean). Default value is `true`.
    - **Left face** is stored as `leftFaceResourceName` (resource). Default value is ``.
    - **Tile** is stored as `leftFaceResourceRepeat` (boolean). Default value is `false`.
    - **Left face** is stored as `leftFaceVisible` (boolean). Default value is `true`.
    - **Material type** is stored as `materialType` (choice). Default value is `StandardWithoutMetalness`.
    - **Right face** is stored as `rightFaceResourceName` (resource). Default value is ``.
    - **Tile** is stored as `rightFaceResourceRepeat` (boolean). Default value is `false`.
    - **Right face** is stored as `rightFaceVisible` (boolean). Default value is `true`.
    - **Tint** is stored as `tint` (Color). Default value is `255;255;255`.
    - **Top face** is stored as `topFaceResourceName` (resource). Default value is ``.
    - **Tile** is stored as `topFaceResourceRepeat` (boolean). Default value is `false`.
    - **Top face** is stored as `topFaceVisible` (boolean). Default value is `true`.
    - **Width** is stored as `width` (number). Unit is Pixel. Default value is `100`.

### Object actions

**Face image**  
Change the image of the face.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): 3D cube
    - Parameter 1 (🔤 String): Face (one of: "front", "back", "left", "right", "top", "bottom")
    - Parameter 2 (imageResource): Image

    > Technical note: this action internal type (in GDevelop JSON) is `Scene3D::Cube3DObject::SetFaceResource`.

**Face visibility**  
Set (or unset) if a face should be visible.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): 3D cube
    - Parameter 1 (🔤 String): Face (one of: "front", "back", "left", "right", "top", "bottom")
    - Parameter 2 (❓ Yes or No): Visible?

    > Technical note: this action internal type (in GDevelop JSON) is `Scene3D::Cube3DObject::SetFaceVisibility`.

**Tint color**  
Change the tint of the cube.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): 3D Cube
    - Parameter 1 (🎨 Color): Tint

    > Technical note: this action internal type (in GDevelop JSON) is `Scene3D::Cube3DObject::SetTint`.


### Object conditions

**Face visibility**  
Check if a face should be visible.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): 3D cube
    - Parameter 1 (🔤 String): Face (one of: "front", "back", "left", "right", "top", "bottom")

    > Technical note: this condition internal type (in GDevelop JSON) is `Scene3D::Cube3DObject::FaceVisibility`.


_No expressions for this object._


## 3D Model 

An animated 3D model, useful for most elements of a 3D game. 

### Object properties

- **Center point** (choice, one of: "ModelOrigin", "ObjectCenter", "BottomCenterZ", "BottomCenterY"). Default value is `ModelOrigin`.
- **Crossfade duration** (🔢 Number, Duration). Default value is `0.1`.
- **Depth** (🔢 Number, Distance). Default value is `100`.
- **Height** (🔢 Number, Distance). Default value is `100`.
- **Shadow casting** (🔘 Boolean). Default value is `true`.
- **Shadow receiving** (🔘 Boolean). Default value is `true`.
- **Reduce initial dimensions to keep aspect ratio** (🔘 Boolean). Default value is `true`.
- **Material** (choice, one of: "Basic", "StandardWithoutMetalness", "KeepOriginal"). Default value is `StandardWithoutMetalness`.
- **3D model** (🗂️ Resource).
- **Origin point** (choice, one of: "ModelOrigin", "TopLeft", "ObjectCenter", "BottomCenterZ", "BottomCenterY"). Default value is `ModelOrigin`.
- **X** (🔢 Number, Angle). Rotation around X axis. Default value is `90`.
- **Y** (🔢 Number, Angle). Rotation around Y axis. Default value is `0`.
- **Z** (🔢 Number, Angle). Rotation around Z axis. Default value is `90`.
- **Width** (🔢 Number, Distance). Default value is `100`.

??? quote "See internal technical details"


    - **Center point** is stored as `centerLocation` (choice). Default value is `ModelOrigin`.
    - **Crossfade duration** is stored as `crossfadeDuration` (number). Unit is Second. Default value is `0.1`.
    - **Depth** is stored as `depth` (number). Unit is Pixel. Default value is `100`.
    - **Height** is stored as `height` (number). Unit is Pixel. Default value is `100`.
    - **Shadow casting** is stored as `isCastingShadow` (boolean). Default value is `true`.
    - **Shadow receiving** is stored as `isReceivingShadow` (boolean). Default value is `true`.
    - **Reduce initial dimensions to keep aspect ratio** is stored as `keepAspectRatio` (boolean). Default value is `true`.
    - **Material** is stored as `materialType` (choice). Default value is `StandardWithoutMetalness`.
    - **3D model** is stored as `modelResourceName` (resource). Default value is ``.
    - **Origin point** is stored as `originLocation` (choice). Default value is `ModelOrigin`.
    - **X** is stored as `rotationX` (number). Unit is DegreeAngle. Default value is `90`.
    - **Y** is stored as `rotationY` (number). Unit is DegreeAngle. Default value is `0`.
    - **Z** is stored as `rotationZ` (number). Unit is DegreeAngle. Default value is `90`.
    - **Width** is stored as `width` (number). Unit is Pixel. Default value is `100`.

### Object actions

**Set crossfade duration**  
Set the crossfade duration when switching to a new animation.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): 3D model
    - Parameter 1 (🔢 Number): Crossfade duration (in seconds)

    > Technical note: this action internal type (in GDevelop JSON) is `Scene3D::Model3DObject::SetCrossfadeDuration`.


_No expressions for this object._


## 3D capability 

Common features for all 3D objects: position in 3D space (including the Z axis, in addition to X and Y), size (including depth, in addition to width and height), rotation (on X and Y axis, in addition to the Z axis), scale (including Z axis, in addition to X and Y), flipping (on Z axis, in addition to horizontal (Y)/vertical (X) flipping). 

### Behavior actions

**Flip the object on Z**  
Flip the object on Z axis

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): 3D object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): Activate flipping

    > Technical note: this action internal type (in GDevelop JSON) is `Scene3D::Base3DBehavior::FlipZ`.

**Center Z position**  
Change the Z position of the center of rotation.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): 3D object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `Scene3D::Base3DBehavior::SetCenterZ`.

**Depth (size on Z axis)**  
Change the depth (size on Z axis).

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): 3D object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `Scene3D::Base3DBehavior::SetDepth`.

**Rotation on X axis**  
Change the rotation on X axis.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): 3D object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Angle (in degrees)

    > Technical note: this action internal type (in GDevelop JSON) is `Scene3D::Base3DBehavior::SetRotationX`.

**Rotation on Y axis**  
Change the rotation on Y axis.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): 3D object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Angle (in degrees)

    > Technical note: this action internal type (in GDevelop JSON) is `Scene3D::Base3DBehavior::SetRotationY`.

**Scale on Z axis**  
Change the scale on Z axis of an object (default scale is 1).

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): 3D object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Scale (1 by default)

    > Technical note: this action internal type (in GDevelop JSON) is `Scene3D::Base3DBehavior::SetScaleZ`.

**Z (elevation)**  
Change the Z position (the "elevation").

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): 3D object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `Scene3D::Base3DBehavior::SetZ`.

**Turn around X axis**  
Turn the object around X axis. This axis doesn't move with the object rotation.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): 3D object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Angle to add (in degrees)

    > Technical note: this action internal type (in GDevelop JSON) is `Scene3D::Base3DBehavior::TurnAroundX`.

**Turn around Y axis**  
Turn the object around Y axis. This axis doesn't move with the object rotation.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): 3D object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Angle to add (in degrees)

    > Technical note: this action internal type (in GDevelop JSON) is `Scene3D::Base3DBehavior::TurnAroundY`.

**Turn around Z axis**  
Turn the object around Z axis. This axis doesn't move with the object rotation.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): 3D object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Angle to add (in degrees)

    > Technical note: this action internal type (in GDevelop JSON) is `Scene3D::Base3DBehavior::TurnAroundZ`.


### Behavior conditions

**Center Z position**  
Compare the Z position of the center of rotation.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): 3D object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `Scene3D::Base3DBehavior::CenterZ`.

**Depth (size on Z axis)**  
Compare the depth (size on Z axis).

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): 3D object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `Scene3D::Base3DBehavior::Depth`.

**Flipped on Z**  
Check if the object is flipped on Z axis

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): 3D object
    - Parameter 1: 🧩 Behavior

    > Technical note: this condition internal type (in GDevelop JSON) is `Scene3D::Base3DBehavior::FlippedZ`.

**Rotation on X axis**  
Compare the rotation on X axis.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): 3D object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Angle (in degrees)

    > Technical note: this condition internal type (in GDevelop JSON) is `Scene3D::Base3DBehavior::RotationX`.

**Rotation on Y axis**  
Compare the rotation on Y axis.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): 3D object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Angle (in degrees)

    > Technical note: this condition internal type (in GDevelop JSON) is `Scene3D::Base3DBehavior::RotationY`.

**Scale on Z axis**  
Compare the scale on Z axis of an object (default scale is 1).

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): 3D object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Scale (1 by default)

    > Technical note: this condition internal type (in GDevelop JSON) is `Scene3D::Base3DBehavior::ScaleZ`.

**Z (elevation)**  
Compare the Z position (the "elevation").

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): 3D object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `Scene3D::Base3DBehavior::Z`.


### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.Object3D::CenterZ()` | Return the Z position of the center of rotation. ||
| `Object.Object3D::Depth()` | Return the depth (size on Z axis). ||
| `Object.Object3D::RotationX()` | Return the rotation on X axis. ||
| `Object.Object3D::RotationY()` | Return the rotation on Y axis. ||
| `Object.Object3D::ScaleZ()` | Return the scale on Z axis of an object (default scale is 1). ||
| `Object.Object3D::Z()` | Return the Z position (the "elevation"). ||

### Effect "Ambient light"

A light that illuminates all objects from every direction. Often used along with a Directional light (though a Hemisphere light can be used instead of an Ambient light).

This effect is for 3D layers only.

Properties of this effect are:

- **Light color**. Default value is `255;255;255`. For events, write: `"color"`.
- **Intensity**. Default value is `0.75`. For events, write: `"intensity"`.

### Effect "Bloom"

Apply a bloom effect.

This effect is for 3D layers only.

Properties of this effect are:

- **Radius (between 0 and 1)**. Default value is `0`. For events, write: `"radius"`.
- **Strength (between 0 and 3)**. Default value is `1`. For events, write: `"strength"`.
- **Threshold (between 0 and 1)**. Default value is `0`. For events, write: `"threshold"`.

### Effect "Brightness and contrast."

Adjust brightness and contrast.

This effect is for 3D layers only.

Properties of this effect are:

- **Brightness (between -1 and 1)**. Default value is `0`. For events, write: `"brightness"`.
- **Contrast (between -1 and 1)**. Default value is `0`. For events, write: `"contrast"`.

### Effect "Directional light"

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

### Effect "Fog (exponential)"

Exponential fog for 3D objects.

This effect is for 3D layers only.

Properties of this effect are:

- **Fog color**. Default value is `255;255;255`. For events, write: `"color"`.
- **Density**: Density of the fog. Usual values are between 0.0005 (far away) and 0.005 (very thick fog).. Default value is `0.0012`. For events, write: `"density"`.

### Effect "Exposure"

Adjust exposure.

This effect is for 3D layers only.

Properties of this effect are:

- **Exposure (positive value)**. Default value is `1`. For events, write: `"exposure"`.

### Effect "Hemisphere light"

A light that illuminates objects from every direction with a gradient. Often used along with a Directional light.

This effect is for 3D layers only.

Properties of this effect are:

- **Elevation (in degrees)**: Maximal elevation is reached at 90°.. Default value is `90`. For events, write: `"elevation"`.
- **Ground color**. Default value is `127;127;127`. For events, write: `"groundColor"`.
- **Intensity**. Default value is `0.5`. For events, write: `"intensity"`.
- **Rotation (in degrees)**. Default value is `0`. For events, write: `"rotation"`.
- **Sky color**. Default value is `255;255;255`. For events, write: `"skyColor"`.
- **3D world top**. Default value is `Z+`. For events, write: `"top"`.

### Effect "Hue and saturation"

Adjust hue and saturation.

This effect is for 3D layers only.

Properties of this effect are:

- **Hue in degrees (between -180 and 180)**. Default value is `0`. For events, write: `"hue"`.
- **Saturation (between -1 and 1)**. Default value is `0`. For events, write: `"saturation"`.

### Effect "Fog (linear)"

Linear fog for 3D objects.

This effect is for 3D layers only.

Properties of this effect are:

- **Fog color**. Default value is `255;255;255`. For events, write: `"color"`.
- **Distance where the fog is fully opaque**. Default value is `2000`. For events, write: `"far"`.
- **Distance where the fog starts**. Default value is `200`. For events, write: `"near"`.

### Effect "Skybox"

Display a background on a cube surrounding the scene.

This effect is for 3D layers only.

Properties of this effect are:

- **Back face (Z-)**. For events, write: `"backFaceResourceName"`.
- **Bottom face (Y+)**. For events, write: `"bottomFaceResourceName"`.
- **Front face (Z+)**. For events, write: `"frontFaceResourceName"`.
- **Left face (X-)**. For events, write: `"leftFaceResourceName"`.
- **Right face (X+)**. For events, write: `"rightFaceResourceName"`.
- **Top face (Y-)**. For events, write: `"topFaceResourceName"`.



---

The 3D extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **3D** feature of [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).