# Spine (experimental) Reference

Displays a Spine animation. [Read more explanations about it.](/gdevelop5/objects/spine)



## Spine (experimental) 

Display and smoothly animate a 2D object with skeletal animations made with Spine. Use files exported from Spine (json, atlas and image). 

### Object actions

**Animation mixing duration**
Change the duration of the smooth transition between 2 animations (in second).

??? quote "See parameters"

    - Parameter 0 (👾 Object): Spine
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

### Object conditions

**Animation mixing duration**
Compare the duration of the smooth transition between 2 animations (in second).

??? quote "See parameters"

    - Parameter 0 (👾 Object): Spine
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

**Point attachment X position**
Compare x position of spine point attachment.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Spine
    - Parameter 1 (string): Attachment name
    - Parameter 2 (string): Slot name (use "" if names are the same)
    - Parameter 3: 🟰 Relational operator
    - Parameter 4 (🔢 Number): Value to compare

**Point attachment Y position**
Compare y position of spine point attachment.

??? quote "See parameters"

    - Parameter 0 (👾 Object): Spine
    - Parameter 1 (string): Attachment name
    - Parameter 2 (string): Slot name (use "" if names are the same)
    - Parameter 3: 🟰 Relational operator
    - Parameter 4 (🔢 Number): Value to compare

### Object expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.Animation()` | Return the duration of the smooth transition between 2 animations (in second). ||
| `Object.PointAttachmentX(string, string)` | Return x position of spine point attachment. ||
| | _string_ | Attachment name |
| | _string_ | Slot name (use "" if names are the same) |
| `Object.PointAttachmentY(string, string)` | Return y position of spine point attachment. ||
| | _string_ | Attachment name |
| | _string_ | Slot name (use "" if names are the same) |



---

The Spine (experimental) extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **Spine (experimental)** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).