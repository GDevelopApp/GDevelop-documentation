---
title: 4. Background and Camera
---
# 4. Background and Camera

## Series

You are reading **Part 4** of the [Space Shooter Tutorial](/gdevelop5/tutorials/space-shooter).

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

    In this chapter, we will learn how to move the background, the camera, and the player.

## Creating the background object

Click on **Add a new object** and select **Tiled Sprite**.  Then, type **"Background"** in the name field and select **background.png** from the asset folder as an image. Click apply.

![](/gdevelop5/tutorials/space-shooter/space-shooter-add-background-min.gif)

!!! tip

    We are using Tiled Sprite to create a background that repeats itself, like a tiled mosaic.

Now, we'll add on the scene a *layer* where the background will be. To add a layer, click on the **Layers editor** icon on the upper right, and open the layer view. Add a new layer called **"Background"** and switch its position with the **Base Layer**. By changing their positions, the background layer will be behind the base layer (that contains the rest of the game objects).

![](/gdevelop5/tutorials/space-shooter/space-shooter-add-layer-min.gif)

## Locating background on the scene

Open the **properties panel** from the upper right icons. Then, drag and drop the **background** object from the objects panel to our scene's upper left corner.

![](/gdevelop5/tutorials/space-shooter/space-shooter-add-background-to-scene-min.gif)

Select **background** object on the scene and open the properties panel. Change size mode to **Custom Size**, replace **the width, and the height with 900 and 500** in order.

!!! warning

    Do not forget to switch from the **Base Layer** to the **Background** layer that we created before.

![](/gdevelop5/tutorials/space-shooter/space-shooter-change-background-settings-min.gif)

Now, you will be able to see the player on the scene, with the background behind.

## Making a player stay on the screen

To make a player stay on the screen, we need to install a new behavior. So, open the Player behavior view, and add new behavior. Type **"stay"** on the search bar to find and install **"Stay On Screen"** behavior.

![](/gdevelop5/tutorials/space-shooter/spae-shooter-install-stay-on-screen-min.gif)

Add **Stay On Screen** behavior to our player.

![](/gdevelop5/tutorials/space-shooter/space-shooter-add-stay-on-screen-to-player-min.gif)

Fill the **Bottom & Right margin** with **70**, and **Top & Left margin** with **10**. Then click **Apply**.

![](/gdevelop5/tutorials/space-shooter/space-shooter-stay-on-screen.png)

## Moving the player, background, and camera

Open the **Events** tab. Create a new event and add a new action. Type **"camera"** on the search bar, and select the **Camera center X position**. Change modification sign  **+ (add)** and fill the value with  to **150 * TimeDelta()**.

!!! tip

    TimeDelta gives the "time elapsed" since last frame. When you multiply this by some amount, like 150, it translates to "this amount per second". In this example, the camera will move at 150 pixels per second.

![](/gdevelop5/tutorials/space-shooter/space-shooter-move-camera.png)

Add a new action under the previous one. This time choose **Background** object and select **Image X offset**.
Change modification sign  **+ (add)** and fill the value with  to **40 * TimeDelta()**.

This means that the background object will not move, but the image displayed on it will be moved, giving an impression of movement.

![](/gdevelop5/tutorials/space-shooter/space-shooter-move-background.png)

As the camera on the base layer moves towards the left, we have to add a force to the player so that it moves at the same speed. Add a new action under the previous one. Then choose **Player** and select **Add a force**. Fill **the speed on X-axis** with **150** and leave **Y-axis** as it is.

!!! warning

    Make sure you select the **Instant** option. This means that it's a force that is making the object to move for a single frame. As the event will be executed on every frame, this is what we need. A permanent force is used when you want to use an action for a one-off event.

![](/gdevelop5/tutorials/space-shooter/space-shooter-move-player.png)

## Testing out

This is the latest version of the **Events page**.

![](/gdevelop5/tutorials/space-shooter/space-shooter-controlls-event-chapter-4.png)

![](/gdevelop5/tutorials/space-shooter/space-shooter-player-events-chapter-4.png)

It is the demo of what we had covered in this chapter. Now, the camera and background move smoothly. The player cannot leave the screen, and the shooting of the player is optimized.

![](/gdevelop5/tutorials/space-shooter/space-shooter-chapter-4-demo-min.gif)

# Next step

[Space Shooter, Part 5](/gdevelop5/tutorials/space-shooter/5-enemies)
