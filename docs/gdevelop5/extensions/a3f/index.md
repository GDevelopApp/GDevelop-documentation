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
- 3D sound
- Local translation and rotation
- Blend modes
- Opacity
- Overlay objects
- Linear interpolation
- Look At
- Distance between 3D objects
- Angle between 3D objects
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

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): 3D object
    - Parameter 2 (🧩 Behavior): 3D capability

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `A3F::AddAxesHelper`.

**🧱Change blend mode**  
Change the blend mode of the 3D objects and all their children.  
This affects all 3d objects that use the same material.

??? quote "See parameters & details"

    - Parameter 1: 👾 Object
    - Parameter 2 (🧩 Behavior): 3D capability
    - Parameter 3 (🔤 String): Blend mode (one of: "Keep model blend mode", "Normal", "Additive", "Subtractive", "Multiply")
    - Parameter 4 (❓ Yes or No): Make the material unique to this object
      If No, it will affect all 3D objects that use the same material.

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `A3F::ChangeBlendModeV2`.

**🔄️Change child angle**  
Changes the angle of the 3D object's child along the child’s local axes.  
The names of the children must be checked in advance using the "🛟Output children hierarchy" action or a 3D modeling tool.
This can also be used to rotate bones.
Note that if a child is affected by a playing animation, it will override this change. In that case, please pause the animation.

??? quote "See parameters & details"

    - Parameter 1: 👾 Object
    - Parameter 2 (🧩 Behavior): 3D capability
    - Parameter 3 (🔤 String): Child name
    - Parameter 4 (🔢 Number): X-axis angle (in degrees)
    - Parameter 5 (🔢 Number): Y-axis angle (in degrees)
    - Parameter 6 (🔢 Number): Z-axis angle (in degrees)

    > Technical note: parameters 0, 7 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `A3F::ChangeChildAngle`.

**😀Change morph target value**  
Change morph target values of 3D objects.  
The names of the morph target must be checked in advance using the "🛟Output morph target names" action or a 3D modeling tool.
Note that if a morph target is affected by a playing animation, it will override this change. In that case, please pause the animation.

??? quote "See parameters & details"

    - Parameter 1: 👾 Object
    - Parameter 2 (🧩 Behavior): 3D capability
    - Parameter 3 (🔤 String): Morph target name
    - Parameter 4 (🔤 String): Operator (one of: "=", "+", "-", "*", "/")
    - Parameter 5 (🔢 Number): Value (0 to 1.0)

    > Technical note: parameters 0, 6 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `A3F::ChangeMorphTarget`.

**🥛Change opacity**  
Change the opacity of the 3D objects and all their children.

??? quote "See parameters & details"

    - Parameter 1: 👾 Object
    - Parameter 2 (🧩 Behavior): 3D capability
    - Parameter 3 (🔤 String): Operator (one of: "=", "+", "-", "*", "/")
    - Parameter 4 (🔢 Number): Opacity (0 to 255)
    - Parameter 5 (❓ Yes or No): Make the material unique to this object
      If No, it will affect all 3D objects that use the same material.

    > Technical note: parameters 0, 6 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `A3F::ChangeOpacityV2`.

**👤Change 3D shadow**  
Change the shadow settings of 3D objects.  
If both "Cast Shadow" and "Receive Shadow" are enabled, striped patterns are likely to occur in the shadow.

??? quote "See parameters & details"

    - Parameter 1: 👾 Object
    - Parameter 2 (🧩 Behavior): 3D capability
    - Parameter 3 (❓ Yes or No): Cast Shadow
    - Parameter 4 (❓ Yes or No): Receive Shadow

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `A3F::ChangeShadow`.

**🔄️Rotate child by angle**  
Rotate a child of the 3D objects along its local axes.  
The names of the children must be checked in advance using the "🛟Output children hierarchy" action or a 3D modeling tool.
This can also be used to rotate bones.
Note that if a child is affected by a playing animation, it will override this change. In that case, please pause the animation.

