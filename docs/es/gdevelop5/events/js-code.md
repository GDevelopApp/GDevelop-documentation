---
title: Eventos de Código Java Script (JavaScript Code events)
---
# Eventos de Código Java Script (JavaScript Code events)

¡Este evento te permite agregar código JavaScript personalizado en tu juego!

Solo debe ser utilizado por usuarios avanzados que estén familiarizados con la programación de JavaScript.

Cuando se agrega, haga clic en el código para editarlo. El código se ejecutará cada vez que GDevelop alcance el evento.

Tenga en cuenta que en el código, tiene acceso a una variable llamada _runtimeScene_. La variable, "runtimeScene", representa la escena que se está reproduciendo. A continuación se muestra un ejemplo de un evento GDevelop estándar y un evento equivalente que utiliza un JavaScript: ![](/gdevelop5/events/javascript-code-example.png)

Si hace clic en "Haga clic aquí para elegir objetos para pasar a Javascript" junto al parámetro runtimeScene, una variable de la matriz llamada "objetos" estará disponible para su uso. Aparecerá un menú con los objetos de tu juego. Puede seleccionar el objeto de juego de nuestra elección. Ese objeto se agregará a su matriz de objetos javascript. ![](/gdevelop5/events/jsruntimeclickevent.png)

"objetos" es una matriz que contiene las instancias seleccionadas del objeto que elija. Es exactamente como lo que una acción o condición usaría). Por ejemplo, la siguiente ilustración es un evento que utiliza un evento de JavaScript como un evento secundario. El evento javascript manipulará a los enemigos que chocan con el jugador: ![](/gdevelop5/events/javascript-code-with-objects-example.png)

## Ejemplos

!!! note

        **Véalo en acción!** 🎮
    Abrir los ejemplos Online.

[![400](/ gdevelop5/events/javascripttexttospeechexample.png)](https://editor.gdevelop.io/?project=example://text-to-speech)

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://text-to-speech){ .md-button .md-button--primary }

[![400](/gdevelop5/events/platformerjavascriptblocksexample.png)](https://editor.gdevelop.io/?project=example://javascript-blocks-in-platformer)

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://javascript-blocks-in-platformer){ .md-button .md-button--primary }

## Documentación (Documentación)

- Leé **\[the game engine documentation\](<http://4ian.github.io/GD-Documentation/GDJS%20Runtime%20Documentation/>)** to get started.
- También puede navegar directamente el **\[GDJS game engine source code\](<https://github.com/4ian/GD/tree/master/GDJS/Runtime>)**.

## Ejemplos de Código

### Lee y cambia el valor de una variable.

``` javascript
var myVar = runtimeScene.getVariables().get("MyVar");
var myVar2 = runtimeScene.getVariables().get("MyVar2");

var currentValue = myVar.getAsNumber();
myVar.setNumber(currentValue+1);

myVar2.setString("Hello, world");
```

Véa la documentación sobre [gdjs.Variable](http://4ian.github.io/GD-Documentation/GDJS%20Runtime%20Documentation/classes/gdjs.Variable.html) and [gdjs.VariablesContainer](http://4ian.github.io/GD-Documentation/GDJS%20Runtime%20Documentation/classes/gdjs.VariablesContainer.html).

### Mueve el objeto a la posición de otro, comprueba si el juego está mostrando el primer cuadro.

``` javascript
const players = runtimeScene.getObjects("Player");
const playerHitBoxes = runtimeScene.getObjects("PlayerHitBox");
if (playerHitBoxes.length === 0 || players.length === 0) return;

if (runtimeScene.getTimeManager().isFirstFrame()) {
  playerHitBoxes[0].hide();
}

players[0].setX(playerHitBoxes[0].getX() - 12);
players[0].setY(playerHitBoxes[0].getY());
```

Equivalent events would be: ![](/gdevelop5/events/hide-and-set-position-player-hitbox.png)

### Cambiar la animación de acuerdo con algunas condiciones sobre el comportamiento de un objeto.

!!! note

    En el código a continuación, usamos un comentario que se llama una anotación.

Al escribir la **anotación **`/ **@tipo {gdjs.XXX} * /` justo antes de la declaración de una variable en JavaScript, le indica al editor de código que la variable tiene el tipo gdjs.XXX. El editor podrá asistirlo al proporcionar **autocompletar **mientras escribe (o cuando pasa el cursor una palabra).

La mayoría de las anotaciones de tiempo no son necesarias. Los métodos que está utilizando ya son [documented](http://4ian.github.io/GD-Documentation/GDJS%20Runtime%20Documentation/) con anotaciones de tipo. Pero cuando usa una lista de objetos, es posible que desee acceder a este método específico del objeto (por ejemplo, métodos para modificar la animación de un objeto sprite). En este caso, podría escribir `/ **@type {gdjs.SpriteRuntimeObject} * /`.

Si no haces esto, el código seguirá funcionando, pero el editor solo podrá proporcionarte los métodos de `gdjs.RuntimeObject` (la clase base).

Cuando obtiene un comportamiento de un objeto, también sabe qué tipo de comportamiento está recibiendo. Deje que el editor sepa esto usando una anotación (de lo contrario, solo obtendrá el autocompletado para la clase base, `gdjs.RuntimeBehavior`).

``` javascript
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

var LEFTKEY = 37;
var RIGHTKEY = 39;
if (runtimeScene.getGame().getInputManager().isKeyPressed(LEFTKEY)) {
  player.flipX(true);
} else if (runtimeScene.getGame().getInputManager().isKeyPressed(RIGHTKEY)) {
  player.flipX(false);
}
```

Equivalent events would be: ![](/gdevelop5/events/change-animation-according-to-behavior-conditions.png)

### Establecer la posición de la cámara en la posición de un objeto.

``` javascript
if (!objects.length) return;

// Aquí, "objetos" se refieren a una lista de "Jugador", que debe seleccionarse
// en la configuración de la función.

runtimeScene.getLayer("").setCameraX(objects[0].getX());
```

Este evento equivalente sería: ![](/gdevelop5/events/set-camera-x-position-x.png)

### Desvanecer un objeto sprite después de que esté en el piso (utilizando el comportamiento del objeto Platformer)

``` javascript
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

Los eventos equivalentes serían: ![](/gdevelop5/events/fade-out-and-behavior.png)
