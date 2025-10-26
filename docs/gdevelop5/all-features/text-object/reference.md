# Text object Reference

An object that can be used to display any text on the screen: remaining life counter, some indicators, menu buttons, dialogues... [Read more explanations about it.](/gdevelop5/objects/text)



## Text 

Displays a text on the screen. 

### Object actions

**Color**  
Change the color of the text. The color is white by default.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: color

    > Technical note: this action internal type (in GDevelop JSON) is `TextObject::ChangeColor`.

**Font**  
Change the font of the text.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (fontResource): Font resource name

    > Technical note: this action internal type (in GDevelop JSON) is `TextObject::Font`.

**Bold**  
De/activate bold

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (❓ Yes or No): Set bold style

    > Technical note: this action internal type (in GDevelop JSON) is `TextObject::SetBold`.

**Gradient**  
Change the gradient of the text.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (🔤 String): Gradient type (one of: "LINEAR_VERTICAL", "LINEAR_HORIZONTAL")
    - Parameter 2 (color): First Color
    - Parameter 3 (color): Second Color
    - Parameter 4 (color): Third Color
    - Parameter 5 (color): Fourth Color

    > Technical note: this action internal type (in GDevelop JSON) is `TextObject::SetGradient`.

**Italic**  
De/activate italic.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (❓ Yes or No): Set italic

    > Technical note: this action internal type (in GDevelop JSON) is `TextObject::SetItalic`.

**Padding**  
Set the number of pixels around a text object. If the shadow or the outline around the text are getting cropped, raise this value.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `TextObject::SetPadding`.

**Alignment**  
Change the text alignment of a multiline text object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (🔤 String): Alignment (one of: "left", "center", "right")

    > Technical note: this action internal type (in GDevelop JSON) is `TextObject::SetTextAlignment`.

**Word wrapping**  
De/activate word wrapping. Note that word wrapping is a graphical option,  
you can't get the number of lines displayed

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (❓ Yes or No): Wrapping

    > Technical note: this action internal type (in GDevelop JSON) is `TextObject::SetWrapping`.

**Enable shadow**  
Enable or disable the shadow of the text.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (❓ Yes or No): Show the shadow

    > Technical note: this action internal type (in GDevelop JSON) is `TextObject::ShowShadow`.

**Font size**  
Change the font size of a text object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `TextObject::Text::SetFontSize`.

**Line height**  
Change the line height of a text object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `TextObject::Text::SetLineHeight`.

**Outline color**  
Change the outline color of the text.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: color

    > Technical note: this action internal type (in GDevelop JSON) is `TextObject::Text::SetOutlineColor`.

**Enable outline**  
Enable or disable the outline of the text.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (❓ Yes or No): Enable outline

    > Technical note: this action internal type (in GDevelop JSON) is `TextObject::Text::SetOutlineEnabled`.

**Outline thickness**  
Change the outline thickness of the text.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Thickness

    > Technical note: this action internal type (in GDevelop JSON) is `TextObject::Text::SetOutlineThickness`.

**Shadow angle**  
Change the shadow angle of the text.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Angle (in degrees)

    > Technical note: this action internal type (in GDevelop JSON) is `TextObject::Text::SetShadowAngle`.

**Shadow blur radius**  
Change the shadow blur radius of the text.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Blur radius

    > Technical note: this action internal type (in GDevelop JSON) is `TextObject::Text::SetShadowBlurRadius`.

**Shadow color**  
Change the shadow color of the text.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: color

    > Technical note: this action internal type (in GDevelop JSON) is `TextObject::Text::SetShadowColor`.

**Shadow distance**  
Change the shadow distance of the text.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Distance

    > Technical note: this action internal type (in GDevelop JSON) is `TextObject::Text::SetShadowDistance`.

**Shadow opacity**  
Change the shadow opacity of the text.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Opacity (0 - 255)

    > Technical note: this action internal type (in GDevelop JSON) is `TextObject::Text::SetShadowOpacity`.

**Wrapping width**  
Change the word wrapping width of a Text object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `TextObject::WrappingWidth`.

### Object conditions

**Bold**  
Check if the bold style is activated

??? quote "See parameters & details"

    - Parameter 0: 👾 Object

    > Technical note: this condition internal type (in GDevelop JSON) is `TextObject::IsBold`.

**Italic**  
Check if the italic style is activated

??? quote "See parameters & details"

    - Parameter 0: 👾 Object

    > Technical note: this condition internal type (in GDevelop JSON) is `TextObject::IsItalic`.

**Wrapping**  
Check if word wrapping is enabled.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object

    > Technical note: this condition internal type (in GDevelop JSON) is `TextObject::IsWrapping`.

**Padding**  
Compare the number of pixels around a text object. If the shadow or the outline around the text are getting cropped, raise this value.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `TextObject::Padding`.

**Font size**  
Compare the font size of a text object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `TextObject::Text::FontSize`.

**Outline enabled**  
Check if the text outline is enabled.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object

    > Technical note: this condition internal type (in GDevelop JSON) is `TextObject::Text::IsOutlineEnabled`.

**Shadow enabled**  
Check if the text shadow is enabled.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object

    > Technical note: this condition internal type (in GDevelop JSON) is `TextObject::Text::IsShadowEnabled`.

**Line height**  
Compare the line height of a text object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `TextObject::Text::LineHeight`.

**Outline thickness**  
Compare the outline thickness of the text.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Thickness

    > Technical note: this condition internal type (in GDevelop JSON) is `TextObject::Text::OutlineThickness`.

**Shadow angle**  
Compare the shadow angle of the text.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Angle (in degrees)

    > Technical note: this condition internal type (in GDevelop JSON) is `TextObject::Text::ShadowAngle`.

**Shadow blur radius**  
Compare the shadow blur radius of the text.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Blur radius

    > Technical note: this condition internal type (in GDevelop JSON) is `TextObject::Text::ShadowBlurRadius`.

**Shadow distance**  
Compare the shadow distance of the text.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Distance

    > Technical note: this condition internal type (in GDevelop JSON) is `TextObject::Text::ShadowDistance`.

**Shadow opacity**  
Compare the shadow opacity of the text.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Opacity (0 - 255)

    > Technical note: this condition internal type (in GDevelop JSON) is `TextObject::Text::ShadowOpacity`.

**Alignment**  
Compare the text alignment of a multiline text object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔤 String): Alignment (one of: "left", "center", "right")

    > Technical note: this condition internal type (in GDevelop JSON) is `TextObject::TextAlignment`.

**Wrapping width**  
Compare the word wrapping width of a Text object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `TextObject::WrappingWidth`.

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