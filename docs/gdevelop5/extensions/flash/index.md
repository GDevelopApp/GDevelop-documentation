# Flash object

<img src="https://resources.gdevelop-app.com/assets/Icons/flash-outline.svg" class="extension-icon"></img>
Make an object flash visibility (blink), color tint, object effect, or opacity (fade).

**Authors and contributors** to this experimental extension: [4ian](https://gd.games/4ian), [Entropy](https://gd.games/Entropy), [VictrisGames](https://gd.games/VictrisGames).

---

Make a 2D object flash for a period of time so that it alternates between two different states.
Includes the ability to flash visibility (blink), color tint, object effect, or opacity (fade).

After adding a behavior to an object, you **trigger the effect** by using the **Flash action**.

This can be used to:

- Let players know they are invincible after being hit
- Catch player attention on the interface (for instance a "press start" text)


!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Flash visibility (blink) 

Make the object flash (blink) for a period of time so it alternates between visible and invisible. 

### Behavior properties

- **Half period ** (🔢 Number, Duration). Time that the object is invisible. Default value is `0.1`.

??? quote "See internal technical details"


    - **Half period ** is stored as `HalfPeriodTime` (Number). Unit is Second. Default value is `0.1`.

### Behavior actions

**Flash visibility (blink)**  
Make an object flash (blink) visibility for a period of time.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Duration of the flashing, in seconds
      Use "0" to keep flashing until stopped.

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Flash::Flash::Flash`.

**Half period**  
Change the half period of the object (time the object is invisible).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Flash::Flash::SetHalfPeriodTime`.

**Stop flashing visibility (blink)**  
Stop flashing visibility (blink) of an object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Flash::Flash::Stop`.


### Behavior conditions

**Half period**  
Compare the half period of the object (time the object is invisible).

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Flash::Flash::HalfPeriodTime`.

**Is object flashing visibility**  
Check if an object is flashing visibility.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Flash::Flash::IsFlashing`.


### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.Flash::HalfPeriodTime()` | Return the half period of the object (time the object is invisible). ||

## Flash color tint 

Make an object flash a color tint for a period of time. 

### Behavior properties

- **Half period** (🔢 Number, Duration). Time between flashes. Default value is `0.1`.

??? quote "See internal technical details"


    - **Half period** is stored as `HalfPeriodTime` (Number). Unit is Second. Default value is `0.1`.

### Behavior actions

**Flash a color tint**  
Make an object flash a color tint for a period of time.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Duration of the flashing, in seconds
      Use "0" to keep flashing until stopped.
    - Parameter 3 (🎨 Color): Color tint

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Flash::FlashColor::Flash`.

**Half period**  
Change the half period (time between flashes) of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Flash::FlashColor::SetHalfPeriodTime`.

**Stop flashing color tint**  
Stop flashing a color tint on an object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Flash::FlashColor::Stop`.


### Behavior conditions

**Half period**  
Compare the half period (time between flashes) of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Flash::FlashColor::HalfPeriodTime`.

**Is object flashing a color tint**  
Check if an object is flashing a color tint.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Flash::FlashColor::IsFlashing`.


### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.FlashColor::HalfPeriodTime()` | Return the half period (time between flashes) of the object. ||

## Flash effect 

Make the object flash an effect for a period of time. 

### Behavior properties

- **Half period** (🔢 Number, Duration). Time between flashes. Default value is `0.1`.

??? quote "See internal technical details"


    > This behavior must be used on an object also having a behavior with type "EffectCapability::EffectBehavior". This is stored on property `Effect`.

    - **Half period** is stored as `HalfPeriodTime` (Number). Unit is Second. Default value is `0.1`.

### Behavior actions

**Flash an effect**  
Make an object flash an effect for a period of time.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Duration of the flashing, in seconds
      Use "0" to keep flashing until stopped.
    - Parameter 3: objecteffectname

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Flash::FlashEffect::Flash`.

**Half period**  
Change the half period (time between flashes) of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Flash::FlashEffect::SetHalfPeriodTime`.

**Stop flashing an effect**  
Stop flashing an effect of an object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Flash::FlashEffect::Stop`.


### Behavior conditions

**Half period**  
Compare the half period (time between flashes) of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Flash::FlashEffect::HalfPeriodTime`.

**Is object flashing an effect**  
Check if an object is flashing an effect.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Flash::FlashEffect::IsFlashing`.


### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.FlashEffect::HalfPeriodTime()` | Return the half period (time between flashes) of the object. ||

## Flash opacity smothly (fade) 

Flash opacity smoothly (fade) in a repeating loop. 

### Behavior properties

- **Half period** (🔢 Number, Duration). Time between flashes. Default value is `0.1`.

??? quote "See internal technical details"


    - **Half period** is stored as `HalfPeriodTime` (Number). Unit is Second. Default value is `0.1`.
    > This behavior must be used on an object also having a behavior with type "OpacityCapability::OpacityBehavior". This is stored on property `Opacity`.

    > This behavior must be used on an object also having a behavior with type "Tween::TweenBehavior". This is stored on property `TweenBehavior`.


### Behavior actions

**Flash the opacity (fade)**  
Make an object flash opacity smoothly (fade) in a repeating loop.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🧩 Behavior): Tween behavior (required)
    - Parameter 3 (🔢 Number): Duration of the flashing, in seconds
      Use "0" to keep flashing until stopped.
    - Parameter 4 (🔢 Number): Target opacity

    > Technical note: parameter 5 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Flash::FlashOpacity::Flash`.

**Half period**  
Change the half period (time between flashes) of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Flash::FlashOpacity::SetHalfPeriodTime`.

**Stop flashing opacity**  
Stop flashing opacity of an object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `Flash::FlashOpacity::Stop`.


### Behavior conditions

**Half period**  
Compare the half period (time between flashes) of the object.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: relationaloperator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Flash::FlashOpacity::HalfPeriodTime`.

**Is object flashing opacity**  
Check if an object is flashing opacity.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `Flash::FlashOpacity::IsFlashing`.


### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.FlashOpacity::HalfPeriodTime()` | Return the half period (time between flashes) of the object. ||


---

*This page is an auto-generated reference page about the **Flash object** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).