#  Shock wave effect

<img src="https://resources.gdevelop-app.com/assets/Icons/octagram-outline.svg" class="extension-icon"></img>
Draw shock wave.

**Authors and contributors** to this experimental extension: [Alios](https://gd.games/Alios).

---

Draw ellipse or star shaped shock waves.

Shock wave animations can be used for:


- Explosions
- Water effects
- Player feedback


!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Ellipse shock wave 

Draw ellipse shock waves. 

### Behavior properties

- **Duration** (🔢 Number, Duration). Default value is `1`.
- **Easing** (choice, one of: "linear", "easeInQuad", "easeOutQuad", "easeInOutQuad", "easeInCubic", "easeOutCubic", "easeInOutCubic", "easeInQuart", "easeOutQuart", "easeInOutQuart", "easeInQuint", "easeOutQuint", "easeInOutQuint", "easeInSine", "easeOutSine", "easeInOutSine", "easeInExpo", "easeOutExpo", "easeInOutExpo", "easeInCirc", "easeOutCirc", "easeInOutCirc", "easeOutBounce", "easeInBack", "easeOutBack", "easeInOutBack", "elastic", "swingFromTo", "swingFrom", "swingTo", "bounce", "bouncePast", "easeFromTo", "easeFrom", "easeTo"). Default value is `easeOutSine`.
- **End angle** (🔢 Number, Angle). Default value is `0`.
- **End color** (🎨 Color). Default value is `255;217;154`.
- **End height** (🔢 Number, Distance). Default value is `256`.
- **End opacity** (🔢 Number, Dimensionless). Default value is `0`.
- **End outline thickness** (🔢 Number, Distance). Default value is `0`.
- **End width** (🔢 Number, Distance). Default value is `256`.
- **Fill the shape** (🔘 Boolean). Default value is `false`.
- **Start angle** (🔢 Number, Angle). Default value is `0`.
- **Start color** (🎨 Color). Default value is `255;217;154`.
- **Start height** (🔢 Number, Distance). Default value is `8`.
- **Start opacity** (🔢 Number, Dimensionless). Default value is `255`.
- **Start outline thickness** (🔢 Number, Distance). Default value is `16`.
- **Start width** (🔢 Number, Distance). Default value is `8`.

??? quote "See internal technical details"


    - **Duration** is stored as `Duration` (Number). Unit is Second. Default value is `1`.
    - **Easing** is stored as `Easing` (Choice). Default value is `easeOutSine`.
    - **End angle** is stored as `EndAngle` (Number). Unit is DegreeAngle. Default value is `0`.
    - **End color** is stored as `EndColor` (Color). Default value is `255;217;154`.
    - **End height** is stored as `EndHeight` (Number). Unit is Pixel. Default value is `256`.
    - **End opacity** is stored as `EndOpacity` (Number). Unit is Dimensionless. Default value is `0`.
    - **End outline thickness** is stored as `EndOutlineThickness` (Number). Unit is Pixel. Default value is `0`.
    - **End width** is stored as `EndWidth` (Number). Unit is Pixel. Default value is `256`.
    - **Fill the shape** is stored as `IsFilled` (Boolean). Default value is `false`.
    - **Start angle** is stored as `StartAngle` (Number). Unit is DegreeAngle. Default value is `0`.
    - **Start color** is stored as `StartColor` (Color). Default value is `255;217;154`.
    - **Start height** is stored as `StartHeight` (Number). Unit is Pixel. Default value is `8`.
    - **Start opacity** is stored as `StartOpacity` (Number). Unit is Dimensionless. Default value is `255`.
    - **Start outline thickness** is stored as `StartOutlineThickness` (Number). Unit is Pixel. Default value is `16`.
    - **Start width** is stored as `StartWidth` (Number). Unit is Pixel. Default value is `8`.

### Behavior actions

**Duration**  
Change the duration of the animation.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ShockWaveEffect::EllipseShockWave::SetDuration`.

**Easing**  
Change the easing of the animation.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (stringwithselector): Value (one of: "linear", "easeInQuad", "easeOutQuad", "easeInOutQuad", "easeInCubic", "easeOutCubic", "easeInOutCubic", "easeInQuart", "easeOutQuart", "easeInOutQuart", "easeInQuint", "easeOutQuint", "easeInOutQuint", "easeInSine", "easeOutSine", "easeInOutSine", "easeInExpo", "easeOutExpo", "easeInOutExpo", "easeInCirc", "easeOutCirc", "easeInOutCirc", "easeOutBounce", "easeInBack", "easeOutBack", "easeInOutBack", "elastic", "swingFromTo", "swingFrom", "swingTo", "bounce", "bouncePast", "easeFromTo", "easeFrom", "easeTo")

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ShockWaveEffect::EllipseShockWave::SetEasing`.

**End angle**  
Change the end angle of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ShockWaveEffect::EllipseShockWave::SetEndAngle`.

**End Color**  
Change the end Color of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🎨 Color): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ShockWaveEffect::EllipseShockWave::SetEndColor`.

**End height**  
Change the end height of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ShockWaveEffect::EllipseShockWave::SetEndHeight`.

**End Opacity**  
Change the end Opacity of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ShockWaveEffect::EllipseShockWave::SetEndOpacity`.

**End outline thickness**  
Change the end outline thickness of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ShockWaveEffect::EllipseShockWave::SetEndOutlineThickness`.

**End width**  
Change the end width of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ShockWaveEffect::EllipseShockWave::SetEndWidth`.

**Enable filling**  
Enable or disable the filling of the shape.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): IsFilled

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ShockWaveEffect::EllipseShockWave::SetIsFilled`.

**Start angle**  
Change the start angle of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ShockWaveEffect::EllipseShockWave::SetStartAngle`.

