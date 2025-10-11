# Selection tools

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/9183b1a2c466ffc831a749b3a2692200b070a88f807696d99caa662632c2ed73_selection-drag.svg" class="extension-icon"></img>
Select object instances by drawing rectangular, polygonal or lasso selection.

**Authors and contributors** to this experimental extension: [AshBadas](https://gd.games/AshBadas).

!!! warning
    This is an extension made by a community member and it only got through a
    light review by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of fully reviewed extensions.

---

### How to use:


- Activate SelectionTools using the `De/Activate selection tools` action.
- Create a shape painter object and add the `Selection painter` behavior. Create a single instance of this object.
- Use `Activate rectangular selection`, `Activate polygonal selection`, or `Activate lasso selection` action to activate the type of selection you need.
- Use the `Select` condition to check which object instances are inside the selection.


---

### Tips:


- None of the actions require you to call them each frame. Use them with the `At the beginning of the scene` condition or `Triggred Once`.
- If you set `Pre-select?` to `Yes` in the `Select` condition, do not add a `Triggred Once` to that event.


---

#### Actions:


- `De/Activate selection tools`
- `Activate rectangular selection`
- `Activate polygonal selection`
- `Activate lasso selection`
- `Clear selection`

#### Condition:


- `Select`
- `Selection activated`
- `Current selection type`

#### Behavior:


- `Selection painter`

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Activate lasso selection**  
Change the current selection type to lasso selection.

??? quote "See parameters"

    - Parameter 1 (🔢 Number): Length of each side of the shape representing the lasso (in pixels)
    - Parameter 2 (🔢 Number): Maximum number of vertices that the shape representing the lasso can have
      Too many vertices can affect the performance. A limit on the vertex count ensures that doesn't happen.

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

**Activate polygonal selection**  
Change the current selection type to polygonal selection.

??? quote "See parameters"

    - Parameter 1 (🔢 Number): Minimum length of each side of the shape/polygon (in pixels)
    - Parameter 2 (🔢 Number): Maximum number of vertices that the shape/polygon can have
      Too many vertices can affect the performance. A limit on the vertex count ensures that doesn't happen.
    - Parameter 3 (🔢 Number): Merge proximity
      When clicked, how far (at maximum, in pixels) the cursor needs to be from the first vertex to close the shape.
    - Parameter 4 (❓ Yes or No): True polygon?
      If the selection is a true polygon, dragging while the mouse button or touch is down will not place new vertices.

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

**Activate rectangular selection**  
Change the current selection type to rectangular selection.

??? quote "See parameters"



    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

**Clear selection**  
Clear the selection (Note: This action does not deslect selected objects).

??? quote "See parameters"



    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

**De/Activate selection tools**  
De/Activate selection tools.

??? quote "See parameters"

    - Parameter 1 (❓ Yes or No): Activate?

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

## Conditions

**Current selection type**  
Current selection type.

??? quote "See parameters"

    - Parameter 1 (🔤 String): Selection type (one of: "Rectangular", "Polygonal", "Lasso")

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

**Select**  
Select objects inside the selection boundary.

??? quote "See parameters"

    - Parameter 1 (👾 Object): Object or group that is to be selected
    - Parameter 2 (❓ Yes or No): Invert selection?
      Select all object instances outside the selection boundary.
    - Parameter 3 (❓ Yes or No): Pre-select?
      Don't wait for the shape to be closed or the mouse button/touch to be released.

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

**Selection activated**  
Selection tools is activated.

??? quote "See parameters"



    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.



## Selection painter 

Draw selection (SelectionTools). 

_No expressions for this behavior._



---

*This page is an auto-generated reference page about the **Selection tools** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).