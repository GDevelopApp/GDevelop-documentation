#  CRT effect

Applies a CRT effect, simulating an old cathode-ray tube television.

![](crt-effect.png)

## Parameters

The effect combines several artifacts that you can tune independently:

- **Scan lines**: *Line width* and *Line contrast* control the horizontal scan lines. Enable *Show vertical lines* to draw them vertically instead.
- **Noise**: *Noise* sets the amount of static, and *Noise size* how coarse it is.
- **Curvature**: bends the image outward to mimic a curved screen. Set it to `0` for a flat picture.
- **Vignetting**: darkens the edges of the screen. Use *Vignetting alpha* and *Vignetting blur* to soften the darkened border.

The animation is driven by two properties: *Interlaced Lines Speed* (how fast the scan lines move, `0` to freeze them) and *Noise Frequency* (how many times per second the static is refreshed).


## Reference

All effects are listed in [the effects reference page](/gdevelop5/all-features/effects/reference/).
