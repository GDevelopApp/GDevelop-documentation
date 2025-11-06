# Slot system

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/Glyphster Pack/Master/SVG/Construction/2bfb89e12371e03689db35c1a1be7cbbba1643b08acf79042c17be9262fb6512_Construction_wall_bricks.svg" class="extension-icon"></img>
Manage any kind of slots for your inventories, board games and tiled environments.

**Authors and contributors** to this experimental extension: [infokubarcade](https://gd.games/infokubarcade), [WickedSidereal](https://gd.games/WickedSidereal).

!!! warning
    This is an extension made by a community member and it only got through a
    light review by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of fully reviewed extensions.

---

Store content in any kind of slots.

## Usages

- Add, count and remove items from slots
- Check how many slots are filled or empty
- Set a maximum or unlimited amount of items for every slot
- Add and remove properties of a slot (weapon category, item class, object weight...)
- Move a slot content to an other position
- Sum a property (good for weight system)
- Sort items using a property value (ascending alphabetical only)
- Flood system : add items automatically and when they reach the maximum of the slot, they go in the next empty slot
- Export/Import spaces as JSON

## Systems

- 3 systems available (Basic, Named slots and Grid)
### Basic
Use numbers as slot identifiers to retrieve your informations
### Named slots
Use texts as slot identifiers. Very useful when you want to put an item on a specific part of your character.
### Grid
Use a 2D grid position to retrieve your informations. It uses the basic slot system in a more handy way.


!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Add item automatically**  
Add automatically an item to its slot, or the next empty slot if necessary.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Space name
    - Parameter 2 (🔤 Name (String)): Item
    - Parameter 3 (🔢 Number): Quantity
    - Parameter 4 (🔢 Number): Maximum quantity
      Set 0 for unlimited slot.
    - Parameter 5 (❓ Yes or No): Can flood on other empty slots

    > Technical note: parameters 0, 6 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SlotSystem::AddItemAuto`.

**Add named slot**  
Add a special slot with a name to the space.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Space name
    - Parameter 2 (🔤 Name (String)): Slot name

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SlotSystem::AddNamedSlot`.

**Import JSON string**  
Import a JSON string and convert it in a slot system.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Space name
    - Parameter 2 (string): JSON string

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SlotSystem::CopyFromJSON`.

**Delete the grid slot**  
Delete a grid slot from a space.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Space name
    - Parameter 2 (🔢 Number): Column index
    - Parameter 3 (🔢 Number): Row index

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SlotSystem::DeleteGridSlot`.

**Delete the named slot**  
Delete a slot from a space.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Space name
    - Parameter 2 (🔤 Name (String)): Slot name

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SlotSystem::DeleteNamedSlot`.

**Delete the slot**  
Delete a slot from a space.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Space name
    - Parameter 2 (🔢 Number): Slot

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SlotSystem::DeleteSlot`.

**Move item on the grid**  
Move an item from a position to an other on the grid.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Space name
    - Parameter 2 (🔢 Number): From column index
    - Parameter 3 (🔢 Number): From row index
    - Parameter 4 (🔢 Number): To column index
      If this slot already contains an item, it will be erased.
    - Parameter 5 (🔢 Number): To row index
    - Parameter 6 (❓ Yes or No): Exchange if the target already contains an item

    > Technical note: parameters 0, 7 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SlotSystem::MoveGridSlotToGridSlot`.

**Move item from named slot to named slot**  
Move an item from a named slot to an other.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): From space name
    - Parameter 2 (🔤 Name (String)): From slot name
    - Parameter 3 (🔤 Name (String)): To space name
    - Parameter 4 (🔤 Name (String)): To slot name
      If this slot already contains an item, it will be erased.
    - Parameter 5 (❓ Yes or No): Exchange if the target already contains an item

    > Technical note: parameters 0, 6 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SlotSystem::MoveNamedSlotToNamedSlot`.

**Move item from named slot to slot**  
Move an item from a slot to an other.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): From space name
    - Parameter 2 (🔤 Name (String)): From slot name
    - Parameter 3 (🔤 Name (String)): To space name
    - Parameter 4 (🔢 Number): To slot
      If this slot already contains an item, it will be erased.
    - Parameter 5 (❓ Yes or No): Exchange if the target already contains an item

    > Technical note: parameters 0, 6 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SlotSystem::MoveNamedSlotToSlot`.

**Move item from slot to named slot**  
Move an item from a slot to an other.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): From space name
    - Parameter 2 (🔢 Number): From slot
    - Parameter 3 (🔤 Name (String)): To space name
    - Parameter 4 (🔤 Name (String)): To slot name
      If this slot already contains an item, it will be erased.
    - Parameter 5 (❓ Yes or No): Exchange if the target already contains an item

    > Technical note: parameters 0, 6 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SlotSystem::MoveSlotToNamedSlot`.

