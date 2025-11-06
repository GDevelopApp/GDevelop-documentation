# Pushable/Pullable Box

<img src="https://resources.gdevelop-app.com/assets/Icons/Line Hero Pack/Master/SVG/Construction/Construction_barrel_oil_petroleum_tank.svg" class="extension-icon"></img>
Convert object to a pushable or/and pullable box.

**Authors and contributors** to this experimental extension: [VegeTato](https://gd.games/VegeTato).

!!! warning
    This is an extension made by a community member and it only got through a
    light review by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of fully reviewed extensions.

---

Make object pushable or/and pullable by another object.  


- Support **single** box object.
- Support **multi** box objects.
- User can set the weight of the box.
- Option (Yes/No) to make the boxes overlap.  

# Conditions

- Check if object is pushing.
- Check if object is pulling.  

# Actions

- Make objectA pushable by objectB.
- Make objectA Pullable by objectB.

# Example
![](https://i.imgur.com/C9HKvkz.png)

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Pullable Box**  
Make object pullable by platformer character object.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Player object
      This object will pull the box.
    - Parameter 2 (🧩 Behavior): Platformer character behavior
    - Parameter 3 (👾 Object): Box object
    - Parameter 4 (🧩 Behavior): Platformer character behavior
    - Parameter 5 (🧩 Behavior): Platform behavior
    - Parameter 6 (key): Pulling key
    - Parameter 7 (🔢 Number): Box weight
      The higher the value the lighter the box.
    - Parameter 8 (key): Player moving right key
    - Parameter 9 (key): Player moving left key
    - Parameter 10 (🔢 Number): Pulling distance
      The distance between player and box object must be below this number in order to pull the box.  
      Example: 10.
    - Parameter 11 (👾 Object): Second box object
      -Set it to the same first **box object** if you **only have 1 box object**.  
      -Set it to a **group of box objects** if you have **more than 1 box object**.

    > Technical note: parameters 0, 12 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PushableAndPullableBox::Pulling`.

**Pushable Box**  
Make object pushable by platformer character object.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Player object
      This object will push the box.
    - Parameter 2 (🧩 Behavior): Platformer character behavior
    - Parameter 3 (👾 Object): Box object
    - Parameter 4 (🧩 Behavior): Platformer character behavior
    - Parameter 5 (🧩 Behavior): Platform behavior
    - Parameter 6 (🔢 Number): Box weight
      The higher the value the lighter the box.
    - Parameter 7 (key): Player moving right key
    - Parameter 8 (key): Player moving left key
    - Parameter 9 (❓ Yes or No): Boxes can overlap when being pushed into each other horizontally
    - Parameter 10 (👾 Object): Floor object
      Select **any object** if you set the overlap to **Yes**.  
      Select your **floor object** if you set the overlap to **No**.
    - Parameter 11 (👾 Object): Second box object
      -Set it to the same first **box object** if you **only have 1 box object**.  
      -Set it to a **group of box objects** if you have **more than 1 box object**.
    - Parameter 12 (🧩 Behavior): Platformer character behavior
    - Parameter 13 (🧩 Behavior): Platform behavior

    > Technical note: parameters 0, 14 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PushableAndPullableBox::Pushing`.


## Conditions

**Objct is pulling**  
Check if the player object is pulling.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Player object

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PushableAndPullableBox::IsPulling`.

**Objct is pushing**  
Check if the player object is pushing.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Player object

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PushableAndPullableBox::IsPushing`.





---

*This page is an auto-generated reference page about the **Pushable/Pullable Box** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).