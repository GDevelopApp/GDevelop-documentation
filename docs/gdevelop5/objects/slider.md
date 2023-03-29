---
title: Slider
---
# Slider

Sliders allow the player to change make a choice in a range. For example, this can be useful to change the music or sound effect volume, set the power of an attack, modify the speed of a car.

While sliders could be constructed manually using other objects, it's often simpler to use ready-to-use sliders available in the Asset Store.

![type:video](https://www.youtube.com/embed/plkHd4uPI4U)

## Add a slider from the Asset Store to a game

The [Settings UI asset pack](https://gdevelop.io/asset-store/free/settings-ui-settings-ui) from the asset store contains free and read-to-use sliders.

[![](/gdevelop5/objects/slider-asset-store.png)](https://gdevelop.io/asset-store/free/settings-ui-settings-ui)

!!! tip

    This pack also contains [toggle switches](/gdevelop5/objects/toggle-switch).

## Advanced: create a slider from scratch

Sliders need 3 images for each part:

- the thumb, that is dragged by user on the bar,
- the filled part of the bar,
- the background or frame of the bar,

When the slider is made larger in the editor, the thumb keeps the same size. The default size of the thumb must be changed if necessary.

When a slider is added on the scene, it takes the default size set for the slider background.

!!! tip

    Every part of the slider is a [Panel Sprite ("9-patch")](/gdevelop5/objects/panel_sprite).

## Read the value of a slider

A slider would be useless if the game can't react when its value is changed.

Slider values can be read with the `Value()` expression. It's often useful to store this in a variable or use it to change the position of an object.

![](/gdevelop5/objects/slider-value-expression.png)

Sliders and toggle switches can be useful to make a settings panel. As the settings panel and the game may be in different scene, the value can be stored in a global variable to be able use it in the game scene.