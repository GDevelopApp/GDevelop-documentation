# Object spawner

<img src="https://resources.gdevelop-app.com/assets/Icons/plus-one.svg" class="extension-icon"></img>
Spawn (create) objects periodically.

**Authors and contributors** to this community extension: [VictrisGames](https://gd.games/VictrisGames).

---

Can be used to create enemies, NPCs, environmental objects, etc.

How to use:

- Add this behavior to an object
- Place spawners on the scene 
- Run the "Spawn objects" action on every frame
- Control spawning by adjusting behavior properties

Properties:
Spawn period:  Number of seconds before spawning another object.
Max quantity:  Each spawner will try to maintain this number of spawned objects
Offset X/Y:  Use to adjust where the object are spawned, relative to the origin of the spawner

Tips:

- Use "Object was just spawned" condition to trigger visual and sound effects (if desired)
- Set max quantity to "0" to never stop spawning objects
- Spawned objects are automatically linked to the spawner
- Note:  If max quantity has been reached and an instance is deleted, the spawner will wait the duration of spawn period before creating another instance.

---

!!! tip

    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

*This page is an auto-generated reference page about the **Object spawner** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).