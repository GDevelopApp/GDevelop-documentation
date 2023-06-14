---
title: Object variables
---
# Object variables

When you add variables to an object, any instance of the object put on the scene or created during the game will have those variables attached to it. Ex: you can have a variable called Life representing the health of the object.

Object variables:

  - are stored in memory for as long as a specific instance of an object exists.
  - can be accessed by the instance of the object.

They're useful for storing data associated with individual instances of an object, such as the amount of health an enemy has. They're deleted from memory when the instance is removed from the scene.

!!! note

    The terms _object variable_, _instance variable_, and _object instance variable_ are used interchangeably.

## Creating object variables

1. Open the [Scene editor](/gdevelop5/interface/scene-editor).
2. Open the object editor of the object that you want to add the variable to.
3. Open the **Variables** tab.
4. Click **Add**.
5. Enter a name for the variable.
6. (Optional) Enter a default value for the variable.
7. Select **Apply**.

!!! tip

    Variable names should not contain dots (periods) or commas. We recommend using alphanumerical characters.

## Using object variables in expressions

You can use object variables in [expressions](/gdevelop5/all-features/expressions). The syntax depends on the data type of the variable. In the examples below, replace the placeholders in angled brackets with the relevant values.

### Number

```javascript
<object_name>.Variable(<variable_name>)
```

### Text

```javascript
<object_name>.VariableString(<variable_name>)
```

### Structure

```javascript
<object_name>.Variable(<parent_variable>.<child_variable>)
<object_name>.VariableString(<parent_variable>.<child_variable>)
```