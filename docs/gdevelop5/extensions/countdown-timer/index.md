# Countdown timer (deprecated)

<img src="https://asset-resources.gdevelop.io/public-resources/Icons/Line Hero Pack/Master/SVG/UI Essentials/a87576ab3a35744221b26f87e4409ec174fb8fb79435b181232c40c29ac7340e_UI Essentials_sand_clock_time.svg" class="extension-icon"></img>
A timer against the clock to create timer challenges in your projects. Countdown functionality.

**Authors and contributors** to this community extension: [CuriosVoult](https://gd.games/CuriosVoult).

!!! warning
    This is an extension made by a community member — but not reviewed
    by the GDevelop extension team. As such, we can't guarantee it
    meets all the quality standards of official extensions. In case of
    doubt, contact the author to know more about what the extension
    does or inspect its content before using it.

---

This extension provides a timer against the clock to create timed challenges in your projects. You can set an initial time in seconds and then start the timer to count down. The extension includes actions to start or reset the timer, stop it at zero or allow negative numbers, and get the time remaining on the timer via an expression. With this extension, you will be able to easily add countdown functionality.

This extension is deprecated. Prefer using a timer and a substraction like in the countdown timer example ([open the project online](https://editor.gdevelop.io/?project=example://count-down-timer)).

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Actions

**Restart the countdown timer**  
Reset the countdown to its initial value.

**Set the countdown of the clock**  
Set the countdown timer in seconds.

**Start countdown timer**  
Starts the countdown from the value set previously.

## Conditions

**Countdown timer is in x sec**  
Check if the countdown timer has reached a specific time in seconds.

**The countdown timer has ended**  
Check if the countdown timer has reached zero.

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `CountdownTimer::InitialConfigurationValue(string)` | Get the initial setting time value of the clock. ||
| | _string_ | Clock name |
| `CountdownTimer::RemainingTime(string)` | Get the remaining time of the countdown timer. ||
| | _string_ | Clock name |


---

*This page is an auto-generated reference page about the **Countdown timer (deprecated)** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).