# Advanced projectile

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/4ab6bb9f91ea1110c0c2aabd7fe17e320c1d0ebbb44f56d01885307d7d2e723b_arrow-decision-auto.svg" class="extension-icon"></img>
Control how a projectile moves including speed, acceleration, distance, and lifetime.

**Authors and contributors** to this experimental extension: [VictrisGames](https://gd.games/VictrisGames).

---

Control how a projectile moves including speed, acceleration, distance, and lifetime.

Tips:

- To simulate a rocket, use a starting speed of 0 and a positive acceleration (max speed may also be used)
- To simulate a hand grenade, use a high starting speed, a negative acceleration, and a non-zero lifetime
- If the object is not moving, acceleration will be towards the direction it is facing
- If the object is moving, acceleration will be in the direction the object is moving


[Read more...](/gdevelop5/extensions/advanced-projectile/details)

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Advanced projectile 

Control how a projectile object moves including lifetime, distance, speed, and acceleration. 

### Behavior actions

**Restart lifetime timer**
Restart lifetime timer of object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

**Acceleration**
Change the acceleration of the object. Use a negative number to slow down.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Change automatic deletion when distance from starting position is exceeded**
Change automatic deletion when distance from starting position is exceeded.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): DeleteWhenDistanceExceeded

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Change automatic deletion when lifetime is exceeded**
Change automatic deletion of object when lifetime is exceeded.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): DeleteWhenLifetimeExceeded

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Max distance from starting position**
Change the max distance from starting position of the object. Object is deleted after property has been exceeded. Use "0" to ignore this property.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Lifetime**
Change the lifetime of the object. Object is deleted after property has been exceeded. Use "0" to ignore this property.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Max speed**
Change the max speed of the object. Object forces cannot exceed this value. Use "0" to ignore this property.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**MinSpeed**
Change the minSpeed of the object. Object forces cannot go below this value. Use "0" to ignore this property.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Change starting position to the current position**
Change the starting position of object to it's current position.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

**Starting speed**
Change the starting speed of the object. Object will move in the direction it is facing when it is created. Use "0" to ignore this property.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

### Behavior conditions

**Acceleration**
Compare the acceleration of the object. Use a negative number to slow down.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Automatic deletion is enabled when distance from starting position is exceeded**
Check if automatic deletion is enabled when distance from starting position is exceeded.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

**Automatic deletion is enabled when lifetime is exceeded**
Check if automatic deletion is enabled when lifetime is exceeded.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

**Lifetime has been exceeded**
Check if lifetime has been exceeded (object will be deleted next frame).

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

**Max distance from starting position has been exceeded**
Check if max distance from starting position has been exceeded (object will be deleted next frame).

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

**Max distance from starting position**
Compare the max distance from starting position of the object. Object is deleted after property has been exceeded. Use "0" to ignore this property.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Lifetime**
Compare the lifetime of the object. Object is deleted after property has been exceeded. Use "0" to ignore this property.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Max speed**
Compare the max speed of the object. Object forces cannot exceed this value. Use "0" to ignore this property.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**MinSpeed**
Compare the minSpeed of the object. Object forces cannot go below this value. Use "0" to ignore this property.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Starting speed**
Compare the starting speed of the object. Object will move in the direction it is facing when it is created. Use "0" to ignore this property.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.AdvancedProjectile::Acceleration()` | Return the acceleration of the object. Use a negative number to slow down. ||
| `Object.AdvancedProjectile::MaxDistanceFromStart()` | Return the max distance from starting position of the object. Object is deleted after property has been exceeded. Use "0" to ignore this property. ||
| `Object.AdvancedProjectile::MaxLifetime()` | Return the lifetime of the object. Object is deleted after property has been exceeded. Use "0" to ignore this property. ||
| `Object.AdvancedProjectile::MaxSpeed()` | Return the max speed of the object. Object forces cannot exceed this value. Use "0" to ignore this property. ||
| `Object.AdvancedProjectile::MinSpeed()` | Return the minSpeed of the object. Object forces cannot go below this value. Use "0" to ignore this property. ||
| `Object.AdvancedProjectile::StartingSpeed()` | Return the starting speed of the object. Object will move in the direction it is facing when it is created. Use "0" to ignore this property. ||


---

*This page is an auto-generated reference page about the **Advanced projectile** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).