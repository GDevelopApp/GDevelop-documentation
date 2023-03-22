---
title: Platformer Tutorial, Deel 5 - Verzamelbare munten aan de game toevoegen
---
# Platformer Tutorial, Deel 5: Verzamelbare munten aan de game toevoegen

In dit deel van de tutorial wordt uitgelegd hoe je munten aan de game kunt toevoegen.

Je leert het volgende:

- Verwijder een object(en speel een geluid af) wanneer de speler er tegen botst
- Hou data bij met variabelen
- Voeg tekst toe aan de scène.

## Reeks

Je leest **Deel 5** van de [Platformer Tutorial](/gdevelop5/tutorials/platformer).

1. [Platformer Tutorial, Deel 1](/nl/gdevelop5/tutorials/platformer)
2. [Platformer Tutorial, Deel 2](/nl/gdevelop5/tutorials/platformer/part-2)
3. [Platformer Tutorial, Deel 3](/nl/gdevelop5/tutorials/platformer/part-3)
4. [Platformer Tutorial, Deel 4](/nl/gdevelop5/tutorials/platformer/part-4)
5. Platformer Tutorial, Deel 5
6. [Platformer Tutorial, Deel 6](/gdevelop5/tutorials/platformer/part-6)
7. [Platformer Tutorial, Deel 7](/gdevelop5/tutorials/platformer/part-7)
8. [Platformer Tutorial, Deel 8](/gdevelop5/tutorials/platformer/part-8)


## Stap 1: Voeg een munten toe die je kan verzamelen

De eerste stap is om een munt te maken die de speler kan verzamelen. Je kunt deze stap in twee delen splitsen: een object voor de munt maken en de munt vervolgens verzamelbaar maken door een event te gebruiken om te kijken wanneer de speler ermee in botst.

### Maak een object voor de munt

1. Maak een object met de naam "Coin".
2. Gebruik het bestand "coin.png".
3. Sleep een of meer instanties van het object in de scène.

![](/gdevelop5/tutorials/platformer/05-01-coin-object.jpg)

!!! note

    Om een kopie te maken van een munt die al in de scène staat kun je de 'CTR' toets(of `CMD` op macOS) indrukken. Klik daarna op de munt en sleep de kopie in de scène.

### Maak de munt verzamelbaar

1. Maak een nieuw event.
2. Voeg een **Collision** conditie toe aan het event die kijkt of het "Player" object botst met het "Coin" object.
3. Voeg een **Delete an object** actie toe aan het event en stel de actie in zodat het "Coin" object verwijderd wordt.
4. Voeg een **Play a sound** actie toe aan het event zodat een geluid wordt afgespeeld wanneer de speler een munt verzameld. (Je kan het bestand "coin.wav" gebruiken voor het geluid.)

![](/gdevelop5/tutorials/platformer/05-02-coin-collectible.jpg)

Als je een voorbeeld van de game bekijkt en je raakt een munt wordt deze nu verwijderd en wordt het geluid afgespeeld.

![](/gdevelop5/tutorials/platformer/05-02-collect-coin-preview.gif)

## Stap 2: Hou het aantal verzamelde munten bij

Elke keer dat de speler een munt verzamelt, moet het spel bijhouden hoeveel munten de speler heeft verzameld. Om dit te doen, heeft het spel een [variable](/gdevelop5/all-features/variables) nodig.

Een variabele is een plek waarin data kan worden bewaard. Als je ooit algebra hebt gedaan, dan ben je bekend met variabelen, omdat letters als "x" en "y" vaak als variabelen worden gebruikt.

In GDevelop zijn er drie sooren variabelen:

* Object variabelen
* Scène variabelen
* Globale variabelen

