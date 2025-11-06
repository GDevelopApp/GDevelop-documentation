# Checkpoints

<img src="https://resources.gdevelop-app.com/assets/Icons/flag-variant.svg" class="extension-icon"></img>
Respawn objects at checkpoints.

**Authors and contributors** to this experimental extension: [Elairyx](https://gd.games/Elairyx), [Bouh](https://gd.games/Bouh).

---

This extension can save checkpoints and respawn objects at the last one.

The platformer example uses this extension ([open the project online](https://editor.gdevelop.io/?project=example://platformer)).

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Load checkpoint**  
Change the position of the object to the saved checkpoint.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Load checkpoint from object
    - Parameter 2 (👾 Object): Change position of object
    - Parameter 3 (🔤 Name (String)): Checkpoint name
    - Parameter 4 (❓ Yes or No): Ignore (possibly) empty checkpoints
      Loading not yet saved checkpoints will (by default) set the position to the coordinate 0;0. Select "yes" to completely ignore non-existant checkpoints. To define an alternative checkpoint for it, create a new event and use the "Checkpoint exists" condition, save the wanted checkpoint as the action.

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Checkpoints::LoadCheckpoint`.

**Save checkpoint**  
Update a checkpoint of an object.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Save checkpoint of object
    - Parameter 2 (🔢 Number): X position
    - Parameter 3 (🔢 Number): Y position
    - Parameter 4 (🔤 Name (String)): Checkpoint name

    > Technical note: parameters 0, 5 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Checkpoints::SaveCheckpoint`.


## Conditions

**Checkpoint exists**  
Check if a checkpoint has a position saved / does exist.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Check checkpoint from object
    - Parameter 2 (🔤 Name (String)): Checkpoint name

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Checkpoints::CheckpointExist`.





---

*This page is an auto-generated reference page about the **Checkpoints** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).