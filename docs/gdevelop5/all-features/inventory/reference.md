# Inventories Reference

Provides actions and conditions to add an inventory to your game, with items in memory. [Read more explanations about it.](/gdevelop5/all-features/inventory)

## Actions

**Add an item**  
Add an item in an inventory.

**Equip an item**  
Mark an item as being equipped. If the item count is 0, it won't be marked as equipped.

**Remove an item**  
Remove an item from an inventory.

**Save an inventory in a scene variable**  
Save all the items of the inventory in a scene variable, so that it can be restored later.

**Set a maximum count for an item**  
Set the maximum number of the specified item that can be added in the inventory. By default, the number allowed for each item is unlimited.

**Set unlimited count for an item**  
Allow an unlimited amount of an object to be in an inventory. This is the case by default for each item.

**Load an inventory from a scene variable**  
Load the content of the inventory from a scene variable.

## Conditions

**Item count**  
Compare the number of an item in an inventory.

**Has an item**  
Check if at least one of the specified items is in the inventory.

**Item equipped**  
Check if an item is equipped.

**Item full**  
Check if an item has reached its maximum number allowed in the inventory.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `Inventory::Count(string, string)` | Get the number of an item in the inventory ||
| | _string_ | Inventory name |
| | _string_ | Item name |
| `Inventory::Maximum(string, string)` | Get the maximum of an item in the inventory, or 0 if it is unlimited ||
| | _string_ | Inventory name |
| | _string_ | Item name |


---

The Inventories extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **Inventories** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).