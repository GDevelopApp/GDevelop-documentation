# Advanced 3D tween

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/30bc03f9cf5f2f42960246a605352a6937ae6b603f0177396a83193849a4724a_tennis-ball.svg" class="extension-icon"></img>
Smoothly squash, strentch, tint and wobble 3D models.

**Authors and contributors** to this experimental extension: [D8H](https://gd.games/D8H), [Jurfix](https://gd.games/Jurfix).

!!! warning
    This is an extension made by a community member and it only got through a
    light review by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of fully reviewed extensions.

---

Change 3D models proportions over time to make smooth animations like wobbling.

It's used in this example:

* a 3D Bomberman-like game ([open the project online](https://editor.gdevelop.io/?project=example://3d-bomber-bunny))

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Tint color**
Change the tint of an object. The default color is white.

??? quote "See parameters"

    - Parameter 1: 👾 Object
    - Parameter 2 (🧩 Behavior): Object capability
    - Parameter 3: color

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.



## Advanced 3D tween 

Smoothly squash, strentch and tint 3D models. 

### Behavior actions

**Pause a tween**
Pause the running tween animation.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 Name (String)): Tween identifier

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Remove a tween**
Remove the tween animation from the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 Name (String)): Tween identifier

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Resume a tween**
Resume the tween animation.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 Name (String)): Tween identifier

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Scale volume**
Change the scale volume.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Stretch on Y axis**
Change the stretch on Y axis. The object volume is conserved. A stretch of 2 makes the object appear 2 times longer on Y in proportion to the dimensions on X and Z.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Stretch on Z axis**
Change the stretch on Z axis. The object volume is conserved. A stretch of 2 makes the object appear 2 times longer on Z in proportion to the dimensions on X and Y.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Stop a tween**
Stop the running tween animation.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 Name (String)): Tween identifier
    - Parameter 3 (❓ Yes or No): Jump to end

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Tween scale volume**
Tweens an object scale volume from its current value to a new one. The scale volume can never be 0 or less.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 Name (String)): Tween identifier
    - Parameter 3 (🔢 Number): Scale volume
    - Parameter 4 (🔢 Number): Duration (in seconds)
    - Parameter 5 (🔤 String): Easing (one of: "linear", "easeInQuad", "easeOutQuad", "easeInOutQuad", "easeInCubic", "easeOutCubic", "easeInOutCubic", "easeInQuart", "easeOutQuart", "easeInOutQuart", "easeInQuint", "easeOutQuint", "easeInOutQuint", "easeInOutSine", "easeInExpo", "easeOutExpo", "easeInOutExpo", "easeInCirc", "easeOutCirc", "easeInOutCirc", "easeOutBounce", "easeInBack", "easeOutBack", "easeInOutBack", "elastic", "swingFromTo", "swingFrom", "swingTo", "bounce", "bouncePast", "easeFromTo", "easeFrom", "easeTo")

    > Technical note: parameter 6 are internal parameters handled by GDevelop.

**Tween stretch Y**
Tweens an object stretch Y from its current value to a new one. The stretch can never be 0 or less.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 Name (String)): Tween identifier
    - Parameter 3 (🔢 Number): Stretch on Y axis
    - Parameter 4 (🔢 Number): Duration (in seconds)
    - Parameter 5 (🔤 String): Easing (one of: "linear", "easeInQuad", "easeOutQuad", "easeInOutQuad", "easeInCubic", "easeOutCubic", "easeInOutCubic", "easeInQuart", "easeOutQuart", "easeInOutQuart", "easeInQuint", "easeOutQuint", "easeInOutQuint", "easeInOutSine", "easeInExpo", "easeOutExpo", "easeInOutExpo", "easeInCirc", "easeOutCirc", "easeInOutCirc", "easeOutBounce", "easeInBack", "easeOutBack", "easeInOutBack", "elastic", "swingFromTo", "swingFrom", "swingTo", "bounce", "bouncePast", "easeFromTo", "easeFrom", "easeTo")

    > Technical note: parameter 6 are internal parameters handled by GDevelop.

**Tween stretch Z**
Tweens an object stretch Z from its current value to a new one. The stretch can never be 0 or less.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 Name (String)): Tween identifier
    - Parameter 3 (🔢 Number): Stretch on Z axis
    - Parameter 4 (🔢 Number): Duration (in seconds)
    - Parameter 5 (🔤 String): Easing (one of: "linear", "easeInQuad", "easeOutQuad", "easeInOutQuad", "easeInCubic", "easeOutCubic", "easeInOutCubic", "easeInQuart", "easeOutQuart", "easeInOutQuart", "easeInQuint", "easeOutQuint", "easeInOutQuint", "easeInOutSine", "easeInExpo", "easeOutExpo", "easeInOutExpo", "easeInCirc", "easeOutCirc", "easeInOutCirc", "easeOutBounce", "easeInBack", "easeOutBack", "easeInOutBack", "elastic", "swingFromTo", "swingFrom", "swingTo", "bounce", "bouncePast", "easeFromTo", "easeFrom", "easeTo")

    > Technical note: parameter 6 are internal parameters handled by GDevelop.

**Tween object color**
Tweens the object color from its current value to a new one.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 Name (String)): Tween identifier
    - Parameter 3: color
    - Parameter 4 (🔢 Number): Duration (in seconds)
    - Parameter 5 (🔤 String): Easing (one of: "linear", "easeInQuad", "easeOutQuad", "easeInOutQuad", "easeInCubic", "easeOutCubic", "easeInOutCubic", "easeInQuart", "easeOutQuart", "easeInOutQuart", "easeInQuint", "easeOutQuint", "easeInOutQuint", "easeInOutSine", "easeInExpo", "easeOutExpo", "easeInOutExpo", "easeInCirc", "easeOutCirc", "easeInOutCirc", "easeOutBounce", "easeInBack", "easeOutBack", "easeInOutBack", "elastic", "swingFromTo", "swingFrom", "swingTo", "bounce", "bouncePast", "easeFromTo", "easeFrom", "easeTo")

    > Technical note: parameter 6 are internal parameters handled by GDevelop.

