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
This extension is intended for easy and simple 3D rendering. It does not currently aim for realistic 3D rendering.  

## 📖 How to use  
Check out this page.  
[WithThreeJs Extension for GDevelop](https://pandako.itch.io/with-threejs-extension-for-gdevelop)  

## ⚠️ Notes on updating from version 1.x.x to version 2.0.0  
The "Create 3D Scene", "Load 3D Texture", "Play 3D Sound" and "Create 3D Light" actions have been updated in version 2.0.0.  
The previous actions with the same names still work but are deprecated. (Look for the ⚠️ icon in the event.) Please use the new actions with the same names.  

## 🍩 Donation  
Currently, I'm doing development in between jobs, but if many people support me, I will be able to devote more time to the development.  
If you enjoy this extension, please consider [downloading the Example project file](https://pandako.itch.io/with-threejs-extension-for-gdevelop) to maintain this extension. (The Example project file will surely help you.😉)  

## Three.js  
Copyright 2010-2022 Three.js Authors  
https://github.com/mrdoob/three.js/blob/dev/LICENSE

[Read more...](https://pandako.itch.io/with-threejs-extension-for-gdevelop)

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**👥Add Child**  
Add 3D Object as child to 3D object.

**🆔Add Suffix To 3D Object ID**  
Adds a suffix to the IDs of the specified 3D object and its children.  
Note that if lights or sounds are included as children, their IDs will also change.

**👀3D Camera Look At 3D Object**  
👀3D Camera Look At 3D Object

**💡Change 3D Ambient Light Color**  
Gradually changes the color of the 3D Ambient Light.

**🏞️Change 3D Background Color**  
Gradually changes the color of the 3D Background.

**🎥Change 3D Camera FOV**  
Change the Field Of View of the 3D Camera.

**🎥Change 3D Camera Far**  
Change the far property of 3D Camera.  
The 3D Camera will not render 3D Objects farther than this distance.

**🎥Change 3D Camera Near**  
Change the near property of the 3D Camera.  
The 3D Camera will not render 3D Objects closer than this distance.

**🎥Change 3D Camera Zoom**  
🎥Change 3D Camera Zoom

**💡Change 3D Light Color**  
Gradually changes the color of the 3D Light.

**💡Change 3D Light Intensity**  
Gradually changes the intensity of the 3D Light.

**🧱Change 3D Texture**  
Change the 3D Texture of a 3D Object.

**🎞️Change 3D Object All Animations Speed Scale**  
Change all animations speed scale of a 3D Object.  
0 is pause.
Negative values play backwards.

**🧱Change 3D Object Blend Mode**  
Change the Blend Mode of a 3D Object.

**🧱Change 3D Object DepthWrite**  
Change the DepthWrite of a 3D Object.  
Whether rendering this 3D Object has any effect on the depth buffer.
If transparent 3D Objects overlap and render incorrectly, you may be able to obtain ideal rendering results by setting the DepthWrite of that 3D Object to No.
Default is Yes.

**🔊Change Master Volume Of 3D Scene**  
🔊Change Master Volume Of 3D Scene

**🥛Change 3D Object Opacity**  
Change the Opacity of a 3D Object.  
The same value is set for multiple textures.

**🔎Change 3D Object Raycast Detection**  
Determines whether the 3D Object can be detected by Raycast.  
Default is detectable (Yes).

**↕️Change 3D Object Scale**  
Change the Scale of a 3D Object.  
Note that 3D Sprite and 3D Model were scaled when created.

**🌗Change 3D Object Visibility**  
Change the visibility of a 3D Object.

**🗑️Clear 3D Scene**  
Clear 3D Scene. Removes all 3D Objects in the 3D Scene.  
As a result, this action also removes 2D Objects that have 3D Projection Behaviors.
This action does not clear the loaded 3D Texture data and the loaded 3D Model data.
They will continue to be accessible by ID.

**🛟Create 3D Axes Helper**  
🛟Create 3D Axes Helper

**✨Create 3D Box**  
✨Create 3D Box

**👥Create 3D Group**  
This 3D Object without geometry is useful for grouping other 3D Objects together or changing their center point.

**💡Create 3D Light**  
⚠️ 3D Lights are highly loaded.  
3D Directional Light and 3D Spot Light emit light in the -Z direction.
3D Lights can be handled like 3D Objects.

**💎Create 3D Model**  
Create a new 3D model from the 3D model loaded with the "Load 3D Model From OBJ" action.

**💎Create 3D Model From Built-In 3D Model**  
The only valid object properties are "3D model" and "Material modifier".

**✨Create 3D Plane**  
✨Create 3D Plane

**🏞️Create 3D Scene**  
Create a 3D Scene and initialize all 3D Cameras.  
The second parameter is the background image.
Background image ratio 2:1 (e.g. 1024 x 512 pixels) => Skybox.
Other image ratio => Flat background image.
No image specified => No Background Image.

**✨Create 3D Sprite**  
✨Create 3D Sprite

**👥Detach From Parent**  
Detach a 3D Object from its parent.  
(Set Parent to Scene)

**🔜Linearly interpolate 3D Object**  
🔜Linearly interpolate 3D Object

**🔜Linearly interpolate 3D Camera**  
🔜Linearly interpolate 3D Camera

**📥Load 3D Model From OBJ**  
📥Load 3D Model From OBJ

**📥Load 3D Texture**  
Load image from GDevelop resources and create 3D Texture.

**👀Look At 3D Camera**  
👀Look At 3D Camera

**👀Look At 3D Object**  
👀Look At 3D Object

**↔️Move 3D Camera**  
Move a 3D Camera.  
'=' is relative to the parent axis.
"+" and "-" are relative to the local axis.

**↔️Move 3D Object**  
Move a 3D Object.  
'=' is relative to the parent axis.
"+" and "-" are relative to the local axis.

**↔️Move 3D Object On World**  
Move a 3D Object on the world axis.  
"=", "+" and "-" are relative to the world axis.

**🛟Output All IDs To Console**  
🛟Output All IDs To Console

**🛟Output 3D Model Information To Console**  
🛟Output 3D Model Information To Console

**🔎Place 3D Object Using Raycast Result**  
🔎Place 3D Object Using Raycast Result

**🎞️Play 3D Animation**  
Play 3D animation.  
If already playing, only the "Animation Speed Scale" and "Loop" properties are updated.

**🔊Play 3D Sound**  
Play a 3D Positional Sound.

**🔎Raycast**  
Do a Raycast.  
You can get the count of 3D Objects in the result with the "Raycast Result Count" expression.
The result can be accessed via the "Raycast Result Number" expression or the "Raycast Result String" string expression.

**🔎Raycast From 3D Camera**  
Do a Raycast from the 3D Camera.  
You can get the count of 3D Objects in the result with the "Raycast Result Count" expression.
The result can be accessed via the "Raycast Result Number" expression or the "Raycast Result String" string expression.

**🔎Raycast From 3D Object**  
Do a Raycast from the 3D Object. (Z axis direction)  
You can get the count of 3D Objects in the result with the "Raycast Result Count" expression.
The result can be accessed via the "Raycast Result Number" expression or the "Raycast Result String" string expression.

**🗑️Remove 3D Object**  
Remove a 3D Object from the 3D Scene.  
This action cannot remove 3D Objects created by 3D Projection Behaviors.
This action does not clear the loaded 3D Texture data and the loaded 3D Model data.
They will continue to be accessible by ID.

**💥Resolve Bounding Box Collision**  
Resolve collisions between Bounding Boxes.  
It is not necessary to use the "Check Bounding Box Collision" condition beforehand. (It will do almost the same processing)
Note that the 3D Objects are still in contact after resolution. ("Check Bounding Box Collision" condition will not be false.)
3D Object thickness too thin for the amount of movement will not resolve correctly.
This action updates the "Bounding Box Collision Result".
"Bounding Box Collision Result" stores the value when the Target 3D Object is unmoved.

**🔄️Rotate 3D Camera**  
Rotate the 3D Camera in the order X, Y, Z.

**🔄️Rotate 3D Camera Like Head**  
Rotate the 3D Camera first in the world Y axis, then on the local X and Z axes.

**🔄️Rotate 3D Camera On World**  
Rotate the 3D Camera in the order X, Y, Z on the world axis.

**🔄️Rotate 3D Object**  
Rotate the 3D Object in the order X, Y, Z.

**🔄️Rotate 3D Object Like Head**  
Rotate the 3D Object first in the world Y axis, then on the local X and Z axes.

**🔄️Rotate 3D Object On World**  
Rotate the 3D Object in the order X, Y, Z on the world axis.

**👤Set 3D Object Shadow**  
If both "Cast Shadow" and "Receive Shadow" are enabled, striped patterns are likely to occur in the shadow.

**👥Set 3D Object ID Of Children To Scene Variable (Deprecated)**  
Set 3D Object ID of all children to scene variable as array.

**👥Set 3D Object ID Of Children To Variable**  
Set 3D Object ID of all children to variable (Global, Scene or Local) as array.

**📝Set number to 3D Object Variable**  
📝Set number to 3D Object Variable

**📝Set string to 3D Object Variable**  
📝Set string to 3D Object Variable

**🎥Setup Multiple 3D Cameras**  
Note that rendering time increases by the number of enabled 3D Cameras.

**🎞️Stop 3D Animation**  
🎞️Stop 3D Animation

**🔇Stop 3D Sound**  
Stop a 3D Positional Sound.

**🛟Update Bounding Box Helper**  
Create or update Helper to graphically display Bounding Box.

## Conditions

**🎞️Check 3D Animation Is Finished**  
Check if the 3D Animation is finished.  
This condition is valid only for animations with "Loop" set to "Once".

**🎞️Check 3D Animation Is Playing**  
Check if the 3D Animation is playing.

**🎥Check 3D Object Is Within 3D Camera FOV**  
Check if the position of the 3D Object is within the field of view of the 3D camera.

**🔊Check 3D Sound Is Playing**  
Check if the 3D Sound is playing.

**💥Check Bounding Box Collision**  
Checks for collisions between the Bounding Boxes of two 3D Objects.  
This condition updates the "Bounding Box Collision Result" when it returns True.

**💎Check Existence Of 3D Object**  
💎Check Existence Of 3D Object

**💥Check Oriented Bounding Box Collision**  
Checks for collisions between the Oriented Bounding Boxes of two 3D Objects.  
OBB cannot resolve collisions between OBBs or get collision results.

**🌗Check Visibility Of 3D Object**  
Check the visibility of a 3D Object.  
This condition cannot be tested correctly if the visibility of the 3D object is changed by inheritance.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `WithThreeJS::BoundingBoxCollisionResultNumber(string)` | Bounding Box Collision Result Number ||
| | _🔤 String_ | Item |
| `WithThreeJS::CameraDirection(number, string)` | Normalized direction vector of 3D camera.(3D Camera is shooting in the negative Z axis direction) ||
| | _🔢 Number_ | 3D Camera ID (1 to 4) |
| | _🔤 String_ | Axis |
| `WithThreeJS::CameraFOV(number)` | 3D Camera FOV ||
| | _🔢 Number_ | 3D Camera ID (1 to 4) |
| `WithThreeJS::CameraFar(number)` | 3D Camera Far ||
| | _🔢 Number_ | 3D Camera ID (1 to 4) |
| `WithThreeJS::CameraNear(number)` | The camera will not render objects closer than this distance. ||
| | _🔢 Number_ | 3D Camera ID (1 to 4) |
| `WithThreeJS::CameraPosition(number, string)` | 3D Camera Position ||
| | _🔢 Number_ | 3D Camera ID (1 to 4) |
| | _🔤 String_ | Axis |
| `WithThreeJS::CameraRotation(number, string)` | 3D Camera Rotation ||
| | _🔢 Number_ | 3D Camera ID (1 to 4) |
| | _🔤 String_ | Axis |
| `WithThreeJS::CameraZoom(number)` | 3D Camera Zoom ||
| | _🔢 Number_ | 3D Camera ID (1 to 4) |
| `WithThreeJS::DistanceFrom3DCameraTo3DObject(number, string)` | Distance From 3D Camera To 3D Object ||
| | _🔢 Number_ | From 3D Camera ID (1 to 4) |
| | _🔤 Name (String)_ | To 3D Object ID |
| `WithThreeJS::DistanceFrom3DObjectTo3DObject(string, string)` | Distance From 3D Object To 3D Object ||
| | _🔤 Name (String)_ | From 3D Object ID |
| | _🔤 Name (String)_ | To 3D Object ID |
| `WithThreeJS::MasterVolumeOf3DScene()` | Master Volume Of 3D Scene ||
| `WithThreeJS::ObjectAnimationDuration(string, number)` | 3D Object Animation Duration ||
| | _🔤 Name (String)_ | 3D Object ID |
| | _🔢 Number_ | Original Animation Number |
| `WithThreeJS::ObjectAnimationSpeedScale(string, number)` | 3D Object Animation Speed Scale ||
| | _🔤 Name (String)_ | 3D Object ID |
| | _🔢 Number_ | Original Animation Number |
| `WithThreeJS::ObjectAnimationTime(string, number)` | 3D Object Animation Time ||
| | _🔤 Name (String)_ | 3D Object ID |
| | _🔢 Number_ | Original Animation Number |
| `WithThreeJS::ObjectDirection(string, string)` | Normalized direction vector of 3D Object.(Z axis direction) ||
| | _🔤 Name (String)_ | 3D Object ID |
| | _🔤 String_ | Axis |
| `WithThreeJS::ObjectNumberVariable(string, string)` | 3D Object Number Variable ||
| | _🔤 Name (String)_ | 3D Object ID |
| | _🔤 Name (String)_ | 3D Object Variable Name |
| `WithThreeJS::ObjectOpacity(string)` | Returns the opacity of the 3D Object, or the first opacity found among its children. ||
| | _🔤 Name (String)_ | 3D Object ID |
| `WithThreeJS::ObjectParent(string)` | 3D Object Parent ||
| | _🔤 Name (String)_ | 3D Object ID |
| `WithThreeJS::ObjectPosition(string, string)` | 3D Object Position ||
| | _🔤 Name (String)_ | 3D Object ID |
| | _🔤 String_ | Axis |
| `WithThreeJS::ObjectPositionOnWorld(string, string)` | 3D Object Position On World ||
| | _🔤 Name (String)_ | 3D Object ID |
| | _🔤 String_ | Axis |
| `WithThreeJS::ObjectRotation(string, string)` | 3D Object Rotation ||
| | _🔤 Name (String)_ | 3D Object ID |
| | _🔤 String_ | Axis |
| `WithThreeJS::ObjectRotationOnWorld(string, string)` | 3D Object Rotation On World ||
| | _🔤 Name (String)_ | 3D Object ID |
| | _🔤 String_ | Axis |
| `WithThreeJS::ObjectScale(string, string)` | 3D Object Scale ||
| | _🔤 Name (String)_ | 3D Object ID |
| | _🔤 String_ | Axis |
| `WithThreeJS::ObjectStringVariable(string, string)` | 3D Object String Variable ||
| | _🔤 Name (String)_ | 3D Object ID |
| | _🔤 Name (String)_ | 3D Object Variable Name |
| `WithThreeJS::PointOf3DObjectOn3DCamera(number, string, string)` | Point Of 3D Object On 3D Camera ||
| | _🔢 Number_ | 3D Camera ID (1 to 4) |
| | _🔤 Name (String)_ | 3D Object ID |
| | _🔤 String_ | Axis Of Return Value |
| `WithThreeJS::PointOfPositionOn3DCamera(number, number, number, number, string)` | Point Of World Position On 3D Camera ||
| | _🔢 Number_ | 3D Camera ID (1 to 4) |
| | _🔢 Number_ | World Position X |
| | _🔢 Number_ | World Position Y |
| | _🔢 Number_ | World Position Z |
| | _🔤 String_ | Axis Of Return Value |
| `WithThreeJS::RaycastResultCount()` | Count of 3D Objects in Raycast Result ||
| `WithThreeJS::RaycastResultNumber(number, string)` | Raycast Result Number ||
| | _🔢 Number_ | Index (0 or more) |
| | _🔤 String_ | Item |
| `WithThreeJS::RaycastResultString(number, string)` | Raycast Result String ||
| | _🔢 Number_ | Index (0 or more) |
| | _🔤 String_ | Item |

## 3D Box 

This 3D Box can have different textures on 6 faces.
⚠️ This object is high load. 

### Object expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.Depth()` | Depth ||
| `Object.Id()` | 3D Object ID ||

## Enable WithThreeJS 

Adding this object to your project will enable WithThreeJS in all scenes.
There is no need to place this in the scene. 

_No expressions for this object._


## 3D Board Projection 

Create 3D Board (Plane) from Sprite object. Moving that Sprite will also move the 3D Object. 

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.BoardProjection::AlphaTest()` | Alpha Channel Test ||
| `Object.BoardProjection::AngleAxis()` | Axis linked to 2D Object Angle ||
| `Object.BoardProjection::Id()` | 3D Object ID ||
| `Object.BoardProjection::Orientation()` | Orientation ||

## 3D Box Projection from Tiled Sprite 

Create 3D Box from Tiled Sprite object. Moving that Tiled Sprite will also move the 3D Object. 

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.BoxProjectionFromTiled::AlphaTest()` | Alpha Channel Test ||
| `Object.BoxProjectionFromTiled::Blend()` | Blend Mode ||
| `Object.BoxProjectionFromTiled::Depth()` | Depth ||
| `Object.BoxProjectionFromTiled::Id()` | 3D Object ID ||

## Linked 3D Camera 

Link a Sprite object and  a 3D Camera. 

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.LinkedCamera::Fov()` | Field Of View ||
| `Object.LinkedCamera::Id()` | 3D Camera ID ||

## Linked 3D Light 

⚠️ 3D Lights are highly loaded.
Link a Sprite object and  a 3D Light. 

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.LinkedLight::Id()` | 3D Object ID ||
| `Object.LinkedLight::Tilt()` | Tilt ||
| `Object.LinkedLight::Type()` | Type ||

## 3D Plane Projection from Tiled Sprite 

Create 3D Plane from Tiled Sprite object. Moving that Tiled Sprite will also move the 3D Object. 

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.PlaneProjectionFromTiled::AlphaTest()` | Alpha Channel Test ||
| `Object.PlaneProjectionFromTiled::Blend()` | Blend Mode ||
| `Object.PlaneProjectionFromTiled::Id()` | 3D Object ID ||

## 3D Sprite Projection 

Create 3D Sprite from Sprite object. Moving that Sprite will also move the 3D Sprite. 

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.SpriteProjection::AlphaTest()` | Alpha Channel Test ||
| `Object.SpriteProjection::Id()` | 3D Object ID ||

---

*This page is an auto-generated reference page about the **With Three JS** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).