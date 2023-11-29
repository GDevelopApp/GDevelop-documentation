# Variables

Actions, conditions and expressions to handle variables, from simple variables like the player score, the number of remaining lives to complex variables containing arbitrary data like an inventory or the result of a web request. [Read more explanations about it.](/gdevelop5/all-features/variables)

## Actions

**Clear children**  
Remove all the children from the global structure or array variable.

**Add existing variable**  
Adds an existing variable at the end of a global array variable.

**Add boolean variable**  
Adds a boolean at the end of a global array variable.

**Add number variable**  
Adds a number at the end of a global array variable.

**Add text variable**  
Adds a text (string) at the end of a global array variable.

**Remove variable by index**  
Removes a variable at the specified index of a global array variable.

**Remove a child**  
Remove a child from a global structure variable.

**Change number variable**  
Modify the number value of a global variable.

**Change text variable**  
Modify the text (string) of a global variable.

**Change number variable**  
Modify the number value of a scene variable.

**Change text variable**  
Modify the text (string) of a scene variable.

**Add existing variable**  
Adds an existing variable at the end of a scene array variable.

**Add boolean variable**  
Adds a boolean at the end of a scene array variable.

**Add number variable**  
Adds a number at the end of a scene array variable.

**Add text variable**  
Adds a text (string) at the end of a scene array variable.

**Remove variable by index**  
Removes a variable at the specified index of a scene array variable.

**Change boolean variable**  
Modify the boolean value of a global variable.

**Change boolean variable**  
Modify the boolean value of a scene variable.

**Toggle boolean variable**  
Toggle the boolean value of a global variable.  
If it was true, it will become false, and if it was false it will become true.

**Toggle boolean variable**  
Toggle the boolean value of a scene variable.  
If it was true, it will become false, and if it was false it will become true.

**Clear children**  
Remove all the children from the scene structure or array variable.

**Remove a child**  
Remove a child from a scene structure variable.

## Conditions

**Boolean variable**  
Compare the boolean value of a global variable.

**Number of children**  
Compare the number of children in a global array variable.

**Child existence**  
Check if the specified child of the global structure variable exists.

**Boolean variable**  
Compare the boolean value of a scene variable.

**Number of children**  
Compare the number of children in a scene array variable.

**Number variable**  
Compare the number value of a global variable.

**Text variable**  
Compare the text (string) of a global variable.

**Number variable**  
Compare the number value of a scene variable.

**Text variable**  
Compare the text (string) of a scene variable.

**Child existence**  
Check if the specified child of the scene structure variable exists.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `GlobalVariable(global variable)` | Number value of a global variable ||
| | _🗄️ Global variable_ | Name of the global variable |
| `GlobalVariableChildCount(global variable)` | Number of children in a global array or structure variable ||
| | _🗄️ Global variable_ | Array or structure variable |
| `GlobalVariableFirstNumber(global variable)` | Value of the first element of a global array variable, if it is a number variable ||
| | _🗄️ Global variable_ | Array variable |
| `GlobalVariableFirstString(global variable)` | Value of the first element of a global array variable, if it is a text (string) variable. ||
| | _🗄️ Global variable_ | Array variable |
| `GlobalVariableLastNumber(global variable)` | Value of the last element of a global array variable, if it is a number variable ||
| | _🗄️ Global variable_ | Array variable |
| `GlobalVariableLastString(global variable)` | Value of the last element of a global array variable, if it is a text (string) variable. ||
| | _🗄️ Global variable_ | Array variable |
| `GlobalVariableString(global variable)` | Text of a global variable ||
| | _🗄️ Global variable_ | Variable |
| `SceneVariableFirstNumber(scene variable)` | Get the value of the first element of a scene array variable, if it is a number. ||
| | _🗄️ Scene variable_ | Array variable |
| `SceneVariableFirstString(scene variable)` | Get the value of the first element of a scene array variable, if it is a text (string). ||
| | _🗄️ Scene variable_ | Array variable |
| `SceneVariableLastNumber(scene variable)` | Get the value of the last element of a scene array variable, if it is a number. ||
| | _🗄️ Scene variable_ | Array variable |
| `SceneVariableLastString(scene variable)` | Get the value of the last element of a scene array variable, if it is a text (string). ||
| | _🗄️ Scene variable_ | Array variable |
| `Variable(scene variable)` | Number value of a scene variable ||
| | _🗄️ Scene variable_ | Variable |
| `VariableChildCount(scene variable)` | Number of children in a scene array or structure variable ||
| | _🗄️ Scene variable_ | Array or structure variable |
| `VariableString(scene variable)` | Text of a scene variable ||
| | _🗄️ Scene variable_ | Variable |

---
*This page is an auto-generated reference page about the **Variables** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).