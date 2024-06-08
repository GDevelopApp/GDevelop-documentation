---
title: Scene variables
---
# Scene variables

Scene variables are [variables](/gdevelop5/all-features/variables) which are:

- stored in memory for the duration of a scene,
- can only be accessed from within the current scene.

They're useful for storing data that doesn't need to be shared between different scenes, such as the number of targets remaining in the level. They're deleted from memory when the player changes scenes.

## Creating scene variables

1. Open the [Scene editor](/gdevelop5/interface/scene-editor).
2. Right click on the scene.
3. Select **Scene properties**.
4. Select **Edit scene variables**.

In the editor, choose "Add a variable", then enter a name, choose a data type and, optionally, enter a default value for the variable (this will be the value used when the scene starts).

!!! tip

    Variable names should not contain dots (periods), commas or spaces. Other characters are also reserved by GDevelop. If you use something forbidden, GDevelop will automatically correct the name you've entered.

## Using scene variables in expressions

You can use scene variables in [expressions](/gdevelop5/all-features/expressions). Just write the name of the variable to use it in a formula. Note that if an object is using the same name, it will take the priority over the scene variable.
