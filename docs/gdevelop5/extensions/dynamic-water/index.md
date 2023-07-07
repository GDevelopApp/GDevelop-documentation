# Dynamic Water

<img src="https://resources.gdevelop-app.com/assets/Icons/waves.svg" class="extension-icon"></img>
Easily create a realistic liquid surface simulation.

**Authors and contributors** to this community extension: [Alios](https://gd.games/Alios).

---

FEATURES


- Fully customizable: by adjusting the liquid properties (tension, damping, spreading), you can simulate different types of liquids such as: water, jelly, lava, etc.
- Can obtain the height of the surface at any point
- Allows you to have full control over visual properties such as: color opacity, effects, etc.
- Can create a force at any point on the surface.
- Works on all platforms.


!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Dynamic Water Body 

Easily create a realistic liquid surface simulation. 

### Behavior actions

**Force application**  
Apply a force when an object collides with its surface.

**Auto Wave**  
Enable automatic waves.

**Show Columns**  
Show the different Column .

**Springs Number**  
The number of springs controls the distance between the joints and the number of springs. (between 0 and the object width).  
PS: Change the quality of the waves, the more columns the more they use the performance.

**Damping(d)**  
The spring dampenig value. (between 0 and 0.1).

**Change Period**  
Change Period.

**Auto waves  property**  
Update the property value for "auto waves ".

**BodyColor property**  
Change the property value for the bodyColor.

**Body opacity property**  
Change the property value for the body opacity.

**ColorOfColumns property**  
Change the property value for the colorOfColumns.

**The number of columns (springs) extended on the water surface  property**  
Change the property value for the the number of columns (springs) extended on the water surface .

**The Damping value. Controls how fast the springs will return to their original position property**  
Change the property value for the the Damping value. Controls how fast the springs will return to their original position.

**Show the spring columns property**  
Update the property value for "show the spring columns".

**The Spread value will dictacte how much a wave oscilliation wil pass onto their neighboors. BEWARE, super high values may make the water oscilliate forever ! property**  
Change the property value for the the Spread value will dictacte how much a wave oscilliation wil pass onto their neighboors. BEWARE, super high values may make the water oscilliate forever !.

**SufaceOpacity property**  
Change the property value for the sufaceOpacity.

**SurfaceColor property**  
Change the property value for the surfaceColor.

**SurfaceSize property**  
Change the property value for the surfaceSize.

**The water spring constant. Grater values will pull the water with greater force. property**  
Change the property value for the the water spring constant. Grater values will pull the water with greater force..

**Thickness of the surface collision property**  
Change the property value for the thickness of the surface collision.

**WaveDirection property**  
Change the property value for the waveDirection.

**Wave length, the smaller the value, the longer the wave property**  
Change the property value for the wave length, the smaller the value, the longer the wave.

**Wave magnitude, in pixels property**  
Change the property value for the wave magnitude, in pixels.

**Wave period. between 0 and 1 property**  
Change the property value for the wave period. between 0 and 1.

**Spread**  
The Spread value will dictate how much a wave oscillation will pass pnto their neighboors.(Between 0 and 0.1).

**Surface Size**  
Change the size of the surface edge.

**Tension(k)**  
Greater values will pull the water with greater force. (between 0 and 0.1).

**Wave horizontal direction**  
Change the direction of the waves.

**Wave Length**  
Change the length of the waves.

**Wave magnitude**  
Change the wave magnitude.

**Toggle Auto waves  property**  
Toggle the property value for auto waves .  
If it was true, it will become false, and if it was false it will become true.

**Toggle Show the spring columns property**  
Toggle the property value for show the spring columns.  
If it was true, it will become false, and if it was false it will become true.

**Components**  
Component additions (Visual and Surface Collision).

### Behavior conditions

**Surface collision**  
Test the collision between the object and the fluid surface.

**Auto waves  property**  
Check the property value for auto waves .

**BodyColor property**  
Compare the property value for the bodyColor.

**Body opacity property**  
Compare the property value for the body opacity.

**ColorOfColumns property**  
Compare the property value for the colorOfColumns.

**The number of columns (springs) extended on the water surface  property**  
Compare the property value for the the number of columns (springs) extended on the water surface .

**The Damping value. Controls how fast the springs will return to their original position property**  
Compare the property value for the the Damping value. Controls how fast the springs will return to their original position.

**Show the spring columns property**  
Check the property value for show the spring columns.

**The Spread value will dictacte how much a wave oscilliation wil pass onto their neighboors. BEWARE, super high values may make the water oscilliate forever ! property**  
Compare the property value for the the Spread value will dictacte how much a wave oscilliation wil pass onto their neighboors. BEWARE, super high values may make the water oscilliate forever !.

**SufaceOpacity property**  
Compare the property value for the sufaceOpacity.

**SurfaceColor property**  
Compare the property value for the surfaceColor.

**SurfaceSize property**  
Compare the property value for the surfaceSize.

**The water spring constant. Grater values will pull the water with greater force. property**  
Compare the property value for the the water spring constant. Grater values will pull the water with greater force..

**Thickness of the surface collision property**  
Compare the property value for the thickness of the surface collision.

**WaveDirection property**  
Compare the property value for the waveDirection.

**Wave length, the smaller the value, the longer the wave property**  
Compare the property value for the wave length, the smaller the value, the longer the wave.

**Wave magnitude, in pixels property**  
Compare the property value for the wave magnitude, in pixels.

**Wave period. between 0 and 1 property**  
Compare the property value for the wave period. between 0 and 1.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.DynamicWaterBody::ColumnNumber()` | Number of columns. ||
| `Object.DynamicWaterBody::Damping()` | Damping. ||
| `Object.DynamicWaterBody::PropertyBodyColor()` | Return the property value for the bodyColor. ||
| `Object.DynamicWaterBody::PropertyBodyOpacity()` | Return the property value for the body opacity. ||
| `Object.DynamicWaterBody::PropertyColorOfColumns()` | Return the property value for the colorOfColumns. ||
| `Object.DynamicWaterBody::PropertyColumns()` | Return the property value for the the number of columns (springs) extended on the water surface . ||
| `Object.DynamicWaterBody::PropertyDampening()` | Return the property value for the the Damping value. Controls how fast the springs will return to their original position. ||
| `Object.DynamicWaterBody::PropertySpread()` | Return the property value for the the Spread value will dictacte how much a wave oscilliation wil pass onto their neighboors. BEWARE, super high values may make the water oscilliate forever !. ||
| `Object.DynamicWaterBody::PropertySufaceOpacity()` | Return the property value for the sufaceOpacity. ||
| `Object.DynamicWaterBody::PropertySurfaceColor()` | Return the property value for the surfaceColor. ||
| `Object.DynamicWaterBody::PropertySurfaceSize()` | Return the property value for the surfaceSize. ||
| `Object.DynamicWaterBody::PropertyTension()` | Return the property value for the the water spring constant. Grater values will pull the water with greater force.. ||
| `Object.DynamicWaterBody::PropertyThickness()` | Return the property value for the thickness of the surface collision. ||
| `Object.DynamicWaterBody::PropertyWaveDirection()` | Return the property value for the waveDirection. ||
| `Object.DynamicWaterBody::PropertyWaveLength()` | Return the property value for the wave length, the smaller the value, the longer the wave. ||
| `Object.DynamicWaterBody::PropertyWaveMagnitude()` | Return the property value for the wave magnitude, in pixels. ||
| `Object.DynamicWaterBody::PropertyWavePeriod()` | Return the property value for the wave period. between 0 and 1. ||
| `Object.DynamicWaterBody::Spread()` | Spread. ||
| `Object.DynamicWaterBody::SurfaceSize()` | Size of the edge of the surface. ||
| `Object.DynamicWaterBody::Tension()` | Tension. ||

---

*This page is an auto-generated reference page about the **Dynamic Water** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).