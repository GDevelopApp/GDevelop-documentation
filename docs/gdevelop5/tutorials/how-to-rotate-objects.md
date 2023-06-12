---
title: How to rotate objects
---
# How to rotate objects

## Rotate an object to face a direction

### Rotate an object instantly

An object can be instantly rotated with the **Angle** action. The action needs an angle value. This value can be calculated with the expression:

- **Object.AngleToObject(object)** to face an object
- **Object.AngleToPosition(x, y)** to face a position.

### Rotate an object over time

Objects can be rotated at a given speed using the action **Rotate toward position**. Its position parameters can be set to `Object.X()` and `Object.Y()` to turn in the direction of an object.

Object can also be rotated to a given angle with the **Rotate toward angle**. The angle can be `0` to face left, `90` to face down, `180` to face right, `270` to face up or any other value.

![](/gdevelop5/objects/gdevelop_co.png)

The [tween behavior](/gdevelop5/behaviors/tween) also allows to rotate objects. It has shapes of acceleration that can give more feeling to the rotation. It works well with still targets.

To follow a moving target and still give a smooth feeling to the rotation, the **lerpAngle(start angle, destination angle, weight)** expression can be used. For instance to follow an object, the **Angle** action can be used with the expression `lerpAngle(Object.Angle(), Object.AngleToObject(OtherObject), 5 * TimeDelta())`.

!!! note

    The [TimeDelta](/gdevelop5/events#timedelta) expression allows the rotation speed to be the same on any device. It's needed when using `lerpAngle` because we evaluate the angle ourselves but it's not needed for actions like **Rotate toward position** that ask a speed.

Some behaviors like the [Top-down movement](/gdevelop5/behaviors/topdown) or the [Pathfinding](/gdevelop5/behaviors/pathfinding) can be setup to rotate objects to face the movement angle automatically. It's usually a **Rotate** checkbox.

## Move an object on a circle

The [Ellipse movement behavior](/gdevelop5/extensions/ellipse-movement/reference) makes objects move in a circle. It's a community extension that can be [installed](/gdevelop5/extensions/search).

## Compare angles

Angles could be compared as any other number but we often want to consider 90° and -270° as the same for instance. The **AngleDifference(number, number)** expression give the difference using the shortest way. To go back to the previous example, `AngleDifference(90, -270)` equals `0`. The `Compare two numbers` condition can be used with `AngleDifference` to check if 2 angles are the same.

!!! note

    It's usually a good practice to give some tolerance with an expression like `abs(AngleDifference(90, -270))` on one side and `5` to check the angle at + or - 5°.

Most movement behaviors have a **Angle of movement** condition that takes an angle and a tolerance directly.