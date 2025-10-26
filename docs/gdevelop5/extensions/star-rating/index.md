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

*This page is an auto-generated reference page about the **Star Rating** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).