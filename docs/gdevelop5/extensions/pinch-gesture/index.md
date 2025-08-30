# Pinching gesture

<img src="https://resources.gdevelop-app.com/assets/Icons/gesture-pinch.svg" class="extension-icon"></img>
Move the camera or objects with pinching gestures.

**Authors and contributors** to this community extension: [D8H](https://gd.games/D8H).

---

This extension allows to:

- Move, rotate and/or zoom the camera according to pinch gestures
- Move, rotate and optionally scale objects according to pinch gestures
- Handle more specific needs with various expressions

Limitations:

- Only one pinching gesture is detected at a time

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Enable or disable camera pinch**  
Enable or disable camera pinch.

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
| `PinchGesture::InversedX(number, number, layer name)` | Return the original X position of a point before the pinch gesture. ||
| | _🔢 Number_ | Position X after the pinch |
| | _🔢 Number_ | Position Y after the pinch |
| | _🔤 Layer name (String)_ | Layer |
| `PinchGesture::InversedY(number, number, layer name)` | Return the new position on the Y axis of a point after the pinch gesture. ||
| | _🔢 Number_ | Position X after the pinch |
| | _🔢 Number_ | Position Y after the pinch |
| | _🔤 Layer name (String)_ | Layer |
| `PinchGesture::Rotation()` | Return the rotation of the pinch gesture from its beginning (in degrees). ||
| `PinchGesture::Scaling()` | Return the scaling of the pinch gesture from its beginning. ||
| `PinchGesture::TransformedX(number, number, layer name)` | Return the new X position of a point after the pinch gesture. ||
| | _🔢 Number_ | Position X before the pinch |
| | _🔢 Number_ | Position Y before the pinch |
| | _🔤 Layer name (String)_ | Layer |
| `PinchGesture::TransformedY(number, number, layer name)` | Return the new Y position of a point after the pinch gesture. ||
| | _🔢 Number_ | Position X before the pinch |
| | _🔢 Number_ | Position Y before the pinch |
| | _🔤 Layer name (String)_ | Layer |
| `PinchGesture::TranslationX(layer name)` | Return the horizontal translation of the pinch gesture from its beginning. ||
| | _🔤 Layer name (String)_ | Layer |
| `PinchGesture::TranslationY(layer name)` | Return the vertical translation of the pinch gesture from its beginning. ||
| | _🔤 Layer name (String)_ | Layer |

## Pinchable object 

Move objects by holding 2 touches on them. 

### Behavior actions

**Abort pinching**  
Abort the pinching of this object.

### Behavior conditions

**Is being pinched**  
Check if the object is being pinched.

_No expressions for this behavior._



---

*This page is an auto-generated reference page about the **Pinching gesture** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).