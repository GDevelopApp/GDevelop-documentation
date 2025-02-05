---
title: 11-game-over
---
⬅️ **[Previous part: 10. More lives](/gdevelop5/tutorials/geometry-monster/10-more-lives)** ➡️ **[Next part: 12. Main menu](/gdevelop5/tutorials/geometry-monster/12-main-menu)**

# 11. Game over

With the Monster having [lives](/gdevelop5/tutorials/geometry-monster/10-more-lives), [collision detection](/gdevelop5/tutorials/geometry-monster/6-collision-detection) in place, and [bombs](/gdevelop5/tutorials/geometry-monster/9-adding-bombs) falling down along the shapes, we get to a point where the player can lose all the lives, and what comes then? **Game over**!

![](167.png)

Let's add a new object, which will again be a sprite.

![](168.png)

Call it "GameOver", add the respective image, and save it.

![](169.png)

Drag it from the objects panel onto the scene.

![](171.png)

Add another sprite, which will be our button to try playing the game again. Name it "ButtonTryAgain", and set the animation name to "TryAgainNormal" for the default state. Import the image.

![](172.png)

Add the second animation called "TryAgainHover" which will be used to indicate user has hovered the mouse cursor over the button.

![](173.png)

The third and the last animation is "TryAgainPressed", apply the changes.

![](174.png)

Drag the button onto the scene.

![](176.png)

Repeat this for the "ButtonMainMenu" that will take the player to the main menu we're gonna create soon as the separate scene.

![](177.png)

After "MainMenuNormal", the second animation name is "MainMenuHover"...

![](178.png)

...and the third one "MainMenuPressed", apply the changes.

![](179.png)

Drag the main menu button onto the scene.

![](180.png)

Double click on the Monster, and add a second animation for him.

![](181.png)

"MonsterDead" will be used when the Monster will run out of all the available lives.

![](182.png)

Create the "Health" comment in "Level1 (Events)".

![](183.png)

Then add a new condition.

![](184.png)

"Monster", then "Is just damaged", and "Ok".

!!! note

    This condition "Is just damaged" is appearing there as we previously added the "Health" behavior to the object.

![](185_1.png)

Then "Life", "Change the animation (by name)", and enter `"Life" + `, and then click on the "ABC" button on the right. Chose "Conversion", and then "Number \> Text" (this is because we want to transform the health of the player, which is a number, to a text that will be used to choose the animation to display).

![](185_2.png)

In the popup, click "123" button...

![](185_3.png)

...and then chose "Health".

![](185_4.png)

After that you'll be asked to enter object's name and the behavior (that is automatically filled for you after selecting the object).

![](185_5.png)

Go for "Monster". "Health" will be automatically written in the second field. Click Apply.

!!! note

    It's possible to have multiple behaviors of the same kind on an object! For example, a huge spaceship in a space shooter game might have multiple Health behaviors, corresponding to different parts of the spaceship. In general though, a single behavior is enough!

![](185_6.png)

Then you'll be presented with the `Monster.Health::Health()` function which will return the health variable - this expression will be converted to text.

!!! note

    Confused by the notation `Monster.Health::Health()`? The first Health is the name of the behavior, while the second Health correspond to the function to be called on the behavior.

![](185_7.png)

The final value of the "Animation name" will be `"Life" + ToString(Monster.Health::Health())`.

!!! note

    The ToString function is important, as it's converting the health from a number to a text. Otherwise, GDevelop will try to add a text and a number, which does not make sense.

![](186.png)

Back to "Monster", look for the "Flash (blink)" action, and then set the duration of the blinking to `1.5` seconds, and "Ok".

![](187.png)

Under the "Health" comment, add another condition.

![](188.png)

Choose "Monster", then "Is dead", "Ok".

!!! note

    This is again a condition provided by the "Health" behavior.

![](189.png)

The action for this: "Life", "Change the animation (by name)", and then "Life0", so when the Monster dies, the lives image will show no more available hearts.

![](190.png)

Another action: "Monster", then "Change the animation (by name)", and "MonsterDead". This will show the different image for the Monster when he runs out of lives.

![](191.png)

The next action we need is to remove the "Shapes" group by using "Delete an object" on it...

![](192.png)

...and doing the same with the "Obstacle".

![](193.png)

Next up, we pick the "GameOver" sprite and "Show" it on the screen.

![](194.png)

Do the same with the "ButtonTryAgain"...

![](195.png)

...and the "ButtonMainMenu".

All those sprites will be showed on game over, but we need to hide them at the beginning of the game.

![](196.png)

Create a new "Game Over" comment, and add a new condition.

![](198.png)

Search for the "At the beginning of the scene".

![](199.png)

Then make an action where "Hide" is applied to the "GameOver" object.

![](200.png)

Do the same for the "ButtonTryAgain"...

![](201.png)

...adn the "ButtonMainMenu".

![](202.png)

This way, when you launch the game and lose all your lives, the hearts will be almost fully transparent, shapes and bombs will disappear, Monster's animation will change to the dead one, and the Game Over message will be showed along with the Home and Try Again buttons.

The gameplay itself is finished, but we'd like to add more to the game - it would be nice to introduce more scenes into the game by having a [Main Menu](/gdevelop5/tutorials/geometry-monster/12-main-menu) at the beginning, and allow player to start the gameplay on their own.

⬅️ **[Previous part: 10. More lives](/gdevelop5/tutorials/geometry-monster/10-more-lives)** ➡️ **[Next part: 12. Main menu](/gdevelop5/tutorials/geometry-monster/12-main-menu)**
