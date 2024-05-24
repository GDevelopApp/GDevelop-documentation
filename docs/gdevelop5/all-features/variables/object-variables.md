---
title: Object variables
---
# Object variables

When you add variables to an object, any instance of the object put on the scene or created during the game will have those variables attached to it. For example, you can have a variable called `Life`` representing the health of the object (or you can use the [Health extension](/gdevelop5/extensions/health)).

Object variables are variables which are:

- stored in memory for as long as a specific instance of an object exists,
- is different for each instance of the object.

They're useful for storing data associated with individual instances of an object, such as the amount of health an enemy has, ammo, etc... They're deleted from memory when the instance is removed from the scene.

!!! note

    The terms _object variable_, _instance variable_, and _object instance variable_ are used interchangeably.

## Creating object variables

1. Open the [Scene editor](/gdevelop5/interface/scene-editor).
2. Open the object editor of the object that you want to add the variable to.
3. Open the **Variables** tab.

In the editor, choose "Add a variable", then enter a name, choose a data type and, optionally, enter a default value for the variable (this will be the value used when the scene starts).

!!! tip

    Variable names should not contain dots (periods), commas or spaces. Other characters are also reserved by GDevelop. If you use something forbidden, GDevelop will automatically correct the name you've entered.

## Using object variables in expressions

You can use object variables in [expressions](/gdevelop5/all-features/expressions). Just write the name of the object, followed by a dot then the name of the variable to use it in a formula. For example: `Player.RemainingPoints`.
