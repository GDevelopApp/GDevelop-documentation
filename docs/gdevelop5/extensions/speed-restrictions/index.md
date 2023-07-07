# Speed restrictions

<img src="https://resources.gdevelop-app.com/assets/Icons/speedometer.svg" class="extension-icon"></img>
Limit the maximum movement and rotation speed of an object from forces or the physics behavior.

**Authors and contributors** to this community extension: [VictrisGames](https://gd.games/VictrisGames).

---

Limit the maximum movement and rotation speed of an object from forces or the physics behavior.

How to use:

- Add the behavior that matches the method used to move the object (forces or physics)
- Set the maximum speed value in the behavior properties

Tips:

- This only affects movement caused by forces or physics behavior
- This may not affect movement caused by other behaviors (platformer, top-down, draggable, etc)

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Enforce max movement speed 

Limit the maximum speed an object will move from (non-physics) forces. 

### Behavior actions

**CurrentSpeed property**  
Change the property value for the currentSpeed.

**CurrentSpeedX property**  
Change the property value for the currentSpeedX.

**CurrentSpeedY property**  
Change the property value for the currentSpeedY.

**Maximum speed (pixels/second) property**  
Change the property value for the maximum speed (pixels/second).

### Behavior conditions

**CurrentSpeed property**  
Compare the property value for the currentSpeed.

**CurrentSpeedX property**  
Compare the property value for the currentSpeedX.

**CurrentSpeedY property**  
Compare the property value for the currentSpeedY.

**Maximum speed (pixels/second) property**  
Compare the property value for the maximum speed (pixels/second).

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.MaxMovementSpeed_Forces::PropertyCurrentSpeed()` | Return the property value for the currentSpeed. ||
| `Object.MaxMovementSpeed_Forces::PropertyCurrentSpeedX()` | Return the property value for the currentSpeedX. ||
| `Object.MaxMovementSpeed_Forces::PropertyCurrentSpeedY()` | Return the property value for the currentSpeedY. ||
| `Object.MaxMovementSpeed_Forces::PropertyMaximumSpeed()` | Return the property value for the maximum speed (pixels/second). ||

## Enforce max movement speed (physics) 

Limit the maximum speed an object will move from physics forces. 

### Behavior actions

**Maximum speed (pixels/second) property**  
Change the property value for the maximum speed (pixels/second).

### Behavior conditions

**Maximum speed (pixels/second) property**  
Compare the property value for the maximum speed (pixels/second).

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.MaxMovementSpeed_Physics::PropertyMaximumSpeed()` | Return the property value for the maximum speed (pixels/second). ||

## Enforce max rotation speed (physics) 

Limit the maximum rotation speed of an object from physics forces. 

### Behavior actions

**Maximum rotation speed (degrees/second) property**  
Change the property value for the maximum rotation speed (degrees/second).

### Behavior conditions

**Maximum rotation speed (degrees/second) property**  
Compare the property value for the maximum rotation speed (degrees/second).

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.MaxRotationSpeed_Physics::PropertyMaximumRotationSpeed()` | Return the property value for the maximum rotation speed (degrees/second). ||

---

*This page is an auto-generated reference page about the **Speed restrictions** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).