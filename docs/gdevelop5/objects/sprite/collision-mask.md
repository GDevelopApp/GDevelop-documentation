---
title: Collision Masks (for Sprite objects)
---
# Collision Masks (for Sprite objects)

In a Sprite editor, below all the animations, we find the **Edit Hitboxes** button.

![](/gdevelop5/objects/screenshot_from_2019-05-21_16-36-32.png)

Clicking on this button takes us to a new dialog that talks more about something known as collision masks. Collision mask, in simple terms, is nothing but the area of the sprite, that is in consideration while in a collision, to avoid situations, similar to the one shown below.

![](/gdevelop5/objects/screenshot_from_2019-05-21_17-00-45.png)

To add your own custom collision mask, click on the **Use a custom collision mask** option.

![](/gdevelop5/objects/screenshot_from_2019-05-21_17-03-48.png)

Click on the + sign at the bottom right of the screen to start adding your custom collision mask.

This will take you to the screen where you can enter/drag the outline of your collision mask. To add more points, click on the + sign below all the coordinates of your points. My final sprite collision masks look as shown below.

!!! note

    Please make sure that the polygon is convex, i.e. there are no vertices that have an angle greater than 180º

![](/gdevelop5/objects/screenshot_from_2019-05-21_17-19-28.png)

![](/gdevelop5/objects/screenshot_from_2019-05-21_17-22-22.png)

After adding the mask click on Close and then Apply.

The collision masks we used for our above example give better results in the same condition.

![](/gdevelop5/objects/screenshot_from_2019-05-21_17-26-52.png)

To add unique collision masks for different animations of the same sprite, disable the **Share same collision masks for all animations** option.

![](/gdevelop5/objects/sprite/annotation_2019-06-21_121320.png)

To add unique collision masks for different instances of the same sprite, disable the **Share same collision mask for sprites of this animation** option.

![](/gdevelop5/objects/sprite/annotation_2019-06-21_121540.png)