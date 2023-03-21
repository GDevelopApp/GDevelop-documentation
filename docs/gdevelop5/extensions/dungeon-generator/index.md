# Dungeon generator

<img src="https://resources.gdevelop-app.com/assets/Icons/sitemap.svg" class="extension-icon"></img>
Create a procedurally generated dungeon.  Includes two layouts: "rooms and hallways" and "dungeon cave".

**Authors and contributors** to this community extension: [VictrisGames](https://gd.games/VictrisGames), [oscuridad666](https://gd.games/oscuridad666).

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

[Read more...](https://victrisgames.itch.io/extension-dungeon-generator)

---

!!! tip

    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

*This page is an auto-generated reference page about the **Dungeon generator** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).