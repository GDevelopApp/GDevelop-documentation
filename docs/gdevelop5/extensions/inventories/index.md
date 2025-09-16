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

**Save an inventory in a scene variable**  
Save all the items of the inventory in a scene variable, so that it can be restored later.

**Load an inventory from a scene variable**  
Load the content of the inventory from a scene variable.

**Remove an item**  
Remove an item from an inventory.

**Equip an item**  
Mark an item as being equipped. If the item count is 0, it won't be marked as equipped.

**Limit item capacity**  
Allow a limited amount of an object to be in an inventory. Item capacity is unlimited by default.

**Item capacity**  
Change the maximum number of the specified item that can be added in the inventory. By default, the number allowed for each item is unlimited.

**Item count**  
Change the number of an item in an inventory.

## Conditions

**Has an item**  
Check if at least one of the specified items is in the inventory.

**Item full**  
Check if an item has reached its maximum number allowed in the inventory.

**Item equipped**  
Check if an item is equipped.

**Limited item capacity**  
Check if a limited amount of an object is allowed by the inventory. Item capacity is unlimited by default.

**Item capacity**  
Compare the maximum number of the specified item that can be added in the inventory. By default, the number allowed for each item is unlimited.

**Item count**  
Compare the number of an item in an inventory.

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

*This page is an auto-generated reference page about the **Simple inventories** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).