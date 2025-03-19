---
title: Extension Best Practices
---
# Extension Best Practices

These are some guidelines that make extensions easy to use, modify and update. They have to be respected to [be submitted to the community](/gdevelop5/extensions/share-extension).

## Fill extension options

### Name extensions

The extension name is sensitive to the case. The extension name should be written in **PascalCase**, use full words unless the abbreviation is somewhat standard, clear, and concise. They should not contain suffixes such as `Extension`, `Support`, `Feature`, etc...
Examples:

 - ❌ `SprtCam`
 - ❌ `Spritecamextension`
 - ❌ `spritesnapshotsupport`
 - ❌ `spriteSnapshot`
 - ✅ `SpriteSnapshot`

#### Full name

The full name should ideally be the same as the internal name but with spaces instead of PascalCase. It may be a more detailed one though, as long as the relationship with the Name is clear. It should stay relatively short, the long description is here to explain what the extension does exactly, the full name is only to help find it in the events sheet editor.

Examples:

 - ❌ Name = SpriteCamera, Full Name = Layers management tool
 - ❌ Name = ColorTools, Full Name = Utilities for color handling collection
 - ✅ Name = ColorTools, Full Name = Color tools
 - ✅ Name = WebSocketClient, Full Name = WebSocket networking client

### Update extension version numbers

