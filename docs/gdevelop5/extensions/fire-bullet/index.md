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

### Behavior properties

- **Angle variance** (🔢 Number, Angle). Make imperfect aim (between 0 and 180 degrees). Default value is `0`.
- **Reload automatically** (🔘 Boolean). Default value is `true`.
- **Number of bullets created at once** (🔢 Number). Multi-Fire bullets will be evenly spaced inside the firing arc. Default value is `1`.
- **Bullet speed variance** (🔢 Number, Speed). Bullet speed will be adjusted by a random value within this range. Default value is `0`.
- **Exponential cooling rate (per second)** (🔢 Number). Happens faster when heat is high and slower when heat is low. Default value is `0.3`.
- **Firing cooldown** (🔢 Number, Duration). Objects cannot shoot while firing cooldown is active. Default value is `0.1`.
- **Firing arc** (🔢 Number, Angle). Multi-Fire bullets will be evenly spaced inside the firing arc. Default value is `45`.
- **Heat increase per shot (between 0 and 1)** (🔢 Number). Object is overheated when Heat reaches 1. Default value is `0`.
- **Linear cooling rate (per second)** (🔢 Number). Default value is `0.1`.
- **Max ammo ** (🔢 Number). Default value is `0`.
- **Overheat duration** (🔢 Number, Duration). Object cannot shoot while overheat duration is active. Default value is `0`.
- **Reloading duration** (🔢 Number, Duration). Objects cannot shoot while reloading is in progress. Default value is `1`.
- **Rotate bullets to match their trajectory** (🔘 Boolean). Default value is `true`.
- **Shots per reload ** (🔢 Number). Use 0 to disable reloading. Default value is `0`.
- **Starting ammo** (🔢 Number). Default value is `0`.
- **Unlimited ammo** (🔘 Boolean). Default value is `true`.

??? quote "See internal technical details"


    - **Angle variance** is stored as `AngleVariance` (Number). Unit is DegreeAngle. Default value is `0`.
    - **Reload automatically** is stored as `AutomaticReloading` (Boolean). Default value is `true`.
    - **Number of bullets created at once** is stored as `BulletQuantity` (Number). Default value is `1`.
    - **Bullet speed variance** is stored as `BulletSpeedVariance` (Number). Unit is PixelSpeed. Default value is `0`.
    - **Exponential cooling rate (per second)** is stored as `ExponentialCoolingRate` (Number). Default value is `0.3`.
    - **Firing cooldown** is stored as `FireCooldown` (Number). Unit is Second. Default value is `0.1`.
    - **Firing arc** is stored as `FiringArc` (Number). Unit is DegreeAngle. Default value is `45`.
    - **Heat increase per shot (between 0 and 1)** is stored as `HeatIncreasePerShot` (Number). Default value is `0`.
    - **Linear cooling rate (per second)** is stored as `LinearCoolingRate` (Number). Default value is `0.1`.
    - **Max ammo ** is stored as `MaxAmmo` (Number). Default value is `0`.
    - **Overheat duration** is stored as `OverheatDuration` (Number). Unit is Second. Default value is `0`.
    - **Reloading duration** is stored as `ReloadDuration` (Number). Unit is Second. Default value is `1`.
    - **Rotate bullets to match their trajectory** is stored as `RotateBullet` (Boolean). Default value is `true`.
    - **Shots per reload ** is stored as `ShotsPerReload` (Number). Default value is `0`.
    - **Starting ammo** is stored as `StartingAmmo` (Number). Default value is `0`.
    - **Unlimited ammo** is stored as `UnlimitedAmmo` (Boolean). Default value is `true`.

### Behavior actions

**Fire bullets toward an angle**  
Fire bullets in the direction of a given angle at a specified speed.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): X position, where to create the bullet
    - Parameter 3 (🔢 Number): Y position, where to create the bullet
    - Parameter 4 (👾 Object): The bullet object
    - Parameter 5 (🔢 Number): Angle of the bullet, in degrees
    - Parameter 6 (🔢 Number): Speed of the bullet, in pixels per second

    > Technical note: parameter 7 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `FireBullet::FireBullet::Fire`.

