# Simple inventories

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/Glyphster Pack/Master/SVG/Education and Learning/032fea6b6614c8b1c923bc3336520e8c24a418d18c16dae507ef2e885e01f8c9_Education and Learning_education_school_bag_backpack.svg" class="extension-icon"></img>
Manage inventory items.

**Authors and contributors** to this experimental extension: [4ian](https://gd.games/4ian), [infokubarcade](https://gd.games/infokubarcade), [heyitsdwubbs](https://gd.games/heyitsdwubbs), [D8H](https://gd.games/D8H).

---

Manage inventory items with limited or unlimited item capacity.

[Read more...](/gdevelop5/all-features/inventory)

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Add an item**  
Add an item in an inventory.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Inventory name
    - Parameter 2 (🔤 Name (String)): Item name

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Inventories::AddItem`.

**Save an inventory in a scene variable**  
Save all the items of the inventory in a scene variable, so that it can be restored later.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Inventory name
    - Parameter 2 (🗄️ Scene variable): Scene variable

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Inventories::CopyInventoryToVariable`.

**Load an inventory from a scene variable**  
Load the content of the inventory from a scene variable.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Inventory name
    - Parameter 2 (🗄️ Scene variable): Scene variable

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Inventories::CopyToVariableToInventory`.

**Remove an item**  
Remove an item from an inventory.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Inventory name
    - Parameter 2 (🔤 Name (String)): Item name

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Inventories::RemoveItem`.

**Equip an item**  
Mark an item as being equipped. If the item count is 0, it won't be marked as equipped.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Inventory name
    - Parameter 2 (🔤 Name (String)): Item name
    - Parameter 3 (❓ Yes or No): Equip

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Inventories::SetIsItemEquipped`.

**Limit item capacity**  
Allow a limited amount of an object to be in an inventory. Item capacity is unlimited by default.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Inventory name
    - Parameter 2 (🔤 Name (String)): Item name
    - Parameter 3 (❓ Yes or No): Limit the item capacity

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Inventories::SetIsLimitedItemCapacity`.

**Item capacity**  
Change the maximum number of the specified item that can be added in the inventory. By default, the number allowed for each item is unlimited.

??? quote "See parameters & details"

    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value
    - Parameter 3 (🔤 Name (String)): Inventory name
    - Parameter 4 (🔤 Name (String)): Item name

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Inventories::SetItemCapacity`.

**Item count**  
Change the number of an item in an inventory.

??? quote "See parameters & details"

    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value
    - Parameter 3 (🔤 Name (String)): Inventory name
    - Parameter 4 (🔤 Name (String)): Item name

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Inventories::SetItemCount`.


## Conditions

**Has an item**  
Check if at least one of the specified items is in the inventory.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Inventory name
    - Parameter 2 (🔤 Name (String)): Item name

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Inventories::HasItem`.

**Item full**  
Check if an item has reached its maximum number allowed in the inventory.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Inventory name
    - Parameter 2 (🔤 Name (String)): Item name

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Inventories::IsItemCapacityReached`.

**Item equipped**  
Check if an item is equipped.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Inventory name
    - Parameter 2 (🔤 Name (String)): Item name

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Inventories::IsItemEquipped`.

**Limited item capacity**  
Check if a limited amount of an object is allowed by the inventory. Item capacity is unlimited by default.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Inventory name
    - Parameter 2 (🔤 Name (String)): Item name

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Inventories::IsLimitedItemCapacity`.

**Item capacity**  
Compare the maximum number of the specified item that can be added in the inventory. By default, the number allowed for each item is unlimited.

??? quote "See parameters & details"

    - Parameter 1: relationaloperator
    - Parameter 2 (🔢 Number): Value to compare
    - Parameter 3 (🔤 Name (String)): Inventory name
    - Parameter 4 (🔤 Name (String)): Item name

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Inventories::ItemCapacity`.

**Item count**  
Compare the number of an item in an inventory.

??? quote "See parameters & details"

    - Parameter 1: relationaloperator
    - Parameter 2 (🔢 Number): Value to compare
    - Parameter 3 (🔤 Name (String)): Inventory name
    - Parameter 4 (🔤 Name (String)): Item name

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Inventories::ItemCount`.


## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `Inventories::ItemCapacity(string, string)` | Return the maximum number of the specified item that can be added in the inventory. By default, the number allowed for each item is unlimited. ||
| | _🔤 Name (String)_ | Inventory name |
| | _🔤 Name (String)_ | Item name |
| `Inventories::ItemCount(string, string)` | Return the number of an item in an inventory. ||
| | _🔤 Name (String)_ | Inventory name |
| | _🔤 Name (String)_ | Item name |


---

*This page is an auto-generated reference page about the **Simple inventories** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).