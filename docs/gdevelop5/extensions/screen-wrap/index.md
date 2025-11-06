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

### Behavior properties

- **Bottom border of wrapped area (Y)** (🔢 Number, Distance). If blank, the value will be scene height. Default value is `0`.
- **Left border of wrapped area (X)** (🔢 Number, Distance). Default value is `0`.
- **Right border of wrapped area (X)** (🔢 Number, Distance). If blank, the value will be the scene width. Default value is `0`.
- **Top border of wrapped area (Y)** (🔢 Number, Distance). Default value is `0`.
- **Horizontal wrapping** (🔘 Boolean). Default value is `true`.
- **Number of pixels past the center where the object teleports and appears** (🔢 Number, Distance). Default value is `0`.
- **Vertical wrapping** (🔘 Boolean). Default value is `true`.

??? quote "See internal technical details"


    - **Bottom border of wrapped area (Y)** is stored as `BorderBottom` (Number). Unit is Pixel. Default value is `0`.
    - **Left border of wrapped area (X)** is stored as `BorderLeft` (Number). Unit is Pixel. Default value is `0`.
    - **Right border of wrapped area (X)** is stored as `BorderRight` (Number). Unit is Pixel. Default value is `0`.
    - **Top border of wrapped area (Y)** is stored as `BorderTop` (Number). Unit is Pixel. Default value is `0`.
    - **Horizontal wrapping** is stored as `HorizontalWrapping` (Boolean). Default value is `true`.
    - **Number of pixels past the center where the object teleports and appears** is stored as `TriggerOffset` (Number). Unit is Pixel. Default value is `0`.
    - **Vertical wrapping** is stored as `VerticalWrapping` (Boolean). Default value is `true`.

### Behavior actions

**Enable horizontal wrapping**  
Enable wrapping on the left and right borders.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ScreenWrap::ScreenWrap::EnableHorizontalWrapping`.

**Enable vertical wrapping**  
Enable wrapping on the top and bottom borders.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ScreenWrap::ScreenWrap::EnableVerticalWrapping`.

**Set bottom border**  
Set bottom border (Y position).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Bottom border value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ScreenWrap::ScreenWrap::SetBottomBorder`.

**Set left border**  
Set left border (X position).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Left border value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ScreenWrap::ScreenWrap::SetLeftBorder`.

**Set right border**  
Set right border (X position).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Right border value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ScreenWrap::ScreenWrap::SetRightBorder`.

**Set top border**  
Set top border (Y position).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Top border value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ScreenWrap::ScreenWrap::SetTopBorder`.

**Set trigger offset**  
Set trigger offset (pixels).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): SetScreen Offset Leaving Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ScreenWrap::ScreenWrap::SetTriggerOffset`.


### Behavior conditions

**Is horizontal wrapping**  
Check if the object is wrapping on the left and right borders.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ScreenWrap::ScreenWrap::IsHorizontalWrapping`.

**Is vertical wrapping**  
Check if the object is wrapping on the top and bottom borders.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ScreenWrap::ScreenWrap::IsVerticalWrapping`.


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

### Behavior properties

- **Bottom border of wrapped area (Y)** (🔢 Number, Distance). If blank, the value will be scene height. Default value is `0`.
- **Left border of wrapped area (X)** (🔢 Number, Distance). Default value is `0`.
- **Right border of wrapped area (X)** (🔢 Number, Distance). If blank, the value will be the scene width. Default value is `0`.
- **Top border of wrapped area (Y)** (🔢 Number, Distance). Default value is `0`.
- **Horizontal wrapping** (🔘 Boolean). Default value is `true`.
- **Number of pixels past the center where the object teleports and appears** (🔢 Number, Distance). Default value is `0`.
- **Vertical wrapping** (🔘 Boolean). Default value is `true`.

??? quote "See internal technical details"


    - **Bottom border of wrapped area (Y)** is stored as `BorderBottom` (Number). Unit is Pixel. Default value is `0`.
    - **Left border of wrapped area (X)** is stored as `BorderLeft` (Number). Unit is Pixel. Default value is `0`.
    - **Right border of wrapped area (X)** is stored as `BorderRight` (Number). Unit is Pixel. Default value is `0`.
    - **Top border of wrapped area (Y)** is stored as `BorderTop` (Number). Unit is Pixel. Default value is `0`.
    - **Horizontal wrapping** is stored as `HorizontalWrapping` (Boolean). Default value is `true`.
    > This behavior must be used on an object also having a behavior with type "Physics2::Physics2Behavior". This is stored on property `RequiredPhysicsBehavior`.

    - **Number of pixels past the center where the object teleports and appears** is stored as `TriggerOffset` (Number). Unit is Pixel. Default value is `0`.
    - **Vertical wrapping** is stored as `VerticalWrapping` (Boolean). Default value is `true`.

### Behavior actions

**Apply saved velocity values**  
Apply saved velocity values.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ScreenWrap::ScreenWrapPhysics::ApplySavedVelocities`.

**Enable horizontal wrapping**  
Enable wrapping on the left and right borders.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ScreenWrap::ScreenWrapPhysics::EnableHorizontalWrapping`.

**Enable vertical wrapping**  
Enable wrapping on the top and bottom borders.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (❓ Yes or No): Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ScreenWrap::ScreenWrapPhysics::EnableVerticalWrapping`.

**Save current velocity values**  
Save current velocity values.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ScreenWrap::ScreenWrapPhysics::SaveCurrentVelocities`.

**Set bottom border**  
Set bottom border (Y position).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Bottom border value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ScreenWrap::ScreenWrapPhysics::SetBottomBorder`.

**Set left border**  
Set left border (X position).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Left border value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ScreenWrap::ScreenWrapPhysics::SetLeftBorder`.

**Set right border**  
Set right border (X position).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Right border value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ScreenWrap::ScreenWrapPhysics::SetRightBorder`.

**Set top border**  
Set top border (Y position).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Top border value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ScreenWrap::ScreenWrapPhysics::SetTopBorder`.

**Set trigger offset**  
Set trigger offset (pixels).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): SetScreen Offset Leaving Value

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ScreenWrap::ScreenWrapPhysics::SetTriggerOffset`.


### Behavior conditions

**Is horizontal wrapping**  
Check if the object is wrapping on the left and right borders.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ScreenWrap::ScreenWrapPhysics::IsHorizontalWrapping`.

**Is vertical wrapping**  
Check if the object is wrapping on the top and bottom borders.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `ScreenWrap::ScreenWrapPhysics::IsVerticalWrapping`.


### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.ScreenWrapPhysics::BorderBottom()` | Bottom border (Y position). ||
| `Object.ScreenWrapPhysics::BorderLeft()` | Left border (X position). ||
| `Object.ScreenWrapPhysics::BorderRight()` | Right border (X position). ||
| `Object.ScreenWrapPhysics::BorderTop()` | Top border (Y position). ||
| `Object.ScreenWrapPhysics::TriggerOffset()` | Number of pixels past the center where the object teleports and appears. ||


---

*This page is an auto-generated reference page about the **Screen wrap** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).