**Fire bullets toward an object**  
Fire bullets toward an object at a specified speed.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): X position, where to create the bullet
    - Parameter 3 (🔢 Number): Y position, where to create the bullet
    - Parameter 4 (👾 Object): The bullet object
    - Parameter 5 (👾 Object): Target object
    - Parameter 6 (🔢 Number): Speed of the bullet, in pixels per second

    > Technical note: parameter 7 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `FireBullet::FireBullet::FireTowardObject`.

**Fire bullets toward a position**  
Fire bullets toward a position at a specified speed.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): X position, where to create the bullet
    - Parameter 3 (🔢 Number): Y position, where to create the bullet
    - Parameter 4 (👾 Object): The bullet object
    - Parameter 5 (🔢 Number): Target X position
    - Parameter 6 (🔢 Number): Target Y position
    - Parameter 7 (🔢 Number): Speed of the bullet, in pixels per second

    > Technical note: parameter 8 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `FireBullet::FireBullet::FireTowardPosition`.

**Increase ammo**  
Increase ammo quantity.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Ammo gained

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `FireBullet::FireBullet::IncreaseAmmo`.

**Reload ammo**  
Reload ammo.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `FireBullet::FireBullet::ReloadAmmo`.

**Reset total bullets created**  
Reset total bullets created.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `FireBullet::FireBullet::ResetTotalBulletsCreated`.

**Reset total reloads completed**  
Reset total reloads completed.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `FireBullet::FireBullet::ResetTotalReloadsCompleted`.

**Reset total shots fired**  
Reset total shots fired.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `FireBullet::FireBullet::ResetTotalShotsFired`.

**Ammo quantity**  
Change the ammo quantity.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `FireBullet::FireBullet::SetAmmoQuantityOp`.

**Angle variance**  
Change the angle variance (in degrees) applied to each bullet.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `FireBullet::FireBullet::SetAngleVarianceOp`.

**Enable (or disable) automatic reloading**  
Enable (or disable) automatic reloading.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): Enable automatic reloading

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `FireBullet::FireBullet::SetAutomaticReload`.

**Set bullet layer**  
Change the layer that bullets are created on.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🔤 Layer name (String)

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `FireBullet::FireBullet::SetBulletLayer`.

**Bullets per shot**  
Change the number of bullets shot every time the "fire bullet" action is used.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `FireBullet::FireBullet::SetBulletQuantityOp`.

**Bullet speed variance**  
Change the bullet speed variance (pixels per second) applied to each bullet.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `FireBullet::FireBullet::SetBulletSpeedVarianceOp`.

**Firing cooldown**  
Change the firing cooldown (in seconds) also known as rate of fire.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `FireBullet::FireBullet::SetCooldownOp`.

**Exponential cooling rate**  
Change the exponential cooling rate, per second.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `FireBullet::FireBullet::SetExponentialCoolingRateOp`.

**Firing arc**  
Change the firing arc (in degrees) where bullets are shot. Bullets are evenly spaced out inside the firing arc.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `FireBullet::FireBullet::SetFiringArcOp`.

**Heat increase per shot**  
Change the heat increase per shot.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `FireBullet::FireBullet::SetHeatPerShotOp`.

**Linear cooling rate**  
Change the linear cooling rate (per second).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `FireBullet::FireBullet::SetLinearCoolingRateOp`.

**Max ammo**  
Change the max ammo.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `FireBullet::FireBullet::SetMaxAmmoOp`.

**Overheat duration**  
Change the overheat duration (in seconds). When an object is overheated, it can't fire for this duration.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `FireBullet::FireBullet::SetOverheatDurationOp`.

**Reload duration**  
Change the reload duration (in seconds).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `FireBullet::FireBullet::SetReloadDurationOp`.

**Enable (or disable) bullet rotation**  
Enable bullet rotation.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): Rotate bullet to match trajetory

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `FireBullet::FireBullet::SetRotateBullet`.

**Shots per reload**  
Change the number of shots per reload.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `FireBullet::FireBullet::SetShotsPerReloadOp`.

