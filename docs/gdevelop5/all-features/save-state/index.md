---
title: Save & Load (Save State)
---

# Save & Load (Save State)

The **Save State** extension allows you to **save and restore the full state of your game** at any time — including all objects, variables, sounds, effects, and more.

It is designed to be **easy to use by default**, while also providing **advanced configuration options** for developers who need finer control over what gets saved or loaded.

![](save-action.png)

## Basic Usage

You can save and load the game state in **two main ways**:

### 1. Save to Device Storage

This is the **recommended** approach for most games. It automatically stores the save data in the player’s **device storage** (web, desktop, or mobile), ensuring that the save persists between sessions — even if the game is closed or restarted.

Use these actions:

- **Save game to device storage**
- **Load game from device storage**

Each save uses a **storage key**, such as `"Save1"`, `"CheckpointA"`, or `"Autosave"`, to identify the save slot. This enables you to offer multiple save slots (in some games, it's usual to have 3 to 5 save slots that the player can use).

While there is no hard limitation on the number of saves, some devices or browsers might have a limitation on the total size occupied by the saves. It's usually safer to limit the number of saves the player can do.

### 2. Save to a Variable (Advanced)

You can also save the entire game state into a **scene or global variable**.  
This is useful for:

- Implementing checkpoints or quicksaves that don’t persist after closing the game. In this case, be sure to exclude the variable from the save state (see "Exclude Variables or other scene/game data from Save States" section below).
- Sending save data to a remote server or cloud.
- Debugging.

!!! important
    Variable-based saves are stored only in memory — they are **not persisted** between game sessions. You must persist the variable somewhere if you want to keep the save state.


## Monitoring Save/Load Operations

The extension provides a few **expressions and conditions** to help you monitor saves and loads. In particular, the "Load just succeeded" condition is perfect to run some logic after a scene was loaded. This is somewhat similar to "At the beginning of the scene", except that after a loading a scene is already considered as started (because it was "frozen in time" in the save state).

## Advanced: Excluding Objects from Save States with the “Save Configuration” Behavior.

By default, everything in the game is saved — all objects, scene data, and variables.
However, you can customize this behavior using the **Save Configuration** behavior or dedicated actions.

Add the **Save Configuration** behavior to any object you don’t want to include in save states or only in some save states.
It has two properties:

- **Persistence mode**:
  - `Persisted` (default): the object is included in save states.
  - `Do not save`: the object is excluded.
- **Save profile names**: optional comma-separated list of profiles (see below) in which this object should be included.

For example, you can exclude a particle system object or UI elements like Joysticks or health bars that doesn’t need to be saved.

### Exclude Variables or other Scene/Game Data from Save States

You can also configure **scene or global variables** to be included or excluded from save states dynamically. Use the action **"Change the save configuration of a variable"**.

This lets you:
- Exclude a variable from all saves.
- Include it only in certain save profiles (see next section).
- Adjust what gets persisted during gameplay (for example, disable autosave for debug data).

Similarly, you can use these actions for broader control:
- **Change the save configuration of the global game data**
- **Change the save configuration of a scene data**

---

## Even More Advanced: Using Save Profiles

The Save State system supports **profiles**, allowing you to organize save data into different categories.

Each object, variable, or piece of scene/game data can be assigned one or more **profile names** (like `"default"`, `"checkpoint"`, `"player"`, etc.).

When you perform a save or load, you can specify one or more profiles — and only the data tagged with those profiles will be affected.

### Example Use Cases

- **Split save data:** Save “player” progress separately from “world” state.
- **Selective restore:** Load only some data (for instance, restore player stats without reloading the entire scene).
- **Checkpoints:** Save lightweight data per checkpoint using profiles.

## Known Limitations

!!! note

    While it’s technically possible to save the game at any moment, it’s **recommended** to save or load at stable points in gameplay — such as checkpoints or after the end of an action — to avoid inconsistencies (e.g., during physics updates or combat animations).

- **Custom objects** are not yet fully serialized. They will be recreated and placed correctly, but their internal state may reset to default.
- **Third-party extensions** that manage data outside of GDevelop’s variable/object system might not be captured.
- **Performance impact:** Saving large games (many objects or variables) can briefly freeze the game; use with care on mobile or web platforms.
