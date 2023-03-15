---
title: Timers and time
---
# Timers and time

Actions and conditions to run timers, get the current time or modify the time scale (speed at which the game is running - useful for slow motion effects). [Read more explanations about it.](https://wiki.gdevelop.io/gdevelop5/all-features/timers-and-time)

## Actions

**Time scale**  
Change the time scale of the scene.

**Pause a scene timer**  
Pause a scene timer.

**Delete a scene timer**  
Delete a scene timer from memory.

**Start (or reset) a scene timer**  
Reset the specified scene timer, if the timer doesn't exist it's created and started.

**Unpause a scene timer**  
Unpause a scene timer.

**Wait X seconds**  
Waits a number of seconds before running the next actions (and sub-events).

## Conditions

**Value of a scene timer**  
Compare the elapsed time of a scene timer. This condition doesn't start the timer.

**Time scale**  
Compare the time scale of the scene.

**Scene timer paused**  
Test if the specified scene timer is paused.

## Expressions

^ Expression ^ Description ^  ^
| `Time(string)` | Current time ||
|:::| _string_ | Hour: hour - Minutes: min - Seconds: sec - Day of month: mday - Months since January: mon - Year since 1900: year - Days since Sunday: wday - Days since Jan 1st: yday - Timestamp (ms): timestamp" |
| `TimeDelta()` | Time elapsed since the last frame rendered on screen ||
| `TimeFromStart()` | Time elapsed since the beginning of the scene ||
| `TimeScale()` | Returns the time scale of the scene. ||
| `TimerElapsedTime(identifier)` | Value of a scene timer ||
|:::| _identifier_ | Timer's name |

---
*This page is an auto-generated reference page about the **Timers and time** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).