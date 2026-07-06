# 3D airplane gamepad mapper

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/Line Hero Pack/Master/SVG/Vehicles and Transport/49e91b8e69b677706be23ab4f1ca25d6771c0312e5f77dc1d93f95e7afa396b0_Vehicles and Transport_airplane_air_plane_fly.svg" class="extension-icon"></img>
Control a 3D physics airplane with a gamepad.

**Authors and contributors** to this experimental extension: [D8H](https://gd.games/D8H).

!!! warning
    This is an extension made by a community member and it only got through a
    light review by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of fully reviewed extensions.

---

Control a 3D physics airplane with a gamepad.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## 3D airplane gamepad mapper 

Control a 3D physics airplane with a gamepad. 

### Behavior properties

- **Direction joystick** (Choice, one of: "Left", "Right"). Default value is `Left`.
- **Gamepad identifier (1, 2, 3 or 4)** (🔢 Number). Default value is `1`.
- **Pull to move upward** (🔘 Boolean). Default value is `true`.

??? quote "See internal technical details"


    - **Direction joystick** is stored as `DirectionStick` (Choice). Default value is `Left`.
    - **Gamepad identifier (1, 2, 3 or 4)** is stored as `GamepadIdentifier` (Number). Default value is `1`.
    > This behavior must be used on an object also having a behavior with type "PhysicsAirplane3D::PhysicsAirplane3D". This is stored on property `PhysicsAirplane3D`.

    - **Pull to move upward** is stored as `ShouldBePulledToMoveUp` (Boolean). Default value is `true`.

### Behavior actions

**Pull to move upward**  
Change if the stick should be pulled to move upward.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): ShouldPullToMoveUp

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PhysicsAirplane3DGamepadMapper::PhysicsAirplane3DGamepadMapper::SetShouldBePulledToMoveUp`.


### Behavior conditions

**Pull to move upward**  
Check if the stick should be pulled to move upward.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `PhysicsAirplane3DGamepadMapper::PhysicsAirplane3DGamepadMapper::ShouldBePulledToMoveUp`.


_No expressions for this behavior._



---

*This page is an auto-generated reference page about the **3D airplane gamepad mapper** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).