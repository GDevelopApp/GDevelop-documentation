---
title: For Each events
---
# For Each events

A "For Each" event is a special [event](/gdevelop5/events) that takes an object as a parameter. Then, during the game, for every instance of the object, the conditions and actions will be repeated.

In many cases, you don't need to use "For Each" events. This is because conditions and actions automatically run on all instances of an object.  However, if you need to make sure that your conditions and actions are run independently on every instance, you should use a "For Each" event.

## When to use it

Consider the example below. When the player is in a collision with an object called "KillAllEnemyBonus", we set the "life" variable of all enemies to 0. We also want to create a special kind of explosion at the position of each enemy. We need a "For Each" event to accomplish this. Otherwise, a single explosion would be created at the position of only the first enemy:

![](/gdevelop5/events/for-each-example.png)

## For each child variable (of a structure or array)

There is a special version of "For Each" that can be used to loop through the [child variables](/gdevelop5/all-features/variables/) of a structure variable.  The "For Each Child Variable" event enables conditions and actions to be run on all of the child variables under a structure variable (or an array).

This event will store the value of each child variable (as a string or number) and the name of the child variable (as a string) into scene variables.  The names of these scene variables are defined in the event parameters.  

## Example

- Define a structure variable (Fruits) with multiple child variables (Apple, Avocado, Banana)

![](/gdevelop5/events/foreverchildvariables.png)

- Loop through the child objects and change the text to show the name and value of the child object. 

![](/gdevelop5/events/foreverchildevents.png)

- The game preview will shows the correct values

![](/gdevelop5/events/foreverchildouput.png)