??? quote "See parameters & details"

    - Parameter 1: 👾 Object
    - Parameter 2 (🧩 Behavior): 3D capability
    - Parameter 3 (🔤 String): Child name
    - Parameter 4 (🔤 String): Axis (one of: "X", "Y", "Z")
    - Parameter 5 (🔢 Number): Angle (in degrees)

    > Technical note: parameters 0, 6 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `A3F::ChildRotateAngle`.

**🔄️Rotate child by speed**  
Rotate a child of the 3D objects along its local axes.  
The names of the children must be checked in advance using the "🛟Output children hierarchy" action or a 3D modeling tool.
This can also be used to rotate bones.
Note that if a child is affected by a playing animation, it will override this change. In that case, please pause the animation.

??? quote "See parameters & details"

    - Parameter 1: 👾 Object
    - Parameter 2 (🧩 Behavior): 3D capability
    - Parameter 3 (🔤 String): Child name
    - Parameter 4 (🔤 String): Axis (one of: "X", "Y", "Z")
    - Parameter 5 (🔢 Number): Speed (in degrees per second)

    > Technical note: parameters 0, 6 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `A3F::ChildRotateSpeed`.

**🔜Linearly interpolate camera**  
Moves and/or rotates a 3D camera closer to another object’s position and rotation using linear and spherical linear interpolation.  
Use the "factor" parameter to specify how much the camera should move and/or rotate (0 = no change, 0.5 = halfway, 1 = exact match).

??? quote "See parameters & details"

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

    > Technical note: this action internal type (in GDevelop JSON) is `A3F::LerpCamera`.

**🔜Linearly interpolate 3D object**  
Moves and/or rotates a 3D object closer to another object’s position and rotation using linear and spherical linear interpolation.  
Use the "factor" parameter to specify how much the object should move and/or rotate (0 = no change, 0.5 = halfway, 1 = exact match).

??? quote "See parameters & details"

    - Parameter 1: 👾 Object
    - Parameter 2 (🧩 Behavior): 3D capability
    - Parameter 3 (👾 Object): Target 3D Object
    - Parameter 4 (🧩 Behavior): Target 3D capability
    - Parameter 5 (🔢 Number): Position interpolation factor (0 to 1)
      Disable with 0
    - Parameter 6 (🔢 Number): Rotation interpolation factor (0 to 1)
      Disable with 0

    > Technical note: parameters 0, 7 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `A3F::LerpObject`.

**🔜Linearly interpolate toward child of 3D object (Experimental)**  
Linearly interpolates 3D objects toward a child of another 3D object.  
The names of the children must be checked in advance using the "🛟Output children hierarchy" action or a 3D modeling tool.

??? quote "See parameters & details"

    - Parameter 1: 👾 Object
    - Parameter 2 (🧩 Behavior): 3D capability
    - Parameter 3 (👾 Object): Target 3D Object
    - Parameter 4 (🧩 Behavior): Target 3D capability
    - Parameter 5 (🔤 String): Target child name
    - Parameter 6 (🔢 Number): Position interpolation factor (0 to 1)
      Disable with 0
    - Parameter 7 (🔢 Number): Rotation interpolation factor (0 to 1)
      Disable with 0

    > Technical note: parameters 0, 8 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `A3F::LerpTowardChild`.

**🔄️Local rotate by angle**  
Rotates the 3D object along its local axis.

??? quote "See parameters & details"

    - Parameter 1: 👾 Object
    - Parameter 2 (🧩 Behavior): 3D capability
    - Parameter 3 (🔤 String): Axis (one of: "X", "Y", "Z")
    - Parameter 4 (🔢 Number): Angle (in degrees)

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `A3F::LocalRotateAngle`.

**🔄️Local rotate camera by angle**  
Rotates the camera along its local axis.

??? quote "See parameters & details"

    - Parameter 1 (🔤 String): Axis (one of: "X", "Y", "Z")
    - Parameter 2 (🔢 Number): Angle (in degrees)
    - Parameter 3: 🔤 Layer name (String)
    - Parameter 4 (🔢 Number): Camera number

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `A3F::LocalRotateCameraAngle`.

