# Shape painter

This provides an object that can be used to draw arbitrary shapes on the screen using events. [Read more explanations about it.](https://wiki.gdevelop.io/gdevelop5/objects/shape_painter)



## Shape painter 

Allows you to draw simple shapes on the screen using the events. 

### Object actions

**Arc**  
Draw an arc on screen. If "Close path" is set to yes, a line will be drawn between the start and end point of the arc, closing the shape.

**Begin fill path**  
Begin to draw a simple one-color fill. Subsequent actions, such as "Path line" (in the Advanced category) can be used to draw. Be sure to use "End fill path" action when you're done drawing the shape.

**Bezier curve**  
Draw a bezier curve on screen

**Circle**  
Draw a circle on screen

**Clear between frames**  
Activate (or deactivate) the clearing of the rendered shape at the beginning of each frame.

**Clear shapes**  
Clear the rendered shape(s). Useful if not set to be done automatically.

**Scale on X axis**  
Change the width's scale of an object.

**Scale on Y axis**  
Change the height's scale of an object.

**Ellipse**  
Draw an ellipse on screen

**End fill path**  
Finish the filling drawing in an advanced path

**Fill color**  
Change the color used when filling

**Fill opacity**  
Modify the opacity level used when filling future drawings.

**Flip the object horizontally**  
Flip the object horizontally

**Flip the object vertically**  
Flip the object vertically

**Height**  
Change the height of an object.

**Line**  
Draw a line on screen

**Move path drawing position**  
Move the drawing position for the current path

**Outline color**  
Modify the color of the outline of future drawings.

**Outline opacity**  
Modify the opacity of the outline of future drawings.

**Outline size**  
Modify the size of the outline of future drawings.

**Path arc**  
Add to a path an arc to a position. The origin comes from the previous action or from "Begin fill path" or "Move path drawing position". By default, the start position will be the object's position.

**Path bezier curve**  
Add to a path a bezier curve to a position. The origin comes from the previous action or from "Begin fill path" or "Move path drawing position". By default, the start position will be the object's position.

**Path line**  
Add to a path a line to a position. The origin comes from the previous action or from "Begin fill path" or "Move path drawing position". By default, the start position will be the object's position.

**Path quadratic curve**  
Add to a path a quadratic curve to a position. The origin comes from the previous action or from "Begin fill path" or "Move path drawing position". By default, the start position will be the object's position.

**Quadratic curve**  
Draw a quadratic curve on screen

**Rectangle**  
Draw a rectangle on screen

**Rounded rectangle**  
Draw a rounded rectangle on screen

**Scale**  
Modify the scale of the specified object.

**Collision Mask**  
Change the collision mask of an object to a rectangle relatively to the object origin.

**Center of rotation**  
Change the center of rotation of an object relatively to the object origin.

**Star**  
Draw a star on screen

**Use relative coordinates**  
Set if the object should use relative coordinates (by default) or not. It's recommended to use relative coordinates.

**Width**  
Change the width of an object.

**Close Path**  
Close the path of the advanced shape. This closes the outline between the last and the first point.

### Object conditions

**Relative coordinates**  
Check if the coordinates of the shape painter is relative.

**Clear between frames**  
Check if the rendered image is cleared between frames.

**Scale on X axis**  
Compare the width's scale of an object.

**Scale on Y axis**  
Compare the height's scale of an object.

**Fill opacity**  
Test the value of the opacity level used when filling.

**Horizontally flipped**  
Check if the object is horizontally flipped

**Vertically flipped**  
Check if the object is vertically flipped

**Outline opacity**  
Test the opacity of the outline.

**Outline size**  
Test the size of the outline.

### Object expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.FillColorBlue()` | Filing color blue component ||
| `Object.FillColorGreen()` | Filing color green component ||
| `Object.FillColorRed()` | Filing color red component ||
| `Object.FillOpacity()` | Filling opacity ||
| `Object.OutlineColorBlue()` | Outline color blue component ||
| `Object.OutlineColorGreen()` | Outline color green component ||
| `Object.OutlineColorRed()` | Outline color red component ||
| `Object.OutlineOpacity()` | Outline opacity ||
| `Object.OutlineSize()` | Outline size ||
| `Object.ScaleX()` | Return the width's scale of an object. ||
| `Object.ScaleY()` | Return the height's scale of an object. ||
| `Object.ToDrawingX(number, number)` | X drawing coordinate of a point from the scene ||
| | _number_ | X scene position |
| | _number_ | Y scene position |
| `Object.ToDrawingY(number, number)` | Y drawing coordinate of a point from the scene ||
| | _number_ | X scene position |
| | _number_ | Y scene position |
| `Object.ToSceneX(number, number)` | X scene coordinate of a point from the drawing ||
| | _number_ | X drawing position |
| | _number_ | Y drawing position |
| `Object.ToSceneY(number, number)` | Y scene coordinate of a point from the drawing ||
| | _number_ | X drawing position |
| | _number_ | Y drawing position |

---
*This page is an auto-generated reference page about the **Shape painter** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).