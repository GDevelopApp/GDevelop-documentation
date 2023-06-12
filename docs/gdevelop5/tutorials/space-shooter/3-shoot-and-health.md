---
title: 3. Shoot and Health
---
# 3. Shoot and Health

## Series

You are reading **Part 3** of the [Space Shooter Tutorial](/gdevelop5/tutorials/space-shooter).

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

    In this chapter, we will learn how to use **Behaviours** in our game. You can read the [Behaviors](/gdevelop5/behaviors) page to learn more about them. Behaviors add extra capabilities to objects. All objects can have one or more behaviors attached to it.

## Install health and fire behaviors

Select the three dots next to the Player object and click **Edit object**. Then, click the **Behaviors** tab.

![](/gdevelop5/tutorials/space-shooter/space-shooter-add-a-behaviour-2.gif)

Click on the **Add a new behavior to the object** and select **Search new behaviors** tab. Now you can type **"Health"** on the search bar to find our behavior. Select the **Health** behavior and install it. By doing that, we will be able to use this behavior in the future without downloading it again.

![](/gdevelop5/tutorials/space-shooter/space-shooter-search-behavior-2.gif)

Repeat the same step to install **Fire Bullets** behavior.

![](/gdevelop5/tutorials/space-shooter/space-shooter-install-fire-behavior-2.gif)

## Add health and fire capability to the player

On the player's edit view, click on **Add a new behavior to the object** and search **"fire"** on **Installed Behaviors**. Then, select **Fire Bullets**. We'll now be able to fire bullets using an action that we'll add in the next steps.

![](/gdevelop5/tutorials/space-shooter/space-shooter-add-fire-behavior-2.gif)

 Set cooldown to **0.3**.

![](/gdevelop5/tutorials/space-shooter/space-shooter-fire-behavior-set-0.3.png)

Repeat the same process to add **Health** ability to the player. Change **Maximum health**  from 100 to **0**, since we do not want to limit our player's maximum health.

!!! tip

    In the next chapters, we will add some powerups to increase the player's health.

![](/gdevelop5/tutorials/space-shooter/space-shooter-add-health-behavior-2.gif)

## Shooting bullets from the player spaceship

Firstly, we need to add a bullet object. Follow the steps in the previous episode and add a sprite object. Use the name **Bullet** and add **"laser_player.png"** image for the object.

![](/gdevelop5/tutorials/space-shooter/space-shooter-add-bullet-2.gif)

We will add a new behavior, called **Destroy when outside of the screen**, to the Bullet object, because we want to delete the objects that are not on the screen.

!!! tip

    The **Destroy when outside of the screen** behavior allows us to prevent shooting the outside of the camera by deleting objects outside of the screen.

Add "Destroy when outside of the screen" behavior to the **Bullet** object.

![](/gdevelop5/tutorials/space-shooter/space-shooter-bullet-behavior-min.gif)

You can see your new **Bullet** object under the Player object.

![](/gdevelop5/tutorials/space-shooter/space-shooter-bullet.png)

Then, open the **Events** page. Add a new event. Click on **add a condition** and type **"key"** to check whether the **Space** key is pressed or not.

![](/gdevelop5/tutorials/space-shooter/space-shooter-add-space-key.png)

Now, we will add the shooting action. Click on add action in the same event, and select **Player**. Then, on the top, you can see the new actions coming from our behaviors. Select **Fire a bullet** and fill out the requirements like below:

![](/gdevelop5/tutorials/space-shooter/space-shooter-add-fire.png)

`Player.X()` is an expression that will be replaced by the position on the player's X-axis. We add 50 to position the bullet at the right of the object. The same goes for the Y-axis.
The other parameters indicate that we'll create a "Bullet" object and gives it some speed. The angle is 0 degrees, meaning the bullets will go on the right.

## Making the player a bit smaller

The player spaceship is a bit too big. We could resize it in the scene editor, but for this tutorial we'll use events. Click on **Add a new action** to change the scale of the player. Then, select the **Player** and **Scale**. Fill the value with **0.6**.

!!! warning

    Make sure that modification sign is  ** = (set to)**.

![](/gdevelop5/tutorials/space-shooter/space-shooter-change-player-scale.png)

You can add a **"Player"** comment to separate the actions. You events page should look like this:

![](/gdevelop5/tutorials/space-shooter/space-shooter-ending-of-chapter-3.png)

## Testing our shoot ability

Save and run the game. Try pressing **Space** to see how you can shoot.

![](/gdevelop5/tutorials/space-shooter/space-shooter-chapter-3-demo.gif)

!!! tip

     We will add some **health** actions later, after creating our enemies.

## Next step

In the next chapter, we'll add a background and make the camera move: [Space Shooter, Part 4](/gdevelop5/tutorials/space-shooter/4-background-and-camera)