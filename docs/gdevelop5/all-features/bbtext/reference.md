# BBCode Text Object Reference

A BBText is an object displaying on the screen a rich text formatted using BBCode markup (allowing to set parts of the text as bold, italic, use different colors and shadows). [Read more explanations about it.](/gdevelop5/objects/bbtext)



## BBText 

Displays a rich text label using BBCode markup (allowing to set parts of the text as bold, italic, use different colors and shadows). 

### Object actions

**Alignment**  
Change the alignment of the text.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): BBText
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔤 String): Alignment (one of: "left", "right", "center")

    > Technical note: this action internal type (in GDevelop JSON) is `BBText::SetAlignment`.

**BBCode text**  
Set BBCode text

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): BBText
    - Parameter 1: 🟰 Operator
    - Parameter 2 (string): Text

    > Technical note: this action internal type (in GDevelop JSON) is `BBText::SetBBText`.

**Color**  
Set base color

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): BBText
    - Parameter 1 (color): Color (R;G;B)

    > Technical note: this action internal type (in GDevelop JSON) is `BBText::SetColor`.

**Font family**  
Set font family

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): BBText
    - Parameter 1 (fontResource): Font family

    > Technical note: this action internal type (in GDevelop JSON) is `BBText::SetFontFamily2`.

**Font size**  
Set base font size

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): BBText
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Font size

    > Technical note: this action internal type (in GDevelop JSON) is `BBText::SetFontSize`.

**Word wrapping**  
De/activate word wrapping.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): BBText
    - Parameter 1 (❓ Yes or No): Activate word wrapping

    > Technical note: this action internal type (in GDevelop JSON) is `BBText::SetWordWrap`.

**Wrapping width**  
Change the width, in pixels, after which the text is wrapped on next line.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): BBText
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Wrapping width

    > Technical note: this action internal type (in GDevelop JSON) is `BBText::SetWrappingWidth`.

### Object conditions

**Alignment**  
Check the current text alignment.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): BBText
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔤 String): Alignment (one of: "left", "right", "center")

    > Technical note: this condition internal type (in GDevelop JSON) is `BBText::IsAlignment`.

**BBCode text**  
Compare the value of the BBCode text.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): BBText
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (string): Text

    > Technical note: this condition internal type (in GDevelop JSON) is `BBText::IsBBText`.

**Font family**  
Compare the value of font family

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): BBText
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (string): Font family

    > Technical note: this condition internal type (in GDevelop JSON) is `BBText::IsFontFamily`.

**Font size**  
Compare the base font size of the text.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): BBText
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Font size

    > Technical note: this condition internal type (in GDevelop JSON) is `BBText::IsFontSize`.

**Word wrapping**  
Check if word wrapping is enabled.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): BBText

    > Technical note: this condition internal type (in GDevelop JSON) is `BBText::IsWordWrap`.

**Wrapping width**  
Compare the width, in pixels, after which the text is wrapped on next line.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): BBText
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Wrapping width

    > Technical note: this condition internal type (in GDevelop JSON) is `BBText::IsWrappingWidth`.

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