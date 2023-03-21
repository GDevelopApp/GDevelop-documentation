---
title: Platformer Tutorial, Deel 4 - Animeer het speelbare personage
---
# Platformer Tutorial, Deel 4: Animeer het speelbare personage

In dit deel van de tutorial wordt uitgelegd hoe je het speelbare personage kunt animeren.

Je leert het volgende:

- Een animatie toevoegen aan een object.
- Events gebruiken om animaties te activeren


## Reeks

Je leest **Deel 4** van de [Platformer Tutorial](/nl/gdevelop5/tutorials/platformer).

1. [Platformer Tutorial, Deel 1](/nl/gdevelop5/tutorials/platformer)
2. [Platformer Tutorial, Deel 2](/nl/gdevelop5/tutorials/platformer/part-2)
3. [Platformer Tutorial, Deel 3](/nl/gdevelop5/tutorials/platformer/part-3)
4. Platformer Tutorial, Deel 4
5. [Platformer Tutorial, Deel 5](/gdevelop5/tutorials/platformer/part-5)
6. [Platformer Tutorial, Deel 6](/gdevelop5/tutorials/platformer/part-6)
7. [Platformer Tutorial, Deel 7](/gdevelop5/tutorials/platformer/part-7)
8. [Platformer Tutorial, Deel 8](/gdevelop5/tutorials/platformer/part-8)


## Stap 1: Voeg een spring animatie toe aan de speler

In GDevelop kun je animaties aan een object toevoegen en die animaties activeren wanneer er iets gebeurt (zoals wanneer een speler springt).

### Voeg de "Jumping" animatie toe aan het "Player" object

Om een jumping animatie toe te voegen aan het "Player" object:

1. In het **Objects** paneel, klik met de rechter muisknop op het "Player" object.
2. Selecteer **Edit object**.
3. Klik op **Add an animation**.
4. Geef de animatie de naam "Jumping".
5. Klik op **Add**.
6. Selecteer het bestand "p1_jump.png" in het venster dat opent.

![](/gdevelop5/tutorials/platformer/part-4-01.jpg)

De animatie is nu wel toegevoegd aan het object, maar deze wordt pas afgespeeld als iets de animatie activeert.

### Activeer de "Jumping" animatie

Om de "Jumping" animatie te activeren:

1. Ga naar de Events editor.
2. Maak een nieuw event.
3. Voeg de **Is jumping** conditie toe aan het "Player" object.
4. Voeg de **Change the animation (by name)** actie toe aan het event.
5. Voer in het veld **Animation name** de naam "Jumping" in. Je moet deze naam tussen dubbele aanhalingstekens plaatsen (bijv. "Jumping").
6. Klik op **OK**.

![](/gdevelop5/tutorials/platformer/part-4-02.jpg)

Deze aanpassing zorgt ervoor de de animatie wordt geactiveerd wanneer je springt.

![](/gdevelop5/tutorials/platformer/part-4-03.gif)

## Stap 2: Een idle animatie toevoegen aan de speler

Er is een probleem met de jumping animatie: deze wordt niet gereset wanneer de speler klaar is met springen. Om dit op te lossen geen we de animatie "Idle" activeren wanneer de speler weer op het platform staat.

### Detecteren wanneer de speler op de vloer staat

GDevelop verwijst naar het oppervlak van een platform als de _vloer_.

Om te detecteren wanneer een object op vloer staat:

1. Voeg een nieuw event toe.
2. Voeg de **Is on floor** conditie toe aan het "Player" object.

![](/gdevelop5/tutorials/platformer/part-4-04.jpg)

### Detecteren wanneer de speler niet beweegt

Het heeft alleen zin om de animatie "Idle" te activeren wanneer de speler stil staat. Wanneer de spelen beweegt willen we namelijk de animatie "Running" activeren (Dit wordt uitgelegd in de volgende stap.

Om te detecteren wanneer de speler niet beweegt:

1. Voeg de **Is moving** conditie toe aan het "Player" object.
2. Zet de optie **Invert condition** in de _on_ positie.

De optie **Invert condition** keert de manier waarop een conditie werkt om. Dit betekent dat de conditie  **Is moving** de conditie  **Is not moving** wordt.

![](/gdevelop5/tutorials/platformer/part-4-05.jpg)

### Activeer de "Idle" animatie

Wanneer aan beide condities is voldaan  activeert dan de "Idle" -animatie van het object:

1. Voeg de **Change the animation (by name)** actie toe.
2. Voer in het veld **Animation name** de naam van de "Idle"-animatie in. Je moet deze naam tussen dubbele aanhalingstekens plaatsen (bijv. `"Idle"`).

![](/gdevelop5/tutorials/platformer/part-4-06.jpg)

Als je een voorbeeld van het spel bekijkt, wordt het object "Player" na het springen teruggezet naar de animatie "Idle".

![](/gdevelop5/tutorials/platformer/part-4-jumping-with-idle-animation.gif)

## Stap 3: Voeg de animatie running toe aan de speler

### Voeg de "Running" animatie toe aan het "Player" object

1. Voeg een animatie toe met de naam "Running" aan het "Player" object.
2. Kies de volgende  bestanden In het venster om bestanden te selecteren:

   - p1_walk03.png
   - p1_walk04.png
   - p1_walk05.png
   - p1_walk06.png
   - p1_walk07.png
3. Vink de **Loop** optie aan.Wanneer de optie wordt aangezet wordt de animatie continu afgespeeld zolang deze actief is (in plaats van één keer te spelen en te stoppen).
4. Klik op **Apply**.

![](/gdevelop5/tutorials/platformer/part-4-07.jpg)

### Activeer de "Running" animatie

1. Maak een nieuw event.
2. Voeg de **Is on floor** conditie toe aan het "Player" object.
3. Voeg de  **Is moving** conditie toe aan het "Player" object.
4. Voeg de **Change the animation (by name)** actie toe aan het event.
5. Voer in het veld **Animation name** de naam van de "Running"-animatie in. Je moet deze naam tussen dubbele aanhalingstekens plaatsen (bijv. `"Running"`).
6. Klik op **OK**.

![](/gdevelop5/tutorials/platformer/part-4-08.jpg)

Als je een voorbeeld van het spel bekijkt, wordt de animatie "Running" afgespeeld terwijl de speler beweegt.

![](/gdevelop5/tutorials/platformer/part-4-running-animation.gif)

## De volgende stap

Read [Platformer Tutorial, Part 5](/gdevelop5/tutorials/platformer/part-5).