# Countdown timer (deprecated)

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/Line Hero Pack/Master/SVG/UI Essentials/a87576ab3a35744221b26f87e4409ec174fb8fb79435b181232c40c29ac7340e_UI Essentials_sand_clock_time.svg" class="extension-icon"></img>
A timer against the clock to create timer challenges in your projects. Countdown functionality.

**Authors and contributors** to this experimental extension: [CuriosVoult](https://gd.games/CuriosVoult).

!!! warning
    This is an extension made by a community member and it only got through a
    light review by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of fully reviewed extensions.

---

This extension provides a timer against the clock to create timed challenges in your projects. You can set an initial time in seconds and then start the timer to count down. The extension includes actions to start or reset the timer, stop it at zero or allow negative numbers, and get the time remaining on the timer via an expression. With this extension, you will be able to easily add countdown functionality.

This extension is deprecated. Prefer using a timer and a substraction like in the countdown timer example ([open the project online](https://editor.gdevelop.io/?project=example://count-down-timer)).

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Restart the countdown timer**  
Reset the countdown to its initial value.

??? quote "See parameters & details"

    - Parameter 1 (string): Clock name

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `CountdownTimer::RestartCountdown`.

**Set the countdown of the clock**  
Set the countdown timer in seconds.

??? quote "See parameters & details"

    - Parameter 1 (string): Clock name
    - Parameter 2 (🔢 Number): Time remaining in seconds

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `CountdownTimer::SetCountdown`.

**Start countdown timer**  
Starts the countdown from the value set previously.

??? quote "See parameters & details"

    - Parameter 1 (string): Clock name
    - Parameter 2 (❓ Yes or No): Allow negative numbers

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this action internal type (in GDevelop JSON) is `CountdownTimer::StartCountdown`.

## Conditions

**Countdown timer is in x sec**  
Check if the countdown timer has reached a specific time in seconds.

??? quote "See parameters & details"

    - Parameter 1 (string): Clock name
    - Parameter 2 (🔢 Number): Time in seconds

    > Technical note: parameters 0, 3 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `CountdownTimer::IsTimerAtTime`.

**The countdown timer has ended**  
Check if the countdown timer has reached zero.

??? quote "See parameters & details"

    - Parameter 1 (string): Clock name

    > Technical note: parameters 0, 2 are internal parameters handled by GDevelop.

    > Technical note: this condition internal type (in GDevelop JSON) is `CountdownTimer::IsTimerFinished`.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `CountdownTimer::InitialConfigurationValue(string)` | Get the initial setting time value of the clock. ||
| | _string_ | Clock name |
| `CountdownTimer::RemainingTime(string)` | Get the remaining time of the countdown timer. ||
| | _string_ | Clock name |


---

*This page is an auto-generated reference page about the **Countdown timer (deprecated)** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).