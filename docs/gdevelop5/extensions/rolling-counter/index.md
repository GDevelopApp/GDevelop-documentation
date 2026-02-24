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

### Behavior properties

- **Animation duration** (🔢 Number, Duration). Default value is `1`.
- **Increment** (🔢 Number, Dimensionless). Default value is `1`.
- **Prefix** (🔤 String). Default value is `Score: `.
- **Suffix** (🔤 String).

??? quote "See internal technical details"


    - **Animation duration** is stored as `Duration` (Number). Unit is Second. Default value is `1`.
    - **Increment** is stored as `Increment` (Number). Unit is Dimensionless. Default value is `1`.
    - **Prefix** is stored as `Prefix` (String). Default value is `Score: `.
    - **Suffix** is stored as `Suffix` (String). Default value is ``.
    > This behavior must be used on an object also having a behavior with type "TextContainerCapability::TextContainerBehavior". This is stored on property `Text`.


### Behavior actions

**Jump to the counter animation end**  
Directly display the counter value without playing the animation.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `RollingCounter::RollingCounter::ResetDisplayedValue`.

**Counter value**  
Change the value of the counter.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `RollingCounter::RollingCounter::SetValue`.


### Behavior conditions

**Counter value**  
Compare the value of the counter.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `RollingCounter::RollingCounter::Value`.


### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.RollingCounter::Value()` | Return the value of the counter. ||


---

*This page is an auto-generated reference page about the **Rolling counter** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).