---
title: Top Down Shooter - Part 3
---
# Top Down Shooter - Part 3

This tutorial explains to you how to create a Top-Down Shooter game in **GDevelop**. If you are a beginner or you have never used **GDevelop** before, this might be a great place to begin.

In this tutorial, you will learn how to :

  - Make a health bar for Player
  - Display it on the screen
  - Make an object variable
  - Use it

## Series

You are reading Part 3 of the Top-Down Shooter Tutorial. If you haven't read Part 2, then you can read it by selecting it down below.

1. [Part 1](/gdevelop5/tutorials/topdown-shooter)
2. [Part 2](/gdevelop5/tutorials/topdown-shooter/topdown-shooterPart2)
3. Part 3
4. [Part 4](/gdevelop5/tutorials/topdown-shooter/topdown-shooterPart4)
5. [Part 5](/gdevelop5/tutorials/topdown-shooter/topdown-shooterPart5)
6. [Part 6](/gdevelop5/tutorials/topdown-shooter/topdown-shooterPart6)

This tutorial will help you to begin to use **GDevelop**. You will create a **top-down shooter**game where the player shoots and kills the enemy. Note that you can read the [Getting Started](/gdevelop5/getting_started/) page to get an overview of the software. It explains the main concepts and describes the interface of **GDevelop**.

## Previously

In Part 2, we made a **Gun** for our **Player** and learned how to make it aim towards the mouse. Today, we are going to make a **Health Bar** for our **Player** and display it on the screen.

---

### Step 1. Add a Health Bar

To add a **Health Bar**:

1. Click on **Add a new object**
2. Select **Tiled Sprite**
3. Name it "**Health Bar**"

Now, we need to set something here:

1. Double click **Health Bar** to open Object Editor
2. Click on **Add a new animation**
3. Click on **Add**
4. Choose "**NewFile-1.png**" asset
5. Click on **OK**.

Now, drag **Health Bar** at some corner of the scene.

### Step 2. Set it on a layer

A layer is used to separate the type of object(that's what I use for). A layer doesn't interact with the other layer's camera, meaning they will give objects of other layers a fixed place. Read more about it [here](/gdevelop5/interface/scene-editor/layers-and-cameras).

To add a **Layer**:

1. Open **Layer Editor** ( if not opened)
2. A new **Docker** will appear now. In that docker, click on **Add a new layer**.
3. Give the **Layer** a name like "**UI**"

Now, to set **Health Bar** on the layer:

1. Now, click on **Health Bar**
2. Click on layer selection and choose the layer **UI**

![](/gdevelop5/tutorials/topdown-shooter/healthui.gif)

### Step 3. Making a variable for our Player to represent health

Now we are at creating a **Health Bar** for our **Player**. To make a **Health Bar**, we need to make **Health** at first, and to make **Health**, we use variables. Now, asking what are variables, they are some kind of storage where you can store numbers and texts. You can read more about this [here](/gdevelop5/all-features/variables/). We are making variables for our **Player's** health, so we only make our **Player** variables. So we right-click on our **Player** and select **Edit object** variable.

1. Now add a variable by clicking on **Add**
2. Name the variable **Health**
3. Give it a default value
4. Click on **OK**

![](/gdevelop5/tutorials/topdown-shooter/anim23.gif)

### Step 4. Displaying Health in a Health Bar

Now we have our **Health**. But we still have a lot to do. Now, if we want our **Player** to know the health of the **Player** then we can't just leave him calculating how many hits he got. Right, we need to display it. Now to display it:

1. Go to the **Events** tab
2. Add a new event
3. Add a new action
4. Select **Health Bar**
5. Select **Width**
6. Choose operator **"="**
7. In the value, you should write something like "(Player.Variable(Health)/100)X50".
8. Click on **OK**.

!!! note

    In the **Health Bar** value, why I choose to do that, it's quite of a math formula. Like you have a variable, called **Health**, and we want our **Health Bar** to show players the amount of **Health** left in comparison to total **Health**. If I want the **Player** to have a total **Health** of 100, I would go with the **Player.Variable(Health)/100**. But, what about the number 50 after "*". This is to fit the Health Bar within that size, within 50 pixels. Also, I used "X" instead of the star mark.

---

## Conclusion

In this part, we created a **Health Bar** for our **Player** and displayed it successfully. In [Part 4](/gdevelop5/tutorials/topdown-shooter/topdown-shooterPart4), we will learn to make our **Enemy** using Pathfinding Behavior and using it to damage our Player.
