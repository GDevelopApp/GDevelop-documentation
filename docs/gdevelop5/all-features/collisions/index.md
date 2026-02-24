---
title: Handling collisions in your game
---
# Handling collisions in your game

Most games need to detect and handle collisions between objects. Detecting and handling collisions can be done to make objects stick on platforms and detect collisions between bullets and players or bullets and other objects.

GDevelop provides several different ways to handle collisions. You can detect collisions using Event Editor conditions and actions, or you can use Object behaviors.

## Make objects solids: use the "Separate objects" action (good for top-down games, RPG...)
![](/gdevelop5/all-features/separate-condition.png)

"**Separate objects**" is an action that keeps two types of objects from overlapping. It takes two object names as the argument.

  * The first object name is the _object moving_ (the player, enemy, etc.).
  * The second object name is an _object (or a group of objects) that are solid_. For example, these objects can be the walls.

The action will then iterate over all of the objects given. It will ensure that if an object of the first kind is colliding with an object of the second kind, the object will be moved away. This is done using an algorithm called the _SAT algorithm_.

![](/gdevelop5/all-features/separate-objects-action.png)

This action will be launched in every frame. In an event without conditions, the action is already doing the collision checks. Avoid launching this action multiple times. Doing so could reduce game performance.

### Detect collisions

Using "Separate objects" is a good way to ensure that your objects can't move into other solid objects. You can pair it with the "**Collision**" condition to both detect a collision and react to it — for example, dealing damage to the player when touching an enemy, then separating them.

**The sequence is important.**

  - Run the condition called "**Collision.**"
  - Add appropriate actions.
  - Add the "Separate Objects" action.

After running the "Separate objects" action, objects are moved. _Collisions between objects will no longer be able to be checked._

You can find usage of these conditions and actions in the examples:

!!! tip

        **See it in action!** 🎮
    Open this example online: [Bomb the Crate Example](https://editor.gdevelop.io?project=example://bomb-the-crate)

[![](/gdevelop5/all-features/checkccollisionbetweenobjectsnew.png)](https://editor.gdevelop.io?project=example://bomb-the-crate)


## Platformer games: use the Platformer character and Platform behaviors

If you're making a platformer game, it's a good idea to use the ["Platformer character" behavior](/gdevelop5/behaviors/platformer). It's a ready-made platform game engine that is highly customizable. The "Platformer character" behavior handles the gravity and the collisions with the platforms.

### Detect collisions in a platformer game?

In a platformer game with the "Platformer character" behavior, collisions with platforms are handled for you.

* You can still use the **Collision condition** to check for collisions between an object and other objects (for example, between the player and enemies) and react accordingly.
* You can use the "Is on Floor" condition to check if an object is on a platform.

![](/gdevelop5/all-features/playerisonfloorevents.png)

!!! tip

        **See it in action!** 🎮
    Open this example online: [Platformer Example](https://editor.gdevelop.io?project=example://platformer)

## Game with physics? Use the Physics 2 behavior

Use the [Physics 2 behavior](/gdevelop5/behaviors/physics2) to make objects move realistically, simulating gravity, bouncing, and other real-world physical interactions. This is well suited for games like pinball, angry-birds-style projectile games, or anything that relies on natural-feeling collisions and movement.

Objects configured as **Static** will not move and act as immovable walls or ground. Objects configured as **Dynamic** are fully simulated and react to gravity, forces, and collisions.

### Detect collisions with the Physics 2 behavior

When you're using the **Physics 2** behavior, _do not use_ the **Collision** condition that is in the **Features for all objects** category. _The physics engine will manage all collisions by itself._ The standard Collision condition won't correctly detect when objects are touching.

Instead, use the Collision condition _inside the_ **Physics 2** _behavior category_, which properly uses the physics engine to simulate the collisions.

![](/gdevelop5/all-features/usephysicsbehaviornotcollisionconditionnew.png)

Additionally, objects with the **Physics 2** behavior ignore the object's Collision Masks and instead use the collision shape configured on the **BEHAVIORS** tab of the object itself. This defaults to a box matching the full dimensions of the object. The shape can be changed to a circle, edge, or polygon from within the **BEHAVIORS** tab.
![](/gdevelop5/all-features/physics_hitbox.png)
!!! tip

        **See it in action!** 🎮
    Open this example online: [Physics Example](https://editor.gdevelop.io?project=example://physics)

![](/gdevelop5/behaviors/physics/hingeleverdemo.png)