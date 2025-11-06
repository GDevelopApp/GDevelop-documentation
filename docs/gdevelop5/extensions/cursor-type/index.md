# Cursor type

<img src="https://resources.gdevelop-app.com/assets/Icons/cursor-default-outline.svg" class="extension-icon"></img>
Provides an action to change the type of the cursor, and a behavior to change the cursor when an object is hovered.

**Authors and contributors** to this experimental extension: [arthuro555](https://gd.games/arthuro555), [Bouh](https://gd.games/Bouh).

---

Provides an action to change the type of the cursor, and a behavior to change the cursor when an object is hovered.

Find the list of cursors here: https://developer.mozilla.org/en-US/docs/Web/CSS/cursor

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Cursor type**  
Change the type of the cursor.

??? quote "See parameters & details"

    - Parameter 1 (stringwithselector): The new cursor type
      List of available cursors on https://developer.mozilla.org/en-US/docs/Web/CSS/cursor (one of: "auto", "default", "none", "context-menu", "help", "pointer", "progress", "wait", "cell", "crosshair", "text", "vertical-text", "alias", "copy", "move", "no-drop", "not-allowed", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nwse-resize", "zoom-in", "zoom-out")

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `CursorType::ChangeCursorType`.




## Custom cursor when hovered 

Change the cursor appearence when the object is hovered (on Windows, macOS or Linux). 

### Behavior properties

- **The cursor type** (choice, one of: "auto", "default", "none", "context-menu", "help", "pointer", "progress", "wait", "cell", "crosshair", "text", "vertical-text", "alias", "copy", "move", "no-drop", "not-allowed", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nwse-resize", "zoom-in", "zoom-out"). See https://developer.mozilla.org/en-US/docs/Web/CSS/cursor for a list of possible cursors. Default value is `default`.

??? quote "See internal technical details"


    - **The cursor type** is stored as `CursorType` (Choice). Default value is `default`.

_No expressions for this behavior._



---

*This page is an auto-generated reference page about the **Cursor type** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).