# 3D Billboard

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/b46f9cf1fc6b0ef59a461c7831003d1fb091137cbedbae876774f40f8b7dea97_pine-tree.svg" class="extension-icon"></img>
Rotate 3D objects to appear like 2D sprites.

**Authors and contributors** to this community extension: [D8H](https://gd.games/D8H).

---

Rotate 3D objects to make them face the camera and appear like 2D sprite.

The 3D racing game example uses this extension ([open the project online](https://editor.gdevelop.io/?project=example://3d-racing-game)).

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Billboard 

Rotate to always face the camera (only the front face of the cube should be enabled). 

### Behavior actions

**Enable texture transparency**  
Enable texture transparency of the front face.

**Rotate to face the camera**  
Rotate the object to the camera. This is also done automatically at the end of the scene events.

**Offset position property**  
Change the property value for the offset position.

**Should rotate on X axis property**  
Update the property value for "should rotate on X axis".

**Should rotate on Y axis property**  
Update the property value for "should rotate on Y axis".

**Should rotate on Z axis property**  
Update the property value for "should rotate on Z axis".

**Should rotate on X axis**  
Change if the object should rotate on X axis.

**Should rotate on Y axis**  
Change if the object should rotate on Y axis.

**Should rotate on Z axis**  
Change if the object should rotate on Z axis.

**Toggle Should rotate on X axis property**  
Toggle the property value for should rotate on X axis.  
If it was true, it will become false, and if it was false it will become true.

**Toggle Should rotate on Y axis property**  
Toggle the property value for should rotate on Y axis.  
If it was true, it will become false, and if it was false it will become true.

**Toggle Should rotate on Z axis property**  
Toggle the property value for should rotate on Z axis.  
If it was true, it will become false, and if it was false it will become true.

### Behavior conditions

**Offset position property**  
Compare the property value for the offset position.

**Should rotate on X axis property**  
Check the property value for should rotate on X axis.

**Should rotate on Y axis property**  
Check the property value for should rotate on Y axis.

**Should rotate on Z axis property**  
Check the property value for should rotate on Z axis.

**Should rotate on X axis**  
Check if the object should rotate on X axis.

**Should rotate on Y axis**  
Check if the object should rotate on Y axis.

**Should rotate on Z axis**  
Check if the object should rotate on Z axis.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.Billboard::PropertyOffsetPositionMode()` | Return the property value for the offset position. ||

---

*This page is an auto-generated reference page about the **3D Billboard** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).