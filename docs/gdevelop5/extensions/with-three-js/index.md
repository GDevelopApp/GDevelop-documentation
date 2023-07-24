# With Three JS

<img src="https://resources.gdevelop-app.com/assets/Icons/rotate-3d.svg" class="extension-icon"></img>
Create a simple 3D scene.

**Authors and contributors** to this community extension: [PANDAKO](https://gd.games/PANDAKO).

!!! warning
    This is an extension made by a community member — but not reviewed
    by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of official extensions. In case of
    doubt, contact the author to know more about what the extension
    does or inspect its content before using it.

---

Extension for GDevelop to create simple 3D scenes.  
This extension is intended for easy and simple 3D rendering. It does not currently aim for realistic rendering with light and shadow.  

##⚠️ Precautions for use  
This extension is experimental. Destructive changes may be made.  

##📖 How to use  
Check out this page.  
[WithThreeJs Extension for GDevelop](https://pandako.itch.io/with-threejs-extension-for-gdevelop)  

##🍩 Donation  
Currently, I'm doing development in between jobs, but if many people support me, I will be able to devote more time to the development.  
If you enjoy this extension, please consider [downloading the Example project file](https://pandako.itch.io/with-threejs-extension-for-gdevelop) to maintain this extension. (The Example project file will surely help you.😉)  

## Three.js  
Copyright 2010-2022 Three.js Authors  
https://github.com/mrdoob/three.js/blob/dev/LICENSE

[Read more...](https://pandako.itch.io/with-threejs-extension-for-gdevelop)

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Add Child**  
Add 3D Object as child to 3D object.

**3D Camera Look At 3D Object**  
3D Camera Look At 3D Object

**Change 3D Camera FOV**  
Change the Field Of View of the 3D Camera.

**Change 3D Camera Far**  
Change the far property of 3D Camera.  
The 3D Camera will not render 3D Objects farther than this distance.

**Change 3D Camera Near**  
Change the near property of the 3D Camera.  
The 3D Camera will not render 3D Objects closer than this distance.

**Change 3D Camera Zoom**  
Change 3D Camera Zoom

**Change 3D Texture**  
Change the 3D Texture of a 3D Object.

**Change 3D Object DepthWrite (experimental)**  
Change the DepthWrite of a 3D Object.  
Whether rendering this 3D Object has any effect on the depth buffer.
If transparent 3D Objects overlap and render incorrectly, you may be able to obtain ideal rendering results by setting the DepthWrite of that 3D Object to No.
Default is Yes.

**Change Master Volume Of 3D Scene**  
Change Master Volume Of 3D Scene

**Change 3D Object Opacity**  
Change the Opacity of a 3D Object.  
The same value is set for multiple textures.

**Change 3D Object Scale**  
Change the Scale of a 3D Object.  
Note that 3D Sprite and 3D Model were scaled when created.

**Change 3D Object Visibility**  
Change the visibility of a 3D Object.

**Clear 3D Scene**  
Clear 3D Scene. Removes all 3D Objects in the 3D Scene.  
As a result, this action also removes 2D Objects that have 3D Projection Behaviors.
This action does not clear the loaded 3D Texture data and the loaded 3D Model data.
They will continue to be accessible by ID.

**Correct 3D Camera Rotation Within Limits (experimental)**  
Correct the 3D Camera Rotation within limits.  
Unlimited with Min = -180 and Max = 180.
Rotation is corrected like head movement. Limiting multiple axes can break things.

**Correct 3D Object Rotation Within Limits (experimental)**  
Correct the 3D Object Rotation within limits.  
Unlimited with Min = -180 and Max = 180.
Limiting multiple axes can break things.

**Create 3D Axes Helper**  
Create 3D Axes Helper

**Create 3D Box**  
Create 3D Box

**Create 3D Model**  
Create 3D Model

**Create 3D Plane**  
Create 3D Plane

**Create 3D Scene**  
Create a 3D scene and place the 3D Camera at position X: 0, Y: 0, Z: 0.

**Create 3D Sprite**  
Create 3D Sprite

**Detach From Parent**  
Detach a 3D Object from its parent.  
(Set Parent to Scene)

**Load 3D Model From OBJ**  
Load 3D Model From OBJ

**Load 3D Texture**  
Load image from GDevelop resources and create 3D Texture.  
Note that this is an asynchronous process.

**Load 3D Texture V2**  
Load image from GDevelop resources and create 3D Texture.

**Look At 3D Camera**  
Look At 3D Camera

**Look At 3D Object**  
Look At 3D Object

**Move 3D Camera**  
Move a 3D Camera.  
'=' is relative to the parent axis.
"+" and "-" are relative to the local axis.

**Move 3D Object**  
Move a 3D Object.  
'=' is relative to the parent axis.
"+" and "-" are relative to the local axis.

**Move 3D Object On World**  
Move a 3D Object on the world axis.  
"=", "+" and "-" are relative to the world axis.

**Output All IDs To Console**  
Output All IDs To Console

**Output 3D Model Information To Console**  
Output 3D Model Information To Console

**Play 3D Sound**  
Play a 3D Positional Sound.

**Raycast**  
Do a Raycast.  
You can get the count of 3D Objects in the result with the "Raycast Result Count" expression.
The result can be accessed via the "Raycast Result Number" expression or the "Raycast Result String" string expression.

**Raycast From 3D Camera**  
Do a Raycast from the 3D Camera.  
You can get the count of 3D Objects in the result with the "Raycast Result Count" expression.
The result can be accessed via the "Raycast Result Number" expression or the "Raycast Result String" string expression.

**Remove 3D Object**  
Remove a 3D Object from the 3D Scene.  
This action cannot remove 3D Objects created by 3D Projection Behaviors.
This action does not clear the loaded 3D Texture data and the loaded 3D Model data.
They will continue to be accessible by ID.

**Resolve Bounding Box Collision**  
Resolve collisions between Bounding Boxes.  
It is not necessary to use the "Check Bounding Box Collision" condition beforehand. (It will do almost the same processing)
Note that the 3D Objects are still in contact after resolution. ("Check Bounding Box Collision" condition will not be false.)
3D Object thickness too thin for the amount of movement will not resolve correctly.
This action updates the "Bounding Box Collision Result".

**Rotate 3D Camera**  
Rotate 3D Camera

**Rotate 3D Camera Like Head**  
Rotate 3D Camera Like Head

**Rotate 3D Camera On World**  
Rotate 3D Camera On World

**Rotate 3D Object**  
Rotate 3D Object

**Rotate 3D Object On World**  
Rotate 3D Object On World

**Set 3D Object ID Of Children To Scene Variable**  
Set 3D Object ID of all children to scene variable as array.

**Stop 3D Sound**  
Stop a 3D Positional Sound.

**Update Bounding Box Helper**  
Create or update Helper to graphically display Bounding Box.

## Conditions

**Check 3D Sound Is Playing**  
Check if 3D Sound is playing.

**Check Bounding Box Collision**  
Checks for collisions between the Bounding Boxes of two 3D Objects.  
This condition updates the "Bounding Box Collision Result" when it returns True.

**Check Existence Of 3D Object**  
Check Existence Of 3D Object

**Check Visibility Of 3D Object**  
Check the visibility of a 3D Object.  
This condition cannot be tested correctly if the visibility of the 3D object is changed by inheritance.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `WithThreeJS::BoundingBoxCollisionResultNumber(string)` | Bounding Box Collision Result Number ||
| | _string_ | Item |
| `WithThreeJS::CameraAngle(string)` | 3D Camera Angle for GDevelop.Returns the angle of an individual axis.Note that combining the resulting XYZ values may not reproduce the original rotation. ||
| | _string_ | Axis |
| `WithThreeJS::CameraDirection(string)` | Normalized direction vector of 3D camera.(3D Camera is shooting in the negative Z axis direction) ||
| | _string_ | Axis |
| `WithThreeJS::CameraFOV()` | 3D Camera FOV ||
| `WithThreeJS::CameraFar()` | 3D Camera Far ||
| `WithThreeJS::CameraNear()` | The camera will not render objects closer than this distance. ||
| `WithThreeJS::CameraPosition(string)` | 3D Camera Position ||
| | _string_ | Axis |
| `WithThreeJS::CameraRotation(string)` | 3D Camera Rotation ||
| | _string_ | Axis |
| `WithThreeJS::CameraZoom()` | 3D Camera Zoom ||
| `WithThreeJS::DistanceFrom3DCameraTo3DObject(identifier)` | Distance From 3D Camera To 3D Object ||
| | _identifier_ | To 3D Object ID |
| `WithThreeJS::DistanceFrom3DObjectTo3DObject(identifier, identifier)` | Distance From 3D Object To 3D Object ||
| | _identifier_ | From 3D Object ID |
| | _identifier_ | To 3D Object ID |
| `WithThreeJS::MasterVolumeOf3DScene()` | Master Volume Of 3D Scene ||
| `WithThreeJS::ObjectDirection(identifier, string)` | Normalized direction vector of 3D Object.(Z axis direction) ||
| | _identifier_ | 3D Object ID |
| | _string_ | Axis |
| `WithThreeJS::ObjectOpacity(identifier)` | 3D Object Opacity ||
| | _identifier_ | 3D Object ID |
| `WithThreeJS::ObjectParent(identifier)` | 3D Object Parent ||
| | _identifier_ | 3D Object ID |
| `WithThreeJS::ObjectPosition(identifier, string)` | 3D Object Position ||
| | _identifier_ | 3D Object ID |
| | _string_ | Axis |
| `WithThreeJS::ObjectPositionOnWorld(identifier, string)` | 3D Object Position On World ||
| | _identifier_ | 3D Object ID |
| | _string_ | Axis |
| `WithThreeJS::ObjectRotation(identifier, string)` | 3D Object Rotation ||
| | _identifier_ | 3D Object ID |
| | _string_ | Axis |
| `WithThreeJS::ObjectRotationOnWorld(identifier, string)` | 3D Object Rotation On World ||
| | _identifier_ | 3D Object ID |
| | _string_ | Axis |
| `WithThreeJS::ObjectScale(identifier, string)` | 3D Object Scale ||
| | _identifier_ | 3D Object ID |
| | _string_ | Axis |
| `WithThreeJS::RaycastResultCount()` | Count of 3D Objects in Raycast Result ||
| `WithThreeJS::RaycastResultNumber(number, string)` | Raycast Result Number ||
| | _number_ | Index (0 or more) |
| | _string_ | Item |
| `WithThreeJS::RaycastResultString(number, string)` | Raycast Result String ||
| | _number_ | Index (0 or more) |
| | _string_ | Item |

## 3D Box (experimental) 

This 3D Box can have different textures on 6 faces.
⚠️ This object is high load. 

### Object actions

**Flip the object horizontally**  
Flip the object horizontally

**Flip the object vertically**  
Flip the object vertically

**Height**  
Change the height of an object.

**Scale**  
Modify the scale of the specified object.

**Opacity**  
Change the opacity of an object, between 0 (fully transparent) to 255 (opaque).

**Scale on X axis**  
Change the width's scale of an object.

**Scale on Y axis**  
Change the height's scale of an object.

**Width**  
Change the width of an object.

### Object conditions

**Horizontally flipped**  
Check if the object is horizontally flipped

**Vertically flipped**  
Check if the object is vertically flipped

**Opacity**  
Compare the opacity of an object, between 0 (fully transparent) to 255 (opaque).

**Scale on X axis**  
Compare the width's scale of an object.

**Scale on Y axis**  
Compare the height's scale of an object.

### Object expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.Depth()` | Depth ||
| `Object.Id()` | 3D Object ID ||
| `Object.Opacity()` | Return the opacity of an object, between 0 (fully transparent) to 255 (opaque). ||
| `Object.ProjectionScale()` | Projection Scale ||
| `Object.ScaleX()` | Return the width's scale of an object. ||
| `Object.ScaleY()` | Return the height's scale of an object. ||

## 3D Board Projection 

Create 3D Board (Plane) from Sprite object. Moving that Sprite will also move the 3D Object. 

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.BoardProjection::AlphaTest()` | Alpha Channel Test ||
| `Object.BoardProjection::AngleAxis()` | Axis linked to 2D Object Angle ||
| `Object.BoardProjection::Id()` | 3D Object ID ||
| `Object.BoardProjection::Orientation()` | Orientation ||
| `Object.BoardProjection::ProjectionScale()` | Projection Scale ||
| `Object.BoardProjection::ViewMode()` | ViewMode ||

## 3D Box Projection from Tiled Sprite 

Create 3D Box from Tiled Sprite object. Moving that Tiled Sprite will also move the 3D Object. 

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.BoxProjectionFromTiled::AlphaTest()` | Alpha Channel Test ||
| `Object.BoxProjectionFromTiled::Blend()` | Blend Mode ||
| `Object.BoxProjectionFromTiled::Depth()` | Depth ||
| `Object.BoxProjectionFromTiled::Id()` | 3D Object ID ||
| `Object.BoxProjectionFromTiled::ProjectionScale()` | Projection Scale ||
| `Object.BoxProjectionFromTiled::ViewMode()` | ViewMode ||

## Linked 3D Camera 

Link a Sprite object and  a 3D Camera. 

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.LinkedCamera::ProjectionScale()` | Projection Scale ||
| `Object.LinkedCamera::ViewMode()` | ViewMode ||

## 3D Plane Projection from Tiled Sprite 

Create 3D Plane from Tiled Sprite object. Moving that Tiled Sprite will also move the 3D Object. 

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.PlaneProjectionFromTiled::AlphaTest()` | Alpha Channel Test ||
| `Object.PlaneProjectionFromTiled::Blend()` | Blend Mode ||
| `Object.PlaneProjectionFromTiled::Id()` | 3D Object ID ||
| `Object.PlaneProjectionFromTiled::ProjectionScale()` | Projection Scale ||
| `Object.PlaneProjectionFromTiled::ViewMode()` | ViewMode ||

## 3D Sprite Projection 

Create 3D Sprite from Sprite object. Moving that Sprite will also move the 3D Sprite. 

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.SpriteProjection::AlphaTest()` | Alpha Channel Test ||
| `Object.SpriteProjection::Id()` | 3D Object ID ||
| `Object.SpriteProjection::ProjectionScale()` | Projection Scale ||
| `Object.SpriteProjection::ViewMode()` | ViewMode ||

---

*This page is an auto-generated reference page about the **With Three JS** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).