# Object spawner 2D area

<img src="https://resources.gdevelop-app.com/assets/Icons/plus-one.svg" class="extension-icon"></img>
Spawn (create) objects periodically.

**Authors and contributors** to this experimental extension: [VictrisGames](https://gd.games/VictrisGames).

---

Spawn objects periodically based on the 2D location of the spawner.  

If "random position" is enabled, objects will spawn in a random position inside the spawner object. 
This allows the size of the spawner object to define an area where objects will spawn.

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

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

**Max objects in the scene (per spawner)**
Change the max objects in the scene (per spawner) of the object. Limits the number of objects in the scene that were created by this spawner. Set this to 0 for no limit.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Use random positions**
Enable (or disable) random positions. Useful for making large spawner areas.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): RandomPosition

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Spawn period**
Change the spawn period (in seconds).

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Spawner capacity**
Change the number of objects that can be created by this spawner. This is reduced everytime an objects is spawned.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Unlimited object capacity**
Change unlimited capacity of spawner.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): UnlimitedObjectCapacity

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Spawn objects periodically**
Spawn (create) objects periodically. This action must be run every frame to work. When the max quantity is reached and an instance is deleted, the spawner waits the duration of the spawn period before creating another instance. Spawned objects are automatically linked to the spawner.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (👾 Object): Object that will be created

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

### Behavior conditions

**Max objects in the scene (per spawner)**
Compare the max objects in the scene (per spawner) of the object. Limits the number of objects in the scene that were created by this spawner. Set this to 0 for no limit.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Object was just spawned**
Check if an object has just been created by this spawner. Useful for triggering visual and sound effects.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

**Use random positions**
Check if using random positions. Useful for making large spawner areas.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

**Spawner capacity**
Compare the number of objects that can be created by this spawner. This is reduced everytime an objects is spawned.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Unlimited capacity**
Check if spawner has unlimited capacity.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.ObjectSpawner::MaxQuantity()` | Return the max objects in the scene (per spawner) of the object. Limits the number of objects in the scene that were created by this spawner. Set this to 0 for no limit. ||
| `Object.ObjectSpawner::SpawnPeriod()` | Return the spawn period (in seconds). ||
| `Object.ObjectSpawner::SpawnerCapacity()` | Return the number of objects that can be created by this spawner. This is reduced everytime an objects is spawned. ||
| `Object.ObjectSpawner::TimeBeforeSpawn()` | Return the remaining time before the next spawn (in seconds). Useful for triggering visual and sound effects. ||


---

*This page is an auto-generated reference page about the **Object spawner 2D area** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).