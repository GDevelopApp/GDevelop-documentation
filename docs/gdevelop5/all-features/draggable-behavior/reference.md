# Draggable Behavior Reference

Allows objects to be moved using the mouse (or touch). Add the behavior to an object to make it draggable. Use events to enable or disable the behavior when needed. [Read more explanations about it.](/gdevelop5/behaviors/draggable)



## Draggable object 

Move objects by holding a mouse button (or touch). 

### Behavior properties

- **Precise check** (🔘 Boolean). Use the object (custom) collision mask instead of the bounding box, making the behavior more precise at the cost of reduced performance. Default value is `true`.

??? quote "See internal technical details"


    - **Precise check** is stored as `checkCollisionMask` (Boolean). Default value is `true`.

### Behavior conditions

**Being dragged**  
Check if the object is being dragged. This means the mouse button or touch is pressed on it. When the mouse button or touch is released,  the object is no longer being considered dragged (use the condition "Was just dropped" to check when the dragging is ending).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this condition internal type (in GDevelop JSON) is `DraggableBehavior::Dragged`.

**Was just dropped**  
Check if the object was just dropped after being dragged (the mouse button or touch was just released this frame).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: this condition internal type (in GDevelop JSON) is `DraggableBehavior::Dropped`.


_No expressions for this behavior._




---

The Draggable Behavior extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **Draggable Behavior** feature of [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).