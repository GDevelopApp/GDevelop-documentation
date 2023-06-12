---
title: 12. Levels
---
# 12. Levels

## Series

You are reading **Part 12** of the [Space Shooter Tutorial](/gdevelop5/tutorials/space-shooter).

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

     In this chapter, we will learn how to design different levels and use them.

## Finishing the levels

We will add an object called **FinishLine** to determine the end of the level. Use a transparent image **finish_line.png** from the assets folder as a sprite.

!!! tip

     We are using the collision between the **Player** and the **FinishLine** objects to determine the end of the level.

![](/gdevelop5/tutorials/space-shooter/space-shooter-finish-line-object.png)

Then, **drag and drop** the **FinishLine** to **the end of the level**.

!!! warning

    Ensure that you **resize the object** and **cover the height of the screen**. If it is **too small** or **does not cover the size of the screen**, the player may miss the finish line.

![](/gdevelop5/tutorials/space-shooter/space-shooter-finish-line-min.gif)

Open the **Events** tab, and add a new condition to determine the collision between **Player** and **FinishLine**. Then, create a new **global variable** called **CurrentLevel** and set to **1**.

![](/gdevelop5/tutorials/space-shooter/space-shooter-current-level-global-variable.png)

In the action, increment **CurrentLevel** by **1**.
![](/gdevelop5/tutorials/space-shooter/space-shooter-increase-current-level.png)

In the end, your event should look like this:

!!! warning

    This event only increases the **CurrentLevel** variable by **1** and does not affect the level changing process yet. We will update this event in the last chapter.

![](/gdevelop5/tutorials/space-shooter/space-shooter-add-collision-with-finish-line.png)

## Using external layouts to create levels

We will use [External Layouts](/gdevelop5/interface/scene-editor/external-layouts#external_layouts) to create new levels. The **external layout** can create a layout of objects, just as in a scene editor. The objects can be then **dynamically inserted in a scene using the actions in the External layouts** category. Create a new external layout from the project manager panel. Then, select the **Base Scene** as an associated scene. Change the name of the external layout with **Level1**.

![](/gdevelop5/tutorials/space-shooter/space-shooter-add-external-layouts-min.gif)

Set the grid view, just like in the first chapter, and show the grid. Select **16** for the **cell sizes**.

![](/gdevelop5/tutorials/space-shooter/space-shooter-new-event-set-grid-min.gif)

Now, we should go back to the **Base Scene** and delete all **enemies, powerups, meteors, and the finish line**. We will add those objects and set up our levels in the external layouts.

!!! warning

     **Do not delete** objects from **objects tab**. Delete the objects from the **scene view**.

![](/gdevelop5/tutorials/space-shooter/space-shooter-delete-all-level-objects-from-base-scene.png)

You should see a clear view of the scene and see the **same objects** in the **object's tab**.

!!! warning

    **Do not delete the player, background, text objects, and other objects on the camera.**

![](/gdevelop5/tutorials/space-shooter/space-shooter-removed-all-objects-from-base-scene.png)

Open the events tab, and add a new action under the **At the beginning of the scene** event. Select **Create objects from external layout** and enter the name of our external layout, in that case, **Level1**.

!!! tip

    We will use a global variable to load the particular level in the next steps.

![](/gdevelop5/tutorials/space-shooter/space-shooter-create-objects-from-external-layouts.png)

In the end, your event should look like this:

![](/gdevelop5/tutorials/space-shooter/space-shooter-create-objects-from-external-layout-event.png)

We can now go back to our external layout and design our level by dragging and dropping the objects.

![](/gdevelop5/tutorials/space-shooter/space-shooter-drag-and-drop-objects-external-layouts-min.gif)

Then, add the finish line at the end of the view.

![](/gdevelop5/tutorials/space-shooter/space-shooter-finish-line-to-end-of-level-min.gif)

Repeat the same processes to create two more levels. In the end, you will have three different levels.

![](/gdevelop5/tutorials/space-shooter/space-shooter-level-1-2-3.png)

**Level 2** as an example:

![](/gdevelop5/tutorials/space-shooter/space-shooter-level-2.png)

**Level 3** as an example:

![](/gdevelop5/tutorials/space-shooter/space-shooter-level-3.png)

## Next step

[Space Shooter, Part 13](/gdevelop5/tutorials/space-shooter/13-main-menu)
