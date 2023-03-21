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

## Creating Bullet object

Create a sprite object, give it a single bullet animation, and name it Bullet.

Be sure to orient the bullet so it is facing to the right, just like your ship should be.

To do this, open up Piskel and click the resize tab.\\ In this tab, set the anchor to the middle of the image and deselect "maintain aspect ratio", then change the width to be the same as the current height and click the resize button. Now that it's a square, rotate the bullet to be facing to the right, and resize the image height to be that of the original width. Then save your work.

![](/gdevelop5/tutorials/asteroids/asteroids_gif_6_rotate_bullet.gif)

## Edit points

Click the "Edit points" button for the Bullet object, and grab the origin point and move it to the center of the object.

![](/gdevelop5/tutorials/asteroids/firing_bullet/pasted/20220119-162810.png)

Go to your Player object and click "Edit points".\\ Add a new point and place it in the middle of your ship, close to the nose. Name this point "BulletSpawn".

![](/gdevelop5/tutorials/asteroids/asteroids_gif_7_add_bullet_spawn_point.gif)

## Create bullet

Go to the event sheet, and create an event with the following conditions/actions:

Condition:
-"Key pressed" with Space selected.
-"Trigger once"

Action:
-"Create object", Bullet, at the X and Y position of the earlier created "BulletSpawn" point.
-"Rotate toward angle" using the angle of the Player, with an angular speed of 0.
-"Add a force (angle)" (Common Action, not Physics Engine) using the Player object's angle and a speed of 350 pixels per second. Select permanent instead of instant.
-"Z order" and use the expression builder to find the Z order of the Player object, and subtract that by 1. So the expression should read Player.ZOrder()-1.

![](/gdevelop5/tutorials/asteroids/asteroids_gif_8_setting_up_fire_bullet.gif)

## Organization

Create an event group called "Player" and put all of the events you just created into this group. Make sure none of the events get placed as sub events.

![](/gdevelop5/tutorials/asteroids/firing_bullet/pasted/20220119-171618.png)
