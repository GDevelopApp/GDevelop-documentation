# Object spawner

<img src="https://resources.gdevelop-app.com/assets/Icons/plus-one.svg" class="extension-icon"></img>
Spawn (create) objects periodically.

**Authors and contributors** to this community extension: [VictrisGames](https://gd.games/VictrisGames).

---

Spawn objects periodically and control their number.

It can be used to create:

- Enemies
- NPCs
- Environmental objects


!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Object spawner 

Spawn (create) objects periodically. 

### Behavior actions

**Restart spawning cooldown**  
Restart the cooldown of a spawner.

**Max objects in the scene (per spawner)**  
Change the max objects in the scene (per spawner) of the object. Limits the number of objects in the scene that were created by this spawner. Set this to 0 for no limit.

**Offset on X axis**  
Change the offset X relative to the center of spawner (in pixels).

**Offset on Y axis**  
Change the offset Y relative to the center of spawner (in pixels).

**Spawn period**  
Change the spawn period (in seconds).

**Spawner capacity**  
Change the number of objects that can be created by this spawner. This is reduced everytime an objects is spawned.

**Unlimited object capacity**  
Change unlimited capacity of spawner.

**Spawn objects periodically**  
Spawn (create) objects periodically. This action must be run every frame to work. When the max quantity is reached and an instance is deleted, the spawner waits the duration of the spawn period before creating another instance. Spawned objects are automatically linked to the spawner.

### Behavior conditions

**Max objects in the scene (per spawner)**  
Compare the max objects in the scene (per spawner) of the object. Limits the number of objects in the scene that were created by this spawner. Set this to 0 for no limit.

**Object was just spawned**  
Check if an object has just been created by this spawner. Useful for triggering visual and sound effects.

**Spawner capacity**  
Compare the number of objects that can be created by this spawner. This is reduced everytime an objects is spawned.

**Unlimited capacity**  
Check if spawner has unlimited capacity.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.ObjectSpawner::MaxQuantity()` | Return the max objects in the scene (per spawner) of the object. Limits the number of objects in the scene that were created by this spawner. Set this to 0 for no limit. ||
| `Object.ObjectSpawner::OffsetX(number)` | Return the offset X relative to the center of spawner (in pixels). ||
| | _🔢 Number_ | Value |
| `Object.ObjectSpawner::OffsetY(number)` | Return the offset Y relative to the center of spawner (in pixels). ||
| | _🔢 Number_ | Value |
| `Object.ObjectSpawner::SpawnPeriod()` | Return the spawn period (in seconds). ||
| `Object.ObjectSpawner::SpawnerCapacity()` | Return the number of objects that can be created by this spawner. This is reduced everytime an objects is spawned. ||
| `Object.ObjectSpawner::TimeBeforeSpawn()` | Return the remaining time before the next spawn (in seconds). Useful for triggering visual and sound effects. ||

---

*This page is an auto-generated reference page about the **Object spawner** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).