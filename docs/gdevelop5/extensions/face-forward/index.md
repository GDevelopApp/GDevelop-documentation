# Face Forward

<img src="https://resources.gdevelop-app.com/assets/Icons/cart-arrow-right.svg" class="extension-icon"></img>
Face object towards the direction of movement.

**Authors and contributors** to this experimental extension: [VictrisGames](https://gd.games/VictrisGames), [TheGemDev](https://gd.games/TheGemDev).

---

Set the angle of the object to match the direction of movement.

This works with any kind of movement (forces, physics, dragging, etc) because it tracks the object position to compute the direction of movement.

[Read more...](https://victrisgames.itch.io/extension-faceforward)

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Face forward 

Face object towards the direction of movement. 

### Behavior actions

**Set offset angle**  
Set offset angle.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Offset angle

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Set rotation speed**  
Set rotation speed (degrees per second).  Use "0" for immediate turning.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Rotation Speed

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.FaceForward::MovementDirection()` | Direction the object is moving (in degrees). ||
| `Object.FaceForward::OffsetAngle()` | Offset angle. ||
| `Object.FaceForward::RotationSpeed()` | Rotation speed (in degrees per second). ||


---

*This page is an auto-generated reference page about the **Face Forward** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).