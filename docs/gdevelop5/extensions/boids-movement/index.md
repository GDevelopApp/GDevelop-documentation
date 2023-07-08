# Boids movement (experimental)

<img src="https://resources.gdevelop-app.com/assets/Icons/Glyphster Pack/Master/SVG/Restaurant/Restaurant_restaurant_seafood_animal_fish.svg" class="extension-icon"></img>
Simulates flocks movement.

**Authors and contributors** to this community extension: [planktonfun](https://gd.games/planktonfun), [D8H](https://gd.games/D8H).

---

Simulates swarms or flocks movement following the separation, alignment, cohesion principles. The flock can be attracted to a location or avoid some obstacles.

The [Fish School example](https://editor.gdevelop.io/?project=example://fish-school) shows how properties impact on the movement.

[Read more...](https://wiki.gdevelop.io/gdevelop5/extensions/boids-movement/details/)

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Boids Movement (experimental) 

Move as part of a flock. 

### Behavior actions

**Avoid an object**  
Intend to avoid an area from an object center and a given radius.

**Avoid a position**  
Intend to avoid an area with a given center and radius.

**Move in a direction**  
Intend to move in a given direction.

**Move toward an object**  
Intend to move toward an object.

**Move toward a position**  
Intend to move toward a position.

**Alignment sight radius**  
Return the alignment sight radius.

**Alignment weight**  
Change the weight the alignment takes in the chosen direction.

**Cohesion sight radius**  
Change the cohesion sight radius.

**Cohesion weight**  
Change the weight the cohesion takes in the chosen direction.

**Maximum acceleration**  
Change the maximum acceleration of the object.

**Maximum speed**  
Change the maximum speed of the object.

**Separation sight radius**  
Return the separation sight radius.

**Separation weight**  
Change the weight the separation takes in the chosen direction.

### Behavior conditions

**Object Rotated**  
Check if the object is rotated while moving on its path.

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
| `Object.BoidsMovement::VelocityX()` | Return the current vertical speed. ||
| `Object.BoidsMovement::VelocityY()` | Return the current horizontal speed. ||

---

*This page is an auto-generated reference page about the **Boids movement (experimental)** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).