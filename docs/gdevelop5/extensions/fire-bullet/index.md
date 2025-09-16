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

**Fire bullets toward an object**  
Fire bullets toward an object at a specified speed.

**Fire bullets toward a position**  
Fire bullets toward a position at a specified speed.

**Increase ammo**  
Increase ammo quantity.

**Reload ammo**  
Reload ammo.

**Reset total bullets created**  
Reset total bullets created.

**Reset total reloads completed**  
Reset total reloads completed.

**Reset total shots fired**  
Reset total shots fired.

**Ammo quantity**  
Change the ammo quantity.

**Angle variance**  
Change the angle variance (in degrees) applied to each bullet.

**Enable (or disable) automatic reloading**  
Enable (or disable) automatic reloading.

**Set bullet layer**  
Change the layer that bullets are created on.

**Bullets per shot**  
Change the number of bullets shot every time the "fire bullet" action is used.

**Bullet speed variance**  
Change the bullet speed variance (pixels per second) applied to each bullet.

**Firing cooldown**  
Change the firing cooldown (in seconds) also known as rate of fire.

**Exponential cooling rate**  
Change the exponential cooling rate, per second.

**Firing arc**  
Change the firing arc (in degrees) where bullets are shot. Bullets are evenly spaced out inside the firing arc.

**Heat increase per shot**  
Change the heat increase per shot.

**Linear cooling rate**  
Change the linear cooling rate (per second).

**Max ammo**  
Change the max ammo.

**Overheat duration**  
Change the overheat duration (in seconds). When an object is overheated, it can't fire for this duration.

**Reload duration**  
Change the reload duration (in seconds).

**Enable (or disable) bullet rotation**  
Enable bullet rotation.

**Shots per reload**  
Change the number of shots per reload.

**Enable (or disable) unlimited ammo**  
Enable unlimited ammo.

### Behavior conditions

**Ammo quantity**  
Compare the ammo quantity.

**Angle variance**  
Compare the angle variance (in degrees) applied to each bullet.

**Bullets per shot**  
Compare the number of bullets shot every time the "fire bullet" action is used.

**Is bullet rotation enabled**  
Check if bullet rotates to match trajectory.

**Bullet speed variance**  
Compare the bullet speed variance (pixels per second) applied to each bullet.

**Firing cooldown**  
Compare the firing cooldown (in seconds) also known as rate of fire.

**Duration before cooldown end**  
Compare the remaining duration before the cooldown will permit a bullet to be fired, in seconds.

**Exponential cooling rate**  
Compare the exponential cooling rate, per second.

**Firing arc**  
Compare the firing arc (in degrees) where bullets are shot. Bullets are evenly spaced out inside the firing arc.

**Has just fired**  
Check if the object has just fired something.

**Heat increase per shot**  
Compare the heat increase per shot.

**Heat level**  
Compare the heat level (range: 0 to 1).

**Is automatic reloading enabled**  
Check if automatic reloading is enabled.

**Is firing cooldown active**  
Check if firing cooldown is active.

**Is out of ammo**  
Check if object has no ammo available.

**Is overheated**  
Check if object is overheated.

**Is ready to shoot**  
Check if object is ready to shoot.

**Is ammo reloading in progress**  
Check if object is currently performing an ammo reload.

**Is a reload needed**  
Check if object needs to reload ammo.

**Is ammo unlimited**  
Check if ammo is unlimited.

**Linear cooling rate**  
Compare the linear cooling rate (per second).

**Max ammo**  
Compare the max ammo.

**Overheat duration**  
Compare the overheat duration (in seconds). When an object is overheated, it can't fire for this duration.

**Duration before overheat end**  
Compare the remaining duration before the overheat penalty ends, in seconds.

**Reload duration**  
Compare the reload duration (in seconds).

**Duration before the reload finishes**  
Compare the remaining duration before the reload finishes, in seconds.

**Shots before next reload**  
Compare the remaining shots before the next reload is required.

**Shots per reload**  
Compare the number of shots per reload.

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