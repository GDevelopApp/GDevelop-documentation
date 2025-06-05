# Storage Reference

Actions and conditions to store data (like the player progress or anything else to be persisted across game sessions). Data are stored on the device and erased when the game is uninstalled. [Read more explanations about it.](/gdevelop5/all-features/storage)

## Actions

**Clear a storage**  
Clear the specified storage, removing all data saved in it.

**Delete an element**  
This action deletes the specified element from the specified storage.  
Specify the structure leading to the element using / (example : Root/Level/Current)
Spaces are forbidden in element names.

**Save a value**  
Save the result of the expression in the stored data, in the specified element.  
Specify the structure leading to the element using / (example : Root/Level/Current)
Spaces are forbidden in element names.

**Save a text**  
Save the text in the specified storage, in the specified element.  
Specify the structure leading to the element using / (example : Root/Level/Current)
Spaces are forbidden in element names.

**Load a storage in memory**  
This action loads the specified storage in memory, so you can write and read it.  
You can open and write without using this action, but it will be slower.
If you use this action, do not forget to unload the storage from memory.

**Load a value**  
Load the value saved in the specified element and store it in a variable.  
Specify the structure leading to the element using / (example : Root/Level/Current)
Spaces are forbidden in element names.

**Load a text**  
Load the text saved in the specified element and store it in a variable.  
Specify the structure leading to the element using / (example : Root/Level/Current)
Spaces are forbidden in element names.

**Close a storage**  
This action closes the structured data previously loaded in memory, saving all changes made.

## Conditions

**Existence of a group**  
Check if an element (example : PlayerState/CurrentLevel) exists in the stored data.  
Spaces are forbidden in element names.




---

The Storage extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **Storage** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).