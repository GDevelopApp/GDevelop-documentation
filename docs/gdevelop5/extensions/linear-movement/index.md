# Linear Movement

<img src="https://resources.gdevelop-app.com/assets/Icons/ray-start-arrow.svg" class="extension-icon"></img>
Move objects on a straight line.

**Authors and contributors** to this experimental extension: [4ian](https://gd.games/4ian), [Jurfix](https://gd.games/Jurfix).

---

Move objects on a straight line or according to their angle.

It can be used for simple enemies or bullets. It's usually not adapted for players (other behaviors are a better choice) or bullets fired with the actions provided by the "Fire Bullet" behavior (these bullets are already moved using a force).

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Linear movement 

Move objects on a straight line. 

### Behavior properties

- **Speed on X axis** (🔢 Number, Speed). Default value is `0`.
- **Speed on Y axis** (🔢 Number, Speed). Default value is `0`.

??? quote "See internal technical details"


    - **Speed on X axis** is stored as `SpeedX` (Number). Unit is PixelSpeed. Default value is `0`.
    - **Speed on Y axis** is stored as `SpeedY` (Number). Unit is PixelSpeed. Default value is `0`.

### Behavior actions

**Speed on X axis**  
Change the speed on X axis of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `LinearMovement::LinearMovement::SetSpeedX`.

**Speed on Y axis**  
Change the speed on Y axis of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `LinearMovement::LinearMovement::SetSpeedY`.


### Behavior conditions

**Speed on X axis**  
Compare the speed on X axis of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `LinearMovement::LinearMovement::SpeedX`.

**Speed on Y axis**  
Compare the speed on Y axis of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `LinearMovement::LinearMovement::SpeedY`.


### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.LinearMovement::SpeedX()` | Return the speed on X axis of the object. ||
| `Object.LinearMovement::SpeedY()` | Return the speed on Y axis of the object. ||

## Linear movement by angle 

Move objects ahead according to their angle. 

### Behavior properties

- **Speed** (🔢 Number, Speed). Default value is `200`.

??? quote "See internal technical details"


    - **Speed** is stored as `Speed` (Number). Unit is PixelSpeed. Default value is `200`.

### Behavior actions

**Speed**  
Change the speed of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `LinearMovement::LinearMovementByAngle::SetSpeed`.


### Behavior conditions

**Speed**  
Compare the speed of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `LinearMovement::LinearMovementByAngle::Speed`.


### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.LinearMovementByAngle::Speed()` | Return the speed of the object. ||


---

*This page is an auto-generated reference page about the **Linear Movement** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).