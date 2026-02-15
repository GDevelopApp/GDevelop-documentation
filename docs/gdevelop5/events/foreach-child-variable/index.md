---
title: For each child variable event
---
## For each child variable (of a structure or array)

**For each child variable** events give the [child variables](/gdevelop5/all-features/variables/) from structure variables (or arrays) one at a time to their sub-events.

This event stores the value of each child variable (as a string or number) and the name of the child variable (as a string) into variables you specify in the parameters of the event. You can use either scene variables or [local variables](/gdevelop5/all-features/variables/local-variables) for the variable to iterate on, for the variable storing the child value, and for the optional variable storing the child name.

## Local variables

For Each Child Variable events support [local variables](/gdevelop5/all-features/variables/local-variables). Local variables declared in this event are scoped to the loop: they are initialized before the loop starts and are only accessible within the loop and its sub-events.

## Loop counter variable

For Each Child Variable events can have a **loop counter variable**. When set, this variable starts at 0 and is automatically incremented by 1 for each child variable processed. This is useful to know the index of the current child in the iteration.

## How to add this event

Right click (or long press) on an existing [event](/gdevelop5/events) and choose *"Add"* in the menu. Then, select the event you want to add.
Alternatively, click on the *"Plus" icon* in the toolbar or on *"Add..."* at the bottom of the events sheet.

## Example

- Define a structure variable (Fruits) with multiple child variables (Apple, Avocado, Banana)

![](foreverchildvariables.png)

- Loop through the child objects and change the text to show the name and value of the child object.

![](foreverchildevents.png)

- The game preview will now show the correct values.

![](foreverchildouput.png)

!!! tip

    The [for each object](/gdevelop5/events/foreach) event page explains how to loop on objects one by one.
