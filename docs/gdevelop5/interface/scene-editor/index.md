---
title: Scene Editor
---
# Scene Editor

When opening a scene (or an external layout), the Scene Editor opens.

![](/gdevelop5/interface/scene-editor/pasted/20230310-185143.png)

The Scene Editor is where you can design and build the game levels, menus,  inventories, or any other screen in the game. The Scene Editor allows you to create and add objects to the scene. The gameplay and rules of the game can be created using events in the [Events Editor](/gdevelop5/interface/events-editor).

On the right side of the toolbar in the scene editor, you have options to open panels used for different parts of your game, as well as some other tools.

![](/gdevelop5/interface/scene-editor/pasted/20230310-185534.png)

## Objects panel

The **Objects Panel**, when first opened, appears on the right side of the Scene Editor's interface. This is where you can see all of [the objects](/gdevelop5/objects) used in your scene. You can also add new objects to your list by clicking the **add new objects** button at the bottom of the panel.

![](/gdevelop5/interface/scene-editor/pasted/20230307-152758.png)

If you close the Object Panel, you can reopen it by using this button on the toolbar:

![](/gdevelop5/interface/scene-editor/pasted/20230307-152850.png)

Read about all [the features available and the objects types](/gdevelop5/objects) to learn more about the different kinds of objects you can use in your game.

## Instance Properties panel

You can find the **Instance Properties panel** on the left side of the Scene Editor's interface. When opened, the panel may have no information displayed in it, but if you select an instance of an object placed into your scene, the panel will display all of the information relevant to that instance of the object.

![](/gdevelop5/interface/scene-editor/pasted/20230307-153101.png)

An object that you put on the scene _is called **an instance**_. The Properties panel allows you to change the properties of the selected instance(s):

  * This can be the instance coordinates on the scene, scale, and Z-order. All objects share common properties (as well as common actions and conditions in events). **You can [learn about these here](/gdevelop5/objects/base_object)**.
  * Some objects can also have special properties. For example, a [Sprite object](/gdevelop5/objects/sprite) allow you to set the initial animation of each instance on the scene (the default animation being the first). Read about [objects](/gdevelop5/objects) to see all the objects that you can use in GDevelop.

!!! tip

    While the difference between an instance and an object can be fuzzy if you're new to GDevelop, it's important to understand that an **object** is like a *blueprint* (it's also called a "Class" in some programming languages). You can have multiple objects *living* on the scene: these are called **instances**.

If you have closed this panel, you can open it again by clicking the button in the toolbar:

![](/gdevelop5/interface/scene-editor/pasted/20230307-153412.png)

!!! note

    GDevelop panels can be moved by dragging them to any place on the screen. Simply drag the panel using the title bar.

## Objects Groups panel

In the Objects Groups panel, you can find the list of groups of objects that are present in the scene.

![](/gdevelop5/interface/scene-editor/pasted/20230307-153605.png)

To open the panel, click this button in the toolbar:

![](/gdevelop5/interface/scene-editor/pasted/20230307-153646.png)

Object groups contain objects and can be used in events to refer to multiple objects, using a single event. Read more about them on the page about [common features for all objects](/gdevelop5/objects/base_object).

## Instances panel

The instances panel displays the list of all of an object's instances living in the scene. It can be used to quickly select any instance. In the list, you can see the position, angle, layer and Z order in the scene of any instance.

![](/gdevelop5/interface/scene-editor/pasted/20230307-153940.png)

You can open the Instances panel by clicking this button in the toolbar:

![](/gdevelop5/interface/scene-editor/pasted/20230307-153850.png)

## Layers panel

A layer acts as a virtual container for objects displayed on the screen. By default, objects are drawn on the “base layer”, but scenes can have multiple layers. For example, it is common for a "UI" layer to display controls and text, while another layer could be used for the background.

[Read more about layers and cameras here](/gdevelop5/interface/scene-editor/layers-and-cameras).

![](/gdevelop5/interface/scene-editor/pasted/20230307-154253.png)

You can open the layers panel by clicking this button in the toolbar:

![](/gdevelop5/interface/scene-editor/pasted/20230307-154323.png)

## Other tools

### Toggle/Edit grid

By clicking the grid button in the toolbar, you get multiple options:

![](/gdevelop5/interface/scene-editor/pasted/20230307-154726.png)

  * **Show mask**: this option displays or hides a black border on the scene. It represents the size of the game window.
  * **Show grid:** this option turns the grid off or on within the scene editor. Having a grid is useful when we need to place objects accurately.
  * **Setup grid:** this option opens a window that allows you to set up the size and position of the grid.

### Change editor zoom

By clicking on the zoom button, you can change the zoom level inside the scene editor:

![](/gdevelop5/interface/scene-editor/pasted/20230307-154849.png)

## Launch a preview of the scene

By clicking on the "Preview" button, you can launch a preview of your game.

![](/gdevelop5/interface/scene-editor/pasted/20230307-154951.png)

The preview will open in a separate window. [Read more about launching a preview here](/gdevelop5/interface/preview).