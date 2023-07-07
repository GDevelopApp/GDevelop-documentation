# Camera shake

<img src="https://resources.gdevelop-app.com/assets/Icons/vector-difference-ab.svg" class="extension-icon"></img>
Shake layer cameras.

**Authors and contributors** to this community extension: [VictrisGames](https://gd.games/VictrisGames), [D8H](https://gd.games/D8H), [fuzzy](https://gd.games/fuzzy).

---

Shake layer cameras with translation, rotation and zoom.


- Short shaking can be used to give impact (explosion, hit)
- Shaking can go indefinitely to set an ambiance (engine vibration, earthquake, pulsing)
- Low frequency shaking allows to simulate slow moving objects (ship rocking back and forth)

Release notes:

- Version 3.0.0
    - No adaptation of the game events is needed.
    - It fixes an issue when used with scrolling, the amplitude will feel bigger in this case.
    - The shaking relies on noise which could feel a bit different.
    - This extension can no longer do impulses. For this, another extension "Camera impulse" can be used.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Shake camera (deprecated)**  
Shake the camera on the specified layer, using one or more ways to shake (position, angle, zoom). This action is deprecated. Please use the other one with the same name.

**Create a noise generator**  
Create a noise generator with default settings (frequency = 1,  octaves = 1, persistence = 0.5, lacunarity = 2).

**Delete a noise generator**  
Delete a noise generator and loose its settings.

**Delete all noise generators**  
Delete all noise generators and loose their settings.

**Default rotation amplitude**  
Change the default rotation amplitude of the shaking (in degrees).

**Default shaking frequency**  
Change the default number of back and forth per seconds.

**Default translation amplitude**  
Change the default translation amplitude of the shaking (in pixels).

**Default zoom amplitude**  
Change the default zoom factor amplitude of the shaking. The shaking will zoom and unzoom by this factor (for instance 1.0625 is a valid value).

**Noise base frequency**  
Change the base frequency used for noise generation. A lower frequency will zoom in the noise.

**Noise lacunarity**  
Change the lacunarity used for noise generation. At its default value "2", it doubles the frequency at each octave.

**Layer rotation amplitude**  
Change the rotation amplitude of the shaking (in degrees).

**Shakable layer**  
Mark a layer as shakable.

**Layer shaking frequency**  
Change the number of back and forth per seconds.

**Layer translation amplitude**  
Change the translation amplitude of the shaking (in pixels).

**Layer zoom amplitude**  
Change the zoom factor amplitude of the shaking. The shaking will zoom and unzoom by this factor (for instance 1.0625 is a valid value).

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

**Shake camera**  
Shake the camera on layers chosen with configuration actions.

**Start camera shaking**  
Start shaking the camera indefinitely.

**Stop camera shaking**  
Stop shaking the camera.

## Conditions

**Camera is shaking**  
Check if the camera is shaking.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `CameraShake::Frequency(string)` | The base frequency used for noise generation. ||
| | _string_ | Generator name |
| `CameraShake::Lacunarity(string)` | The lacunarity used for noise generation. ||
| | _string_ | Generator name |
| `CameraShake::Noise2d(string, number, number)` | Generate a number from 2 dimensional simplex noise. ||
| | _string_ | Generator name |
| | _number_ | X coordinate |
| | _number_ | Y coordinate |
| `CameraShake::Noise3d(string, number, number, number)` | Generate a number from 3 dimensional simplex noise. ||
| | _string_ | Generator name |
| | _number_ | X coordinate |
| | _number_ | Y coordinate |
| | _number_ | Z coordinate |
| `CameraShake::Noise4d(string, number, number, number, number)` | Generate a number from 4 dimensional simplex noise. ||
| | _string_ | Generator name |
| | _number_ | X coordinate |
| | _number_ | Y coordinate |
| | _number_ | Z coordinate |
| | _number_ | W coordinate |
| `CameraShake::Octaves(string)` | The number of octaves used for noise generation. ||
| | _string_ | Generator name |
| `CameraShake::Persistence(string)` | The persistence used for noise generation. ||
| | _string_ | Generator name |
| `CameraShake::Seed()` | The seed used for noise generation. ||

---

*This page is an auto-generated reference page about the **Camera shake** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).