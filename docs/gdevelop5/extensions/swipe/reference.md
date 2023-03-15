---
title: Swipe Detector
---
# Swipe Detector

![](https://resources.gdevelop-app.com/assets/Icons/gesture-swipe-right.svg)
A behavior that detects a swipe being done on the screen, and that gives you information about it, including the direction and the length.

**Authors and contributors** to this community extension: [E1e5en](https://liluo.io/E1e5en).

---

A behavior that detects a swipe being done on the screen, and that gives you information about it, including the direction and the length.

To begin, attach this behavior to *any object*.

Settings are :

- Time (s) - duration of the swipe (default value is 0.2s);
- Min Length (px) - the minimum length that the swipe must have to be considered (default value 100 px).

Use **the condition to check if a swipe** was done. Then you can use **the expressions** to get the swipe values:

- `StartPointX`, `StartPointY` (Expression) - coordinates of the point where the swipe starts,
- `EndPointX`, `EndPointY` (Expression) - coordinates of the swipe end point,
- `Length` (Expression) - the length of the swipe, in pixels,
- `DirectionX`, `DirectionY` (Expression) - values ​​of the swipe direction vector,
- `DirectionNormX`, `DirectionNormY` (Expression) - values ​​of the normalized vector of the swipe direction,
- `Angle` (Expression) - the value of the angle of the direction vector to the zero angle in range (-180, 180),
- `Average4Direction` (String Expression) - the direction value for 4 sides (UP, DOWN, LEFT, RIGHT). In this case, the “circle” is divided into 4 segments of 90 degrees,
- `Average8Direction` (String Expression) - the direction value for 8 sides (UP, DOWN, LEFT, RIGHT, UP-LEFT, UP-RIGHT, DOWN-LEFT, DOWN-RIGHT). In this case, the “circle” is divided into 8 segments of 45 degrees.

---
*This page is an auto-generated reference page about the **Swipe Detector** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).