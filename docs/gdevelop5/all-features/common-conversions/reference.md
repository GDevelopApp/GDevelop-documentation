# Conversion

Expressions to convert number, texts and quantities. [Read more explanations about it.](https://wiki.gdevelop.io/gdevelop5/all-features/common-conversions)

## Actions

**Convert JSON to global variable**  
Parse a JSON object and store it into a global variable

**Convert JSON to object variable**  
Parse a JSON object and store it into an object variable

**Convert JSON to a scene variable**  
Parse a JSON object and store it into a scene variable

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `GlobalVarToJSON(globalvar)` | Convert a global variable to JSON ||
| | _globalvar_ | The global variable to be stringified |
| `LargeNumberToString(number)` | Convert the result of the expression to text, without using the scientific notation ||
| | _number_ | Expression to be converted to text |
| `ObjectVarToJSON(object, objectvar)` | Convert an object variable to JSON ||
| | _object_ | The object with the variable |
| | _objectvar_ | The object variable to be stringified |
| `ToDeg(number)` | Converts the angle, expressed in radians, into degrees ||
| | _number_ | Angle, in radians |
| `ToJSON(scenevar)` | Convert a scene variable to JSON ||
| | _scenevar_ | Scene variable to be stringified |
| `ToNumber(string)` | Convert the text to a number ||
| | _string_ | Text to convert to a number |
| `ToRad(number)` | Converts the angle, expressed in degrees, into radians ||
| | _number_ | Angle, in degrees |
| `ToString(number)` | Convert the result of the expression to text ||
| | _number_ | Expression to be converted to text |

---
*This page is an auto-generated reference page about the **Conversion** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).