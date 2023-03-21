---
title: expressions-reference
---
FIXME**Esta página no está totalmente traducida, por ahora. Please help completing the translation.**
*(remove this paragraph once the translation is finished)*

# Referencia de expresiones

Las expresiones se pueden añadir cuando ves este botón al lado de algún campo de texto:

![](/gdevelop5/field_expressions.png)

- El botón de la izquierda indica una "expresión de cadena" (un texto)
- El botón derecho indica una "expresión numérica" (número)

Esta página es una referencia de todas las expresiones que se pueden usar en GDevelop, agrupadas por la extensión, objeto o comportamiento al que pertenecen también. Cuando se escribe "Objeto", debe ingresar un nobre para el objeto.**[Aprenda más aquí sobre cómo escribir expresiones.](/gdevelop5/all-features/expressions)**

!!! note

    Las expresiones también son llamadas a veces funciones, como en matemáticas.

## Funciones para todos los objetos

Funciones comunes que pueden usarse para todos los objetos [Lea más sobre ello.](http://wiki.compilgames.net/doku.php/gdevelop5/objects/base_object/events)

| Expresión         | Descripción                                                      |        |
|-------------------|------------------------------------------------------------------|:------:|
| `Count(object)` | Cuenta el número de objetos especificados obtenidos en el evento |        |
| :::               | _object_                                                       | Objeto |

| Expresión                                        | Descripción                                                                                                                                                                                   |                   |
|--------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------:|
| `Object.Angle()`                               | Ángulo actual, en grados, del objeto                                                                                                                                                          |                   |
| `Object.AngleToObject(object)`                 | Compute the angle between two objects. If you need the angle to an arbitrary position, use AngleToPosition.                                                                                   |                   |
| :::                                              | _object_                                                                                                                                                                                    |      Object       |
| `Object.AngleToPosition(number, number)`       | Compute the angle between the object center and a "target" position. If you need the angle between two objects, use AngleToObject.                                                            |                   |
| :::                                              | _number_                                                                                                                                                                                    | Target X position |
| :::                                              | _number_                                                                                                                                                                                    | Target Y position |
| `Object.CenterX()`                             | Return the X position of the center.                                                                                                                                                          |                   |
| `Object.CenterY()`                             | Return the Y position of the center.                                                                                                                                                          |                   |
| `Object.Distance(object)`                      | Distance between two objects                                                                                                                                                                  |                   |
| :::                                              | _object_                                                                                                                                                                                    |      Object       |
| `Object.DistanceToPosition(number, number)`    | Distance between an object and a position                                                                                                                                                     |                   |
| :::                                              | _number_                                                                                                                                                                                    | Target X position |
| :::                                              | _number_                                                                                                                                                                                    | Target Y position |
| `Object.ForceAngle()`                          | Angle of the sum of forces                                                                                                                                                                    |                   |
| `Object.ForceLength()`                         | Length of the sum of forces                                                                                                                                                                   |                   |
| `Object.ForceX()`                              | X coordinate of the sum of forces                                                                                                                                                             |                   |
| `Object.ForceY()`                              | Y coordinate of the sum of forces                                                                                                                                                             |                   |
| `Object.Height()`                              | Height of the object                                                                                                                                                                          |                   |
| `Object.Layer()`                               | Return the name of the layer the object is on                                                                                                                                                 |                   |
| `Object.ObjectName()`                          | Return the name of the object                                                                                                                                                                 |                   |
| `Object.ObjectTimerElapsedTime(string)`        | Value of a timer                                                                                                                                                                              |                   |
| :::                                              | _string_                                                                                                                                                                                    |   Timer's name    |
| `Object.SqDistance(object)`                    | Square distance between two objects                                                                                                                                                           |                   |
| :::                                              | _object_                                                                                                                                                                                    |      Object       |
| `Object.SqDistanceToPosition(number, number)`  | Square distance between an object and a position                                                                                                                                              |                   |
| :::                                              | _number_                                                                                                                                                                                    | Target X position |
| :::                                              | _number_                                                                                                                                                                                    | Target Y position |
| `Object.Variable(objectvar)`                   | Value of an object variable                                                                                                                                                                   |                   |
| :::                                              | _objectvar_                                                                                                                                                                                 |     Variable      |
| `Object.VariableChildCount(objectvar)`         | Number of children of an object variable                                                                                                                                                      |                   |
| :::                                              | _objectvar_                                                                                                                                                                                 |     Variable      |
| `Object.VariableString(objectvar)`             | Text of an object variable                                                                                                                                                                    |                   |
| :::                                              | _objectvar_                                                                                                                                                                                 |     Variable      |
| `Object.Width()`                               | Width of the object                                                                                                                                                                           |                   |
| `Object.X()`                                   | X position of the object                                                                                                                                                                      |                   |
| `Object.XFromAngleAndDistance(number, number)` | Compute the X position when given an angle and distance relative to the starting object. This is also known as getting the cartesian coordinates of a 2D vector, using its polar coordinates. |                   |
| :::                                              | _number_                                                                                                                                                                                    | Angle, in degrees |
| :::                                              | _number_                                                                                                                                                                                    |     Distance      |
| `Object.Y()`                                   | Y position of the object                                                                                                                                                                      |                   |
| `Object.YFromAngleAndDistance(number, number)` | Compute the Y position when given an angle and distance relative to the starting object. This is also known as getting the cartesian coordinates of a 2D vector, using its polar coordinates. |                   |
| :::                                              | _number_                                                                                                                                                                                    | Angle, in degrees |
| :::                                              | _number_                                                                                                                                                                                    |     Distance      |
| `Object.ZOrder()`                              | Z-order of an object                                                                                                                                                                          |                   |

---

## Sprite

Animated object which can be used for most elements of a game [Read more explanations about it.](http://wiki.compilgames.net/doku.php/gdevelop5/objects/sprite)

| Expresión                          | Descripción                         |                   |
|------------------------------------|-------------------------------------|:-----------------:|
| `Object.Animation()`             | Animation of the object             |                   |
| `Object.AnimationName()`         | Name of the animation of the object |                   |
| `Object.AnimationSpeedScale()`   | Animation speed scale               |                   |
| `Object.Direction()`             | Direction of the object             |                   |
| `Object.Opacity()`               | Opacity                             |                   |
| `Object.PointX(objectPointName)` | X position of a point               |                   |
| :::                                | _objectPointName_                 | Name of the point |
| `Object.PointY(objectPointName)` | Y position of a point               |                   |
| :::                                | _objectPointName_                 | Name of the point |
| `Object.ScaleX()`                | Scale of the width of an object     |                   |
| `Object.ScaleY()`                | Scale of the height of an object    |                   |
| `Object.Sprite()`                | Animation frame of the object       |                   |

---

## Standard Conversions

Expressions to convert number, texts and quantities. [Read more explanations about it.](http://wiki.compilgames.net/doku.php/gdevelop5/all-features/common-conversions)

| Expresión                       | Descripción                                                                         |                                    |
|---------------------------------|-------------------------------------------------------------------------------------|:----------------------------------:|
| `LargeNumberToString(number)` | Convert the result of the expression to text, without using the scientific notation |                                    |
| :::                             | _number_                                                                          | Expression to be converted to text |
| `ToDeg(number)`               | Converts the angle, expressed in radians, into degrees                              |                                    |
| :::                             | _number_                                                                          |         Angle, in radians          |
| `ToNumber(string)`            | Convert the text to a number                                                        |                                    |
| :::                             | _string_                                                                          |    Text to convert to a number     |
| `ToRad(number)`               | Converts the angle, expressed in degrees, into radians                              |                                    |
| :::                             | _number_                                                                          |         Angle, in degrees          |
| `ToString(number)`            | Convert the result of the expression to text                                        |                                    |
| :::                             | _number_                                                                          | Expression to be converted to text |

---

## Variable features

Actions, conditions and expressions to handle variables, from simple variables like the player score, the number of remaining lives to complex variables containing arbitrary data like an inventory or the result of a web request. [Read more explanations about it.](http://wiki.compilgames.net/doku.php/gdevelop5/all-features/variables)

| Expresión                               | Descripción                             |                             |
|-----------------------------------------|-----------------------------------------|:---------------------------:|
| `GlobalVariable(globalvar)`           | Value of a global variable              |                             |
| :::                                     | _globalvar_                           | Name of the global variable |
| `GlobalVariableChildCount(globalvar)` | Number of children of a global variable |                             |
| :::                                     | _globalvar_                           |          Variable           |
| `GlobalVariableString(globalvar)`     | Text of a global variable               |                             |
| :::                                     | _globalvar_                           |          Variable           |
| `Variable(scenevar)`                  | Value of a scene variable               |                             |
| :::                                     | _scenevar_                            |          Variable           |
| `VariableChildCount(scenevar)`        | Number of children of a scene variable  |                             |
| :::                                     | _scenevar_                            |          Variable           |
| `VariableString(scenevar)`            | Text of a scene variable                |                             |
| :::                                     | _scenevar_                            |          Variable           |

---

## Mouse and touch

Conditions and actions to handle either the mouse or touches on touchscreen. By default, conditions related to the mouse will also handle the touches - so that it's easier to handle both in your game. You can disable this behavior if you want to handle them separately in different events. [Read more explanations about it.](http://wiki.compilgames.net/doku.php/gdevelop5/all-features/mouse-touch)

| Expresión                         | Descripción                                        |                                           |
|-----------------------------------|----------------------------------------------------|:-----------------------------------------:|
| `LastEndedTouchId()`            | Identifier of the last ended touch                 |                                           |
| `LastTouchId()`                 | Identifier of the last touch                       |                                           |
| `MouseWheelDelta()`             | Mouse wheel displacement                           |                                           |
| `MouseX(layer, number)`         | Return the X position of the cursor or of a touch. |                                           |
| :::                               | _layer_                                          | Layer (base layer if empty) _Optional_. |
| :::                               | _number_                                         | Camera number (default : 0) _Optional_. |
| `MouseY(layer, number)`         | Return the Y position of the cursor or of a touch. |                                           |
| :::                               | _layer_                                          | Layer (base layer if empty) _Optional_. |
| :::                               | _number_                                         | Camera number (default : 0) _Optional_. |
| `TouchX(number, layer, number)` | Return the X position of a specific touch.         |                                           |
| :::                               | _number_                                         |             Touch identifier              |
| :::                               | _layer_                                          | Layer (base layer if empty) _Optional_. |
| :::                               | _number_                                         | Camera number (default : 0) _Optional_. |
| `TouchY(number, layer, number)` | Return the Y position of a specific touch.         |                                           |
| :::                               | _number_                                         |             Touch identifier              |
| :::                               | _layer_                                          | Layer (base layer if empty) _Optional_. |
| :::                               | _number_                                         | Camera number (default : 0) _Optional_. |

---

## Keyboard features

Allows your game to respond to keyboard input. Note that this does not work with on-screen keyboard on touch devices: use instead conditions related to touch when making a game for mobile/touchscreen devices. [Read more explanations about it.](http://wiki.compilgames.net/doku.php/gdevelop5/all-features/keyboard)

| Expresión            | Descripción                                            |     |
|----------------------|--------------------------------------------------------|:---:|
| `LastPressedKey()` | Get the name of the latest key pressed on the keyboard |     |

---

## Scene management features

Actions and conditions to manipulate the scenes during the game.

| Expresión                                  | Descripción               |               |
|--------------------------------------------|---------------------------|:-------------:|
| `CurrentSceneName()`                     | Name of the current scene |               |
| `Random(number)`                         | Random integer            |               |
| :::                                        | _number_                | Maximum value |
| `RandomFloat(number)`                    | Random float              |               |
| :::                                        | _number_                | Maximum value |
| `RandomFloatInRange(number, number)`     | Random float in range     |               |
| :::                                        | _number_                | Minimum value |
| :::                                        | _number_                | Maximum value |
| `RandomInRange(number, number)`          | Random integer in range   |               |
| :::                                        | _number_                | Minimum value |
| :::                                        | _number_                | Maximum value |
| `RandomWithStep(number, number, number)` | Random value in steps     |               |
| :::                                        | _number_                | Minimum value |
| :::                                        | _number_                | Maximum value |
| :::                                        | _number_                |     Step      |

---

## Time

Actions and conditions to run timers, get the current time or modify the time scale (speed at which the game is running - useful for slow motion effects). [Read more explanations about it.](http://wiki.compilgames.net/doku.php/gdevelop5/all-features/timers)

| Expresión                    | Descripción                                          |                                                                                                                                                                                                     |
|------------------------------|------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `Time(string)`             | Current time                                         |                                                                                                                                                                                                     |
| :::                          | _string_                                           | Hour: hour - Minutes: min - Seconds: sec - Day of month: mday - Months since January: mon - Year since 1900: year - Days since Sunday: wday - Days since Jan 1st: yday - Timestamp (ms): timestamp" |
| `TimeDelta()`              | Time elapsed since the last frame rendered on screen |                                                                                                                                                                                                     |
| `TimeFromStart()`          | Time elapsed since the beginning of the scene        |                                                                                                                                                                                                     |
| `TimerElapsedTime(string)` | Value of a scene timer                               |                                                                                                                                                                                                     |
| :::                          | _string_                                           |                                                                                            Timer's name                                                                                             |

---

## Mathematical tools

A set of mathematical functions that can be used in expressions.

| Expresión                                                    | Descripción                                                                                                                                                                                |                                        |
|--------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------:|
| `AngleBetweenPositions(number, number, number, number)`    | Compute the angle between two positions.                                                                                                                                                   |                                        |
| :::                                                          | _number_                                                                                                                                                                                 |         First point X position         |
| :::                                                          | _number_                                                                                                                                                                                 |         First point Y position         |
| :::                                                          | _number_                                                                                                                                                                                 |        Second point X position         |
| :::                                                          | _number_                                                                                                                                                                                 |        Second point Y position         |
| `AngleDifference(number, number)`                          | Difference between two angles                                                                                                                                                              |                                        |
| :::                                                          | _number_                                                                                                                                                                                 |              First angle               |
| :::                                                          | _number_                                                                                                                                                                                 |              Second angle              |
| `DistanceBetweenPositions(number, number, number, number)` | Compute the distance between two positions.                                                                                                                                                |                                        |
| :::                                                          | _number_                                                                                                                                                                                 |         First point X position         |
| :::                                                          | _number_                                                                                                                                                                                 |         First point Y position         |
| :::                                                          | _number_                                                                                                                                                                                 |        Second point X position         |
| :::                                                          | _number_                                                                                                                                                                                 |        Second point Y position         |
| `XFromAngleAndDistance(number, number)`                    | Compute the X position when given an angle and distance relative to the origin (0;0). This is also known as getting the cartesian coordinates of a 2D vector, using its polar coordinates. |                                        |
| :::                                                          | _number_                                                                                                                                                                                 |           Angle, in degrees            |
| :::                                                          | _number_                                                                                                                                                                                 |                Distance                |
| `YFromAngleAndDistance(number, number)`                    | Compute the Y position when given an angle and distance relative to the origin (0;0). This is also known as getting the cartesian coordinates of a 2D vector, using its polar coordinates. |                                        |
| :::                                                          | _number_                                                                                                                                                                                 |           Angle, in degrees            |
| :::                                                          | _number_                                                                                                                                                                                 |                Distance                |
| `abs(number)`                                              | Absolute value                                                                                                                                                                             |                                        |
| :::                                                          | _number_                                                                                                                                                                                 |               Expression               |
| `acos(number)`                                             | Arccosine                                                                                                                                                                                  |                                        |
| :::                                                          | _number_                                                                                                                                                                                 |               Expression               |
| `acosh(number)`                                            | Hyperbolic arccosine                                                                                                                                                                       |                                        |
| :::                                                          | _number_                                                                                                                                                                                 |               Expression               |
| `asin(number)`                                             | Arcsine                                                                                                                                                                                    |                                        |
| :::                                                          | _number_                                                                                                                                                                                 |               Expression               |
| `asinh(number)`                                            | Arcsine                                                                                                                                                                                    |                                        |
| :::                                                          | _number_                                                                                                                                                                                 |               Expression               |
| `atan(number)`                                             | Arctangent                                                                                                                                                                                 |                                        |
| :::                                                          | _number_                                                                                                                                                                                 |               Expression               |
| `atan2(number, number)`                                    | 2 argument arctangent (atan2)                                                                                                                                                              |                                        |
| :::                                                          | _number_                                                                                                                                                                                 |                   Y                    |
| :::                                                          | _number_                                                                                                                                                                                 |                   X                    |
| `atanh(number)`                                            | Hyperbolic arctangent                                                                                                                                                                      |                                        |
| :::                                                          | _number_                                                                                                                                                                                 |               Expression               |
| `cbrt(number)`                                             | Cube root                                                                                                                                                                                  |                                        |
| :::                                                          | _number_                                                                                                                                                                                 |               Expression               |
| `ceil(number)`                                             | Round number up to an integer                                                                                                                                                              |                                        |
| :::                                                          | _number_                                                                                                                                                                                 |               Expression               |
| `clamp(number, number, number)`                            | Restrict a value to a given range                                                                                                                                                          |                                        |
| :::                                                          | _number_                                                                                                                                                                                 |                 Value                  |
| :::                                                          | _number_                                                                                                                                                                                 |                  Min                   |
| :::                                                          | _number_                                                                                                                                                                                 |                  Max                   |
| `cos(number)`                                              | Cosine of a number                                                                                                                                                                         |                                        |
| :::                                                          | _number_                                                                                                                                                                                 |               Expression               |
| `cosh(number)`                                             | Hyperbolic cosine                                                                                                                                                                          |                                        |
| :::                                                          | _number_                                                                                                                                                                                 |               Expression               |
| `cot(number)`                                              | Cotangent of a number                                                                                                                                                                      |                                        |
| :::                                                          | _number_                                                                                                                                                                                 |               Expression               |
| `csc(number)`                                              | Cosecant of a number                                                                                                                                                                       |                                        |
| :::                                                          | _number_                                                                                                                                                                                 |               Expression               |
| `exp(number)`                                              | Exponential of a number                                                                                                                                                                    |                                        |
| :::                                                          | _number_                                                                                                                                                                                 |               Expression               |
| `floor(number)`                                            | Round number down to an integer                                                                                                                                                            |                                        |
| :::                                                          | _number_                                                                                                                                                                                 |               Expression               |
| `lerp(number, number, number)`                             | Linearly interpolate a to b by x                                                                                                                                                           |                                        |
| :::                                                          | _number_                                                                                                                                                                                 |          a (in a+(b-a) * x)           |
| :::                                                          | _number_                                                                                                                                                                                 |          b (in a+(b-a) * x)           |
| :::                                                          | _number_                                                                                                                                                                                 |          x (in a+(b-a) * x)           |
| `log(number)`                                              | Logarithm                                                                                                                                                                                  |                                        |
| :::                                                          | _number_                                                                                                                                                                                 |               Expression               |
| `log10(number)`                                            | Base-10 logarithm                                                                                                                                                                          |                                        |
| :::                                                          | _number_                                                                                                                                                                                 |               Expression               |
| `log2(number)`                                             | Base 2 Logarithm                                                                                                                                                                           |                                        |
| :::                                                          | _number_                                                                                                                                                                                 |               Expression               |
| `max(number, number)`                                      | Maximum of two numbers                                                                                                                                                                     |                                        |
| :::                                                          | _number_                                                                                                                                                                                 |            First expression            |
| :::                                                          | _number_                                                                                                                                                                                 |           Second expression            |
| `min(number, number)`                                      | Minimum of two numbers                                                                                                                                                                     |                                        |
| :::                                                          | _number_                                                                                                                                                                                 |            First expression            |
| :::                                                          | _number_                                                                                                                                                                                 |           Second expression            |
| `mod(number, number)`                                      | x mod y                                                                                                                                                                                    |                                        |
| :::                                                          | _number_                                                                                                                                                                                 |           x (as in x mod y)            |
| :::                                                          | _number_                                                                                                                                                                                 |           y (as in x mod y)            |
| `normalize(number, number, number)`                        | Remap a value between 0 and 1.                                                                                                                                                             |                                        |
| :::                                                          | _number_                                                                                                                                                                                 |                 Value                  |
| :::                                                          | _number_                                                                                                                                                                                 |                  Min                   |
| :::                                                          | _number_                                                                                                                                                                                 |                  Max                   |
| `nthroot(number, number)`                                  | Nth root of a number                                                                                                                                                                       |                                        |
| :::                                                          | _number_                                                                                                                                                                                 |                 Number                 |
| :::                                                          | _number_                                                                                                                                                                                 |                   N                    |
| `pow(number, number)`                                      | Raise a number to power n                                                                                                                                                                  |                                        |
| :::                                                          | _number_                                                                                                                                                                                 |                 Number                 |
| :::                                                          | _number_                                                                                                                                                                                 | The exponent (n in "x to the power n") |
| `round(number)`                                            | Round a number                                                                                                                                                                             |                                        |
| :::                                                          | _number_                                                                                                                                                                                 |               Expression               |
| `sec(number)`                                              | Secant                                                                                                                                                                                     |                                        |
| :::                                                          | _number_                                                                                                                                                                                 |               Expression               |
| `sign(number)`                                             | Return the sign of a number (1,-1 or 0)                                                                                                                                                    |                                        |
| :::                                                          | _number_                                                                                                                                                                                 |               Expression               |
| `sin(number)`                                              | Sine of a number                                                                                                                                                                           |                                        |
| :::                                                          | _number_                                                                                                                                                                                 |               Expression               |
| `sinh(number)`                                             | Hyperbolic sine                                                                                                                                                                            |                                        |
| :::                                                          | _number_                                                                                                                                                                                 |               Expression               |
| `sqrt(number)`                                             | Square root of a number                                                                                                                                                                    |                                        |
| :::                                                          | _number_                                                                                                                                                                                 |               Expression               |
| `tan(number)`                                              | Tangent of a number                                                                                                                                                                        |                                        |
| :::                                                          | _number_                                                                                                                                                                                 |               Expression               |
| `tanh(number)`                                             | Hyperbolic tangent                                                                                                                                                                         |                                        |
| :::                                                          | _number_                                                                                                                                                                                 |               Expression               |
| `trunc(number)`                                            | Truncate a number                                                                                                                                                                          |                                        |
| :::                                                          | _number_                                                                                                                                                                                 |               Expression               |

---

## Cameras and layers features

Each scene can be composed of multiple layers. These conditions and actions allow to manipulate them during the game. In particular, you can move the camera of a layer to center it on an object or a position. [Read more explanations about it.](http://wiki.compilgames.net/doku.php/gdevelop5/interface/scene-editor/layers-and-cameras)

| Expresión                       | Descripción                                      |                                           |
|---------------------------------|--------------------------------------------------|:-----------------------------------------:|
| `CameraAngle(layer, number)`  | Return the angle of rotation of a camera.        |                                           |
| :::                             | _layer_                                        | Layer (base layer if empty) _Optional_. |
| :::                             | _number_                                       | Camera number (default : 0) _Optional_. |
| `CameraHeight(layer, number)` | Return the height of a camera of a layer.        |                                           |
| :::                             | _layer_                                        |        Layer (base layer if empty)        |
| :::                             | _number_                                       |               Camera number               |
| `CameraWidth(layer, number)`  | Return the width of a camera of a layer.         |                                           |
| :::                             | _layer_                                        |        Layer (base layer if empty)        |
| :::                             | _number_                                       |               Camera number               |
| `CameraX(layer, number)`      | Return the X position of the center of a camera. |                                           |
| :::                             | _layer_                                        | Layer (base layer if empty) _Optional_. |
| :::                             | _number_                                       | Camera number (default : 0) _Optional_. |
| `CameraY(layer, number)`      | Return the Y position of the center of a camera. |                                           |
| :::                             | _layer_                                        | Layer (base layer if empty) _Optional_. |
| :::                             | _number_                                       | Camera number (default : 0) _Optional_. |
| `CameraZoom(layer, number)`   | Zoom of a camera of a layer                      |                                           |
| :::                             | _layer_                                        |            Layer _Optional_.            |
| :::                             | _number_                                       | Camera number (default : 0) _Optional_. |
| `LayerDefaultZOrder(layer)`   | Default Z Order for a layer                      |                                           |
| :::                             | _layer_                                        |                   Layer                   |
| `LayerTimeScale(layer)`       | Time scale                                       |                                           |
| :::                             | _layer_                                        |                   Layer                   |

---

## Audio

GDevelop provides several conditions and actions to play audio files. They can be either long musics or short sound effects. [Read more explanations about it.](http://wiki.compilgames.net/doku.php/gdevelop5/all-features/audio)

| Expresión                             | Descripción          |         |
|---------------------------------------|----------------------|:-------:|
| `GlobalVolume()`                    | Global volume value  |         |
| `MusicChannelPitch(number)`         | Music's pitch        |         |
| :::                                   | _number_           | Channel |
| `MusicChannelPlayingOffset(number)` | Music playing offset |         |
| :::                                   | _number_           | Channel |
| `MusicChannelVolume(number)`        | Music volume         |         |
| :::                                   | _number_           | Channel |
| `SoundChannelPitch(number)`         | Sound's pitch        |         |
| :::                                   | _number_           | Channel |
| `SoundChannelPlayingOffset(number)` | Sound playing offset |         |
| :::                                   | _number_           | Channel |
| `SoundChannelVolume(number)`        | Sound volume         |         |
| :::                                   | _number_           | Channel |

---

## Basic internet features

Features to send web requests, communicate with external "APIs" and other network related tasks. [Read more explanations about it.](http://wiki.compilgames.net/doku.php/gdevelop5/all-features/network)

| Expresión                              | Descripción                        |                                       |
|----------------------------------------|------------------------------------|:-------------------------------------:|
| `GlobalVarToJSON(globalvar)`         | Convert a global variable to JSON  |                                       |
| :::                                    | _globalvar_                      | The global variable to be stringified |
| `ObjectVarToJSON(object, objectvar)` | Convert an object variable to JSON |                                       |
| :::                                    | _object_                         |     The object with the variable      |
| :::                                    | _objectvar_                      | The object variable to be stringified |
| `ToJSON(scenevar)`                   | Convert a scene variable to JSON   |                                       |
| :::                                    | _scenevar_                       |   Scene variable to be stringified    |

---

## Window features

Provides actions and conditions to manipulate the game window. Depending on the platform on which the game is running, not all of these features can be applied. [Read more explanations about it.](http://wiki.compilgames.net/doku.php/gdevelop5/all-features/window)

| Expresión               | Descripción                                                   |     |
|-------------------------|---------------------------------------------------------------|:---:|
| `SceneWindowHeight()` | Height of the scene window (or scene canvas for HTML5 games)  |     |
| `SceneWindowWidth()`  | Width of the scene window (or scene canvas for HTML5 games)   |     |
| `ScreenHeight()`      | Height of the screen (or the page for HTML5 games in browser) |     |
| `ScreenWidth()`       | Width of the screen (or the page for HTML5 games in browser)  |     |
| `WindowTitle()`       | Window's title                                                |     |

---

## Text manipulation

Provides expressions to manipulate strings (also called texts).

| Expresión                                   | Descripción                                                                                                                                             |                                                                              |
|---------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------:|
| `FromCodePoint(number)`                   | Get character from code point                                                                                                                           |                                                                              |
| :::                                         | _number_                                                                                                                                              |                                  Code point                                  |
| `NewLine()`                               | Insert a new line                                                                                                                                       |                                                                              |
| `StrAt(string, number)`                   | Get a character from a text                                                                                                                             |                                                                              |
| :::                                         | _string_                                                                                                                                              |                                     Text                                     |
| :::                                         | _number_                                                                                                                                              |        Position of the character (the first letter is at position 0)         |
| `StrFind(string, string)`                 | Search in a text (return the position of the result or -1 if not found)                                                                                 |                                                                              |
| :::                                         | _string_                                                                                                                                              |                                     Text                                     |
| :::                                         | _string_                                                                                                                                              |                              Text to search for                              |
| `StrFindFrom(string, string, number)`     | Search in a text, starting from a position (return the position of the result or -1 if not found)                                                       |                                                                              |
| :::                                         | _string_                                                                                                                                              |                                     Text                                     |
| :::                                         | _string_                                                                                                                                              |                              Text to search for                              |
| :::                                         | _number_                                                                                                                                              | Position of the first character in the string to be considered in the search |
| `StrFindLast(string, string)`             | Search the last occurence in a string (return the position of the result, from the beginning of the string, or -1 if not found)                         |                                                                              |
| :::                                         | _string_                                                                                                                                              |                                     Text                                     |
| :::                                         | _string_                                                                                                                                              |                              Text to search for                              |
| `StrFindLastFrom(string, string, number)` | Search in a text the last occurence, starting from a position (return the position of the result, from the beginning of the string, or -1 if not found) |                                                                              |
| :::                                         | _string_                                                                                                                                              |                                     Text                                     |
| :::                                         | _string_                                                                                                                                              |                              Text to search for                              |
| :::                                         | _number_                                                                                                                                              | Position of the last character in the string to be considered in the search  |
| `StrLength(string)`                       | Length of a text                                                                                                                                        |                                                                              |
| :::                                         | _string_                                                                                                                                              |                                     Text                                     |
| `StrRepeat(string, number)`               | Repeat a text                                                                                                                                           |                                                                              |
| :::                                         | _string_                                                                                                                                              |                                Text to repeat                                |
| :::                                         | _number_                                                                                                                                              |                               Repetition count                               |
| `SubStr(string, number, number)`          | Get a portion of a text                                                                                                                                 |                                                                              |
| :::                                         | _string_                                                                                                                                              |                                     Text                                     |
| :::                                         | _number_                                                                                                                                              |      Start position of the portion (the first letter is at position 0)       |
| :::                                         | _number_                                                                                                                                              |                            Length of the portion                             |
| `ToLowerCase(string)`                     | Lowercase a text                                                                                                                                        |                                                                              |
| :::                                         | _string_                                                                                                                                              |                                     Text                                     |
| `ToUpperCase(string)`                     | Uppercase a text                                                                                                                                        |                                                                              |
| :::                                         | _string_                                                                                                                                              |                                     Text                                     |

---

## Advanced control features

Advanced control features to be used in events.

| Expresión                       | Descripción                                           |                |
|---------------------------------|-------------------------------------------------------|:--------------:|
| `GetArgumentAsNumber(string)` | Get function parameter (also called "argument") value |                |
| :::                             | _string_                                            | Parameter name |
| `GetArgumentAsString(string)` | Get function parameter (also called "argument") text  |                |
| :::                             | _string_                                            | Parameter name |

---

## Platform (from extension Platform Behavior)

Platform that Platformer characters can run on. [Read more explanations about it.](http://wiki.compilgames.net/doku.php/gdevelop5/behaviors/platformer)

_No expressions for this behavior._

## Platformer character (from extension Platform Behavior)

Controllable character that can jump and run on platforms. [Read more explanations about it.](http://wiki.compilgames.net/doku.php/gdevelop5/behaviors/platformer)

| Expresión                                          | Descripción                                                                                       |     |
|----------------------------------------------------|---------------------------------------------------------------------------------------------------|:---:|
| `Object.PlatformerObject::Acceleration()`        | Acceleration                                                                                      |     |
| `Object.PlatformerObject::CurrentFallSpeed()`    | Current fall speed                                                                                |     |
| `Object.PlatformerObject::CurrentJumpSpeed()`    | Current jump speed                                                                                |     |
| `Object.PlatformerObject::CurrentSpeed()`        | Current speed                                                                                     |     |
| `Object.PlatformerObject::Deceleration()`        | Deceleration                                                                                      |     |
| `Object.PlatformerObject::Gravity()`             | Get the gravity applied on the object                                                             |     |
| `Object.PlatformerObject::JumpSpeed()`           | Jump speed                                                                                        |     |
| `Object.PlatformerObject::JumpSustainTime()`     | The time during which keeping the jump button held allow the initial jump speed to be maintained. |     |
| `Object.PlatformerObject::LadderClimbingSpeed()` | Get the ladder climbing speed                                                                     |     |
| `Object.PlatformerObject::MaxFallingSpeed()`     | Get the maximum falling speed                                                                     |     |
| `Object.PlatformerObject::MaxSpeed()`            | Maximum speed                                                                                     |     |

---

## Destroy when outside of the screen (from extension Destroy Outside Screen Behavior)

Automatically destroy the object when it goes outside of the screen's borders. [Read more explanations about it.](http://wiki.compilgames.net/doku.php/gdevelop5/behaviors/destroyoutside)

_No expressions for this behavior._

---

## Tiled Sprite (from extension Tiled Sprite Object)

Displays an image repeated over an area. [Read more explanations about it.](http://wiki.compilgames.net/doku.php/gdevelop5/objects/tiled_sprite)

| Expresión            | Descripción |     |
|----------------------|-------------|:---:|
| `Object.Opacity()` | Opacity     |     |

---

## Draggable object (from extension Draggable Behavior)

Allows objects to be moved using the mouse (or touch). [Read more explanations about it.](http://wiki.compilgames.net/doku.php/gdevelop5/behaviors/draggable)

_No expressions for this behavior._

---

## Top-down movement (4 or 8 directions) (from extension Top-down movement)

Objects with this behavior can be moved left, up, right, and down (and, optionally, diagonally). [Read more explanations about it.](http://wiki.compilgames.net/doku.php/gdevelop5/behaviors/topdown)

| Expresión                                         | Descripción                           |     |
|---------------------------------------------------|---------------------------------------|:---:|
| `Object.TopDownMovement::Acceleration()`        | Acceleration of the object            |     |
| `Object.TopDownMovement::Angle()`               | Angle, in degrees, of the movement    |     |
| `Object.TopDownMovement::AngleOffset()`         | Rotation offset applied to the object |     |
| `Object.TopDownMovement::AngularMaxSpeed()`     | Angular maximum speed of the object   |     |
| `Object.TopDownMovement::Deceleration()`        | Deceleration of the object            |     |
| `Object.TopDownMovement::MaxSpeed()`            | Maximum speed of the object           |     |
| `Object.TopDownMovement::MovementAngleOffset()` | Return the movement angle offset.     |     |
| `Object.TopDownMovement::Speed()`               | Speed of the object                   |     |
| `Object.TopDownMovement::XVelocity()`           | Speed on the X axis of the movement   |     |
| `Object.TopDownMovement::YVelocity()`           | Speed on the Y axis of the movement   |     |

---

## Text (from extension Text object)

Displays a text on the screen. [Read more explanations about it.](http://wiki.compilgames.net/doku.php/gdevelop5/objects/text)

| Expresión            | Descripción              |     |
|----------------------|--------------------------|:---:|
| `Object.Angle()`   | Angle                    |     |
| `Object.Opacity()` | Opacity of a Text object |     |
| `Object.Padding()` | Padding                  |     |
| `Object.ScaleX()`  | X Scale of a Text object |     |
| `Object.ScaleY()`  | Y Scale of a Text object |     |
| `Object.String()`  | Text                     |     |

---

## Particles emitter (from extension Particle system)

Displays a large number of small particles to create visual effects. [Read more explanations about it.](http://wiki.compilgames.net/doku.php/gdevelop5/objects/particles_emitter)

| Expresión                          | Descripción                              |     |
|------------------------------------|------------------------------------------|:---:|
| `Object.EmitterAngle()`          | Emission angle                           |     |
| `Object.EmitterAngleA()`         | Emission angle A                         |     |
| `Object.EmitterAngleB()`         | Emission angle B                         |     |
| `Object.EmitterForceMax()`       | Emission maximal force                   |     |
| `Object.EmitterForceMin()`       | Emission minimal force                   |     |
| `Object.Flow()`                  | Flow                                     |     |
| `Object.NbParticles()`           | Particles number                         |     |
| `Object.ParticleAlpha1()`        | Parameter 1 of transparency              |     |
| `Object.ParticleAlpha2()`        | Parameter 2 of transparency              |     |
| `Object.ParticleBlue1()`         | Parameter 1 of blue color                |     |
| `Object.ParticleBlue2()`         | Parameter 2 of blue color                |     |
| `Object.ParticleGravityAngle()`  | Gravity angle                            |     |
| `Object.ParticleGravityLength()` | Gravity value                            |     |
| `Object.ParticleGravityX()`      | X Gravity of particles                   |     |
| `Object.ParticleGravityY()`      | Y Gravity of particles                   |     |
| `Object.ParticleGreen1()`        | Parameter 1 of green color               |     |
| `Object.ParticleGreen2()`        | Parameter 2 of green color               |     |
| `Object.ParticleLifeTimeMax()`   | Maximum lifetime of particles            |     |
| `Object.ParticleLifeTimeMin()`   | Minimum lifetime of particles            |     |
| `Object.ParticleRed1()`          | Parameter 1 of red color                 |     |
| `Object.ParticleRed2()`          | Parameter 2 of red color                 |     |
| `Object.ParticleSize1()`         | Parameter 1 of size                      |     |
| `Object.ParticleSize2()`         | Parameter 2 of size                      |     |
| `Object.RendererParam1()`        | Rendering first parameter                |     |
| `Object.RendererParam2()`        | Rendering second parameter               |     |
| `Object.Tank()`                  | Capacity                                 |     |
| `Object.Texture()`               | Name of the image displayed by particles |     |
| `Object.ZoneRadius()`            | Radius of the emission zone              |     |

---

## Panel Sprite ("9-patch") (from extension Panel Sprite (9-patch) Object)

An image with edges and corners that are stretched separately from the full image. [Read more explanations about it.](http://wiki.compilgames.net/doku.php/gdevelop5/objects/panel_sprite)

| Expresión            | Descripción |     |
|----------------------|-------------|:---:|
| `Object.Opacity()` | Opacity     |     |

---

## Anchor

Behavior that anchors objects to the window's bounds. [Read more explanations about it.](http://wiki.compilgames.net/doku.php/gdevelop5/behaviors/anchor)

_No expressions for this behavior._

---

## Shape painter

Allows you to draw simple shapes on the screen [Read more explanations about it.](http://wiki.compilgames.net/doku.php/gdevelop5/objects/shape_painter)

| Expresión                      | Descripción                   |     |
|--------------------------------|-------------------------------|:---:|
| `Object.FillColorBlue()`     | Filing color blue component   |     |
| `Object.FillColorGreen()`    | Filing color green component  |     |
| `Object.FillColorRed()`      | Filing color red component    |     |
| `Object.FillOpacity()`       | Filling opacity               |     |
| `Object.OutlineColorBlue()`  | Outline color blue component  |     |
| `Object.OutlineColorGreen()` | Outline color green component |     |
| `Object.OutlineColorRed()`   | Outline color red component   |     |
| `Object.OutlineOpacity()`    | Outline opacity               |     |
| `Object.OutlineSize()`       | Outline size                  |     |

---

## Text entry (from extension Text entry object)

Invisible object used to get the text entered with the keyboard. [Read more explanations about it.](http://wiki.compilgames.net/doku.php/gdevelop5/objects/text_entry)

| Expresión           | Descripción                |     |
|---------------------|----------------------------|:---:|
| `Object.String()` | Text entered with keyboard |     |

---

## Inventory

Provides actions and conditions to add an inventory to your game, with items in memory. [Read more explanations about it.](http://wiki.compilgames.net/doku.php/gdevelop5/all-features/inventory)

| Expresión                            | Descripción                                |                |
|--------------------------------------|--------------------------------------------|:--------------:|
| `Inventory::Count(string, string)` | Get the number of an item in the inventory |                |
| :::                                  | _string_                                 | Inventory name |
| :::                                  | _string_                                 |   Item name    |

---

## Pathfinding (from extension Pathfinding behavior)

With this behavior, the object will move while avoiding all objects that are flagged as obstacles. [Read more explanations about it.](http://wiki.compilgames.net/doku.php/gdevelop5/behaviors/pathfinding)

| Expresión                                 | Descripción                                     |                          |
|-------------------------------------------|-------------------------------------------------|:------------------------:|
| `Object.Pathfinding::Acceleration()`    | Acceleration of the object on the path          |                          |
| `Object.Pathfinding::AngleOffset()`     | Rotation offset applied the object on the path  |                          |
| `Object.Pathfinding::AngularMaxSpeed()` | Angular maximum speed of the object on the path |                          |
| `Object.Pathfinding::CellHeight()`      | Height of the virtual grid                      |                          |
| `Object.Pathfinding::CellWidth()`       | Width of the virtual grid                       |                          |
| `Object.Pathfinding::DestinationX()`    | Destination X position                          |                          |
| `Object.Pathfinding::DestinationY()`    | Destination Y position                          |                          |
| `Object.Pathfinding::ExtraBorder()`     | Extra border applied the object on the path     |                          |
| `Object.Pathfinding::GetNodeX(number)`  | Get next waypoint X position                    |                          |
| :::                                       | _number_                                      | Node index (start at 0!) |
| `Object.Pathfinding::GetNodeY(number)`  | Get next waypoint Y position                    |                          |
| :::                                       | _number_                                      | Node index (start at 0!) |
| `Object.Pathfinding::GridOffsetX()`     | Return X offset of the virtual grid.            |                          |
| `Object.Pathfinding::GridOffsetY()`     | Return Y offset of the virtual grid.            |                          |
| `Object.Pathfinding::LastNodeX()`       | Last waypoint X position                        |                          |
| `Object.Pathfinding::LastNodeY()`       | Last waypoint Y position                        |                          |
| `Object.Pathfinding::MaxSpeed()`        | Maximum speed of the object on the path         |                          |
| `Object.Pathfinding::MovementAngle()`   | Angle of movement on its path                   |                          |
| `Object.Pathfinding::NextNodeIndex()`   | Get the index of the next waypoint to reach     |                          |
| `Object.Pathfinding::NextNodeX()`       | Get next waypoint X position                    |                          |
| `Object.Pathfinding::NextNodeY()`       | Get next waypoint Y position                    |                          |
| `Object.Pathfinding::NodeCount()`       | Get the number of waypoints on the path         |                          |
| `Object.Pathfinding::Speed()`           | Speed of the object on the path                 |                          |

## Obstacle for pathfinding (from extension Pathfinding behavior)

Flag the object as being an obstacle for pathfinding. [Read more explanations about it.](http://wiki.compilgames.net/doku.php/gdevelop5/behaviors/pathfinding)

| Expresión                              | Descripción   |     |
|----------------------------------------|---------------|:---:|
| `Object.PathfindingObstacle::Cost()` | Obstacle cost |     |

---

## Physics Engine (from extension Physics Engine (deprecated))

Make objects move as if they are subject to the laws of physics. If you're creating a new game, prefer Physics Engine 2.0 [Read more explanations about it.](http://wiki.compilgames.net/doku.php/gdevelop5/behaviors/physics)

| Expresión                             | Descripción               |     |
|---------------------------------------|---------------------------|:---:|
| `Object.Physics::AngularDamping()`  | Angular damping           |     |
| `Object.Physics::AngularVelocity()` | Angular speed             |     |
| `Object.Physics::LinearDamping()`   | Linear damping            |     |
| `Object.Physics::LinearVelocity()`  | Linear speed              |     |
| `Object.Physics::LinearVelocityX()` | X component               |     |
| `Object.Physics::LinearVelocityY()` | Y component               |     |
| `Object.Physics::PolygonScaleX()`   | Collision polygon X scale |     |
| `Object.Physics::PolygonScaleY()`   | Collision polygon Y scale |     |

---

## Advanced window management

Provides advanced features related to the game window positioning and interaction with the operating system.

| Expresión                           | Descripción                                                                      |     |
|-------------------------------------|----------------------------------------------------------------------------------|:---:|
| `AdvancedWindow::WindowOpacity()` | Returns the current window opacity (a number from 0 to 1, 1 being fully opaque). |     |
| `AdvancedWindow::WindowX()`       | Returns the current window X position.                                           |     |
| `AdvancedWindow::WindowY()`       | Returns the current window Y position.                                           |     |

---

## BBText (from extension BBCode Text Object)

Displays a rich text label using BBCode markup (allowing to set parts of the text as bold, italic, use different colors and shadows). [Read more explanations about it.](http://wiki.compilgames.net/doku.php/gdevelop5/objects/bbtext)

| Expresión                     | Descripción              |     |
|-------------------------------|--------------------------|:---:|
| `Object.GetBBText()`        | Get BBCode text          |     |
| `Object.GetFontFamily()`    | Get the base font family |     |
| `Object.GetFontSize()`      | Get the base font size   |     |
| `Object.GetOpacity()`       | Get the base opacity     |     |
| `Object.GetWrappingWidth()` | Get the wrapping width   |     |

---

## Bitmap Text

Displays a text using a "Bitmap Font" (an image representing characters). This is more performant than a traditional Text object and it allows for complete control on the characters aesthetic. [Read more explanations about it.](http://wiki.compilgames.net/doku.php/gdevelop5/objects/bitmap_text)

| Expresión                  | Descripción                                                                |     |
|----------------------------|----------------------------------------------------------------------------|:---:|
| `Object.Alignment()`     | Return the text alignment.                                                 |     |
| `Object.FontName()`      | Return the font name (defined in the Bitmap font).                         |     |
| `Object.FontSize()`      | Return the font size, defined in the Bitmap Font.                          |     |
| `Object.Opacity()`       | Return the opacity, between 0 (fully transparent) and 255 (opaque).        |     |
| `Object.Scale()`         | Return the scale (1 by default).                                           |     |
| `Object.Text()`          | Return the text.                                                           |     |
| `Object.WrappingWidth()` | Return the width, in pixels, after which the text is wrapped on next line. |     |

---

## Device sensors

Allow the game to access the sensors of a mobile device. [Read more explanations about it.](http://wiki.compilgames.net/doku.php/gdevelop5/all-features/device-sensors)

| Expresión                                | Descripción                                                 |     |
|------------------------------------------|-------------------------------------------------------------|:---:|
| `DeviceSensors::AccelerationX()`       | Get the devices acceleration on the X-axis (m/s²)           |     |
| `DeviceSensors::AccelerationY()`       | Get the devices acceleration on the Y-axis (m/s²)           |     |
| `DeviceSensors::AccelerationZ()`       | Get the devices acceleration on the Z-axis (m/s²)           |     |
| `DeviceSensors::OrientationAbsolute()` | Get if the devices orientation is absolute and not relative |     |
| `DeviceSensors::OrientationAlpha()`    | Get the devices orientation Alpha (compass)                 |     |
| `DeviceSensors::OrientationBeta()`     | Get the devices orientation Beta                            |     |
| `DeviceSensors::OrientationGamma()`    | Get the devices orientation Gamma value                     |     |
| `DeviceSensors::RotationAlpha()`       | Get the devices rotation Alpha                              |     |
| `DeviceSensors::RotationBeta()`        | Get the devices rotation Beta                               |     |
| `DeviceSensors::RotationGamma()`       | Get the devices rotation Gamma                              |     |

---

## Dialogue Tree (Experimental)

Handle dialogue trees, made using Yarn Spinner. Useful to make complex dialogues with multiple choices. The Yarn Spinner editor is embedded in GDevelop so you can edit your dialogues without leaving GDevelop. [Read more explanations about it.](http://wiki.compilgames.net/doku.php/gdevelop5/all-features/dialogue-tree)

| Expresión                                       | Descripción                                                                                                                                                          |                                      |
|-------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------:|
| `DialogueTree::BranchTag(number)`             | Get a tag of the current branch of the running dialogue via its index                                                                                                |                                      |
| :::                                             | _number_                                                                                                                                                           |           Tag Index Number           |
| `DialogueTree::BranchTags()`                  | Get the tags of the current branch of the running dialogue                                                                                                           |                                      |
| `DialogueTree::BranchText()`                  | Get the full raw text of the current branch                                                                                                                          |                                      |
| `DialogueTree::BranchTitle()`                 | Get the title of the current branch of the running dialogue                                                                                                          |                                      |
| `DialogueTree::ClippedLineText()`             | Get dialogue line text clipped by the typewriter effect. Use the "Scroll clipped text" action to control the typewriter effect.                                      |                                      |
| `DialogueTree::CommandParameter(number)`      | Get the parameters of a command call - \<\<command withParameter anotherParameter\>\>                                                                                |                                      |
| :::                                             | _number_                                                                                                                                                           | parameter Index Number _Optional_. |
| `DialogueTree::CommandParametersCount()`      | Get the number of parameters in the currently passed command                                                                                                         |                                      |
| `DialogueTree::HorizontalOptionsList(string)` | Get the text of all available options from an Options line type as a horizontal list. You can also pass the selected option's cursor string, which by default is -\> |                                      |
| :::                                             | _string_                                                                                                                                                           |       Options Selection Cursor       |
| `DialogueTree::LineText()`                    | Returns the current dialogue line text                                                                                                                               |                                      |
| `DialogueTree::Option(number)`                | Get the text of an option from an Options line type, using the option's Number. The numbers start from 0.                                                            |                                      |
| :::                                             | _number_                                                                                                                                                           |         Option Index Number          |
| `DialogueTree::OptionsCount()`                | Get the number of options in an options line type                                                                                                                    |                                      |
| `DialogueTree::SelectedOptionIndex()`         | Get the number of the currently selected option. Use this to help you render the option selection marker at the right place.                                         |                                      |
| `DialogueTree::TagParameter(number)`          | Get parameter from a Tag found by the branch contains tag condition                                                                                                  |                                      |
| :::                                             | _number_                                                                                                                                                           | parameter Index Number _Optional_. |
| `DialogueTree::Variable(string)`              | Get dialogue state value                                                                                                                                             |                                      |
| :::                                             | _string_                                                                                                                                                           |            Variable Name             |
| `DialogueTree::VerticalOptionsList(string)`   | Get the text of all available options from an Options line type as a vertical list. You can also pass the selected option's cursor string, which by default is -\>   |                                      |
| :::                                             | _string_                                                                                                                                                           |       Options Selection Cursor       |
| `DialogueTree::VisitedBranchTitles()`         | Get a list of all visited branches                                                                                                                                   |                                      |

---

## Facebook Instant Games

Allow your game to send scores and interact with the Facebook Instant Games platform. [Read more explanations about it.](http://wiki.compilgames.net/doku.php/gdevelop5/publishing/publishing-to-facebook-instant-games)

| Expresión                              | Descripción                      |     |
|----------------------------------------|----------------------------------|:---:|
| `FacebookInstantGames::PlayerId()`   | Get the player unique identifier |     |
| `FacebookInstantGames::PlayerName()` | Get the player name              |     |

---

## Filesystem

Access the filesystem of the operating system. [Read more explanations about it.](http://wiki.compilgames.net/doku.php/gdevelop5/all-features/filesystem)

| Expresión                                | Descripción                                                                                                          |                     |
|------------------------------------------|----------------------------------------------------------------------------------------------------------------------|:-------------------:|
| `<FileSystem::DesktopPath>()`          | Get the path to the desktop folder.                                                                                  |                     |
| `FileSystem::DirectoryName(string)`    | Returns the portion of the path that represents the directories, without the ending file name.                       |                     |
| :::                                      | _string_                                                                                                           | File or folder path |
| `<FileSystem::DocumentsPath>()`        | Get the path to the documents folder.                                                                                |                     |
| `<FileSystem::ExecutableFolderPath>()` | Get the path to this game executable folder.                                                                         |                     |
| `<FileSystem::ExecutablePath>()`       | Get the path to this game executable file.                                                                           |                     |
| `FileSystem::ExtensionName(string)`    | Returns the extension of the file designated by the given path, including the extension period. For example: ".txt". |                     |
| :::                                      | _string_                                                                                                           |      File path      |
| `FileSystem::FileName(string)`         | Returns the name of the file with its extension, if any.                                                             |                     |
| :::                                      | _string_                                                                                                           |      File path      |
| `<FileSystem::PathDelimiter>()`        | Get the operating system path delimiter.                                                                             |                     |
| `<FileSystem::PicturesPath>()`         | Get the path to the pictures folder.                                                                                 |                     |
| `<FileSystem::TempPath>()`             | Get the path to temp folder.                                                                                         |                     |
| `<FileSystem::UserHomePath>()`         | Get the path to the user home folder.                                                                                |                     |
| `<FileSystem::UserdataPath>()`         | Get the path to userdata folder (for application settings).                                                          |                     |

---

## Firebase

Use Google Firebase services (database, functions, storage...) in your game. [Read more explanations about it.](http://wiki.compilgames.net/doku.php/gdevelop5/all-features/firebase)

| Expresión                                   | Descripción                                                                                     |              |
|---------------------------------------------|-------------------------------------------------------------------------------------------------|:------------:|
| `Firebase::GetAccountCreationTime()`      | Gets the accounts creation time.                                                                |              |
| `Firebase::GetAuthToken(string)`          | Get the user authentififcation token. The token is the proof of authentication.                 |              |
| :::                                         | _string_                                                                                      | Setting Name |
| `Firebase::GetLastLoginTime()`            | Gets the user last login time.                                                                  |              |
| `Firebase::GetPhoneNumber()`              | Gets the user phone number.                                                                     |              |
| `Firebase::GetPhotoURL()`                 | Gets an URL to the user profile picture.                                                        |              |
| `Firebase::GetRefreshToken()`             | Gets the user refresh token. For advanced usage only.                                           |              |
| `Firebase::GetRemoteConfigNumber(string)` | Get a setting from Firebase Remote Config as Number.                                            |              |
| :::                                         | _string_                                                                                      | Setting Name |
| `Firebase::GetRemoteConfigString(string)` | Get a setting from Firebase Remote Config as a string.                                          |              |
| :::                                         | _string_                                                                                      | Setting Name |
| `Firebase::GetTenantID()`                 | Gets the user tenant ID. For advanced usage only.                                               |              |
| `Firebase::GetUserDisplayName()`          | Gets the user display name.                                                                     |              |
| `Firebase::GetUserEmail()`                | Gets the user email address.                                                                    |              |
| `Firebase::GetUserUID()`                  | Gets the user Unique IDentifier. Use that to link data to an user instead of the name or email. |              |
| `Firebase::ServerTimestamp()`             | Set a field to the timstamp on the server when the request arrives there                        |              |

---

## Light (from extension Lights)

Displays a light on the scene, with a customizable radius and color. Add then the Light Obstacle behavior to the objects that must act as obstacle to the lights.

_No expressions for this object._

## Light Obstacle Behavior (from extension Lights)

This behavior makes the object an obstacle to the light. The light emitted by light objects will be stopped by the object.

_No expressions for this behavior._

---

## Peer-to-Peer communication (experimental)

Allow game instances to communicate remotely using messages sent via WebRTC (P2P). [Read more explanations about it.](http://wiki.compilgames.net/doku.php/gdevelop5/all-features/p2p)

| Expresión                          | Descripción                                                           |            |
|------------------------------------|-----------------------------------------------------------------------|:----------:|
| `P2P::GetEventData(string)`      | Returns the data received when the specified event was last triggered |            |
| :::                                | _string_                                                            | Event name |
| `P2P::GetEventSender(string)`    | Returns the id of the peer that triggered the event                   |            |
| :::                                | _string_                                                            | Event name |
| `P2P::GetID()`                   | Gets the client ID of the current game instance                       |            |
| `P2P::GetLastConnectedPeer()`    | Gets the ID of the newly connected peer.                              |            |
| `P2P::GetLastDisconnectedPeer()` | Gets the ID of the latest peer that has disconnected.                 |            |
| `P2P::GetLastError()`            | Gets the description of the last P2P error                            |            |

---

## Physics Engine 2.0

Simulate realistic object physics, with gravity, forces, joints, etc. [Read more explanations about it.](http://wiki.compilgames.net/doku.php/gdevelop5/behaviors/physics2)

| Expresión                                                   | Descripción                                     |          |
|-------------------------------------------------------------|-------------------------------------------------|:--------:|
| `Object.Physics2::AngularDamping()`                       | Get the angular damping of an object.           |          |
| `Object.Physics2::AngularVelocity()`                      | Get the angular velocity of an object.          |          |
| `Object.Physics2::Density()`                              | Get the density of an object.                   |          |
| `Object.Physics2::DistanceJointDampingRatio(number)`      | Distance joint damping ratio                    |          |
| :::                                                         | _number_                                      | Joint ID |
| `Object.Physics2::DistanceJointFrequency(number)`         | Distance joint frequency                        |          |
| :::                                                         | _number_                                      | Joint ID |
| `Object.Physics2::DistanceJointLength(number)`            | Distance joint length                           |          |
| :::                                                         | _number_                                      | Joint ID |
| `Object.Physics2::Friction()`                             | Get the friction of an object.                  |          |
| `Object.Physics2::FrictionJointMaxForce(number)`          | Friction joint maximum force                    |          |
| :::                                                         | _number_                                      | Joint ID |
| `Object.Physics2::FrictionJointMaxTorque(number)`         | Friction joint maximum torque                   |          |
| :::                                                         | _number_                                      | Joint ID |
| `Object.Physics2::GearJointFirstJoint(number)`            | Gear joint first joint                          |          |
| :::                                                         | _number_                                      | Joint ID |
| `Object.Physics2::GearJointRatio(number)`                 | Gear joint ratio                                |          |
| :::                                                         | _number_                                      | Joint ID |
| `Object.Physics2::GearJointSecondJoint(number)`           | Gear joint second joint                         |          |
| :::                                                         | _number_                                      | Joint ID |
| `Object.Physics2::GravityScale()`                         | Get the gravity scale of an object.             |          |
| `Object.Physics2::GravityX()`                             | World gravity on X axis                         |          |
| `Object.Physics2::GravityY()`                             | World gravity on Y axis                         |          |
| `Object.Physics2::JointFirstAnchorX(number)`              | Joint first anchor X                            |          |
| :::                                                         | _number_                                      | Joint ID |
| `Object.Physics2::JointFirstAnchorY(number)`              | Joint first anchor Y                            |          |
| :::                                                         | _number_                                      | Joint ID |
| `Object.Physics2::JointReactionForce(number)`             | Joint reaction force                            |          |
| :::                                                         | _number_                                      | Joint ID |
| `Object.Physics2::JointReactionTorque(number)`            | Joint reaction torque                           |          |
| :::                                                         | _number_                                      | Joint ID |
| `Object.Physics2::JointSecondAnchorX(number)`             | Joint second anchor X                           |          |
| :::                                                         | _number_                                      | Joint ID |
| `Object.Physics2::JointSecondAnchorY(number)`             | Joint second anchor Y                           |          |
| :::                                                         | _number_                                      | Joint ID |
| `Object.Physics2::LinearDamping()`                        | Get the linear damping of an object.            |          |
| `Object.Physics2::LinearVelocity()`                       | Get the linear velocity of an object.           |          |
| `Object.Physics2::LinearVelocityX()`                      | Get the linear velocity of an object on X axis. |          |
| `Object.Physics2::LinearVelocityY()`                      | Get the linear velocity of an object on Y axis. |          |
| `Object.Physics2::MassCenterX()`                          | Mass center X                                   |          |
| `Object.Physics2::MassCenterY()`                          | Mass center Y                                   |          |
| `Object.Physics2::MotorJointAngularOffset(number)`        | Motor joint angular offset                      |          |
| :::                                                         | _number_                                      | Joint ID |
| `Object.Physics2::MotorJointCorrectionFactor(number)`     | Motor joint correction factor                   |          |
| :::                                                         | _number_                                      | Joint ID |
| `Object.Physics2::MotorJointMaxForce(number)`             | Motor joint maximum force                       |          |
| :::                                                         | _number_                                      | Joint ID |
| `Object.Physics2::MotorJointMaxTorque(number)`            | Motor joint maximum torque                      |          |
| :::                                                         | _number_                                      | Joint ID |
| `Object.Physics2::MotorJointOffsetX(number)`              | Motor joint offset X                            |          |
| :::                                                         | _number_                                      | Joint ID |
| `Object.Physics2::MotorJointOffsetY(number)`              | Motor joint offset Y                            |          |
| :::                                                         | _number_                                      | Joint ID |
| `Object.Physics2::MouseJointDampingRatio(number)`         | Mouse joint damping ratio                       |          |
| :::                                                         | _number_                                      | Joint ID |
| `Object.Physics2::MouseJointFrequency(number)`            | Mouse joint frequency                           |          |
| :::                                                         | _number_                                      | Joint ID |
| `Object.Physics2::MouseJointMaxForce(number)`             | Mouse joint maximum force                       |          |
| :::                                                         | _number_                                      | Joint ID |
| `Object.Physics2::MouseJointTargetX(number)`              | Mouse joint target X                            |          |
| :::                                                         | _number_                                      | Joint ID |
| `Object.Physics2::MouseJointTargetY(number)`              | Mouse joint target Y                            |          |
| :::                                                         | _number_                                      | Joint ID |
| `Object.Physics2::PrismaticJointAxisAngle(number)`        | Prismatic joint axis angle                      |          |
| :::                                                         | _number_                                      | Joint ID |
| `Object.Physics2::PrismaticJointMaxMotorForce(number)`    | Prismatic joint maximum motor force             |          |
| :::                                                         | _number_                                      | Joint ID |
| `Object.Physics2::PrismaticJointMaxTranslation(number)`   | Prismatic joint maximum translation             |          |
| :::                                                         | _number_                                      | Joint ID |
| `Object.Physics2::PrismaticJointMinTranslation(number)`   | Prismatic joint minimum translation             |          |
| :::                                                         | _number_                                      | Joint ID |
| `Object.Physics2::PrismaticJointMotorForce(number)`       | Prismatic joint motor force                     |          |
| :::                                                         | _number_                                      | Joint ID |
| `Object.Physics2::PrismaticJointMotorSpeed(number)`       | Prismatic joint motor speed                     |          |
| :::                                                         | _number_                                      | Joint ID |
| `Object.Physics2::PrismaticJointReferenceAngle(number)`   | Prismatic joint reference angle                 |          |
| :::                                                         | _number_                                      | Joint ID |
| `Object.Physics2::PrismaticJointSpeed(number)`            | Prismatic joint speed                           |          |
| :::                                                         | _number_                                      | Joint ID |
| `Object.Physics2::PrismaticJointTranslation(number)`      | Prismatic joint current translation             |          |
| :::                                                         | _number_                                      | Joint ID |
| `Object.Physics2::PulleyJointFirstGroundAnchorX(number)`  | Pulley joint first ground anchor X              |          |
| :::                                                         | _number_                                      | Joint ID |
| `Object.Physics2::PulleyJointFirstGroundAnchorY(number)`  | Pulley joint first ground anchor Y              |          |
| :::                                                         | _number_                                      | Joint ID |
| `Object.Physics2::PulleyJointFirstLength(number)`         | Pulley joint first length                       |          |
| :::                                                         | _number_                                      | Joint ID |
| `Object.Physics2::PulleyJointRatio(number)`               | Pulley joint ratio                              |          |
| :::                                                         | _number_                                      | Joint ID |
| `Object.Physics2::PulleyJointSecondGroundAnchorX(number)` | Pulley joint second ground anchor X             |          |
| :::                                                         | _number_                                      | Joint ID |
| `Object.Physics2::PulleyJointSecondGroundAnchorY(number)` | Pulley joint second ground anchor Y             |          |
| :::                                                         | _number_                                      | Joint ID |
| `Object.Physics2::PulleyJointSecondLength(number)`        | Pulley joint second length                      |          |
| :::                                                         | _number_                                      | Joint ID |
| `Object.Physics2::Restitution()`                          | Get the restitution of an object.               |          |
| `Object.Physics2::RevoluteJointAngle(number)`             | Revolute joint current angle                    |          |
| :::                                                         | _number_                                      | Joint ID |
| `Object.Physics2::RevoluteJointMaxAngle(number)`          | Revolute joint maximum angle                    |          |
| :::                                                         | _number_                                      | Joint ID |
| `Object.Physics2::RevoluteJointMaxMotorTorque(number)`    | Revolute joint maximum motor torque             |          |
| :::                                                         | _number_                                      | Joint ID |
| `Object.Physics2::RevoluteJointMinAngle(number)`          | Revolute joint minimum angle                    |          |
| :::                                                         | _number_                                      | Joint ID |
| `Object.Physics2::RevoluteJointMotorSpeed(number)`        | Revolute joint motor speed                      |          |
| :::                                                         | _number_                                      | Joint ID |
| `Object.Physics2::RevoluteJointMotorTorque(number)`       | Revolute joint motor torque                     |          |
| :::                                                         | _number_                                      | Joint ID |
| `Object.Physics2::RevoluteJointReferenceAngle(number)`    | Revolute joint reference angle                  |          |
| :::                                                         | _number_                                      | Joint ID |
| `Object.Physics2::RevoluteJointSpeed(number)`             | Revolute joint angular speed                    |          |
| :::                                                         | _number_                                      | Joint ID |
| `Object.Physics2::RopeJointMaxLength(number)`             | Rope joint maximum length                       |          |
| :::                                                         | _number_                                      | Joint ID |
| `Object.Physics2::TimeScale()`                            | World time scale                                |          |
| `Object.Physics2::WeldJointDampingRatio(number)`          | Weld joint damping ratio                        |          |
| :::                                                         | _number_                                      | Joint ID |
| `Object.Physics2::WeldJointFrequency(number)`             | Weld joint frequency                            |          |
| :::                                                         | _number_                                      | Joint ID |
| `Object.Physics2::WeldJointReferenceAngle(number)`        | Weld joint reference angle                      |          |
| :::                                                         | _number_                                      | Joint ID |
| `Object.Physics2::WheelJointAxisAngle(number)`            | Wheel joint axis angle                          |          |
| :::                                                         | _number_                                      | Joint ID |
| `Object.Physics2::WheelJointDampingRatio(number)`         | Wheel joint damping ratio                       |          |
| :::                                                         | _number_                                      | Joint ID |
| `Object.Physics2::WheelJointFrequency(number)`            | Wheel joint frequency                           |          |
| :::                                                         | _number_                                      | Joint ID |
| `Object.Physics2::WheelJointMaxMotorTorque(number)`       | Wheel joint maximum motor torque                |          |
| :::                                                         | _number_                                      | Joint ID |
| `Object.Physics2::WheelJointMotorSpeed(number)`           | Wheel joint motor speed                         |          |
| :::                                                         | _number_                                      | Joint ID |
| `Object.Physics2::WheelJointMotorTorque(number)`          | Wheel joint motor torque                        |          |
| :::                                                         | _number_                                      | Joint ID |
| `Object.Physics2::WheelJointSpeed(number)`                | Wheel joint speed                               |          |
| :::                                                         | _number_                                      | Joint ID |
| `Object.Physics2::WheelJointTranslation(number)`          | Wheel joint current translation                 |          |
| :::                                                         | _number_                                      | Joint ID |

---

## Tilemap

Displays a tiled-based map, made with the Tiled editor (download it separately on <https://www.mapeditor.org/>). [Read more explanations about it.](http://wiki.compilgames.net/doku.php/gdevelop5/objects/tilemap)

| Expresión                        | Descripción                                    |     |
|----------------------------------|------------------------------------------------|:---:|
| `Object.AnimationFps()`        | Get the animation speed (in frames per second) |     |
| `Object.AnimationSpeedScale()` | Get the Animation speed scale                  |     |
| `Object.LayerIndex()`          | Get the layer index being displayed            |     |

---

## Tween (from extension Tweening)

Smoothly animate position, angle, scale and other properties of the object. [Read more explanations about it.](http://wiki.compilgames.net/doku.php/gdevelop5/behaviors/tween)

| Expresión                          | Descripción                               |                  |
|------------------------------------|-------------------------------------------|:----------------:|
| `Object.Tween::Progress(string)` | Progress of a tween (between 0.0 and 1.0) |                  |
| :::                                | _string_                                | Tween Identifier |

---

## Vídeo

Muestra un vídeo. [Lea más sobre ello.](http://wiki.compilgames.net/doku.php/gdevelop5/objects/video)

| Expresión                  | Descripción                                                                     |     |
|----------------------------|---------------------------------------------------------------------------------|:---:|
| `Object.CurrentTime()`   | Devuelve el tiempo del objeto o cuadro de vídeo actual (en segundos).           |     |
| `Object.Duration()`      | Devuelve la duración de un objeto de vídeo (en segundos).                       |     |
| `Object.Opacity()`       | Devuelve la opacidad de un objeto de vídeo                                      |     |
| `Object.PlaybackSpeed()` | Devuelve la velocidad de reproducción de un objeto de vídeo                     |     |
| `Object.Volume()`        | Devuelve el volumen de un objeto de vídeo, entre 0 (silenciado) y 100 (máximo). |     |
