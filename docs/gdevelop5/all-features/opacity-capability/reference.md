# Objects with opacity Reference

Action/condition/expression to change or check the opacity of an object (0-255). [Read more explanations about it.](/gdevelop5/objects)



## Objects with opacity 

Action/condition/expression to change or check the opacity of an object (0-255). 

### Behavior actions

**Opacity**  
Change the opacity of an object, between 0 (fully transparent) to 255 (opaque).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Opacity (0-255)

    > Technical note: this action internal type (in GDevelop JSON) is `OpacityCapability::OpacityBehavior::SetValue`.


### Behavior conditions

**Opacity**  
Compare the opacity of an object, between 0 (fully transparent) to 255 (opaque).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Opacity (0-255)

    > Technical note: this condition internal type (in GDevelop JSON) is `OpacityCapability::OpacityBehavior::Value`.


### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.Opacity::Value()` | Return the opacity of an object, between 0 (fully transparent) to 255 (opaque). ||



---

The Objects with opacity extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **Objects with opacity** feature of [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).