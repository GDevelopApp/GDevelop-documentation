# Expressions reference

Expressions can be entered when you see a field with one of these buttons:

![](/gdevelop5/field_expressions.png)

* The left button indicates a "string expression" (a text)
* The right button indicates a "numerical expression" (a number)

This page is a reference of all expressions that can be used in GDevelop, grouped by the extension,
object or behavior they belong too. When `Object` is written, you should enter an object name. **[Learn more here about how to write expressions](/gdevelop5/all-features/expressions)**

!!! tip

    Expressions are sometime also called functions, like in mathematics.

## Objects

Common features that can be used for all objects in GDevelop. [Read more explanations about it.](https://wiki.gdevelop.io/gdevelop5/objects/base_object/events)

| Expression | Description |  |
|-----|-----|-----|
| `PickedInstancesCount(object)` | Return the number of instances picked by the previous conditions (or actions). ||
| | _👾 Object_ | Object |
| `SceneInstancesCount(object)` | Return the number of instances of the specified objects living on the scene. ||
| | _👾 Object_ | Object |

| Expression | Description |  |
|-----|-----|-----|
| `Object.Angle()` | Current angle, in degrees, of the object ||
| `Object.AngleToObject(object)` | Compute the angle between two objects (in degrees). If you need the angle to an arbitrary position, use AngleToPosition. ||
| | _👾 Object_ | Object |
| `Object.AngleToPosition(number, number)` | Compute the angle between the object center and a "target" position (in degrees). If you need the angle between two objects, use AngleToObject. ||
| | _🔢 Number_ | Target X position |
| | _🔢 Number_ | Target Y position |
| `Object.ArrayVariableFirstNumber(object variable)` | Get the value of the first element of an object array variable, if it is a number variable. ||
| | _🗄️ Object variable_ | Array variable |
| `Object.ArrayVariableFirstString(object variable)` | Get the value of the first element of an object array variable, if it is a text (string) variable. ||
| | _🗄️ Object variable_ | Array variable |
| `Object.ArrayVariableLastNumber(object variable)` | Get the value of the last element of an object array variable, if it is a number variable. ||
| | _🗄️ Object variable_ | Array variable |
| `Object.ArrayVariableLastString(object variable)` | Get the value of the last element of an object array variable, if it is a text (string) variable. ||
| | _🗄️ Object variable_ | Array variable |
| `Object.BoundingBoxBottom()` | Return the bounding box (the area encapsulating the object) bottom position. ||
| `Object.BoundingBoxCenterX()` | Return the bounding box (the area encapsulating the object) center X position. ||
| `Object.BoundingBoxCenterY()` | Return the bounding box (the area encapsulating the object) center Y position. ||
| `Object.BoundingBoxLeft()` | Return the bounding box (the area encapsulating the object) left position. ||
| `Object.BoundingBoxRight()` | Return the bounding box (the area encapsulating the object) right position. ||
| `Object.BoundingBoxTop()` | Return the bounding box (the area encapsulating the object) top position. ||
| `Object.CenterX()` | Return the X position of the center of rotation. ||
| `Object.CenterY()` | Return the Y position of the center of rotation. ||
| `Object.Distance(object)` | Distance between two objects ||
| | _👾 Object_ | Object |
| `Object.DistanceToPosition(number, number)` | Distance between an object and a position ||
| | _🔢 Number_ | Target X position |
| | _🔢 Number_ | Target Y position |
| `Object.ForceAngle()` | Angle of the sum of forces (in degrees) ||
| `Object.ForceLength()` | Length of the sum of forces ||
| `Object.ForceX()` | X coordinate of the sum of forces ||
| `Object.ForceY()` | Y coordinate of the sum of forces ||
| `Object.Height()` | Height of the object ||
| `Object.Layer()` | Return the name of the layer the object is on ||
| `Object.ObjectName()` | Return the name of the object ||
| `Object.ObjectTimerElapsedTime(string)` | Value of an object timer ||
| | _🔤 Name (String)_ | Timer's name |
| `Object.SqDistance(object)` | Square distance between two objects ||
| | _👾 Object_ | Object |
| `Object.SqDistanceToPosition(number, number)` | Square distance between an object and a position ||
| | _🔢 Number_ | Target X position |
| | _🔢 Number_ | Target Y position |
| `Object.Variable(object variable)` | Number value of an object variable ||
| | _🗄️ Object variable_ | Variable |
| `Object.VariableChildCount(object variable)` | Number of children in an object array or structure variable ||
| | _🗄️ Object variable_ | Array or structure variable |
| `Object.VariableString(object variable)` | Text of an object variable ||
| | _🗄️ Object variable_ | Variable |
| `Object.Width()` | Width of the object ||
| `Object.X()` | X position of the object ||
| `Object.XFromAngleAndDistance(number, number)` | Compute the X position when given an angle and distance relative to the starting object. This is also known as getting the cartesian coordinates of a 2D vector, using its polar coordinates. ||
| | _🔢 Number_ | Angle, in degrees |
| | _🔢 Number_ | Distance |
| `Object.Y()` | Y position of the object ||
| `Object.YFromAngleAndDistance(number, number)` | Compute the Y position when given an angle and distance relative to the starting object. This is also known as getting the cartesian coordinates of a 2D vector, using its polar coordinates. ||
| | _🔢 Number_ | Angle, in degrees |
| | _🔢 Number_ | Distance |
| `Object.ZOrder()` | Z-order of an object ||

---



## Sprite 

Animated object which can be used for most elements of a game. [Read more explanations about it.](https://wiki.gdevelop.io/gdevelop5/objects/sprite)

| Expression | Description |  |
|-----|-----|-----|
| `Object.AnimationFrameCount()` | Number of frames in the current animation of the object ||
| `Object.PointX(object point name)` | X position of a point ||
| | _🔤 Object Point Name (String)_ | Name of the point |
| `Object.PointY(object point name)` | Y position of a point ||
| | _🔤 Object Point Name (String)_ | Name of the point |
| `Object.Sprite()` | Current frame of the animation of the object ||

---


## Conversion

Expressions to convert number, texts and quantities. [Read more explanations about it.](https://wiki.gdevelop.io/gdevelop5/all-features/common-conversions)

| Expression | Description |  |
|-----|-----|-----|
| `GlobalVarToJSON(global variable)` | Convert a global variable to JSON ||
| | _🗄️ Global variable_ | The global variable to be stringified |
| `LargeNumberToString(number)` | Convert the result of the expression to text, without using the scientific notation ||
| | _🔢 Number_ | Expression to be converted to text |
| `ObjectVarToJSON(object, object variable)` | Convert an object variable to JSON ||
| | _👾 Object_ | The object with the variable |
| | _🗄️ Object variable_ | The object variable to be stringified |
| `ToDeg(number)` | Converts the angle, expressed in radians, into degrees ||
| | _🔢 Number_ | Angle, in radians |
| `ToJSON(scene variable)` | Convert a scene variable to JSON ||
| | _🗄️ Scene variable_ | Scene variable to be stringified |
| `ToNumber(string)` | Convert the text to a number ||
| | _string_ | Text to convert to a number |
| `ToRad(number)` | Converts the angle, expressed in degrees, into radians ||
| | _🔢 Number_ | Angle, in degrees |
| `ToString(number)` | Convert the result of the expression to text ||
| | _🔢 Number_ | Expression to be converted to text |

---


## Variables

Actions, conditions and expressions to handle variables, from simple variables like the player score, the number of remaining lives to complex variables containing arbitrary data like an inventory or the result of a web request. [Read more explanations about it.](https://wiki.gdevelop.io/gdevelop5/all-features/variables)

| Expression | Description |  |
|-----|-----|-----|
| `GlobalVariable(global variable)` | Number value of a global variable ||
| | _🗄️ Global variable_ | Name of the global variable |
| `GlobalVariableChildCount(global variable)` | Number of children in a global array or structure variable ||
| | _🗄️ Global variable_ | Array or structure variable |
| `GlobalVariableFirstNumber(global variable)` | Value of the first element of a global array variable, if it is a number variable ||
| | _🗄️ Global variable_ | Array variable |
| `GlobalVariableFirstString(global variable)` | Value of the first element of a global array variable, if it is a text (string) variable. ||
| | _🗄️ Global variable_ | Array variable |
| `GlobalVariableLastNumber(global variable)` | Value of the last element of a global array variable, if it is a number variable ||
| | _🗄️ Global variable_ | Array variable |
| `GlobalVariableLastString(global variable)` | Value of the last element of a global array variable, if it is a text (string) variable. ||
| | _🗄️ Global variable_ | Array variable |
| `GlobalVariableString(global variable)` | Text of a global variable ||
| | _🗄️ Global variable_ | Variable |
| `SceneVariableFirstNumber(scene variable)` | Get the value of the first element of a scene array variable, if it is a number. ||
| | _🗄️ Scene variable_ | Array variable |
| `SceneVariableFirstString(scene variable)` | Get the value of the first element of a scene array variable, if it is a text (string). ||
| | _🗄️ Scene variable_ | Array variable |
| `SceneVariableLastNumber(scene variable)` | Get the value of the last element of a scene array variable, if it is a number. ||
| | _🗄️ Scene variable_ | Array variable |
| `SceneVariableLastString(scene variable)` | Get the value of the last element of a scene array variable, if it is a text (string). ||
| | _🗄️ Scene variable_ | Array variable |
| `Variable(scene variable)` | Number value of a scene variable ||
| | _🗄️ Scene variable_ | Variable |
| `VariableChildCount(scene variable)` | Number of children in a scene array or structure variable ||
| | _🗄️ Scene variable_ | Array or structure variable |
| `VariableString(scene variable)` | Text of a scene variable ||
| | _🗄️ Scene variable_ | Variable |

---


## Mouse and touch

Conditions and actions to handle either the mouse or touches on touchscreen. By default, conditions related to the mouse will also handle the touches - so that it's easier to handle both in your game. You can disable this behavior if you want to handle them separately in different events. [Read more explanations about it.](https://wiki.gdevelop.io/gdevelop5/all-features/mouse-touch)

| Expression | Description |  |
|-----|-----|-----|
| `CursorX(layer name, number)` | Return the X position of the cursor or of a touch. ||
| | _🔤 Layer name (String)_ | Layer _Optional_. |
| | _🔢 Number_ | Camera number (default : 0) _Optional_. |
| `CursorY(layer name, number)` | Return the Y position of the cursor or of a touch. ||
| | _🔤 Layer name (String)_ | Layer _Optional_. |
| | _🔢 Number_ | Camera number (default : 0) _Optional_. |
| `MouseWheelDelta()` | Mouse wheel displacement ||
| `StartedTouchOrMouseCount()` | The number of touches (including the mouse) that have just started on this frame. The touch identifiers can be accessed using StartedTouchOrMouseId(). ||
| `StartedTouchOrMouseId(number)` | The identifier of the touch or mouse that has just started on this frame. The number of touches can be accessed using StartedTouchOrMouseCount(). ||
| | _🔢 Number_ | Touch index |
| `TouchX(number, layer name, number)` | Return the X position of a specific touch. ||
| | _🔢 Number_ | Touch identifier |
| | _🔤 Layer name (String)_ | Layer _Optional_. |
| | _🔢 Number_ | Camera number (default : 0) _Optional_. |
| `TouchY(number, layer name, number)` | Return the Y position of a specific touch. ||
| | _🔢 Number_ | Touch identifier |
| | _🔤 Layer name (String)_ | Layer _Optional_. |
| | _🔢 Number_ | Camera number (default : 0) _Optional_. |

---


## Keyboard

Allows your game to respond to keyboard input. Note that this does not work with on-screen keyboard on touch devices: use instead conditions related to touch when making a game for mobile/touchscreen devices. [Read more explanations about it.](https://wiki.gdevelop.io/gdevelop5/all-features/keyboard)

| Expression | Description |  |
|-----|-----|-----|
| `LastPressedKey()` | Get the name of the latest key pressed on the keyboard ||

---


## Scene

Actions and conditions to manipulate the scenes during the game. 

| Expression | Description |  |
|-----|-----|-----|
| `CurrentSceneName()` | Name of the current scene ||

---


## Timers and time

Actions and conditions to run timers, get the current time or modify the time scale (speed at which the game is running - useful for slow motion effects). [Read more explanations about it.](https://wiki.gdevelop.io/gdevelop5/all-features/timers-and-time)

| Expression | Description |  |
|-----|-----|-----|
| `Time(string)` | Current time ||
| | _🔤 String_ | Hour: hour - Minutes: min - Seconds: sec - Day of month: mday - Months since January: mon - Year since 1900: year - Days since Sunday: wday - Days since Jan 1st: yday - Timestamp (ms): timestamp" |
| `TimeDelta()` | Time elapsed since the last frame rendered on screen ||
| `TimeFromStart()` | Time elapsed since the beginning of the scene ||
| `TimeScale()` | Returns the time scale of the scene. ||
| `TimerElapsedTime(string)` | Value of a scene timer ||
| | _🔤 Name (String)_ | Timer's name |

---


## Mathematical tools

A set of mathematical functions that can be used in expressions. 

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


## Layers and cameras

Each scene can be composed of multiple layers. These conditions and actions allow to manipulate them during the game. In particular, you can move the camera of a layer to center it on an object or a position. [Read more explanations about it.](https://wiki.gdevelop.io/gdevelop5/interface/scene-editor/layers-and-cameras)

| Expression | Description |  |
|-----|-----|-----|
| `CameraAngle(layer name, number)` | Return the angle of rotation of a camera (in degrees). ||
| | _🔤 Layer name (String)_ | Layer _Optional_. |
| | _🔢 Number_ | Camera number (default : 0) _Optional_. |
| `CameraBorderBottom(layer name, number)` | Return the position of the bottom border of a camera. ||
| | _🔤 Layer name (String)_ | Layer _Optional_. |
| | _🔢 Number_ | Camera number _Optional_. |
| `CameraBorderLeft(layer name, number)` | Return the position of the left border of a camera. ||
| | _🔤 Layer name (String)_ | Layer _Optional_. |
| | _🔢 Number_ | Camera number _Optional_. |
| `CameraBorderRight(layer name, number)` | Return the position of the right border of a camera. ||
| | _🔤 Layer name (String)_ | Layer _Optional_. |
| | _🔢 Number_ | Camera number _Optional_. |
| `CameraBorderTop(layer name, number)` | Return the position of the top border of a camera. ||
| | _🔤 Layer name (String)_ | Layer _Optional_. |
| | _🔢 Number_ | Camera number _Optional_. |
| `CameraCenterX(layer name, number)` | Return the X position of the center of a camera. ||
| | _🔤 Layer name (String)_ | Layer _Optional_. |
| | _🔢 Number_ | Camera number (default : 0) _Optional_. |
| `CameraCenterY(layer name, number)` | Return the Y position of the center of a camera. ||
| | _🔤 Layer name (String)_ | Layer _Optional_. |
| | _🔢 Number_ | Camera number (default : 0) _Optional_. |
| `CameraHeight(layer name, number)` | Return the height of a camera of a layer. ||
| | _🔤 Layer name (String)_ | Layer _Optional_. |
| | _🔢 Number_ | Camera number _Optional_. |
| `CameraWidth(layer name, number)` | Return the width of a camera of a layer. ||
| | _🔤 Layer name (String)_ | Layer _Optional_. |
| | _🔢 Number_ | Camera number _Optional_. |
| `CameraZoom(layer name, number)` | Zoom of a camera of a layer ||
| | _🔤 Layer name (String)_ | Layer _Optional_. |
| | _🔢 Number_ | Camera number (default : 0) _Optional_. |
| `LayerDefaultZOrder(layer name)` | Default Z Order for a layer ||
| | _🔤 Layer name (String)_ | Layer |
| `LayerTimeScale(layer name)` | Returns the time scale of the specified layer. ||
| | _🔤 Layer name (String)_ | Layer |

---


## Sounds and music

GDevelop provides several conditions and actions to play audio files. They can be either long music or short sound effects. [Read more explanations about it.](https://wiki.gdevelop.io/gdevelop5/all-features/audio)

| Expression | Description |  |
|-----|-----|-----|
| `GlobalVolume()` | Global volume value ||
| `MusicChannelPitch(number)` | Music's pitch ||
| | _🔢 Number_ | Channel |
| `MusicChannelPlayingOffset(number)` | Music playing offset ||
| | _🔢 Number_ | Channel |
| `MusicChannelVolume(number)` | Music volume ||
| | _🔢 Number_ | Channel |
| `SoundChannelPitch(number)` | Sound's pitch ||
| | _🔢 Number_ | Channel |
| `SoundChannelPlayingOffset(number)` | Sound playing offset ||
| | _🔢 Number_ | Channel |
| `SoundChannelVolume(number)` | Sound volume ||
| | _🔢 Number_ | Channel |

---


## Game window and resolution

Provides actions and conditions to manipulate the game window. Depending on the platform on which the game is running, not all of these features can be applied. [Read more explanations about it.](https://wiki.gdevelop.io/gdevelop5/all-features/window)

| Expression | Description |  |
|-----|-----|-----|
| `SceneWindowHeight()` | Height of the scene window (or scene canvas for HTML5 games) ||
| `SceneWindowWidth()` | Width of the scene window (or scene canvas for HTML5 games) ||
| `ScreenHeight()` | Height of the screen (or the page for HTML5 games in browser) ||
| `ScreenWidth()` | Width of the screen (or the page for HTML5 games in browser) ||
| `WindowTitle()` | Window's title ||

---


## Text manipulation

Provides expressions to manipulate strings (also called texts). 

| Expression | Description |  |
|-----|-----|-----|
| `FromCodePoint(number)` | Get character from code point ||
| | _🔢 Number_ | Code point |
| `NewLine()` | Insert a new line ||
| `StrAt(string, number)` | Get a character from a text ||
| | _string_ | Text |
| | _🔢 Number_ | Position of the character (the first letter is at position 0) |
| `StrFind(string, string)` | Search in a text (return the position of the result or -1 if not found) ||
| | _string_ | Text |
| | _string_ | Text to search for |
| `StrFindFrom(string, string, number)` | Search in a text, starting from a position (return the position of the result or -1 if not found) ||
| | _string_ | Text |
| | _string_ | Text to search for |
| | _🔢 Number_ | Position of the first character in the string to be considered in the search |
| `StrFindLast(string, string)` | Search the last occurrence in a string (return the position of the result, from the beginning of the string, or -1 if not found) ||
| | _string_ | Text |
| | _string_ | Text to search for |
| `StrFindLastFrom(string, string, number)` | Search in a text the last occurrence, starting from a position (return the position of the result, from the beginning of the string, or -1 if not found) ||
| | _string_ | Text |
| | _string_ | Text to search for |
| | _🔢 Number_ | Position of the last character in the string to be considered in the search |
| `StrLength(string)` | Length of a text ||
| | _string_ | Text |
| `StrRepeat(string, number)` | Repeat a text ||
| | _string_ | Text to repeat |
| | _🔢 Number_ | Repetition count |
| `SubStr(string, number, number)` | Get a portion of a text ||
| | _string_ | Text |
| | _🔢 Number_ | Start position of the portion (the first letter is at position 0) |
| | _🔢 Number_ | Length of the portion |
| `ToLowerCase(string)` | Lowercase a text ||
| | _string_ | Text |
| `ToUpperCase(string)` | Uppercase a text ||
| | _string_ | Text |

---



## Animatable capability 

Animate objects. [Read more explanations about it.](https://wiki.gdevelop.io/gdevelop5/objects)

| Expression | Description |  |
|-----|-----|-----|
| `Object.Animation::Duration()` | Return the current animation duration (in seconds). ||
| `Object.Animation::ElapsedTime()` | Return the elapsed time from the beginning of the animation (in seconds). ||
| `Object.Animation::Index()` | Return the number of the animation played by the object (the number from the animations list). ||
| `Object.Animation::Name()` | Return the animation played by the object using the name of the animation. ||
| `Object.Animation::SpeedScale()` | Return the animation speed scale (1 = the default speed, >1 = faster and <1 = slower). ||

---



## Effect capability 

Apply visual effects to objects. [Read more explanations about it.](https://wiki.gdevelop.io/gdevelop5/objects)

_No expressions for this behavior._


---



## Flippable capability 

Flip objects. [Read more explanations about it.](https://wiki.gdevelop.io/gdevelop5/objects)

_No expressions for this behavior._


---



## Resizable capability 

Change the object dimensions. [Read more explanations about it.](https://wiki.gdevelop.io/gdevelop5/objects)

_No expressions for this behavior._


---



## Scalable capability 

Change the object scale. [Read more explanations about it.](https://wiki.gdevelop.io/gdevelop5/objects)

| Expression | Description |  |
|-----|-----|-----|
| `Object.Scale::Value()` | Return the scale of the object (default scale is 1). ||
| `Object.Scale::X()` | Return the scale on X axis of the object (default scale is 1). ||
| `Object.Scale::Y()` | Return the scale on Y axis of the object (default scale is 1). ||

---



## Opacity capability 

Change the object opacity. [Read more explanations about it.](https://wiki.gdevelop.io/gdevelop5/objects)

| Expression | Description |  |
|-----|-----|-----|
| `Object.Opacity::Value()` | Return the opacity of an object, between 0 (fully transparent) to 255 (opaque). ||

---



## Text capability 

Access objects text. [Read more explanations about it.](https://wiki.gdevelop.io/gdevelop5/objects)

| Expression | Description |  |
|-----|-----|-----|
| `Object.Text::Value()` | Return the text. ||

---



## Platform (from extension Platform behavior)

Flag objects as being platforms which characters can run on. [Read more explanations about it.](https://wiki.gdevelop.io/gdevelop5/behaviors/platformer)

_No expressions for this behavior._


## Platformer character (from extension Platform behavior)

Jump and run on platforms. [Read more explanations about it.](https://wiki.gdevelop.io/gdevelop5/behaviors/platformer)

| Expression | Description |  |
|-----|-----|-----|
| `Object.PlatformerObject::Acceleration()` | Return the horizontal acceleration of the object (in pixels per second per second). ||
| `Object.PlatformerObject::CurrentFallSpeed()` | Return the current fall speed of the object (in pixels per second). Its value is always positive. ||
| `Object.PlatformerObject::CurrentJumpSpeed()` | Return the current jump speed of the object (in pixels per second). Its value is always positive. ||
| `Object.PlatformerObject::CurrentSpeed()` | Return the current horizontal speed of the object (in pixels per second). The object moves to the left with negative values and to the right with positive ones ||
| `Object.PlatformerObject::Deceleration()` | Return the horizontal deceleration of the object (in pixels per second per second). ||
| `Object.PlatformerObject::Gravity()` | Return the gravity applied on the object (in pixels per second per second). ||
| `Object.PlatformerObject::JumpSpeed()` | Return the jump speed of the object (in pixels per second). Its value is always positive. ||
| `Object.PlatformerObject::JumpSustainTime()` | Return the jump sustain time of the object (in seconds).This is the time during which keeping the jump button held allow the initial jump speed to be maintained. ||
| `Object.PlatformerObject::LadderClimbingSpeed()` | Return the ladder climbing speed of the object (in pixels per second). ||
| `Object.PlatformerObject::MaxFallingSpeed()` | Return the maximum falling speed of the object (in pixels per second). ||
| `Object.PlatformerObject::MaxSpeed()` | Return the maximum horizontal speed of the object (in pixels per second). ||

---



## Destroy when outside of the screen (from extension Destroy Outside Screen Behavior)

Destroy objects automatically when they go outside of the screen's borders. [Read more explanations about it.](https://wiki.gdevelop.io/gdevelop5/behaviors/destroyoutside)

_No expressions for this behavior._


---



## Tiled Sprite (from extension Tiled Sprite Object)

Displays an image repeated over an area. [Read more explanations about it.](https://wiki.gdevelop.io/gdevelop5/objects/tiled_sprite)

| Expression | Description |  |
|-----|-----|-----|
| `Object.XOffset()` | Return the offset used on the X axis when displaying the image. ||
| `Object.YOffset()` | Return the offset used on the Y axis when displaying the image. ||

---



## Draggable object (from extension Draggable Behavior)

Move objects by holding a mouse button (or touch). [Read more explanations about it.](https://wiki.gdevelop.io/gdevelop5/behaviors/draggable)

_No expressions for this behavior._


---



## Top-down movement (4 or 8 directions) (from extension Top-down movement)

Move objects left, up, right, and down (and, optionally, diagonally). [Read more explanations about it.](https://wiki.gdevelop.io/gdevelop5/behaviors/topdown)

| Expression | Description |  |
|-----|-----|-----|
| `Object.TopDownMovement::Acceleration()` | Acceleration of the object ||
| `Object.TopDownMovement::Angle()` | Angle, in degrees, of the movement ||
| `Object.TopDownMovement::AngleOffset()` | Rotation offset applied to the object ||
| `Object.TopDownMovement::AngularMaxSpeed()` | Angular maximum speed of the object ||
| `Object.TopDownMovement::Deceleration()` | Deceleration of the object ||
| `Object.TopDownMovement::MaxSpeed()` | Maximum speed of the object ||
| `Object.TopDownMovement::MovementAngleOffset()` | Return the movement angle offset. ||
| `Object.TopDownMovement::Speed()` | Speed of the object ||
| `Object.TopDownMovement::StickAngle()` | Return the angle of the simulated stick input (in degrees) ||
| `Object.TopDownMovement::XVelocity()` | Speed on the X axis of the movement ||
| `Object.TopDownMovement::YVelocity()` | Speed on the Y axis of the movement ||

---



## Text (from extension Text object)

Displays a text on the screen. [Read more explanations about it.](https://wiki.gdevelop.io/gdevelop5/objects/text)

| Expression | Description |  |
|-----|-----|-----|
| `Object.Angle()` | Angle ||
| `Object.FontSize()` | Return the font size of a text object. ||
| `Object.Padding()` | Padding ||
| `Object.String()` | Text ||

---



## Particles emitter (from extension Particle system)

Displays a large number of small particles to create visual effects. [Read more explanations about it.](https://wiki.gdevelop.io/gdevelop5/objects/particles_emitter)

| Expression | Description |  |
|-----|-----|-----|
| `Object.ConeSprayAngle()` | Angle of the spray cone ||
| `Object.CurrentParticleCount()` | Number of particles currently displayed. ||
| `Object.EmitterAngle()` | Emission angle of the particles. ||
| `Object.EmitterForceMax()` | The maximal emission force of the particles. ||
| `Object.EmitterForceMin()` | The minimal emission force of the particles. ||
| `Object.Flow()` | Flow of the particles (particles/second). ||
| `Object.MaxParticlesCount()` | Return the maximum number of displayed particles. ||
| `Object.ParticleAlpha1()` | Start opacity of the particles. ||
| `Object.ParticleAlpha2()` | End opacity of the particles. ||
| `Object.ParticleBlue1()` | The start color blue component of the particles. ||
| `Object.ParticleBlue2()` | The end color blue component of the particles. ||
| `Object.ParticleGravityAngle()` | Angle of gravity. ||
| `Object.ParticleGravityLength()` | Value of gravity. ||
| `Object.ParticleGravityX()` | Gravity of particles applied on X-axis. ||
| `Object.ParticleGravityY()` | Gravity of particles applied on Y-axis. ||
| `Object.ParticleGreen1()` | The start color green component of the particles. ||
| `Object.ParticleGreen2()` | The end color green component of the particles. ||
| `Object.ParticleLifeTimeMax()` | Maximum lifetime of the particles. ||
| `Object.ParticleLifeTimeMin()` | Minimum lifetime of the particles. ||
| `Object.ParticleRed1()` | The start color red component of the particles. ||
| `Object.ParticleRed2()` | The end color red component of the particles. ||
| `Object.ParticleRotationMaxSpeed()` | Return the maximum rotation speed of the particles. ||
| `Object.ParticleRotationMinSpeed()` | Return the minimum rotation speed of the particles. ||
| `Object.ParticleSize1()` | Start size of particles. ||
| `Object.ParticleSize2()` | End size of particles. ||
| `Object.RendererParam1()` | Rendering first parameter ||
| `Object.RendererParam2()` | Rendering second parameter ||
| `Object.Tank()` | Capacity of the particle tank. ||
| `Object.Texture()` | Name of the image displayed by particles. ||
| `Object.ZoneRadius()` | The radius of the emission zone. ||

---



## Panel Sprite ("9-patch") (from extension Panel Sprite (9-patch) Object)

An image with edges and corners that are stretched separately from the full image. [Read more explanations about it.](https://wiki.gdevelop.io/gdevelop5/objects/panel_sprite)

_No expressions for this object._


---



## Anchor 

Anchor objects to the window's bounds. [Read more explanations about it.](https://wiki.gdevelop.io/gdevelop5/behaviors/anchor)

_No expressions for this behavior._


---



## Shape painter 

Allows you to draw simple shapes on the screen using the events. [Read more explanations about it.](https://wiki.gdevelop.io/gdevelop5/objects/shape_painter)

| Expression | Description |  |
|-----|-----|-----|
| `Object.Antialiasing()` | Returns the type of anti-aliasing in use: none, low, medium, or high. ||
| `Object.FillColorBlue()` | Filing color blue component ||
| `Object.FillColorGreen()` | Filing color green component ||
| `Object.FillColorRed()` | Filing color red component ||
| `Object.FillOpacity()` | Filling opacity ||
| `Object.OutlineColorBlue()` | Outline color blue component ||
| `Object.OutlineColorGreen()` | Outline color green component ||
| `Object.OutlineColorRed()` | Outline color red component ||
| `Object.OutlineOpacity()` | Outline opacity ||
| `Object.OutlineSize()` | Outline size ||
| `Object.ToDrawingX(number, number)` | X drawing coordinate of a point from the scene ||
| | _🔢 Number_ | X scene position |
| | _🔢 Number_ | Y scene position |
| `Object.ToDrawingY(number, number)` | Y drawing coordinate of a point from the scene ||
| | _🔢 Number_ | X scene position |
| | _🔢 Number_ | Y scene position |
| `Object.ToSceneX(number, number)` | X scene coordinate of a point from the drawing ||
| | _🔢 Number_ | X drawing position |
| | _🔢 Number_ | Y drawing position |
| `Object.ToSceneY(number, number)` | Y scene coordinate of a point from the drawing ||
| | _🔢 Number_ | X drawing position |
| | _🔢 Number_ | Y drawing position |

---



## Text entry (from extension Text entry object)

Invisible object used to get the text entered with the keyboard. [Read more explanations about it.](https://wiki.gdevelop.io/gdevelop5/objects/text_entry)

| Expression | Description |  |
|-----|-----|-----|
| `Object.String()` | Text entered with keyboard ||

---


## Inventories

Provides actions and conditions to add an inventory to your game, with items in memory. [Read more explanations about it.](https://wiki.gdevelop.io/gdevelop5/all-features/inventory)

| Expression | Description |  |
|-----|-----|-----|
| `Inventory::Count(string, string)` | Get the number of an item in the inventory ||
| | _string_ | Inventory name |
| | _string_ | Item name |
| `Inventory::Maximum(string, string)` | Get the maximum of an item in the inventory, or 0 if it is unlimited ||
| | _string_ | Inventory name |
| | _string_ | Item name |

---



## Pathfinding (from extension Pathfinding behavior)

Move objects to a target while avoiding all objects that are flagged as obstacles. [Read more explanations about it.](https://wiki.gdevelop.io/gdevelop5/behaviors/pathfinding)

| Expression | Description |  |
|-----|-----|-----|
| `Object.Pathfinding::Acceleration()` | Acceleration of the object on the path ||
| `Object.Pathfinding::AngleOffset()` | Rotation offset applied the object on the path ||
| `Object.Pathfinding::AngularMaxSpeed()` | Angular maximum speed of the object on the path ||
| `Object.Pathfinding::CellHeight()` | Height of the virtual grid ||
| `Object.Pathfinding::CellWidth()` | Width of the virtual grid ||
| `Object.Pathfinding::DestinationX()` | Destination X position ||
| `Object.Pathfinding::DestinationY()` | Destination Y position ||
| `Object.Pathfinding::ExtraBorder()` | Extra border applied the object on the path ||
| `Object.Pathfinding::GetNodeX(number)` | Get next waypoint X position ||
| | _🔢 Number_ | Node index (start at 0!) |
| `Object.Pathfinding::GetNodeY(number)` | Get next waypoint Y position ||
| | _🔢 Number_ | Node index (start at 0!) |
| `Object.Pathfinding::GridOffsetX()` | Return X offset of the virtual grid. ||
| `Object.Pathfinding::GridOffsetY()` | Return Y offset of the virtual grid. ||
| `Object.Pathfinding::LastNodeX()` | Last waypoint X position ||
| `Object.Pathfinding::LastNodeY()` | Last waypoint Y position ||
| `Object.Pathfinding::MaxSpeed()` | Maximum speed of the object on the path ||
| `Object.Pathfinding::MovementAngle()` | Angle of movement on its path ||
| `Object.Pathfinding::NextNodeIndex()` | Get the index of the next waypoint to reach ||
| `Object.Pathfinding::NextNodeX()` | Get next waypoint X position ||
| `Object.Pathfinding::NextNodeY()` | Get next waypoint Y position ||
| `Object.Pathfinding::NodeCount()` | Get the number of waypoints on the path ||
| `Object.Pathfinding::Speed()` | Speed of the object on the path ||

## Obstacle for pathfinding (from extension Pathfinding behavior)

Flag objects as being obstacles for pathfinding. [Read more explanations about it.](https://wiki.gdevelop.io/gdevelop5/behaviors/pathfinding)

| Expression | Description |  |
|-----|-----|-----|
| `Object.PathfindingObstacle::Cost()` | Obstacle cost ||

---



## Physics Engine (from extension Physics Engine (deprecated))

Make objects move as if they are subject to the laws of physics. If you're creating a new game, prefer Physics Engine 2.0 [Read more explanations about it.](https://wiki.gdevelop.io/gdevelop5/behaviors/physics)

| Expression | Description |  |
|-----|-----|-----|
| `Object.Physics::AngularDamping()` | Angular damping ||
| `Object.Physics::AngularVelocity()` | Angular speed ||
| `Object.Physics::LinearDamping()` | Linear damping ||
| `Object.Physics::LinearVelocity()` | Linear speed ||
| `Object.Physics::LinearVelocityX()` | X component ||
| `Object.Physics::LinearVelocityY()` | Y component ||
| `Object.Physics::PolygonScaleX()` | Collision polygon X scale ||
| `Object.Physics::PolygonScaleY()` | Collision polygon Y scale ||

---


## 3D

Support for 3D in GDevelop. 

| Expression | Description |  |
|-----|-----|-----|
| `Scene3D::CameraFarPlane(layer name, number)` | Return the camera far plane distance. ||
| | _🔤 Layer name (String)_ | Layer _Optional_. |
| | _🔢 Number_ | Camera number (default : 0) _Optional_. |
| `Scene3D::CameraFov(layer name, number)` | Return the camera field of view. ||
| | _🔤 Layer name (String)_ | Layer _Optional_. |
| | _🔢 Number_ | Camera number (default : 0) _Optional_. |
| `Scene3D::CameraNearPlane(layer name, number)` | Return the camera near plane distance. ||
| | _🔤 Layer name (String)_ | Layer _Optional_. |
| | _🔢 Number_ | Camera number (default : 0) _Optional_. |
| `Scene3D::CameraRotationX(layer name, number)` | Return the camera rotation on X axis. ||
| | _🔤 Layer name (String)_ | Layer _Optional_. |
| | _🔢 Number_ | Camera number (default : 0) _Optional_. |
| `Scene3D::CameraRotationY(layer name, number)` | Return the camera rotation on Y axis. ||
| | _🔤 Layer name (String)_ | Layer _Optional_. |
| | _🔢 Number_ | Camera number (default : 0) _Optional_. |
| `Scene3D::CameraZ(layer name, number)` | Return the camera position on Z axis. ||
| | _🔤 Layer name (String)_ | Layer _Optional_. |
| | _🔢 Number_ | Camera number (default : 0) _Optional_. |

## 3D Box (from extension 3D)

A box with images for each face 

_No expressions for this object._


## 3D Model (from extension 3D)

An animated 3D model. 

_No expressions for this object._


## 3D capability (from extension 3D)

Move the object in 3D space. 

| Expression | Description |  |
|-----|-----|-----|
| `Object.Object3D::CenterZ()` | Return the Z position of the center of rotation. ||
| `Object.Object3D::Depth()` | Return the depth (size on Z axis). ||
| `Object.Object3D::RotationX()` | Return the rotation on X axis. ||
| `Object.Object3D::RotationY()` | Return the rotation on Y axis. ||
| `Object.Object3D::ScaleZ()` | Return the scale on Z axis of an object (default scale is 1). ||
| `Object.Object3D::Z()` | Return the Z position (the "elevation"). ||

---


## Advanced window management

Provides advanced features related to the game window positioning and interaction with the operating system. 

| Expression | Description |  |
|-----|-----|-----|
| `AdvancedWindow::WindowOpacity()` | Returns the current window opacity (a number from 0 to 1, 1 being fully opaque). ||
| `AdvancedWindow::WindowX()` | Returns the current window X position. ||
| `AdvancedWindow::WindowY()` | Returns the current window Y position. ||

---



## BBText (from extension BBCode Text Object)

Displays a rich text label using BBCode markup (allowing to set parts of the text as bold, italic, use different colors and shadows). [Read more explanations about it.](https://wiki.gdevelop.io/gdevelop5/objects/bbtext)

| Expression | Description |  |
|-----|-----|-----|
| `Object.GetAlignment()` | Get the text alignment ||
| `Object.GetBBText()` | Get BBCode text ||
| `Object.GetFontFamily()` | Get the base font family ||
| `Object.GetFontSize()` | Get the base font size ||
| `Object.GetWrappingWidth()` | Get the wrapping width ||

---



## Bitmap Text 

Displays a text using a "Bitmap Font" (an image representing characters). This is more performant than a traditional Text object and it allows for complete control on the characters aesthetic. [Read more explanations about it.](https://wiki.gdevelop.io/gdevelop5/objects/bitmap_text)

| Expression | Description |  |
|-----|-----|-----|
| `Object.Alignment()` | Return the text alignment. ||
| `Object.FontName()` | Return the font name (defined in the Bitmap font). ||
| `Object.FontSize()` | Return the font size, defined in the Bitmap Font. ||
| `Object.Text()` | Return the text. ||
| `Object.WrappingWidth()` | Return the width, in pixels, after which the text is wrapped on next line. ||

---


## Device sensors

Allow the game to access the sensors of a mobile device. [Read more explanations about it.](https://wiki.gdevelop.io/gdevelop5/all-features/device-sensors)

| Expression | Description |  |
|-----|-----|-----|
| `DeviceSensors::AccelerationX()` | Get the devices acceleration on the X-axis (m/s²) ||
| `DeviceSensors::AccelerationY()` | Get the devices acceleration on the Y-axis (m/s²) ||
| `DeviceSensors::AccelerationZ()` | Get the devices acceleration on the Z-axis (m/s²) ||
| `DeviceSensors::OrientationAbsolute()` | Get if the devices orientation is absolute and not relative ||
| `DeviceSensors::OrientationAlpha()` | Get the devices orientation Alpha (compass) ||
| `DeviceSensors::OrientationBeta()` | Get the devices orientation Beta ||
| `DeviceSensors::OrientationGamma()` | Get the devices orientation Gamma value ||
| `DeviceSensors::RotationAlpha()` | Get the devices rotation Alpha ||
| `DeviceSensors::RotationBeta()` | Get the devices rotation Beta ||
| `DeviceSensors::RotationGamma()` | Get the devices rotation Gamma ||

---


## Dialogue Tree

Handle dialogue trees, made using Yarn Spinner. Useful to make complex dialogues with multiple choices. The Yarn Spinner editor is embedded in GDevelop so you can edit your dialogues without leaving GDevelop. [Read more explanations about it.](https://wiki.gdevelop.io/gdevelop5/all-features/dialogue-tree)

| Expression | Description |  |
|-----|-----|-----|
| `DialogueTree::BranchTag(number)` | Get a tag of the current branch of the running dialogue via its index ||
| | _🔢 Number_ | Tag Index Number |
| `DialogueTree::BranchTags()` | Get the tags of the current branch of the running dialogue ||
| `DialogueTree::BranchText()` | Get the full raw text of the current branch ||
| `DialogueTree::BranchTitle()` | Get the title of the current branch of the running dialogue ||
| `DialogueTree::ClippedLineText()` | Get dialogue line text clipped by the typewriter effect. Use the "Scroll clipped text" action to control the typewriter effect. ||
| `DialogueTree::CommandParameter(number)` | Get the parameters of a command call - <<command withParameter anotherParameter>> ||
| | _🔢 Number_ | parameter Index Number _Optional_. |
| `DialogueTree::CommandParametersCount()` | Get the number of parameters in the currently passed command ||
| `DialogueTree::HorizontalOptionsList(string)` | Get the text of all available options from an Options line type as a horizontal list. You can also pass the selected option's cursor string, which by default is -> ||
| | _string_ | Options Selection Cursor |
| `DialogueTree::LineText()` | Returns the current dialogue line text ||
| `DialogueTree::Option(number)` | Get the text of an option from an Options line type, using the option's Number. The numbers start from 0. ||
| | _🔢 Number_ | Option Index Number |
| `DialogueTree::OptionsCount()` | Get the number of options in an options line type ||
| `DialogueTree::SelectedOptionIndex()` | Get the number of the currently selected option. Use this to help you render the option selection marker at the right place. ||
| `DialogueTree::TagParameter(number)` | Get parameter from a Tag found by the branch contains tag condition ||
| | _🔢 Number_ | parameter Index Number _Optional_. |
| `DialogueTree::Variable(string)` | Get dialogue state value ||
| | _string_ | Variable Name |
| `DialogueTree::VerticalOptionsList(string)` | Get the text of all available options from an Options line type as a vertical list. You can also pass the selected option's cursor string, which by default is -> ||
| | _string_ | Options Selection Cursor |
| `DialogueTree::VisitedBranchTitles()` | Get a list of all visited branches ||

---


## Facebook Instant Games

Allow your game to send scores and interact with the Facebook Instant Games platform. [Read more explanations about it.](https://wiki.gdevelop.io/gdevelop5/publishing/publishing-to-facebook-instant-games)

| Expression | Description |  |
|-----|-----|-----|
| `FacebookInstantGames::PlayerId()` | Get the player unique identifier ||
| `FacebookInstantGames::PlayerName()` | Get the player name ||

---


## File system

Access the filesystem of the operating system. [Read more explanations about it.](https://wiki.gdevelop.io/gdevelop5/all-features/filesystem)

| Expression | Description |  |
|-----|-----|-----|
| `FileSystem::DesktopPath()` | Get the path to the desktop folder. ||
| `FileSystem::DirectoryName(string)` | Returns the portion of the path that represents the directories, without the ending file name. ||
| | _string_ | File or folder path |
| `FileSystem::DocumentsPath()` | Get the path to the documents folder. ||
| `FileSystem::ExecutableFolderPath()` | Get the path to this game executable folder. ||
| `FileSystem::ExecutablePath()` | Get the path to this game executable file. ||
| `FileSystem::ExtensionName(string)` | Returns the extension of the file designated by the given path, including the extension period. For example: ".txt". ||
| | _string_ | File path |
| `FileSystem::FileName(string)` | Returns the name of the file with its extension, if any. ||
| | _string_ | File path |
| `FileSystem::PathDelimiter()` | Get the operating system path delimiter. ||
| `FileSystem::PicturesPath()` | Get the path to the pictures folder. ||
| `FileSystem::TempPath()` | Get the path to temp folder. ||
| `FileSystem::UserHomePath()` | Get the path to the user home folder. ||
| `FileSystem::UserdataPath()` | Get the path to userdata folder (for application settings). ||

---


## Firebase

Use Google Firebase services (database, functions, storage...) in your game. [Read more explanations about it.](https://wiki.gdevelop.io/gdevelop5/all-features/firebase)

| Expression | Description |  |
|-----|-----|-----|
| `Firebase::GetAccountCreationTime()` | Gets the accounts creation time. ||
| `Firebase::GetAuthToken(string)` | Get the user authentication token. The token is the proof of authentication. ||
| | _string_ | Setting Name |
| `Firebase::GetLastLoginTime()` | Gets the user last login time. ||
| `Firebase::GetPhoneNumber()` | Gets the user phone number. ||
| `Firebase::GetPhotoURL()` | Gets an URL to the user profile picture. ||
| `Firebase::GetRefreshToken()` | Gets the user refresh token. For advanced usage only. ||
| `Firebase::GetRemoteConfigNumber(string)` | Get a setting from Firebase Remote Config as Number. ||
| | _string_ | Setting Name |
| `Firebase::GetRemoteConfigString(string)` | Get a setting from Firebase Remote Config as a string. ||
| | _string_ | Setting Name |
| `Firebase::GetTenantID()` | Gets the user tenant ID. For advanced usage only. ||
| `Firebase::GetUserDisplayName()` | Gets the user display name. ||
| `Firebase::GetUserEmail()` | Gets the user email address. ||
| `Firebase::GetUserUID()` | Gets the user Unique IDentifier. Use that to link data to an user instead of the name or email. ||
| `Firebase::ServerTimestamp()` | Set a field to the timestamp on the server when the request arrives there ||

---


## Leaderboards

Allow your game to send scores to your leaderboards. [Read more explanations about it.](https://wiki.gdevelop.io/gdevelop5/all-features/leaderboards)

| Expression | Description |  |
|-----|-----|-----|
| `Leaderboards::FormatPlayerName(string)` | Formats a name so that it can be submitted to a leaderboard. ||
| | _string_ | Raw player name |
| `Leaderboards::LastSaveError(leaderboard identifier)` | Get the error of the last save attempt. ||
| | _🔤 Leaderboard Identifier (String)_ | Leaderboard If no leaderboard is specified, will return the value related to the last leaderboard save action. _Optional_. |

---



## Light (from extension Lights)

Displays a light on the scene, with a customizable radius and color. Add then the Light Obstacle behavior to the objects that must act as obstacle to the lights. 

_No expressions for this object._


## Light Obstacle Behavior (from extension Lights)

Flag objects as being obstacles to light. The light emitted by light objects will be stopped by the object. 

_No expressions for this behavior._


---


## P2P

Allow game instances to communicate remotely using messages sent via WebRTC (P2P). [Read more explanations about it.](https://wiki.gdevelop.io/gdevelop5/all-features/p2p)

| Expression | Description |  |
|-----|-----|-----|
| `P2P::GetEventData(string)` | Returns the data received when the specified event was last triggered ||
| | _string_ | Event name |
| `P2P::GetEventSender(string)` | Returns the id of the peer that triggered the event ||
| | _string_ | Event name |
| `P2P::GetID()` | Gets the client ID of the current game instance ||
| `P2P::GetLastConnectedPeer()` | Gets the ID of the newly connected peer. ||
| `P2P::GetLastDisconnectedPeer()` | Gets the ID of the latest peer that has disconnected. ||
| `P2P::GetLastError()` | Gets the description of the last P2P error ||

---



## Physics Engine 2.0 

Simulate realistic object physics with gravity, forces, joints, etc. [Read more explanations about it.](https://wiki.gdevelop.io/gdevelop5/behaviors/physics2)

| Expression | Description |  |
|-----|-----|-----|
| `Object.Physics2::AngularDamping()` | Get the angular damping of an object. ||
| `Object.Physics2::AngularVelocity()` | Get the angular velocity of an object. ||
| `Object.Physics2::Density()` | Get the density of an object. ||
| `Object.Physics2::DistanceJointDampingRatio(number)` | Distance joint damping ratio ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::DistanceJointFrequency(number)` | Distance joint frequency ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::DistanceJointLength(number)` | Distance joint length ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::Friction()` | Get the friction of an object. ||
| `Object.Physics2::FrictionJointMaxForce(number)` | Friction joint maximum force ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::FrictionJointMaxTorque(number)` | Friction joint maximum torque ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::GearJointFirstJoint(number)` | Gear joint first joint ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::GearJointRatio(number)` | Gear joint ratio ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::GearJointSecondJoint(number)` | Gear joint second joint ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::GravityScale()` | Get the gravity scale of an object. ||
| `Object.Physics2::GravityX()` | World gravity on X axis ||
| `Object.Physics2::GravityY()` | World gravity on Y axis ||
| `Object.Physics2::Inertia()` | Return the rotational inertia of the object (in kilograms * meters * meters) ||
| `Object.Physics2::JointFirstAnchorX(number)` | Joint first anchor X ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::JointFirstAnchorY(number)` | Joint first anchor Y ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::JointReactionForce(number)` | Joint reaction force ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::JointReactionTorque(number)` | Joint reaction torque ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::JointSecondAnchorX(number)` | Joint second anchor X ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::JointSecondAnchorY(number)` | Joint second anchor Y ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::LinearDamping()` | Get the linear damping of an object. ||
| `Object.Physics2::LinearVelocity()` | Get the linear velocity of an object. ||
| `Object.Physics2::LinearVelocityAngle()` | Get the linear velocity angle of an object. ||
| `Object.Physics2::LinearVelocityX()` | Get the linear velocity of an object on X axis. ||
| `Object.Physics2::LinearVelocityY()` | Get the linear velocity of an object on Y axis. ||
| `Object.Physics2::Mass()` | Return the mass of the object (in kilograms) ||
| `Object.Physics2::MassCenterX()` | Mass center X ||
| `Object.Physics2::MassCenterY()` | Mass center Y ||
| `Object.Physics2::MotorJointAngularOffset(number)` | Motor joint angular offset ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::MotorJointCorrectionFactor(number)` | Motor joint correction factor ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::MotorJointMaxForce(number)` | Motor joint maximum force ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::MotorJointMaxTorque(number)` | Motor joint maximum torque ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::MotorJointOffsetX(number)` | Motor joint offset X ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::MotorJointOffsetY(number)` | Motor joint offset Y ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::MouseJointDampingRatio(number)` | Mouse joint damping ratio ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::MouseJointFrequency(number)` | Mouse joint frequency ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::MouseJointMaxForce(number)` | Mouse joint maximum force ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::MouseJointTargetX(number)` | Mouse joint target X ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::MouseJointTargetY(number)` | Mouse joint target Y ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::PrismaticJointAxisAngle(number)` | Prismatic joint axis angle ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::PrismaticJointMaxMotorForce(number)` | Prismatic joint maximum motor force ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::PrismaticJointMaxTranslation(number)` | Prismatic joint maximum translation ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::PrismaticJointMinTranslation(number)` | Prismatic joint minimum translation ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::PrismaticJointMotorForce(number)` | Prismatic joint motor force ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::PrismaticJointMotorSpeed(number)` | Prismatic joint motor speed ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::PrismaticJointReferenceAngle(number)` | Prismatic joint reference angle ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::PrismaticJointSpeed(number)` | Prismatic joint speed ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::PrismaticJointTranslation(number)` | Prismatic joint current translation ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::PulleyJointFirstGroundAnchorX(number)` | Pulley joint first ground anchor X ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::PulleyJointFirstGroundAnchorY(number)` | Pulley joint first ground anchor Y ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::PulleyJointFirstLength(number)` | Pulley joint first length ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::PulleyJointRatio(number)` | Pulley joint ratio ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::PulleyJointSecondGroundAnchorX(number)` | Pulley joint second ground anchor X ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::PulleyJointSecondGroundAnchorY(number)` | Pulley joint second ground anchor Y ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::PulleyJointSecondLength(number)` | Pulley joint second length ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::Restitution()` | Get the restitution of an object. ||
| `Object.Physics2::RevoluteJointAngle(number)` | Revolute joint current angle ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::RevoluteJointMaxAngle(number)` | Revolute joint maximum angle ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::RevoluteJointMaxMotorTorque(number)` | Revolute joint maximum motor torque ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::RevoluteJointMinAngle(number)` | Revolute joint minimum angle ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::RevoluteJointMotorSpeed(number)` | Revolute joint motor speed ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::RevoluteJointMotorTorque(number)` | Revolute joint motor torque ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::RevoluteJointReferenceAngle(number)` | Revolute joint reference angle ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::RevoluteJointSpeed(number)` | Revolute joint angular speed ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::RopeJointMaxLength(number)` | Rope joint maximum length ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::TimeScale()` | World time scale ||
| `Object.Physics2::WeldJointDampingRatio(number)` | Weld joint damping ratio ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::WeldJointFrequency(number)` | Weld joint frequency ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::WeldJointReferenceAngle(number)` | Weld joint reference angle ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::WheelJointAxisAngle(number)` | Wheel joint axis angle ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::WheelJointDampingRatio(number)` | Wheel joint damping ratio ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::WheelJointFrequency(number)` | Wheel joint frequency ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::WheelJointMaxMotorTorque(number)` | Wheel joint maximum motor torque ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::WheelJointMotorSpeed(number)` | Wheel joint motor speed ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::WheelJointMotorTorque(number)` | Wheel joint motor torque ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::WheelJointSpeed(number)` | Wheel joint speed ||
| | _🔢 Number_ | Joint ID |
| `Object.Physics2::WheelJointTranslation(number)` | Wheel joint current translation ||
| | _🔢 Number_ | Joint ID |

---


## Player Authentication

Allow your game to authenticate players. [Read more explanations about it.](https://wiki.gdevelop.io/gdevelop5/all-features/player-authentication)

| Expression | Description |  |
|-----|-----|-----|
| `PlayerAuthentication::Username()` | Get the username of the authenticated player. ||

---


## Steamworks (Steam) (experimental)

Adds integrations for Steam's Steamworks game development SDK. 

| Expression | Description |  |
|-----|-----|-----|
| `Steamworks::ActionVectorX(number, string)` | The action vector of a Steam Input analog joystick on the X-axis, from 1 (all right) to -1 (all left). ||
| | _🔢 Number_ | Controller number |
| | _🔤 Name (String)_ | ActionName |
| `Steamworks::ActionVectorY(number, string)` | The action vector of a Steam Input analog joystick on the Y-axis, from 1 (all up) to -1 (all down). ||
| | _🔢 Number_ | Controller number |
| | _🔤 Name (String)_ | ActionName |
| `Steamworks::AppBuildID()` | Gets the ID of the current app build. ||
| `Steamworks::AppID()` | Obtains the game's Steam app ID, as declared in the games properties. ||
| `Steamworks::BetaName()` | Gets the name of the beta the player enrolled to in the Steam game properties. ||
| `Steamworks::ControllerCount()` | The amount of connected Steam Input controllers. ||
| `Steamworks::CountryCode()` | The player's country represented as its two-letter code. ||
| `Steamworks::CurrentLobbyAttribute(string)` | Obtains the value of one of the current lobby's attributes. ||
| | _🔤 Name (String)_ | The attribute to read |
| `Steamworks::CurrentLobbyID()` | The ID of the current lobby, useful for letting other players join it. ||
| `Steamworks::CurrentLobbyMemberCount()` | Obtains the current lobby's member count. ||
| `Steamworks::CurrentLobbyMemberLimit()` | Obtains the current lobby's maximum member limit. ||
| `Steamworks::CurrentLobbyOwner()` | Obtains the Steam ID of the user that owns the current lobby. ||
| `Steamworks::GameLanguage()` | Gets the language the user set in the Steam game properties. ||
| `Steamworks::InstalledApplicationPath(string)` | Gets the path to an installed Steam application. ||
| | _🔤 Name (String)_ | The Steam App ID of the application |
| `Steamworks::Level()` | Obtains the player's Steam level ||
| `Steamworks::LobbyAttribute(string, string)` | Obtains the value of one of a lobby's attributes. ||
| | _string_ | The ID of the lobby |
| | _🔤 Name (String)_ | The attribute to read |
| `Steamworks::LobbyMemberCount(string)` | Obtains a lobby's member count. ||
| | _string_ | The ID of the lobby |
| `Steamworks::LobbyMemberLimit(string)` | Obtains a lobby's maximum member limit. ||
| | _string_ | The ID of the lobby |
| `Steamworks::LobbyOwner(string)` | Obtains the Steam ID of the user that owns a lobby. ||
| | _string_ | The ID of the lobby |
| `Steamworks::Name()` | The player's registered name on Steam. ||
| `Steamworks::ReadCloudFile(string)` | Reads a file from Steam Cloud and returns its contents. ||
| | _🔤 Name (String)_ | Name of file to read |
| `Steamworks::ServerTime()` | Obtains the real current time from the Steam servers, which cannot be faked by changing the system time. ||
| `Steamworks::SteamID()` | The player's unique Steam ID number. Note that it is too big a number to load correctly as a traditional number ("floating point number"), and must be used as a string. ||
| `Steamworks::WorkshopItemDownloadProgress(string)` | The amount of data that has been downloaded by Steam for a currrently downloading item so far. ||
| | _🔤 Name (String)_ | Workshop Item ID |
| `Steamworks::WorkshopItemDownloadTotal(string)` | The amount of data that needs to be downloaded in total by Steam for a currrently downloading item. ||
| | _🔤 Name (String)_ | Workshop Item ID |
| `Steamworks::WorkshopItemInstallationTimestamp(string)` | The timestamp of the last time the contents file of an installed workshop item was updated. ||
| | _🔤 Name (String)_ | Workshop Item ID |
| `Steamworks::WorkshopItemLocation(string)` | The file path to the contents file of an installed workshop item. ||
| | _🔤 Name (String)_ | Workshop Item ID |
| `Steamworks::WorkshopItemSize(string)` | The size on disk taken by the contents file of an installed workshop item. ||
| | _🔤 Name (String)_ | Workshop Item ID |

---



## Text input (from extension Text Input)

A text field the player can type text into. 

| Expression | Description |  |
|-----|-----|-----|
| `Object.BorderOpacity()` | Return the border opacity, between 0 (fully transparent) and 255 (opaque). ||
| `Object.BorderWidth()` | Return the border width. ||
| `Object.FillOpacity()` | Return the fill opacity, between 0 (fully transparent) and 255 (opaque). ||
| `Object.Font size()` | Return the font size. ||
| `Object.FontResourceName()` | Return the font name. ||
| `Object.InputType()` | Return the input type. ||
| `Object.Placeholder()` | Return the placeholder. ||
| `Object.Text()` | Return the text. ||

---



## Tilemap collision mask (from extension Tilemap)

Invisible object handling collisions with parts of a tilemap. [Read more explanations about it.](https://wiki.gdevelop.io/gdevelop5/objects/tilemap)

_No expressions for this object._


## Tilemap 

Displays a tiled-based map, made with the Tiled editor (https://www.mapeditor.org/) or the LDtk editor (https://ldtk.io/). [Read more explanations about it.](https://wiki.gdevelop.io/gdevelop5/objects/tilemap)

| Expression | Description |  |
|-----|-----|-----|
| `Object.AnimationFps()` | Get the animation speed (in frames per second) ||
| `Object.AnimationSpeedScale()` | Get the Animation speed scale ||
| `Object.LayerIndex()` | Get the layer index being displayed ||
| `Object.LevelIndex()` | Return the level index being displayed.. ||

---


## Tweening

Animate object properties over time. This allows smooth transitions, animations or movement of objects to specified positions. [Read more explanations about it.](https://wiki.gdevelop.io/gdevelop5/behaviors/tween)

| Expression | Description |  |
|-----|-----|-----|
| `Tween::Ease(string, number, number, number)` | Tween between 2 values according to an easing function. ||
| | _🔤 String_ | Easing |
| | _🔢 Number_ | From value |
| | _🔢 Number_ | To value |
| | _🔢 Number_ | Weighting From 0 to 1. |
| `Tween::Progress(string)` | Return the progress of a tween (between 0.0 and 1.0). ||
| | _🔤 Name (String)_ | Tween Identifier |
| `Tween::Value(string)` | Return the value of a tween. It is always 0 for tweens with several values. ||
| | _🔤 Name (String)_ | Tween Identifier |

## Tween (from extension Tweening)

Smoothly animate position, angle, scale and other properties of objects. [Read more explanations about it.](https://wiki.gdevelop.io/gdevelop5/behaviors/tween)

| Expression | Description |  |
|-----|-----|-----|
| `Object.Tween::Progress(string)` | Return the progress of a tween (between 0.0 and 1.0). ||
| | _🔤 Name (String)_ | Tween Identifier |
| `Object.Tween::Value(string)` | Return the value of a tween. It is always 0 for tweens with several values. ||
| | _🔤 Name (String)_ | Tween Identifier |

---



## Video 

Displays a video. [Read more explanations about it.](https://wiki.gdevelop.io/gdevelop5/objects/video)

| Expression | Description |  |
|-----|-----|-----|
| `Object.CurrentTime()` | Return the current time of a video object (in seconds). ||
| `Object.Duration()` | Return the duration of a video object (in seconds). ||
| `Object.PlaybackSpeed()` | Return the playback speed of a video object ||
| `Object.Volume()` | Get the volume of a video object, between 0 (muted) and 100 (maximum). ||