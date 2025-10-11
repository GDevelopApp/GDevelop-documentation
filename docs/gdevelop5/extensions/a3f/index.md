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

??? quote "See parameters"

    - Parameter 1 (👾 Object): 3D object
    - Parameter 2 (🧩 Behavior): 3D capability

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

**🧱Change blend mode**  
Change the blend mode of the 3D objects and all their children.  
This affects all 3d objects that use the same material.

??? quote "See parameters"

    - Parameter 1: 👾 Object
    - Parameter 2 (🧩 Behavior): 3D capability
    - Parameter 3 (🔤 String): Blend mode (one of: "Keep model blend mode", "Normal", "Additive", "Subtractive", "Multiply")
    - Parameter 4 (❓ Yes or No): Make the material unique to this object
      If No, it will affect all 3D objects that use the same material.

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

**🔄️Change child angle**  
Changes the angle of the 3D object's child along the child’s local axes.  
The names of the children must be checked in advance using the "🛟Output children hierarchy" action or a 3D modeling tool.
This can also be used to rotate bones.
Note that if a child is affected by a playing animation, it will override this change. In that case, please pause the animation.

??? quote "See parameters"

    - Parameter 1: 👾 Object
    - Parameter 2 (🧩 Behavior): 3D capability
    - Parameter 3 (string): Child name
    - Parameter 4 (🔢 Number): X-axis angle (in degrees)
    - Parameter 5 (🔢 Number): Y-axis angle (in degrees)
    - Parameter 6 (🔢 Number): Z-axis angle (in degrees)

    > Technical note: parameters 0, 7 are internal parameters handled by GDevelop.

**😀Change morph target value**  
Change morph target values of 3D objects.  
The names of the morph target must be checked in advance using the "🛟Output morph target names" action or a 3D modeling tool.
Note that if a morph target is affected by a playing animation, it will override this change. In that case, please pause the animation.

??? quote "See parameters"

    - Parameter 1: 👾 Object
    - Parameter 2 (🧩 Behavior): 3D capability
    - Parameter 3 (string): Morph target name
    - Parameter 4 (🔤 String): Operator (one of: "=", "+", "-", "*", "/")
    - Parameter 5 (🔢 Number): Value (0 to 1.0)

    > Technical note: parameters 0, 6 are internal parameters handled by GDevelop.

**🥛Change opacity**  
Change the opacity of the 3D objects and all their children.

??? quote "See parameters"

    - Parameter 1: 👾 Object
    - Parameter 2 (🧩 Behavior): 3D capability
    - Parameter 3 (🔤 String): Operator (one of: "=", "+", "-", "*", "/")
    - Parameter 4 (🔢 Number): Opacity (0 to 255)
    - Parameter 5 (❓ Yes or No): Make the material unique to this object
      If No, it will affect all 3D objects that use the same material.

    > Technical note: parameters 0, 6 are internal parameters handled by GDevelop.

**👤Change 3D shadow**  
Change the shadow settings of 3D objects.  
If both "Cast Shadow" and "Receive Shadow" are enabled, striped patterns are likely to occur in the shadow.

??? quote "See parameters"

    - Parameter 1: 👾 Object
    - Parameter 2 (🧩 Behavior): 3D capability
    - Parameter 3 (❓ Yes or No): Cast Shadow
    - Parameter 4 (❓ Yes or No): Receive Shadow

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

**🔄️Rotate child by angle**  
Rotate a child of the 3D objects along its local axes.  
The names of the children must be checked in advance using the "🛟Output children hierarchy" action or a 3D modeling tool.
This can also be used to rotate bones.
Note that if a child is affected by a playing animation, it will override this change. In that case, please pause the animation.

??? quote "See parameters"

    - Parameter 1: 👾 Object
    - Parameter 2 (🧩 Behavior): 3D capability
    - Parameter 3 (string): Child name
    - Parameter 4 (🔤 String): Axis (one of: "X", "Y", "Z")
    - Parameter 5 (🔢 Number): Angle (in degrees)

    > Technical note: parameters 0, 6 are internal parameters handled by GDevelop.