**🔄️Local rotate camera by speed**  
Rotates the camera along its local axis.

??? quote "See parameters & details"

    - Parameter 1 (🔤 String): Axis (one of: "X", "Y", "Z")
    - Parameter 2 (🔢 Number): Speed (in degrees per second)
    - Parameter 3: 🔤 Layer name (String)
    - Parameter 4 (🔢 Number): Camera number

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `A3F::LocalRotateCameraSpeed`.

**🔄️Local rotate by speed**  
Rotates the 3D object along its local axis.

??? quote "See parameters & details"

    - Parameter 1: 👾 Object
    - Parameter 2 (🧩 Behavior): 3D capability
    - Parameter 3 (🔤 String): Axis (one of: "X", "Y", "Z")
    - Parameter 4 (🔢 Number): Speed (in degrees per second)

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `A3F::LocalRotateSpeed`.

**↔️Local translate camera by distance**  
Translates the camera along its local axis.

??? quote "See parameters & details"

    - Parameter 1 (🔤 String): Axis (one of: "X", "Y", "Z")
    - Parameter 2 (🔢 Number): Distance (in pixels)
    - Parameter 3: 🔤 Layer name (String)
    - Parameter 4 (🔢 Number): Camera number

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `A3F::LocalTranslateCameraDistance`.

**↔️Local translate camera by speed**  
Translates the camera along its local axis.

??? quote "See parameters & details"

    - Parameter 1 (🔤 String): Axis (one of: "X", "Y", "Z")
    - Parameter 2 (🔢 Number): Speed (in pixels per second)
    - Parameter 3: 🔤 Layer name (String)
    - Parameter 4 (🔢 Number): Camera number

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `A3F::LocalTranslateCameraSpeed`.

**↔️Local translate by distance**  
Translates the 3D object along its local axis.

??? quote "See parameters & details"

    - Parameter 1: 👾 Object
    - Parameter 2 (🧩 Behavior): 3D capability
    - Parameter 3 (🔤 String): Axis (one of: "X", "Y", "Z")
    - Parameter 4 (🔢 Number): Distance (in pixels)

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `A3F::LocalTranslateDistance`.

**↔️Local translate by speed**  
Translates the 3D object along its local axis.

??? quote "See parameters & details"

    - Parameter 1: 👾 Object
    - Parameter 2 (🧩 Behavior): 3D capability
    - Parameter 3 (🔤 String): Axis (one of: "X", "Y", "Z")
    - Parameter 4 (🔢 Number): Speed (in pixels per second)

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `A3F::LocalTranslateSpeed`.

**👀Look at 3D object**  
Rotates the 3D object so that its local +X direction points toward the target 3D object.

??? quote "See parameters & details"

    - Parameter 1: 👾 Object
    - Parameter 2 (🧩 Behavior): 3D capability
    - Parameter 3 (👾 Object): Target 3D object
    - Parameter 4 (🧩 Behavior): Target 3D capability
    - Parameter 5 (🔤 String): The point of the target 3D object to look at (one of: "Center point", "Origin point")

    > Technical note: parameters 0, 6 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `A3F::LookAtObject`.

**👀Look at position**  
Rotates the 3D object so that its local +X direction points toward a specified 3D position.

??? quote "See parameters & details"

    - Parameter 1: 👾 Object
    - Parameter 2 (🧩 Behavior): 3D capability
    - Parameter 3 (🔢 Number): X position
    - Parameter 4 (🔢 Number): Y position
    - Parameter 5 (🔢 Number): Z position

    > Technical note: parameters 0, 6 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `A3F::LookAtPosition`.

**↗️Store normalized direction in variable**  
Stores the normalized direction vector of the 3D object in a variable.  
The variable will be a structure variable with child variables x, y, and z.
Note that the variable will only store the value of the first referenced 3D object.

