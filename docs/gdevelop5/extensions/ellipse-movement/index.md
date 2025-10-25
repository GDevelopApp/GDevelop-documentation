# Ellipse movement

<img src="https://resources.gdevelop-app.com/assets/Icons/sine-wave.svg" class="extension-icon"></img>
Move objects on ellipses or smoothly back and forth in one direction.

**Authors and contributors** to this experimental extension: [4ian](https://gd.games/4ian), [VictrisGames](https://gd.games/VictrisGames), [D8H](https://gd.games/D8H).

---

It allows objects to move:

- on an ellipsis or arcs
- smoothly vertically or horizontally (by setting one radius to 0)
- on a sine wave (by adding a force)

Instances will start their movement from their initial position on the scene.
The center position will be decided according to the "initial direction" angle and the radius.

It can be used for:

- Making objects float, such as powerups or coins
- Moving platforms
- Enemy movement patterns
- Making a player constantly turn right or left ([open the project online](https://editor.gdevelop.io/?project=example://star-seeker))

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Ellipse movement 

Move objects on ellipses or smoothly back and forth in one direction. 

### Behavior actions

**Loop duration**  
Change the loop duration.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Speed (in degrees per second)

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `EllipseMovement::EllipseMovement::SetLoopDuration`.

**Teleport at an angle**  
Change the movement angle. The object is teleported according to the angle.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Movement angle

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `EllipseMovement::EllipseMovement::SetMovementAngle`.

**Radius X**  
Change the radius on X axis of the movement.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Radius X

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `EllipseMovement::EllipseMovement::SetRadiusX`.

**Radius Y**  
Change the radius on Y axis of the movement.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Radius Y

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `EllipseMovement::EllipseMovement::SetRadiusY`.

**Turn left or right**  
Change the in which side the object is turning (left or right).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): Turn left

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `EllipseMovement::EllipseMovement::SetTurningLeft`.

**Turn the other way**  
Change the turning direction (left or right).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `EllipseMovement::EllipseMovement::ToggleTurningLeft`.

### Behavior conditions

**Is turning left**  
Check if the object is turning left.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `EllipseMovement::EllipseMovement::IsTurningLeft`.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.EllipseMovement::CenterX()` | Return the movement center position on X axis. ||
| `Object.EllipseMovement::CenterY()` | Return the movement center position on Y axis. ||
| `Object.EllipseMovement::LoopDuration()` | Return the loop duration (in seconds). ||
| `Object.EllipseMovement::MovementAngle()` | Return the movement angle of the object. ||
| `Object.EllipseMovement::RadiusX()` | Return the ellipse radius on X axis. ||
| `Object.EllipseMovement::RadiusY()` | Return the ellipse radius on X axis. ||


---

*This page is an auto-generated reference page about the **Ellipse movement** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).