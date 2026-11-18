#  RGB split effect

Separate each component's RGB(red, green, blue) colors and display them on the screen with an offset:

![](rgb-effect.png)

Each color channel has its own X and Y offset (**Red X/Y**, **Green X/Y**, **Blue X/Y**), measured in pixels. The larger the offsets, the more the colors fringe apart. This is often used to simulate a worn screen, a glitch, or a damage/impact feedback effect — animating the offsets with events and then returning them to 0 gives a quick flash of distortion.

!!! note

    This effect only works on 2D objects and layers.


## Reference

All effects are listed in [the effects reference page](/gdevelop5/all-features/effects/reference/).
