---
title: 2. Move the player
---
# 2. Move the player

## Series

You are reading **Part 2** of the [Space Shooter Tutorial](/gdevelop5/tutorials/space-shooter).

1. [Space Shooter, Part 1](/gdevelop5/tutorials/space-shooter)
2. [Space Shooter, Part 2](/gdevelop5/tutorials/space-shooter/2-move-player)
3. [Space Shooter, Part 3](/gdevelop5/tutorials/space-shooter/3-shoot-and-health)
4. [Space Shooter, Part 4](/gdevelop5/tutorials/space-shooter/4-background-and-camera)
5. [Space Shooter, Part 5](/gdevelop5/tutorials/space-shooter/5-enemies)
6. [Space Shooter, Part 6](/gdevelop5/tutorials/space-shooter/6-enemy-mechanics)
7. [Space Shooter, Part 7](/gdevelop5/tutorials/space-shooter/7-meteors)
8. [Space Shooter, Part 8](/gdevelop5/tutorials/space-shooter/8-powerups)
9. [Space Shooter, Part 9](/gdevelop5/tutorials/space-shooter/9-ui)
10. [Space Shooter, Part 10](/gdevelop5/tutorials/space-shooter/10-sound-effects-music)
11. [Space Shooter, Part 11](/gdevelop5/tutorials/space-shooter/11-visual-effects)
12. [Space Shooter, Part 12](/gdevelop5/tutorials/space-shooter/12-levels)
13. [Space Shooter, Part 13](/gdevelop5/tutorials/space-shooter/13-main-menu)

!!! tip

    In this chapter, we will learn how to control our spaceship with the arrow buttons.

Click on the **"Base Scene (Events)"** tab to open the events editor, where we define the rules of the game using conditions and actions. Click on the event icon to add an empty event.

![](/gdevelop5/tutorials/space-shooter/space-shooter-open-events-2.gif)

## Make the spaceship move with the keyboard

Click "Add Condition." Then there will be a popup menu to select your conditions. We will use the search bar on the top of the view. We will type **"Key"** and will select **"Key Pressed."** Then on the right menu, we will type **Right** to control the Right arrow.

![](/gdevelop5/tutorials/space-shooter/space-shooter-add-condition.gif)

Then, click on **Add Action** in the same event and select **Player** since we want to move the Player. On the menu, select **Add a force angle** and enter the angle as **0**, the speed as **400**.

![](/gdevelop5/tutorials/space-shooter/space-shooter-add-action.gif)

If you click the Run button on the upper left, you can try pressing the **right arrow** and see that **the player moves right**! Now, we will add other buttons to move the player in every direction.

!!! tip

    Please do the same steps or click and copy the condition by **CTRL+C/Command+C** and paste it by clicking **CTRL+V/Command+V.**

![](/gdevelop5/tutorials/space-shooter/space-shooter-copy-action.gif)

Then change the pressed key and angle of the force, just like in the screenshot below.

![](/gdevelop5/tutorials/space-shooter/space-shooter-move-all-events.png)

## Adding an explanation to your actions

!!! tip

    Although our event page seems clear right now, it can get longer and more complex after adding more actions and conditions. Hence, adding comments is useful to explain what these actions do (even if these are quite simple).

To add a comment, we will click on the on the **"add a comment"** icon on the upper right and type our comment, in this case, "**Controls**." Then, drag the comment to the top of our actions.

![](/gdevelop5/tutorials/space-shooter/space-shooter-comment.gif)

## Check that the player movement works

Finally, we can test our game by clicking the **"Run"** button on the upper left.

![](/gdevelop5/tutorials/space-shooter/space-shooter-play-game.png)

It will run the game on your device, and you will be able to control your player by pressing the arrow keys.

![](/gdevelop5/tutorials/space-shooter/space-shooter-move-player-demo.gif)

## Next step

[Space Shooter, Part 3](/gdevelop5/tutorials/space-shooter/3-shoot-and-health)
