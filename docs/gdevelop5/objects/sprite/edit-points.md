---
title: Edit Points
---
# Edit Points

Points are reference locations that refer to a specific location around a sprite.  Every sprite starts with two default points, named "**Origin**" and "**Center**".  Each of these points can be moved from their default locations.

* **Origin** point is created at the top-left corner of the sprite image. This point is used to position the image of the sprite object on the scene.
* **Center** point is created at the halves of the dimensions of the image. The **Center** point, also called "anchor" or "pivot" in other game engines, is the point around which the image is rotated or flipped.

!!! tip

    For example, if a sprite image is 100 x 100 pixels in dimensions, the origin of the image will lie at (0, 0) of the image, i.e. in the top-left corner of the image. The center, with respect to the origin of the image, will lie at (50, 50), i.e. (100/2, 100/2).

## Adding new points

Below all the animations, there is an Edit Points option.

![](/gdevelop5/objects/screenshot_from_2019-05-21_16-36-58.png)

Clicking on this option opens up a new dialog, in which, coordinates for the origin and the center of the sprite are already filled.

![](/gdevelop5/objects/screenshot_from_2019-05-21_17-51-58.png)

You can add points using the + symbol in the bottom right of the dialog. These points can be used as references for different actions. You can [see an example here.](http://wiki.compilgames.net/doku.php/gdevelop5/tutorials/tank-shooter#shoot_bullets_with_the_turret)

 To add unique points for different animations of the same sprite, disable the “Share same points for all animations” option.

![](/gdevelop5/objects/sprite/annotation_2019-07-02_183433.png)

 To add unique points for different instances of the same sprite, disable the “Share same points for all sprites of this animation” option.

![](/gdevelop5/objects/sprite/annotation_2019-07-02_184800.png)

## Editing the default origin and center points

If the sprite images are not centered, or the image should rotate around a specific position, you can change the position of the **Origin** and **Center** point. By default, the center point position is automatically computed. If you want to change its position, click on the Pen icon next to it:

![](/gdevelop5/objects/sprite/screenshot_2019-10-05_18.08.54.png)

!!! tip

    If a sprite is rotated or flipped, the points will automatically move to stay in the same relative location on the sprite.