# Mathematical tools

A set of mathematical functions that can be used in expressions. 

## Expressions

| Expression | Description |  |
|-----|-----|-----|

| `AngleBetweenPositions(number, number, number, number)` | Compute the angle between two positions (in degrees). ||
| | _number_ | First point X position |
| | _number_ | First point Y position |
| | _number_ | Second point X position |
| | _number_ | Second point Y position |
| `AngleDifference(number, number)` | Difference between two angles ||
| | _number_ | First angle, in degrees |
| | _number_ | Second angle, in degrees |
| `DistanceBetweenPositions(number, number, number, number)` | Compute the distance between two positions. ||
| | _number_ | First point X position |
| | _number_ | First point Y position |
| | _number_ | Second point X position |
| | _number_ | Second point Y position |
| `Pi()` | The number Pi (3.1415...) ||
| `Random(number)` | Random integer ||
| | _number_ | Maximum value |
| `RandomFloat(number)` | Random float ||
| | _number_ | Maximum value |
| `RandomFloatInRange(number, number)` | Random float in range ||
| | _number_ | Minimum value |
| | _number_ | Maximum value |
| `RandomInRange(number, number)` | Random integer in range ||
| | _number_ | Minimum value |
| | _number_ | Maximum value |
| `RandomWithStep(number, number, number)` | Random value in steps ||
| | _number_ | Minimum value |
| | _number_ | Maximum value |
| | _number_ | Step |
| `XFromAngleAndDistance(number, number)` | Compute the X position when given an angle and distance relative to the origin (0;0). This is also known as getting the cartesian coordinates of a 2D vector, using its polar coordinates. ||
| | _number_ | Angle, in degrees |
| | _number_ | Distance |
| `YFromAngleAndDistance(number, number)` | Compute the Y position when given an angle and distance relative to the origin (0;0). This is also known as getting the cartesian coordinates of a 2D vector, using its polar coordinates. ||
| | _number_ | Angle, in degrees |
| | _number_ | Distance |
| `abs(number)` | Absolute value ||
| | _number_ | Expression |
| `acos(number)` | Arccosine, return an angle (in radian). `ToDeg` allows to convert it to degrees. ||
| | _number_ | Expression |
| `acosh(number)` | Hyperbolic arccosine ||
| | _number_ | Expression |
| `asin(number)` | Arcsine, return an angle (in radian). `ToDeg` allows to convert it to degrees. ||
| | _number_ | Expression |
| `asinh(number)` | Arcsine ||
| | _number_ | Expression |
| `atan(number)` | Arctangent, return an angle (in radian). `ToDeg` allows to convert it to degrees. ||
| | _number_ | Expression |
| `atan2(number, number)` | 2 argument arctangent (atan2) ||
| | _number_ | Y |
| | _number_ | X |
| `atanh(number)` | Hyperbolic arctangent ||
| | _number_ | Expression |
| `cbrt(number)` | Cube root ||
| | _number_ | Expression |
| `ceil(number)` | Round number up to an integer ||
| | _number_ | Expression |
| `ceilTo(number, number)` | Round number up to the Nth decimal place ||
| | _number_ | Expression |
| | _number_ | Expression _Optional_. |
| `clamp(number, number, number)` | Restrict a value to a given range ||
| | _number_ | Value |
| | _number_ | Min |
| | _number_ | Max |
| `cos(number)` | Cosine of an angle (in radian). If you want to use degrees, use`ToRad`: `sin(ToRad(45))`. ||
| | _number_ | Expression |
| `cosh(number)` | Hyperbolic cosine ||
| | _number_ | Expression |
| `cot(number)` | Cotangent of a number ||
| | _number_ | Expression |
| `csc(number)` | Cosecant of a number ||
| | _number_ | Expression |
| `exp(number)` | Exponential of a number ||
| | _number_ | Expression |
| `floor(number)` | Round number down to an integer ||
| | _number_ | Expression |
| `floorTo(number, number)` | Round number down to the Nth decimal place ||
| | _number_ | Expression |
| | _number_ | Expression _Optional_. |
| `lerp(number, number, number)` | Linearly interpolate a to b by x ||
| | _number_ | a (in a+(b-a) * x) |
| | _number_ | b (in a+(b-a) * x) |
| | _number_ | x (in a+(b-a) * x) |
| `lerpAngle(number, number, number)` | Linearly interpolates between two angles (in degrees) by taking the shortest direction around the circle. ||
| | _number_ | Starting angle, in degrees |
| | _number_ | Destination angle, in degrees |
| | _number_ | Interpolation value between 0 and 1. |
| `log(number)` | Logarithm ||
| | _number_ | Expression |
| `log10(number)` | Base-10 logarithm ||
| | _number_ | Expression |
| `log2(number)` | Base 2 Logarithm ||
| | _number_ | Expression |
| `max(number, number)` | Maximum of two numbers ||
| | _number_ | First expression |
| | _number_ | Second expression |
| `min(number, number)` | Minimum of two numbers ||
| | _number_ | First expression |
| | _number_ | Second expression |
| `mod(number, number)` | x mod y ||
| | _number_ | x (as in x mod y) |
| | _number_ | y (as in x mod y) |
| `normalize(number, number, number)` | Remap a value between 0 and 1. ||
| | _number_ | Value |
| | _number_ | Min |
| | _number_ | Max |
| `nthroot(number, number)` | Nth root of a number ||
| | _number_ | Number |
| | _number_ | N |
| `pow(number, number)` | Raise a number to power n ||
| | _number_ | Number |
| | _number_ | The exponent (n in "x to the power n") |
| `round(number)` | Round a number ||
| | _number_ | Expression |
| `roundTo(number, number)` | Round a number to the Nth decimal place ||
| | _number_ | Expression |
| | _number_ | Expression _Optional_. |
| `sec(number)` | Secant ||
| | _number_ | Expression |
| `sign(number)` | Return the sign of a number (1,-1 or 0) ||
| | _number_ | Expression |
| `sin(number)` | Sine of an angle (in radian). If you want to use degrees, use`ToRad`: `sin(ToRad(45))`. ||
| | _number_ | Expression |
| `sinh(number)` | Hyperbolic sine ||
| | _number_ | Expression |
| `sqrt(number)` | Square root of a number ||
| | _number_ | Expression |
| `tan(number)` | Tangent of an angle (in radian). If you want to use degrees, use`ToRad`: `tan(ToRad(45))`. ||
| | _number_ | Expression |
| `tanh(number)` | Hyperbolic tangent ||
| | _number_ | Expression |
| `trunc(number)` | Truncate a number ||
| | _number_ | Expression |

---
*This page is an auto-generated reference page about the **Mathematical tools** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).