**Move item from slot to slot**  
Move an item from a slot to an other.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): From space name
    - Parameter 2 (🔢 Number): From slot
    - Parameter 3 (🔤 Name (String)): To space name
    - Parameter 4 (🔢 Number): To slot
      If this slot already contains an item, it will be erased.
    - Parameter 5 (❓ Yes or No): Exchange if the target already contains an item

    > Technical note: parameters 0, 6 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SlotSystem::MoveSlotToSlot`.

**Delete grid slot property**  
Delete a property content from a grid slot.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Space name
    - Parameter 2 (🔢 Number): Column index
    - Parameter 3 (🔢 Number): Row index
    - Parameter 4 (🔤 Name (String)): Property name

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SlotSystem::RemoveGridSlotProperty`.

**Delete named slot property**  
Delete a property content from a named slot.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Space name
    - Parameter 2 (🔤 Name (String)): Slot name
    - Parameter 3 (🔤 Name (String)): Property name

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SlotSystem::RemoveNamedSlotProperty`.

**Delete slot property**  
Delete a property content from a slot.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Space name
    - Parameter 2 (🔢 Number): Slot
    - Parameter 3 (🔤 Name (String)): Property name

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SlotSystem::RemoveSlotProperty`.

**Grid slot count**  
Change the grid slot count of a space.

??? quote "See parameters & details"

    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value
    - Parameter 3 (🔤 Name (String)): Space name
    - Parameter 4 (🔢 Number): Column index
    - Parameter 5 (🔢 Number): Row index

    > Technical note: parameters 0, 6 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SlotSystem::SetGridSlotCount`.

**Empty the grid slot**  
Empty the grid slot of the space only. It still exists in the space.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Space name
    - Parameter 2 (🔢 Number): Column index
    - Parameter 3 (🔢 Number): Row index

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SlotSystem::SetGridSlotEmpty`.

**Set an item in a grid slot**  
Set an item in a grid slot of a space.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Space name
    - Parameter 2 (🔢 Number): Column index
    - Parameter 3 (🔢 Number): Row index
    - Parameter 4 (🔤 Name (String)): Item name

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SlotSystem::SetGridSlotItem`.

**Grid slot max count**  
Change the grid slot max count, or 0 if unlimited.

??? quote "See parameters & details"

    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value
    - Parameter 3 (🔤 Name (String)): Space name
    - Parameter 4 (🔢 Number): Column index
    - Parameter 5 (🔢 Number): Row index

    > Technical note: parameters 0, 6 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SlotSystem::SetGridSlotMax`.

**Grid slot number property**  
Change the number property of a grid slot.

??? quote "See parameters & details"

    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value
    - Parameter 3 (🔤 Name (String)): Space name
    - Parameter 4 (🔢 Number): Column index
    - Parameter 5 (🔢 Number): Row index
    - Parameter 6 (🔤 Name (String)): Property name

    > Technical note: parameters 0, 7 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SlotSystem::SetGridSlotPropertyNumber`.

**Grid slot text property**  
Change the text property of a grid slot.

??? quote "See parameters & details"

    - Parameter 1: 🟰 Operator
    - Parameter 2 (string): Value
    - Parameter 3 (🔤 Name (String)): Space name
    - Parameter 4 (🔢 Number): Column index
    - Parameter 5 (🔢 Number): Row index
    - Parameter 6 (🔤 Name (String)): Property name

    > Technical note: parameters 0, 7 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SlotSystem::SetGridSlotPropertyText`.

**Set grid slot unlimited**  
Set the max count of a grid slot to be unlimited.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Space name
    - Parameter 2 (🔢 Number): Column index
    - Parameter 3 (🔢 Number): Row index

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SlotSystem::SetGridSlotUnlimited`.

**Named slot count**  
Change the named slot count of a space.

??? quote "See parameters & details"

    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value
    - Parameter 3 (🔤 Name (String)): Space name
    - Parameter 4 (🔤 Name (String)): Slot name

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SlotSystem::SetNamedSlotCount`.

