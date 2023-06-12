---
title: Top Down Shooter-1
---
# Top Down Shooter-1

This tutorial explains to you how to create a Top-Down Shooter game in GDevelop. If you are a beginner or you have never used GDevelop before, this might be a great place to begin.

In this tutorial, you will learn how to :

- Create a new project
- Create a new scene

## Series

You are reading Part 1 of the Top-Down Shooter Tutorial.

1. Part 1
2. [Part 2](/gdevelop5/tutorials/topdown-shooter/topdown-shooterPart2)
3. [Part 3](/gdevelop5/tutorials/topdown-shooter/topdown-shooterPart3)
4. [Part 4](/gdevelop5/tutorials/topdown-shooter/topdown-shooterPart4)
5. [Part 5](/gdevelop5/tutorials/topdown-shooter/topdown-shooterPart5)
6. [Part 6](/gdevelop5/tutorials/topdown-shooter/topdown-shooterPart6)

This tutorial will help you to begin to use **GDevelop**. You will create a **Top-Down Shooter** game where the player shoots and kills the enemy. Note that you can read the [Getting Started](/gdevelop5/getting_started/) page to get an overview of the software. It explains the main concepts and describes the interface of **GDevelop**.

You can get the completed project ![here](/gdevelop5/tutorials/topdownexample.zip). You can get all assets ![here](/gdevelop5/tutorials/assets.zip).

---

### Step 1. Install GDevelop

If you haven't already installed [GDevelop](https://gdevelop.io), you can download and install it. After you open GDevelop, you will see the following interface: ![20211206-115208.png](/gdevelop5/tutorials/topdown-shooter/pasted/20211206-115208.png)

### Step 2. Create a new project

At the very beginning, you should create a new project. A project is a collection of sprites, sounds, scenes, behavior, etc. that is used to build a game. To create a project:

1. Launch GDevelop
2. Click on **Create a new project** ![20211206-115516.png](/gdevelop5/tutorials/topdown-shooter/pasted/20211206-115516.png)
3. Choose a folder for the project ![20211206-115926.png](/gdevelop5/tutorials/topdown-shooter/pasted/20211206-115926.png)
4. Click on **Empty game** ![20211206-120015.png](/gdevelop5/tutorials/topdown-shooter/pasted/20211206-120015.png)

### Step 3. Add a new scene

A scene is what's shown on the screen. It has got all the UIs, buttons, objects, etc. It consists of everything in a game and everything is built in a scene. A scene is like a world inside which we build everything.

To add a new scene:

1. Click on the Project Manager button at the top-left to expand the Project Manager.
2. Select **Click to add a scene** to create a new scene
3. Click on the scene to open it

    ![](/gdevelop5/tutorials/animation4.gif) \<note important\>GDevelop runs the scene from the top at the beginning of the game. So, if you want to show the menu at the beginning of the game, keep the menu at the top of the scene list.

### Step 4. Add our Player

A scene consists of many objects. Everything in a scene is an object. GDevelop has many types of objects that you can use in your game. You can get the full list [here](https://wiki.gdevelop.io/gdevelop5/objects#objects). But for now, we're only looking at a Sprite object. You can read about Sprite Object [here](https://wiki.gdevelop.io/gdevelop5/all-features/sprite/reference#sprite).

If you don't have Object Editor opened, you can open it by clicking an icon at the Top Right. ![20211206-124330.png](/gdevelop5/tutorials/topdown-shooter/pasted/20211206-124330.png)

GDevelop has an Asset Store that you can access while creating a new Object. You can find it in the Asset Store tab. ![20211206-124026.png](/gdevelop5/tutorials/topdown-shooter/pasted/20211206-124026.png) We are going to use assets from the Asset Store.

To add an Object from the Asset Store:

1. Click on Add a new object in the Object Editor
2. Choose Search Asset Store
3. In the Search Bar, search for Green Character 3
4. Click on GreenCharacter(3)
5. Click on Add to the game

### Step 5. Add a behavior

Behavior is like a script of an object. An object acts according to the behavior attached to it. To add a behavior to **Player**:

1. Double click on **Player**
2. In Object Editor, go to the **Behaviors** tab
3. Click on **Add a new behavior**
4. Select **Top-Down Movement**
5. Click on **OK**

![](/gdevelop5/tutorials/menu.png)

### Step 6. Preview your game

We **Preview** our game to find errors in our games. It is very important to **Preview** from time to time in order to prevent any issues. To preview your game, click on the **Preview** button in the toolbar. Now, use arrow keys to move your player. You can see that the **Player** moves when you press an arrow key. This is due to the behavior we added to our **Player**.

---

## Conclusion

In this part, we created a **Player** which can move in any direction. In [Part 2](/gdevelop5/tutorials/topdown-shooter/topdown-shooterPart2), we will be creating a gun for our **Player** which rotates around him. We will also be making a camera follow our **Player**.
