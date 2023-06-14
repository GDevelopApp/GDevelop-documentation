---
title: Add coins and display the number of collected coins
---
# Add coins and display the number of collected coins

!!! warning

    This version of the tutorial is deprecated. Please refer to the [new platformer tutorial](/gdevelop5/tutorials/platformer) for the completely revised version of the tutorial. The equivalent information to the current tutorial can be found in [Part 5](/gdevelop5/tutorials/platformer/part-5).

In the platformer we've created so far, the player has nothing much to do: let's add coins for the player to collect.

## Add coins

Start by creating a new `Sprite` object with an animation with the `coinGold` image:

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-28_at_23.29.30.png)

You can name this object "Coin".

You can then put several coins in the level. As you'll need several coins, it's a good idea to use the "drag and clone" feature of the scene editor: select a coin, keep pressing Ctrl (or Cmd on macOS), and drag the coin. This will duplicate it.

If you hold Shift while moving, you'll also be able to move the coin created on the same axis that the original one.

![](/gdevelop5/tutorials/platform-game/clone.gif)

## Delete coins when collected

Now, let's destroy the coin object when the player touches them. Add a new event and add a condition. Choose the condition to test for a collision between two objects. The first object should be "Player" and the second object should be "Coin":

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-28_at_23.36.12.png)

You can then add an action that will delete the coin. Only Coin objects that are picked by the first condition will be used by the action, so only the coin that was colliding with the player will be deleted.

Add the action "Delete an object" (from category `Common actions for all objects > Objects`) and enter Coin as the object to be deleted:

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-28_at_23.41.46.png)

The event should look like this:
![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-28_at_23.42.34.png)

You can now launch a preview and see that coin is deleted when the player run on them!

## Play a sound when collecting a coin

To make the game feel more dynamic and rewarding, let's play a sound when a coin is collected.

It's easy: we already have a sound file called `coin.wav` in our game folder (if that's not the case, you can [download the resources here](http://www.compilgames.net/dl/PlatformerTutorialResources.zip) and extract them in your game folder).

It is something we haven't done before: we can add multiple actions to execute to a single event. To play a sound, let's add another action to the event that we used to delete the coins. Click 'add an action' right below the "Delete object Coin" action and add the action called `Play a sound`, from the `Audio` category. This way, we won't only delete the coin but also be playing the sound.

There are a bunch of parameters available for playing a sound. The first and most important is the sound file to be played. Click on the field and then on "Choose a new audio file".

![](/gdevelop5/tutorials/platform-game/choose-new-audio-file_2x.png)

Choose the file `coin.wav` that you downloaded with the rest of the assets and that you put in the game folder:

![](/gdevelop5/tutorials/platform-game/choose-coin-wav_2x.png)

Leave the other parameters as they are (i.e: don't repeat the sound, volume at `100`, and the default speed for the sound).

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-30_at_17.50.22.png)

That's all! Just launch the preview and the sound will play anytime you collect a coin 👍

## Increase a score using variables

We're going to use a variable to update and remember the score of the player.

Variables are containers that we can use to store and remember certain information such as numbers and strings (text). In GDevelop there are different types of variables:

  * **Object variables** are private variables, specific to each instance of an object. This means that each instance can store its very own values, without them being shared with the other instances. It can, for example, be useful if we want to change the life of each enemy.
  * **Scene variables** (the most used ones) are variables attached to a scene. This means that their values are not shared with other scenes in our game. It is useful to store information only relevant to the currently played scene. For example, the life of the player or a score.
  * **Global variables**, as the name suggests, are global in the whole game. Values are shared with all scenes in the entire game. It is useful if we would like to store information that we want to share between all scenes such as the amount of bullet or amount of money the player has.

The variable we're going to use is a Scene variable and will be called "Score".

Let's add an action in the latest event we've made. Choose action `Variables > Value of a variable`. This action will be used to add 100 to the Score variable, so fill the parameter as shown here:

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-30_at_17.52.43.png)

In GDevelop we don't need to declare variables before using them, we can use any variable without declaring it by just naming it in an action or a condition. In case we are using an action on a variable that is not declared, GDevelop will create it automatically for us, with the default value of '0' (or an empty text) after executing the action on the variable to save us from any trouble.

But, to have a better organization of your game, it's a good practice to declare variables before using them. This way, it's easier to find what variables you are using in your game. You can also change their default value if you want it to be something other than 0.
To declare a variable, click on the button "`...`" on the right of the variable name. This displays the list of variables:

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-30_at_17.54.46.png)

The list is shown and is empty, as no variable was declared yet:
![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-30_at_17.55.27.png)

You can click on the `+` button to add a variable, and enter "Score" as its name:

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-30_at_17.56.23.png)

Remember that this is entirely optional, only a good practice.

## Display a score using a text object

### Add text object

