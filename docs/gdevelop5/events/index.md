---
title: Events
---
# Events

In GDevelop, **events** define the logic of a game. You can use events to create cause and effect. For example, an event might detect when the player has collided with a collectable item and, as a result, increment the player's score. You can create and manage events via the [Events editor](/gdevelop5/interface/events-editor).

![](/gdevelop5/event-screenshot.png)

!!! note

    You don't have to be familiar with programming to create events. If you are familiar with programming though, some of the concepts will feel familiar.

![type:video](https://www.youtube.com/embed/rBZ3kuvr9G0)

## Event Structure - Conditions and actions

Events are made up of **conditions** and **actions**.

**Conditions** are used to trigger when an action should happen and also select which objects or instances of an object are affected by the actions of the event. For instance, a condition can check when the player is colliding with another object.  In this case, the actions in the event will only take place when the objects are touching each other and they will only affect the objects that are colliding.

!!! note

    If an event does not have any conditions, the associated actions will run every frame of the game (usually 60 times per second).

**Actions** are the things that happen when all conditions are true. Some examples of actions include deleting an object or incrementing the value of a variable. Without actions, events don't do anything.

Events can have multiple conditions and multiple actions. For example, an event might have a condition that checks if the player is jumping and is colliding with an enemy object and an action that deletes the enemy object and increments the player's score.

!!! note

    You can use events to create custom conditions, actions, and [expressions](/gdevelop5/all-features/expressions). For more information, refer to [Functions](/gdevelop5/events/functions).

## Event Execution Logic

### Execution order

**Events** run in the order they are listed from top to bottom. The order of events can have a significant effect on what happens when an event is executed.

If an event is causing an unintended side-effect, verify that events listed higher in the event sheet aren't impacting events defined later in the frame.

### Object Picking

When a condition refers to objects, the game must decide which objects instances will be affected by any following actions and subevents. This process is called [object picking](/gdevelop5/events/object-picking).

By default, actions and conditions will apply to all instances of the object in the scene.  Conditions (and a small number of actions) can then be used to "filter" (or "pick") which objects the following actions or conditions will apply to.

!!! note

    Object picking, when not understood, can become a source of confusion. Make sure to read the [page on it](/gdevelop5/events/object-picking) for a full understanding of the topic!

### TimeDelta

GDevelop evaluates events and re-renders objects many times per second. How often this happens depends on the computer's resources:

On a slow computer, a game may run at 25 frames per second. On a fast computer, a game may run at 60 frames per second (this is the maximum frame rate).

GDevelop attempts to keep the frame rate consistent across computers, but since the frame rate can vary, the speed of some operations can be inconsistent.

For example, consider the following action:

![](/gdevelop5/condition-without-time-delta.png)

This action increments a variable in every frame. If the game runs at 60 frames per second, the variable will have a value of 18000 after 10 seconds. If the game runs at 25 frames per second, the variable will have a value of 7500 after 10 seconds. This inconsistency will have a significant impact on the player's experience.

To fix this problem, GDevelop provides the `TimeDelta()` expression. This expression returns the number of seconds that have elapsed since the previous frame. You can use this expression to ensure that the game runs predictably at different frame rates.

For example, consider the following action:

![](/gdevelop5/condition-with-time-delta.png)

This action also increments a variable in every frame, but the value of the variable is multiplied by `TimeDelta()`. This ensures that the variable increments at the same speed, regardless of the frame rate. This guarantees that all players have the same experience.

!!! tip

    As a rule of thumb, use `TimeDelta()` when increasing or decreasing a value over a period of time. If your action only runs once, `TimeDelta()` is not required.

## Creating an event

### Adding an event to the event sheet

1. Open the **Event Sheet**.
2. Select the **Choose and add an event** icon.
3. Select the type of event.

![](/gdevelop5/add-special-events.png)

!!! tip

    If you select the **Add an new empty event** icon, left click on the **Add a new event** shortcut link at the bottom of the event list, or click **Standard Event** in the **Choose and add an event** list above, GDevelop immediately creates a Standard event. Right-clicking the shortcut in the event list will show the list above, and choosing any special event type from either will will immediately create that event type

### Adding conditions to an event

1. Open the **Events Editor**.
2. Find an existing event or create a new one.
3. Select **Add condition**.

![](/gdevelop5/blank-event.png)

### Adding actions to an event

1. Open the **Events Editor**.
2. Find an existing event or create a new one.
3. Select **Add action**.

### Creating a sub-event

Some types of events can have sub-events. Sub-events are events that exist within other events. These types of events only run when:

- The conditions of the parent event are true.
- The actions of the parent event have been processed.

To add a sub-event to an event:

1. Open the **Events** editor.
2. Select an existing event or create a new event.
3. Select the **Add a sub-event to the selected event** icon.

Sub-events appear nested within their parent events.

!!! note

    Link, Comment, and JavaScript events can't have sub-events.

## List of event types

This section lists the different types of events, each of which is useful for adding different types of logic to a game. If you're not familiar with the concept of events, refer to the previous sections.

- [Standard events](/gdevelop5/events/standard)
- [For each object events](/gdevelop5/events/foreach)
- [For each child variable events](/gdevelop5/events/foreach-child-variable)
- [Repeat events](/gdevelop5/events/repeat)
- [While events](/gdevelop5/events/while)
- [Group events](/gdevelop5/events/group)
- [Link events](/gdevelop5/events/link)
- [JavaScript events](/gdevelop5/events/js-code)

Refer to the linked pages to learn more about each type of event.

!!! note

    The most commonly used types of events are **[Standard events](https://wiki.gdevelop.io/gdevelop5/events/standard)**.