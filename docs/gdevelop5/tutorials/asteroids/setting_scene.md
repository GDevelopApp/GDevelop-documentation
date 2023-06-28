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

## Camera controls

Create an event group, and call it "Beginning of scene".\\ Inside this group, create an event with the following conditions/actions:

Condition:

  - "At the beginning of the scene".

Action:

  - "Camera center X position" with modification sign "= (set to)" and the value 0.  (Leave layer and camera number as they are)
  - "Camera center Y position" with modification sign "= (set to)" and the value 0.  (Leave layer and camera number as they are)
  - "Change camera zoom" with a value of 0.5. (Leave layer and camera number as they are)

![](/gdevelop5/tutorials/asteroids/camera_settings/pasted/20220119-172243.png)

## Creating asteroids

Go back to your game scene and create 3 different sprite objects.
-1 called "AsteroidBig" with a single big asteroid image.
-1 called "AsteroidMedium" with a single medium asteroid image.
-1 called "AsteroidSmall" with a single small asteroid image.

Give each of these objects the Physics 2.0 behavior, and change the gravity of each object to 0.

Edit each of these objects so their origin points are at the center of the image.

Place a few of each of these objects into your scene.  Remember that your camera is zoomed out and centers on the 0,0 point.  This means that center of your game will be the top-left corner of the scene editor.  You will likely want to place your ship object at that top-left location (0,0)

![](/gdevelop5/tutorials/asteroids/asteroids_gif_9_physics_behavior_and_place_in_scene.gif)
