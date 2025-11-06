# 3D text

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/0b4ef00ba832f327e84d09b036d18f3fc8d4805e3020f95b034a23f558e17a6c_format-text.svg" class="extension-icon"></img>
Display texts in 3D scenes.

**Authors and contributors** to this experimental extension: [D8H](https://gd.games/D8H).

!!! warning
    This is an extension made by a community member and it only got through a
    light review by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of fully reviewed extensions.

---

Display texts with 3D position and rotation.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## 3D text 

A text in 3D. 

### Object properties

- **Line spacing** (🔢 Number, Dimensionless). Default value is `0`.

??? quote "See internal technical details"


    - **Line spacing** is stored as `LineSpacing` (Number). Unit is Dimensionless. Default value is `0`.

### Object actions

**Bold**  
De/activate bold.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (❓ Yes or No): Bold

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Text3D::Text3D::SetBold`.

**Color**  
Change the color of the text.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (string): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Text3D::Text3D::SetColor`.

**Font**  
Change the font of the text.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (string): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Text3D::Text3D::SetFont`.

**Font size**  
Change the font size of a text object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Text3D::Text3D::SetFontSize`.

**Italic**  
De/activate italic.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (❓ Yes or No): Italic

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Text3D::Text3D::SetItalic`.

**Line spacing**  
Change the line spacing of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Text3D::Text3D::SetLineSpacing`.

**Outline color**  
Change the outline color of the text.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (string): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Text3D::Text3D::SetOutlineColor`.

**Enable outline**  
Enable or disable the outline of the text.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (❓ Yes or No): Enable outline

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Text3D::Text3D::SetOutlineEnabled`.

**Outline thickness**  
Change the outline thickness of the text.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Text3D::Text3D::SetOutlineThickness`.

**Shadow angle**  
Change the shadow angle of the text.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Text3D::Text3D::SetShadowAngle`.

**Shadow blur radius**  
Change the shadow blur radius of the text.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Text3D::Text3D::SetShadowBlurRadius`.

**Shadow color**  
Change the shadow color of the text.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (string): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Text3D::Text3D::SetShadowColor`.

**Shadow distance**  
Change the shadow distance of the text.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Text3D::Text3D::SetShadowDistance`.

**Enable shadow**  
Enable or disable the shadow of the text.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (❓ Yes or No): Show the shadow

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Text3D::Text3D::SetShadowEnabled`.

**Shadow opacity**  
Change the shadow opacity of the text.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Text3D::Text3D::SetShadowOpacity`.

**Alignment**  
Change the text alignment of a multiline text object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (stringwithselector): Value (one of: "left", "center", "right")

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Text3D::Text3D::SetTextAlignment`.

**Wrapping**  
De/activate word wrapping. Note that word wrapping is a graphical option, you can't get the number of lines displayed.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1 (❓ Yes or No): Enable outline

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Text3D::Text3D::SetWrapping`.

**Wrapping width**  
Change the word wrapping width of a Text object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Text3D::Text3D::SetWrappingWidth`.


### Object conditions

**Color**  
Compare the color of the text.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: relationaloperator
    - Parameter 2 (string): Value to compare

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Text3D::Text3D::Color`.

**Font**  
Compare the font of the text.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: relationaloperator
    - Parameter 2 (string): Value to compare

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Text3D::Text3D::Font`.

**Font size**  
Compare the font size of a text object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: relationaloperator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Text3D::Text3D::FontSize`.

**Bold**  
Check if the boldstyle is activated.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object

    > Technical note: parameter 1 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Text3D::Text3D::IsBold`.

**Italic**  
Check if the italic style is activated.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object

    > Technical note: parameter 1 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Text3D::Text3D::IsItalic`.

**Outline enabled**  
Check if the text outline is enabled.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object

    > Technical note: parameter 1 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Text3D::Text3D::IsOutlineEnabled`.

**Shadow enabled**  
Check if the text shadowis enabled.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object

    > Technical note: parameter 1 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Text3D::Text3D::IsShadowEnabled`.

**Wrapping**  
Check if the word wrapping style of an object is set.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object

    > Technical note: parameter 1 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Text3D::Text3D::IsWrapping`.

**Line spacing**  
Compare the line spacing of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: relationaloperator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Text3D::Text3D::LineSpacing`.

**Outline color**  
Compare the outline color of the text.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: relationaloperator
    - Parameter 2 (string): Value to compare

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Text3D::Text3D::OutlineColor`.

**Outline thickness**  
Compare the outline thickness of the text.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: relationaloperator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Text3D::Text3D::OutlineThickness`.

**Shadow angle**  
Compare the shadow angle of the text.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: relationaloperator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Text3D::Text3D::ShadowAngle`.

**Shadow blur radius**  
Compare the shadow blur radius of the text.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: relationaloperator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Text3D::Text3D::ShadowBlurRadius`.

**Shadow color**  
Compare the shadow color of the text.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: relationaloperator
    - Parameter 2 (string): Value to compare

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Text3D::Text3D::ShadowColor`.

**Shadow distance**  
Compare the shadow distance of the text.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: relationaloperator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Text3D::Text3D::ShadowDistance`.

**Shadow opacity**  
Compare the shadow opacity of the text.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: relationaloperator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Text3D::Text3D::ShadowOpacity`.

**Alignment**  
Compare the text alignment of a multiline text object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: relationaloperator
    - Parameter 2 (stringwithselector): Value to compare (one of: "left", "center", "right")

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Text3D::Text3D::TextAlignment`.

**Wrapping width**  
Compare the word wrapping width of a Text object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: relationaloperator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Text3D::Text3D::WrappingWidth`.


### Object expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.Color()` | Return the color of the text. ||
| `Object.Font()` | Return the font of the text. ||
| `Object.FontSize()` | Return the font size of a text object. ||
| `Object.LineSpacing()` | Return the line spacing of the object. ||
| `Object.OutlineColor()` | Return the outline color of the text. ||
| `Object.OutlineThickness()` | Return the outline thickness of the text. ||
| `Object.ShadowAngle()` | Return the shadow angle of the text. ||
| `Object.ShadowBlurRadius()` | Return the shadow blur radius of the text. ||
| `Object.ShadowColor()` | Return the shadow color of the text. ||
| `Object.ShadowDistance()` | Return the shadow distance of the text. ||
| `Object.ShadowOpacity()` | Return the shadow opacity of the text. ||
| `Object.TextAlignment()` | Return the text alignment of a multiline text object. ||
| `Object.WrappingWidth()` | Return the word wrapping width of a Text object. ||


---

*This page is an auto-generated reference page about the **3D text** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).