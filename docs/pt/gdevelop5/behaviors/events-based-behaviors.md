---
title: events-based-behaviors
---
FIXME **This page is not fully translated, yet. Please help completing the translation.**  
*(remove this paragraph once the translation is finished)*

# Comportamentos personalizados: crie seus próprios comportamentos com eventos.

Os comportamentos são muito úteis para adicionar rapidamente alguns recursos pré-determinados aos objetos. Eles são fáceis de usar e permitem adicionar recursos complexos aos seus objetos sem ter que recriar tudo com eventos, o que pode ser complicado e tornaria a planilha de eventos desordenada (mesmo que [groups](/gdevelop5/events/group), [functions](/gdevelop5/events/functions) e [external events](/gdevelop5/interface/project-manager) possam ajudar).

Agora no GDevelop você pode criar seus próprios **comportamentos personalizados**. Como os habituais comportamentos internos, eles podem ser anexados a objetos. Eles irão então * interagir com o objeto automaticamente *. Eles podem **mover o objeto**, alterar suas **variáveis**, alterar as animações (para objetos Sprite), alterar o texto (para objetos de texto) e mais geralmente, fazer qualquer coisa que você normalmente pode fazer com eventos.

!!! note

    Se você quiser ver um exemplo de como os comportamentos podem ser usados em seu jogo, leia [How to make a behavior for an object](/gdevelop5/tutorials/how-to-make-behavior). É uma explicação passo a passo e um bom guia sobre como arquitetar seu jogo com comportamentos.

## Crie um novo comportamento

Os comportamentos são agrupados em "extensões". Eles funcionam de forma semelhante a [extensions que você pode escrever](/gdevelop5/extending-gdevelop) para o GDevelop, exceto que eles são inteiramente compostos de funções ou comportamentos impulsionados por eventos. Você pode ver a lista de todas as extensões que o jogo tem no [Project Manager](/gdevelop5/interface/project-manager), bem como adicionar uma nova extensão:

![](/gdevelop5/events/project-manager-functions-extensions.png)

Clique no botão **+ **na parte inferior para criar uma nova extensão. Você pode clicar com o botão direito do mouse para renomeá-la. É uma boa ideia ter funções e comportamentos relacionados à mesma coisa em uma única extensão.

Clique na extensão da lista para abrir seu editor. Por padrão, não há funções nas extensões. Adicione uma clicando em **Add a new behavior**, no lado esquerdo:

![](/gdevelop5/behaviors/add-events-based-behavior.png)

O novo comportamento é adicionado. Você deve renomeá-lo para dar um nome de acordo com o que você quer fazer. Por exemplo, se seu comportamento será usado para fazer um inimigo se mover para a esquerda e para a direita em uma plataforma, você pode chamá-lo de `HorizontalMovement` (apenas caracteres alfanuméricos e sublinhados são permitidos nos nomes). Se o seu comportamento está rastreando automaticamente os danos e excluindo objetos que estão muito danificados, você pode chamá-lo de `Destructible`.

Você também deve editar a configuração do comportamento clicando com o botão direito sobre ele e escolhendo "Propriedades". Você pode inserir a descrição, o nome exibido no editor e especificar se deve ser restrito a algum tipo de objeto:

![](/gdevelop5/behaviors/setup-destructible-behavior.png)

Os comportamentos também podem incorporar propriedades, que são números, strings ou booleanos que são armazenados dentro do comportamento. Confira a seção abaixo sobre como adicionar e usar propriedades.

### Add functions to your behavior

Click on the behavior in the list to see the list of functions composing the behavior. It will appear on the right side panel.

![](/gdevelop5/behaviors/empty-behavior-functions-list.png)

By default, a behavior is empty and **does nothing**. To add interactivity, you can add a new function (also called "method"). You'll be given the choice between some predefined functions, called lifecycle methods, or a custom function. Lifecycle methods will be called by the game engine automatically at some key moment during the game. Custom functions will be available as conditions or actions (like [usual functions](/gdevelop5/events/functions)).

![](/gdevelop5/behaviors/behavior-choose-method.png)

### Lifecycle methods

Predefined lifecycle methods are as such:

* **onCreated**: events inside the function will be run when **a new instance of an object** with the behavior is created. * **onStepPreEvents**: will be run every time a frame is rendering on the screen **before the "traditional" events** of the scene. Typically in most games, this is done 60 times per second. This is called for **every single object** having the behavior if the behavior is not deactivated. * **onDestroy**: events that will be run when an instance of the object having the behavior is **deleted** (if multiple objects are removed at the same time, events will be run for each object). This is done even if the behavior is deactivated. * **onDeActivate**: events that will be run once, after the behavior is deactivated on an object. * **onActivate**: events that will be run once, after the behavior is activated again on an object. * **onStepPostEvents**: events that will be run for every single object having the behavior, **after** the "traditional" events of the scene, if the behavior is not deactivated. Typically in most games, this is done 60 times per second. As possible, we recommend to prefer onStepPreEvents, to run your logic before events and give the events in the scene a chance to react to changes that happen on the objects.

This is an example of some events inside onStepPreEvents in the case of behavior that automatically deletes objects that are too damaged:

![](/gdevelop5/behaviors/behavior-lifecycle-method-example.png)

### Custom action, condition or expression

If you choose to create a custom function for your behavior, you can then configure your function like a traditional function, by choosing if it's an action, condition or expression, entering a name, description and a sentence to be displayed in the events sheet.

For example, this creates a new action that can be used to add damage to the object:

![](/gdevelop5/behaviors/behavior-custom-function-example.png)

