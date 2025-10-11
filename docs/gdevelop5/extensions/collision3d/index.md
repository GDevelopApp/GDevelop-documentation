# 3D collision

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/7a5696a515bf40813692e118147568392a854f65f5b50750c9b9aaa967aba7df_vector-intersection.svg" class="extension-icon"></img>
Check collision and distance between 3D objects.

**Authors and contributors** to this experimental extension: [D8H](https://gd.games/D8H), [TulenvakiProductions](https://gd.games/TulenvakiProductions).

!!! warning
    This is an extension made by a community member and it only got through a
    light review by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of fully reviewed extensions.

---

Check collision and distance between 3D objects and separate them from each other.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Separate objects in 3D**  
Move an object away from another using their collision masks. Object rotation around X and Y axes are ignored.  
Be sure to call this action on a reasonable number of objects to avoid slowing down the game.

??? quote "See parameters"

    - Parameter 1: 👾 Object
    - Parameter 2 (🧩 Behavior): 3D capability
    - Parameter 3 (👾 Object): Objects (won't move)
    - Parameter 4 (🧩 Behavior): 3D capability

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

## Conditions

**Collision in 3D**  
Check the collision between two objects using their collision masks. Object rotation around X and Y axes are ignored.

??? quote "See parameters"

    - Parameter 1: 👾 Object
    - Parameter 2 (🧩 Behavior): 3D capability
    - Parameter 3 (👾 Object): Other object
    - Parameter 4 (🧩 Behavior): 3D capability
    - Parameter 5 (❓ Yes or No): Ignore objects that are touching each other on their edges, but are not overlapping (default: no)

    > Technical note: parameters 0, 6 are internal parameters handled by GDevelop.

**Distance between two objects in 3D**  
Compare the distance between two objects in 3D.

??? quote "See parameters"

    - Parameter 1: 👾 Object
    - Parameter 2 (👾 Object): Other object
    - Parameter 3 (🔢 Number): Distance
    - Parameter 4 (❓ Yes or No): Use custom center

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

**Pick nearest object in 3D**  
Pick the object of this type that is nearest to the specified position in 3D.

??? quote "See parameters"

    - Parameter 1: 👾 Object
    - Parameter 2 (🔢 Number): X position
    - Parameter 3 (🔢 Number): Y position
    - Parameter 4 (🔢 Number): Z position

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `Collision3D::Distance(object, object)` | Distance between two objects in 3D. ||
| | _👾 Object_ | Object |
| | _👾 Object_ | Other object |
| `Collision3D::DistanceToPosition(object, number, number, number)` | Distance between an object and a position in 3D. ||
| | _👾 Object_ | Object |
| | _🔢 Number_ | X position |
| | _🔢 Number_ | Y position |
| | _🔢 Number_ | Z position |
| `Collision3D::SqDistance(object, object)` | Square distance between two objects in 3D. ||
| | _👾 Object_ | Object |
| | _👾 Object_ | Other object |
| `Collision3D::SqDistanceToPosition(object, number, number, number)` | Square distance between an object and a position in 3D. ||
| | _👾 Object_ | Object |
| | _🔢 Number_ | X position |
| | _🔢 Number_ | Y position |
| | _🔢 Number_ | Z position |


---

*This page is an auto-generated reference page about the **3D collision** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).