# Tweening Reference

Smoothly animate object properties over time — such as position, rotation scale, opacity, and more — as well as variables. Ideal for creating fluid transitions and UI animations. While you can use tweens to move objects, other behaviors (like platform, physics, ellipse movement...) or forces are often better suited for dynamic movement. Tween is best used for animating UI elements, static objects that need to move from one point to another, or other values like variables. [Read more explanations about it.](/gdevelop5/behaviors/tween)

## Actions

**Tween a layer value**  
Tweens a layer value that can be use with the expression Tween::Value.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Tween Identifier
    - Parameter 2 (🔢 Number): From value
    - Parameter 3 (🔢 Number): To value
    - Parameter 4: easing
    - Parameter 5 (🔢 Number): Duration (in seconds)
    - Parameter 6 (❓ Yes or No): Exponential interpolation
    - Parameter 7: 🔤 Layer name (String)

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Tween::AddLayerValueTween`.

**Tween a scene value**  
Tweens a scene value that can be use with the expression Tween::Value.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Tween Identifier
    - Parameter 2 (🔢 Number): From value
    - Parameter 3 (🔢 Number): To value
    - Parameter 4: easing
    - Parameter 5 (🔢 Number): Duration (in seconds)
    - Parameter 6 (❓ Yes or No): Exponential interpolation

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Tween::AddLayoutValueTween`.

**Pause a scene tween**  
Pause the running scene tween.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Tween Identifier

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Tween::PauseSceneTween`.

**Remove a scene tween**  
Remove the scene tween. Call this when the tween is no longer needed to free memory.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Tween Identifier

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Tween::RemoveSceneTween`.

**Resume a scene tween**  
Resume the scene tween.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Tween Identifier

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Tween::ResumeSceneTween`.

**Stop a scene tween**  
Stop the running scene tween.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Tween Identifier
    - Parameter 2 (❓ Yes or No): Jump to the end

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Tween::StopSceneTween`.

**Tween the camera position**  
Tweens the camera position from the current one to a new one.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Tween Identifier
    - Parameter 2 (🔢 Number): Target X position
    - Parameter 3 (🔢 Number): Target Y position
    - Parameter 4: 🔤 Layer name (String)
    - Parameter 5: easing
    - Parameter 6 (🔢 Number): Duration (in seconds)

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Tween::TweenCameraPosition2`.

**Tween the camera rotation**  
Tweens the camera rotation from the current angle to a new one.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Tween Identifier
    - Parameter 2 (🔢 Number): Target rotation (in degrees)
    - Parameter 3: 🔤 Layer name (String)
    - Parameter 4: easing
    - Parameter 5 (🔢 Number): Duration (in seconds)

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Tween::TweenCameraRotation2`.

**Tween the camera zoom**  
Tweens the camera zoom from the current zoom factor to a new one.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Tween Identifier
    - Parameter 2 (🔢 Number): Target zoom
    - Parameter 3: 🔤 Layer name (String)
    - Parameter 4: easing
    - Parameter 5 (🔢 Number): Duration (in seconds)

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Tween::TweenCameraZoom2`.

**Tween color effect property**  
Tweens a color effect property from its current value to a new one.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Tween Identifier
    - Parameter 2 (🎨 Color): To color
    - Parameter 3: 🔤 Layer name (String)
    - Parameter 4: 🔤 Layer Effect Name (String)
    - Parameter 5: 🔤 Layer Effect Property Name (String)
    - Parameter 6: easing
    - Parameter 7 (🔢 Number): Duration (in seconds)

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Tween::TweenColorEffectPropertyTween`.