**Empty the named slot**  
Empty the named slot of the space only. It still exists in the space.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Space name
    - Parameter 2 (🔤 Name (String)): Slot name

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SlotSystem::SetNamedSlotEmpty`.

**Set an item in a named slot**  
Set an item in a named slot of a space.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Space name
    - Parameter 2 (🔤 Name (String)): Slot name
    - Parameter 3 (🔤 Name (String)): Item name

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SlotSystem::SetNamedSlotItem`.

**Named slot max count**  
Change the named slot max count, or 0 if unlimited.

??? quote "See parameters & details"

    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value
    - Parameter 3 (🔤 Name (String)): Space name
    - Parameter 4 (🔤 Name (String)): Slot name

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SlotSystem::SetNamedSlotMax`.

**Named slot number property**  
Change the number property of a named slot.

??? quote "See parameters & details"

    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value
    - Parameter 3 (🔤 Name (String)): Space name
    - Parameter 4 (🔤 Name (String)): Slot name
    - Parameter 5 (🔤 Name (String)): Property name

    > Technical note: parameters 0, 6 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SlotSystem::SetNamedSlotPropertyNumber`.

**Named slot text property**  
Change the text property of a named slot.

??? quote "See parameters & details"

    - Parameter 1: 🟰 Operator
    - Parameter 2 (string): Value
    - Parameter 3 (🔤 Name (String)): Space name
    - Parameter 4 (🔤 Name (String)): Slot name
    - Parameter 5 (🔤 Name (String)): Property name

    > Technical note: parameters 0, 6 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SlotSystem::SetNamedSlotPropertyText`.

**Set named slot unlimited**  
Set the max count of a named slot to be unlimited.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Space name
    - Parameter 2 (🔤 Name (String)): Slot name

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SlotSystem::SetNamedSlotUnlimited`.

**Slot count**  
Change the slot count of a space.

??? quote "See parameters & details"

    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value
    - Parameter 3 (🔤 Name (String)): Space name
    - Parameter 4 (🔢 Number): Slot

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SlotSystem::SetSlotCount`.

**Empty the slot**  
Empty the slot of the space only. It still exists in the space.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Space name
    - Parameter 2 (🔢 Number): Slot

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SlotSystem::SetSlotEmpty`.

**Set an item in a slot**  
Set an item in a slot of a space.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Space name
    - Parameter 2 (🔢 Number): Slot
    - Parameter 3 (🔤 Name (String)): Item name

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SlotSystem::SetSlotItem`.

**Slot max count**  
Change the slot max count, or 0 if unlimited.

??? quote "See parameters & details"

    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value
    - Parameter 3 (🔤 Name (String)): Space name
    - Parameter 4 (🔢 Number): Slot

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SlotSystem::SetSlotMax`.

**Slot number property**  
Change the number property of a slot.

??? quote "See parameters & details"

    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value
    - Parameter 3 (🔤 Name (String)): Space name
    - Parameter 4 (🔢 Number): Slot
    - Parameter 5 (🔤 Name (String)): Property name

    > Technical note: parameters 0, 6 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SlotSystem::SetSlotPropertyNumber`.

**Slot text property**  
Change the text property of a slot.

??? quote "See parameters & details"

    - Parameter 1: 🟰 Operator
    - Parameter 2 (string): Value
    - Parameter 3 (🔤 Name (String)): Space name
    - Parameter 4 (🔢 Number): Slot
    - Parameter 5 (🔤 Name (String)): Property name

    > Technical note: parameters 0, 6 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SlotSystem::SetSlotPropertyText`.

**Set slot unlimited**  
Set the max count of a slot to be unlimited.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Space name
    - Parameter 2 (🔢 Number): Slot

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SlotSystem::SetSlotUnlimited`.

**Set grid size**  
Set the space size using grid dimension.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Space name
    - Parameter 2 (🔢 Number): Columns
    - Parameter 3 (🔢 Number): Rows

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SlotSystem::SetSpaceGridSize`.

**Set space size**  
Set the amount of slots in the space.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Space name
    - Parameter 2 (🔢 Number): Size

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SlotSystem::SetSpaceSize`.

**Sort items by property**  
Sort items and move them into a new slot order.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Space name
    - Parameter 2 (🔤 Name (String)): Property name
    - Parameter 3 (❓ True or False): From named slots

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SlotSystem::SortSlotsByProperty`.


## Conditions

**Convert grid position to slot index**  
Compare a slot index of a grid position.

??? quote "See parameters & details"

    - Parameter 1: relationaloperator
    - Parameter 2 (🔢 Number): Value to compare
    - Parameter 3 (🔤 Name (String)): Space name
    - Parameter 4 (🔢 Number): Column index
    - Parameter 5 (🔢 Number): Row index

    > Technical note: parameters 0, 6 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `SlotSystem::ConvertGridPositionToSlot`.

