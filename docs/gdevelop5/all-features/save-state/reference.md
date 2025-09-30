# Save State (experimental) Reference

Allows to save and load the full state of a game. [Read more explanations about it.](/gdevelop5/all-features/save-state)

## Actions

**Load game from device storage**  
Load game from device storage save snapshot.

**Load game from variable**  
Load game from a variable save snapshot.

**Save game to device storage**  
Takes a snapshot of the game and save it to device storage.

**Save game to a variable**  
Takes a snapshot of the game and save it to a variable.

## Conditions

**Load just failed**  
the load just failed

**Load just succeeded**  
the load just succeeded

**Save just failed**  
the save just failed

**Save just succeeded**  
the save just succeeded

**Time since last load**  
Compare Time since the last load, in seconds. Returns -1 if no load happened, and a positive number otherwise..

**Time since last save**  
Compare Time since the last save, in seconds. Returns -1 if no save happened, and a positive number otherwise..

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `SaveState::TimeSinceLastLoad()` | Return Time since the last load, in seconds. Returns -1 if no load happened, and a positive number otherwise.. ||
| `SaveState::TimeSinceLastSave()` | Return Time since the last save, in seconds. Returns -1 if no save happened, and a positive number otherwise.. ||



---

The Save State (experimental) extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **Save State (experimental)** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).