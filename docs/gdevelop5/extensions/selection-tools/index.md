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

**Activate polygonal selection**  
Change the current selection type to polygonal selection.

**Activate rectangular selection**  
Change the current selection type to rectangular selection.

**Clear selection**  
Clear the selection (Note: This action does not deslect selected objects).

**De/Activate selection tools**  
De/Activate selection tools.

## Conditions

**Current selection type**  
Current selection type.

**Select**  
Select objects inside the selection boundary.

**Selection activated**  
Selection tools is activated.



## Selection painter 

Draw selection (SelectionTools). 

_No expressions for this behavior._



---

*This page is an auto-generated reference page about the **Selection tools** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).