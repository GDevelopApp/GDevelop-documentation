---
title: Events editor
---
# Events editor

When you open a scene (or external events), the Events Editor opens as a tab.

GDevelop uses a **No Code Event System** that has actions and conditions instead of a wall of code, these events are intuitive and able to be understood by anyone, regardless of their level of programming knowledge. The Events Editor is where you set up these events to create your game logic.

When editing a scene, to switch between the [Scene editor](/gdevelop5/interface/scene-editor) and the Event editor, use the tabs at the top of the window.

![](/gdevelop5/interface/events-editor/pasted/20230313-180413.png)

When you switch to the Events editor, you will see that the toolbar changes to display new tools:

![](/gdevelop5/interface/events-editor/pasted/20230313-175252.png)

## Add an event

Add an event by clicking the "add event" button found in the new toolbar.

When you click this button a blank event will appear on the screen below in the editor

![](/gdevelop5/interface/events-editor/pasted/20230313-175502.png)

You can add any number of event blocks to the Event editor. Each event can have various conditions and actions.
Once you add an event, you can use the conditions and actions to create the game's logic.
[Read more about conditions and actions](/gdevelop5/events).

## Add a sub-event

By clicking the "Add a sub-event" button, you can add a sub-event block to the event you have selected.

After clicking the button, a blank sub-event appears below our selected event.

![](/gdevelop5/interface/events-editor/pasted/20230313-180002.png)

//Sub-events are executed only if the conditions of the main event it's attached to are true//. Sub-events provide a way to avoid repeating the same conditions, making your game more performant. They also make the logic much easier to read and search through.

## Add a comment

By clicking the "Add a comment" button, you can add a comment block to the list of events. Comments are useful to add explanations to complex events, or to help separate and organize your events. They can contain any text.

![](/gdevelop5/interface/events-editor/pasted/20230313-180732.png)

Comments are an important part of any game or application. They help you organize your events and give you an opportunity to add notes or explanations about what the events are doing.

## Add other events (for each, repeat, while...)

By clicking the "Add" button, or by right-clicking on any event and going to the "Add Other" drop-down menu, you can see all of the different types of events you can add.

![](/gdevelop5/interface/events-editor/pasted/20230313-181403.png)

Read [the help about events](/gdevelop5/events) to learn more.

## Editing events

You can edit events on an event sheet by right-clicking on the event you want to edit. A drop-down menu will appear that shows you some of the options you have.

There are some common actions like copying, pasting, cutting, deleting, undoing, redoing, etc.. But, there are also other actions like Toggle disabled, Analyse Objects Used in this Event, Move events into a group, etc..

![](/gdevelop5/interface/events-editor/pasted/20230313-181706.png)

### Toggle disabled

Disables the selected event and it's sub-events. When disabled, the event and all sub-events will be ignored while the game is running. The disabled events will have strike-through text on the actions and conditions.

![](/gdevelop5/interface/events-editor/pasted/20230313-182023.png)

### Add an Event Below

**Add a New Event Below**

Adds an empty event under the selected event.

**Add a Sub Event Below**

Adds an empty sub-event under the selected event.

**Add Other**

Allows you to add other event blocks like a comment, group, while, repeat for each, etc..

### Extract Events to a Function

Extracts the selected event and it's sub-events into a function.

Read more about how to [extracts events](/gdevelop5/events/functions/extract-events).

### Move events into a group

Makes a new group and moves the selected event and it's sub-events into that group.

Read more about [groups](/gdevelop5/events/group).

### Analyse Objects Used in this Event

Analyses and shows a list of all the objects, object groups and behaviours used in the selected events and it's sub-events.

![](/gdevelop5/interface/events-editor/pasted/20230313-182932.png)

### Changing the colour of comments and groups

You can change the colour of **comments** and **event group** by right-clicking and selecting **Edit**.

!!! tip

    You can only change the background colour of **group events**. You can change both the background and text colour of **comments**. The text colour is automatically set according to the contrast for **group events**.

![](/gdevelop5/interface/events-editor/pasted/20230313-183427.png)

## Delete selected events

By clicking the Delete selected events button, selected events will be removed from the event sheet, as well as any subevents. (you can also press the Delete key)

![](/gdevelop5/interface/events-editor/pasted/20230313-183632.png)

## Undo/Redo changes

Any change can be undone or redone with these buttons toolbar buttons. (or by using keyboard shortcuts ctrl+ Z/Y)

![](/gdevelop5/interface/events-editor/pasted/20230313-183819.png)

## Search in events

The "search in events" button opens a panel at the bottom of the screen. You can search for a specific term in the parameters of the conditions and actions. You can also enter a replacement parameter and replace all the occurrences of the text in the events.

![](/gdevelop5/interface/events-editor/pasted/20230313-184033.png)
