# Dialog Box

<img src="https://resources.gdevelop-app.com/assets/Icons/Line Hero Pack/Master/SVG/UI Essentials/UI Essentials_chat_message_sms.svg" class="extension-icon"></img>
This extension adds Dialog Box functionality that can be used for RPGs, visual novels, and more.

**Authors and contributors** to this community extension: [PANDAKO](https://gd.games/PANDAKO).

!!! warning
    This is an extension made by a community member — but not reviewed
    by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of official extensions. In case of
    doubt, contact the author to know more about what the extension
    does or inspect its content before using it.

---

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


[Read more...](https://github.com/PANDAKO-GitHub/DialogBoxExtension)

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Dialog Box 

This extension adds the functionality of a dialog box to your game.
Add this to the sprite object that will be the background of the dialog box. 

### Behavior actions

**Change Dialog Box contents**  
Change the Name, Image, and Text in the Dialog Box.

**Change Dialog Box Text**  
Change the Dialog Box Text.

**Change Dialog Box typing interval**  
Changes the typing interval of the Dialog Box (in seconds).

**Change Dialog Box typing sound**  
Changes the typing sound effect of the Dialog Box (File name) (The audio file must be registered as a resource!).

**Close Dialog Box**  
Close the Dialog Box.

**Open Dialog Box**  
Open the Dialog Box.

**Setup Dialog Box**  
Setup the Dialog Box.

**Skip Dialog Box typing**  
Skip typing in the Dialog Box.

### Behavior conditions

**Number of times the Text in Dialog Box has changed**  
Compare the number of times the Text in the Dialog Box has changed.

**Dialog Box is close**  
Dialog Box is close.

**Dialog Box is open**  
Dialog Box is open.

**Dialog Box is typing**  
Text in the Dialog Box is typing.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.DialogBoxBackGround::ChangeCounter()` | Return the number of times the Text in the Dialog Box has changed. ||

---

*This page is an auto-generated reference page about the **Dialog Box** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).