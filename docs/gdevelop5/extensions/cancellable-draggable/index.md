# Cancellable draggable object

<img src="https://resources.gdevelop-app.com/assets/Icons/step-backward.svg" class="extension-icon"></img>
Cancel drag and smoothly tween object back to original position.

**Authors and contributors** to this experimental extension: [D8H](https://gd.games/D8H).

---

Add this behavior on an object with the Draggable behavior and the Tween behavior. 
Use then the action to cancel the drag, and the behavior will smoothly animate the object back to its original position, using a tween animation.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Cancellable Draggable object 

Allow to cancel the drag of an object and make it smoothly return to its original position (with a tween). 

### Behavior actions

**Cancel drag**  
Cancel last drag.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Duration in seconds
    - Parameter 3 (🔤 String): Easing (one of: "linear", "easeInQuad", "easeOutQuad", "easeInOutQuad", "easeInCubic", "easeOutCubic", "easeInOutCubic", "easeInQuart", "easeOutQuart", "easeInOutQuart", "easeInQuint", "easeOutQuint", "easeInOutQuint", "easeInOutSine", "easeInExpo", "easeOutExpo", "easeInOutExpo", "easeInCirc", "easeOutCirc", "easeInOutCirc", "easeOutBounce", "easeInBack", "easeOutBack", "easeInOutBack", "elastic", "swingFromTo", "swingFrom", "swingTo", "bounce", "bouncePast", "easeFromTo", "easeFrom", "easeTo")

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `CancellableDraggable::CancellableDraggable::CancelLastDraggingS`.


### Behavior conditions

**Dragging is cancelled**  
Dragging is cancelled, the object is returning to its original position.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `CancellableDraggable::CancellableDraggable::DraggingIsCancelled`.


_No expressions for this behavior._



---

*This page is an auto-generated reference page about the **Cancellable draggable object** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).