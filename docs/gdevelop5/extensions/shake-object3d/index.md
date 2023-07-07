# 3D object shake

<img src="https://resources.gdevelop-app.com/assets/Icons/vector-difference-ab.svg" class="extension-icon"></img>
Shake 3D objects.

**Authors and contributors** to this community extension: [D8H](https://gd.games/D8H).

---

Shake 3D objects with translation and rotation.

The 3D racing game example uses this extension ([open the project online](https://editor.gdevelop.io/?project=example://3d-racing-game)).

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Create a noise generator**  
Create a noise generator with default settings (frequency = 1,  octaves = 1, persistence = 0.5, lacunarity = 2).

**Delete a noise generator**  
Delete a noise generator and loose its settings.

**Delete all noise generators**  
Delete all noise generators and loose their settings.

**Noise base frequency**  
Change the base frequency used for noise generation. A lower frequency will zoom in the noise.

**Noise lacunarity**  
Change the lacunarity used for noise generation. At its default value "2", it doubles the frequency at each octave.

**Noise looping period on X**  
Change the looping period on X used for noise generation. The noise will wrap-around on X.

**Noise looping period on Y**  
Change the looping period on Y used for noise generation. The noise will wrap-around on Y.

**Noise octaves**  
Change the number of octaves used for noise generation. It can be seen as layers of noise with different zoom.

**Noise persistence**  
Change the persistence used for noise generation. At its default value "0.5", it halves the noise amplitude at each octave.

**Noise seed**  
The seed is a number used to generate the random noise. Setting the same seed will result in the same random noise generation. It's for example useful to generate the same world, by saving this seed value and reusing it later to generate again a world.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `ShakeObject3D::Frequency(string)` | The base frequency used for noise generation. ||
| | _string_ | Generator name |
| `ShakeObject3D::Lacunarity(string)` | The lacunarity used for noise generation. ||
| | _string_ | Generator name |
| `ShakeObject3D::Noise2d(string, number, number)` | Generate a number from 2 dimensional simplex noise. ||
| | _string_ | Generator name |
| | _number_ | X coordinate |
| | _number_ | Y coordinate |
| `ShakeObject3D::Noise3d(string, number, number, number)` | Generate a number from 3 dimensional simplex noise. ||
| | _string_ | Generator name |
| | _number_ | X coordinate |
| | _number_ | Y coordinate |
| | _number_ | Z coordinate |
| `ShakeObject3D::Noise4d(string, number, number, number, number)` | Generate a number from 4 dimensional simplex noise. ||
| | _string_ | Generator name |
| | _number_ | X coordinate |
| | _number_ | Y coordinate |
| | _number_ | Z coordinate |
| | _number_ | W coordinate |
| `ShakeObject3D::Octaves(string)` | The number of octaves used for noise generation. ||
| | _string_ | Generator name |
| `ShakeObject3D::Persistence(string)` | The persistence used for noise generation. ||
| | _string_ | Generator name |
| `ShakeObject3D::Seed()` | The seed used for noise generation. ||

## Shake 3D cube 

Shake 3D cubes with translation and rotation. 

### Behavior actions

**Shaking frequency**  
Change the shaking frequency of the object.

**DeltaAngleX property**  
Change the property value for the deltaAngleX.

**DeltaAngleY property**  
Change the property value for the deltaAngleY.

**DeltaAngleZ property**  
Change the property value for the deltaAngleZ.

**DeltaX property**  
Change the property value for the deltaX.

**DeltaY property**  
Change the property value for the deltaY.

**DeltaZ property**  
Change the property value for the deltaZ.

**Duration property**  
Change the property value for the duration.

**Frequency property**  
Change the property value for the frequency.

**NoiseTime property**  
Change the property value for the noiseTime.

**Rotation amplitude around X axis property**  
Change the property value for the rotation amplitude around X axis.

**Rotation amplitude around Y axis property**  
Change the property value for the rotation amplitude around Y axis.

**Rotation amplitude around Z axis property**  
Change the property value for the rotation amplitude around Z axis.

**StartEasingDuration property**  
Change the property value for the startEasingDuration.

**StopEasingDuration property**  
Change the property value for the stopEasingDuration.

**Time property**  
Change the property value for the time.

**Translation amplitude on X axis property**  
Change the property value for the translation amplitude on X axis.

**Translation amplitude on Y axis property**  
Change the property value for the translation amplitude on Y axis.

**Translation amplitude on Z axis property**  
Change the property value for the translation amplitude on Z axis.

**EasingFactor shared property**  
Change the property value for the easingFactor.

**Shake**  
Shake the camera on layers chosen with configuration actions.

**Start shaking**  
Start shaking the camera indefinitely.

**Stop shaking**  
Stop shaking the camera.

### Behavior conditions

**Shaking frequency**  
Compare the shaking frequency of the object.

**Is shaking**  
Check if the object is shaking.

**DeltaAngleX property**  
Compare the property value for the deltaAngleX.

**DeltaAngleY property**  
Compare the property value for the deltaAngleY.

**DeltaAngleZ property**  
Compare the property value for the deltaAngleZ.

**DeltaX property**  
Compare the property value for the deltaX.

**DeltaY property**  
Compare the property value for the deltaY.

**DeltaZ property**  
Compare the property value for the deltaZ.

**Duration property**  
Compare the property value for the duration.

**Frequency property**  
Compare the property value for the frequency.

**NoiseTime property**  
Compare the property value for the noiseTime.

**Rotation amplitude around X axis property**  
Compare the property value for the rotation amplitude around X axis.

**Rotation amplitude around Y axis property**  
Compare the property value for the rotation amplitude around Y axis.

**Rotation amplitude around Z axis property**  
Compare the property value for the rotation amplitude around Z axis.

**StartEasingDuration property**  
Compare the property value for the startEasingDuration.

**StopEasingDuration property**  
Compare the property value for the stopEasingDuration.

**Time property**  
Compare the property value for the time.

**Translation amplitude on X axis property**  
Compare the property value for the translation amplitude on X axis.

**Translation amplitude on Y axis property**  
Compare the property value for the translation amplitude on Y axis.

**Translation amplitude on Z axis property**  
Compare the property value for the translation amplitude on Z axis.

**EasingFactor shared property**  
Compare the property value for the easingFactor.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.ShakeCube3D::Frequency()` | Return the shaking frequency of the object. ||
| `Object.ShakeCube3D::PropertyDeltaAngleX()` | Return the property value for the deltaAngleX. ||
| `Object.ShakeCube3D::PropertyDeltaAngleY()` | Return the property value for the deltaAngleY. ||
| `Object.ShakeCube3D::PropertyDeltaAngleZ()` | Return the property value for the deltaAngleZ. ||
| `Object.ShakeCube3D::PropertyDeltaX()` | Return the property value for the deltaX. ||
| `Object.ShakeCube3D::PropertyDeltaY()` | Return the property value for the deltaY. ||
| `Object.ShakeCube3D::PropertyDeltaZ()` | Return the property value for the deltaZ. ||
| `Object.ShakeCube3D::PropertyDuration()` | Return the property value for the duration. ||
| `Object.ShakeCube3D::PropertyFrequency()` | Return the property value for the frequency. ||
| `Object.ShakeCube3D::PropertyNoiseTime()` | Return the property value for the noiseTime. ||
| `Object.ShakeCube3D::PropertyRotationAmplitudeX()` | Return the property value for the rotation amplitude around X axis. ||
| `Object.ShakeCube3D::PropertyRotationAmplitudeY()` | Return the property value for the rotation amplitude around Y axis. ||
| `Object.ShakeCube3D::PropertyRotationAmplitudeZ()` | Return the property value for the rotation amplitude around Z axis. ||
| `Object.ShakeCube3D::PropertyStartEasingDuration()` | Return the property value for the startEasingDuration. ||
| `Object.ShakeCube3D::PropertyStopEasingDuration()` | Return the property value for the stopEasingDuration. ||
| `Object.ShakeCube3D::PropertyTime()` | Return the property value for the time. ||
| `Object.ShakeCube3D::PropertyTranslationAmplitudeX()` | Return the property value for the translation amplitude on X axis. ||
| `Object.ShakeCube3D::PropertyTranslationAmplitudeY()` | Return the property value for the translation amplitude on Y axis. ||
| `Object.ShakeCube3D::PropertyTranslationAmplitudeZ()` | Return the property value for the translation amplitude on Z axis. ||
| `Object.ShakeCube3D::SharedPropertyEasingFactor()` | Return the property value for the easingFactor. ||

## Shake 3D model 

Shake 3D models with translation and rotation. 

### Behavior actions

**Shaking frequency**  
Change the shaking frequency of the object.

**DeltaAngleX property**  
Change the property value for the deltaAngleX.

**DeltaAngleY property**  
Change the property value for the deltaAngleY.

**DeltaAngleZ property**  
Change the property value for the deltaAngleZ.

**DeltaX property**  
Change the property value for the deltaX.

**DeltaY property**  
Change the property value for the deltaY.

**DeltaZ property**  
Change the property value for the deltaZ.

**Duration property**  
Change the property value for the duration.

**Frequency property**  
Change the property value for the frequency.

**NoiseTime property**  
Change the property value for the noiseTime.

**Rotation amplitude around X axis property**  
Change the property value for the rotation amplitude around X axis.

**Rotation amplitude around Y axis property**  
Change the property value for the rotation amplitude around Y axis.

**Rotation amplitude around Z axis property**  
Change the property value for the rotation amplitude around Z axis.

**StartEasingDuration property**  
Change the property value for the startEasingDuration.

**StopEasingDuration property**  
Change the property value for the stopEasingDuration.

**Time property**  
Change the property value for the time.

**Translation amplitude on X axis property**  
Change the property value for the translation amplitude on X axis.

**Translation amplitude on Y axis property**  
Change the property value for the translation amplitude on Y axis.

**Translation amplitude on Z axis property**  
Change the property value for the translation amplitude on Z axis.

**EasingFactor shared property**  
Change the property value for the easingFactor.

**Shake**  
Shake the camera on layers chosen with configuration actions.

**Start shaking**  
Start shaking the camera indefinitely.

**Stop shaking**  
Stop shaking the camera.

### Behavior conditions

**Shaking frequency**  
Compare the shaking frequency of the object.

**Is shaking**  
Check if the object is shaking.

**DeltaAngleX property**  
Compare the property value for the deltaAngleX.

**DeltaAngleY property**  
Compare the property value for the deltaAngleY.

**DeltaAngleZ property**  
Compare the property value for the deltaAngleZ.

**DeltaX property**  
Compare the property value for the deltaX.

**DeltaY property**  
Compare the property value for the deltaY.

**DeltaZ property**  
Compare the property value for the deltaZ.

**Duration property**  
Compare the property value for the duration.

**Frequency property**  
Compare the property value for the frequency.

**NoiseTime property**  
Compare the property value for the noiseTime.

**Rotation amplitude around X axis property**  
Compare the property value for the rotation amplitude around X axis.

**Rotation amplitude around Y axis property**  
Compare the property value for the rotation amplitude around Y axis.

**Rotation amplitude around Z axis property**  
Compare the property value for the rotation amplitude around Z axis.

**StartEasingDuration property**  
Compare the property value for the startEasingDuration.

**StopEasingDuration property**  
Compare the property value for the stopEasingDuration.

**Time property**  
Compare the property value for the time.

**Translation amplitude on X axis property**  
Compare the property value for the translation amplitude on X axis.

**Translation amplitude on Y axis property**  
Compare the property value for the translation amplitude on Y axis.

**Translation amplitude on Z axis property**  
Compare the property value for the translation amplitude on Z axis.

**EasingFactor shared property**  
Compare the property value for the easingFactor.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.ShakeModel3D::Frequency()` | Return the shaking frequency of the object. ||
| `Object.ShakeModel3D::PropertyDeltaAngleX()` | Return the property value for the deltaAngleX. ||
| `Object.ShakeModel3D::PropertyDeltaAngleY()` | Return the property value for the deltaAngleY. ||
| `Object.ShakeModel3D::PropertyDeltaAngleZ()` | Return the property value for the deltaAngleZ. ||
| `Object.ShakeModel3D::PropertyDeltaX()` | Return the property value for the deltaX. ||
| `Object.ShakeModel3D::PropertyDeltaY()` | Return the property value for the deltaY. ||
| `Object.ShakeModel3D::PropertyDeltaZ()` | Return the property value for the deltaZ. ||
| `Object.ShakeModel3D::PropertyDuration()` | Return the property value for the duration. ||
| `Object.ShakeModel3D::PropertyFrequency()` | Return the property value for the frequency. ||
| `Object.ShakeModel3D::PropertyNoiseTime()` | Return the property value for the noiseTime. ||
| `Object.ShakeModel3D::PropertyRotationAmplitudeX()` | Return the property value for the rotation amplitude around X axis. ||
| `Object.ShakeModel3D::PropertyRotationAmplitudeY()` | Return the property value for the rotation amplitude around Y axis. ||
| `Object.ShakeModel3D::PropertyRotationAmplitudeZ()` | Return the property value for the rotation amplitude around Z axis. ||
| `Object.ShakeModel3D::PropertyStartEasingDuration()` | Return the property value for the startEasingDuration. ||
| `Object.ShakeModel3D::PropertyStopEasingDuration()` | Return the property value for the stopEasingDuration. ||
| `Object.ShakeModel3D::PropertyTime()` | Return the property value for the time. ||
| `Object.ShakeModel3D::PropertyTranslationAmplitudeX()` | Return the property value for the translation amplitude on X axis. ||
| `Object.ShakeModel3D::PropertyTranslationAmplitudeY()` | Return the property value for the translation amplitude on Y axis. ||
| `Object.ShakeModel3D::PropertyTranslationAmplitudeZ()` | Return the property value for the translation amplitude on Z axis. ||
| `Object.ShakeModel3D::SharedPropertyEasingFactor()` | Return the property value for the easingFactor. ||

---

*This page is an auto-generated reference page about the **3D object shake** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).