**Start color**  
Change the start color of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🎨 Color): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ShockWaveEffect::EllipseShockWave::SetStartColor`.

**Start height**  
Change the start height of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ShockWaveEffect::EllipseShockWave::SetStartHeight`.

**Start opacity**  
Change the start opacity of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ShockWaveEffect::EllipseShockWave::SetStartOpacity`.

**Start outline thickness**  
Change the start outline of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ShockWaveEffect::EllipseShockWave::SetStartOutlineThickness`.

**Start width**  
Change the start width of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ShockWaveEffect::EllipseShockWave::SetStartWidth`.


### Behavior conditions

**Duration**  
Compare the duration of the animation.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ShockWaveEffect::EllipseShockWave::Duration`.

**Easing**  
Compare the easing of the animation.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (stringwithselector): Value to compare (one of: "linear", "easeInQuad", "easeOutQuad", "easeInOutQuad", "easeInCubic", "easeOutCubic", "easeInOutCubic", "easeInQuart", "easeOutQuart", "easeInOutQuart", "easeInQuint", "easeOutQuint", "easeInOutQuint", "easeInSine", "easeOutSine", "easeInOutSine", "easeInExpo", "easeOutExpo", "easeInOutExpo", "easeInCirc", "easeOutCirc", "easeInOutCirc", "easeOutBounce", "easeInBack", "easeOutBack", "easeInOutBack", "elastic", "swingFromTo", "swingFrom", "swingTo", "bounce", "bouncePast", "easeFromTo", "easeFrom", "easeTo")

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ShockWaveEffect::EllipseShockWave::Easing`.

**End angle**  
Compare the end angle of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ShockWaveEffect::EllipseShockWave::EndAngle`.

**End Color**  
Compare the end Color of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🎨 Color): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ShockWaveEffect::EllipseShockWave::EndColor`.

**End height**  
Compare the end height of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ShockWaveEffect::EllipseShockWave::EndHeight`.

**End Opacity**  
Compare the end Opacity of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ShockWaveEffect::EllipseShockWave::EndOpacity`.

**End outline thickness**  
Compare the end outline thickness of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ShockWaveEffect::EllipseShockWave::EndOutlineThickness`.

**End width**  
Compare the end width of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ShockWaveEffect::EllipseShockWave::EndWidth`.

**Shape filled**  
Check if the shape is filled.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ShockWaveEffect::EllipseShockWave::IsFilled`.

