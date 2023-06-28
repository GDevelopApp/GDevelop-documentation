---
title: Button
---
# Button

Buttons are an essential part of many games: they are used in menus, in the game and can be part of the gameplay. Buttons can be constructed in different ways in GDevelop. You can build your own with a mix of Sprite, Tiled Sprite, Shape Painter and Text objects.
Often, it's easier to go with a ready-to-use button available in the Asset Store.

![type:video](https://www.youtube.com/embed/plkHd4uPI4U)

## Add a button from the Asset Store to a game

The [Buttons asset pack](https://gdevelop.io/asset-store/free/menu-buttons-menu-buttons) from the Asset Store contains free and read-to-use buttons.

[![](button-asset-store.png)](https://gdevelop.io/asset-store/free/menu-buttons-menu-buttons)

## Advanced: create a button from scratch

When creating a button from scratch, 3 images are usually needed, one for each state of the button:

  - Idle
  - Hovered
  - Pressed

The object automatically shows the right image according to taps on a touchscreen or the mouse cursor.

!!! tip

    The same image can be used for the 3 states. The button won't be animated but it will still work.

### Handle clicks or taps on the button

Button clicks/taps can be checked with a condition in events:

![](button-clicked-condition.png)

Other conditions can be used to check the button state. For instance, it allows to apply [an effect](/gdevelop5/objects/effects) to make a button appear brighter when it's pressed.