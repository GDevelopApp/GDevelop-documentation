---
title: basic-game-making-concepts
---
FIXME **This page is not fully translated, yet. Please help completing the translation.**

*(remove this paragraph once the translation is finished)*

# 기본적인 게임 제작: GDevelop을 시작하기 위해 알아야 할 사항

GDevelop의 기본 원리는 간단합니다. 프로그램을 시작하기 위해 아래의 내용을 읽어 봅시다. GDevelop를 설치하지 않으셨다면 [최신 버전](https://gdevelop.io/download)을 설치하세요.

## 화면에 물체를 나타내기: 오브젝트

화면에 있는 모든 것을 **"오브젝트"**라고 합니다. 다양한 종류의 오브젝트는 다양한 게임 요소들을 화면에 나타냅니다. 예를 들어 대부분의 게임 그래픽은 "스프라이트"로, 텍스트는 "텍스트"로, 불이나 스파크같은 이펙트들은 "입자"로 나타낼 수 있습니다.

## 오브젝트의 위치를 지정하기: 좌표

GDevelop 화면/장면 상의 오브젝트는 **X, Y 좌표**를 가집니다. 좌표는 *데카르트 평면*의 X축과 Y축에 대응합니다.

X 좌표는 왼쪽으로 갈수록 *감소*하고, 오른쪽으로 갈수록 *증가*합니다. Y 좌표는 아래로 갈수록 *증가*하고 위로 갈수록 *감소*합니다.

![pres_coord1.png](/wiki/pres_coord1.png)

오브젝트를 이동하거나 회전시키기 위하여 원하는 각도를 설정할 필요가 있습니다. 아래의 그림은 GDevelop가 이해하는 회전각도를 나타냅니다:

![pres_coord2.png](/wiki/pres_coord2.png)

만약 **사인**이나 **코사인**과 같은 삼각함수를 이용할 경우, 각도를 라디안으로 표현해야 합니다. (1 라디안은 180/π 도이고, 1도는 π/180 라디안입니다. π(원주율)은 대략 3.14159에 가까운 값입니다.)

## 이벤트와 이벤트가 오브젝트를 선택하는 법

당신은 게임의 규칙을 만들기 위해 이벤트를 만듭니다. 이벤트는 조건과 액션으로 이루어져 있습니다. 대부분의 조건과 액션은 오브젝트에 적용됩니다:

* 조건은 오브젝트에 **테스트**를 실행합니다. * 액션은 오브젝트를 **움직이게 합니다.** 액션으로 오브젝트의 위치나 생김새 등등을 바꿀 수 있습니다.

조건이 없는 액션은 모든 오브젝트에 적용됩니다. 만약 오브젝트를 이벤트에서 최초로 사용할 경우, GDevelop는 그 장면의 그 오브젝트의 이름을 가진 **모든 오브젝트**를 시험하거나 수정할 것입니다. 만약 오브젝트를 같은 이벤트에서 다시 사용한다면 GDevelop는 이전 조건에 적용된 오브젝트만 시험하거나 수정할 것입니다.

예를 들어봅시다. 아래의 이벤트는 조건을 가지지 않고 있습니다. 따라서 "Square"라는 이름의 **모든** 오브젝트를 삭제할 것입니다.

![](/gdevelop5/tutorials/delete-square.png)

아래의 이벤트는 조건을 가지고 있습니다. 따라서 **오직** 100픽셀 이하의 X 좌표를 지닌 "Square"오브젝트만이 삭제될 것입니다.

![](/gdevelop5/tutorials/delete-square-condition.png)

!!! note

    **액션을 넣어줍시다!** 🎮아래의 예제를 온라인으로 열어봅시다: <https://editor.gdevelop.io/?project=example://object-selection>

[![](/gdevelop5/tutorials/objectselection-pickobject.png)](https://editor.gdevelop.io/?project=example://object-selection)

## 이벤트: 순서가 중요하다

이벤트에서 순서는 **매우 중요합니다!!**

제일 위에 있는 이벤트가 먼저 실행됩니다. 이벤트는 게임이 비춰질 경우 계속 실행됩니다. 비추어지는 것을 우리는 프레임이라고 부릅니다. 매초마다 60번 실행됩니다. 아래의 예제는 동등하지 않습니다:

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
