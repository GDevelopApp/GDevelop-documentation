---
title: Platformer Tutorial, Deel 7 - Laat vijanden de speler doden (en de speler de vijanden doden)
---
# Platformer Tutorial, Deel 7: Laat vijanden de speler doden (en de speler de vijanden doden)

In dit deel van de tutorial wordt uitgelegd hoe de speler de vijanden van het spel kan doden, en kan worden gedood door de vijanden.

## Reeks

Je leest **Deel 7** van de [Platformer Tutorial](/gdevelop5/tutorials/platformer).

1. [Platformer Tutorial, Deel 1](/gdevelop5/tutorials/platformer)
2. [Platformer Tutorial, Deel 2](/gdevelop5/tutorials/platformer/part-2)
3. [Platformer Tutorial, Deel 3](/gdevelop5/tutorials/platformer/part-3)
4. [Platformer Tutorial, Deel 4](/gdevelop5/tutorials/platformer/part-4)
5. [Platformer Tutorial, Deel 5](/gdevelop5/tutorials/platformer/part-5)
6. [Platformer Tutorial, Deel 6](/gdevelop5/tutorials/platformer/part-6)
7. Platformer Tutorial, Deel 7
8. [Platformer Tutorial, Deel 8](/gdevelop5/tutorials/platformer/part-8)


## Stap 1: Dood de speler


Wanneer de speler in botsing komt met een vijand, moet de speler dood gaan. Een gemakkelijke manier om de speler te "doden" is door het "Player"-object te verwijderen als het in botsing komt met een vijand.

Om het "Player" object te verwijderen als het botst met een vijand:

1. Maak een nieuw event.
2. Voeg een **Collision** conditie toe die kijkt of het "Player" object botst met het "Slime" object.
3. Voeg de **Is on floor** conditie toe aan het "Player" object. Dit zorgt ervoor dat de speler alleen dood gaat wanneer die op een platform staat (bijv. niet aan het springen is) 
4. Voeg de **Delete an object** actie toe aan het event dat het"Player" object verwijderd.

![](/gdevelop5/tutorials/platformer/07-01-kill-player.jpg)

If you preview the game, running into the enemy will kill you.

![](/gdevelop5/tutorials/platformer/07-02-killing-player-preview.gif)

## Step 2: Kill the enemy

If a player jumps on an enemy, the enemy should die. Similar to the previous step, "death" in this case means deleting the "Slime" object.

To delete the "Slime" object when a player jumps on it:

1. Create a new event.
2. Add a **Collision** condition that checks if the "Player" object is colliding with the "Slime" object.
3. Add the **Is falling** condition to the "Player" object. This ensures that the enemy only dies if the player is jumping (i.e. not on the platform).
4. Add the **Delete an object** action to the event that deletes the "Slime" object.

![](/gdevelop5/tutorials/platformer/07-03-kill-enemy.jpg)

If you preview the game, you can jump on the enemy to kill them.

![](/gdevelop5/tutorials/platformer/07-04-killing-enemy-preview.gif)

## (Optional) Step 3: Bounce on the enemy's head

In a lot of platforming games, when the player jumps on an enemy, the player bounces on the enemy's head. This is makes killing an enemy feel more fluid.

To make the player bounce on the enemy's head:

1. Add the **Allow again jumping** action to the "Player" object.
2. Add the **Simulate jump key press** action to the "Player" object.

![](/gdevelop5/tutorials/platformer/07-05-bounce-kill.jpg)

If you preview the game, you'll bounce on the enemy's head when killing them.

![](/gdevelop5/tutorials/platformer/07-06-killing-enemy-bounce-preview.gif)

## Next step

Read [Platformer Tutorial, Part 8](/gdevelop5/tutorials/platformer/part-8).