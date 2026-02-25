---
title: Storage
---
# Storage

Games can store data, such as the player progress. By default, nothing is persisted between game sessions. **Storage** actions and conditions are an easy way to persist information like the player best score, items, etc...

To see this in action, review the *[Save-Load example](https://editor.gdevelop.io/?project=example://save-load)* included with GDevelop.

!!! note

    Storage actions will store all the data into **internal storage**. If you want to write or read from files, read [the page about File system](/gdevelop5/all-features/filesystem) (only for Windows, macOS, Linux).

## Value types

Storage supports two types of values:

- **Numbers** — integers and decimals (scores, coordinates, counters, etc.)
- **Strings** — text (player names, selected options, etc.)

Booleans are not a native storage type; store them as a number (`1`/`0`) or a string (`"true"`/`"false"`).

## Writing and reading values from a storage

When you're using the action to write or read a value from the storage, you will be asked for the **Storage** and the **Group**.

### **Storage**

Name of the storage you want to write a value in to. For example, you may want to store player information in a storage called "player" and game settings in a storage called "settings". Or you can just use a single storage to save everything and call it "save". If the storage with the name does not exist, GDevelop will create the storage.

You can compare this to a file name on a disk.

!!! note
     GDevelop is not using the local file system for these "storages". Instead, it uses the internal storage of the app, known as "LocalStorage" on the web.

### **Group**

A group name can be used to organize the data that is being saved. This makes it easier to understand when there is a lot of data being stored in the same storage. For example, the position of the player can be stored within a group name and the life of the player can be stored within another group name inside the same storage. You can create groups contained inside another group by separating their names by a slash:

- `"Player/PositionX"` to store the X position of the player.
- `"Player/Life"` to store the life of the player.

## Deleting stored values

Individual values or whole groups can be removed with the "**Delete an element**" action. To wipe an entire storage, use the "**Clear a storage**" action.

## Advanced: Clear the storage during a preview

Data is stored permanently in the internal storage of the preview window, which is persisted across previews and even after GDevelop is closed (like in an exported game).

When we preview our game it can be sometimes useful to have the data reset, like if it's the first time the game is launched. To do this, you can clear the storage:

  - In the top bar of the preview window select **View** -> **Toggle developer tools**.
  - The developer tools usually open with the 'Console' tab selected displaying some messages.
  - Click the '**Application**' tab. It may be not visible depends on the size of your preview window. You can resize the preview window until you can see the 'Application' tab on the top.
  - After you have selected the 'Application' tab, you can find the stored data on the left-hand side under **Storage** -> **Local Storage** -> **file:**
  - If you click the 'file:' with the left mouse button, you can see more detail about what data is stored in the storage.
  - To clear the data, click 'file:' with the right mouse button and choose '**Clear**'

You can now close the preview window. When running the preview again, the stored data will be gone.

## Advanced: Finding the save Location

### Desktop games

On desktop computers, local storage will always be located here:

* Windows: `PATH_TO_USER_FOLDER\AppData\Roaming\GAME_NAME\Local Storage\leveldb`
* macOS: `~/Library/Application Support/GAME_NAME/Local Storage/leveldb`
* Linux: `~/.config/GAME_NAME/Local Storage/leveldb`

For example: if on Windows 10, the User Profile folder is on the C: drive, the User's account name is BobBobson and the game is set to the name "My GD5 Game" in the game properties, this would be the path: `C:\Users\BobBobson\AppData\Roaming\My GD5 Game\Local Storage\leveldb`.

This will vary by Windows version and settings, but can normally be accessed by browsing to `%AppData%` in the Windows explorer then accessing the folder that matches the game name.

### HTML5 games

If the game has been exported to an HTML5 build, and uploaded to a host such as Itch.io, local storage will be maintained with the *browser* local storage.

This will mean that each browser will have a unique location, and users will need to refer to that documentation if they want to locate it. This will also mean that most browsers will delete the save data if their local stored data is cleared.

## Reference

All actions, conditions and expressions are listed in [the storage reference page](/gdevelop5/all-features/storage/reference/).
