# Sprite Reference

Sprite are animated objects which can be used for most elements of a 2D game. [Read more explanations about it.](/gdevelop5/objects/sprite)



## Sprite 

Animated object which can be used for most elements of a 2D game. 

### Object actions

**Blend mode**  
Change the number of the blend mode of an object.  
The default blend mode is 0 (Normal).

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1 (🔢 Number): Mode (0: Normal, 1: Add, 2: Multiply, 3: Screen)

**Tint color**  
Change the tint of an object. The default color is white.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1 (color): Tint

**Current frame**  
Modify the current frame of the object

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

### Object conditions

**Blend mode**  
Compare the number of the blend mode currently used by an object

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

**Current frame**  
Compare the index of the current frame in the animation displayed by the specified object. The first frame in an animation starts at index 0.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

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

The Sprite extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **Sprite** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).