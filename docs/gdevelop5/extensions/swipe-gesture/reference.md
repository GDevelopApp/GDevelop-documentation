---
title: Swipe Gesture
---
# Swipe Gesture

![](https://resources.gdevelop-app.com/assets/Icons/gesture-swipe-right.svg)
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

---

!!! tip

    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

*This page is an auto-generated reference page about the **Swipe Gesture** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).