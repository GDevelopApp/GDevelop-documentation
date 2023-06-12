---
title: Add Collectible Coins to the Game
---
# Add Collectible Coins to the Game

This part of the tutorial explains how to add collectible coins to the game.

You'll learn how to:

- Delete an object (and play a sound) when a player collides with it.
- Keep track of data with variables.
- Add text to a scene.

## Series

You are reading **Part 5** of the [Platformer Tutorial](/gdevelop5/tutorials/platformer).

1. [Part 1: Getting started](/gdevelop5/tutorials/platformer)
2. [Part 2: Create a Playable Character](/gdevelop5/tutorials/platformer/part-2)
3. [Part 3: Create Platforms](/gdevelop5/tutorials/platformer/part-3)
4. [Part 4: Animate the Playable Character](/gdevelop5/tutorials/platformer/part-4)
5. Part 5: Add Collectible Coins to the Game
6. [Part 6: Add Enemies to the Game](/gdevelop5/tutorials/platformer/part-6)
7. [Part 7: Make Enemies Kill the Player (and the Player Kill the Enemies)](/gdevelop5/tutorials/platformer/part-7)
8. [Part 8: Add Checkpoints to the Game](/gdevelop5/tutorials/platformer/part-8)

## Step 1: Create a collectible coin

The first step is to create a coin that the player can collect. You can break this step into two parts: creating an object for the coin and then making the coin collectible by using an event to detect when the player collides with it.

### Create an object for the coin

1. Create an object named "Coin".
2. For the object's image, use the "coin.png" asset.
3. Drag one or more instances of the object into the scene.

![](/gdevelop5/tutorials/platformer/05-01-coin-object.jpg)

!!! note

    To duplicate a coin that's already in the scene, hold down the `CTRL` key (or `CMD` on macOS). Then select and drag an instance of the coin.

### Make the coin collectible

1. Create a new event.
2. Add a **Collision** condition to the event that checks if the "Player" object has collided with the "Coin" object.
3. Add a **Delete an object** action to the event and configure the action to delete the "Coin" object.
4. Add a **Play a sound** action to the event that plays a sound effect when the player collects a coin. (You can use the "coin.wav" asset for the sound effect.)

![](/gdevelop5/tutorials/platformer/05-02-coin-collectible.jpg)

If you preview the game, colliding with a coin deletes the coin and plays a sound.

![](/gdevelop5/tutorials/platformer/05-02-collect-coin-preview.gif)

## Step 2: Keep track of the collected coins

Every time a user collects a coin, the game needs to keep track of the number of coins the player has collected. To do this, the game needs a [variable](/gdevelop5/all-features/variables).

A variable is a container that can store data. If you've ever done algebra, then you're familiar with variables, as letters like "x" and "y" are often used as variables.

In GDevelop, there are three types of variables:

* Object variables
* Scene variables
* Global variables

An explanation of each variable type is beyond the scope of this tutorial, but the differences are explored in [Scope of variables](http://wiki.compilgames.net/doku.php/gdevelop5/all-features/variables#scope_of_variables). In this case, scene variables are the most relevant. These are variables that exist for the duration of a scene.

To create a scene variable that tracks the number of collected coins:

1. Add a **Value of a scene variable** action to the previously created event.
2. In the **Variable** field, type "Score". This is a name for the variable.
3. From the **Modification's sign** dropdown, select **+ (add)**.
4. In the **Value** field, type "1" (without the double quotes).
5. Click **OK**.

![](/gdevelop5/tutorials/platformer/05-03-scene-variable.jpg)

This keeps track of the number of coins collected by the player, but this number doesn't (yet) appear on the screen.

## Step 3: Display the number of collected coins

To display the number of collected coins, the game needs an object to that renders text and an event that updates the value of that text.

### Create an object that renders text

1. Create a **Text** object named "Score".
2. In the **Initial text to display** field, type "Score: 0". This is the default text to display within the object.
3. Click **Apply**.
4. Drag an instance of the object into the scene.

![](/gdevelop5/tutorials/platformer/05-04-text-object.jpg)

### Update the "Score" object with the number of collected coins

Before you can update the rendered text with the number of collected coins, it's important to have a broad understanding of [expressions](/gdevelop5/expressions).

In GDevelop, expressions are similar to spreadsheet formulas or functions in a programming language. You can pass a value into an expression and receive a value.

For example, the `Variable` expression can retrieve the value of the "Score" variable:

```javascript
Variable(Score)
```

Because the "Score" variable contains a number, this expression returns a number. You can convert that number into a string with the `ToString` expression:

```javascript
ToString(Variable(Score))
```

Expressions are one of the most advanced -- and one of the most powerful -- concepts in GDevelop, so don't worry if it takes some time to wrap your head around them. The trick is to follow the tutorials and *use* the expressions. Practical experience is key.

To update the "Score" object with the number of collected coins:

1. Create a new event.
2. Without specifying a condition, add the  **Modify the text** action to the "Score" object. Because a condition isn't specified, this action runs in every frame. This ensures that the displayed score is always accurate.
3. From the **Modification's sign** dropdown, select **= (set)**.
4. In the **Value** field, type `"Score: " + ToString(Variable(Score))`. This value uses the `ToString` and `Variable` expressions to convert the number of collected coins into a string. It also uses the `+` operator to combine two strings into a single string.
5. Click **OK**.

![](/gdevelop5/tutorials/platformer/05-05-modify-text-object.jpg)

If you preview the game, the number of collected coins appears on the screen.

![](/gdevelop5/tutorials/platformer/05-06-score-preview.gif)

!!! tip

        You can find more _expressions_ in the _expression editor_ by clicking on the blue icon next to the value fields:

    ![](/gdevelop5/tutorials/platform-game/expression-icon.png)

    When you click the blue icon, you can search all the available expressions sorted into categories.

    ![](/gdevelop5/tutorials/platform-game/expression-editor.png)

### Move the text to a different layer

There's a problem with the "Score" object: the number of collected coins is only visible if the player is standing in certain positions.

To fix this, move the "Score" object to a different layer:

1. Click the **Open the layers editor** icon.
2. Click **Add a layer**.
3. For the name of the layer, type "UI".
4. Select the "Score" object.
5. From the **Layer** dropdown, select "UI".

![](/gdevelop5/tutorials/platformer/05-07-change-layer.gif)

If you preview the game, the score remains in a fixed position.

![](/gdevelop5/tutorials/platformer/05-08-score-ui-layer-preview.gif)

## Next step

Read [Part 6: Add Enemies to the Game](/gdevelop5/tutorials/platformer/part-6).