# Boomerang

<img src="https://resources.gdevelop-app.com/assets/Icons/boomerang.svg" class="extension-icon"></img>
Throw an object that returns to the thrower like a boomerang.

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

### Behavior actions

**Send boomerang back to thrower**
Send boomerang back to thrower.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

**Set amount of time before boomerang changes directions**
Set amount of time before boomerang changes directions (seconds).

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Time before boomerange changes direction (seconds)

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Throw boomerang toward an angle**
Throw boomerang toward an angle.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Angle (degrees)
    - Parameter 3 (🔢 Number): Throw speed (pixels per second)
    - Parameter 4 (🔢 Number): Time before changing directions (seconds)
    - Parameter 5 (🔢 Number): Rotation (degrees per second)

    > Technical note: parameter 6 are internal parameters handled by GDevelop.

**Throw boomerang toward a position**
Throw boomerang toward a position.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Target X position
    - Parameter 3 (🔢 Number): Target Y position
    - Parameter 4 (🔢 Number): Throw speed (pixels per second)
    - Parameter 5 (🔢 Number): Time before changing directions (seconds)
    - Parameter 6 (🔢 Number): Rotation (degrees per second)

    > Technical note: parameter 7 are internal parameters handled by GDevelop.

**Track position of boomerang thrower**
Track position of boomerang thrower.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (👾 Object): Thrower

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

### Behavior conditions

**Boomerang is returning to thrower**
Boomerang is returning to thrower.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

_No expressions for this behavior._



---

*This page is an auto-generated reference page about the **Boomerang** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).