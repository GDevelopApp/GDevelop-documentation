# With Three JS

<img src="https://resources.gdevelop-app.com/assets/Icons/rotate-3d.svg" class="extension-icon"></img>
Create a simple 3D scene.

**Authors and contributors** to this community extension: [PANDAKO](https://gd.games/PANDAKO).

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
| `WithThreeJS::CameraAngle_BACKUP(string)` | This expression has the problem that the Z Axis returns values for reverse rotation. ||
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

**Alpha Channel Test property**  
Change the property value for the alpha Channel Test.

**Anti-Aliasing property**  
Update the property value for "anti-Aliasing".

**BackOffsetV property**  
Change the property value for the backOffsetV.

**Blend Mode property**  
Change the property value for the blend Mode.

**BottomOffsetV property**  
Change the property value for the bottomOffsetV.

**Depth property**  
Change the property value for the depth.

**FirstFrame property**  
Update the property value for "firstFrame".

**FrontOffsetV property**  
Change the property value for the frontOffsetV.

**Hide 2D Object property**  
Update the property value for "hide 2D Object".

**Id property**  
Change the property value for the id.

**LeftOffsetV property**  
Change the property value for the leftOffsetV.

**Projection Scale property**  
Change the property value for the projection Scale.

**RightOffsetV property**  
Change the property value for the rightOffsetV.

**TextureIdBack property**  
Change the property value for the textureIdBack.

**TextureIdBottom property**  
Change the property value for the textureIdBottom.

**TextureIdFront property**  
Change the property value for the textureIdFront.

**TextureIdLeft property**  
Change the property value for the textureIdLeft.

**TextureIdRight property**  
Change the property value for the textureIdRight.

**TextureIdTop property**  
Change the property value for the textureIdTop.

**TopOffsetV property**  
Change the property value for the topOffsetV.

**View Mode property**  
Change the property value for the view Mode.

**Center of rotation**  
Change the center of rotation of an object relatively to the object origin.

**Scale on X axis**  
Change the width's scale of an object.

**Scale on Y axis**  
Change the height's scale of an object.

**Toggle Anti-Aliasing property**  
Toggle the property value for anti-Aliasing.  
If it was true, it will become false, and if it was false it will become true.

**Toggle FirstFrame property**  
Toggle the property value for firstFrame.  
If it was true, it will become false, and if it was false it will become true.

**Toggle Hide 2D Object property**  
Toggle the property value for hide 2D Object.  
If it was true, it will become false, and if it was false it will become true.

**Width**  
Change the width of an object.

### Object conditions

**Horizontally flipped**  
Check if the object is horizontally flipped

**Vertically flipped**  
Check if the object is vertically flipped

**Opacity**  
Compare the opacity of an object, between 0 (fully transparent) to 255 (opaque).

**Alpha Channel Test property**  
Compare the property value for the alpha Channel Test.

**Anti-Aliasing property**  
Check the property value for anti-Aliasing.

**BackOffsetV property**  
Compare the property value for the backOffsetV.

**Blend Mode property**  
Compare the property value for the blend Mode.

**BottomOffsetV property**  
Compare the property value for the bottomOffsetV.

**Depth property**  
Compare the property value for the depth.

**FirstFrame property**  
Check the property value for firstFrame.

**FrontOffsetV property**  
Compare the property value for the frontOffsetV.

**Hide 2D Object property**  
Check the property value for hide 2D Object.

**Id property**  
Compare the property value for the id.

**LeftOffsetV property**  
Compare the property value for the leftOffsetV.

**Projection Scale property**  
Compare the property value for the projection Scale.

**RightOffsetV property**  
Compare the property value for the rightOffsetV.

**TextureIdBack property**  
Compare the property value for the textureIdBack.

**TextureIdBottom property**  
Compare the property value for the textureIdBottom.

**TextureIdFront property**  
Compare the property value for the textureIdFront.

**TextureIdLeft property**  
Compare the property value for the textureIdLeft.

**TextureIdRight property**  
Compare the property value for the textureIdRight.

**TextureIdTop property**  
Compare the property value for the textureIdTop.

**TopOffsetV property**  
Compare the property value for the topOffsetV.

**View Mode property**  
Compare the property value for the view Mode.

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
| `Object.PropertyAlphaTest()` | Return the property value for the alpha Channel Test. ||
| `Object.PropertyBackOffsetV()` | Return the property value for the backOffsetV. ||
| `Object.PropertyBlend()` | Return the property value for the blend Mode. ||
| `Object.PropertyBottomOffsetV()` | Return the property value for the bottomOffsetV. ||
| `Object.PropertyDepth()` | Return the property value for the depth. ||
| `Object.PropertyFrontOffsetV()` | Return the property value for the frontOffsetV. ||
| `Object.PropertyId()` | Return the property value for the id. ||
| `Object.PropertyLeftOffsetV()` | Return the property value for the leftOffsetV. ||
| `Object.PropertyProjectionScale()` | Return the property value for the projection Scale. ||
| `Object.PropertyRightOffsetV()` | Return the property value for the rightOffsetV. ||
| `Object.PropertyTextureIdBack()` | Return the property value for the textureIdBack. ||
| `Object.PropertyTextureIdBottom()` | Return the property value for the textureIdBottom. ||
| `Object.PropertyTextureIdFront()` | Return the property value for the textureIdFront. ||
| `Object.PropertyTextureIdLeft()` | Return the property value for the textureIdLeft. ||
| `Object.PropertyTextureIdRight()` | Return the property value for the textureIdRight. ||
| `Object.PropertyTextureIdTop()` | Return the property value for the textureIdTop. ||
| `Object.PropertyTopOffsetV()` | Return the property value for the topOffsetV. ||
| `Object.PropertyViewMode()` | Return the property value for the view Mode. ||
| `Object.ScaleX()` | Return the width's scale of an object. ||
| `Object.ScaleY()` | Return the height's scale of an object. ||

## 3D Board Projection 

Create 3D Board (Plane) from Sprite object. Moving that Sprite will also move the 3D Object. 

### Behavior actions

**Set Current 3D Texture ID**  
Set Current 3D Texture ID

**Set 3D Object ID**  
Set 3D Object ID

**Alpha Channel Test property**  
Change the property value for the alpha Channel Test.

**Axis linked to 2D Object Angle property**  
Change the property value for the axis linked to 2D Object Angle.

**Anti-Aliasing property**  
Update the property value for "anti-Aliasing".

**CurrentTextureId property**  
Change the property value for the currentTextureId.

**Depth for Bounding Box Collision property**  
Change the property value for the depth for Bounding Box Collision.

**FirstFrame property**  
Update the property value for "firstFrame".

**Hide 2D Object property**  
Update the property value for "hide 2D Object".

**Id property**  
Change the property value for the id.

**Orientation property**  
Change the property value for the orientation.

**Projection Scale property**  
Change the property value for the projection Scale.

**View Mode property**  
Change the property value for the view Mode.

**Toggle Anti-Aliasing property**  
Toggle the property value for anti-Aliasing.  
If it was true, it will become false, and if it was false it will become true.

**Toggle FirstFrame property**  
Toggle the property value for firstFrame.  
If it was true, it will become false, and if it was false it will become true.

**Toggle Hide 2D Object property**  
Toggle the property value for hide 2D Object.  
If it was true, it will become false, and if it was false it will become true.

### Behavior conditions

**Is Anti-Aliasing**  
Is Anti-Aliasing

**Alpha Channel Test property**  
Compare the property value for the alpha Channel Test.

**Axis linked to 2D Object Angle property**  
Compare the property value for the axis linked to 2D Object Angle.

**Anti-Aliasing property**  
Check the property value for anti-Aliasing.

**CurrentTextureId property**  
Compare the property value for the currentTextureId.

**Depth for Bounding Box Collision property**  
Compare the property value for the depth for Bounding Box Collision.

**FirstFrame property**  
Check the property value for firstFrame.

**Hide 2D Object property**  
Check the property value for hide 2D Object.

**Id property**  
Compare the property value for the id.

**Orientation property**  
Compare the property value for the orientation.

**Projection Scale property**  
Compare the property value for the projection Scale.

**View Mode property**  
Compare the property value for the view Mode.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.BoardProjection::AlphaTest()` | Alpha Channel Test ||
| `Object.BoardProjection::AngleAxis()` | Axis linked to 2D Object Angle ||
| `Object.BoardProjection::CurrentTextureId()` | Current 3D Texture ID ||
| `Object.BoardProjection::Depth()` | Depth for Bounding Box Collision ||
| `Object.BoardProjection::Id()` | 3D Object ID ||
| `Object.BoardProjection::Orientation()` | Orientation ||
| `Object.BoardProjection::ProjectionScale()` | Projection Scale ||
| `Object.BoardProjection::PropertyAlphaTest()` | Return the property value for the alpha Channel Test. ||
| `Object.BoardProjection::PropertyAngleAxis()` | Return the property value for the axis linked to 2D Object Angle. ||
| `Object.BoardProjection::PropertyCurrentTextureId()` | Return the property value for the currentTextureId. ||
| `Object.BoardProjection::PropertyDepth()` | Return the property value for the depth for Bounding Box Collision. ||
| `Object.BoardProjection::PropertyId()` | Return the property value for the id. ||
| `Object.BoardProjection::PropertyOrientation()` | Return the property value for the orientation. ||
| `Object.BoardProjection::PropertyProjectionScale()` | Return the property value for the projection Scale. ||
| `Object.BoardProjection::PropertyViewMode()` | Return the property value for the view Mode. ||
| `Object.BoardProjection::ViewMode()` | ViewMode ||

## 3D Box Projection from Tiled Sprite 

Create 3D Box from Tiled Sprite object. Moving that Tiled Sprite will also move the 3D Object. 

### Behavior actions

**Set FrontRear Offset V**  
Set FrontRear Offset V

**Set FrontRear 3D Texture ID**  
Set FrontRear 3D Texture ID

**Set 3D Object ID**  
Set 3D Object ID

**Set Is Cube**  
Set Is Cube

**Set LeftRight Offset V**  
Set LeftRight Offset V

**Set LeftRight 3D Texture ID**  
Set LeftRight 3D Texture ID

**Alpha Channel Test property**  
Change the property value for the alpha Channel Test.

**Anti-Aliasing property**  
Update the property value for "anti-Aliasing".

**Blend Mode property**  
Change the property value for the blend Mode.

**Depth property**  
Change the property value for the depth.

**FROffsetV property**  
Change the property value for the fROffsetV.

**FRTextureId property**  
Change the property value for the fRTextureId.

**FirstFrame property**  
Update the property value for "firstFrame".

**Hide 2D Object property**  
Update the property value for "hide 2D Object".

**Id property**  
Change the property value for the id.

**IsCube property**  
Update the property value for "isCube".

**LROffsetV property**  
Change the property value for the lROffsetV.

**LRTextureId property**  
Change the property value for the lRTextureId.

**Projection Scale property**  
Change the property value for the projection Scale.

**TBOffsetV property**  
Change the property value for the tBOffsetV.

**TBTextureId property**  
Change the property value for the tBTextureId.

**View Mode property**  
Change the property value for the view Mode.

**Set TopBottom Offset V**  
Set TopBottom Offset V

**Set TopBottom 3D Texture ID**  
Set TopBottom 3D Texture ID

**Toggle Anti-Aliasing property**  
Toggle the property value for anti-Aliasing.  
If it was true, it will become false, and if it was false it will become true.

**Toggle FirstFrame property**  
Toggle the property value for firstFrame.  
If it was true, it will become false, and if it was false it will become true.

**Toggle Hide 2D Object property**  
Toggle the property value for hide 2D Object.  
If it was true, it will become false, and if it was false it will become true.

**Toggle IsCube property**  
Toggle the property value for isCube.  
If it was true, it will become false, and if it was false it will become true.

### Behavior conditions

**Is Anti-Aliasing**  
Is Anti-Aliasing

**Is Cube**  
Is Cube

**Alpha Channel Test property**  
Compare the property value for the alpha Channel Test.

**Anti-Aliasing property**  
Check the property value for anti-Aliasing.

**Blend Mode property**  
Compare the property value for the blend Mode.

**Depth property**  
Compare the property value for the depth.

**FROffsetV property**  
Compare the property value for the fROffsetV.

**FRTextureId property**  
Compare the property value for the fRTextureId.

**FirstFrame property**  
Check the property value for firstFrame.

**Hide 2D Object property**  
Check the property value for hide 2D Object.

**Id property**  
Compare the property value for the id.

**IsCube property**  
Check the property value for isCube.

**LROffsetV property**  
Compare the property value for the lROffsetV.

**LRTextureId property**  
Compare the property value for the lRTextureId.

**Projection Scale property**  
Compare the property value for the projection Scale.

**TBOffsetV property**  
Compare the property value for the tBOffsetV.

**TBTextureId property**  
Compare the property value for the tBTextureId.

**View Mode property**  
Compare the property value for the view Mode.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.BoxProjectionFromTiled::AlphaTest()` | Alpha Channel Test ||
| `Object.BoxProjectionFromTiled::Blend()` | Blend Mode ||
| `Object.BoxProjectionFromTiled::Depth()` | Depth ||
| `Object.BoxProjectionFromTiled::FROffsetV()` | FrontRear Offset V ||
| `Object.BoxProjectionFromTiled::FRTextureId()` | FrontRear 3D Texture ID ||
| `Object.BoxProjectionFromTiled::Id()` | 3D Object ID ||
| `Object.BoxProjectionFromTiled::LROffsetV()` | LeftRight Offset V ||
| `Object.BoxProjectionFromTiled::LRTextureId()` | LeftRight 3D Texture ID ||
| `Object.BoxProjectionFromTiled::ProjectionScale()` | Projection Scale ||
| `Object.BoxProjectionFromTiled::PropertyAlphaTest()` | Return the property value for the alpha Channel Test. ||
| `Object.BoxProjectionFromTiled::PropertyBlend()` | Return the property value for the blend Mode. ||
| `Object.BoxProjectionFromTiled::PropertyDepth()` | Return the property value for the depth. ||
| `Object.BoxProjectionFromTiled::PropertyFROffsetV()` | Return the property value for the fROffsetV. ||
| `Object.BoxProjectionFromTiled::PropertyFRTextureId()` | Return the property value for the fRTextureId. ||
| `Object.BoxProjectionFromTiled::PropertyId()` | Return the property value for the id. ||
| `Object.BoxProjectionFromTiled::PropertyLROffsetV()` | Return the property value for the lROffsetV. ||
| `Object.BoxProjectionFromTiled::PropertyLRTextureId()` | Return the property value for the lRTextureId. ||
| `Object.BoxProjectionFromTiled::PropertyProjectionScale()` | Return the property value for the projection Scale. ||
| `Object.BoxProjectionFromTiled::PropertyTBOffsetV()` | Return the property value for the tBOffsetV. ||
| `Object.BoxProjectionFromTiled::PropertyTBTextureId()` | Return the property value for the tBTextureId. ||
| `Object.BoxProjectionFromTiled::PropertyViewMode()` | Return the property value for the view Mode. ||
| `Object.BoxProjectionFromTiled::TBOffsetV()` | TopBottom Offset V ||
| `Object.BoxProjectionFromTiled::TBTextureId()` | TopBottom 3D Texture ID ||
| `Object.BoxProjectionFromTiled::ViewMode()` | ViewMode ||

## Linked 3D Camera 

Link a Sprite object and  a 3D Camera. 

### Behavior actions

**Hide 2D Object property**  
Update the property value for "hide 2D Object".

**Link Angle property**  
Update the property value for "link Angle".

**Projection Scale property**  
Change the property value for the projection Scale.

**View Mode property**  
Change the property value for the view Mode.

**Toggle Hide 2D Object property**  
Toggle the property value for hide 2D Object.  
If it was true, it will become false, and if it was false it will become true.

**Toggle Link Angle property**  
Toggle the property value for link Angle.  
If it was true, it will become false, and if it was false it will become true.

### Behavior conditions

**Is Hide**  
Is Hide

**Is LinkAngle**  
Is LinkAngle

**Hide 2D Object property**  
Check the property value for hide 2D Object.

**Link Angle property**  
Check the property value for link Angle.

**Projection Scale property**  
Compare the property value for the projection Scale.

**View Mode property**  
Compare the property value for the view Mode.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.LinkedCamera::ProjectionScale()` | Projection Scale ||
| `Object.LinkedCamera::PropertyProjectionScale()` | Return the property value for the projection Scale. ||
| `Object.LinkedCamera::PropertyViewMode()` | Return the property value for the view Mode. ||
| `Object.LinkedCamera::ViewMode()` | ViewMode ||

## 3D Plane Projection from Tiled Sprite 

Create 3D Plane from Tiled Sprite object. Moving that Tiled Sprite will also move the 3D Object. 

### Behavior actions

**Set 3D Object ID**  
Set 3D Object ID

**Set Offset V**  
Set Offset V

**Alpha Channel Test property**  
Change the property value for the alpha Channel Test.

**Anti-Aliasing property**  
Update the property value for "anti-Aliasing".

**Blend Mode property**  
Change the property value for the blend Mode.

**Depth for Bounding Box Collision property**  
Change the property value for the depth for Bounding Box Collision.

**FirstFrame property**  
Update the property value for "firstFrame".

**Hide 2D Object property**  
Update the property value for "hide 2D Object".

**Id property**  
Change the property value for the id.

**OffsetV property**  
Change the property value for the offsetV.

**Projection Scale property**  
Change the property value for the projection Scale.

**Rotate -90 Degrees Around X Axis property**  
Update the property value for "rotate -90 Degrees Around X Axis".

**TextureId property**  
Change the property value for the textureId.

**View Mode property**  
Change the property value for the view Mode.

**Set 3D Texture ID**  
Set 3D Texture ID

**Toggle Anti-Aliasing property**  
Toggle the property value for anti-Aliasing.  
If it was true, it will become false, and if it was false it will become true.

**Toggle FirstFrame property**  
Toggle the property value for firstFrame.  
If it was true, it will become false, and if it was false it will become true.

**Toggle Hide 2D Object property**  
Toggle the property value for hide 2D Object.  
If it was true, it will become false, and if it was false it will become true.

**Toggle Rotate -90 Degrees Around X Axis property**  
Toggle the property value for rotate -90 Degrees Around X Axis.  
If it was true, it will become false, and if it was false it will become true.

### Behavior conditions

**Is Anti-Aliasing**  
Is Anti-Aliasing

**Alpha Channel Test property**  
Compare the property value for the alpha Channel Test.

**Anti-Aliasing property**  
Check the property value for anti-Aliasing.

**Blend Mode property**  
Compare the property value for the blend Mode.

**Depth for Bounding Box Collision property**  
Compare the property value for the depth for Bounding Box Collision.

**FirstFrame property**  
Check the property value for firstFrame.

**Hide 2D Object property**  
Check the property value for hide 2D Object.

**Id property**  
Compare the property value for the id.

**OffsetV property**  
Compare the property value for the offsetV.

**Projection Scale property**  
Compare the property value for the projection Scale.

**Rotate -90 Degrees Around X Axis property**  
Check the property value for rotate -90 Degrees Around X Axis.

**TextureId property**  
Compare the property value for the textureId.

**View Mode property**  
Compare the property value for the view Mode.

**Is Rotate -90 Degrees**  
Is Rotate -90 Degrees

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.PlaneProjectionFromTiled::AlphaTest()` | Alpha Channel Test ||
| `Object.PlaneProjectionFromTiled::Blend()` | Blend Mode ||
| `Object.PlaneProjectionFromTiled::Depth()` | Depth for Bounding Box Collision ||
| `Object.PlaneProjectionFromTiled::Id()` | 3D Object ID ||
| `Object.PlaneProjectionFromTiled::OffsetV()` | Offset V ||
| `Object.PlaneProjectionFromTiled::ProjectionScale()` | Projection Scale ||
| `Object.PlaneProjectionFromTiled::PropertyAlphaTest()` | Return the property value for the alpha Channel Test. ||
| `Object.PlaneProjectionFromTiled::PropertyBlend()` | Return the property value for the blend Mode. ||
| `Object.PlaneProjectionFromTiled::PropertyDepth()` | Return the property value for the depth for Bounding Box Collision. ||
| `Object.PlaneProjectionFromTiled::PropertyId()` | Return the property value for the id. ||
| `Object.PlaneProjectionFromTiled::PropertyOffsetV()` | Return the property value for the offsetV. ||
| `Object.PlaneProjectionFromTiled::PropertyProjectionScale()` | Return the property value for the projection Scale. ||
| `Object.PlaneProjectionFromTiled::PropertyTextureId()` | Return the property value for the textureId. ||
| `Object.PlaneProjectionFromTiled::PropertyViewMode()` | Return the property value for the view Mode. ||
| `Object.PlaneProjectionFromTiled::TextureId()` | 3D Texture ID ||
| `Object.PlaneProjectionFromTiled::ViewMode()` | ViewMode ||

## 3D Sprite Projection 

Create 3D Sprite from Sprite object. Moving that Sprite will also move the 3D Sprite. 

### Behavior actions

**Set Current 3D Texture ID**  
Set Current 3D Texture ID

**Set 3D Object ID**  
Set 3D Object ID

**Alpha Channel Test property**  
Change the property value for the alpha Channel Test.

**Anti-Aliasing property**  
Update the property value for "anti-Aliasing".

**CurrentTextureId property**  
Change the property value for the currentTextureId.

**Depth for Bounding Box Collision property**  
Change the property value for the depth for Bounding Box Collision.

**FirstFrame property**  
Update the property value for "firstFrame".

**Hide 2D Object property**  
Update the property value for "hide 2D Object".

**Id property**  
Change the property value for the id.

**Projection Scale property**  
Change the property value for the projection Scale.

**View Mode property**  
Change the property value for the view Mode.

**Toggle Anti-Aliasing property**  
Toggle the property value for anti-Aliasing.  
If it was true, it will become false, and if it was false it will become true.

**Toggle FirstFrame property**  
Toggle the property value for firstFrame.  
If it was true, it will become false, and if it was false it will become true.

**Toggle Hide 2D Object property**  
Toggle the property value for hide 2D Object.  
If it was true, it will become false, and if it was false it will become true.

### Behavior conditions

**Is Anti-Aliasing**  
Is Anti-Aliasing

**Alpha Channel Test property**  
Compare the property value for the alpha Channel Test.

**Anti-Aliasing property**  
Check the property value for anti-Aliasing.

**CurrentTextureId property**  
Compare the property value for the currentTextureId.

**Depth for Bounding Box Collision property**  
Compare the property value for the depth for Bounding Box Collision.

**FirstFrame property**  
Check the property value for firstFrame.

**Hide 2D Object property**  
Check the property value for hide 2D Object.

**Id property**  
Compare the property value for the id.

**Projection Scale property**  
Compare the property value for the projection Scale.

**View Mode property**  
Compare the property value for the view Mode.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.SpriteProjection::AlphaTest()` | Alpha Channel Test ||
| `Object.SpriteProjection::CurrentTextureId()` | Current 3D Texture ID ||
| `Object.SpriteProjection::Depth()` | Depth for Bounding Box Collision ||
| `Object.SpriteProjection::Id()` | 3D Object ID ||
| `Object.SpriteProjection::ProjectionScale()` | Projection Scale ||
| `Object.SpriteProjection::PropertyAlphaTest()` | Return the property value for the alpha Channel Test. ||
| `Object.SpriteProjection::PropertyCurrentTextureId()` | Return the property value for the currentTextureId. ||
| `Object.SpriteProjection::PropertyDepth()` | Return the property value for the depth for Bounding Box Collision. ||
| `Object.SpriteProjection::PropertyId()` | Return the property value for the id. ||
| `Object.SpriteProjection::PropertyProjectionScale()` | Return the property value for the projection Scale. ||
| `Object.SpriteProjection::PropertyViewMode()` | Return the property value for the view Mode. ||
| `Object.SpriteProjection::ViewMode()` | ViewMode ||

---

*This page is an auto-generated reference page about the **With Three JS** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).