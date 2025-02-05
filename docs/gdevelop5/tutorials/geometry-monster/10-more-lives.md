---
title: 10-more-lives
---
⬅️ **[Previous part: 9. Adding bombs](/gdevelop5/tutorials/geometry-monster/9-adding-bombs)** ➡️ **[Next part: 11. Game over](/gdevelop5/tutorials/geometry-monster/11-game-over)**

# 10. More lives

With **extra lives**, player will not be penalized immediately with a game over when they hit the bomb instead of the shape. This will remove one life out of the available ones, which we're gonna set to 3.

This will also be a good opportunity to use **extensions**, so we don't need to create everything ourselves.

!!! note

    Did you know that extensions are also made with events? You can inspect how they are done by clicking on one in the Project Manager and inspecting the behaviors, that are composed of events to create the actions and conditions of the behavior.

![](136.png)

Click on the "Project manager" icon that is located in the top left corner of the editor.

![](137.png)

This will open a panel where the search bar is at the bottom - click the "Search for new extensions".

![](138.png)

The extension we are after is called "life".

![](139.png)

This introduces a **behavior** called **"Health"**, which we can then manipulate in our game to manage the life of an object. Click "Install in project" to be able to use it.

!!! note

    Behaviors allow to add new features and logic to your objects. They are useful to create objects by assembling a few behaviors that you can then manipulate with events.

![](140.png)

While we're at it, we're gonna add another useful extension - **"Flash"**. When the Monster will get hit by a bomb and lose one life, we will make him blink for a short period of time to give the extra feedback to the player about what happened.

![](141.png)

Install that as well.

![](142.png)

Now when we have both extensions installed, they should be listed in the left panel, under "Functions/Behaviors".

![](143.png)

Click on the "Level1" to go back to the scene editor, then in the right panel with the "Objects" double click on the "Monster" - it will open a popup.

![](144.png)

Click on the "Behaviors" tab, which is were you can add these behaviors to the object...

![](145.png)

...and then "Add a behavior to the object".

![](146.png)

Our newly added, custom extension should be listed and available to use - click it.

![](147.png)

We're going to have the "Damage cooldown" set to `0,8` seconds (time when the Monster get hit and is indestructible, so it won't get hit again immediately by a different bomb), "Health" to `3` (current number of lives), and "Maximum health" to `3` (so the Monster will have three lives total).

Click on the "Add behavior to the object" to have another one.

![](148.png)

The second one will be "Flash".

![](149.png)

The "Half period" means the time when the object is invisible, and we're going to set it to `0,1` seconds. Below that, you can see the "Health" behavior we entered previously. Click "Apply" to have them saved.

![](150.png)

Now click on the "Level1 (Events)", and then "Collision" label to make sure it's the active one. In the top right menu, click the "Choose and add an event" icon, and then "For each object" in the dropdown.

![](152.png)

This will allow us to have a specific condition "Repeat for each Obstacle object".

![](153.png)

Choose "Obstacle", "Collision", "Monster". This way the bombs will collide with the Monster, and we will be able to subtract the current number of lives when this happens.

![](154.png)

The action "Delete an object" will remove the "Obstacle". Whenever a bomb hits the Monster, it will be deleted from the game.

![](155.png)

Another action is going to be used to have the Monster be damaged by the bomb. "Monster", "Damage the object", `1`. This means every single time the bomb hits the Monster, he will lose one life.

![](156.png)

From within "Other actions" we're going to add a different sound when that happens. "Audio", "Play a sound", "Choose a new audio file" to open the file explorer window.

![](157.png)

Select `killed.wav` file and open it to add it to the project.

![](158.png)

Make sure the name of the file is there.

![](160.png)

While the events work, they are only changing the life of the monster in memory. Let's display a life counter on the screen!

Click the "Level1" tab, and "Add a new object".

![](161.png)

Make it another "Sprite".

![](162.png)

Object's name is "Life", "Animation" is "Life3" (since the initial state of the animation have three lives), and then add the image of the hearts.

![](163.png)

Repeat for "Life2"...

![](164.png)

...and then "Life1".

![](165.png)

Last one is "Life0" for when all the lives are lost. Apply the changes.

![](166.png)

Drag and drop the "Life" object onto the scene and place it in the top right corner. We'll see during next chapter how to animate this "Life" object, making a "game over" screen when it reaches zero.

⬅️ **[Previous part: 9. Adding bombs](/gdevelop5/tutorials/geometry-monster/9-adding-bombs)** ➡️ **[Next part: 11. Game over](/gdevelop5/tutorials/geometry-monster/11-game-over)**
