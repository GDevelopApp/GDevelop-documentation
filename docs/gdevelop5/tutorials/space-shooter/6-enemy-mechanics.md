---
title: 6. Enemy Mechanics
---
# 6. Enemy Mechanics

## Series

You are reading **Part 6** of the [Space Shooter Tutorial](/gdevelop5/tutorials/space-shooter).

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

    In this chapter, we will learn how to give different mechanics to enemies.

## Shooting the player

We will add **a new bullet** object and give the shooting ability to **Enemy2**, so our enemies can also shoot the player. Add a new object called **"BulletEnemy"** and select the image as **laser_enemy.png** from the assets folder.

![](/gdevelop5/tutorials/space-shooter/space-shooter-add-enemy-bullet.png)

Then, add **Destroy when outside of the screen** behavior to this object. In the end, you should see:

![](/gdevelop5/tutorials/space-shooter/space-shooter-enemy-bullet-destroy.png)

We need to give fire ability to **Enemy2**. Hence, follow the same steps to add the **Fire Bullet** behavior to **Enemy2**.

![](/gdevelop5/tutorials/space-shooter/space-shooter-enemy-2-fire-ability-min.gif)

Now, we are ready to prepare our conditions and actions. Open the **Events** page and copy-paste the condition in which we determine the enemies' position. Then, drag and drop to the under of the original condition to make **a condition in a sub-event**.

!!! tip

    By doing that, the inside condition will be checked only if the first condition is satisfied.

In the new condition, change the **Camera.X()+450**  to **Camera.X()+150**

 ![](/gdevelop5/tutorials/space-shooter/space-shooter-copy-same-condition-enemy-3-min.gif)

Then, create a new condition in a sub-event condition under the original condition to check the scene timer's value. Fill the **time in seconds** with **1** and the **timer's name** with **EnemyFire**.

 ![](/gdevelop5/tutorials/space-shooter/space-shooter-timer-enemy-2.png)

Now, we want **Enemy2** to shoot **Player**. Hence, we will add a new action to fire a bullet.

 ![](/gdevelop5/tutorials/space-shooter/space-shooter-shoot-ability-enemy-2.png)

Then, we have to **reset the timer** to prevent unexpected problems. In the end, you should see:

 ![](/gdevelop5/tutorials/space-shooter/space-shooter-enemies-chapter-6-part-1.png)

## Getting damages when hit by a bullet

Now, our **Enemy2** can fire bullets toward the player. However, we did not define the effect of being shot by these bullets. We will add a new condition to check the collision between the **Player** and the **BulletEnemy**. Please select the **event** and **copy-paste** it. You need to change the **in collision with** to **BulletEnemy**, and change the **IsDamaged** value to **30**. Finally, change deleting **Enemies** to **BulletEnemy** objects.

 ![](/gdevelop5/tutorials/space-shooter/space-shooter-player-collision-enemy-bullet-min.gif)

Your actions should look like this:

 ![](/gdevelop5/tutorials/space-shooter/space-shooter-player-events-chapter-6.png)

## Moving enemy to the center of the screen

We will add a new mechanic, moving enemy to the center of the screen, to **Enemy3**. Firstly, we need to have the position of **Enemy3**. Thus, we will create some conditions to make a move smoothly. Create a new condition in a sub-event (**Camera.X()+150**). Select **Enemy3**, **Compare Y position** and check if the **value is greater than or equal to 300**.

 ![](/gdevelop5/tutorials/space-shooter/space-shooter-enemy-3-condition.png)

!!! tip

     We will use the same condition four times, so instead of writing every condition again, just **copy-paste the condition** like below and **modify them**.

 ![](/gdevelop5/tutorials/space-shooter/space-shooter-enemy-position-min.gif)

In the end, you will have:

 ![](/gdevelop5/tutorials/space-shooter/space-shooter-enemies-chapter-6-part-2.png)

We are ready to add movement to these conditions. Use the Enemies movement action and modify it to move **Enemy3** with an angle of **-90** and speed of **300**.

 ![](/gdevelop5/tutorials/space-shooter/space-shooter-enemy-3-movement-min.gif)

Repeat the same process for the condition below. Just change the angle to **90**. In the end, you should see:

 ![](/gdevelop5/tutorials/space-shooter/space-shooter-enemies-chapter-6-events.png)

## Testing out

Now we are ready to play our game. Hit the run button.

!!! tip

    If you want to play longer, you can put new enemy objects on the scene.

 ![](/gdevelop5/tutorials/space-shooter/space-shooter-chapter-6-demo-min.gif)

## Next step

[Space Shooter, Part 7](/gdevelop5/tutorials/space-shooter/7-meteors)
