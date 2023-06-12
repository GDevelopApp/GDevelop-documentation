---
title: Tank shooter - Beginner tutorial
---
# Tank shooter - Beginner tutorial

This tutorial will help you to get familiar with the way GDevelop works.
You will create a very simple game. In this game, the enemies will move toward the player. The player will be able to shoot the enemies. The enemies will explode when they are hit with the player's bullets.
![](/gdevelop5/tutorials/beginner-tutorial-screenshot.png)

To get an overview of the software I recommend that you read the [Getting Started](/gdevelop5/getting_started) page first.

#### Download GDevelop

If you do not have GDevelop, download it from the official website : [gdevelop-app.com](http://gdevelop-app.com)

Always download GD from this page to be sure that you have the latest version.
Once you have installed GDevelop, launch it. The Interface's "Start" page will be displayed:
![](/gdevelop5/start_page.png)

#### Download the source

You can download the finished project from here [beginner tutorial.zip](/gdevelop5/tutorials/beginner-tutorial.zip) . Downloading the finished project helps you to see how the game has been created. Having it as an example  in case you get stuck or don't understand something, is a good way to  to check your progress.

#### Create a new project

Click "Create New Project" on the "Start" page.

Next, you have the option to create a new project using a template or create an "Empty game" project.
![](/gdevelop5/create-new-project-window.png)

For this tutorial, you need an empty game project but before selecting this option, you need to choose a folder where your game will be saved. On the bottom of the "Create a new game" page you will find the "Choose Folder" area. You may need to scroll down to see this option. Keep the default location or select the location where you'd like to save your game.

![](/gdevelop5/tutorials/select-project-folder.png)

To select a custom location, select/click the "Choose Folder" button. Browse the file system on your computer. Locate the folder that you want to use.
![](/gdevelop5/choose-folder-button.png)

Once you have a folder selected, select/click the blank "Empty Game" project option in the list.
![](/gdevelop5/empty-game-button.png)

#### Create a new scene

Creating a new scene is first on your list of things to do. Click/select the "Click to add a scene" button in the Project manager:
![](/gdevelop5/tutorials/add-scene-button.png)

Next, click on the NewScene you have just created. It will open the "Scene" editor.

#### Get the images and resources

Before going further, you will need some images for the game.
You can download them here : [Download images](http://www.compilgames.net/dl/BeginnerTutorial2Images.zip)

Once you have downloaded this file, extract its content into the folder where you created the project.

#### Create the player turret

The player will be controlling a turret to shoot the enemies.
In the Scene "Objects" editor choose "Add a new object".
![](/gdevelop5/tutorials/add_new_object.png)
A new window list of options will popup. Choose the type of the object that will be created.
![](/gdevelop5/objects/object-types.png)

First, create a sprite object. Select "Sprite" from the popup list.
Next, the object properties panel will be displayed. If you don't see the properties panel, right click on the NewObject in the Object editor and select "Edit object" from the popup list there.

Finally, we want to add an animation to the object. Click/select the "add animation" button in the properties window.
![](/gdevelop5/tutorials/add-animation.png)

You will now see the animation properties of the object.
![](/gdevelop5/objects/animation-properties.png)

You need to add the turret image as an animation.  Click the big plus symbol ![](/gdevelop5/tutorials/plusaddobject.png). Browse to the project folder. Find the image aaguntopdown.png.
The image will be displayed in the window.
![](/gdevelop5/tutorials/turret-animation-window.png)

Lastly, click "Apply" to save the changes.

Rename the object. Right click on the turret object in the Scene "Object" editor. Select "Rename" from the popup list that is displayed. Type the name "turret" for the new name. This allows us to later refer to this object using the name "turret".
![](/gdevelop5/tutorials/rename-turret.png)

#### Add turret to the scene

To add the "turret" to the scene, select/click the turret in the Scene "Object" editor then click in the "Scene" editor.
This action will create a "turret" in the scene. The "turret" can then be selected, moved around and rotated.
![](/gdevelop5/tutorials/turret-selected-inscene.png)

#### First events

We are now going to create the "Events" used to animate the entire game.
In the first event, the "turret" must be rotated toward the player's mouse.

Select the "Events" editor by clicking on the " NEWSCENE (EVENTS)" tab:
![](/gdevelop5/tutorials/scene-events-tab.png)

You will see a toolbar on the top of the "Events" editor screen. Select/click the "Add event" button on the toolbar to create a new event. If you forget how each tool on the toolbar is used, hover your mouse over the tool image to see a popup help description for the tool.
![](/gdevelop5/add-event-button.png)

The new "Event" is created, with an empty condition and an empty action. The "condition" is located on the left side of the screen.  The "action" is located on the right side of the screen. Put your cursor over the "action" on the right. Select/click "add action":
![](/gdevelop5/tutorials/add-action.png)

Now, you are going to write your first action. This action will turn the "turret" toward the mouse. After click/selecting the "Add Action", a new list panel will appear. Choose the action "Common action for all objects". A drop-down list of more options will appear. Select/click "Angle". Another drop-down list will be shown. Select/click "Rotate toward the position".
![](/gdevelop5/tutorials/rotate-toward-position-action.png)
When "Rotate toward the position" is selected, another list of choices will open on the right side of the selector panel. It displays the name of the action as well as the parameters for the action. Fill in the first parameter by selecting/clicking on "Object". "turret" will pop up from a list of the available objects. Select "turret" from the list.
![](/gdevelop5/tutorials/select-turret-object-parameter.png)
For the next parameters, enter `MouseX()` and `MouseY()` so that the object turns toward the mouse position.
When the game is launched, these two expressions will get the current X and Y position of the mouse.
For the "angular speed", enter 0. "Angular speed 0" means that immediate rotation of your object will occur. That is what we need to rotate the "turret". To control the speed of the rotation of an object, enter a smaller value for "angular speed". For example, to slow your "turret" object down, enter something like a value of 100.

At this point the parameters of this event will look like this:
![](/gdevelop5/tutorials/rotate-toward-pos-event-parameters.png)

We have been using expressions to get the X and Y positions of the mouse.
You can find more expressions in the "expression" editor by clicking on the blue icon next to the value fields:

![](/gdevelop5/tutorials/platform-game/expression-icon.png)

When you click the "expression" editor icon, you can search for all of the available expressions. The expressions are sorted into categories.

![](/gdevelop5/tutorials/platform-game/expression-editor.png)

To save the changes that you have made to the "expression" editor, select/click the "OK" button that is located on the bottom right corner of the panel.

Now you can run a preview by pressing the "preview" button on the toolbar located above the Scene.
![](/gdevelop5/preview-button.png)

The "turret" will now rotate toward the position of the mouse. If the rotation isn't working, look closely at the above steps again or refer to the finished tutorial.
![](/gdevelop5/tutorials/turret-rotate-toward-mouse.png)

#### Shoot bullets with the turret

We want the player to be able to shoot bullets at the enemies. To set this up,
you will need a new  "bullet" object.  In the Scene "Objects" list located on the right side of the GD interface, mouse click on the "turret" object. Choose  "add a new object" or, alternatively, mouse click the "add new object" button.
![](/gdevelop5/tutorials/turret-add-new-object.png)
Choose "Sprite" from the popup list panel. Now, add animation by selecting the add button. Choose the "Bullet.png" image. Rename the new object "bullet". If you need additional help adding a new object, refer to the "turret" object explanation above.

The next event needed will check to see if the left mouse button is clicked/pressed. If it is pressed/clicked, the action will create the bullets that will be fired.
To create the bullets, go to the "NEWSCENE (EVENTS)" tab. Add a new event. Again, if you need additional help, refer to the "turret" event above.
"Create a new object" will be the first action in the event. This action is available in
the "Common actions for all objects" "Objects" panel.
![](/gdevelop5/tutorials/create-object-action.png)

When “Create a new object” is selected, another list of choices will open on the right side of the selector panel. It displays the name of the action as well as the parameters for the action. Fill in the first parameter by selecting/clicking on “Object”.“bullet” will pop up from a list of the available objects. Select “bullet” from the list.

![](/gdevelop5/tutorials/create-object-action-parameters.png)

Since there is only one layer in the game, the layer parameter is not required.
Click on Ok to finalize the action.

Then add another action after this first action. Do _not_ create another event. Click "Add action" below the first action!

![](/gdevelop5/tutorials/add-second-action.png)

This time, choose the action called "Common action for all objects" "Movement", "Add a force ( Angle )".

![](/gdevelop5/tutorials/add-force-angle-action.png)

GDevelop provides a built-in forces system. This system allows you to easily move the game objects. In our case, when the bullet is fired, the action will be used to move the bullet toward the mouse.
As the first parameter(Object), enter "bullet" so that GDevelop will move the bullet just created in the previous action.

For the "Angle of movement", we'll put the same angle as the turret. Enter "turret.Angle()" in the 2nd parameter. For the 3rd parameter, enter "400". The bullet will move with a speed of 400 pixels per seconds. Finally, click on the "Permanent" option. This last parameter tells to the force to be constantly applied to the bullet. After the movement is started, this parameter keeps the bullet moving.

![](/gdevelop5/tutorials/add-force-angle-parameter-permanent.png)

Our two actions are launched when the player is firing. i.e: Pressing the left button of the mouse.
To create this event in the "Event" editor, we need to add a condition to the event, click/ select "Add condition".
![](/gdevelop5/tutorials/add-condition.png)

Choose the condition "Mouse and touch" "Mouse button pressed or touch held".
![](/gdevelop5/tutorials/mouse-button-pressed-condition.png)
On the right side panel popup, click the Button to test parameter. Select "Left" from the list
![](/gdevelop5/tutorials/mouse-button-pressed-parameter.png)
Finally, close the window by clicking the "OK" button.
The condition is now added to the event.

If you preview the game now, you'll see that we have two problems:

* The bullets are fired too fast.
* The bullets appear at the object's origin. This makes the bullets seem unrealistic.

To address the first issue of the bullets firing too fast, we are going to use a timer.  Add a second condition to the last event we've created. Choose the condition "Value of a scene timer" inside category "Timers and Time".

![](/gdevelop5/tutorials/timer-value-condition.png)

The panel appears on the right. The first parameter, "Object", indicates the name of the object. Leave it blank. The second parameter, "Timer's name", is the name of the timer. Enter “firerate”.  //Do not forget the quotes around the timer's name!// Enter 0.25 in the third parameter, "Time in seconds".
![](/gdevelop5/tutorials/timer-value-condition-parameters.png)

We aren't done yet! We want to shoot bullets every 0.25 seconds. To do that, we need to reset the timer to start from 0 after 0.25 seconds. So let's add an action: "Timers and time"  "Start (or reset) a scene timer". This action will be placed just below our "movement" action in the same event.
![](/gdevelop5/tutorials/reset-timer-action.png)
Enter “firerate” as the parameter which is the name of our timer ( again, be aware of the quotes! ).
![](/gdevelop5/tutorials/reset-timer-action-parameter.png)
This pair of conditions and actions will ensure that the actions used to fire the bullet are repeated when at least 0.25 seconds have elapsed since the last bullet was created.
![](/gdevelop5/tutorials/shoot-bullet-event1.png)

We must now set up the way that the bullets are fired from the canon of the turret.

In order to do that, we are going to add a custom point to our "turret" object. We then create the bullets in the position of that point.
Let's open the object properties by right-clicking the "turret" object on the right side of the Scene Interface screen. Select Edit object from the popup list.
This selection brings up the window where we add animations to our objects. We will see a button called "EDIT POINTS".
![](/gdevelop5/tutorials/edit-point-button.png)

After clicking the button, we can see that our object currently has 2 points by default, the "Origin" point, and the "Centre" Point.
![](/gdevelop5/tutorials/default-points.png)
We can not rename these points but we can change their default position. In this case, we will add one more point to the object.

Let's click the "add" button (plus symbol) to add a custom point to our "turret" object. We immediately see the new point added to the list. It can be identified by the name "Point" and position 0,0.
Let's rename this point to "Canon" and set the X position to be 110 and the Y position to be 35
![](/gdevelop5/tutorials/custom-point-name-position.png)

Now, when we preview the game, we will see our custom point located at the end of our canon
![](/gdevelop5/tutorials/custom-point-preview.png)
Close the window and apply the changes.

The only thing is left to do is to tell GDevelop to fire the bullets from the "Canon" point of the "turret" object. So in our "create bullet" action, we need to change turret.X() and turret.Y() expressions, to `turret.PointX("Canon")` and `turret.PointY("Canon")`. We can change them by clicking the expressions inside the editor.
![](/gdevelop5/tutorials/replace-expression-in-editor.png)
//Don't forget the capital C in Canon as the name of the points are case sensitive.//

If we run the preview now, our bullets should be fired from the 'Canon" of the "turret" but you may notice, at times, the bullet is a bit offset. This happens because the origin point of the bullet is at the top left corner. The same way we did with the Canon point for the turret, change the position of the Origin point of the bullet to be in the middle.
![](/gdevelop5/tutorials/bullet_origin_point.png)

#### Creating enemies attacking the turret

First, we must create the objects used for the enemies: Add an object to the object list ( Right-click on an existing object > Add an object. Choose a Sprite object as before. ). Name it "enemy".

Edit the object (right click in the list and select Edit object from the list) next add an animation to the object and two images: tank2fr1.png and tank2fr2.png.

![](/gdevelop5/tutorials/enemy-animation.png)

Then, change the time between the images to 0.05 and change the animation to Loop to make the animation repeat.

![](/gdevelop5/tutorials/enemy-animation-speed.png)

Click "Apply" when you are done.

#### Stop! Save time!

Before going any further, remember to save frequently: Click File and then Save to save your project.
![](/gdevelop5/tutorials/save-project.png)

#### Enemy AI

Let's go back to the game. We want the enemies to move toward the turret.
Go to the "Event" editor and Add a new event. We want to create an enemy every second. Add a condition, that can be found in category "Timers and time", called "Value of a scene timer". Enter 1 as the "Time in seconds" and "EnemyCreation" for the "Timer's name".
//Don't forget the quotes when you enter the name of the timer.//

The next step is to add an action to create an enemy object. Click on "Add an action". Search for "Common action for all objects", "Objects" and choose "Create an object". Select "enemy" in the first "Object to create" parameter.

For the second "X position" parameter, enter the expression `Random(800)`. This expression will return a random number between 0 and 800.  When each enemy is created, it will have a different screen position.

For the Y position, enter -50. This value will create the enemies outside of the screen area. Creating the enemies off screen keeps the game's player from feeling that an enemy tank appeared from nowhere.

Finally, let's add an action to reset the timer ( "Timers and time",  "Start (or reset) a scene timer"). Enter “EnemyCreation” as the name of the timer. Again, don't forget the quotes when you enter the name of the timer.

At this point, our event will look like this:
![](/gdevelop5/tutorials/create-enemy-event.png)

If we run a preview now, we won't notice anything. Since the enemies are created off the screen, they can't be seen.
In order to see the enemy, we need to move the enemies toward the player.

To do this, add another event. This event has no condition. Choose "Add action". Select "Common action for all objects", "Movement" and choose "Add a force to move toward an object".
![](/gdevelop5/tutorials/move-object-toward-other-event.png)

On the right side panel of the "Add a force to move toward an object", select "enemy" for the  first parameter. Select "turret" for the second parameter. Enter 150 pixels per second for speed. Since the force will be applied at every single frame of the game (as there are no conditions), choose "Instant" for this force.

![](/gdevelop5/tutorials/enemy-turret-move-object-toward-another-instant.png)

Now, if we run a preview, we will see that our enemies moving toward the turret. However, you might notice that the enemies don't actually rotate toward the turret. Let's do something about that.

Add a second action after the movement: "Common action for all objects", "Angle", "Rotate toward position". For the first parameter on the right of the panel, select "enemy". We want to rotate the enemy. For the X and Y position, we are going to use an expression to get the Centre point of the turret and make the enemies rotate toward that point with an angular speed of 0. An angular speed of 0  causes immediate object rotation.

![](/gdevelop5/tutorials/rotate-object-toward-position.png)

At this point, our enemy event will look like this:

![](/gdevelop5/tutorials/create-rotate-move-enemies-event.png)

If we run the preview now, our enemies will move and rotate toward the turret.

![](/gdevelop5/tutorials/turret-screenshot-enemies-moving.png)

#### Adding explosions

It's time to destroy the tanks! First, when a bullet collides with a tank, we need an explosion at the position of the tank.
Add a new sprite object, name it "explosion", and add all the images to the animation beginning with Explosion_
![](/gdevelop5/tutorials/select-all-explosion-images.png)

After all the images are added to the animation, set the time between the images to 0.01 seconds.
![](/gdevelop5/tutorials/explosion-animation-speed.png)

Save the animation by clicking/selecting "Apply".

Next, we want to create the explosion when the bullet is in a collision with the enemy.
Add a new blank condition: "Common conditions for all objects", "Collision", Collision
![](/gdevelop5/tutorials/collision-check-event.png)
On the right sided panel, select "bullet" for the first parameter. For the second parameter, select "enemy".
![](/gdevelop5/tutorials/collision-between-object-condition-parameters.png)

Add an action to create the explosion object in the same way that we created the bullets and the enemies. For X and Y position, use the expression enemy.X() and enemy.Y(). This expression is going to get the X and Y position of the enemy object that is in collision with the bullet.
![](/gdevelop5/tutorials/create-explosion-event-parameters.png)

Finally, add the action after creating the explosion Common actions for all objects > Object > Delete an object and on the right side for parameter select the object enemy as we want to delete the enemy.
Add the same action again, to also delete the bullet right after the enemy is deleted.
At this point, our event should look like this
![](/gdevelop5/tutorials/enemy-moving-rotating-exploding.png)

If you run a preview now, you will notice a couple of problems:

* First, the explosion objects are not created exactly in the position of the enemy.
* Second, the created explosion object remains in the scene.
To solve the first problem of the "explosion" objects remaining in the scene, we need to delete the explosion object after the animations are finished.
Add a new empty event and the condition "Sprite", "Animations and Images",  "Animation finished".
![](/gdevelop5/tutorials/animation-finished-event.png)
For the parameter on the right popup panel, select the "explosion" object. When the "explosion" object is finished, we want to delete the animation for the explosion.
![](/gdevelop5/tutorials/check-animation-finished-event-parameter.png)
To delete the animation "explosion" object, add the action, "delete the explosion object".

To solve the second problem, we first need to understand its cause.
When we created the explosion object, we used the expressions `enemy.X()` and `enemy.Y()`. We created the "explosion" objects at the "Origin" point of the "enemy" object. The "Origin" point is, by default, located at the top left corner of the "enemy" (0). We are also creating the explosions from their "Origin" point, which is the top left corner of the "explosion" object(0).

To solve this issue, we need to change the position of the "Origin" point of the explosion. The "Origin" point needs to be placed in the center of the object.
You need to edit the "explosion" object by right-clicking the object and selecting "Edit object" from the list. In the next window, select "Edit Points".

Now, change the X and Y position of the "Origin" point to  120.  This sets the point to the middle of the "explosion" image.
![](/gdevelop5/tutorials/change-origin-point-position.png)

Finally, instead of creating the "explosion" object at the "Origin" point of the "enemy", it is necessary to create the object at the Centre Point. Change the expression in the create explosion action from `enemy.X()` to `enemy.PointX("Centre")` and from `enemy.Y()` to `enemy.PointY("Centre")`
![](/gdevelop5/tutorials/create-explosion-new-expression.png)

If we run a preview now, our enemies will explode realistically from the center of the object.
![](/gdevelop5/tutorials/turret-screenshot-enemies-are-exploding.png)

#### Adding more explosions and a Game Over

Until now, the player could not die. When an enemy tank is hitting the player's turret, we want the turret to be destroyed.
Add a new event. Follow the same procedure that you followed to create an event to destroy the enemies.

* Add a condition to test for a collision between a tank and the turret.
* Create an explosion at the turret position.
* Add an action to destroy the turret.
![](/gdevelop5/tutorials/delete-turret-on-collision-event.png)

Additionally, it would be interesting to display a “Game Over” text when the turret is destroyed:
Add a new object using the Scene Objects list. This time, choose a "Text" object. Name it "GameOver".
![](/gdevelop5/tutorials/select-text-object-from-list.png)

Edit the "GameOver" object by right-clicking on the object. Select "Edit object" from the popup list.
Now, change the text to "Game Over",  the text color to red, and the text size to 40.
![](/gdevelop5/tutorials/edit-text-object.png)
We can also set a custom font by simply entering the path of the font. In this case, our font is located in the project folder. We only need to enter the name of the font file:
![](/gdevelop5/tutorials/custom-text-font.png)

Finally, add the "Game Over" text object to the scene.

The next step is to hide the text object. Then, if there is no turret in the scene, (meaning the turret is destroyed) we will display it.
Add a new blank event and add the condition "Scene", "At the beginning of the scene".
![](/gdevelop5/tutorials/at-the-beginning-of-the-scene-condition.png)

This condition has no parameters. The only thing it does is execute the action once at the beginning of the scene.
Next, add the action to the "At the beginning of the scene" event. Use: "Common Actions for all objects", "Visibility", "Hide".
![](/gdevelop5/tutorials/hide-object-event.png)
For parameter select the GameOver object as we want to hide this object
![](/gdevelop5/tutorials/hide-object-event-parameter.png)

If there is no turret in the scene, we want to show the
"GameOver" text object.
Add a new empty event. Add the condition "Common conditions for all objects", "Objects", "Objects count".
![](/gdevelop5/tutorials/objects-count-condition.png)

For the first parameter on the right side select the turret object, for the sign of test select the equal sign and for the value of test enter 0 as we want to test if the number of the turret in the scene is 0.
![](/gdevelop5/tutorials/object-count-condition-parameters.png)

And what we want to do is show the text GameOver if there is no turret in the scene, so add the action Common action for all objects > Visibility > Show and for parameter we want to select the GameOver object.
![](/gdevelop5/tutorials/destroy-turret-event.png)

Finally, an interesting effect is to stop the game and display Game Over with a little delay.
Add a second condition "Timers and time", Value of a scene timer". For time parameter enter 0.1 and for the name parameter enter "GameOver".
Add a second action: "Timers and time", "Change time scale". Enter 0 as the parameter to stop the game and display the Game Over text after 0.1 seconds.

This is what all the events should look like at this point.
![](/gdevelop5/tutorials/all-events.png)
You can preview the game and should see that once the turret is destroyed, with a little delay the Game Over text is displayed and the game is stopped.
![](/gdevelop5/tutorials/gameover-screenshot.png)

#### Optimizing the game

When a bullet is outside of the screen area, we no longer need the bullet. Even off screen, the bullets still have movement. The collisions between the bullet and the tank are also being checked. Every device has limited resources in memory and processing power. We are wasting valuable resources by continuing to check the conditions and actions of the objects when they are off screen. Our game could slow down, crash, and/or become unplayable when it reaches the limit of the device memory that we are playing the game on.
You want your game to be playable on as many devices as possible so you always need to optimize your game. One way to do that is to delete objects that are no longer required in the game. This way, you limit the amount of memory and processing power used by the game.

We could add an event to destroy the bullets when they are too far from the turret, that is easy, but we can also use an object "Behavior".  A behavior in GDevelop adds a certain feature to an object. In this case, we are going to add the "Destroy outside screen" behavior to the bullets. They will then get destroyed when they are outside of the game screen.

In the Scene "Objects" list, right click on the "bullet" object. From the popup selector, choose "Edit object".
The "Properties Panel" will open. Select/click the "Behaviors" tab. The "Behaviors" tab displays all the behaviors that we have added to our object. It is empty now.
![](/gdevelop5/behaviors-tab.png)

Click on the "Click to add  a behavior to the object" button ![](/gdevelop5/objects/add-symbol.png)
![](/gdevelop5/add-behavior-button.png)

Next select from the list the Destroy outside screen behavior
![](/gdevelop5/behaviors/destroy-outside-screen-behavior-inlist.png)

Next, you are going to see the behavior is added to the list. Normally if the behavior has any parameters, it is also displayed here so you can change it. But this behavior has no parameters as the only thing it does is destroy the object when it outside the screen. Click Apply and we are done.

If you run the preview now, probably you won't notice any difference as the game is very simple and you most likely using a device with at least 2GB of RAM and a dual-core CPU. So there is plenty of resources for our simple game but in case we would create hundreds and thousands of bullets that you are free to try you may notice a little slow down after a while without destroying them.

#### Add a background

 One last thing is to add a background.  This will give the game a more finished look.

Add a new Sprite object. Name it "background". Add the "background.jpg" image to the object. Next, you can add the object to the scene as usual. Make sure it fills the entire scene. To make it easier, you can enable the grid using the button on the top and it should help with positioning the object.
![](/gdevelop5/toggle-grid-button.png)
Notice that the background object covers all of the other objects. To solve this problem, we need to change the Z-order of the object. While the background object is selected, on the left of the Scene Editor screen, you will see a "Properties" list. If you don't see the "Properties" list, you can open it using the "Properties" button on the toolbar that is located at the top of the GD interface.
![](/gdevelop5/object-properties-button.png)
We can change all kinds of properties using the Property Editor.  The position, angle, and size of the object can be changed. In this case, we want to change the Z-order.
![](/gdevelop5/objects/object-zorder-properties.png)
Change the value of the Z-order to a low number. For the background, we will use a negative number  - 1.
The reason for the negative value is that when we are creating the bullets, enemies, and explosions we are creating them at Z-order 0 by default. We need to position the background below 0 otherwise we won't see anything but the turret in our game. Another way to fix it is to tell GDevelop to position the tanks and explosions and bullets on a higher Z-order. We can position the background at 0 but it is something that you the developer need to decide for your self. Every problem can have a number of different solutions.

You are done! The game is complete and ready to be shared.

#### Add comments

So, our game is done. It is playable. What if you want to share the source with someone else? Let's say you are working in a team. Someone on the team would like to make modifications to the game. How does that person know where to look for the events of the enemies, the bullets, or the turret? It may sound silly to you. Most of the events in GDevelop are self-explanatory. Our game is simple enough to see what is happening. However, imagine a situation where you have a game made out of hundreds or thousands of events. This is where comments come in handy. We can leave reminders in the game for others and also for ourselves. Trust me, even though you are the one who made the game, in a big complex game, even you won't remember where to find different things. This is especially true months later. _Always use comments regardless of how of the size of the project._ It is just good programming practice.

To add comments to your game, you can simply click the "add comment" button on the toolbar located at the top of the "Events" screen.
![](/gdevelop5/add-comment-button.png)
You will see a yellow box in the "Events" editor. When you click/select the box you can start writing a comment.
![](/gdevelop5/tutorials/comment.png)

You can change the position of each event and comment by moving the mouse over the blue edge on the left and dragging it up and down.
Your first comments will look something like this:
![](/gdevelop5/tutorials/all-events-with-comments.png)

#### Let's discover GDevelop by yourself

You can browse the other [tutorials](/gdevelop5/tutorials) and read the [getting started](/gdevelop5/getting_started) page.

There are also lots of examples and templates bundled with GDevelop! You can find more by visiting: [gametemplates.itch.io](https://gametemplates.itch.io/gdevelop-examples)

You can also ask questions on the [official forum](http://forum.compilgames.net/)
