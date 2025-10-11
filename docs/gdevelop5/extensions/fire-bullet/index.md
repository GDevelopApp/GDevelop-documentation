# Fire bullets

<img src="https://resources.gdevelop-app.com/assets/Icons/bullet.svg" class="extension-icon"></img>
Fire bullets, manage ammo, reloading and overheating.

**Authors and contributors** to this experimental extension: [4ian](https://gd.games/4ian), [Muzan7](https://gd.games/Muzan7), [Bouh](https://gd.games/Bouh), [VictrisGames](https://gd.games/VictrisGames).

---

This extension allows objects to fire bullets. To use it, add the behavior to the object that will shoot, then use the provided action to launch another object as the bullet.

The properties of the behavior can be used to customize:

- Cooldown between shots
- Firing multiple bullets at a time ([open the project online](https://editor.gdevelop.io/?project=example://fire-bullet))
- Ammo management
- Overheat

The speed can be specified when using the actions to fire the bullets.
The bullets are automatically given a permanent force to make them move (no need to use a linear movement or move them with another behavior).

It can be used for:

- Twin-stick shooters ([open the project online](https://editor.gdevelop.io/?project=example://conviction-of-gun-dude-desktop))
- Shoot'em up ([open the project online](https://editor.gdevelop.io/?project=example://space-shooter))

A simple example shows how to make firing patterns ([open the project online](https://editor.gdevelop.io/?project=example://firing-patterns)).

[Read more...](/gdevelop5/extensions/fire-bullet/details)

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Fire bullets 

Fire bullets, manage ammo, reloading, and overheating. Once added to your object that must shoot, use the behavior action in your events to fire another object as a bullet. This action will also make the bullet move (using a permanent force) at the speed specified in the action. 

### Behavior actions

**Fire bullets toward an angle**  
Fire bullets in the direction of a given angle at a specified speed.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): X position, where to create the bullet
    - Parameter 3 (🔢 Number): Y position, where to create the bullet
    - Parameter 4 (👾 Object): The bullet object
    - Parameter 5 (🔢 Number): Angle of the bullet, in degrees
    - Parameter 6 (🔢 Number): Speed of the bullet, in pixels per second

    > Technical note: parameter 7 are internal parameters handled by GDevelop.

**Fire bullets toward an object**  
Fire bullets toward an object at a specified speed.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): X position, where to create the bullet
    - Parameter 3 (🔢 Number): Y position, where to create the bullet
    - Parameter 4 (👾 Object): The bullet object
    - Parameter 5 (👾 Object): Target object
    - Parameter 6 (🔢 Number): Speed of the bullet, in pixels per second

    > Technical note: parameter 7 are internal parameters handled by GDevelop.

**Fire bullets toward a position**  
Fire bullets toward a position at a specified speed.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): X position, where to create the bullet
    - Parameter 3 (🔢 Number): Y position, where to create the bullet
    - Parameter 4 (👾 Object): The bullet object
    - Parameter 5 (🔢 Number): Target X position
    - Parameter 6 (🔢 Number): Target Y position
    - Parameter 7 (🔢 Number): Speed of the bullet, in pixels per second

    > Technical note: parameter 8 are internal parameters handled by GDevelop.

**Increase ammo**  
Increase ammo quantity.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Ammo gained

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Reload ammo**  
Reload ammo.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

**Reset total bullets created**  
Reset total bullets created.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

**Reset total reloads completed**  
Reset total reloads completed.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

**Reset total shots fired**  
Reset total shots fired.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

**Ammo quantity**  
Change the ammo quantity.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Angle variance**  
Change the angle variance (in degrees) applied to each bullet.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Enable (or disable) automatic reloading**  
Enable (or disable) automatic reloading.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): Enable automatic reloading

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Set bullet layer**  
Change the layer that bullets are created on.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🔤 Layer name (String)

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Bullets per shot**  
Change the number of bullets shot every time the "fire bullet" action is used.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Bullet speed variance**  
Change the bullet speed variance (pixels per second) applied to each bullet.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Firing cooldown**  
Change the firing cooldown (in seconds) also known as rate of fire.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Exponential cooling rate**  
Change the exponential cooling rate, per second.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Firing arc**  
Change the firing arc (in degrees) where bullets are shot. Bullets are evenly spaced out inside the firing arc.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Heat increase per shot**  
Change the heat increase per shot.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Linear cooling rate**  
Change the linear cooling rate (per second).

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Max ammo**  
Change the max ammo.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Overheat duration**  
Change the overheat duration (in seconds). When an object is overheated, it can't fire for this duration.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Reload duration**  
Change the reload duration (in seconds).

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Enable (or disable) bullet rotation**  
Enable bullet rotation.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): Rotate bullet to match trajetory

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Shots per reload**  
Change the number of shots per reload.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Enable (or disable) unlimited ammo**  
Enable unlimited ammo.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): Unlimited ammo

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

### Behavior conditions

**Ammo quantity**  
Compare the ammo quantity.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Angle variance**  
Compare the angle variance (in degrees) applied to each bullet.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Bullets per shot**  
Compare the number of bullets shot every time the "fire bullet" action is used.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Is bullet rotation enabled**  
Check if bullet rotates to match trajectory.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

**Bullet speed variance**  
Compare the bullet speed variance (pixels per second) applied to each bullet.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Firing cooldown**  
Compare the firing cooldown (in seconds) also known as rate of fire.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Duration before cooldown end**  
Compare the remaining duration before the cooldown will permit a bullet to be fired, in seconds.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Exponential cooling rate**  
Compare the exponential cooling rate, per second.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Firing arc**  
Compare the firing arc (in degrees) where bullets are shot. Bullets are evenly spaced out inside the firing arc.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Has just fired**  
Check if the object has just fired something.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

**Heat increase per shot**  
Compare the heat increase per shot.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Heat level**  
Compare the heat level (range: 0 to 1).

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Is automatic reloading enabled**  
Check if automatic reloading is enabled.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

**Is firing cooldown active**  
Check if firing cooldown is active.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

**Is out of ammo**  
Check if object has no ammo available.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

**Is overheated**  
Check if object is overheated.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

**Is ready to shoot**  
Check if object is ready to shoot.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

**Is ammo reloading in progress**  
Check if object is currently performing an ammo reload.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

**Is a reload needed**  
Check if object needs to reload ammo.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

**Is ammo unlimited**  
Check if ammo is unlimited.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

**Linear cooling rate**  
Compare the linear cooling rate (per second).

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Max ammo**  
Compare the max ammo.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Overheat duration**  
Compare the overheat duration (in seconds). When an object is overheated, it can't fire for this duration.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Duration before overheat end**  
Compare the remaining duration before the overheat penalty ends, in seconds.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Reload duration**  
Compare the reload duration (in seconds).

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Duration before the reload finishes**  
Compare the remaining duration before the reload finishes, in seconds.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Shots before next reload**  
Compare the remaining shots before the next reload is required.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Shots per reload**  
Compare the number of shots per reload.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.FireBullet::AmmoQuantity()` | Return the ammo quantity. ||
| `Object.FireBullet::AngleVariance()` | Return the angle variance (in degrees) applied to each bullet. ||
| `Object.FireBullet::BulletLayer()` | Layer that bullets are created on. ||
| `Object.FireBullet::BulletQuantity()` | Return the number of bullets shot every time the "fire bullet" action is used. ||
| `Object.FireBullet::BulletSpeedVariance()` | Return the bullet speed variance (pixels per second) applied to each bullet. ||
| `Object.FireBullet::Cooldown()` | Return the firing cooldown (in seconds) also known as rate of fire. ||
| `Object.FireBullet::CooldownTimeLeft()` | Return the remaining duration before the cooldown will permit a bullet to be fired, in seconds. ||
| `Object.FireBullet::ExponentialCoolingRate()` | Return the exponential cooling rate, per second. ||
| `Object.FireBullet::FiringArc()` | Return the firing arc (in degrees) where bullets are shot. Bullets are evenly spaced out inside the firing arc. ||
| `Object.FireBullet::HeatIncreasePerShot()` | Return the heat increase per shot. ||
| `Object.FireBullet::HeatLevel()` | Return the heat level (range: 0 to 1). ||
| `Object.FireBullet::LinearCoolingRate()` | Return the linear cooling rate (per second). ||
| `Object.FireBullet::MaxAmmo()` | Return the max ammo. ||
| `Object.FireBullet::OverheatDuration()` | Return the overheat duration (in seconds). When an object is overheated, it can't fire for this duration. ||
| `Object.FireBullet::OverheatTimeLeft()` | Return the remaining duration before the overheat penalty ends, in seconds. ||
| `Object.FireBullet::ReloadDuration()` | Return the reload duration (in seconds). ||
| `Object.FireBullet::ReloadTimeLeft()` | Return the remaining duration before the reload finishes, in seconds. ||
| `Object.FireBullet::ShotsBeforeNextReload()` | Return the remaining shots before the next reload is required. ||
| `Object.FireBullet::ShotsPerReload()` | Return the number of shots per reload. ||
| `Object.FireBullet::TotalBulletsCreated()` | Total bullets created. ||
| `Object.FireBullet::TotalReloadsCompleted()` | Reloads completed. ||
| `Object.FireBullet::TotalShotsFired()` | Total shots fired (multi-bullet shots are considered one shot). ||


---

*This page is an auto-generated reference page about the **Fire bullets** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).