---
title: JavaScript Code events
---
# JavaScript Code events

This event allows you to add custom **JavaScript code** in your game. It's only meant to be used by advanced users who are familiar with JavaScript programming.

To add a JavaScript event, click on the + button in the Events Sheet toolbar, and select JavaScript code:

![](/gdevelop5/events/js-code/pasted/20230305-105515.png)

When added, click on the code to edit it. The code will be executed each time the event is reached by GDevelop.

In all JavaScript events, you have access to a variable named `runtimeScene`. This variable represents the scene being played. Below is an example of a standard GDevelop event, and an equivalent event that uses a JavaScript:

![](/gdevelop5/events/javascript-code-example.png)

If you click on "Click here to choose objects to pass to JavaScript" next to the `runtimeScene` parameter, you get to choose an object from the scene. The instances of this object will be passed to your function as an array called `objects`:

![](/gdevelop5/events/js-code/pasted/20230305-105814.png)

This array is exactly like what an action or a condition would use. For example, the illustration below is an event using a JavaScript event as a sub-event. The JavaScript event will manipulate the enemies that are colliding with the player:

![](/gdevelop5/events/javascript-code-with-objects-example.png)

## Examples

!!! tip

        **See it in action!** 🎮
    Open these examples online. You can do this with the links given below. There is a number of more examples available when you ask GDevelop to create a new project, then click the examples button.

