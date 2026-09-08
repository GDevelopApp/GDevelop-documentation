#  Color map effect

Applies a color-map effect on an object or layer.

![](/gdevelop5/interface/scene-editor/71485828-745d9080-2813-11ea-915d-4dcfc9f67201.png)

This works by modifying a reference "color image map" containing all possible colors.

Create your own color map

  - Download the reference color map image:
    ![](color-map-original-template.png)
  - Use an image editor (like [GIMP](https://www.gimp.org) or Photoshop) to tweak the color the reference color image map with some filters. For instance, you can use GIMP [Rotate Colors](https://docs.gimp.org/3.0/en/gimp-filter-color-rotate.html) filter.
      - Try some filters on your assets first to get an dea of the end result
      - Once you found the right settings, apply the same filters to the reference color map image.
      - Save it as a new file
  - Use this new image as the color image map for the effect in GDevelop.

Try some ready-to-use color maps

- color-map-model-1.png : ![](color-map-model-1.png)
- color-map-model-2.png : ![](color-map-model-2.png)
- color-map-model-3.png : ![](color-map-model-3.png)

The **Mix** property (in percent) sets how strongly the color map is applied: a lower value blends the result with the original colors, which is useful to fade the effect in and out with events (for example, to gradually tint the screen).

!!! note

    This effect only works on 2D layers and objects.


## Reference

All effects are listed in [the effects reference page](/gdevelop5/all-features/effects/reference/).
