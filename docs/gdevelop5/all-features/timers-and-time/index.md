---
title: Timers and time
---
# Timers and time

Time management is important in a game. GDevelop provides a few different tools:

* Timers can be run using actions inside events. You can then use conditions to check if enough time elapsed before running other actions or resetting the timer. Timers can be attached to scenes or to objects.
* Special actions like "Wait X seconds" can be used to wait before launching the next actions in an event. This is useful for creating cut-scenes, timelines or just effects happening not immediately.
* Finally, there are expressions to get the current time, day and time since the start of the game.

## The "Wait X seconds" action

The “Wait X seconds” action waits for the specified time before running the next actions, and the sub events (if any). For example:

![](/gdevelop5/all-features/timers-and-time/pasted/20220519-142810.png)

Read about [this Wait action and how to use it properly here](/gdevelop5/all-features/timers-and-time/wait-action).

## Scene Timers

You can use actions to start **scene** timers. Then you can check their elapsed time using conditions, to run actions when a timer reaches a certain value.

!!! note

    You can give any name to your timers. _Timer names are text/string expressions, so they must be entered between quotes!_

### A basic example

In this example, a timer is started at the beginning of the scene and an object will be created once the timer reaches 3 seconds:

![](/gdevelop5/all-features/timers/pasted/20220122-161745.png)

!!! warning

    Don't forget to use the action to start (or reset) a timer. Otherwise, the timer will not be started and the condition will never be verified.

### A repeating example

You can use the action to reset the timer to make something repeat on a regular interval. Here, we take the same example as before, but also reset the timer to 0 when it reaches 3 seconds. This allows a new "Fireworks" object to be created every 3 seconds:

![](/gdevelop5/all-features/timers/pasted/20220122-162310.png)

### A more advanced example of a scene timer

Here is a more advanced Timer example. The timer is used to briefly protect the player from damage.  The amount of time given to protect the player depends on the value of the variable "`player_undestroyable_time`":

![](/gdevelop5/all-features/timer-and-variable.png)

!!! tip

        **See it in action!** 🎮
    Open this example online: https://editor.gdevelop.io?project=example://asteroids

## Object timers

In addition to scene timers, you can use timers on the instances of objects. Each instance living on the scene hold its own timers in memory. These timers are working independently.

This is useful for having each instance (for example, each spaceship, each enemy, each player...) handle their own timings. For example, this can be the time of invulnerability after a player or an enemy is hit.

Object timers are set up in the same way as scene timers. You have to initialize an object instance timer with the action to start (or reset) a timer.

!!! warning

    Don't forget to start the timers on some objects using the action on these objects. Otherwise, the timers won't be running and any condition checking them will never be verified.

![](/gdevelop5/all-features/timers/pasted/20220122-163715.png)

This action will create a timer called "`color`" on each instance of the Sprite object, and start these timers.

!!! note

    Note that as with scene timers, object timers names are string expressions. They must be typed between quotes.

Now you can check the timers:

![](/gdevelop5/all-features/timers/pasted/20220122-163842.png)

The condition above checks to see if the time elapsed in the "`color`" timer is greater than the value of the variable "ColorChangeTime". The condition will pick every Sprite instance with a timer value greater than the time they "request" with the object variable "`ColorChangeTime`". Then the Sprite color is changed to a random color and the object timer is reset.

Using object variables to check object timers is useful. For example, you can have several instances of enemies fire bullets with different firing rates. Another use of object timers can be seen when used with an enemy that collides with a "fire rate power-up". You can set the variable "`FireRateTime`" to be less than the normal value, meaning that the time between each bullet will decrease.

!!! tip

        **See it in action!** 🎮
    Open this example online: https://editor.gdevelop.io?project=example://objects-timers

![](/gdevelop5/all-features/fireratetimerexamplenew.png)

## Advanced concept: simulating timers with variables

Scene and Object Timers are convenient. However, sometimes you might want to simulate timers with variables. This allows you to have more control over the time: using variables, you can increase or decrease the value by adding or subtracting time from the variable.

For this, use an action to increase the value of a variable using the [`TimeDelta()`](/gdevelop5/events#timedelta) expression:

![](/gdevelop5/all-features/increase-variable-timer.png)

This example will increase the variable "DamageTimer" at a speed of 1000 units per seconds, which makes the "timer" run in milliseconds.

You can then monitor DamageTimer to start an action after 500 milliseconds (0.5 seconds). Then you can reset this "fake" timer.

![](/gdevelop5/all-features/reset-variable-timer.png)

## Reference

All actions, conditions and expressions are listed in [timers reference page](/gdevelop5/all-features/timers-and-time/reference/).