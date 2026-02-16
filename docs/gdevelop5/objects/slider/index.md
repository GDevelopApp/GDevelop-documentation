---
title: Slider
---
# Slider

Sliders allow the player to pick a value between a maximum and a minimum range. This can be useful to change the music or sound effect volume, set the power of an attack, modify the speed of a car.

While sliders could be constructed manually using other objects, it's often simpler to use ready-to-use sliders available in the Asset Store.

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/plkHd4uPI4U" frameborder="0" allowfullscreen></iframe>
</div>

## Add a slider from the Asset Store to a game

The [Settings UI asset pack](https://gdevelop.io/asset-store/free/settings-ui-settings-ui) from the asset store contains free and read-to-use sliders.

[![](slider-asset-store.png)](https://gdevelop.io/asset-store/free/settings-ui-settings-ui)

!!! tip

    This pack also contains [toggle switches](/gdevelop5/objects/toggle-switch).

## Advanced: create a slider from scratch

Sliders need 3 images:

- the thumb, that is dragged by user on the bar,
- the filled part of the bar,
- the background or frame of the bar,

When the slider is made larger in the editor, the thumb remains the same size. The default size of the thumb must be changed if necessary.

When a slider is added into the scene, it takes the default size set for the slider background.

!!! tip

    Every part of the slider is a [Panel Sprite ("9-patch")](/gdevelop5/objects/panel_sprite).

## Read the value of a slider

A slider would be useless if the game can't react when its value is changed.

Slider values can be read with the `Value()` expression. It can be used to store this as a variable or use it to change a property of an object.

![](slider-value-expression.png)

### Using slider values in your game

Here are some common ways to use slider values:

- **Volume control**: Use the slider value to set the volume of music or sound effects (typically 0-100)
- **Difficulty settings**: Allow players to adjust game difficulty with a slider
- **Graphics settings**: Control visual quality, brightness, or other rendering options
- **Gameplay parameters**: Adjust speed, power, or other in-game values

### Saving slider settings

Sliders and toggle switches are useful for creating settings panels. Since the settings panel and the game may be in different scenes, store the value in a global variable to use it across all game scenes.

You can also use the [Storage feature](/gdevelop5/all-features/storage) to save slider values between game sessions, so player preferences persist even after closing the game.

### Slider range and step

When creating a slider, you can configure:

- **Minimum value**: The lowest value the slider can represent
- **Maximum value**: The highest value the slider can represent
- **Step size**: How much the value changes as the thumb moves (for example, a step of 1 means whole numbers only)