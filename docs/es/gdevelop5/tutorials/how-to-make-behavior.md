---
title: how-to-make-behavior
---
FIXME **This page is not fully translated, yet. Please help completing the translation.**  
*(remove this paragraph once the translation is finished)*

# Cómo crear un comportamiento para un objeto Cuando tu juego comienza a crecer, o incluso al principio al comenzar la creación de tu juego, es una buena idea organizar tanto como sea posible la lógica de tu juego en **[comportamientos personalizados](/gdevelop5/behaviors/events-based-behaviors)**. Esto ayuda a reducir el número de eventos en las hojas de eventos de escena y hace que sea más fácil razonar sobre tu juego.

Hacer comportamientos personalizados para los objetos del juego puede parecer al principio más complicado que hacer eventos directamente en la hoja de eventos. Los comportamientos son más restringidos y necesitan que pienses más cuidadosamente sobre cómo funciona tu objeto y qué acciones/condiciones debe exponer el comportamiento. Pero los comportamientos personalizados también son una herramienta muy poderosa, que te permite *encapsular* tu lógica dentro de tus objetos y mantener la hoja de eventos de tu escena lo más pequeña posible.

!!! note

    Si eres un desarrollador de juegos experimentado, incluso se recomienda hacer la **mayor cantidad posible de tu juego** usando **comportamientos personalizados**.

En este artículo, mostramos cómo:

1\. Crear un comportamiento simple para un objeto 2. Después, cómo interactuar con **otro objeto** 3. Y finalmente cómo interactuar con un comportamiento personalizado de otro objeto

## 1. Cómo crear eventos "para un objeto" usando un comportamiento:

Crea una extensión que contenga comportamientos. El nombre depende de ti. Puedes usar extensiones para agrupar comportamientos relacionados con algunos de tus objetos del juego.

![20200329-161907.png](/gdevelop5/tutorials/how-to-make-behavior/pasted/20200329-161907.png)

Crea un comportamiento en esta extensión. Asígnale un nombre según el objeto o la capacidad que está agregando: ![20200329-162016.png](/gdevelop5/tutorials/how-to-make-behavior/pasted/20200329-162016.png)

!!! note

    Es una buena idea tener un nombre que resuma lo que está haciendo el comportamiento. Puede que no esté claro al principio: siempre puede cambiar el nombre del comportamiento más adelante.

Haz clic en *Añadir una nueva función*: ![20200329-162050.png](/gdevelop5/tutorials/how-to-make-behavior/pasted/20200329-162050.png)

Añade una función de comportamiento "doStepPreEvents": ![20200329-162119.png](/gdevelop5/tutorials/how-to-make-behavior/pasted/20200329-162119.png)

Esta función de comportamiento (también llamada método de comportamiento) es llamada automáticamente por el motor del juego cada vez que se representa un fotograma en la pantalla. Es un buen lugar donde colocar eventos que están **actualizando tu objeto**.

La función ahora es visible en la lista de funciones de comportamiento: ![20200329-162151.png](/gdevelop5/tutorials/how-to-make-behavior/pasted/20200329-162151.png)

We can now add events inside. In this example, we're adding two events:

* one to change the background color of the scene when space is pressed
* one to play a sound when a button is pressed

![20200329-162214.png](/gdevelop5/tutorials/how-to-make-behavior/pasted/20200329-162214.png)

Of course, changing the background color of the scene is unusual and should probably not be part of your behavior. But it's a simple way to verify that the behavior is working.

!!! note

    In a work complex "real" behavior, you could use the behavior properties or some variables to update your object. For example, you can make the object move in this "doStepPreEvents" function.

Finally, we now go back our game scene and add the behavior to an object. First, we find the object to add the behavior to:

![20200329-162441.png](/gdevelop5/tutorials/how-to-make-behavior/pasted/20200329-162441.png)

Edit the object and in the "Behaviors" tab, choose *Add a Behavior to the Object*: ![20200329-162720.png](/gdevelop5/tutorials/how-to-make-behavior/pasted/20200329-162720.png)

and in the list choose the behavior with the name you've previously entered. You can see that there is no description for the behavior - we could add one by clicking *Edit Behaviors Properties* in the extension editor. It's in fact a good idea to give a good name and description to make clear what your behavior is made for.

![20200329-163332.png](/gdevelop5/tutorials/how-to-make-behavior/pasted/20200329-163332.png)

You can try to run the game. Verify that the scene background color is changed when you press *Space*, or that the sound is played when you press the *P* key.

For example, in the platformer starter game, the background color changed to green, after Space was pressed: ![20200329-164012.png](/gdevelop5/tutorials/how-to-make-behavior/pasted/20200329-164012.png)

## 2. How to interact with another object

Now, we may want to go one step further and create some logic related to one object, like the player, and other objects, like enemies.

For this, we can't use "doStepPreEvents", as we can't use other objects in it, apart from the object having the behavior. We need to create a **new behavior function**, that will be an *action*.

