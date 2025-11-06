# Values of multiple objects

<img src="https://resources.gdevelop-app.com/assets/Icons/dots-hexagon.svg" class="extension-icon"></img>
Values of picked object instances (including position, size, force and angle).

**Authors and contributors** to this experimental extension: [VictrisGames](https://gd.games/VictrisGames), [Bouh](https://gd.games/Bouh), [Uiles](https://gd.games/Uiles).

---

Provides values based on picked object instances: minimum or average X or Y position, center position, width, height, 2D Z-order.  
Useful for camera tracking, flocking behaviors, and more.

An example shows how to use the extension ([open the Itch.io page](https://victrisgames.itch.io/values-of-multiple-objects)).

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `ValuesOfMultipleObjects::AbsoluteCenterOfObjectsX(object)` | X center point (absolute) of picked object instances. ||
| | _👾 Object_ | Objects Objects that will be used to calculate their center point  |
| `ValuesOfMultipleObjects::AbsoluteCenterOfObjectsY(object)` | Y center point (absolute) of picked object instances. ||
| | _👾 Object_ | Objects Objects that will be used to calculate their center point  |
| `ValuesOfMultipleObjects::AverageAngle(object)` | Average angle of rotation of picked object instances. ||
| | _👾 Object_ | Objects |
| `ValuesOfMultipleObjects::AverageCenterOfObjectsX(object)` | X center point (average) of picked object instances. ||
| | _👾 Object_ | Objects Objects that will be used to calculate their center point  |
| `ValuesOfMultipleObjects::AverageCenterOfObjectsY(object)` | Y center point (average) of picked object instances. ||
| | _👾 Object_ | Objects Objects that will be used to calculate their center point  |
| `ValuesOfMultipleObjects::AverageForceX(object)` | Average horizontal force (X) of picked object instances. ||
| | _👾 Object_ | Objects |
| `ValuesOfMultipleObjects::AverageForceY(object)` | Average vertical force (Y) of picked object instances. ||
| | _👾 Object_ | Objects |
| `ValuesOfMultipleObjects::AverageHeight(object)` | Average height of picked object instances. ||
| | _👾 Object_ | Objects |
| `ValuesOfMultipleObjects::AverageWidth(object)` | Average width of picked object instances. ||
| | _👾 Object_ | Objects |
| `ValuesOfMultipleObjects::AverageZOrder(object)` | Average Z order of picked object instances. ||
| | _👾 Object_ | objects |
| `ValuesOfMultipleObjects::MaxHeight(object)` | Max object height of picked object instances. ||
| | _👾 Object_ | Objects |
| `ValuesOfMultipleObjects::MaxWidth(object)` | Max object width of picked object instances. ||
| | _👾 Object_ | Objects |
| `ValuesOfMultipleObjects::MaxX(object)` | Maximum X position of picked object instances (using AABB of objects). ||
| | _👾 Object_ | objects |
| `ValuesOfMultipleObjects::MaxY(object)` | Maximum Y position of picked object instances (using AABB of objects). ||
| | _👾 Object_ | objects |
| `ValuesOfMultipleObjects::MaxZOrder(object)` | Maximum Z order of picked object instances. ||
| | _👾 Object_ | objects |
| `ValuesOfMultipleObjects::MinHeight(object)` | Min object height of picked object instances. ||
| | _👾 Object_ | Objects |
| `ValuesOfMultipleObjects::MinWidth(object)` | Min object width of picked object instances. ||
| | _👾 Object_ | Objects |
| `ValuesOfMultipleObjects::MinX(object)` | Minimum X position of picked object instances (using AABB of objects). ||
| | _👾 Object_ | objects |
| `ValuesOfMultipleObjects::MinY(object)` | Minimum Y position of picked object instances (using AABB of objects). ||
| | _👾 Object_ | objects |
| `ValuesOfMultipleObjects::MinZOrder(object)` | Minimum Z order of picked object instances. ||
| | _👾 Object_ | objects |


---

*This page is an auto-generated reference page about the **Values of multiple objects** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).