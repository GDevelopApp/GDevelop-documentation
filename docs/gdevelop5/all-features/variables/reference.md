# Variables Reference

Actions, conditions and expressions to handle variables, from simple variables like the player score, the number of remaining lives to complex variables containing arbitrary data like an inventory or the result of a web request. [Read more explanations about it.](/gdevelop5/all-features/variables)

## Actions

**Clear children**  
Remove all the children from the structure or array variable.

**Add value to array variable**  
Adds a boolean at the end of an array variable.

**Add value to array variable**  
Adds a number at the end of an array variable.

**Add value to array variable**  
Adds a text (string) at the end of a array variable.

**Add existing variable**  
Adds an existing variable at the end of an array variable.

**Remove variable by index**  
Removes a variable at the specified index of an array variable.

**Remove a child**  
Remove a child from a structure variable.

**Change variable value**  
Modify the boolean value of a variable.

**Change variable value**  
Modify the number value of a variable.

**Change variable value**  
Modify the text (string) of a variable.

## Conditions

**Variable value**  
Compare the boolean value of a variable.

**Variable value**  
Compare the number value of a variable.

**Variable value**  
Compare the text (string) of a variable.

**Number of children**  
Compare the number of children in an array variable.

**Child existence**  
Check if the specified child of the structure variable exists.

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