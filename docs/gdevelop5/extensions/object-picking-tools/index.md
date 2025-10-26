# Object picking tools

<img src="https://resources.gdevelop-app.com/assets/Icons/selection-ellipse-arrow-inside.svg" class="extension-icon"></img>
Adds various object picking related tools.

**Authors and contributors** to this experimental extension: [arthuro555](https://gd.games/arthuro555), [VictrisGames](https://gd.games/VictrisGames).

---

Adds various actions and conditions for advanced object selection. Includes picking objects with the highest or lowest Z-order (for 2D objects), an object variable, and the ability to unpick all objects.

If multiple instances have the highest/lowest Z-order, all of these instances will be picked.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Pick objects with highest variable value**  
Pick object instances that have the highest value of an object variable.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Object to select instances from
    - Parameter 2 (string): Object variable name

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ObjectPickingTools::PickHighestVariableValueAction`.

**Pick objects with highest Z-order**  
Pick object instances that have the highest Z-order.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Object to select instances from

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ObjectPickingTools::PickHighestZAction`.

**Pick objects with lowest variable value**  
Pick object instances that have the lowest value of an object variable.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Object to select instances from
    - Parameter 2 (string): Object variable name

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ObjectPickingTools::PickLowestVariableValueAction`.

**Pick objects with lowest Z-order**  
Pick object instances that have the lowest Z-order.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Object to select instances from

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ObjectPickingTools::PickLowestZAction`.

**Unpick all instances**  
Unpicks all instances of an object.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): The object to unpick all instances from

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ObjectPickingTools::UnpickAction`.

## Conditions

**Pick objects with highest variable value**  
Pick object instances that have the highest value of an object variable.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Object to select instances from
    - Parameter 2 (string): Object variable name

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ObjectPickingTools::PickHighestVariableValueCondition`.

**Pick objects with highest Z-order**  
Pick object instances that have the highest Z-order.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Object to select instances from

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ObjectPickingTools::PickHighestZCondition`.

**Pick objects with lowest variable value**  
Pick object instances that have the lowest value of an object variable.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Object to select instances from
    - Parameter 2 (string): Object variable name

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ObjectPickingTools::PickLowestVariableValueCondition`.

**Pick objects with lowest Z-order**  
Pick object instances that have the lowest Z-order.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Object to select instances from

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ObjectPickingTools::PickLowestZCondition`.

**Unpick all instances**  
Unpicks all instances of an object.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): The object to unpick all instances from

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ObjectPickingTools::UnpickCondition`.




---

*This page is an auto-generated reference page about the **Object picking tools** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).