**Convert a slot to a grid column index**  
Compare the column index from a slot.

??? quote "See parameters & details"

    - Parameter 1: relationaloperator
    - Parameter 2 (🔢 Number): Value to compare
    - Parameter 3 (🔤 Name (String)): Space name
    - Parameter 4 (🔢 Number): Slot

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `SlotSystem::ConvertSlotToGridColumn`.

**Convert a slot to a grid row index**  
Compare the row index from a slot.

??? quote "See parameters & details"

    - Parameter 1: relationaloperator
    - Parameter 2 (🔢 Number): Value to compare
    - Parameter 3 (🔤 Name (String)): Space name
    - Parameter 4 (🔢 Number): Slot

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `SlotSystem::ConvertSlotToGridRow`.

**Named slot exists**  
Check if the named slot exists.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Space name
    - Parameter 2 (🔤 Name (String)): Slot name

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `SlotSystem::DoesNamedSlotExist`.

**The space exists**  
Check if the space exists.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Space name

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `SlotSystem::DoesSpaceExists`.

**Filled named slots**  
Compare the amount of filled named slots of a space.

??? quote "See parameters & details"

    - Parameter 1: relationaloperator
    - Parameter 2 (🔢 Number): Value to compare
    - Parameter 3 (🔤 Name (String)): Space name

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `SlotSystem::FilledNamedSlots`.

**Filled slots**  
Compare the amount of filled slots of a space.

??? quote "See parameters & details"

    - Parameter 1: relationaloperator
    - Parameter 2 (🔢 Number): Value to compare
    - Parameter 3 (🔤 Name (String)): Space name

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `SlotSystem::FilledSlots`.

**First empty slot**  
Compare First empty slot. Set to -1 if no slot is found.

??? quote "See parameters & details"

    - Parameter 1: relationaloperator
    - Parameter 2 (🔢 Number): Value to compare
    - Parameter 3 (🔤 Name (String)): Space name

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `SlotSystem::FirstEmptySlot`.

**First item slot**  
Compare First slot containing a specific item. Set to -1 if no slot is found.

??? quote "See parameters & details"

    - Parameter 1: relationaloperator
    - Parameter 2 (🔢 Number): Value to compare
    - Parameter 3 (🔤 Name (String)): Space name
    - Parameter 4 (🔤 Name (String)): Item

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `SlotSystem::FirstItemSlot`.

**First available slot**  
Compare First slot containing a specific item that is not full. Set to -1 if no slot is found.

??? quote "See parameters & details"

    - Parameter 1: relationaloperator
    - Parameter 2 (🔢 Number): Value to compare
    - Parameter 3 (🔤 Name (String)): Space name
    - Parameter 4 (🔤 Name (String)): Item

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `SlotSystem::FirstItemSlotAvailable`.

**Item at a grid position**  
Compare the item at grid postion.

??? quote "See parameters & details"

    - Parameter 1: relationaloperator
    - Parameter 2 (🔤 Name (String)): Value to compare
    - Parameter 3 (🔤 Name (String)): Space name
    - Parameter 4 (🔢 Number): Column index
    - Parameter 5 (🔢 Number): Row index

    > Technical note: parameters 0, 6 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `SlotSystem::GridItemName`.

**Grid slot count**  
Compare the grid slot count of a space.

??? quote "See parameters & details"

    - Parameter 1: relationaloperator
    - Parameter 2 (🔢 Number): Value to compare
    - Parameter 3 (🔤 Name (String)): Space name
    - Parameter 4 (🔢 Number): Column index
    - Parameter 5 (🔢 Number): Row index

    > Technical note: parameters 0, 6 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `SlotSystem::GridSlotCount`.

**Grid slot max count**  
Compare the grid slot max count, or 0 if unlimited.

??? quote "See parameters & details"

    - Parameter 1: relationaloperator
    - Parameter 2 (🔢 Number): Value to compare
    - Parameter 3 (🔤 Name (String)): Space name
    - Parameter 4 (🔢 Number): Column index
    - Parameter 5 (🔢 Number): Row index

    > Technical note: parameters 0, 6 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `SlotSystem::GridSlotMax`.

**The space has empty named slots**  
Check if the space contains empty named slots.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Space name

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `SlotSystem::HasEmptyNamedSlots`.

**The space has empty slots**  
Check if the space contains empty slots.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Space name

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `SlotSystem::HasEmptySlots`.