The version number should follow [semantic versioning](https://semver.org/). This means that the version should be in the `number.number.number`/`major.minor.patch` format. When you make an update to the extension, those criteria should be followed while increasing the version number:

 - If your changes are just a bug fix or internal change that doesn't change how the user uses your extension, increase by 1 the patch version.
 - If your changes are adding new functionality to the extension, increase the minor version by 1.
 - If your changes are breaking, increase the major version by 1. Breaking changes mean that if a user installs the update it may not behave or work exactly the same as before, for example, if an "explosion" action multiplies the force by 2 after the update where it multiplied by 3 before, the name of an expression, action or condition changed, the removal of an action condition or expression or the order of parameters have changed.
 - If the minor version is changed, you must reset the patch version to 0.
 - If the major version is changed, you must reset the patch and minor version to 0.
 - While an extension is still in review, there is no need to change the version number after each change proposed by the review.

Examples:
Bug fix update:

 - ❌ 0.1.0 -> 0.2.0
 - ❌ 1.2.3 -> 1.3.4
 - ✅ 0.0.0 -> 0.0.1
 - ✅ 1.2.0 -> 1.2.1
 - ✅ 1.2.3 -> 1.2.4

Feature update:

 - ❌ 1.2.3 -> 1.3.4
 - ❌ 0.2.3 -> 0.3.3
 - ✅ 0.0.0 -> 0.1.0
 - ✅ 1.2.0 -> 1.3.0
 - ✅ 1.2.3 -> 1.3.0

Breaking change update:

 - ❌ 1.0.0 -> 3.0.0
 - ❌ 1.2.3 -> 2.1.3
 - ✅ 0.0.0 -> 1.0.0
 - ✅ 0.2.3 -> 1.0.0
 - ✅ 1.2.0 -> 2.0.0
 - ✅ 1.2.3 -> 2.0.0

### Write descriptions

All descriptions, names, and sentences should be filled out. They should be:
- Grammatically correct
- Full English sentences
- To the point
- Simple to understand (you should avoid jargon)

#### Write extension descriptions

The short description should describe your extension in a short (one or two sentences) yet straightforward way.
For the extension long description, Markdown syntax can be used.

- Backticks should be surrounding expression names so that they appear in a monospaced font.
- The description should include a list of what can be done with your extension.
  - Avoid to list your actions, give real life use-cases
  - Feel free to submit examples to show how to do these use-cases
- If your extension needs a special setup to work, it should be described.
- You can also add screenshots, by uploading an image to a site and using the markdown image syntax to include the image, for example:

```
![Image description](https://link.to/the/image.png)
```

### Choose tags

An extension should have tags describing what it does. For example, an extension that changes the color of a single pixel of a sprite could have as tags `pixel, color, sprite`
.
### Link a documentation

Extensions are usually documented thanks to their actions, conditions and expressions descriptions. Sometimes, users need to understand more general concepts to be able to use the extension. In this case, you can add a comment with the content of the documentation to your extension submission. The [marching squares](/gdevelop5/extensions/marching-squares/details) extension is a good example of an extension that would be hard to understand without a documentation.

## Describe extension definitions

### Name actions and conditions

Use `PascalCase` for actions, conditions, expression, function and parameter **names**.

* For example, name your action: "SetRangeOfAttack", and the expression: "RangeOfAttack".

!!! tip


    You might wonder if you should rather make a condition or an expression. While a condition is a good idea to have, an expression is more flexible. In the future, we'll introduce expressions that are automatically generated as conditions too.

### Don't use abbreviations
Ensure all your descriptions are written in English. Make clear sentences for actions/conditions displayed in the events sheet, the sentence in the description have always a dot at the end.

### Use affirmative tense
Action and condition sentences are always in the affirmative tense. Conditions are testing for something, and it's implied that they are "questions".

 * For example: don't name a condition _"Is the camera shaking?"_. Instead, name it _"Camera is shaking"_.
 * For example: don't name a condition _"The ad is displayed to the user"_. Instead name it _"Ad displayed"_ or _"Ad is displayed"_ (or maybe _"Ad displayed on-screen"_ but prefer to stay concise).

### Be oriented toward everyone not just programmers
For descriptions of conditions, **don't write** "Return true if ...", because this is heavily oriented toward programmers. Instead in GDevelop, we use the more generic "Check if ...".

  * For example: instead of *"Return TRUE if the race is finished"*, write *"Check if the race is finished."*
  * For example: instead of *"This will return false if the player is not jumping."*, write *"Check if the player is jumping."*

For actions that are enabling or disabling something, **use a boolean** (Yes/No or True/False) parameter.

* For example: instead of two actions *"Check the checkbox"* and *"Uncheck the checkbox"*, make a single action *"Check (or uncheck) the checkbox"*, with a *"Yes/No"* parameter. For the sentence in the Events Sheet, use something like `Check the checkbox: _PARAM0_`.
* For example: instead of two actions to enable or disable something, make a single action *"Enable (or disable) something"*.  For the sentence, enter: `Enable something: _PARAM0_`.

### Write expressions

#### Name expressions

For expression **names**, don't prefix them with `Get` - as it's implied in all expressions that they are getter. For example, name them `Health`, not `GetHealth` or `PlayerBestScore` not `GetPlayerBestScore`.

#### Choose expression types

There are two types of expressions currently: expression (returning a number) and string expression (returning a string).
Be sure to return **the proper value** (return a text for a string expression) - don't mix text with expression or numbers with string expressions.

#### Understand when to use conditions

**Don't make expressions returning a boolean**. Make a condition for it - for now, GDevelop does not support boolean expressions.

* For example, instead of making an expression "Disabled" that would return 1 if something is disabled, and 0 otherwise, make a condition "IsDisabled".

### Write custom Behaviors

  * Describe how to use them (including any requirement on the object).
  * For the properties:
    * If they are booleans, use for the name a description of what they do when true. **Don't write** "If true, activate the power-up". Instead, just write "Activate power-up".
    * Add units, when required, e.g:   `Timer (in second) ` or `Offset X (in pixel) `.
  * Whenever possible, you should use a hidden behavior property instead of an object variable.


#### Understand when to use a custom behavior

You should consider making a custom behavior when you need to keep track of a state for each object instance.

!!! tip

    Learn more about [making custom behaviors](/gdevelop5/behaviors/events-based-behaviors/).

## Write events in the extension

### Name variables

  * Name your variable in `PascalCase`
  * Use a descriptive name
    * Bad example: `x`, `ComCan2`, `MyVar`
    * Good example: `CommunicationChannel2`, `TemporaryObjectName`

Extension users should only be using an extension through conditions, actions, and expressions provided by the extension developer. They should not be expected to access extension variables directly.

### Name object variables

- store variables in a structure variable.  This simply means that you name all of your variables using the `__ExtensionName.VariableName` format.
- For example, a "Camera zoom" extension would use the prefix `__CameraZoom`.  If you want to use a variable named "ZoomValue", it should be named like this:

>
> `__CameraZoom.ZoomValue`

This naming convention has several benefits.  First, it will make it easier to use the debugger because all extension variables will be collapsed under their extension name. Secondly, it will reduce the chance of name collisions with variables created by the game developer.

Hidden properties should be used in behavior events in place of variables. Variables can still be used when child variables must be used.

### Name timers

  * Name your timers in `PascalCase`
  * Prefix the **timer names** by `__YourExtensionName_`. Use a long variable name, with a prefix containing your extension name, to be sure they are not overridden by the user of the extension or another extension.

For example, a timer named "DoorDuration" in the "Door Management" extension would be named:

>
> `__DoorManagement_DoorDuration`


### Check platform compatibility

If your extension uses some capabilities related to the operating system or the platform, verify that it works on all platforms supported by GDevelop: web browsers, desktop (check at least on Windows, macOS, or Linux after an export), and Android (check after an export).

If it is really not possible to make the extension work on some platforms, then the extension must follow extra guidelines:

- It cannot crash or break the game when ran on an unsupported platform
- The extension must specify in it's full name the platforms it supports, e.g. a PC-only extension would need to append ` (Windows, mac, linux)` to its full name


### JavaScript Usage

JavaScript can be used with [JavaScript Code events](/gdevelop5/events/js-code), but we try to avoid them for the following reasons:
- Extensions are meant to be editable by any GDevelop user
- Extensions made in events will stay compatible **if** we were to make a new native non-JavaScript engine.

If you have to store javascript variables/functions, store them on the global `gdjs` object, inside a `namespace` of the same name as your extension. You can read more about it in the [Use JavaScript in extensions](gdevelop5/events/js-code/javascript-in-extensions) page.

When you declare a new namespace in gdjs, you must declare it in the file:
```javascript
GDevelop-extensions/scripts/lib/ExtensionsValidatorExceptions.js
```

#### Handle errors

Unhandled JavaScript can cause a crash of the game, or at least the game loop iteration not being finished properly. Those can be raised by functions, **but also by syntax errors or usage of APIs that are not present on the current platform**. To avoid crashes, always

- Handle errors with `try {} catch {}` blocks
- Try out every code path to make sure that none crash the game because of a syntax error
- Always check if an API exists before using it to avoid a crash (e.g. before using `localStorage`, check if `typeof localStorage !== "undefined"`)

Extensions with crashes will not be accepted.

#### No usage of DOM elements. If you do, use a specific tag.

Don't use DOM APIs (`createElement`, etc...) because they are only working in a browser and it's not guaranteed games will run in a browser environment.

If you do, add the tag "`DOM apis`" (exactly written as this) on the extension.

#### No usage of private methods or variables (starting with _)

Any method that has an underscore in front of its name, like `runtimeScene._updateLayersCameraCoordinates` or `runtimeScene._layersCameraCoordinates`, can **not** be used.
The underscore denotes a private variable/method. It can change in the next version, be renamed, be changed, or be suppressed. It **will** happen and if an extension using this is becoming incompatible, it will need to be fixed in a few days or **deleted**.

In all cases, this will create a bad user experience for GDevelop users.

!!! note

    Can I still do it for X/Y/Z? **No**. *But if you're really stuck*, **open a discussion** on GitHub so we can find an alternative, or ask on Discord if other community members using JavaScript have an idea how to do what you need. In most cases, the public API will have enough for you to do what you need!