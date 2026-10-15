---
title: Behaviors
icon: material/robot
---
# Behaviors

In GDevelop, _behaviors_ add significant features to [objects](/gdevelop5/objects) with just a few clicks.

For example, behaviors can:

* Move the camera to follow an object.
* Automatically remove objects from a scene when they move outside the edges of the screen.
* Handle health, damage, ammo, and other elements of the player or an enemy.
* Make objects move in a realistic way by following the laws of physics.
* Allow players to move an object with the arrow keys.

Most behaviors can be customized to make your game feel unique. Behaviors attached to an object can be manipulated in [events](/gdevelop5/events).

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/6LYmbp6XL_M?si=rI9lj-DilVhFQm7K" frameborder="0" allowfullscreen></iframe>
</div>

## Most commonly used behaviors

Here are some commonly used behaviors, grouped like in the menu of this documentation:

- **Movement**:
    - [Platformer character and platforms](/gdevelop5/behaviors/platformer): run and jump on platforms, in 2D platform games.
    - [Top-down movement](/gdevelop5/behaviors/topdown): move in 4 or 8 directions, for RPGs, top-down shooters and isometric games.
    - [Grid-based pathfinding](/gdevelop5/behaviors/pathfinding) and [navmesh pathfinding](/gdevelop5/behaviors/nav-mesh-pathfinding): move characters to a target while avoiding obstacles, in 2D and 3D.
- **Physics**:
    - [2D physics](/gdevelop5/behaviors/physics2): objects falling, bouncing and rolling realistically, joints, ragdolls.
    - [3D physics](/gdevelop5/behaviors/physics3d): 3D objects with realistic physics, and ready-made behaviors for [3D characters](/gdevelop5/behaviors/physics3d#move-a-3d-character-with-controls) (platformers and shooters) and [cars](/gdevelop5/behaviors/physics3d#move-a-3d-car-with-controls).
- **User interface**:
    - [Anchor](/gdevelop5/behaviors/anchor): keep interface elements at the edges of the screen, whatever its size.
    - [Draggable](/gdevelop5/behaviors/draggable): move objects with the mouse or a finger.
- **Visual effect**:
    - [Tween](/gdevelop5/behaviors/tween): smoothly animate the position, angle, size, color or opacity of objects.
- **Game mechanic**:
    - [Destroy outside screen](/gdevelop5/behaviors/destroyoutside): remove bullets and other objects leaving the screen.
    - [Multiplayer object](/gdevelop5/all-features/multiplayer): synchronize objects between the players of an online game.

While these behaviors are often used, the [full list of behaviors available in GDevelop](/gdevelop5/behaviors/all-behaviors) keeps growing every day: see the [list of all GDevelop extensions](/gdevelop5/extensions/) to discover them.

Behaviors can be contributed by the community or the GDevelop core development team. You can [create new behaviors](/gdevelop5/behaviors/events-based-behaviors), with or without code, directly inside GDevelop.

!!! tip

    When your game is growing, it's a good idea to make [your own behaviors](/gdevelop5/behaviors/events-based-behaviors) for each object in your game. Making your own behaviors allows you to keep your game modular.

## Adding a behavior to an object

To add a behavior to an object, you can either:

* Select the object in the list of objects and then, in the **Properties** panel, click the + next to the "Behaviors" section:

  ![Add a behavior from the properties panel](./add-behavior-properties-panel.png)

  You can then browse the list of behaviors. The most commonly used are displayed at the top of the list:

  ![The list of behaviors](./add-behavior-list.png)

* Or you can double-click on an object and choose "Add a behavior" in the "Behaviors" tab.

## Enable searching for community-made behaviors

Anyone can [create custom behaviors](/gdevelop5/behaviors/events-based-behaviors) and share them with the GDevelop community.

To search for and install community-created behaviors, enable them in the list of behaviors:

![Enable community behaviors](./community-behaviors.png)

Note that these behaviors are not fully reviewed and might not have the same quality, flexibility, and polish as the behaviors that are considered "reviewed" and shown by default in the interface.

!!! note

    You can contribute by submitting your own behaviors—or improvements to existing ones—on the [GDevelop GitHub repository](https://github.com/GDevelopApp/GDevelop-extensions).
