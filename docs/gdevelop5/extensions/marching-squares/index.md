# Marching Squares (experimental)

<img src="https://resources.gdevelop-app.com/assets/Icons/peanut-outline.svg" class="extension-icon"></img>
Allow to build a "scalar field" and draw contour lines of it: useful for fog of wars, liquid effects, paint the ground, etc...

**Authors and contributors** to this community extension: [D8H](https://gd.games/D8H).

---

It can be helpful for:

  * Liquid effects like water, blobs or lava ([open the project online](https://editor.gdevelop.io/?project=example://marching-squares-liquids))
  * Fog of wars ([open the project online](https://editor.gdevelop.io/?project=example://marching-squares-fog-of-war))
  * Platformer with destructible platforms ([open the project online](https://editor.gdevelop.io/?project=example://marching-squares-platforms-painter))
  * Dynamically paint territories ([open the project online](https://editor.gdevelop.io/?project=example://marching-squares-qix))
  * Top-down relief with physics ([open the project online](https://editor.gdevelop.io/?project=example://marching-squares-terraforming))
  * Island generator ([open the project online](https://editor.gdevelop.io/?project=example://marching-squares-island-generator))

[Read more...](https://wiki.gdevelop.io/gdevelop5/extensions/marching-squares/details)

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Define helper classes**  
Define helper classes JavaScript code.

**Define scalar field painter library**  
Define the scalar field painter library JavaScript code.



## Marching squares painter 

Add to a Shape painter object and use the actions to draw a field. Useful for fog of wars, liquid effects (water, lava, blobs...). 

### Behavior actions

**Add a disk**  
Add a disk to the field.

**Add a hill**  
Add a hill to the field.

**Add a line**  
Add a line to the field.

**Clamp the field**  
Cap every value of the field to a range.

**Clear the field**  
Clear the field by setting every values to 0.

**Draw the contours**  
Draw the field contours.

**Extend behavior class**  
Extend behavior class

**Extend object instance prototype**  
Extend object instance prototype.

**Fill area**  
Fill an area of the field from a given location until a given hight is reached.

**Mask a disk**  
Mask a disk to the field.

**Mask a line**  
Mask a line to the field.

**Merge a field**  
Apply a given operation on every value of the field using the value from the other field at the same position.

**Rebuild the field**  
Rebuild the field with the new dimensions.

**Area bounds**  
Change the field area bounds.

**Height of the cells**  
Change the height of the field cells.

**Width of the cells**  
Change the width of the field cells.

**Fill outside**  
Fill outside or inside of the contours.

**Grid value**  
Change the field value at a grid point.

**Area bottom bound property**  
Change the property value for the area bottom bound.

**Area left bound property**  
Change the property value for the area left bound.

**Area right bound property**  
Change the property value for the area right bound.

**Area top bound property**  
Change the property value for the area top bound.

**Cell height property**  
Change the property value for the cell height.

**Cell width property**  
Change the property value for the cell width.

**Fill outside property**  
Update the property value for "fill outside".

**Must only draw what is on the screen property**  
Update the property value for "must only draw what is on the screen".

**Contour threshold property**  
Change the property value for the contour threshold.

**Contour threshold**  
Change the contour threshold.

**Toggle Fill outside property**  
Toggle the property value for fill outside.  
If it was true, it will become false, and if it was false it will become true.

**Toggle Must only draw what is on the screen property**  
Toggle the property value for must only draw what is on the screen.  
If it was true, it will become false, and if it was false it will become true.

**Transform the field**  
Apply an affine on the field values.

**Update hitboxes**  
Update the field hitboxes.

**Unfill area**  
Unfill an area of the field from a given location until a given hight is reached.

### Behavior conditions

**Field value**  
Check if a field is greater than a given value.

**Fill outside**  
Check if the contours are filled outside.

**Point is inside**  
Check if a point is inside the contour.

**Area bottom bound property**  
Compare the property value for the area bottom bound.

**Area left bound property**  
Compare the property value for the area left bound.

**Area right bound property**  
Compare the property value for the area right bound.

**Area top bound property**  
Compare the property value for the area top bound.

**Cell height property**  
Compare the property value for the cell height.

**Cell width property**  
Compare the property value for the cell width.

**Fill outside property**  
Check the property value for fill outside.

**Must only draw what is on the screen property**  
Check the property value for must only draw what is on the screen.

**Contour threshold property**  
Compare the property value for the contour threshold.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.MarchingSquaresBehavior::AreaBottom()` | Area bottom bound of the field. ||
| `Object.MarchingSquaresBehavior::AreaLeft()` | Area left bound of the field. ||
| `Object.MarchingSquaresBehavior::AreaRight()` | Area right bound of the field. ||
| `Object.MarchingSquaresBehavior::AreaTop()` | Area top bound of the field. ||
| `Object.MarchingSquaresBehavior::CellHeight()` | Height of the field cells. ||
| `Object.MarchingSquaresBehavior::CellWidth()` | Width of the field cells. ||
| `Object.MarchingSquaresBehavior::ContourThreshold()` | The contour threshold. ||
| `Object.MarchingSquaresBehavior::DimensionX()` | The number of cells on the x axis. ||
| `Object.MarchingSquaresBehavior::DimensionY()` | The number of cells on the y axis. ||
| `Object.MarchingSquaresBehavior::FieldValue(number, number)` | The field value at a given location. ||
| | _number_ | X position of the point |
| | _number_ | Y position of the point |
| `Object.MarchingSquaresBehavior::GridValue(number, number)` | The field value at a grid point. ||
| | _number_ | X grid index |
| | _number_ | Y grid index |
| `Object.MarchingSquaresBehavior::NormalX(number, number)` | The normal X coordinate at a given location. ||
| | _number_ | X position of the point |
| | _number_ | Y position of the point |
| `Object.MarchingSquaresBehavior::NormalY(number, number)` | The normal Y coordinate at a given location. ||
| | _number_ | X position of the point |
| | _number_ | Y position of the point |
| `Object.MarchingSquaresBehavior::NormalZ(number, number)` | The normal Z coordinate at a given location. ||
| | _number_ | X position of the point |
| | _number_ | Y position of the point |
| `Object.MarchingSquaresBehavior::PropertyAreaBottomBound()` | Return the property value for the area bottom bound. ||
| `Object.MarchingSquaresBehavior::PropertyAreaLeftBound()` | Return the property value for the area left bound. ||
| `Object.MarchingSquaresBehavior::PropertyAreaRightBound()` | Return the property value for the area right bound. ||
| `Object.MarchingSquaresBehavior::PropertyAreaTopBound()` | Return the property value for the area top bound. ||
| `Object.MarchingSquaresBehavior::PropertyCellHeight()` | Return the property value for the cell height. ||
| `Object.MarchingSquaresBehavior::PropertyCellWidth()` | Return the property value for the cell width. ||
| `Object.MarchingSquaresBehavior::PropertyThreshold()` | Return the property value for the contour threshold. ||

---

*This page is an auto-generated reference page about the **Marching Squares (experimental)** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).