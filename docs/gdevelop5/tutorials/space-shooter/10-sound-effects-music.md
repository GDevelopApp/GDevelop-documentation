---
title: 10. Sound Effects & Music
---
# 10. Sound Effects & Music

## Series

You are reading **Part 10** of the [Space Shooter Tutorial](/gdevelop5/tutorials/space-shooter).

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

     In this chapter, we will learn how to add sound effects and music to our game.

## Determine the beginning of the scene

Firstly, we will add soundtrack music to our game. This music will be played at the beginning of the game. Hence, we have to determine when the scene starts. We are using a built-in condition called **"At the beginning of the scene."**  So, open the **Events** tab and add a new event.

![](/gdevelop5/tutorials/space-shooter/space-shooter-at-the-beginning-of-scene.png)

## Playing sounds

Create a new action in the previous event. Type **play** on the search bar,  and select **Play sound**. Add an audio file called **"soundtrack.ogg"** from the assets folder. Set the volume **40**, and enter **1** as the pitch value.

!!! warning

    Do not forget to repeat the sound by selecting **yes**. We are going to loop the soundtrack.

![](/gdevelop5/tutorials/space-shooter/space-shooter-add-soundtrack.png)

Then, you should see:

![](/gdevelop5/tutorials/space-shooter/space-shooter-soundtrack-event.png)

## Playing sound effects

We will add a laser sound effect that will be played when the player fires a bullet. Go to the **FireBegin event**. Add a new action to play a sound. Select **"sfx_laser.ogg"** from the assets folder, set volume to 100, and pitch to 1.

![](/gdevelop5/tutorials/space-shooter/space-shooter-fire-bullet.png)

We will add an enemy hit sound effect, which will be played when the player hits the enemy. Go to the **Enemies is collision with Bullet event**. Add a new action to play a sound. Select **"enemy_explosion.waw"** from the assets folder, set the volume to 100, and pitch to 1.

![](/gdevelop5/tutorials/space-shooter/space-shooter-hit-enemy.png)

Finally, we will add a sound effect that will be played when the player collects a powerup. Go to the **Player's collision with powerup events**. Add a new action to play a sound. Select **"sfx_shieldUp.ogg"** from the assets folder, set volume to 100, and pitch to 1.

![](/gdevelop5/tutorials/space-shooter/space-shooter-powerup-sound.png)

That is all. You can test your sound effects by running the game.

## Next step

[Space Shooter, Part 11](/gdevelop5/tutorials/space-shooter/11-visual-effects)
