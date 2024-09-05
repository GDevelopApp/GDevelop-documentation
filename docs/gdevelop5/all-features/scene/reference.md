# Scene Reference

Actions and conditions to manipulate the scenes during the game. 

## Actions

**Stop and go back to previous scene**  
Stop this scene and go back to the previous paused one.  
To pause a scene, use the "Pause and start a new scene" action.

**Preload scene**  
Preload a scene resources as soon as possible in background.

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
| `SceneLoadingProgress()` | Return The progress of resources loading in background for a scene (between 0 and 1).. ||

---
*This page is an auto-generated reference page about the **Scene** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).