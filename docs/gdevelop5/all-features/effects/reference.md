# Effects Reference

Lots of different effects to be used in your game. [Read more explanations about it.](/gdevelop5/interface/scene-editor/layer-effects)



### Effect "Adjustment"

Adjust gamma, contrast, saturation, brightness, alpha or color-channel shift.

This effect is for 2D layers or objects only.

Properties of this effect are:

- **Alpha (between 0 and 1, 0 is transparent)**. Default value is `1`. For events, write: `"alpha"`.
- **Blue (between 0 and 5)**. Default value is `1`. For events, write: `"blue"`.
- **Brightness (between 0 and 5)**. Default value is `1`. For events, write: `"brightness"`.
- **Contrast (between 0 and 5)**. Default value is `1`. For events, write: `"contrast"`.
- **Gamma (between 0 and 5)**. Default value is `1`. For events, write: `"gamma"`.
- **Green (between 0 and 5)**. Default value is `1`. For events, write: `"green"`.
- **Red (between 0 and 5)**. Default value is `1`. For events, write: `"red"`.
- **Saturation (between 0 and 5)**. Default value is `1`. For events, write: `"saturation"`.

### Effect "Advanced bloom"

Applies a bloom effect.

This effect is for 2D layers or objects only.

Properties of this effect are:

- **Bloom Scale (between 0 and 2)**. Default value is `0.7`. For events, write: `"bloomScale"`.
- **Blur (between 0 and 20)**. Default value is `4`. For events, write: `"blur"`.
- **Brightness (between 0 and 2)**. Default value is `0.7`. For events, write: `"brightness"`.
- **Padding**: Padding for the visual effect area. Default value is `0`. For events, write: `"padding"`.
- **Quality (between 0 and 20)**. Default value is `7`. For events, write: `"quality"`.
- **Threshold (between 0 and 1)**. Default value is `0.5`. For events, write: `"threshold"`.

### Effect "ASCII"

Render the image with ASCII characters only.

This effect is for 2D layers or objects only.

Properties of this effect are:

- **Size (between 2 and 20)**. Default value is `8`. For events, write: `"size"`.

### Effect "Beveled edges"

Add beveled edges around the rendered image.

This effect is for 2D layers or objects only.

Properties of this effect are:

- **Distance (between 10 and 20)**. Default value is `15`. For events, write: `"distance"`.
- **Light alpha (between 0 and 1)**. Default value is `1`. For events, write: `"lightAlpha"`.
- **Light color (color of the outline)**. Default value is `255;255;255`. For events, write: `"lightColor"`.
- **Rotation (between 0 and 360)**. Default value is `1`. For events, write: `"rotation"`.
- **Shadow alpha (between 0 and 1)**. Default value is `1`. For events, write: `"shadowAlpha"`.
- **Shadow color (color of the outline)**. Default value is `0;0;0`. For events, write: `"shadowColor"`.
- **Outer strength (between 0 and 5)**. Default value is `2`. For events, write: `"thickness"`.

### Effect "Black and White"

Alter the colors to make the image black and white

This effect is for 2D layers or objects only.

Properties of this effect are:

- **Opacity (between 0 and 1)**. Default value is `1`. For events, write: `"opacity"`.

### Effect "Blending mode"

Alter the rendered image with the specified blend mode.

This effect is for 2D layers or objects only.

Properties of this effect are:

- **Mode (0: Normal, 1: Add, 2: Multiply, 3: Screen)**. Default value is `0`. For events, write: `"blendmode"`.
- **Opacity (between 0 and 1)**. Default value is `1`. For events, write: `"opacity"`.

### Effect "Blur (Gaussian, slow - prefer to use Kawase blur)"

Blur the rendered image. This is slow, so prefer to use Kawase blur in most cases.

This effect is for 2D layers or objects only.

Properties of this effect are:

