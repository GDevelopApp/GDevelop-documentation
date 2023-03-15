---
title: Platformer Tutorial, Part 1 - Getting Started
---
# Platformer Tutorial, Part 1: Getting Started

This tutorial explains how to create a platformer game with GDevelop. If you've never created a game with GDevelop before, this is great place to begin.

You'll learn how to:

* Design a level with platforms, enemies, and collectible coins.
* Create a playable character that can move, jump, and kill enemies.

## Prerequisites

Before starting this tutorial:

1. [Download and install GDevelop](#).
2. [Download the required assets for this tutorial](#).

## Step 1: Create a new project

1. Launch GDevelop.
2. Select **Create a new project**.
3. Choose a folder for the project.
4. Select **Empty game**.

## Step 2: Add a scene to the game

A game is made up of *scenes*. Typically, each scene is a different screen in the game. For example, the main menu, pause menu, and each level in a game would all be different scenes.

To add a scene to the game:

1. Expand the **Scenes** panel (if it's not already expanded).
2. Select **Click to add a scene**.

Then select the scene to open it.

**Note:** If you add multiple scenes to a project, the first scene in the list is the scene that GDevelop loads when the game starts.

## Step 3: Add objects to the scene

A scene is made up of *objects*. Every thing the user sees or interacts with, such as the playable character, enemies, or parts of the environment is an object.

To create an object:

1. In the **Objects** panel, click **Add a new object**.
2. Select **Sprite**.
3. In the **Object name** field, type "Cloud".
4. When the object editor opens, click the **Add an animation** icon.
5. Click **Add**.
6. Select the "cloud2.png" asset.
7. Select **Apply**.

Then drag one or more copies of the "Cloud" object into the scene. Each copy of an object that appears in a scene is referred to as an *instance* of that object.

## Step 4: Change the background color

1. Right click the scene's background.
2. Select **Scene properties**.
3. Click **Scene background color**.
4. Choose a nice shade of blue.

## Step 5: Preview the game

Right now, the game's a little dull — it's just a few clouds, after all — but it's useful to get into the habit of regularly previewing your games. That makes it easier to figure out what's wrong when something breaks.

To launch a preview of the game, click the **Preview** button in the toolbar.

To stop the preview, simply close the preview window.

## Step 7: Save the game

It's also useful to get into the habit of regularly saving your games. You can save the game via the **File** menu or by using a keyboard shortcut, such as `CTRL` + `S` on Windows or `CMD` + `S` on macOS.

## Next step

Read [Platformer Tutorial, Part 2](#) and learn how to create a playable character.