**Tween number effect property**  
Tweens a number effect property from its current value to a new one.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Tween Identifier
    - Parameter 2 (🔢 Number): To value
    - Parameter 3: 🔤 Layer name (String)
    - Parameter 4: 🔤 Layer Effect Name (String)
    - Parameter 5: 🔤 Layer Effect Property Name (String)
    - Parameter 6: easing
    - Parameter 7 (🔢 Number): Duration (in seconds)

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Tween::TweenNumberEffectPropertyTween`.

**Tween a number in a scene variable**  
Tweens a scene variable's numeric value from its current value to a new one.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Tween Identifier
    - Parameter 2 (🗄️ Scene variable): The variable to tween
    - Parameter 3 (🔢 Number): Final value
    - Parameter 4: easing
    - Parameter 5 (🔢 Number): Duration (in seconds)

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Tween::TweenSceneVariableNumber3`.


## Conditions

**Tween progress**  
Compare the progress of a tween (between 0.0 and 1.0).

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Tween Identifier
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Tween::Progress`.

**Scene tween exists**  
Check if the scene tween exists.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Tween Identifier

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Tween::SceneTweenExists`.

**Scene tween finished playing**  
Check if the scene tween has finished playing.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Tween Identifier

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Tween::SceneTweenHasFinished`.

**Scene tween is playing**  
Check if the scene tween is currently playing.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Tween Identifier

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Tween::SceneTweenIsPlaying`.


## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `Tween::Ease(easing, number, number, number)` | Tween between 2 values according to an easing function. ||
| | _easing_ | Easing |
| | _🔢 Number_ | From value |
| | _🔢 Number_ | To value |
| | _🔢 Number_ | Weighting From 0 to 1. |
| `Tween::Progress(string)` | Return the progress of a tween (between 0.0 and 1.0). ||
| | _🔤 Name (String)_ | Tween Identifier |
| `Tween::Value(string)` | Return the value of a tween. It is always 0 for tweens with several values. ||
| | _🔤 Name (String)_ | Tween Identifier |

## Tween 

Smoothly animate position, angle, scale and other properties of objects. 

### Behavior actions

**Tween object depth**  
Tweens an object depth (suitable 3D objects only) from its current depth to a new one.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🧩 Behavior): 3D capability
    - Parameter 3 (🔤 Name (String)): Tween Identifier
    - Parameter 4 (🔢 Number): To depth
    - Parameter 5: easing
    - Parameter 6 (🔢 Number): Duration (in seconds)
    - Parameter 7 (❓ Yes or No): Destroy this object when tween finishes

    > Technical note: this action internal type (in GDevelop JSON) is `Tween::AddObjectDepthTween2`.

**Tween object Z position**  
Tweens an object Z position (3D objects only) from its current Z position to a new one.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🧩 Behavior): 3D capability
    - Parameter 3 (🔤 Name (String)): Tween Identifier
    - Parameter 4 (🔢 Number): To Z
    - Parameter 5: easing
    - Parameter 6 (🔢 Number): Duration (in seconds)
    - Parameter 7 (❓ Yes or No): Destroy this object when tween finishes

    > Technical note: this action internal type (in GDevelop JSON) is `Tween::AddObjectPositionZTween2`.

**Pause a tween**  
Pause the running tween animation.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 Name (String)): Tween Identifier

    > Technical note: this action internal type (in GDevelop JSON) is `Tween::PauseTween`.

**Remove a tween**  
Remove the tween animation from the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 Name (String)): Tween Identifier

    > Technical note: this action internal type (in GDevelop JSON) is `Tween::RemoveTween`.

**Resume a tween**  
Resume the tween animation.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 Name (String)): Tween Identifier

    > Technical note: this action internal type (in GDevelop JSON) is `Tween::ResumeTween`.

**Stop a tween**  
Stop the running tween animation.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 Name (String)): Tween Identifier
    - Parameter 3 (❓ Yes or No): Jump to end

    > Technical note: this action internal type (in GDevelop JSON) is `Tween::StopTween`.

**Tween color effect property**  
Tweens a color effect property from its current value to a new one.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🧩 Behavior): Effect capability
    - Parameter 3 (🔤 Name (String)): Tween Identifier
    - Parameter 4 (🎨 Color): To color
    - Parameter 5: 🔤 Object Effect Name (String)
    - Parameter 6: 🔤 Object Effect Property Name (String)
    - Parameter 7: easing
    - Parameter 8 (🔢 Number): Duration (in seconds)
    - Parameter 9 (❓ Yes or No): Destroy this object when tween finishes

    > Technical note: this action internal type (in GDevelop JSON) is `Tween::TweenBehavior::AddColorEffectPropertyTween`.