**Start angle**  
Compare the start angle of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ShockWaveEffect::EllipseShockWave::StartAngle`.

**Start color**  
Compare the start color of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🎨 Color): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ShockWaveEffect::EllipseShockWave::StartColor`.

**Start height**  
Compare the start height of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ShockWaveEffect::EllipseShockWave::StartHeight`.

**Start opacity**  
Compare the start opacity of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ShockWaveEffect::EllipseShockWave::StartOpacity`.

**Start outline thickness**  
Compare the start outline of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ShockWaveEffect::EllipseShockWave::StartOutlineThickness`.

**Start width**  
Compare the start width of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ShockWaveEffect::EllipseShockWave::StartWidth`.


### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.EllipseShockWave::Duration()` | Return the duration of the animation. ||
| `Object.EllipseShockWave::Easing()` | Return the easing of the animation. ||
| `Object.EllipseShockWave::EndAngle()` | Return the end angle of the object. ||
| `Object.EllipseShockWave::EndColor()` | Return the end Color of the object. ||
| `Object.EllipseShockWave::EndHeight()` | Return the end height of the object. ||
| `Object.EllipseShockWave::EndOpacity()` | Return the end Opacity of the object. ||
| `Object.EllipseShockWave::EndOutlineThickness()` | Return the end outline thickness of the object. ||
| `Object.EllipseShockWave::EndWidth()` | Return the end width of the object. ||
| `Object.EllipseShockWave::StartAngle()` | Return the start angle of the object. ||
| `Object.EllipseShockWave::StartColor()` | Return the start color of the object. ||
| `Object.EllipseShockWave::StartHeight()` | Return the start height of the object. ||
| `Object.EllipseShockWave::StartOpacity()` | Return the start opacity of the object. ||
| `Object.EllipseShockWave::StartOutlineThickness()` | Return the start outline of the object. ||
| `Object.EllipseShockWave::StartWidth()` | Return the start width of the object. ||

## Star shock waves 

Draw star shock waves. 

### Behavior properties

- **Duration** (🔢 Number, Duration). Default value is `1`.
- **Easing** (choice, one of: "linear", "easeInQuad", "easeOutQuad", "easeInOutQuad", "easeInCubic", "easeOutCubic", "easeInOutCubic", "easeInQuart", "easeOutQuart", "easeInOutQuart", "easeInQuint", "easeOutQuint", "easeInOutQuint", "easeInSine", "easeOutSine", "easeInOutSine", "easeInExpo", "easeOutExpo", "easeInOutExpo", "easeInCirc", "easeOutCirc", "easeInOutCirc", "easeOutBounce", "easeInBack", "easeOutBack", "easeInOutBack", "elastic", "swingFromTo", "swingFrom", "swingTo", "bounce", "bouncePast", "easeFromTo", "easeFrom", "easeTo"). Default value is `easeOutSine`.
- **End angle** (🔢 Number, Angle). Default value is `72`.
- **End color** (🎨 Color). Default value is `255;217;154`.
- **End inner radius** (🔢 Number, Distance). Default value is `128`.
- **End opacity** (🔢 Number, Dimensionless). Default value is `0`.
- **End outline thickness** (🔢 Number, Distance). Default value is `0`.
- **End radius** (🔢 Number, Distance). Default value is `64`.
- **Fill the shape** (🔘 Boolean). Default value is `false`.
- **Number of points** (🔢 Number, Dimensionless). Default value is `5`.
- **Start angle** (🔢 Number, Angle). Default value is `0`.
- **Start color** (🎨 Color). Default value is `255;217;154`.
- **Start Inner radius** (🔢 Number, Distance). Default value is `8`.
- **Start opacity** (🔢 Number, Dimensionless). Default value is `255`.
- **Start outline thickness** (🔢 Number, Distance). Default value is `16`.
- **Start radius** (🔢 Number, Distance). Default value is `4`.

