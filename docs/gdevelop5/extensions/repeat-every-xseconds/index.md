# Repeat every X seconds

<img src="https://resources.gdevelop-app.com/assets/Icons/repeat.svg" class="extension-icon"></img>
This allows to trigger an event every X seconds.

**Authors and contributors** to this community extension: [arthuro555](https://gd.games/arthuro555), [VegeTato](https://gd.games/VegeTato).

---

Convenience conditions, actions and behaviors for timers to trigger a condition every X seconds.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.

## Conditions

**Repeat every X seconds**  
Triggers every X seconds.

**Repeat every X seconds in X number**  
Triggers every X seconds X amount of times.



## Repeat every X seconds 

Allows to repeat an object timer every X seconds. 

### Behavior actions

**Pause a recurring timer**  
Pauses a recurring timer.

**Reset the limit**  
Allows to trigger the recurring timer X times again.

**Resume a recurring timer**  
Resumes a paused recurring timer.

**An internal counter property**  
Change the property value for the an internal counter.

**How many times should the timer trigger? -1 for forever. property**  
Change the property value for the how many times should the timer trigger? -1 for forever..

**The time between each trigger (in seconds) property**  
Change the property value for the the time between each trigger (in seconds).

**The name of the timer to repeat property**  
Change the property value for the the name of the timer to repeat.

### Behavior conditions

**An internal counter property**  
Compare the property value for the an internal counter.

**How many times should the timer trigger? -1 for forever. property**  
Compare the property value for the how many times should the timer trigger? -1 for forever..

**The time between each trigger (in seconds) property**  
Compare the property value for the the time between each trigger (in seconds).

**The name of the timer to repeat property**  
Compare the property value for the the name of the timer to repeat.

**Repeat every X seconds**  
Triggers every X seconds, where X is defined in the behavior properties.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.RepeatTimer::PropertyCounter()` | Return the property value for the an internal counter. ||
| `Object.RepeatTimer::PropertyLimit()` | Return the property value for the how many times should the timer trigger? -1 for forever.. ||
| `Object.RepeatTimer::PropertyTimerLength()` | Return the property value for the the time between each trigger (in seconds). ||
| `Object.RepeatTimer::PropertyTimerName()` | Return the property value for the the name of the timer to repeat. ||

---

*This page is an auto-generated reference page about the **Repeat every X seconds** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).