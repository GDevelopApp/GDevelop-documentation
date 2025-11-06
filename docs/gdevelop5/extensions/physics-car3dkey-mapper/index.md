# 3D car keyboard mapper

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/Glyphster Pack/Master/SVG/Computers and Hardware/3e5871434a72821bf3ecb44a6857e62a438cf23dc8f95966f56ae97e95315468_Computers and Hardware_keyboard.svg" class="extension-icon"></img>
3D car keyboard controls.

**Authors and contributors** to this experimental extension: [D8H](https://gd.games/D8H).

---

3D physics car keyboard controls. Add this "mapper" behavior on the object having the 3D Physics Car behavior so that it's automatically controlled by the keyboard.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## 3D car keyboard mapper 

Control a 3D physics car with a keyboard. 

### Behavior properties

- **Down key** (KeyboardKey). Default value is `Down`.
- **Hand brake key** (KeyboardKey). Default value is `Space`.
- **Left key** (KeyboardKey). Default value is `Left`.
- **Right key** (KeyboardKey). Default value is `Right`.
- **Up key** (KeyboardKey). Default value is `Up`.

??? quote "See internal technical details"


    - **Down key** is stored as `Down` (KeyboardKey). Default value is `Down`.
    - **Hand brake key** is stored as `HandBrake` (KeyboardKey). Default value is `Space`.
    - **Left key** is stored as `Left` (KeyboardKey). Default value is `Left`.
    > This behavior must be used on an object also having a behavior with type "Physics3D::PhysicsCar3D". This is stored on property `PhysicsCar3D`.

    - **Right key** is stored as `Right` (KeyboardKey). Default value is `Right`.
    - **Up key** is stored as `Up` (KeyboardKey). Default value is `Up`.

_No expressions for this behavior._



---

*This page is an auto-generated reference page about the **3D car keyboard mapper** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).