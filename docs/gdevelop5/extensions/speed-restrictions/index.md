# Speed restrictions

<img src="https://resources.gdevelop-app.com/assets/Icons/speedometer.svg" class="extension-icon"></img>
Limit the maximum movement and rotation speed of an object from forces or the 2D Physics behavior.

**Authors and contributors** to this experimental extension: [VictrisGames](https://gd.games/VictrisGames).

---

Limit the maximum movement and rotation speed of an object from forces or the 2D Physics behavior.

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

### Behavior properties

- **Maximum speed (pixels/second)** (🔢 Number). Default value is `0`.

??? quote "See internal technical details"


    - **Maximum speed (pixels/second)** is stored as `MaximumSpeed` (Number). Default value is `0`.

_No expressions for this behavior._


## Enforce max movement speed (physics) 

Limit the maximum speed an object will move from physics forces. 

### Behavior properties

- **Maximum speed (pixels/second)** (🔢 Number). Default value is `3.251833362747583e-317`.

??? quote "See internal technical details"


    - **Maximum speed (pixels/second)** is stored as `MaximumSpeed` (Number). Default value is `3.251833362747583e-317`.
    > This behavior must be used on an object also having a behavior with type "Physics2::Physics2Behavior". This is stored on property `PhysicsBehavior`.


_No expressions for this behavior._


## Enforce max rotation speed (physics) 

Limit the maximum rotation speed of an object from physics forces. 

### Behavior properties

- **Maximum rotation speed (degrees/second)** (🔢 Number). Default value is `3.2594775464200388e-317`.

??? quote "See internal technical details"


    - **Maximum rotation speed (degrees/second)** is stored as `MaximumRotationSpeed` (Number). Default value is `3.2594775464200388e-317`.
    > This behavior must be used on an object also having a behavior with type "Physics2::Physics2Behavior". This is stored on property `PhysicsBehavior`.


_No expressions for this behavior._



---

*This page is an auto-generated reference page about the **Speed restrictions** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).