# Turret 2D movement

<img src="https://resources.gdevelop-app.com/assets/Icons/Line Hero Pack/Master/SVG/Cleaning/Cleaning_cleaning_clean_plunger.svg" class="extension-icon"></img>
A turret movement with customizable speed, acceleration and stop angles.

**Authors and contributors** to this experimental extension: [D8H](https://gd.games/D8H).

---

With this behavior, you can make an object rotate like a turret toward a 2D position.
It may be used with the **Bullet** extension to fire objects.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Turret movement 

A turret movement with customizable speed, acceleration and stop angles. 

### Behavior actions

**Move clockwise**  
Move clockwise.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Turret::Turret::MoveClockwise`.

**Move counter-clockwise**  
Move counter-clockwise.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Turret::Turret::MoveCounterClockwise`.

**Move toward a position**  
Move toward a position.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): X position
    - Parameter 3 (🔢 Number): Y position
    - Parameter 4 (🔢 Number): Angle margin

    > Technical note: parameter 5 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Turret::Turret::MoveToward`.

**Aiming angle**  
Change the aiming angle.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Aiming angle

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Turret::Turret::SetAimingAngle`.

**Set aiming angle toward a position**  
Set angle toward a position.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): X position
    - Parameter 3 (🔢 Number): Y position

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Turret::Turret::SetAimingAngleToward`.

### Behavior conditions

**Is moving**  
Check if the turret is moving.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Turret::Turret::IsMoving`.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.Turret::AimingAngle()` | Aiming angle (between 0° and 360° if no stop angle are set). ||


---

*This page is an auto-generated reference page about the **Turret 2D movement** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).