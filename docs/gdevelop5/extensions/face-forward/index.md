# Face Forward

<img src="https://resources.gdevelop-app.com/assets/Icons/cart-arrow-right.svg" class="extension-icon"></img>
Face object towards the direction of movement.

**Authors and contributors** to this community extension: [VictrisGames](https://gd.games/VictrisGames).

---

Set the angle of the object to match the direction of movement. You can customize the speed of the rotation.

This works with any kind of movement (forces, physics...) as it uses the object center position to compute the rotation of the object.

[Read more...](https://victrisgames.itch.io/extension-faceforward)

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Face forward 

Face object towards the direction of movement. 

### Behavior actions

**Direction the object is moving (in degrees) property**  
Change the property value for the direction the object is moving (in degrees).

**Previous X position property**  
Change the property value for the previous X position.

**Previous Y position property**  
Change the property value for the previous Y position.

**Rotation speed (degrees per second).  Use "0" for immediate turning. property**  
Change the property value for the rotation speed (degrees per second).  Use "0" for immediate turning..

**Set rotation speed**  
Set rotation speed (degrees per second).  Use "0" for immediate turning.

### Behavior conditions

**Direction the object is moving (in degrees) property**  
Compare the property value for the direction the object is moving (in degrees).

**Previous X position property**  
Compare the property value for the previous X position.

**Previous Y position property**  
Compare the property value for the previous Y position.

**Rotation speed (degrees per second).  Use "0" for immediate turning. property**  
Compare the property value for the rotation speed (degrees per second).  Use "0" for immediate turning..

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.FaceForward::MovementDirection()` | Direction the object is moving (in degrees). ||
| `Object.FaceForward::PropertyMovementDirection()` | Return the property value for the direction the object is moving (in degrees). ||
| `Object.FaceForward::PropertyPreviousX()` | Return the property value for the previous X position. ||
| `Object.FaceForward::PropertyPreviousY()` | Return the property value for the previous Y position. ||
| `Object.FaceForward::PropertyRotationSpeed()` | Return the property value for the rotation speed (degrees per second).  Use "0" for immediate turning.. ||
| `Object.FaceForward::RotationSpeed()` | Rotation speed (in degrees per second). ||

---

*This page is an auto-generated reference page about the **Face Forward** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).