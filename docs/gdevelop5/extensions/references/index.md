# Variables/References

<img src="https://resources.gdevelop-app.com/assets/Icons/variable-box.svg" class="extension-icon"></img>
Adds references and pointers for variables.

**Authors and contributors** to this experimental extension: [arthuro555](https://gd.games/arthuro555).

!!! warning
    This is an extension made by a community member and it only got through a
    light review by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of fully reviewed extensions.

---

Adds actions to use references (variable that redirect any read/write to another variable) and pointers (unique numbers identifying a variable that can be resolved to a reference). Some usages are for callback variables in events based functions (getting a variable with a fixed name referring to a variable with a name passed as parameter), pointers to make advanced data structures like linked lists, and getting a top level variable dynamically.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Create reference to global variable**  
Transforms a scene variable into a reference to a global variable.

??? quote "See parameters & details"

    - Parameter 1 (🗄️ Scene variable): The scene variable to turn into a reference
    - Parameter 2 (🗄️ Global variable): The global variable the reference will refer to

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `References::CreateGlobalReference`.

**Create reference to object variable**  
Transforms a scene variable into a reference to an object's variable.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): The object that possesses the variable to refer to
    - Parameter 2 (🗄️ Scene variable): The scene variable to turn into a reference
    - Parameter 3 (🗄️ Object variable): The object variable the reference will refer to

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `References::CreateObjectReference`.

**Create reference to scene variable**  
Transforms a scene variable into a reference to another scene variable.

??? quote "See parameters & details"

    - Parameter 1 (🗄️ Scene variable): The scene variable to turn into a reference
    - Parameter 2 (🗄️ Scene variable): The scene variable the reference will refer to

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `References::CreateReference`.





---

*This page is an auto-generated reference page about the **Variables/References** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).