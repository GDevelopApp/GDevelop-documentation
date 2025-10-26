# Extra inventory functions (deprecated)

<img src="https://resources.gdevelop-app.com/assets/Icons/Line Hero Pack/Master/SVG/Education and Learning/Education and Learning_education_school_bag_backpack.svg" class="extension-icon"></img>
Adds functions that let you add/remove multiple items from an inventory, as well as a function to set the count of an item.

**Authors and contributors** to this experimental extension: [heyitsdwubbs](https://gd.games/heyitsdwubbs).

!!! warning
    This is an extension made by a community member and it only got through a
    light review by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of fully reviewed extensions.

---

Adds functions that let you add or remove multiple items from an inventory, as well as a function to set the count of an item in an inventory.

This function makes use of GDevelop's built-in inventory system.

This extension is deprecated. The [simple inventory extension](https://wiki.gdevelop.io/gdevelop5/extensions/inventories) should be used instead.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Add multiple items**  
Adds multiple items to an inventory.

??? quote "See parameters & details"

    - Parameter 1 (string): Inventory name
    - Parameter 2 (string): Item name
    - Parameter 3 (🔢 Number): How many objects to add?

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ExtraInventory::InventoryAdd`.

**Remove multiple items**  
Removes multiple items from an inventory.

??? quote "See parameters & details"

    - Parameter 1 (string): Inventory name
    - Parameter 2 (string): Item name
    - Parameter 3 (🔢 Number): How many objects to remove?

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ExtraInventory::InventoryRemove`.

**Set the number of items**  
Sets the number of items in an inventory.

??? quote "See parameters & details"

    - Parameter 1 (string): Inventory name
    - Parameter 2 (string): Item name
    - Parameter 3 (🔢 Number): New amount of items

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ExtraInventory::InventorySet`.




---

*This page is an auto-generated reference page about the **Extra inventory functions (deprecated)** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).