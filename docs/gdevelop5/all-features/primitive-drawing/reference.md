# Shape painter Reference

An object that can be used to draw arbitrary 2D shapes on the screen using events. [Read more explanations about it.](/gdevelop5/objects/shape_painter)



## Shape painter 

Allows to draw simple 2D shapes on the screen using the events. 

### Object properties

- **Use absolute coordinates** (🔘 Boolean). Default value is `false`.
- **Antialiasing** (choice, one of: "none", "low", "medium", "high"). Antialiasing mode. Default value is `none`.
- **Clear drawing at each frame** (🔘 Boolean). When activated, clear the previous render at each frame. Otherwise, shapes are staying on the screen until you clear manually the object in events. Default value is `true`.
- **Fill color** (🎨 Color). Default value is `255;255;255`.
- **Fill opacity** (🔢 Number). Default value is `255`.
- **Outline color** (🎨 Color). Default value is `0;0;0`.
- **Outline opacity** (🔢 Number). Default value is `255`.
- **Outline size** (🔢 Number). Default value is `1`.

??? quote "See internal technical details"


    - **Use absolute coordinates** is stored as `absoluteCoordinates` (boolean). Default value is `false`.
    - **Antialiasing** is stored as `antialiasing` (choice). Default value is `none`.
    - **Clear drawing at each frame** is stored as `clearBetweenFrames` (boolean). Default value is `true`.
    - **Fill color** is stored as `fillColor` (color). Default value is `255;255;255`.
    - **Fill opacity** is stored as `fillOpacity` (number). Default value is `255`.
    - **Outline color** is stored as `outlineColor` (color). Default value is `0;0;0`.
    - **Outline opacity** is stored as `outlineOpacity` (number). Default value is `255`.
    - **Outline size** is stored as `outlineSize` (number). Default value is `1`.

### Object actions

**Arc**  
Draw an arc on screen. If "Close path" is set to yes, a line will be drawn between the start and end point of the arc, closing the shape.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Shape Painter object
    - Parameter 1 (🔢 Number): X position of center
    - Parameter 2 (🔢 Number): Y position of center
    - Parameter 3 (🔢 Number): Radius (in pixels)
    - Parameter 4 (🔢 Number): Start angle of the arc (in degrees)
    - Parameter 5 (🔢 Number): End angle of the arc (in degrees)
    - Parameter 6 (❓ Yes or No): Anticlockwise
    - Parameter 7 (❓ Yes or No): Close path

    > Technical note: this action internal type (in GDevelop JSON) is `PrimitiveDrawing::Arc`.

**Begin fill path**  
Begin to draw a simple one-color fill. Subsequent actions, such as "Path line" (in the Advanced category) can be used to draw. Be sure to use "End fill path" action when you're done drawing the shape.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Shape Painter object
    - Parameter 1 (🔢 Number): Start drawing x
    - Parameter 2 (🔢 Number): Start drawing y

    > Technical note: this action internal type (in GDevelop JSON) is `PrimitiveDrawing::BeginFillPath`.

**Bezier curve**  
Draw a bezier curve on screen

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Shape Painter object
    - Parameter 1 (🔢 Number): X position of start point
    - Parameter 2 (🔢 Number): Y position of start point
    - Parameter 3 (🔢 Number): First control point x
    - Parameter 4 (🔢 Number): First control point y
    - Parameter 5 (🔢 Number): Second Control point x
    - Parameter 6 (🔢 Number): Second Control point y
    - Parameter 7 (🔢 Number): Destination point x
    - Parameter 8 (🔢 Number): Destination point y

    > Technical note: this action internal type (in GDevelop JSON) is `PrimitiveDrawing::BezierCurve`.

**Chamfer Rectangle**  
Draw a chamfer rectangle on screen

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Shape Painter object
    - Parameter 1 (🔢 Number): Left X position
    - Parameter 2 (🔢 Number): Top Y position
    - Parameter 3 (🔢 Number): Right X position
    - Parameter 4 (🔢 Number): Bottom Y position
    - Parameter 5 (🔢 Number): Chamfer (in pixels)

    > Technical note: this action internal type (in GDevelop JSON) is `PrimitiveDrawing::ChamferRectangle`.

**Circle**  
Draw a circle on screen

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Shape Painter object
    - Parameter 1 (🔢 Number): X position of center
    - Parameter 2 (🔢 Number): Y position of center
    - Parameter 3 (🔢 Number): Radius (in pixels)

    > Technical note: this action internal type (in GDevelop JSON) is `PrimitiveDrawing::Circle`.

