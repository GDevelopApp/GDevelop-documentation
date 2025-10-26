# Flip Gravity

<img src="https://resources.gdevelop-app.com/assets/Icons/Line Hero Pack/Master/SVG/Space/Space_earth_moon_orbit_sun.svg" class="extension-icon"></img>
Flip platformer character gravity up side down.

**Authors and contributors** to this experimental extension: [VegeTato](https://gd.games/VegeTato).

!!! warning
    This is an extension made by a community member and it only got through a
    light review by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of fully reviewed extensions.

---

- Easily make VVVV games.

- Easily Flip platformer character gravity upside down.
- Set the flip gravity key.
- Set the jump while flipped key.
- Set the action to reset the gravity back to normal.
- On/Off ability to jump while the gravity is flipped.
- On/Off ability to flip the gravity while in air.
- On/Off ability to trigger once the flip gravity key.
- Control the flip gravity strength/force.
- Control the jump strength/force while flipped.
- Auto handle animations.
- 2 actions included:  
    1. You have 1 object at the top and bottom.  
    2. You have 2 objects, one at the bottom (floor), one at the top (roof).


*Note: this extension must run in every frame, so make sure to leave the event condition empty.  
Recommended: Set the platformer character sprite Origin and Center points to sprite center for the best experience.*

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Flip gravity 1 object (Floor, Roof)**  
Flip the gravity for platformer character (you have 1 object), Example:  
• Floor object at the bottom, Floor object at the top.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Platformer character object
    - Parameter 2 (🧩 Behavior): Platformer character behavior
    - Parameter 3 (key): Flip gravity key
      Any key will work except the Jump key.
    - Parameter 4 (👾 Object): Floor object
    - Parameter 5 (🔢 Number): Flip gravity force power
      The higher number the stronger the force.
      0 for object falling speed.
    - Parameter 6 (key): Moving right key
    - Parameter 7 (key): Moving left key
    - Parameter 8 (🔢 Number): Idle animation number
    - Parameter 9 (🔢 Number): Move animation number
    - Parameter 10 (🔢 Number): Fall animation number
    - Parameter 11 (❓ Yes or No): Can flip gravity while in air after performing a jump
    - Parameter 12 (❓ Yes or No): Trigger gravity flip once every single press until flip key is released
    - Parameter 13 (❓ Yes or No): Ability to jump while the gravity is flipped
    - Parameter 14 (key): Jump key
      Leave it empty if you select No for Jump ability.
    - Parameter 15 (🔢 Number): Jump strength
      Leave it empty if you select No for Jump ability.

    > Technical note: parameters 0, 16 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `FlipGravity::FlipGravity1Object`.

**Flip gravity 2 objects (1 for floor, 1 for roof)**  
Flip the gravity for platformer character (you have 2 objects), Examples:  
• Floor object at the bottom, Roof object at the top.
• Floor object at the bottom, Floor object at the top.
• Roof object at the bottom, Roof object at the top.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Platformer character object
    - Parameter 2 (🧩 Behavior): Platformer character behavior
    - Parameter 3 (key): Flip gravity key
      Any key will work except the Jump key.
    - Parameter 4 (👾 Object): Floor object
    - Parameter 5 (👾 Object): Roof object
    - Parameter 6 (🔢 Number): Flip gravity force power
      The higher number the stronger the force.
      0 for object falling speed.
    - Parameter 7 (key): Moving right key
    - Parameter 8 (key): Moving left key
    - Parameter 9 (🔢 Number): Idle animation number
    - Parameter 10 (🔢 Number): Move animation number
    - Parameter 11 (🔢 Number): Fall animation number
    - Parameter 12 (❓ Yes or No): Can flip gravity while in air after performing a jump
    - Parameter 13 (❓ Yes or No): Trigger gravity flip once every single press until flip key is released
    - Parameter 14 (❓ Yes or No): Ability to jump while the gravity is flipped
    - Parameter 15 (key): Jump key
      Leave it empty if you select No for Jump ability.
    - Parameter 16 (🔢 Number): Jump strength
      Leave it empty if you select No for Jump ability.

    > Technical note: parameters 0, 17 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `FlipGravity::FlipGravity2Objects`.

**Reset gravity back to normal**  
Reset the gravity back to normal for the selected object.

??? quote "See parameters & details"

    - Parameter 1 (👾 Object): Platformer character object
    - Parameter 2 (🧩 Behavior): Platformer character behavior

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `FlipGravity::Reset`.




---

*This page is an auto-generated reference page about the **Flip Gravity** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).