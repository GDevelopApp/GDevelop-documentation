# Bitmap Text Reference

Displays a text using a "Bitmap Font" (an image representing characters). This is more performant than a traditional Text object and it allows for complete control on the characters aesthetic. [Read more explanations about it.](/gdevelop5/objects/bitmap_text)



## Bitmap Text 

Displays a text using a "Bitmap Font" (an image representing characters). This is more performant than a traditional Text object and it allows for complete control on the characters aesthetic. 

### Object actions

**Wrapping width**
Change the width, in pixels, after which the text is wrapped on next line.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Bitmap text
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

**Alignment**
Change the alignment of a Bitmap text object.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Bitmap text
    - Parameter 1 (🔤 String): Alignment (one of: "left", "center", "right")

**Bitmap files resources**
Change the Bitmap Font and/or the atlas image used by the object.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Bitmap text
    - Parameter 1 (bitmapFontResource): Bitmap font resource name
    - Parameter 2 (imageResource): Texture atlas resource name

**Tint**
Set the tint of the Bitmap Text object.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Bitmap text
    - Parameter 1: color

**Word wrapping**
De/activate word wrapping.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Bitmap text
    - Parameter 1 (❓ Yes or No): Activate word wrapping

### Object conditions

**Alignment**
Compare the text alignment.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Bitmap text
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (string): Alignment ("left", "right" or "center")

**Font name**
Compare the font name (defined in the Bitmap font).

??? quote "See parameters"

    - Parameter 0 (👾 Object): Bitmap text
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (string): Value to compare

**Font size**
Compare the font size, defined in the Bitmap Font.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Bitmap text
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

**Wrapping width**
Compare the width, in pixels, after which the text is wrapped on next line.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Bitmap text
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

**Word wrapping**
Check if word wrapping is enabled.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Bitmap text

### Object expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.Alignment()` | Return the text alignment. ||
| `Object.FontName()` | Return the font name (defined in the Bitmap font). ||
| `Object.FontSize()` | Return the font size, defined in the Bitmap Font. ||
| `Object.Text()` | Return the text. ||
| `Object.WrappingWidth()` | Return the width, in pixels, after which the text is wrapped on next line. ||



---

The Bitmap Text extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **Bitmap Text** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).