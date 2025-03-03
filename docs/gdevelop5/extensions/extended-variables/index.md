# Extended variables support

<img src="https://resources.gdevelop-app.com/assets/Icons/variable-box.svg" class="extension-icon"></img>
Add conditions, actions and expressions to check for the existence of a variable, copy variables, delete existing ones from memory, and create dynamic variables.

**Authors and contributors** to this community extension: [Bouh](https://gd.games/Bouh), [D8H](https://gd.games/D8H).

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

**Copy a global variable to scene**  
Copy the global variable to scene. This copy everything from the types to the values.

**Copy an object variable**  
Copy the object variable from one object to another.

**Copy a scene variable to global **  
Copy the scene variable to global. This copy everything from the types to the values.

**Delete global variable**  
Delete the global variable, removing it from memory.

**Delete object variable**  
Delete an object variable, removing it from memory.

**Delete scene variable**  
Delete the scene variable, the variable will be deleted from the memory.

**Value of a global variable**  
Modify the value of a global variable.

**String of a global variable**  
Modify the text of a global variable.

**Value of a scene variable**  
Modify the value of a scene variable.

**String of a scene variable**  
Modify the text of a scene variable.

## Conditions

**Global variable exists**  
Check if the global variable exists.

**Object variable exists**  
Check if an object variable exists.

**Scene variable exists**  
Check if the scene variable exists.

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