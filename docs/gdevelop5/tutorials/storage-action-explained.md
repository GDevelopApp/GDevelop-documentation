---
title: Storage actions
---
# Storage actions

Everytime a game loads, variables are created with their initial values. This means that variables cannot be used to store data between game sessions.
Instead, storage actions can be used to save data and then load it when the game starts.

To see this in action, review the *[Save-Load example](https://editor.gdevelop.io/?project=example://save-load)* included with GDevelop.

!!! note

    Storage actions will store all the data into **internal storage**. If you want to write or read from files, read [the page about File system](/gdevelop5/all-features/filesystem) (only for Windows, macOS, Linux).

## Write value

### **Storage:** "storagename"

Name of the storage you want to write a value in to. For example, you may want to store player information in a storage called "player" and game settings in a storage called "settings" or you can just use a single storage to save everything and call it "save" it is up to you how would you like to organize this. If the storage with the name does not exist, GDevelop will create the storage. \<note important\>In case of HTML5, GDevelop is not using the local file system, instead, it uses the web storage to store data

### **Group:** "Group name"

Group name can be used to organize the data that is being saved. This makes it easier to understand when there is a lot of data being stored in the same storage. For example, the position of the player can be stored within a group name and the life of the player can be stored within another group name inside the same storage:

  - Group: "PlayerPositionX" to store the X position of the player
  - Group: "PlayerLife" to store the life of the player

### **Expression:** the value you want to write into the storage

Expression is used to specify the value of the data.  For instance, the number 12345, a string "this is text", or even the value of a variable.
To get the value stored in a variable we need to use *variable expressions* in the field:

#### **Object variable:**

  - object_name.Variable(variable_name)
  - object_name.VariableString(variable_name)

#### **Scene variable:**

  - Variable(variable_name)
  - VariableString(variable_name)

#### **Global variable:**

  - GlobalVariable(variable_name)
  - GlobalVariableString(variable_name)

Be aware that **"Write Value" can be used only to write numbers** and **"Write Text" can be used only to write text** into the storage. Be sure that the variable type matches the type used in the storage action.

## Read value

To Read a value from a storage, you need to do basically the same thing:

**Storage:** Enter name of the storage you want to read from

**Group:** enter the name of the group that has the value in the storage

**Scene Variable:** enter the variable name you wish to use to load the value into. Please note, that **it should be a scene variable** and this field expects the actual name of the variable and not an expression. The variable also needs to be added to the variable list in the scene properties followed by selecting the variable from the list. In case, you want to store the value inside a global or object variable, you can use the scene variable to pass the value over to a global or object variable after reading from the storage.

And again, **"Read Value" is to read number only** and **"Read Text" is to read text only**. You also need to remember this when you select the scene variable, to read the value into. The variable has to be a number variable to store a number and text variable to store a text.

## Examples

!!! note

        **See it in action!** 🎮

    Open these examples online.

  - <https://editor.gdevelop.io/?project=example://save-load>
