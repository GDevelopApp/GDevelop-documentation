---
title: For each child variable event
---
## For each child variable (of a structure or array)

There is a special version of "For Each" that can be used to loop through the [child variables](/gdevelop5/all-features/variables/) of a structure variable.  The "For Each Child Variable" event enables conditions and actions to be run on all of the child variables under a structure variable (or an array).

This event will store the value of each child variable (as a string or number) and the name of the child variable (as a string) into scene variables.  The names of these scene variables are defined in the event parameters.

## Example

- Define a structure variable (Fruits) with multiple child variables (Apple, Avocado, Banana)

![](foreverchildvariables.png)

- Loop through the child objects and change the text to show the name and value of the child object.

![](foreverchildevents.png)

- The game preview will show the correct values

![](foreverchildouput.png)

!!! tip

    The [for each object](/gdevelop5/events/foreach) event page explains how to loop on objects one by one.
