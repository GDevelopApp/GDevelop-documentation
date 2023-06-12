---
title: Road Rider - Endless car game tutorial
---
# Road Rider - Endless car game tutorial

This tutorial will help you get more familiar with GDevelop. Our primary focus in this tutorial will be to make an endless car game. The player should dodge the cars on the road. The game will also have a score such that it is automatically updated as we get past the cars.

![](/gdevelop5/tutorials/peek_2019-05-30_19-46.gif)

## Download GDevelop

If you do not have GDevelop yet, you can download it from [GDevelop's official website.](https://gdevelop.io/download/) It is available for Windows, macOS as well as Linux.

After downloading GDevelop you can proceed with the installation/extraction followed by the launching of GDevelop.

> You need to have assets that will be used to create objects for this game. You can [download them here.](/gdevelop5/tutorials/road-rider-resources.zip) Download and extract the .zip file to the directory that you have chosen as the location of our game.

## Create a new project

Click on `CREATE A NEW PROJECT` on the Start Page.

![](/gdevelop5/linux-start-page.png)

Click on `Empty game` (you might have to scroll down to find this option) in the dialog box that appears and choose the location where you want to save your project.

![](/gdevelop5/tutorials/annotation_2019-07-04_220443.png)

## Create a new scene

`Scene` is the area where we'll work for most of our time while creating the game. A scene is basically a level in your game (or a menu, inventory, etc...). It contains objects that can be put on the screen.

As soon as we click on Empty game we see a panel on the left side of our screen. This is the `Project Manager`. Click on the `Scenes` option in the Project Manager.

Create a new scene using the `Click to add a scene` option from the drop-down that appears. Our new scene has been created.  Go to your new scene by clicking on `NewScene`.

![](/gdevelop5/tutorials/add-scene-button2.png)

## Create a new object

Choose the `Click to add an object` option from the `Objects` panel on the right side.

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-24_at_23.32.40.png)

Choose `Sprite` from the `Add a new object` pop-up. This will be followed by the appearance of a dialog box.

![](/gdevelop5/tutorials/annotation_2019-07-05_171958.png)

The object is called NewObject by default - you can see the name at the top of the dialog. It's a good idea to give a descriptive name to each object so that you can understand what they are when dealing with them in events. In our case, use the field to set the name to _Car_.

Let's add an animation to the object. Animations are containing images that are displayed on screen for Sprite objects.

To add an animation to the object, click on the **+** symbol beside `Click to add an animation`.

![](/gdevelop5/tutorials/add-animation.png)

Add the image named 'car.png' as animation and click on the `APPLY` option.

![](/gdevelop5/screenshot_from_2019-05-20_13-54-57.png)

Similarly, add a new Sprite object _Highway_ which consists of the image 'highway.png' as the animation.

![](/gdevelop5/tutorials/screenshot_from_2019-05-22_00-58-55.png)

Our next step will be to add the 4 cars as different Sprite objects. These will be the objects that we need to dodge. We can name them _Blue_, _Gray_, _Green_ and _Pink_ which would have the image 'blue-car.png', 'gray-car.png', 'green-car.png' and 'pink-car.png' for their respective animations. From now on, we will address these cars as 'Traffic cars'.

![](/gdevelop5/tutorials/screenshot_from_2019-05-30_20-41-27.png)

![](/gdevelop5/tutorials/screenshot_from_2019-05-30_20-42-03.png)

![](/gdevelop5/tutorials/screenshot_from_2019-05-30_20-42-30.png)

![](/gdevelop5/tutorials/screenshot_from_2019-05-30_20-42-54.png)

Create a new Sprite object _Tree_ which has 'tree.png' for its animation. This object will be used for the trees that will be created on either side of the road as we're progressing in the game.

![](/gdevelop5/tutorials/screenshot_from_2019-05-22_00-57-11.png)

Create a new Sprite object _Explosion_ and select all the images from 'Explosion1.png' to 'Explosion8.png'.

![](/gdevelop5/screenshot_from_2019-05-20_14-14-45.png)

Your scene by the end of this step should contain 8 objects.

