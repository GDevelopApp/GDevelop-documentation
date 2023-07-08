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

**Components**  
Component additions (Visual and Surface Collision).

### Behavior conditions

**Surface collision**  
Test the collision between the object and the fluid surface.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.DynamicWaterBody::ColumnNumber()` | Number of columns. ||
| `Object.DynamicWaterBody::Damping()` | Damping. ||
| `Object.DynamicWaterBody::Spread()` | Spread. ||
| `Object.DynamicWaterBody::SurfaceSize()` | Size of the edge of the surface. ||
| `Object.DynamicWaterBody::Tension()` | Tension. ||

---

*This page is an auto-generated reference page about the **Dynamic Water** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).