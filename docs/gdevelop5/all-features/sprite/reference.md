---
title: Sprite
---
# Sprite

Sprite are animated object which can be used for most elements of a game. [Read more explanations about it.](https://wiki.gdevelop.io/gdevelop5/objects/sprite)



## Sprite 

Animated object which can be used for most elements of a game 

### Object actions

**Change the animation**  
Change the animation of the object, using the animation number in the animations list.

**Animation speed scale**  
Modify the animation speed scale (1 = the default speed, >1 = faster and <1 = slower).

**Blend mode**  
Change the number of the blend mode of an object.  
The default blend mode is 0 (Normal).

**Tint color**  
Change the tint of an object. The default color is white.

**Height**  
Change the height of a Sprite object.

**Scale**  
Modify the scale of the specified object.

**Scale on Y axis**  
Modify the scale of the height of an object.

**Scale on X axis**  
Modify the scale of the width of an object.

**Current frame**  
Modify the current frame of the object

**Width**  
Change the width of a Sprite object.

**Flip the object horizontally**  
Flip the object horizontally

**Flip the object vertically**  
Flip the object vertically

**Sprite opacity**  
Change the opacity of a Sprite. 0 is fully transparent, 255 is opaque (default).

**Pause the animation**  
Pause the animation of the object

**Play the animation**  
Play the animation of the object

**Change the animation (by name)**  
Change the animation of the object, using the name of the animation.

**Size**  
Change the size of an object.

### Object conditions

**Animation paused**  
Check if the animation of an object is paused.

**Current animation**  
Compare the number of the animation played by the object.

**Animation finished**  
Check if the animation being played by the Sprite object is finished.

**Current animation name**  
Check the animation by played by the object.

**Blend mode**  
Compare the number of the blend mode currently used by an object

**Horizontally flipped**  
Check if the object is horizontally flipped

**Vertically flipped**  
Check if the object is vertically flipped

**Height**  
Compare the height of a Sprite object.

**Opacity**  
Compare the opacity of a Sprite, between 0 (fully transparent) to 255 (opaque).

**Scale on Y axis**  
Compare the scale of the height of an object.

**Scale on X axis**  
Compare the scale of the width of an object.

**Current frame**  
Compare the index of the current frame in the animation displayed by the specified object. The first frame in an animation starts at index 0.

**Width**  
Compare the width of a Sprite object.

### Object expressions

^ Expression ^ Description ^  ^
| `Object.Animation()` | Animation of the object ||
| `Object.AnimationFrameCount()` | Number of frames in the current animation of the object ||
| `Object.AnimationName()` | Name of the animation of the object ||
| `Object.AnimationSpeedScale()` | Animation speed scale ||
| `Object.Opacity()` | Opacity ||
| `Object.PointX(objectPointName)` | X position of a point ||
|:::| _objectPointName_ | Name of the point |
| `Object.PointY(objectPointName)` | Y position of a point ||
|:::| _objectPointName_ | Name of the point |
| `Object.ScaleX()` | Scale of the width of an object ||
| `Object.ScaleY()` | Scale of the height of an object ||
| `Object.Sprite()` | Current frame of the animation of the object ||

---
*This page is an auto-generated reference page about the **Sprite** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).