For now, the variable Score can't be seen so we can't verify that the score is increased (we could, using the [Debugger](/gdevelop5/interface/debugger), but the player can't see it).

We need to use a Text object to display the value of the Score variable. Let's add a new object. This time choose `Text` when asked about which type of object to create:

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-30_at_17.58.27.png)

Change then the object properties so that the text is black and bigger than the default size:
![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-30_at_18.09.28.png)

You can then place the object on the scene:
![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-30_at_18.20.23.png)

### Changing the text layer

If you launch the game, you can see that the Score text is displayed with the rest of the objects and its position is not fixed on the screen.
We can easily solve this problem by using a layer on top of the base layer. Open the layer editor using this button:

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-30_at_18.34.33.png)

The list of layers is shown, with only the base layer for now:

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-30_at_18.35.00.png)

Click on the `+` button to add a layer. Enter "UI" for its name (UI stand for User Interface).

Finally, move the text object to this new layer by selecting the text instance on the scene and in the properties on the left, select the UI layer:
![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-30_at_18.40.44.png)

Make sure that the object is displayed somewhere visible on the screen, for example, put it on the top-left. The black rectangle on the scene editor represents the size of the window:

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-30_at_18.42.46.png)

### Display the score value

Now that we have a text on our screen, it is time to make it display the value of the Score variable.
Add a new event. This event won't have any condition, meaning the action is going to be executed every single time a frame of the game is rendered on screen (about 60 times a second).

Add an action and choose the one in `Text Object` category called `Modify the text`.

For the first parameter, choose the `Score` object, as it is this object that we want to update.
For the second parameter, choose `= (set to)` operator (we want to set the text to a new value).
Finally, the last parameter represents the new content of the text. It's a string expression that will be evaluated during the game by GDevelop when the action is run.

We can specify a text by writing it between quotes (like this: `"Hello World"`). But we can also use something called expressions. An expression is a function that is returning a certain value. In this case, we need the value of the Score variable and we want to use that value to update the content of the Text object.
Expressions are a more advanced topic so we won't go deep into it for now.

What you need to know for now is that in order to get the value of a scene variable, we need to use the expression `Variable(variableName)`. And as it is a number variable but we need the value as a text, we need to convert the value returned from this expression to a string. We can do that by using another expression called `ToString(valueToConvert)`.
So the actual expression needs to look like this `ToString(Variable(Score))`.

Finally, we can add this expression after a static text using the `+` operator: `"Score : " + ToString(Variable(Score))` (note the double quotes surrounding the text).

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-30_at_18.58.12.png)

Lots of other functions and expressions are available in GDevelop. When combined, you create powerful actions that do advanced work. You can find more expressions in the expression editor by clicking on the blue icon next to the value fields:

![](/gdevelop5/tutorials/platform-game/expression-icon.png)

Here is the final event:
![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-30_at_18.59.31.png)

You can preview the game, see that the score is shown and updated when you collect a coin!

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-30_at_19.00.24.png)

## Bonus: making sure that collecting two coins at the same time works

You might have noticed that if you collect two coins at the exact same time (for example, if two coins overlap), the score is only increased once. For example, if each coin is worth 100 points and you collect 2 coins, the score will only go up to 100 instead of 200. The fix for this is easy and is something we haven't looked at yet: we're going to use an event called For Each Object. What we will do is tell the engine that for every single coin that was collected, add 100 to the score.

To start, click the + button in the toolbar of the Events Editor:

![](/gdevelop5/tutorials/platform-game/gdevelop_5_2018-05-30_11-30-39.png)

Select "for each object":

![](/gdevelop5/tutorials/platform-game/2018-05-30_11-33-09.png)

This will add an event at the bottom of the event page. Drag it up and make it a sub-event of the player collision with the coin:

![](/gdevelop5/tutorials/platform-game/click-to-choose-4.png)

Click to choose an object, and choose the Coin object.

![](/gdevelop5/tutorials/platform-game/click-to-choose2.png)

Now that you've added the object to the sub-event, let's move the actions down to the sub-event (so that the actions will be repeated for each coin that is picked by conditions).

Hover over the first action, right-click and cut it, then hover over the action in the sub-event, right-click, and paste. Do this for the other two actions. You can also drag'n'drop actions, which is faster than cut-pasting them.

![](/gdevelop5/tutorials/platform-game/move-to-sub1.png)

This is what the final event should look like:

![](/gdevelop5/tutorials/platform-game/move-to-sub2.png)

Now run the game, and you will see that if you gather two coins at the same time, the score will be updated properly if you run on two coins at the exact same time.

!!! note

    You can check the proper working of this by putting two coins at the same position in the scene.

## Next step: add enemies

Every platform game comes with enemies that you have to avoid or kill by jumping on them! Let's add some and see how we can make them move.

➡️ Read **[6 add enemies](/gdevelop5/tutorials/platform-game/6-add-enemies)**!