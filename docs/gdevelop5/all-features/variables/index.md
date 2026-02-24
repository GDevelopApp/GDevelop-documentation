---
title: Variables
---
# Variables

In GDevelop, you can use _variables_ to store temporary data, such as numbers and text. For example, you might use variables to store the player's name, current health, and score.

!!! note

    To learn how to store data that isn't temporary, such as a player's saved progress, refer to [storage](/gdevelop5/all-features/storage).

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/Gh9WPecRnxo" frameborder="0" allowfullscreen></iframe>
</div>

## Data types

All variables have a _data type_. The data type of a variable determines what type of data the variable can contain.

In GDevelop, variables can contain the following types of data:

- Number
- Text
- Structure
- Boolean
- Array

Number, Text and Boolean are *primitive types*: they store a value.
Structure and Array are *collection types*: they store multiple variables.

### Number

A variable with the *Number* data type can contain numeric values, such as `0`, `100`, and `-10`. You can perform mathematical calculations on variables that have this data type, such as multiplication or division.

### Text

A variable with the *Text* data type can contain text, such as the words `Hello world`. In programming languages, this data type is often referred to as a _string_. In this documentation,
the terms *text* and *string* are used interchangeably.

### Boolean

A variable with the *Boolean* data type contains the simplest form of information: either yes or no, 1 or 0, true or false. They are useful as they can be easily toggled.

### Structures and arrays

[Structure and array variables](structures-and-arrays) allow to organize values and access them dynamically.

## Using a variable in expressions

Once a variable is added in the variables editor of a project or a scene, you can simply write its name in an expression to use it. For example, if you have a variable named "Score":

`"Your total points are:" + Score`

For a variable of an object, you write the object name first followed by a dot and the variable name. For example:

`"The player points are" + Player.Points`


!!! info

    If multiple variables or objects have the same name, or if they are conflicting with a parameter (in a function) or a property (in a custom behavior or custom object) the order is as follows:

    - In a scene: Object > Scene Variable > Global Variable,
    - In an extension: Object > Parameter > Property > Shared Property.

    This means if there are conflicting names, the object will always be used in priority. Otherwise, in the events of a scene, it will be a scene variable if it exists, otherwise a global variable if it exists.
    In an extension, the parameter with the given name will be used first, other a property if it exists.

## Scopes

The _scope_ of a variable determines:

- where the variable can be accessed from,
- how long the variable is stored in memory,
- the steps required to create the variable.

In GDevelop, there are three variable scopes:

- [Global](/gdevelop5/all-features/variables/global-variables)
- [Scene](/gdevelop5/all-features/variables/scene-variables)
- [Local to an event](/gdevelop5/all-features/variables/local-variables)
- [Object](/gdevelop5/all-features/variables/object-variables)

Refer to the linked pages for more information about each variable scope.

!!! tip

    Sometimes, in particular in extensions, variables are not recommended because there are better alternatives. For example, in a custom behavior, you can use the properties of the behavior to store data inside the behavior.

## Naming variables

Variable names should not contain dots (periods), commas or spaces. Other characters are also reserved by GDevelop. If you use something forbidden, GDevelop will automatically correct the name you've entered.

## Working in the variables editor

The variables editor supports standard keyboard shortcuts to speed up your workflow:

- **Ctrl+C** (or **Cmd+C**): Copy selected variables
- **Ctrl+X** (or **Cmd+X**): Cut selected variables
- **Ctrl+V** (or **Cmd+V**): Paste variables
- **Delete**: Delete selected variables
- **Ctrl+Z** (or **Cmd+Z**): Undo
- **Ctrl+Y** (or **Cmd+Shift+Z**): Redo

## Debugging variables

When developing a game, bugs can occur because the value of a variable isn't what you expect it to be. If something in your game isn't working and you think the problem might relate to a variable, use GDevelop's debugger to figure out what's wrong.

For more information, refer to [debugger](/gdevelop5/interface/debugger).

## Reference

All actions, conditions and expressions are listed in [the variables reference page](/gdevelop5/all-features/variables/reference/).
