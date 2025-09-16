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

**Move projectile towards target**  
Move projectile towards the object that it has been locked to.  This action must be run every frame.

**Move physics projectile towards target**  
Move physics projectile towards the object that it has been locked to.  This action must be run every frame.




---

*This page is an auto-generated reference page about the **Homing projectile** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).