**Clear between frames**  
Activate (or deactivate) the clearing of the rendered shape at the beginning of each frame.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Shape Painter object
    - Parameter 1 (❓ Yes or No): Clear between each frame

    > Technical note: this action internal type (in GDevelop JSON) is `PrimitiveDrawing::ClearBetweenFrames`.

**Clear shapes**  
Clear the rendered shape(s). Useful if not set to be done automatically.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Shape Painter object

    > Technical note: this action internal type (in GDevelop JSON) is `PrimitiveDrawing::Drawer::ClearShapes`.

**Ellipse**  
Draw an ellipse on screen

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Shape Painter object
    - Parameter 1 (🔢 Number): X position of center
    - Parameter 2 (🔢 Number): Y position of center
    - Parameter 3 (🔢 Number): The width of the ellipse
    - Parameter 4 (🔢 Number): The height of the ellipse

    > Technical note: this action internal type (in GDevelop JSON) is `PrimitiveDrawing::Ellipse`.

**End fill path**  
Finish the filling drawing in an advanced path

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Shape Painter object

    > Technical note: this action internal type (in GDevelop JSON) is `PrimitiveDrawing::EndFillPath`.

**Fill color**  
Change the color used when filling

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Shape Painter object
    - Parameter 1 (🎨 Color): Fill color

    > Technical note: this action internal type (in GDevelop JSON) is `PrimitiveDrawing::FillColor`.

**Fill opacity**  
Modify the opacity level used when filling future drawings.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Shape Painter object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Opacity (0-255)

    > Technical note: this action internal type (in GDevelop JSON) is `PrimitiveDrawing::FillOpacity`.

**Fillet Rectangle**  
Draw a fillet rectangle on screen

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Shape Painter object
    - Parameter 1 (🔢 Number): Left X position
    - Parameter 2 (🔢 Number): Top Y position
    - Parameter 3 (🔢 Number): Right X position
    - Parameter 4 (🔢 Number): Bottom Y position
    - Parameter 5 (🔢 Number): Fillet (in pixels)

    > Technical note: this action internal type (in GDevelop JSON) is `PrimitiveDrawing::FilletRectangle`.

**Line**  
Draw a line on screen

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Shape Painter object
    - Parameter 1 (🔢 Number): X position of start point
    - Parameter 2 (🔢 Number): Y position of start point
    - Parameter 3 (🔢 Number): X position of end point
    - Parameter 4 (🔢 Number): Y position of end point
    - Parameter 5 (🔢 Number): Thickness (in pixels)

    > Technical note: this action internal type (in GDevelop JSON) is `PrimitiveDrawing::LineV2`.

**Move path drawing position**  
Move the drawing position for the current path

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Shape Painter object
    - Parameter 1 (🔢 Number): X position of start point
    - Parameter 2 (🔢 Number): Y position of start point

    > Technical note: this action internal type (in GDevelop JSON) is `PrimitiveDrawing::MovePathTo`.

**Outline color**  
Modify the color of the outline of future drawings.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Shape Painter object
    - Parameter 1: 🎨 Color

    > Technical note: this action internal type (in GDevelop JSON) is `PrimitiveDrawing::OutlineColor`.

**Outline opacity**  
Modify the opacity of the outline of future drawings.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Shape Painter object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Opacity (0-255)

    > Technical note: this action internal type (in GDevelop JSON) is `PrimitiveDrawing::OutlineOpacity`.

**Outline size**  
Modify the size of the outline of future drawings.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Shape Painter object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `PrimitiveDrawing::OutlineSize`.

**Path arc**  
Add to a path an arc to a position. The origin comes from the previous action or from "Begin fill path" or "Move path drawing position". By default, the start position will be the object's position.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Shape Painter object
    - Parameter 1 (🔢 Number): Center x of circle
    - Parameter 2 (🔢 Number): Center y of circle
    - Parameter 3 (🔢 Number): Radius (in pixels)
    - Parameter 4 (🔢 Number): Start angle
    - Parameter 5 (🔢 Number): End angle
    - Parameter 6 (❓ Yes or No): Anticlockwise

    > Technical note: this action internal type (in GDevelop JSON) is `PrimitiveDrawing::PathArc`.