## Use the behavior on an object

### 1) Add the behavior to an object

Once your behavior is created, you can start attaching it to objects. The best part about this is that your event based behavior will be listed like any other "[built-in behavior](/gdevelop5/behaviors)" that is bundled with GDevelop.

Here, you can see the "Destructible Object" behavior for example (that was created in the previous screenshots):

![](/gdevelop5/behaviors/choose-custom-behavior-in-list.png)

The custom behavior that you created is then displayed in the list of the behaviors attached to the object:

![](/gdevelop5/behaviors/screenshot_2019-05-07_23.48.04.png)

You can run the game and see that the events in "doStepPreEvents" function (or "doStepPostEvents") will be executed. In the example of the Destructible behavior that was created, if the "Damage" variable is set to a number greater or equal to 100, the object will be destroyed automatically.

To test this, we've added the "Destructible" behavior to object "Platform". Then, when using the debugger, we can inspect "Platform" instances and see that they have a "Damage" variable (set to 0). If we use the debugger (or an event) to set it to 100, the object is removed from the scene:

![](/gdevelop5/behaviors/example-test-destructible-behavior-debugger.png)

### 2) Use actions/conditions/expressions

Like any other "built-in behavior", you can also use actions/conditions (or expressions) if you have declared functions as such in the behavior. For example, in the "Destructible" behavior, we created an action to cause some damage to the object. We can find it and use it in the events sheet:

![](/gdevelop5/behaviors/custom-behavior-action.png)

It is displayed in the events sheet: ![](/gdevelop5/behaviors/custom-behavior-action-events-sheet.png)

As you can see, this allows creating very expressive and easy-to-read events. You can then make the behavior more complex or reuse it on other objects.

## Add and use properties in a behavior

What is interesting with behaviors is that they can hold information inside of them, much like variables of an object. These information are called properties. They can be a number, a string (text) or a boolean (which is like a virtual checkbox, either checked or unchecked).

You can use these properties to make your behavior customizable (for example, you can have the speed, an amount of damage, the life points, the power points, the mana, etc... as properties of your behavior - depending on what your behavior is doing).

To show and add properties to your behavior, edit it and click on the "Properties" tab. In this example, you can see a behavior called "Health", that has properties to store the health of the object and the minimum time between two hits on the object:

![](/gdevelop5/behaviors/health-behavior-properties.png)

Properties can be:

* Number, string or booleans (will be displayed as a checkbox)
* They have a default value, that will be used if the value is not changed when adding the behavior to an object.
* They can be visible in the editor, when added to an object, or invisible.
* Finally, they have a label that will be displayed in the editor.

### Use actions and conditions to manipulate the properties

Once you have created some properties on your behavior, conditions and actions will be automatically added in the events sheet. For each property, there will be a condition to compare its value, and an action for changing it. Strings and numbers will also have an expression to get their values.

!!! note

    If you rename your properties, the actions/conditions/expressions will be updated automatically.

!!! note

    These actions/conditions/expressions won't be usable from outside of the behavior. Properties are said to be "private", they can only be manipulated by the behavior. If you want to have them modified by the scene events, create new actions/conditions for this in your behavior.

## A word about the advantages of behaviors

Creating your own behaviors has multiple advantages:

* *Encapsulation*: by adding logic inside a custom behavior, you can keep a clear events sheet, with fewer events so it's easier to read and maintain. Behaviors can have actions/conditions and expressions that run logic, so you don't have to repeat long instructions in the events sheet. You can just use the action/condition the behavior providing as you would normally do with any other behavior. * *Reusability*: let's say that you created a behavior to have an enemy move and lose a life if hit by the player. If you want to create a slightly different enemy, but based on the same principles, you can create a new object, then add the same behavior with different properties. In a few clicks, you can have a new enemy in your game. * *Collaboration*: let's say you are working in a team or would like to make your project open-source and invite people to contribute with new features and gameplay. Custom behavior makes it possible for anyone to design and create self-contained features and game logic that we can easily import into a project and used by anyone without prior knowledge required including level and game designers who don't normally work on game logic or at least prefer not to.

!!! note

    Encapsulation and reusability are core concepts in programming. In other game engines, like Unity, objects and behaviors might be named entities and components.

In the future, updates will also ease the *composability* of behaviors.

## Examples/ideas for custom behaviors

You can imagine tons of different behaviors. Here are a few examples:

* A behavior to **manage the health of an enemy or a boss**.

- There can be an action "Hit the object", a condition "Is the object dead?". The behavior will take care of updating the object variables to track the life of the enemy (for example, when the enemy is hit, you remove some life.
- Then, life is regenerated progressively at each frame of the game) and the condition "Is the object dead?" will be able to check if the life reached 0 or not.

* Another idea can be to put the events to make **an enemy move following a complex pattern** on the screen inside a behavior.

- You can add actions/conditions to change the movement, change the speed, etc... All of this will be in a behavior that can be added to any other object in a few clicks.

* A behavior can **automatically update the Score** in your game when enemies are destroyed, or items collected.

- You can create a behavior that increases the "Score" variable when the object is destroyed. You can then create items, collectibles or enemies that have this behavior, and when they are collected or killed, the score will automatically increase.

!!! note

     New extensions are being created by the community all the time! If you are interested in helping with this, start by looking at the [GDevelop Extension Team](https://trello.com/b/AftjL2v1/gdevelop-extensions) (on Trello). You can also start discussing your ideas for extensions on the [GDevelop Discord](https://discordapp.com/invite/JWcfHEB) channel named \#extension.
