# Save State (experimental) Reference

Allows to save and load the full state of a game, usually on the device storage. A Save State, by default, contains the full state of the game (objects, variables, sounds, music, effects etc.). Using the "Save Configuration" behavior, you can customize which objects should not be saved in a Save State. You can also use the "Change the save configuration of a variable" action to change the save configuration of a variable. Finally, both objects, variables and scene/game data can be given a profile name: in this case, when saving or loading with one or more profile names specified, only the object/variables/data belonging to one of the specified profiles will be saved or loaded. [Read more explanations about it.](/gdevelop5/all-features/save-state)

## Actions

**Save game to device storage**  
Create a Save State and save it to device storage.

**Save game to a variable**  
Create a Save State and save it to a variable. This is for advanced usage, prefer to use "Save game to device storage" in most cases.

**Load game from device storage**  
Restore the game from a Save State stored on the device.

**Load game from variable**  
Restore the game from a Save State stored in the specified variable. This is for advanced usage, prefer to use "Load game from device storage" in most cases.

**Change the save configuration of the global game data**  
Set if the global game data (audio & global variables) should be saved in the default save state. Also allow to specify one or more profiles in which the global game data should be saved.

**Change the save configuration of a scene data**  
Set if the data of the specified scene (scene variables, timers, trigger once, wait actions, layers, etc.) should be saved in the default save state. Also allow to specify one or more profiles in which the scene data should be saved. Note: objects are always saved separately from the scene data (use the "Save Configuration" behavior to customize the configuration of objects).

**Change the save configuration of a variable**  
Set if a scene or global variable should be saved in the default save state. Also allow to specify one or more profiles in which the variable should be saved.

## Conditions

**Load just failed**  
The last load attempt just failed.

**Load just succeeded**  
The last load attempt just succeeded.

**Save just failed**  
The last save attempt just failed.

**Save just succeeded**  
The last save attempt just succeeded.

**Time since last load**  
Compare Time since the last load, in seconds. Returns -1 if no load happened, and a positive number otherwise..

**Time since last save**  
Compare Time since the last save, in seconds. Returns -1 if no save happened, and a positive number otherwise..

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `SaveState::TimeSinceLastLoad()` | Return Time since the last load, in seconds. Returns -1 if no load happened, and a positive number otherwise.. ||
| `SaveState::TimeSinceLastSave()` | Return Time since the last save, in seconds. Returns -1 if no save happened, and a positive number otherwise.. ||

## Save state configuration 

Allow the customize how the object is persisted in a save state. 

_No expressions for this behavior._




---

The Save State (experimental) extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **Save State (experimental)** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).