# 3D character keyboard mapper

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/Glyphster Pack/Master/SVG/Computers and Hardware/3e5871434a72821bf3ecb44a6857e62a438cf23dc8f95966f56ae97e95315468_Computers and Hardware_keyboard.svg" class="extension-icon"></img>
Map keyboard keys to 3D physics character movement, jump, and camera controls.

**Authors and contributors** to this experimental extension: [D8H](https://gd.games/D8H).

---

3D platformer and 3D shooter keyboard controls. Add one of the "mapper" behaviors on an object having the "3D physics character" behavior so that it is controlled by the keyboard.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## 3D platformer keyboard mapper 

Control a 3D physics character with a keyboard for a platformer or a top-down game. 

### Behavior properties

- **Down key** (KeyboardKey). Default value is `s`.
- **Jump key** (KeyboardKey). Default value is `Space`.
- **Left key** (KeyboardKey). Default value is `a`.
- **Right key** (KeyboardKey). Default value is `d`.
- **Up key** (KeyboardKey). Default value is `w`.

??? quote "See internal technical details"


    - **Down key** is stored as `Down` (KeyboardKey). Default value is `s`.
    - **Jump key** is stored as `Jump` (KeyboardKey). Default value is `Space`.
    - **Left key** is stored as `Left` (KeyboardKey). Default value is `a`.
    > This behavior must be used on an object also having a behavior with type "Physics3D::PhysicsCharacter3D". This is stored on property `PhysicsCharacter3D`.

    - **Right key** is stored as `Right` (KeyboardKey). Default value is `d`.
    - **Up key** is stored as `Up` (KeyboardKey). Default value is `w`.

_No expressions for this behavior._


## 3D shooter keyboard mapper 

Control a 3D physics character with a keyboard for a first or third person shooter. 

### Behavior properties

- **Down key** (KeyboardKey). Default value is `s`.
- **Jump key** (KeyboardKey). Default value is `Space`.
- **Left key** (KeyboardKey). Default value is `a`.
- **Right key** (KeyboardKey). Default value is `d`.
- **Up key** (KeyboardKey). Default value is `w`.

??? quote "See internal technical details"


    - **Down key** is stored as `Down` (KeyboardKey). Default value is `s`.
    - **Jump key** is stored as `Jump` (KeyboardKey). Default value is `Space`.
    - **Left key** is stored as `Left` (KeyboardKey). Default value is `a`.
    > This behavior must be used on an object also having a behavior with type "Physics3D::PhysicsCharacter3D". This is stored on property `PhysicsCharacter3D`.

    - **Right key** is stored as `Right` (KeyboardKey). Default value is `d`.
    - **Up key** is stored as `Up` (KeyboardKey). Default value is `w`.

_No expressions for this behavior._



---

*This page is an auto-generated reference page about the **3D character keyboard mapper** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).