??? quote "See internal technical details"


    - **Duration** is stored as `Duration` (Number). Unit is Second. Default value is `1`.
    - **Easing** is stored as `Easing` (Choice). Default value is `easeOutSine`.
    - **End angle** is stored as `EndAngle` (Number). Unit is DegreeAngle. Default value is `72`.
    - **End color** is stored as `EndColor` (Color). Default value is `255;217;154`.
    - **End inner radius** is stored as `EndInnerRadius` (Number). Unit is Pixel. Default value is `128`.
    - **End opacity** is stored as `EndOpacity` (Number). Unit is Dimensionless. Default value is `0`.
    - **End outline thickness** is stored as `EndOutlineThickness` (Number). Unit is Pixel. Default value is `0`.
    - **End radius** is stored as `EndRadius` (Number). Unit is Pixel. Default value is `64`.
    - **Fill the shape** is stored as `IsFilling` (Boolean). Default value is `false`.
    - **Number of points** is stored as `PointsCount` (Number). Unit is Dimensionless. Default value is `5`.
    - **Start angle** is stored as `StartAngle` (Number). Unit is DegreeAngle. Default value is `0`.
    - **Start color** is stored as `StartColor` (Color). Default value is `255;217;154`.
    - **Start Inner radius** is stored as `StartInnerRadius` (Number). Unit is Pixel. Default value is `8`.
    - **Start opacity** is stored as `StartOpacity` (Number). Unit is Dimensionless. Default value is `255`.
    - **Start outline thickness** is stored as `StartOutlineThickness` (Number). Unit is Pixel. Default value is `16`.
    - **Start radius** is stored as `StartRadius` (Number). Unit is Pixel. Default value is `4`.

### Behavior actions

**Duration**  
Change the duration of the animation.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ShockWaveEffect::StarShockWave::SetDuration`.

**Easing**  
Change the easing of the animation.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (stringwithselector): Value (one of: "linear", "easeInQuad", "easeOutQuad", "easeInOutQuad", "easeInCubic", "easeOutCubic", "easeInOutCubic", "easeInQuart", "easeOutQuart", "easeInOutQuart", "easeInQuint", "easeOutQuint", "easeInOutQuint", "easeInSine", "easeOutSine", "easeInOutSine", "easeInExpo", "easeOutExpo", "easeInOutExpo", "easeInCirc", "easeOutCirc", "easeInOutCirc", "easeOutBounce", "easeInBack", "easeOutBack", "easeInOutBack", "elastic", "swingFromTo", "swingFrom", "swingTo", "bounce", "bouncePast", "easeFromTo", "easeFrom", "easeTo")

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ShockWaveEffect::StarShockWave::SetEasing`.

**End angle**  
Change the end angle of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ShockWaveEffect::StarShockWave::SetEndAngle`.

**End color**  
Change the end color of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🎨 Color): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ShockWaveEffect::StarShockWave::SetEndColor`.

**End inner radius**  
Change the end inner radius of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ShockWaveEffect::StarShockWave::SetEndInnerRadius`.

**End opacity**  
Change the end opacity of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ShockWaveEffect::StarShockWave::SetEndOpacity`.

**End outline thickness**  
Change the end outline thickness of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ShockWaveEffect::StarShockWave::SetEndOutlineThickness`.

**End radius**  
Change the end radius of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ShockWaveEffect::StarShockWave::SetEndRadius`.

**Enable filling**  
Enable or disable the filling of the shape.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): IsFilling

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ShockWaveEffect::StarShockWave::SetIsFilling`.

**Number of points**  
Change the number of points of the star.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ShockWaveEffect::StarShockWave::SetPointsCount`.

**Start angle**  
Change the start angle of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ShockWaveEffect::StarShockWave::SetStartAngle`.

**Start color**  
Change the start color of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🎨 Color): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ShockWaveEffect::StarShockWave::SetStartColor`.

**Start inner radius**  
Change the start inner radius of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ShockWaveEffect::StarShockWave::SetStartInnerRadius`.

**Start opacity**  
Change the start opacity of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ShockWaveEffect::StarShockWave::SetStartOpacity`.

**Start outline thickness**  
Change the start outline thickness of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ShockWaveEffect::StarShockWave::SetStartOutlineThickness`.

**Start radius**  
Change the start radius of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ShockWaveEffect::StarShockWave::SetStartRadius`.


