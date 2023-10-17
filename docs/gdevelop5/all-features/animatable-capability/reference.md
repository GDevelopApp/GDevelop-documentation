# Animatable capability

Animate objects. [Read more explanations about it.](https://wiki.gdevelop.io/gdevelop5/objects)



## Animatable capability 

Animate objects. 

### Behavior actions

**Pause the animation**  
Pause the animation of the object.

**Resume the animation**  
Resume the animation of the object.

**Animation elapsed time**  
Change the elapsed time from the beginning of the animation (in seconds).

**Animation (by number)**  
Change the number of the animation played by the object (the number from the animations list).

**Animation (by name)**  
Change the animation played by the object using the name of the animation.

**Animation speed scale**  
Change the animation speed scale (1 = the default speed, >1 = faster and <1 = slower).

### Behavior conditions

**Animation elapsed time**  
Compare the elapsed time from the beginning of the animation (in seconds).

**Animation finished**  
Check if the animation being played by the Sprite object is finished.

**Animation (by number)**  
Compare the number of the animation played by the object (the number from the animations list).

**Animation paused**  
Check if the animation of an object is paused.

**Animation (by name)**  
Compare the animation played by the object using the name of the animation.

**Animation speed scale**  
Compare the animation speed scale (1 = the default speed, >1 = faster and <1 = slower).

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.Animation::Duration()` | Return the current animation duration (in seconds). ||
| `Object.Animation::ElapsedTime()` | Return the elapsed time from the beginning of the animation (in seconds). ||
| `Object.Animation::Index()` | Return the number of the animation played by the object (the number from the animations list). ||
| `Object.Animation::Name()` | Return the animation played by the object using the name of the animation. ||
| `Object.Animation::SpeedScale()` | Return the animation speed scale (1 = the default speed, >1 = faster and <1 = slower). ||

---
*This page is an auto-generated reference page about the **Animatable capability** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).