Een uitleg van elk type variabele slaan we voor nu even over, maar meer uitleg kun je vinden in  [Scope of variables](http://wiki.compilgames.net/doku.php/gdevelop5/all-features/variables#scope_of_variables). In dit geval zijn scène variabelen het meest handig. Dit zijn variabelen die bestaan binnen een scène.

Om een scène variabele toe te voegen om het aantal verzamelde munten bij te houden:

1. Voeg een **Value of a scene variable** actie toe aan het eerder toegevoegde event.
2. In het **Variable** veld, typ "Score". Dit is de naam van de variabele.
3. In het **Modification's sign** menu selecteer **+ (add)**.
4. In het **Value** veld, type "1" (zonder de dubbele quotes).
5. Klik op **OK**.

![](/gdevelop5/tutorials/platformer/05-03-scene-variable.jpg)

Dit houdt het aantal munten bij dat de speler heeft verzameld maar dit kun je nu nog niet op het scherm zien.

## Stap 3: Laat het aantal verzamelde munten op het scherm zien

Om het aantal verzamelde munten te laten zien heeft de game een object nodig dat de tekst laat zien en een event dat de waarde van deze tekst bijwerkt.

### Maak een object dat de tekst toont op het scherm

1. Maak een **Text** object met de naam "Score".
2. In het **Initial text to display** veld, type "Score: 0". Dit is de standaard waarde die de tekst heeft.
3. Klik op **Apply**.
4. Sleep een instantie van het object in de scène.

![](/gdevelop5/tutorials/platformer/05-04-text-object.jpg)

### Het "Score" object bijwerken met het aantal verzamelde munten

Voordat je de weergegeven tekst kunt bijwerken met het aantal verzamelde munten, is het belangrijk om te snappen hoe [expressions](/gdevelop5/expressions) werken.

In GDevelop lijken expressions op spreadsheetformules of functies in een programmeertaal. Je kunt een waarde doorgeven aan een expression en een waarde ontvangen.

De expression `Variable` kan bijvoorbeeld de waarde van de "Score" variabele ophalen:

```
Variable(Score)
```

Omdat de variabele "Score" een getal bevat, geeft deze expression een getal terug. Je kan dat getal omzetten in een string met de uitdrukking `ToString`:

```
ToString(Variable(Score))
```

Expressions zijn een van de meest geavanceerde -- en een van de krachtigste -- concepten in GDevelop, dus maak je geen zorgen als het even duurt om te begrijpen hoe dit werkt. De truc is om de tutorials te volgen en ze te gebruiken in je games zodat je er meer ervaring mee krijgt.

Om het "Score" object bij te werken met het aantal verzamelde munten:

1. Maak een nieuw event.
2. Voeg de **Modify the text** actie toe aan het "Score" object zonder een conditie aan toe te voegen. Wanneer je geen conditie opgeeft wordt de actie elk frame uitgevoerd. Hiermee zorg je ervoor dat altijd de juiste score op het scherm staat.
3. In het **Modification's sign** menu selecteer **= (set)**.
4. In het **Value** veld, typ `"Score: " + ToString(Variable(Score))`. Deze waarde gebruikt de `ToString` en `Variable` expressions om het aantal verzamelde munten in een string te veranderen. Het gebruikt ook de `+` operator om twee strings in een enkele string te veranderen.
5. Klik op **OK**.

![](/gdevelop5/tutorials/platformer/05-05-modify-text-object.jpg)

Wanneer je een voorbeeld van de game bekijkt wordt nu het aantal verzamelde munten op het scherm getoond.

![](/gdevelop5/tutorials/platformer/05-06-score-preview.gif)

!!! tip

        Je vind meer _expressions_ in de _expression editor_ door op het blauwe icoon naast het value veld te klikken:

    ![](/gdevelop5/tutorials/platform-game/expression-icon.png)

    Wanneer je op het blauwe icoon klikt kun je zoeken op  de beschikbare expressions gesorteerd op categorie.

    ![](/gdevelop5/tutorials/platform-game/expression-editor.png)


### Verplaats de tekst naar een andere layer

Er is een probleem met het "Score" object: het aantal verzamelde munten is alleen zichtbaar als de speler op de juiste plek staat.

Om dit op te lossen gaan we het "Score" object verplaatsen naar een andere layer:

1. Klik op het **Open the layers editor** icoon.
2. Klik op **Add a layer**.
3. Geef de layer de naam "UI".
4. Selecteer het "Score" object.
5. In het **Layer** meu selecteer "UI".

![](/gdevelop5/tutorials/platformer/05-07-change-layer.gif)

Als je een voorbeeld van de game bekijkt blijft de score nu op een vast plek staan.

![](/gdevelop5/tutorials/platformer/05-08-score-ui-layer-preview.gif)

## De volgende stap

Lees [Platformer Tutorial, Deel 6](/gdevelop5/tutorials/platformer/part-6).