### Behavior conditions

**Duration**  
Compare the duration of the animation.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ShockWaveEffect::StarShockWave::Duration`.

**Easing**  
Compare the easing of the animation.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (stringwithselector): Value to compare (one of: "linear", "easeInQuad", "easeOutQuad", "easeInOutQuad", "easeInCubic", "easeOutCubic", "easeInOutCubic", "easeInQuart", "easeOutQuart", "easeInOutQuart", "easeInQuint", "easeOutQuint", "easeInOutQuint", "easeInSine", "easeOutSine", "easeInOutSine", "easeInExpo", "easeOutExpo", "easeInOutExpo", "easeInCirc", "easeOutCirc", "easeInOutCirc", "easeOutBounce", "easeInBack", "easeOutBack", "easeInOutBack", "elastic", "swingFromTo", "swingFrom", "swingTo", "bounce", "bouncePast", "easeFromTo", "easeFrom", "easeTo")

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ShockWaveEffect::StarShockWave::Easing`.

**End angle**  
Compare the end angle of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ShockWaveEffect::StarShockWave::EndAngle`.

**End color**  
Compare the end color of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🎨 Color): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ShockWaveEffect::StarShockWave::EndColor`.

**End inner radius**  
Compare the end inner radius of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ShockWaveEffect::StarShockWave::EndInnerRadius`.

**End opacity**  
Compare the end opacity of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ShockWaveEffect::StarShockWave::EndOpacity`.

**End outline thickness**  
Compare the end outline thickness of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ShockWaveEffect::StarShockWave::EndOutlineThickness`.

**End radius**  
Compare the end radius of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ShockWaveEffect::StarShockWave::EndRadius`.

**Shape filled**  
Check if the shape is filled.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ShockWaveEffect::StarShockWave::IsFilling`.

**Number of points**  
Compare the number of points of the star.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ShockWaveEffect::StarShockWave::PointsCount`.

**Start angle**  
Compare the start angle of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ShockWaveEffect::StarShockWave::StartAngle`.

**Start color**  
Compare the start color of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🎨 Color): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ShockWaveEffect::StarShockWave::StartColor`.

**Start inner radius**  
Compare the start inner radius of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ShockWaveEffect::StarShockWave::StartInnerRadius`.

**Start opacity**  
Compare the start opacity of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ShockWaveEffect::StarShockWave::StartOpacity`.

**Start outline thickness**  
Compare the start outline thickness of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ShockWaveEffect::StarShockWave::StartOutlineThickness`.

**Start radius**  
Compare the start radius of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ShockWaveEffect::StarShockWave::StartRadius`.


### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.StarShockWave::Duration()` | Return the duration of the animation. ||
| `Object.StarShockWave::Easing()` | Return the easing of the animation. ||
| `Object.StarShockWave::EndAngle()` | Return the end angle of the object. ||
| `Object.StarShockWave::EndColor()` | Return the end color of the object. ||
| `Object.StarShockWave::EndInnerRadius()` | Return the end inner radius of the object. ||
| `Object.StarShockWave::EndOpacity()` | Return the end opacity of the object. ||
| `Object.StarShockWave::EndOutlineThickness()` | Return the end outline thickness of the object. ||
| `Object.StarShockWave::EndRadius()` | Return the end radius of the object. ||
| `Object.StarShockWave::PointsCount()` | Return the number of points of the star. ||
| `Object.StarShockWave::StartAngle()` | Return the start angle of the object. ||
| `Object.StarShockWave::StartColor()` | Return the start color of the object. ||
| `Object.StarShockWave::StartInnerRadius()` | Return the start inner radius of the object. ||
| `Object.StarShockWave::StartOpacity()` | Return the start opacity of the object. ||
| `Object.StarShockWave::StartOutlineThickness()` | Return the start outline thickness of the object. ||
| `Object.StarShockWave::StartRadius()` | Return the start radius of the object. ||


---

*This page is an auto-generated reference page about the ** Shock wave effect** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).