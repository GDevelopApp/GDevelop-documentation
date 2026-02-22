# Shake object

<img src="https://resources.gdevelop-app.com/assets/Icons/arrow-all.svg" class="extension-icon"></img>
Shake objects with configurable translation, rotation, and scale intensity.

**Authors and contributors** to this experimental extension: [VictrisGames](https://gd.games/VictrisGames).

---

Shake an object (position, angle or scale).

It can be used for:

- Hit or impact
- Object slowly rocking back and forth (like a ship)
- Simulate engine vibration, earthquake, or pulsing

The top-down RPG example uses this extension for damage animations ([open the project online](https://editor.gdevelop.io/?project=example://top-down-rpg)).

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Shake object (position, angle) 

Shake objects with translation and rotation. 

### Behavior actions

**Shake object (position, angle)**  
Shake an object, using one or more ways to shake (position, angle). Make sure to "Stop shaking" before starting a new shake if it uses different parameters. 

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Duration of shake (in seconds) (Default: 0.5)  
    - Parameter 3 (🔢 Number): Amplitude of postion shake in X direction (in pixels)  (For example: 5)
    - Parameter 4 (🔢 Number): Amplitude of position shake in Y direction (in pixels)  (For example: 5)
      Use a negative number to make the single-shake move in the opposite direction.
    - Parameter 5 (🔢 Number): Amplitude of angle rotation shake (in degrees)  (For example: 5)
    - Parameter 6 (🔢 Number): Amount of time between shakes (in seconds) (Default: 0.08)
      For a single-shake effect, set it to the same value as "Duration".
    - Parameter 7 (❓ Yes or No): Keep shaking until stopped
      Duration value will be ignored

    > Technical note: parameter 8 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ShakeObject::ShakeObject_PositionAngle::ShakeObject_PositionAngle`.

**Stop shaking the object**  
Stop any shaking of object that was initiated by the Shake Object extension.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ShakeObject::ShakeObject_PositionAngle::StopShaking`.


### Behavior conditions

**Check if an object is shaking**  
Check if an object is shaking.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ShakeObject::ShakeObject_PositionAngle::IsShaking`.


_No expressions for this behavior._


## Shake object (position, angle, scale) 

Shake objects with translation, rotation and scale. 

### Behavior actions

**Shake object (position, angle, scale)**  
Shake an object, using one or more ways to shake (position, angle, scale). Make sure to "Stop shaking" before starting a new shake if it uses different parameters.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Duration of shake (in seconds) (Default: 0.5)
    - Parameter 3 (🔢 Number): Amplitude of postion shake in X direction (in pixels)  (For example: 5)
    - Parameter 4 (🔢 Number): Amplitude of position shake in Y direction (in pixels)  (For example: 5)
      Use a negative number to make the single-shake move in the opposite direction.
    - Parameter 5 (🔢 Number): Amplitude of angle rotation shake (in degrees)  (For example: 5)
    - Parameter 6 (🔢 Number): Amplitude of scale shake (in percent change)  (For example: 5)
    - Parameter 7 (🔢 Number): Amount of time between shakes (in seconds) (Default: 0.08)
      For a single-shake effect, set it to the same value as "Duration".
    - Parameter 8 (❓ Yes or No): Keep shaking until stopped
      Duration value will be ignored

    > Technical note: parameter 9 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ShakeObject::ShakeObject_PositionAngleScale::ShakeObject_PositionAngleScale`.

**Stop shaking an object**  
Stop shaking an object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ShakeObject::ShakeObject_PositionAngleScale::StopShaking`.


### Behavior conditions

**Check if an object is shaking**  
Check if an object is shaking.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ShakeObject::ShakeObject_PositionAngleScale::IsShaking`.


_No expressions for this behavior._



---

*This page is an auto-generated reference page about the **Shake object** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).