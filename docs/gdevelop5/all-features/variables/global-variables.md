---
title: Global variables
---
# Global variables

Global variables:

  - are stored in memory for as long as the game is running
  - can be accessed from any scene in the game

They're useful for storing data that the entire game needs access to at all times, such as the player's score. They're only deleted from memory when the player quits the game.

## Creating global variables

1. Open the [project manager](/gdevelop5/interface/project-manager).
2. Expand the **Game settings** panel.
3. Select **Global variables**.
4. Click **Add**.
5. Enter a name for the variable.
6. (Optional) Enter a default value for the variable.
7. Select **Apply**.

!!! tip

    Variable names should not contain dots (periods) or commas. We recommend using alphanumerical characters.

## Using global variables in expressions

You can use global variables in [expressions](/gdevelop5/all-features/expressions). The syntax depends on the data type of the variable. In the examples below, replace the placeholders in angled brackets with the relevant values.

### Number

```javascript
GlobalVariable(<variable_name>)
```

### Text

```javascript
GlobalVariableString(<variable_name>)
```

### Structure

```javascript
GlobalVariable(<parent_variable>.<child_variable>)
GlobalVariableString(<parent_variable>.<child_variable>)
```