# Resizable objects Reference

Change or compare the size (width/height) of an object which can be resized (i.e: most objects). [Read more explanations about it.](/gdevelop5/objects)



## Resizable objects 

Change or compare the size (width/height) of an object which can be resized (i.e: most objects). 

### Behavior actions

**Height**  
Change the height of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Height

    > Technical note: this action internal type (in GDevelop JSON) is `ResizableCapability::ResizableBehavior::SetHeight`.

**Size**  
Change the size of an object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Width
    - Parameter 3 (🔢 Number): Height

    > Technical note: this action internal type (in GDevelop JSON) is `ResizableCapability::ResizableBehavior::SetSize`.

**Width**  
Change the width of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Width

    > Technical note: this action internal type (in GDevelop JSON) is `ResizableCapability::ResizableBehavior::SetWidth`.

### Behavior conditions

**Height**  
Compare the height of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Height

    > Technical note: this condition internal type (in GDevelop JSON) is `ResizableCapability::ResizableBehavior::Height`.

**Width**  
Compare the width of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Width

    > Technical note: this condition internal type (in GDevelop JSON) is `ResizableCapability::ResizableBehavior::Width`.

_No expressions for this behavior._




---

The Resizable objects extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **Resizable objects** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).