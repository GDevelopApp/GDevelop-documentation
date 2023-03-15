---
title: How to toggle states using Variables
---
# How to toggle states using Variables

Sometimes you need to toggle a state, for example a door can be opened or closed, a lever activated or deativated, etc. To make one, the best way is often to use a [variable](/gdevelop5/all-features/variables). Let's see how to do that with a checkbox. First you need to think of how many states you need, in this case, two: One for when the checkbox is toggled and when it is not. 

## 1. Add a main trigger

First you must create Conditions that trigger when you want to toggle the state of the variable. For the sake of this example, we will use the left mouse button is released and check if the cursor is on top of a checkbox:

![](/gdevelop5/tutorials/how-to-make-togglable-states-with-variables/pasted/20210525-181423.png)

## 2. Adding States

Now add subevents that contain Actions for each state.  In this example, the only difference when changing the state is the animation of the checkbox.  However, if the checkbox were to for example create or delete an object when activated, this would be done there as well.

![](/gdevelop5/tutorials/how-to-make-togglable-states-with-variables/pasted/20210525-181401.png)

## 3. Toggling the state

Now all that is left to do is the toggling. To do this, there are multiple methods.

### 3.1 Option 1: Using the "toggle boolean" action

This method is one of the easiest and cleanest. However, it only works when using a *boolean* state, meaning you can only use it on 2 states.

![](/gdevelop5/tutorials/how-to-make-togglable-states-with-variables/pasted/20210525-181554.png)

### 3.2 Option 2: Using a state variable

This method allows using as many states as you wish, but takes more code to write.

#### 3.2.1 Adding the state variable

First, you will need to add a variable that holds the current state, and modify it each time the state changes:

![](/gdevelop5/tutorials/how-to-make-togglable-states-with-variables/pasted/20210525-181942.png)

#### 3.2.2 Looping back

Finally, add an event to make sure the state is in the range of valid states before processing the state change:

![](/gdevelop5/tutorials/how-to-make-togglable-states-with-variables/pasted/20210525-182309.png)

#### 3.2.3 Using more than two states

Here is an example of using this technique on more than two states:

![](/gdevelop5/tutorials/how-to-make-togglable-states-with-variables/pasted/20210525-182605.png)