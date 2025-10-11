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

### Behavior actions

**Flash visibility (blink)**
Make an object flash (blink) visibility for a period of time.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Duration of the flashing, in seconds
      Use "0" to keep flashing until stopped.

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

**Half period**
Change the half period of the object (time the object is invisible).

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Stop flashing visibility (blink)**
Stop flashing visibility (blink) of an object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

### Behavior conditions

**Half period**
Compare the half period of the object (time the object is invisible).

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Is object flashing visibility**
Check if an object is flashing visibility.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.Flash::HalfPeriodTime()` | Return the half period of the object (time the object is invisible). ||

## Flash color tint 

Make an object flash a color tint for a period of time. 

### Behavior actions

**Flash a color tint**
Make an object flash a color tint for a period of time.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Duration of the flashing, in seconds
      Use "0" to keep flashing until stopped.
    - Parameter 3 (color): Color tint

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Half period**
Change the half period (time between flashes) of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Stop flashing color tint**
Stop flashing a color tint on an object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

### Behavior conditions

**Half period**
Compare the half period (time between flashes) of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Is object flashing a color tint**
Check if an object is flashing a color tint.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.FlashColor::HalfPeriodTime()` | Return the half period (time between flashes) of the object. ||

## Flash effect 

Make the object flash an effect for a period of time. 

### Behavior actions

**Flash an effect**
Make an object flash an effect for a period of time.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔢 Number): Duration of the flashing, in seconds
      Use "0" to keep flashing until stopped.
    - Parameter 3: 🔤 Object Effect Name (String)

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Half period**
Change the half period (time between flashes) of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Stop flashing an effect**
Stop flashing an effect of an object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

### Behavior conditions

**Half period**
Compare the half period (time between flashes) of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Is object flashing an effect**
Check if an object is flashing an effect.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.FlashEffect::HalfPeriodTime()` | Return the half period (time between flashes) of the object. ||

## Flash opacity smothly (fade) 

Flash opacity smoothly (fade) in a repeating loop. 

### Behavior actions

**Flash the opacity (fade)**
Make an object flash opacity smoothly (fade) in a repeating loop.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🧩 Behavior): Tween behavior (required)
    - Parameter 3 (🔢 Number): Duration of the flashing, in seconds
      Use "0" to keep flashing until stopped.
    - Parameter 4 (🔢 Number): Target opacity

    > Technical note: parameter 5 are internal parameters handled by GDevelop.

**Half period**
Change the half period (time between flashes) of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Operator
    - Parameter 3 (🔢 Number): Value

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Stop flashing opacity**
Stop flashing opacity of an object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

### Behavior conditions

**Half period**
Compare the half period (time between flashes) of the object.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Is object flashing opacity**
Check if an object is flashing opacity.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior

    > Technical note: parameter 2 are internal parameters handled by GDevelop.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.FlashOpacity::HalfPeriodTime()` | Return the half period (time between flashes) of the object. ||


---

*This page is an auto-generated reference page about the **Flash object** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).