**🔄️Rotate child by speed**  
Rotate a child of the 3D objects along its local axes.  
The names of the children must be checked in advance using the "🛟Output children hierarchy" action or a 3D modeling tool.
This can also be used to rotate bones.
Note that if a child is affected by a playing animation, it will override this change. In that case, please pause the animation.

??? quote "See parameters"

    - Parameter 1: 👾 Object
    - Parameter 2 (🧩 Behavior): 3D capability
    - Parameter 3 (string): Child name
    - Parameter 4 (🔤 String): Axis (one of: "X", "Y", "Z")
    - Parameter 5 (🔢 Number): Speed (in degrees per second)

    > Technical note: parameters 0, 6 are internal parameters handled by GDevelop.

**🔜Linearly interpolate camera**  
Moves and/or rotates a 3D camera closer to another object’s position and rotation using linear and spherical linear interpolation.  
Use the "factor" parameter to specify how much the camera should move and/or rotate (0 = no change, 0.5 = halfway, 1 = exact match).

??? quote "See parameters"

    - Parameter 1: 🔤 Layer name (String)
    - Parameter 2 (🔢 Number): Camera number
    - Parameter 3 (👾 Object): Target 3D Object
    - Parameter 4 (🧩 Behavior): Target 3D capability
    - Parameter 5 (🔢 Number): Position interpolation factor (0 to 1)
      Disable with 0
    - Parameter 6 (🔢 Number): Rotation interpolation factor (0 to 1)
      Disable with 0
    - Parameter 7 (❓ Yes or No): Based on the object's viewpoint

    > Technical note: parameters 0, 8 are internal parameters handled by GDevelop.

**🔜Linearly interpolate 3D object**  
Moves and/or rotates a 3D object closer to another object’s position and rotation using linear and spherical linear interpolation.  
Use the "factor" parameter to specify how much the object should move and/or rotate (0 = no change, 0.5 = halfway, 1 = exact match).

??? quote "See parameters"

    - Parameter 1: 👾 Object
    - Parameter 2 (🧩 Behavior): 3D capability
    - Parameter 3 (👾 Object): Target 3D Object
    - Parameter 4 (🧩 Behavior): Target 3D capability
    - Parameter 5 (🔢 Number): Position interpolation factor (0 to 1)
      Disable with 0
    - Parameter 6 (🔢 Number): Rotation interpolation factor (0 to 1)
      Disable with 0

    > Technical note: parameters 0, 7 are internal parameters handled by GDevelop.

**🔜Linearly interpolate toward child of 3D object (Experimental)**  
Linearly interpolates 3D objects toward a child of another 3D object.  
The names of the children must be checked in advance using the "🛟Output children hierarchy" action or a 3D modeling tool.

??? quote "See parameters"

    - Parameter 1: 👾 Object
    - Parameter 2 (🧩 Behavior): 3D capability
    - Parameter 3 (👾 Object): Target 3D Object
    - Parameter 4 (🧩 Behavior): Target 3D capability
    - Parameter 5 (string): Target child name
    - Parameter 6 (🔢 Number): Position interpolation factor (0 to 1)
      Disable with 0
    - Parameter 7 (🔢 Number): Rotation interpolation factor (0 to 1)
      Disable with 0

    > Technical note: parameters 0, 8 are internal parameters handled by GDevelop.

**🔄️Local rotate by angle**  
Rotates the 3D object along its local axis.

??? quote "See parameters"

    - Parameter 1: 👾 Object
    - Parameter 2 (🧩 Behavior): 3D capability
    - Parameter 3 (🔤 String): Axis (one of: "X", "Y", "Z")
    - Parameter 4 (🔢 Number): Angle (in degrees)

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

**🔄️Local rotate camera by angle**  
Rotates the camera along its local axis.

