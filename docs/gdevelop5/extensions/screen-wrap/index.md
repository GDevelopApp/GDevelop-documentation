# Screen wrap

<img src="https://resources.gdevelop-app.com/assets/Icons/monitor-screenshot.svg" class="extension-icon"></img>
Teleport object when it moves off the screen and immediately appear on the opposite side while maintaining speed and trajectory.

**Authors and contributors** to this experimental extension: [Entropy](https://gd.games/Entropy), [VictrisGames](https://gd.games/VictrisGames), [MelonDev](https://gd.games/MelonDev).

---

The teleport happens when the center point of the object crosses a border (this can be adjusted with an offset).
By default, the borders of the wrapping area match the screen size, but they can also be changed.

The Asteroid-like example uses this extension ([open the project online](https://editor.gdevelop.io/?project=example://space-asteroids)).

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Screen Wrap 

Teleport the object when leaving one side of the screen so that it immediately reappears on the opposite side, maintaining speed and trajectory. 

### Behavior actions

**Enable horizontal wrapping**  
Enable wrapping on the left and right borders.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): Value

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Enable vertical wrapping**  
Enable wrapping on the top and bottom borders.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): Value

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Set bottom border**  
Set bottom border (Y position).

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Bottom border value

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Set left border**  
Set left border (X position).

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Left border value

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Set right border**  
Set right border (X position).

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Right border value

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Set top border**  
Set top border (Y position).

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Top border value

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Set trigger offset**  
Set trigger offset (pixels).

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): SetScreen Offset Leaving Value

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

### Behavior conditions

**Is horizontal wrapping**  
Check if the object is wrapping on the left and right borders.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

**Is vertical wrapping**  
Check if the object is wrapping on the top and bottom borders.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.ScreenWrap::BorderBottom()` | Bottom border (Y position). ||
| `Object.ScreenWrap::BorderLeft()` | Left border (X position). ||
| `Object.ScreenWrap::BorderRight()` | Right border (X position). ||
| `Object.ScreenWrap::BorderTop()` | Top border (Y position). ||
| `Object.ScreenWrap::TriggerOffset()` | Number of pixels past the center where the object teleports and appears. ||

## Screen Wrap (physics objects) 

Teleport the object when leaving one side of the screen so that it immediately reappears on the opposite side, maintaining speed and trajectory. 

### Behavior actions

**Apply saved velocity values**  
Apply saved velocity values.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

**Enable horizontal wrapping**  
Enable wrapping on the left and right borders.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): Value

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Enable vertical wrapping**  
Enable wrapping on the top and bottom borders.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): Value

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Save current velocity values**  
Save current velocity values.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

**Set bottom border**  
Set bottom border (Y position).

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Bottom border value

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Set left border**  
Set left border (X position).

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Left border value

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Set right border**  
Set right border (X position).

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Right border value

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Set top border**  
Set top border (Y position).

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Top border value

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Set trigger offset**  
Set trigger offset (pixels).

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): SetScreen Offset Leaving Value

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

### Behavior conditions

**Is horizontal wrapping**  
Check if the object is wrapping on the left and right borders.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

**Is vertical wrapping**  
Check if the object is wrapping on the top and bottom borders.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.ScreenWrapPhysics::BorderBottom()` | Bottom border (Y position). ||
| `Object.ScreenWrapPhysics::BorderLeft()` | Left border (X position). ||
| `Object.ScreenWrapPhysics::BorderRight()` | Right border (X position). ||
| `Object.ScreenWrapPhysics::BorderTop()` | Top border (Y position). ||
| `Object.ScreenWrapPhysics::TriggerOffset()` | Number of pixels past the center where the object teleports and appears. ||


---

*This page is an auto-generated reference page about the **Screen wrap** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).