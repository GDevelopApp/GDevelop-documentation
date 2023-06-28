---
title: Shape painter
---
# Shape painter

The shape painter object allows us to draw shapes in our game. It can be useful for making simple User Interface (UI) elements, to create a selection box, indicator lines, and more.

## Setting up properties

The shape painter object has many properties that allow us to define how the shapes will be drawn on screen:

![](pasted/20230304-165718.png)

### Change the colour and opacity

The Shape Painter object properties allow us to change the outline colour/color of the object, the fill colour/color of the object, the opacity of each colour/color, and the outline size of our object.

### Draw relative to the object position

By default, the position of the shapes that we draw on the screen is relative to the "Shape painter" object.

![](shape-painter-relative-position-property.png)

In the case of a relative position, when you draw the shapes on the screen using events, the position you specify in actions are using the object position as origin. If your object is at position `150;100` on screen, and you display a rectangle using an action, the position `0;0` will correspond to the position `150;100` on the screen.

When the box is unticked/unchecked, the position 0 on the X and Y axis is going to be at the top left corner of our scene regardless where the object is located.

### Draw a shape using events

After adding a Shape Painter object into the scene, you won't see anything if you run the preview. The Shape painter object is just an empty, invisible object that allows us to display shapes drawn using events.

When you add an action to an event, select a Shape Painter object to display a list of shapes that can be drawn:

![](pasted/20230304-170143.png)

As an example, we are going to draw a rectangle on the screen. Select the Rectangle in the actions.
For the top left position enter 0 for both X and Y. For the bottom right position enter 100 for both X and Y.

![](pasted/20230304-170552.png)

Now, if we launch a scene preview, a rectangle will be drawn in the scene/screen that is 100 pixels wide and 100 pixels high.

![](rectanlge-shape-painter.png)

If we left the relative position enabled, you may notice that our rectangle is in the same position as the shape painter object even though its origin point is 0. Now if we disable that option and launch the preview again, you going to see our object is drawn in the top left corner of our scene.

Using events we can also change any properties of a shape on the fly:

![](shapepaintereventsexample.png)

### Collisions with a shape painter

Like most objects, collisions can be detected by the shape painter object.  Shape painter objects are unique in that the collision mask is based on what the shape painter has drawn.  The collision mask of a shape painter is the smallest rectangle that can be drawn around all points that the shape painter has drawn (also called the AABB, axis-aligned bounding-box).

## Examples

!!! tip

        **See it in action!** 🎮
    Open these examples online.

[![](shapepainterobject.png)](https://editor.gdevelop.io/?project=example://advanced-shape-based-painter)

[Open example in GDevelop](https://editor.gdevelop.io/?project=example://advanced-shape-based-painter){ .md-button .md-button--primary }

## Reference

All actions, conditions and expressions are listed in [the shape painter reference page](/gdevelop5/all-features/primitive-drawing/reference/).