![](/gdevelop5/tutorials/screenshot_from_2019-05-30_21-22-38.png)

## Adding top-down movement to the car

Adding a top-down movement behavior to the car will allow us to set its maximum speed as well as the acceleration and deceleration of the car. This will allow the car to slowly gain the speed rather than starting with the maximum speed. For this, we will have to open the `Object Editor`.

To do this, you can either double-click on the _Car_ object from the object side panel or click on the three-dot-menu beside the object and click on edit object.

![](/gdevelop5/tutorials/annotation_2019-07-06_124410.png)

Click on the `BEHAVIORS` tab at the top of the panel and click on the **+** button beside `Click to add a behavior to the object`.

![](/gdevelop5/tutorials/screenshot_from_2019-05-22_19-44-47.png)

Choose `Top-down movement` in the `Add a new behavior to the object` pop-up.

![](/gdevelop5/tutorials/screenshot_from_2019-05-22_19-42-06.png)

This opens a wide variety of options to alter. You can see the default values for the related to the behavior. Set the deceleration to 400 and untick the boxes having the options `Rotate object` and `Default controls` and click `APPLY`. Rest of the default values are fine for our game.

![](/gdevelop5/tutorials/screenshot_from_2019-05-22_19-37-09.png)

## Creating a new event

An event is a pair of conditions and actions. When a given set of conditions is true, the corresponding action or set of actions is performed.

While making this game we will encounter a few events with no conditions and one or more actions assigned to them. In such a case, the action is performed on every frame created.

To add a new event, open the `NEWSCENE (EVENTS)` tab from the top

![](/gdevelop5/tutorials/scene-events-tab.png)

From the events editor toolbar choose the option that says `Add a new empty event`.

![](/gdevelop5/add-event-button.png)

This will create a new event with an empty condition and an empty action.

![](/gdevelop5/screenshot_from_2019-05-20_14-49-49.png)

## Create instances of Car and Highway

To create an instance of the _Car_ object we can drag and drop the object from the Objects panel to the scene and give it the coordinates of our choice.

![](/gdevelop5/tutorials/peek_2019-05-26_11-58.gif)

If you need to alter the coordinates of the object after getting it on the scene, you can do so by the drag and drop method, but by dragging the object on the scene.

Another method to move the object is by changing the X and Y-coordinates in the Object properties panel on the left side.

![](/gdevelop5/tutorials/screenshot_from_2019-05-22_01-25-21-1.png)

You can choose the values of your choice but if you want results similar to that of the tutorial, you are expected to have the same values.

Similarly, to create an instance of _Highway_ you can drag and drop the object to the scene and set its X and Y-coordinates.

![](/gdevelop5/tutorials/screenshot_from_2019-05-22_01-55-46.png)

A user can use the preview feature provided by GDevelop. Using this feature, you can see how the game behaves in the real world. You can preview your project by clicking on `Launch a preview of the scene` icon above the scene.

![](/gdevelop5/tutorials/screenshot_from_2019-05-22_01-58-08.png)

You should see something similar to the image shown below.

![](/gdevelop5/tutorials/screenshot_from_2019-05-31_17-24-28.png)

We see a few problems:

* The _Car_ is not fully visible.
* The part of the screen below the _Highway_ is empty.
* The _Highway_ is too far away from the center of the screen.

### Making the car visible

To make the car visible, we need to know the reason for it being hidden under the _Highway_. The answer is, `Z Order`.

!!! note

        Z Order of an object is the property which decides whether the object should be displayed on the front or the back. An object with a certain Z Order assigned to it will always be shown in front of the objects with lower Z Order value and behind the objects with higher Z Order value.

In our case, we can assign a Z Order of 1 to the _Highway_ and 2 to the _Car_.

![](/gdevelop5/tutorials/screenshot_from_2019-05-22_02-20-14.png)

![](/gdevelop5/tutorials/screenshot_from_2019-05-22_02-21-37.png)

### Creating the bottom part of the Highway

To create the bottom part of the _Highway_, we can elongate the height of our object _Highway_.

To do this, you can click and drag the white box at the corner of the _Highway_.