??? quote "See parameters"

    - Parameter 1 (🔤 String): Axis (one of: "X", "Y", "Z")
    - Parameter 2 (🔢 Number): Angle (in degrees)
    - Parameter 3: 🔤 Layer name (String)
    - Parameter 4 (🔢 Number): Camera number

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

**🔄️Local rotate camera by speed**  
Rotates the camera along its local axis.

??? quote "See parameters"

    - Parameter 1 (🔤 String): Axis (one of: "X", "Y", "Z")
    - Parameter 2 (🔢 Number): Speed (in degrees per second)
    - Parameter 3: 🔤 Layer name (String)
    - Parameter 4 (🔢 Number): Camera number

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

**🔄️Local rotate by speed**  
Rotates the 3D object along its local axis.

??? quote "See parameters"

    - Parameter 1: 👾 Object
    - Parameter 2 (🧩 Behavior): 3D capability
    - Parameter 3 (🔤 String): Axis (one of: "X", "Y", "Z")
    - Parameter 4 (🔢 Number): Speed (in degrees per second)

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

**↔️Local translate camera by distance**  
Translates the camera along its local axis.

??? quote "See parameters"

    - Parameter 1 (🔤 String): Axis (one of: "X", "Y", "Z")
    - Parameter 2 (🔢 Number): Distance (in pixels)
    - Parameter 3: 🔤 Layer name (String)
    - Parameter 4 (🔢 Number): Camera number

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

**↔️Local translate camera by speed**  
Translates the camera along its local axis.

??? quote "See parameters"

    - Parameter 1 (🔤 String): Axis (one of: "X", "Y", "Z")
    - Parameter 2 (🔢 Number): Speed (in pixels per second)
    - Parameter 3: 🔤 Layer name (String)
    - Parameter 4 (🔢 Number): Camera number

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

**↔️Local translate by distance**  
Translates the 3D object along its local axis.

??? quote "See parameters"

    - Parameter 1: 👾 Object
    - Parameter 2 (🧩 Behavior): 3D capability
    - Parameter 3 (🔤 String): Axis (one of: "X", "Y", "Z")
    - Parameter 4 (🔢 Number): Distance (in pixels)

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

**↔️Local translate by speed**  
Translates the 3D object along its local axis.

??? quote "See parameters"

    - Parameter 1: 👾 Object
    - Parameter 2 (🧩 Behavior): 3D capability
    - Parameter 3 (🔤 String): Axis (one of: "X", "Y", "Z")
    - Parameter 4 (🔢 Number): Speed (in pixels per second)

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

**👀Look at 3D object**  
Rotates the 3D object so that its local +X direction points toward the target 3D object.

??? quote "See parameters"

    - Parameter 1: 👾 Object
    - Parameter 2 (🧩 Behavior): 3D capability
    - Parameter 3 (👾 Object): Target 3D Object
    - Parameter 4 (🧩 Behavior): Target 3D capability
    - Parameter 5 (🔤 String): The point of the target 3D object to look at (one of: "Center point", "Origin point")

    > Technical note: parameters 0, 6 are internal parameters handled by GDevelop.

**👀Look at position**  
Rotates the 3D object so that its local +X direction points toward a specified 3D position.

??? quote "See parameters"

    - Parameter 1: 👾 Object
    - Parameter 2 (🧩 Behavior): 3D capability
    - Parameter 3 (🔢 Number): X position
    - Parameter 4 (🔢 Number): Y position
    - Parameter 5 (🔢 Number): Z position

    > Technical note: parameters 0, 6 are internal parameters handled by GDevelop.

**↗️Store normalized direction in variable**  
Stores the normalized direction vector of the 3D object in a variable.  
The variable will be a structure variable with child variables x, y, and z.
Note that the variable will only store the value of the first referenced 3D object.

??? quote "See parameters"

    - Parameter 1: 👾 Object
    - Parameter 2 (🧩 Behavior): 3D capability
    - Parameter 3 (🔤 String): Axis (one of: "X", "Y", "Z", "-X", "-Y", "-Z")
    - Parameter 4: 🗄️ Any variable

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

