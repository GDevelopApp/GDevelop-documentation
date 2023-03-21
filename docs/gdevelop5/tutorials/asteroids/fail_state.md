---
title: Asteroids
---
# Asteroids

## Series

1. [Getting Started](/gdevelop5/tutorials/asteroids)
2. [Ship and Movement Controls](/gdevelop5/tutorials/asteroids/ship_and_movement_controls)
3. [Firing Mechanic](/gdevelop5/tutorials/asteroids/firing_bullet)
4. [Setting Scene](/gdevelop5/tutorials/asteroids/setting_scene)
5. [Splitting Asteroids](/gdevelop5/tutorials/asteroids/splitting_asteroids)
6. [Screen Wrap](/gdevelop5/tutorials/asteroids/screen_wrap)
7. [Fail State](/gdevelop5/tutorials/asteroids/fail_state)
8. [End Result](/gdevelop5/tutorials/asteroids/end_result)

## Health extension

Open the "Project manager", open "Functions/Behaviors", click "Search for new extensions", search for and install the "Health" extension.

![](/gdevelop5/tutorials/asteroids/asteroids_gif_12_installing_health_extension.gif)

## Player health

Go to the Player object and give it the Health behavior, which will show up on your behavior list now that it has been installed.

Give this behavior a 0.5 second cooldown, and 3 to both current and maximum health. Which will act as 3 lives.

![](/gdevelop5/tutorials/asteroids/asteroids_gif_13_giving_player_health.gif)

## Lives icon

Create a tiled sprite object, pick a ship image for a "Lives" icon, and then fill in the width and height of the tiled sprite corresponding to your selected image.

![](/gdevelop5/tutorials/asteroids/fail_state/pasted/20220119-185438.png)

## Lives icon placement

Click on the "Layers" panel button on the top right section of the screen, add a new layer and call it UI. Place the "Lives" tiled sprite object into the game, within the default border of your game. With that object selected, change its layer to the newly created UI layer.

![](/gdevelop5/tutorials/asteroids/asteroids_gif_14_putting_the_lives_icon_on_ui_layer.gif)

## Losing lives

In order for the player to lose the health value we set earlier when it runs in to asteroids, go to the event sheet, and create a new event in the Player event group with the following conditions/actions:

Conditions:
-"Collision"(Physics Engine) between the Player object and the object group "Everything". Noting that this will exclude the Bullet, because we haven't given the Bullet the physics behavior.

Actions:
-"Damage the object" and set the value to 1.
-"Width" of Lives tiled sprite object, with modification sign =(set to), with a value equal to the players health multiplied by the width of the Lives tiled sprite object.

This will reduce the players health count by 1 point and then adjust the width of the tiled sprite so it displays the new number of the health value, which we're using to represent lives, whenever the player runs in to an asteroid.

Note that it's easiest to find the expression for "player's health", by opening the expression builder and searching "health" and selecting it. Then multiply it ( * ) by whatever the width of your tiled sprite is.

![](/gdevelop5/tutorials/asteroids/fail_state/pasted/20220119-190604.png)

## Show lives first

To expand the size of the Lives tiled sprite object at the beginning of scene to display the starting lives count of 3, copy that action from the step above and paste it into the "At the beginning of scene" event, in our event sheet.

![](/gdevelop5/tutorials/asteroids/fail_state/pasted/20220119-232141.png)

## Out of lives event

Create a new event just below the "player hurt" event, and give it the following conditions/actions:

Condition:
-"Is dead" with the Player object selected.

Action:
-"Delete the object" with Player object selected.

![](/gdevelop5/tutorials/asteroids/fail_state/pasted/20220119-191521.png)

## Game over text

Create a text object and call it "GameOver". Change its font size to 100 and its color to white, and then write "game over" in the "Initial text to display" section. Place this text object in to your game, within the default border of your screen, and change this object's layer to the UI layer you created earlier.

![](/gdevelop5/tutorials/asteroids/asteroids_gif_15_putting_game_over_text_in_screen.gif)

## Game over event

Go to the event sheet, open the "Beginning of scene" event group and add the following action to the event:
"Hide" with the "GameOver" text object selected.

Then open the player event group and add the following action to the "player dead" event:
"Show" with the "GameOver" text object selected.

![](/gdevelop5/tutorials/asteroids/asteroids_gif_16_show_and_hide_game_over.gif)

## Finished

Now that your game is finished, be sure to check out the [Original video example](/gdevelop5/tutorials/end_result) and see what differences there are between your finished game and the example project.