**Path bezier curve**  
Add to a path a bezier curve to a position. The origin comes from the previous action or from "Begin fill path" or "Move path drawing position". By default, the start position will be the object's position.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Shape Painter object
    - Parameter 1 (🔢 Number): First control point x
    - Parameter 2 (🔢 Number): First control point y
    - Parameter 3 (🔢 Number): Second Control point x
    - Parameter 4 (🔢 Number): Second Control point y
    - Parameter 5 (🔢 Number): Destination point x
    - Parameter 6 (🔢 Number): Destination point y

    > Technical note: this action internal type (in GDevelop JSON) is `PrimitiveDrawing::PathBezierCurveTo`.

**Path line**  
Add to a path a line to a position. The origin comes from the previous action or from "Begin fill path" or "Move path drawing position". By default, the start position will be the object's position.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Shape Painter object
    - Parameter 1 (🔢 Number): X position of start point
    - Parameter 2 (🔢 Number): Y position of start point

    > Technical note: this action internal type (in GDevelop JSON) is `PrimitiveDrawing::PathLineTo`.

**Path quadratic curve**  
Add to a path a quadratic curve to a position. The origin comes from the previous action or from "Begin fill path" or "Move path drawing position". By default, the start position will be the object's position.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Shape Painter object
    - Parameter 1 (🔢 Number): Control point x
    - Parameter 2 (🔢 Number): Control point y
    - Parameter 3 (🔢 Number): Destination point x
    - Parameter 4 (🔢 Number): Destination point y

    > Technical note: this action internal type (in GDevelop JSON) is `PrimitiveDrawing::PathQuadraticCurveTo`.

**Quadratic curve**  
Draw a quadratic curve on screen

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Shape Painter object
    - Parameter 1 (🔢 Number): X position of start point
    - Parameter 2 (🔢 Number): Y position of start point
    - Parameter 3 (🔢 Number): Control point x
    - Parameter 4 (🔢 Number): Control point y
    - Parameter 5 (🔢 Number): Destination point x
    - Parameter 6 (🔢 Number): Destination point y

    > Technical note: this action internal type (in GDevelop JSON) is `PrimitiveDrawing::QuadraticCurve`.

**Rectangle**  
Draw a rectangle on screen

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Shape Painter object
    - Parameter 1 (🔢 Number): Left X position
    - Parameter 2 (🔢 Number): Top Y position
    - Parameter 3 (🔢 Number): Right X position
    - Parameter 4 (🔢 Number): Bottom Y position

    > Technical note: this action internal type (in GDevelop JSON) is `PrimitiveDrawing::Rectangle`.

**Regular Polygon**  
Draw a regular polygon on screen

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Shape Painter object
    - Parameter 1 (🔢 Number): X position of center
    - Parameter 2 (🔢 Number): Y position of center
    - Parameter 3 (🔢 Number): Number of sides of the polygon (minimum: 3)
    - Parameter 4 (🔢 Number): Radius (in pixels)
    - Parameter 5 (🔢 Number): Rotation (in degrees)

    > Technical note: this action internal type (in GDevelop JSON) is `PrimitiveDrawing::RegularPolygon`.

**Rounded rectangle**  
Draw a rounded rectangle on screen

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Shape Painter object
    - Parameter 1 (🔢 Number): Left X position
    - Parameter 2 (🔢 Number): Top Y position
    - Parameter 3 (🔢 Number): Right X position
    - Parameter 4 (🔢 Number): Bottom Y position
    - Parameter 5 (🔢 Number): Radius (in pixels)

    > Technical note: this action internal type (in GDevelop JSON) is `PrimitiveDrawing::RoundedRectangle`.

**Anti-aliasing**  
Anti-aliasing

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (🔤 String): Anti-aliasing quality level (one of: "none", "low", "medium", "high")

    > Technical note: this action internal type (in GDevelop JSON) is `PrimitiveDrawing::SetAntialiasing`.

**Collision Mask**  
Change the collision mask of an object to a rectangle relatively to the object origin.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (🔢 Number): Left X position
    - Parameter 2 (🔢 Number): Top Y position
    - Parameter 3 (🔢 Number): Right X position
    - Parameter 4 (🔢 Number): Bottom Y position

    > Technical note: this action internal type (in GDevelop JSON) is `PrimitiveDrawing::SetRectangularCollisionMask`.

**Center of rotation**  
Change the center of rotation of an object relatively to the object origin.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (🔢 Number): X position
    - Parameter 2 (🔢 Number): Y position

    > Technical note: this action internal type (in GDevelop JSON) is `PrimitiveDrawing::SetRotationCenter`.

