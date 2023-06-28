---
title: How to move objects in your game
---
# How to move objects in your game

Moving objects on screen is an essential part of any game. This can includes:

  * Moving a character on screen: player, non-player characters (NPC), vehicles, spaceships...
  * Animate items: bullets, lasers, obstacles, backgrounds...
  * Animate the interface: buttons, cursors, remaining lives...

Every situation is different: this page explains the different solutions when using GDevelop.

There are three different ways of changing an object position in GDevelop:

  * By using the actions to change the X and Y coordinates,
  * By adding a force on an object (this work on all objects),
  * By using a behavior (which internally will either change the coordinates or use forces!).

## No movement: change an object position

Sometimes you want to instantly change an object's position, instead of gradually moving or animating it. In this case, use the action to set the object at a specific position (by specifying new X and Y coordinates):

![](/gdevelop5/tutorials/set-object-position.png)

## Follow another object exactly: changing the position with expressions

If you want an object to follow another object exactly, or be fixed to another object's position, use the action to change an object position and use the expressions to get the X and Y coordinates of the object to follow.

As an example, this can be useful when you're using a **hidden object** that serves as the player (so that you have an object with a constant size) and that you want to "paste" on top of it the player animations (with a Sprite object, or possibly multiple objects - for example the spaceship sprite and a particle emitter for the engine).

Here is an example to set the position of the Player object in a platform game:

![](/gdevelop5/tutorials/follow-object-set-position.png)

!!! tip

    The [sticker extension](/gdevelop5/extensions/sticker/reference) allows to follow the position,  angle and dimension of another object.

## Make a cursor: change the position and use "MouseX()";"MouseY()"

Want an object to act as a cursor? Change its position to set it to `MouseX()` on X axis and `MouseY()` on Y axis.

![](/gdevelop5/tutorials/cursor-set-position.png)

!!! note

    It's a good idea to put the "cursor" object on top of all other by using a high Z order or move it to another layer. In this case, enter the layer name as argument to `MouseX` and `MouseY`. For example, if the layer is called "user interface": `MouseX("user interface")`, `MouseY("user interface")`

!!! tip

    Learn more about how to handle mouse on the [mouse and touch events](/gdevelop5/all-features/mouse-touch) page.

## Move an object on screen: use forces

The easiest way to move an object, continuously or when something happens like the player pressing a button, is to use **forces**.

Forces have been introduced in [basic game making concepts](/gdevelop5/tutorials/basic-game-making-concepts) page. You can imagine forces as virtual arrows (also called "vectors") that are pushing an object. The longer the arrow, the fastest the object will move. Forces can be either *instant* or *permanent*:

  * An **instant** force moves an object "a bit" (the force will only act on the object while the action is being executed):

  ![](/gdevelop5/tutorials/instant-force-example.png)

  * a **permanent** force will move an object forever, unless an action to stop the object is used. This action will clear the forces acting on the object (effectively stopping it - unless some behavior is used or its position is changed by other events). For example, this couple of events will animate a platform between two markers:

![](/gdevelop5/tutorials/animate-platform-permanent-forces.png)

If you're unsure about which kind of force to use, the rule of thumb is:

> Instant forces are used with conditions that are verified for a bit of time (like a key pressed, an object touched/hovered by the cursor, etc...) while permanent forces are used with conditions that are verified only once in a while (like a collision).

Permanent forces are akin to launching a music: you only want to start a music once in a while.

!!! note

     Technically, the force is moving the object by the length of the force multiplied by the time elapsed to render the frame. This means that forces speed is in pixel per seconds. Note that you don't need to understand this to use forces, but make sure to use the right kind of force (instant or permanent) to avoid bad results in your game.

## Platformer behavior

If your object is a character in a platformer game, the [platformer behavior](/gdevelop5/behaviors/platformer) will allow to use a ready-made platformer engine in your game.

  * Add **Platformer Character** behavior to the player or objects that must move on platforms,
  * Add **Platform** behavior to the objects that must act as platforms.

You can edit the properties of the behaviors and use events to customize the way platformer characters work.

## Physics engine

If your objects must follow the law of physics, for example to simulate boxes falling and bouncing on the floor, consider using the [Physics engine behavior](/gdevelop5/behaviors/physics2).

The Physics engine is *more complex* than forces and behaviors like the Platform behavior. If you're using it in your game, it's recommended to use it for all objects in your game.

!!! warning

    Objects that have the Physics behavior are moved by the Physics engine. If you try to move them with forces or other actions not part of the Physics behavior, the Physics engine will struggle to keep the simulation realistic - and some "glitches" can then be seen.

## Ellipse movement behavior

The [ellipse movement](/gdevelop5/extensions/ellipse-movement/reference) behavior is a behavior that you can [install in your game from extensions](/gdevelop5/extensions/search).

After adding it to an object, you can set up the amplitude of the movement on the X and Y axis. This is useful to make objects always move in circle or following an ellipse.

## Forces and bounce behavior

The [bounce behavior](/gdevelop5/behaviors/bounce) is a behavior that you can [install in your game from extensions](/gdevelop5/extensions/search).

After adding it to an object, add a condition to check if the object is in collision with an obstacle. Add an action to then make the object bounce from the obstacle.

!!! note

    This behavior is working with forces! Make your object move by adding a force to it. Then add the behavior and the action to make it bounce in case of collisions

## Pathfinding: Find a path around obstacles and follow it

The [Pathfinding behavior](/gdevelop5/behaviors/pathfinding) is an advanced algorithm that compute a path between an object position and a destination position. The path will be the shortest one avoiding other objects marked as obstacles.

It's useful for strategy games and any game where characters or units must move on their own and avoid obstacles.

## Anchor behavior: ensure that your object is pinned on the screen even if window is resized

With the [Anchor behavior](/gdevelop5/behaviors/anchor), you can set your object to be pinned to the top, left, bottom or right of the game. If the game window is resized, and the game resolution is changed, the object will be automatically re-adjusted to be at the same distance from the window border as before.

This is very useful for **visual controls** for mobile games and for **user interface**/control panels to show on the screen.

## Find other movement extensions

There are many more behaviors that move objects listed in the [extensions](/gdevelop5/extensions#movement) page.