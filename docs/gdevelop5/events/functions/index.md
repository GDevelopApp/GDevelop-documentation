---
title: Functions - create your own actions, conditions or expressions
---
# Functions: create your own actions, conditions or expressions

Similarly to a scene or [external events](/gdevelop5/interface), functions are written with events. They allow to create new conditions, new actions and new expressions that adds up to GDevelop features. They are a good way to organize events, avoid duplication and share features with the community.

!!! tip

    See an example of [replacing external events by functions](/gdevelop5/events/functions/replace-external-events). Events can be automatically [extracted as a function](/gdevelop5/events/functions/extract-events)**.

!!! tip

    See an example of functions being used in [this video by gamefromscratch](https://www.youtube.com/watch?v=BQO9DDXdkjs).

![type:video](https://www.youtube.com/embed/-U8WFcpUmMg)

## Create a new function

Functions are grouped into [extensions](/gdevelop5/extensions). They are the same as [the extensions that can be installed](/gdevelop5/extensions/search). Extensions of a project are listed in the [Project Manager](/gdevelop5/interface/project-manager).

![](/gdevelop5/extensions/create/pasted/20230305-115305.png)

Click on **Create or search for new extensions** at the bottom. Then, select **Create a new extension** to [create a new extension](/gdevelop5/extensions/create).

By default, extensions don't have any function. Add one by clicking on **Add a new function** on the left:

![](pasted/20221118-093435.png)

A new function is added, it's time to give it a name. By convention:

- actions start with a verb for instance `Jump`
- conditions start with `Is` for instance `IsJumping`
- expressions don't have any verb for instance `JumpSpeed`

## Describe a function

Selecting a function displays its events and a few fields at the top.

* **Function type** - actions and conditions can be used in [events](/gdevelop5/events/) and expressions can be used in formulas.
* **Full name** - The name displayed in the list of actions (or conditions, or expressions).
* **Group name** - A title to group actions in lists.
* **Description** - To explain to extension users what the action does and how to use it.
* **Sentence** - This one is specific to actions and conditions. It's the sentence displayed in the events.

Parameters can be inserted in the sentence by writing `_PARAMx_` between underscores where `x` must be replaced by the parameter number (starting from 1).

![](pasted/20221118-093605.png)

## Add parameters

Function parameters let extension user give some values that can be used by the function events.

They can be added from the **Parameter** tab. Each of them requires:

  * **Name** - the identifier used in the function events to access to the parameter value.
  * **Type**  - either object, number or text (see the [list of all types](/gdevelop5/events/functions/#references-of-parameters)).
  * **Label** - shown to extension users when filling the parameter values.

![](pasted/20221118-093700.png)

!!! note

    Parameters can also be used in Javascript events, learn more about it in the [JavaScript Code events](/gdevelop5/events/js-code#use_javascript_to_get_a_value_from_parameters) page.

## Write function events

Events can be added to functions. These events are executed when the function is used in other event sheets. Which means through its condition, action or expression depending of the function type.

### Use parameters in function events

#### Use object parameters

Only the objects from the function parameters can be used in a function. Scene objects don't appear in the object list because a function can be used in several scenes and even different projects.

When **Any object** is selected for the **object type**, the object can be used with a limited set of actions and conditions. Choosing a specific object type gives additional actions and conditions.

![](pasted/20221118-093830.png)

Conditions and actions from behaviors can also be used in functions events. For this, behavior parameters must be added after an object parameter.

#### Use parameter values

A number, string and boolean parameter values can be compare with conditions.

![](functionn-parameter-condition.png)

Parameters can also be used directly in expressions by writing their name. For instance, a parameter called "ScoreToMultiply" can be used the following: `2 * ScoreToMultiply`.

!!! note

    In previous versions of GDevelop, the expressions `GetArgumentAsNumber` or `GetArgumentAsString` were used to access parameter values. Some old extensions may still use them even though they are no longer necessary.

Here is an example of a text parameter that will get a scene name, which is then used in an action for changing the scene.

![](function_text_expression.png)

### Return a value from a function

Function that are conditions or expressions must return a value. The returned value can be chosen with 3 actions from the **Functions** category:

- Conditions return a boolean value, either true or false, using the **Set condition return value** action.
- Numerical expressions return a number using the **Set number return value** action.
- String expressions return text using the **Set text return value** action.

![](function-return-action.png)

### Use variables from function events

Variable can be useful within functions for intermediary results or to keep a state in the extension.
From function events, expressions must be used to access variable values:

- `GlobalVariable(MyVariable)` for global variables
- `Variable(MyVariable)` for scene variables
- `MyObject.Variable(MyVariable)` for object variables

## Use functions in events

Extension functions can be found in conditions and actions lists like any other feature of the engine.

![](pasted/20221118-094110.png)

## Advanced usages

This page gave a basic overview of what functions are. They are one of the more powerful features of GDevelop, as you can extend the events by using them, enabling to create very readable and concise events sheets. By using them, you can reduce the amounts of events that you write for your game, avoid copy-pasting them and even reduce bugs by ensuring that functions are always used for common tasks on your objects.

!!! tip

    Functions that focus on an object can be grouped together in [custom behaviors](/gdevelop5/behaviors/events-based-behaviors/). It allows one step further to better organize a project.

### Avoid event duplication in functions

* **Links** are not available in functions, because a function is autonomous and is in theory not even tied to a project, but function can use other functions.

### Recursive functions

A function can call itself! In the events of a function, you can use the same action/condition/expression as in the rest of the game. This is called a "recursive" function.

!!! warning

    Be very careful when writing a recursive function. If you don't add conditions, the function could call itself infinitely, blocking your game.

You can [use the actions in "Functions" category to return expression/condition values](/gdevelop5/events/functions/return).

### Sharing functions

Functions can be shared across projects (like actions/conditions that are built in GDevelop). The simplest way to do it is just to copy/paste them. But if you've created a useful set of functions, you may consider [sharing them with the community](/gdevelop5/extensions/share-extension).

!!! tip

    See [an example of replacing external events by a function](/gdevelop5/events/functions/replace-external-events), which is reusable and shareable. You can also **[automatically extract events to a function](/gdevelop5/events/functions/extract-events)**.


## References of parameters

Parameters in function can be various:

| Type                          | Data type    | Description                                               | Scope |
|-------------------------------|--------------|-----------------------------------------------------------|-------|
| [Objects](/gdevelop5/objects) | Objects list | A list of objects                                         | Condition, action |
| [Behavior](/gdevelop5/behaviors) | Behavior  | The behavior from an object                               | Condition, action |
| Expression                    | Number       | Integer or float                                          | Condition, action, expression |
| String                        | Text         | Just a text                                               | Condition, action, expression |
| String from a list of options | Text         | A list of multiple text                                   | Condition, action, expression |
| Keyboard Key                  | Text         | Let extension users choose a key from a list              | Condition, action, expression |
| Mouse button                  | Text         | A list of buttons                                         | Condition, action, expression |
| Color                         | Text         | The color in RGB. Format: `"255;255;255"`                 | Condition, action, expression |
| Layer                         | Text         | The name of a layer                                       | Condition, action, expression |
| Scene name                    | Text         | The name of a scene                                       | Condition, action, expression |
| Yes or No                     | Boolean      | A boolean value                                           | Condition, action |
| True or False                 | Boolean      | A boolean value                                           | Condition, action |
| [Object point](/gdevelop5/objects/sprite/edit-points) | Text         | The name of an point from an object | Condition, action, expression |
| [Object animation](/gdevelop5/objects/sprite/#adding-an-animation) | Text         | The name of an animation from an object | Condition, action, expression |
| [Identifier](/gdevelop5/events/functions#identifier-parameter) | Text         | Allow the auto-complete to suggest previously used values | Condition, action, expression |
| Scene variable              | Scene variable | The value from a scene variable          | Condition, action, expression |
| Created objects             | Objects list | A list of objects just created             | Condition, action |
| Image resource              | Text | The name of the image resource                     | The value of the parameter can only be read from a JavaScript code event. ([Read how](/gdevelop5/events/functions#resource-parameter)) |
| Audio resource              | Text | The name of the audio resource                     | The value of the parameter can only be read from a JavaScript code event. ([Read how](/gdevelop5/events/functions#resource-parameter)) |
| JSON resource               | Text | The name of the JSON resource                      | The value of the parameter can only be read from a JavaScript code event. ([Read how](/gdevelop5/events/functions#resource-parameter)) |
| Font resource               | Text | The name of the Font resource                      | The value of the parameter can only be read from a JavaScript code event. ([Read how](/gdevelop5/events/functions#resource-parameter)) |
| Bitmap font resource        | Text | The name of the Bitmap font resource               | The value of the parameter can only be read from a JavaScript code event. ([Read how](/gdevelop5/events/functions#resource-parameter)) |



### Identifier parameter

This parameter enables auto-completion for previously entered values from other events with the same identifier name and scope.

#### Scopes

- **Object** - To suggest previously used values on the same object.
- **Scene** - To suggest previously used values from the scene events.

#### Identifier name

Every parameter with the same identifier name share their values for the autocompletion.

### Resource parameter

These parameters can be, an image, an audio file, a JSON, a font, and a bitmap font. This parameter will return the name of the resource visible in the resource tab.
The returned value will be only available by getting the value in a JavaScript code events with [this method](/gdevelop5/events/js-code/#use-javascript-to-get-the-value-of-a-parameter-of-a-function).
