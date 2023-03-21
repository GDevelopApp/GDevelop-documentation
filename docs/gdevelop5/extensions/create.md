---
title: Create your own extensions (behaviors, conditions, actions or expressions)
---
# Create your own extensions (behaviors, conditions, actions or expressions)

You can also create, directly in your project, new behaviors, actions, conditions or expressions for your game.
They can be created using events, just like in usual [events sheets](/gdevelop5/interface/events-editor) for scenes (or external events).

!!! note

    Some best practices are in vigor to keep the extensions as clean as possible,[these practices](/gdevelop5/extensions/best-practices) are requirements to submit an extension to the community list in the engine.


## Create a new extension

The first step is to create a new extension. This can be done by clicking "Create or search for new extensions" in the project manager:

![](/gdevelop5/extensions/create/pasted/20230305-115305.png)

Then click "Create a new extension" at the bottom:

![](/gdevelop5/extensions/create/pasted/20230305-115341.png)

A new extension is added. It's recommended to immediately change the name to something that will hint at what the extension is providing. To do so, right click on the extension and choose **Rename**. Only alphanumeric characters and underscores are supported.

!!! tip

    For example, the name can be "Flash" if you want to create an extension to make an object blink, or "TankEnemies" if you want to create behaviors that will control objects like if they are tanks on a battleground.

Finally, click on the extension to open it. You can now create new behaviors or functions (or both) in your extension.

### Create new functions

Functions are either custom actions, conditions or expression that can be used in the events sheet.
Read more about [creating your functions here](/gdevelop5/events/functions).

### Create new behaviors

Custom behaviors are like usual behaviors that you can to an object. They can be used to control objects (moving them, changing their animation, text, size, etc...) according to some logic embedded in the behavior.

Read more about [creating your custom behaviors here](/gdevelop5/behaviors/events-based-behaviors).

### Create new objects ("prefabs")

Custom objects are full featured, autonomous objects which embeds their own logic and are constructed by assembling other objects. For example, UI elements like buttons, switches, toggles, sliders, are constructed as "custom objects", also called "Prefabs" in some game engines.

Read more about [creating custom objects here](/gdevelop5/objects/custom-objects-prefab-template).

## Share your extensions

If you've created an extension providing a useful, reusable behaviors or set of functions, you can [share them with the community](/gdevelop5/extensions/share).