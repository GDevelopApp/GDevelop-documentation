---
title: 7. Meteors
---
# 7. Meteors

## Series

You are reading **Part 7** of the [Space Shooter Tutorial](/gdevelop5/tutorials/space-shooter).

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

    In this chapter, we will learn how to add meteors to the game.

## Adding Meteors

We will add four meteor objects. Add a new object called **"Meteor1"**, and select the **"meteor_1.png"** from the assets folder.

![](/gdevelop5/tutorials/space-shooter/space-shooter-add-meteor-min.gif)

Repeat the same process to add all four meteors. Then your objects should look like this:

![](/gdevelop5/tutorials/space-shooter/space-shooter-meteor-objects.png)

We will use object groups to control multiple meteor objects at once, especially in the events. Create a new object group called **"Meteors"** and add the meteor objects.

![](/gdevelop5/tutorials/space-shooter/space-shooter-copy-action-collision-with-meteors-min.gif)

Then you should see:

![](/gdevelop5/tutorials/space-shooter/space-shooter-meteors-object-group.png)

## Hitting meteors

Open the **Events** tab and copy the condition and the action (Player collision with BulletEnemy), then paste it. Replace **BulletEnemy** in the condition and the **Delete** action with **Meteors** and ensure that **IsDamaged** is equal to **30**.

![](/gdevelop5/tutorials/space-shooter/space-shooter-copy-action-collision-with-meteors-min.gif)

Add a new condition to detect the collision between **Bullet** and the **Meteors**.

!!! tip

    Our bullets will be gone when they hit meteors.

![](/gdevelop5/tutorials/space-shooter/space-shooter-bullet-collision-with-meteors.png)

Then, add an action to **delete "Bullet"** objects. In the end, your events should look like below.

![](/gdevelop5/tutorials/space-shooter/space-shooter-chapter-7-ending.png)

## Testing out

Before testing out the meteors, we should **put some meteor objects on the scene**. **Drag and drop** some meteor items on the scene.

![](/gdevelop5/tutorials/space-shooter/space-shooter-drag-adn-drop-meteors-min.gif)

Run the game. Now you can see the meteors on the scene. If you hit some meteors, the player will get some damages.

![](/gdevelop5/tutorials/space-shooter/space-shooter-chapter-7-demo-min.gif)

## Next step

[Space Shooter, Part 8](/gdevelop5/tutorials/space-shooter/8-powerups)
