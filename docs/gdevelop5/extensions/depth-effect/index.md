# Depth effect

<img src="https://resources.gdevelop-app.com/assets/Icons/Line Hero Pack/Master/SVG/Virtual Reality/Virtual Reality_vr_computer_3d_cube_screen_tv.svg" class="extension-icon"></img>
Scale objects based on Y position to simulate depth.

**Authors and contributors** to this experimental extension: [VictrisGames](https://gd.games/VictrisGames).

---

The scale of the object decreases the closer it is to the horizon, giving the illusion that the object is travelling away from the viewer.

Properties:

- Horizon Y position (Default: 0)
- Max scale of the object when it is at the bottom of the screen (Default: 1)
- Y exponent can be used to control the rate of change  (Default: 2)

Tips:

- If you want speed to look constant, be sure to reduce the object's speed based on scale or Y value.  If you don't do this, the object will appear to be moving faster when it is near the top of the screen.  This matches how objects appear in the real world.
- This extension works well with the Y-sort extension, which changes Z order based on Y position.


!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Depth effect 

The scale of the object decreases the closer it is to the horizon, giving the illusion that the object is travelling away from the viewer. 

### Behavior properties

- **Y position that represents a horizon where objects appear infinitely small  (Default: 0)** (🔢 Number). Default value is `0`.
- **Max scale when the object is at the bottom of the screen (Default: 1)** (🔢 Number). Default value is `1`.
- **Exponential rate of change (Default: 2)** (🔢 Number). Default value is `2`.

??? quote "See internal technical details"


    - **Y position that represents a horizon where objects appear infinitely small  (Default: 0)** is stored as `HorizonY` (Number). Default value is `0`.
    - **Max scale when the object is at the bottom of the screen (Default: 1)** is stored as `MaxScale` (Number). Default value is `1`.
    - **Exponential rate of change (Default: 2)** is stored as `PowerY` (Number). Default value is `2`.
    > This behavior must be used on an object also having a behavior with type "ScalableCapability::ScalableBehavior". This is stored on property `Scale`.


### Behavior actions

**Set exponential rate of change**  
Set Y exponential rate of change (Default: 2).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Y Exponent

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `DepthEffect::DepthEffect_Sprite::SetExponentY`.

**Set Y position of horizon**  
Set Y position of the horizon, where objects are infinitely small (Default: 0).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Horizon Y

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `DepthEffect::DepthEffect_Sprite::SetHorizonY`.

**Set max scale**  
Set max scale when the object is at the bottom of the screen (Default: 2).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Y Exponent

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `DepthEffect::DepthEffect_Sprite::SetMaxScale`.


### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.DepthEffect_Sprite::ExponentY()` | Exponential rate of change, based on Y position. ||
| `Object.DepthEffect_Sprite::HorizonY()` | Y value of horizon. ||
| `Object.DepthEffect_Sprite::MaxScale()` | Max scale when the object is at the bottom of the screen. ||
| `Object.DepthEffect_Sprite::PercentAwayFromHorizon()` | Percent away from the horizon.  This is "0" at the horizon, and "1" at the bottom of the screen. ||


---

*This page is an auto-generated reference page about the **Depth effect** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).