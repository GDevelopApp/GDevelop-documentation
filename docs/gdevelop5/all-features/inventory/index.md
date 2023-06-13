---
title: Inventory
---
# Inventory

"Inventories" are in memory structures that allow you to keep track of the objects/items collected by the player or any other inventory in a game. Inventory items are unlimited and identified by names that you choose.

Like variables, "Inventories" are identified by a name. "Inventory" names can be anything that you want. The initial inventory state defaults to empty. It contains no items.

Inventories and their content can be manipulated using conditions and actions.

## Adding, removing and manipulating items.

Inventories are composed of items. As mentioned above, the default "Inventory" does not have any items.

Use the action "Add an item" to add an item to the inventory. The name of the item can be chosen freely. For example, an item could be "Sword", "Gold", "Bullets", etc.
You can also use the action "Remove an item" to remove one item in an inventory.

You can set limits on the items of an inventory by using the action "Set a maximum count for an item". Enter the item name and the count. When an item has reached its maximum count, adding new items won't increase the count of the item in the inventory.

You can use the conditions "Item full" to check if an item reached the full capacity. The condition "Has an item" allows a check to be made of the inventory to see _if_ the player has at least one of the specified items.

## Setting an item as equipped

Items can be marked as "equipped" using the action "Equip an item". This action doesn't change anything in the game. However, you can use the condition "Item equipped" to check to see _if_ an item is equipped, then you can set your action accordingly.

For example, you can use the condition "Item equipped" to check to see if a "Magic Sword" in your game is equipped. If it is equipped,  you might add more damages to the enemies.

If an item reaches the count of 0 (i.e: the inventory is empty of items), it is not marked as equipped.

## How to display the items of an inventory in the game.

Different games can display inventories in different ways. Inventories can't be rendered directly on the screen, but you can use [Sprites](/gdevelop5/objects/sprite) and [Text objects](/gdevelop5/objects/text) to create your own display.

To use Sprites and Text objects to create a display:

- use the condition "Has an item" in order to check to see if an item is "owned"
- display or hide the associated object on the screen
- use the expression "Item count" (for example, `InventoryTools::Count("PlayerInventory", "Gold")` **or now** `Inventory::Count("PlayerInventory", "Gold")`) to access the count of a given item
- use the "Item count" to set the text of a "Text" object that is displayed on the screen

## Saving/loading inventories

Use [storage actions](/gdevelop5/all-features/storage) to save the progress of the player. You can also save the content of the inventory (or any other inventories that you use in the game).

The actions "Save an inventory in a variable" and "Load an inventory from a variable", allow you to dump the contents of an inventory into a variable. These actions will be set as a structured variable. The information will be contained as children. The actions can also be used to restore an inventory from a variable.

When your inventory is saved to a variable, you can then save this variable using the storage actions and actions related to JSON:

![](/gdevelop5/all-features/inventory-serialization.png)

## Reference

All actions, conditions and expressions are listed in [the inventory reference page](/gdevelop5/all-features/inventory/reference/).