**Tween number effect property**  
Tweens a number effect property from its current value to a new one.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🧩 Behavior): Effect capability
    - Parameter 3 (🔤 Name (String)): Tween Identifier
    - Parameter 4 (🔢 Number): To value
    - Parameter 5: 🔤 Object Effect Name (String)
    - Parameter 6: 🔤 Object Effect Property Name (String)
    - Parameter 7: easing
    - Parameter 8 (🔢 Number): Duration (in seconds)
    - Parameter 9 (❓ Yes or No): Destroy this object when tween finishes

    > Technical note: this action internal type (in GDevelop JSON) is `Tween::TweenBehavior::AddNumberEffectPropertyTween`.

**Tween object angle**  
Tweens an object angle from its current angle to a new one.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 Name (String)): Tween Identifier
    - Parameter 3 (🔢 Number): To angle (in degrees)
    - Parameter 4: easing
    - Parameter 5 (🔢 Number): Duration (in seconds)
    - Parameter 6 (❓ Yes or No): Destroy this object when tween finishes

    > Technical note: this action internal type (in GDevelop JSON) is `Tween::TweenBehavior::AddObjectAngleTween2`.

**Tween object HSL color**  
Tweens the object color using Hue/Saturation/Lightness. Hue is in degrees, Saturation and Lightness are between 0 and 100. Use -1 for Saturation and Lightness to let them unchanged.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 Name (String)): Tween Identifier
    - Parameter 3 (🔢 Number): To Hue (in degrees)
    - Parameter 4 (❓ Yes or No): Animate Hue
    - Parameter 5 (🔢 Number): To Saturation (0 to 100, -1 to ignore)
    - Parameter 6 (🔢 Number): To Lightness (0 to 100, -1 to ignore)
    - Parameter 7: easing
    - Parameter 8 (🔢 Number): Duration (in seconds)
    - Parameter 9 (❓ Yes or No): Destroy this object when tween finishes

    > Technical note: this action internal type (in GDevelop JSON) is `Tween::TweenBehavior::AddObjectColorHSLTween2`.

**Tween object color**  
Tweens the object color from its current value to a new one. Format: "128;200;255" with values between 0 and 255 for red, green and blue

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 Name (String)): Tween Identifier
    - Parameter 3 (🎨 Color): To color
    - Parameter 4: easing
    - Parameter 5 (🔢 Number): Duration (in seconds)
    - Parameter 6 (❓ Yes or No): Destroy this object when tween finishes
    - Parameter 7 (❓ Yes or No): Tween on the Hue/Saturation/Lightness (HSL)
      Useful to have a more natural change between colors.

    > Technical note: this action internal type (in GDevelop JSON) is `Tween::TweenBehavior::AddObjectColorTween2`.

**Tween object height**  
Tweens an object height from its current height to a new one.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 Name (String)): Tween Identifier
    - Parameter 3 (🔢 Number): To height
    - Parameter 4: easing
    - Parameter 5 (🔢 Number): Duration (in seconds)
    - Parameter 6 (❓ Yes or No): Destroy this object when tween finishes

    > Technical note: this action internal type (in GDevelop JSON) is `Tween::TweenBehavior::AddObjectHeightTween2`.

**Tween object opacity**  
Tweens the object opacity from its current value to a new one (note: the value shall stay between 0 and 255).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 Name (String)): Tween Identifier
    - Parameter 3 (🔢 Number): To opacity
    - Parameter 4: easing
    - Parameter 5 (🔢 Number): Duration (in seconds)
    - Parameter 6 (❓ Yes or No): Destroy this object when tween finishes

    > Technical note: this action internal type (in GDevelop JSON) is `Tween::TweenBehavior::AddObjectOpacityTween2`.

