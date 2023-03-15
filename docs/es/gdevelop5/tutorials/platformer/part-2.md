---
title: part-2
---
FIXME **This page is not fully translated, yet. Please help completing the translation.**  
*(remove this paragraph once the translation is finished)*

# Tutorial de Plataformas, Parte 2: Crea un Personaje Jugable

Esta parte del tutorial explica cómo agregar un personaje jugable al juego.

Aprenderás cómo:

- Crear un objeto que represente al personaje jugable.
- Deje que el jugador controle el objeto usando las teclas de flecha.
- Sigue al personaje jugable con la cámara.

## Series

Estás leyendo la **Parte 2** del [Tutorial de Plataformas](/es/gdevelop5/tutorials/platformer/start).

1\. [Tutorial de Plataformas, Parte 1](/es/gdevelop5/tutorials/platformer/start) 2. Tutorial de Plataformas, Parte 2 3. [Tutorial de Plataformas, Parte 3](/gdevelop5/tutorials/platformer/part-3) 4. [Tutorial de Plataformas, Parte 4](/gdevelop5/tutorials/platformer/part-4) 5. [Tutorial de Plataformas, Parte 5](/gdevelop5/tutorials/platformer/part-5) 6. [Tutorial de Plataformas, Parte 6](/gdevelop5/tutorials/platformer/part-6) 7. [Tutorial de Plataformas, Parte 7](/gdevelop5/tutorials/platformer/part-7) 8. [Tutorial de Plataformas, Parte 8](/gdevelop5/tutorials/platformer/part-8)

## Paso 1: Crear un objeto

El primer paso es crear un objeto que represente al personaje jugable. Si siguió la primera parte de este tutorial, este debería ser un proceso familiar.

To create an object for the playable character:

1\. Create a **Sprite** object named "Player". 2. Use the "p1_stand.png" asset as the animation's only frame. 3. Assign a name of "Idle" to the animation. 4. Drag an instance of the object into the scene.

![](/gdevelop5/tutorials/platformer/player-object.jpg)

!!! note

    [Platformer Tutorial, Part 4](/gdevelop5/tutorials/platformer/part-4) explains how to animate the character.

## Step 2: Add a behavior to the object

If you preview the game, you can't control the "Player" object. This is because, by default, objects don't do anything. To make objects do something, you need to assign one or more [behaviors](/gdevelop5/behaviors) to them.

GDevelop comes with a large library of behaviors that you can add to objects in a matter of clicks. One of these behaviors is the **Platformer character** behavior, which lets you control an object as a playable character.

To add the **Platformer character** behavior to the object:

1\. Right click the **Player** object. 2. Select **Edit object**. 3. Switch to the **Behaviors** tab. 4. Click **Add a behavior to the object**. 5. Select **Platformer character**. 6. Click **Apply**.

If you preview the game, you can control the player with the arrow keys. There's a side-effect though: an object with the **Platformer character** behavior is affected by gravity, so in this case, the playable character quickly fall out of the frame.

![](/gdevelop5/tutorials/platformer/platformer-character-behavior-preview.gif)

## Step 3: Follow an object with the camera

To prevent the character from falling out of frame, the game needs platforms and a camera that follows the player. The [next part of the tutorial](/gdevelop5/tutorials/platformer/part-3) is about platforms, so this section is about the camera.

To make the camera follow the player, you need to create an [event](/gdevelop5/events). In GDevelop, events let you define cause and effect, so when something happens (cause) you can trigger something else to happen (effect).

Events are made up of two parts: conditions and actions. The condition is what determines when the event happens and the action is what happens when the event occurs.

GDevelop has a large library of conditions and actions that add all sorts of features to a game. A big part of learning GDevelop is discovering the available options. In this case, the game needs the **Center the camera on an object** action.

To add the **Center the camera on an object** action:

1\. Opens the Events editor. 2. Click **Add a new event**. 3. Without specifying a condition, click **Add action**. By not specifying a condition, the action runs in every frame. Therefore, if the game runs at 60 frames per second, the action runs 60 times per second. 4. Click **Other actions**. 5. Expand **Layers and cameras**. 6. Select **Center the camera on an object**. 7. Select the "Player" object. 8. Click **OK**.

![](/gdevelop5/tutorials/platformer/center-camera-event.jpg)

If you preview the game, the player still falls -- there's still no platforms, after all -- but the camera also follows the player. As a result, the player remains within the frame.

![](/gdevelop5/tutorials/platformer/center-camera-on-object-preview.gif)

## Next steps

Read [Platformer Tutorial, Part 3](/gdevelop5/tutorials/platformer/part-3)