![](/gdevelop5/tutorials/peek_2019-05-26_12-33.gif)

Another way to do this is to tick the box beside `Custom size` option in the Properties panel and enter the height and width of your choice.

![](/gdevelop5/tutorials/screenshot_from_2019-05-22_02-41-35.png)

### Getting our game to the center of the window

To get our game to the center of the preview window, we will create our first event.

But before that, we need to determine the X position and Y position of the camera.

!!! note

    The coordinates of an object depict the location of the top-left corner of our object rather than the center of the object and coordinates of the center of the camera is the center of the displayed window.

For the X position, the camera has to be at the center of the window/highway. The width of the _Highway_ is 535 pixels. So the center of the _Highway_ will lie at 267.5 pixels.

Similarly, to set the Y position of the camera, we can keep it a little above the _Car_ so that the player can get a better view of the cars approaching.  set it at 350 pixels.

First, [create a new empty event using the explanation above.](http://wiki.compilgames.net/doku.php/gdevelop5/tutorials/rpts?#creating_a_new_event)

We need to make an event such that the game lies in the center of the screen. Therefore, setting the X and Y-coordinates will be our action.

This action needs to be true for all frames, i.e. for all conditions. And so that the action is true for all conditions, we enter no condition.

To add an action, click on the `Add action` option.

![](/gdevelop5/tutorials/screenshot_from_2019-05-22_12-01-43.png)

To choose an action, you can either choose it from the various drop-down menus available or you can use the search bar at the top.

For example, to change the position of the camera, you can go to Layers and Cameras followed by `Camera center X position`. The right part of the window will now display configurable parameters.

Because we want to set the X position equal - neither less nor more - to 267.5, choose the **= (set to)** option in `Modification's sign`. In the `Value` field, you can enter the desired X coordinate of the camera.

![](/gdevelop5/tutorials/screenshot_from_2019-05-22_12-22-36.png)

Else, you can search for the action in the top `Search` bar.

![](/gdevelop5/tutorials/screenshot_from_2019-05-22_12-33-40.png)

Click `OK`.

You can now see the added action in the Events Editor.

To set the Y position of the camera center, click on `Add action` in the same event.

![](/gdevelop5/tutorials/screenshot_from_2019-05-22_12-29-55.png)

You can now follow a similar procedure for Y position as you did for X position but make sure that this time you choose the `Camera center Y position` option and enter the Y coordinate.

![](/gdevelop5/tutorials/screenshot_from_2019-05-22_14-54-19.png)

To make sure that all your progress has been saved, click on `Save` in the `File` menu or press Ctrl + S.

## Moving the car

To move the _Car_, we need to create an event such that the car translates as well as rotates to some degree when left or right key is pressed.

As we can deduce from the above statement, the condition of the events will be left key press and right key press.

!!! warning

    Remember that each key press (left and right) should have different events because we need to have different motions for each of them.

We will start with the event that has the condition of left key press.

![](/gdevelop5/tutorials/screenshot_from_2019-05-22_15-09-13.png)

For the action, when the left key is pressed, the _Car_ should have a movement on the left side. This can be easily done using an action `Simulate left key press` that would simulate the left side movement for the object selected (_Car_).

But make sure to use the action with the same behavior as your object (top-down movement). So, we need to choose it from the `Top-down movement` drop-down.

![](/gdevelop5/tutorials/screenshot_from_2019-05-22_15-18-20.png)

Now we need to give our _Car_ the desired rotation for a better visual experience. If we just give rotation to the object it will rotate up to 180 degrees.

To avoid such a result, we need to set a final angle too. We will assume it to be 30 degrees on both sides, i.e. -30 degrees for the left key press and 30 degrees for the right key press.

But before we move ahead, we also need to assign the `Angular speed` for the rotation. We will be using a value of 60 degrees/second for the same.

Remember that the angular speed will be the same for both the key presses. It cannot be negative because it is the "Angular speed", and speed cannot be negative.

![](/gdevelop5/tutorials/screenshot_from_2019-05-22_16-18-34.png)

We can repeat a similar event for right key press.

![](/gdevelop5/tutorials/screenshot_from_2019-05-22_16-42-05.png)
![](/gdevelop5/tutorials/screenshot_from_2019-05-22_16-42-37.png)
![](/gdevelop5/tutorials/screenshot_from_2019-05-22_16-52-25.png)

If you preview your project, you should be able to control your _Car_ using the left and right arrow keys.

But we still encounter one problem, the car does not return to its original state when we leave the keys. Instead, it stays oriented at an angle. Let's solve this problem now.

### Returning the car to its original orientation

We need to return the car to an angle of 0 degrees when none of the arrow keys are pressed. In other words, we need to return the car to an angle of 0 degrees when the conditions, right key press and left key press are inverted.

To achieve this, we add a new event and try to add the above 2 conditions, i.e. right key press inverted and left key press inverted. We add a condition `Left key is pressed` and turn on the switch below that says `Invert conditions`.

![](/gdevelop5/tutorials/screenshot_from_2019-05-22_17-14-21.png)

In the same event, we add a similar inverted condition for right key press.

![](/gdevelop5/tutorials/screenshot_from_2019-05-22_17-19-07.png)

For the action, we will make an action for rotating it towards 0 degrees with an angular velocity of choice similar to what we did for the non-inverted conditions of key press.

!!! note

    Make sure to include both the conditions in the SAME EVENT because we want the vehicle to return to 0 degrees only when neither left nor right arrow key is pressed.

![](/gdevelop5/tutorials/screenshot_from_2019-05-22_17-46-07.png)

Now, the car moves and rotates to an extent when an arrow key is pressed and rotates back to the original angle when the keys are released.

## Adding traffic cars to be dodged to the scene

Now, we need to begin creating traffic cars which should be dodged by the _Car_. To maintain uniformity and simplicity in the game, we will create the objects at a fixed Y position and a random X position within a fixed time interval such that all the traffic cars created lie between the yellow lines of the _Highway_.

For a fixed time interval, we can use the `Timer` feature that GDevelop provides. To set a timer, we will create an event with the condition `Value of a scene timer`. Now, you need to fill the desired time interval between the creation of two consecutive instances of traffic cars on each side in the `Time in seconds` field.

After entering the time you need to enter the name of the timer. It can be any name of your choice but remember to fill it within quotes.

![](/gdevelop5/tutorials/screenshot_from_2019-05-23_14-34-32.png)

For the first action, we can make use of a `Scene Variable`. A variable allows you to store number or text in the computer memory and a scene variable allows you to store a number or text only when a particular scene is active. You can [read more about variables here.](/gdevelop5/all-features/variables)

To create a new variable, go to the Scene Editor, right-click on the background and click on `Scene properties`. From the pop-up that appears, click on the `EDIT SCENE VARIABLES` button.

![](/gdevelop5/tutorials/screenshot_from_2019-06-03_00-53-39.png)

Now click on the **+** button on the bottom-right of the new dialog, enter a name for your variable and click `APPLY`.

![](/gdevelop5/tutorials/screenshot_from_2019-06-03_01-03-11.png)

We will name our scene variable 'CarLeft'. To assign a value to your scene variable, use the action `Value of a scene variable`. Enter the name of the variable you created in the `Variable` field.

To create the cars at random, we can assign a value using the expression "RandomInRange". `RandomInRange(min, max)` is used to return a random integer between the minimum and maximum specified in the expression.

We'll use the expression `RandomInRange(1, 2)` such that whenever the expression returns 1, we will create a blue car in the first (leftmost) lane and whenever it returns 2, we will create a gray car in the second lane. Therefore, set the `Modification's sign` to **= (set to)** and the value to "RandomInRange(1, 2)".

![](/gdevelop5/tutorials/screenshot_from_2019-06-03_01-14-42.png)

You can add a similar action for a variable _CarRight_ which can be used to create traffic cars on the right side of the highway.

![](/gdevelop5/tutorials/screenshot_from_2019-06-03_03-14-25.png)

Before adding events to check the value of our scene variable _Car1_, we will add one more action in the same event which will set the value of our timer to 0. To do this, we will use the `Start (or reset) a timer` action.

![](/gdevelop5/tutorials/screenshot_from_2019-06-05_14-25-13.png)

This is what our Events Editor should look like:

![](/gdevelop5/tutorials/screenshot_from_2019-06-03_01-24-49.png)

To check the value of _Car1_ and to create the corresponding traffic cars at the same moment as the _CarTimer_ is reset, we will add a sub-event for each condition. A sub-event is performed only if the parent event's condition is true. You can [read more about events here.](/gdevelop5/events)

You can create a sub-event by clicking on the `Create a sub-event to the selected event` button at the top.

![](/gdevelop5/tutorials/platform-game/screen_shot_2017-09-26_at_22.05.49.png)

This will create a sub-event for the selected event.

![](/gdevelop5/tutorials/screenshot_from_2019-06-03_22-09-38.png)

In the condition of the sub-event, we will check if the value of _CarLeft_ is equal to 1. To do this, we will add the `Value of a scene variable` condition. Enter the variable name _CarLeft_ in the `Variable` field, set the `Sign of the test` to **= (equal to)** and fill '1' in the `Value to compare` field.

![](/gdevelop5/tutorials/screenshot_from_2019-06-03_01-41-24.png)

For the action, you can create the object _Blue_ at the X coordinate of the first lane (70) and Y coordinate such that the object is created well above the window so that by the time it reaches the window with an acceleration of 1000 it reaches its constant maximum speed else the user might see the car accelerating in the window.

![](/gdevelop5/tutorials/screenshot_from_2019-06-03_02-42-00.png)

You can add a similar sub-event for _Gray_ with the condition checking if the value of _Car1_ is 2.

![](/gdevelop5/tutorials/screenshot_from_2019-06-03_02-46-17.png)

If the condition is true, we will add an action to create _Gray_ at the X position of the second lane (175) and Y coordinate -500.

![](/gdevelop5/tutorials/screenshot_from_2019-06-03_02-50-59.png)

Similar to what we did for variable _CarLeft_, we will now check the value of _CarRight_ and create _Green_ at (280, -500) if the value of _CarRight_ is 1. If the value is 2, we will create _Pink_ at the position (385, -500).

Here is the resulting events sheet so far. If you are on the same page as the tutorial, you can save your game and proceed.

![](/gdevelop5/tutorials/screenshot_from_2019-06-03_02-59-41.png)

## Adding surrounding trees to the game

After adding the traffic cars to be dodged, we will now add the surrounding trees which will simulate a moving background. We will use the object _Tree_ for this purpose.

To create object _Tree_ we use another timer _TreeTimer_, similar to how we used _TrafficTimer_. We will use these trees for moving background simulation by moving them in the backwards direction on both sides of the road.

![](/gdevelop5/screenshot_from_2019-06-05_16-15-04.png)

We will set their Y coordinates such that they are created above the screen and for better viewing experience, you can create them at different Y positions so that they are not perfectly aligned.

We will set the X coordinates for both trees on both the sides such that the trees are right beside the _Highway_. The dimensions of the tree are 150×150 pixels.

For the left side of the _Highway_ we will set the X position to -150 pixels and the Y position to -400 pixels.

![](/gdevelop5/screenshot_from_2019-06-05_17-01-40.png)

For the right side, the X position will be set to 535 pixels and Y position to -500 pixels.

![](/gdevelop5/screenshot_from_2019-06-05_17-05-13.png)

We need to add one more action to reset the _TreeTimer_ to 0 when it is greater than 1 second.

![](/gdevelop5/tutorials/screenshot_from_2019-06-05_16-36-47.png)

## Moving the trees

In the game, we need to move the trees such that they never stop, i.e. without any condition. So we add an event and add action to that event without any conditions.

Our trees should move in the direction opposite to that of the _Car_ so that we can simulate a moving background. To do this, the event we add should add a downward force to the object _Tree_.

Add the action `Add a force` to the _Tree_. The movement of the car should be in the vertical direction only. There should not be a horizontal component of the force applied to it. So the speed on the X axis should be set to 0 and the speed on the Y axis will be set to 300 pixels/second.

![](/gdevelop5/tutorials/screenshot_from_2019-05-23_16-55-28.png)

## Moving the traffic cars

To move the traffic cars, we can add events with no conditions and add a vertical force. But if we try to do it in a way similar to what we did for _Tree_, we will have to add these events for each and every car individually. To simplify this, we can use the `Object Groups` feature provided by GDevelop.

An object group is a collection of objects. You can classify similar types of objects in an object group. You can then use the conditions and actions on a group object rather than repeating it for each and every object separately.

_Blue_ and _Gray_ that should move on the left side of the highway will have the same motion for each object created. Similarly, _Green_ and _Pink_ should also have the same motion. So we can classify the 4 traffic cars to 2 object groups.

To open the `Groups Editor`, click on the `Open the objects groups editor` icon in the toolbar.

![](/gdevelop5/objects/groups-button.png)

This will open the object groups list. All the object groups in the scene will be visible on the list. To add a new object group to the list, click on the **+** sign beside `Click to add a new group`. This will add a new group to the list.

![](/gdevelop5/objects/group-group.png)

To rename the group name, click on the three-dot-menu or right click on the object group name and choose "Rename". We will name the group _TrafficLeft_. Now add another group and rename it to _TrafficRight_.

![](/gdevelop5/tutorials/screenshot_from_2019-06-06_00-17-54.png)

To add objects to _TrafficLeft_, click on the group name. A new dialog will appear.

![](/gdevelop5/tutorials/screenshot_from_2019-06-06_00-29-42.png)

Click on the `Choose an object to add to the group` field and choose the object _Blue_ followed by _Gray_ and click APPLY. This object group represents the cars on the left side of the highway.

![](/gdevelop5/tutorials/screenshot_from_2019-06-08_20-24-37.png)

Similarly, add _Green_ and _Pink_ to the group _TrafficRight_.

![](/gdevelop5/tutorials/screenshot_from_2019-06-08_20-25-43.png)

To move the cars we will now add an event with no conditions. We will now add a downward acting force to _TrafficLeft_ and _TrafficRight_.

Objects in _TrafficLeft_ are cars that move in the same direction as _Car_. So these cars should move at a pace slower than _Tree_ so it looks like the cars are moving faster than the background but slower than _Car_. We will apply a force of 100 pixels/second in the Y direction for _TrafficLeft_. The X component should be 0.

![](/gdevelop5/tutorials/screenshot_from_2019-06-06_00-37-29.png)

On the other hand, objects in _TrafficRight_ move in the direction opposite to that of _Car_. So these cars should move faster than _Tree_ so that they look like moving in the backward direction. We will apply a force of 500 pixels/second in the Y direction for _TrafficRight_.

![](/gdevelop5/tutorials/screenshot_from_2019-06-08_19-56-14.png)

On starting a preview of the project, you might not be able to see the traffic cars yet. You can solve this problem by setting a Z order for the objects in the same event. To use the action for all the objects at once, create a new object group _Traffic_. Add all the objects to the group.

![](/gdevelop5/tutorials/screenshot_from_2019-06-08_20-29-50.png)

!!! note

    To see the traffic cars, you should set a Z order higher than the object covering it, i.e. _Highway_.

Set the Z order of _Traffic_ higher than the Z order for _Highway_.

![](/gdevelop5/screenshot_from_2019-06-06_00-44-32.png)

You may now check the events we have created so far and then save your game.

![](/gdevelop5/tutorials/screenshot_from_2019-06-06_00-52-22.png)

Before moving on to the event for a collision between _Car_ and _Traffic_, we notice that the car's motion is not limited to the road.

## Limiting the car's motion between the yellow lines

To limit the car's motion between the yellow lines, we need to add a new event to check the X position of the _Car_.

We will add two different events for each side because the force applied should be positive when _Car_ is on the left side and negative when _Car_ is on the right side.

The distance of the yellow lines from both ends is 60 px while the width of the _Car_ is 80 px, so its motion has to be limited between 60 px and (535 - 60 - 80), i.e. 395 px.

The force applied to the car should be greater than or equal to the maximum speed of the _Car_, set in its behavior (200, in our case).

Our first event will include a condition that checks if the X position of the _Car_ is less than 60 px.

![](/gdevelop5/tutorials/screenshot_from_2019-05-23_17-40-12.png)

If the condition is satisfied, a force greater than or equal to the maximum speed of the car should be applied in the opposite direction. Therefore, a force greater than or equal to 200 pixels/second should be applied on the _Car_ along the X-axis.

![](/gdevelop5/tutorials/screenshot_from_2019-05-23_17-40-33.png)

Similarly, we need to add another event, with the condition to check if the X position of the _Car_ is more than 395 px.

![](/gdevelop5/screenshot_from_2019-06-06_01-07-54.png)

If the condition is true, a force with a magnitude higher than 200 pixels/second should be applied in the negative X direction.

![](/gdevelop5/tutorials/screenshot_from_2019-05-23_18-12-36.png)

If you preview the game, you should now be able to see _Tree_ and all the objects in the group _Traffic_ and the motion of the car should be constrained between the yellow lines.

Now, we need to set how the game behaves when there's a collision between _Car_ and _Traffic_.

## Collision between Car and Traffic

In the next event we create, we need to set the condition such that it checks a collision between _Car_ and _Traffic_.

For this, you can use the `Collision` condition and set the objects to _Car_ and _Traffic_.

![](/gdevelop5/screenshot_from_2019-06-06_01-21-32.png)

In case of this condition being true, we need to create an object _Explosion_. You can use the action `Create an object` and fill _Explosion_ in the `Object to create` field.

We need to create this object at the coordinates same as that for _Car_. To achieve this, you can use "Car.X()" and "Car.Y()" in the X position and Y position respectively.

!!! note

    "Car.X()" and "Car.Y()" denote the X and Y position of the _Car_ respectively.

![](/gdevelop5/tutorials/screenshot_from_2019-05-23_18-30-10.png)

If you watch the preview, there encounter a few minor issues:

* _Explosion_ cannot be seen.
* _Car_ keeps moving.
* _Traffic_ keeps moving

We will now solve these problems. Make sure that you add these actions for the same `Collision` condition.

* To make the _Explosion_ visible, add an event to set the Z Order of the object _Explosion_ so that it is higher than that of the _Highway_

![](/gdevelop5/tutorials/screenshot_from_2019-05-23_18-37-12.png)

* To remove the instance of _Car_ we shall now add an event to delete the object _Car_.

![](/gdevelop5/tutorials/screenshot_from_2019-05-23_18-42-15.png)

* Similar to what we did for _Car_, to remove an instance of _Traffic_ we can delete the object _Traffic_ too.

![](/gdevelop5/screenshot_from_2019-06-06_01-25-59.png)

You can watch the preview now. Our game is ALMOST complete. We cannot say that the game is complete until we can see the score made by an individual.

## Setting the background color

The gray background does not really suit the game. As there will be trees on both sides of the road, the green color might be the best. To do so, you can right-click anywhere on the scene and select `Scene properties`. Click on the box below `Scene background color` that says `Click to choose`.

![](/gdevelop5/tutorials/screenshot_from_2019-05-22_18-04-16.png)

You can choose the color of your choice and click `OK` in the `Scene properties`.

![](/gdevelop5/tutorials/screenshot_from_2019-05-22_18-27-13.png)

## Displaying score in the scene

To display the score, we will make an event such that when any object in the group _Traffic_ passes a predefined position, the value of the score is updated. To do this, we need to use the help of a scene variable.

Let's start with creating an object _Score_.

For this, you need to go to the Scene Editor and create a new object and choose `Text` from the `Add a new object` table.

![](/gdevelop5/tutorials/screenshot_from_2019-05-23_19-03-50.png)

You can rename the object to _Score_ and choose the text properties from the `Properties` panel.

![](/gdevelop5/tutorials/screenshot_from_2019-05-23_19-06-51.png)

You can now drag and drop the _Score_ object on the screen. You can also change the coordinates of the object from the `Properties` panel.

![](/gdevelop5/tutorials/screenshot_from_2019-05-23_19-14-05.png)

The score in our game will be shown as a number. You cannot directly add a number to a number stored in `Text`.

But you can do it using a variable. To update the score, we need to add a number to the variable defined every time a tree crosses a predefined position and then send that value to the text object.

To repeat it for each object in _Traffic_, we will make a `For each object` event. To make a `For each object` condition, click on the `Choose and add an event` icon at the top.

![](/gdevelop5/tutorials/choose-and-add-event.png)

From the menu that appears, choose the `For each object` option.

We need to repeat this event for each _Traffic_, so choose _Traffic_ for the object to be repeated.

![](/gdevelop5/tutorials/screenshot_from_2019-05-23_21-09-36.png)

Because we want to update our variable every time _Traffic_ crosses a position, we will have to add a condition to check if the position of _Traffic_ is greater than or equal to 700.

![](/gdevelop5/tutorials/screenshot_from_2019-05-23_21-20-00.png)

Our action will be to create and change the value of a scene variable. Create a new scene variable _Points_ similar to how we created variables _CarLeft_ and _CarRight_.

![](/gdevelop5/tutorials/screenshot_from_2019-06-06_19-55-23.png)

Now, we will add an action `Value of a scene variable`. Enter the variable you created in the `Variable` field.

Every time the _Traffic_ passes the Y-position of 700, we will add 100 to the _Score_. Therefore, we set the `Modification's sign` to **+ (add)** and the `Value` to 100.

![](/gdevelop5/tutorials/screenshot_from_2019-05-23_21-49-42.png)

To send this value to our _Score_ we will make an event with no condition because our score should always denote the value of our variable.

We will use the action `Modify the text`. Enter _Score_ in the `Object` field and set the `Modification's sign` to **= (set to)**.

Our text should display "Score: " followed by the value of the variable. But, the problem is that a `Text` can only display a string/text, not a number.

To counter this problem, we will first convert the variable to string and then send it to the text.

To do this, we will write ""Score: " + ToString(Variable(Points))" in the `Text` field. Note the quotes and **+** sign in the text. Quotes help us to distinguish a string and a function while + is used to concatenate two strings.

!!! note

    Even though the second part of `Text` is addressed as a function in the above paragraph, remember that the end result of the function will be a string.

![](/gdevelop5/tutorials/screenshot_from_2019-05-23_22-34-19.png)

If we now preview the game, we'll see that the _Score_ keeps on updating with every frame. This is because the condition checks if the Y position of _Traffic_ is greater than or equal to 700.

To solve this problem as well as to optimize the game by freeing up memory, we will add another action to the event which will delete the object _Traffic_.

This action will free up some amount of memory as well as help us solve the _Score_ problem by deleting the tree in the very next frame of _Traffic_ crossing a Y position of 700.

![](/gdevelop5/tutorials/screenshot_from_2019-05-23_21-56-15.png)

Now if you preview the game, you will see that the score keeps updating even after the collision between _Car_ and _Traffic_ takes place. For this, we can add another condition in the tree deleting event that would check if the object _Car_ is visible.

!!! warning

    There is a difference between the visibility of an object and its existence. An object might not be visible but may exist but if an object ceases to exist (like the _Car_ in our case), it directly implies that it is not visible.

![](/gdevelop5/tutorials/screenshot_from_2019-05-23_22-40-45.png)

To optimize our game for the long run, we can also use a similar `For each object` event for deleting _Tree_

The condition of the event will be to check if Y position of _Tree_ is more than 700 while the action would be to delete the object _Tree_.

![](/gdevelop5/tutorials/screenshot_from_2019-05-24_00-03-41.png)

This is what our Event Editor should look like:

![](/gdevelop5/tutorials/screenshot_from_2019-05-24_00-12-11.png)

You have now created an infinite car game in which the score gets updated as we pass by the trees.

Enjoy the game.

## Add new features

You can now pose new challenges in front of yourself like allowing the car to go off the highway or allowing the movement of the car in front and back too.

GDevelop offers many tutorials for users to get more familiar with it. You can [see them here.](/gdevelop5/tutorials)