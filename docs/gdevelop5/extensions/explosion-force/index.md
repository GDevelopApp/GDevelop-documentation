# Explosion force

<img src="https://resources.gdevelop-app.com/assets/Icons/bomb.svg" class="extension-icon"></img>
Simulate an explosion with physics forces on target objects.

**Authors and contributors** to this experimental extension: [VictrisGames](https://gd.games/VictrisGames).

---

Apply explosion-like physics forces to target objects that are inside the explosion radius. Forces will push the target objects away from the explosion center.  The force applied is stronger the closer the target object is to the explosion center.  Target objects will be changed to "Dynamic" physics objects. 

Requirements:


- Target Objects must have physics behavior

Tips:


- Use the "__ExplosionForce.Exploded" object variable to detect when target objects are affected by an explosion.  For instance, start an opacity tween that fades away and deletes the objects.

Variables given to Target Objects:


- "__ExplosionForce.Exploded" (boolean)
- "__ExplosionForce.Magnitude" (number)
- "__ExplosionForce.Angle" (number)


[Read more...](https://victrisgames.itch.io/extension-explosion-force)

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Simulate explosion with physics forces**
Simulate an explosion with physics forces on target objects.

??? quote "See parameters"

    - Parameter 1 (👾 Object): Target Object
    - Parameter 2 (🧩 Behavior): Physics Behavior (required)
    - Parameter 3 (🔢 Number): Explosion center (X)
    - Parameter 4 (🔢 Number): Explosion center (Y)
    - Parameter 5 (🔢 Number): Max force (of explosion)
      Force decreases the farther an object is from the explosion center.
    - Parameter 6 (🔢 Number): Max distance (from center of explosion) (pixels)
      Objects less than this distance will be affected by the explosion.

    > Technical note: parameters 0, 7 are internal parameters handled by GDevelop.




---

*This page is an auto-generated reference page about the **Explosion force** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).