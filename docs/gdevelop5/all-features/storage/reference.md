# Storage Reference

Actions and conditions to store data (like the player progress or anything else to be persisted across game sessions). Data are stored on the device and erased when the game is uninstalled. [Read more explanations about it.](/gdevelop5/all-features/storage)

## Actions

**Clear a storage**
Clear the specified storage, removing all data saved in it.

??? quote "See parameters"

    - Parameter 0 (string): Storage name

**Delete an element**
This action deletes the specified element from the specified storage.  
Specify the structure leading to the element using / (example : Root/Level/Current)
Spaces are forbidden in element names.

??? quote "See parameters"

    - Parameter 0 (string): Storage name
    - Parameter 1 (string): Group

**Save a value**
Save the result of the expression in the stored data, in the specified element.  
Specify the structure leading to the element using / (example : Root/Level/Current)
Spaces are forbidden in element names.

??? quote "See parameters"

    - Parameter 0 (string): Storage name
    - Parameter 1 (string): Group
    - Parameter 2: 🔢 Number

**Save a text**
Save the text in the specified storage, in the specified element.  
Specify the structure leading to the element using / (example : Root/Level/Current)
Spaces are forbidden in element names.

??? quote "See parameters"

    - Parameter 0 (string): Storage name
    - Parameter 1 (string): Group
    - Parameter 2 (string): Text

**Manually preload a storage in memory**
Forces the specified storage to be loaded and kept in memory, allowing faster reads/writes. However, it requires manual management: if you use this action, you *must* also unload the storage manually when it's no longer needed to ensure data is persisted.  

Unless you have a specific performance need, avoid using this action. The system already handles loading/unloading automatically.

??? quote "See parameters"

    - Parameter 0 (string): Storage name

**Load a value**
Load the value saved in the specified element and store it in a variable.  
Specify the structure leading to the element using / (example : Root/Level/Current)
Spaces are forbidden in element names.

??? quote "See parameters"

    - Parameter 0 (string): Storage name
    - Parameter 1 (string): Group
    - Parameter 3: 🗄️ Any variable

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

**Load a text**
Load the text saved in the specified element and store it in a variable.  
Specify the structure leading to the element using / (example : Root/Level/Current)
Spaces are forbidden in element names.

??? quote "See parameters"

    - Parameter 0 (string): Storage name
    - Parameter 1 (string): Group
    - Parameter 3: 🗄️ Any variable

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

**Manually unload and persist a storage**
Close the specified storage previously loaded in memory, saving all changes made.

??? quote "See parameters"

    - Parameter 0 (string): Storage name

## Conditions

**Existence of a group**
Check if an element (example : PlayerState/CurrentLevel) exists in the stored data.  
Spaces are forbidden in element names.

??? quote "See parameters"

    - Parameter 0 (string): Storage name
    - Parameter 1 (string): Group





---

The Storage extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **Storage** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).