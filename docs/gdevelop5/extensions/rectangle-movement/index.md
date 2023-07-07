# Rectangular movement

<img src="https://resources.gdevelop-app.com/assets/Icons/shape-rectangle-plus.svg" class="extension-icon"></img>
Move objects in a rectangular pattern.

**Authors and contributors** to this community extension: [4ian](https://gd.games/4ian), [VictrisGames](https://gd.games/VictrisGames), [D8H](https://gd.games/D8H).

---

Move objects in a rectangular pattern with easing functions from the Tween extension.

It can be used for:


- Moveable platforms
- Enemy movement patterns
- Moving along the border of another object

The platformer example uses this extension ([open the project online](https://editor.gdevelop.io/?project=example://platformer)).

This game shows how to make objects move around the border of another object ([open the project online](https://editor.gdevelop.io/?project=example://moving-saw-platformer)).

This example can be used to test different settings ([open the project online](https://editor.gdevelop.io/?project=example://rectangular-movement)).


!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Update rectangular movement to follow the border of an object**  
Update rectangular movement to follow the border of an object. Run once, or every time the center object moves.

**Move to the nearest corner of the center object**  
Move to the nearest corner of the center object.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `RectangleMovement::DistanceToClosestEdge(object, object)` | Distance from an object to the closest edge of a second object. ||
| | _object_ | Center object |
| | _object_ | Moving object |

## Rectangular movement 

Move objects in a rectangular pattern. 

### Behavior actions

**Bottom bound**  
Change the bottom bound of the rectangular movement.

**Clockwise**  
Change the direction to clockwise or counter-clockwise.

**Easing**  
Change the easing function of the movement.

**Horizontal edge duration**  
Change the time the object takes to go through a horizontal edge (in seconds).

**Left bound**  
Change the left bound of the rectangular movement.

**Clockwise property**  
Update the property value for "clockwise".

**Easing property**  
Change the property value for the easing.

**Height property**  
Change the property value for the height.

**Horizontal edge duration property**  
Change the property value for the horizontal edge duration.

**Initial position property**  
Change the property value for the initial position.

**Left property**  
Change the property value for the left.

**OldX property**  
Change the property value for the oldX.

**OldY property**  
Change the property value for the oldY.

**Progress property**  
Change the property value for the progress.

**ToogleClockwise property**  
Update the property value for "toogleClockwise".

**Top property**  
Change the property value for the top.

**Vertical edge duration property**  
Change the property value for the vertical edge duration.

**Width property**  
Change the property value for the width.

**Right bound**  
Change the right bound of the rectangular movement.

**Top bound**  
Change the top bound of the rectangular movement.

**Vertical edge duration**  
Change the time the object takes to go through a vertical edge (in seconds).

**Teleport at a corner**  
Teleport the object to a corner of the movement rectangle.

**Toggle Clockwise property**  
Toggle the property value for clockwise.  
If it was true, it will become false, and if it was false it will become true.

**Toggle ToogleClockwise property**  
Toggle the property value for toogleClockwise.  
If it was true, it will become false, and if it was false it will become true.

**Toggle direction**  
Toggle the direction to clockwise or counter-clockwise.

### Behavior conditions

**Is moving clockwise**  
Check if the object is moving clockwise.

**Is moving down**  
Check if the object is moving down.

**Is moving left**  
Check if the object is moving to the left.

**Is moving right**  
Object is moving to the right.

**Is moving up**  
Check if the object is moving up.

**Is on bottom**  
Object is on the bottom side of the rectangle.

**Is on left**  
Object is on the left side of the rectangle.

**Is on right**  
Object is on the right side of the rectangle.

**Is on top**  
Object is on the top side of the rectangle.

**Clockwise property**  
Check the property value for clockwise.

**Easing property**  
Compare the property value for the easing.

**Height property**  
Compare the property value for the height.

**Horizontal edge duration property**  
Compare the property value for the horizontal edge duration.

**Initial position property**  
Compare the property value for the initial position.

**Left property**  
Compare the property value for the left.

**OldX property**  
Compare the property value for the oldX.

**OldY property**  
Compare the property value for the oldY.

**Progress property**  
Compare the property value for the progress.

**ToogleClockwise property**  
Check the property value for toogleClockwise.

**Top property**  
Compare the property value for the top.

**Vertical edge duration property**  
Compare the property value for the vertical edge duration.

**Width property**  
Compare the property value for the width.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.RectangleMovement::Bottom()` | Return the bottom bound of the movement. ||
| `Object.RectangleMovement::BottomLeftDuration()` | Return the duration between the top-left vertex and the bottom-left one. ||
| `Object.RectangleMovement::BottomRightDuration()` | Return the duration between the top-left vertex and the bottom-right one. ||
| `Object.RectangleMovement::CurrentTime()` | Return the time from the top-left vertex. ||
| `Object.RectangleMovement::DeltaX()` | Return the displacement on the X axis from the top-left vertex. ||
| `Object.RectangleMovement::DeltaY()` | Return the displacement on the Y axis from the top-left vertex. ||
| `Object.RectangleMovement::EdgeOriginX()` | Return the X position of the current edge origin. ||
| `Object.RectangleMovement::EdgeOriginY()` | Return the Y position of the current edge origin. ||
| `Object.RectangleMovement::EdgeProgress()` | Return the ratio between the covered distance from the last vertex and the edge length (between 0 and 1). ||
| `Object.RectangleMovement::EdgeTargetX()` | Return the Y position of the current edge target. ||
| `Object.RectangleMovement::EdgeTargetY()` | Return the X position of the current edge target. ||
| `Object.RectangleMovement::HalfCurrentTime()` | Return the covered length from the top-left vertex or the bottom-right one. ||
| `Object.RectangleMovement::Height()` | Return the rectangle height. ||
| `Object.RectangleMovement::HorizontalEdgeDuration()` | Return the time the object takes to go through a horizontal edge (in seconds). ||
| `Object.RectangleMovement::Left()` | Return the left bound of the movement. ||
| `Object.RectangleMovement::LoopDuration()` | Return the time the object takes to go through the whole rectangle (in seconds). ||
| `Object.RectangleMovement::Perimeter()` | Return the perimeter of the movement rectangle. ||
| `Object.RectangleMovement::PropertyEasing()` | Return the property value for the easing. ||
| `Object.RectangleMovement::PropertyHeight()` | Return the property value for the height. ||
| `Object.RectangleMovement::PropertyHorizontalEdgeDuration()` | Return the property value for the horizontal edge duration. ||
| `Object.RectangleMovement::PropertyInitialPosition()` | Return the property value for the initial position. ||
| `Object.RectangleMovement::PropertyLeft()` | Return the property value for the left. ||
| `Object.RectangleMovement::PropertyOldX()` | Return the property value for the oldX. ||
| `Object.RectangleMovement::PropertyOldY()` | Return the property value for the oldY. ||
| `Object.RectangleMovement::PropertyProgress()` | Return the property value for the progress. ||
| `Object.RectangleMovement::PropertyTop()` | Return the property value for the top. ||
| `Object.RectangleMovement::PropertyVerticalEdgeDuration()` | Return the property value for the vertical edge duration. ||
| `Object.RectangleMovement::PropertyWidth()` | Return the property value for the width. ||
| `Object.RectangleMovement::Right()` | Return the right bound of the movement. ||
| `Object.RectangleMovement::Top()` | Return the top bound of the movement. ||
| `Object.RectangleMovement::TopRightDuration()` | Return the duration between the top-left vertex and the top-right one. ||
| `Object.RectangleMovement::VerticalEdgeDuration()` | Return the time the object takes to go through a vertical edge (in seconds). ||
| `Object.RectangleMovement::Width()` | Return the rectangle width. ||

---

*This page is an auto-generated reference page about the **Rectangular movement** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).