# Variables copier

<img src="https://resources.gdevelop-app.com/assets/Icons/variable-box.svg" class="extension-icon"></img>
Copy structure and array variables.

**Authors and contributors** to this experimental extension: [Bouh](https://gd.games/Bouh), [D8H](https://gd.games/D8H).

---

Copy all the children of a structure or an array into another variable.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Copy all object variables**  
Copy all object variables from one object to another.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Source object
    - Parameter 2 (👾 Object): Destination object
    - Parameter 3 (❓ Yes or No): Clear the destination variable before copying

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ExtendedVariables::CopyAllObjectVariables`.

**Copy an object variable**  
Copy the object variable from one object to another.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Source object
    - Parameter 2 (🔤 String): Variable to copy
    - Parameter 3 (👾 Object): Destination object
      To copy the variable between 2 instances of the same object, the variable has to be copied to another object first.
    - Parameter 4 (🔤 String): Destination variable
    - Parameter 5 (❓ Yes or No): Clear the destination variable before copying

    > Technical note: parameters 0, 6 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ExtendedVariables::CopyObjectVariable`.

**Copy a variable**  
Copy all the chidren of a variable into another variable.

??? quote "See parameters & details"

    - Parameter 1 (🗄️ Any variable): Variable to copy
    - Parameter 2 (🗄️ Any variable): Destination variable
    - Parameter 3 (❓ Yes or No): Clear the destination variable before copying

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ExtendedVariables::CopyVariable`.





---

*This page is an auto-generated reference page about the **Variables copier** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).