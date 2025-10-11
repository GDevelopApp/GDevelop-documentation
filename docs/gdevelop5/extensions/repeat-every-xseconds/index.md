# Repeat every X seconds

<img src="https://resources.gdevelop-app.com/assets/Icons/repeat.svg" class="extension-icon"></img>
Trigger an event every X seconds.

**Authors and contributors** to this experimental extension: [arthuro555](https://gd.games/arthuro555), [VegeTato](https://gd.games/VegeTato), [D8H](https://gd.games/D8H).

---

Convenience conditions, actions and behaviors for timers to trigger a condition every X seconds.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Reset repetition count of a scene timer**  
Reset repetition count of a scene timer.

??? quote "See parameters"

    - Parameter 1 (string): Timer name used to loop

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

## Conditions

**Repeat with a scene timer**  
Triggers every X seconds.

??? quote "See parameters"

    - Parameter 1 (string): Timer name used to loop
    - Parameter 2 (🔢 Number): Duration in seconds between each repetition

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

**Repeat with a scene timer X times**  
Triggers every X seconds X amount of times.

??? quote "See parameters"

    - Parameter 1 (string): Timer name used to loop
    - Parameter 2 (🔢 Number): Duration in seconds between each repetition
    - Parameter 3 (🔢 Number): The limit of loops
      Maximum nuber of repetition (-1 to repeat forever).

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

**Repetition number of a scene timer**  
Compare the number of times the timer has repeated.

??? quote "See parameters"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare
    - Parameter 3 (string): Timer name used to loop

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `RepeatEveryXSeconds::Repetition(string)` | Return the number of times the timer has repeated. ||
| | _string_ | Timer name used to loop |

## Repeat every X seconds 

Allows to repeat an object timer every X seconds. 

### Behavior actions

**Reset repetition count of an object timer**  
Reset repetition count of an object timer.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (string): Timer name used to loop

    > Technical note: parameter 3 are internal parameters handled by GDevelop.

### Behavior conditions

**Repeat with an object timer**  
Triggers every X seconds.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (string): Timer name used to loop
    - Parameter 3 (🔢 Number): Duration in seconds between each repetition

    > Technical note: parameter 4 are internal parameters handled by GDevelop.

**Repeat with an object timer X times**  
Triggers every X seconds X amount of times.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (string): Timer name used to loop
    - Parameter 3 (🔢 Number): Duration in seconds between each repetition
    - Parameter 4 (🔢 Number): The limit of loops
      Maximum nuber of repetition (-1 to repeat forever).

    > Technical note: parameter 5 are internal parameters handled by GDevelop.

**Repetition number of an object timer**  
Compare the number of times the timer has repeated.

??? quote "See parameters"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare
    - Parameter 4 (string): Timer name used to loop

    > Technical note: parameter 5 are internal parameters handled by GDevelop.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.RepeatTimer::Repetition(string)` | Return the number of times the timer has repeated. ||
| | _string_ | Timer name used to loop |


---

*This page is an auto-generated reference page about the **Repeat every X seconds** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).