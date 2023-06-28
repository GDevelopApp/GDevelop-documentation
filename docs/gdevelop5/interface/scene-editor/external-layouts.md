---
title: External layouts
---
# External layouts

An external layout can be used to create a layout of objects, in the same way you would in a scene editor. Objects in an external layout can then be dynamically loaded into a scene using the action **Create objects from an external layout**.

This can be useful to :

  * Create entire levels in different external layouts, and then load them into the scene containing the game.
  * Create complex layouts of objects (for example, a fleet of spaceships) and then insert them into a scene.
  * Create UI for your game, so you don't need to make the same UI layout in every scene of your game.

The following videos is a quick explanation of external layouts and how to use them:

![type:video](https://www.youtube.com/embed/_VUwAfD_7zQ)

## Create an external layout

External layouts can be created in the [project manager](/gdevelop5/interface/project-manager):

![](/gdevelop5/interface/scene-editor/external-layouts/pasted/20230313-164056.png)

When an external layout is added, open it by clicking on its name.
Then, select the scene the layout should be based on. The objects from this scene will be available to build the layout.

![](/gdevelop5/interface/scene-editor/external-layouts/pasted/20230313-164228.png)

The external layout can now be edited as if it was a traditional scene:

![](/gdevelop5/interface/scene-editor/external-layouts/pasted/20230304-162617.png)

# Load the layout into a scene during the game

During the game, you can load a layout into a scene using the **Create objects from an external layout** action:

  * Enter the name of the layout, inside double quotes. For example: `"My External Layout"`.

  * You can specify the X and Y position of the origin of the layout. Setting this value to anything other than `0;0` is treated as an offset for objects of the external layout.

The origin(0,0) of the external layout will align with the coordinates given in this action when loaded into the game. So for example, if an object is at position `100;100` in the external layout and if, when creating the objects in the scene, the action uses `50;50` as the position, then the object will be created at position `150;150`.

![](/gdevelop5/interface/scene-editor/external-layouts/pasted/20230304-163011.png)

If you use this action, make sure to run it with either the **At the beginning of the scene** or **Trigger once** condition. Otherwise, new objects from this external layout will be created every frame, which will drastically reduce performance and create too many objects.

## Reference

All actions, conditions and expressions are listed in [the external layout audio reference page](/gdevelop5/all-features/external-layout/reference/).