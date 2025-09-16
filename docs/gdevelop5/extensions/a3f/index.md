# Advanced 3D Features

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/Line Hero Pack/Master/SVG/Graphic Design/f4c71080f9213188ee5556b1acb45ad46fe6e5225947301c363105b080fca008_Graphic Design_3d_cube_isometric.svg" class="extension-icon"></img>
This extension adds features to the built-in 3D.

**Authors and contributors** to this experimental extension: [PANDAKO](https://gd.games/PANDAKO).

!!! warning
    This is an extension made by a community member and it only got through a
    light review by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of fully reviewed extensions.

---

3D features added by this extension:  

- Lighting
- Light color and intensity control
- Shadows
- Local translation and rotation
- Blend modes
- Opacity
- Overlay objects
- Linear interpolation
- Look At
- Distance between 3D objects
- Bone control
- Morph target control
- Access child objects of 3D objects
- Normalized direction
- Axes helper
- Light helper
- Shadow range helper
- Hierarchy output

[Read more...](https://pandako.itch.io/a3f)

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**🛟Add axes helper**  
The axis helper is added to the 3D object.  
Note that it is added to the center point, not the origin point.

**🧱Change blend mode**  
Change the blend mode of the 3D objects and all their children.  
This affects all 3d objects that use the same material.

**🔄️Change child angle**  
Changes the angle of the 3D object's child along the child’s local axes.  
The names of the children must be checked in advance using the "🛟Output children hierarchy" action or a 3D modeling tool.
This can also be used to rotate bones.
Note that if a child is affected by a playing animation, it will override this change. In that case, please pause the animation.

**😀Change morph target value**  
Change morph target values of 3D models.  
The names of the morph target must be checked in advance using the "🛟Output morph target names" action or a 3D modeling tool.
Note that if a morph target is affected by a playing animation, it will override this change. In that case, please pause the animation.

**🥛Change opacity**  
Change the opacity of the 3D objects and all their children.

**👤Change 3D shadow**  
Change the shadow settings of 3D objects.  
If both "Cast Shadow" and "Receive Shadow" are enabled, striped patterns are likely to occur in the shadow.

**🔄️Rotate child by angle**  
Rotate a child of the 3D objects along its local axes.  
The names of the children must be checked in advance using the "🛟Output children hierarchy" action or a 3D modeling tool.
This can also be used to rotate bones.
Note that if a child is affected by a playing animation, it will override this change. In that case, please pause the animation.

**🔄️Rotate child by speed**  
Rotate a child of the 3D objects along its local axes.  
The names of the children must be checked in advance using the "🛟Output children hierarchy" action or a 3D modeling tool.
This can also be used to rotate bones.
Note that if a child is affected by a playing animation, it will override this change. In that case, please pause the animation.

**🔜Linearly interpolate camera**  
Moves and/or rotates a 3D camera closer to another object’s position and rotation using linear and spherical linear interpolation.  
Use the "factor" parameter to specify how much the camera should move and/or rotate (0 = no change, 0.5 = halfway, 1 = exact match).

**🔜Linearly interpolate 3D object**  
Moves and/or rotates a 3D object closer to another object’s position and rotation using linear and spherical linear interpolation.  
Use the "factor" parameter to specify how much the object should move and/or rotate (0 = no change, 0.5 = halfway, 1 = exact match).

**🔜Linearly interpolate toward child of 3D object (Experimental)**  
Linearly interpolates 3D objects toward a child of another 3D object.  
The names of the children must be checked in advance using the "🛟Output children hierarchy" action or a 3D modeling tool.

**🔄️Local rotate by angle**  
Rotates the 3D object along its local axis.

**🔄️Local rotate camera by angle**  
Rotates the camera along its local axis.

**🔄️Local rotate camera by speed**  
Rotates the camera along its local axis.

**🔄️Local rotate by speed**  
Rotates the 3D object along its local axis.

**↔️Local translate camera by distance**  
Translates the camera along its local axis.

**↔️Local translate camera by speed**  
Translates the camera along its local axis.

**↔️Local translate by distance**  
Translates the 3D object along its local axis.

**↔️Local translate by speed**  
Translates the 3D object along its local axis.

**👀Look at 3D object**  
Rotates the 3D object so that its local +X direction points toward the target 3D object.

**👀Look at position**  
Rotates the 3D object so that its local +X direction points toward a specified 3D position.

**↗️Store normalized direction in variable**  
Stores the normalized direction vector of the 3D object in a variable.  
The variable will be a structure variable with child variables x, y, and z.
Note that the variable will only store the value of the first referenced 3D object.

**🛟Output children hierarchy**  
Outputs the hierarchy of the 3D object's children to the console.  
It is recommended to check in the developer tools console, where line breaks and indentation are displayed, rather than in GDevelop's debugger console.
Use the following shortcut in the preview window to open the Developer Tools and select the Console tab:
Ctrl + Shift + I (Cmd + Option + I).

**🛟Output morph target names**  
Outputs the morph target names of the 3D object to the console.  
It is recommended to check in the developer tools console, where line breaks and indentation are displayed, rather than in GDevelop's debugger console.
Use the following shortcut in the preview window to open the Developer Tools and select the Console tab:
Ctrl + Shift + I (Cmd + Option + I).

**📚Overlap objects**  
Overlay the object on the 3D object.  
⚠️ For objects to overlap correctly, they must be on a different layer than the 3D object. In the layer properties, the 'Default camera behavior' under 'Camera positioning' must be set to 'Keep top-left corner fixed'.

**😀Reset morph targets**  
Sets all morph target values of the 3D object to 0.  
Note that if a morph target is affected by a playing animation, it will override this change. In that case, please pause the animation.

## Conditions

**↔️Check the distance between two objects in 3D**  
Checks the distance between two objects (origin points) in 3D.

**🥛Check opacity**  
Check the opacity of the 3D object, or the first opacity found among its children.  
This condition can be used for non-3D objects as well, but in those cases the opacity is always compared as 255.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `A3F::DistanceObjects(object, object)` | Returns the distance between objects in 3D. (Distance between origin points)This expression always returns 0 when a 2D object is selected. ||
| | _👾 Object_ | Object |
| | _👾 Object_ | Target Object |
| `A3F::Opacity(object)` | Returns the opacity of the 3D object, or the first opacity found among its children. ||
| | _👾 Object_ | Object |

## Advanced 3D Initial Properties 

Use this when you want to set the initial properties of a 3D object. 

_No expressions for this behavior._


## Advanced 3D Light 

⚠️ 3D Lights are highly loaded. 

### Behavior actions

**💡Change Light Color**  
Gradually changes the color of the 3D Light.

**💡Change Light Intensity**  
Gradually changes the intensity of the 3D Light.

_No expressions for this behavior._



---

*This page is an auto-generated reference page about the **Advanced 3D Features** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).