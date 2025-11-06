# Save State (experimental) Reference

Allows to save and load the full state of a game, usually on the device storage. A Save State, by default, contains the full state of the game (objects, variables, sounds, music, effects etc.). Using the "Save Configuration" behavior, you can customize which objects should not be saved in a Save State. You can also use the "Change the save configuration of a variable" action to change the save configuration of a variable. Finally, both objects, variables and scene/game data can be given a profile name: in this case, when saving or loading with one or more profile names specified, only the object/variables/data belonging to one of the specified profiles will be saved or loaded. [Read more explanations about it.](/gdevelop5/all-features/save-state)

## Actions

**Save game to device storage**  
Create a Save State and save it to device storage.

??? quote "See parameters & details"

    - Parameter 1 (🔤 String): Storage key to save to
    - Parameter 2 (🔤 String): Profile(s) to save
      Comma-separated list of profile names that must be saved. Only objects tagged with at least one of these profiles will be saved. If no profile names are specified, all objects will be saved (unless they have a "Save Configuration" behavior set to "Do not save").

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SaveState::CreateGameSaveStateInStorage`.

**Save game to a variable**  
Create a Save State and save it to a variable. This is for advanced usage, prefer to use "Save game to device storage" in most cases.

??? quote "See parameters & details"

    - Parameter 1 (🗄️ Any variable): Variable to store the save to
    - Parameter 2 (🔤 String): Profile(s) to save
      Comma-separated list of profile names that must be saved. Only objects tagged with at least one of these profiles will be saved. If no profile names are specified, all objects will be saved (unless they have a "Save Configuration" behavior set to "Do not save").

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SaveState::CreateGameSaveStateInVariable`.

**Load game from device storage**  
Restore the game from a Save State stored on the device.

??? quote "See parameters & details"

    - Parameter 1 (🔤 String): Storage name to load the game from
    - Parameter 2 (🔤 String): Profile(s) to load
      Comma-separated list of profile names that must be loaded. Only objects tagged with at least one of these profiles will be loaded - others will be left alone. If no profile names are specified, all objects will be loaded.
    - Parameter 3 (❓ Yes or No): Stop and restart all the scenes currently played?

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SaveState::RestoreGameSaveStateFromStorage`.

**Load game from variable**  
Restore the game from a Save State stored in the specified variable. This is for advanced usage, prefer to use "Load game from device storage" in most cases.

??? quote "See parameters & details"

    - Parameter 1 (🗄️ Any variable): Variable to load the game from
    - Parameter 2 (🔤 String): Profile(s) to load
      Comma-separated list of profile names that must be loaded. Only objects tagged with at least one of these profiles will be loaded - others will be left alone. If no profile names are specified, all objects will be loaded (unless they have a "Save Configuration" behavior set to "Do not save").
    - Parameter 3 (❓ Yes or No): Stop and restart all the scenes currently played?

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SaveState::RestoreGameSaveStateFromVariable`.

**Change the save configuration of the global game data**  
Set if the global game data (audio & global variables) should be saved in the default save state. Also allow to specify one or more profiles in which the global game data should be saved.

??? quote "See parameters & details"

    - Parameter 1 (❓ Yes or No): Persist in default save states
    - Parameter 2 (🔤 String): Profiles in which the global game data should be saved
      Comma-separated list of profile names in which the global game data will be saved. When a save state is created with one or more profile names specified, the global game data will be saved only if it matches one of these profiles.

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SaveState::SetGameDataSaveConfiguration`.

**Change the save configuration of a scene data**  
Set if the data of the specified scene (scene variables, timers, trigger once, wait actions, layers, etc.) should be saved in the default save state. Also allow to specify one or more profiles in which the scene data should be saved. Note: objects are always saved separately from the scene data (use the "Save Configuration" behavior to customize the configuration of objects).

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name of a scene (String)): Scene name for which configuration should be changed
    - Parameter 2 (❓ Yes or No): Persist in default save states
    - Parameter 3 (🔤 String): Profiles in which the scene data should be saved
      Comma-separated list of profile names in which the scene data will be saved. When a save state is created with one or more profile names specified, the scene data will be saved only if it matches one of these profiles.

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SaveState::SetSceneDataSaveConfiguration`.

**Change the save configuration of a variable**  
Set if a scene or global variable should be saved in the default save state. Also allow to specify one or more profiles in which the variable should be saved.

??? quote "See parameters & details"

    - Parameter 1 (🗄️ Any variable): Variable for which configuration should be changed
    - Parameter 2 (❓ Yes or No): Persist in default save states
    - Parameter 3 (🔤 String): Profiles in which the variable should be saved
      Comma-separated list of profile names in which the variable will be saved. When a save state is created with one or more profile names specified, the variable will be saved only if it matches one of these profiles.

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SaveState::SetVariableSaveConfiguration`.


## Conditions

**Load just failed**  
The last load attempt just failed.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `SaveState::LoadJustFailed`.

**Load just succeeded**  
The last load attempt just succeeded.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `SaveState::LoadJustSucceeded`.

**Save just failed**  
The last save attempt just failed.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `SaveState::SaveJustFailed`.

**Save just succeeded**  
The last save attempt just succeeded.

??? quote "See parameters & details"

    There are no parameters to set for this condition.

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `SaveState::SaveJustSucceeded`.

**Time since last load**  
Compare Time since the last load, in seconds. Returns -1 if no load happened, and a positive number otherwise..

??? quote "See parameters & details"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `SaveState::TimeSinceLastLoad`.

**Time since last save**  
Compare Time since the last save, in seconds. Returns -1 if no save happened, and a positive number otherwise..

??? quote "See parameters & details"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `SaveState::TimeSinceLastSave`.


## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `SaveState::TimeSinceLastLoad()` | Return Time since the last load, in seconds. Returns -1 if no load happened, and a positive number otherwise.. ||
| `SaveState::TimeSinceLastSave()` | Return Time since the last save, in seconds. Returns -1 if no save happened, and a positive number otherwise.. ||

## Save state configuration 

Allow the customize how the object is persisted in a save state. 

### Behavior properties

- **Persistence mode** (Choice, one of: "Persisted", "DoNotSave"). Default value is `Persisted`.
- **Save profile names** (🔤 String). Comma-separated list of profile names in which the object is saved. When a save state is created with one or more profile names specified, the object will be saved only if it matches one of these profiles.

??? quote "See internal technical details"


    - **Persistence mode** is stored as `defaultProfilePersistence` (Choice). Default value is `Persisted`.
    - **Save profile names** is stored as `persistedInProfiles` (String). Default value is ``.

_No expressions for this behavior._




---

The Save State (experimental) extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **Save State (experimental)** feature of [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).