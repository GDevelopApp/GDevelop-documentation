# 3D height map

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/10e0a26c0d500830dfe23b94138beb0ef61607ba62bca05a5aa5c849777f1b06_terrain.svg" class="extension-icon"></img>
A terrain with hills where 3D physics objects can stand.

**Authors and contributors** to this community extension: [D8H](https://gd.games/D8H).

!!! warning
    This is an extension made by a community member — but not reviewed
    by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of official extensions. In case of
    doubt, contact the author to know more about what the extension
    does or inspect its content before using it.

---

A terrain with hills where objects with the 3D physics behavior can stand.

A terrain can be built from:

- an image file
- noise function ([open the project online](https://editor.gdevelop.io/?project=example://3d-endless-terrain))


[Read more...](/gdevelop5/extensions/height-map3d/details)

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## 3D height map 

A terrain with hills in 3D. 

### Object actions

**Update height map**  
Update the height map. This is done automatically at the  end of every frame, but it can be used manually to avoid a 1-frame delay.

**Load height map**  
Load a height map from an image file.

**Grid value**  
Change the field value at a grid index. The value is bewteen 0 and 1.

### Object conditions

**Field point Z**  
Compare the field Z for a given position in the scene.

**Grid dimension X**  
Compare the number of points in the grid on X axis.

**Grid dimension Y**  
Compare the number of points in the grid on Y axis.

**Grid value**  
Compare the field value at a grid index. The value is bewteen 0 and 1.

### Object expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.FieldZ(number, number)` | Return the field Z for a given position in the scene. ||
| | _🔢 Number_ | X position in the scene |
| | _🔢 Number_ | Y position in the scene |
| `Object.GridDimensionX()` | Return the number of points in the grid on X axis. ||
| `Object.GridDimensionY()` | Return the number of points in the grid on Y axis. ||
| `Object.GridValue(number, number)` | Return the field value at a grid index. The value is bewteen 0 and 1. ||
| | _🔢 Number_ | X grid index |
| | _🔢 Number_ | Y grid index |

## 3D physics height map 

A terrain with hills where 3D physics objects can stand. 

_No expressions for this behavior._


---

*This page is an auto-generated reference page about the **3D height map** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).