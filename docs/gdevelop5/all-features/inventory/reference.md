# Inventories Reference

Actions and conditions to store named inventories in memory, with items (indexed by their name), a count for each of them, a maximum count and an equipped state. Can be loaded/saved from/to a GDevelop variable. [Read more explanations about it.](/gdevelop5/all-features/inventory)

## Actions

**Add an item**  
Add an item in an inventory.

??? quote "See parameters & details"

    - Parameter 1 (🔤 String): Inventory name
    - Parameter 2 (🔤 String): Item name

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Inventory::Add`.

**Equip an item**  
Mark an item as being equipped. If the item count is 0, it won't be marked as equipped.

??? quote "See parameters & details"

    - Parameter 1 (🔤 String): Inventory name
    - Parameter 2 (🔤 String): Item name
    - Parameter 3 (❓ Yes or No): Equip?

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Inventory::Equip`.

**Remove an item**  
Remove an item from an inventory.

??? quote "See parameters & details"

    - Parameter 1 (🔤 String): Inventory name
    - Parameter 2 (🔤 String): Item name

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Inventory::Remove`.

**Save an inventory in a scene variable**  
Save all the items of the inventory in a scene variable, so that it can be restored later.

??? quote "See parameters & details"

    - Parameter 1 (🔤 String): Inventory name
    - Parameter 2 (🗄️ Scene variable): Scene variable

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Inventory::SerializeToVariable`.

**Set a maximum count for an item**  
Set the maximum number of the specified item that can be added in the inventory. By default, the number allowed for each item is unlimited.

??? quote "See parameters & details"

    - Parameter 1 (🔤 String): Inventory name
    - Parameter 2 (🔤 String): Item name
    - Parameter 3 (🔢 Number): Maximum count

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Inventory::SetMaximum`.

**Set unlimited count for an item**  
Allow an unlimited amount of an object to be in an inventory. This is the case by default for each item.

??? quote "See parameters & details"

    - Parameter 1 (🔤 String): Inventory name
    - Parameter 2 (🔤 String): Item name
    - Parameter 3 (❓ Yes or No): Allow an unlimited amount?

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Inventory::SetUnlimited`.

**Load an inventory from a scene variable**  
Load the content of the inventory from a scene variable.

??? quote "See parameters & details"

    - Parameter 1 (🔤 String): Inventory name
    - Parameter 2 (🗄️ Scene variable): Scene variable

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Inventory::UnserializeFromVariable`.


## Conditions

**Item count**  
Compare the number of an item in an inventory.

??? quote "See parameters & details"

    - Parameter 1 (🔤 String): Inventory name
    - Parameter 2 (🔤 String): Item name
    - Parameter 3: 🟰 Relational operator
    - Parameter 4 (🔢 Number): Value to compare

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Inventory::Count`.

**Has an item**  
Check if at least one of the specified items is in the inventory.

??? quote "See parameters & details"

    - Parameter 1 (🔤 String): Inventory name
    - Parameter 2 (🔤 String): Item name

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Inventory::Has`.

**Item equipped**  
Check if an item is equipped.

??? quote "See parameters & details"

    - Parameter 1 (🔤 String): Inventory name
    - Parameter 2 (🔤 String): Item name

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Inventory::IsEquipped`.

**Item full**  
Check if an item has reached its maximum number allowed in the inventory.

??? quote "See parameters & details"

    - Parameter 1 (🔤 String): Inventory name
    - Parameter 2 (🔤 String): Item name

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Inventory::IsFull`.


## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `Inventory::Count(string, string)` | Get the number of an item in the inventory ||
| | _🔤 String_ | Inventory name |
| | _🔤 String_ | Item name |
| `Inventory::Maximum(string, string)` | Get the maximum of an item in the inventory, or 0 if it is unlimited ||
| | _🔤 String_ | Inventory name |
| | _🔤 String_ | Item name |



---

The Inventories extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **Inventories** feature of [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).