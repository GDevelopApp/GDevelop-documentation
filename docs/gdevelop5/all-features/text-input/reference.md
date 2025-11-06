# Text Input Reference

A text field the player can type text into. 



## Text input 

A text field the player can type text into. 

### Object properties

- **Color** (🎨 Color). Default value is `0;0;0`.
- **Opacity** (🔢 Number). Default value is `255`.
- **Width** (🔢 Number). Default value is `1`.
- **Disabled** (🔘 Boolean). Default value is `false`.
- **Fill color** (🎨 Color). Default value is `255;255;255`.
- **Fill opacity** (🔢 Number). Default value is `255`.
- **Font** (🗂️ Resource).
- **Font size (px)** (🔢 Number). Default value is `20`.
- **Initial value** (🔤 String).
- **Input type** (choice, one of: "text", "text area", "email", "password", "number", "telephone number", "url", "search"). By default, a "text" is single line. Choose "text area" to allow multiple lines to be entered. Default value is `text`.
- **Max length** (🔢 Number). The maximum length of the input value (this property will be ignored if the input type is a number). Default value is `0`.
- **Padding (horizontal)** (🔢 Number). Default value is `2`.
- **Padding (vertical)** (🔢 Number). Default value is `1`.
- **Placeholder** (🔤 String). Default value is `Touch to start typing`.
- **Read only** (🔘 Boolean). Default value is `false`.
- **Enable spell check** (🔘 Boolean). Default value is `false`.
- **Text alignment** (choice, one of: "left", "center", "right"). Default value is `left`.
- **Text color** (🎨 Color). Default value is `0;0;0`.

??? quote "See internal technical details"


    - **Color** is stored as `borderColor` (color). Default value is `0;0;0`.
    - **Opacity** is stored as `borderOpacity` (number). Default value is `255`.
    - **Width** is stored as `borderWidth` (number). Default value is `1`.
    - **Disabled** is stored as `disabled` (boolean). Default value is `false`.
    - **Fill color** is stored as `fillColor` (color). Default value is `255;255;255`.
    - **Fill opacity** is stored as `fillOpacity` (number). Default value is `255`.
    - **Font** is stored as `fontResourceName` (resource). Default value is ``.
    - **Font size (px)** is stored as `fontSize` (number). Default value is `20`.
    - **Initial value** is stored as `initialValue` (string). Default value is ``.
    - **Input type** is stored as `inputType` (choice). Default value is `text`.
    - **Max length** is stored as `maxLength` (number). Default value is `0`.
    - **Padding (horizontal)** is stored as `paddingX` (number). Default value is `2`.
    - **Padding (vertical)** is stored as `paddingY` (number). Default value is `1`.
    - **Placeholder** is stored as `placeholder` (string). Default value is `Touch to start typing`.
    - **Read only** is stored as `readOnly` (boolean). Default value is `false`.
    - **Enable spell check** is stored as `spellCheck` (boolean). Default value is `false`.
    - **Text alignment** is stored as `textAlign` (choice). Default value is `left`.
    - **Text color** is stored as `textColor` (color). Default value is `0;0;0`.

### Object actions

**Focus**  
Focus the input so that text can be entered (like if it was touched/clicked).

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Text input

    > Technical note: this action internal type (in GDevelop JSON) is `TextInput::TextInputObject::Focus`.

**Border color**  
Set the border color of the object.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Text input
    - Parameter 1: 🎨 Color

    > Technical note: this action internal type (in GDevelop JSON) is `TextInput::TextInputObject::SetBorderColor`.

**Border opacity**  
Change the border opacity, between 0 (fully transparent) and 255 (opaque).

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Text input
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Opacity (0-255)

    > Technical note: this action internal type (in GDevelop JSON) is `TextInput::TextInputObject::SetBorderOpacity`.

**Border width**  
Change the border width.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Text input
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `TextInput::TextInputObject::SetBorderWidth`.

**Disabled**  
Set (or unset) if the text input is disabled.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Text input
    - Parameter 1 (❓ Yes or No): New value

    > Technical note: this action internal type (in GDevelop JSON) is `TextInput::TextInputObject::SetDisabled`.

**Fill color**  
Set the fill color of the object.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Text input
    - Parameter 1: 🎨 Color

    > Technical note: this action internal type (in GDevelop JSON) is `TextInput::TextInputObject::SetFillColor`.

