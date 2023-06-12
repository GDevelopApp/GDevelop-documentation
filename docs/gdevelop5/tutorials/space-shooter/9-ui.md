---
title: 9. User Interface (UI)
---
# 9. User Interface (UI)

## Series

You are reading **Part 9** of the [Space Shooter Tutorial](/gdevelop5/tutorials/space-shooter).

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

     In this chapter, we will learn how to add UI elements (Text) to the game.

## Adding UI elements

We will add two text objects to indicate the **player's health** and the **score of the game**. Firstly, create a new object, and select **Text** in the pop-up menu. Rename object as **"Score,"** type **"Score: 0"** in the text field. Then, add a custom font called **"Kenney Future Narrow.tff"** from the assets folder.

![](/gdevelop5/tutorials/space-shooter/space-shooter-add-text-font-min.gif)

We will use yellow for the score text, but you can use any color you want.

![](/gdevelop5/tutorials/space-shooter/space-shooter-add-score-text.png)

Now, we will repeat the same process to add a text for the player's health. Ensure that the object's name is **"Health"** and the font is the same as the previous step. Your settings should look like this:

![](/gdevelop5/tutorials/space-shooter/space-shooter-add-health-text.png)

In the end, you can see your two text objects under the other objects.

![](/gdevelop5/tutorials/space-shooter/space-shooter-text-objects.png)

You can drag and drop the text objects to the scene.

![](/gdevelop5/tutorials/space-shooter/space-shooter-drag-and-drop-score-text-min.gif)

We are putting **Score** to the **left upper corner** and **Health** to the **left lower corner** of the scene.

![](/gdevelop5/tutorials/space-shooter/space-shooter-positions-of-text-objects.png)

## Positioning text objects

We'll use a new layer where this object will be positioned, so that they are always visible and stay at the same place on the screen. Create a new layer called **UI** and put this layer at the top of the list.

!!! tip

    If you forgot how to add a layer, you can check this [chapter](/gdevelop5/tutorials/space-shooter/4-background-and-camera).

![](/gdevelop5/tutorials/space-shooter/space-shooter-add-layer-ui.png)

We should then select the text objects on the scene and open the properties panel from the icon at the upper right corner. **Change its layer to UI**. By putting these objects on the UI layer, they will always be shown on top of other game objects (which are on the base layer) and will stay visible on the screen even when the camera of the base layer is moved.

![](/gdevelop5/tutorials/space-shooter/space-shooter-text-change-layers.png)

## Updating values of text objects

We are ready to open the **"Events"** page. We will create a new scene variable called **"Score"** with an **initial value of 0**. Then, add an action to change the score with time. We are going to use the TimeDelta function to change the score according to time.

!!! warning

    Ensure that you selected **Add** as a modification sign.

![](/gdevelop5/tutorials/space-shooter/space-shooter-change-score-with-time.png)

We can also increase the score of the player when the player explodes an enemy. Hence, we will add an action to increase the score by 100 under the **Enemies dead condition**.

![](/gdevelop5/tutorials/space-shooter/space-shooter-add-100-score-when-enemy-dies.png)

Then, we are ready to update the score of the text object. Add a new action, and select the score text object. Afterward, choose to modify the text and type **"Score" + VariableString(Score)**. You should see these actions:

!!! warning

    Ensure that the modification sign is set to **=**.

![](/gdevelop5/tutorials/space-shooter/space-shooter-change-score-text.png)

We will add one last action to modify the health text. We will use the benefits of auto-completing GDevelop here:
Select **Health** text and choose to modify text. Fill the value with **"Health: " + LargeNumberToString(Player.Health::Health())**.

!!! tip

    You can use auto-completion while writing your actions.

![](/gdevelop5/tutorials/space-shooter/space-shooter-change-health-text-min.gif)

In the end, your actions should look like this:

![](/gdevelop5/tutorials/space-shooter/space-shooter-chapter-9-events.png)

## Testing out

We are ready to test our text objects. You can see the change in health and score.
![](/gdevelop5/tutorials/space-shooter/space-shooter-chapter-9-demo.gif)

## Next step

[Space Shooter, Part 10](/gdevelop5/tutorials/space-shooter/10-sound-effects-music)
