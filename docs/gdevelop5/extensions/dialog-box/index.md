# Dialog Box

<img src="https://resources.gdevelop-app.com/assets/Icons/Line Hero Pack/Master/SVG/UI Essentials/UI Essentials_chat_message_sms.svg" class="extension-icon"></img>
Dialog Boxes that can be used for RPGs, visual novels, and more.

**Authors and contributors** to this experimental extension: [PANDAKO](https://gd.games/PANDAKO).

!!! warning
    This is an extension made by a community member and it only got through a
    light review by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of fully reviewed extensions.

---

This extension is deprecated. [Custom objects](https://wiki.gdevelop.io/gdevelop5/objects/custom-objects-prefab-template) are now the prefered way to make dialog boxes.

## Summary
This extension adds Dialog Box functionality that can be used for RPGs, visual novels, and more.

## How to use:
1. You will need a background **sprite**, a character **sprite**, a **BBText** to display the name, a **BBText** to display the text, and a **sprite** for the icon to prompt the player for action.
1. Add the "Dialog Box" behavior to the background object.
1. Place each object in the scene.
1. Execute the "Setup Dialog Box" action only once in the event.
1. After that, execute the "Open Dialog Box" action, "Close Dialog Box" action, etc.

## This extension add:

**Dialog Box** - behavior
**Setup Dialog Box** - action
**Open Dialog Box** - action
**Close Dialog Box** - action
**Change Dialog Box Text** - action
**Change Dialog Box contents** - action
**Change Dialog Box typing sound** - action
**Change Dialog Box typing interval** - action
**Skip Dialog Box typing** - action
**Dialog Box is open** - condition
**Dialog Box is typing** - condition
**Dialog Box is close** - condition
**Number of times the Text in Dialog Box has changed** - condition
**Number of times the Text in Dialog Box has changed** - expression

## Tips
This Dialog Box has a useful counter function.
It is zero when the dialog box is opened, and increases by one each time the text changes.
(However, it will not increase until the frame advances).
This feature is useful for keeping track of the progress of a conversation.

## Note
In typing, style tags in BBText OBjects are also counted as characters.


!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Dialog Box 

This extension adds the functionality of a dialog box to your game.
Add this to the sprite object that will be the background of the dialog box. 

### Behavior actions

**Change Dialog Box contents**
Change the Name, Image, and Text in the Dialog Box.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (string): Name
    - Parameter 3: 🔤 Object Animation Name (String)
    - Parameter 4 (string): Text

    > Technical note: parameter 5 are internal parameters handled by GDevelop.

**Change Dialog Box Text**
Change the Dialog Box Text.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (string): Text

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Change Dialog Box typing interval**
Changes the typing interval of the Dialog Box (in seconds).

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Typing interval (in seconds)

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Change Dialog Box typing sound**
Changes the typing sound effect of the Dialog Box (File name) (The audio file must be registered as a resource!).

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (string): Audio file name (The audio file must be registered as a resource!)

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Close Dialog Box**
Close the Dialog Box.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

**Open Dialog Box**
Open the Dialog Box.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (string): Name
    - Parameter 3: 🔤 Object Animation Name (String)
    - Parameter 4 (string): Text

    > Technical note: parameter 5 are internal parameters handled by GDevelop.

**Setup Dialog Box**
Setup the Dialog Box.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (👾 Object): Name (BB Text)
    - Parameter 3 (👾 Object): Image (Sprite)
    - Parameter 4 (👾 Object): Text (BB Text)
    - Parameter 5 (👾 Object): Arrow (Sprite)

    > Technical note: parameter 6 are internal parameters handled by GDevelop.

**Skip Dialog Box typing**
Skip typing in the Dialog Box.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

### Behavior conditions

**Number of times the Text in Dialog Box has changed**
Compare the number of times the Text in the Dialog Box has changed.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Number (0-based)

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Dialog Box is close**
Dialog Box is close.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

**Dialog Box is open**
Dialog Box is open.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

**Dialog Box is typing**
Text in the Dialog Box is typing.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.DialogBoxBackGround::ChangeCounter(number)` | Return the number of times the Text in the Dialog Box has changed. ||
| | _🔢 Number_ | Number (0-based) |


---

*This page is an auto-generated reference page about the **Dialog Box** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).