**Grid slot has property**  
Check if a property is set on a slot.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Space name
    - Parameter 2 (🔢 Number): Column index
    - Parameter 3 (🔢 Number): Row index
    - Parameter 4 (🔤 Name (String)): Property name

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `SlotSystem::HasGridSlotProperty`.

**Named slot has property**  
Check if a property is set on a named slot.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Space name
    - Parameter 2 (🔤 Name (String)): Slot name
    - Parameter 3 (🔤 Name (String)): Property name

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `SlotSystem::HasNamedSlotProperty`.

**Slot has property**  
Check if a property is set on a slot.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Space name
    - Parameter 2 (🔢 Number): Slot
    - Parameter 3 (🔤 Name (String)): Property name

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `SlotSystem::HasSlotProperty`.

**Grid slot contains an item**  
The grid slot contains one or more items.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Space name
    - Parameter 2 (🔢 Number): Column index
    - Parameter 3 (🔢 Number): Row index

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `SlotSystem::IsGridSlotFilled`.

**Grid slot is full**  
The grid slot is full.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Space name
    - Parameter 2 (🔢 Number): Column index
    - Parameter 3 (🔢 Number): Row index

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `SlotSystem::IsGridSlotFull`.

**Grid slot is unlimited**  
Check if the slot has an unlimited count.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Space name
    - Parameter 2 (🔢 Number): Column index
    - Parameter 3 (🔢 Number): Row index

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `SlotSystem::IsGridSlotUnlimited`.

**Named slot contains an item**  
The named slot contains one or more items.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Space name
    - Parameter 2 (🔤 Name (String)): Slot name

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `SlotSystem::IsNamedSlotFilled`.

**Named slot is full**  
The slot is full.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Space name
    - Parameter 2 (🔤 Name (String)): Slot name

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `SlotSystem::IsNamedSlotFull`.

**Named slot is unlimited**  
Check if the named slot has an unlimited count.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Space name
    - Parameter 2 (🔤 Name (String)): Slot name

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `SlotSystem::IsNamedSlotUnlimited`.

**Slot contains an item**  
The slot contains one or more items.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Space name
    - Parameter 2 (🔢 Number): Slot

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `SlotSystem::IsSlotFilled`.

**Slot is full**  
The slot is full.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Space name
    - Parameter 2 (🔢 Number): Slot

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `SlotSystem::IsSlotFull`.

**Slot position in grid**  
Check if the slot position is inside the grid boundaries.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Space name
    - Parameter 2 (🔢 Number): Column index
    - Parameter 3 (🔢 Number): Row index

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `SlotSystem::IsSlotPositionInGrid`.

**Slot is unlimited**  
Check if the slot has an unlimited count.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Space name
    - Parameter 2 (🔢 Number): Slot

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `SlotSystem::IsSlotUnlimited`.

**The grid exists**  
Check if the space has a grid.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Space name

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `SlotSystem::IsSpaceGrid`.

**Named slot count**  
Compare the named slot count of a space.

??? quote "See parameters & details"

    - Parameter 1: relationaloperator
    - Parameter 2 (🔢 Number): Value to compare
    - Parameter 3 (🔤 Name (String)): Space name
    - Parameter 4 (🔤 Name (String)): Slot name

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `SlotSystem::NamedSlotCount`.

**Named slot item name**  
Compare the item name of a slot.

??? quote "See parameters & details"

    - Parameter 1: relationaloperator
    - Parameter 2 (string): Value to compare
    - Parameter 3 (🔤 Name (String)): Space name
    - Parameter 4 (🔤 Name (String)): Slot name

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `SlotSystem::NamedSlotItemName`.

**Named slot max count**  
Compare the named slot max count, or 0 if unlimited.

??? quote "See parameters & details"

    - Parameter 1: relationaloperator
    - Parameter 2 (🔢 Number): Value to compare
    - Parameter 3 (🔤 Name (String)): Space name
    - Parameter 4 (🔤 Name (String)): Slot name

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `SlotSystem::NamedSlotMax`.

**Slot property count**  
Compare the property count of a space.

??? quote "See parameters & details"

    - Parameter 1: relationaloperator
    - Parameter 2 (🔢 Number): Value to compare
    - Parameter 3 (🔤 Name (String)): Space name
    - Parameter 4 (🔤 Name (String)): Property name

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `SlotSystem::NamedSlotPropertyCount`.

**Grid slot number property**  
Compare the number property of a grid slot.

