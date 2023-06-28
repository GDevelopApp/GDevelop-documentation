---
title: For each object event
---
# For each object event

A "For Each" event is a special [event](/gdevelop5/events) that takes an object as a parameter. While the game is running, all of the conditions and actions located inside this event will be repeated for every instance of the object.

!!! tip

    If an object group is used, then the "For Each" event will repeat for every instance of every object in the group.

## When to use it

Most of the time, a "For Each" event is not required because conditions and actions automatically run on all instances of an object. Using a "For Each" when it is not required will cause the computer to do extra work and may lower the performance of a game.

There are specific circumstances that do require using a "For Each" event, including:

  - [Collisions](/gdevelop5/all-features/collisions) that need to be handled individually, even if they happen at the same time (such as keeping score or picking up resources)
  - Actions that use an object property or [variable](/gdevelop5/all-features/variables/object-variables) that is different for each instance
  - When using [linked objects](/gdevelop5/all-features/linked-objects)

In the example below, the goal is to create an explosion at the position of every enemy.  When the player is in a collision with an object called "KillAllEnemyBonus", a "For Each" event is used to create a new object located at the position of each enemy.  If a "For Each" event is not used, a single explosion would be created at the position of the first enemy only.

![](for-each-example.png)

!!! tip

    The [for each child variable](/gdevelop5/events/foreach-child-variable) event page explains how to loop on variables from structures or arrays.