### Behavior conditions

**Tween exists**
Check if the tween animation exists.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 Name (String)): Tween identifier

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Tween finished playing**
Check if the tween animation has finished playing.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 Name (String)): Tween identifier

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Tween is playing**
Check if the tween animation is currently playing.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 Name (String)): Tween identifier

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Progress of a tween**
Compare the progress of a tween (between 0.0 and 1.0).

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare
    - Parameter 4 (🔤 Name (String)): Tween identifier

    > Technical note: parameter 5 are internal parameters handled by GDevelop.

**Scale volume**
Compare the scale volume.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Stretch on Y axis**
Compare the stretch on Y axis. The object volume is conserved. A stretch of 2 makes the object appear 2 times longer on Y in proportion to the dimensions on X and Z.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Stretch on Z axis**
Compare the stretch on Z axis. The object volume is conserved. A stretch of 2 makes the object appear 2 times longer on Z in proportion to the dimensions on X and Y.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.Tween3D::Progress(string)` | Return the progress of a tween (between 0.0 and 1.0). ||
| | _🔤 Name (String)_ | Tween identifier |
| `Object.Tween3D::ScaleVolume()` | Return the scale volume. ||
| `Object.Tween3D::StretchY()` | Return the stretch on Y axis. The object volume is conserved. A stretch of 2 makes the object appear 2 times longer on Y in proportion to the dimensions on X and Z. ||
| `Object.Tween3D::StretchZ()` | Return the stretch on Z axis. The object volume is conserved. A stretch of 2 makes the object appear 2 times longer on Z in proportion to the dimensions on X and Y. ||

## 3D wobble 

Squash and stretch a 3D model in loop. 

### Behavior actions

**Cycle duration**
Change the cycle duration of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Maximum scale volume**
Change the maximum scale volume of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Minimum scale volume**
Change the minimum scale volume of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Scale cycle offset**
Change the scale cycle offset of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Maximum stretch**
Change the maximum stretch of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Minimum stretch**
Change the minimum stretch of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Stretch cycle offset**
Change the stretch cycle offset of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Tween maximum scale volume**
Tweens the maximum scale volume from its current value to a new one. The scale volume can never be 0 or less.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Maximum scale volume
    - Parameter 3 (🔢 Number): Duration (in seconds)
    - Parameter 4 (🔤 String): Easing (one of: "linear", "easeInQuad", "easeOutQuad", "easeInOutQuad", "easeInCubic", "easeOutCubic", "easeInOutCubic", "easeInQuart", "easeOutQuart", "easeInOutQuart", "easeInQuint", "easeOutQuint", "easeInOutQuint", "easeInOutSine", "easeInExpo", "easeOutExpo", "easeInOutExpo", "easeInCirc", "easeOutCirc", "easeInOutCirc", "easeOutBounce", "easeInBack", "easeOutBack", "easeInOutBack", "elastic", "swingFromTo", "swingFrom", "swingTo", "bounce", "bouncePast", "easeFromTo", "easeFrom", "easeTo")

    > Technical note: parameter 5 are internal parameters handled by GDevelop.

**Tween minimum scale volume**
Tweens the minimum scale volume from its current value to a new one. The scale volume can never be 0 or less.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Minimum scale volume
    - Parameter 3 (🔢 Number): Duration (in seconds)
    - Parameter 4 (🔤 String): Easing (one of: "linear", "easeInQuad", "easeOutQuad", "easeInOutQuad", "easeInCubic", "easeOutCubic", "easeInOutCubic", "easeInQuart", "easeOutQuart", "easeInOutQuart", "easeInQuint", "easeOutQuint", "easeInOutQuint", "easeInOutSine", "easeInExpo", "easeOutExpo", "easeInOutExpo", "easeInCirc", "easeOutCirc", "easeInOutCirc", "easeOutBounce", "easeInBack", "easeOutBack", "easeInOutBack", "elastic", "swingFromTo", "swingFrom", "swingTo", "bounce", "bouncePast", "easeFromTo", "easeFrom", "easeTo")

    > Technical note: parameter 5 are internal parameters handled by GDevelop.

### Behavior conditions

**Cycle duration**
Compare the cycle duration of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Maximum scale volume**
Compare the maximum scale volume of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Minimum scale volume**
Compare the minimum scale volume of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Scale cycle offset**
Compare the scale cycle offset of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Maximum stretch**
Compare the maximum stretch of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Minimum stretch**
Compare the minimum stretch of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Stretch cycle offset**
Compare the stretch cycle offset of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.Wobble::PeriodDuration()` | Return the cycle duration of the object. ||
| `Object.Wobble::ScaleMax()` | Return the maximum scale volume of the object. ||
| `Object.Wobble::ScaleMin()` | Return the minimum scale volume of the object. ||
| `Object.Wobble::ScalePeriodOffset()` | Return the scale cycle offset of the object. ||
| `Object.Wobble::StretchMax()` | Return the maximum stretch of the object. ||
| `Object.Wobble::StretchMin()` | Return the minimum stretch of the object. ||
| `Object.Wobble::StretchPeriodOffset()` | Return the stretch cycle offset of the object. ||


---

*This page is an auto-generated reference page about the **Advanced 3D tween** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).