**🛟Output children hierarchy**  
Outputs the hierarchy of the 3D object's children to the console.  
It is recommended to check in the developer tools console, where line breaks and indentation are displayed, rather than in GDevelop's debugger console.
Use the following shortcut in the preview window to open the Developer Tools and select the Console tab:
Ctrl + Shift + I (Cmd + Option + I).

??? quote "See parameters"

    - Parameter 1: 👾 Object
    - Parameter 2 (🧩 Behavior): 3D capability

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

**🛟Output morph target names**  
Outputs the morph target names of the 3D object to the console.  
It is recommended to check in the developer tools console, where line breaks and indentation are displayed, rather than in GDevelop's debugger console.
Use the following shortcut in the preview window to open the Developer Tools and select the Console tab:
Ctrl + Shift + I (Cmd + Option + I).

??? quote "See parameters"

    - Parameter 1: 👾 Object
    - Parameter 2 (🧩 Behavior): 3D capability

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

**📚Overlap objects**  
Overlay the object on the 3D object.  
⚠️ For objects to overlap correctly, they must be on a different layer than the 3D object. In the layer properties, the 'Default camera behavior' under 'Camera positioning' must be set to 'Keep top-left corner fixed'.

??? quote "See parameters"

    - Parameter 1 (👾 Object): Any object
    - Parameter 2 (❓ Yes or No): Hide when behind the 3D camera
      Hides the 2D object when the 3D object is behind the 3D camera.
    - Parameter 3 (👾 Object): Target 3D object
    - Parameter 4 (🧩 Behavior): Target 3D Capability
    - Parameter 5 (🔤 String): Target point (one of: "Origin point", "Center point")
    - Parameter 6 (🔢 Number): X Offset
    - Parameter 7 (🔢 Number): Y Offset
    - Parameter 8 (🔢 Number): Z Offset

    > Technical note: parameters 0, 9 are internal parameters handled by GDevelop.

**😀Reset morph targets**  
Sets all morph target values of the 3D object to 0.  
Note that if a morph target is affected by a playing animation, it will override this change. In that case, please pause the animation.

??? quote "See parameters"

    - Parameter 1: 👾 Object
    - Parameter 2 (🧩 Behavior): 3D capability

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

## Conditions

**↔️Check the distance between two objects in 3D**  
Checks the distance between two objects (origin points) in 3D.

??? quote "See parameters"

    - Parameter 1: 👾 Object
    - Parameter 2 (🧩 Behavior): 3D capability
    - Parameter 3: 👾 Object
    - Parameter 4 (🧩 Behavior): Target 3D capability
    - Parameter 5 (🔤 String): Operator (one of: "=", "<", ">", "≤", "≥", "≠")
    - Parameter 6 (🔢 Number): Distance

    > Technical note: parameters 0, 7 are internal parameters handled by GDevelop.

**🥛Check opacity**  
Check the opacity of the 3D object, or the first opacity found among its children.  
This condition can be used for non-3D objects as well, but in those cases the opacity is always compared as 255.

??? quote "See parameters"

    - Parameter 1: 👾 Object
    - Parameter 2 (🧩 Behavior): 3D capability
    - Parameter 3 (🔤 String): Operator (one of: "=", "<", ">", "≤", "≥", "≠")
    - Parameter 4 (🔢 Number): Opacity (0 to 255)

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

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

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: color
    - Parameter 3 (🔢 Number): Duration (in seconds)
      If the duration is set to 0, the change is immediate.
    - Parameter 4 (🔤 String): Gradient color space (one of: "RGB", "HSL")

    > Technical note: parameter 5 are internal parameters handled by GDevelop.

**💡Change Light Intensity**  
Gradually changes the intensity of the 3D Light.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Intensity (Default: 1)
    - Parameter 3 (🔢 Number): Duration (in seconds)
      If the duration is set to 0, the change is immediate.

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

_No expressions for this behavior._



---

*This page is an auto-generated reference page about the **Advanced 3D Features** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).