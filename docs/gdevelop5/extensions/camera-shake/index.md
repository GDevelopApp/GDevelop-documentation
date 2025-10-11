# Camera shake

<img src="https://resources.gdevelop-app.com/assets/Icons/vector-difference-ab.svg" class="extension-icon"></img>
Shake layer cameras.

**Authors and contributors** to this experimental extension: [VictrisGames](https://gd.games/VictrisGames), [D8H](https://gd.games/D8H), [fuzzy](https://gd.games/fuzzy).

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

**Default rotation amplitude**  
Change the default rotation amplitude of the shaking (in degrees).

??? quote "See parameters"

    - Parameter 1 (🔢 Number): Angle (in degree)

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

**Default shaking frequency**  
Change the default number of back and forth per seconds.

??? quote "See parameters"

    - Parameter 1 (🔢 Number): Frequency

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

**Default translation amplitude**  
Change the default translation amplitude of the shaking (in pixels).

??? quote "See parameters"

    - Parameter 1 (🔢 Number): Amplitude of shaking on the X axis (in pixels)
    - Parameter 2 (🔢 Number): Amplitude of shaking on the Y axis (in pixels)

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

**Default zoom amplitude**  
Change the default zoom factor amplitude of the shaking. The shaking will zoom and unzoom by this factor (for instance 1.0625 is a valid value).

??? quote "See parameters"

    - Parameter 1 (🔢 Number): Zoom factor

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

**Layer rotation amplitude**  
Change the rotation amplitude of the shaking (in degrees).

??? quote "See parameters"

    - Parameter 1 (🔢 Number): Angle (in degree)
    - Parameter 2 (🔤 Layer name (String)): NewLayerName

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

**Shakable layer**  
Mark a layer as shakable.

??? quote "See parameters"

    - Parameter 1 (❓ Yes or No): Shakable
    - Parameter 2: 🔤 Layer name (String)

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

**Layer shaking frequency**  
Change the number of back and forth per seconds.

??? quote "See parameters"

    - Parameter 1 (🔢 Number): Frequency
    - Parameter 2 (🔤 Layer name (String)): NewLayerName

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

**Layer translation amplitude**  
Change the translation amplitude of the shaking (in pixels).

??? quote "See parameters"

    - Parameter 1 (🔢 Number): Amplitude of shaking on the X axis (in pixels)
    - Parameter 2 (🔢 Number): Amplitude of shaking on the Y axis (in pixels)
    - Parameter 3: 🔤 Layer name (String)

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

**Layer zoom amplitude**  
Change the zoom factor amplitude of the shaking. The shaking will zoom and unzoom by this factor (for instance 1.0625 is a valid value).

??? quote "See parameters"

    - Parameter 1 (🔢 Number): Zoom factor
    - Parameter 2 (🔤 Layer name (String)): NewLayerName

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

**Shake camera**  
Shake the camera on layers chosen with configuration actions.

??? quote "See parameters"

    - Parameter 1 (🔢 Number): Duration (in seconds)
    - Parameter 2 (🔢 Number): Ease duration to start (in seconds)
    - Parameter 3 (🔢 Number): Ease duration to stop (in seconds)

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

**Start camera shaking**  
Start shaking the camera indefinitely.

??? quote "See parameters"

    - Parameter 1 (🔢 Number): Ease duration (in seconds)

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

**Stop camera shaking**  
Stop shaking the camera.

??? quote "See parameters"

    - Parameter 1 (🔢 Number): Ease duration (in seconds)

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

## Conditions

**Camera is shaking**  
Check if the camera is shaking.

??? quote "See parameters"



    > Technical note: parameters 0, 1 are internal parameters handled by GDevelop.




---

*This page is an auto-generated reference page about the **Camera shake** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).