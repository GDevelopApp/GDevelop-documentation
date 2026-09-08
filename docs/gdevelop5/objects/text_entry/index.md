---
title: Text entry object
---
# Text entry object

!!! note

    It is not recommended to use this object anymore. Instead, prefer using the [Text Input](/gdevelop5/objects/text_input) object. It works on all devices, including mobile devices, with all languages and supports emojis.

The text entry object captures user input and stores it in memory. You can use this object to simulate text input fields. For example, you might use the text entry object to provide a way that the player of your game can enter his/her name or any other information.

The object itself is invisible on screen: it only listens to the keyboard. To show the captured text to the player, you need to display it with another object such as a [Text object](/gdevelop5/objects/text). Pressing <kbd>Backspace</kbd> removes the last typed character. It only works with a physical keyboard, which is why the [Text Input](/gdevelop5/objects/text_input) object should be preferred, especially for mobile games.

### Add text entry object

After creating a new object from the Objects Editor list, select "Text entry" from the displayed list of choices

![](add-text-entry-object.png)

Rename the Text entry object to whatever you like. Add the Text entry object to the scene.

Now, if you run a preview of the scene, all the keys you press are going to be captured by the object and stored in memory. In order to read the value from the memory, you need to use an expression like this one: `TextEntry.String()` (see an example below).

### Display value using a text object

First, add a Text Object to the scene. Then, add an event to modify the content of the Text object:

![](text-entry-object-display-value.png)

For the last parameter, which is the new content for the text, use the expression mentioned above: ![](text-text-entry.png)

!!! note

    *Entry* should be the name of the Text Entry object. You need to replace this with the name of your Text Entry object.

Now if you run a scene preview. Start typing you will see the text object displaying whatever you type.

Using events, it is possible to enable or disable the "Text entry" object. Events also allow you to control when to capture text input and when not to capture text input.

![](textentryobjectevents.png)

You can also change the stored text with events. The "Text in memory" action lets you clear the captured text (set it to an empty string) once it has been validated, or fill it with a default value before the player starts typing.

## Examples

!!! note

        **See it in action!** 🎮

    Open these examples online.

[![](textexample.png){ width="320" }](https://editor.gdevelop.io/?create-from-example=text-entry-object)

[Open example in GDevelop](https://editor.gdevelop.io/?create-from-example=text-entry-object){ .md-button .md-button--primary }

## Reference

All actions, conditions and expressions are listed in [the Text entry object reference page](/gdevelop5/all-features/text-entry-object/reference/).