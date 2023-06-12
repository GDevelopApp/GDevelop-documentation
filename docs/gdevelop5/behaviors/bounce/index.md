---
title: Bounce Behavior
---
# Bounce Behavior

GDevelop makes it easy to simulate real bouncing in a game. _Bounce behavior_ can be applied to any object that may be involved in a collision. Because the [behavior](/gdevelop5/behaviors) considers the angle and speed of forces applied to the [object](/gdevelop5/objects), the bounce response will feel realistic to the player.

!!! warning

    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Examples

!!! tip

        **See it in action!** 🎮
    Open these examples online.

**Breakout-like**

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://breakout){ .md-button .md-button--primary }

[![](/gdevelop5/tutorials/breakout-screenshot.png)](https://editor.gdevelop.io/?project=example://breakout)

## What's the logic behind the behavior?

!!! tip

    The behavior looks at the object's position and velocity at the time of the collision. It adds a force in the direction of the normal vector between the collided object and the object, and then adds the difference between the normal vector and the previous angle of movement.