**Fill opacity**  
Change the fill opacity, between 0 (fully transparent) and 255 (opaque).

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Text input
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Opacity (0-255)

    > Technical note: this action internal type (in GDevelop JSON) is `TextInput::TextInputObject::SetFillOpacity`.

**Font size**  
Change the font size.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Text input
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `TextInput::TextInputObject::SetFont size`.

**Font name**  
Set the font of the object.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Text input
    - Parameter 1 (fontResource): Font resource name

    > Technical note: this action internal type (in GDevelop JSON) is `TextInput::TextInputObject::SetFontResourceName`.

**Input type**  
Change the input type.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Text input
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔤 String): Input type (one of: "text", "text area", "email", "password", "number", "telephone number", "url", "search")

    > Technical note: this action internal type (in GDevelop JSON) is `TextInput::TextInputObject::SetInputType`.

**Placeholder**  
Change the placeholder.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Text input
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔤 String): Text

    > Technical note: this action internal type (in GDevelop JSON) is `TextInput::TextInputObject::SetPlaceholder`.

**Read-only**  
Set (or unset) if the text input is read-only.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Text input
    - Parameter 1 (❓ Yes or No): Read-only?

    > Technical note: this action internal type (in GDevelop JSON) is `TextInput::TextInputObject::SetReadOnly`.

**Spell check enabled**  
Set (or unset) if spell check is enabled.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Text input
    - Parameter 1 (❓ Yes or No): New value

    > Technical note: this action internal type (in GDevelop JSON) is `TextInput::TextInputObject::SetSpellCheck`.

**Text color**  
Set the text color of the object.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Text input
    - Parameter 1: 🎨 Color

    > Technical note: this action internal type (in GDevelop JSON) is `TextInput::TextInputObject::SetTextColor`.


### Object conditions

**Border opacity**  
Compare the border opacity, between 0 (fully transparent) and 255 (opaque).

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Text input
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Opacity (0-255)

    > Technical note: this condition internal type (in GDevelop JSON) is `TextInput::TextInputObject::BorderOpacity`.

**Border width**  
Compare the border width.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Text input
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `TextInput::TextInputObject::BorderWidth`.

**Disabled**  
Check if the text input is disabled.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Text input

    > Technical note: this condition internal type (in GDevelop JSON) is `TextInput::TextInputObject::Disabled`.

**Fill opacity**  
Compare the fill opacity, between 0 (fully transparent) and 255 (opaque).

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Text input
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Opacity (0-255)

    > Technical note: this condition internal type (in GDevelop JSON) is `TextInput::TextInputObject::FillOpacity`.

**Focused**  
Check if the text input is focused (the cursor is in the field and player can type text in).

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Text input

    > Technical note: this condition internal type (in GDevelop JSON) is `TextInput::TextInputObject::Focused`.

**Font size**  
Compare the font size.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Text input
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `TextInput::TextInputObject::Font size`.

**Font name**  
Compare the font name.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Text input
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔤 String): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `TextInput::TextInputObject::FontResourceName`.

**Input type**  
Compare the input type.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Text input
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔤 String): Input type (one of: "text", "text area", "email", "password", "number", "telephone number", "url", "search")

    > Technical note: this condition internal type (in GDevelop JSON) is `TextInput::TextInputObject::InputType`.

**Input is submitted**  
Check if the input is submitted, which usually happens when the Enter key is pressed on a keyboard, or a specific button on mobile virtual keyboards.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Text input

    > Technical note: this condition internal type (in GDevelop JSON) is `TextInput::TextInputObject::IsInputSubmitted`.

**Placeholder**  
Compare the placeholder.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Text input
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔤 String): Text

    > Technical note: this condition internal type (in GDevelop JSON) is `TextInput::TextInputObject::Placeholder`.

**Read-only**  
Check if the text input is read-only.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Text input

    > Technical note: this condition internal type (in GDevelop JSON) is `TextInput::TextInputObject::ReadOnly`.

**Spell check enabled**  
Check if spell check is enabled.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Text input

    > Technical note: this condition internal type (in GDevelop JSON) is `TextInput::TextInputObject::SpellCheck`.


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

*This page is an auto-generated reference page about the **Text Input** feature of [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).