# BBCode Text Object Reference

A BBText is an object displaying on the screen a rich text formatted using BBCode markup (allowing to set parts of the text as bold, italic, use different colors and shadows). [Read more explanations about it.](/gdevelop5/objects/bbtext)



## BBText 

Displays a rich text label using BBCode markup (allowing to set parts of the text as bold, italic, use different colors and shadows). 

### Object actions

**Alignment**  
Change the alignment of the text.

??? quote "See parameters"

    - Parameter 0 (👾 Object): BBText
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔤 String): Alignment (one of: "left", "right", "center")

**BBCode text**  
Set BBCode text

??? quote "See parameters"

    - Parameter 0 (👾 Object): BBText
    - Parameter 1: 🟰 Operator
    - Parameter 2 (string): Text

**Color**  
Set base color

??? quote "See parameters"

    - Parameter 0 (👾 Object): BBText
    - Parameter 1 (color): Color (R;G;B)

**Font family**  
Set font family

??? quote "See parameters"

    - Parameter 0 (👾 Object): BBText
    - Parameter 1 (fontResource): Font family

**Font size**  
Set base font size

??? quote "See parameters"

    - Parameter 0 (👾 Object): BBText
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Font size

**Word wrapping**  
De/activate word wrapping.

??? quote "See parameters"

    - Parameter 0 (👾 Object): BBText
    - Parameter 1 (❓ Yes or No): Activate word wrapping

**Wrapping width**  
Change the width, in pixels, after which the text is wrapped on next line.

??? quote "See parameters"

    - Parameter 0 (👾 Object): BBText
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Wrapping width

### Object conditions

**Alignment**  
Check the current text alignment.

??? quote "See parameters"

    - Parameter 0 (👾 Object): BBText
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔤 String): Alignment (one of: "left", "right", "center")

**BBCode text**  
Compare the value of the BBCode text.

??? quote "See parameters"

    - Parameter 0 (👾 Object): BBText
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (string): Text

**Font family**  
Compare the value of font family

??? quote "See parameters"

    - Parameter 0 (👾 Object): BBText
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (string): Font family

**Font size**  
Compare the base font size of the text.

??? quote "See parameters"

    - Parameter 0 (👾 Object): BBText
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Font size

**Word wrapping**  
Check if word wrapping is enabled.

??? quote "See parameters"

    - Parameter 0 (👾 Object): BBText

**Wrapping width**  
Compare the width, in pixels, after which the text is wrapped on next line.

??? quote "See parameters"

    - Parameter 0 (👾 Object): BBText
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Wrapping width

### Object expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.GetAlignment()` | Get the text alignment ||
| `Object.GetBBText()` | Get BBCode text ||
| `Object.GetFontFamily()` | Get the base font family ||
| `Object.GetFontSize()` | Get the base font size ||
| `Object.GetWrappingWidth()` | Get the wrapping width ||



---

The BBCode Text Object extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **BBCode Text Object** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).