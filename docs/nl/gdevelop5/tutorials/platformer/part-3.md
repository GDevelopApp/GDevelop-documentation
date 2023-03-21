---
title: Platformer Tutorial, Deel 3 - Platforms maken
---
# Platformer Tutorial, Deel 3: Platforms maken

In dit deel van de tutorial wordt uitgelegd hoe je platforms aan het spel kunt toevoegen. Dit geeft de speler wat vaste grond om over te bewegen en tussen te springen.

Je leert het volgende:

* Het toevoegen van Tiled Sprite objects.
* Het maken van een platform dat zich gedraagd als een platform.

## Reeks

Je leest **Deel 3** van de  [nl:[gdevelop5:tutorials:platformer:start|Platformer Tutorial]].

1. [Platformer Tutorial, Deel 1](/nl/gdevelop5/tutorials/platformer)
2. [Platformer Tutorial, Deel 2](/nl/gdevelop5/tutorials/platformer/part-2)
3. Platformer Tutorial, Deel  3
4. [Platformer Tutorial, Deel 4](/gdevelop5/tutorials/platformer/part-4)
5. [Platformer Tutorial, Deel 5](/gdevelop5/tutorials/platformer/part-5)
6. [Platformer Tutorial, Deel 6](/gdevelop5/tutorials/platformer/part-6)
7. [Platformer Tutorial, Deel 7](/gdevelop5/tutorials/platformer/part-7)
8. [Platformer Tutorial, Deel 8](/gdevelop5/tutorials/platformer/part-8)


## Stap 1: Maak een object

De eerste stap is het maken van een object voor het platform. Als je het eerste en tweede deel van deze tutorial hebt gevolgd, is dit een soortgelijk -- maar niet precies hetzelfde-- proces.

Het belangrijkste verschil is dat dit object een Tiled Sprite object moet zijn. Dit type object "geeft een afbeelding weer die over een gebied wordt herhaald". Het is ideaal voor zoiets als platforms, die meestal zijn opgebouwd uit kleine, vierkante afbeeldingen (ook bekend als *tiles*).

Om een object te maken voor een platform:

1. In het **Objects** paneel, klik op **Add a new object**.
2. Selecteer **Tiled Sprite**.
3. In het **Object name** veld, typ "GrassPlatform".
4. Klik op **Select an image**.
5. Klik op **Choose a file**.
6. Selecteer het bestand "grassHalfMid" en het venster dat opent.
7. Klik op **Apply**.

Sleep vervolgens enkele instanties van het object naar de scène en varieer de breedte van deze instanties om platforms van verschillende lengtes te creëren.

![](/gdevelop5/tutorials/platformer/grass-platform-resize.gif)

## Stap 2: Voeg een behavior toe aan het object

Alleen het toevoegen van een platform aan de scène is niet genoeg. Je moet ook een behavior aan het object toevoegen om ervoor te zorgen dat het speelbare personage er op kan lopen. Handig is dat GDevelop een behavior met de naam **Platform**-behavior heeft dat hier voor zorgt.

![](/gdevelop5/tutorials/platformer/platform-behavior.jpg)

Om het **Platform** behavior  toe te voegen aan het object:

1. Open de **Behaviors** tab voor het "GrassPlatform" object.
2. Selecteer **Platform behavior**.
3. Klik op **Apply**.

![](/gdevelop5/tutorials/platformer/grass-platform-add-behavior.jpg)

Als je een voorbeeld van het spel bekijkt, kan de speler over het het platform lopen.

![](/gdevelop5/tutorials/platformer/grass-platform-behavior.gif)

## Stap 3: Een ander type platform maken

GDevelop biedt ook het **Jumpthru-platform** behavior. Dit behavior creëert een platform waarop de speler van onderaf kan springen. Dit zorgt voor meer variatie in het level.


Om een platform het het  **Jumpthru platform** behavior te maken:

1. Maak een **Tiled sprite** object met de naam "SmallBridge".
2. Gebruik de asset "bridgeLogs.png" als de afbeelding van het object.
3. Open de **Behaviors** tab.
4. Selecteer **Platform behavior**.
6.In het **Type** menu, selecteer **Jumpthru platform**.
7. Klik op **Apply**.

Sleep vervolgens enkele exemplaren van het object naar de scène.

![](/gdevelop5/tutorials/platformer/jump-thru-platform-preview.gif)

## De volgende stap

Read [Platformer Tutorial, Part 4](/gdevelop5/tutorials/platformer/part-4).