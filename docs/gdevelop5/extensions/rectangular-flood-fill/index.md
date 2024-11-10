# Rectangular flood fill

<img src="https://resources.gdevelop-app.com/assets/Icons/Glyphster Pack/Master/SVG/Graphic Design/Graphic Design_grid.svg" class="extension-icon"></img>
Create objects as a grid to cover a rectangular area or an other object.

**Authors and contributors** to this community extension: [VictrisGames](https://gd.games/VictrisGames).

---

This extension can be used to create multiple copies of an object in a wide variety of arrangements, including:

- horizontal row(s)
- vertical column(s)
- a solid rectangle or square
- an evenly spaced grid
- a grid with different spacing between rows and columns

How To Use:

- Place target objects in the scene in the places you want fill objects to be created
- This action only needs to be run once (at the beginning of the scene or using TriggerOnce)

Object variables (on Fill objects): 

- "CreationID" (number)
- "RowID" (number)
- "ColumnID" (number)

Tips:

- Use fill objects that are the same size as the scene editor grid.  This will make sure the fill objects fit exactly inside the target objects.
- Hide target objects at the beginning of the scene if you don't want them to be visible.
- Keep the default origin point (top-left corner) on fill objects them to line up exactly with target objects.

Watch this [tutorial video](https://youtu.be/rlGSlNSRR9w) to see examples of how to use this extension.

Breaking changes from 2.0.0

- The action no longer set "BatchID" variables. It can be done on the created objects after calling the action.
- Spacing parameters have been inverted.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Create objects to flood fill a rectanglular area**  
Create multiple copies of an object.

**Create objects to flood fill other objects**  
Create fill objects that cover the rectangular area of target objects.



---

*This page is an auto-generated reference page about the **Rectangular flood fill** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).