# Event functions Reference

Advanced control features for functions made with events. 

## Actions

**Copy function parameter to variable**  
Copy a function parameter (also called "argument") to a variable. The parameter type must be a variable.

??? quote "See parameters & details"

    - Parameter 0 (🔤 Function Parameter Name (String)): Parameter name
    - Parameter 1: 🗄️ Any variable

    > Technical note: this action internal type (in GDevelop JSON) is `CopyArgumentToVariable2`.

**Copy variable to function parameter**  
Copy a variable to function parameter (also called "argument"). The parameter type must be a variable.

??? quote "See parameters & details"

    - Parameter 0 (🔤 Function Parameter Name (String)): Parameter name
    - Parameter 1: 🗄️ Any variable

    > Technical note: this action internal type (in GDevelop JSON) is `CopyVariableToArgument2`.

**Set condition return value**  
Set the return value of the Condition events function to either true (condition will pass) or false.

??? quote "See parameters & details"

    - Parameter 0 (❓ True or False): Should the condition be true or false?

    > Technical note: this action internal type (in GDevelop JSON) is `SetReturnBoolean`.

**Set number return value**  
Set the return value of the events function to the specified number (to be used with "Expression" functions).

??? quote "See parameters & details"

    - Parameter 0 (🔢 Number): The number to be returned

    > Technical note: this action internal type (in GDevelop JSON) is `SetReturnNumber`.

**Set text return value**  
Set the return value of the events function to the specified text (to be used with "String Expression" functions).

??? quote "See parameters & details"

    - Parameter 0 (string): The text to be returned

    > Technical note: this action internal type (in GDevelop JSON) is `SetReturnString`.





---

The Event functions extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **Event functions** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).