# Turret movement

<img src="https://resources.gdevelop-app.com/assets/Icons/Line Hero Pack/Master/SVG/Cleaning/Cleaning_cleaning_clean_plunger.svg" class="extension-icon"></img>
A turret movement with customizable speed, acceleration and stop angles.

**Authors and contributors** to this community extension: [D8H](https://gd.games/D8H).

---

With this behavior, you can make an object rotate like a turret toward a position.
It may be used with the **Bullet** extension to fire objects.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Turret movement 

A turret movement with customizable speed, acceleration and stop angles. 

### Behavior actions

**Move clockwise**  
Move clockwise.

**Move counter-clockwise**  
Move counter-clockwise.

**Move toward a position**  
Move toward a position.

**Aiming angle**  
Change the aiming angle.

**Set aiming angle toward a position**  
Set angle toward a position.

**Acceleration property**  
Change the property value for the acceleration.

**Aiming angle property property**  
Change the property value for the aiming angle property.

**Maximum angle (use the same value for min and max to set no constraint) property**  
Change the property value for the maximum angle (use the same value for min and max to set no constraint).

**Minimum angle (use the same value for min and max to set no constraint) property**  
Change the property value for the minimum angle (use the same value for min and max to set no constraint).

**Deceleration property**  
Change the property value for the deceleration.

**Has moved property**  
Update the property value for "has moved".

**Must move clockwise property**  
Update the property value for "must move clockwise".

**Must move counter-clockwise property**  
Update the property value for "must move counter-clockwise".

**Origin angle: the farest angle from AngleMin and AngleMax property**  
Change the property value for the origin angle: the farest angle from AngleMin and AngleMax.

**Rotate the object property**  
Update the property value for "rotate the object".

**Speed property**  
Change the property value for the speed.

**Maximum rotation speed (in degrees per second) property**  
Change the property value for the maximum rotation speed (in degrees per second).

**Target angle (MoveToward) property**  
Change the property value for the target angle (MoveToward).

**Toggle Has moved property**  
Toggle the property value for has moved.  
If it was true, it will become false, and if it was false it will become true.

**Toggle Must move clockwise property**  
Toggle the property value for must move clockwise.  
If it was true, it will become false, and if it was false it will become true.

**Toggle Must move counter-clockwise property**  
Toggle the property value for must move counter-clockwise.  
If it was true, it will become false, and if it was false it will become true.

**Toggle Rotate the object property**  
Toggle the property value for rotate the object.  
If it was true, it will become false, and if it was false it will become true.

### Behavior conditions

**Is moving**  
Check if the turret is moving.

**Acceleration property**  
Compare the property value for the acceleration.

**Aiming angle property property**  
Compare the property value for the aiming angle property.

**Maximum angle (use the same value for min and max to set no constraint) property**  
Compare the property value for the maximum angle (use the same value for min and max to set no constraint).

**Minimum angle (use the same value for min and max to set no constraint) property**  
Compare the property value for the minimum angle (use the same value for min and max to set no constraint).

**Deceleration property**  
Compare the property value for the deceleration.

**Has moved property**  
Check the property value for has moved.

**Must move clockwise property**  
Check the property value for must move clockwise.

**Must move counter-clockwise property**  
Check the property value for must move counter-clockwise.

**Origin angle: the farest angle from AngleMin and AngleMax property**  
Compare the property value for the origin angle: the farest angle from AngleMin and AngleMax.

**Rotate the object property**  
Check the property value for rotate the object.

**Speed property**  
Compare the property value for the speed.

**Maximum rotation speed (in degrees per second) property**  
Compare the property value for the maximum rotation speed (in degrees per second).

**Target angle (MoveToward) property**  
Compare the property value for the target angle (MoveToward).

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.Turret::AimingAngle()` | Aiming angle (between 0° and 360° if no stop angle are set). ||
| `Object.Turret::PropertyAcceleration()` | Return the property value for the acceleration. ||
| `Object.Turret::PropertyAimingAngle()` | Return the property value for the aiming angle property. ||
| `Object.Turret::PropertyAngleMax()` | Return the property value for the maximum angle (use the same value for min and max to set no constraint). ||
| `Object.Turret::PropertyAngleMin()` | Return the property value for the minimum angle (use the same value for min and max to set no constraint). ||
| `Object.Turret::PropertyDeceleration()` | Return the property value for the deceleration. ||
| `Object.Turret::PropertyOriginAngle()` | Return the property value for the origin angle: the farest angle from AngleMin and AngleMax. ||
| `Object.Turret::PropertySpeed()` | Return the property value for the speed. ||
| `Object.Turret::PropertySpeedMax()` | Return the property value for the maximum rotation speed (in degrees per second). ||
| `Object.Turret::PropertyTargetAngle()` | Return the property value for the target angle (MoveToward). ||

---

*This page is an auto-generated reference page about the **Turret movement** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).