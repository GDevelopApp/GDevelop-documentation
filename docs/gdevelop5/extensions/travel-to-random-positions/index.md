# Make object travel to random positions

<img src="https://resources.gdevelop-app.com/assets/Icons/axis-arrow.svg" class="extension-icon"></img>
Make object travel to random positions (with the pathfinding behavior).

**Authors and contributors** to this experimental extension: [VictrisGames](https://gd.games/VictrisGames).

---

When the action is used, the object(s) will select a random nearby 2D location and begin moving towards it (using the 2D Pathfinding behavior). 

If desired, choose a direction and how closely you want the object to follow it.  This can be used to make objects chase (or run away from) the player, or to make objects cross the screen using a meandering path.

If you keep using the action, once the object reaches a destination, it will select a new random location and begin moving towards it.

If you want to modify the speed of the object, edit the Pathfinding behavior of the object.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Make object travel to a random position, with optional direction**
Make object travel to a random position around the object current position. The movement is initiated only when the object is not moving already (its Pathfinding behavior speed is 0).  Move towards a specified angle, if desired.

??? quote "See parameters"

    - Parameter 1 (👾 Object): Object that will be travelling (must have Pathfinding behavior)
    - Parameter 2 (🧩 Behavior): Pathfinding Behavior (required)
    - Parameter 3 (🔢 Number): Minimum distance between each position (Default: 100px)
    - Parameter 4 (🔢 Number): Maximum distance between each position (Default: 200px)
    - Parameter 5 (🔢 Number): Direction (in degrees) the object will move towards (Range: 0-360)
    - Parameter 6 (🔢 Number): Direction bias (Range: 0-1) 
      For example: "0" picks a completely random direction, "0.5" will select a direction within the half-circle that faces the specified direction, and "1" simply uses the specified direction.

    > Technical note: parameters 0, 7 are internal parameters handled by GDevelop.




---

*This page is an auto-generated reference page about the **Make object travel to random positions** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).