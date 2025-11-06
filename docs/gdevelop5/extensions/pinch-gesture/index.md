# Pinching gesture

<img src="https://resources.gdevelop-app.com/assets/Icons/gesture-pinch.svg" class="extension-icon"></img>
Move the camera or objects with pinching gestures.

**Authors and contributors** to this experimental extension: [D8H](https://gd.games/D8H).

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

??? quote "See parameters & details"

    - Parameter 1 (❓ Yes or No): Enable camera pinch

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PinchGesture::EnableCameraPinch`.

**Camera pinch constraints**  
Change the camera pinch constraint.

??? quote "See parameters & details"

    - Parameter 1 (🔤 String): Constraint (one of: "No constraint", "Zoom only", "Rotation only", "Zoom and rotation only")

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PinchGesture::SetCameraPinchConstraint`.

**Camera pinch layer**  
Choose the layer to move with pinch gestures.

??? quote "See parameters & details"

    - Parameter 1: 🔤 Layer name (String)

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PinchGesture::SetCameraPinchLayer`.


## Conditions

**Camera pinch is enabled**  
Check if camera pinch is enabled.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PinchGesture::IsCameraPinchEnabled`.

**Touch is pinching**  
Check if a touch is pinching, if 2 touches are pressed.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PinchGesture::IsPinching`.


## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `PinchGesture::BeginningCenterX(string)` | Return the X position of the pinch center at the beginning of the gesture. ||
| | _🔤 String_ | Layer |
| `PinchGesture::BeginningCenterY(string)` | Return the Y position of the pinch center at the beginning of the gesture. ||
| | _🔤 String_ | Layer |
| `PinchGesture::CurrentCenterX(string)` | Return the X position of the pinch center. ||
| | _🔤 String_ | Layer |
| `PinchGesture::CurrentCenterY(string)` | Return the Y position of the pinch center. ||
| | _🔤 String_ | Layer |
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

### Behavior properties

- **Lock object size** (🔘 Boolean). Default value is `false`.

??? quote "See internal technical details"


    - **Lock object size** is stored as `LockSize` (Boolean). Default value is `false`.
    > This behavior must be used on an object also having a behavior with type "ResizableCapability::ResizableBehavior". This is stored on property `Resizable`.


### Behavior actions

**Abort pinching**  
Abort the pinching of this object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PinchGesture::Pichable::AbortPinching`.


### Behavior conditions

**Is being pinched**  
Check if the object is being pinched.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PinchGesture::Pichable::IsPinched`.


_No expressions for this behavior._



---

*This page is an auto-generated reference page about the **Pinching gesture** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).