# Timers and time Reference

Actions and conditions to start, pause or reset scene timers, modify the time scale (speed at which the game is running - useful for slow motion effects). Also contains an action that wait for a delay before running the next actions and sub-events and expressions to read the time scale, time delta of the last frame or timer elapsed time. [Read more explanations about it.](/gdevelop5/all-features/timers-and-time)

## Actions

**Time scale**  
Change the time scale of the scene.

??? quote "See parameters & details"

    - Parameter 1 (🔢 Number): Scale (1: Default, 2: 2x faster, 0.5: 2x slower...)

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ChangeTimeScale`.

**Pause a scene timer**  
Pause a scene timer.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Timer's name

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `PauseTimer`.

**Delete a scene timer**  
Delete a scene timer from memory.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Timer's name

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `RemoveTimer`.

**Start (or reset) a scene timer**  
Reset the specified scene timer, if the timer doesn't exist it's created and started.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Timer's name

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `ResetTimer`.

**Unpause a scene timer**  
Unpause a scene timer.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Timer's name

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `UnPauseTimer`.

**Wait X seconds**  
Waits a number of seconds before running the next actions (and sub-events).

??? quote "See parameters & details"

    - Parameter 0 (🔢 Number): Time to wait in seconds

    > Technical note: this action internal type (in GDevelop JSON) is `Wait`.


## Conditions

**Value of a scene timer**  
Compare the elapsed time of a scene timer. This condition doesn't start the timer and will always be false if the timer was not started previously (whatever the comparison being made).

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Timer's name
    - Parameter 2: 🟰 Relational operator
    - Parameter 3 (🔢 Number): Time in seconds

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `CompareTimer`.

**Time scale**  
Compare the time scale of the scene.

??? quote "See parameters & details"

    - Parameter 1: 🟰 Relational operator
    - Parameter 2 (🔢 Number): Time scale (1 by default)

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `TimeScale`.

**Scene timer paused**  
Test if the specified scene timer is paused.

??? quote "See parameters & details"

    - Parameter 1 (🔤 Name (String)): Timer's name

    > Technical note: parameter 0 is an internal parameter handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `TimerPaused`.


## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `Time(string)` | Gives the current time ||
| | _🔤 String_ | - Hour of the day: "hour"- Minutes: "min"- Seconds: "sec"- Day of month: "mday"- Months since January: "mon"- Year since 1900: "year"- Days since Sunday: "wday"- Days since Jan 1st: "yday"- Timestamp (ms): "timestamp" |
| `TimeDelta()` | Time elapsed since the last frame rendered on screen ||
| `TimeFromStart()` | Time elapsed since the beginning of the scene (in seconds). ||
| `TimeScale()` | Returns the time scale of the scene. ||
| `TimerElapsedTime(string)` | Value of a scene timer (in seconds) ||
| | _🔤 Name (String)_ | Timer's name |



---

The Timers and time extension is always installed in all GDevelop projects: there is no need to add it from the Project Manager.

*This page is an auto-generated reference page about the **Timers and time** feature of [GDevelop, the open-source, AI-powered, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).