# 3D ellipse movement

<img src="https://resources.gdevelop-app.com/assets/Icons/sine-wave.svg" class="extension-icon"></img>
Move objects on ellipses or smoothly back and forth in one direction.

**Authors and contributors** to this experimental extension: [4ian](https://gd.games/4ian), [VictrisGames](https://gd.games/VictrisGames), [D8H](https://gd.games/D8H).

---

It allows objects to move:

- on an ellipsis or arcs
- smoothly vertically or horizontally (by setting one radius to 0)
- on a sine wave (by adding a force)

It can be used for:

- Making objects float, such as powerups or coins
- Moving platforms
- Enemy movement patterns
- Making a player constantly turn right or left ([open the project online](https://editor.gdevelop.io/?project=example://star-seeker))

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## 3D ellipse movement 

Move objects on ellipses or smoothly back and forth in one direction. 

### Behavior actions

**Ellipse height**  
Change the ellipse height of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsEllipseMovement3D::PhysicsEllipseMovement3D::SetHeight`.

**Loop duration**  
Change the loop duration (in seconds).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsEllipseMovement3D::PhysicsEllipseMovement3D::SetLoopDuration`.

**Teleport at an angle**  
Change the movement angle. The object is teleported according to the angle.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Movement angle

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsEllipseMovement3D::PhysicsEllipseMovement3D::SetMovementAngle`.

**Turn left or right**  
Change the in which side the object is turning (left or right).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): Turn left

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsEllipseMovement3D::PhysicsEllipseMovement3D::SetTurningLeft`.

**Ellipse width**  
Change the ellipse width of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsEllipseMovement3D::PhysicsEllipseMovement3D::SetWidth`.

**Turn the other way**  
Change the turning direction (left or right).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsEllipseMovement3D::PhysicsEllipseMovement3D::ToggleTurningLeft`.

### Behavior conditions

**Ellipse height**  
Compare the ellipse height of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PhysicsEllipseMovement3D::PhysicsEllipseMovement3D::Height`.

**Is turning left**  
Check if the object is turning left.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PhysicsEllipseMovement3D::PhysicsEllipseMovement3D::IsTurningLeft`.

**Loop duration**  
Compare the loop duration (in seconds).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PhysicsEllipseMovement3D::PhysicsEllipseMovement3D::LoopDuration`.

**Ellipse width**  
Compare the ellipse width of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PhysicsEllipseMovement3D::PhysicsEllipseMovement3D::Width`.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.PhysicsEllipseMovement3D::CenterH()` | Return the movement center position on Y axis. ||
| `Object.PhysicsEllipseMovement3D::CenterV()` | Return the movement center position on X axis. ||
| `Object.PhysicsEllipseMovement3D::Height()` | Return the ellipse height of the object. ||
| `Object.PhysicsEllipseMovement3D::LoopDuration()` | Return the loop duration (in seconds). ||
| `Object.PhysicsEllipseMovement3D::MovementAngle()` | Return the movement angle of the object. ||
| `Object.PhysicsEllipseMovement3D::Width()` | Return the ellipse width of the object. ||


---

*This page is an auto-generated reference page about the **3D ellipse movement** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).