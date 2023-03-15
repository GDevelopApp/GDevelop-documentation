---
title: Sprite
---
# Sprite

Sprite objects are the most often used [objects](/gdevelop5/objects) in GDevelop.

A sprite object allows us to display an image or play a series of images as an animation. It can be used for many things in our games, like buttons, characters or platforms. Anything that can be represented with an image can be a sprite object.

## Creating a sprite object

To add a sprite to your scene, select the "Click to add an object" option located on the right at the bottom of the Objects list.

![](/gdevelop5/objects/clicktoaddanobject.png)

A new panel will open that will show the different types of objects available in GDevelop.

![](/gdevelop5/objects/object_list.png)

Choose "Sprite" from the list to create a new sprite object in your game scene.

![](/gdevelop5/objects/select-sprite.png)

This selection will open up the object properties window. In this window, you will see a few properties of the sprite object.

![](/gdevelop5/objects/sprite-object-properties.png)

## Adding an animation

An animation allows you to add an image or series of images to the sprite object. To add an animation, click the add animation button.

![](/gdevelop5/objects/add-animation-button.png)

This will expand the current dialog box and show you a wide variety of options you can tweak.

![](/gdevelop5/objects/animation-properties.png)

### Adding an image to the animation

We can add images to the animation of our object by clicking on the plus symbol.

![](/gdevelop5/objects/add-symbol.png)

This will open the file explorer to browse through the files and choose a suitable image for your animation. After choosing the image, you will see the image being displayed in the window.

![](/gdevelop5/objects/add-image.png)

### Collision and points

You can customise your sprite's collision area using the Edit Collision Masks at the bottom of the dialog; you can set the area to be taken into consideration during a collision. [Read more about collision masks here.](/gdevelop5/objects/sprite/collision-mask)

Beside the Edit Collision Masks option, you will find the Edit Points option at the bottom of the sprite properties dialog. This option allows us to have additional reference points for an object. These reference points can be used in events when needed. [Read more about points in sprites here.](/gdevelop5/objects/sprite/edit-points)

### Adding multiple animations

An object might sometimes require more than one animation. To add animations, click the "Add animation" button in the same way that we did it the first time. This feature allows us to separate the different animations easily. 

![](/gdevelop5/objects/multiple_animations.png)

Later, we can switch between the animations using events.

### Naming the animation

At the top of the animation section in the window, you will see a field beside "Animation #" with grayed out "Optional animation name" written in it. To enter a name for your animation, click on the field and enter the name.

![](/gdevelop5/objects/name-animation.png)

!!! tip
    
        In objects with multiple animations, you may find it difficult to differentiate between animations without names. It is generally a good practice to use animation names for objects with multiple animations.
    
    If we don't enter a name, we need to use the animation number to refer to this animation.

### Adding multiple images in an animation

To add multiple images to an animation, you can select all the images from the explorer and add them to the animation.

![](/gdevelop5/objects/animation-multiple-images.png)

Images will be played in the same order as displayed.

### Repeating the animation

By default, every animation plays only once, which means that the animation stops as soon as its last frame finishes. To repeat the animation, we can "loop" the animation; set the animation to "loop" by clicking the repeat icon.

![](/gdevelop5/objects/set-animation-loop.png)

Once an animation is set to loop, it will play continuously.

### Setting animation time

The speed of the animation can be set by changing the value by the clock icon.

![](/gdevelop5/objects/set-animation-speed.png)

The value entered in the field is the time elapsed between two consecutive frames. The default value is 0.08 seconds. For faster playback, use lower animation time while, for slower playback, use high animation time.

## Naming the object

At the top of the dialog, you can see the name of the object in the "Object Name" field. The name of the object usually describes the content of an object which makes it easy to distinguish from other sprites.

![](/gdevelop5/objects/annotation_2019-06-09_152442.png)

## Adding object to the scene

To add the sprite object, select it and click in the scene to add an object.

Your new sprite is now complete, but you still need to add it to your game scene. Click on the new sprite in the Object list. Next, click on the scene where you want to add the sprite. You will now see your sprite added to the scene. You can add multiple "instances" of your sprite to your game screen. Repeat the process for adding the first sprite. 

![](/gdevelop5/objects/addspritetoscene.gif)

## Using multiple animations with events

After creating multiple animations, each with their own unique set of images, you can use events to switch between animations. Setting the animation time between 0 - 1 will ensure it stays active when using events. 

!!! note
    
        Using a negative animation time disables the event actions.
    
    _Do not use negative values._ 

When you have set multiple animations for an object, you can use the events tab to "Change the animation (by name)." This is controlled in the "Add action" section of the condition. It will allow you to switch to the correct animation whenever the condition used in the "Add condition" section is true. 

![](/gdevelop5/objects/eventanimationexample.png)

As advised before, use animation names for multiple animations in an object to easily differentiate between them.

To add an action to change animation using animation name, choose the "Change the animation (by name)" condition.

Then put that name within the "Animation name" field surrounded by quotes.

![](/gdevelop5/objects/eventanimnameexample.png)

For more event details, follow the [tutorials here](http://wiki.compilgames.net/doku.php/gdevelop5/tutorials).

## Examples 

!!! tip
    
        **See it in action!** 🎮  
    Click on the images to open the examples online.

[![](/gdevelop5/objects/createaspritenew.png)](https://editor.gdevelop.io/?project=example://change-scale-of-sprites)

----

[![](/gdevelop5/objects/changespriteanimationexamplenew.png)](https://editor.gdevelop.io/?project=example://change-sprite-animation)

----

[![](/gdevelop5/objects/changespritecolorexamplenew.png)](https://editor.gdevelop.io/?project=example://change-sprite-color)

----

[![](/gdevelop5/objects/changespriteanimationexample2new.png)](https://editor.gdevelop.io/?project=example://play-stop-sprite-animation)