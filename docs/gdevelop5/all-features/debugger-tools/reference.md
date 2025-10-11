# Debugger Tools Reference

Allow to interact with the editor debugger from the game (notably: enable 2D debug draw, log a message in the debugger console). 

## Actions

**Log a message to the console**  
Logs a message to the debugger's console.

??? quote "See parameters"

    - Parameter 0 (string): Message to log
    - Parameter 1 (🔤 String): Message type (one of: "info", "warning", "error")
    - Parameter 2 (string): Group of messages

**Draw collisions hitboxes and points**  
This activates the display of rectangles and information on screen showing the objects bounding boxes (blue), the hitboxes (red) and some points of objects.

??? quote "See parameters"

    - Parameter 1 (❓ Yes or No): Enable debug draw
    - Parameter 2 (❓ Yes or No): Show collisions for hidden objects
    - Parameter 3 (❓ Yes or No): Show points names
    - Parameter 4 (❓ Yes or No): Show custom points

    > Technical note: parameter 0 are internal parameters handled by GDevelop.

**Pause game execution**  
This pauses the game, useful for inspecting the game state through the debugger. Note that events will be still executed until the end before the game is paused.

??? quote "See parameters"



    > Technical note: parameter 0 are internal parameters handled by GDevelop.





---

The Debugger Tools extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **Debugger Tools** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).