- **Blur intensity**. Default value is `8`. For events, write: `"blur"`.
- **Kernel size (one of these values: 5, 7, 9, 11, 13, 15)**. Default value is `5`. For events, write: `"kernelSize"`.
- **Number of render passes. An high value will cause lags/poor performance.**. Default value is `1`. For events, write: `"quality"`.
- **Resolution**. Default value is `2`. For events, write: `"resolution"`.

### Effect "Brightness"

Make the image brighter.

This effect is for 2D layers or objects only.

Properties of this effect are:

- **Brightness (between 0 and 1)**. Default value is `0.8`. For events, write: `"brightness"`.

### Effect "Bulge Pinch"

Bulges or pinches the image in a circle.

This effect is for 2D layers or objects only.

Properties of this effect are:

- **Center X (between 0 and 1, 0.5 is image middle)**. Default value is `0`. For events, write: `"centerX"`.
- **Center Y (between 0 and 1, 0.5 is image middle)**. Default value is `0`. For events, write: `"centerY"`.
- **Radius**. Default value is `100`. For events, write: `"radius"`.
- **strength (between -1 and 1)**: -1 is strong pinch, 0 is no effect, 1 is strong bulge. Default value is `1`. For events, write: `"strength"`.

### Effect "CRT"

Apply an effect resembling old CRT monitors.

This effect is for 2D layers or objects only.

Properties of this effect are:

- **Noise Frequency**: Number of updates per second (0: no updates). Default value is `60`. For events, write: `"animationFrequency"`.
- **Interlaced Lines Speed**: 0: Pause, 0.5: Half speed, 1: Normal speed, 2: Double speed, etc.... Default value is `1`. For events, write: `"animationSpeed"`.
- **Curvature (between 0 and 10)**. Default value is `1`. For events, write: `"curvature"`.
- **Line contrast (between 0 and 1)**. Default value is `0.25`. For events, write: `"lineContrast"`.
- **Line width (between 0 and 5)**. Default value is `1`. For events, write: `"lineWidth"`.
- **Noise (between 0 and 1)**. Default value is `0.3`. For events, write: `"noise"`.
- **Noise size (between 0 and 10)**. Default value is `1`. For events, write: `"noiseSize"`.
- **Padding**: Padding for the visual effect area. Default value is `0`. For events, write: `"padding"`.
- **Show vertical lines**. Default value is `false`. For events, write: `"verticalLine"`.
- **Vignetting (between 0 and 1)**. Default value is `0.3`. For events, write: `"vignetting"`.
- **Vignetting alpha (between 0 and 1)**. Default value is `1`. For events, write: `"vignettingAlpha"`.
- **Vignetting blur (between 0 and 1)**. Default value is `0.3`. For events, write: `"vignettingBlur"`.

### Effect "Color Map"

Change the color rendered on screen.

This effect is for 2D layers or objects only.

Properties of this effect are:

