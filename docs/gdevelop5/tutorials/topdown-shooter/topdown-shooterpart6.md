---
title: Top Down Shooter - Part 6
---
# Top Down Shooter - Part 6

This tutorial explains to you how to create a Top-Down Shooter game in **GDevelop**. If you are a beginner or you have never used **GDevelop** before, this might be a great place to begin.

In this tutorial, you will learn how to :

- Make a limited Bullet number
- Make a Bullet magazine using variables
- Change variables
- Make an Ammo for reloading

## Series

You are reading Part 6 of the Top-Down Shooter Tutorial. If you haven't read Part 5, then you can read it by selecting it down below.

1. [Part 1](/gdevelop5/tutorials/topdown-shooter)
2. [Part 2](/gdevelop5/tutorials/topdown-shooter/topdown-shooterPart2)
3. [Part 3](/gdevelop5/tutorials/topdown-shooter/topdown-shooterPart3)
4. [Part 4](/gdevelop5/tutorials/topdown-shooter/topdown-shooterPart4)
5. [Part 5](/gdevelop5/tutorials/topdown-shooter/topdown-shooterPart5)
6. Part 6

This tutorial will help you to begin to use **GDevelop**. You will create a **top-down shooter**game where the player shoots and kills the enemy. Note that you can read the [Getting Started](/gdevelop5/getting_started/) page to get an overview of the software. It explains the main concepts and describes the interface of **GDevelop**.

## Previously

In Part 5 we learned how to make an obstacle for our **Enemy**. we also learned how to animate our **Player** and optimize our game by deleting unnecessary objects. Today, we are going to make a limited amount of **Bullets** using the variable we are also going to make **Magazines** and an **Enemy** spawner.

---

### Step 1. Limited Bullet

To make a limited amount of **Bullets**, we need to make a variable for our **Gun**. To make a variable:

1. Right-click over **Gun**
2. Click on **Edit object variable**
3. Click on **Add a new variable**
4. Name it **Ammo**
5. Give it a default value, I will give it **10**.
6. Click on **OK**

We now made a variable. Now, we need to make that whenever we have **Bullets**, the **Player** will shoot or will not shoot.

1. Now, create a new **Event**
2. Add a new condition
3. Select **Gun**
4. Select **Value of an Object's Variable**
5. Write **Ammo** in variable name textbox
6. Choose **\>** as the Operating Sign
7. Write **0** in the value
8. Click on **OK**
9. Now, drag that **Event** where you have included actions to shoot **Bullets** and place it inside this new **Event**

This will forbid the **Player** to shoot when they don't have enough **Bullets**. But to reduce the **Bullets** amount when we shoot, we should do this:

1. In the **Events** where we shoot, add a new action
2. Select **Gun**
3. Select **Value of an Object's Variable**
4. Write **Ammo** in the name textbox
5. Choose **-** as the Operator sign
6. In the value, write 1
7. Click on **OK**

### Step 2. Write our Bullet amount

To display anything in form of **Text**, we need a **Text** object. To add a **Text** object:

1. Click on **Add a new object**
2. Select **Text**
3. Rename it to "**AmmoText**"
4. Now drag it to our scene
5. Change its **Layers** to **UI**
6. Now go to **Events** tab
7. Add a new action
8. Select **AmmoText**
9. Select **Change the Text**
10. Choose **=** as **Operator sign**
11. In the value, write **"Ammo " + Gun.VariableString(Ammo)**
12. Click on **OK**

This will display our **Bullets** amount on the screen.

### Step 3. Make a Ammo

We have limited the number of **Bullets** the **Player** can shoot, reduce the number of **Bullets** while shooting but we also have to give **Bullets** to the Player. To do that, we need to add one more object. And to do so:

1. Click on **Add a new object**
2. Select **Sprite**
3. Name it Ammo
4. Double click on it to open **Object Editor**
5. Click on **Add a new animation**
6. Click on **Add**
7. Select "**Ammo-1.png**" asset
8. Click on **OK**

Now, we should give **Bullets** to our **Player** when he touches the **Ammo**. To do that:

1. Go to the **Events** tab
2. Add a new **Event**
3. Add a new condition
4. Select **Player**
5. Select **Collision**
6. In the **Object**, write **Magazine**
7. Click on **OK**
8. Now, add a new action
9. Select **Gun**
10. Select **Value of an Object variable**
11. Write **Ammo** in the Name textbox
12. Choose **+** as **Operator** sign
13. Write **10** in the value (this will add 10 **Bullets**)
14. Click on **OK**

Now, this will add 10 **Bullets** whenever we touch the **Ammo**

---

## Conclusion

So, this is our last Part and we learned how to limit the number of **Bullets** and reload in collision with **Ammo**.
