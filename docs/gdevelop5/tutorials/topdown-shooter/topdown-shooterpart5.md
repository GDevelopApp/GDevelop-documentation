---
title: Top Down Shooter - Part 5
---
# Top Down Shooter - Part 5

This tutorial explains to you how to create a Top-Down Shooter game in **GDevelop**. If you are a beginner or you have never used **GDevelop** before, this might be a great place to begin.

In this tutorial, you will learn how to :

  - Make an obstacle for our Enemy
  - Animate a sprite
  - Optimize the game by deleting unnecessary objects

## Series

You are reading Part 5 of the Top-Down Shooter Tutorial. If you haven't read Part 4, then you can read it by selecting it down below.

1. [Part 1](/gdevelop5/tutorials/topdown-shooter)
2. [Part 2](/gdevelop5/tutorials/topdown-shooter/topdown-shooterPart2)
3. [Part 3](/gdevelop5/tutorials/topdown-shooter/topdown-shooterPart3)
4. [Part 4](/gdevelop5/tutorials/topdown-shooter/topdown-shooterPart4)
5. Part 5
6. [Part 6](/gdevelop5/tutorials/topdown-shooter/topdown-shooterPart6)

This tutorial will help you to begin to use **GDevelop**. You will create a **top-down shooter**game where the player shoots and kills the enemy. Note that you can read the [Getting Started](/gdevelop5/getting_started/) page to get an overview of the software. It explains the main concepts and describes the interface of **GDevelop**.

## Previously

In Part 3 we made an **Enemy**, a **Health Bar**, and a shooting **Gun**. So, today we are going to make an obstacle for our **Enemy** and make an **Enemy** which shoots our **Player**.

---

### Step 1. Obstacle for our Enemy

Making an obstacle for our **Enemy** is very important. This is a must when you want to create a map. To create it:

1. Add a new object
2. Select Tiled Sprite
3. Name it "**Wall**"
4. Select **Wall_1.png**
5. Go to the **Behavior** tab
6. Click on **Add a new behavior**
7. Select **Pathfinding Obstacle**
8. Click on **OK**
9. Now, right-click on the **Wall**
10. Click on duplicate
11. Rename it **Wall 2**
12. Now double click on it to open **Object Editor**
13. Right-click over the frame and click on delete to delete the frame
14. Now click on **Add**
15. Select Wall 2 1 asset
16. Click on **OK**
17. Now drag it over the scene

We have made two different walls now we net to keep it as a group. To do that:

1. Open the **Group Editor** (If not opened)
2. Click on **Add a new group**
3. Name the group **Wall**
4. Double click on **Wall** to open group Editor
5. In the Object name right **Wall 1** and click on the **Enter** key
6. Do the same by writing wall 2

Now, we have our obstacle for the **Enemy**. But, we also don't want **Player** to pass through things that the **Enemy** can't. To do that:

1. Add a new action
2. Select **Player**
3. Select **Separate objects**
4. Choose **Wall**
5. Click on **OK**.

### Step 2. Animate our Player

We know that our **Player** has 2 animations. But only the first one is Played. We want the second one to play when the **Player** is moving. And to do so:

1. Go to the **Events** tab
2. Add a new **Event**
3. Add a new condition
4. Select **Player**
5. Select **Is moving**
6. Click on **OK**
7. Now, add a new action
8. Select **Player**
9. Select **Change the animation**
10. Choose **=** as the operator sign
11. Write **1** in the value
12. Click on **OK**

Now the animation changes when we move but doesn't change to 1 when we stop. To do that:

1. Add a new **Event**
2. Add a new condition
3. Select **Player**
4. Select **Is moving**
5. Now, click on **OK**
6. After that hover over that condition and use the right mouse button
7. Click on **Invert Condition**
8. Now add a new action
9. Select **Player**
10. Choose **=** as the operator sign
11. Write **0** in the value
12. Click on **OK**

### Step 3. Optimize for better performance

We need to optimize our game for a better performance. To do that, we can delete unnecessary objects like Bullet. When we miss our target, we have to make sure that the Bullet doesn't just keep going and going, it should be deleted. To do that we have a Behavior called **Destroy Outside the Screen**. To use that:

1. Double click on **Bullet** to open the **Object Editor**
2. Go to the **Behavior** tab
3. Click on **Add a new Behavior**
4. Select **Destroy Outside the Screen**
5. Click on **OK**

---

## Conclusion

In this part, We learned how to **Optimize** our game for better **Performance**. We also learned how to animate a sprite and make an obstacle for our **Enemy**.
