# HasLanded

<img src="https://resources.gdevelop-app.com/assets/Icons/gnome.svg" class="extension-icon"></img>
Checks if the object has landed on a given floor.

**Authors and contributors** to this experimental extension: [shadow00dev](https://gd.games/shadow00dev).

!!! warning
    This is an extension made by a community member and it only got through a
    light review by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of fully reviewed extensions.

---

Checks if the object has landed on a floor with the given settings.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Conditions

**HasLanded**  
Checks if the object has landed on floor.

??? quote "See parameters & details"

    - Parameter 1: 👾 Object
    - Parameter 2: 🧩 Behavior
    - Parameter 3 (🔤 String): Type (one of: "Must have jump", "Cant have jump", "Any")
    - Parameter 4 (🔢 Number): Fall distance
      Based of orgin point Y axie and The number will mean the lowest ammount until true so anything thats the number or higher will be true
    - Parameter 5 (🔢 Number): Fall speed
      The number will mean the lowest ammount until true so anything thats the number or higher will be true

    > Technical note: parameters 0, 6 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `HasLanded::Landed`.

**HasLandedOnGivenFloor**  
Checks if the object has landed on a given floor.

??? quote "See parameters & details"

    - Parameter 1: 👾 Object
    - Parameter 2: 🧩 Behavior
    - Parameter 3 (🔤 String): Type (one of: "Must have jump", "Cant have jump", "Any")
    - Parameter 4 (🔢 Number): Fall distance
      Based of orgin point Y axie and The number will mean the lowest ammount until true so anything thats the number or higher will be true
    - Parameter 5 (🔢 Number): Fall speed
      The number will mean the lowest ammount until true so anything thats the number or higher will be true
    - Parameter 6 (👾 Object): Given Floor

    > Technical note: parameters 0, 7 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `HasLanded::LandedOnGivenFloor`.





---

*This page is an auto-generated reference page about the **HasLanded** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).