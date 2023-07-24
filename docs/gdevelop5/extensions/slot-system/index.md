# Slot system

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/Glyphster Pack/Master/SVG/Construction/2bfb89e12371e03689db35c1a1be7cbbba1643b08acf79042c17be9262fb6512_Construction_wall_bricks.svg" class="extension-icon"></img>
Manage any kind of slots for your inventories, board games and tiled environments.

**Authors and contributors** to this community extension: [infokubarcade](https://gd.games/infokubarcade), [WickedSidereal](https://gd.games/WickedSidereal).

!!! warning
    This is an extension made by a community member — but not reviewed
    by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of official extensions. In case of
    doubt, contact the author to know more about what the extension
    does or inspect its content before using it.

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

**Add named slot**  
Add a special slot with a name to the space.

**Import JSON string**  
Import a JSON string and convert it in a slot system.

**Delete the grid slot**  
Delete a grid slot from a space.

**Delete the named slot**  
Delete a slot from a space.

**Delete the slot**  
Delete a slot from a space.

**Move item on the grid**  
Move an item from a position to an other on the grid.

**Move item from named slot to named slot**  
Move an item from a named slot to an other.

**Move item from named slot to slot**  
Move an item from a slot to an other.

**Move item from slot to named slot**  
Move an item from a slot to an other.

**Move item from slot to slot**  
Move an item from a slot to an other.

**Delete grid slot property**  
Delete a property content from a grid slot.

**Delete named slot property**  
Delete a property content from a named slot.

**Delete slot property**  
Delete a property content from a slot.

**Grid slot count**  
Change the grid slot count of a space.

**Empty the grid slot**  
Empty the grid slot of the space only. It still exists in the space.

**Set an item in a grid slot**  
Set an item in a grid slot of a space.

**Grid slot max count**  
Change the grid slot max count, or 0 if unlimited.

**Grid slot number property**  
Change the number property of a grid slot.

**Grid slot text property**  
Change the text property of a grid slot.

**Set grid slot unlimited**  
Set the max count of a grid slot to be unlimited.

**Named slot count**  
Change the named slot count of a space.

**Empty the named slot**  
Empty the named slot of the space only. It still exists in the space.

**Set an item in a named slot**  
Set an item in a named slot of a space.

**Named slot max count**  
Change the named slot max count, or 0 if unlimited.

**Named slot number property**  
Change the number property of a named slot.

**Named slot text property**  
Change the text property of a named slot.

**Set named slot unlimited**  
Set the max count of a named slot to be unlimited.

**Slot count**  
Change the slot count of a space.

**Empty the slot**  
Empty the slot of the space only. It still exists in the space.

**Set an item in a slot**  
Set an item in a slot of a space.

**Slot max count**  
Change the slot max count, or 0 if unlimited.

**Slot number property**  
Change the number property of a slot.

**Slot text property**  
Change the text property of a slot.

**Set slot unlimited**  
Set the max count of a slot to be unlimited.

**Set grid size**  
Set the space size using grid dimension.

**Set space size**  
Set the amount of slots in the space.

**Sort items by property**  
Sort items and move them into a new slot order.

## Conditions

**Convert grid position to slot index**  
Compare a slot index of a grid position.

**Convert a slot to a grid column index**  
Compare the column index from a slot.

**Convert a slot to a grid row index**  
Compare the row index from a slot.

**Named slot exists**  
Check if the named slot exists.

**The space exists**  
Check if the space exists.

**Filled named slots**  
Compare the amount of filled named slots of a space.

**Filled slots**  
Compare the amount of filled slots of a space.

**First empty slot**  
Compare First empty slot. Set to -1 if no slot is found.

**First item slot**  
Compare First slot containing a specific item. Set to -1 if no slot is found.

**First available slot**  
Compare First slot containing a specific item that is not full. Set to -1 if no slot is found.

**Item at a grid position**  
Compare the item at grid postion.

**Grid slot count**  
Compare the grid slot count of a space.

**Grid slot max count**  
Compare the grid slot max count, or 0 if unlimited.

**The space has empty named slots**  
Check if the space contains empty named slots.

**The space has empty slots**  
Check if the space contains empty slots.

**Grid slot has property**  
Check if a property is set on a slot.

**Named slot has property**  
Check if a property is set on a named slot.

**Slot has property**  
Check if a property is set on a slot.

**Grid slot contains an item**  
The grid slot contains one or more items.

**Grid slot is full**  
The grid slot is full.

**Grid slot is unlimited**  
Check if the slot has an unlimited count.

**Named slot contains an item**  
The named slot contains one or more items.

**Named slot is full**  
The slot is full.

**Named slot is unlimited**  
Check if the named slot has an unlimited count.

**Slot contains an item**  
The slot contains one or more items.

**Slot is full**  
The slot is full.

**Slot position in grid**  
Check if the slot position is inside the grid boundaries.

**Slot is unlimited**  
Check if the slot has an unlimited count.

**The grid exists**  
Check if the space has a grid.

**Named slot count**  
Compare the named slot count of a space.

**Named slot item name**  
Compare the item name of a slot.

**Named slot max count**  
Compare the named slot max count, or 0 if unlimited.

**Slot property count**  
Compare the property count of a space.

**Grid slot number property**  
Compare the number property of a grid slot.

**Named slot number property**  
Compare the number property of a named slot.

**Slot number property**  
Compare the number property of a slot.

**Remaining named slots**  
Compare the remaining named slots of a space.

**Remaining slots**  
Compare the remaining slots of a space.

**Slot count**  
Compare the slot count of a space.

**Slot item name**  
Compare the item name of a slot.

**Slot max count**  
Compare the slot max count, or 0 if unlimited.

**Slot property count**  
Compare the property count of a space.

**Space grid height**  
Compare the space grid height.

**Space grid width**  
Compare the space grid width.

**Space named slot size**  
Compare how many slots the space has.

**Space slot size**  
Compare how many slots the space has.

**Sum of named slot properties**  
Compare Sum all the values of a slot property.

**Sum of slot properties**  
Compare Sum all the values of a slot property.

**Grid slot text property**  
Compare the text property of a grid slot.

**Named slot text property**  
Compare the text property of a named slot.

**Slot text property**  
Compare the text property of a slot.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `SlotSystem::ConvertGridPositionToSlot(identifier, number, number)` | Return a slot index of a grid position. ||
| | _identifier_ | Space name |
| | _number_ | Column index |
| | _number_ | Row index |
| `SlotSystem::ConvertSlotToGridColumn(identifier, number)` | Return the column index from a slot. ||
| | _identifier_ | Space name |
| | _number_ | Slot |
| `SlotSystem::ConvertSlotToGridRow(identifier, number)` | Return the row index from a slot. ||
| | _identifier_ | Space name |
| | _number_ | Slot |
| `SlotSystem::FilledNamedSlots(identifier)` | Return the amount of filled named slots of a space. ||
| | _identifier_ | Space name |
| `SlotSystem::FilledSlots(identifier)` | Return the amount of filled slots of a space. ||
| | _identifier_ | Space name |
| `SlotSystem::FirstEmptySlot(identifier)` | Return First empty slot. Set to -1 if no slot is found. ||
| | _identifier_ | Space name |
| `SlotSystem::FirstItemSlot(identifier, identifier)` | Return First slot containing a specific item. Set to -1 if no slot is found. ||
| | _identifier_ | Space name |
| | _identifier_ | Item |
| `SlotSystem::FirstItemSlotAvailable(identifier, identifier)` | Return First slot containing a specific item that is not full. Set to -1 if no slot is found. ||
| | _identifier_ | Space name |
| | _identifier_ | Item |
| `SlotSystem::GridItemName(identifier, number, number)` | Return the item at grid postion. ||
| | _identifier_ | Space name |
| | _number_ | Column index |
| | _number_ | Row index |
| `SlotSystem::GridSlotCount(identifier, number, number)` | Return the grid slot count of a space. ||
| | _identifier_ | Space name |
| | _number_ | Column index |
| | _number_ | Row index |
| `SlotSystem::GridSlotMax(identifier, number, number)` | Return the grid slot max count, or 0 if unlimited. ||
| | _identifier_ | Space name |
| | _number_ | Column index |
| | _number_ | Row index |
| `SlotSystem::NamedSlotCount(identifier, identifier)` | Return the named slot count of a space. ||
| | _identifier_ | Space name |
| | _identifier_ | Slot name |
| `SlotSystem::NamedSlotItemName(identifier, identifier)` | Return the item name of a slot. ||
| | _identifier_ | Space name |
| | _identifier_ | Slot name |
| `SlotSystem::NamedSlotMax(identifier, identifier)` | Return the named slot max count, or 0 if unlimited. ||
| | _identifier_ | Space name |
| | _identifier_ | Slot name |
| `SlotSystem::NamedSlotPropertyCount(identifier, identifier)` | Return the property count of a space. ||
| | _identifier_ | Space name |
| | _identifier_ | Property name |
| `SlotSystem::NumberOfGridSlotProperty(identifier, number, number, identifier)` | Return the number property of a grid slot. ||
| | _identifier_ | Space name |
| | _number_ | Column index |
| | _number_ | Row index |
| | _identifier_ | Property name |
| `SlotSystem::NumberOfNamedSlotProperty(identifier, identifier, identifier)` | Return the number property of a named slot. ||
| | _identifier_ | Space name |
| | _identifier_ | Slot name |
| | _identifier_ | Property name |
| `SlotSystem::NumberOfSlotProperty(identifier, number, identifier)` | Return the number property of a slot. ||
| | _identifier_ | Space name |
| | _number_ | Slot |
| | _identifier_ | Property name |
| `SlotSystem::RemainingNamedSlots(identifier)` | Return the remaining named slots of a space. ||
| | _identifier_ | Space name |
| `SlotSystem::RemainingSlots(identifier)` | Return the remaining slots of a space. ||
| | _identifier_ | Space name |
| `SlotSystem::SlotCount(identifier, number)` | Return the slot count of a space. ||
| | _identifier_ | Space name |
| | _number_ | Slot |
| `SlotSystem::SlotItemName(identifier, number)` | Return the item name of a slot. ||
| | _identifier_ | Space name |
| | _number_ | Slot |
| `SlotSystem::SlotMax(identifier, number)` | Return the slot max count, or 0 if unlimited. ||
| | _identifier_ | Space name |
| | _number_ | Slot |
| `SlotSystem::SlotPropertyCount(identifier, identifier)` | Return the property count of a space. ||
| | _identifier_ | Space name |
| | _identifier_ | Property name |
| `SlotSystem::SpaceGridHeight(identifier)` | Return the space grid height. ||
| | _identifier_ | Space name |
| `SlotSystem::SpaceGridWidth(identifier)` | Return the space grid width. ||
| | _identifier_ | Space name |
| `SlotSystem::SpaceNamedSlotSize(identifier)` | Return how many slots the space has. ||
| | _identifier_ | Space name |
| `SlotSystem::SpaceSlotSize(identifier)` | Return how many slots the space has. ||
| | _identifier_ | Space name |
| `SlotSystem::SumNamedSlotProperty(identifier, identifier)` | Return Sum all the values of a slot property. ||
| | _identifier_ | Space name |
| | _identifier_ | Property name |
| `SlotSystem::SumSlotProperty(identifier, identifier)` | Return Sum all the values of a slot property. ||
| | _identifier_ | Space name |
| | _identifier_ | Property name |
| `SlotSystem::TextOfGridSlotProperty(identifier, number, number, identifier)` | Return the text property of a grid slot. ||
| | _identifier_ | Space name |
| | _number_ | Column index |
| | _number_ | Row index |
| | _identifier_ | Property name |
| `SlotSystem::TextOfNamedSlotProperty(identifier, identifier, identifier)` | Return the text property of a named slot. ||
| | _identifier_ | Space name |
| | _identifier_ | Slot name |
| | _identifier_ | Property name |
| `SlotSystem::TextOfSlotProperty(identifier, number, identifier)` | Return the text property of a slot. ||
| | _identifier_ | Space name |
| | _number_ | Slot |
| | _identifier_ | Property name |
| `SlotSystem::ToJSON(identifier)` | Convert a complete space to JSON format. ||
| | _identifier_ | Space name |

---

*This page is an auto-generated reference page about the **Slot system** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).