Add a new function in the behavior and choose "Custom (action, condition or expression)":

![20200329-175353.png](/gdevelop5/tutorials/how-to-make-behavior/pasted/20200329-175353.png)

We can see it added in the list of behavior functions:

![20200329-175548.png](/gdevelop5/tutorials/how-to-make-behavior/pasted/20200329-175548.png)

Let's rename it according to what it will do:

![20200329-175724.png](/gdevelop5/tutorials/how-to-make-behavior/pasted/20200329-175724.png)

Then in this function, let's add **a parameter**: the objects that are our enemies. For this, we add a new parameter of type "Object". Then, we'll be able to use this object in the events.

Navigate to the function "Parameters" tab and in the bottom choose "Add a parameter". Then, enter "Enemy" for the parameter name, then "Objects" for the type. You can enter "Enemy" as the label too (this is what will be displayed when you add the action in the scene events sheet).

![20200329-175942.png](/gdevelop5/tutorials/how-to-make-behavior/pasted/20200329-175942.png)

Once the parameter is set up, we can now use it as an object in the events. As an example, we will make the enemies play a sound when the player is colliding with them.

![20200329-191811.png](/gdevelop5/tutorials/how-to-make-behavior/pasted/20200329-191811.png)

Let's finish by adding a nice name and sentence in the configuration of this function: ![20200329-180354.png](/gdevelop5/tutorials/how-to-make-behavior/pasted/20200329-180354.png)

Now the last step is to call the function in the scene events sheet.

!!! note

    You may be disappointed at this point! "I don't want to add an event in the events sheet". For now, you can't pass objects to behaviors - this could be an addition in the future.

We need to use the action. You'll find it in the scene events sheet, in the Player actions, as we previously added the behavior to the player.

In the scene, add an action for Player (or the object you added the behavior to). Then choose "Handle enemies", our new action:

![20200329-182405.png](/gdevelop5/tutorials/how-to-make-behavior/pasted/20200329-182405.png)

Finally, let's configure it with our enemies:

![20200329-182601.png](/gdevelop5/tutorials/how-to-make-behavior/pasted/20200329-182601.png)

!!! note

    We use a single object, "SlimeWalk", for the enemies in this example, but you could use a **group** of objects.

Here is the result:

![20200329-182802.png](/gdevelop5/tutorials/how-to-make-behavior/pasted/20200329-182802.png)

If you run the game, you'll now see that when the player collides with the enemy, a sound is played.

Not bad for a single event in the scene events sheet! And we could add more objects and make the behavior more complex. Or we can reuse it for another object that should behave the same as player. We can even disable this behavior if we want the player not to play a sound when colliding with enemies.

It's up to you to decide how "far" you want to push your behavior.

## 3. Let's interact with other object behaviors

Let's now say that your game is getting more complex. For example, enemies now have also their own behavior(s). And this behavior has an action to make the enemies blink. We now want the enemies to blink when the player touches them (as they are hit - we could imagine make them lose some health or play an animation, etc...).

First, the "Blink" behavior already exists. It's available as an extension you can search and install for your project. Let's add it to our enemies. First, we find it:

![20200329-183653.png](/gdevelop5/tutorials/how-to-make-behavior/pasted/20200329-183653.png)

Then we add it to our enemy: ![20200329-183726.png](/gdevelop5/tutorials/how-to-make-behavior/pasted/20200329-183726.png)

It's added, we can configure it: ![20200329-184106.png](/gdevelop5/tutorials/how-to-make-behavior/pasted/20200329-184106.png)

Now, let's go back to our Player behavior. We go in the *HandleEnemies* function and add a new parameter, which is of type "Behavior", just after the "Enemy" object parameter: ![20200329-184732.png](/gdevelop5/tutorials/how-to-make-behavior/pasted/20200329-184732.png)

!!! note

    Rough edge here: it's not super obvious that you have to select a behavior as a parameter to make it part of the previous object. This will be improved in future versions.

And now the function knows that the enemies have a behavior called "Blink"! Let's use the action to make them blink: ![20200329-184916.png](/gdevelop5/tutorials/how-to-make-behavior/pasted/20200329-184916.png)

!!! note

    Another rough edge here: as you added a parameter, you now have to go back to the events sheet and **edit the action** to be sure that the behavior is passed as parameter:

![20200329-185458.png](/gdevelop5/tutorials/how-to-make-behavior/pasted/20200329-185458.png)

(Note the third parameter). Alas if you don't do this, the action will be missing the last parameter and the game won't work.

Now you should be able to run the game and when the player touches a enemy, this enemy is blinking!

## Final note

The behavior we created here is simple, but should give you a sense of the idea of what is possible with custom behaviors.

It's a good idea to think about your game in terms of objects and behaviors that interact with each other. The scene events sheet is the central place where the flow of the game is going on, using behaviors to make most of the actions happen in the game.
