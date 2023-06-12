---
title: Top Down Shooter - Part 2
---
# Top Down Shooter - Part 2

This tutorial explains you how to create a Top Down Shooter game in **GDevelop**. If you are a beginner or you have never used **GDevelop** before, this might be a great place to begin.

In this tutorial, you will learn how to :

- Create a player who can shoot
- Follow camera towards player

## Series

You are reading Part 2 of the Top-Down Shooter Tutorial. If you haven't read Part 1, then you can read it by selecting it down below.

1. [Part 1](/gdevelop5/tutorials/topdown-shooter)
2. Part 2
3. [Part 3](/gdevelop5/tutorials/topdown-shooter/topdown-shooterpart3)
4. [Part 4](/gdevelop5/tutorials/topdown-shooter/topdown-shooterpart4)
5. [Part 5](/gdevelop5/tutorials/topdown-shooter/topdown-shooterPart5)
6. [Part 6](/gdevelop5/tutorials/topdown-shooter/topdown-shooterPart6)

This tutorial will help you to begin to use **GDevelop**. You will create a **Top-Down Shooter**game where the player shoots and kills the **Enemy**. Note that you can read the [Getting Started](/gdevelop5/getting_started/) page to get an overview of the software. It explains the main concepts and describes the interface of **GDevelop**.

## Previously

In Part 1, we made our **Player** and moved it. Today, we are going to make a **Gun** and aim it towards the mouse. We are also going to make a **Camera** follow our **Player**.

---

### Step 1. Add an object

Now that we are going to make a Gun, we need to do this: Add an object Choose Sprite Name it **"Gun"** We have made our Gun. Now we need to make specify its centre. A centre is a point from where an object rotates.

1. Double click the **Gun** to open **Object Editor**.
2. Click on **Add animation**
3. Click on **Add**
4. Select "**Gun 1.png**"
5. Select **OK**
6. Click on **Edit points**
7. Click on Edit button of the centre point
8. Write **4** in **X** and **3** in **Y**
9. Click on **Close**
10. Click on **Apply**

![](/gdevelop5/tutorials/topdown-shooter/bhvvtyei8k.gif) Now, we have specified our Centre of sprite we can now move on.

### Step 2. Keep gun around player

We have created our **Gun**. Now, we should stick our **Gun** with Player. To do it:

1. Go to the **Events** tab of the scene
2. Click on **Add a New Event**
3. Click on **Add action**
4. Here you will have a list of your objects. Select **Gun**.
5. Now, a new box appears. Here, you have the list of actions.
6. Search for **Position**
7. After finding, select **Position**
8. A new box appears.
9. In the X position textbox, write **Player.PointX("Center")** and in the Y position textbox, write **Player.PointY("Center")**.
10. Give both modification signs a sign of **"="**.
11. Click on **OK**.

![](/gdevelop5/tutorials/topdown-shooter/zgnhw4lkrl.gif) Now, the gun follows the Player or we can say it sticks to the Player.

### Step 3. Aim towards mouse

It cannot be called a shooter game if we don't know how to aim. So to aim:

1. Add a new action
2. Select **Gun**
3. Search for **Rotate towards Position** and click it
4. In the X position textbox, write **MouseX()**
5. In the Y position textbox, write **MouseY()**
6. Click on **OK**

![](/gdevelop5/tutorials/topdown-shooter/ti1ygjyqdt.gif)

### Step 4. Shoot

If we want to shoot, we need a bullet. So let's make a bullet:

1. Click on **Add a new object**
2. Select **Sprite**
3. Name it "**Bullet**"
4. Click on **Add a new animation**
5. Click on **Add**
6. Select "**Bullet-1.png**" asset
7. Click on **Apply**

![](/gdevelop5/tutorials/topdown-shooter/yg1d9zcayp.gif)

So we have made a **Bullet** sprite. But that's not enough. We also need to specify from where does the **Bullet** appears. And for that, we need a point in our **Gun**. To make a point:

1. Double click on **Gun**
2. Click on **Edit Point**
3. Click on **Add a new point**
4. Name the point "**Bullet**"
5. Change its X position to 14 and Y position to 2.
6. Click on **Close**
7. Click on **Apply**

![](/gdevelop5/tutorials/topdown-shooter/obaofmna4t.gif)

Now we need to shoot it. To shoot:

1. Go to the **Events** tab
2. Add a new event
3. Add a new action
4. Select **Bullet**
5. Select **Create a new object**
6. In X position textbox, write **Player.PointX("Bullet")**
7. In Y position textbox, write **Player.PointY("Bullet")**
8. Click **OK**
9. Now, add a new condition
10. Search for **Mouse button pressed or touch held**
11. Select it
12. Choose the mouse button you want the **Player** to press for shooting
13. Click **OK**

![](/gdevelop5/tutorials/topdown-shooter/coffeehanjanun.gif)

Now, we can shoot while we click.

### Step 4. Following camera towards player

If we have a big map and want the Player to explore, we want the **Camera** to follow **Player**. So, we need to do this:

1. Add a new action
2. Search for **Camera**
3. Select **Centre the camera on an object**
4. In the **Object** textbox, select **Player**
5. Click on **OK**

### Step 5. Preview your game

To preview your game, click on the **Preview** button in the toolbar. We can now see that our Gun rotates towards the mouse. If we move our **Player**, it moves but we don't feel like it. That's because we don't have anything other than the Player to give us the sensation of movement.

---

## Conclusion

In this part, we created a **Gun** which aims towards the mouse. We also made our **Camera** follow our **Player**. In [Part 3](/gdevelop5/tutorials/topdown-shooter/topdown-shooterpart3), we will be creating a Health Bar for our Player.
