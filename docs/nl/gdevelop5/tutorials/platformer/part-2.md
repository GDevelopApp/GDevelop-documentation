---
title: Platformer Tutorial, Deel 2 - Maak een speelbaar personage
---
# Platformer Tutorial, Deel 2: Maak een speelbaar personage

In dit deel van de tutorial wordt uitgelegd hoe je een speelbaar personage aan het spel kunt toevoegen.

Je leert het volgende: :

- Een object maken voor het speelbare personage.
- De speler het object laten besturen met de pijltjestoetsen.
- Het speelbare personage volgen met de camera.

## Reeks

Je leest **Deel 2** van de  [Platformer Tutorial](/nl/gdevelop5/tutorials/platformer/start).

1. [Platformer Tutorial, Deel 1](/nl/gdevelop5/tutorials/platformer/start)
2. Platformer Tutorial, Part 2
3. [Platformer Tutorial, Deel 3](/gdevelop5/tutorials/platformer/part-3)
4. [Platformer Tutorial, Deel 4](/gdevelop5/tutorials/platformer/part-4)
5. [Platformer Tutorial, Deel 5](/gdevelop5/tutorials/platformer/part-5)
6. [Platformer Tutorial, Deel 6](/gdevelop5/tutorials/platformer/part-6)
7. [Platformer Tutorial, Deel 7](/gdevelop5/tutorials/platformer/part-7)
8. [Platformer Tutorial, Deel 8](/gdevelop5/tutorials/platformer/part-8)

## Stap 1: Maak een object

De eerste stap is om een object te maken voor het speelbare personage. Als je het eerste deel van deze tutorial hebt gevolgd, zou het bekend moeten zijn hoe dit moet.

Om een object maken voor het speelbare personage:

1. Maak een **Sprite** object met de naam "Player".
2. Gebruik de asset "p1_stand.png" als het enige frame van de animatie.
3. Geef de animatie de naam "Idle".
4. Sleep een instantie van het object in de scène.

![](/gdevelop5/tutorials/platformer/player-object.jpg)

!!! note

    [Platformer Tutorial, Part 4](/gdevelop5/tutorials/platformer/part-4) legt uit hoe je het personage kan animeren.

## Step 2: Voeg een behavior toe aan het object

Als je een voorbeeld van de game bekijkt, kun je het object "Player" niet besturen. Dit komt omdat objecten standaard niets doen. Om objecten iets te laten doen, moet je er een of meer [behaviors](/gdevelop5/behaviors) aan toevoegen.

GDevelop wordt geleverd met een grote bibliotheek met behaviors die je met een paar klikken aan objecten kunt toevoegen. Een van deze behaviors is het **Platformer character** behavior, waarmee je een object kunt besturen als speelbaar personage.

Om het **Platformer character** behavior toe toe voegen aan het object:

1. Klik met de rechtermuisknop op het object  **Player**.
2. Selecteer **Edit object**.
3. Ga naar de tab **Behaviors**.
4. Klik op **Add a behavior to the object**.
5. Selecteer **Platformer character**.
6. Klik op **Apply**.

Als je een voorbeeld van de game bekijkt, kun je de speler besturen met de pijltjestoetsen. Het  **Platformer character** behavior zorgt er ook voor dat er nu zwaartekracht is voor de speler. Hierdoor valt het de het speelbare personage nu uit het scherm.

![](/gdevelop5/tutorials/platformer/platformer-character-behavior-preview.gif)

## Step 3: Volg een object met de camera

Om te voorkomen dat het personage uit beeld valt, heeft de game platforms nodig en een camera die de speler volgt. De [next part of the tutorial](/gdevelop5/tutorials/platformer/part-3) gaat over de platforms, en dit gedeelte over de camera.

Om de camera de speler te laten volgen is het nodig om een [event](/gdevelop5/events) toe te voegen. In GDevelop kun je met events oorzaak en gevolg bepalen, dus als er iets gebeurt (oorzaak), kun je ervoor zorgen dat er iets anders gebeurt (gevolg).

Events bestaan uit twee delen: condities en acties. De conditie is wat bepaalt wanneer het event plaatsvindt en de actie is wat er gebeurt wanneer het event plaatsvindt.

GDevelop heeft een grote bibliotheek met condities en acties die allerlei functies aan een game toevoegen. Een groot deel van het leren van GDevelop is het ontdekken van de beschikbare opties. In dit geval heeft de game de actie **Center the camera on an object** nodig.

Om de actie **Center the camera on an object** toe te voegen:

1. Open de Events editor.
2. Klik **Add a new event**.
3. Klik op **Add action** zonder een conditie toe te voegen. Wanneer je geen conditie opgeeft wordt de actie elk frame uitgevoerd.  Als de game dus op 60 frames per seconde draait, wordt de actie 60 keer per seconde uitgevoerd.
4. Klik op **Other actions**.
5. Vouw **Layers and cameras** uit.
6. Selecteer **Center the camera on an object**.
7. Selecteer het "Player" object.
8. Klik op **OK**.

![](/gdevelop5/tutorials/platformer/center-camera-event.jpg)

Als je een voorbeeld van de game bekijkt, valt de speler nog steeds - er zijn tenslotte nog steeds geen platforms - maar de camera volgt de speler nu. Hierdoor blijft de speler op het scherm.

![](/gdevelop5/tutorials/platformer/center-camera-on-object-preview.gif)

## De volgende stap

Read [Platformer Tutorial, Part 3](/gdevelop5/tutorials/platformer/part-3)