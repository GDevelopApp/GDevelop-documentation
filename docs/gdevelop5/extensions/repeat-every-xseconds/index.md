# Repeat every X seconds

<img src="https://resources.gdevelop-app.com/assets/Icons/repeat.svg" class="extension-icon"></img>
Trigger an action repeatedly at a configurable time interval in seconds.

**Authors and contributors** to this extension: [arthuro555](https://gd.games/arthuro555), [VegeTato](https://gd.games/VegeTato), [D8H](https://gd.games/D8H).

---

Convenience conditions, actions and behaviors for timers to trigger a condition every X seconds.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Reset repetition count of a scene timer**  
Reset repetition count of a scene timer.

??? quote "See parameters & details"

    - Parameter 1 (🔤 String): Timer name used to loop

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `RepeatEveryXSeconds::DeleteTimer`.


## Conditions

**Repeat with a scene timer**  
Triggers every X seconds.

??? quote "See parameters & details"

    - Parameter 1 (🔤 String): Timer name used to loop
    - Parameter 2 (🔢 Number): Duration in seconds between each repetition

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `RepeatEveryXSeconds::Repeat`.

**Repeat with a scene timer X times**  
Triggers every X seconds X amount of times.

??? quote "See parameters & details"

    - Parameter 1 (🔤 String): Timer name used to loop
    - Parameter 2 (🔢 Number): Duration in seconds between each repetition
    - Parameter 3 (🔢 Number): The limit of loops
      Maximum nuber of repetition (-1 to repeat forever).

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `RepeatEveryXSeconds::RepeatXTimes`.

**Repetition number of a scene timer**  
Compare the number of times the timer has repeated.

??? quote "See parameters & details"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Value to compare
    - Parameter 3 (🔤 String): Timer name used to loop

    > Technical note: parameters 0, 4 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `RepeatEveryXSeconds::Repetition`.


## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `RepeatEveryXSeconds::Repetition(string)` | Return the number of times the timer has repeated. ||
| | _🔤 String_ | Timer name used to loop |

## Repeat every X seconds 

Allows to repeat an object timer every X seconds. 

### Behavior properties

- **How many times should the timer trigger? -1 for forever.** (🔢 Number). Default value is `-1`.
- **The time between each trigger (in seconds)** (🔢 Number). Default value is `1`.
- **The name of the timer to repeat** (🔤 String). Default value is `MyTimer`.

??? quote "See internal technical details"


    - **How many times should the timer trigger? -1 for forever.** is stored as `Limit` (Number). Default value is `-1`.
    - **The time between each trigger (in seconds)** is stored as `TimerLength` (Number). Default value is `1`.
    - **The name of the timer to repeat** is stored as `TimerName` (String). Default value is `MyTimer`.

### Behavior actions

**Reset repetition count of an object timer**  
Reset repetition count of an object timer.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 String): Timer name used to loop

    > Technical note: parameter 3 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `RepeatEveryXSeconds::RepeatTimer::DeleteTimer`.


### Behavior conditions

**Repeat with an object timer**  
Triggers every X seconds.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 String): Timer name used to loop
    - Parameter 3 (🔢 Number): Duration in seconds between each repetition

    > Technical note: parameter 4 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `RepeatEveryXSeconds::RepeatTimer::Repeat2`.

**Repeat with an object timer X times**  
Triggers every X seconds X amount of times.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2 (🔤 String): Timer name used to loop
    - Parameter 3 (🔢 Number): Duration in seconds between each repetition
    - Parameter 4 (🔢 Number): The limit of loops
      Maximum nuber of repetition (-1 to repeat forever).

    > Technical note: parameter 5 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `RepeatEveryXSeconds::RepeatTimer::RepeatXTimes`.

**Repetition number of an object timer**  
Compare the number of times the timer has repeated.

??? quote "See parameters & details"

    - Parameter 0: 👾 Object
    - Parameter 1: 🧩 Behavior
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Value to compare
    - Parameter 4 (🔤 String): Timer name used to loop

    > Technical note: parameter 5 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `RepeatEveryXSeconds::RepeatTimer::Repetition`.


### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.RepeatTimer::Repetition(string)` | Return the number of times the timer has repeated. ||
| | _🔤 String_ | Timer name used to loop |


---

*This page is an auto-generated reference page about the **Repeat every X seconds** extension for [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop extensions here](/gdevelop5/extensions).