---
title: Storage
---
# Storage

Games can store data, such as the player progress. See [this guide](/gdevelop5/tutorials/storage-action-explained) for detailed explanations and examples.

!!! note

    Storage actions will store all the data into **internal storage** (persisted after the game is closed). If you want to write or read from files, read [the page about File system](/gdevelop5/all-features/filesystem) (only for Windows, macOS, Linux).

## Clear the storage during a preview

Data is stored permanently in the internal storage of the preview window, which is persisted across previews and even after GDevelop is closed (like in an exported game).

When we preview our game it can be sometimes useful to have the data reset, like if it's the first time the game is launched. To do this, you can clear the storage:

- In the top bar of the preview window select **View** -> **Toggle developer tools**.
- The developer tools usually open with the 'Console' tab selected displaying some messages.
- Click the '**Application**' tab. It may be not visible depends on the size of your preview window. You can resize the preview window until you can see the 'Application' tab on the top.
- After you have selected the 'Application' tab, you can find the stored data on the left-hand side under **Storage** -> **Local Storage** -> **file:**
- If you click the 'file:' with the left mouse button, you can see more detail about what data is stored in the storage.
- To clear the data, click 'file:' with the right mouse button and choose '**Clear**'

You can now close the preview window. When running the preview again, the stored data will be gone.

## Save Location

On desktop computers, local storage will always be located here:

### Desktop export

#### Windows Path

**<User Path Drive Letter>:\Users\<UserName>\AppData\Roaming\<Game Name>\Local Storage\leveldb**

e.g. If on Windows 10, the User Profile folder is on the C: drive, the User's account name is BobBobson and the game is set to the name "My GD5 Game" in the game properties, this would be the path:

**C:\Users\Bobbobson\AppData\Roaming\My GD5 Game\Local Storage\leveldb**

This will vary by Windows version and settings, but can normally be accessed by browsing to **%AppData%** then accessing the folder that matches the game name.

#### Linux Path

**home/<UserName>/.config/<Game Name>/Local Storage/leveldb**

### HTML5 Export

If the game has been exported to an HTML5 build, and uploaded to a host such as Itch.io, local storage will be maintained with the //browser's// local storage.

This will mean that each browser will have a unique location, and users will need to refer to that documentation if they want to locate it. This will also mean that most browsers will delete the save data if their local stored data is cleared.

## Reference

All actions, conditions and expressions are listed in [the storage reference page](/gdevelop5/all-features/storage/reference/).