??? quote "See parameters & details"

    - Parameter 1: 👾 Object
    - Parameter 2 (🧩 Behavior): 3D capability
    - Parameter 3 (🔤 String): Axis (one of: "X", "Y", "Z", "-X", "-Y", "-Z")
    - Parameter 4: 🗄️ Any variable

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `A3F::NormalizedDirection`.

**🛟Output children hierarchy**  
Outputs the hierarchy of the 3D object's children to the console.  
It is recommended to check in the developer tools console, where line breaks and indentation are displayed, rather than in GDevelop's debugger console.
Use the following shortcut in the preview window to open the Developer Tools and select the Console tab:
Ctrl + Shift + I (Cmd + Option + I).

??? quote "See parameters & details"

    - Parameter 1: 👾 Object
    - Parameter 2 (🧩 Behavior): 3D capability

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `A3F::OutputHierarchy`.

**🛟Output morph target names**  
Outputs the morph target names of the 3D object to the console.  
It is recommended to check in the developer tools console, where line breaks and indentation are displayed, rather than in GDevelop's debugger console.
Use the following shortcut in the preview window to open the Developer Tools and select the Console tab:
Ctrl + Shift + I (Cmd + Option + I).

??? quote "See parameters & details"

    - Parameter 1: 👾 Object
    - Parameter 2 (🧩 Behavior): 3D capability

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `A3F::OutputMorphTarget`.

**📚Overlap objects**  
Overlay the object on the 3D object.  
⚠️ For objects to overlap correctly, they must be on a different layer than the 3D object. In the layer properties, the 'Default camera behavior' under 'Camera positioning' must be set to 'Keep top-left corner fixed'.

??? quote "See parameters & details"

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

    > Technical note: this action internal type (in GDevelop JSON) is `A3F::OverlapObjectsV2`.

**😀Reset morph targets**  
Sets all morph target values of the 3D object to 0.  
Note that if a morph target is affected by a playing animation, it will override this change. In that case, please pause the animation.

??? quote "See parameters & details"

    - Parameter 1: 👾 Object
    - Parameter 2 (🧩 Behavior): 3D capability

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `A3F::ResetMorphTargets`.

**👀Rotate child toward 3D object (Experimental)**  
Rotate the child towards the 3D object.  
Unlike "👀Look at 3D object", this action rotates toward the target at a specified speed without locking the up direction.
Note that if a child is affected by a playing animation, it will override this change. In that case, please pause the animation.

??? quote "See parameters & details"

    - Parameter 1: 👾 Object
    - Parameter 2 (🧩 Behavior): 3D capability
    - Parameter 3 (🔤 String): Child name
    - Parameter 4 (🔤 String): Child front (one of: "x", "y", "z", "-x", "-y", "-z")
    - Parameter 5 (🔢 Number): Angle (in degrees)
    - Parameter 6 (👾 Object): Target 3D object
    - Parameter 7 (🧩 Behavior): Target 3D capability
    - Parameter 8 (🔤 String): Points of the target 3D object (one of: "Center point", "Origin point")

    > Technical note: parameters 0, 9 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `A3F::RotateChildTowardObject`.

**👀Rotate child toward 3D object on axis (Experimental)**  
Rotates a child toward a target along a single specified axis.  
The rotation is constrained to the given axis leaving the other axes unchanged.
Note that if a child is affected by a playing animation, it will override this change. In that case, please pause the animation.

??? quote "See parameters & details"

    - Parameter 1: 👾 Object
    - Parameter 2 (🧩 Behavior): 3D capability
    - Parameter 3 (🔤 String): Child name
    - Parameter 4 (🔤 String): Child front (one of: "x", "y", "z", "-x", "-y", "-z")
    - Parameter 5 (🔤 String): Axis (one of: "x", "y", "z")
    - Parameter 6 (🔢 Number): Angle (in degrees)
    - Parameter 7 (👾 Object): Target 3D object
    - Parameter 8 (🧩 Behavior): Target 3D capability
    - Parameter 9 (🔤 String): Points of the target 3D object (one of: "Center point", "Origin point")

    > Technical note: parameters 0, 10 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `A3F::RotateChildTowardOnAxis`.

