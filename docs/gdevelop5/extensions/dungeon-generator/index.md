# Dungeon generator

<img src="https://resources.gdevelop-app.com/assets/Icons/sitemap.svg" class="extension-icon"></img>
Create a procedurally generated dungeon.  Includes two layouts: "rooms and hallways" and "dungeon cave".

**Authors and contributors** to this community extension: [VictrisGames](https://gd.games/VictrisGames), [oscuridad666](https://gd.games/oscuridad666).

!!! warning
    This is an extension made by a community member — but not reviewed
    by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of official extensions. In case of
    doubt, contact the author to know more about what the extension
    does or inspect its content before using it.

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

**Generate a dungeon cave**  
Generate a dungeon cave using a random walk algorithm.  When the walker touches an edge of the map, it is moved back to the center of map.

**Generate a dungeon with room and hallways**  
Generate a dungeon by placing rooms in random locations and moving them if they collide with each other.  Rooms are connected with hallways.

## Conditions

**Hallway is a room entrance**  
Check if hallway is a room entrance.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `DungeonGenerator::NeighborCount(object)` | Number of grid neighbors of an object.  Requires running the "CalculateGridNeighbors" action before using this expression. ||
| | _👾 Object_ | Object |
| `DungeonGenerator::RoomID(object)` | The numerical order this room was created.  (Range: 1 to total number of rooms). ||
| | _👾 Object_ | Room object |


---

*This page is an auto-generated reference page about the **Dungeon generator** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).