- **Color map texture for the effect**: You can change colors of pixels by modifying a reference color image, containing each colors, called the *Color Map Texture*. To get started, **download** [a default color map texture here](https://wiki.gdevelop.io/gdevelop5/interface/scene-editor/layer-effects).. Default value is ``. For events, write: `"colorMapTexture"`.
- **Mix**: Mix value of the effect on the layer (in percent). Default value is `100`. For events, write: `"mix"`.
- **Disable anti-aliasing ("nearest" pixel rounding)**. Default value is `false`. For events, write: `"nearest"`.

### Effect "Color Replace"

Effect replacing a color (or similar) by another.

This effect is for 2D layers or objects only.

Properties of this effect are:

- **Epsilon (between 0 and 1)**: Tolerance/sensitivity of the floating-point comparison between colors (lower = more exact, higher = more inclusive). Default value is `0.4`. For events, write: `"epsilon"`.
- **New Color**: The new color. Default value is `255;255;255`. For events, write: `"newColor"`.
- **Original Color**: The color that will be changed. Default value is `252;3;65`. For events, write: `"originalColor"`.

### Effect "Displacement"

Uses the pixel values from the specified texture (called the displacement map) to perform a displacement of an object.

This effect is for 2D layers or objects only.

Properties of this effect are:

- **Displacement map texture**: Displacement map texture for the effect. To get started, **download** [a default displacement map texture here](https://wiki.gdevelop.io/gdevelop5/interface/scene-editor/layer-effects).. Default value is ``. For events, write: `"displacementMapTexture"`.
- **Scale on X axis**. Default value is `20`. For events, write: `"scaleX"`.
- **Scale on Y axis**. Default value is `20`. For events, write: `"scaleY"`.

### Effect "Dot"

Applies a dotscreen effect making objects appear to be made out of black and white halftone dots like an old printer.

This effect is for 2D layers or objects only.

Properties of this effect are:

- **Angle (between 0 and 5)**: The radius of the effect. Default value is `5`. For events, write: `"angle"`.
- **Scale (between 0.3 and 1)**: The scale of the effect. Default value is `1`. For events, write: `"scale"`.

### Effect "Drop shadow"

Add a shadow around the rendered image.

This effect is for 2D layers or objects only.

Properties of this effect are:

- **Alpha (between 0 and 1)**. Default value is `1`. For events, write: `"alpha"`.
- **Blur (between 0 and 20)**. Default value is `2`. For events, write: `"blur"`.
- **Color of the shadow**. Default value is `255;255;255`. For events, write: `"color"`.
- **Distance (between 0 and 50)**. Default value is `1`. For events, write: `"distance"`.
- **Padding**: Padding for the visual effect area. Default value is `0`. For events, write: `"padding"`.
- **Quality (between 1 and 20)**. Default value is `3`. For events, write: `"quality"`.
- **Rotation (between 0 and 360)**. Default value is `0`. For events, write: `"rotation"`.
- **Shadow only (shows only the shadow when enabled)**. Default value is `false`. For events, write: `"shadowOnly"`.

### Effect "Glitch"

Applies a glitch effect to an object.

This effect is for 2D layers or objects only.

Properties of this effect are:

- **Animation Frequency**: Number of updates per second (0: no updates). Default value is `60`. For events, write: `"animationFrequency"`.
- **Average**: Divide the bands roughly based on equal amounts. Default value is `false`. For events, write: `"average"`.
- **Blue X offset (between -50 and 50)**. Default value is `10`. For events, write: `"blueX"`.
- **Blue Y offset (between -50 and 50)**. Default value is `-4`. For events, write: `"blueY"`.
- **Direction (between -180 and 180)**: The angle in degree of the offset of slices. Default value is `0`. For events, write: `"direction"`.
- **Fill Mode (between 0 and 4)**: The fill mode of the space after the offset.(0: TRANSPARENT, 1: ORIGINAL, 2: LOOP, 3: CLAMP, 4: MIRROR). Default value is `0`. For events, write: `"fillMode"`.
- **Green X offset (between -50 and 50)**. Default value is `10`. For events, write: `"greenX"`.
- **Green Y offset (between -50 and 50)**. Default value is `-4`. For events, write: `"greenY"`.
- **Min Size**: Minimum size of individual slice. Default value is `8`. For events, write: `"minSize"`.
- **Offset (between -400 and 400)**: The maximum offset amount of slices. Default value is `100`. For events, write: `"offset"`.
- **Red X offset (between -50 and 50)**. Default value is `2`. For events, write: `"redX"`.
- **Red Y offset (between -50 and 50)**. Default value is `2`. For events, write: `"redY"`.
- **Sample Size**: The resolution of the displacement image. Default value is `512`. For events, write: `"sampleSize"`.
- **Slices (between 2 and infinite)**: The maximum number of slices. Default value is `5`. For events, write: `"slices"`.

### Effect "Glow"

Add a glow effect around the rendered image.

This effect is for 2D layers or objects only.

Properties of this effect are:

- **Color (color of the outline)**. Default value is `255;255;255`. For events, write: `"color"`.
- **Distance (between 10 and 20)**. Default value is `15`. For events, write: `"distance"`.
- **Inner strength (between 0 and 20)**. Default value is `1`. For events, write: `"innerStrength"`.
- **Outer strength (between 0 and 20)**. Default value is `2`. For events, write: `"outerStrength"`.

### Effect "Godray"

Apply and animate atmospheric light rays.

This effect is for 2D layers or objects only.

Properties of this effect are:

- **Angle (between -60 and 60)**. Default value is `30`. For events, write: `"angle"`.
- **Animation Speed**: 0: Pause, 0.5: Half speed, 1: Normal speed, 2: Double speed, etc.... Default value is `1`. For events, write: `"animationSpeed"`.
- **Gain (between 0 and 1)**. Default value is `0.6`. For events, write: `"gain"`.
- **Lacunarity (between 0 and 5)**. Default value is `2.75`. For events, write: `"lacunarity"`.
- **Light (between 0 and 60)**. Default value is `30`. For events, write: `"light"`.
- **Padding**: Padding for the visual effect area. Default value is `0`. For events, write: `"padding"`.
- **Parallel (parallel rays)**. Default value is `true`. For events, write: `"parallel"`.
- **Center X (between 100 and 1000)**. Default value is `100`. For events, write: `"x"`.
- **Center Y (between -1000 and 100)**. Default value is `100`. For events, write: `"y"`.

### Effect "HSL Adjustment"

Adjust hue, saturation and lightness.

This effect is for 2D layers or objects only.

Properties of this effect are:

- **Alpha (between 0 and 1, 0 is transparent)**. Default value is `1`. For events, write: `"alpha"`.
- **Colorize from the grayscale image**. Default value is `false`. For events, write: `"colorize"`.
- **Hue in degrees (between -180 and 180)**. Default value is `0`. For events, write: `"hue"`.
- **Lightness (between -1 and 1)**. Default value is `0`. For events, write: `"lightness"`.
- **Saturation (between -1 and 1)**. Default value is `0`. For events, write: `"saturation"`.

### Effect "Blur (Kawase, fast)"

Blur the rendered image, with much better performance than Gaussian blur.

This effect is for 2D layers or objects only.

Properties of this effect are:

- **Blur (between 0 and 20)**. Default value is `0.5`. For events, write: `"blur"`.
- **Padding**: Padding for the visual effect area. Default value is `0`. For events, write: `"padding"`.
- **Pixelize X (between 0 and 10)**. Default value is `1`. For events, write: `"pixelizeX"`.
- **Pixelize Y (between 0 and 10)**. Default value is `1`. For events, write: `"pixelizeY"`.
- **Quality (between 1 and 20)**. Default value is `3`. For events, write: `"quality"`.

### Effect "Light Night"

Alter the colors to simulate night.

This effect is for 2D layers or objects only.

Properties of this effect are:

- **Opacity (between 0 and 1)**. Default value is `1`. For events, write: `"opacity"`.

### Effect "Motion Blur"

Blur the rendered image to give a feeling of speed.

This effect is for 2D layers or objects only.

Properties of this effect are:

- **Kernel size (odd number between 3 and 25)**: Quality of the blur.. Default value is `5`. For events, write: `"kernelSize"`.
- **Offset**. Default value is `0`. For events, write: `"offset"`.
- **Velocity on X axis**. Default value is `0`. For events, write: `"velocityX"`.
- **Velocity on Y axis**. Default value is `0`. For events, write: `"velocityY"`.

### Effect "Dark Night"

Alter the colors to simulate a dark night.

This effect is for 2D layers or objects only.

Properties of this effect are:

- **Intensity (between 0 and 1)**. Default value is `0.5`. For events, write: `"intensity"`.
- **Opacity (between 0 and 1)**. Default value is `0.5`. For events, write: `"opacity"`.

### Effect "Noise"

Add some noise on the rendered image.

This effect is for 2D layers or objects only.

Properties of this effect are:

- **Noise intensity (between 0 and 1)**. Default value is `0.5`. For events, write: `"noise"`.

### Effect "Old Film"

Add a Old film effect around the rendered image.

This effect is for 2D layers or objects only.

Properties of this effect are:

- **Animation Frequency**: Number of updates per second (0: no updates). Default value is `60`. For events, write: `"animationFrequency"`.
- **Noise (between 0 and 1)**: Opacity/intensity of the noise effect. Default value is `0.3`. For events, write: `"noise"`.
- **Noise Size (between 0 and 10)**: The size of the noise particles. Default value is `1`. For events, write: `"noiseSize"`.
- **Scratch (between -1 and 1)**: How often scratches appear. Default value is `0.5`. For events, write: `"scratch"`.
- **Scratch Density (between 0 and 1)**: The density of the number of scratches. Default value is `0.3`. For events, write: `"scratchDensity"`.
- **Scratch Width (between 1 and 20)**: The width of the scratches. Default value is `1.0`. For events, write: `"scratchWidth"`.
- **Sepia (between 0 and 1)**: The amount of saturation of sepia effect, a value of 1 is more saturation and closer to 0 is less, and a value of 0 produces no sepia effect. Default value is `0.3`. For events, write: `"sepia"`.
- **Vignetting (between 0 and 1)**: The radius of the vignette effect. Default value is `0.3`. For events, write: `"vignetting"`.
- **Vignetting Alpha (between 0 and 1)**. Default value is `1.0`. For events, write: `"vignettingAlpha"`.
- **Vignetting Blur (between 0 and 1)**. Default value is `0.3`. For events, write: `"vignettingBlur"`.

### Effect "Outline"

Draws an outline around the rendered image.

This effect is for 2D layers or objects only.

Properties of this effect are:

- **Color of the outline**. Default value is `255;255;255`. For events, write: `"color"`.
- **Padding**: Padding for the visual effect area. Default value is `0`. For events, write: `"padding"`.
- **Thickness (between 0 and 20)**. Default value is `2`. For events, write: `"thickness"`.

### Effect "Pixelate"

Applies a pixelate effect, making display objects appear 'blocky'.

This effect is for 2D layers or objects only.

Properties of this effect are:

- **Size**: Size of the pixels (10 pixels by default). Default value is `10`. For events, write: `"size"`.

### Effect "RGB split (chromatic aberration)"

Applies a RGB split effect also known as chromatic aberration.

This effect is for 2D layers or objects only.

Properties of this effect are:

- **Blue X offset (between -20 and 20)**. Default value is `0`. For events, write: `"blueX"`.
- **Blue Y offset (between -20 and 20)**. Default value is `10`. For events, write: `"blueY"`.
- **Green X offset (between -20 and 20)**. Default value is `0`. For events, write: `"greenX"`.
- **Green Y offset (between -20 and 20)**. Default value is `0`. For events, write: `"greenY"`.
- **Red X offset (between -20 and 20)**. Default value is `-10`. For events, write: `"redX"`.
- **Red Y offset (between -20 and 20)**. Default value is `1`. For events, write: `"redY"`.

### Effect "Radial Blur"

Applies a Motion blur to an object.

This effect is for 2D layers only.

Properties of this effect are:

- **Angle (between -180 and 180)**: The angle in degree of the motion for blur effect. Default value is `0`. For events, write: `"angle"`.
- **Center X (between 0 and 1, 0.5 is image middle)**. Default value is `0.5`. For events, write: `"centerX"`.
- **Center Y (between 0 and 1, 0.5 is image middle)**. Default value is `0.5`. For events, write: `"centerY"`.
- **Kernel Size (between 3 and 25)**: The kernel size of the blur filter (Odd number). Default value is `5`. For events, write: `"kernelSize"`.
- **Padding**: Padding for the visual effect area. Default value is `0`. For events, write: `"padding"`.
- **Radius**: The maximum size of the blur radius, -1 is infinite. Default value is `-1`. For events, write: `"radius"`.

### Effect "Reflection"

Applies a reflection effect to simulate the reflection on water with waves.

This effect is for 2D layers or objects only.

Properties of this effect are:

- **Alpha ending**: Ending alpha (1 by default). Default value is `1`. For events, write: `"alphaEnding"`.
- **Alpha start**: Starting alpha (1 by default). Default value is `1`. For events, write: `"alphaStart"`.
- **Amplitude ending**: Ending amplitude of waves (20 by default). Default value is `20`. For events, write: `"amplitudeEnding"`.
- **Amplitude start**: Starting amplitude of waves (0 by default). Default value is `0`. For events, write: `"amplitudeStart"`.
- **Animation Speed**: 0: Pause, 0.5: Half speed, 1: Normal speed, 2: Double speed, etc.... Default value is `1`. For events, write: `"animationSpeed"`.
- **Vertical position of the reflection point**: Default is 50% (middle). Smaller numbers produce a larger reflection, larger numbers produce a smaller reflection.. Default value is `0.5`. For events, write: `"boundary"`.
- **Reflect the image on the waves**. Default value is `true`. For events, write: `"mirror"`.
- **Wave length ending**: Ending wave length (100 by default). Default value is `100`. For events, write: `"waveLengthEnding"`.
- **Wave length start**: Starting wave length (30 by default). Default value is `30`. For events, write: `"waveLengthStart"`.

### Effect "Sepia"

Alter the colors to sepia.

This effect is for 2D layers or objects only.

Properties of this effect are:

- **Opacity (between 0 and 1)**. Default value is `1`. For events, write: `"opacity"`.

### Effect "Shockwave"

Deform the image the way a drop deforms a water surface.

This effect is for 2D layers or objects only.

Properties of this effect are:

- **Amplitude**. Default value is `50`. For events, write: `"amplitude"`.
- **Brightness**. Default value is `1`. For events, write: `"brightness"`.
- **Center on X axis**. Default value is `0.5`. For events, write: `"centerX"`.
- **Center on Y axis**: (0,0) is the top-left and (1,1) is the bottom right.. Default value is `0.5`. For events, write: `"centerY"`.
- **Maximum radius (0 for infinity)**. Default value is `0`. For events, write: `"radius"`.
- **Spreading speed (in pixels per second)**. Default value is `500`. For events, write: `"speed"`.
- **Elapsed time**: It can be set back to 0 to play the shockwave animation again.. Default value is `0`. For events, write: `"time"`.
- **Wavelength**. Default value is `200`. For events, write: `"wavelength"`.

### Effect "Tilt shift"

Render a tilt-shift-like camera effect.

This effect is for 2D layers or objects only.

Properties of this effect are:

- **Blur (between 0 and 200)**. Default value is `30`. For events, write: `"blur"`.
- **Gradient blur (between 0 and 2000)**. Default value is `1000`. For events, write: `"gradientBlur"`.

### Effect "Twist"

Applies a twist effect making objects appear twisted in the given direction.

This effect is for 2D layers only.

Properties of this effect are:

- **Angle (between -10 and 10)**: The angle in degree of the twist. Default value is `4`. For events, write: `"angle"`.
- **Offset X (between 0 and 1, 0.5 is image middle)**. Default value is `0.5`. For events, write: `"offsetX"`.
- **Offset Y (between 0 and 1, 0.5 is image middle)**. Default value is `0.5`. For events, write: `"offsetY"`.
- **Padding**: Padding for the visual effect area. Default value is `20`. For events, write: `"padding"`.
- **Radius**: The radius of the twist. Default value is `200`. For events, write: `"radius"`.

### Effect "Zoom blur"

Applies a Zoom blur.

This effect is for 2D layers only.

Properties of this effect are:

- **Center X (between 0 and 1, 0.5 is image middle)**. Default value is `0.5`. For events, write: `"centerX"`.
- **Center Y (between 0 and 1, 0.5 is image middle)**. Default value is `0.5`. For events, write: `"centerY"`.
- **Inner radius**. Default value is `200`. For events, write: `"innerRadius"`.
- **Padding**: Padding for the visual effect area. Default value is `0`. For events, write: `"padding"`.
- **strength (between 0 and 5)**. Default value is `0.3`. For events, write: `"strength"`.



---

The Effects extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **Effects** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).