**Star**  
Draw a star on screen

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Shape Painter object
    - Parameter 1 (🔢 Number): X position of center
    - Parameter 2 (🔢 Number): Y position of center
    - Parameter 3 (🔢 Number): Number of points of the star (minimum: 2)
    - Parameter 4 (🔢 Number): Radius (in pixels)
    - Parameter 5 (🔢 Number): Inner radius (in pixels, half radius by default)
    - Parameter 6 (🔢 Number): Rotation (in degrees)

    > Technical note: this action internal type (in GDevelop JSON) is `PrimitiveDrawing::Star`.

**Torus**  
Draw a torus on screen

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Shape Painter object
    - Parameter 1 (🔢 Number): X position of center
    - Parameter 2 (🔢 Number): Y position of center
    - Parameter 3 (🔢 Number): Inner Radius (in pixels)
    - Parameter 4 (🔢 Number): Outer Radius (in pixels)
    - Parameter 5 (🔢 Number): Start Arc (in degrees)
    - Parameter 6 (🔢 Number): End Arc (in degrees)

    > Technical note: this action internal type (in GDevelop JSON) is `PrimitiveDrawing::Torus`.

**Use relative coordinates**  
Set if the object should use relative coordinates (by default) or not. It's recommended to use relative coordinates.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Shape Painter object
    - Parameter 1 (❓ Yes or No): Use relative coordinates?

    > Technical note: this action internal type (in GDevelop JSON) is `PrimitiveDrawing::UseRelativeCoordinates`.

**Close Path**  
Close the path of the advanced shape. This closes the outline between the last and the first point.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Shape Painter object

    > Technical note: this action internal type (in GDevelop JSON) is `PrimitiveDrawing::closePath`.


### Object conditions

**Relative coordinates**  
Check if the coordinates of the shape painter is relative.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Shape Painter object

    > Technical note: this condition internal type (in GDevelop JSON) is `PrimitiveDrawing::AreCoordinatesRelative`.

**Anti-aliasing type**  
Checks the selected type of anti-aliasing

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (🔤 String): Type of anti-aliasing to check the object against (one of: "none", "low", "medium", "high")

    > Technical note: this condition internal type (in GDevelop JSON) is `PrimitiveDrawing::CheckAntialiasing`.

**Clear between frames**  
Check if the rendered image is cleared between frames.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Shape Painter object

    > Technical note: this condition internal type (in GDevelop JSON) is `PrimitiveDrawing::ClearBetweenFrames`.

**Fill opacity**  
Test the value of the opacity level used when filling.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Shape Painter object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Opacity to compare to (0-255)

    > Technical note: this condition internal type (in GDevelop JSON) is `PrimitiveDrawing::FillOpacity`.

**Outline opacity**  
Test the opacity of the outline.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Shape Painter object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Opacity to compare to (0-255)

    > Technical note: this condition internal type (in GDevelop JSON) is `PrimitiveDrawing::OutlineOpacity`.

**Outline size**  
Test the size of the outline.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Shape Painter object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `PrimitiveDrawing::OutlineSize`.


### Object expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.Antialiasing()` | Returns the type of anti-aliasing in use: none, low, medium, or high. ||
| `Object.FillColorBlue()` | Filing color blue component ||
| `Object.FillColorGreen()` | Filing color green component ||
| `Object.FillColorRed()` | Filing color red component ||
| `Object.FillOpacity()` | Filling opacity ||
| `Object.OutlineColorBlue()` | Outline color blue component ||
| `Object.OutlineColorGreen()` | Outline color green component ||
| `Object.OutlineColorRed()` | Outline color red component ||
| `Object.OutlineOpacity()` | Outline opacity ||
| `Object.OutlineSize()` | Outline size ||
| `Object.ToDrawingX(number, number)` | X drawing coordinate of a point from the scene ||
| | _🔢 Number_ | X scene position |
| | _🔢 Number_ | Y scene position |
| `Object.ToDrawingY(number, number)` | Y drawing coordinate of a point from the scene ||
| | _🔢 Number_ | X scene position |
| | _🔢 Number_ | Y scene position |
| `Object.ToSceneX(number, number)` | X scene coordinate of a point from the drawing ||
| | _🔢 Number_ | X drawing position |
| | _🔢 Number_ | Y drawing position |
| `Object.ToSceneY(number, number)` | Y scene coordinate of a point from the drawing ||
| | _🔢 Number_ | X drawing position |
| | _🔢 Number_ | Y drawing position |



---

The Shape painter extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **Shape painter** feature of [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).