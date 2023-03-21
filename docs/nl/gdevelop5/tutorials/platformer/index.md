---
title: Platformer tutorial, Deel 1 - beginnen met het spel
---
# Platformer tutorial, Deel 1: beginnen met het spel

Deze tutorial legt uit hoe je een platformgame kunt maken met GDevelop. Als je nog nooit een game met GDevelop hebt gemaakt, is dit een geweldige plek om te beginnen.

Je leert het volgende:

- Een level ontwerpen met platforms, vijanden en munten die je kan verzamelen.
- Het maken van een speelbaar personage dat kan bewegen, springen en vijanden kan doden.
- Het personage terugbrengen naar het checkpoint als deze dood gaat.

## Reeks

Je leest **Deel 1** van de  [Platformer Tutorial](/nl/gdevelop5/tutorials/platformer).

1. Platformer Tutorial, Deel 1
2. [Platformer Tutorial, Deel 2](/nl/gdevelop5/tutorials/platformer/part-2)
3. [Platformer Tutorial, Deel 3](/gdevelop5/tutorials/platformer/part-3)
4. [Platformer Tutorial, Deel 4](/gdevelop5/tutorials/platformer/part-4)
5. [Platformer Tutorial, Deel 5](/gdevelop5/tutorials/platformer/part-5)
6. [Platformer Tutorial, Deel 6](/gdevelop5/tutorials/platformer/part-6)
7. [Platformer Tutorial, Deel 7](/gdevelop5/tutorials/platformer/part-7)
8. [Platformer Tutorial, Deel 8](/gdevelop5/tutorials/platformer/part-8)

## Stap 1: Installeer GDevelop

Download en installeer GDevelop als je dat nog niet hebt gedaan. Je vindt de volledige instructies voor het instellen van de software op de pagina [Getting Started](/gdevelop5/getting_started).

## Stap 2: Download de assets voor de game

De term *assets* verwijst naar de audio- en visuele media van een game, zoals geluiden en sprites. Elke game heeft assets nodig en om je leven een beetje gemakkelijker te maken, biedt deze tutorial de assets die je nodig hebt om de game te maken.

Je kunt de assets downloaden via de volgende URL:

http://www.compilgames.net/dl/PlatformerTutorialResources.zip

!!! note

    Je bent ook meer dan welkom om andere assets te gebruiken. Natuurlijk zal de game die je in de schermafbeeldingen ziet er anders uitzien dan de game die je uiteindelijk maakt.

## Stap 3: Maak een nieuw project

In GDevelop is een _project_ een container voor de assets en logica van de game. In deze tutorial worden de termen "project" en "game" als synoniemen gebruikt.

Om een nieuw project te maken:

1. Star GDevelop.
2. Selecteer **Create a new project**.
3. Kies een map voor het project.
4. Selecteer **Empty game**.

![](/gdevelop5/tutorials/platformer/create-project.gif)

## Stap 4: Een scène toevoegen aan de game

Een game bestaat uit _scènes_. Meestal is elke scène een ander scherm in de game. Het hoofdmenu, het pauzemenu en elk niveau in een game zouden bijvoorbeeld allemaal verschillende scènes zijn.

Om een scène aan de game toe te voegen:

1. Vouw het paneel **Scenes** uit (als het nog niet is uitgevouwen).
2. Selecteer **Click to add a scene**.

Selecteer vervolgens de scène om deze te openen.

![](/gdevelop5/tutorials/platformer/add-scene.gif)

!!! note

    Als je meerdere scènes aan een project toevoegt, is de eerste scène in de lijst de scène die GDevelop laadt wanneer de game start.

## Step 5: Een object aan een scène toevoegen

Een scène bestaat uit [objects](/gdevelop5/objects). Alles wat de gebruiker ziet of waarmee hij interactie heeft, is een object, inclusief het speelbare personage, vijanden en delen van de omgeving.

GDevelop biedt verschillende soorten objecten die je aan een game kunt toevoegen. Elk type object heeft unieke kenmerken en use-cases. Het meest voorkomende type object is het Sprite-object, waarmee je een afbeelding kunt maken die je (optioneel) kunt animeren.

Om een object te maken:

1. In het **Objects** paneel, klik op  **Add a new object**.
2. Selecteer **Sprite**.
3. In het **Object name** veld, type "Cloud".
4. Wanneer de object editor opent, klik op **Add an animation**. Op het label staat **Add an _animation_**, maar de Sprite-objecten hoeven niet perse geanimeerd te worden.
5. Klik op **Add**.
6. Selecteer de asset "cloud2.png".
7. Selecteer **Apply**.

Sleep vervolgens een of meer exemplaren van het "Cloud"-object naar de scène.

![](/gdevelop5/tutorials/platformer/add-object-instance.gif)

!!! note

    Elke kopie van een object dat in een scène verschijnt, wordt een _instantie_ van dat object genoemd.

## Stap 6: Verander de achtergrond kleur

De witte wolken zien er niet geweldig uit op de grijze achtergrond.

Om de achtergrondkleur van de scène aan te passen:

1. Klik met de rechtermuisknop op de achtergrond van de scène.
2. Selecteer **Scene properties**.
3. Klik op **Scene background color**.
4. Kies een mooie kleur blauw.

!!! tip

    Je kan een hexadecimale waarde invoeren (bijv. #00000) of een naam van de kleur (bijv. Black)

![](/gdevelop5/tutorials/platformer/set-scene-background-color.jpg)

## Stap 7: Voorbeeld van de game bekijken

Het is goed om er een gewoonte van te maken om regelmatig een voorbeeld van je game te bekijken. Als er dan iets niet werkt is het makkelijker om het probleem te achterhalen.

Klik op de knop **Preview** in de werkbalk om een voorbeeld van de game te starten.

![](/gdevelop5/tutorials/platformer/preview-button.jpg)

Sluit het venster om de game te stoppen.

## Stap 8: De game opslaan

Het is ook goed om er een gewoonte van te maken om regelmatig je games op te slaan. Je kunt de game opslaan via het menu **File** of door een sneltoets te gebruiken:

- `CTRL` + `S` voor Windows
- `CMD` + `S` voor macOS

## De volgende stap

Lees [Platformer Tutorial, Deel 2](/nl/gdevelop5/tutorials/platformer/part-2) en leer hoe je een speelbaar personage kan toevoegen aan de game.