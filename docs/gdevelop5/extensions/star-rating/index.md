# Star Rating

<img src="https://resources.gdevelop-app.com/assets/Icons/Glyphster Pack/Master/SVG/UI Essentials/UI Essentials_star.svg" class="extension-icon"></img>
A rating system indicated by stars using the shape painter.

**Authors and contributors** to this experimental extension: [Entropy](https://gd.games/Entropy).

!!! warning
    This is an extension made by a community member and it only got through a
    light review by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of fully reviewed extensions.

---

A behavior to turn a shape painter into a rating system indicated by stars.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Star Rating 

A rating system indicated by stars using the shape painter. 

### Behavior properties

- **Empty Star Fill Color** (string). Default value is `155;155;155`.
- **Empty Star Outline Color** (string). Default value is `155;155;155`.
- **Star Fill Color** (string). Default value is `248;231;28`.
- **Star Outline Color** (string). Default value is `248;231;28`.
- **Number of Points on Star** (🔢 Number). Default value is `5`.
- **Star Rotation** (🔢 Number). Default value is `0`.
- **Size** (🔢 Number). Default value is `32`.
- **Spacing** (🔢 Number). Default value is `6`.
- **Stars** (🔢 Number). Default value is `3`.
- **Total Stars** (🔢 Number). Default value is `5`.

??? quote "See internal technical details"


    - **Empty Star Fill Color** is stored as `EmptyStarFillColor` (String). Default value is `155;155;155`.
    - **Empty Star Outline Color** is stored as `EmptyStarOutlineColor` (String). Default value is `155;155;155`.
    - **Star Fill Color** is stored as `StarFillColor` (String). Default value is `248;231;28`.
    - **Star Outline Color** is stored as `StarOutlineColor` (String). Default value is `248;231;28`.
    - **Number of Points on Star** is stored as `StarPoints` (Number). Default value is `5`.
    - **Star Rotation** is stored as `StarRotation` (Number). Default value is `0`.
    - **Size** is stored as `StarSize` (Number). Default value is `32`.
    - **Spacing** is stored as `StarSpacing` (Number). Default value is `6`.
    - **Stars** is stored as `StarsValue` (Number). Default value is `3`.
    - **Total Stars** is stored as `TotalStars` (Number). Default value is `5`.

### Behavior actions

**Set the rating**  
Sets the rating to a new value.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): New rating

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `StarRating::StarRating::SetRating`.

**Set total star count**  
Sets a new total stars count.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Total star count

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `StarRating::StarRating::SetTotalStarCount`.


### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.StarRating::Rating()` | Gets the current rating. ||
| `Object.StarRating::TotalStars()` | Get the total amount of stars. ||


---

*This page is an auto-generated reference page about the **Star Rating** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).