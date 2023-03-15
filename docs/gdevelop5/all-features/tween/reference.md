---
title: Tweening
---
# Tweening

Animate object properties over time. This allows smooth transitions, animations or movement of objects to specified positions. [Read more explanations about it.](https://wiki.gdevelop.io/gdevelop5/behaviors/tween)

## Actions

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

**Scene tween exists**  
Check if the scene tween exists.

**Scene tween finished playing**  
Check if the scene tween has finished playing.

**Scene tween is playing**  
Check if the scene tween is currently playing.

## Expressions

^ Expression ^ Description ^  ^
| `Tween::Ease(string, number, number, number)` | Tween between 2 values according to an easing function. ||
|:::| _string_ | Easing |
|:::| _number_ | From value |
|:::| _number_ | To value |
|:::| _number_ | Weighting From 0 to 1. |

## Tween 

Smoothly animate position, angle, scale and other properties of objects. 

### Behavior actions

**Tween object angle**  
Tweens an object angle from its current angle to a new one.

**Tween object HSL color**  
Tweens the object color using Hue/Saturation/Lightness. Hue can be any number, Saturation and Lightness are between 0 and 100. Use -1 for Saturation and Lightness to let them unchanged.

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
Tweens an object scale from its current scale to a new one (note: the scale can never be less than 0).

**Tween object X-scale**  
Tweens an object X-scale from its current value to a new one (note: the scale can never be less than 0).

**Tween object Y-scale**  
Tweens an object Y-scale from its current value to a new one (note: the scale can never be less than 0).

**Tween a number in an object variable**  
Tweens an object variable's numeric value from its current value to a new one.

**Tween object width**  
Tweens an object width from its current width to a new one.

**Tween text size**  
Tweens the text object character size from its current value to a new one (note: the size can never be less than 1).

**Pause a tween**  
Pause the running tween animation.

**Remove a tween**  
Remove the tween animation from the object.

**Resume a tween**  
Resume the tween animation.

**Stop a tween**  
Stop the running tween animation.

### Behavior conditions

**Tween exists**  
Check if the tween animation exists.

**Tween finished playing**  
Check if the tween animation has finished playing.

**Tween is playing**  
Check if the tween animation is currently playing.

### Behavior expressions

^ Expression ^ Description ^  ^
| `Object.Tween::Progress(identifier)` | Progress of a tween (between 0.0 and 1.0) ||
|:::| _identifier_ | Tween Identifier |

---
*This page is an auto-generated reference page about the **Tweening** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).