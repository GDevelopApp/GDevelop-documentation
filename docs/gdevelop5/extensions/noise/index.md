# Noise generator

<img src="https://resources.gdevelop-app.com/assets/Icons/sprinkler.svg" class="extension-icon"></img>
Generate noise values for procedural generation.

**Authors and contributors** to this experimental extension: [Add00](https://gd.games/Add00), [VictrisGames](https://gd.games/VictrisGames), [D8H](https://gd.games/D8H).

---

Noise can be useful for many procedural generation cases such as:

- Terrain, top down or side view ([open the project online](https://editor.gdevelop.io/?project=example://marching-squares-island-generator))
- Object positioning (tree, stars...)
- Curves (roads, rivers...)
- Textures (fog, milky way...)
- Screen shake
- Many other things

This extension contains expressions to generate Simplex noise values in 1, 2, 3 and 4 dimensions. A *"seed"* allows to generate the same world again later on instead of having to save the whole generated world.

Version 2.0.0 compatibility break:

- Seeds doesn't give the same result as with version 1.x.x

[Read more...](/gdevelop5/tutorials/procedural-generation)

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Create a noise generator**  
Create a noise generator with default settings (frequency = 1,  octaves = 1, persistence = 0.5, lacunarity = 2).

??? quote "See parameters"

    - Parameter 1 (string): Generator name

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

**Delete a noise generator**  
Delete a noise generators and loose its settings.

??? quote "See parameters"

    - Parameter 1 (string): Generator name

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

**Delete all noise generators**  
Delete all noise generators and loose their settings.

??? quote "See parameters"



    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.

**Noise base frequency**  
Change the base frequency used for noise generation. A lower frequency will zoom in the noise.

??? quote "See parameters"

    - Parameter 1 (🔢 Number): Frequency
    - Parameter 2 (string): Generator name

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

**Noise lacunarity**  
Change the lacunarity used for noise generation. At its default value "2", it doubles the frequency at each octave.

??? quote "See parameters"

    - Parameter 1 (🔢 Number): Lacunarity
    - Parameter 2 (string): Generator name

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

**Noise looping period on X**  
Change the looping period on X used for noise generation. The noise will wrap-around on X.

??? quote "See parameters"

    - Parameter 1 (🔢 Number): Looping period on X
    - Parameter 2 (string): Generator name

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

**Noise looping period on Y**  
Change the looping period on Y used for noise generation. The noise will wrap-around on Y.

??? quote "See parameters"

    - Parameter 1 (🔢 Number): Looping period on Y
    - Parameter 2 (string): Generator name

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

**Noise octaves**  
Change the number of octaves used for noise generation. It can be seen as layers of noise with different zoom.

??? quote "See parameters"

    - Parameter 1 (🔢 Number): Octaves
    - Parameter 2 (string): Generator name

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

**Noise persistence**  
Change the persistence used for noise generation. At its default value "0.5", it halves the noise amplitude at each octave.

??? quote "See parameters"

    - Parameter 1 (🔢 Number): Persistence
    - Parameter 2 (string): Generator name

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

**Noise seed**  
The seed is a number used to generate the random noise. Setting the same seed will result in the same random noise generation. It's for example useful to generate the same world, by saving this seed value and reusing it later to generate again a world.

??? quote "See parameters"

    - Parameter 1 (🔢 Number): Seed
      15 digits numbers maximum

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `Noise::Frequency(string)` | The base frequency used for noise generation. ||
| | _string_ | Generator name |
| `Noise::Lacunarity(string)` | The lacunarity used for noise generation. ||
| | _string_ | Generator name |
| `Noise::Noise1d(string, number)` | Generate a number between -1 and 1 from 1 dimensional simplex noise. The "Map" expression from Extended Math extension can be used to map values to any chosen bounds. ||
| | _string_ | Generator name |
| | _🔢 Number_ | X coordinate |
| `Noise::Noise2d(string, number, number)` | Generate a number between -1 and 1 from 2 dimensional simplex noise. The "Map" expression from Extended Math extension can be used to map values to any chosen bounds. ||
| | _string_ | Generator name |
| | _🔢 Number_ | X coordinate |
| | _🔢 Number_ | Y coordinate |
| `Noise::Noise3d(string, number, number, number)` | Generate a number between -1 and 1 from 3 dimensional simplex noise. The "Map" expression from Extended Math extension can be used to map values to any chosen bounds. ||
| | _string_ | Generator name |
| | _🔢 Number_ | X coordinate |
| | _🔢 Number_ | Y coordinate |
| | _🔢 Number_ | Z coordinate |
| `Noise::Noise4d(string, number, number, number, number)` | Generate a number between -1 and 1 from 4 dimensional simplex noise. The "Map" expression from Extended Math extension can be used to map values to any chosen bounds. ||
| | _string_ | Generator name |
| | _🔢 Number_ | X coordinate |
| | _🔢 Number_ | Y coordinate |
| | _🔢 Number_ | Z coordinate |
| | _🔢 Number_ | W coordinate |
| `Noise::Octaves(string)` | The number of octaves used for noise generation. ||
| | _string_ | Generator name |
| `Noise::Persistence(string)` | The persistence used for noise generation. ||
| | _string_ | Generator name |
| `Noise::Seed()` | The seed used for noise generation. ||


---

*This page is an auto-generated reference page about the **Noise generator** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).