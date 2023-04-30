---
title: Details
---
# Advanced Projectile

Control how a projectile moves including speed, acceleration, distance, and lifetime.

## Simulate a rocket

A rocket can be simulated with:

- Starting speed of 0
- Positive acceleration

!!! tip

   Max speed may also be defined to prevent the projectile from going too fast.

## Simulate a thrown weapon

A thrown weapon, such as a hand grenade, can be simulated with:

- High starting speed
- Negative acceleration (object will slow down and stop)
- Non-zero lifetime (object will be automatically deleted)

## Direction of acceleration

If the object is not moving:

- Acceleration will be towards the direction (angle) it is facing.

If the object is moving:

- Acceleration will be in the direction the object is moving. 
- This enables projectiles to keep moving even if they are not rotated in the direction of movement

!!! tip

    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

**Game example**

Try out this extension in a game example:

[Open in GDevelop](https://editor.gdevelop.io/?project=example://advanced-projectile){ .md-button .md-button--primary }

**Tutorial video**

Watch how this extension works and learn how to use it in your own game.

![type:video](https://www.youtube.com/embed/5S0TG-Yf_b0)