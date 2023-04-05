---
title: Panel Sprite ("9 patch")
---
# Panel Sprite ("9 patch")

Panel sprite is an [object](/gdevelop5/objects) where a texture is split into 9 pieces or slices and each slice is scaled separately. This can be helpful where you would need the object to keep it's proportions even after it is scaled. For example it can be helpful in making frame of an interface, as tiles (land, water, etc..) in top down games, as platforms in platformer games, used in health bars, etc...

!!! note

    The 9 patch sprite ("9 patch") object currently doesn't support points, custom hitboxes or animations.

## How does it work?

Here you can see a representation of how a 9 patch sprite's texture is split and scaled.

![](/gdevelop5/objects/how9panelworks.png)

The texture is split into 9 segments, 1 to 9. Each of those segments will be scaled separately. You can see that segments 1, 3, 7, 9 keep their size and do not get scaled, while segments 2, 8 get scaled only horizontally, 4, 6 get scaled only vertically and segment 5 getting scaled both horizontally and vertically.

### How a 9 patch sprite is scaled compared to a normal sprite

![](/gdevelop5/objects/9panel3.png)

![](/gdevelop5/objects/9panel4.png)

While the normal sprite object's texture is scaled as a single segment, the 9 patch sprite object's texture is scaled as different segments, keeping their proportion and also keeping the texture's quality.

###  Using a Panel sprite

To use the Panel Sprite, create a new object from the Objects panel/list on the right. Once you've created the object, you can set the size of the margins for each border around the object. Margins are the top, the left, the right, and the bottom lines that separate each segment.

Here is an image of how the margins work:

![](/gdevelop5/objects/9panel9.png)

If the top margin is set to 100, the margin would be 100 pixels from the top and if the bottom margin is set to 100, the margin would be 100 pixels from the bottom.

If "repeat borders and center texture" is enabled, segments 2, 4, 5, 6, 8 will be repeated instead of stretching them:

![](/gdevelop5/objects/9panel6.png)

## References

You can browse all the actions, conditions and expressions related to [the panel sprite (9-patch) object on this reference page](/gdevelop5/all-features/panel-sprite-object/reference/)