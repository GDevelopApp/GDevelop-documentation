# Rolling counter

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/e509cccd7fb426978c4a79b639670f624f773a886848d288a12be5c28dd7d380_sort-numeric-variant.svg" class="extension-icon"></img>
Smoothly change a counter value in a text object.

**Authors and contributors** to this experimental extension: [Jurfix](https://gd.games/Jurfix).

---

Smoothly change a counter value in a text object.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Rolling counter 

Smoothly changes a counter value in a text object. 

### Behavior actions

**Jump to the counter animation end**
Directly display the counter value without playing the animation.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

**Counter value**
Change the value of the counter.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

### Behavior conditions

**Counter value**
Compare the value of the counter.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.RollingCounter::Value()` | Return the value of the counter. ||


---

*This page is an auto-generated reference page about the **Rolling counter** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).