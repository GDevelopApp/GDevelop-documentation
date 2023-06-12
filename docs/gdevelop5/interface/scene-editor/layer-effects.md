---
title: Layer Effects
---
# Layer Effects

You can add effects to the layers of your scene. These effects allow you to quickly change the atmosphere and rendering of your game. For example, here is the _sepia_ effect added to the isometric-game example:

![](/gdevelop5/interface/scene-editor/isometric-game-sepia.png)

!!! tip

    You can also add [effects to objects on the screen](/gdevelop5/objects/effects) - useful to create advanced visual effects in your game.

## Adding an effect to a layer

In the scene editor, open the [Layers panel](/gdevelop5/interface/scene-editor/layers-and-cameras). Choose the Base Layer, or another layer, and click on the **Edited effects** button to edit and add effects to that layer.

![](/gdevelop5/interface/scene-editor/layer-effects/pasted/20230310-202848.png)

The window that opens will prompt you to **Add an effect**. If you click on this button you'll add a new effect to your layer.

![](/gdevelop5/interface/scene-editor/layer-effects/pasted/20230310-203337.png)

A new layer effect is named "Effect" when created. This name will be useful later for modifying the parameters of the effect during the game.

From the drop-down menu, you can choose the type of effect you'd like to have on your layer.

![](/gdevelop5/interface/scene-editor/layer-effects/pasted/20230310-203710.png)

The window will then show the parameters for the effect - these parameters depend on the effect type that was chosen.

You can leave the default parameters as they are or change them from this window.

## Try the game with the effect

Launch a preview to see the effect applied. The effect is applied on the whole layer, so all the objects on the layer will be part of the effect.

If a preview is already running, you can see **the changes you've made in real-time** by clicking on **Apply changes to preview**. Read more about [Live Previews here](/gdevelop5/interface/preview).

If you have multiple layers, you can add the same effect to all of your layers.

!!! note

    For example, if you have a Background layer, the base layer and a UI layer (showing the interface of the game), you might want to add effects to the Background layer and the base layer - but not to the UI layer.

!!! warning

    The background color of the scene cannot have any effect applied. For a background that is more than a single color, you can use a [Tiled Sprite](/gdevelop5/objects/tiled_sprite) and apply an effect to the layer that object is on.

## Changing effect parameters during the game

Using events, you can manipulate a layer effect's parameters during the game. It can be useful for different situations: a day-night cycle, a flashback effect, etc...

First, check out the name of the effect and the name of the parameter to change in the [Layers panel](/gdevelop5/interface/scene-editor/layers-and-cameras). For this, open the Layers panel, then click to edit the effects of the layer. Then from the drop-down menu, toggle the display of parameter names.

In this example, the Advanced bloom effect is called "Effect" and has several parameters, but one of them is called "bloomScale".

![](/gdevelop5/interface/scene-editor/layer-effects/pasted/20230310-204831.png)

You can then add an event with an action called "Effect Parameter":

* Enter first the layer name (be sure to add quotation marks). For the base layer, enter an empty string (`""`).
* Enter the name of the effect, in this case `"Effect"`.
* Enter the name of the parameter, in this case `"bloomScale"`.
* Finally, enter the new value to be set for this parameter.

!!! danger

    All of these names are case-sensitive. Be sure to double-check the name of your effect and parameters.

![](/gdevelop5/interface/scene-editor/layer-effects/pasted/20230310-213358.png)

## Advanced effects usage

!!! warning

    While most effects are intuitive enough to be used directly, some might require a bit more knowledge to understand what they do. This section explains some of the advanced effects.

#### Color map

Applies a color-map effect on an object or layer.

![](/gdevelop5/interface/scene-editor/71485828-745d9080-2813-11ea-915d-4dcfc9f67201.png)

This works by modifying a reference "color image map" containing all possible colors.

- Download the reference color map image below, or create your own.
- In an image editor (like Photoshop or GIMP), tweak the color balances of the reference color image map.
    * e.g. In an image editor, using the invert colors function on the reference map will also invert all of the colors of the objects on the layer that the Color Map effect is used.
- Save it as a new file, then use this resulting file as the color image map for the effect in GDevelop.
**Download the image file below and use it as the color map** in GDevelop:

color-map-original-template.png (reference color map image): ![](/gdevelop5/interface/scene-editor/color-map-original-template.png)

!!! note

    Each example color map below relates to the images above with the same name. By shifting the original template's colors, it shifts the colors of all of the objects on that layer.
color-map-model-1.png : ![](/gdevelop5/interface/scene-editor/color-map-model-1.png)
color-map-model-2.png : ![](/gdevelop5/interface/scene-editor/color-map-model-2.png)
color-map-model-3.png : ![](/gdevelop5/interface/scene-editor/color-map-model-3.png)

!!! note

    Don't forget to make changes to the colors of this file using an image editor. Otherwise, no changes will be visible (as the original colors won't be changed).

#### CRT

Applies a CRT effect, simulating an old cathode-ray tube television.

![](/gdevelop5/interface/scene-editor/crt-effect.png)

#### Displacement

This effect uses the pixel values from the specified texture (called the displacement map) to perform a displacement of an object or layer.

![](/gdevelop5/interface/scene-editor/layer-effects/pasted/20230313-151623.png)

You can download **this example of a displacement map file** and use it in GDevelop when setting up the effect:

![](/gdevelop5/interface/scene-editor/displacement_map.png)

You can use this effect to apply all manner of warping effects. Currently, the `r` (red) property of the texture is used to offset the x-axis and the `g` (green) property of the texture is used to offset the y axis.

> It uses the values of the displacement map to look up the correct pixels to output. This means it's not moving the original. Instead, it's starting from the original output and displays the screen differently based on the displacement map. For example, if a displacement map pixel has red = 1 and the filter scale is 20, this filter will output the pixel approximately 20 pixels to the right of the original.

#### Drop shadow

Add a drop shadow under your object's visible on the layer.

![](/gdevelop5/interface/scene-editor/drop-shadow-effect.png)

#### God rays

Cast rays of light from the top of the screen. **This won't work well if shown on top of the background color of the scene**. Be sure to use an object acting as a background or a floor.

![](/gdevelop5/interface/scene-editor/godray-effect.gif)

#### Kawase blur

This is a faster version of the traditional "Blur" effect. It's recommended that you use this one rather than the "Gaussian" blur effect.

#### Outline

Add an outline on all objects of the layer having the effect.  **This won't work well if shown on top of the background color of the scene**. Be sure to use an object acting as a background or a floor.

![](/gdevelop5/interface/scene-editor/outline-effect.png)

#### Pixelate

Applies a pixelated effect, making display objects appear 'blocky'.

![](/gdevelop5/interface/scene-editor/pixelate-effect.png)

!!! note

    For pixel-perfect or 8-bitgames, you can change the **Scale mode** options in your [game properties](/gdevelop5/interface/project-manager/properties) instead of using this effect.

#### RGB split

Separate each component's RGB(red, green, blue) colors and display them on the screen with an offset:

![](/gdevelop5/interface/scene-editor/rgb-effect.png)

#### Tilt shift

Add blur to the top and bottom of the entire layer or object. Perfect to simulate a tiny world or a camera focus effect.

![](/gdevelop5/interface/scene-editor/tilt-shift-effect.png)

## Reference

N/A