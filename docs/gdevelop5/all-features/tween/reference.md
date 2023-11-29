# Tweening

Animate object properties over time. This allows smooth transitions, animations or movement of objects to specified positions. [Read more explanations about it.](/gdevelop5/behaviors/tween)

## Actions

**Tween a layer value**  
Tweens a layer value that can be use with the expression Tween::Value.

**Tween a scene value**  
Tweens a scene value that can be use with the expression Tween::Value.

**Pause a scene tween**  
Pause the running scene tween.

**Remove a scene tween**  
Remove the scene tween. Call this when the tween is no longer needed to free memory.

**Resume a scene tween**  
Resume the scene tween.

**Stop a scene tween**  
Stop the running scene tween.

**Tween the camera position**  
Tweens the camera position from the current one to a new one.

**Tween the camera rotation**  
Tweens the camera rotation from the current angle to a new one.

**Tween the camera zoom**  
Tweens the camera zoom from the current zoom factor to a new one.

**Tween a number in a scene variable**  
Tweens a scene variable's numeric value from its current value to a new one.

## Conditions

**Tween progress**  
Compare the progress of a tween (between 0.0 and 1.0).

**Scene tween exists**  
Check if the scene tween exists.

**Scene tween finished playing**  
Check if the scene tween has finished playing.

**Scene tween is playing**  
Check if the scene tween is currently playing.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `Tween::Ease(string, number, number, number)` | Tween between 2 values according to an easing function. ||
| | _🔤 String_ | Easing |
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

**Pause a tween**  
Pause the running tween animation.

**Remove a tween**  
Remove the tween animation from the object.

**Resume a tween**  
Resume the tween animation.

**Stop a tween**  
Stop the running tween animation.

**Tween object angle**  
Tweens an object angle from its current angle to a new one.

**Tween object HSL color**  
Tweens the object color using Hue/Saturation/Lightness. Hue is in degrees, Saturation and Lightness are between 0 and 100. Use -1 for Saturation and Lightness to let them unchanged.

**Tween object color**  
Tweens the object color from its current value to a new one. Format: "128;200;255" with values between 0 and 255 for red, green and blue

**Tween object height**  
Tweens an object height from its current height to a new one.

**Tween object opacity**  
Tweens the object opacity from its current value to a new one (note: the value shall stay between 0 and 255).

**Tween object position**  
Tweens an object position from its current position to a new one.

**Tween object X position**  
Tweens an object X position from its current X position to a new one.

**Tween object Y position**  
Tweens an object Y position from its current Y position to a new one.

**Tween object scale**  
Tweens an object scale from its current scale to a new one (note: the scale can never be 0 or less).

**Tween object X-scale**  
Tweens an object X-scale from its current value to a new one (note: the scale can never be 0 or less).

**Tween object Y-scale**  
Tweens an object Y-scale from its current value to a new one (note: the scale can never be 0 or less).

**Tween an object value**  
Tweens an object value that can be use with the object expression Tween::Value.

**Tween a number in an object variable**  
Tweens an object variable's numeric value from its current value to a new one.

**Tween object width**  
Tweens an object width from its current width to a new one.

**Tween text size**  
Tweens the text object character size from its current value to a new one (note: the size can never be less than 1).

### Behavior conditions

**Tween exists**  
Check if the tween animation exists.

**Tween finished playing**  
Check if the tween animation has finished playing.

**Tween is playing**  
Check if the tween animation is currently playing.

**Tween progress**  
Compare the progress of a tween (between 0.0 and 1.0).

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.Tween::Progress(string)` | Return the progress of a tween (between 0.0 and 1.0). ||
| | _🔤 Name (String)_ | Tween Identifier |
| `Object.Tween::Value(string)` | Return the value of a tween. It is always 0 for tweens with several values. ||
| | _🔤 Name (String)_ | Tween Identifier |

---
*This page is an auto-generated reference page about the **Tweening** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).