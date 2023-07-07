# Swipe Gesture

<img src="https://resources.gdevelop-app.com/assets/Icons/gesture-swipe-right.svg" class="extension-icon"></img>
Detect swipe gestures based on their distance and duration.

**Authors and contributors** to this community extension: [E1e5en](https://gd.games/E1e5en), [VictrisGames](https://gd.games/VictrisGames).

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

**Enable (or disable) swipe gesture detection**  
Enable (or disable) swipe gesture detection.

**Layer used to detect swipe gestures**  
Change the Layer used to detect swipe gestures.

## Conditions

**Swipe angle (degrees)**  
Compare Swipe angle (degrees).

**Swipe distance (pixels)**  
Compare Swipe distance (pixels).

**Swipe distance in horizontal direction (pixels)**  
Compare Swipe distance in horizontal direction (pixels).

**Swipe distance in vertical direction (pixels)**  
Compare Swipe distance in vertical direction (pixels).

**Swipe duration (seconds)**  
Compare Swipe duration (seconds).

**End point of the swipe X position**  
Compare End point of the swipe X position.

**End point of the swipe Y position**  
Compare End point of the swipe Y position.

**Swipe just ended**  
Check if the swipe has just ended.

**Is swipe detection enabled**  
Check if swipe detection is enabled.

**Swipe is in progress**  
Check if a swipe is currently in progress.

**Layer used to detect swipe gestures**  
Compare the Layer used to detect swipe gestures.

**Start point of the swipe X position**  
Compare Start point of the swipe X position.

**Start point of the swipe Y position**  
Compare Start point of the swipe Y position.

**Swipe moved in a direction (4-way movement)**  
Check if swipe moved in a given direction.

**Swipe moved in a direction (8-way movement)**  
Check if swipe moved in a given direction.

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