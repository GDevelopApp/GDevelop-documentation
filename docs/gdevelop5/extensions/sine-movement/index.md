# Sine (or ellipsis) Movement (deprecated)

<img src="https://resources.gdevelop-app.com/assets/Icons/sine-wave.svg" class="extension-icon"></img>
Allow an object to move smoothly on the X and/or Y axis following a sine wave, or an ellipsis.

**Authors and contributors** to this community extension: [4ian](https://gd.games/4ian), [VictrisGames](https://gd.games/VictrisGames).

---

Allow an object to move smoothly on the X and/or Y axis following a sine wave, or an ellipsis.


Example uses:

- Floating objects, such as powerups or coins
- Moveable platforms
- Enemy movement patterns

Properties:

- Horizontal distance
- Vertical distance
- Horizontal speed
- Vertical speed
- Center of movement, X position
- Center of movement, Y position

Tips:

- For circular or elliptical movement, the horizontal and vertical speed need to be the same
- For horizontal movement only, set vertical distance to 0
- For vertical movement only, set horizontal distance to 0
- For figure-8 movement, set horizontal speed to 1/2 of the vertical speed

[Read more...](https://victrisgames.itch.io/extension-sinemovement-and-deptheffect)

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Sine Movement 

Allow an object to move smoothly on the X and/or Y axis following a sine wave.

Example uses:
- Floating pickups
- Moveable platforms
- Enemy movement

Properties:
- Center of movement, X position
- Center of movement, Y position
- Horizontal distance
- Vertical distance
- Horizontal speed
- Horizontal distance

Tips:
- For circular or elliptical movement, the horizontal and vertical speed need to be the same
- For horizontal movement, set vertical distance to 0
- For vertical movement, set horizontal distance to 0
- For figure-8 movement, set horizontal speed to 1/2 of the vertical speed. 

### Behavior actions

**Reset sine progress counters**  
Reset sine progress counters. The object will return to the initial state.

**Set center X position**  
Set center X position.

**Set center Y position**  
Set center Y position.

**Set horizontal distance**  
Set horizontal distance.

**Set horizontal speed**  
Set horizontal speed.

**Center of movement, X position property**  
Change the property value for the center of movement, X position.

**Center of movement, Y position property**  
Change the property value for the center of movement, Y position.

**Horizontal distance: amplitude of the movement on X axis (0 to deactivate) property**  
Change the property value for the horizontal distance: amplitude of the movement on X axis (0 to deactivate).

**Horizontal speed, in degrees per second property**  
Change the property value for the horizontal speed, in degrees per second.

**Counter used to change X position property**  
Change the property value for the counter used to change X position.

**Counter used to change Y position property**  
Change the property value for the counter used to change Y position.

**Vertical distance: amplitude of the movement on Y axis (0 to deactivate) property**  
Change the property value for the vertical distance: amplitude of the movement on Y axis (0 to deactivate).

**Vertical speed, in degrees per second property**  
Change the property value for the vertical speed, in degrees per second.

**Set vertical distance**  
Set vertical distance.

**Set vertical speed**  
Set vertical speed.

### Behavior conditions

**Center of movement, X position property**  
Compare the property value for the center of movement, X position.

**Center of movement, Y position property**  
Compare the property value for the center of movement, Y position.

**Horizontal distance: amplitude of the movement on X axis (0 to deactivate) property**  
Compare the property value for the horizontal distance: amplitude of the movement on X axis (0 to deactivate).

**Horizontal speed, in degrees per second property**  
Compare the property value for the horizontal speed, in degrees per second.

**Counter used to change X position property**  
Compare the property value for the counter used to change X position.

**Counter used to change Y position property**  
Compare the property value for the counter used to change Y position.

**Vertical distance: amplitude of the movement on Y axis (0 to deactivate) property**  
Compare the property value for the vertical distance: amplitude of the movement on Y axis (0 to deactivate).

**Vertical speed, in degrees per second property**  
Compare the property value for the vertical speed, in degrees per second.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.SineMovement::CenterX()` | Center of movement, X position. ||
| `Object.SineMovement::CenterY()` | Center of movement, Y position. ||
| `Object.SineMovement::HorizontalDistance()` | Horizontal distance. ||
| `Object.SineMovement::HorizontalSpeed()` | Horizontal speed. ||
| `Object.SineMovement::PropertyCenterPointX()` | Return the property value for the center of movement, X position. ||
| `Object.SineMovement::PropertyCenterPointY()` | Return the property value for the center of movement, Y position. ||
| `Object.SineMovement::PropertyHorizontalDistance()` | Return the property value for the horizontal distance: amplitude of the movement on X axis (0 to deactivate). ||
| `Object.SineMovement::PropertyHorizontalSpeed()` | Return the property value for the horizontal speed, in degrees per second. ||
| `Object.SineMovement::PropertySineProgressX()` | Return the property value for the counter used to change X position. ||
| `Object.SineMovement::PropertySineProgressY()` | Return the property value for the counter used to change Y position. ||
| `Object.SineMovement::PropertyVerticalDistance()` | Return the property value for the vertical distance: amplitude of the movement on Y axis (0 to deactivate). ||
| `Object.SineMovement::PropertyVerticalSpeed()` | Return the property value for the vertical speed, in degrees per second. ||
| `Object.SineMovement::SineProgressX()` | Counter used to change the X position of the object. ||
| `Object.SineMovement::SineProgressY()` | Counter used to change the Y position of the object. ||
| `Object.SineMovement::VerticalDistance()` | Vertical distance. ||
| `Object.SineMovement::VerticalSpeed()` | Vertical speed. ||

---

*This page is an auto-generated reference page about the **Sine (or ellipsis) Movement (deprecated)** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).