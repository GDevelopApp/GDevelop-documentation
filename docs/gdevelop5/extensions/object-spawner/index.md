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

**Restart cool down**  
Restart the cool down of a spawner.

**Maximum quantity**  
Change the maximum number of living objects a spawner can create. Set it to 0 to never stop spawning objects.

**Offset on X axis**  
Change the offset X relative to origin of spawner (in pixels).

**Offset on Y axis**  
Change the offset Y relative to origin of spawner (in pixels).

**Spawn period**  
Change the spawn period (in seconds).

**Spawn objects periodically**  
Spawn (create) objects periodically. This action must be run every frame to work. When the max quantity is reached and an instance is deleted, the spawner waits the duration of the spawn period before creating another instance. Spawned objects are automatically linked to the spawner.

### Behavior conditions

**Spawned object **  
Check if an object has just been created by this spawner. Useful for triggering visual and sound effects.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.ObjectSpawner::MaxQuantity(number)` | Return the maximum number of living objects a spawner can create. ||
| | _🔢 Number_ | Value |
| `Object.ObjectSpawner::OffsetX(number)` | Return the offset X relative to origin of spawner (in pixels). ||
| | _🔢 Number_ | Value |
| `Object.ObjectSpawner::OffsetY(number)` | Return the offset Y relative to origin of spawner (in pixels). ||
| | _🔢 Number_ | Value |
| `Object.ObjectSpawner::SpawnPeriod()` | Return the spawn period (in seconds). ||
| `Object.ObjectSpawner::TimeBeforeSpawn()` | Return the remaining time before the next spawn (in seconds). Useful for triggering visual and sound effects. ||

---

*This page is an auto-generated reference page about the **Object spawner** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).