---
title: basic-game-making-concepts
---
FIXME **This page is not fully translated, yet. Please help completing the translation.**

*(remove this paragraph once the translation is finished)*

# Основные концепции создания игр: что нужно знать, чтобы начать с GDevelop

Основные концепции создания игр в GDevelop просты. Для начала прочитайте ниже следующую информацию. Если у вас нет GDevelop, [скачайте последнюю версию здесь](https://gdevelop.io/download).

## Отображение вещей на экране: Объекты

Всё, что *отображается на экране* называется **"Объект"**. Для отображения игровых элементов на экране могут использоваться разные типы объектов. Например, большинство игровой графики являются объектами "Спрайт", тексты могут отображаться с помощью объектов "Текст" , а специальные эффекты, такие как огонь или искры, могут создаваться с помощью "Излучателей частиц".

## Позиционирование объектов: Координаты

Объекты экрана/сцены GDevelop имеют **координаты X и Y**. Эти координаты соответствуют горизонтальной позиции (Ось X) and the vertical position (Ось Y) на *Декартовой плоскости*.

Координата X *уменьшается* при движении влево и *увеличивается* при движении вправо. Координата Y *увеличивается* при движении вниз и *уменьшается* при движении вверх.

![pres_coord1.png](/wiki/pres_coord1.png)

In order to move or rotate objects, you will need to specify the desired angle in degrees. The illustration below demonstrates how GDevelop understands the angle of rotation:

![pres_coord2.png](/wiki/pres_coord2.png)

If you use trigonometric functions like the **sine** or the **cosine**, you will need to express the angles in **radians**. (1 radian = 180/PI degrees and 1 degree = PI/180 radians. PI is the number which is approximately equal to 3.14159).

## Events and how objects are selected by these Events

Events, that you use to create the rules of your game, are composed of conditions and actions. Most conditions and actions refer to objects:

* Conditions run a **test** on the objects. * Actions **manipulate** the object. They can change the object position, appearance, etc...

An action, without a condition, refers to all objects. If you use an object for the first time in an event, GDevelop will test or modify **all objects** with this name in the scene. If you use the object in the same event again, GDevelop will test or modify only the objects which have been picked by the previous conditions.

For example, this event has no condition. It will delete **all** objects called "Square":

![](/gdevelop5/tutorials/delete-square.png)

The event below has a condition. It will delete **only** the "Square" objects with an X position that is less than 100 pixels:

![](/gdevelop5/tutorials/delete-square-condition.png)

!!! note

    **See it in action!** 🎮Open this example online: <https://editor.gdevelop.io/?project=example://object-selection>

[![](/gdevelop5/tutorials/objectselection-pickobject.png)](https://editor.gdevelop.io/?project=example://object-selection)

## Events: the order is important

The order of events **does matter**!

Events at the top are executed first. Events are executed every time your game is displayed. This display is called a frame. It executes about 60 times per second. The following examples are **not** equivalent:

![](/gdevelop5/tutorials/create-then-delete-square.png)

![](/gdevelop5/tutorials/delete-then-create-square.png)

* The first pair of events actions create a "Square" object at coordinates X: 100. Y: 200 (100;200). Then the event deletes the created square immediately. **No** "Square" is displayed on the screen. It's deleted just after being created. * The second pair of events actions deletes all the "Square" objects from the scene/screen. It then creates one "Square" at the scene/screen coordinates X: 100, Y: 200 (100;200). This event shows a square is **visible** on the scene (before being deleted at the next frame. It will, then, be recreated immediately.

## Behaviors: pre-defined rules and logic for objects

**Behaviors** allow to enhance an object with some *pre-defined logic*. Behaviors can be fairly simple, automating simple tasks or much more advanced. For example:

* A behavior can be used to *automatically* remove an object from the game when it *goes out of the screen* (limiting the game memory usage). * Another behavior can be used to *move objects on the screen with the keyboard arrows*. * Yet another behavior can be used to allow the object to be *dragged on screen* with the mouse or by touching the object. * The *Physics* behavior is an example of an advanced behavior which make your objects move in a realistic way, following the laws of physics.

**Objects** and **Behaviors** can be manipulated using events. You can read the pages about [Objects](/gdevelop5/objects) and [Behaviors](/gdevelop5/behaviors) to know more about them.

!!! note

    You can create *custom behaviors* for your objects. It's even recommended when your game grows. This allow you to put logic about what your objects are doing in the custom behaviors, rather than bloating the events sheet of the scene. You can [read more in this article](/gdevelop5/tutorials/how-to-make-behavior).

## Moving objects: using the built-in forces

Moving objects can be achieved with **forces**. Forces are used to "push" objects.

You can specify:

- the coordinates of a force on the X and Y axis, in pixels,
- or its polar coordinates (the force angle, in degrees, and length, in pixels),
- if the force is instant (will only push "a bit" the object) or continuous (will keep pushing the object until it's removed).

### Example

Say you want to move an object towards the bottom:

![pres_vector.png](/wiki/pres_vector.png)

You can add a force using X/Y coordinates by specifying 0 for the X coordinate and, say, 150 pixels for the Y coordinate. You can also use polar coordinates and add a force with an angle of 90° and a length of 150 pixels.

### Other ways of moving objects

Some "behaviors", like the Physics engine or Pathfinding, may move the objects by themselves. In this case, it is better not to use the builtin forces system and instead rely only on actions provided by these behaviors.

!!! note

    **See it in action!** 🎮Open this example online: <https://editor.gdevelop.io/?project=example://move-object-with-physics>

[![](/gdevelop5/tutorials/moveobjectwithphysics.png)](https://editor.gdevelop.io/?project=example://move-object-with-physics)

!!! note

    These other ways of moving objects are explained in [this how-to page](/gdevelop5/tutorials/how-to-move-objects).

## Storing any information in memory: Variables

A Variable allows you to store **data**. For example, a variable can store a number or a text. We might compare them to drawers or boxes where we can file notes. Any data can be stored in a variable, as long as it is in *text* or *number* format. Such things as the number of lives a player has remaining, a player's high score, the number of bullets left, and/or the number of enemies killed are all examples of what can be stored in a variable. You are probably going to store numbers in variables as a common practice.

![pres_variable.png](/wiki/pres_variable.png)

Actions and conditions test or change a variable *value*.

#### Where are variables stored? (variable "scope")

The *scope* of a variable determines the place a variable can be accessed. In GDevelop, there are three variable scopes are available:

* **Global** variables are accessible from all the game scenes. For instance, they can be used to store the player's score across different levels/scenes. * **Scene** variables are only accessible from the scene they are created in. They can be used for data that only concerns one scene. A Scene variable would be able to access the time remaining to complete the level/scene.

* **Object** variables only concern one object. For example, a hero can have a "Health" or "Ammo" variable.

!!! note

    Read more about variables on the [Variables](/gdevelop5/all-features/variables) page. Variables are used a lot in games: most examples use them and tutorials will make use of them too.

!!! note

    Want to see how variables are used in a video tutorial? Check this tutorial: [Variables explained for Non-programmers](https://www.youtube.com/watch?v=SRfpBTgx-PY).

## An advanced notion: the "time elapsed" since last frame (TimeDelta)

The game evaluates events and repaints the screen several times per second: we say that the game is *refreshed*, *updated* during a "tick". How often this happens depends on your computer resources: a slow computer can render 25 frames per second, a fast one 60. GDevelop can usually make sure that this value is the same on all computers. However, the speed of some operations can change from computer to computer, for example, mathematical operations and the rendering of movements.

To make the speed of changes constant, use the *`TimeDelta()` expression*, which returns the time in seconds since the last frame. For example, don't do this:

![](/gdevelop5/tutorials/update-life-no-timedelta.png)

But do this instead:

![](/gdevelop5/tutorials/update-life-timedelta.png)

* The first event is adding 20 to the variable every time the game is refreshed (i.e. as much as possible, up to 60 times per second). It's **not correct** to use such event as the speed of the increase of the variable will not be the same from computer to computer: we cannot predict the value of the variable after 10 seconds for example - as it depends on the number of frames of the game painted.

* The second event is **correct and reliable** : The number 300 is multiplied by TimeDelta(). Thus, the variable will be increased at the same time on all computers. As TimeDelta() returns a time in second, it allows you to quantify exactly the amount: In our case, the variable will grow at 300 units/second. Thus, we can predicate that life will increase by 3000 units in 10 seconds - whatever the number of frames painted during this time.

!!! note

    As GDevelop will run your game at a maximum of 60 images per second, you usually won't notice an issue if you're using the first event. It's still a good idea to keep an eye on this and use the version with `TimeDelta()` instead.

**Rule of Thumb:** Use _TimeDelta()_ when you want to continually add some amount to a value. If your action is meant to be launched only once (for example, during a collision where you then delete the object), it's ok to use a discrete value without TimeDelta - as it does not depend on the speed of the game.

!!! note

    When you're moving an object using forces, there is no need to use TimeDelta() as GDevelop automatically uses it.

## And... that's almost all you need to know

➡️ You can continue to read **[the tutorials](/gdevelop5/tutorials)** to know more about creating real games with GDevelop!
