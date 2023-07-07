# Curved movement

<img src="https://resources.gdevelop-app.com/assets/Icons/Line Hero Pack/Master/SVG/Graphic Design/Graphic Design_bezier_curve.svg" class="extension-icon"></img>
Move objects on curved paths.

**Authors and contributors** to this community extension: [pampogokiraly](https://gd.games/pampogokiraly), [D8H](https://gd.games/D8H).

---

This extension allows to move objects on Bézier curve paths.

- Paths can be built dynamically or from predetermined paths in SVG format.
- A behavior moves objects in a given duration a bit like the Tween extension does.
- Another behavior moves objects using a speed and an acceleration.
- Expressions give access to the path trajectory values for more complex movements.

This extension can be used to:

- Move enemies that follow a pattern
- Animate decorations

A collection of [small examples](https://editor.gdevelop.io/?project=example://curved-movement) show how to use this extension.

[Read more...](https://wiki.gdevelop.io/gdevelop5/extensions/curved-movement/details/)

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Append a curve**  
Append a cubic Bezier curve at the end of the path.

**Append a line**  
Append a line at the end of the path.

**Append a smooth curve**  
Append a cubic Bezier curve to the end of an object's path. The first control point is symmetrical to the last control point of the path.

**Append a path**  
Append a path to another path.

**Append a rotated path**  
Append a path to another path. The appended path is rotated to have a smooth junction.

**Close a path**  
Append a line to close the path.

**Create a path from SVG**  
Create a path from SVG commands, for instance "M 0,0 C 55,0 100,45 100,100". Commands are: M = Move, C = Curve, S = Smooth, L = Line. Lower case is for relative positions. The preferred way to build the commands is to use an external SVG editor like Inkscape.

**Define helper classes**  
Define helper classes JavaScript code.

**Delete a path**  
Delete a path from the memory.

**Flip a path**  
Flip a path.

**Flip a path horizontally**  
Flip a path horizontally.

**Flip a path vertically**  
Flip a path vertically.

**Invert a path**  
Invert a path, the end becomes the beginning.

**Rotate a path**  
Rotate a path.

**Scale a path**  
Scale a path.

**Speed scale Y**  
Change the speed scale on Y axis. This allows to change the view point of a path (top-dwon or isometry).

## Conditions

**Is  closed**  
Check if a path is closed.

**Path exists**  
Path exists.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `CurvedMovement::ElementCount(identifier)` | Return the number of lines or curves that make the path. ||
| | _identifier_ | Path name |
| `CurvedMovement::FirstControlX(identifier, number)` | Return the first control point position on X axis of a curve. ||
| | _identifier_ | Path name |
| | _number_ | Curve index |
| `CurvedMovement::FirstControlY(identifier, number)` | Return the first control point position on Y axis of a curve. ||
| | _identifier_ | Path name |
| | _number_ | Curve index |
| `CurvedMovement::OriginX(identifier, number)` | Return the origin position on X axis of a curve. ||
| | _identifier_ | Path name |
| | _number_ | Curve index |
| `CurvedMovement::OriginY(identifier, number)` | Return the origin position on Y axis of a curve. ||
| | _identifier_ | Path name |
| | _number_ | Curve index |
| `CurvedMovement::PathAngle(identifier, number)` | Return the direction angle of the path for a given length (in degree). ||
| | _identifier_ | Path name |
| | _number_ | Length on the path |
| `CurvedMovement::PathEndX(identifier)` | Return the displacement on X axis of the path end. ||
| | _identifier_ | Path name |
| `CurvedMovement::PathEndY(identifier)` | Return the displacement on Y axis of the path end. ||
| | _identifier_ | Path name |
| `CurvedMovement::PathLength(identifier)` | Return the length of the path. ||
| | _identifier_ | Path name |
| `CurvedMovement::PathX(identifier, number)` | Return the position on X axis of the path for a given length. ||
| | _identifier_ | Path name |
| | _number_ | Length on the path |
| `CurvedMovement::PathY(identifier, number)` | Return the position on Y axis of the path for a given length. ||
| | _identifier_ | Path name |
| | _number_ | Length on the path |
| `CurvedMovement::SecondControlX(identifier, number)` | Return the second control point position on X axis of a curve. ||
| | _identifier_ | Path name |
| | _number_ | Curve index |
| `CurvedMovement::SecondControlY(identifier, number)` | Return the second control point position on Y axis of a curve. ||
| | _identifier_ | Path name |
| | _number_ | Curve index |
| `CurvedMovement::SpeedScaleY(identifier)` | Return the speed scale on Y axis. This is used to change the view point of a path (top-dwon or isometry). ||
| | _identifier_ | Path name |
| `CurvedMovement::TargetX(identifier, number)` | Return the target position on X axis of a curve. ||
| | _identifier_ | Path name |
| | _number_ | Curve index |
| `CurvedMovement::TargetY(identifier, number)` | Return the target position on Y axis of a curve. ||
| | _identifier_ | Path name |
| | _number_ | Curve index |
| `CurvedMovement::ToSvg(identifier)` | Return the SVG commands of a path. ||
| | _identifier_ | Path name |

## Movement on a curve (speed-based) 

Move objects on curved paths at a given speed. 

### Behavior actions

**Accelerate**  
Make an object accelerate until it reaches a given speed.

**Accelerate during**  
Make an object accelerate to reaches a speed in a given amount of time.

**Draw the trajectory**  
Draw the object trajectory.

**Initialize the movement**  
Initialize the movement state.

**Follow a path**  
Change the path followed by an object.

**Follow a path to a position**  
Change the path followed by an object to reach a position.

**Position on the path**  
Change the length between the trajectory origin and the current position.

**Acceleration property**  
Change the property value for the acceleration.

**CurrentLength property**  
Change the property value for the currentLength.

**DebugLineStrokeWidth property**  
Change the property value for the debugLineStrokeWidth.

**DrawingElementIndex property**  
Change the property value for the drawingElementIndex.

**DrawingPathOriginX property**  
Change the property value for the drawingPathOriginX.

**DrawingPathOriginY property**  
Change the property value for the drawingPathOriginY.

**IsLookingBack property**  
Update the property value for "isLookingBack".

**PathAngle property**  
Change the property value for the pathAngle.

**PathName property**  
Change the property value for the pathName.

**PathOriginX property**  
Change the property value for the pathOriginX.

**PathOriginY property**  
Change the property value for the pathOriginY.

**PathScale property**  
Change the property value for the pathScale.

**PreviousSpeed property**  
Change the property value for the previousSpeed.

**RepetitionCount property**  
Change the property value for the repetitionCount.

**Rotate object property**  
Update the property value for "rotate object".

**Rotation offset property**  
Change the property value for the rotation offset.

**ShouldLoop property**  
Update the property value for "shouldLoop".

**Speed property**  
Change the property value for the speed.

**TargetedSpeed property**  
Change the property value for the targetedSpeed.

**Viewpoint property**  
Change the property value for the viewpoint.

**X property**  
Change the property value for the x.

**Y property**  
Change the property value for the y.

**Speed**  
Change the speed of the object.

**Path transformation**  
Change the transformation to apply to the path.

**Toggle IsLookingBack property**  
Toggle the property value for isLookingBack.  
If it was true, it will become false, and if it was false it will become true.

**Toggle Rotate object property**  
Toggle the property value for rotate object.  
If it was true, it will become false, and if it was false it will become true.

**Toggle ShouldLoop property**  
Toggle the property value for shouldLoop.  
If it was true, it will become false, and if it was false it will become true.

**Update position**  
Set the the object on the path according to the current length.

### Behavior conditions

**Can move further**  
Check if the object can still move in the current direction.

**Current length**  
Check if the length from the trajectory origin is lesser than a value.

**Reach an end**  
Check if the object has reached one of the 2 ends of the path.

**Reached path origin**  
Check if the object has reached the origin position of the path.

**Reached path target**  
Check if the object has reached the target position of the path.

**Position on the path**  
Compare the length between the trajectory origin and the current position.

**Acceleration property**  
Compare the property value for the acceleration.

**CurrentLength property**  
Compare the property value for the currentLength.

**DebugLineStrokeWidth property**  
Compare the property value for the debugLineStrokeWidth.

**DrawingElementIndex property**  
Compare the property value for the drawingElementIndex.

**DrawingPathOriginX property**  
Compare the property value for the drawingPathOriginX.

**DrawingPathOriginY property**  
Compare the property value for the drawingPathOriginY.

**IsLookingBack property**  
Check the property value for isLookingBack.

**PathAngle property**  
Compare the property value for the pathAngle.

**PathName property**  
Compare the property value for the pathName.

**PathOriginX property**  
Compare the property value for the pathOriginX.

**PathOriginY property**  
Compare the property value for the pathOriginY.

**PathScale property**  
Compare the property value for the pathScale.

**PreviousSpeed property**  
Compare the property value for the previousSpeed.

**RepetitionCount property**  
Compare the property value for the repetitionCount.

**Rotate object property**  
Check the property value for rotate object.

**Rotation offset property**  
Compare the property value for the rotation offset.

**ShouldLoop property**  
Check the property value for shouldLoop.

**Speed property**  
Compare the property value for the speed.

**TargetedSpeed property**  
Compare the property value for the targetedSpeed.

**Viewpoint property**  
Compare the property value for the viewpoint.

**X property**  
Compare the property value for the x.

**Y property**  
Compare the property value for the y.

**Speed**  
Compare the speed of the object.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.SpeedPathMovement::BackOrForthAngle()` | Return the angle to use when the object is going back or not. ||
| `Object.SpeedPathMovement::MovementAngle()` | Return the angle of movement on its path. ||
| `Object.SpeedPathMovement::PathEndX()` | Return the displacement on X axis of the path end. ||
| `Object.SpeedPathMovement::PathEndY()` | Return the displacement on Y axis of the path end. ||
| `Object.SpeedPathMovement::PathLength()` | Return the length of the path (one repetition only). ||
| `Object.SpeedPathMovement::PathSpeedScaleY()` | Return the speed scale on Y axis of the path. ||
| `Object.SpeedPathMovement::PositionOnPath()` | Return the length between the trajectory origin and the current position. ||
| `Object.SpeedPathMovement::Progress()` | Return the progress on the full path from 0 to 1, where 0 means the origin and 1 the end. ||
| `Object.SpeedPathMovement::PropertyAcceleration()` | Return the property value for the acceleration. ||
| `Object.SpeedPathMovement::PropertyCurrentLength()` | Return the property value for the currentLength. ||
| `Object.SpeedPathMovement::PropertyDebugLineStrokeWidth()` | Return the property value for the debugLineStrokeWidth. ||
| `Object.SpeedPathMovement::PropertyDrawingElementIndex()` | Return the property value for the drawingElementIndex. ||
| `Object.SpeedPathMovement::PropertyDrawingPathOriginX()` | Return the property value for the drawingPathOriginX. ||
| `Object.SpeedPathMovement::PropertyDrawingPathOriginY()` | Return the property value for the drawingPathOriginY. ||
| `Object.SpeedPathMovement::PropertyPathAngle()` | Return the property value for the pathAngle. ||
| `Object.SpeedPathMovement::PropertyPathName()` | Return the property value for the pathName. ||
| `Object.SpeedPathMovement::PropertyPathOriginX()` | Return the property value for the pathOriginX. ||
| `Object.SpeedPathMovement::PropertyPathOriginY()` | Return the property value for the pathOriginY. ||
| `Object.SpeedPathMovement::PropertyPathScale()` | Return the property value for the pathScale. ||
| `Object.SpeedPathMovement::PropertyPreviousSpeed()` | Return the property value for the previousSpeed. ||
| `Object.SpeedPathMovement::PropertyRepetitionCount()` | Return the property value for the repetitionCount. ||
| `Object.SpeedPathMovement::PropertyRotationOffset()` | Return the property value for the rotation offset. ||
| `Object.SpeedPathMovement::PropertySpeed()` | Return the property value for the speed. ||
| `Object.SpeedPathMovement::PropertyTargetedSpeed()` | Return the property value for the targetedSpeed. ||
| `Object.SpeedPathMovement::PropertyViewpoint()` | Return the property value for the viewpoint. ||
| `Object.SpeedPathMovement::PropertyX()` | Return the property value for the x. ||
| `Object.SpeedPathMovement::PropertyY()` | Return the property value for the y. ||
| `Object.SpeedPathMovement::RepeatedPathPosition()` | Return the position on one repeated path. ||
| `Object.SpeedPathMovement::RepetitionDone()` | Return the number of repetitions between the current position and the origin. ||
| `Object.SpeedPathMovement::Speed()` | Return the speed of the object. ||
| `Object.SpeedPathMovement::TotalLength()` | Return the length of the complete trajectory (without looping). ||

## Movement on a curve (duration-based) 

Move objects on curved paths in a given duration and tween easing function. 

### Behavior actions

**Draw the trajectory**  
Draw the object trajectory.

**Initialize the movement**  
Initialize the movement state.

**Move on path**  
Move the object by following a path.

**Move back and forth**  
Move the object by following a path and go back.

**Move on path to a position**  
Move the object to a position by following a path.

**Move back and forth to a position**  
Move the object to a position by following a path and go back.

**DebugLineStrokeWidth property**  
Change the property value for the debugLineStrokeWidth.

**DrawingElementIndex property**  
Change the property value for the drawingElementIndex.

**DrawingPathOriginX property**  
Change the property value for the drawingPathOriginX.

**DrawingPathOriginY property**  
Change the property value for the drawingPathOriginY.

**Duration property**  
Change the property value for the duration.

**Easing property**  
Change the property value for the easing.

**Flip on X to go back property**  
Update the property value for "flip on X to go back".

**Flip on Y to go back property**  
Update the property value for "flip on Y to go back".

**IsGoingBack property**  
Update the property value for "isGoingBack".

**Origin property**  
Change the property value for the origin.

**PathAngle property**  
Change the property value for the pathAngle.

**PathName property**  
Change the property value for the pathName.

**PathOriginX property**  
Change the property value for the pathOriginX.

**PathOriginY property**  
Change the property value for the pathOriginY.

**PathScale property**  
Change the property value for the pathScale.

**Pause duration before going back property**  
Change the property value for the pause duration before going back.

**RepetitionCount property**  
Change the property value for the repetitionCount.

**RepetitionDoneCount property**  
Change the property value for the repetitionDoneCount.

**Rotate object property**  
Update the property value for "rotate object".

**Rotation offset property**  
Change the property value for the rotation offset.

**ShouldGoBack property**  
Update the property value for "shouldGoBack".

**ShouldLoop property**  
Update the property value for "shouldLoop".

**Speed scale property**  
Change the property value for the speed scale.

**Target property**  
Change the property value for the target.

**Viewpoint property**  
Change the property value for the viewpoint.

**X property**  
Change the property value for the x.

**Y property**  
Change the property value for the y.

**Path transformation**  
Change the transformation to apply to the path.

**Toggle Flip on X to go back property**  
Toggle the property value for flip on X to go back.  
If it was true, it will become false, and if it was false it will become true.

**Toggle Flip on Y to go back property**  
Toggle the property value for flip on Y to go back.  
If it was true, it will become false, and if it was false it will become true.

**Toggle IsGoingBack property**  
Toggle the property value for isGoingBack.  
If it was true, it will become false, and if it was false it will become true.

**Toggle Rotate object property**  
Toggle the property value for rotate object.  
If it was true, it will become false, and if it was false it will become true.

**Toggle ShouldGoBack property**  
Toggle the property value for shouldGoBack.  
If it was true, it will become false, and if it was false it will become true.

**Toggle ShouldLoop property**  
Toggle the property value for shouldLoop.  
If it was true, it will become false, and if it was false it will become true.

**Update position**  
Set the the object on the path according to the current length.

### Behavior conditions

**Finished to move**  
Check if the object has finished to move on the path.

**Reached an end**  
Check if the object has reached one of the 2 ends of the path.

**DebugLineStrokeWidth property**  
Compare the property value for the debugLineStrokeWidth.

**DrawingElementIndex property**  
Compare the property value for the drawingElementIndex.

**DrawingPathOriginX property**  
Compare the property value for the drawingPathOriginX.

**DrawingPathOriginY property**  
Compare the property value for the drawingPathOriginY.

**Duration property**  
Compare the property value for the duration.

**Easing property**  
Compare the property value for the easing.

**Flip on X to go back property**  
Check the property value for flip on X to go back.

**Flip on Y to go back property**  
Check the property value for flip on Y to go back.

**IsGoingBack property**  
Check the property value for isGoingBack.

**Origin property**  
Compare the property value for the origin.

**PathAngle property**  
Compare the property value for the pathAngle.

**PathName property**  
Compare the property value for the pathName.

**PathOriginX property**  
Compare the property value for the pathOriginX.

**PathOriginY property**  
Compare the property value for the pathOriginY.

**PathScale property**  
Compare the property value for the pathScale.

**Pause duration before going back property**  
Compare the property value for the pause duration before going back.

**RepetitionCount property**  
Compare the property value for the repetitionCount.

**RepetitionDoneCount property**  
Compare the property value for the repetitionDoneCount.

**Rotate object property**  
Check the property value for rotate object.

**Rotation offset property**  
Compare the property value for the rotation offset.

**ShouldGoBack property**  
Check the property value for shouldGoBack.

**ShouldLoop property**  
Check the property value for shouldLoop.

**Speed scale property**  
Compare the property value for the speed scale.

**Target property**  
Compare the property value for the target.

**Viewpoint property**  
Compare the property value for the viewpoint.

**X property**  
Compare the property value for the x.

**Y property**  
Compare the property value for the y.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.TweenPathMovement::BackOrForthAngle()` | Return the angle to use when the object is going back or not. ||
| `Object.TweenPathMovement::MovementAngle()` | Return the angle of movement on its path. ||
| `Object.TweenPathMovement::PathEndX()` | Return the displacement on X axis of the path end. ||
| `Object.TweenPathMovement::PathEndY()` | Return the displacement on Y axis of the path end. ||
| `Object.TweenPathMovement::PathLength()` | Return the length of the path (one repetition only). ||
| `Object.TweenPathMovement::PathSpeedScaleY()` | Return the speed scale on Y axis of the path. ||
| `Object.TweenPathMovement::Progress()` | Return the progress on the full path from 0 to 1, where 0 means the origin and 1 the end. ||
| `Object.TweenPathMovement::PropertyDebugLineStrokeWidth()` | Return the property value for the debugLineStrokeWidth. ||
| `Object.TweenPathMovement::PropertyDrawingElementIndex()` | Return the property value for the drawingElementIndex. ||
| `Object.TweenPathMovement::PropertyDrawingPathOriginX()` | Return the property value for the drawingPathOriginX. ||
| `Object.TweenPathMovement::PropertyDrawingPathOriginY()` | Return the property value for the drawingPathOriginY. ||
| `Object.TweenPathMovement::PropertyDuration()` | Return the property value for the duration. ||
| `Object.TweenPathMovement::PropertyEasing()` | Return the property value for the easing. ||
| `Object.TweenPathMovement::PropertyOrigin()` | Return the property value for the origin. ||
| `Object.TweenPathMovement::PropertyPathAngle()` | Return the property value for the pathAngle. ||
| `Object.TweenPathMovement::PropertyPathName()` | Return the property value for the pathName. ||
| `Object.TweenPathMovement::PropertyPathOriginX()` | Return the property value for the pathOriginX. ||
| `Object.TweenPathMovement::PropertyPathOriginY()` | Return the property value for the pathOriginY. ||
| `Object.TweenPathMovement::PropertyPathScale()` | Return the property value for the pathScale. ||
| `Object.TweenPathMovement::PropertyPauseDurationBeforeGoingBack()` | Return the property value for the pause duration before going back. ||
| `Object.TweenPathMovement::PropertyRepetitionCount()` | Return the property value for the repetitionCount. ||
| `Object.TweenPathMovement::PropertyRepetitionDoneCount()` | Return the property value for the repetitionDoneCount. ||
| `Object.TweenPathMovement::PropertyRotationOffset()` | Return the property value for the rotation offset. ||
| `Object.TweenPathMovement::PropertySpeedScale()` | Return the property value for the speed scale. ||
| `Object.TweenPathMovement::PropertyTarget()` | Return the property value for the target. ||
| `Object.TweenPathMovement::PropertyViewpoint()` | Return the property value for the viewpoint. ||
| `Object.TweenPathMovement::PropertyX()` | Return the property value for the x. ||
| `Object.TweenPathMovement::PropertyY()` | Return the property value for the y. ||
| `Object.TweenPathMovement::RepeatedPathPosition()` | Return the position on one repeated path. ||
| `Object.TweenPathMovement::RepetitionDone()` | Return the number of repetitions between the current position and the origin. ||

---

*This page is an auto-generated reference page about the **Curved movement** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).