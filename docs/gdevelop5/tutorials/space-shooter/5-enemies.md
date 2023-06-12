---
title: 5. Enemies
---
# 5. Enemies

## Series

You are reading **Part 5** of the [Space Shooter Tutorial](/gdevelop5/tutorials/space-shooter).

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

    In this chapter, we are going to learn how to add enemies to our game.

## Creating enemies

We will add three different types of enemies. Hence, you should follow the same process to add enemies. Click on **Add a new object** and select **Sprite**.  Then, type **"Enemy1"** in the name field and select **"enemy1.png"** from the asset folder as an image. Click apply.

![](/gdevelop5/tutorials/space-shooter/space-shooter-add-enemy-object-min.gif)

Repeat this step to add all three enemies.

In the end, you should see:

![](/gdevelop5/tutorials/space-shooter/space-shooter-enemies.png)

We'll now create an object group called **"Enemies"**. This will be useful in events, to refer to all the objects in the group without repeating events for each object.

!!! tip

    [Read this page](/gdevelop5/objects) to learn more about object groups.

Click on the **object groups editor** button on the upper right. Then, click to **add a new group**, and add the enemy objects one by one.

![](/gdevelop5/tutorials/space-shooter/space-shooter-create-object-group-min.gif)

Finally, rename the object group to **"Enemies."**

![](/gdevelop5/tutorials/space-shooter/space-shooter-enemy-object-group.png)

## Giving health to enemies

We are using the same health behavior that we used for the player. Edit the **Enemy1** object and add the **Health** behavior.

!!! warning

     Repeat this step for** every enemy object**.

![](/gdevelop5/tutorials/space-shooter/space-shooter-add-health-to-enemy-min.gif)

Then, open the behavior page of **Enemy1** and leave it as is: **Health: 100, Maximum health: 100**

![](/gdevelop5/tutorials/space-shooter/space-shooter-enemy-1-behavior.png)

Open the behavior page of **Enemy2** and change **Health** & **Maximum Health** to **50**.

![](/gdevelop5/tutorials/space-shooter/space-shooter-enemy-2-behavior.png)

Open the behavior page of **Enemy3** and change **Health** & **Maximum Health** to **150**.

![](/gdevelop5/tutorials/space-shooter/space-shooter-enemy-3-behavior.png)

## Shooting enemies

We will add a few actions to shoot the enemies. Firstly, open the **Events** tab. Then, add a new condition, choose the **Enemies** object group that we created before. Select action as **Collision** and the object as **Bullet**; by doing that, we can track the collision between our bullet objects and the enemies.

![](/gdevelop5/tutorials/space-shooter/space-shooter-collision-with-bullet.png)

If the collision happens between bullets and enemies, we need to remove the **Bullet** objects. Hence, we will add a new action next to the previous condition. Pick **Bullet** object and select **Delete an object**.

![](/gdevelop5/tutorials/space-shooter/space-shooter-delete-bullet.png)

Now, we need to give damage to the **Enemies**. Choose **Enemies** and select **Damage the object**. Then, enter **50** for the value of the damage.

![](/gdevelop5/tutorials/space-shooter/space-shooter-damage-enemies.png)

You should see these actions:

![](/gdevelop5/tutorials/space-shooter/space-shooter-enemy-collision-bullet-end.png)

Then, we need to add an extra condition to determine whether the enemy is dead or not. We will add a new event under the last one. Select **Enemies** as objects and choose **Is dead**. Now we can track if the health of the enemy is dead or not.

![](/gdevelop5/tutorials/space-shooter/space-shooter-if-enemies-dead.png)

If the **enemy** is **dead**, we should **delete** the scene's object. We will add a new action to delete the object, just like in the previous steps.

![](/gdevelop5/tutorials/space-shooter/space-shooter-delete-enemies.png)

Finally, we need to give **a force to move enemies**. However, we should provide a force when they are on the camera. Hence, we will add a new condition to perform our idea. In this condition, we are looking at the **Enemies' X position** when it is less than the **center Camera X position + 450**. Make sure that **less or equal to** is selected in the sign of the test.

