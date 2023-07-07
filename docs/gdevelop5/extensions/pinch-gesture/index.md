# Pinching gesture

<img src="https://resources.gdevelop-app.com/assets/Icons/gesture-pinch.svg" class="extension-icon"></img>
Move the camera or objects with pinching gestures.

**Authors and contributors** to this community extension: [D8H](https://gd.games/D8H).

---

This extension allows to:

* Move, rotate and/or zoom the camera according to pinch gestures
* Move, rotate and optionally scale objects according to pinch gestures
* Handle more specific needs with various expressions

Limitations:

* Only one pinching gesture is detected at a time

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Enable or disable camera pinch**  
Enable or disable camera pinch.

**Pinch camera**  
Pinch the camera of a layer.

**Camera pinch constraints**  
Change the camera pinch constraint.

**Camera pinch layer**  
Choose the layer to move with pinch gestures.

## Conditions

**Camera pinch is enabled**  
Check if camera pinch is enabled.

**Touch is pinching**  
Check if a touch is pinching, if 2 touches are pressed.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `PinchGesture::BeginningCenterX(string)` | Return the X position of the pinch center at the beginning of the gesture. ||
| | _string_ | Layer |
| `PinchGesture::BeginningCenterY(string)` | Return the Y position of the pinch center at the beginning of the gesture. ||
| | _string_ | Layer |
| `PinchGesture::CurrentCenterX(string)` | Return the X position of the pinch center. ||
| | _string_ | Layer |
| `PinchGesture::CurrentCenterY(string)` | Return the Y position of the pinch center. ||
| | _string_ | Layer |
| `PinchGesture::InversedX(number, number, layer)` | Return the original X position of a point before the pinch gesture. ||
| | _number_ | Position X after the pinch |
| | _number_ | Position Y after the pinch |
| | _layer_ | Layer |
| `PinchGesture::InversedY(number, number, layer)` | Return the new position on the Y axis of a point after the pinch gesture. ||
| | _number_ | Position X after the pinch |
| | _number_ | Position Y after the pinch |
| | _layer_ | Layer |
| `PinchGesture::RotatedVectorX(number, number, number)` | Return the X coordinate of a vector after a rotation ||
| | _number_ | Vector X |
| | _number_ | Vector Y |
| | _number_ | Angle (in degrees) |
| `PinchGesture::RotatedVectorY(number, number, number)` | Return the Y coordinate of a vector after a rotation ||
| | _number_ | Vector X |
| | _number_ | Vector Y |
| | _number_ | Angle (in degrees) |
| `PinchGesture::Rotation()` | Return the rotation of the pinch gesture from its beginning (in degrees). ||
| `PinchGesture::Scaling()` | Return the scaling of the pinch gesture from its beginning. ||
| `PinchGesture::TouchCanvasX(number)` | Return the touch X on the canvas. ||
| | _number_ | Touch identifier |
| `PinchGesture::TouchCanvasY(number)` | Return the touch Y on the canvas. ||
| | _number_ | Touch identifier |
| `PinchGesture::TransformToCanvasX(number, number, layer)` | Return the X coordinate of a position transformed from the scene to the canvas according to a layer. ||
| | _number_ | Position X |
| | _number_ | Position Y |
| | _layer_ | Layer |
| `PinchGesture::TransformToCanvasY(number, number, layer)` | Return the Y coordinate of a position transformed from the scene to the canvas according to a layer. ||
| | _number_ | Position X |
| | _number_ | Position Y |
| | _layer_ | Layer |
| `PinchGesture::TransformToSceneX(number, number, layer)` | Return the X coordinate of a position transformed from the canvas to the scene according to a layer. ||
| | _number_ | Position X |
| | _number_ | Position Y |
| | _layer_ | Layer |
| `PinchGesture::TransformToSceneY(number, number, layer)` | Return the Y coordinate of a position transformed from the canvas to the scene according to a layer. ||
| | _number_ | Position X |
| | _number_ | Position Y |
| | _layer_ | Layer |
| `PinchGesture::TransformedX(number, number, layer)` | Return the new X position of a point after the pinch gesture. ||
| | _number_ | Position X before the pinch |
| | _number_ | Position Y before the pinch |
| | _layer_ | Layer |
| `PinchGesture::TransformedY(number, number, layer)` | Return the new Y position of a point after the pinch gesture. ||
| | _number_ | Position X before the pinch |
| | _number_ | Position Y before the pinch |
| | _layer_ | Layer |
| `PinchGesture::TranslationX(layer)` | Return the horizontal translation of the pinch gesture from its beginning. ||
| | _layer_ | Layer |
| `PinchGesture::TranslationY(layer)` | Return the vertical translation of the pinch gesture from its beginning. ||
| | _layer_ | Layer |

## Pinchable object 

Move objects by holding 2 touches on them. 

### Behavior actions

**Abort pinching**  
Abort the pinching of this object.

**BeginningAngle property**  
Change the property value for the beginningAngle.

**BeginningCenterX property**  
Change the property value for the beginningCenterX.

**BeginningCenterY property**  
Change the property value for the beginningCenterY.

**BeginningHeight property**  
Change the property value for the beginningHeight.

**BeginningWidth property**  
Change the property value for the beginningWidth.

**IsCandidate property**  
Update the property value for "isCandidate".

**IsPinched property**  
Update the property value for "isPinched".

**Lock object size property**  
Update the property value for "lock object size".

**Toggle IsCandidate property**  
Toggle the property value for isCandidate.  
If it was true, it will become false, and if it was false it will become true.

**Toggle IsPinched property**  
Toggle the property value for isPinched.  
If it was true, it will become false, and if it was false it will become true.

**Toggle Lock object size property**  
Toggle the property value for lock object size.  
If it was true, it will become false, and if it was false it will become true.

### Behavior conditions

**Is being pinched**  
Check if the object is being pinched.

**BeginningAngle property**  
Compare the property value for the beginningAngle.

**BeginningCenterX property**  
Compare the property value for the beginningCenterX.

**BeginningCenterY property**  
Compare the property value for the beginningCenterY.

**BeginningHeight property**  
Compare the property value for the beginningHeight.

**BeginningWidth property**  
Compare the property value for the beginningWidth.

**IsCandidate property**  
Check the property value for isCandidate.

**IsPinched property**  
Check the property value for isPinched.

**Lock object size property**  
Check the property value for lock object size.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.Pichable::PropertyBeginningAngle()` | Return the property value for the beginningAngle. ||
| `Object.Pichable::PropertyBeginningCenterX()` | Return the property value for the beginningCenterX. ||
| `Object.Pichable::PropertyBeginningCenterY()` | Return the property value for the beginningCenterY. ||
| `Object.Pichable::PropertyBeginningHeight()` | Return the property value for the beginningHeight. ||
| `Object.Pichable::PropertyBeginningWidth()` | Return the property value for the beginningWidth. ||

---

*This page is an auto-generated reference page about the **Pinching gesture** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).