??? tip "Hints and advice"

    Tweening opacity only works on 2D objects, it has no effect/won't run on 3D objects.

**Tween object position**  
Tweens an object position from its current position to a new one.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 Name (String)): Tween Identifier
    - Parameter 3 (🔢 Number): To X
    - Parameter 4 (🔢 Number): To Y
    - Parameter 5: easing
    - Parameter 6 (🔢 Number): Duration (in seconds)
    - Parameter 7 (❓ Yes or No): Destroy this object when tween finishes

    > Technical note: this action internal type (in GDevelop JSON) is `Tween::TweenBehavior::AddObjectPositionTween2`.

**Tween object X position**  
Tweens an object X position from its current X position to a new one.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 Name (String)): Tween Identifier
    - Parameter 3 (🔢 Number): To X
    - Parameter 4: easing
    - Parameter 5 (🔢 Number): Duration (in seconds)
    - Parameter 6 (❓ Yes or No): Destroy this object when tween finishes

    > Technical note: this action internal type (in GDevelop JSON) is `Tween::TweenBehavior::AddObjectPositionXTween2`.

**Tween object Y position**  
Tweens an object Y position from its current Y position to a new one.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 Name (String)): Tween Identifier
    - Parameter 3 (🔢 Number): To Y
    - Parameter 4: easing
    - Parameter 5 (🔢 Number): Duration (in seconds)
    - Parameter 6 (❓ Yes or No): Destroy this object when tween finishes

    > Technical note: this action internal type (in GDevelop JSON) is `Tween::TweenBehavior::AddObjectPositionYTween2`.

**Tween object rotation on X axis**  
Tweens an object rotation on X axis from its current angle to a new one.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🧩 Behavior): 3D capability
    - Parameter 3 (🔤 Name (String)): Tween Identifier
    - Parameter 4 (🔢 Number): To angle (in degrees)
    - Parameter 5: easing
    - Parameter 6 (🔢 Number): Duration (in seconds)
    - Parameter 7 (❓ Yes or No): Destroy this object when tween finishes

    > Technical note: this action internal type (in GDevelop JSON) is `Tween::TweenBehavior::AddObjectRotationXTween`.

**Tween object rotation on Y axis**  
Tweens an object rotation on Y axis from its current angle to a new one.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🧩 Behavior): 3D capability
    - Parameter 3 (🔤 Name (String)): Tween Identifier
    - Parameter 4 (🔢 Number): To angle (in degrees)
    - Parameter 5: easing
    - Parameter 6 (🔢 Number): Duration (in seconds)
    - Parameter 7 (❓ Yes or No): Destroy this object when tween finishes

    > Technical note: this action internal type (in GDevelop JSON) is `Tween::TweenBehavior::AddObjectRotationYTween`.

**Tween object scale**  
Tweens an object scale from its current value to a new one (note: the scale can never be 0 or less).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 Name (String)): Tween Identifier
    - Parameter 3 (🔢 Number): To scale
    - Parameter 4: easing
    - Parameter 5 (🔢 Number): Duration (in seconds)
    - Parameter 6 (❓ Yes or No): Destroy this object when tween finishes
    - Parameter 7 (❓ Yes or No): Scale from center of object

    > Technical note: this action internal type (in GDevelop JSON) is `Tween::TweenBehavior::AddObjectScaleTween3`.

**Tween object X-scale**  
Tweens an object X-scale from its current value to a new one (note: the scale can never be 0 or less).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 Name (String)): Tween Identifier
    - Parameter 3 (🔢 Number): To scale X
    - Parameter 4: easing
    - Parameter 5 (🔢 Number): Duration (in seconds)
    - Parameter 6 (❓ Yes or No): Destroy this object when tween finishes
    - Parameter 7 (❓ Yes or No): Scale from center of object

    > Technical note: this action internal type (in GDevelop JSON) is `Tween::TweenBehavior::AddObjectScaleXTween2`.