??? quote "See parameters & details"

    - Parameter 1: relationaloperator
    - Parameter 2 (🔢 Number): Value to compare
    - Parameter 3 (🔤 Name (String)): Space name
    - Parameter 4 (🔢 Number): Column index
    - Parameter 5 (🔢 Number): Row index
    - Parameter 6 (🔤 Name (String)): Property name

    > Technical note: parameters 0, 7 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `SlotSystem::NumberOfGridSlotProperty`.

**Named slot number property**  
Compare the number property of a named slot.

??? quote "See parameters & details"

    - Parameter 1: relationaloperator
    - Parameter 2 (🔢 Number): Value to compare
    - Parameter 3 (🔤 Name (String)): Space name
    - Parameter 4 (🔤 Name (String)): Slot name
    - Parameter 5 (🔤 Name (String)): Property name

    > Technical note: parameters 0, 6 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `SlotSystem::NumberOfNamedSlotProperty`.

**Slot number property**  
Compare the number property of a slot.

??? quote "See parameters & details"

    - Parameter 1: relationaloperator
    - Parameter 2 (🔢 Number): Value to compare
    - Parameter 3 (🔤 Name (String)): Space name
    - Parameter 4 (🔢 Number): Slot
    - Parameter 5 (🔤 Name (String)): Property name

    > Technical note: parameters 0, 6 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `SlotSystem::NumberOfSlotProperty`.

**Remaining named slots**  
Compare the remaining named slots of a space.

??? quote "See parameters & details"

    - Parameter 1: relationaloperator
    - Parameter 2 (🔢 Number): Value to compare
    - Parameter 3 (🔤 Name (String)): Space name

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `SlotSystem::RemainingNamedSlots`.

**Remaining slots**  
Compare the remaining slots of a space.

??? quote "See parameters & details"

    - Parameter 1: relationaloperator
    - Parameter 2 (🔢 Number): Value to compare
    - Parameter 3 (🔤 Name (String)): Space name

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `SlotSystem::RemainingSlots`.

**Slot count**  
Compare the slot count of a space.

??? quote "See parameters & details"

    - Parameter 1: relationaloperator
    - Parameter 2 (🔢 Number): Value to compare
    - Parameter 3 (🔤 Name (String)): Space name
    - Parameter 4 (🔢 Number): Slot

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `SlotSystem::SlotCount`.

**Slot item name**  
Compare the item name of a slot.

??? quote "See parameters & details"

    - Parameter 1: relationaloperator
    - Parameter 2 (string): Value to compare
    - Parameter 3 (🔤 Name (String)): Space name
    - Parameter 4 (🔢 Number): Slot

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `SlotSystem::SlotItemName`.

**Slot max count**  
Compare the slot max count, or 0 if unlimited.

??? quote "See parameters & details"

    - Parameter 1: relationaloperator
    - Parameter 2 (🔢 Number): Value to compare
    - Parameter 3 (🔤 Name (String)): Space name
    - Parameter 4 (🔢 Number): Slot

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `SlotSystem::SlotMax`.

**Slot property count**  
Compare the property count of a space.

??? quote "See parameters & details"

    - Parameter 1: relationaloperator
    - Parameter 2 (🔢 Number): Value to compare
    - Parameter 3 (🔤 Name (String)): Space name
    - Parameter 4 (🔤 Name (String)): Property name

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `SlotSystem::SlotPropertyCount`.

**Space grid height**  
Compare the space grid height.

??? quote "See parameters & details"

    - Parameter 1: relationaloperator
    - Parameter 2 (🔢 Number): Value to compare
    - Parameter 3 (🔤 Name (String)): Space name

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `SlotSystem::SpaceGridHeight`.

**Space grid width**  
Compare the space grid width.

??? quote "See parameters & details"

    - Parameter 1: relationaloperator
    - Parameter 2 (🔢 Number): Value to compare
    - Parameter 3 (🔤 Name (String)): Space name

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `SlotSystem::SpaceGridWidth`.

**Space named slot size**  
Compare how many slots the space has.

??? quote "See parameters & details"

    - Parameter 1: relationaloperator
    - Parameter 2 (🔢 Number): Value to compare
    - Parameter 3 (🔤 Name (String)): Space name

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `SlotSystem::SpaceNamedSlotSize`.

**Space slot size**  
Compare how many slots the space has.

??? quote "See parameters & details"

    - Parameter 1: relationaloperator
    - Parameter 2 (🔢 Number): Value to compare
    - Parameter 3 (🔤 Name (String)): Space name

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `SlotSystem::SpaceSlotSize`.

**Sum of named slot properties**  
Compare Sum all the values of a slot property.

