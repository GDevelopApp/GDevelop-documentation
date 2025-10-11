# Star Rating Bar

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/745c5811a2856b9b828e959b496d50dd52e0b5879f372e411675f38a5708775d_star-half-full.svg" class="extension-icon"></img>
An animated bar to rate out of 5.

**Authors and contributors** to this experimental extension: [Bouh](https://gd.games/Bouh).

---

An animated bar to rate out of 5, or more by editing and adding more stars in the object.
The animation can be disabled.
The star icon and background are customizable.

There are ready-to-use bars in the asset-store [star rating bars pack](https://editor.gdevelop.io/?initial-dialog=asset-store&asset-pack=star-rating-bars-star-rating-bars).

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Star Rating Bar 

An animated score counter with an icon and a customisable font. 

### Object actions

**Disable the rating**  
Enable or disable the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1 (❓ Yes or No): Disable

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

**Rate**  
Change the rate of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

### Object conditions

**Disable the rating**  
Check if the object is disabled.

??? quote "See parameters"

    - Parameter 0: 👾 Object

    > Technical note: parameter 1 are internal parameters handled by GDevelop.

**Rate**  
Compare the rate of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

### Object expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.Rate()` | Return the rate of the object. ||


---

*This page is an auto-generated reference page about the **Star Rating Bar** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).