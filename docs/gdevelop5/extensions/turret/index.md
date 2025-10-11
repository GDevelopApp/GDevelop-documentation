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

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

**Move counter-clockwise**
Move counter-clockwise.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

**Move toward a position**
Move toward a position.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): X position
    - Parameter 3 (🔢 Number): Y position
    - Parameter 4 (🔢 Number): Angle margin

    > Technical note: parameter 5 are internal parameters handled by GDevelop.

**Aiming angle**
Change the aiming angle.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Aiming angle

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Set aiming angle toward a position**
Set angle toward a position.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): X position
    - Parameter 3 (🔢 Number): Y position

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

### Behavior conditions

**Is moving**
Check if the turret is moving.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.Turret::AimingAngle()` | Aiming angle (between 0° and 360° if no stop angle are set). ||


---

*This page is an auto-generated reference page about the **Turret 2D movement** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).