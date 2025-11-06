# Hexagonal 2D grid

<img src="https://resources.gdevelop-app.com/assets/Icons/hexagon-multiple-outline.svg" class="extension-icon"></img>
Snap objects to an hexagonal grid.

**Authors and contributors** to this experimental extension: [D8H](https://gd.games/D8H).

---

It allows to snap objects on a 2D hexagonal grid.

It's useful for:

- level editors
- building systems ([open the city builder example online](https://editor.gdevelop.io/?project=example://city-builder))

A [simple example](https://editor.gdevelop.io/?project=example://snap-object-to-grid) shows how to snap objects that are dragged with the mouse.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Snap objects to a virtual bubble grid**  
Snap object to a virtual bubble grid (this is not the grid used in the editor).

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Objects to snap to the virtual grid
    - Parameter 2 (🔢 Number): Width of a cell of the virtual grid (in pixels)
    - Parameter 3 (🔢 Number): Height of a cell of the virtual grid (in pixels)
      The actual row height will be 7/8 of this.
    - Parameter 4 (🔢 Number): Offset on the X axis of the virtual grid (in pixels)
    - Parameter 5 (🔢 Number): Offset on the Y axis of the virtual grid (in pixels)
      Odd rows are shifted from half a cell, use a "CellHeight * 7/8" offset to make it the other way

    > Technical note: parameters 0, 6 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `HexagonalGrid::SnapObjectToBubbleGrid`.

**Snap objects to a virtual flat topped hexagonal grid**  
Snap object to a virtual flat topped hexagonal grid (this is not the grid used in the editor).

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Objects to snap to the virtual grid
    - Parameter 2 (🔢 Number): Width of a cell of the virtual grid (in pixels)
      The actual column width will be 3/4 of this.
    - Parameter 3 (🔢 Number): Height of a cell of the virtual grid (in pixels)
    - Parameter 4 (🔢 Number): Offset on the X axis of the virtual grid (in pixels)
      Odd columns are shifted from half a cell, use a "CellHeight * 3/4" offset to make it the other way.
    - Parameter 5 (🔢 Number): Offset on the Y axis of the virtual grid (in pixels)

    > Technical note: parameters 0, 6 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `HexagonalGrid::SnapObjectToFlatToppedHexagonalGrid`.

**Snap objects to a virtual pointy topped hexagonal grid**  
Snap object to a virtual pointy topped hexagonal grid (this is not the grid used in the editor).

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Objects to snap to the virtual grid
    - Parameter 2 (🔢 Number): Width of a cell of the virtual grid (in pixels)
    - Parameter 3 (🔢 Number): Height of a cell of the virtual grid (in pixels)
      The actual row height will be 3/4 of this.
    - Parameter 4 (🔢 Number): Offset on the X axis of the virtual grid (in pixels)
    - Parameter 5 (🔢 Number): Offset on the Y axis of the virtual grid (in pixels)
      Odd rows are shifted from half a cell, use a "CellHeight * 3/4" offset to make it the other way.

    > Technical note: parameters 0, 6 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `HexagonalGrid::SnapObjectToPointyToppedHexagonalGrid`.





---

*This page is an auto-generated reference page about the **Hexagonal 2D grid** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).