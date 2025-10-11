# Text object Reference

An object that can be used to display any text on the screen: remaining life counter, some indicators, menu buttons, dialogues... [Read more explanations about it.](/gdevelop5/objects/text)



## Text 

Displays a text on the screen. 

### Object actions

**Color**
Change the color of the text. The color is white by default.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: color

**Font**
Change the font of the text.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1 (fontResource): Font resource name

**Bold**
De/activate bold

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1 (❓ Yes or No): Set bold style

**Gradient**
Change the gradient of the text.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1 (🔤 String): Gradient type (one of: "LINEAR_VERTICAL", "LINEAR_HORIZONTAL")
    - Parameter 2 (color): First Color
    - Parameter 3 (color): Second Color
    - Parameter 4 (color): Third Color
    - Parameter 5 (color): Fourth Color

**Italic**
De/activate italic.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1 (❓ Yes or No): Set italic

**Padding**
Set the number of pixels around a text object. If the shadow or the outline around the text are getting cropped, raise this value.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

**Alignment**
Change the text alignment of a multiline text object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1 (🔤 String): Alignment (one of: "left", "center", "right")

**Word wrapping**
De/activate word wrapping. Note that word wrapping is a graphical option,  
you can't get the number of lines displayed

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1 (❓ Yes or No): Wrapping

**Enable shadow**
Enable or disable the shadow of the text.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1 (❓ Yes or No): Show the shadow

**Font size**
Change the font size of a text object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

**Line height**
Change the line height of a text object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

**Outline color**
Change the outline color of the text.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: color

**Enable outline**
Enable or disable the outline of the text.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1 (❓ Yes or No): Enable outline

**Outline thickness**
Change the outline thickness of the text.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Thickness

**Shadow angle**
Change the shadow angle of the text.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Angle (in degrees)

**Shadow blur radius**
Change the shadow blur radius of the text.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Blur radius

**Shadow color**
Change the shadow color of the text.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: color

**Shadow distance**
Change the shadow distance of the text.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Distance

**Shadow opacity**
Change the shadow opacity of the text.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Opacity (0 - 255)

**Wrapping width**
Change the word wrapping width of a Text object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

### Object conditions

**Bold**
Check if the bold style is activated

??? quote "See parameters"

    - Parameter 0: 👾 Object

**Italic**
Check if the italic style is activated

??? quote "See parameters"

    - Parameter 0: 👾 Object

**Wrapping**
Check if word wrapping is enabled.

??? quote "See parameters"

    - Parameter 0: 👾 Object

**Padding**
Compare the number of pixels around a text object. If the shadow or the outline around the text are getting cropped, raise this value.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

**Font size**
Compare the font size of a text object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

**Outline enabled**
Check if the text outline is enabled.

??? quote "See parameters"

    - Parameter 0: 👾 Object

**Shadow enabled**
Check if the text shadow is enabled.

??? quote "See parameters"

    - Parameter 0: 👾 Object

**Line height**
Compare the line height of a text object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

**Outline thickness**
Compare the outline thickness of the text.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Thickness

**Shadow angle**
Compare the shadow angle of the text.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Angle (in degrees)

**Shadow blur radius**
Compare the shadow blur radius of the text.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Blur radius

**Shadow distance**
Compare the shadow distance of the text.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Distance

**Shadow opacity**
Compare the shadow opacity of the text.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Opacity (0 - 255)

**Alignment**
Compare the text alignment of a multiline text object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔤 String): Alignment (one of: "left", "center", "right")

**Wrapping width**
Compare the word wrapping width of a Text object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

### Object expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.FontSize()` | Return the font size of a text object. ||
| `Object.LineHeight()` | Return the line height of a text object. ||
| `Object.OutlineThickness()` | Return the outline thickness of the text. ||
| `Object.Padding()` | Padding ||
| `Object.ShadowAngle()` | Return the shadow angle of the text. ||
| `Object.ShadowBlurRadius()` | Return the shadow blur radius of the text. ||
| `Object.ShadowDistance()` | Return the shadow distance of the text. ||
| `Object.ShadowOpacity()` | Return the shadow opacity of the text. ||



---

The Text object extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **Text object** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).