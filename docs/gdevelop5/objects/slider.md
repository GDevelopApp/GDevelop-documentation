---
title: Slider
---
# Slider

## Learn about UI objects with this video tutorial

<iframe width="640" height="360" src="https://www.youtube.com/embed/plkHd4uPI4U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
###  Add a slider to a game 

####  Get a slider from asset store 

The [Settings UI asset pack](https://gdevelop.io/asset-store/free/settings-ui-settings-ui) from the asset store contains free and read-to-use sliders.

[![](/gdevelop5/objects/slider-asset-store.png)](https://gdevelop.io/asset-store/free/settings-ui-settings-ui)

!!! tip

    This pack also contains [toggle switches](/gdevelop5/objects/toggle-switch).

####  Create a slider from scratch 

Sliders need 3 images for each part:

- the thumb that is dragged by user on the bar
- the filled part of the bar
- the background or frame of the bar

When the slider is made larger in the editor, the thumb keeps the same size. The default size of the thumb must be changed if necessary.

When a slider is added on the scene, it takes the default size set for the slider background.

!!! tip

    Every part of the slider is a [Panel Sprite ("9-patch")](/gdevelop5/objects/panel_sprite).

###  Get slider values 

Slider values can be get with the `Value()` expression.

![](/gdevelop5/objects/slider-value-expression.png)

Sliders and toggle switches can be useful to make a settings panel. As the settings panel and the game may be in different scene, the value can be stored in a global variable to be able use it in the game scene.