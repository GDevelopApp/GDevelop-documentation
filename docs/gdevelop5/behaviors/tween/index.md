---
title: Tween behavior
---
# Tween behavior

The Tween (from inbe**tween**) [behavior](/gdevelop5/behaviors) animates [objects](/gdevelop5/objects) properties over time:

- Position (X, Y, Z for 3D objects)
- Angle (and rotation X/Y for 3D objects)
- Scale (X, Y, or both)
- Size (width, height, depth for 3D objects)
- Opacity
- Color (RGB or HSL modes)
- Text character size
- Effect properties (numeric or color parameters)
- Variables (object or scene variables)
- Custom values (accessible via expressions)

Each tween is identified by a unique name (identifier). Starting a tween with an existing identifier will restart that tween from the current value.

!!! note

    [easings.net](https://easings.net/) is an interactive catalog of all easing functions (speed shapes) that can be used by the tween behavior.

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/vdYi8Miwv2E" frameborder="0" allowfullscreen></iframe>
</div>

## Play tweens simultaneously

Tweens can be played simultaneously simply by adding actions next to each other.

![](simultaneous-tween.png)

## Chain tweens

Tweens can be delayed to be played one after the other using the **wait** action.

![](tween-wait.png)

The same result can be achieved using the **tween finished playing** condition. This method should be used when the object may not do the second tween under some conditions.

![](tween-chain.png)

## Loop tweens

Tweens can be looped by starting back the first tween at the end of a chain.

![](tween-loop.png)

Some extensions also have built-in looping:

- [Flash](/gdevelop5/extensions/flash)
- [Rectangular movement](/gdevelop5/extensions/rectangle-movement)
- [Ellipse movement](/gdevelop5/extensions/ellipse-movement)
- [Animated Back and Forth Movement](/gdevelop5/extensions/animated-back-and-forth-movement)

## Scale from center

When tweening an object's scale, you can choose whether to scale from the object's origin (top-left corner) or from its center point. Scaling from the center keeps the object's center position fixed during the animation, which is useful for UI elements or centered objects. Scaling from the origin maintains the top-left position, which can be useful for anchored elements.

## Color tweening modes

Color tweens support two interpolation modes:

- **RGB mode**: Interpolates directly between red, green, and blue values. This creates a linear transition through the RGB color space.
- **HSL mode** (default): Converts colors to Hue, Saturation, and Lightness, then interpolates. This often produces more visually pleasing transitions, especially when transitioning between different hues (e.g., red to blue will go through purple, not brown).

For fine control, use the "Tween object color in HSL" action to specify target hue, saturation, and lightness values independently.

## Exponential interpolation

Scale tweens use exponential interpolation by default, which means they interpolate through multiplication rather than addition. This produces more natural-looking scale animations. For example, scaling from 0.5 to 2.0 will pass through 1.0 at the midpoint.

Custom value tweens can also use exponential interpolation by enabling the "Exponential interpolation" parameter, which is useful for tweening zoom levels or other multiplicative values.

## Effect properties

Tweens can animate effect parameters on objects:

- **Numeric properties**: Interpolate number values like blur radius or pixel size
- **Color properties**: Interpolate color values using HSL color space

These allow you to create smooth visual transitions for effects applied to objects.

## Tween 3D objects

The [3D tween](/gdevelop5/extensions/tween3d) extension has additional actions dedicated to 3D.

## Examples

!!! note

        **See it in action!** 🎮

    Open these examples online.

**Tween Test**

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://tween-test){ .md-button .md-button--primary }

[![](tweentest.png){ width="320" }](https://editor.gdevelop.io/?project=example://tween-test)


**Tween Animations**

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://tween-animations){ .md-button .md-button--primary }

[![](tweenanimations.png){ width="320" }](https://editor.gdevelop.io/?project=example://tween-animations)


**Pairs**

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://pairs){ .md-button .md-button--primary }

[![](pairs.png){ width="320" }](https://editor.gdevelop.io/?project=example://pairs)


## Reference

All actions, conditions and expressions are listed in [the tween behavior reference page](/gdevelop5/all-features/tween/reference/).