**Tween object Y-scale**  
Tweens an object Y-scale from its current value to a new one (note: the scale can never be 0 or less).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 Name (String)): Tween Identifier
    - Parameter 3 (🔢 Number): To scale Y
    - Parameter 4: easing
    - Parameter 5 (🔢 Number): Duration (in seconds)
    - Parameter 6 (❓ Yes or No): Destroy this object when tween finishes
    - Parameter 7 (❓ Yes or No): Scale from center of object

    > Technical note: this action internal type (in GDevelop JSON) is `Tween::TweenBehavior::AddObjectScaleYTween2`.

**Tween an object value**  
Tweens an object value that can be use with the object expression Tween::Value.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 Name (String)): Tween Identifier
    - Parameter 3 (🔢 Number): From value
    - Parameter 4 (🔢 Number): To value
    - Parameter 5: easing
    - Parameter 6 (🔢 Number): Duration (in seconds)
    - Parameter 7 (❓ Yes or No): Exponential interpolation
    - Parameter 8 (❓ Yes or No): Destroy this object when tween finishes

    > Technical note: this action internal type (in GDevelop JSON) is `Tween::TweenBehavior::AddObjectValueTween`.

**Tween a number in an object variable**  
Tweens an object variable's numeric value from its current value to a new one.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 Name (String)): Tween Identifier
    - Parameter 3 (🗄️ Object variable): Object variable
    - Parameter 4 (🔢 Number): To value
    - Parameter 5: easing
    - Parameter 6 (🔢 Number): Duration (in seconds)
    - Parameter 7 (❓ Yes or No): Destroy this object when tween finishes

    > Technical note: this action internal type (in GDevelop JSON) is `Tween::TweenBehavior::AddObjectVariableTween3`.

**Tween object width**  
Tweens an object width from its current width to a new one.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 Name (String)): Tween Identifier
    - Parameter 3 (🔢 Number): To width
    - Parameter 4: easing
    - Parameter 5 (🔢 Number): Duration (in seconds)
    - Parameter 6 (❓ Yes or No): Destroy this object when tween finishes

    > Technical note: this action internal type (in GDevelop JSON) is `Tween::TweenBehavior::AddObjectWidthTween2`.

**Tween text size**  
Tweens the text object character size from its current value to a new one (note: the size can never be less than 1).

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Text object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 Name (String)): Tween Identifier
    - Parameter 3 (🔢 Number): To character size
    - Parameter 4: easing
    - Parameter 5 (🔢 Number): Duration (in seconds)
    - Parameter 6 (❓ Yes or No): Destroy this object when tween finishes

    > Technical note: this action internal type (in GDevelop JSON) is `Tween::TweenBehavior::AddTextObjectCharacterSizeTween2`.


### Behavior conditions

**Tween exists**  
Check if the tween animation exists.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 Name (String)): Tween Identifier

    > Technical note: this condition internal type (in GDevelop JSON) is `Tween::Exists`.

**Tween finished playing**  
Check if the tween animation has finished playing.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 Name (String)): Tween Identifier

    > Technical note: this condition internal type (in GDevelop JSON) is `Tween::HasFinished`.

**Tween is playing**  
Check if the tween animation is currently playing.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 Name (String)): Tween Identifier

    > Technical note: this condition internal type (in GDevelop JSON) is `Tween::IsPlaying`.

**Tween progress**  
Compare the progress of a tween (between 0.0 and 1.0).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 Name (String)): Tween Identifier
    - Parameter 3: 🟰 Relational operator
    - Parameter 4 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `Tween::TweenBehavior::Progress`.


### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.Tween::Progress(string)` | Return the progress of a tween (between 0.0 and 1.0). ||
| | _🔤 Name (String)_ | Tween Identifier |
| `Object.Tween::Value(string)` | Return the value of a tween. It is always 0 for tweens with several values. ||
| | _🔤 Name (String)_ | Tween Identifier |



---

The Tweening extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **Tweening** feature of [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).