**👀Rotate toward 3D object (Experimental)**  
Unlike "👀Look at 3D object", this action rotates toward the target at a specified speed without locking the up direction.

??? quote "See parameters & details"

    - Parameter 1: 👾 Object
    - Parameter 2 (🧩 Behavior): 3D capability
    - Parameter 3 (🔢 Number): Angle (in degrees)
    - Parameter 4 (👾 Object): Target 3D object
    - Parameter 5 (🧩 Behavior): Target 3D capability
    - Parameter 6 (🔤 String): Points of the target 3D object (one of: "Center point", "Origin point")

    > Technical note: parameters 0, 7 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `A3F::RotateTowardObject`.

**👀Rotate toward 3D object on axis (Experimental)**  
Rotates an object toward a target along a single specified axis.  
The rotation is constrained to the given axis (y, or z), leaving
the other axes unchanged.

??? quote "See parameters & details"

    - Parameter 1: 👾 Object
    - Parameter 2 (🧩 Behavior): 3D capability
    - Parameter 3 (🔤 String): Axis (one of: "y", "z")
    - Parameter 4 (🔢 Number): Angle (in degrees)
    - Parameter 5 (👾 Object): Target 3D object
    - Parameter 6 (🧩 Behavior): Target 3D capability
    - Parameter 7 (🔤 String): Points of the target 3D object (one of: "Center point", "Origin point")

    > Technical note: parameters 0, 8 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `A3F::RotateTowardOnAxis`.

**👂️Set listener for camera**  
Set a listener on the 3D camera.  
Only one listener can exist in the scene at any time.
Each time the scene starts, the listener is automatically set on the base layer’s camera.

??? quote "See parameters & details"

    - Parameter 1: 🔤 Layer name (String)

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `A3F::SetListenerForCamera`.

**👂️Set listener for object**  
Set a listener at the center point of the first 3D object found.  
This listener assumes that forward is X+, up is Z+, and right is Y+.
Therefore, if the object on which the listener is set is unrotated, it must have X+ as forward, Z+ as up, and Y+ as right; otherwise, the sound will not be heard from the correct direction.
Only one listener can exist in the scene at any time.
Each time the scene starts, the listener is automatically set on the base layer’s camera.

??? quote "See parameters & details"

    - Parameter 1: 👾 Object
    - Parameter 2 (🧩 Behavior): 3D capability

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `A3F::SetListenerForObject`.


## Conditions

**↗️Check angle to 3D objects**  
Checks the unsigned angle (in degrees, range 0 to 180) between the object's local X-axis and the direction to the target in 3D space.

??? quote "See parameters & details"

    - Parameter 1: 👾 Object
    - Parameter 2 (🧩 Behavior): 3D capability
    - Parameter 3 (👾 Object): Target 3D object
    - Parameter 4 (🧩 Behavior): Target 3D capability
    - Parameter 5 (🔤 String): Points of the target 3D object (one of: "Center point", "Origin point")
    - Parameter 6 (🔤 String): Operator (one of: "=", "<", ">", "≤", "≥", "≠")
    - Parameter 7 (🔢 Number): Angle

    > Technical note: parameters 0, 8 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `A3F::CheckAngleToObjects`.

**↔️Check distance between two objects in 3D**  
Checks the distance between two objects in 3D.

??? quote "See parameters & details"

    - Parameter 1: 👾 Object
    - Parameter 2 (🧩 Behavior): 3D capability
    - Parameter 3 (🔤 String): Points of the 3D object (one of: "Center point", "Origin point")
    - Parameter 4 (👾 Object): Target Object
    - Parameter 5 (🧩 Behavior): Target 3D capability
    - Parameter 6 (🔤 String): Points of the target 3D object (one of: "Center point", "Origin point")
    - Parameter 7 (🔤 String): Operator (one of: "=", "<", ">", "≤", "≥", "≠")
    - Parameter 8 (🔢 Number): Distance

    > Technical note: parameters 0, 9 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `A3F::CheckDistanceV2`.

