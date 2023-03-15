---
title: Event functions
---
# Event functions

Advanced control features for functions made with events. 

## Actions

**Set condition return value**  
Set the return value of the Condition events function to either true (condition will pass) or false.

**Set number return value**  
Set the return value of the events function to the specified number (to be used with "Expression" functions).

**Set text return value**  
Set the return value of the events function to the specified text (to be used with "String Expression" functions).

## Conditions

**Compare function parameter value**  
Compare function parameter (also called "argument") value.

**Compare function parameter text**  
Compare function parameter (also called "argument") text.

**Check if a function parameter is set to true (or yes)**  
Check if the specified function parameter (also called "argument") is set to True or Yes. If the argument is a string, an empty string is considered as "false". If it's a number, 0 is considered as "false".

## Expressions

^ Expression ^ Description ^  ^
| `GetArgumentAsNumber(functionParameterName)` | Get function parameter (also called "argument") value. ||
|:::| _functionParameterName_ | Parameter name |
| `GetArgumentAsString(functionParameterName)` | Get function parameter (also called "argument") text. ||
|:::| _functionParameterName_ | Parameter name |

---
*This page is an auto-generated reference page about the **Event functions** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).