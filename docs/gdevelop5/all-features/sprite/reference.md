# Sprite

Sprite are animated object which can be used for most elements of a game. [Read more explanations about it.](https://wiki.gdevelop.io/gdevelop5/objects/sprite)



## Sprite 

Animated object which can be used for most elements of a game. 

### Object actions

**Blend mode**  
Change the number of the blend mode of an object.  
The default blend mode is 0 (Normal).

**Tint color**  
Change the tint of an object. The default color is white.

**Current frame**  
Modify the current frame of the object

### Object conditions

**Blend mode**  
Compare the number of the blend mode currently used by an object

**Current frame**  
Compare the index of the current frame in the animation displayed by the specified object. The first frame in an animation starts at index 0.

### Object expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.AnimationFrameCount()` | Number of frames in the current animation of the object ||
| `Object.PointX(object point name)` | X position of a point ||
| | _🔤 Object Point Name (String)_ | Name of the point |
| `Object.PointY(object point name)` | Y position of a point ||
| | _🔤 Object Point Name (String)_ | Name of the point |
| `Object.Sprite()` | Current frame of the animation of the object ||

---
*This page is an auto-generated reference page about the **Sprite** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).