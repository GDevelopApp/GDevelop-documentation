# Boids movement

<img src="https://resources.gdevelop-app.com/assets/Icons/Glyphster Pack/Master/SVG/Restaurant/Restaurant_restaurant_seafood_animal_fish.svg" class="extension-icon"></img>
Simulates flocks movement.

**Authors and contributors** to this experimental extension: [planktonfun](https://gd.games/planktonfun), [D8H](https://gd.games/D8H).

---

Simulates swarms or flocks movement following the separation, alignment, cohesion principles. The flock can be attracted to a location or avoid some obstacles.

The [Fish School example](https://editor.gdevelop.io/?project=example://fish-school) shows how properties impact on the movement.

[Read more...](/gdevelop5/extensions/boids-movement/details/)

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Boids Movement 

Move as part of a flock. 

### Behavior actions

**Avoid an object**
Intend to avoid an area from an object center and a given radius.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (👾 Object): Avoided object
    - Parameter 3 (🔢 Number): Radius
    - Parameter 4 (🔢 Number): Decision weight

    > Technical note: parameter 5 are internal parameters handled by GDevelop.

**Avoid a position**
Intend to avoid an area with a given center and radius.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Center X
    - Parameter 3 (🔢 Number): Center Y
    - Parameter 4 (🔢 Number): Radius
    - Parameter 5 (🔢 Number): Decision weight

    > Technical note: parameter 6 are internal parameters handled by GDevelop.

**Move in a direction**
Intend to move in a given direction.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Direction X
    - Parameter 3 (🔢 Number): Direction Y
    - Parameter 4 (🔢 Number): Decision weight

    > Technical note: parameter 5 are internal parameters handled by GDevelop.

**Move toward an object**
Intend to move toward an object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (👾 Object): Targeted object
    - Parameter 3 (🔢 Number): Decision weight

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Move toward a position**
Intend to move toward a position.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Target X
    - Parameter 3 (🔢 Number): Target Y
    - Parameter 4 (🔢 Number): Decision weight

    > Technical note: parameter 5 are internal parameters handled by GDevelop.

**Alignment sight radius**
Return the alignment sight radius.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Alignment weight**
Change the weight the alignment takes in the chosen direction.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Cohesion sight radius**
Change the cohesion sight radius.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Cohesion weight**
Change the weight the cohesion takes in the chosen direction.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Maximum acceleration**
Change the maximum acceleration of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Steering Force

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Maximum speed**
Change the maximum speed of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Max Speed

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Separation sight radius**
Return the separation sight radius.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Separation weight**
Change the weight the separation takes in the chosen direction.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

### Behavior conditions

**Object Rotated**
Check if the object is rotated while moving on its path.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.BoidsMovement::AlignmentRadius()` | Return the alignment sight radius. ||
| `Object.BoidsMovement::AlignmentWeight()` | Return which weight the alignment takes in the chosen direction. ||
| `Object.BoidsMovement::CohesionRadius()` | Return the cohesion sight radius. ||
| `Object.BoidsMovement::CohesionWeight()` | Return which weight the cohesion takes in the chosen direction. ||
| `Object.BoidsMovement::MaxAcceleration()` | Return the maximum acceleration. ||
| `Object.BoidsMovement::MaxSpeed()` | Return the maximum speed. ||
| `Object.BoidsMovement::SeparationRadius()` | Return the separation sight radius. ||
| `Object.BoidsMovement::SeparationWeight()` | Return which weight the separation takes in the chosen direction. ||
| `Object.BoidsMovement::Speed()` | Return the current speed. ||
| `Object.BoidsMovement::VelocityX()` | Return the current horizontal speed. ||
| `Object.BoidsMovement::VelocityY()` | Return the current vertical  speed. ||


---

*This page is an auto-generated reference page about the **Boids movement** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).