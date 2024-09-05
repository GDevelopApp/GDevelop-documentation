# Extended math support

<img src="https://resources.gdevelop-app.com/assets/Icons/function-variant.svg" class="extension-icon"></img>
Additional math functions and constants as expressions and conditions.

**Authors and contributors** to this community extension: [Add00](https://gd.games/Add00), [Jurfix](https://gd.games/Jurfix).

---

Expressions:

 - Mathematical constants
 - Greatest common factor/Lowest common multiple
 - Factorial
 - Coordinates conversion for polar and isometric systems
 - ToFixedString: Formats a number into a string with the specified number of decimal places
 - ToFixed: (Deprecated) Formats a number to use the specified number of decimal places

Conditions:

- IsEven: Check if the number is even (divisible by 2)

Release Notes:

Version 1.0.7

- Added ToFixedString()
- Deprecated ToFixed() because it does not show any trailing zeros for whole numbers. Prefer using ToFixedString() to set values in text objects.


!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Conditions

**Is even?**  
Check if the number is even (divisible by 2).  To check for odd numbers, invert this condition.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `ExtendedMath::E()` | Returns the natural logarithm of e. (Euler's number). ||
| `ExtendedMath::Factorial()` | Returns the input multiplied by all the previous whole numbers. ||
| `ExtendedMath::Fibonacci()` | Returns a term from the Fibonacci sequence. ||
| `ExtendedMath::Gcf()` | Returns the greatest common factor of two numbers. ||
| `ExtendedMath::GoldenRatio()` | Returns the golden ratio. ||
| `ExtendedMath::HalfPi()` | Returns half Pi. ||
| `ExtendedMath::Hypot()` | Returns the value of the length of the hypotenuse. ||
| `ExtendedMath::IisoToCartesianY()` | Converts a isometric coordinate into the Cartesian y value. ||
| `ExtendedMath::IsoToCartesianX()` | Converts a isometric coordinate into the Cartesian x value. ||
| `ExtendedMath::Lcm()` | Returns the lowest common multiple of two numbers. ||
| `ExtendedMath::Ln10()` | Returns the natural logarithm of 10. ||
| `ExtendedMath::Ln2()` | Returns the natural logarithm of 2. ||
| `ExtendedMath::Log10e()` | Returns the base 10 logarithm of e. (Euler's number). ||
| `ExtendedMath::Log2e()` | Returns the base 2 logarithm of e. (Euler's number). ||
| `ExtendedMath::Map()` | Converts a number of one range e.g. 0-1 to another 0-255. ||
| `ExtendedMath::Pi()` | Returns Pi (π). ||
| `ExtendedMath::PolarToCartesianX()` | Converts a polar coordinate into the Cartesian x value. ||
| `ExtendedMath::PolarToCartesianY()` | Converts a polar coordinate into the Cartesian y value. ||
| `ExtendedMath::QuarterPi()` | Returns quarter Pi. ||
| `ExtendedMath::Slope()` | Calculates the steepness of a line between two points. ||
| `ExtendedMath::Sqrt1_2()` | Returns square root of 1/2. ||
| `ExtendedMath::Sqrt2()` | Returns square root of 2. ||
| `ExtendedMath::ToFixedString()` | Formats a number to a string with the specified number of decimal places. ||

---

*This page is an auto-generated reference page about the **Extended math support** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).