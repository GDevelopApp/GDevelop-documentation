---
title: Light
---
# Light

A Light object is an object that simulates a light source in 2D.
The light object has several properties that can be customized, such as the color, the radius of the light, and a texture to give a shape to your light.

## How does it work?

By default the rays from the light are casted all around the object and interact with the bounds of the other objects using the Light obstacle behavior.

When the collisions mask on an object using the obstacle behavior are edited the light ray will take care of the collision mask.

### Using the light texture

The light texture property allow to create a custom shape for the light.

!!! tip

    For example a light texture can be used to make a headlight bulbs for a car or a flashlight that illuminate only in one direction.

Open the example below to see how custom shape for light are used.

## Example

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://lights){ .md-button .md-button--primary }

## Reference

[List of events for this object](/gdevelop5/all-features/lighting/reference/){ .md-button .md-button--primary }
