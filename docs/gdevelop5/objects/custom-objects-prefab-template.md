---
title: Custom Objects ("prefabs")
---
# Custom Objects ("prefabs")

**Custom objects** are reusable objects containing custom logic and one or more other objects. "Custom objects" are also called **"Prefabs"** or "Templates" in some game engines.

They allow to speed-up development and make games more modular by having an object that can be reused and customized in different scenes.

For example, the **[multitouch joysticks](/gdevelop5/objects/multitouch-joystick), [buttons](/gdevelop5/objects/button), [sliders](/gdevelop5/objects/slider)** and other user interface objects that you can find in the list of objects are “custom objects” built with other objects.

Custom objects contain other objects, which are called "child objects". They can display on screen one or more instances of these "child objects" and can offer:

  * custom conditions,
  * custom actions,
  * custom expressions.

!!! warning

    This feature is a work-in-progress. You must activate it in the preferences of GDevelop and the user experience for creating a custom object from scratch is rough.

## Create a new custom object

Make sure you've activated the feature in the preferences of GDevelop.

Custom objects are grouped into "extensions". They are composed of functions, behaviors or custom objects powered by events. You can see the list of all the extensions the game has in the [Project Manager](/gdevelop5/interface/project-manager).

Extensions that are installed by the asset store are using events. They can be modified the same way as any extensions. This allows to make some changes to the way the objects work to better fit a game. Make sure to back up your changes or rename the extension to avoid overriding them later by updating the extension.

!!! tip

    As we write this documentation, please reach out on the forum or the help channel on Discord if you struggle to use them or have feedback.