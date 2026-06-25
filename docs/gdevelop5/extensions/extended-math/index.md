# Extended math support

<img src="https://resources.gdevelop-app.com/assets/Icons/function-variant.svg" class="extension-icon"></img>
Extra math: clamp, map, lerp, factorial, fibonacci, distance, angle, conversions, constants.

**Authors and contributors** to this extension: [Add00](https://gd.games/Add00), [Jurfix](https://gd.games/Jurfix).

---

Expressions:

 - Mathematical constants
 - Greatest common factor/Lowest common multiple
 - Factorial
 - Coordinates conversion for polar and isometric systems
 - ToFixedString: Formats a number into a string with the specified number of decimal places

Conditions:

- IsEven: Check if the number is even (divisible by 2).


!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Conditions

**Is even?**  
Check if the number is even (divisible by 2).  To check for odd numbers, invert this condition.

??? quote "See parameters & details"

    - Parameter 1 (🔢 Number): Value

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ExtendedMath::IsEven`.


## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `ExtendedMath::E()` | Returns the natural logarithm of e. (Euler's number). ||
| `ExtendedMath::Factorial(number)` | Returns the input multiplied by all the previous whole numbers. ||
| | _🔢 Number_ | Any positive integer |
| `ExtendedMath::Fibonacci(number)` | Returns a term from the Fibonacci sequence. ||
| | _🔢 Number_ | The desired term in the sequence |
| `ExtendedMath::Gcf(number, number)` | Returns the greatest common factor of two numbers. ||
| | _🔢 Number_ | Any integer |
| | _🔢 Number_ | Any integer |
| `ExtendedMath::GoldenRatio()` | Returns the golden ratio. ||
| `ExtendedMath::HalfPi()` | Returns half Pi. ||
| `ExtendedMath::Hypot(number, number)` | Returns the value of the length of the hypotenuse. ||
| | _🔢 Number_ | First side of the triangle |
| | _🔢 Number_ | Second side of the triangle |
| `ExtendedMath::IisoToCartesianY(number, number)` | Converts a isometric coordinate into the Cartesian y value. ||
| | _🔢 Number_ | Position on the x axis |
| | _🔢 Number_ | Position on the y axis |
| `ExtendedMath::IsoToCartesianX(number, number)` | Converts a isometric coordinate into the Cartesian x value. ||
| | _🔢 Number_ | Position on the x axis |
| | _🔢 Number_ | Position on the y axis |
| `ExtendedMath::Lcm(number, number)` | Returns the lowest common multiple of two numbers. ||
| | _🔢 Number_ | Any integer |
| | _🔢 Number_ | Any integer |
| `ExtendedMath::Ln10()` | Returns the natural logarithm of 10. ||
| `ExtendedMath::Ln2()` | Returns the natural logarithm of 2. ||
| `ExtendedMath::Log10e()` | Returns the base 10 logarithm of e. (Euler's number). ||
| `ExtendedMath::Log2e()` | Returns the base 2 logarithm of e. (Euler's number). ||
| `ExtendedMath::Map(number, number, number, number, number)` | Converts a number of one range e.g. 0-1 to another 0-255. ||
| | _🔢 Number_ | The value to convert |
| | _🔢 Number_ | The lowest value of the first range |
| | _🔢 Number_ | The highest value of the first range |
| | _🔢 Number_ | The lowest value of the second range |
| | _🔢 Number_ | The highest value of the second range |
| `ExtendedMath::Pi()` | Returns Pi (π). ||
| `ExtendedMath::PolarToCartesianX(number, number)` | Converts a polar coordinate into the Cartesian x value. ||
| | _🔢 Number_ | Radius |
| | _🔢 Number_ | Angle or theta in radians |
| `ExtendedMath::PolarToCartesianY(number, number)` | Converts a polar coordinate into the Cartesian y value. ||
| | _🔢 Number_ | Radius  |
| | _🔢 Number_ | Angle or theta in radians |
| `ExtendedMath::QuarterPi()` | Returns quarter Pi. ||
| `ExtendedMath::Slope(number, number, number, number)` | Calculates the steepness of a line between two points. ||
| | _🔢 Number_ | X value of the first point |
| | _🔢 Number_ | Y value of the first point |
| | _🔢 Number_ | X value of the second point |
| | _🔢 Number_ | Y value of the second point |
| `ExtendedMath::Sqrt1_2()` | Returns square root of 1/2. ||
| `ExtendedMath::Sqrt2()` | Returns square root of 2. ||
| `ExtendedMath::ToFixedString(number, number)` | Formats a number to a string with the specified number of decimal places. ||
| | _🔢 Number_ | The value to be rounded |
| | _🔢 Number_ | Number of decimal places |


---

*This page is an auto-generated reference page about the **Extended math support** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).