# Draw shock wave effect

<img src="https://resources.gdevelop-app.com/assets/Icons/octagram-outline.svg" class="extension-icon"></img>
Will allow you to draw shock wave effects.

**Authors and contributors** to this community extension: [Alios](https://gd.games/Alios).

---

This behavior must be assigned to a shape painter object.
The user will have state parameters (Start and End) like the particle emitter object, which are :


- Type(Fill or Line)
- The color transition (Start / End).
- The opacity transition (Start / End).
- The transition of angle (Start / End).
- The transition of the radius of the explosion (Start / End).
- The transition of the contour size (Start / End).
- The duration of the propagation.

The user can modify the values according to his needs.

You can modify the value of the object just after the creation of the object in the event sheet (all modifications are applied on the shape painter object created above the modification).

PS: the shape-painter will be automatically deleted once the animation is finished.


!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `DrawShockWaveEffect::GetPrimaryColor(color, string)` | Get the value of a primary color ||
| | _color_ | The color to break down |
| | _string_ | Value of the primary color to get |

## Draw shock waves in ellipse 

Will allow you to draw Ellipse shock wave effects. 

### Behavior actions

**Name of tween**  
Change name of tween.

**Change type**  
Change type of filling.

**Set the end angle**  
Change the initial value of end angle.

**Set the end color**  
Change the initial value of end color.

**Set the end height**  
Change the initial value of end height.

**Set the end opacity**  
Change the initial value of end opacity.

**Set the end outline**  
Change the initial value of end outline.

**Set the end width**  
Change the initial value of end width.

**Angle property**  
Change the property value for the angle.

**Color property**  
Change the property value for the color.

**Duration in milliseconds property**  
Change the property value for the duration in milliseconds.

**Width property**  
Change the property value for the width.

**Height property**  
Change the property value for the height.

**Outline1 property**  
Change the property value for the outline1.

**Color property**  
Change the property value for the color.

**Opacity property**  
Change the property value for the opacity.

**Angle property**  
Change the property value for the angle.

**Height property**  
Change the property value for the height.

**Outline property**  
Change the property value for the outline.

**Width property**  
Change the property value for the width.

**Height property**  
Change the property value for the height.

**Outline property**  
Change the property value for the outline.

**Color property**  
Change the property value for the color.

**Opacity property**  
Change the property value for the opacity.

**Angle property**  
Change the property value for the angle.

**Name of tween property**  
Change the property value for the name of tween.

**Type property**  
Change the property value for the type.

**Width property**  
Change the property value for the width.

**Set the start angle**  
Change the initial value of start angle.

**Set the start color**  
Change the initial value of start color.

**Set the start height**  
Change the initial value of start height.

**Set the start opacity**  
Change the initial value of start opacity.

**Set the start outline**  
Change the initial value of start outline.

**Set the start width**  
Change the initial value of start width.

### Behavior conditions

**Angle property**  
Compare the property value for the angle.

**Color property**  
Compare the property value for the color.

**Duration in milliseconds property**  
Compare the property value for the duration in milliseconds.

**Width property**  
Compare the property value for the width.

**Height property**  
Compare the property value for the height.

**Outline1 property**  
Compare the property value for the outline1.

**Color property**  
Compare the property value for the color.

**Opacity property**  
Compare the property value for the opacity.

**Angle property**  
Compare the property value for the angle.

**Height property**  
Compare the property value for the height.

**Outline property**  
Compare the property value for the outline.

**Width property**  
Compare the property value for the width.

**Height property**  
Compare the property value for the height.

**Outline property**  
Compare the property value for the outline.

**Color property**  
Compare the property value for the color.

**Opacity property**  
Compare the property value for the opacity.

**Angle property**  
Compare the property value for the angle.

**Name of tween property**  
Compare the property value for the name of tween.

**Type property**  
Compare the property value for the type.

**Width property**  
Compare the property value for the width.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.DrawEllipseShockWave::PropertyAngle()` | Return the property value for the angle. ||
| `Object.DrawEllipseShockWave::PropertyColor()` | Return the property value for the color. ||
| `Object.DrawEllipseShockWave::PropertyDuration()` | Return the property value for the duration in milliseconds. ||
| `Object.DrawEllipseShockWave::PropertyEnd1Width()` | Return the property value for the width. ||
| `Object.DrawEllipseShockWave::PropertyEnd2Height()` | Return the property value for the height. ||
| `Object.DrawEllipseShockWave::PropertyEnd3Outline()` | Return the property value for the outline1. ||
| `Object.DrawEllipseShockWave::PropertyEnd4Color()` | Return the property value for the color. ||
| `Object.DrawEllipseShockWave::PropertyEnd5Opacity()` | Return the property value for the opacity. ||
| `Object.DrawEllipseShockWave::PropertyEnd6Angle()` | Return the property value for the angle. ||
| `Object.DrawEllipseShockWave::PropertyHeight()` | Return the property value for the height. ||
| `Object.DrawEllipseShockWave::PropertyOutline()` | Return the property value for the outline. ||
| `Object.DrawEllipseShockWave::PropertyStart1Width()` | Return the property value for the width. ||
| `Object.DrawEllipseShockWave::PropertyStart2Height()` | Return the property value for the height. ||
| `Object.DrawEllipseShockWave::PropertyStart3Outline()` | Return the property value for the outline. ||
| `Object.DrawEllipseShockWave::PropertyStart4Color()` | Return the property value for the color. ||
| `Object.DrawEllipseShockWave::PropertyStart5Opacity()` | Return the property value for the opacity. ||
| `Object.DrawEllipseShockWave::PropertyStart6Angle()` | Return the property value for the angle. ||
| `Object.DrawEllipseShockWave::PropertyTweenName()` | Return the property value for the name of tween. ||
| `Object.DrawEllipseShockWave::PropertyType()` | Return the property value for the type. ||
| `Object.DrawEllipseShockWave::PropertyWidth()` | Return the property value for the width. ||

## Draw shock waves in star 

Will allow you to draw Star shock wave effects. 

### Behavior actions

**Set of Tween**  
Change name of tween.

**Change type**  
Change type of filling.

**Set the end angle**  
Change the initial value of end angle.

**Set the end color**  
Change the initial value of end color.

**Set the end inner radius**  
Change the initial value of end inner radius.

**Set the end opacity**  
Change the initial value of end opacity.

**Set the end outline**  
Change the initial value of end outline.

**Set the end radius**  
Change the initial value of end radius.

**Angle property**  
Change the property value for the angle.

**Color property**  
Change the property value for the color.

**Duration in milliseconds property**  
Change the property value for the duration in milliseconds.

**Radius property**  
Change the property value for the radius.

**Inner radius property**  
Change the property value for the inner radius.

**Outline property**  
Change the property value for the outline.

**Color property**  
Change the property value for the color.

**Opacity property**  
Change the property value for the opacity.

**Angle property**  
Change the property value for the angle.

**InnerRadius property**  
Change the property value for the innerRadius.

**Outline property**  
Change the property value for the outline.

**Radius property**  
Change the property value for the radius.

**Star branch number property**  
Change the property value for the star branch number.

**Radius property**  
Change the property value for the radius.

**Inner radius property**  
Change the property value for the inner radius.

**Outline property**  
Change the property value for the outline.

**Color property**  
Change the property value for the color.

**Opacity property**  
Change the property value for the opacity.

**Angle property**  
Change the property value for the angle.

**Name of tween property**  
Change the property value for the name of tween.

**Type property**  
Change the property value for the type.

**Set the number of branches of the star**  
Change the number of branches of the star.

**Set the start angle**  
Change the initial value of start angle.

**Set the start color**  
Set the initial value of start color.

**Set the start inner radius**  
Set the initial value of start inner radius.

**Set the start opacity**  
Set the initial value of start opacity.

**Set the start outline**  
Set the initial value of start outline.

**Set the start radius**  
Set the initial value of start radius.

### Behavior conditions

**Angle property**  
Compare the property value for the angle.

**Color property**  
Compare the property value for the color.

**Duration in milliseconds property**  
Compare the property value for the duration in milliseconds.

**Radius property**  
Compare the property value for the radius.

**Inner radius property**  
Compare the property value for the inner radius.

**Outline property**  
Compare the property value for the outline.

**Color property**  
Compare the property value for the color.

**Opacity property**  
Compare the property value for the opacity.

**Angle property**  
Compare the property value for the angle.

**InnerRadius property**  
Compare the property value for the innerRadius.

**Outline property**  
Compare the property value for the outline.

**Radius property**  
Compare the property value for the radius.

**Star branch number property**  
Compare the property value for the star branch number.

**Radius property**  
Compare the property value for the radius.

**Inner radius property**  
Compare the property value for the inner radius.

**Outline property**  
Compare the property value for the outline.

**Color property**  
Compare the property value for the color.

**Opacity property**  
Compare the property value for the opacity.

**Angle property**  
Compare the property value for the angle.

**Name of tween property**  
Compare the property value for the name of tween.

**Type property**  
Compare the property value for the type.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.DrawStarShockWave::PropertyAngle()` | Return the property value for the angle. ||
| `Object.DrawStarShockWave::PropertyColor()` | Return the property value for the color. ||
| `Object.DrawStarShockWave::PropertyDuration()` | Return the property value for the duration in milliseconds. ||
| `Object.DrawStarShockWave::PropertyEnd1Radius()` | Return the property value for the radius. ||
| `Object.DrawStarShockWave::PropertyEnd2InnerRadius()` | Return the property value for the inner radius. ||
| `Object.DrawStarShockWave::PropertyEnd3Outline()` | Return the property value for the outline. ||
| `Object.DrawStarShockWave::PropertyEnd4Color()` | Return the property value for the color. ||
| `Object.DrawStarShockWave::PropertyEnd5Opacity()` | Return the property value for the opacity. ||
| `Object.DrawStarShockWave::PropertyEnd6Angle()` | Return the property value for the angle. ||
| `Object.DrawStarShockWave::PropertyInnerRadius()` | Return the property value for the innerRadius. ||
| `Object.DrawStarShockWave::PropertyOutline()` | Return the property value for the outline. ||
| `Object.DrawStarShockWave::PropertyRadius()` | Return the property value for the radius. ||
| `Object.DrawStarShockWave::PropertyStarBranchNumber()` | Return the property value for the star branch number. ||
| `Object.DrawStarShockWave::PropertyStart1Radius()` | Return the property value for the radius. ||
| `Object.DrawStarShockWave::PropertyStart2InnerRadius()` | Return the property value for the inner radius. ||
| `Object.DrawStarShockWave::PropertyStart3Outline()` | Return the property value for the outline. ||
| `Object.DrawStarShockWave::PropertyStart4Color()` | Return the property value for the color. ||
| `Object.DrawStarShockWave::PropertyStart5Opacity()` | Return the property value for the opacity. ||
| `Object.DrawStarShockWave::PropertyStart6Angle()` | Return the property value for the angle. ||
| `Object.DrawStarShockWave::PropertyTweenName()` | Return the property value for the name of tween. ||
| `Object.DrawStarShockWave::PropertyType()` | Return the property value for the type. ||

---

*This page is an auto-generated reference page about the **Draw shock wave effect** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).