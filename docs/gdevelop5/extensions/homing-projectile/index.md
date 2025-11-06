# Homing projectile

<img src="https://resources.gdevelop-app.com/assets/Icons/rocket-launch.svg" class="extension-icon"></img>
Make a projectile object move towards a target object.

**Authors and contributors** to this experimental extension: [VictrisGames](https://gd.games/VictrisGames).

---

This extension requires two actions to function correctly:
1) "Lock projectile to target" should be used once per projectile. 
2) "Move projectile towards target" should be run every frame.  This will move all projectiles that are locked to targets.

Parameters:

- Rotation Speed: How fast the projectile rotates. This is critical in determining how fast the projectile can turn corners.
- Initial Speed: Starting speed of the projectile
- Acceleration: How much speed is added over time
- Max Speed:  The max speed a projectile can travel (does not apply to physics object)
- Max Lifetime:  The number of seconds a projectile can exist after locking onto a target.  Once this time is reached the object is deleted.

Tips:

- Make sure to set the angle of the projectile before you use the "Move" action.  The projectile will turn towards the target, but you might want the projectile to be facing a certain direction. 
- Since Max Speed is not enforced on the physics object, you can accomplish this by changing Linear Decay on the Physics behavior
- Use the lifetime parameter to prevent missiles from chasing objects forever

[Read more...](https://victrisgames.itch.io/extension-homing-projectile)

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Lock projectile to target**  
Lock projectile object to target object.  (This is required for "Move projectile towards target").

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Projectile object
    - Parameter 2 (👾 Object): Target object

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `HomingProjectile::LockOnTarget`.

**Move projectile towards target**  
Move projectile towards the object that it has been locked to.  This action must be run every frame.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Projectile object
    - Parameter 2 (👾 Object): Target object
    - Parameter 3 (🔢 Number): Rotation speed (degrees per second)
    - Parameter 4 (🔢 Number): Initial speed (pixels per second)
    - Parameter 5 (🔢 Number): Acceleration (speed increase per second)
    - Parameter 6 (🔢 Number): Max speed
    - Parameter 7 (🔢 Number): Max lifetime (seconds)
      Projectile will be deleted after this value is reached.
    - Parameter 8 (❓ Yes or No): Delete Projectile if it collides with Target:

    > Technical note: parameters 0, 9 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `HomingProjectile::MoveTowardsTarget`.

**Move physics projectile towards target**  
Move physics projectile towards the object that it has been locked to.  This action must be run every frame.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Projectile object
    - Parameter 2 (🧩 Behavior): Physics Behavior
    - Parameter 3 (👾 Object): Target object
    - Parameter 4 (🔢 Number): Rotation speed (degrees per second)
    - Parameter 5 (🔢 Number): Initial speed (pixels per second)
    - Parameter 6 (🔢 Number): Acceleration (speed increase per second)
    - Parameter 7 (🔢 Number): Max lifetime (seconds)
      Projectile will be deleted after this value is reached.
    - Parameter 8 (❓ Yes or No): Delete Projectile if it collides with Target:

    > Technical note: parameters 0, 9 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `HomingProjectile::MoveTowardsTargetPhysics`.





---

*This page is an auto-generated reference page about the **Homing projectile** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).