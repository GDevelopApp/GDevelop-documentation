---
title: The "Wait X seconds" action
---
# The "Wait X seconds" action

The "Wait X seconds" action waits for the specified time before running the next actions, and the sub events (if any).

## A basic example: introduce a wait before another action

Use the action to wait a bit before launching an action. For example, here we create a power-up item when the player touches a power-up box, and then delete the box 1 second after:

![](/gdevelop5/all-features/timers-and-time/wait-action/pasted/20220523-201844.png)

There are a few precautions to take when using a Wait action:

  * Avoid running it in an event where conditions are valid for more than one frame. If you use it without conditions, multiple Wait will be stored in memory, and the actions will all be launched later, which will slow down the game.
  * Instead, prefer to use conditions like "At the beginning of the scene", a collision condition (with either a "Trigger Once" or an action to delete one of the object), etc...

### About sub-events

If you use the "Wait X seconds" action, it will wait before running the next actions, as well as the sub-events.
In case you want to still run the sub-events without waiting, move the "Wait X seconds" and the following actions, in a different sub event.

![](/gdevelop5/all-features/timers-and-time/wait-action/pasted/20220519-104440.png)

!!! tip

    This is called, in programming, to run things in an "asynchronous" manner. It can take a bit of time to fully grasp how it works.

### Note on object picking

Objects picked by previous conditions (and actions, and events) are working as usual, as if there was no wait. When a "Wait" action is launched, the game engine will remember the picked instances and will restore them from memory later when the waiting time is finished.

This means that you can pick some objects with a condition, use an action to wait some time, and then launch actions that will act on these objects (minus the deleted objects, if some were destroyed in the meantime from the scene).