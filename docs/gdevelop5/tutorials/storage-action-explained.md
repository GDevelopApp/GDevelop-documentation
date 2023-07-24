---
title: Storage actions
---
# Storage actions

Everytime a game loads, variables are created with their initial values. This means that variables cannot be used to store data between game sessions.
Instead, storage actions can be used to save data and then load it when the game starts (or later when the player wants to restore their progress).

To see this in action, review the *[Save-Load example](https://editor.gdevelop.io/?project=example://save-load)* included with GDevelop.

!!! note

    Storage actions will store all the data into **internal storage**. If you want to write or read from files, read [the page about File system](/gdevelop5/all-features/filesystem) (only for Windows, macOS, Linux).

## Writing and reading values from the storage.

When you're using the action to write or read a value from the storage, you will be asked for the **Storage** and the **Group**.

### **Storage**

Name of the storage you want to write a value in to. For example, you may want to store player information in a storage called "player" and game settings in a storage called "settings" or you can just use a single storage to save everything and call it "save" it is up to you how would you like to organize this. If the storage with the name does not exist, GDevelop will create the storage. 

!!! note
     GDevelop is not using the local file system for these "storages". Instead, it uses the internal storage of the app, known as "LocalStorage" on the web.

### **Group**

Group name can be used to organize the data that is being saved. This makes it easier to understand when there is a lot of data being stored in the same storage. For example, the position of the player can be stored within a group name and the life of the player can be stored within another group name inside the same storage. You can create groups contained inside another group by separating their names by a slash:

- `"Player/PositionX"` to store the X position of the player.
- `"Player/Life"` to store the life of the player.
