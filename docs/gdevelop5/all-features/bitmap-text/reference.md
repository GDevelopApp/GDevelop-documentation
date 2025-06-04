# Bitmap Text Reference

Displays a text using a "Bitmap Font" (an image representing characters). This is more performant than a traditional Text object and it allows for complete control on the characters aesthetic. [Read more explanations about it.](/gdevelop5/objects/bitmap_text)



## Bitmap Text 

Displays a text using a "Bitmap Font" (an image representing characters). This is more performant than a traditional Text object and it allows for complete control on the characters aesthetic. 

### Object actions

**Wrapping width**  
Change the width, in pixels, after which the text is wrapped on next line.

**Alignment**  
Change the alignment of a Bitmap text object.

**Bitmap files resources**  
Change the Bitmap Font and/or the atlas image used by the object.

**Tint**  
Set the tint of the Bitmap Text object.

**Word wrapping**  
De/activate word wrapping.

### Object conditions

**Alignment**  
Compare the text alignment.

**Font name**  
Compare the font name (defined in the Bitmap font).

**Font size**  
Compare the font size, defined in the Bitmap Font.

**Wrapping width**  
Compare the width, in pixels, after which the text is wrapped on next line.

**Word wrapping**  
Check if word wrapping is enabled.

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