# Fire bullets

<img src="https://resources.gdevelop-app.com/assets/Icons/bullet.svg" class="extension-icon"></img>
Fire bullets, manage ammo, reloading and overheating.

**Authors and contributors** to this community extension: [4ian](https://gd.games/4ian), [Mixen](https://gd.games/Mixen), [Bouh](https://gd.games/Bouh), [VictrisGames](https://gd.games/VictrisGames).

---

This extension allows objects to fire bullets.

It handles:

- Cooldown between shots
- Firing multiple bullets at a time ([open the project online](https://editor.gdevelop.io/?project=example://fire-bullet))
- Ammo management
- Overheat

It can be used for:

- Twin-stick shooters ([open the project online](https://editor.gdevelop.io/?project=example://conviction-of-gun-dude-desktop))
- Shoot'em up ([open the project online](https://editor.gdevelop.io/?project=example://space-shooter))

A simple example shows how to make firing patterns ([open the project online](https://editor.gdevelop.io/?project=example://firing-patterns)).

[Read more...](https://wiki.gdevelop.io/gdevelop5/extensions/fire-bullet/details)

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Fire bullets 

Fire bullets, manage ammo, reloading, and overheating. 

### Behavior actions

**Fire bullets toward an angle**  
Fire bullets in the direction of a given angle.

**Fire a single bullet**  
Fire a single bullet. This is only meant to be used inside the "Fire bullet" action.

**Fire bullets toward an object**  
Fire bullets toward an object.

**Fire bullets toward a position**  
Fire bullets toward a position.

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

**Set ammo quantity (deprecated)**  
Change the quantity of ammo.

**Ammo quantity**  
Change the ammo quantity.

**Set angle variance (deprecated)**  
Change the angle variance (in degrees) applied to each bullet.

**Angle variance**  
Change the angle variance (in degrees) applied to each bullet.

**Enable (or disable) automatic reloading**  
Enable (or disable) automatic reloading.

**Set bullet layer**  
Change the layer that bullets are created on.

**Set number of bullets per shot (deprecated)**  
Change the number of bullets shot every time the "fire bullet" action is used.

**Bullets per shot**  
Change the number of bullets shot every time the "fire bullet" action is used.

**Set bullet speed variance (deprecated)**  
Change the speed variance (pixels per second) applied to each bullet.

**Bullet speed variance**  
Change the bullet speed variance (pixels per second) applied to each bullet.

**Set firing cooldown (deprecated)**  
Change the firing cooldown, which changes the rate of fire.

**Firing cooldown**  
Change the firing cooldown (in seconds) also known as rate of fire.

**Set exponential cooling rate (deprecated)**  
Change the exponential rate of cooling.

**Exponential cooling rate**  
Change the exponential cooling rate, per second.

**Set firing arc (deprecated)**  
Change the firing arc (in degrees) where bullets will be shot. Bullets will be evenly spaced out inside the firing arc.

**Firing arc**  
Change the firing arc (in degrees) where bullets are shot. Bullets are evenly spaced out inside the firing arc.

**Set heat increase per shot (deprecated)**  
Change the heat increase per shot.

**Heat increase per shot**  
Change the heat increase per shot.

**Set linear cooling rate (deprecated)**  
Change the linear rate of cooling.

**Linear cooling rate**  
Change the linear cooling rate (per second).

**Set max ammo (deprecated)**  
Change the max ammo.

**Max ammo**  
Change the max ammo.

**Set overheat duration (deprecated)**  
Change the duration after becoming overheated.

**Overheat duration**  
Change the overheat duration (in seconds). When an object is overheated, it can't fire for this duration.

**Ammo quantity (current) property**  
Change the property value for the ammo quantity (current).

**Angle variance property**  
Change the property value for the angle variance.

**Reload automatically property**  
Update the property value for "reload automatically".

**Layer the bullets are created on property**  
Change the property value for the layer the bullets are created on.

**Number of bullets created at once (Multi-Fire) property**  
Change the property value for the number of bullets created at once (Multi-Fire).

**Bullet speed variance property**  
Change the property value for the bullet speed variance.

**Exponential cooling rate (per second) property**  
Change the property value for the exponential cooling rate (per second).

**Firing cooldown property**  
Change the property value for the firing cooldown.

**Firing arc property**  
Change the property value for the firing arc.

**HasJustFired property**  
Update the property value for "hasJustFired".

**Heat increase per shot (Range: 0 to 1) property**  
Change the property value for the heat increase per shot (Range: 0 to 1).

**Heat level (Range: 0 to 1) property**  
Change the property value for the heat level (Range: 0 to 1).

**Linear cooling rate (per second) property**  
Change the property value for the linear cooling rate (per second).

**Max ammo  property**  
Change the property value for the max ammo .

**Overheat duration property**  
Change the property value for the overheat duration.

**RandomizedAngle property**  
Change the property value for the randomizedAngle.

**Reloading duration property**  
Change the property value for the reloading duration.

**ReloadInProgress property**  
Update the property value for "reloadInProgress".

**Rotate bullets to match their trajectory property**  
Update the property value for "rotate bullets to match their trajectory".

**Shots before next reload property**  
Change the property value for the shots before next reload.

**Shots per reload  property**  
Change the property value for the shots per reload .

**Starting ammo property**  
Change the property value for the starting ammo.

**Total bullets created property**  
Change the property value for the total bullets created.

**Total reloads completed property**  
Change the property value for the total reloads completed.

**Total shots fired property**  
Change the property value for the total shots fired.

**Unlimited ammo property**  
Update the property value for "unlimited ammo".

**Set reload duration (deprecated)**  
Change the duration to reload ammo.

**Reload duration**  
Change the reload duration (in seconds).

**Enable (or disable) bullet rotation**  
Enable bullet rotation.

**Set shots per reload (deprecated)**  
Change the number of shots per reload.

**Shots per reload**  
Change the number of shots per reload.

**Enable (or disable) unlimited ammo**  
Enable unlimited ammo.

**Toggle Reload automatically property**  
Toggle the property value for reload automatically.  
If it was true, it will become false, and if it was false it will become true.

**Toggle HasJustFired property**  
Toggle the property value for hasJustFired.  
If it was true, it will become false, and if it was false it will become true.

**Toggle ReloadInProgress property**  
Toggle the property value for reloadInProgress.  
If it was true, it will become false, and if it was false it will become true.

**Toggle Rotate bullets to match their trajectory property**  
Toggle the property value for rotate bullets to match their trajectory.  
If it was true, it will become false, and if it was false it will become true.

**Toggle Unlimited ammo property**  
Toggle the property value for unlimited ammo.  
If it was true, it will become false, and if it was false it will become true.

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

**Ammo quantity (current) property**  
Compare the property value for the ammo quantity (current).

**Angle variance property**  
Compare the property value for the angle variance.

**Reload automatically property**  
Check the property value for reload automatically.

**Layer the bullets are created on property**  
Compare the property value for the layer the bullets are created on.

**Number of bullets created at once (Multi-Fire) property**  
Compare the property value for the number of bullets created at once (Multi-Fire).

**Bullet speed variance property**  
Compare the property value for the bullet speed variance.

**Exponential cooling rate (per second) property**  
Compare the property value for the exponential cooling rate (per second).

**Firing cooldown property**  
Compare the property value for the firing cooldown.

**Firing arc property**  
Compare the property value for the firing arc.

**HasJustFired property**  
Check the property value for hasJustFired.

**Heat increase per shot (Range: 0 to 1) property**  
Compare the property value for the heat increase per shot (Range: 0 to 1).

**Heat level (Range: 0 to 1) property**  
Compare the property value for the heat level (Range: 0 to 1).

**Linear cooling rate (per second) property**  
Compare the property value for the linear cooling rate (per second).

**Max ammo  property**  
Compare the property value for the max ammo .

**Overheat duration property**  
Compare the property value for the overheat duration.

**RandomizedAngle property**  
Compare the property value for the randomizedAngle.

**Reloading duration property**  
Compare the property value for the reloading duration.

**ReloadInProgress property**  
Check the property value for reloadInProgress.

**Rotate bullets to match their trajectory property**  
Check the property value for rotate bullets to match their trajectory.

**Shots before next reload property**  
Compare the property value for the shots before next reload.

**Shots per reload  property**  
Compare the property value for the shots per reload .

**Starting ammo property**  
Compare the property value for the starting ammo.

**Total bullets created property**  
Compare the property value for the total bullets created.

**Total reloads completed property**  
Compare the property value for the total reloads completed.

**Total shots fired property**  
Compare the property value for the total shots fired.

**Unlimited ammo property**  
Check the property value for unlimited ammo.

**Reload duration**  
Compare the reload duration (in seconds).

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
| `Object.FireBullet::PropertyAmmoQuantity()` | Return the property value for the ammo quantity (current). ||
| `Object.FireBullet::PropertyAngleVariance()` | Return the property value for the angle variance. ||
| `Object.FireBullet::PropertyBulletLayer()` | Return the property value for the layer the bullets are created on. ||
| `Object.FireBullet::PropertyBulletQuantity()` | Return the property value for the number of bullets created at once (Multi-Fire). ||
| `Object.FireBullet::PropertyBulletSpeedVariance()` | Return the property value for the bullet speed variance. ||
| `Object.FireBullet::PropertyExponentialCoolingRate()` | Return the property value for the exponential cooling rate (per second). ||
| `Object.FireBullet::PropertyFireCooldown()` | Return the property value for the firing cooldown. ||
| `Object.FireBullet::PropertyFiringArc()` | Return the property value for the firing arc. ||
| `Object.FireBullet::PropertyHeatIncreasePerShot()` | Return the property value for the heat increase per shot (Range: 0 to 1). ||
| `Object.FireBullet::PropertyHeatLevel()` | Return the property value for the heat level (Range: 0 to 1). ||
| `Object.FireBullet::PropertyLinearCoolingRate()` | Return the property value for the linear cooling rate (per second). ||
| `Object.FireBullet::PropertyMaxAmmo()` | Return the property value for the max ammo . ||
| `Object.FireBullet::PropertyOverheatDuration()` | Return the property value for the overheat duration. ||
| `Object.FireBullet::PropertyRandomizedAngle()` | Return the property value for the randomizedAngle. ||
| `Object.FireBullet::PropertyReloadDuration()` | Return the property value for the reloading duration. ||
| `Object.FireBullet::PropertyShotsBeforeNextReload()` | Return the property value for the shots before next reload. ||
| `Object.FireBullet::PropertyShotsPerReload()` | Return the property value for the shots per reload . ||
| `Object.FireBullet::PropertyStartingAmmo()` | Return the property value for the starting ammo. ||
| `Object.FireBullet::PropertyTotalBulletsCreated()` | Return the property value for the total bullets created. ||
| `Object.FireBullet::PropertyTotalReloadsCompleted()` | Return the property value for the total reloads completed. ||
| `Object.FireBullet::PropertyTotalShotsFired()` | Return the property value for the total shots fired. ||
| `Object.FireBullet::ReloadDuration()` | Return the reload duration (in seconds). ||
| `Object.FireBullet::ShotsBeforeNextReload()` | Return the remaining shots before the next reload is required. ||
| `Object.FireBullet::ShotsPerReload()` | Return the number of shots per reload. ||
| `Object.FireBullet::TotalBulletsCreated()` | Total bullets created. ||
| `Object.FireBullet::TotalReloadsCompleted()` | Reloads completed. ||
| `Object.FireBullet::TotalShotsFired()` | Total shots fired (multi-bullet shots are considered one shot). ||

---

*This page is an auto-generated reference page about the **Fire bullets** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).