---
title: 11. Visual Effects
---
# 11. Visual Effects

## Series

You are reading **Part 11** of the [Space Shooter Tutorial](/gdevelop5/tutorials/space-shooter).

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

     In this chapter, we will learn how to add visual effects to our game objects.

## Making the player blink

We will use a blinking effect for the player when the player gets damaged. In GDevelop, there is a behavior for blinking, so go to the player's behavior settings. Then search **"blink"** to install the action called **Flash**.

![](/gdevelop5/tutorials/space-shooter/space-shooter-add-blink-behavior.png)

Add this behavior to the player. You should see the behavior in the player's tab.

![](/gdevelop5/tutorials/space-shooter/space-shooter-blink.png)

Open the **Events** tab, and find the event related to damaging the player. Add a new action, select the **Player** as an object, and choose **Flash(blink)**. Enter **1 second** for the duration of the blinking.

![](/gdevelop5/tutorials/space-shooter/space-shooter-blink-player-action.png)

## Importing explosion effects

We will use a sample project of GDevelop to copy an explosion effect and put it in our game. Go to **File** and **Create a new project**.

![](/gdevelop5/tutorials/space-shooter/space-shooter-create-a-new-project.png)

Select **Particle Effects Demo**.

![](/gdevelop5/tutorials/space-shooter/space-shooter-particle-effects-demo.png)

!!! tip

    You can run the game and check these great particle effects.

We will copy three objects (**BasicExplosion**, **BasicExplosionSmooth**, and **BasicExplosionSharp**) to our **Base Scene** and use them in our game.

![](/gdevelop5/tutorials/space-shooter/space-shooter-particle-effects-copy-objects.png)

Select the object and copy it.

!!! tip

    We cannot copy all objects simultaneously, so we need to repeat this process three times.

![](/gdevelop5/tutorials/space-shooter/space-shooter-copy-object-from-project-min.gif)

We cannot directly paste the object, we have to open the edit menu and select **paste the object**.

![](/gdevelop5/tutorials/space-shooter/space-shooter-paste-object-min.gif)

Your objects should look like this:

![](/gdevelop5/tutorials/space-shooter/space-shooter-effect-objects.png)

Although we copied the objects, we also need to get the assets of these objects. These are in the assets folder. Edit **BasicExplosionSmooth** object. Replace the image path by importing a new image. Choose **ExplosionTexture1.png** from the assets folder. Then, click apply.

![](/gdevelop5/tutorials/space-shooter/space-shooter-basic-explosion-assets-min.gif)

Repeat the same process for **BasicExplosion**. This time, choose **Glow.png** from the assets folder.

![](/gdevelop5/tutorials/space-shooter/space-shooter-basic-explosion-glow.png)

## Creating the explosion when an enemy is destroyed

Open the **Events** tab and go to the **Enemies is dead** event.
![](/gdevelop5/tutorials/space-shooter/space-shooter-add-explosion-events-here.png)

Add a new action to create these explosion objects. Select **BasicExplosionSharp** and choose **create an object**. Fill X position with **Enemies.X()** and Y position with **Enemies.Y()**.

![](/gdevelop5/tutorials/space-shooter/space-shooter-create-explosion-objects.png)

Repeat the same process to create the other two objects. In the end, you should see these events:

![](/gdevelop5/tutorials/space-shooter/space-shooter-chapter-11-events.png)

## Testing out

We are ready to run our game and test the new blinking and explosion effects.

![](/gdevelop5/tutorials/space-shooter/space-shooter-chapter-11-demo.gif)

## Next step

[Space Shooter, Part 12](/gdevelop5/tutorials/space-shooter/12-levels)
