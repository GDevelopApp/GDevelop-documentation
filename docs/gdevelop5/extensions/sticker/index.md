# Stick objects to others

<img src="https://resources.gdevelop-app.com/assets/Icons/sticker-outline.svg" class="extension-icon"></img>
Make objects follow the position and rotation of the object they are stuck to.

**Authors and contributors** to this experimental extension: [D8H](https://gd.games/D8H).

---

This extension can be useful to:

- Stick accessories to moving objects
- Animate a skeleton
- Delete an object with another one

An example allows to check it out ([open the project online](https://editor.gdevelop.io/?project=example://stick-objects)).

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Conditions

**Is stuck to another object**  
Check if the object is stuck to another object.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Sticker
    - Parameter 2 (🧩 Behavior): Sticker behavior
    - Parameter 3 (👾 Object): Basis

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Sticker::IsStuck`.



## Sticker 

Stick the object to another. Use the action to stick the object, or unstick it later. 

### Behavior actions

**Stick**  
Stick on another object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (👾 Object): Object to stick to

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Sticker::Sticker::Stick`.

**Unstick**  
Unstick from the object it was stuck to.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Sticker::Sticker::Unstick`.

_No expressions for this behavior._



---

*This page is an auto-generated reference page about the **Stick objects to others** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).