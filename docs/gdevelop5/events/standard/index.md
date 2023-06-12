---
title: Standard events
---
# Standard events

The most common [events](/gdevelop5/events) used in GDevelop are standard events, composed of conditions and actions.

## Open the events editor

When a scene is opened, the events are shown in the "Events" tab. It is the tab that is usually located the right of the Scene tab.

![](/gdevelop5/events/standard/pasted/20230305-105133.png)

## Understanding events

Events are composed of a list of "conditions" that are displayed on the left side of the screen, and a list of "actions" that are displayed on the right side of the screen.
When all the conditions on the left are true, the actions on the right are executed. If a condition on the left is not true, the other conditions and actions in the event are not run.

In the example below, GDevelop checks if the player has landed on top of a slime.  If so, it deletes the slime and makes the player initiate a jump which gives the effect of bouncing on top of the slime.

![](/gdevelop5/events/eventconditiontf.jpg)

Remember that conditions also select *which* objects are affected by the actions of the event.  In the example above, if there are multiple "Slime" objects in the scene, only the Slimes that are in collision with the "Player" will be affected by the actions on the right.  The same is true for "Player" objects if there are multiple instances of them.

### Example

Here is an event that will destroy the "Square" objects whose have a X position which is less than 100 pixels:

![](/gdevelop5/tutorials/delete-square-condition.png)

If you are still unsure how the events work, take a look at [basic game making concepts](/gdevelop5/tutorials/basic-game-making-concepts).