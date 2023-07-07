# Advanced projectile

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/4ab6bb9f91ea1110c0c2aabd7fe17e320c1d0ebbb44f56d01885307d7d2e723b_arrow-decision-auto.svg" class="extension-icon"></img>
Control how a projectile moves including speed, acceleration, distance, and lifetime.

**Authors and contributors** to this community extension: [VictrisGames](https://gd.games/VictrisGames).

---

Control how a projectile moves including speed, acceleration, distance, and lifetime.

Tips:

- To simulate a rocket, use a starting speed of 0 and a positive acceleration (max speed may also be used)
- To simulate a hand grenade, use a high starting speed, a negative acceleration, and a non-zero lifetime
- If the object is not moving, acceleration will be towards the direction it is facing
- If the object is moving, acceleration will be in the direction the object is moving


[Read more...](https://wiki.gdevelop.io/gdevelop5/extensions/advanced-projectile/details)

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Advanced projectile 

Control how a projectile object moves including lifetime, distance, speed, and acceleration. 

### Behavior actions

**Restart lifetime timer**  
Restart lifetime timer of object.

**Acceleration**  
Change the acceleration of the object. Use a negative number to slow down.

**Change automatic deletion when distance from starting position is exceeded**  
Change automatic deletion when distance from starting position is exceeded.

**Change automatic deletion when lifetime is exceeded**  
Change automatic deletion of object when lifetime is exceeded.

**Max distance from starting position**  
Change the max distance from starting position of the object. Object is deleted after property has been exceeded. Use "0" to ignore this property.

**Lifetime**  
Change the lifetime of the object. Object is deleted after property has been exceeded. Use "0" to ignore this property.

**Max speed**  
Change the max speed of the object. Object forces cannot exceed this value. Use "0" to ignore this property.

**MinSpeed**  
Change the minSpeed of the object. Object forces cannot go below this value. Use "0" to ignore this property.

**Acceleration property**  
Change the property value for the acceleration.

**Delete when distance from starting position is exceeded property**  
Update the property value for "delete when distance from starting position is exceeded".

**Delete when lifetime is exceeded property**  
Update the property value for "delete when lifetime is exceeded".

**Max distance from starting position property**  
Change the property value for the max distance from starting position.

**Lifetime property**  
Change the property value for the lifetime.

**Max speed property**  
Change the property value for the max speed.

**MinSpeed property**  
Change the property value for the minSpeed.

**Starting speed property**  
Change the property value for the starting speed.

**Change starting position to the current position**  
Change the starting position of object to it's current position.

**Starting speed**  
Change the starting speed of the object. Object will move in the direction it is facing when it is created. Use "0" to ignore this property.

**Toggle Delete when distance from starting position is exceeded property**  
Toggle the property value for delete when distance from starting position is exceeded.  
If it was true, it will become false, and if it was false it will become true.

**Toggle Delete when lifetime is exceeded property**  
Toggle the property value for delete when lifetime is exceeded.  
If it was true, it will become false, and if it was false it will become true.

### Behavior conditions

**Acceleration**  
Compare the acceleration of the object. Use a negative number to slow down.

**Automatic deletion is enabled when distance from starting position is exceeded**  
Check if automatic deletion is enabled when distance from starting position is exceeded.

**Automatic deletion is enabled when lifetime is exceeded**  
Check if automatic deletion is enabled when lifetime is exceeded.

**Lifetime has been exceeded**  
Check if lifetime has been exceeded (object will be deleted next frame).

**Max distance from starting position has been exceeded**  
Check if max distance from starting position has been exceeded (object will be deleted next frame).

**Max distance from starting position**  
Compare the max distance from starting position of the object. Object is deleted after property has been exceeded. Use "0" to ignore this property.

**Lifetime**  
Compare the lifetime of the object. Object is deleted after property has been exceeded. Use "0" to ignore this property.

**Max speed**  
Compare the max speed of the object. Object forces cannot exceed this value. Use "0" to ignore this property.

**MinSpeed**  
Compare the minSpeed of the object. Object forces cannot go below this value. Use "0" to ignore this property.

**Acceleration property**  
Compare the property value for the acceleration.

**Delete when distance from starting position is exceeded property**  
Check the property value for delete when distance from starting position is exceeded.

**Delete when lifetime is exceeded property**  
Check the property value for delete when lifetime is exceeded.

**Max distance from starting position property**  
Compare the property value for the max distance from starting position.

**Lifetime property**  
Compare the property value for the lifetime.

**Max speed property**  
Compare the property value for the max speed.

**MinSpeed property**  
Compare the property value for the minSpeed.

**Starting speed property**  
Compare the property value for the starting speed.

**Starting speed**  
Compare the starting speed of the object. Object will move in the direction it is facing when it is created. Use "0" to ignore this property.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.AdvancedProjectile::Acceleration()` | Return the acceleration of the object. Use a negative number to slow down. ||
| `Object.AdvancedProjectile::MaxDistanceFromStart()` | Return the max distance from starting position of the object. Object is deleted after property has been exceeded. Use "0" to ignore this property. ||
| `Object.AdvancedProjectile::MaxLifetime()` | Return the lifetime of the object. Object is deleted after property has been exceeded. Use "0" to ignore this property. ||
| `Object.AdvancedProjectile::MaxSpeed()` | Return the max speed of the object. Object forces cannot exceed this value. Use "0" to ignore this property. ||
| `Object.AdvancedProjectile::MinSpeed()` | Return the minSpeed of the object. Object forces cannot go below this value. Use "0" to ignore this property. ||
| `Object.AdvancedProjectile::PropertyAcceleration()` | Return the property value for the acceleration. ||
| `Object.AdvancedProjectile::PropertyMaxDistanceFromStartingPosition()` | Return the property value for the max distance from starting position. ||
| `Object.AdvancedProjectile::PropertyMaxLifetime()` | Return the property value for the lifetime. ||
| `Object.AdvancedProjectile::PropertyMaxSpeed()` | Return the property value for the max speed. ||
| `Object.AdvancedProjectile::PropertyMinSpeed()` | Return the property value for the minSpeed. ||
| `Object.AdvancedProjectile::PropertyStartingSpeed()` | Return the property value for the starting speed. ||
| `Object.AdvancedProjectile::StartingSpeed()` | Return the starting speed of the object. Object will move in the direction it is facing when it is created. Use "0" to ignore this property. ||

---

*This page is an auto-generated reference page about the **Advanced projectile** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).