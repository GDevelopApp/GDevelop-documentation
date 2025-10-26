# Variables Reference

Actions, conditions and expressions to handle variables, from simple variables like the player score, the number of remaining lives to complex variables containing arbitrary data like an inventory or the result of a web request. [Read more explanations about it.](/gdevelop5/all-features/variables)

## Actions

**Clear children**  
Remove all the children from the structure or array variable.

??? quote "See parameters & details"

    - Parameter 0 (🗄️ Any variable): Structure or array variable

    > Technical note: this action internal type (in GDevelop JSON) is `ClearVariableChildren`.

**Add value to array variable**  
Adds a boolean at the end of an array variable.

??? quote "See parameters & details"

    - Parameter 0 (🗄️ Any variable): Array variable
    - Parameter 1 (❓ True or False): Boolean to add

    > Technical note: this action internal type (in GDevelop JSON) is `PushBoolean`.

**Add value to array variable**  
Adds a number at the end of an array variable.

??? quote "See parameters & details"

    - Parameter 0 (🗄️ Any variable): Array variable
    - Parameter 1 (🔢 Number): Number to add

    > Technical note: this action internal type (in GDevelop JSON) is `PushNumber`.

**Add value to array variable**  
Adds a text (string) at the end of a array variable.

??? quote "See parameters & details"

    - Parameter 0 (🗄️ Any variable): Array variable
    - Parameter 1 (string): Text to add

    > Technical note: this action internal type (in GDevelop JSON) is `PushString`.

**Add existing variable**  
Adds an existing variable at the end of an array variable.

??? quote "See parameters & details"

    - Parameter 0 (🗄️ Any variable): Array variable
    - Parameter 1 (🗄️ Any variable): Variable with the content to add
      The content of the variable will *be copied* and added at the end of the array.

    > Technical note: this action internal type (in GDevelop JSON) is `PushVariable`.

**Remove variable by index**  
Removes a variable at the specified index of an array variable.

??? quote "See parameters & details"

    - Parameter 0 (🗄️ Any variable): Array variable
    - Parameter 1 (🔢 Number): Index to remove

    > Technical note: this action internal type (in GDevelop JSON) is `RemoveVariableAt`.

**Remove a child**  
Remove a child from a structure variable.

??? quote "See parameters & details"

    - Parameter 0 (🗄️ Any variable): Structure variable
    - Parameter 1 (string): Child's name

    > Technical note: this action internal type (in GDevelop JSON) is `RemoveVariableChild`.

**Change variable value**  
Modify the boolean value of a variable.

??? quote "See parameters & details"

    - Parameter 0 (variableOrProperty): Variable
    - Parameter 1: 🟰 Operator

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `SetBooleanVariable`.

**Change variable value**  
Modify the number value of a variable.

??? quote "See parameters & details"

    - Parameter 0 (variableOrProperty): Variable
    - Parameter 1: 🟰 Operator
    - Parameter 2 (🔢 Number): Value

    > Technical note: this action internal type (in GDevelop JSON) is `SetNumberVariable`.

**Change variable value**  
Modify the text (string) of a variable.

??? quote "See parameters & details"

    - Parameter 0 (variableOrProperty): Variable
    - Parameter 1: 🟰 Operator
    - Parameter 2 (string): Value

    > Technical note: this action internal type (in GDevelop JSON) is `SetStringVariable`.

## Conditions

**Variable value**  
Compare the boolean value of a variable.

??? quote "See parameters & details"

    - Parameter 0 (variableOrPropertyOrParameter): Variable
    - Parameter 1 (❓ True or False): Check if the value is

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `BooleanVariable`.

**Variable value**  
Compare the number value of a variable.

??? quote "See parameters & details"

    - Parameter 0 (variableOrPropertyOrParameter): Variable
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `NumberVariable`.

**Variable value**  
Compare the text (string) of a variable.

??? quote "See parameters & details"

    - Parameter 0 (variableOrPropertyOrParameter): Variable
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (string): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `StringVariable`.

**Number of children**  
Compare the number of children in an array variable.

??? quote "See parameters & details"

    - Parameter 0 (🗄️ Any variable): Array variable
    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare

    > Technical note: this condition internal type (in GDevelop JSON) is `VariableChildCount`.

**Child existence**  
Check if the specified child of the structure variable exists.

??? quote "See parameters & details"

    - Parameter 0: 🗄️ Any variable
    - Parameter 1 (string): Name of the child

    > Technical note: this condition internal type (in GDevelop JSON) is `VariableChildExists2`.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `VariableChildCount(variable)` | Number of children in a scene array or structure variable ||
| | _🗄️ Any variable_ | Array or structure variable |
| `VariableFirstNumber(variable)` | Get the value of the first element of an array variable, if it is a number. ||
| | _🗄️ Any variable_ | Array variable |
| `VariableFirstString(variable)` | Get the value of the first element of an array variable, if it is a text (string). ||
| | _🗄️ Any variable_ | Array variable |
| `VariableLastNumber(variable)` | Get the value of the last element of an array variable, if it is a number. ||
| | _🗄️ Any variable_ | Array variable |
| `VariableLastString(variable)` | Get the value of the last element of an array variable, if it is a text (string). ||
| | _🗄️ Any variable_ | Array variable |



---

The Variables extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **Variables** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).