**Enable (or disable) unlimited ammo**  
Enable unlimited ammo.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): Unlimited ammo

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `FireBullet::FireBullet::SetUnlimitedAmmo`.


### Behavior conditions

**Ammo quantity**  
Compare the ammo quantity.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `FireBullet::FireBullet::AmmoQuantity`.

**Angle variance**  
Compare the angle variance (in degrees) applied to each bullet.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `FireBullet::FireBullet::AngleVariance`.

**Bullets per shot**  
Compare the number of bullets shot every time the "fire bullet" action is used.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `FireBullet::FireBullet::BulletQuantity`.

**Is bullet rotation enabled**  
Check if bullet rotates to match trajectory.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `FireBullet::FireBullet::BulletRotationEnabled`.

**Bullet speed variance**  
Compare the bullet speed variance (pixels per second) applied to each bullet.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `FireBullet::FireBullet::BulletSpeedVariance`.

**Firing cooldown**  
Compare the firing cooldown (in seconds) also known as rate of fire.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `FireBullet::FireBullet::Cooldown`.

**Duration before cooldown end**  
Compare the remaining duration before the cooldown will permit a bullet to be fired, in seconds.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `FireBullet::FireBullet::CooldownTimeLeft`.

**Exponential cooling rate**  
Compare the exponential cooling rate, per second.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `FireBullet::FireBullet::ExponentialCoolingRate`.

**Firing arc**  
Compare the firing arc (in degrees) where bullets are shot. Bullets are evenly spaced out inside the firing arc.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `FireBullet::FireBullet::FiringArc`.

**Has just fired**  
Check if the object has just fired something.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `FireBullet::FireBullet::HasJustFired`.

**Heat increase per shot**  
Compare the heat increase per shot.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `FireBullet::FireBullet::HeatIncreasePerShot`.

**Heat level**  
Compare the heat level (range: 0 to 1).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `FireBullet::FireBullet::HeatLevel`.

**Is automatic reloading enabled**  
Check if automatic reloading is enabled.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `FireBullet::FireBullet::IsAutomaticReloadingEnabled`.

**Is firing cooldown active**  
Check if firing cooldown is active.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `FireBullet::FireBullet::IsFiringCooldownActive`.

**Is out of ammo**  
Check if object has no ammo available.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `FireBullet::FireBullet::IsOutOfAmmo`.

**Is overheated**  
Check if object is overheated.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `FireBullet::FireBullet::IsOverheated`.

**Is ready to shoot**  
Check if object is ready to shoot.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `FireBullet::FireBullet::IsReadyToShoot`.

**Is ammo reloading in progress**  
Check if object is currently performing an ammo reload.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `FireBullet::FireBullet::IsReloadInProgress`.

**Is a reload needed**  
Check if object needs to reload ammo.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `FireBullet::FireBullet::IsReloadNeeded`.

**Is ammo unlimited**  
Check if ammo is unlimited.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `FireBullet::FireBullet::IsUnlimitedAmmo`.

**Linear cooling rate**  
Compare the linear cooling rate (per second).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `FireBullet::FireBullet::LinearCoolingRate`.

**Max ammo**  
Compare the max ammo.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `FireBullet::FireBullet::MaxAmmo`.

**Overheat duration**  
Compare the overheat duration (in seconds). When an object is overheated, it can't fire for this duration.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `FireBullet::FireBullet::OverheatDuration`.

**Duration before overheat end**  
Compare the remaining duration before the overheat penalty ends, in seconds.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `FireBullet::FireBullet::OverheatTimeLeft`.

**Reload duration**  
Compare the reload duration (in seconds).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `FireBullet::FireBullet::ReloadDuration`.

**Duration before the reload finishes**  
Compare the remaining duration before the reload finishes, in seconds.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `FireBullet::FireBullet::ReloadTimeLeft`.

**Shots before next reload**  
Compare the remaining shots before the next reload is required.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `FireBullet::FireBullet::ShotsBeforeNextReload`.

**Shots per reload**  
Compare the number of shots per reload.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `FireBullet::FireBullet::ShotsPerReload`.


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

*This page is an auto-generated reference page about the **Fire bullets** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).