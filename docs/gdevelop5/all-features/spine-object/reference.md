# Spine (experimental) Reference

Displays a Spine animation. [Read more explanations about it.](/gdevelop5/objects/spine)



## Spine (experimental) 

Display and smoothly animate a 2D object with skeletal animations made with Spine. Use files exported from Spine (json, atlas and image). 

### Object properties

- **Scale** (🔢 Number). Default value is `1`.
- **Spine json** (🗂️ Resource).

??? quote "See internal technical details"


    - **Scale** is stored as `scale` (number). Default value is `1`.
    - **Spine json** is stored as `spineResourceName` (resource). Default value is ``.

### Object actions

**Set skin**  
Set the skin of a Spine object.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Spine
    - Parameter 1 (objectSkinName): Skin name

    > Technical note: this action internal type (in GDevelop JSON) is `SpineObject::SetSkin`.

**Animation mixing duration**  
Change the duration of the smooth transition between 2 animations (in second).

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Spine
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `SpineObject::SpineObject::SetAnimation`.


### Object conditions

**Animation mixing duration**  
Compare the duration of the smooth transition between 2 animations (in second).

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Spine
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `SpineObject::SpineObject::Animation`.

**Point attachment local rotation**  
Compare local rotation of spine point attachment.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Spine
    - Parameter 1 (🔤 String): Attachment name
    - Parameter 2 (🔤 String): Slot name (use "" if names are the same)
    - Parameter 3: 🟰 Relational operator
    - Parameter 4 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `SpineObject::SpineObject::PointAttachmentRotationLocal`.

**Point attachment world rotation**  
Compare world rotation of spine point attachment.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Spine
    - Parameter 1 (🔤 String): Attachment name
    - Parameter 2 (🔤 String): Slot name (use "" if names are the same)
    - Parameter 3: 🟰 Relational operator
    - Parameter 4 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `SpineObject::SpineObject::PointAttachmentRotationWorld`.

**Point attachment scale local X position**  
Compare local x position of spine point attachment scale.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Spine
    - Parameter 1 (🔤 String): Attachment name
    - Parameter 2 (🔤 String): Slot name (use "" if names are the same)
    - Parameter 3: 🟰 Relational operator
    - Parameter 4 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `SpineObject::SpineObject::PointAttachmentScaleXLocal`.

**Point attachment scale world X position**  
Compare world x position of spine point attachment scale.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Spine
    - Parameter 1 (🔤 String): Attachment name
    - Parameter 2 (🔤 String): Slot name (use "" if names are the same)
    - Parameter 3: 🟰 Relational operator
    - Parameter 4 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `SpineObject::SpineObject::PointAttachmentScaleXWorld`.

**Point attachment scale local Y position**  
Compare local y position of spine point attachment scale.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Spine
    - Parameter 1 (🔤 String): Attachment name
    - Parameter 2 (🔤 String): Slot name (use "" if names are the same)
    - Parameter 3: 🟰 Relational operator
    - Parameter 4 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `SpineObject::SpineObject::PointAttachmentScaleYLocal`.

**Point attachment scale world Y position**  
Compare world y position of spine point attachment scale.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Spine
    - Parameter 1 (🔤 String): Attachment name
    - Parameter 2 (🔤 String): Slot name (use "" if names are the same)
    - Parameter 3: 🟰 Relational operator
    - Parameter 4 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `SpineObject::SpineObject::PointAttachmentScaleYWorld`.

**Point attachment X position**  
Compare x position of spine point attachment.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Spine
    - Parameter 1 (🔤 String): Attachment name
    - Parameter 2 (🔤 String): Slot name (use "" if names are the same)
    - Parameter 3: 🟰 Relational operator
    - Parameter 4 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `SpineObject::SpineObject::PointAttachmentX`.

**Point attachment Y position**  
Compare y position of spine point attachment.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Spine
    - Parameter 1 (🔤 String): Attachment name
    - Parameter 2 (🔤 String): Slot name (use "" if names are the same)
    - Parameter 3: 🟰 Relational operator
    - Parameter 4 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `SpineObject::SpineObject::PointAttachmentY`.

**Get skin name**  
Compare the skin of the object.

??? quote "See parameters & details"

    - Parameter 0 (👾 Object): Spine
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔤 String): Skin name

    > Technical note: this condition internal type (in GDevelop JSON) is `SpineObject::SpineObject::getSkin`.


### Object expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.Animation()` | Return the duration of the smooth transition between 2 animations (in second). ||
| `Object.PointAttachmentRotationLocal(string, string)` | Return local rotation of spine point attachment. ||
| | _🔤 String_ | Attachment name |
| | _🔤 String_ | Slot name (use "" if names are the same) |
| `Object.PointAttachmentRotationWorld(string, string)` | Return world rotation of spine point attachment. ||
| | _🔤 String_ | Attachment name |
| | _🔤 String_ | Slot name (use "" if names are the same) |
| `Object.PointAttachmentScaleXLocal(string, string)` | Return local x position of spine point attachment scale. ||
| | _🔤 String_ | Attachment name |
| | _🔤 String_ | Slot name (use "" if names are the same) |
| `Object.PointAttachmentScaleXWorld(string, string)` | Return world x position of spine point attachment scale. ||
| | _🔤 String_ | Attachment name |
| | _🔤 String_ | Slot name (use "" if names are the same) |
| `Object.PointAttachmentScaleYLocal(string, string)` | Return local y position of spine point attachment scale. ||
| | _🔤 String_ | Attachment name |
| | _🔤 String_ | Slot name (use "" if names are the same) |
| `Object.PointAttachmentScaleYWorld(string, string)` | Return world y position of spine point attachment scale. ||
| | _🔤 String_ | Attachment name |
| | _🔤 String_ | Slot name (use "" if names are the same) |
| `Object.PointAttachmentX(string, string)` | Return x position of spine point attachment. ||
| | _🔤 String_ | Attachment name |
| | _🔤 String_ | Slot name (use "" if names are the same) |
| `Object.PointAttachmentY(string, string)` | Return y position of spine point attachment. ||
| | _🔤 String_ | Attachment name |
| | _🔤 String_ | Slot name (use "" if names are the same) |
| `Object.getSkin()` | Return the skin of the object. ||



---

The Spine (experimental) extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **Spine (experimental)** feature of [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).