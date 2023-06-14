---
title: How to create a behavior for an object
---
# How to create a behavior for an object

When your game starts to grow, or even at the beginning when starting the creation of your game, it's a good idea to organize as much as possible of the logic of your game in **[custom behaviors](/gdevelop5/behaviors/events-based-behaviors)**. This helps to reduce the number of events in the scene event sheet(s) and make your game easier to reason about.

Making custom behaviors for your game objects might seem at the beginning more complicated than making events directly in the events sheet.
Behaviors are more constrained and need you to think more carefully about how your object works and what actions/conditions should the behavior expose. But custom behaviors are also a very powerful tool, allowing you to *encapsulate* your logic inside your objects, and keep the events sheet of your scene as minimal as possible.

!!! tip

    If you're an experienced game developer, it's even recommended to make **as much of your game as possible** using **custom behaviors**.

In this article, we're showing how to:

1. Create a simple behavior for an object
2. Then how to interact with **another object**
3. And finally how to interact with a custom **behavior of another object**

## 1. How to create events "for an object" using a behavior:

Create an extension that will contain behaviors. The name is up to you. You can use extensions to group behaviors related to some of your game objects.

![](/gdevelop5/tutorials/how-to-make-behavior/pasted/20200329-161907.png)

Create a behavior in this extension. Name it according to your object, or the capability you're adding:
![](/gdevelop5/tutorials/how-to-make-behavior/pasted/20200329-162016.png)

!!! tip

    It's a good idea to have a name summarizing what the behavior is doing. It might be unclear at the beginning - you can always rename the behavior later.

Click *Add a new function*:

![](/gdevelop5/tutorials/how-to-make-behavior/pasted/20200329-162050.png)

Add a "doStepPreEvents" behavior function:

![](/gdevelop5/tutorials/how-to-make-behavior/pasted/20200329-162119.png)

This behavior function (also called behavior method) is called automatically by the game engine every time a frame is rendered on screen. It's a good place where to put events that are **updating your object**.

The function is now visible in the list of behavior functions:

![](/gdevelop5/tutorials/how-to-make-behavior/pasted/20200329-162151.png)

We can now add events inside. In this example, we're adding two events:

  * one to change the background color of the scene when space is pressed
  * one to play a sound when a button is pressed

![](/gdevelop5/tutorials/how-to-make-behavior/pasted/20200329-162214.png)

Of course, changing the background color of the scene is unusual and should probably not be part of your behavior. But it's a simple way to verify that the behavior is working.

!!! tip

    In a work complex "real" behavior, you could use the behavior properties or some variables to update your object. For example, you can make the object move in this "doStepPreEvents" function.

Finally, we now go back our game scene and add the behavior to an object.
First, we find the object to add the behavior to:

![](/gdevelop5/tutorials/how-to-make-behavior/pasted/20200329-162441.png)

Edit the object and in the "Behaviors" tab, choose *Add a Behavior to the Object*:
![](/gdevelop5/tutorials/how-to-make-behavior/pasted/20200329-162720.png)

and in the list choose the behavior with the name you've previously entered. You can see that there is no description for the behavior - we could add one by clicking *Edit Behaviors Properties* in the extension editor. It's in fact a good idea to give a good name and description to make clear what your behavior is made for.

![](/gdevelop5/tutorials/how-to-make-behavior/pasted/20200329-163332.png)

You can try to run the game.
Verify that the scene background color is changed when you press *Space*, or that the sound is played when you press the *P* key.

For example, in the platformer starter game, the background color changed to green, after Space was pressed:
![](/gdevelop5/tutorials/how-to-make-behavior/pasted/20200329-164012.png)

## 2. How to interact with another object

Now, we may want to go one step further and create some logic related to one object, like the player, and other objects, like enemies.

For this, we can't use "doStepPreEvents", as we can't use other objects in it, apart from the object having the behavior. We need to create a **new behavior function**, that will be an *action*.

Add a new function in the behavior and choose "Custom (action, condition or expression)":

![](/gdevelop5/tutorials/how-to-make-behavior/pasted/20200329-175353.png)

We can see it added in the list of behavior functions:

![](/gdevelop5/tutorials/how-to-make-behavior/pasted/20200329-175548.png)

Let's rename it according to what it will do:

