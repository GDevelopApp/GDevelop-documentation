---
title: Top Down Shooter - Part 4
---
# Top Down Shooter - Part 4

This tutorial explains to you how to create a Top-Down Shooter game in **GDevelop**. If you are a beginner or you have never used **GDevelop** before, this might be a great place to begin.

In this tutorial, you will learn how to :

  - Use **Pathfinding Object** behavior
  - Make an **Enemy**
  - Damage our **Player**

## Series

You are reading Part 4 of the Top-Down Shooter Tutorial. If you haven't read Part 3, then you can read it by selecting it down below.

1. [Part 1](/gdevelop5/tutorials/topdown-shooter)
2. [Part 2](/gdevelop5/tutorials/topdown-shooter/topdown-shooterPart2)
3. [Part 3](/gdevelop5/tutorials/topdown-shooter/topdown-shooterPart3)
4. Part 4
5. [Part 5](/gdevelop5/tutorials/topdown-shooter/topdown-shooterPart5)
6. [Part 6](/gdevelop5/tutorials/topdown-shooter/topdown-shooterPart6)

This tutorial will help you to begin to use **GDevelop**. You will create a **top-down shooter**game where the player shoots and kills the enemy. Note that you can read the [Getting Started](/gdevelop5/getting_started/) page to get an overview of the software. It explains the main concepts and describes the interface of **GDevelop**.

## Previously

In Part 3 we made an **Enemy**, a **Health Bar**, and a shooting **Gun**. So, today we are going to make an obstacle for our **Enemy** and make an **Enemy** which shoots our **Player**.

---

### Step 1. Add objects and set it up

Today, we are going to make an **Enemy** so, we need to make an object for it. So, let's add it:

1. Click on **Add a new object**
2. Click on the Sprite
3. Name it "Enemy damager"

Now, we need to add assets to our object. To do so:

1. Double click on Enemy
2. Click on Add a new animation
3. Click on **Add**
4. Choose "Enemy damager-1.png" asset
5. Click on **OK**
6. Drag it on the scene and place it around **Player**

### Step 2. Set its destination

We have made an **Enemy** object and gave it a **Behavior**, but that's not enough. We need to give it a destination too. And to give it a destination:

  - Go to the **Events** tab
  - Make a new event.
  - Add an action
  - Select **Enemy**
  - Select **Move to a position**
  - In the X position textbox, write **Player.X()**, and in the Y position textbox, write **Player.Y()**

!!! note

    You should use **Pathfinding behavior** if you have a map and you want the AI to differentiate between obstacles, destination, and something we want them to ignore.

### Step 3. Damage Player

Now, we will be damaging our **Player**. I want to damage the **Player** whenever the **Enemy** touches the **Player**. Previously, we learned how to make a **Health Bar** for our **Player**. **Health Bar** uses **Health** variable to show health, so if we want to damage **Player**, we should reduce **Health**. To reduce **Health**:

1. Add a new event
2. Add a new action
3. Select **Player**
4. Select **Value of an object variable**
5. Here, you will get a list of variables you made of the selected object
6. You can see **Health** too. Click on it.
7. Choose the Operator sign "**-**"
8. In the value, write the amount of health you want the **Player** to lose. Here, I will write 5.
9. Click on **OK**

So we have learned how to damage our **Player**. But, to damage the **Player** whenever **Enemy** touches him, we need to do this:

1. In the same previous **Event**, add a condition
2. Select **Enemy**
3. Select **Collision**
4. Now, select **Player**
5. Click on **OK**

But this will damage our Player rapidly, so let's delete Enemy whenever it collides. To do this:

1. In the same **Event**, add an action
2. Select **Enemy**
3. Select **Delete Object**
4. Click **OK**

### Step 4. Previewing the game

While Previewing the game, you can see that the Enemy damages our Player. And whenever it does, it disappears.

---

## Conclusion

In this part, we created an **Enemy** which can damage our **Player**. In [Part 5](/gdevelop5/tutorials/topdown-shooter/topdown-shooterPart5), we will be making a map. We will also be animating our **Player** and learning how to optimize our game for a better experience.
