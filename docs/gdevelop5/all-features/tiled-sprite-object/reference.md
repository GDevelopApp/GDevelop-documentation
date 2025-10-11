# Tiled Sprite Object Reference

Displays a 2D image in a repeating pattern over an area. Useful for making backgrounds, including background that are scrolling when the camera moves. This is more performant than using multiple Sprite objects. [Read more explanations about it.](/gdevelop5/objects/tiled_sprite)



## Tiled Sprite 

Displays an image repeated over an area. 

### Object actions

**Tint color**  
Change the tint of a Tiled Sprite. The default color is white.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1 (color): Tint

**Image X Offset**  
Modify the offset used on the X axis when displaying the image.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

**Image Y Offset**  
Modify the offset used on the Y axis when displaying the image.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

### Object conditions

**Image X Offset**  
Test the offset used on the X axis when displaying the image.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

**Image Y Offset**  
Test the offset used on the Y axis when displaying the image.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

### Object expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.XOffset()` | Return the offset used on the X axis when displaying the image. ||
| `Object.YOffset()` | Return the offset used on the Y axis when displaying the image. ||



---

The Tiled Sprite Object extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **Tiled Sprite Object** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).