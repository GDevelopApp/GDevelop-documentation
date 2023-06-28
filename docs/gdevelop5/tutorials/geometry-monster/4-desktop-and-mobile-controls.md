---
title: 4-desktop-and-mobile-controls
---
⬅️ **[Previous part: 3. Introducing main character](/gdevelop5/tutorials/geometry-monster/3-introducing-main-character)** ➡️ **[Next part: 5. Adding and moving shapes](/gdevelop5/tutorials/geometry-monster/5-adding-and-moving-shapes)**

# 4. Desktop and mobile controls

Since we already [introduced the Monster](/gdevelop5/tutorials/geometry-monster/3-introducing-main-character) to the game, it would be nice to be able to control him.

![](/gdevelop5/tutorials/geometry-monster/28_5.png)

Drag the Monster from the right panel containing the objects onto the scene and click on the "Level1 (Events)" tab.

![](/gdevelop5/tutorials/geometry-monster/30.png)

The events list is empty at the beginning - the popup message explains that events are composed of **conditions** and **actions**.

![](/gdevelop5/tutorials/geometry-monster/31.png)

In the top right section of the editor you will see a few icons - click on the third one from the left: light blue square with a dark blue plus sign. When you hover over it the description will say "Add a new empty event".

![](/gdevelop5/tutorials/geometry-monster/32.png)

When the empty event is added, click on the "Add condition" - it will open a popup.

![](/gdevelop5/tutorials/geometry-monster/33.png)

In the popup, you will notice there's our Monster on the list of objects, but we're not interested in him right now. Click on the "Other conditions" tab to expand the list of options.

!!! note

    Don't have the "Other conditions" tab? Don't panic! Go to GDevelop preferences (click on the "File" menu, or "GDevelop 5" on macOS, then "Preferences"). Activate "Use the new action/condition editor". You can then go back to the tutorial. ![](/gdevelop5/tutorials/geometry-monster/activate_new_editor.png)

![](/gdevelop5/tutorials/geometry-monster/34.png)

Other conditions include collisions, variable operations, mouse and touch controls, etc. Click on the "Keyboard" option to expand the list, and then select "Key pressed".

![](/gdevelop5/tutorials/geometry-monster/35_5.png)

This tests if a specific key has been pressed - enter "Left" into the "Key" field, then click "Ok".

![](/gdevelop5/tutorials/geometry-monster/37.png)

Now let's get back to our Monster - click to "Add an action".

![](/gdevelop5/tutorials/geometry-monster/38.png)

Select Monster, look up "Add a force", and then set the speed to `-450`.

!!! note

    Make sure the "Instant" option is selected, as we want the Monster to move only when the left key is pressed, and stop when it is released.

After you've done it, click "Ok" to confirm.

![](/gdevelop5/tutorials/geometry-monster/45.png)

You can see the final version of the event we just completed - with conditions on the left, and action on the right: when you press the left key, then it will move (by applying the force of `-450` units on the `X` axis and ignoring the `Y` axis with `0` value) to the left edge of the screen.

**Congratulations**, the Monster is moving left! Now let's add the movement to the right - try doing that on your own following the exact same steps you did for the left movement.

![](/gdevelop5/tutorials/geometry-monster/51.png)

If you completed the right movement, both events with their conditions and actions should now be in place, so the Monster can move in either direction - left or right.

![](/gdevelop5/tutorials/geometry-monster/52.png)

Click on "Add a comment", so the extra field appear.

![](/gdevelop5/tutorials/geometry-monster/53.png)

Drag it at the top of both events.

![](/gdevelop5/tutorials/geometry-monster/54.png)

Then enter the label "Monster", so when we have way more events on the list we can clearly see which ones are for which objects.

Now we're going to limit the movement of the Monster to the visible screen, so he won't be moving outside of it when we press the keyboard controls.

![](/gdevelop5/tutorials/geometry-monster/54_1.png)

Select the Monster.

![](/gdevelop5/tutorials/geometry-monster/54_2.png)

Go to Behaviors.

![](/gdevelop5/tutorials/geometry-monster/54_3.png)

Then "Add a behavior to the object".

![](/gdevelop5/tutorials/geometry-monster/54_4.png)

Click on the tab "Search for behaviors".

![](/gdevelop5/tutorials/geometry-monster/54_5.png)

From the available list chose "screen".

![](/gdevelop5/tutorials/geometry-monster/54_6.png)

It's the "Stay On Screen" custom behaviors that we're going to use for the Monster.

![](/gdevelop5/tutorials/geometry-monster/54_7.png)

Install it in our project, so it will be available to use afterwards.

![](/gdevelop5/tutorials/geometry-monster/54_8.png)

Then select it from the list.

![](/gdevelop5/tutorials/geometry-monster/54_9.png)

Insert `133` as the right margin, since this is the width of the Monster, to limit him going out of the screen to the right (since his origin is in the top left part of the sprite), and then click Apply.

![](/gdevelop5/tutorials/geometry-monster/55.png)

In the top right menu, click on the first item - "Launch a preview of the scene".

![](/gdevelop5/tutorials/geometry-monster/56.png)

It worked - the preview of Geometry Monster game is launched, and you can already control the main character!

Now when we have desktop controls (moving Monster with the keyboard), it would be great to add mouse and touch support too. The game will be easier to play with the mouse, and it will also be playable on mobile.

![](/gdevelop5/tutorials/geometry-monster/56_1.png)

Add new condition.

![](/gdevelop5/tutorials/geometry-monster/56_2.png)

Look for "Mouse button pressed or touch held" in the "Other conditions", and the button to test will be "Left (primary)".

![](/gdevelop5/tutorials/geometry-monster/56_3.png)

Now add a sub-condition.

![20220129-155954.png](/gdevelop5/tutorials/geometry-monster/4-desktop-and-mobile-controls/pasted/20220129-155954.png)

Select Monster, then "X position", and enter `\> (greater than)` as the "Sign of the test" and `MouseX() + 5` as the "X position".

  * `MouseX()` is an "expression" (also called function, like mathematical functions). It returns the position of the mouse, or touch on a touchscreen, in pixels on the X axis.
  * The `5` is an offset in pixels, so the Monster won't be jumping between both states if it will be clicked or touched in the center (you'll see how it's useful by doing the next event).

![](/gdevelop5/tutorials/geometry-monster/56_5.png)

Copy the action taken from the condition responsible for clicking the left button...

![](/gdevelop5/tutorials/geometry-monster/56_6.png)

...and paste it in the condition we created.

![](/gdevelop5/tutorials/geometry-monster/56_7.png)

Then create a new sub-condition.

![20220129-160153.png](/gdevelop5/tutorials/geometry-monster/4-desktop-and-mobile-controls/pasted/20220129-160153.png)

Follow the same pattern: Monster, "X position", and then `\< (less than)` and `MouseX() - 5` for the offset from the other side.

![](/gdevelop5/tutorials/geometry-monster/56_9.png)

Copy and paste the action from the right key press condition and paste it here.

![](/gdevelop5/tutorials/geometry-monster/56_10.png)

Excellent! Monster should now be moving with both keyboard and mouse controls!

⬅️ **[Previous part: 3. Introducing main character](/gdevelop5/tutorials/geometry-monster/3-introducing-main-character)** ➡️ **[Next part: 5. Adding and moving shapes](/gdevelop5/tutorials/geometry-monster/5-adding-and-moving-shapes)**