**🥛Check opacity**  
Check the opacity of the 3D object, or the first opacity found among its children.  
This condition can be used for non-3D objects as well, but in those cases the opacity is always compared as 255.

??? quote "See parameters & details"

    - Parameter 1: 👾 Object
    - Parameter 2 (🧩 Behavior): 3D capability
    - Parameter 3 (🔤 String): Operator (one of: "=", "<", ">", "≤", "≥", "≠")
    - Parameter 4 (🔢 Number): Opacity (0 to 255)

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `A3F::CheckOpacity`.


## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `A3F::AngleToObjects(object, object, string)` | Return the unsigned angle (in degrees, range 0 to 180) between the object's local X-axis and the direction to the target in 3D space.This expression always returns 0 when a 2D object is selected. ||
| | _👾 Object_ | Object |
| | _👾 Object_ | Target 3D object |
| | _🔤 String_ | Points of the target 3D object |
| `A3F::DistanceObjectsV2(object, string, object, string)` | Returns the distance between objects in 3D.This expression always returns 0 when a 2D object is selected. ||
| | _👾 Object_ | Object |
| | _🔤 String_ | Points of the 3D object |
| | _👾 Object_ | Target 3D object |
| | _🔤 String_ | Points of the target 3D object |
| `A3F::Opacity(object)` | Returns the opacity of the 3D object, or the first opacity found among its children. ||
| | _👾 Object_ | Object |

## Advanced 3D Initial Properties 

Use this when you want to set the initial properties of a 3D object. 

### Behavior properties

- **Axes helper** (🔘 Boolean). Default value is `false`.
- **Blend mode** (Choice, one of: "Keep model blend mode", "Normal", "Additive", "Subtractive", "Multiply"). This affects all 3d objects that use the same material. Default value is `Keep model blend mode`.
- **⚠ Cast Shadow** (🔘 Boolean). This property is deprecated and no longer works. Please use the Shadow casting property of the object's lighting instead. If both "Cast Shadow" and "Receive Shadow" are enabled, striped patterns are likely to occur in the shadow. Default value is `false`.
- **Opacity (0 to 255)** (🔢 Number). This affects all 3d objects that use the same material. Default value is `255`.
- **⚠ Receive Shadow** (🔘 Boolean). This property is deprecated and no longer works. Please use the Shadow receiving property of the object's lighting instead. If both "Cast Shadow" and "Receive Shadow" are enabled, striped patterns are likely to occur in the shadow. Default value is `false`.

??? quote "See internal technical details"


    - **Axes helper** is stored as `AxesHelper` (Boolean). Default value is `false`.
    - **Blend mode** is stored as `Blend` (Choice). Default value is `Keep model blend mode`.
    > This behavior must be used on an object also having a behavior with type "Scene3D::Base3DBehavior". This is stored on property `Capability3d`.

    - **⚠ Cast Shadow** is stored as `CastShadow` (Boolean). Default value is `false`.
    - **Opacity (0 to 255)** is stored as `Opacity` (Number). Default value is `255`.
    - **⚠ Receive Shadow** is stored as `ReceiveShadow` (Boolean). Default value is `false`.

_No expressions for this behavior._


## Advanced 3D Light 

⚠️ 3D Lights are highly loaded. 

### Behavior properties