!!! warning

    You can ask why we are using **450** because it is **half of the screen width**. Remember, our **width** is set to **900**. If you use any other resolution, you need to change it.

![](/gdevelop5/tutorials/space-shooter/space-shooter-camera-position-for-enemies.png)

In the event's action, we will give **a force to the Enemies** as we did in the previous steps. Ensure that **the angle is 180**, **the speed is 200** pixels per second, and the **Instant** option is checked.

![](/gdevelop5/tutorials/space-shooter/space-shooter-move-enemies.png)

Now all the events are ready for shooting **Enemies**. You can add a comment on the top to classify these actions.

![](/gdevelop5/tutorials/space-shooter/space-shooter-enemies-actions-chapter-5.png)

## Damaging the player

We will start adding a new condition to determine the collision between the **player** and the **enemies**. Follow the same procedure in the above.

![](/gdevelop5/tutorials/space-shooter/space-shooter-player-collision-enemies.png)

This time, we do not directly give the player damage because there will be different scenarios to damage the player. Hence, we are going to use the **Scene variable**.

!!! tip

    Scene variables are useful because they are created at the beginning of the scene, and they are going to be destroyed when the scene is over.

Now, create an action and type **"variable"** on the search bar. Then, select **Value of a scene variable** and click on the button next to the action details. In this window, create a scene variable called **"IsDamaged"** and give its initial value **0**. Then click **apply**.

![](/gdevelop5/tutorials/space-shooter/space-shooter-add-scene-variable-min.gif)

Then, select the **IsDamaged** as the variable, and change the scene variable's value to **40**.

![](/gdevelop5/tutorials/space-shooter/space-shooter-is-damaged-set-min.gif)

Add the **delete action for the enemies** like in the above. Then, your actions look like in the image below.

![](/gdevelop5/tutorials/space-shooter/space-shooter-player-events-collision.png)

Add a new condition to check whether **IsDamaged is greater than or equal to 1**. If the condition is fulfilled, then we will give damage to the player.

![](/gdevelop5/tutorials/space-shooter/space-shooter-if-is-damaged-greater-than-1.png)

Then, add a new action to damage the player. We did the same above, but this time enter the value of **"IsDamaged."**

!!! tip

     To enter the value of a variable, click the **number icon** next to the entered area. Afterward, choose **Variables** and the **Value of scene variable**. There will be a new window where you can select our variables.

![](/gdevelop5/tutorials/space-shooter/space-shooter-damage-player-by-variable-min.gif)

We also need to reset the **IsDamaged** to 0 because this will prevent our player from getting extra damages. Add a new action under the previous one and set **IsDamaged** to 0.

![](/gdevelop5/tutorials/space-shooter/space-shooter-reset-is-damaged.png)

## Restarting the game

Our game is over when the player is dead. Add a new condition to **check the player is dead or not**. Then, add an action to restart the game. Type **"scene"** on the search bar and select **Change the scene**. Just select the **"Base Scene"** or your scene's name.

![](/gdevelop5/tutorials/space-shooter/space-shooter-reset-scene.png)

For this chapter, the player's actions are ready.

![](/gdevelop5/tutorials/space-shooter/space-shooter-player-actions-chapter-5.png)

## Small enemies

We already made the player smaller, but we did not make it for the enemies. Please copy and paste the same action for making it small and change the **Player** with **Enemies**.

![](/gdevelop5/tutorials/space-shooter/space-shooter-change-enemy-size-min.gif)

This should be the **final version of the events**.

![](/gdevelop5/tutorials/space-shooter/space-shooter-chapter-5-ending.png)

## Testing out new mechanics

Before testing out new mechanics, we need to put some enemies on the scene. **Drag some enemies and drop** them at different places where **horizontally the same level as the scene**.

![](/gdevelop5/tutorials/space-shooter/space-shooter-drag-and-drop-enemies-min.gif)

Now, we are ready to play our game. We can shoot the enemies, and the player can get damage due to the enemy's collision.

![](/gdevelop5/tutorials/space-shooter/space-shooter-chapter-5-demo-min.gif)

## Next step

[Space Shooter, Part 6](/gdevelop5/tutorials/space-shooter/6-enemy-mechanics)
