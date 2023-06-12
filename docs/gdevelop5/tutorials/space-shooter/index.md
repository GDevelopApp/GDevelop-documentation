---
title: Space Shooter
---
# Space Shooter

## Series

You are reading **Part 1** of the [Space Shooter Tutorial](/gdevelop5/tutorials/space-shooter).

1. [Create the Player](/gdevelop5/tutorials/space-shooter)
2. [Move the Player](/gdevelop5/tutorials/space-shooter/2-move-player)
3. [Shoot and Health](/gdevelop5/tutorials/space-shooter/3-shoot-and-health)
4. [Background and Camera](/gdevelop5/tutorials/space-shooter/4-background-and-camera)
5. [Enemies](/gdevelop5/tutorials/space-shooter/5-enemies)
6. [Enemy Mechanics](/gdevelop5/tutorials/space-shooter/6-enemy-mechanics)
7. [Meteors](/gdevelop5/tutorials/space-shooter/7-meteors)
8. [Powerups](/gdevelop5/tutorials/space-shooter/8-powerups)
9. [User Interface (UI)](/gdevelop5/tutorials/space-shooter/9-ui)
10. [Sound Effects & Music](/gdevelop5/tutorials/space-shooter/10-sound-effects-music)
11. [Visual Effects](/gdevelop5/tutorials/space-shooter/11-visual-effects)
12. [Levels](/gdevelop5/tutorials/space-shooter/12-levels)
13. [Main Menu & The End](/gdevelop5/tutorials/space-shooter/13-main-menu)

This tutorial will help you to begin to use **GDevelop**. You will create a simple **space shooter game** where the player controls a spaceship and shoots enemies, and avoids meteors in space. Note that you can read the [Getting Started](/gdevelop5/getting_started) page to get an overview of the software: it explains the main concepts and describes the interface of GDevelop.

## Create a new game

Click on **Create a new project** on the start page.

![](/gdevelop5/tutorials/space-shooter-create-project.png)

In the next window, choose a folder for your project and select **Empty project** to start a new game from scratch.

![](/gdevelop5/tutorials/space-shooter-empty-project.png)

## Create the first scene

We will create a new scene to put your objects and set up your game.

To add a scene, you should select the **Scenes** section on the left panel and a **Click to add a scene** button.

![](/gdevelop5/tutorials/space-shooter-create-scene.png)

You can rename your scene by right-clicking and selecting **Edit**. We will call this scene a  **Base Scene**. Then, we will add levels in the incoming sections. This is going to be the base scene for our levels.

![](/gdevelop5/tutorials/space-shooter-rename-scene.png)

## Setting the size of the game

To edit game settings, we will select **Game Settings** on the left panel. After the new menu appears, we will choose **Properties** to open the game settings window. We will change the project name to anything you like, in this case, **Space Shooter**. Then, replace the game resolution width with **900** and height with **500** since our game will be a horizontally scrolling space shooter.

![](/gdevelop5/tutorials/space-shooter-game-settings.gif)

## Enabling Grids

We will show grids to prepare our scene better and easier. Hence, click the toggle button on the upper right corner, then select **Show Grid**. Now you can see the grid lines on the scene view. We will change cells' widths and heights with **16** by selecting the **Setup Grid** from the previous menu.

![](/gdevelop5/tutorials/space-shooter-grid.gif)

## Adding the player

We are ready to add our player (space ship). After downloading the assets from [here](/gdevelop5/tutorials/space-shooter-assets.zip), we will click the "Add a new object" button.

![](/gdevelop5/tutorials/space-shooter-add-player-1.png)

This is a menu for choosing the types of objects. We usually add **Sprites** as an object. Sprites allow us to add images. However, we will use different types of objects in the following parts. Now, select **Sprite**.

![](/gdevelop5/tutorials/space-shooter-add-player-2.png)

We will change the name of the object to **Player**.

![](/gdevelop5/tutorials/space-shooter-add-player-3.png)

Click on **Add an animation**.

![](/gdevelop5/tutorials/space-shooter-add-player-4.png)

Click on **Add** to add an image for our object.

![](/gdevelop5/tutorials/space-shooter-add-player-5.png)

We will select our player image. Select **player.png** in the downloaded assets folder. Then, click **Apply**.
![](/gdevelop5/tutorials/space-shooter-add-player-6.png)

Now, you can drag and drop the **Player** object whenever you want! We will add basic controls to the player in the next chapter!

![](/gdevelop5/tutorials/space-shooter-add-player.gif)

## Next step

[Space Shooter, Part 2](/gdevelop5/tutorials/space-shooter/2-move-player)
