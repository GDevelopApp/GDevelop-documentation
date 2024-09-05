# Variables Reference

Actions, conditions and expressions to handle variables, from simple variables like the player score, the number of remaining lives to complex variables containing arbitrary data like an inventory or the result of a web request. [Read more explanations about it.](/gdevelop5/all-features/variables)

## Actions

**Clear children**  
Remove all the children from the structure or array variable.

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

**Add boolean variable**  
Adds a boolean at the end of an array variable.

**Add variable array value**  
Adds a number at the end of an array variable.

**Add text variable**  
Adds a text (string) at the end of a array variable.

**Add existing variable**  
Adds an existing variable at the end of an array variable.

**Remove variable by index**  
Removes a variable at the specified index of an array variable.

**Remove a child**  
Remove a child from a structure variable.

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
Modify the boolean value of a variable.

**Change boolean variable**  
Modify the boolean value of a global variable.

**Change variable value**  
Modify the number value of a variable.

**Change boolean variable**  
Modify the boolean value of a scene variable.

**Change text variable**  
Modify the text (string) of a variable.

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

**Variable value**  
Compare the boolean value of a variable.

**Boolean variable**  
Compare the boolean value of a global variable.

**Number of children**  
Compare the number of children in a global array variable.

**Child existence**  
Check if the specified child of the global structure variable exists.

**Variable value**  
Compare the number value of a variable.

**Boolean variable**  
Compare the boolean value of a scene variable.

**Number of children**  
Compare the number of children in a scene array variable.

**Variable value**  
Compare the text (string) of a variable.

**Number variable**  
Compare the number value of a global variable.

**Text variable**  
Compare the text (string) of a global variable.

**Number variable**  
Compare the number value of a scene variable.

**Text variable**  
Compare the text (string) of a scene variable.

**Number of children**  
Compare the number of children in an array variable.

**Child existence**  
Check if the specified child of the scene structure variable exists.

**Child existence**  
Check if the specified child of the structure variable exists.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `GlobalVariable()` | Number value of a global variable ||
| `GlobalVariableChildCount()` | Number of children in a global array or structure variable ||
| `GlobalVariableFirstNumber()` | Value of the first element of a global array variable, if it is a number variable ||
| `GlobalVariableFirstString()` | Value of the first element of a global array variable, if it is a text (string) variable. ||
| `GlobalVariableLastNumber()` | Value of the last element of a global array variable, if it is a number variable ||
| `GlobalVariableLastString()` | Value of the last element of a global array variable, if it is a text (string) variable. ||
| `GlobalVariableString()` | Text of a global variable ||
| `SceneVariableFirstNumber()` | Get the value of the first element of a scene array variable, if it is a number. ||
| `SceneVariableFirstString()` | Get the value of the first element of a scene array variable, if it is a text (string). ||
| `SceneVariableLastNumber()` | Get the value of the last element of a scene array variable, if it is a number. ||
| `SceneVariableLastString()` | Get the value of the last element of a scene array variable, if it is a text (string). ||
| `Variable()` | Number value of a scene variable ||
| `VariableChildCount()` | Number of children in a scene array or structure variable ||
| `VariableFirstNumber()` | Get the value of the first element of an array variable, if it is a number. ||
| `VariableFirstString()` | Get the value of the first element of an array variable, if it is a text (string). ||
| `VariableLastNumber()` | Get the value of the last element of an array variable, if it is a number. ||
| `VariableLastString()` | Get the value of the last element of an array variable, if it is a text (string). ||
| `VariableString()` | Text of a scene variable ||

---
*This page is an auto-generated reference page about the **Variables** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).