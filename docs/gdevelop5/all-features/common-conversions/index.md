---
title: Common conversions
---
# Common conversions

This category provides expressions and actions to convert between numbers and text, convert angles, and convert variables to and from JSON.

## Angle conversion

Angles can either be expressed in degrees or in radians. A circle describes an angle of 360 degrees or 2π radians. Similarly, a semicircle describes an angle of 180 degrees or π radians.

If you use trigonometric functions like the **sine** or the **cosine**,  you will need to express the angles in **radians**.
Use `ToRad` or `ToDeg` in numerical expressions to convert degrees to radians or radians to degrees.

!!! tip

    Angles can be negative too. For example, -90 degrees is equal to 270 degrees.

![](/wiki/pres_coord2.png)

## Number to/from text conversions

For a string field, only a text can be filled in the field. Similarly, only a number can be filled in a text field.

To input a string in a numerical expression, you can convert it to number using the "Text > Number" expression. If the string input contains alphabetical characters or any other character than numeric characters, the expression will return "NaN", i.e. not a number.

To input a number in string expression, you can use the "Number > Text" expression. If the number used is greater than or equal to 1e+21, the expression returns its value in scientific notation.

To avoid scientific notation for very large numbers, use the **"Number > Text (without scientific notation)"** expression instead. For example, `LargeNumberToString(1234567890123)` returns `"1234567890123"` rather than `"1.234567890123e+12"`.

## Variable to/from JSON

Variables (including structures and arrays) can be serialized to a JSON string and parsed back. This is useful for sending data over the network, storing complex data with [storage actions](/gdevelop5/all-features/storage), or debugging variable content.

### Convert a variable to JSON

Use the **"Convert variable to JSON"** expression (`ToJSON`) to turn any scene or global variable into a JSON string:

```
ToJSON(MyVariable)
```

To convert an **object variable** to JSON, use the **"Convert object variable to JSON"** expression (`ObjectVarToJSON`):

```
ObjectVarToJSON(MyObject, MyObject.SomeVar)
```

### Convert JSON to a variable

Use the action **"Convert JSON to a variable"** to parse a JSON string and store the result into a scene, global, or local variable. This is the inverse of `ToJSON` and allows reading back data that was previously serialized.

To parse JSON directly into an **object variable**, use the **"Convert JSON to object variable"** action instead.

## Reference

All actions, conditions and expressions are listed in [conversions reference page](/gdevelop5/all-features/common-conversions/reference/).
