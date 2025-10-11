# Text Input Reference

A text field the player can type text into. 



## Text input 

A text field the player can type text into. 

### Object actions

**Focus**
Focus the input so that text can be entered (like if it was touched/clicked).

??? quote "See parameters"

    - Parameter 0 (👾 Object): Text input

**Border color**
Set the border color of the object.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Text input
    - Parameter 1: color

**Border opacity**
Change the border opacity, between 0 (fully transparent) and 255 (opaque).

??? quote "See parameters"

    - Parameter 0 (👾 Object): Text input
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Opacity (0-255)

**Border width**
Change the border width.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Text input
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

**Disabled**
Set (or unset) if the text input is disabled.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Text input
    - Parameter 1 (❓ Yes or No): New value

**Fill color**
Set the fill color of the object.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Text input
    - Parameter 1: color

**Fill opacity**
Change the fill opacity, between 0 (fully transparent) and 255 (opaque).

??? quote "See parameters"

    - Parameter 0 (👾 Object): Text input
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Opacity (0-255)

**Font size**
Change the font size.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Text input
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

**Font name**
Set the font of the object.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Text input
    - Parameter 1 (fontResource): Font resource name

**Input type**
Change the input type.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Text input
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔤 String): Input type (one of: "text", "text area", "email", "password", "number", "telephone number", "url", "search")

**Placeholder**
Change the placeholder.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Text input
    - Parameter 1: 🟰 Operator
    - Parameter 2 (string): Text

**Read-only**
Set (or unset) if the text input is read-only.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Text input
    - Parameter 1 (❓ Yes or No): Read-only?

**Spell check enabled**
Set (or unset) if spell check is enabled.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Text input
    - Parameter 1 (❓ Yes or No): New value

**Text color**
Set the text color of the object.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Text input
    - Parameter 1: color

### Object conditions

**Border opacity**
Compare the border opacity, between 0 (fully transparent) and 255 (opaque).

??? quote "See parameters"

    - Parameter 0 (👾 Object): Text input
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Opacity (0-255)

**Border width**
Compare the border width.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Text input
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

**Disabled**
Check if the text input is disabled.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Text input

**Fill opacity**
Compare the fill opacity, between 0 (fully transparent) and 255 (opaque).

??? quote "See parameters"

    - Parameter 0 (👾 Object): Text input
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Opacity (0-255)

**Focused**
Check if the text input is focused (the cursor is in the field and player can type text in).

??? quote "See parameters"

    - Parameter 0 (👾 Object): Text input

**Font size**
Compare the font size.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Text input
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

**Font name**
Compare the font name.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Text input
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (string): Value to compare

**Input type**
Compare the input type.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Text input
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔤 String): Input type (one of: "text", "text area", "email", "password", "number", "telephone number", "url", "search")

**Input is submitted**
Check if the input is submitted, which usually happens when the Enter key is pressed on a keyboard, or a specific button on mobile virtual keyboards.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Text input

**Placeholder**
Compare the placeholder.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Text input
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (string): Text

**Read-only**
Check if the text input is read-only.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Text input

**Spell check enabled**
Check if spell check is enabled.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Text input

### Object expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.BorderOpacity()` | Return the border opacity, between 0 (fully transparent) and 255 (opaque). ||
| `Object.BorderWidth()` | Return the border width. ||
| `Object.FillOpacity()` | Return the fill opacity, between 0 (fully transparent) and 255 (opaque). ||
| `Object.Font size()` | Return the font size. ||
| `Object.FontResourceName()` | Return the font name. ||
| `Object.InputType()` | Return the input type. ||
| `Object.Placeholder()` | Return the placeholder. ||



---

The Text Input extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **Text Input** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).