??? quote "See parameters & details"

    - Parameter 1: relationaloperator
    - Parameter 2 (🔢 Number): Value to compare
    - Parameter 3 (🔤 Name (String)): Space name
    - Parameter 4 (🔤 Name (String)): Property name

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `SlotSystem::SumNamedSlotProperty`.

**Sum of slot properties**  
Compare Sum all the values of a slot property.

??? quote "See parameters & details"

    - Parameter 1: relationaloperator
    - Parameter 2 (🔢 Number): Value to compare
    - Parameter 3 (🔤 Name (String)): Space name
    - Parameter 4 (🔤 Name (String)): Property name

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `SlotSystem::SumSlotProperty`.

**Grid slot text property**  
Compare the text property of a grid slot.

??? quote "See parameters & details"

    - Parameter 1: relationaloperator
    - Parameter 2 (string): Value to compare
    - Parameter 3 (🔤 Name (String)): Space name
    - Parameter 4 (🔢 Number): Column index
    - Parameter 5 (🔢 Number): Row index
    - Parameter 6 (🔤 Name (String)): Property name

    > Technical note: parameters 0, 7 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `SlotSystem::TextOfGridSlotProperty`.

**Named slot text property**  
Compare the text property of a named slot.

??? quote "See parameters & details"

    - Parameter 1: relationaloperator
    - Parameter 2 (string): Value to compare
    - Parameter 3 (🔤 Name (String)): Space name
    - Parameter 4 (🔤 Name (String)): Slot name
    - Parameter 5 (🔤 Name (String)): Property name

    > Technical note: parameters 0, 6 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `SlotSystem::TextOfNamedSlotProperty`.

**Slot text property**  
Compare the text property of a slot.

??? quote "See parameters & details"

    - Parameter 1: relationaloperator
    - Parameter 2 (string): Value to compare
    - Parameter 3 (🔤 Name (String)): Space name
    - Parameter 4 (🔢 Number): Slot
    - Parameter 5 (🔤 Name (String)): Property name

    > Technical note: parameters 0, 6 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `SlotSystem::TextOfSlotProperty`.


## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `SlotSystem::ConvertGridPositionToSlot(string, number, number)` | Return a slot index of a grid position. ||
| | _🔤 Name (String)_ | Space name |
| | _🔢 Number_ | Column index |
| | _🔢 Number_ | Row index |
| `SlotSystem::ConvertSlotToGridColumn(string, number)` | Return the column index from a slot. ||
| | _🔤 Name (String)_ | Space name |
| | _🔢 Number_ | Slot |
| `SlotSystem::ConvertSlotToGridRow(string, number)` | Return the row index from a slot. ||
| | _🔤 Name (String)_ | Space name |
| | _🔢 Number_ | Slot |
| `SlotSystem::FilledNamedSlots(string)` | Return the amount of filled named slots of a space. ||
| | _🔤 Name (String)_ | Space name |
| `SlotSystem::FilledSlots(string)` | Return the amount of filled slots of a space. ||
| | _🔤 Name (String)_ | Space name |
| `SlotSystem::FirstEmptySlot(string)` | Return First empty slot. Set to -1 if no slot is found. ||
| | _🔤 Name (String)_ | Space name |
| `SlotSystem::FirstItemSlot(string, string)` | Return First slot containing a specific item. Set to -1 if no slot is found. ||
| | _🔤 Name (String)_ | Space name |
| | _🔤 Name (String)_ | Item |
| `SlotSystem::FirstItemSlotAvailable(string, string)` | Return First slot containing a specific item that is not full. Set to -1 if no slot is found. ||
| | _🔤 Name (String)_ | Space name |
| | _🔤 Name (String)_ | Item |
| `SlotSystem::GridItemName(string, number, number)` | Return the item at grid postion. ||
| | _🔤 Name (String)_ | Space name |
| | _🔢 Number_ | Column index |
| | _🔢 Number_ | Row index |
| `SlotSystem::GridSlotCount(string, number, number)` | Return the grid slot count of a space. ||
| | _🔤 Name (String)_ | Space name |
| | _🔢 Number_ | Column index |
| | _🔢 Number_ | Row index |
| `SlotSystem::GridSlotMax(string, number, number)` | Return the grid slot max count, or 0 if unlimited. ||
| | _🔤 Name (String)_ | Space name |
| | _🔢 Number_ | Column index |
| | _🔢 Number_ | Row index |
| `SlotSystem::NamedSlotCount(string, string)` | Return the named slot count of a space. ||
| | _🔤 Name (String)_ | Space name |
| | _🔤 Name (String)_ | Slot name |
| `SlotSystem::NamedSlotItemName(string, string)` | Return the item name of a slot. ||
| | _🔤 Name (String)_ | Space name |
| | _🔤 Name (String)_ | Slot name |
| `SlotSystem::NamedSlotMax(string, string)` | Return the named slot max count, or 0 if unlimited. ||
| | _🔤 Name (String)_ | Space name |
| | _🔤 Name (String)_ | Slot name |
| `SlotSystem::NamedSlotPropertyCount(string, string)` | Return the property count of a space. ||
| | _🔤 Name (String)_ | Space name |
| | _🔤 Name (String)_ | Property name |
| `SlotSystem::NumberOfGridSlotProperty(string, number, number, string)` | Return the number property of a grid slot. ||
| | _🔤 Name (String)_ | Space name |
| | _🔢 Number_ | Column index |
| | _🔢 Number_ | Row index |
| | _🔤 Name (String)_ | Property name |
| `SlotSystem::NumberOfNamedSlotProperty(string, string, string)` | Return the number property of a named slot. ||
| | _🔤 Name (String)_ | Space name |
| | _🔤 Name (String)_ | Slot name |
| | _🔤 Name (String)_ | Property name |
| `SlotSystem::NumberOfSlotProperty(string, number, string)` | Return the number property of a slot. ||
| | _🔤 Name (String)_ | Space name |
| | _🔢 Number_ | Slot |
| | _🔤 Name (String)_ | Property name |
| `SlotSystem::RemainingNamedSlots(string)` | Return the remaining named slots of a space. ||
| | _🔤 Name (String)_ | Space name |
| `SlotSystem::RemainingSlots(string)` | Return the remaining slots of a space. ||
| | _🔤 Name (String)_ | Space name |
| `SlotSystem::SlotCount(string, number)` | Return the slot count of a space. ||
| | _🔤 Name (String)_ | Space name |
| | _🔢 Number_ | Slot |
| `SlotSystem::SlotItemName(string, number)` | Return the item name of a slot. ||
| | _🔤 Name (String)_ | Space name |
| | _🔢 Number_ | Slot |
| `SlotSystem::SlotMax(string, number)` | Return the slot max count, or 0 if unlimited. ||
| | _🔤 Name (String)_ | Space name |
| | _🔢 Number_ | Slot |
| `SlotSystem::SlotPropertyCount(string, string)` | Return the property count of a space. ||
| | _🔤 Name (String)_ | Space name |
| | _🔤 Name (String)_ | Property name |
| `SlotSystem::SpaceGridHeight(string)` | Return the space grid height. ||
| | _🔤 Name (String)_ | Space name |
| `SlotSystem::SpaceGridWidth(string)` | Return the space grid width. ||
| | _🔤 Name (String)_ | Space name |
| `SlotSystem::SpaceNamedSlotSize(string)` | Return how many slots the space has. ||
| | _🔤 Name (String)_ | Space name |
| `SlotSystem::SpaceSlotSize(string)` | Return how many slots the space has. ||
| | _🔤 Name (String)_ | Space name |
| `SlotSystem::SumNamedSlotProperty(string, string)` | Return Sum all the values of a slot property. ||
| | _🔤 Name (String)_ | Space name |
| | _🔤 Name (String)_ | Property name |
| `SlotSystem::SumSlotProperty(string, string)` | Return Sum all the values of a slot property. ||
| | _🔤 Name (String)_ | Space name |
| | _🔤 Name (String)_ | Property name |
| `SlotSystem::TextOfGridSlotProperty(string, number, number, string)` | Return the text property of a grid slot. ||
| | _🔤 Name (String)_ | Space name |
| | _🔢 Number_ | Column index |
| | _🔢 Number_ | Row index |
| | _🔤 Name (String)_ | Property name |
| `SlotSystem::TextOfNamedSlotProperty(string, string, string)` | Return the text property of a named slot. ||
| | _🔤 Name (String)_ | Space name |
| | _🔤 Name (String)_ | Slot name |
| | _🔤 Name (String)_ | Property name |
| `SlotSystem::TextOfSlotProperty(string, number, string)` | Return the text property of a slot. ||
| | _🔤 Name (String)_ | Space name |
| | _🔢 Number_ | Slot |
| | _🔤 Name (String)_ | Property name |
| `SlotSystem::ToJSON(string)` | Convert a complete space to JSON format. ||
| | _🔤 Name (String)_ | Space name |


---

*This page is an auto-generated reference page about the **Slot system** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).