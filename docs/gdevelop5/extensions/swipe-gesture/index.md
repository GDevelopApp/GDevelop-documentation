# Swipe Gesture

<img src="https://resources.gdevelop-app.com/assets/Icons/gesture-swipe-right.svg" class="extension-icon"></img>
Detect swipe gestures based on their distance and duration.

**Authors and contributors** to this experimental extension: [E1e5en](https://gd.games/E1e5en), [VictrisGames](https://gd.games/VictrisGames).

---

Use the "Enable swipe detection" action at the beginning of your scene.

Note: This extension does NOT support multitouch.

Expressions:


- `StartX`, `StartY`: Position where the swipe started
- `EndX`, `EndY`: Position where the swipe ended
- `Distance`: Length of the swipe, in pixels
- `DistanceX`, `DistanceY`: Distance the swipe moved in each axis
- `Angle`: Direction the swipe moved towards. Range (-180, 180)
- `Layer`: Layer used to detect swipe gestures

Conditions:


- `Is swipe detection enabled`
- `Is swipe in progress?` - A swipe starts when the mouse click or touch begins
- `Has swipe just ended?` - When the mouse or touch is released, this condition is true for one frame 
- `Swipe moved in a direction (4-way movement)` - the direction value for 4 sides (UP, DOWN, LEFT, RIGHT). In this case, the “circle” is divided into 4 segments of 90 degrees
- `Swipe moved in a direction (8-way movement)` - the direction value for 8 sides (UP, DOWN, LEFT, RIGHT, UP-LEFT, UP-RIGHT, DOWN-LEFT, DOWN-RIGHT). In this case, the “circle” is divided into 8 segments of 45 degrees.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Draw swipe gesture**  
Draw a line that indicates the current swipe gesture.  Edit "Outline Size" of the shape painter to adjust the thickness of the line.

??? quote "See parameters"

    - Parameter 1 (👾 Object): Shape painter used to draw swipe

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

**Enable (or disable) swipe gesture detection**  
Enable (or disable) swipe gesture detection.

??? quote "See parameters"

    - Parameter 1 (❓ True or False): Enable swipe detection

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

**Layer used to detect swipe gestures**  
Change the Layer used to detect swipe gestures.

??? quote "See parameters"

    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔤 Layer name (String)): Value

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

## Conditions

**Swipe angle (degrees)**  
Compare Swipe angle (degrees).

??? quote "See parameters"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

**Swipe distance (pixels)**  
Compare Swipe distance (pixels).

??? quote "See parameters"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

**Swipe distance in horizontal direction (pixels)**  
Compare Swipe distance in horizontal direction (pixels).

??? quote "See parameters"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

**Swipe distance in vertical direction (pixels)**  
Compare Swipe distance in vertical direction (pixels).

??? quote "See parameters"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

**Swipe duration (seconds)**  
Compare Swipe duration (seconds).

??? quote "See parameters"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

**End point of the swipe X position**  
Compare End point of the swipe X position.

??? quote "See parameters"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

**End point of the swipe Y position**  
Compare End point of the swipe Y position.

??? quote "See parameters"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

**Swipe just ended**  
Check if the swipe has just ended.

??? quote "See parameters"



    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

**Is swipe detection enabled**  
Check if swipe detection is enabled.

??? quote "See parameters"



    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

**Swipe is in progress**  
Check if a swipe is currently in progress.

??? quote "See parameters"



    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

**Layer used to detect swipe gestures**  
Compare the Layer used to detect swipe gestures.

??? quote "See parameters"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔤 Layer name (String)): Value to compare

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

**Start point of the swipe X position**  
Compare Start point of the swipe X position.

??? quote "See parameters"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

**Start point of the swipe Y position**  
Compare Start point of the swipe Y position.

??? quote "See parameters"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

**Swipe moved in a direction (4-way movement)**  
Check if swipe moved in a given direction.

??? quote "See parameters"

    - Parameter 1 (🔤 String): Direction (one of: "Up", "Down", "Left", "Right")

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

**Swipe moved in a direction (8-way movement)**  
Check if swipe moved in a given direction.

??? quote "See parameters"

    - Parameter 1 (🔤 String): Direction (one of: "Up", "Down", "Left", "Right", "UpLeft", "UpRight", "DownLeft", "DownRight")

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `SwipeGesture::Angle()` | Return Swipe angle (degrees). ||
| `SwipeGesture::Distance()` | Return Swipe distance (pixels). ||
| `SwipeGesture::DistanceX()` | Return Swipe distance in horizontal direction (pixels). ||
| `SwipeGesture::DistanceY()` | Return Swipe distance in vertical direction (pixels). ||
| `SwipeGesture::Duration()` | Return Swipe duration (seconds). ||
| `SwipeGesture::EndX()` | Return End point of the swipe X position. ||
| `SwipeGesture::EndY()` | Return End point of the swipe Y position. ||
| `SwipeGesture::Layer()` | Return the Layer used to detect swipe gestures. ||
| `SwipeGesture::StartX()` | Return Start point of the swipe X position. ||
| `SwipeGesture::StartY()` | Return Start point of the swipe Y position. ||


---

*This page is an auto-generated reference page about the **Swipe Gesture** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).