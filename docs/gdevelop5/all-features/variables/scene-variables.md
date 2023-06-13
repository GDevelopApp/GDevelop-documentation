---
title: Scene variables
---
# Scene variables

Scene variables:

- are stored in memory for as long as a scene is active
- can only be accessed from within the current scene

They're useful for storing data that doesn't need to be shared between different scenes, such as the number of enemies in the scene. They're deleted from memory when the player changes scenes.

## Creating scene variables

1. Open the [Scene editor](/gdevelop5/interface/scene-editor).
2. Right click on the scene.
3. Select **Scene properties**.
4. Select **Edit scene variables**.
5. Click **Add**.
6. Enter a name for the variable.
7. (Optional) Enter a default value for the variable.
8. Select **Apply**.

!!! tip

    Variable names should not contain dots (periods) or commas. We recommend using alphanumerical characters.

## Using scene variables in expressions

You can use scene variables in [expressions](/gdevelop5/all-features/expressions). The syntax depends on the data type of the variable. In the examples below, replace the placeholders in angled brackets with the relevant values.

### Number

```javascript
Variable(<variable_name>)
```

### Text

```javascript
VariableString(<variable_name>)
```

### Structure

```javascript
Variable(<parent_variable>.<child_variable>)
VariableString(<parent_variable>.<child_variable>)
```