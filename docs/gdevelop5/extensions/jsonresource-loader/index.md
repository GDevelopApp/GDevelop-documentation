# JSON Resource Loading

<img src="https://resources.gdevelop-app.com/assets/Icons/file-code-outline.svg" class="extension-icon"></img>
Loads a JSON resource into a variable.

**Authors and contributors** to this experimental extension: [arthuro555](https://gd.games/arthuro555).

!!! warning
    This is an extension made by a community member and it only got through a
    light review by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of fully reviewed extensions.

---

Loads a (static) JSON resource from your project files into a global, scene, or object variable.

NEVER use this to load your game.json into a variable - this would increase your game size by a lot and make your whole project file available for anyone to open!

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Load a JSON resource in a global variable**  
Loads a JSON resource into a global structure variable.

??? quote "See parameters"

    - Parameter 1 (jsonResource): The resource to load the JSON from
    - Parameter 2 (🗄️ Global variable): The global variable to load the JSON to

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

**Load a JSON resource in an object variable**  
Loads a JSON resource into an object structure variable.

??? quote "See parameters"

    - Parameter 1 (jsonResource): The resource to load the JSON from
    - Parameter 2 (👾 Object): The object where to find the variable
    - Parameter 3 (🗄️ Object variable): The object variable to load the JSON to

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

**Load a JSON resource in a scene variable**  
Loads a JSON resource into a scene structure variable.

??? quote "See parameters"

    - Parameter 1 (jsonResource): The resource to load the JSON from
    - Parameter 2 (🗄️ Scene variable): The scene variable to load the JSON to

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.




---

*This page is an auto-generated reference page about the **JSON Resource Loading** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).