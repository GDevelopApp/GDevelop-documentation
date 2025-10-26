# Extended variables support

<img src="https://resources.gdevelop-app.com/assets/Icons/variable-box.svg" class="extension-icon"></img>
Add conditions, actions and expressions to check for the existence of a variable, copy variables, delete existing ones from memory, and create dynamic variables.

**Authors and contributors** to this experimental extension: [Bouh](https://gd.games/Bouh), [D8H](https://gd.games/D8H).

---

This extension provides: 

- Conditions to check if a global/scene/object variable exists.
- Actions to copy object variables, global and scene variables.
- Actions to delete an existing global/scene variable from memory.
- Actions to create a global/scene variable using a text expression, rather than a variable name input.
- Expressions to get the value or text from a global/scene variable using a text expression, rather than a variable name.

Text expressions allows to enter the name of the variable with an expression like `"MyVar"+ ToString(Variable(Health))`

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

**Copy a global variable to scene**  
Copy the global variable to scene. This copy everything from the types to the values.

??? quote "See parameters & details"

    - Parameter 1 (string): Global variable to copy
    - Parameter 2 (string): Scene variable destination
    - Parameter 3 (❓ Yes or No): Clear the destination variable before copying

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ExtendedVariables::CopyGlobalVariableToScene`.

**Copy an object variable**  
Copy the object variable from one object to another.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Source object
    - Parameter 2 (string): Variable to copy
    - Parameter 3 (👾 Object): Destination object
      To copy the variable between 2 instances of the same object, the variable has to be copied to another object first.
    - Parameter 4 (string): Destination variable
    - Parameter 5 (❓ Yes or No): Clear the destination variable before copying

    > Technical note: parameters 0, 6 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ExtendedVariables::CopyObjectVariable`.

**Copy a scene variable to global **  
Copy the scene variable to global. This copy everything from the types to the values.

??? quote "See parameters & details"

    - Parameter 1 (string): Scene variable to copy
    - Parameter 2 (string): Global variable destination
    - Parameter 3 (❓ Yes or No): Clear the destination variable before copying

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ExtendedVariables::CopySceneVariableToGlobal`.

**Delete global variable**  
Delete the global variable, removing it from memory.

??? quote "See parameters & details"

    - Parameter 1 (string): Name of the global variable to delete

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ExtendedVariables::DeleteGlobalVariable`.

**Delete object variable**  
Delete an object variable, removing it from memory.

??? quote "See parameters & details"

    - Parameter 1: 👾 Object
    - Parameter 2 (string): Name of object variable

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ExtendedVariables::DeleteObjectVariable`.

**Delete scene variable**  
Delete the scene variable, the variable will be deleted from the memory.

??? quote "See parameters & details"

    - Parameter 1 (string): Name of the scene variable to delete

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ExtendedVariables::DeleteSceneVariable`.

**Value of a global variable**  
Modify the value of a global variable.

??? quote "See parameters & details"

    - Parameter 1 (string): Name of the global variable
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ExtendedVariables::ModifyGlobalVariable`.

**String of a global variable**  
Modify the text of a global variable.

??? quote "See parameters & details"

    - Parameter 1 (string): Name of the global variable
    - Parameter 2 (string): Value

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ExtendedVariables::ModifyGlobalVariableString`.

**Value of a scene variable**  
Modify the value of a scene variable.

??? quote "See parameters & details"

    - Parameter 1 (string): Name of the scene variable
    - Parameter 2 (🔢 Number): Value

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ExtendedVariables::ModifySceneVariable`.

**String of a scene variable**  
Modify the text of a scene variable.

??? quote "See parameters & details"

    - Parameter 1 (string): Name of the scene variable
    - Parameter 2 (string): Value

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ExtendedVariables::ModifySceneVariableString`.

## Conditions

**Global variable exists**  
Check if the global variable exists.

??? quote "See parameters & details"

    - Parameter 1 (string): Name of the global variable

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ExtendedVariables::GlobalVariableExist`.

**Object variable exists**  
Check if an object variable exists.

??? quote "See parameters & details"

    - Parameter 1: 👾 Object
    - Parameter 2 (string): Name of object variable

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ExtendedVariables::ObjectVariableExist`.

**Scene variable exists**  
Check if the scene variable exists.

??? quote "See parameters & details"

    - Parameter 1 (string): Name of the scene variable

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ExtendedVariables::SceneVariableExist`.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `ExtendedVariables::GlobalVariable(string)` | Return the value of a global variable. ||
| | _string_ | Name of the global variable |
| `ExtendedVariables::GlobalVariableString(string)` | Return the text of a global variable. ||
| | _string_ | Name of the global variable |
| `ExtendedVariables::Variable(string)` | Return the value of a scene variable. ||
| | _string_ | Name of the scene variable |
| `ExtendedVariables::VariableString(string)` | Return the text of a scene variable. ||
| | _string_ | Name of the scene variable |


---

*This page is an auto-generated reference page about the **Extended variables support** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).