![](/gdevelop5/tutorials/how-to-make-behavior/pasted/20200329-175724.png)

Then in this function, let's add **a parameter**: the objects that are our enemies.
For this, we add a new parameter of type "Object". Then, we'll be able to use this object in the events.

Navigate to the function "Parameters" tab and in the bottom choose "Add a parameter". Then, enter "Enemy" for the parameter name, then "Objects" for the type. You can enter "Enemy" as the label too (this is what will be displayed when you add the action in the scene events sheet).

![](/gdevelop5/tutorials/how-to-make-behavior/pasted/20200329-175942.png)

Once the parameter is set up, we can now use it as an object in the events.
As an example, we will make the enemies play a sound when the player is colliding with them.

![](/gdevelop5/tutorials/how-to-make-behavior/pasted/20200329-191811.png)

Let's finish by adding a nice name and sentence in the configuration of this function:
![](/gdevelop5/tutorials/how-to-make-behavior/pasted/20200329-180354.png)

Now the last step is to call the function in the scene events sheet.

!!! tip

    You may be disappointed at this point! "I don't want to add an event in the events sheet". For now, you can't pass  objects to behaviors - this could be an addition in the future.

We need to use the action. You'll find it in the scene events sheet, in the Player actions, as we previously added the behavior to the player.

In the scene, add an action for Player (or the object you added the behavior to).
Then choose "Handle enemies", our new action:

![](/gdevelop5/tutorials/how-to-make-behavior/pasted/20200329-182405.png)

Finally, let's configure it with our enemies:

![](/gdevelop5/tutorials/how-to-make-behavior/pasted/20200329-182601.png)

!!! tip

    We use a single object, "SlimeWalk", for the enemies in this example, but you could use a **group** of objects.

Here is the result:

![](/gdevelop5/tutorials/how-to-make-behavior/pasted/20200329-182802.png)

If you run the game, you'll now see that when the player collides with the enemy, a sound is played.

Not bad for a single event in the scene events sheet! And we could add more objects and make the behavior more complex. Or we can reuse it for another object that should behave the same as player. We can even disable this behavior if we want the player not to play a sound when colliding with enemies.

It's up to you to decide how "far" you want to push your behavior.

## 3. Let's interact with other object behaviors

Let's now say that your game is getting more complex. For example, enemies now have also their own behavior(s). And this behavior has an action to make the enemies blink.
We now want the enemies to blink when the player touches them (as they are hit - we could imagine make them lose some health or play an animation, etc...).

First, the "Blink" behavior already exists. It's available as an extension you can search and install for your project. Let's add it to our enemies. First, we find it:

![](/gdevelop5/tutorials/how-to-make-behavior/pasted/20200329-183653.png)

Then we add it to our enemy:
![](/gdevelop5/tutorials/how-to-make-behavior/pasted/20200329-183726.png)

It's added, we can configure it:
![](/gdevelop5/tutorials/how-to-make-behavior/pasted/20200329-184106.png)

Now, let's go back to our Player behavior. We go in the *HandleEnemies* function and add a new parameter, which is of type "Behavior", just after the "Enemy" object parameter:
![](/gdevelop5/tutorials/how-to-make-behavior/pasted/20200329-184732.png)

!!! danger

    Rough edge here: it's not super obvious that you have to select a behavior as a parameter to make it part of the previous object. This will be improved in future versions.

And now the function knows that the enemies have a behavior called "Blink"! Let's use the action to make them blink:
![](/gdevelop5/tutorials/how-to-make-behavior/pasted/20200329-184916.png)

!!! danger

    Another rough edge here: as you added a parameter, you now have to go back to the events sheet and **edit the action** to be sure that the behavior is passed as parameter:

![](/gdevelop5/tutorials/how-to-make-behavior/pasted/20200329-185458.png)

(Note the third parameter). Alas if you don't do this, the action will be missing the last parameter and the game won't work.

Now you should be able to run the game and when the player touches a enemy, this enemy is blinking!

## Final note

The behavior we created here is simple, but should give you a sense of the idea of what is possible with custom behaviors.

It's a good idea to think about your game in terms of objects and behaviors that interact with each other. The scene events sheet is the central place where the flow of the game is going on, using behaviors to make most of the actions happen in the game.