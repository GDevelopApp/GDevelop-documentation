# Rectangular flood fill

<img src="https://resources.gdevelop-app.com/assets/Icons/Glyphster Pack/Master/SVG/Graphic Design/Graphic Design_grid.svg" class="extension-icon"></img>
Create objects as a grid to cover a rectangular area or an other object.

**Authors and contributors** to this experimental extension: [VictrisGames](https://gd.games/VictrisGames).

---

This extension can be used to create multiple copies of an object in a wide variety of 2D arrangements, including:

- horizontal row(s)
- vertical column(s)
- a solid rectangle or square
- an evenly spaced grid
- a grid with different spacing between rows and columns

How To Use:

- Place target objects in the scene in the places you want fill objects to be created
- This action only needs to be run once (at the beginning of the scene or using "Trigger Once")

Object variables (automatically added on Fill objects): 

- "CreationID" (number)
- "RowID" (number)
- "ColumnID" (number)

Tips:

- Use fill objects that are the same size as the scene editor grid.  This will make sure the fill objects fit exactly inside the target objects.
- Hide target objects at the beginning of the scene if you don't want them to be visible.
- Keep the default origin point (top-left corner) on fill objects them to line up exactly with target objects.

Watch this [tutorial video](https://youtu.be/rlGSlNSRR9w) to see examples of how to use this extension.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Create objects to flood fill a rectanglular area**
Create multiple copies of an object.

??? quote "See parameters"

    - Parameter 1: 👾 Object
    - Parameter 2 (🔢 Number): Number of columns (default: 1)
    - Parameter 3 (🔢 Number): Number of rows (default: 1)
    - Parameter 4 (🔢 Number): Top-left starting position (X) (default: 0)
    - Parameter 5 (🔢 Number): Top-left starting position (Y) (default: 0)
    - Parameter 6 (🔢 Number): Amount of space between columns (default: 0)
    - Parameter 7 (🔢 Number): Amount of space between rows (default: 0)
    - Parameter 8: 🔤 Layer name (String)
    - Parameter 9 (🔢 Number): Z order

    > Technical note: parameters 0, 10 are internal parameters handled by GDevelop.

**Create objects to flood fill other objects**
Create fill objects that cover the rectangular area of target objects.

??? quote "See parameters"

    - Parameter 1 (👾 Object): Target object
      Rectangular area that will be covered by fill objects
    - Parameter 2 (👾 Object): Fill object
      Object that is created to cover the rectangular area of target objects
    - Parameter 3 (🔢 Number): Space between columns (pixels)
    - Parameter 4 (🔢 Number): Space between rows (pixels)
    - Parameter 5: 🔤 Layer name (String)
    - Parameter 6 (🔢 Number): Z order

    > Technical note: parameters 0, 7 are internal parameters handled by GDevelop.




---

*This page is an auto-generated reference page about the **Rectangular flood fill** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).