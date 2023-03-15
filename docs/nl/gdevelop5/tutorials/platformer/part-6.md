---
title: Platformer Tutorial, Deel 6 - Vijanden toevoegen aan de game
---
# Platformer Tutorial, Deel 6: Vijanden toevoegen aan de game

In dit deel van de tutorial wordt uitgelegd hoe je vijanden aan het spel kunt toevoegen die langs een vaste route heen en weer bewegen. In het volgende deel van de tutorial wordt uitgelegd hoe de speler deze vijanden kan doden en er door gedood kan worden.

## Reeks

Je leest **Deel 6** van de [Platformer Tutorial](/gdevelop5/tutorials/platformer/start).

1. [Platformer Tutorial, Deel 1](/nl/gdevelop5/tutorials/platformer/start)
2. [Platformer Tutorial, Deel 2](/nl/gdevelop5/tutorials/platformer/part-2)
3. [nl:[gdevelop5:tutorials:platformer:part-3|Platformer Tutorial, Deel 3]]
4. [Platformer Tutorial, Deel 4](/nl/gdevelop5/tutorials/platformer/part-4)
5. [Platformer Tutorial, Deel 5](/nl/gdevelop5/tutorials/platformer/part-5)
6. Platformer Tutorial, Deel 6
7. [Platformer Tutorial, Deel 7](/gdevelop5/tutorials/platformer/part-7)
8. [Platformer Tutorial, Deel 8](/gdevelop5/tutorials/platformer/part-8)


## Stap 1: Maak een object voor de vijand

1. Maak een sprite object met de naam "Slime".
2. Voeg een animatie toe aan het object. Gebruik hiervoor de volgende bestanden:

   - slimeWalk1.png
   - slimeWalk2.png
3. Vink de **Loop** optie aan.
4. Sleep een instantie van het object toe aan de scène.

![](/gdevelop5/tutorials/platformer/06-01.jpg)

Als je een voorbeeld van de game bekijkt zie je een geanimeerde vijand op het scherm.

![](/gdevelop5/tutorials/platformer/06-02.gif)

## Stap 2: Laat de vijand naar rechts bewegen

In het vorige deel van de tutorial werd uitgelegd dat er drie type variabelen zijn:

- Object
- Scene
- Global

Een _object_ variabele is gekoppeld aan een specifiek object. Dit betekend dat de variabele een waarde bevat die alleen beschikbaar is voor het object waar die aan gekoppeld is.

Om een variabele aan een object toe te voegen:

1. Klik met de rechter muisknop op het "Slime" object.
2. Selecteer **Edit object variables**.
3. Voer een variabele toe met de naam "direction" en de waarde "right". Dit is de standaard waarde van de variabele.
4. Klik op **Apply**.

Deze variabele "direction" houdt de huidige richting van de vijand bij. In een latere stap kunt je de richting van de vijand wijzigen door de waarde van de variabele te wijzigen.

![](/gdevelop5/tutorials/platformer/06-03.jpg)

Voeg een event toe om de vijand naar rechts te laten bewegen:

1. Open de Events editor.
2. Maak een nieuw event.
3. Voeg de  **Text of an object's variable** conditie toe aan het "Slime" object.
4. In het **Variable** veld, typ "direction".
5. In het **Sign of the test** veld, selecteer **= (equal to)**.
6. In het **Value to compare** veld, typ "right" (inclusief de dubbele quotes).
7. Klik op **OK**.

![](/gdevelop5/tutorials/platformer/06-04.jpg)

Voeg vervolgens een actie toe aan het event:

1. Voeg de **Add a force (angle)** actie toe aan het event.
2. In het **Object** veld, selecteer "Slime".
3. In het **Angle** veld, typ "0".
4. In het **Speed** veld, typ "100".
5. Vink de optie **Instant** aan.
6. Klik op **OK**.

![](/gdevelop5/tutorials/platformer/06-05.jpg)

Dit is hoe het event eruit ziet:

![](/gdevelop5/tutorials/platformer/06-06.jpg)

Dit event zorgt er nu voor dat zolang de waarde van de "direction" variabele "right" is het "Slime" object naar rechts beweegt. Omdat het object nu nog niet van richting veranderd valt het uiteindelijk van het platform af.

![](/gdevelop5/tutorials/platformer/06-07.gif)

## Stap 3: Verander de richting van de vijand

To make the enemy change direction, add two invisible objects to the scene -- one called "Left" and one called "Right" -- and place them on other side of the enemy.

Then, when the enemy collides with one of the objects, you can flip them around and move them in the other direction. This creates the illusion of the enemy following a set route.

This step focuses on creating the "Left" object. When the enemy collides with this object, they'll change direction from left to right. (The step that follows focuses on the "Right" object.)

### Create the "Right" object

1. Create a Sprite object named "Left".
2. As the default sprite, use the "left.png" asset.
3. Drag an instance of object into the scene (to the right of the enemy).

![](/gdevelop5/tutorials/platformer/06-08.jpg)

### Detect when the enemy collides with the "Left" object

1. Create a new event.
2. Add a **Collision** condition that checks if the "Slime" object is colliding with the "Left" object.

![](/gdevelop5/tutorials/platformer/06-09.jpg)

### Change the value of the "direction" variable

1. Add the **Modify the text of a variable of an object** action to the event.
2. In the **Variable** field, type "direction".
3. From the **Modification's sign** dropdown, select **= (set to)**.
4. In the **Value** field, type "left" (with quotation marks).

![](/gdevelop5/tutorials/platformer/06-10.jpg)

### Flip the "Slime" object

1. Add the **Flip the object horizontally** action to the event.
2. Set the **Activate flipping** option as **Yes**.

This ensures that the "Slime" object changes *and* faces a different direction, rather than just changing directions.

### Change the enemy's direction

1. Add the **Add a force (angle)** action to the event.
2. In the **Object** field, select "Slime".
3. In the **Angle** field, type "180".
4. In the **Speed** field, type "100".
5. Enable the **Instant** option.
6. Click **OK**.

If you preview the game, the enemy changes direction when they collide with the "Left" object.

![](/gdevelop5/tutorials/platformer/06-12.gif)

### Hide the "Left" object

1. Create a new event.
2. Add the **At the beginning of the scene** condition to the event.
3. Add the **Hide** action to the "Left" object.

![](/gdevelop5/tutorials/platformer/06-11.jpg)

If you preview the game, the enemy appears to change direction by their own "choice".

![](/gdevelop5/tutorials/platformer/06-13.gif)

## Step 4: Change the enemy's direction (again)

After the enemy collides with the "Left" object, they start moving right and never stop moving right. To ensure they change direction again, create an object named "RIght". This object should be the same as the "Left" object, except for the following details:

- Use the "right.png" asset.
- When the "Player" object collides with the "Slime" object, set the "direction" variable to "right".
- For the **Flip the object horizontally** action, set **Activate flipping** to **No**.

Then drag an instance of the "Right" object into the scene, to the left of the enemy.

![](/gdevelop5/tutorials/platformer/06-14.jpg)

If you preview the game, the enemy moves back and forth between the invisible markers.

![](/gdevelop5/tutorials/platformer/06-15.gif)

## Next step

Read [Platformer Tutorial, Part 7](/gdevelop5/tutorials/platformer/part-7).