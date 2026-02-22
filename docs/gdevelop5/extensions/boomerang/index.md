# Boomerang

<img src="https://resources.gdevelop-app.com/assets/Icons/boomerang.svg" class="extension-icon"></img>
Throw objects that return to thrower after set time or on command.

**Authors and contributors** to this experimental extension: [Entropy](https://gd.games/Entropy), [VictrisGames](https://gd.games/VictrisGames).

---

Throw an object that returns to the thrower after a length of time, or when an action is used to return it.

How to throw a boomerang: 

- Create a bomerang object that has this behavior
- Use one of the "Throw boomerang..." actions
- Run the "Track location of thrower" action every frame so the boomerang returns correctly

Tips:

- If you want the boomerang to bounce off objects, check for collisions and then use the action "Send boomerang back to thrower"

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Boomerang 

Throw an object that returns to the thrower like a boomerang. 

### Behavior properties

- **Time before changing directions (seconds)** (🔢 Number). Default value is `1`.
- **Rotation (degrees per second)** (🔢 Number). Default value is `360`.
- **Throw speed (pixels per second)** (🔢 Number). Default value is `100`.

??? quote "See internal technical details"


    - **Time before changing directions (seconds)** is stored as `ReturnTime` (Number). Default value is `1`.
    - **Rotation (degrees per second)** is stored as `Rotation` (Number). Default value is `360`.
    - **Throw speed (pixels per second)** is stored as `ThrowSpeed` (Number). Default value is `100`.

### Behavior actions

**Send boomerang back to thrower**  
Send boomerang back to thrower.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Boomerang::Boomerang::ReturnBoomerang`.

**Set amount of time before boomerang changes directions**  
Set amount of time before boomerang changes directions (seconds).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Time before boomerange changes direction (seconds)

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Boomerang::Boomerang::SetReturnTime`.

**Throw boomerang toward an angle**  
Throw boomerang toward an angle.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Angle (degrees)
    - Parameter 3 (🔢 Number): Throw speed (pixels per second)
    - Parameter 4 (🔢 Number): Time before changing directions (seconds)
    - Parameter 5 (🔢 Number): Rotation (degrees per second)

    > Technical note: parameter 6 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Boomerang::Boomerang::ThrowBoomerangAngle`.

**Throw boomerang toward a position**  
Throw boomerang toward a position.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Target X position
    - Parameter 3 (🔢 Number): Target Y position
    - Parameter 4 (🔢 Number): Throw speed (pixels per second)
    - Parameter 5 (🔢 Number): Time before changing directions (seconds)
    - Parameter 6 (🔢 Number): Rotation (degrees per second)

    > Technical note: parameter 7 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Boomerang::Boomerang::ThrowBoomerangPosition`.

**Track position of boomerang thrower**  
Track position of boomerang thrower.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (👾 Object): Thrower

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Boomerang::Boomerang::TrackingThrower`.


### Behavior conditions

**Boomerang is returning to thrower**  
Boomerang is returning to thrower.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Boomerang::Boomerang::IsBoomerangReturning`.


_No expressions for this behavior._



---

*This page is an auto-generated reference page about the **Boomerang** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).