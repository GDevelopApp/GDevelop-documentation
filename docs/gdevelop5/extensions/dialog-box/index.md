# Dialog Box

<img src="https://resources.gdevelop-app.com/assets/Icons/Line Hero Pack/Master/SVG/UI Essentials/UI Essentials_chat_message_sms.svg" class="extension-icon"></img>
This extension adds Dialog Box functionality that can be used for RPGs, visual novels, and more.

**Authors and contributors** to this community extension: [PANDAKO](https://gd.games/PANDAKO).

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

**Tween Duration. (in milliseconds) property**  
Change the property value for the tween Duration. (in milliseconds).

**Typing interval. (in seconds) property**  
Change the property value for the typing interval. (in seconds).

**Typing sound effect. (File name) (The audio file must be registered as a resource!) property**  
Change the property value for the typing sound effect. (File name) (The audio file must be registered as a resource!).

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

**Tween Duration. (in milliseconds) property**  
Compare the property value for the tween Duration. (in milliseconds).

**Typing interval. (in seconds) property**  
Compare the property value for the typing interval. (in seconds).

**Typing sound effect. (File name) (The audio file must be registered as a resource!) property**  
Compare the property value for the typing sound effect. (File name) (The audio file must be registered as a resource!).

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.DialogBoxBackGround::ChangeCounter(number)` | Return the number of times the Text in the Dialog Box has changed. ||
| | _number_ | Number (0-based) |
| `Object.DialogBoxBackGround::PropertyDuration()` | Return the property value for the tween Duration. (in milliseconds). ||
| `Object.DialogBoxBackGround::PropertyInterval()` | Return the property value for the typing interval. (in seconds). ||
| `Object.DialogBoxBackGround::PropertySe()` | Return the property value for the typing sound effect. (File name) (The audio file must be registered as a resource!). ||

---

*This page is an auto-generated reference page about the **Dialog Box** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).