- **Cast Shadow** (🔘 Boolean). ⚠️ This is expensive and requires tweaking to get shadows looking right. Default value is `false`.
- **Color** (🎨 Color). Default value is `255;255;255`.
- **Distance (Default: 0)** (🔢 Number). For Point and Spot Lights. 0 is no limit. Default value is `0`.
- **Intensity (Default: 1)** (🔢 Number). Default value is `1`.
- **Light Helper** (🔘 Boolean). Default value is `false`.
- **Shadow Depth Bias (Default: 0)** (🔢 Number). It is mainly effective for filling gaps between objects and shadows. Reference value: [Directional Light: 0.002] [Point Light: 0.001] [Spot Light: 0.00001]. Default value is `0`.
- **Shadow Range Helper** (🔘 Boolean). Default value is `false`.
- **Shadow Map Size** (Choice, one of: "128px", "256px", "512px", "1024px", "2048px"). The larger the map, the better the shadow quality, but the greater the load. Default value is `512px`.
- **Shadow Normal Bias (Default: 0)** (🔢 Number). It is mainly effective in reducing striped patterns. Reference value: [Directional Light: 2] [Point Light: 1] [Spot Light: 1]. Default value is `0`.
- **Range to Draw Shadows** (🔢 Number). The smaller the range, the better the shadow quality. For Point and Spot Lights, this value is valid only if the Distance is 0. Default value is `256`.
- **Spot Angle (0 to 180)** (🔢 Number). For Spot Lights. The narrower the angle, the better the shadow quality. If it is a multiple of 90, the shadow will not be cast correctly. Default value is `45`.
- **Spot Penumbra (0 to 1)** (🔢 Number). For Spot Lights. Default value is `0.5`.
- **Type** (Choice, one of: "Directional Light", "Point Light", "Spot Light"). Default value is `Directional Light`.

??? quote "See internal technical details"


    > This behavior must be used on an object also having a behavior with type "Scene3D::Base3DBehavior". This is stored on property `Capability3d`.

    - **Cast Shadow** is stored as `CastShadow` (Boolean). Default value is `false`.
    - **Color** is stored as `Color` (Color). Default value is `255;255;255`.
    - **Distance (Default: 0)** is stored as `Distance` (Number). Default value is `0`.
    - **Intensity (Default: 1)** is stored as `Intensity` (Number). Default value is `1`.
    - **Light Helper** is stored as `LightHelper` (Boolean). Default value is `false`.
    - **Shadow Depth Bias (Default: 0)** is stored as `ShadowDepthBias` (Number). Default value is `0`.
    - **Shadow Range Helper** is stored as `ShadowHelper` (Boolean). Default value is `false`.
    - **Shadow Map Size** is stored as `ShadowMapSize` (Choice). Default value is `512px`.
    - **Shadow Normal Bias (Default: 0)** is stored as `ShadowNormalBias` (Number). Default value is `0`.
    - **Range to Draw Shadows** is stored as `ShadowRange` (Number). Default value is `256`.
    - **Spot Angle (0 to 180)** is stored as `SpotAngle` (Number). Default value is `45`.
    - **Spot Penumbra (0 to 1)** is stored as `SpotPenumbra` (Number). Default value is `0.5`.
    - **Type** is stored as `Type` (Choice). Default value is `Directional Light`.

### Behavior actions

**💡Change Light Color**  
Gradually changes the color of the 3D Light.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🎨 Color
    - Parameter 3 (🔢 Number): Duration (in seconds)
      If the duration is set to 0, the change is immediate.
    - Parameter 4 (🔤 String): Gradient color space (one of: "RGB", "HSL")

    > Technical note: parameter 5 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `A3F::A3L::ChangeColor`.

**💡Change Light Intensity**  
Gradually changes the intensity of the 3D Light.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Intensity (Default: 1)
    - Parameter 3 (🔢 Number): Duration (in seconds)
      If the duration is set to 0, the change is immediate.

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `A3F::A3L::ChangeIntensity`.


_No expressions for this behavior._


## Advanced 3D Sound 

Use this when you want to play sound from a 3D object. 

### Behavior actions

**🔊Play sound**  
Play sound from object center point.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (audioResource): Sound
    - Parameter 3 (🔢 Number): Volume
      From 0 to 100, 100 by default.
    - Parameter 4 (❓ Yes or No): Loop
    - Parameter 5 (🔢 Number): Range

    > Technical note: parameter 6 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `A3F::A3S::Play`.

**🔊Stop all sounds of object**  
Stop all sounds emitted by this object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `A3F::A3S::StopAll`.


_No expressions for this behavior._



---

*This page is an auto-generated reference page about the **Advanced 3D Features** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).