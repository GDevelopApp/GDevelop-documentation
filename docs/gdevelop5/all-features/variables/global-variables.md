---
title: Global variables
---
# Global variables

Global variables are [variables](/gdevelop5/all-features/variables) which are:

- stored in memory for as long as the game is running,
- can be accessed from any scene in the game.

They're useful for storing data that the entire game needs access to at all times, such as the player's score. They're only deleted from memory when the player quits the game.

## Creating global variables

1. Open the [project manager](/gdevelop5/interface/project-manager).
3. Select **Global variables** in **Game settings**.

In the editor, choose "Add a variable", then enter a name, choose a data type and, optionally, enter a default value for the variable (this will be the value used when the game starts).

!!! tip

    Variable names should not contain dots (periods), commas or spaces. Other characters are also reserved by GDevelop. If you use something forbidden, GDevelop will automatically correct the name you've entered.

## Using global variables in expressions

You can use global variables in [expressions](/gdevelop5/all-features/expressions). Just write the name of the variable to use it in a formula. Note that if a scene variable, an object or a parameter, in a function, is using the same name, it will take the priority over the global variable.
