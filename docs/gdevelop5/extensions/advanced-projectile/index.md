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

### Behavior properties

- **Acceleration** (🔢 Number, Acceleration). Negative acceleration can be used to stop a projectile. Default value is `0`.
- **Delete when distance from starting position is exceeded** (🔘 Boolean). Default value is `true`.
- **Delete when lifetime is exceeded** (🔘 Boolean). Default value is `true`.
- **Max distance from starting position** (🔢 Number, Distance). Use "0" to ignore this property. Default value is `0`.
- **Lifetime** (🔢 Number, Duration). Use "0" to ignore this property. Default value is `0`.
- **Max speed** (🔢 Number, Speed). Speed from object forces will not exceed this value. Use "0" to ignore this property. Default value is `0`.
- **MinSpeed** (🔢 Number, Speed). Speed from object forces will not go below this value. Use "0" to ignore this property. Default value is `0`.
- **Starting speed** (🔢 Number, Speed). Object will move in the direction it is facing when it is created. Use "0" to ignore this property. Default value is `0`.

??? quote "See internal technical details"


    - **Acceleration** is stored as `Acceleration` (Number). Unit is PixelAcceleration. Default value is `0`.
    - **Delete when distance from starting position is exceeded** is stored as `DeleteWhenDistanceExceeded` (Boolean). Default value is `true`.
    - **Delete when lifetime is exceeded** is stored as `DeleteWhenLifetimeExceeded` (Boolean). Default value is `true`.
    - **Max distance from starting position** is stored as `MaxDistanceFromStartingPosition` (Number). Unit is Pixel. Default value is `0`.
    - **Lifetime** is stored as `MaxLifetime` (Number). Unit is Second. Default value is `0`.
    - **Max speed** is stored as `MaxSpeed` (Number). Unit is PixelSpeed. Default value is `0`.
    - **MinSpeed** is stored as `MinSpeed` (Number). Unit is PixelSpeed. Default value is `0`.
    - **Starting speed** is stored as `StartingSpeed` (Number). Unit is PixelSpeed. Default value is `0`.

### Behavior actions

**Restart lifetime timer**  
Restart lifetime timer of object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `AdvancedProjectile::AdvancedProjectile::RestartLifetimeTimer`.

**Acceleration**  
Change the acceleration of the object. Use a negative number to slow down.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `AdvancedProjectile::AdvancedProjectile::SetAcceleration`.

**Change automatic deletion when distance from starting position is exceeded**  
Change automatic deletion when distance from starting position is exceeded.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): DeleteWhenDistanceExceeded

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `AdvancedProjectile::AdvancedProjectile::SetDeleteWhenDistanceExceeded`.

**Change automatic deletion when lifetime is exceeded**  
Change automatic deletion of object when lifetime is exceeded.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): DeleteWhenLifetimeExceeded

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `AdvancedProjectile::AdvancedProjectile::SetDeleteWhenLifetimeExceeded`.

**Max distance from starting position**  
Change the max distance from starting position of the object. Object is deleted after property has been exceeded. Use "0" to ignore this property.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `AdvancedProjectile::AdvancedProjectile::SetMaxDistanceFromStart`.

**Lifetime**  
Change the lifetime of the object. Object is deleted after property has been exceeded. Use "0" to ignore this property.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `AdvancedProjectile::AdvancedProjectile::SetMaxLifetime`.

**Max speed**  
Change the max speed of the object. Object forces cannot exceed this value. Use "0" to ignore this property.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `AdvancedProjectile::AdvancedProjectile::SetMaxSpeed`.

**MinSpeed**  
Change the minSpeed of the object. Object forces cannot go below this value. Use "0" to ignore this property.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `AdvancedProjectile::AdvancedProjectile::SetMinSpeed`.

**Change starting position to the current position**  
Change the starting position of object to it's current position.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `AdvancedProjectile::AdvancedProjectile::SetStartingPositionToCurrentPosition`.

**Starting speed**  
Change the starting speed of the object. Object will move in the direction it is facing when it is created. Use "0" to ignore this property.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `AdvancedProjectile::AdvancedProjectile::SetStartingSpeed`.


### Behavior conditions

**Acceleration**  
Compare the acceleration of the object. Use a negative number to slow down.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `AdvancedProjectile::AdvancedProjectile::Acceleration`.

**Automatic deletion is enabled when distance from starting position is exceeded**  
Check if automatic deletion is enabled when distance from starting position is exceeded.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `AdvancedProjectile::AdvancedProjectile::DeleteWhenDistanceExceeded`.

**Automatic deletion is enabled when lifetime is exceeded**  
Check if automatic deletion is enabled when lifetime is exceeded.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `AdvancedProjectile::AdvancedProjectile::DeleteWhenLifetimeExceeded`.

**Lifetime has been exceeded**  
Check if lifetime has been exceeded (object will be deleted next frame).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `AdvancedProjectile::AdvancedProjectile::IsLifetimeExceeded`.

**Max distance from starting position has been exceeded**  
Check if max distance from starting position has been exceeded (object will be deleted next frame).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `AdvancedProjectile::AdvancedProjectile::IsMaxDistanceExceeded`.

**Max distance from starting position**  
Compare the max distance from starting position of the object. Object is deleted after property has been exceeded. Use "0" to ignore this property.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `AdvancedProjectile::AdvancedProjectile::MaxDistanceFromStart`.

**Lifetime**  
Compare the lifetime of the object. Object is deleted after property has been exceeded. Use "0" to ignore this property.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `AdvancedProjectile::AdvancedProjectile::MaxLifetime`.

**Max speed**  
Compare the max speed of the object. Object forces cannot exceed this value. Use "0" to ignore this property.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `AdvancedProjectile::AdvancedProjectile::MaxSpeed`.

**MinSpeed**  
Compare the minSpeed of the object. Object forces cannot go below this value. Use "0" to ignore this property.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `AdvancedProjectile::AdvancedProjectile::MinSpeed`.

**Starting speed**  
Compare the starting speed of the object. Object will move in the direction it is facing when it is created. Use "0" to ignore this property.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `AdvancedProjectile::AdvancedProjectile::StartingSpeed`.


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

*This page is an auto-generated reference page about the **Advanced projectile** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).