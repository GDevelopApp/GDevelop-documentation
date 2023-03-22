---
title: Tiled Sprite
---
# Tiled Sprite

!!! tip

        **See it in action!** 🎮
    [I would rather see the Tiled Sprite object examples! Please take me there now.](/#Examples)


A tiled sprite [object](/gdevelop5/objects) allows us to display an image in a tileset. You can increase and decrease the size of the tileset by scaling the object in the scene.

A tiled sprite object can be used to create platforms in a platform game. It can also be used as a group of the same images. In this case, there is no need to deal with multiple sprite objects.

![](/gdevelop5/objects/tiled-sprite-object.png)

####  Add a tiled sprite object

To add a Tiled Sprite object to a Scene, create a new object from the Objects list. Select the "Tiled Sprite" option from the panel that opens.

![](/gdevelop5/objects/add-tiled-sprite-object.png)

####  Open object properties

Next, again from the Objects list on your right,  open the object's properties by right-clicking on the object. Select "Edit object" from the popup list that appears.

![](/gdevelop5/objects/tiled-sprite-properties.png)

####  Add an image

To add an image to the object, click the "Select an image" field. A local file browser will open on your computer. Choose an image of your choice.

![](/gdevelop5/objects/add-image-to-tiled-sprite.png)

The selected image will be displayed in the preview window on the right

![](/gdevelop5/objects/tiled-sprite-image-preview.png)

####  Change default size

We can change the default size of the tiled sprite object by changing the Default width and Default height value on the bottom

![](/gdevelop5/objects/tiled-sprite-default-size.png)

The default size effects how much of our image is going to be visible in the object. For example, this is how my image looks with an object size 32x32.

![](/gdevelop5/objects/tiled-sprite-3232.png)

As you can see the above image does not scale along with the object but makes the image only partially visible.

If I set the size of the object to 100x100 (as seen below), the object size is bigger than the actual image so it continues drawing the image again to fill the empty space.

![](/gdevelop5/objects/tiled-sprite-100100.png)

####  Scale the object

You can get instant results by scaling the object in the scene editor to create the look/size that you need.

![](/gdevelop5/objects/scale-tiled-sprite.png)

The Scene (Events) editor can also be used to change the size of a tiled sprite. Using the Events editor makes gameplay more fluid and interesting.

![](/gdevelop5/objects/scaleasprite.png)

## Examples

!!! tip

        **See it in action!** 🎮
    Open these examples online.

[![](/gdevelop5/behaviors/platformerbehavior.png)](https://editor.gdevelop.io/?project=example://old-platformer)

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://old-platformer){ .md-button .md-button--primary }