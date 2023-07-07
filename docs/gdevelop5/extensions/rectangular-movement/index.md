# Rectangular Movement (deprecated)

<img src="https://resources.gdevelop-app.com/assets/Icons/shape-rectangle-plus.svg" class="extension-icon"></img>
Allow an object to move in a rectangular pattern.

**Authors and contributors** to this community extension: [4ian](https://gd.games/4ian), [VictrisGames](https://gd.games/VictrisGames).

---

Allow an object to move in a rectangular pattern.
By default, movement will slow down when going around corners, but this can be changed to always use a constant speed.

Example uses:

- Moveable platforms
- Enemy movement patterns

Properties:

- Center of movement, X position
- Center of movement, Y position
- Horizontal distance
- Vertical distance
- Horizontal speed
- Vertical speed
- Use constant speed (object will not slow down at corners)
- Use counter-clockwise direction

Tips:

- Set the CenterX and CenterY values to move the object
- For horizontal movement only, set vertical distance to 0
- For vertical movement only, set horizontal distance to 0
- Use conditions to apply logic based on the direction the object is moving.  For example, setting the animation.

[Read more...](https://victrisgames.itch.io/extension-rectangular-movement)

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Rectangular Movement 

Allow an object to move in a rectangular pattern. 

### Behavior actions

**Reset progress counters**  
Reset progress counters. The object will return to the initial state.

**Set center X position**  
Set center X position.

**Set center Y position**  
Set center Y position.

**Use constant speed**  
Use constant speed.

**Use counter-clockwise direction**  
Use counter-clockwise direction.

**Set horizontal distance**  
Set horizontal distance.

**Set horizontal speed**  
Set horizontal speed.

**Center of movement, X position property**  
Change the property value for the center of movement, X position.

**Center of movement, Y position property**  
Change the property value for the center of movement, Y position.

**Use a constant speed for movement property**  
Update the property value for "use a constant speed for movement".

**Use counter-clockwise direction property**  
Update the property value for "use counter-clockwise direction".

**Current direction the object is moving property**  
Change the property value for the current direction the object is moving.

**Horizontal Distance: Amplitude of the movement on X axis (0 to deactivate) property**  
Change the property value for the horizontal Distance: Amplitude of the movement on X axis (0 to deactivate).

**Horizontal speed property**  
Change the property value for the horizontal speed.

**Counter used to change X position property**  
Change the property value for the counter used to change X position.

**Counter used to change Y position property**  
Change the property value for the counter used to change Y position.

**Counter used for rectangular movement property**  
Change the property value for the counter used for rectangular movement.

**Vertical Distance: Amplitude of the movement on Y axis (0 to deactivate) property**  
Change the property value for the vertical Distance: Amplitude of the movement on Y axis (0 to deactivate).

**Vertical speed property**  
Change the property value for the vertical speed.

**Set vertical distance**  
Set vertical distance.

**Set vertical speed**  
Set vertical speed.

**Toggle Use a constant speed for movement property**  
Toggle the property value for use a constant speed for movement.  
If it was true, it will become false, and if it was false it will become true.

**Toggle Use counter-clockwise direction property**  
Toggle the property value for use counter-clockwise direction.  
If it was true, it will become false, and if it was false it will become true.

### Behavior conditions

**Object is moving downwards**  
Object is moving downwards.

**Object is moving to the left**  
Object is moving to the left.

**Object is moving to the right**  
Object is moving to the right.

**Object is moving upwards**  
Object is moving upwards.

**Center of movement, X position property**  
Compare the property value for the center of movement, X position.

**Center of movement, Y position property**  
Compare the property value for the center of movement, Y position.

**Use a constant speed for movement property**  
Check the property value for use a constant speed for movement.

**Use counter-clockwise direction property**  
Check the property value for use counter-clockwise direction.

**Current direction the object is moving property**  
Compare the property value for the current direction the object is moving.

**Horizontal Distance: Amplitude of the movement on X axis (0 to deactivate) property**  
Compare the property value for the horizontal Distance: Amplitude of the movement on X axis (0 to deactivate).

**Horizontal speed property**  
Compare the property value for the horizontal speed.

**Counter used to change X position property**  
Compare the property value for the counter used to change X position.

**Counter used to change Y position property**  
Compare the property value for the counter used to change Y position.

**Counter used for rectangular movement property**  
Compare the property value for the counter used for rectangular movement.

**Vertical Distance: Amplitude of the movement on Y axis (0 to deactivate) property**  
Compare the property value for the vertical Distance: Amplitude of the movement on Y axis (0 to deactivate).

**Vertical speed property**  
Compare the property value for the vertical speed.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.RectangularMovement::CenterX()` | Center of movement, X position. ||
| `Object.RectangularMovement::CenterY()` | Center of movement, Y position. ||
| `Object.RectangularMovement::HorizontalDistance()` | Horizontal distance. ||
| `Object.RectangularMovement::HorizontalSpeed()` | Horizontal speed. ||
| `Object.RectangularMovement::ProgressX()` | Counter used to change the X position of the object. ||
| `Object.RectangularMovement::ProgressY()` | Counter used to change the Y position of the object. ||
| `Object.RectangularMovement::PropertyCenterPointX()` | Return the property value for the center of movement, X position. ||
| `Object.RectangularMovement::PropertyCenterPointY()` | Return the property value for the center of movement, Y position. ||
| `Object.RectangularMovement::PropertyCurrentDirection()` | Return the property value for the current direction the object is moving. ||
| `Object.RectangularMovement::PropertyHorizontalDistance()` | Return the property value for the horizontal Distance: Amplitude of the movement on X axis (0 to deactivate). ||
| `Object.RectangularMovement::PropertyHorizontalSpeed()` | Return the property value for the horizontal speed. ||
| `Object.RectangularMovement::PropertyProgressX()` | Return the property value for the counter used to change X position. ||
| `Object.RectangularMovement::PropertyProgressY()` | Return the property value for the counter used to change Y position. ||
| `Object.RectangularMovement::PropertyRectangularCounter()` | Return the property value for the counter used for rectangular movement. ||
| `Object.RectangularMovement::PropertyVerticalDistance()` | Return the property value for the vertical Distance: Amplitude of the movement on Y axis (0 to deactivate). ||
| `Object.RectangularMovement::PropertyVerticalSpeed()` | Return the property value for the vertical speed. ||
| `Object.RectangularMovement::VerticalDistance()` | Vertical distance. ||
| `Object.RectangularMovement::VerticalSpeed()` | Vertical speed. ||

---

*This page is an auto-generated reference page about the **Rectangular Movement (deprecated)** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).