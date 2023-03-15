---
title: Particles emitters
---
# Particles emitters

Particles emitters are used to display a large number of small particles. They simulate effects in a game. A few examples of particle emitters are fire, explosions, smoke, and dust.

![](/gdevelop5/objects/particles_emitter/pasted/20230304-153952.png)

The Particles Emitter object can be configured with a multitude of different parameters to create the desired effects.

## Particles kind

There are 3 rendering modes available for Particle Emitters: Points, Lines and Textured./

* Points mode, will display circles with the specified size.
* Lines mode,  will display lines with the specified length and thickness.
* Textured mode, will display an image of the specified size.

## Colors

You can choose a starting color for particles, and a color to fade to. You can also choose a starting a final value for the object's transparency.

## Direction of emission

Particles will be emitted in the direction represented by the angle of the emitters on the scene. You can change the angle of *the spray cone*, which is also represented in the scene editor as two lines: a large value for this "spray cone" will result in an emission of particles in a large number of directions. A value of 0 will emit particles only in a single direction.

* Particles appears in a sphere, around the position of the emitter object. You can change the radius of the sphere.
* Gravity can be applied on particles, on X and Y axis. For example, a negative value on the Y-axis will cause the particles to go up in the air.
* Friction influences particles deceleration over time.

## Lifetime

* Each particle has a limited lifetime that is chosen randomly between two values. These two values can be changed.
* The number of particles contained in the emitter ("tank") can be unlimited or fixed to a number. If the emitter is fixed to a number, the emitter will stop emitting after reaching the set number of particles.
* The flow is the number of particles created every second. You can enter -1 to fire all particles in a single shot.

You can also change the maximum number of particles rendered by the object on the screen. Note that this number changes the memory taken by the emitter. //If this number is too big, it can cause the game to crash.//

## Examples 

!!! tip
    
        **See it in action!** 🎮  
    Open these examples online.


[![](/gdevelop5/objects/particleemitterexplosionsnew.png)](https://editor.gdevelop.io/?project=example://particles-explosions)

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://particles-explosions){ .md-button .md-button--primary }

[![](/gdevelop5/objects/particleemitervariousnew.png)](https://editor.gdevelop.io/?project=example://particles-various-effects)

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://particles-various-effects){ .md-button .md-button--primary }