[![](/gdevelop5/events/javascripttexttospeechexample.png)](https://editor.gdevelop.io/?project=example://text-to-speech)

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://text-to-speech){ .md-button .md-button--primary }

[![](/gdevelop5/events/platformerjavascriptblocksexample.png)](https://editor.gdevelop.io/?project=example://javascript-blocks-in-platformer)

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://javascript-blocks-in-platformer){ .md-button .md-button--primary }

## Documentation 📚

  * Read **[the game engine documentation](https://docs.gdevelop-app.com/GDJS%20Runtime%20Documentation/)** to get started.
  * You can also browse directly the **[GDJS game engine source code](https://github.com/4ian/GD/tree/master/GDJS/Runtime)**.

## Code examples

### Read and change the value of a variable

```javascript
const myVar = runtimeScene.getVariables().get("MyVar");
const myVar2 = runtimeScene.getVariables().get("MyVar2");

const currentValue = myVar.getAsNumber();
myVar.setNumber(currentValue + 1);

myVar2.setString("Hello, world");
```

See the documentation of [gdjs.Variable](https://docs.gdevelop.io/GDJS%20Runtime%20Documentation/classes/gdjs.Variable.html) and [gdjs.VariablesContainer](https://docs.gdevelop.io/GDJS%20Runtime%20Documentation/classes/gdjs.VariablesContainer.html).

### Move object at the position of another, check if the game is rendering the first frame

```javascript
const players = runtimeScene.getObjects("Player");
const playerHitBoxes = runtimeScene.getObjects("PlayerHitBox");
// Stop early if for some reason the player or the hitbox object is not found.
if (playerHitBoxes.length === 0 || players.length === 0) return;

// At the first frame only (i.e: at the beginning of the scene).
if (runtimeScene.getTimeManager().isFirstFrame()) {
  // Hide the first instance of PlayerHitBoxes.
  playerHitBoxes[0].hide();
}

// Set the position of the Player object.
players[0].setX(playerHitBoxes[0].getX() - 12);
players[0].setY(playerHitBoxes[0].getY());
```

Equivalent events would be:
![](/gdevelop5/events/hide-and-set-position-player-hitbox.png)

### Change animation according to some conditions on the behavior of an object

!!! tip

    In the code below, we use a comment which is called an annotation.

By writing the **annotation** `/** @type {gdjs.XXX} */` just before the declaration of a variable in JavaScript, you let the code editor know that the variable has the type gdjs.XXX. The editor will be able to assist you by providing **autocompletion** while you type (or when you hover over a word).

Most of the time annotations are not needed. The methods that you are using are already setup with [type annotations](https://docs.gdevelop.io/GDJS%20Runtime%20Documentation/modules/gdjs.html). But when you use a list of objects, you may want to access this object specific method (for example, methods to modify the animation of a sprite object). In this case, you could write `/** @type {gdjs.SpriteRuntimeObject} */`.

If you don't do this, the code will still work, but the editor will only be able to provide you with the methods of `gdjs.RuntimeObject` (the base class).

When you get the behavior from an object, you also know what kind of behavior you're getting. Let the editor know this using an annotation (otherwise, you'll only get autocompletion for the base class, `gdjs.RuntimeBehavior`).

```javascript
const players = runtimeScene.getObjects("Player");
const playerHitBoxes = runtimeScene.getObjects("PlayerHitBox");
if (playerHitBoxes.length === 0 || players.length === 0) return;

/** @type {gdjs.SpriteRuntimeObject} */
const player = players[0];

/** @type {gdjs.PlatformerObjectRuntimeBehavior} */
const platformerBehavior = playerHitBoxes[0].getBehavior("PlatformerObject");

if (platformerBehavior.isJumping() || platformerBehavior.isFalling()) {
  player.setAnimation(1);
} else if (platformerBehavior.isOnFloor()) {
  if (!platformerBehavior.isMoving()) {
    player.setAnimation(0);
  } else {
    player.setAnimation(2);
  }
}

const LEFTKEY = 37;
const RIGHTKEY = 39;
if (runtimeScene.getGame().getInputManager().isKeyPressed(LEFTKEY)) {
  player.flipX(true);
} else if (runtimeScene.getGame().getInputManager().isKeyPressed(RIGHTKEY)) {
  player.flipX(false);
}
```

Equivalent events would be:
![](/gdevelop5/events/change-animation-according-to-behavior-conditions.png)

### Set the position of the camera to the position of an object

```javascript
if (!objects.length) return;

// Here, "objects" refer to a list of "Player", which should be selected
// in the configuration of the function.

runtimeScene.getLayer("").setCameraX(objects[0].getX());
```

This equivalent event would be:
![](/gdevelop5/events/set-camera-x-position-x.png)

### Fade out a sprite object after it is on the floor (using the Platformer Object behavior)

```javascript
objects.forEach(object => {
  /** @type {gdjs.SpriteRuntimeObject} */
  const enemy = object;

  /** @type {gdjs.PlatformerObjectRuntimeBehavior} */
  const platformerBehavior = object.getBehavior("PlatformerObject");

  if (enemy.getAnimation() === 1 && platformerBehavior.isOnFloor() && !platformerBehavior.isMoving()) {
      object.activateBehavior("PlatformerObject", false);
      enemy.setOpacity(enemy.getOpacity() - 50 * object.getElapsedTime(runtimeScene) / 1000);

      if (enemy.getOpacity() === 0) {
          object.deleteFromScene(runtimeScene);
      }
  }
});
```

The equivalent events would be:
![](/gdevelop5/events/fade-out-and-behavior.png)

### Use JavaScript to get the value of a parameter of a function

When use a JavaScript code block inside a function of an extension, a custom behavior or a custom object, you can access to the **parameters** of this function. The way you access to the parameter depends on the **type** of this parameter.

If the parameter is of type `Objects`, you can get the *array of instances* passed to this object:

![](/gdevelop5/events/js-code/pasted/20230305-111256.png)

To get the array of instances, use the function `eventsFunctionContext.getObjects`:

```javascript
eventsFunctionContext.getObjects("myParameter");
```

In this case, with a parameter named `RotatedObjects`, if you want rotate the object by 45 degrees, you can do:

```javascript
const objects = eventsFunctionContext.getObjects("RotatedObjects");
const firstInstance = objects[0];
firstInstance.setAngle(45);
```

You can also read the value of parameters that are numbers or strings. For example, if you have a parameter with type `Number`:

![](/gdevelop5/events/js-code/pasted/20230305-111437.png)

You can read it in the JavaScript code black with `eventsFunctionContext.getArgument`:

```javascript
const angle = eventsFunctionContext.getArgument("Angle");
```

The same code can be used to access **string** or **boolean** parameters.