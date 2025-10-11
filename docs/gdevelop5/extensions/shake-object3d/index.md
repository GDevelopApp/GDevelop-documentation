# 3D object shake

<img src="https://resources.gdevelop-app.com/assets/Icons/vector-difference-ab.svg" class="extension-icon"></img>
Shake 3D objects.

**Authors and contributors** to this experimental extension: [D8H](https://gd.games/D8H).

---

Shake 3D objects with translation and rotation.

The 3D racing game example uses this extension ([open the project online](https://editor.gdevelop.io/?project=example://3d-racing-game)).

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## 3D shake 

Shake 3D objects with translation and rotation. 

### Behavior actions

**Shaking frequency**
Change the shaking frequency of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Shake**
Shake the object with a linear easing at the start and the end.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Duration (in seconds)
    - Parameter 3 (🔢 Number): Ease duration to start (in seconds)
    - Parameter 4 (🔢 Number): Ease duration to stop (in seconds)

    > Technical note: parameter 5 are internal parameters handled by GDevelop.

**Start shaking**
Shake the object with a linear easing at the start and keep shaking until the stop action is used.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Ease duration (in seconds)

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Stop shaking**
Stop shaking the object with a linear easing.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Ease duration (in seconds)

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

### Behavior conditions

**Shaking frequency**
Compare the shaking frequency of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Is shaking**
Check if the object is shaking.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

**Is stopping to shake**
Check if the object is stopping to shake.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.ShakeModel3D::Frequency()` | Return the shaking frequency of the object. ||


---

*This page is an auto-generated reference page about the **3D object shake** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).