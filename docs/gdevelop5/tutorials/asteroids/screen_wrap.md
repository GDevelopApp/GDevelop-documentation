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

## Object group

In your game scene, open the "objects groups editor" panel, which is found in the top right section of the screen.

From this panel, create an object group called "Everything", and add your Player object, Bullet, and each type of asteroid to this group.

![](/gdevelop5/tutorials/asteroids/asteroids_gif_11_everything_object_group.gif)

## Screen wrap

Go in to the event sheet, create a new event group, and call it "Screen wrap".

In this event group, create a "For each object" event, and select the newly created object group "Everything". Then give this event the following conditions/actions:

Condition:

  - "Or" which will allow you to add sub events, and if any of the subevents inside the "Or" condition is true, the "Or" condition will be true. With the subconditions:
      - "Center X position" of the object group "Everything" is "Greater than" 830.
      - "Center X position" of the object group "Everything" is "Less than" 830.

Action:

  - "X position" of the Everything object group, with modification sign =(set to), (Everything.X()*-0.95).

And then recreate this event for the Y position, making sure to use 630 instead of 830, because Y is the height of the screen.

So if an object goes 30 pixels off screen it will have it's position moved to the opposite X or Y position depending on what part of the screen it went through. But, we multiply it by 0.95 (or 95%) so it will no longer be out of bounds when flipped.

![](/gdevelop5/tutorials/asteroids/screen_wrap/pasted/20220119-182309.png)
