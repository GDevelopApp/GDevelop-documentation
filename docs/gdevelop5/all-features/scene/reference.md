# Scene Reference

Actions and conditions to manipulate the scenes during the game. 

## Actions

**Stop and go back to previous scene**  
Stop this scene and go back to the previous paused one.  
To pause a scene, use the "Pause and start a new scene" action.

**Preload scene**  
Preload a scene resources as soon as possible in background.

**Unload scene resources**  
Unload the resources of a scene from memory. This frees up memory but means the scene's resources will need to be reloaded if the scene is accessed again later.

**Pause and start a new scene**  
Pause this scene and start the specified one.  
Later, you can use the "Stop and go back to previous scene" action to go back to this scene.

**Quit the game**  
Quit the game

**Change the scene**  
Stop this scene and start the specified one instead.

**Background color**  
Change the background color of the scene.

## Conditions

**Scene preloaded**  
Check if scene resources have finished to load in background.

**Scene resources unloaded**  
Check if scene resources have been unloaded from memory.

**At the beginning of the scene**  
Is true only when scene just begins.

**Does scene exist**  
Check if a scene exists.

**Game has just resumed**  
Check if the game has just resumed from being hidden. It happens when the game tab is selected, a minimized window is restored or the application is put back on front.

**Scene just resumed**  
The scene has just resumed after being paused.

**Scene loading progress**  
Compare The progress of resources loading in background for a scene (between 0 and 1)..

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `CurrentSceneName()` | Name of the current scene ||
| `SceneLoadingProgress(scene name)` | Return The progress of resources loading in background for a scene (between 0 and 1).. ||
| | _🔤 Name of a scene (String)_ | Scene name |

## Resource Management Strategies

GDevelop provides flexible resource management strategies to optimize memory usage and loading performance:

### Project-level Settings
The [project properties](/gdevelop5/interface/project-manager/properties) allow you to set the default resource preloading strategy for all scenes. By default, all scene resources are preloaded in the background for fast scene switching.

### Scene-level Settings
Each scene can override the project's default settings through its Scene Properties dialog (accessible by right-clicking on the scene in the Scene Editor):

- **Resources preloading:** Control whether this scene's resources should be preloaded in the background
- **Resources unloading:** Specify when the scene's resources should be unloaded from memory when leaving the scene

### When to Use Different Strategies

**Default Strategy (Preload all, never unload):**
- Best for most games with moderate resource usage
- Provides fastest scene switching
- Resources stay in memory throughout the game session

**Selective Preloading:**
- Useful for large games with many scenes
- Reduces initial loading time by only preloading critical scenes
- Good for web games to minimize bandwidth usage

**Resource Unloading:**
- Essential for games with very large assets per scene
- Helps manage memory on low-end devices
- Useful for modular games where players may not visit all scenes

---

The Scene extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **Scene** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).