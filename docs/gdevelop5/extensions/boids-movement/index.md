# Boids movement

<img src="https://resources.gdevelop-app.com/assets/Icons/Glyphster Pack/Master/SVG/Restaurant/Restaurant_restaurant_seafood_animal_fish.svg" class="extension-icon"></img>
Simulates flocks movement.

**Authors and contributors** to this extension: [planktonfun](https://gd.games/planktonfun), [D8H](https://gd.games/D8H).

---

Simulates swarms or flocks movement following the separation, alignment, cohesion principles. The flock can be attracted to a location or avoid some obstacles.

The [Fish School example](https://editor.gdevelop.io/?project=example://fish-school) shows how properties impact on the movement.

[Read more...](/gdevelop5/extensions/boids-movement/details/)

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Boids Movement 

Move as part of a flock. 

### Behavior properties

- **Alignement sight radius** (🔢 Number, Distance). Default value is `48`.
- **Alignment decision weight** (🔢 Number, Dimensionless). Default value is `1`.
- **Cohesion sight radius** (🔢 Number, Distance). Default value is `64`.
- **Cohesion decision weight** (🔢 Number, Dimensionless). Default value is `1`.
- **Collision layer** (🔢 Number, Dimensionless). Default value is `0`.
- **Maximum acceleration** (🔢 Number, Acceleration). Default value is `720`.
- **Maximum speed** (🔢 Number, Speed). Default value is `360`.
- **Separation sight radius** (🔢 Number, Distance). Default value is `32`.
- **Separation decision weight** (🔢 Number, Dimensionless). Default value is `2`.
- **Rotate object** (🔘 Boolean). Default value is `true`.

??? quote "See internal technical details"


    - **Alignement sight radius** is stored as `AlignmentRadius` (Number). Unit is Pixel. Default value is `48`.
    - **Alignment decision weight** is stored as `AlignmentWeight` (Number). Unit is Dimensionless. Default value is `1`.
    - **Cohesion sight radius** is stored as `CohesionRadius` (Number). Unit is Pixel. Default value is `64`.
    - **Cohesion decision weight** is stored as `CohesionWeight` (Number). Unit is Dimensionless. Default value is `1`.
    - **Collision layer** is stored as `CollisionLayer` (Number). Unit is Dimensionless. Default value is `0`.
    - **Maximum acceleration** is stored as `MaxAcceleration` (Number). Unit is PixelAcceleration. Default value is `720`.
    - **Maximum speed** is stored as `MaxSpeed` (Number). Unit is PixelSpeed. Default value is `360`.
    - **Separation sight radius** is stored as `SeparationRadius` (Number). Unit is Pixel. Default value is `32`.
    - **Separation decision weight** is stored as `SeparationWeight` (Number). Unit is Dimensionless. Default value is `2`.
    - **Rotate object** is stored as `ShouldRotate` (Boolean). Default value is `true`.

### Behavior actions

**Avoid an object**  
Intend to avoid an area from an object center and a given radius.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (👾 Object): Avoided object
    - Parameter 3 (🔢 Number): Radius
    - Parameter 4 (🔢 Number): Decision weight

    > Technical note: parameter 5 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `BoidsMovement::BoidsMovement::AvoidObject`.

**Avoid a position**  
Intend to avoid an area with a given center and radius.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Center X
    - Parameter 3 (🔢 Number): Center Y
    - Parameter 4 (🔢 Number): Radius
    - Parameter 5 (🔢 Number): Decision weight

    > Technical note: parameter 6 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `BoidsMovement::BoidsMovement::AvoidPosition`.

**Move in a direction**  
Intend to move in a given direction.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Direction X
    - Parameter 3 (🔢 Number): Direction Y
    - Parameter 4 (🔢 Number): Decision weight

    > Technical note: parameter 5 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `BoidsMovement::BoidsMovement::MoveInDirection`.

**Move toward an object**  
Intend to move toward an object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (👾 Object): Targeted object
    - Parameter 3 (🔢 Number): Decision weight

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `BoidsMovement::BoidsMovement::MoveToObject`.

**Move toward a position**  
Intend to move toward a position.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Target X
    - Parameter 3 (🔢 Number): Target Y
    - Parameter 4 (🔢 Number): Decision weight

    > Technical note: parameter 5 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `BoidsMovement::BoidsMovement::MoveToPosition`.

**Alignment sight radius**  
Return the alignment sight radius.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `BoidsMovement::BoidsMovement::SetAlignmentRadius`.

**Alignment weight**  
Change the weight the alignment takes in the chosen direction.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `BoidsMovement::BoidsMovement::SetAlignmentWeight`.

**Cohesion sight radius**  
Change the cohesion sight radius.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `BoidsMovement::BoidsMovement::SetCohesionRadius`.

**Cohesion weight**  
Change the weight the cohesion takes in the chosen direction.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `BoidsMovement::BoidsMovement::SetCohesionWeight`.

**Maximum acceleration**  
Change the maximum acceleration of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Steering Force

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `BoidsMovement::BoidsMovement::SetMaxAcceleration`.

**Maximum speed**  
Change the maximum speed of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Max Speed

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `BoidsMovement::BoidsMovement::SetMaxSpeed`.

**Separation sight radius**  
Return the separation sight radius.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `BoidsMovement::BoidsMovement::SetSeparationRadius`.

**Separation weight**  
Change the weight the separation takes in the chosen direction.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `BoidsMovement::BoidsMovement::SetSeparationWeight`.


### Behavior conditions

**Object Rotated**  
Check if the object is rotated while moving on its path.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `BoidsMovement::BoidsMovement::ShouldRotate`.


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

*This page is an auto-generated reference page about the **Boids movement** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).