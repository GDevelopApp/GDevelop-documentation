# Mathematical tools Reference

A set of mathematical functions that can be used in expressions. 

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `AngleBetweenPositions(number, number, number, number)` | Compute the angle between two positions (in degrees). ||
| | _🔢 Number_ | First point X position |
| | _🔢 Number_ | First point Y position |
| | _🔢 Number_ | Second point X position |
| | _🔢 Number_ | Second point Y position |
| `AngleDifference(number, number)` | Difference between two angles ||
| | _🔢 Number_ | First angle, in degrees |
| | _🔢 Number_ | Second angle, in degrees |
| `DistanceBetweenPositions(number, number, number, number)` | Compute the distance between two positions. ||
| | _🔢 Number_ | First point X position |
| | _🔢 Number_ | First point Y position |
| | _🔢 Number_ | Second point X position |
| | _🔢 Number_ | Second point Y position |
| `Pi()` | The number Pi (3.1415...) ||
| `Random(number)` | Random integer ||
| | _🔢 Number_ | Maximum value |
| `RandomFloat(number)` | Random float ||
| | _🔢 Number_ | Maximum value |
| `RandomFloatInRange(number, number)` | Random float in range ||
| | _🔢 Number_ | Minimum value |
| | _🔢 Number_ | Maximum value |
| `RandomInRange(number, number)` | Random integer in range ||
| | _🔢 Number_ | Minimum value |
| | _🔢 Number_ | Maximum value |
| `RandomWithStep(number, number, number)` | Random value in steps ||
| | _🔢 Number_ | Minimum value |
| | _🔢 Number_ | Maximum value |
| | _🔢 Number_ | Step |
| `XFromAngleAndDistance(number, number)` | Compute the X position when given an angle and distance relative to the origin (0;0). This is also known as getting the cartesian coordinates of a 2D vector, using its polar coordinates. ||
| | _🔢 Number_ | Angle, in degrees |
| | _🔢 Number_ | Distance |
| `YFromAngleAndDistance(number, number)` | Compute the Y position when given an angle and distance relative to the origin (0;0). This is also known as getting the cartesian coordinates of a 2D vector, using its polar coordinates. ||
| | _🔢 Number_ | Angle, in degrees |
| | _🔢 Number_ | Distance |
| `abs(number)` | Absolute value ||
| | _🔢 Number_ | Expression |
| `acos(number)` | Arccosine, return an angle (in radian). `ToDeg` allows to convert it to degrees. ||
| | _🔢 Number_ | Expression |
| `acosh(number)` | Hyperbolic arccosine ||
| | _🔢 Number_ | Expression |
| `asin(number)` | Arcsine, return an angle (in radian). `ToDeg` allows to convert it to degrees. ||
| | _🔢 Number_ | Expression |
| `asinh(number)` | Arcsine ||
| | _🔢 Number_ | Expression |
| `atan(number)` | Arctangent, return an angle (in radian). `ToDeg` allows to convert it to degrees. ||
| | _🔢 Number_ | Expression |
| `atan2(number, number)` | 2 argument arctangent (atan2) ||
| | _🔢 Number_ | Y |
| | _🔢 Number_ | X |
| `atanh(number)` | Hyperbolic arctangent ||
| | _🔢 Number_ | Expression |
| `cbrt(number)` | Cube root ||
| | _🔢 Number_ | Expression |
| `ceil(number)` | Round number up to an integer ||
| | _🔢 Number_ | Expression |
| `ceilTo(number, number)` | Round number up to the Nth decimal place ||
| | _🔢 Number_ | Expression |
| | _🔢 Number_ | Expression _Optional_. |
| `clamp(number, number, number)` | Restrict a value to a given range ||
| | _🔢 Number_ | Value |
| | _🔢 Number_ | Min |
| | _🔢 Number_ | Max |
| `cos(number)` | Cosine of an angle (in radian). If you want to use degrees, use`ToRad`: `sin(ToRad(45))`. ||
| | _🔢 Number_ | Expression |
| `cosh(number)` | Hyperbolic cosine ||
| | _🔢 Number_ | Expression |
| `cot(number)` | Cotangent of a number ||
| | _🔢 Number_ | Expression |
| `csc(number)` | Cosecant of a number ||
| | _🔢 Number_ | Expression |
| `exp(number)` | Exponential of a number ||
| | _🔢 Number_ | Expression |
| `floor(number)` | Round number down to an integer ||
| | _🔢 Number_ | Expression |
| `floorTo(number, number)` | Round number down to the Nth decimal place ||
| | _🔢 Number_ | Expression |
| | _🔢 Number_ | Expression _Optional_. |
| `lerp(number, number, number)` | Linearly interpolate a to b by x ||
| | _🔢 Number_ | a (in a+(b-a) * x) |
| | _🔢 Number_ | b (in a+(b-a) * x) |
| | _🔢 Number_ | x (in a+(b-a) * x) |
| `lerpAngle(number, number, number)` | Linearly interpolates between two angles (in degrees) by taking the shortest direction around the circle. ||
| | _🔢 Number_ | Starting angle, in degrees |
| | _🔢 Number_ | Destination angle, in degrees |
| | _🔢 Number_ | Interpolation value between 0 and 1. |
| `log(number)` | Logarithm ||
| | _🔢 Number_ | Expression |
| `log10(number)` | Base-10 logarithm ||
| | _🔢 Number_ | Expression |
| `log2(number)` | Base 2 Logarithm ||
| | _🔢 Number_ | Expression |
| `max(number, number)` | Maximum of two numbers ||
| | _🔢 Number_ | First expression |
| | _🔢 Number_ | Second expression |
| `min(number, number)` | Minimum of two numbers ||
| | _🔢 Number_ | First expression |
| | _🔢 Number_ | Second expression |
| `mod(number, number)` | x mod y ||
| | _🔢 Number_ | x (as in x mod y) |
| | _🔢 Number_ | y (as in x mod y) |
| `normalize(number, number, number)` | Remap a value between 0 and 1. ||
| | _🔢 Number_ | Value |
| | _🔢 Number_ | Min |
| | _🔢 Number_ | Max |
| `nthroot(number, number)` | Nth root of a number ||
| | _🔢 Number_ | Number |
| | _🔢 Number_ | N |
| `pow(number, number)` | Raise a number to power n ||
| | _🔢 Number_ | Number |
| | _🔢 Number_ | The exponent (n in "x to the power n") |
| `round(number)` | Round a number ||
| | _🔢 Number_ | Expression |
| `roundTo(number, number)` | Round a number to the Nth decimal place ||
| | _🔢 Number_ | Expression |
| | _🔢 Number_ | Expression _Optional_. |
| `sec(number)` | Secant ||
| | _🔢 Number_ | Expression |
| `sign(number)` | Return the sign of a number (1,-1 or 0) ||
| | _🔢 Number_ | Expression |
| `sin(number)` | Sine of an angle (in radian). If you want to use degrees, use`ToRad`: `sin(ToRad(45))`. ||
| | _🔢 Number_ | Expression |
| `sinh(number)` | Hyperbolic sine ||
| | _🔢 Number_ | Expression |
| `sqrt(number)` | Square root of a number ||
| | _🔢 Number_ | Expression |
| `tan(number)` | Tangent of an angle (in radian). If you want to use degrees, use`ToRad`: `tan(ToRad(45))`. ||
| | _🔢 Number_ | Expression |
| `tanh(number)` | Hyperbolic tangent ||
| | _🔢 Number_ | Expression |
| `trunc(number)` | Truncate a number ||
| | _🔢 Number_ | Expression |

---
*This page is an auto-generated reference page about the **Mathematical tools** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).