---
title: Storage action explained
---
# Storage action explained

When you want to save and load anything in your game you need to use the storage events. Here I explain what each option is for when you want to read and write values in order to help you get started. After reading this I recommend to check out the Save-Load example included with GDevelop.

!!! note

    Storage actions will store all the data into **internal storage**. If you want to write or read from files, read [the page about File system](/gdevelop5/all-features/filesystem) (only for Windows, macOS, Linux).

### Write value

**Storage:** "storagename"

    Name of the storage you want to write a value in to. For example, you may want to store player information in a storage called "player" and game settings in a storage called "settings" or you can just use a single storage to save everything and call it "save" it is up to you how would you like to organize this. If the storage with the name does not exist, GDevelop will create the storage. \<note important\>In case of HTML5, GDevelop is not using the local file system, instead, it uses the web storage to store data

**Group:** "Group name"

can be anything, this is basically a name that you're going to assign to the value, inside the storage. By using groups, you can store multiple values in the same storage. For example, the position of the player can be stored within a group and the life of the player can be stored within another group inside the same storage, so:

Group: "PlayerPositionX" to store the X position of the player

Group: "PlayerLife" to store the life of the player

When you load the value from the storage, you can use the group name to specify, what value you want to read from the storage - in the above case, it can be the X Position of the player or the life or some other value stored in the storage.

**Expression:** the value you want to write into the storage

can be anything, a number such as 12345 or text such as "this is text" or even a variable.

To get the value stored in a variable we need to use *variable expressions* in the field:

**Object variable:**

object_name.Variable(variable_name)

object_name.VariableString(variable_name)

**Scene variable:**

Variable(variable_name)

VariableString(variable_name)

**Global variable:**

GlobalVariable(variable_name)

GlobalVariableString(variable_name)

An important thing you need to keep in mind is that **"Write Value" can be used only to write number** and **"Write Text" can be used only to write text** into the storage, and you need to keep this in mind even when you're using the expressions. The ones with a "String" in the expressions are for calling text variables and the ones without it are for calling number variables.

### Read value

To Read a value from a storage, you need to do basically the same thing:

**Storage:** Enter name of the storage you want to read from

**Group:** enter the name of the group that has the value in the storage

**Scene Variable:** enter the variable name you wish to use to load the value into. Please note, that **it should be a scene variable** and this field expects the actual name of the variable and not an expression. The variable also needs to be added to the variable list in the scene properties followed by selecting the variable from the list. In case, you want to store the value inside a global or object variable, you can use the scene variable to pass the value over to a global or object variable after reading from the storage.

And again, **"Read Value" is to read number only** and **"Read Text" is to read text only**. You also need to remember this when you select the scene variable, to read the value into. The variable has to be a number variable to store a number and text variable to store a text.

#### Examples

!!! note

        **See it in action!** 🎮

    Open these examples online.

- <https://editor.gdevelop.io/?project=example://save-load>
