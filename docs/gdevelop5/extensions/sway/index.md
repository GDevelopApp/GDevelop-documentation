# Sway

<img src="https://resources.gdevelop-app.com/assets/Icons/swap-horizontal-variant.svg" class="extension-icon"></img>
Sway objects like grass in the wind.

**Authors and contributors** to this experimental extension: [Bubble](https://gd.games/Bubble).

---

This extension makes objects sway at different times.

It can be used to:

- Simulate grass and plant movement swaying in the wind
- Animate seaweed in an underwater environment
- Give flames a flickering look 

Set *Center* and *Origin* points to the center base of the object for best results.

Check out [this demo](https://gd.games/bubble/swayexamples) to see what this extension can do.


!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Sway 

Sway multiple instances of an object at different times - useful for random grass swaying. 

### Behavior actions

**Set sway angle left and right**  
Set sway angle left and right.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Angle to the left (degrees) - Use negative number
    - Parameter 3 (🔢 Number): Angle to the right (degrees) - Use positive number

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Sway::Sway::ChangeSwayAngle`.

**Set sway angle time range**  
Set sway angle time range.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Angle tween time minimum (seconds)
    - Parameter 3 (🔢 Number): Angle tween time maximum (seconds)

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Sway::Sway::ChangeSwayAngleTime`.

**Set sway Y scale mininum and maximum**  
Set sway Y scale mininum and maximum.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Minimum Y scale
    - Parameter 3 (🔢 Number): Maximum Y scale

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Sway::Sway::ChangeSwayYScale`.

**Set sway Y scale time range**  
Set Y scale time range.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Y scale tween time minimum (seconds)
    - Parameter 3 (🔢 Number): Y scale tween time maximum (seconds)

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Sway::Sway::ChangeSwayYScaleTime`.

_No expressions for this behavior._



---

*This page is an auto-generated reference page about the **Sway** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).