# Dungeon generator

<img src="https://resources.gdevelop-app.com/assets/Icons/sitemap.svg" class="extension-icon"></img>
Create a procedurally generated dungeon.  Includes two layouts: "rooms and hallways" and "dungeon cave".

**Authors and contributors** to this experimental extension: [VictrisGames](https://gd.games/VictrisGames), [oscuridad666](https://gd.games/oscuridad666).

!!! warning
    This is an extension made by a community member and it only got through a
    light review by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of fully reviewed extensions.

---

How to use:

- Run the "Generate Dungeon Cave" or "Generate Dungeon with Rooms" action at the beginning of a scene.

Tips:

- Keep the amount of space used by room objects to less than ~25% of the total map.  If you add too many rooms, they will not be placed correctly and might collide with other rooms.
- Try using top-down controls combined with physics behavior (with no gravity) on the player and wall objects
- Use external layouts to place pre-designed rooms on randomly created room objects
- Use "Delete Unused Terrain" option to reduce resources used
- Use "RoomID(object)" expression to determine the starting and ending room
- Use "NeighborCount(object)" expression to find good places to place treasure.  A high amount of neighbors means that the tile is a nook or cranny.
- Use "IsRoomEntrance" condition to identify hallway objects that are adjacent to a room

An example shows how to procedurally generate dungeons or caves ([open the project online](https://editor.gdevelop.io/?project=example://dungeon-generator)).

[Read more...](https://victrisgames.itch.io/extension-dungeon-generator)

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Calculate the number of grid neighbors around an object**  
Calculate the number of grid neighbors around an object.  Use "NeighborCount(Object)" expression to retrieve this value.

??? quote "See parameters"

    - Parameter 1 (👾 Object): Primary object (or object group)
    - Parameter 2 (👾 Object): Neighbor object (or object group)

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

**Generate a dungeon cave**  
Generate a dungeon cave using a random walk algorithm.  When the walker touches an edge of the map, it is moved back to the center of map.

??? quote "See parameters"

    - Parameter 1 (🔢 Number): Tile size (pixels)
      All objects are based on this size
    - Parameter 2 (🔢 Number): Map width (tiles)
    - Parameter 3 (🔢 Number): Map height (tiles)
    - Parameter 4 (👾 Object): Terrain object
      Terrain object is used to fill the map that is not covered by floors, hallways, or walls.
    - Parameter 5 (👾 Object): Floor object
      Floor objects are created on every tile that a walker has travelled to.
    - Parameter 6: 🔤 Layer name (String)
    - Parameter 7 (👾 Object): Walker object
      Use a random walk algorithm to turn terrain objects into floor objects
    - Parameter 8 (🔢 Number): Floor percentage (Range: 0-1)
      Percentage of map that will be convered by floor objects
    - Parameter 9 (🔢 Number): Size of walker sides (tiles)
      The number of tiles for each side of the square walker object.  For example, 2=2x2, 3=3x3, 4=4x4.
    - Parameter 10 (🔢 Number): Minimum border
      Can be used to provide a border of terrain around the map
    - Parameter 11 (❓ True or False): Delete unused terrain objects
    - Parameter 12 (👾 Object): Wall object
      Wall objects are placed between floor and terrain objects.
    - Parameter 13 (❓ Yes or No): Calculate neighbors
      May take a few seconds to calculate neighbors on a large map, so disable this if you are not using it.

    > Technical note: parameters 0, 14 are internal parameters handled by GDevelop.

**Generate a dungeon with room and hallways**  
Generate a dungeon by placing rooms in random locations and moving them if they collide with each other.  Rooms are connected with hallways.

??? quote "See parameters"

    - Parameter 1 (🔢 Number): Tile size (pixels)
      All objects are based on this size
    - Parameter 2 (🔢 Number): Map width (number of colums)
    - Parameter 3 (🔢 Number): Map height (number of rows)
    - Parameter 4 (👾 Object): Terrain object
      Used to fill the map that is not covered by floors, hallways, or walls.
    - Parameter 5 (👾 Object): Room object
      Rooms are placed in random locations and will try to not overlap with other rooms. 
    - Parameter 6 (👾 Object): Hallway object
      Used to connect room objects.  They follow the path made by the pathfinder object.
    - Parameter 7 (🔢 Number): Number of rooms
      Rooms should take less than ~25% of map to ensure non-overlapping rooms.  If there are too many rooms, they may end up overlapping each other.
    - Parameter 8: 🔤 Layer name (String)
    - Parameter 9 (🔢 Number): Min room width (tiles)
    - Parameter 10 (🔢 Number): Max room width (tiles)
    - Parameter 11 (🔢 Number): Min room height (tiles)
    - Parameter 12 (🔢 Number): Max room height (tiles)
    - Parameter 13 (👾 Object): Pathfinder object
      Used to identify where hallways are placed between rooms
    - Parameter 14 (🧩 Behavior): Pathfinding behavior (required)
    - Parameter 15 (🔢 Number): Max separation attempts
      Number of attempts to separate overalapping rooms.  When this number is reached, rooms are left in current position. (Default: 10,000)
    - Parameter 16 (❓ Yes or No): Connect rooms in a loop
    - Parameter 17 (🔢 Number): Hallway width (tiles)
    - Parameter 18 (🔢 Number): Additional paths between connect rooms
    - Parameter 19 (❓ True or False): Delete unused terrain
    - Parameter 20 (👾 Object): Wall object

    > Technical note: parameters 0, 21 are internal parameters handled by GDevelop.

## Conditions

**Hallway is a room entrance**  
Check if hallway is a room entrance.

??? quote "See parameters"

    - Parameter 1 (👾 Object): Hallway object

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `DungeonGenerator::NeighborCount(object)` | Number of grid neighbors of an object.  Requires running the "CalculateGridNeighbors" action before using this expression. ||
| | _👾 Object_ | Object |
| `DungeonGenerator::RoomID(object)` | The numerical order this room was created.  (Range: 1 to total number of rooms). ||
| | _👾 Object_ | Room object |


---

*This page is an auto-generated reference page about the **Dungeon generator** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).